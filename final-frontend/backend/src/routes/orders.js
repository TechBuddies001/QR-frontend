
const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');

// Create a new order (Public)
router.post('/', async (req, res) => {
    try {
        const { 
            customerName, 
            customerEmail, 
            customerPhone, 
            shippingAddress, 
            items, 
            totalAmount 
        } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        const orderNumber = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();

        const order = await prisma.order.create({
            data: {
                orderNumber,
                customerName,
                customerEmail,
                customerPhone,
                shippingAddress,
                totalAmount,
                items: {
                    create: items.map(item => ({
                        productId: item.productId,
                        productName: item.name,
                        quantity: item.quantity,
                        price: item.price,
                        totalPrice: item.price * item.quantity
                    }))
                }
            },
            include: { items: true }
        });

        res.status(201).json({ success: true, order });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// List all orders (Admin only)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: { items: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ orders });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update order status (Admin only)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { status, paymentStatus } = req.body;
        const order = await prisma.order.update({
            where: { id: req.params.id },
            data: { status, paymentStatus }
        });
        res.json({ order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get sales reports (Admin only)
router.get('/stats', authenticateToken, async (req, res) => {
    try {
        const totalSales = await prisma.order.aggregate({
            where: { paymentStatus: 'PAID' },
            _sum: { totalAmount: true }
        });

        const orderCount = await prisma.order.count();
        const pendingOrders = await prisma.order.count({ where: { status: 'PENDING' } });
        
        // Last 30 days daily sales
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const dailySales = await prisma.order.findMany({
            where: {
                createdAt: { gte: thirtyDaysAgo },
                paymentStatus: 'PAID'
            },
            select: {
                totalAmount: true,
                createdAt: true
            }
        });

        res.json({
            totalRevenue: totalSales._sum.totalAmount || 0,
            totalOrders: orderCount,
            pendingOrders,
            dailySales
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
