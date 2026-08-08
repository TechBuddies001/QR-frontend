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

// POST /api/subscriptions/renew - Renew subscription & extend tag validity
router.post('/renew', authenticateToken, async (req, res) => {
  try {
    const { subscriptionId, tagId, validityDays = 365, amount = 0 } = req.body;
    const days = parseInt(validityDays);

    let targetTagId = tagId;
    let sub;

    if (subscriptionId) {
      sub = await prisma.subscription.findUnique({ where: { id: subscriptionId } });
      if (sub && sub.tagId) targetTagId = sub.tagId;
    }

    // Calculate new expiration: if current expiry > now, add to that; else add to now
    const baseDate = sub && sub.expiresAt && new Date(sub.expiresAt) > new Date()
      ? new Date(sub.expiresAt)
      : new Date();
    
    const newExpiresAt = new Date(baseDate.getTime() + days * 24 * 60 * 60 * 1000);

    if (sub) {
      sub = await prisma.subscription.update({
        where: { id: sub.id },
        data: {
          status: 'active',
          expiresAt: newExpiresAt,
          amount: parseFloat(amount) || sub.amount,
        },
      });
    } else if (targetTagId) {
      const tag = await prisma.tag.findUnique({ where: { id: targetTagId } });
      if (!tag) return res.status(404).json({ error: 'Tag not found' });
      sub = await prisma.subscription.create({
        data: {
          tagId: tag.id,
          ownerName: tag.ownerName || 'Tag Owner',
          ownerPhone: tag.ownerPhone || '',
          planName: tag.planType || 'basic',
          amount: parseFloat(amount) || 0,
          status: 'active',
          expiresAt: newExpiresAt,
        },
      });
    } else {
      return res.status(400).json({ error: 'subscriptionId or tagId is required' });
    }

    if (targetTagId) {
      await prisma.tag.update({
        where: { id: targetTagId },
        data: {
          expiresAt: newExpiresAt,
          isActive: true,
          lifecycleStage: 'RENEWED',
        },
      });
    }

    res.json({ message: 'Subscription renewed successfully!', subscription: sub, expiresAt: newExpiresAt });
  } catch (err) {
    console.error('[Renew Subscription]', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/subscriptions/reactivate - Reactivate expired subscription
router.post('/reactivate', authenticateToken, async (req, res) => {
  try {
    const { subscriptionId, tagId, validityDays = 365 } = req.body;
    const days = parseInt(validityDays);
    const newExpiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    let targetTagId = tagId;
    let sub;

    if (subscriptionId) {
      sub = await prisma.subscription.findUnique({ where: { id: subscriptionId } });
      if (sub && sub.tagId) targetTagId = sub.tagId;
    }

    if (sub) {
      sub = await prisma.subscription.update({
        where: { id: sub.id },
        data: {
          status: 'active',
          expiresAt: newExpiresAt,
        },
      });
    }

    if (targetTagId) {
      await prisma.tag.update({
        where: { id: targetTagId },
        data: {
          expiresAt: newExpiresAt,
          isActive: true,
          lifecycleStage: 'REACTIVATED',
        },
      });
    }

    res.json({ message: 'Subscription reactivated!', subscription: sub, expiresAt: newExpiresAt });
  } catch (err) {
    console.error('[Reactivate Subscription]', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/subscriptions/mark-expired - Scan & update expired subscriptions
router.post('/mark-expired', authenticateToken, async (req, res) => {
  try {
    const now = new Date();

    const expiredSubs = await prisma.subscription.updateMany({
      where: {
        status: 'active',
        expiresAt: { lt: now },
      },
      data: { status: 'expired' },
    });

    const expiredTags = await prisma.tag.updateMany({
      where: {
        isActive: true,
        expiresAt: { lt: now },
      },
      data: {
        isActive: false,
        lifecycleStage: 'EXPIRED',
      },
    });

    res.json({
      message: 'Expired items processed',
      expiredSubscriptionsCount: expiredSubs.count,
      expiredTagsCount: expiredTags.count,
    });
  } catch (err) {
    console.error('[Mark Expired]', err);
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/subscriptions/:id/status
router.patch('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    const sub = await prisma.subscription.update({ where: { id: req.params.id }, data: { status } });

    // Sync tag status
    if (sub.tagId) {
      await prisma.tag.update({
        where: { id: sub.tagId },
        data: {
          isActive: status === 'active',
          lifecycleStage: status === 'active' ? 'LIVE' : status === 'expired' ? 'EXPIRED' : 'DEACTIVATED',
        },
      });
    }

    res.json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

