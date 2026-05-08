const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/scan-history – global scan history
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, tagCode } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const where = {};
    if (tagCode) where.tag = { tagCode: { contains: tagCode } };

    const [scans, total] = await Promise.all([
      prisma.scanLog.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: { tag: { select: { tagCode: true, ownerName: true, assetType: true } } },
      }),
      prisma.scanLog.count({ where }),
    ]);

    res.json({ scans, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
