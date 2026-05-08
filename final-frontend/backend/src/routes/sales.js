
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Get sales stats and transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        user: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    const orders = await prisma.order.findMany({
      include: { items: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    const totalTransactionRevenue = await prisma.transaction.aggregate({
      _sum: { amount: true }
    });

    const totalOrderRevenue = await prisma.order.aggregate({
      _sum: { totalAmount: true }
    });

    const activeSubscriptions = await prisma.subscription.count({
      where: { status: 'active' }
    });

    const totalOrders = await prisma.order.count();

    res.json({
      transactions,
      orders,
      totalRevenue: (totalTransactionRevenue._sum.amount || 0) + (totalOrderRevenue._sum.totalAmount || 0),
      activeSubscriptions,
      totalOrders,
      growthRate: 15 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sales data' });
  }
});

module.exports = router;
