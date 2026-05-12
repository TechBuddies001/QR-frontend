const express = require('express');
const path = require('path');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { upload, uploadDoc } = require('../middleware/upload');
const { generateQRCode } = require('../services/qrGenerator');
const fs = require('fs');
const csv = require('csv-parser');
const archiver = require('archiver');
const ExcelJS = require('exceljs');

// Helper to generate random code
const generateProductCode = () => {
    return 'PRD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

// Helper to handle potential duplicate form fields
const sanitizeString = (val) => {
    if (Array.isArray(val)) return val[val.length - 1];
    return val;
};

// GET /api/products - List products (public/admin)
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 20, search, type } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const where = {};
        if (search) {
            where.OR = [
                { productCode: { contains: search } },
                { name: { contains: search } },
                { brand: { contains: search } },
            ];
        }
        if (type) {
            where.type = type;
        }
        const [products, total] = await Promise.all([
            prisma.product.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
                include: { _count: { select: { scanLogs: true } }, category: true }
            }),
            prisma.product.count({ where })
        ]);
        res.json({ products, total, page: parseInt(page), limit: parseInt(limit) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/products/bulk - Bulk generation
// CRITICAL: This MUST be above /api/products/:id to avoid being intercepted as an ID
router.post('/bulk', authenticateToken, uploadDoc.any(), async (req, res) => {
    const file = req.files ? req.files.find(f => f.fieldname === 'file' || f.mimetype.includes('csv') || f.originalname.endsWith('.csv')) : null;
    if (!file) return res.status(400).json({ error: "CSV file is required", receivedFields: req.files?.map(f => f.fieldname) });
    
    const results = [];
    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                const createdIds = [];
                for (const row of results) {
                    let productCode = row.productCode || generateProductCode();
                    
                    // Check if code exists to avoid unique constraint failure
                    const existing = await prisma.product.findUnique({ where: { productCode } });
                    if (existing) {
                        productCode = generateProductCode(); // Generate new one if clash
                    }

                    const standardKeys = ["productCode", "name", "brand", "batchNumber", "mfgDate", "expDate", "mrp"];
                    const dynamicFields = [];
                    
                    Object.keys(row).forEach(key => {
                        if (!standardKeys.includes(key) && row[key]) {
                            dynamicFields.push({ label: key, value: row[key] });
                        }
                    });

                    const product = await prisma.product.create({
                        data: {
                            productCode,
                            name: row.name || "Bulk Product",
                            brand: row.brand,
                            batchNumber: row.batchNumber,
                            mfgDate: row.mfgDate ? new Date(row.mfgDate) : null,
                            expDate: row.expDate ? new Date(row.expDate) : null,
                            mrp: parseFloat(row.mrp) || 0,
                            dynamicData: JSON.stringify(dynamicFields),
                            adminId: req.admin.id,
                            qrUrl: `/scan/${productCode}`,
                        }
                    });
                    const qrResult = await generateQRCode(productCode, 'raw', null, 'product');
                    const updatedProduct = await prisma.product.update({
                        where: { id: product.id },
                        data: { qrImagePath: qrResult.qrImageUrl }
                    });
                    products.push(updatedProduct);
                    createdIds.push(product.id);
                }
                res.json({ success: true, count: createdIds.length, productIds: createdIds, products: products }); 
            } catch (err) {
                res.status(500).json({ error: err.message });
            } finally {
                if (file && file.path) fs.unlinkSync(file.path);
            }
        });
});

