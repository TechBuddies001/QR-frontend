const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// Default initial real-based case studies seed
const DEFAULT_CASE_STUDIES = [
  {
    category: 'LOGISTICS & FLEET',
    title: 'Securing 50,000+ Vehicles with Smart QR',
    description: 'How top transport and logistics partners eliminated manual vehicle tracking, streamlined instant emergency contacts, and reduced accident response time using Tarkshya proprietary vehicle safety tags.',
    icon: 'truck',
    stat1Value: '50k+',
    stat1Label: 'VEHICLES SECURED',
    stat2Value: '40%',
    stat2Label: 'FASTER RESPONSE',
    isActive: true,
    order: 1,
  },
  {
    category: 'CORPORATE & GOVT',
    title: 'Modernizing Employee Identity & Medical Emergency',
    description: 'Deployed Tarkshya secure medical & emergency identity clusters for corporate workforce and municipal staff, offering instant emergency call masking with zero privacy leak.',
    icon: 'building',
    stat1Value: '100%',
    stat1Label: 'PRIVACY COMPLIANCE',
    stat2Value: '12k+',
    stat2Label: 'EMPLOYEES',
    isActive: true,
    order: 2,
  },
  {
    category: 'FMCG & BRAND PROTECTION',
    title: 'Defeating Counterfeit Products with Unit-Level QR Validation',
    description: 'Implemented unit-level anti-counterfeiting QR codes for FMCG brands with real-time scan verification, customer authentication badges, and live audit tracking.',
    icon: 'shield',
    stat1Value: '99%',
    stat1Label: 'COUNTERFEIT DROP',
    stat2Value: '2M+',
    stat2Label: 'SCANS / MONTH',
    isActive: true,
    order: 3,
  },
];

// Helper to seed if database is empty
async function seedDefaultIfEmpty() {
  const count = await prisma.caseStudy.count();
  if (count === 0) {
    for (const item of DEFAULT_CASE_STUDIES) {
      await prisma.caseStudy.create({ data: item });
    }
  }
}

// GET /api/case-studies (Public route)
router.get('/', async (req, res) => {
  try {
    await seedDefaultIfEmpty();
    const caseStudies = await prisma.caseStudy.findMany({
      where: { isActive: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    res.json({ caseStudies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/case-studies/admin (Admin route - all including inactive)
router.get('/admin', authenticateToken, async (req, res) => {
  try {
    await seedDefaultIfEmpty();
    const caseStudies = await prisma.caseStudy.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    res.json({ caseStudies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/case-studies (Admin create)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { category, title, description, icon, stat1Value, stat1Label, stat2Value, stat2Label, isActive, order } = req.body;
    
    if (!category || !title || !description) {
      return res.status(400).json({ error: 'Category, title, and description are required' });
    }

    const caseStudy = await prisma.caseStudy.create({
      data: {
        category,
        title,
        description,
        icon: icon || 'shield',
        stat1Value: stat1Value || '',
        stat1Label: stat1Label || '',
        stat2Value: stat2Value || '',
        stat2Label: stat2Label || '',
        isActive: isActive !== undefined ? Boolean(isActive) : true,
        order: order ? parseInt(order, 10) : 0,
      },
    });

    res.status(201).json({ caseStudy });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/case-studies/:id (Admin update)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { category, title, description, icon, stat1Value, stat1Label, stat2Value, stat2Label, isActive, order } = req.body;
    
    const data = {};
    if (category !== undefined) data.category = category;
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (icon !== undefined) data.icon = icon;
    if (stat1Value !== undefined) data.stat1Value = stat1Value;
    if (stat1Label !== undefined) data.stat1Label = stat1Label;
    if (stat2Value !== undefined) data.stat2Value = stat2Value;
    if (stat2Label !== undefined) data.stat2Label = stat2Label;
    if (isActive !== undefined) data.isActive = Boolean(isActive);
    if (order !== undefined) data.order = parseInt(order, 10);

    const caseStudy = await prisma.caseStudy.update({
      where: { id: req.params.id },
      data,
    });

    res.json({ caseStudy });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/case-studies/:id (Admin delete)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.caseStudy.delete({ where: { id: req.params.id } });
    res.json({ message: 'Case study deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
