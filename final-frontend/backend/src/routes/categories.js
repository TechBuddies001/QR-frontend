
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
        _count: {
          select: { products: true, tags: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Create category
router.post('/', async (req, res) => {
  try {
    const { id, _count, products, createdAt, updatedAt, ...rest } = req.body;
    const category = await prisma.category.create({
      data: { 
        ...rest,
        features: rest.features ? JSON.stringify(rest.features) : "[]",
        preventionCards: rest.preventionCards ? JSON.stringify(rest.preventionCards) : "[]",
        emergencyCards: rest.emergencyCards ? JSON.stringify(rest.emergencyCards) : "[]",
        trackingCards: rest.trackingCards ? JSON.stringify(rest.trackingCards) : "[]",
      }
    });
    res.json({ category });
  } catch (error) {
    console.error('Create error:', error);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

// Update category
router.put('/:id', async (req, res) => {
  try {
    const { id, _count, products, createdAt, updatedAt, ...rest } = req.body;
    const category = await prisma.category.update({
      where: { id: req.params.id },
      data: { 
        ...rest,
        features: rest.features ? JSON.stringify(rest.features) : "[]",
        preventionCards: rest.preventionCards ? JSON.stringify(rest.preventionCards) : "[]",
        emergencyCards: rest.emergencyCards ? JSON.stringify(rest.emergencyCards) : "[]",
        trackingCards: rest.trackingCards ? JSON.stringify(rest.trackingCards) : "[]",
      }
    });
    res.json({ category });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

// Delete category
router.delete('/:id', async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;
