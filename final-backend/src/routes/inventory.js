const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { logActivity, onProductGoLive } = require('../services/notificationService');

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/stats  – Dashboard stats for inventory overview
// ─────────────────────────────────────────────────────────────────
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const [
      totalTags,
      activeTags,
      unassignedTags,
      partnerAssignedTags,
      totalProducts,
      liveProducts,
      inactiveProducts,
    ] = await Promise.all([
      prisma.tag.count(),
      prisma.tag.count({ where: { isActive: true, userId: { not: null } } }),
      prisma.tag.count({ where: { userId: null, partnerId: null } }),
      prisma.tag.count({ where: { partnerId: { not: null }, userId: null } }),
      prisma.product.count(),
      prisma.product.count({ where: { isActive: true } }),
      prisma.product.count({ where: { isActive: false } }),
    ]);

    res.json({
      safetyTags: { total: totalTags, active: activeTags, unassigned: unassignedTags, partnerStock: partnerAssignedTags },
      b2bQr: { total: totalProducts, live: liveProducts, inactive: inactiveProducts },
    });
  } catch (err) {
    console.error('[Inventory Stats]', err);
    res.status(500).json({ error: 'Failed to fetch inventory stats' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/safety-tags  – Safety Tag inventory list
// ─────────────────────────────────────────────────────────────────
router.get('/safety-tags', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, search, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (search) {
      where.OR = [
        { tagCode: { contains: search } },
        { ownerName: { contains: search } },
      ];
    }
    if (status === 'active') { where.isActive = true; where.userId = { not: null }; }
    if (status === 'unassigned') { where.userId = null; where.partnerId = null; }
    if (status === 'partner_stock') { where.partnerId = { not: null }; where.userId = null; }
    if (status === 'inactive') { where.isActive = false; where.userId = { not: null }; }

    const [tags, total] = await Promise.all([
      prisma.tag.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { updatedAt: 'desc' },
        include: {
          partner: { select: { name: true, type: true } },
          user: { select: { name: true } },
        },
      }),
      prisma.tag.count({ where }),
    ]);

    const safeTags = tags.map(t => ({
      id: t.id,
      tagCode: t.tagCode,
      ownerName: t.ownerName || null,
      ownerPhone: t.ownerPhone ? maskPhone(t.ownerPhone) : null,
      assetType: t.assetType || 'general',
      planType: t.planType || 'basic',
      isActive: t.isActive,
      isDummy: t.isDummy,
      partnerId: t.partnerId,
      partnerName: t.partner?.name || null,
      userId: t.userId,
      status: !t.userId && !t.partnerId
        ? 'Unassigned'
        : !t.userId && t.partnerId
        ? 'Partner Stock'
        : t.isActive
        ? 'Active'
        : 'Inactive',
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));

    res.json({ tags: safeTags, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('[Safety Tags Inventory]', err);
    res.status(500).json({ error: 'Failed to fetch safety tags' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/b2b-qr  – B2B QR Products inventory list
// ─────────────────────────────────────────────────────────────────
router.get('/b2b-qr', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, search, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (search) {
      where.OR = [
        { productCode: { contains: search } },
        { name: { contains: search } },
        { brand: { contains: search } },
      ];
    }
    if (status === 'live') where.isActive = true;
    if (status === 'inactive') where.isActive = false;
    if (status === 'counterfeit') where.isCounterfeit = true;

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { updatedAt: 'desc' },
        include: {
          _count: { select: { scanLogs: true } },
          category: { select: { name: true } },
        },
      }),
      prisma.product.count({ where }),
    ]);

    const result = products.map(p => ({
      id: p.id,
      productCode: p.productCode,
      name: p.name,
      brand: p.brand || null,
      batchNumber: p.batchNumber || null,
      type: p.type,
      categoryName: p.category?.name || null,
      isActive: p.isActive,
      isCounterfeit: p.isCounterfeit,
      qrImagePath: p.qrImagePath || null,
      totalScans: p._count.scanLogs,
      status: p.isActive ? 'Live' : 'Inactive',
      mfgDate: p.mfgDate,
      expDate: p.expDate,
      mrp: p.mrp,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    res.json({ products: result, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('[B2B QR Inventory]', err);
    res.status(500).json({ error: 'Failed to fetch B2B QR inventory' });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/inventory/go-live/:productId  – Set product to Live
// ─────────────────────────────────────────────────────────────────
router.post('/go-live/:productId', authenticateToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const { notes } = req.body;
    const actor = req.user;
    const ipAddress = req.ip || req.headers['x-forwarded-for'];
    const userAgent = req.headers['user-agent'];

    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    if (product.isActive) return res.status(400).json({ error: 'Product is already Live' });

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { isActive: true },
    });

    await onProductGoLive({
      product: updatedProduct,
      actorId: actor.id,
      actorName: actor.name || actor.email || 'Admin',
      actorRole: actor.role || 'admin',
      ipAddress,
      userAgent,
    });

    if (notes) {
      await logActivity({
        actorId: actor.id,
        actorName: actor.name || actor.email || 'Admin',
        actorRole: actor.role || 'admin',
        action: 'GO_LIVE',
        entityType: 'product',
        entityId: product.id,
        entityCode: product.productCode,
        notes,
        ipAddress,
        userAgent,
      });
    }

    res.json({ message: `Product "${product.name}" is now Live!`, product: updatedProduct });
  } catch (err) {
    console.error('[Go Live]', err);
    res.status(500).json({ error: 'Failed to set product live' });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/inventory/set-inactive/:productId  – Set product to Inactive
// ─────────────────────────────────────────────────────────────────
router.post('/set-inactive/:productId', authenticateToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const actor = req.user;

    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { isActive: false },
    });

    await logActivity({
      actorId: actor.id,
      actorName: actor.name || actor.email || 'Admin',
      actorRole: actor.role || 'admin',
      action: 'STATUS_CHANGED',
      entityType: 'product',
      entityId: product.id,
      entityCode: product.productCode,
      prevStatus: 'live',
      newStatus: 'inactive',
    });

    res.json({ message: `Product "${product.name}" has been deactivated.`, product: updatedProduct });
  } catch (err) {
    console.error('[Set Inactive]', err);
    res.status(500).json({ error: 'Failed to deactivate product' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/activity-log  – Get audit trail
// ─────────────────────────────────────────────────────────────────
router.get('/activity-log', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 50, entityId, action } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (entityId) where.entityId = entityId;
    if (action) where.action = action;

    const [logs, total] = await Promise.all([
      prisma.activityLog.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.activityLog.count({ where }),
    ]);

    res.json({ logs, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('[Activity Log]', err);
    res.status(500).json({ error: 'Failed to fetch activity log' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/categories – Returns all product categories dynamically
// ─────────────────────────────────────────────────────────────────
router.get('/categories', authenticateToken, async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: { isActive: true },
      select: { id: true, name: true, description: true, icon: true, color: true },
      orderBy: { name: 'asc' },
    });
    res.json({ categories });
  } catch (err) {
    console.error('[Inventory Categories]', err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/inventory/go-live-generic – Universal Go-Live for ANY item (Tag, Product, etc.)
// ─────────────────────────────────────────────────────────────────
router.post('/go-live-generic', authenticateToken, async (req, res) => {
  try {
    const { entityType, entityId, notes } = req.body; // entityType: 'tag' | 'product'
    const actor = req.user;
    const ipAddress = req.ip || req.headers['x-forwarded-for'];
    const userAgent = req.headers['user-agent'];

    if (!entityId || !entityType) {
      return res.status(400).json({ error: 'entityType and entityId are required' });
    }

    let updatedItem;
    let code = '';
    let name = '';

    if (entityType === 'product') {
      const product = await prisma.product.findUnique({ where: { id: entityId } });
      if (!product) return res.status(404).json({ error: 'Product not found' });
      if (product.isActive) return res.status(400).json({ error: 'Product is already Live' });

      updatedItem = await prisma.product.update({
        where: { id: entityId },
        data: { isActive: true },
      });
      code = product.productCode;
      name = product.name;

      await onProductGoLive({
        product: updatedItem,
        actorId: actor.id,
        actorName: actor.name || actor.email || 'Admin',
        actorRole: actor.role || 'admin',
        ipAddress,
        userAgent,
      });
    } else if (entityType === 'tag') {
      const tag = await prisma.tag.findUnique({ where: { id: entityId } });
      if (!tag) return res.status(404).json({ error: 'Tag not found' });
      if (tag.isActive) return res.status(400).json({ error: 'Tag is already Active' });

      updatedItem = await prisma.tag.update({
        where: { id: entityId },
        data: { isActive: true },
      });
      code = tag.tagCode;
      name = tag.ownerName || tag.tagCode;

      await logActivity({
        actorId: actor.id,
        actorName: actor.name || actor.email || 'Admin',
        actorRole: actor.role || 'admin',
        action: 'GO_LIVE',
        entityType: 'tag',
        entityId: tag.id,
        entityCode: tag.tagCode,
        prevStatus: 'inactive',
        newStatus: 'live',
        ipAddress,
        userAgent,
        notes: notes || 'Tag set to Live',
      });
    } else {
      return res.status(400).json({ error: 'Unsupported entity type' });
    }

    res.json({ message: `Item "${name || code}" is now Live!`, item: updatedItem });
  } catch (err) {
    console.error('[Universal Go Live]', err);
    res.status(500).json({ error: 'Failed to execute Go Live' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/logistics/summary – Master logistics breakdown
// ─────────────────────────────────────────────────────────────────
router.get('/logistics/summary', authenticateToken, async (req, res) => {
  try {
    const [
      warehouseTags,
      distributorTags,
      dealerTags,
      warehouseProducts,
      distributorProducts,
      dealerProducts,
      partners,
    ] = await Promise.all([
      prisma.tag.count({ where: { lifecycleStage: 'WAREHOUSE' } }),
      prisma.tag.count({ where: { lifecycleStage: 'DISTRIBUTOR' } }),
      prisma.tag.count({ where: { lifecycleStage: 'DEALER' } }),
      prisma.product.count({ where: { lifecycleStage: 'WAREHOUSE' } }),
      prisma.product.count({ where: { lifecycleStage: 'DISTRIBUTOR' } }),
      prisma.product.count({ where: { lifecycleStage: 'DEALER' } }),
      prisma.partner.findMany({
        select: { id: true, name: true, type: true, state: true, district: true },
        where: { isActive: true },
      }),
    ]);

    const defaultWarehouse = "Chandausi Warehouse";
    const distributors = partners.filter(p => p.type === 'distributor');
    const dealers = partners.filter(p => p.type === 'channel_partner' || p.type === 'dealer');

    res.json({
      stages: {
        warehouse: warehouseTags + warehouseProducts,
        distributor: distributorTags + distributorProducts,
        dealer: dealerTags + dealerProducts,
      },
      tags: { warehouse: warehouseTags, distributor: distributorTags, dealer: dealerTags },
      products: { warehouse: warehouseProducts, distributor: distributorProducts, dealer: dealerProducts },
      defaultWarehouse,
      distributors,
      dealers,
    });
  } catch (err) {
    console.error('[Logistics Summary]', err);
    res.status(500).json({ error: 'Failed to fetch logistics summary' });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/inventory/logistics/dispatch – Bulk logistics assignment
// ─────────────────────────────────────────────────────────────────
router.post('/logistics/dispatch', authenticateToken, async (req, res) => {
  try {
    const {
      entityType = 'both',
      itemIds = [],
      batchNumber,
      warehouseLocation = 'Chandausi Warehouse',
      distributorId,
      dealerId,
      targetStage = 'WAREHOUSE',
    } = req.body;

    let updatedTagsCount = 0;
    let updatedProductsCount = 0;

    const updateData = {
      lifecycleStage: targetStage,
      warehouseLocation,
      ...(distributorId && { distributorId }),
      ...(dealerId && { dealerId }),
    };

    if (entityType === 'tag' || entityType === 'both') {
      const tagWhere = {};
      if (batchNumber) tagWhere.batchNumber = batchNumber;
      else if (itemIds.length > 0) tagWhere.id = { in: itemIds };

      if (Object.keys(tagWhere).length > 0) {
        const resTags = await prisma.tag.updateMany({
          where: tagWhere,
          data: updateData,
        });
        updatedTagsCount = resTags.count;
      }
    }

    if (entityType === 'product' || entityType === 'both') {
      const prodWhere = {};
      if (batchNumber) prodWhere.batchNumber = batchNumber;
      else if (itemIds.length > 0) prodWhere.id = { in: itemIds };

      if (Object.keys(prodWhere).length > 0) {
        const resProds = await prisma.product.updateMany({
          where: prodWhere,
          data: updateData,
        });
        updatedProductsCount = resProds.count;
      }
    }

    res.json({
      message: `Logistics updated to ${targetStage}!`,
      updatedTagsCount,
      updatedProductsCount,
      targetStage,
      warehouseLocation,
    });
  } catch (err) {
    console.error('[Logistics Dispatch]', err);
    res.status(500).json({ error: 'Failed to execute logistics dispatch' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/inventory/printing/batches – Printing batch analytics
// ─────────────────────────────────────────────────────────────────
router.get('/printing/batches', authenticateToken, async (req, res) => {
  try {
    const [tagBatches, productBatches] = await Promise.all([
      prisma.tag.groupBy({
        by: ['batchNumber', 'printingStatus'],
        _count: { id: true },
        where: { batchNumber: { not: null } },
      }),
      prisma.product.groupBy({
        by: ['batchNumber', 'printingStatus'],
        _count: { id: true },
        where: { batchNumber: { not: null } },
      }),
    ]);

    const batchMap = {};

    tagBatches.forEach(b => {
      if (!b.batchNumber) return;
      if (!batchMap[b.batchNumber]) {
        batchMap[b.batchNumber] = { batchNumber: b.batchNumber, total: 0, printed: 0, pending: 0, type: 'Safety Tags' };
      }
      batchMap[b.batchNumber].total += b._count.id;
      if (b.printingStatus === 'PRINTED') batchMap[b.batchNumber].printed += b._count.id;
      else batchMap[b.batchNumber].pending += b._count.id;
    });

    productBatches.forEach(b => {
      if (!b.batchNumber) return;
      if (!batchMap[b.batchNumber]) {
        batchMap[b.batchNumber] = { batchNumber: b.batchNumber, total: 0, printed: 0, pending: 0, type: 'B2B QR' };
      } else {
        batchMap[b.batchNumber].type = 'Hybrid';
      }
      batchMap[b.batchNumber].total += b._count.id;
      if (b.printingStatus === 'PRINTED') batchMap[b.batchNumber].printed += b._count.id;
      else batchMap[b.batchNumber].pending += b._count.id;
    });

    res.json({ batches: Object.values(batchMap) });
  } catch (err) {
    console.error('[Printing Batches]', err);
    res.status(500).json({ error: 'Failed to fetch printing batches' });
  }
});

// ─────────────────────────────────────────────────────────────────
// POST /api/inventory/printing/update-status – Bulk printing status update
// ─────────────────────────────────────────────────────────────────
router.post('/printing/update-status', authenticateToken, async (req, res) => {
  try {
    const { batchNumber, itemIds = [], entityType = 'both', printingStatus = 'PRINTED' } = req.body;

    const updateData = {
      printingStatus,
      ...(printingStatus === 'PRINTED' && { lifecycleStage: 'PRINTED' }),
    };

    let tagCount = 0;
    let prodCount = 0;

    if (entityType === 'tag' || entityType === 'both') {
      const tagWhere = {};
      if (batchNumber) tagWhere.batchNumber = batchNumber;
      else if (itemIds.length) tagWhere.id = { in: itemIds };

      if (Object.keys(tagWhere).length > 0) {
        const resT = await prisma.tag.updateMany({ where: tagWhere, data: updateData });
        tagCount = resT.count;
      }
    }

    if (entityType === 'product' || entityType === 'both') {
      const prodWhere = {};
      if (batchNumber) prodWhere.batchNumber = batchNumber;
      else if (itemIds.length) prodWhere.id = { in: itemIds };

      if (Object.keys(prodWhere).length > 0) {
        const resP = await prisma.product.updateMany({ where: prodWhere, data: updateData });
        prodCount = resP.count;
      }
    }

    res.json({
      message: `Printing status updated to ${printingStatus}!`,
      updatedTagsCount: tagCount,
      updatedProductsCount: prodCount,
      printingStatus,
    });
  } catch (err) {
    console.error('[Printing Update Status]', err);
    res.status(500).json({ error: 'Failed to update printing status' });
  }
});

function maskPhone(phone) {
  if (!phone) return '';
  const str = phone.toString();
  if (str.length <= 4) return '****';
  return str.slice(0, 2) + '****' + str.slice(-2);
}

module.exports = router;


