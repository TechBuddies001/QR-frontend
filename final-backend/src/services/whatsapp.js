const axios = require('axios');

/**
 * Send WhatsApp via Meta Cloud API (Official)
 * Using standard text messages (assumes 24-hour service window is open)
 */
const sendWhatsAppMessage = async ({ to, message }) => {
  const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
  const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;

  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID) {
    console.warn(`[WhatsApp API] Missing WHATSAPP_TOKEN or WHATSAPP_PHONE_ID. Message to ${to} was not sent.`);
    console.log(`[WhatsApp API] Message Content: ${message}`);
    return null;
  }

  const url = `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: to,
    type: "text",
    text: { body: message }
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('[WhatsApp API] Error:', error.response?.data || error.message);
    throw error;
  }
};

module.exports = { sendWhatsAppMessage };
