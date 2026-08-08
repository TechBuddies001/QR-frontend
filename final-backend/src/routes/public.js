const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { sendScanAlert } = require('../services/sms');
const { initiateExotelCall, sendExotelWhatsappText } = require('../services/exotel');
const { upload } = require('../middleware/upload');
const bcrypt = require('bcryptjs');
const { onTagSelfActivated } = require('../services/notificationService');
/**
 * PUBLIC routes - no auth required
 * These are hit when someone scans a QR code
 */


// GET /api/public/settings – Public settings for frontend
router.get('/settings', async (req, res) => {
  try {
    const settings = await prisma.setting.findMany();
    const result = {};
    const safeKeys = ['RAZORPAY_KEY_ID', 'SITE_NAME', 'CONTACT_EMAIL', 'heroBannersList', 'homeSecurityFeatures']; // Add any other safe keys here
    settings.forEach(s => {
      if (safeKeys.includes(s.key)) {
        result[s.key] = s.value;
      }
    });
    res.json({ settings: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET /api/public/tag/:tagCode – Public profile page data
router.get('/tag/:tagCode', async (req, res) => {
  try {
    let { tagCode } = req.params;
    
    // Clean up duplicate prefixes if present (e.g. VH-VH-RVW52I -> VH-RVW52I)
    let cleanCode = tagCode.replace(/^(VH-|TS-|PT-|PS-|OT-)\1+/, '$1');

    let tag = await prisma.tag.findUnique({
      where: { tagCode: cleanCode },
      include: { sponsor: { select: { name: true, logo: true, website: true, description: true } } },
    });

    if (!tag && cleanCode !== tagCode) {
      tag = await prisma.tag.findUnique({
        where: { tagCode },
        include: { sponsor: { select: { name: true, logo: true, website: true, description: true } } },
      });
    }

    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    if (!tag.isActive) return res.status(403).json({ error: 'This tag is inactive', tagCode: tag.tagCode });

    // Always log the scan FIRST for tracking analytics
    const scanLog = await prisma.scanLog.create({
      data: {
        tagId: tag.id,
        scannerIp: req.ip,
        scannerLat: req.body.lat ? parseFloat(req.body.lat) : null,
        scannerLng: req.body.lng ? parseFloat(req.body.lng) : null,
        scannerCity: req.body.city || null,
        userAgent: req.headers['user-agent'] || null,
      },
    });

    const isTreatAsDummy = tag.isDummy || tag.ownerName === 'Dummy / Stock Tag' || tag.ownerName === 'John Doe';
    if (isTreatAsDummy) {
      // Include rich read-only metadata for activation form
      const partner = tag.partnerId ? await prisma.partner.findUnique({ where: { id: tag.partnerId }, select: { id: true, name: true, type: true } }) : null;
      const category = tag.categoryId ? await prisma.category.findUnique({ where: { id: tag.categoryId }, select: { name: true } }) : null;

      return res.json({
        isDummy: true,
        scanId: scanLog.id,
        tag: {
          tagCode: tag.tagCode,
          assetType: tag.assetType,
          planType: tag.planType || 'Basic',
          sponsor: tag.sponsor,
          categoryName: category?.name || (tag.assetType === 'vehicle' ? 'Vehicle Safety QR' : tag.assetType === 'pet' ? 'Pet Safety QR' : 'General Safety Tag'),
          batchNumber: `BATCH-${new Date(tag.createdAt).getFullYear()}`,
          dealerId: partner ? (partner.name || partner.id) : 'Direct / Online',
          dealerName: partner?.name || 'Tarkshya Direct',
          createdAt: tag.createdAt,
        }
      });
    }

    // Basic logic for phone masking
    const isPremium = tag.planType?.toLowerCase() === 'premium';

    // Return public-safe data
    res.json({
      tag: {
        tagCode: tag.tagCode,
        ownerName: tag.ownerName,
        ownerPhone: isPremium ? maskPhone(tag.ownerPhone) : tag.ownerPhone,
        ownerPhoto: tag.ownerPhoto,
        customMessage: tag.customMessage,
        assetType: tag.assetType,
        assetModel: tag.assetModel,
        assetColor: tag.assetColor,
        assetNumber: tag.assetNumber,
        isLost: tag.isLost,
        address: tag.address,
        sponsor: tag.sponsor,
        planType: tag.planType,
        ...( !isPremium && { 
          ownerPhone: tag.ownerPhone, 
          whatsappNumber: tag.whatsappNumber || tag.ownerPhone 
        })
      },
      scanId: scanLog.id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// In-memory OTP Store for Verification
const otpStore = new Map();

// POST /api/public/send-otp
router.post('/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone || phone.length < 10) {
      return res.status(400).json({ error: 'Valid 10-digit mobile number is required' });
    }
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(phone, { otp, expiresAt: Date.now() + 10 * 60 * 1000 }); // 10 min validity

    console.log(`[OTP Engine] Generated OTP for ${phone}: ${otp}`);

    res.json({
      message: `OTP sent successfully to +91 ${phone}`,
      // For development/demo convenience, return debugOtp
      debugOtp: process.env.NODE_ENV !== 'production' ? otp : undefined,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/verify-otp
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ error: 'Phone and OTP are required' });
    }
    const record = otpStore.get(phone);
    // Allow demo OTP 123456 or exact matched OTP
    if ((record && record.otp === otp && record.expiresAt > Date.now()) || otp === '123456') {
      otpStore.delete(phone);
      return res.json({ verified: true, message: 'Mobile number verified successfully!' });
    }
    return res.status(400).json({ error: 'Invalid or expired OTP. Use demo OTP 123456 or check your phone.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/tag/:tagCode/activate - Activate dummy tag
router.post('/tag/:tagCode/activate', upload.fields([{ name: 'photos', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { ownerName, ownerPhone, email, emergencyContact, password, assetType, customAssetType, assetModel, assetColor, assetNumber } = req.body;
    
    if (!ownerName || !ownerPhone || !password) {
      return res.status(400).json({ error: 'Name, Mobile Number, and Password are mandatory' });
    }

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    const isTreatAsDummy = tag.isDummy || tag.ownerName === 'John Doe' || tag.ownerName === 'Dummy / Stock Tag';
    if (!isTreatAsDummy) return res.status(400).json({ error: 'This tag is already active and cannot be re-activated this way.' });

    // Handle photos
    let photoUrls = [];
    if (req.files && req.files.photos) {
      photoUrls = req.files.photos.map(f => `/uploads/photos/${f.filename}`);
    }

    // Try to find user or create new one
    let user = await prisma.user.findUnique({ where: { phone: ownerPhone } });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: {
          name: ownerName,
          email: email || `${ownerPhone}@tarkshya.customer`,
          phone: ownerPhone,
          password: hashedPassword,
          role: 'user',
        }
      });
    }

    // Update tag
    const updatedTag = await prisma.tag.update({
      where: { id: tag.id },
      data: {
        userId: user.id,
        ownerName,
        ownerPhone,
        emergencyContact: emergencyContact || null,
        assetType: assetType || tag.assetType,
        customAssetType: customAssetType || null,
        assetModel: assetModel || null,
        assetColor: assetColor || null,
        assetNumber: assetNumber || null,
        isDummy: false, // Mark as activated
        photos: photoUrls.length > 0 ? JSON.stringify(photoUrls) : tag.photos,
      }
    });

    // Hook: Notify Super Admin of self-activation
    await onTagSelfActivated({
      tag: updatedTag,
      ownerName,
      ownerPhone,
      ipAddress: req.ip || req.headers['x-forwarded-for'],
      userAgent: req.headers['user-agent'],
    });

    res.json({ message: 'Tag activated successfully', tag: updatedTag, user: { id: user.id, phone: user.phone } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// POST /api/public/tag/:tagCode/scan-with-location – Log scan + optional SMS
router.post('/tag/:tagCode/scan', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { lat, lng, city } = req.body;

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag || !tag.isActive) return res.status(404).json({ error: 'Tag not found or inactive' });

    const scanLog = await prisma.scanLog.create({
      data: {
        tagId: tag.id,
        scannerIp: req.ip,
        scannerLat: lat ? parseFloat(lat) : null,
        scannerLng: lng ? parseFloat(lng) : null,
        scannerCity: city || null,
        userAgent: req.headers['user-agent'] || null,
      },
    });

    // Send SMS alert to owner (fire and forget)
    sendScanAlert({ tag, scannerLat: lat, scannerLng: lng, scannerCity: city })
      .then(() =>
        prisma.scanLog.update({ where: { id: scanLog.id }, data: { smsSent: true } })
      )
      .catch(e => console.error('SMS alert failed:', e.message));

    res.json({ success: true, scanId: scanLog.id, message: 'Scan logged successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/tag/:tagCode/call – Register intent to call (Single-Leg Flow)
router.post('/tag/:tagCode/call', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { scannerPhone } = req.body;

    if (!scannerPhone) return res.status(400).json({ error: 'Scanner phone number required' });
    if (!scannerPhone.match(/^[6-9]\d{9}$/)) return res.status(400).json({ error: 'Valid Indian mobile number required (10 digits)' });

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag || !tag.isActive) return res.status(404).json({ error: 'Tag not found or inactive' });

    // 1. Create a CallLog entry as 'pending'
    // This allows the connect webhook to lookup the owner number based on the scanner's phone
    await prisma.callLog.create({
      data: {
        tagId: tag.id,
        scannerPhone,
        status: 'pending',
        provider: 'exotel',
      },
    });

    // 2. Return the Exophone number for the frontend to dial
    res.json({ 
      success: true, 
      exophone: process.env.EXOTEL_CALLER_ID, 
      message: 'Intent registered. Please click the call button to connect.' 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * EXOTEL WEBHOOKS
 * Exotel 2-URL Fallback Flow:
 * 1. Connect URL  → returns primary (owner) number only
 * 2. Fallback URL → returns secondary number (if primary doesn't answer in 30s or disconnects)
 */

// Helper: normalize phone from Exotel format to 10-digit
function normalizePhone(rawPhone) {
  if (!rawPhone) return null;
  let p = rawPhone.toString();
  if (p.startsWith('+91')) p = p.slice(3);
  else if (p.startsWith('91') && p.length === 12) p = p.slice(2);
  else if (p.startsWith('0') && p.length === 11) p = p.slice(1);
  return p;
}

// Helper: find tag for an incoming scanner call
async function findTagForScanner(scannerPhone) {
  // Strategy 1: pending call log (registered via app)
  let record = await prisma.callLog.findFirst({
    where: {
      scannerPhone,
      status: 'pending',
      createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) }
    },
    orderBy: { createdAt: 'desc' },
    include: { tag: true }
  });

  if (record) return { source: 'pending', record };

  // Strategy 2: most recent call log from last 24h
  record = await prisma.callLog.findFirst({
    where: {
      scannerPhone,
      createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    },
    orderBy: { createdAt: 'desc' },
    include: { tag: true }
  });

  if (record) return { source: 'recent', record };
  return null;
}

// GET+POST /api/public/exotel/webhook/connect
// Exotel hits this URL when scanner calls the Exophone.
// We return ONLY the primary (owner) number here.
router.get('/exotel/webhook/connect', handleConnectWebhook);
router.post('/exotel/webhook/connect', handleConnectWebhook);

async function handleConnectWebhook(req, res) {
  try {
    const params = { ...req.query, ...req.body };
    const { CallFrom, CallSid, From } = params;
    const rawPhone = From || CallFrom;

    console.log(`[Exotel Connect] rawPhone=${rawPhone} CallSid=${CallSid}`);

    if (!rawPhone) {
      return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
    }

    const scannerPhone = normalizePhone(rawPhone);
    console.log(`[Exotel Connect] normalizedPhone=${scannerPhone}`);

    const found = await findTagForScanner(scannerPhone);

    if (!found) {
      console.log(`[Exotel Connect] No tag found for ${scannerPhone}`);
      return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
    }

    const { source, record } = found;
    const tag = record.tag;

    // Update/create call log with CallSid
    if (source === 'pending') {
      await prisma.callLog.update({
        where: { id: record.id },
        data: { status: 'bridging', callSid: CallSid }
      });
    } else {
      await prisma.callLog.create({
        data: {
          tagId: record.tagId,
          scannerPhone,
          status: 'bridging',
          callSid: CallSid,
          provider: 'exotel',
        }
      });
    }

    // Return ONLY primary (owner) number
    let ownerPhone = tag.ownerPhone;
    if (!ownerPhone.startsWith('+91')) ownerPhone = '+91' + ownerPhone;

    console.log(`[Exotel Connect] Routing to primary: ${ownerPhone}`);

    return res.status(200).json({
      fetch_after_attempt: false,
      destination: { numbers: [ownerPhone] },
      record: true,
      recording_channels: 'dual',
      max_ringing_duration: 30,
      max_conversation_duration: 3600
    });

  } catch (err) {
    console.error('[Exotel Connect Error]:', err.message);
    return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
  }
}

// GET+POST /api/public/exotel/webhook/fallback
// Exotel hits this when primary number doesn't answer in 30s OR call is rejected.
// We return the secondary (emergency) number for premium users.
router.get('/exotel/webhook/fallback', handleFallbackWebhook);
router.post('/exotel/webhook/fallback', handleFallbackWebhook);

async function handleFallbackWebhook(req, res) {
  try {
    const params = { ...req.query, ...req.body };
    const { CallFrom, CallSid, From, Status } = params;
    const rawPhone = From || CallFrom;

    console.log(`[Exotel Fallback] rawPhone=${rawPhone} CallSid=${CallSid} Status=${Status}`);

    if (!rawPhone && !CallSid) {
      return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
    }

    let callRecord = null;

    // Strategy 1: Lookup by CallSid (most reliable after connect URL sets it)
    if (CallSid) {
      callRecord = await prisma.callLog.findFirst({
        where: { callSid: CallSid },
        include: { tag: true }
      });
    }

    // Strategy 2: Lookup by phone (bridging or pending in last 60 min)
    if (!callRecord && rawPhone) {
      const scannerPhone = normalizePhone(rawPhone);
      callRecord = await prisma.callLog.findFirst({
        where: {
          scannerPhone,
          status: { in: ['bridging', 'pending', 'fallback_attempt'] },
          createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) }
        },
        orderBy: { createdAt: 'desc' },
        include: { tag: true }
      });
    }

    if (!callRecord || !callRecord.tag) {
      console.log(`[Exotel Fallback] No matching call found for CallSid=${CallSid} phone=${rawPhone}`);
      return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
    }

    const tag = callRecord.tag;

    // Only route to secondary for premium/PREMIUM users with secondary number set
    const isPremium = tag.planType?.toLowerCase() === 'premium';
    const hasSecondary = tag.emergencyContact && tag.emergencyContact.trim().length > 0;

    if (!isPremium || !hasSecondary) {
      console.log(`[Exotel Fallback] No secondary for tag ${tag.tagCode} (planType=${tag.planType}, hasSecondary=${hasSecondary})`);
      return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
    }

    let secondaryPhone = tag.emergencyContact.trim();
    if (!secondaryPhone.startsWith('+91')) secondaryPhone = '+91' + secondaryPhone;

    console.log(`[Exotel Fallback] Routing to secondary: ${secondaryPhone} for tag ${tag.tagCode}`);

    // Update call log status
    await prisma.callLog.update({
      where: { id: callRecord.id },
      data: { status: 'fallback_attempt' }
    }).catch(() => {});

    return res.status(200).json({
      fetch_after_attempt: false,
      destination: { numbers: [secondaryPhone] },
      record: true,
      recording_channels: 'dual',
      max_ringing_duration: 30,
      max_conversation_duration: 3600
    });

  } catch (err) {
    console.error('[Exotel Fallback Error]:', err.message);
    return res.status(200).json({ fetch_after_attempt: false, destination: { numbers: [] } });
  }
}

// POST /api/public/exotel/webhook/status – Passthru Callback for Call Completion & Recordings
router.post('/exotel/webhook/status', async (req, res) => {
  try {
    const data = req.body; // Exotel sends POST data for Passthru
    const { CallSid, Status, RecordingUrl, ConversationDuration } = data;

    if (!CallSid) return res.sendStatus(200);

    const callLog = await prisma.callLog.findFirst({ where: { callSid: CallSid } });
    if (callLog) {
      await prisma.callLog.update({
        where: { id: callLog.id },
        data: {
          status: Status === 'completed' ? 'connected' : (Status === 'no-answer' ? 'missed' : 'failed'),
          duration: ConversationDuration ? parseInt(ConversationDuration) : 0,
          recordingUrl: RecordingUrl || null,
        }
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('[Exotel Passthru Error]:', err.message);
    res.sendStatus(200); // Always ack Exotel
  }
});

// GET /api/public/tag/:tagCode/emergency – Trigger emergency contact
router.post('/tag/:tagCode/emergency', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { scannerPhone } = req.body;

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag || !tag.emergencyContact) return res.status(404).json({ error: 'No emergency contact configured' });

    const { initiateExotelCall } = require('../services/exotel');

    try {
      await initiateExotelCall({
        ownerPhone: tag.emergencyContact,
        scannerPhone: scannerPhone || tag.ownerPhone,
        tagCode,
      });
    } catch (e) {
      console.error('Emergency call failed:', e.message);
    }

    res.json({ success: true, message: 'Emergency contact notified' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/tag/:tagCode/alert – Manual alert from pedestrian
router.post('/tag/:tagCode/alert', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { scannerPhone } = req.body;

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag || !tag.isActive) return res.status(404).json({ error: 'Tag not found' });

    // Send WhatsApp alert to owner
    await sendScanAlert({ 
      tag, 
      scannerCity: `Manual Alert from ${scannerPhone || 'a concerned citizen'}` 
    });

    res.json({ success: true, message: 'Alert sent to owner' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * WHATSAPP MASKING PROXY
 * Exotel sends incoming WhatsApp messages here.
 * We forward scanner→owner and owner→scanner via company number.
 */
router.post('/exotel/whatsapp/incoming', async (req, res) => {
  try {
    // Exotel webhook payload (WhatsApp API format)
    const body = req.body;
    const messages = body?.whatsapp?.messages || [];

    for (const msg of messages) {
      const fromRaw = msg.from || '';
      const msgBody = msg.content?.text?.body || msg.content?.template?.name || '[Media/Template]';

      // Normalize number to 10-digit Indian format
      let from = fromRaw.replace(/^\+91/, '').replace(/^91(?=\d{10}$)/, '');

      console.log(`[WA Incoming] from=${from} body="${msgBody}"`);

      // Check if sender is a known SCANNER (has active session)
      const sessionAsScanner = await prisma.whatsappSession.findFirst({
        where: {
          scannerPhone: from,
          isActive: true,
          lastActivity: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
        },
        orderBy: { lastActivity: 'desc' },
        include: { tag: true }
      });

      if (sessionAsScanner) {
        // Scanner messaging → forward to Owner
        const ownerPhone = sessionAsScanner.ownerPhone;
        console.log(`[WA Proxy] Scanner→Owner: ${from} → ${ownerPhone}`);

        await sendExotelWhatsappText({
          to: ownerPhone,
          text: `*Message from Scanner (${sessionAsScanner.tag.tagCode}):*\n\n${msgBody}`
        });

        // Update session activity
        await prisma.whatsappSession.update({
          where: { id: sessionAsScanner.id },
          data: { lastActivity: new Date() }
        });
        continue;
      }

      // Check if sender is a known OWNER (has active session)
      const sessionAsOwner = await prisma.whatsappSession.findFirst({
        where: {
          ownerPhone: from,
          isActive: true,
          lastActivity: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
        },
        orderBy: { lastActivity: 'desc' },
        include: { tag: true }
      });

      if (sessionAsOwner) {
        // Owner replying → forward to Scanner
        const scannerPhone = sessionAsOwner.scannerPhone;
        console.log(`[WA Proxy] Owner→Scanner: ${from} → ${scannerPhone}`);

        await sendExotelWhatsappText({
          to: scannerPhone,
          text: `*Reply from ${sessionAsOwner.tag.ownerName}:*\n\n${msgBody}`
        });

        // Update session activity
        await prisma.whatsappSession.update({
          where: { id: sessionAsOwner.id },
          data: { lastActivity: new Date() }
        });
        continue;
      }

      console.log(`[WA Incoming] No active session found for ${from} — ignoring`);
    }

    res.sendStatus(200); // Always ack Exotel
  } catch (err) {
    console.error('[WA Webhook Error]:', err.message);
    res.sendStatus(200);
  }
});

// POST /api/public/tag/:tagCode/whatsapp-session — Create WA masking session
router.post('/tag/:tagCode/whatsapp-session', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { scannerPhone } = req.body;

    if (!scannerPhone || !scannerPhone.match(/^[6-9]\d{9}$/)) {
      return res.status(400).json({ error: 'Valid Indian mobile number required' });
    }

    const tag = await prisma.tag.findUnique({ where: { tagCode } });
    if (!tag || !tag.isActive) return res.status(404).json({ error: 'Tag not found' });

    // Only for paid plans
    if (tag.planType?.toLowerCase() === 'basic') {
      return res.json({
        masked: false,
        directPhone: tag.ownerPhone,
        message: 'Direct contact (free plan)'
      });
    }

    // Deactivate old sessions for this scanner+tag
    await prisma.whatsappSession.updateMany({
      where: { scannerPhone, tagId: tag.id, isActive: true },
      data: { isActive: false }
    });

    // Create new session
    const session = await prisma.whatsappSession.create({
      data: {
        scannerPhone,
        ownerPhone: tag.ownerPhone,
        tagId: tag.id,
      }
    });

    console.log(`[WA Session] Created: scanner=${scannerPhone} owner=${tag.ownerPhone} tag=${tagCode}`);

    res.json({
      masked: true,
      companyWhatsapp: process.env.EXOTEL_WHATSAPP_NUMBER || process.env.EXOTEL_CALLER_ID,
      sessionId: session.id,
      message: 'Session created. Message on company number.'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
