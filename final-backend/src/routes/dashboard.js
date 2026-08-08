const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// ─────────────────────────────────────────────────────────────────
// GET /api/dashboard/stats – legacy endpoint (kept for compat)
// ─────────────────────────────────────────────────────────────────
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const now = new Date();
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo   = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      totalTags, activeTags, premiumTags, basicTags, expiringTags, assignedTags,
      totalScans, totalCalls, totalSms, recentScans, scansTrend,
    ] = await Promise.all([
      prisma.tag.count(),
      prisma.tag.count({ where: { isActive: true } }),
      prisma.tag.count({ where: { planType: 'premium' } }),
      prisma.tag.count({ where: { planType: 'basic' } }),
      prisma.tag.count({ where: { expiresAt: { lte: sevenDaysFromNow }, isActive: true } }),
      prisma.tag.count({ where: { userId: { not: null } } }),
      prisma.scanLog.count(),
      prisma.callLog.count(),
      prisma.smsLog.count(),
      prisma.scanLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { tag: { select: { tagCode: true, ownerName: true, assetType: true } } },
      }),
      prisma.scanLog.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    ]);

    res.json({
      stats: {
        totalTags, activeTags,
        inactiveTags: totalTags - activeTags,
        premiumTags, basicTags,
        standardTags: totalTags - premiumTags - basicTags,
        expiringTags, assignedTags,
        inventoryTags: totalTags - assignedTags,
        totalScans, totalCalls, totalSms,
        scansLast30Days: scansTrend,
      },
      recentScans,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/dashboard/consumer – Consumer Safety Dashboard
// ─────────────────────────────────────────────────────────────────
router.get('/consumer', authenticateToken, async (req, res) => {
  try {
    const now              = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const sevenDaysFromNow  = new Date(now.getTime() +  7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo    = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      totalAssets,
      activeUsers,
      pendingActivation,
      renewalsDue,
      dealerCount,
      expiringTags,
      recentActivations,
      scansThisMonth,
      premiumCount,
      basicCount,
    ] = await Promise.all([
      // Total Safety Assets = all tags ever created
      prisma.tag.count(),

      // Active Users = users who have activated a tag
      prisma.user.count({ where: { isActive: true } }).catch(() =>
        prisma.tag.count({ where: { userId: { not: null } } })
      ),

      // Pending Activation = dummy/unactivated tags (isDummy = true means stock)
      prisma.tag.count({ where: { isDummy: true } }),

      // Renewals due in next 30 days
      prisma.subscription.count({
        where: {
          status: 'active',
          expiresAt: { lte: thirtyDaysFromNow, gte: now },
        },
      }).catch(() => prisma.tag.count({
        where: { expiresAt: { lte: thirtyDaysFromNow, gte: now }, isActive: true },
      })),

      // Dealer Sales = number of active partner dealers
      prisma.partner.count(),

      // Expiring within 7 days (alert)
      prisma.tag.count({ where: { expiresAt: { lte: sevenDaysFromNow }, isActive: true } }),

      // Recent activations (last 5 tags that were activated, i.e. isDummy=false, has userId)
      prisma.tag.findMany({
        where: { isDummy: false, userId: { not: null } },
        orderBy: { updatedAt: 'desc' },
        take: 5,
        select: {
          id: true, tagCode: true, ownerName: true,
          assetType: true, planType: true, updatedAt: true,
        },
      }).catch(() => []),

      // Scans this month
      prisma.scanLog.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),

      // Premium & Basic breakdown
      prisma.tag.count({ where: { planType: 'premium' } }),
      prisma.tag.count({ where: { planType: 'basic' } }),
    ]);

    res.json({
      totalAssets,
      activeUsers,
      pendingActivation,
      renewalsDue,
      dealerCount,
      expiringTags,
      scansThisMonth,
      premiumCount,
      basicCount,
      recentActivations,
    });
  } catch (err) {
    console.error('[Consumer Dashboard]', err);
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/dashboard/business – Business QR Dashboard
// ─────────────────────────────────────────────────────────────────
router.get('/business', authenticateToken, async (req, res) => {
  try {
    const now           = new Date();
    const thirtyDays    = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      companies,
      totalProducts,
      qrLive,
      totalScans,
      fakeScanProducts,
      landingPages,
      renewalsDue,
      recentScans,
      scansThisMonth,
      batchRaw,
    ] = await Promise.all([
      // Companies = B2B partners
      prisma.partner.count(),

      // Products (QR Generated = total products)
      prisma.product.count(),

      // QR Live = active products
      prisma.product.count({ where: { isActive: true } }),

      // Total Scans = all product scan logs
      prisma.productScanLog.count(),

      // Fake Scan Alerts = products flagged as counterfeit
      prisma.product.count({ where: { isCounterfeit: true } }),

      // Landing Pages = categories (each has a landing page)
      prisma.category.count(),

      // Subscription Renewals due in 30 days
      prisma.subscription.count({
        where: {
          status: 'active',
          expiresAt: { lte: thirtyDays, gte: now },
        },
      }).catch(() => 0),

      // Recent product scans
      prisma.productScanLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 6,
        include: {
          product: {
            select: { productCode: true, name: true, brand: true, batchNumber: true },
          },
        },
      }).catch(() => []),

      // Scans this month
      prisma.productScanLog.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),

      // Batch-wise analytics: group products by batchNumber
      prisma.product.groupBy({
        by: ['batchNumber'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
        take: 10,
      }).catch(() => []),
    ]);

    // Unique Scans = distinct IPs (approximation via raw count on distinct ip)
    let uniqueScans = 0;
    try {
      const uniqueResult = await prisma.productScanLog.groupBy({
        by: ['scannerIp'],
        _count: { id: true },
      });
      uniqueScans = uniqueResult.length;
    } catch (_) {
      uniqueScans = Math.floor(totalScans * 0.65); // fallback estimate
    }

    // Enrich batch analytics with scan counts
    const batchAnalytics = await Promise.all(
      batchRaw.map(async (batch) => {
        const batchNum = batch.batchNumber || 'Unassigned';
        let scanCount = 0;
        try {
          const products = await prisma.product.findMany({
            where: { batchNumber: batch.batchNumber },
            select: { id: true },
          });
          const productIds = products.map((p) => p.id);
          scanCount = await prisma.productScanLog.count({
            where: { productId: { in: productIds } },
          });
        } catch (_) {}
        return {
          batchNumber: batchNum,
          products: batch._count.id,
          scans: scanCount,
        };
      })
    );

    res.json({
      companies,
      totalProducts,
      qrGenerated: totalProducts, // QR Generated = total products created
      qrLive,
      totalScans,
      uniqueScans,
      fakeScanAlerts: fakeScanProducts,
      landingPages,
      renewalsDue,
      scansThisMonth,
      batchAnalytics,
      recentScans,
    });
  } catch (err) {
    console.error('[Business Dashboard]', err);
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/dashboard/alerts – expiring tags alert
// ─────────────────────────────────────────────────────────────────
router.get('/alerts', authenticateToken, async (req, res) => {
  try {
    const sevenDaysFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const expiringTags = await prisma.tag.findMany({
      where: { expiresAt: { lte: sevenDaysFromNow }, isActive: true },
      orderBy: { expiresAt: 'asc' },
      take: 20,
      select: {
        id: true, tagCode: true, ownerName: true,
        planType: true, expiresAt: true, assetType: true,
      },
    });
    res.json({ expiringTags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
