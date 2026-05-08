const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/calls – paginated call logs
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, status, tagCode } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const where = {};
    if (status) where.status = status;
    if (tagCode) where.tag = { tagCode: { contains: tagCode } };

    const [calls, total] = await Promise.all([
      prisma.callLog.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: { tag: { select: { tagCode: true, ownerName: true, assetType: true } } },
      }),
      prisma.callLog.count({ where }),
    ]);

    // Mask scanner phone
    const safeCalls = calls.map(c => ({
      ...c,
      scannerPhone: c.scannerPhone ? maskPhone(c.scannerPhone) : null,
    }));

    res.json({ calls: safeCalls, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/calls/stats
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const [total, connected, failed, missed] = await Promise.all([
      prisma.callLog.count(),
      prisma.callLog.count({ where: { status: 'connected' } }),
      prisma.callLog.count({ where: { status: 'failed' } }),
      prisma.callLog.count({ where: { status: 'missed' } }),
    ]);
    res.json({ total, connected, failed, missed, initiated: total - connected - failed - missed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function maskPhone(phone) {
  return phone.replace(/(\d{2})\d{6}(\d{2})/, '$1xxxxxx$2');
}

module.exports = router;
