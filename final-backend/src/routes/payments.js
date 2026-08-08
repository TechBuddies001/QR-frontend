const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Razorpay = require('razorpay');
const prisma = require('../lib/prisma');

// Helper to get razorpay instance
async function getRazorpayInstance() {
  const settings = await prisma.setting.findMany({
    where: {
      key: { in: ['RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET'] }
    }
  });

  const key_id = settings.find(s => s.key === 'RAZORPAY_KEY_ID')?.value;
  const key_secret = settings.find(s => s.key === 'RAZORPAY_KEY_SECRET')?.value;

  if (!key_id || !key_secret) {
    throw new Error('Razorpay keys are not configured in settings');
  }

  return new Razorpay({
    key_id: key_id,
    key_secret: key_secret
  });
}

// Helper to get razorpay secret for verification
async function getRazorpaySecret() {
  const secretSetting = await prisma.setting.findUnique({
    where: { key: 'RAZORPAY_KEY_SECRET' }
  });
  return secretSetting?.value;
}

// POST /api/payments/create-order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, receipt } = req.body;
    
    if (!amount) {
      return res.status(400).json({ success: false, error: 'Amount is required' });
    }

    const instance = await getRazorpayInstance();

    const options = {
      amount: Math.round(amount * 100), // amount in the smallest currency unit
      currency: "INR",
      receipt: receipt || `receipt_${Date.now()}`
    };

    const order = await instance.orders.create(options);
    res.json({ success: true, order });
  } catch (err) {
    console.error('Create Order Error:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to create order' });
  }
});

// POST /api/payments/verify
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, dbOrderId } = req.body;

    const secret = await getRazorpaySecret();
    if (!secret) {
      throw new Error("Razorpay secret not configured");
    }

    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Invalid signature' });
    }

    let updatedOrder = null;
    
    // If we have a DB order ID, update its status
    if (dbOrderId) {
      updatedOrder = await prisma.order.update({
        where: { id: dbOrderId },
        data: { 
          paymentStatus: 'PAID',
          status: 'PROCESSING'
        }
      });
    }

    res.json({ 
      success: true, 
      order: updatedOrder || { 
        orderNumber: `ORD-${Date.now()}`,
        status: 'PAID'
      } 
    });

  } catch (err) {
    console.error('Verify Payment Error:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to verify payment' });
  }
});

module.exports = router;
