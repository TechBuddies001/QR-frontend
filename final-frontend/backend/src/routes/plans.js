const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

const DEFAULT_PLANS = [
  { name: 'basic', displayName: 'Basic', price: 299, validityDays: 365, features: JSON.stringify(['1 QR Tag', 'Call Masking', 'Scan Alerts']) },
  { name: 'standard', displayName: 'Standard', price: 599, validityDays: 730, features: JSON.stringify(['3 QR Tags', 'Call Masking', 'SMS Alerts', 'Priority Support']) },
  { name: 'premium', displayName: 'Premium', price: 1499, validityDays: 1825, features: JSON.stringify(['10 QR Tags', 'Call Masking', 'SMS Alerts', 'Emergency Contact', 'Premium Support', 'Sponsor Branding']) },
];

// GET /api/plans
router.get('/', async (req, res) => {
  try {
    const showAll = req.query.showAll === 'true';
    const plans = await prisma.plan.findMany({ 
      where: showAll ? {} : { isActive: true }, 
      orderBy: { price: 'asc' } 
    });
    
    res.json({ 
      plans: plans.map(p => ({ 
        ...p, 
        features: p.features ? JSON.parse(p.features) : [] 
      })) 
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

// POST /api/plans (admin)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, displayName, price, validityDays, features } = req.body;
    const plan = await prisma.plan.create({
      data: { 
        name, 
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
