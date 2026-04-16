const { sendExotelWhatsapp } = require('./exotel');
const prisma = require('../lib/prisma');

/**
 * Send scan alert WhatsApp to tag owner
 */
const sendScanAlert = async ({ tag, scannerLat, scannerLng, scannerCity }) => {
  try {
    const mapsLink = scannerLat && scannerLng
      ? `https://maps.google.com/?q=${scannerLat},${scannerLng}`
      : 'Location not shared';

    const location = scannerCity || (scannerLat ? `${scannerLat}, ${scannerLng}` : 'Unknown');

    // Assume settings fetched template name, otherwise fallback
    const result = await sendExotelWhatsapp({
      to: tag.ownerPhone,
      templateName: "scan_alert_wa",
      components: [
        { type: "body", parameters: [{ type: "text", text: tag.tagCode }, { type: "text", text: location }, { type: "text", text: mapsLink }] }
      ]
    });

    // Log to DB
    await prisma.smsLog.create({
      data: {
        tagId: tag.id,
        recipient: tag.ownerPhone,
        message: `Template: scan_alert_wa [Location: ${location}]`,
        status: 'sent',
        provider: 'exotel_whatsapp',
      },
    });

    return result;
  } catch (err) {
    console.error('WhatsApp send failed:', err.message);
    await prisma.smsLog.create({
      data: {
        tagId: tag.id,
        recipient: tag.ownerPhone,
        message: `Template: scan_alert_wa [Location: ${scannerCity || 'Unknown'}]`,
        status: 'failed',
        provider: 'exotel_whatsapp',
      },
    });
    throw err;
  }
};

module.exports = { sendScanAlert };
