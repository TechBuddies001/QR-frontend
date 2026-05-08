const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

// GET /api/sponsors
router.get('/', authenticateToken, async (req, res) => {
  try {
    const sponsors = await prisma.sponsor.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { tags: true } } },
    });
    res.json({ sponsors });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/sponsors
router.post('/', authenticateToken, upload.single('logo'), async (req, res) => {
  try {
    const { name, website, description } = req.body;
    const sponsor = await prisma.sponsor.create({
      data: {
        name,
        website: website || null,
        description: description || null,
        logo: req.file ? `/uploads/photos/${req.file.filename}` : null,
      },
    });
    res.status(201).json({ sponsor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/sponsors/:id
router.put('/:id', authenticateToken, upload.single('logo'), async (req, res) => {
  try {
    const { name, website, description, isActive } = req.body;
    const data = {};
    if (name) data.name = name;
    if (website !== undefined) data.website = website;
    if (description !== undefined) data.description = description;
    if (isActive !== undefined) data.isActive = isActive === 'true' || isActive === true;
    if (req.file) data.logo = `/uploads/photos/${req.file.filename}`;
    const sponsor = await prisma.sponsor.update({ where: { id: req.params.id }, data });
    res.json({ sponsor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/sponsors/:id
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    // Unlink tags first
    await prisma.tag.updateMany({ where: { sponsorId: req.params.id }, data: { sponsorId: null } });
    await prisma.sponsor.delete({ where: { id: req.params.id } });
    res.json({ message: 'Sponsor deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
