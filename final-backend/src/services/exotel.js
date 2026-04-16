const axios = require('axios');

/**
 * Exotel Call Masking Service
 * Exotel calls owner first, then connects scanner – neither sees real numbers
 */
const initiateExotelCall = async ({ ownerPhone, scannerPhone, tagCode }) => {
  const { EXOTEL_SID, EXOTEL_API_KEY, EXOTEL_API_TOKEN, EXOTEL_CALLER_ID, EXOTEL_SUBDOMAIN } = process.env;

  // Exotel Connect Call API
  const url = `https://${EXOTEL_API_KEY}:${EXOTEL_API_TOKEN}@${EXOTEL_SUBDOMAIN}/v1/Accounts/${EXOTEL_SID}/Calls/connect.json`;

  const params = new URLSearchParams({
    From: scannerPhone,
    To: ownerPhone,
    CallerId: EXOTEL_CALLER_ID,
    Record: 'false',
    CustomField: `tag:${tagCode}`,
  });

  const response = await axios.post(url, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return response.data;
};

/**
 * Send SMS via Exotel
 */
const sendExotelSms = async ({ to, message }) => {
  const { EXOTEL_SID, EXOTEL_API_KEY, EXOTEL_API_TOKEN, EXOTEL_CALLER_ID, EXOTEL_SUBDOMAIN } = process.env;

  const url = `https://${EXOTEL_API_KEY}:${EXOTEL_API_TOKEN}@${EXOTEL_SUBDOMAIN}/v1/Accounts/${EXOTEL_SID}/Sms/send.json`;

  const params = new URLSearchParams({
    From: EXOTEL_CALLER_ID,
    To: to,
    Body: message,
  });

  const response = await axios.post(url, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return response.data;
};

/**
 * Send WhatsApp via Exotel
 */
const sendExotelWhatsapp = async ({ to, templateName, components = [] }) => {
  const { EXOTEL_SID, EXOTEL_API_KEY, EXOTEL_API_TOKEN, EXOTEL_SUBDOMAIN } = process.env;
  
  // Needs whatsapp credentials from DB settings in real flow, or env.
  // For Exotel WhatsApp (v2 API):
  const url = `https://${EXOTEL_API_KEY}:${EXOTEL_API_TOKEN}@${EXOTEL_SUBDOMAIN}/v2/accounts/${EXOTEL_SID}/messages`;
  
  // Here we assume settings will be injected or parsed 
  // Exotel requires 'from' number which is the WhatsApp Business Number.
  // Currently we just log this intent as the full integration depends on the user entering their WhatsApp number in settings.
  
  const payload = {
    whatsapp: {
      messages: [
        {
          to: to,
          content: {
            type: "template",
            template: {
              name: templateName,
              language: {
                policy: "deterministic",
                code: "en"
              },
              components: components
            }
          }
        }
      ]
    }
  };

  const response = await axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  return response.data;
};

module.exports = { initiateExotelCall, sendExotelSms, sendExotelWhatsapp };
