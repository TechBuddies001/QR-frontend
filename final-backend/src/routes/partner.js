const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { authenticateToken } = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const bcrypt = require('bcryptjs');
const { onTagAssignedByPartner } = require('../services/notificationService');

// --- ADMIN APIs ---

// Create a new Partner
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, email, password, phone, type, state, district, territory } = req.body;
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const partner = await prisma.partner.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        type,
        state,
        district,
        territory,
      }
    });
    
    res.json({ message: 'Partner created successfully', partner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create partner' });
  }
});

// Get all partners (for Admin)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const partners = await prisma.partner.findMany({
      include: {
        _count: {
          select: { tags: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch partners' });
  }
});

// Allocate dummy tags to a partner (Admin)
router.post('/allot', authenticateToken, async (req, res) => {
  try {
    const { partnerId, quantity, planType } = req.body;
    
    // Find unassigned tags
    const availableTags = await prisma.tag.findMany({
      where: {
        userId: null,
        partnerId: null,
        planType: planType || 'basic'
      },
      take: parseInt(quantity)
    });

    if (availableTags.length < quantity) {
      return res.status(400).json({ error: `Not enough available tags in inventory. Only ${availableTags.length} available.` });
    }

    const tagIds = availableTags.map(t => t.id);

    // Update tags to have partnerId
    await prisma.tag.updateMany({
      where: { id: { in: tagIds } },
      data: { partnerId }
    });

    // Create Ledger entry
    await prisma.inventoryLedger.create({
      data: {
        partnerId,
        quantity: parseInt(quantity),
        action: 'ALLOTTED_BY_ADMIN',
        description: `Admin allocated ${quantity} ${planType || 'basic'} tags`
      }
    });

    res.json({ message: `${quantity} tags successfully allocated to partner.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to allocate tags' });
  }
});

// Get global ledger (Admin)
router.get('/ledger', authenticateToken, async (req, res) => {
  try {
    const ledger = await prisma.inventoryLedger.findMany({
      include: { partner: { select: { name: true, type: true } } },
      orderBy: { createdAt: 'desc' }
    });
    res.json(ledger);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ledger' });
  }
});


// --- PARTNER APIs ---

// Partner Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const partner = await prisma.partner.findUnique({ where: { email } });
    if (!partner) return res.status(401).json({ error: 'Invalid credentials' });
    if (!partner.isActive) return res.status(403).json({ error: 'Account disabled' });

    const valid = await bcrypt.compare(password, partner.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    // Note: Reusing jwt logic if available, assuming standard jwt login.
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ id: partner.id, role: 'partner' }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '1d' });

    res.json({ token, partner: { id: partner.id, name: partner.name, email: partner.email, type: partner.type } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Partner Dashboard Stats
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const partnerId = req.user.id;
    const totalAllotted = await prisma.tag.count({ where: { partnerId } });
    const assignedToCustomers = await prisma.tag.count({ where: { partnerId, userId: { not: null } } });
    const availableStock = totalAllotted - assignedToCustomers;
    
    const recentLedger = await prisma.inventoryLedger.findMany({
      where: { partnerId },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    res.json({
      stats: { totalAllotted, assignedToCustomers, availableStock },
      ledger: recentLedger
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard' });
  }
});

// Partner assigns a tag to a customer
router.post('/assign-tag', authenticateToken, upload.fields([{ name: 'photos', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), async (req, res) => {
  try {
    const partnerId = req.user.id;
    const { ownerName, ownerPhone, emergencyContact, assetType, customAssetType, assetModel, assetNumber, customMessage, address } = req.body;
    
    // Find an available tag for this partner
    const availableTag = await prisma.tag.findFirst({
      where: { partnerId, userId: null }
    });

    if (!availableTag) {
      return res.status(400).json({ error: 'No tags available in your inventory. Please contact Admin.' });
    }

    // Process files
    let photoUrls = [];
    if (req.files && req.files['photos']) {
      photoUrls = req.files['photos'].map(file => `/uploads/photos/${file.filename}`);
    }

    let videoUrls = [];
    if (req.files && req.files['videos']) {
      videoUrls = req.files['videos'].map(file => `/uploads/videos/${file.filename}`);
    }

    // Check if user exists, else create
    let user = await prisma.user.findUnique({ where: { phone: ownerPhone } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: ownerName,
          phone: ownerPhone,
          email: `${ownerPhone}@tarkshyasolution.in`, // Dummy email
          password: await bcrypt.hash(ownerPhone, 10), // Use phone as password for now
          role: 'user'
        }
      });
    }

    // Update the tag with user info
    await prisma.tag.update({
      where: { id: availableTag.id },
      data: {
        userId: user.id,
        ownerName,
        ownerPhone,
        emergencyContact,
        assetType,
        customAssetType,
        assetModel,
        assetNumber,
        customMessage,
        address,
        photos: photoUrls.length > 0 ? photoUrls : undefined,
        videos: videoUrls.length > 0 ? videoUrls : undefined
      }
    });

    // Add ledger entry
    await prisma.inventoryLedger.create({
      data: {
        partnerId,
        tagId: availableTag.id,
        quantity: 1,
        action: 'ASSIGNED_TO_CUSTOMER',
        description: `Assigned tag ${availableTag.tagCode} to ${ownerName}`
      }
    });

    // Hook: Notify Super Admin of partner tag assignment
    const partnerInfo = await prisma.partner.findUnique({ where: { id: partnerId } });
    if (partnerInfo) {
      await onTagAssignedByPartner({
        tag: { id: availableTag.id, tagCode: availableTag.tagCode },
        partner: partnerInfo,
        ownerName,
        ownerPhone,
        ipAddress: req.ip || req.headers['x-forwarded-for'],
        userAgent: req.headers['user-agent'],
      }).catch(err => console.error('[Partner Assign Notification]', err));
    }

    res.json({ message: 'Tag successfully assigned to customer!', tagCode: availableTag.tagCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to assign tag' });
  }
});


// Partner views their assigned tags
router.get('/tags', authenticateToken, async (req, res) => {
  try {
    const partnerId = req.user.id;
    const tags = await prisma.tag.findMany({
      where: { partnerId, userId: { not: null } },
      include: {
        user: { select: { name: true, phone: true } }
      },
      orderBy: { updatedAt: 'desc' }
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tags' });
  }
});

module.exports = router;
