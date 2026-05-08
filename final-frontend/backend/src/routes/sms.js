const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/sms – paginated SMS logs
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, status, tagCode } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const where = {};
    if (status) where.status = status;
    if (tagCode) where.tag = { tagCode: { contains: tagCode } };

    const [smsLogs, total] = await Promise.all([
      prisma.smsLog.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: { tag: { select: { tagCode: true, ownerName: true } } },
      }),
      prisma.smsLog.count({ where }),
    ]);

    const safeLogs = smsLogs.map(s => ({
      ...s,
      recipient: maskPhone(s.recipient),
    }));

    res.json({ smsLogs: safeLogs, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/sms/stats
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const [total, sent, failed] = await Promise.all([
      prisma.smsLog.count(),
      prisma.smsLog.count({ where: { status: 'sent' } }),
      prisma.smsLog.count({ where: { status: 'failed' } }),
    ]);
    res.json({ total, sent, failed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function maskPhone(phone) {
  if (!phone) return '';
  return phone.replace(/(\d{2})\d{6}(\d{2})/, '$1xxxxxx$2');
}

module.exports = router;
