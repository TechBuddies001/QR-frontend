const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// GET /api/leads - List all leads (Admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ leads });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/leads/:id - Delete a lead
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.lead.delete({ where: { id } });
    res.json({ success: true, message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/leads/public - Public endpoint to save a lead from the contact form
router.post('/public', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    
    await prisma.lead.create({
      data: {
        name,
        phone,
        message: message || '',
        status: 'new'
      }
    });
    
    res.json({ success: true, message: 'Lead saved successfully' });
  } catch (err) {
    console.error('Error saving public lead:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
