const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// ─────────────────────────────────────────────────────────────────
// GET /api/notifications  – Get all notifications (latest first)
// ─────────────────────────────────────────────────────────────────
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 30, unreadOnly } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (unreadOnly === 'true') where.isRead = false;

    const [notifications, total, unreadCount] = await Promise.all([
      prisma.notification.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.notification.count({ where }),
      prisma.notification.count({ where: { isRead: false } }),
    ]);

    res.json({ notifications, total, unreadCount, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('[Notifications GET]', err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// ─────────────────────────────────────────────────────────────────
// GET /api/notifications/unread-count  – Quick unread badge count
// ─────────────────────────────────────────────────────────────────
router.get('/unread-count', authenticateToken, async (req, res) => {
  try {
    const count = await prisma.notification.count({ where: { isRead: false } });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch count' });
  }
});

// ─────────────────────────────────────────────────────────────────
// PATCH /api/notifications/mark-all-read  – Mark all as read
// NOTE: This MUST be defined BEFORE /:id/read to avoid Express
//       treating "mark-all-read" as the :id param.
// ─────────────────────────────────────────────────────────────────
router.patch('/mark-all-read', authenticateToken, async (req, res) => {
  try {
    const { count } = await prisma.notification.updateMany({
      where: { isRead: false },
      data: { isRead: true },
    });
    res.json({ message: `Marked ${count} notifications as read` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark all as read' });
  }
});

// ─────────────────────────────────────────────────────────────────
// PATCH /api/notifications/:id/read  – Mark single notification as read
// ─────────────────────────────────────────────────────────────────
router.patch('/:id/read', authenticateToken, async (req, res) => {
  try {
    const notification = await prisma.notification.update({
      where: { id: req.params.id },
      data: { isRead: true },
    });
    res.json({ notification });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark as read' });
  }
});

// ─────────────────────────────────────────────────────────────────
// DELETE /api/notifications/:id  – Delete a notification
// ─────────────────────────────────────────────────────────────────
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.notification.delete({ where: { id: req.params.id } });
    res.json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete notification' });
  }
});

module.exports = router;
