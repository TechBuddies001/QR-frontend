
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Get all users for admin
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        _count: {
          select: { tags: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Update user status (Active/Banned)
router.patch('/:id/status', async (req, res) => {
  try {
    const { isActive } = req.body;
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { isActive }
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user status' });
  }
});

module.exports = router;
