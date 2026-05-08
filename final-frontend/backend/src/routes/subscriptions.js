const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/subscriptions/summary
router.get('/summary', authenticateToken, async (req, res) => {
  try {
    const now = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);

    const [activeCount, totalRevenue, expiringSoon] = await Promise.all([
      prisma.subscription.count({ where: { status: 'active' } }),
      prisma.subscription.aggregate({ 
        where: { status: 'active' },
        _sum: { amount: true }
      }),
      prisma.subscription.count({ 
        where: { 
          status: 'active',
          expiresAt: { lte: nextWeek, gte: now }
        } 
      })
    ]);

    res.json({
      activeCount,
      totalRevenue: totalRevenue._sum.amount || 0,
      expiringSoon
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

// GET /api/subscriptions
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const where = {};
    if (status) where.status = status;

    const [subs, total] = await Promise.all([
      prisma.subscription.findMany({ where, skip, take: parseInt(limit), orderBy: { createdAt: 'desc' } }),
      prisma.subscription.count({ where }),
    ]);

    res.json({ subscriptions: subs, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/subscriptions
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { tagId, ownerName, ownerPhone, planName, amount, validityDays } = req.body;
    const days = validityDays || 365;
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    const sub = await prisma.subscription.create({
      data: { tagId: tagId || null, ownerName, ownerPhone, planName, amount: parseFloat(amount), expiresAt },
    });

    // Also update tag expiry if tagId provided
    if (tagId) {
      await prisma.tag.update({ where: { id: tagId }, data: { planType: planName, expiresAt } });
    }

    res.status(201).json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/subscriptions/:id/status
router.patch('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    const sub = await prisma.subscription.update({ where: { id: req.params.id }, data: { status } });
    res.json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