// GET /api/products/:id - Get product details (public/admin)
router.get('/:id', async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: req.params.id },
            include: { scanLogs: { orderBy: { createdAt: 'desc' }, take: 50 } }
        });
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json({ product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/products/:id/qr - Get or generate QR for a specific design (like minimal for FMCG)
router.get('/:id/qr', authenticateToken, async (req, res) => {
    try {
        const { design, download } = req.query;
        const targetDesign = design || 'standard';

        const product = await prisma.product.findUnique({
            where: { id: req.params.id }
        });

        if (!product) return res.status(404).json({ error: 'Product not found' });

        // Construct path
        const fileName = `qr_${targetDesign}_${product.productCode}.png`;
        const filePath = path.join(__dirname, '..', '..', 'uploads', 'qrcodes', fileName);

        // Ensure directory exists
        const qrDir = path.join(__dirname, '..', '..', 'uploads', 'qrcodes');
        if (!fs.existsSync(qrDir)) fs.mkdirSync(qrDir, { recursive: true });

        // Helper to send file
        const sendQR = (absPath) => {
            if (download === 'true') {
                res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
            }
            res.sendFile(absPath);
        };

        // If file exists, send it
        if (fs.existsSync(filePath)) {
            return sendQR(filePath);
        }

        // If not, generate it (product type)
        const qr = await generateQRCode(product.productCode, targetDesign, null, 'product');
        sendQR(path.join(__dirname, '..', '..', qr.qrImageUrl));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/products/:id - Update product
router.post('/:id', authenticateToken, upload.fields([{ name: 'photos', maxCount: 5 }]), async (req, res) => {
    try {
        const { 
            name, brand, batchNumber, mfgDate, expDate, mrp, dynamicData, isActive 
        } = req.body;

        const updateData = {
            name: sanitizeString(name),
            brand: sanitizeString(brand),
            batchNumber: sanitizeString(batchNumber),
            mfgDate: mfgDate ? new Date(mfgDate) : undefined,
            expDate: expDate ? new Date(expDate) : undefined,
            mrp: mrp ? parseFloat(mrp) : undefined,
            dynamicData: sanitizeString(dynamicData),
            isActive: isActive === 'true' || isActive === true ? true : (isActive === 'false' || isActive === false ? false : undefined)
        };

        if (req.files && req.files['photos']) {
            const newPhotos = [];
            req.files['photos'].forEach(file => {
                newPhotos.push(`/uploads/photos/${file.filename}`);
            });
            updateData.photos = JSON.stringify(newPhotos);
        }

        const product = await prisma.product.update({
            where: { id: req.params.id },
            data: updateData
        });

        res.json({ product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/products - Create single product
router.post('/', authenticateToken, upload.fields([
    { name: 'photos', maxCount: 5 },
    { name: 'banner', maxCount: 1 },
    { name: 'logo', maxCount: 1 }
]), async (req, res) => {
    try {
        const { 
            name, brand, batchNumber, mfgDate, expDate, mrp, dynamicData, type, categoryId 
        } = req.body;

        const productCode = req.body.productCode || generateProductCode();
        
        const photos = [];
        if (req.files && req.files['photos']) {
            req.files['photos'].forEach(file => {
                photos.push(`/uploads/photos/${file.filename}`);
            });
        }

        const banner = req.files && req.files['banner'] ? `/uploads/photos/${req.files['banner'][0].filename}` : null;
        const logo = req.files && req.files['logo'] ? `/uploads/photos/${req.files['logo'][0].filename}` : null;

        const product = await prisma.product.create({
            data: {
                productCode,
                name: sanitizeString(name) || "Generic Product",
                brand: sanitizeString(brand),
                batchNumber: sanitizeString(batchNumber),
                mfgDate: mfgDate ? new Date(mfgDate) : null,
                expDate: expDate ? new Date(expDate) : null,
                mrp: parseFloat(mrp) || 0,
                dynamicData: sanitizeString(dynamicData) || "[]",
                photos: JSON.stringify(photos),
                banner,
                logo,
                type: type || "FMCG",
                categoryId: categoryId || null,
                adminId: req.admin.id,
                qrUrl: `/scan/${productCode}`,
            }
        });

        const qrPath = await generateQRCode(productCode, 'raw', null, 'product');
        const updatedProduct = await prisma.product.update({
            where: { id: product.id },
            data: { qrImagePath: qrPath.qrImageUrl }
        });

        res.json({ ...updatedProduct, qrUrl: `/scan/${productCode}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/products/:id - Delete product
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        await prisma.product.delete({
            where: { id: req.params.id }
        });
        res.json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/verify/:code', async (req, res) => {
    try {
        // 1. Try to find in Products table
        let product = await prisma.product.findUnique({
            where: { productCode: req.params.code },
        });

        if (product) {
            await prisma.productScanLog.create({
                data: {
                    productId: product.id,
                    scannerIp: req.ip,
                    userAgent: req.headers['user-agent']
                }
            });
            return res.json({ product });
        }

        // 2. If not found in Products, try to find in Tag table (Safety Tags)
        const tag = await prisma.tag.findUnique({
            where: { tagCode: req.params.code },
            include: { sponsor: true }
        });

        if (tag) {
            // Log the scan in the Tag's scanLog
            await prisma.scanLog.create({
                data: {
                    tagId: tag.id,
                    scannerIp: req.ip,
                    userAgent: req.headers['user-agent']
                }
            });

            // Transform Tag to look like a Product for the premium UI
            const transformedTag = {
                id: tag.id,
                productCode: tag.tagCode,
                name: tag.assetType === 'vehicle' ? `Vehicle Security ID` : 
                      (tag.assetType === 'pet' ? 'Pet Security ID' : 
                      (tag.assetType === 'person' ? 'Personal Security ID' : 'Safety Tag')),
                brand: "V-KAWACH SECURITY",
                batchNumber: tag.planType.toUpperCase() + " PLAN",
                mfgDate: tag.createdAt,
                expDate: tag.expiresAt,
                mrp: 0,
                dynamicData: tag.dynamicData || "[]",
                photos: tag.photos || "[]",
                banner: tag.sponsor?.logo || null,
                logo: null,
                type: "SAFETY_TAG",
                ownerName: tag.ownerName, // Add extra tag info
                ownerPhone: tag.ownerPhone,
                emergencyContact: tag.emergencyContact
            };

            return res.json({ product: transformedTag });
        }

        // 3. Not found in either
        res.status(404).json({ error: "Code not recognized by Tarkshya Validation Systems" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
