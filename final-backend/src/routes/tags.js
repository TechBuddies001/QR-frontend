const express = require('express');
const path = require('path');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { upload, uploadDoc } = require('../middleware/upload');
const { generateQRCode } = require('../services/qrGenerator');
const fs = require('fs');
const csv = require('csv-parser');
const archiver = require('archiver');

// GET /api/tags – list all tags (admin)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, search, status, planType, assetType } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (search) {
      where.OR = [
        { tagCode: { contains: search } },
        { ownerName: { contains: search } },
        { ownerPhone: { contains: search } },
      ];
    }
    if (status === 'active') where.isActive = true;
    if (status === 'inactive') where.isActive = false;
    if (status === 'lost') where.isLost = true;
    if (planType) where.planType = planType;
    if (assetType) where.assetType = assetType;

    const [tags, total] = await Promise.all([
      prisma.tag.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          _count: { select: { scanLogs: true, callLogs: true } },
          sponsor: { select: { name: true, logo: true } },
        },
        // Never return phone numbers in list
      }),
      prisma.tag.count({ where }),
    ]);

    // Mask phone numbers in list
    const safeTags = tags.map(t => ({
      ...t,
      ownerPhone: maskPhone(t.ownerPhone),
      emergencyContact: t.emergencyContact ? maskPhone(t.emergencyContact) : null,
    }));

    res.json({ tags: safeTags, total, page: parseInt(page), limit: parseInt(limit), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tags/:id – single tag details (admin)
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const tag = await prisma.tag.findUnique({
      where: { id: req.params.id },
      include: {
        _count: { select: { scanLogs: true, callLogs: true, smsLogs: true } },
        sponsor: true,
        admin: { select: { name: true, email: true } },
      },
    });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    res.json({ tag });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tags – create new tag + generate QR(s)
router.post('/', authenticateToken, upload.single('photo'), [
  body('ownerName').notEmpty(),
  body('ownerPhone').matches(/^[6-9]\d{9}$/).withMessage('Valid Indian mobile number required'),
  body('tagCode').optional().isAlphanumeric(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const {
      ownerName, ownerPhone, emergencyContact, customMessage,
      address, assetType, customAssetType, planType, tagCode: customCode, sponsorId, designType, designTypes: requestedDesigns,
    } = req.body;

    // Generate unique tag code if not provided
    const tagCode = customCode || generateTagCode(assetType);

    // Check uniqueness
    const existing = await prisma.tag.findUnique({ where: { tagCode } });
    if (existing) return res.status(409).json({ error: 'Tag code already exists' });

    // Handle multiple designs if requested
    const designsToGenerate = Array.isArray(requestedDesigns) && requestedDesigns.length > 0 
      ? requestedDesigns 
      : [designType || 'standard'];

    // Resolve Sponsor
    let sponsorObj = null;
    if (sponsorId) {
      sponsorObj = await prisma.sponsor.findUnique({ where: { id: sponsorId } });
    }

    const qrs = {};
    for (const dt of designsToGenerate) {
      qrs[dt] = await generateQRCode(tagCode, dt, sponsorObj, assetType, customAssetType);
    }

    // Set primary design (first one generated)
    const primaryDesignType = designsToGenerate[0];
    const primaryQr = qrs[primaryDesignType];

    // Set expiry based on plan  
    const planDays = { basic: 365, standard: 730, premium: 1825 };
    const days = planDays[planType] || 365;
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    const tag = await prisma.tag.create({
      data: {
        tagCode,
        qrUrl: primaryQr.publicUrl,
        qrImagePath: primaryQr.qrImageUrl,
        ownerName,
        ownerPhone,
        emergencyContact: emergencyContact || null,
        customMessage: customMessage || null,
        address: address || null,
        assetType: assetType || 'vehicle',
        planType: planType || 'basic',
        designType: primaryDesignType,
        ownerPhoto: req.file ? `/uploads/photos/${req.file.filename}` : null,
        adminId: req.admin.id,
        expiresAt,
        sponsorId: sponsorId || null,
        customAssetType: customAssetType || null,
      },
    });

    res.status(201).json({ 
      tag, 
      qr: primaryQr, // legacy support
      qrs: Object.keys(qrs).reduce((acc, dt) => {
        acc[dt] = { base64: qrs[dt].base64, url: qrs[dt].publicUrl, imagePath: qrs[dt].qrImageUrl, qrSvgUrl: qrs[dt].qrSvgUrl };
        return acc;
      }, {})
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/tags/:id – update tag
router.put('/:id', authenticateToken, upload.single('photo'), async (req, res) => {
  try {
    const {
      ownerName, ownerPhone, emergencyContact, customMessage,
      address, assetType, planType, isActive, isLost, sponsorId,
    } = req.body;

    const updateData = {};
    if (ownerName !== undefined) updateData.ownerName = ownerName;
    if (ownerPhone !== undefined) updateData.ownerPhone = ownerPhone;
    if (emergencyContact !== undefined) updateData.emergencyContact = emergencyContact;
    if (customMessage !== undefined) updateData.customMessage = customMessage;
    if (address !== undefined) updateData.address = address;
    if (assetType !== undefined) updateData.assetType = assetType;
    if (planType !== undefined) updateData.planType = planType;
    if (isActive !== undefined) updateData.isActive = isActive === 'true' || isActive === true;
    if (isLost !== undefined) updateData.isLost = isLost === 'true' || isLost === true;
    if (sponsorId !== undefined) updateData.sponsorId = sponsorId || null;
    if (req.file) updateData.ownerPhoto = `/uploads/photos/${req.file.filename}`;

    const tag = await prisma.tag.update({ where: { id: req.params.id }, data: updateData });
    
    // If sponsor changed, regenerate QR
    if (sponsorId !== undefined) {
      const refreshedTag = await prisma.tag.findUnique({ where: { id: tag.id }, include: { sponsor: true } });
      const qr = await generateQRCode(refreshedTag.tagCode, refreshedTag.designType, refreshedTag.sponsor, refreshedTag.assetType);
      await prisma.tag.update({
        where: { id: tag.id },
        data: { qrImagePath: qr.qrImageUrl, qrUrl: qr.publicUrl }
      });
    }

    res.json({ tag, message: 'Tag updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/tags/:id/toggle – toggle active/inactive
router.patch('/:id/toggle', authenticateToken, async (req, res) => {
  try {
    const tag = await prisma.tag.findUnique({ where: { id: req.params.id } });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    const updated = await prisma.tag.update({ where: { id: req.params.id }, data: { isActive: !tag.isActive } });
    res.json({ tag: updated, message: `Tag ${updated.isActive ? 'activated' : 'deactivated'}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/tags/:id/lost – mark as lost/found
router.patch('/:id/lost', authenticateToken, async (req, res) => {
  try {
    const { isLost } = req.body;
    const tag = await prisma.tag.update({ where: { id: req.params.id }, data: { isLost: !!isLost } });
    res.json({ tag, message: `Tag marked as ${tag.isLost ? 'LOST' : 'found'}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/tags/:id
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.scanLog.deleteMany({ where: { tagId: req.params.id } });
    await prisma.callLog.deleteMany({ where: { tagId: req.params.id } });
    await prisma.smsLog.deleteMany({ where: { tagId: req.params.id } });
    await prisma.tag.delete({ where: { id: req.params.id } });
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tags/:id/regenerate-qr - Support specific design generation
router.post('/:id/regenerate-qr', authenticateToken, async (req, res) => {
  try {
    const { designType, customAssetType } = req.body;
    const tag = await prisma.tag.findUnique({ where: { id: req.params.id } });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });

    // Generate for requested design or default to tag's current design
    const targetDesign = designType || tag.designType || 'standard';
    
    // Fetch sponsor if linked
    const fullTag = await prisma.tag.findUnique({ 
      where: { id: req.params.id },
      include: { sponsor: true }
    });

    const qr = await generateQRCode(tag.tagCode, targetDesign, fullTag.sponsor, tag.assetType, customAssetType || tag.customAssetType);

    // Only update DB if designType was NOT explicitly passed (standard regeneration)
    // or if we want to change the primary design. 
    // For batch downloads, we just want the base64.
    if (!designType) {
      await prisma.tag.update({ 
        where: { id: req.params.id }, 
        data: { qrImagePath: qr.qrImageUrl, qrUrl: qr.publicUrl } 
      });
    }

    res.json({ 
      qr: { base64: qr.base64, url: qr.publicUrl, imagePath: qr.qrImageUrl, qrSvgUrl: qr.qrSvgUrl },
      designType: targetDesign
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tags/:id/scan-history
router.get('/:id/scan-history', authenticateToken, async (req, res) => {
  try {
    const scans = await prisma.scanLog.findMany({
      where: { tagId: req.params.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json({ scans });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tags/bulk – bulk create from CSV
router.post('/bulk', authenticateToken, uploadDoc.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No CSV file uploaded' });

  const results = [];
  const errors = [];
  const filePath = req.file.path;

  // Usage: CSV should have columns: ownerName, ownerPhone, assetType, planType
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        const createdTags = [];
        const planDays = { basic: 365, standard: 730, premium: 1825 };
        
        // Use designTypes from body if provided, else fallback to CSV designType or default
        const bodyDesignTypes = req.body.designTypes ? JSON.parse(req.body.designTypes) : null;

        for (const row of results) {
          try {
            const { ownerName, ownerPhone, assetType, planType, emergencyContact, designType: rowDesign } = row;
            
            if (!ownerName || !ownerPhone) {
              errors.push({ row, error: 'Missing required fields' });
              continue;
            }

            const designsToGenerate = Array.isArray(bodyDesignTypes) && bodyDesignTypes.length > 0
              ? bodyDesignTypes
              : [rowDesign || 'standard'];

            const tagCode = generateTagCode(assetType || 'vehicle');
            
            // Generate ALL requested designs
            const qrs = {};
            for (const dt of designsToGenerate) {
              qrs[dt] = await generateQRCode(tagCode, dt, null, assetType);
            }

            const primaryDesignType = designsToGenerate[0];
            const primaryQr = qrs[primaryDesignType];

            const days = planDays[planType] || 365;
            const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

            const tag = await prisma.tag.create({
              data: {
                tagCode,
                qrUrl: primaryQr.publicUrl,
                qrImagePath: primaryQr.qrImageUrl,
                ownerName,
                ownerPhone,
                emergencyContact: emergencyContact || null,
                assetType: assetType || 'vehicle',
                planType: planType || 'basic',
                designType: primaryDesignType,
                adminId: req.admin.id,
                expiresAt,
              }
            });
            createdTags.push(tag);
          } catch (e) {
            errors.push({ row, error: e.message });
          }
        }
        
        // Clean up uploaded file
        fs.unlinkSync(filePath);

        res.json({ 
          message: `Bulk processing complete. ${createdTags.length} tags created.`,
          successCount: createdTags.length,
          errorCount: errors.length,
          tagIds: createdTags.map(t => t.id),
          errors 
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
});

const PDFDocument = require('pdfkit');

// Batch and Bulk PDF/ZIP Generation Routes
// ----------------------------------------

// POST /api/tags/:id/batch-zip – download multiple designs/quantities as ZIP
router.post('/:id/batch-zip', authenticateToken, async (req, res) => {
  try {
    const { quantities, designTypes } = req.body; // { standard: 5, circle: 10 }
    const tag = await prisma.tag.findUnique({ where: { id: req.params.id } });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });

    const qtyConfig = quantities || { standard: 1 };
    const designsToProcess = Array.isArray(designTypes) && designTypes.length > 0 
      ? designTypes 
      : Object.keys(qtyConfig);

    const archive = archiver('zip', { zlib: { level: 9 } });
    res.attachment(`V_KAWACH_${tag.tagCode}_BATCH.zip`);
    archive.pipe(res);

    // Fetch sponsor
    const fullTag = await prisma.tag.findUnique({ where: { id: tag.id }, include: { sponsor: true } });

    for (const designType of designsToProcess) {
      const qty = parseInt(quantities[designType]) || 0;
      if (qty <= 0) continue;

      // Generate for this design type
      const qr = await generateQRCode(tag.tagCode, designType, fullTag.sponsor, tag.assetType, fullTag.customAssetType);
      const fullPath = path.join(__dirname, '..', '..', qr.qrImageUrl);

      if (fs.existsSync(fullPath)) {
        for (let i = 0; i < qty; i++) {
          archive.file(fullPath, { name: `V_KAWACH_${tag.tagCode}_${designType.toUpperCase()}_COPY_${i + 1}.png` });
        }
      }
    }
    
    archive.finalize();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tags/bulk-download – download multiple QR codes as ZIP with quantities
router.post('/bulk-download', authenticateToken, async (req, res) => {
  try {
    const { ids, quantities, format, designTypes } = req.body; 
    const isSvg = format === 'svg';
    if (!ids || !Array.isArray(ids)) return res.status(400).json({ error: 'Array of tag IDs required' });

    // Use quantities and filter by designTypes if provided
    const qtyConfig = quantities || { standard: 1 };
    const designsToProcess = Array.isArray(designTypes) && designTypes.length > 0 
      ? designTypes 
      : Object.keys(qtyConfig);

    const tagsRaw = await prisma.tag.findMany({
      where: { id: { in: ids } },
      select: { id: true, tagCode: true, qrImagePath: true, designType: true }
    });

    // Sort tags to match the order of IDs provided (preserves upload sequence)
    const tags = ids.map(id => tagsRaw.find(t => t.id === id)).filter(Boolean);

    if (tags.length === 0) return res.status(404).json({ error: 'No tags found' });

    const archive = archiver('zip', { zlib: { level: 9 } });
    res.attachment(`BULK_V_KAWACH_BATCH_${new Date().getTime()}_${isSvg ? 'SVG' : 'PNG'}.zip`);
    archive.pipe(res);

    let sequence = 1;
    for (const tag of tags) {
      // Resolve sponsor for this specific tag
      const tagWithSponsor = await prisma.tag.findUnique({ where: { tagCode: tag.tagCode }, include: { sponsor: true } });
      const paddedSeq = sequence.toString().padStart(3, '0');

      for (const designType of designsToProcess) {
        const qty = parseInt(qtyConfig[designType]) || 0;
        if (qty <= 0) continue;

        // Ensure QR is generated for this specific design
        const qr = await generateQRCode(tag.tagCode, designType, tagWithSponsor.sponsor, tagWithSponsor.assetType, tagWithSponsor.customAssetType);
        const fullPath = path.join(__dirname, '..', '..', isSvg ? qr.qrSvgUrl : qr.qrImageUrl);
        const ext = isSvg ? 'svg' : 'png';

        if (fs.existsSync(fullPath)) {
          for (let i = 0; i < qty; i++) {
            archive.file(fullPath, { 
              name: `${paddedSeq}_${tag.tagCode}/${designType.toUpperCase()}_COPY_${i + 1}.${ext}` 
            });
          }
        }
      }
      sequence++;
    }
    archive.finalize();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tags/bulk-pdf – download bulk tags as PDF with quantities
router.post('/bulk-pdf', authenticateToken, async (req, res) => {
  try {
    const { ids, quantities, designTypes } = req.body;
    if (!ids || !Array.isArray(ids)) return res.status(400).json({ error: 'Array of tag IDs required' });

    const qtyConfig = quantities || { standard: 1 };
    const designsToProcess = Array.isArray(designTypes) && designTypes.length > 0 
      ? designTypes 
      : Object.keys(qtyConfig);
    const tags = await prisma.tag.findMany({
      where: { id: { in: ids } },
      select: { tagCode: true, designType: true, assetType: true }
    });

    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=bulk_tags_batch.pdf');
    doc.pipe(res);

    for (const tag of tags) {
      for (const designType of designsToProcess) {
        const qty = parseInt(qtyConfig[designType]) || 0;
        if (qty <= 0) continue;

        const tagWithFullInfo = await prisma.tag.findUnique({ where: { tagCode: tag.tagCode } });
        const qr = await generateQRCode(tag.tagCode, designType, null, tag.assetType, tagWithFullInfo.customAssetType); // PDF usage
        const fullPath = path.join(__dirname, '..', '..', qr.qrImageUrl);

        if (fs.existsSync(fullPath)) {
          for (let i = 0; i < qty; i++) {
            doc.addPage();
            const isCircle = designType === 'circle';
            const isLandscape = designType === 'landscape';
            
            let imgWidth, imgHeight;
            if (isCircle) {
              imgWidth = 400; imgHeight = 400;
            } else if (isLandscape) {
              imgWidth = 500; imgHeight = 315; // Credit card aspect in PDF
            } else {
              imgWidth = 400; imgHeight = 550;
            }
            
            doc.image(fullPath, (doc.page.width - imgWidth) / 2, 50, { width: imgWidth });
            doc.fontSize(12).text(`ID: ${tag.tagCode} | Design: ${designType.toUpperCase()} | Copy ${i + 1}`, 0, isLandscape ? 400 : 650, { align: 'center' });
          }
        }
      }
    }
    doc.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Helpers
function generateTagCode(assetType = 'vehicle') {
  const prefix = { vehicle: 'VH', pet: 'PT', person: 'PS', other: 'OT' }[assetType] || 'TS';
  const suffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${suffix}`;
}

function maskPhone(phone) {
  if (!phone) return '';
  return phone.replace(/(\d{2})\d{6}(\d{2})/, '$1xxxxxx$2');
}

module.exports = router;
