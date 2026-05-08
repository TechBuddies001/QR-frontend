const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/dashboard/stats – main dashboard stats
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const now = new Date();
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      totalTags, activeTags, premiumTags, basicTags, expiringTags,
      totalScans, totalCalls, totalSms, recentScans, scansTrend
    ] = await Promise.all([
      prisma.tag.count(),
      prisma.tag.count({ where: { isActive: true } }),
      prisma.tag.count({ where: { planType: 'premium' } }),
      prisma.tag.count({ where: { planType: 'basic' } }),
      prisma.tag.count({ where: { expiresAt: { lte: sevenDaysFromNow }, isActive: true } }),
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
        totalTags,
        activeTags,
        inactiveTags: totalTags - activeTags,
        premiumTags,
        basicTags,
        standardTags: totalTags - premiumTags - basicTags,
        expiringTags,
        totalScans,
        totalCalls,
        totalSms,
        scansLast30Days: scansTrend,
      },
      recentScans,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/dashboard/alerts – expiring tags alert
router.get('/alerts', authenticateToken, async (req, res) => {
  try {
    const sevenDaysFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const expiringTags = await prisma.tag.findMany({
      where: { expiresAt: { lte: sevenDaysFromNow }, isActive: true },
      orderBy: { expiresAt: 'asc' },
      take: 20,
      select: { id: true, tagCode: true, ownerName: true, planType: true, expiresAt: true, assetType: true },
    });
    res.json({ expiringTags });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
