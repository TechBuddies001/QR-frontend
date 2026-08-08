const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

// Middleware to ensure it's a user
const ensureUser = (req, res, next) => {
  if (!req.user && req.admin?.role !== 'admin') {
     // If admin is logged in, they can also see user dashboard stuff if needed, 
     // but primarily for users.
  }
  next();
};

// GET /api/user/dashboard - Get customer dashboard data
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const userId = req.user?.id || req.admin?.id; // Support testing with admin too
    
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const [tags, scanLogs, allOrders] = await Promise.all([
       prisma.tag.findMany({ 
         where: { userId: userId },
         include: { _count: { select: { scanLogs: true } } }
       }),
       prisma.scanLog.findMany({
         where: { tag: { userId: userId } },
         orderBy: { createdAt: 'desc' },
         take: 10,
         include: { tag: { select: { tagCode: true, assetType: true } } }
       }),
       prisma.order.findMany({
         include: { items: true },
         orderBy: { createdAt: 'desc' }
       })
    ]);

    const orders = allOrders.filter(o => 
      (user.email && o.customerEmail?.toLowerCase() === user.email.toLowerCase()) || 
      (user.phone && o.customerPhone === user.phone)
    );
    console.log("Dashboard fetch for:", user.email, "Found orders:", orders.length);

    res.json({
      user,
      stats: {
        activeTags: tags.filter(t => t.isActive).length,
        totalScans: tags.reduce((acc, t) => acc + t._count.scanLogs, 0)
      },
      tags,
      recentScans: scanLogs,
      orders
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/user/register-tag - Link a tag to user profile
router.post('/register-tag', authenticateToken, async (req, res) => {
  try {
    const { tagCode } = req.body;
    const userId = req.user?.id || req.admin?.id;

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag) return res.status(404).json({ error: 'Invalid Tag Code' });
    if (tag.userId) return res.status(400).json({ error: 'Tag already registered to another user' });

    const updatedTag = await prisma.tag.update({
      where: { id: tag.id },
      data: { userId }
    });

    res.json({ message: 'Tag successfully linked to your profile', tag: updatedTag });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/user/settings - Update profile, emergency contacts and password
router.post('/settings', authenticateToken, async (req, res) => {
  try {
    const { name, phone, currentPassword, newPassword } = req.body;
    const userId = req.user?.id || req.admin?.id;

    if (newPassword && currentPassword) {
        const bcrypt = require('bcryptjs');
        const userDb = await prisma.user.findUnique({ where: { id: userId } });
        const isValid = await bcrypt.compare(currentPassword, userDb.password);
        if (!isValid) return res.status(400).json({ error: "Invalid current password" });
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({ where: { id: userId }, data: { password: hashedPassword } });
    }

    const dataToUpdate = {};
    if (name) dataToUpdate.name = name;
    if (phone) dataToUpdate.phone = phone;

    const user = await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate
    });

    if (phone) {
      await prisma.tag.updateMany({
        where: { userId: userId },
        data: { emergencyContact: phone }
      });
    }

    res.json({ message: 'Settings updated successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/user/update-tag/:id - Update tag details (by owner)
router.put('/update-tag/:id', authenticateToken, upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'photos', maxCount: 5 }]), async (req, res) => {
  try {
    const userId = req.user?.id || req.admin?.id;
    const { id } = req.params;
    const { ownerName, emergencyContact, dynamicData } = req.body;

    // Verify ownership
    const tag = await prisma.tag.findUnique({ where: { id } });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    if (tag.userId !== userId && req.admin?.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized to update this tag' });
    }

    const updateData = {};
    if (ownerName !== undefined) updateData.ownerName = ownerName;
    if (emergencyContact !== undefined) updateData.emergencyContact = emergencyContact;
    if (dynamicData !== undefined) updateData.dynamicData = dynamicData;

    if (req.files?.photo) updateData.ownerPhoto = `/uploads/photos/${req.files.photo[0].filename}`;
    if (req.files?.photos) updateData.photos = JSON.stringify(req.files.photos.map(f => `/uploads/photos/${f.filename}`));

    const updatedTag = await prisma.tag.update({
      where: { id },
      data: updateData
    });

    res.json({ message: 'Tag updated successfully', tag: updatedTag });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
