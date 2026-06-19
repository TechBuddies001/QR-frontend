const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const { authenticateToken } = require('../middleware/auth');

const prisma = new PrismaClient();

// GET all templates
router.get('/', authenticateToken, async (req, res) => {
  try {
    const templates = await prisma.qrTemplate.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ templates });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single template
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const template = await prisma.qrTemplate.findUnique({ where: { id: req.params.id } });
    if (!template) return res.status(404).json({ error: 'Template not found' });
    res.json({ template });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create template
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      name, description, layoutType,
      headerColor, headerColor2, footerColor, footerColor2,
      qrDotColor, qrBgColor,
      brandName, brandTagline, footerText, footerSubText,
      qrDotShape, logoInCenter, isDefault
    } = req.body;

    if (!name) return res.status(400).json({ error: 'Template name is required' });

    // If setting as default, unset all others
    if (isDefault) {
      await prisma.qrTemplate.updateMany({ data: { isDefault: false } });
    }

    const template = await prisma.qrTemplate.create({
      data: {
        name, description, layoutType: layoutType || 'standard',
        headerColor: headerColor || '#002e8a',
        headerColor2: headerColor2 || '#001a52',
        footerColor: footerColor || '#b31919',
        footerColor2: footerColor2 || '#7a0a0a',
        qrDotColor: qrDotColor || '#000000',
        qrBgColor: qrBgColor || '#ffffff',
        brandName: brandName || 'V-KAWACH',
        brandTagline: brandTagline || 'SECURING YOUR WORLD',
        footerText: footerText || 'SCAN IN EMERGENCY',
        footerSubText: footerSubText || 'FOR IMMEDIATE HELP & ALERTS',
        qrDotShape: qrDotShape || 'square',
        logoInCenter: logoInCenter || false,
        isDefault: isDefault || false,
      }
    });
    res.json({ template });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update template
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { isDefault, ...rest } = req.body;
    if (isDefault) {
      await prisma.qrTemplate.updateMany({ data: { isDefault: false } });
    }
    const template = await prisma.qrTemplate.update({
      where: { id: req.params.id },
      data: { ...rest, isDefault: isDefault || false, updatedAt: new Date() }
    });
    res.json({ template });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE template
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.qrTemplate.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
