
const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const prisma = require('../lib/prisma');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create a Razorpay order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;

    const options = {
      amount: Math.round(amount * 100), // amount in the smallest currency unit
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);
    res.json({ success: true, order });
  } catch (err) {
    console.error('Razorpay Create Order Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Verify payment signature and create final order
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerData,
      cart,
      totalAmount
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      const orderNumber = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();

      const order = await prisma.order.create({
        data: {
          orderNumber,
          customerName: customerData.name,
          customerEmail: customerData.email,
          customerPhone: customerData.phone,
          shippingAddress: customerData.shippingAddress,
          totalAmount: totalAmount,
          paymentStatus: 'PAID',
          status: 'PROCESSING',
          items: {
            create: cart.map(item => ({
              productId: item.productId || item.id,
              productName: item.name,
              quantity: item.quantity,
              price: item.price,
              totalPrice: item.price * item.quantity
            }))
          }
        },
        include: { items: true }
      });

      // Also create a transaction record if the model exists
      try {
        await prisma.transaction.create({
          data: {
            amount: totalAmount,
            status: 'SUCCESS',
            type: 'Product',
            paymentMethod: 'Razorpay',
            productId: cart[0]?.productId || cart[0]?.id
          }
        });
      } catch (tErr) {
        console.error('Transaction Logging Error (Skipping):', tErr.message);
      }

      res.json({ success: true, message: "Payment verified successfully", order });
    } else {
      res.status(400).json({ error: "Invalid payment signature" });
    }
  } catch (err) {
    console.error('Payment Verification Error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
