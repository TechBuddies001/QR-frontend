const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

const MASTER_FEATURES = [
  'Dynamic QR',
  'Owner Information',
  'Emergency Scan',
  'Direct Call',
  'Masked Call',
  'WhatsApp Alert',
  'Emergency Contact Routing',
  'Call Privacy',
  'Advanced Alerts'
];

const DEFAULT_PLANS = [
  { 
    name: 'basic', 
    displayName: 'Basic Plan', 
    price: 299, 
    validityDays: 365, 
    features: JSON.stringify([
      'Dynamic QR', 
      'Owner Information', 
      'Emergency Scan', 
      'Direct Call'
    ]) 
  },
  { 
    name: 'premium', 
    displayName: 'Premium Plan (V-Kawach)', 
    price: 950, 
    validityDays: 365, 
    features: JSON.stringify([
      'Dynamic QR', 
      'Owner Information', 
      'Emergency Scan', 
      'Masked Call', 
      'WhatsApp Alert', 
      'Emergency Contact Routing', 
      'Call Privacy', 
      'Advanced Alerts'
    ]) 
  },
];

async function seedPlansIfEmpty() {
  const count = await prisma.plan.count();
  if (count === 0) {
    for (const p of DEFAULT_PLANS) {
      await prisma.plan.create({ data: p });
    }
  }
}

// GET /api/plans
router.get('/', async (req, res) => {
  try {
    await seedPlansIfEmpty();
    const showAll = req.query.showAll === 'true';
    const plans = await prisma.plan.findMany({ 
      where: showAll ? {} : { isActive: true }, 
      orderBy: { price: 'asc' } 
    });
    
    res.json({ 
      plans: plans.map(p => ({ 
        ...p, 
        features: p.features ? JSON.parse(p.features) : [] 
      })),
      masterFeatures: MASTER_FEATURES
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

// POST /api/plans/reset-defaults (admin)
router.post('/reset-defaults', authenticateToken, async (req, res) => {
  try {
    for (const defPlan of DEFAULT_PLANS) {
      const existing = await prisma.plan.findUnique({ where: { name: defPlan.name } });
      if (existing) {
        await prisma.plan.update({
          where: { id: existing.id },
          data: {
            displayName: defPlan.displayName,
            price: defPlan.price,
            validityDays: defPlan.validityDays,
            features: defPlan.features,
            isActive: true,
          }
        });
      } else {
        await prisma.plan.create({ data: defPlan });
      }
    }
    
    const plans = await prisma.plan.findMany({ orderBy: { price: 'asc' } });
    res.json({ 
      message: 'V-Kawach plans updated to standard matrix successfully',
      plans: plans.map(p => ({ ...p, features: p.features ? JSON.parse(p.features) : [] }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/plans (admin)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, displayName, price, validityDays, features } = req.body;
    const plan = await prisma.plan.create({
      data: { 
        name: name.toLowerCase().replace(/\s+/g, '-'), 
        displayName, 
        price: parseFloat(price), 
        validityDays: parseInt(validityDays), 
        features: JSON.stringify(features || []) 
      },
    });
    res.status(201).json({ plan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/plans/:id (admin)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { displayName, price, validityDays, features, isActive } = req.body;
    const plan = await prisma.plan.update({
      where: { id: req.params.id },
      data: {
        displayName, 
        price: price !== undefined ? parseFloat(price) : undefined,
        validityDays: validityDays !== undefined ? parseInt(validityDays) : undefined,
        features: features ? JSON.stringify(features) : undefined,
        isActive: isActive !== undefined ? Boolean(isActive) : undefined,
      },
    });
    res.json({ plan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/plans/:id (admin)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.plan.delete({
      where: { id: req.params.id }
    });
    res.json({ message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete plan. It might be linked to active subscriptions." });
  }
});

module.exports = router;
