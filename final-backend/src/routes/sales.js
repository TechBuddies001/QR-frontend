
const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// Get sales stats and transactions
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [transactions, orders, totalTransactionRevenue, totalOrderRevenue, activeSubscriptions, totalOrders] = await Promise.all([
      prisma.transaction.findMany({
        include: {
          user: {
            select: { name: true, email: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: 50
      }),
      prisma.order.findMany({
        include: { items: true },
        orderBy: { createdAt: 'desc' },
        take: 50
      }),
      prisma.transaction.aggregate({
        _sum: { amount: true }
      }),
      prisma.order.aggregate({
        _sum: { totalAmount: true }
      }),
      prisma.subscription.count({
        where: { status: 'active' }
      }),
      prisma.order.count(),
    ]);

    const totalRev = (totalTransactionRevenue._sum.amount || 0) + (totalOrderRevenue._sum.totalAmount || 0);

    res.json({
      transactions,
      orders,
      totalRevenue: totalRev,
      activeSubscriptions,
      totalOrders,
      growthRate: 15 
    });
  } catch (error) {
    console.error('[Sales API Error]', error);
    res.status(500).json({ error: 'Failed to fetch sales data', details: error.message });
  }
});

module.exports = router;

