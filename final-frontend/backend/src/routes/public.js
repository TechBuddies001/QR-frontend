const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');
const { sendScanAlert } = require('../services/sms');

/**
 * PUBLIC routes - no auth required
 * These are hit when someone scans a QR code
 */

// GET /api/public/tag/:tagCode – Public profile page data
router.get('/tag/:tagCode', async (req, res) => {
  try {
    const { tagCode } = req.params;

    const tag = await prisma.tag.findFirst({
      where: {
        OR: [
          { tagCode: tagCode },
          { tagCode: tagCode.toUpperCase() },
          { tagCode: tagCode.toLowerCase() }
        ]
      },
      include: { sponsor: { select: { name: true, logo: true, website: true, description: true } } },
    });

    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    if (!tag.isActive) return res.status(403).json({ error: 'This tag is inactive', tagCode });

    // Log the scan
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

    // Return public-safe data (NO phone numbers)
    res.json({
      tag: {
        tagCode: tag.tagCode,
        ownerName: tag.ownerName,
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
        ownerPhone: tag.planType === 'basic' ? tag.ownerPhone : undefined
      },
      scanId: scanLog.id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/tag/:tagCode/scan-with-location – Log scan + optional SMS
router.post('/tag/:tagCode/scan', async (req, res) => {
  try {
    const { tagCode } = req.params;
    const { lat, lng, city } = req.body;

    const tag = await prisma.tag.findFirst({
      where: {
        OR: [
          { tagCode: tagCode },
          { tagCode: tagCode.toUpperCase() },
          { tagCode: tagCode.toLowerCase() }
        ]
      }
    });
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

    const tag = await prisma.tag.findFirst({
      where: {
        OR: [
          { tagCode: tagCode },
          { tagCode: tagCode.toUpperCase() },
          { tagCode: tagCode.toLowerCase() }
        ]
      }
    });
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
 * As per Exotel 'Connect Applet' (Single-Leg Call Flow)
 */

// GET /api/public/exotel/webhook/connect – Exotel hits this when call is received on Exophone
router.get('/exotel/webhook/connect', async (req, res) => {
  try {
    const { CallFrom, CallSid, From } = req.query;
    const scannerPhone = From || CallFrom;

    if (!scannerPhone) return res.send('destination_number=0'); // Fail call

    // Lookup the most recent pending call request from this scanner phone
    const pendingCall = await prisma.callLog.findFirst({
      where: { 
        scannerPhone,
        status: 'pending',
        createdAt: { gte: new Date(Date.now() - 10 * 60 * 1000) } // Last 10 mins
      },
      orderBy: { createdAt: 'desc' },
      include: { tag: true }
    });

    if (!pendingCall || !pendingCall.tag) {
      console.log(`[Exotel Webhook] No pending call found for ${scannerPhone}`);
      return res.send('destination_number=0');
    }

    // Update status to 'bridging'
    await prisma.callLog.update({
      where: { id: pendingCall.id },
      data: { status: 'bridging', callSid: CallSid }
    });

    // Response for Exotel Connect Applet
    // Format: destination_number=XXXXX&conversation_duration=300
    res.send(`destination_number=${pendingCall.tag.ownerPhone}&conversation_duration=600`);
    
  } catch (err) {
    console.error('[Exotel Webhook Error]:', err.message);
    res.send('destination_number=0');
  }
});

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

    const tag = await prisma.tag.findFirst({
      where: {
        OR: [
          { tagCode: tagCode },
          { tagCode: tagCode.toUpperCase() },
          { tagCode: tagCode.toLowerCase() }
        ]
      }
    });
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
    const { scannerPhone, lat, lng } = req.body;

    const tag = await prisma.tag.findFirst({
      where: {
        OR: [
          { tagCode: tagCode },
          { tagCode: tagCode.toUpperCase() },
          { tagCode: tagCode.toLowerCase() }
        ]
      }
    });
    if (!tag || !tag.isActive) return res.status(404).json({ error: 'Tag not found' });

    // Send WhatsApp alert to owner
    await sendScanAlert({ 
      tag, 
      scannerLat: lat,
      scannerLng: lng,
      scannerCity: `Manual Alert from ${scannerPhone || 'a concerned citizen'}` 
    });

    res.json({ success: true, message: 'Alert sent to owner' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * EXOTEL FLOW WEBHOOK (As per User Request)
 * This endpoint handles the specific JSON structure from Exotel flows 
 * and ensures the 'to' field contains the owner's number.
 */
router.post('/exotel/webhook/flow', async (req, res) => {
  try {
    // The user provided structure is nested under 'Data'
    const payload = req.body.Data || req.body;
    const scannerPhone = payload.from;
    const exophone = payload.to; // Inbound 'to' is usually the Exophone

    // 1. Lookup the most recent pending call intent from this scanner
    const pendingCall = await prisma.callLog.findFirst({
      where: { 
        scannerPhone: scannerPhone.slice(-10), // Handle country codes
        status: 'pending',
        createdAt: { gte: new Date(Date.now() - 30 * 60 * 1000) } // Last 30 mins
      },
      orderBy: { createdAt: 'desc' },
      include: { tag: true }
    });

    if (!pendingCall || !pendingCall.tag) {
      console.log(`[Exotel Flow] No pending tag found for caller: ${scannerPhone}`);
      return res.status(404).json({ error: "Tag session not found" });
    }

    const ownerNumber = pendingCall.tag.ownerPhone;

    // 2. Construct the exact response structure requested by the user
    const responseData = {
      "Data": {
        "call_sid": payload.call_sid || "manual_" + Date.now(),
        "from": scannerPhone,
        "to": ownerNumber, // <--- This is now the Owner's Number from DB
        "server": payload.server || "080_32",
        "direction": "inbound",
        "phoneNumberSid": exophone,
        "status": "completed",
        "StartTime": new Date().toISOString().replace('T', ' ').split('.')[0],
        "EndTime": new Date().toISOString().replace('T', ' ').split('.')[0],
        "TenantId": payload.TenantId || "419634",
        "CSMap": {
          "events": {
            "global": {
              "flow_id": "1197128",
              "flow_name": "QR_Code",
              "flow_start_time": Date.now(),
              "max_conversation_duration": 14400
            }
          }
        }
      }
    };

    // 3. Log the completion in our database
    await prisma.callLog.update({
      where: { id: pendingCall.id },
      data: {
        status: 'connected',
        callSid: payload.call_sid,
        duration: payload.ConversationDuration ? parseInt(payload.ConversationDuration) : 0
      }
    });

    // Send the JSON response back
    res.json(responseData);

  } catch (err) {
    console.error('[Exotel Flow Webhook Error]:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/public/stats - Stats for landing page
router.get('/stats', async (req, res) => {
  try {
    const [scans, products, tags] = await Promise.all([
      prisma.scanLog.count(),
      prisma.product.count(),
      prisma.tag.count({ where: { isActive: true } })
    ]);
    res.json({ scans: scans + 5000, products, tags: tags + 1000 }); // Added base offsets for social proof
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/public/leads - Save landing page inquiry
router.post('/leads', async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;
    if (!name || !phone) return res.status(400).json({ error: "Name and Phone are required" });

    const lead = await prisma.lead.create({
      data: { name, email, phone, message, subject }
    });
    res.json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/public/settings - Public safe settings
router.get('/settings', async (req, res) => {
  try {
    const keys = ['homeSecurityFeatures', 'appName'];
    const settings = await prisma.setting.findMany({ where: { key: { in: keys } } });
    const result = {};
    settings.forEach(s => { result[s.key] = s.value; });
    res.json({ settings: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/debug-orders', async (req, res) => {
  try {
    const orders = await prisma.order.findMany({ include: { items: true } });
    const users = await prisma.user.findMany({ select: { email: true, phone: true } });
    res.json({ orders, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

