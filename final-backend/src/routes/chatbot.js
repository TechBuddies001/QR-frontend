const express = require('express');
const router = express.Router();
const prisma = require('../lib/prisma');

const geminiApiKey = process.env.GEMINI_API_KEY;
// Note: using @google/genai syntax: const ai = new GoogleGenerativeAI({ apiKey: geminiApiKey });
// Wait, @google/genai might have a different export. The standard is @google/generative-ai.
// Let me use standard fetch API to Google Gemini to avoid package version issues if @google/genai is tricky.
// Or I can just require('@google/generative-ai') since I installed @google/genai? 
// No, I installed @google/genai. Wait, the official new one is @google/genai.
// Let's use axios to call the Gemini API endpoint directly to be absolutely safe and dependency-free,
// because axios is already in package.json.

const axios = require('axios');

router.post('/message', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!geminiApiKey) {
      return res.status(500).json({ reply: "Gemini API Key is not configured. Please add GEMINI_API_KEY to your .env file." });
    }

    const systemInstruction = `You are a helpful sales and support assistant for V-Kawach (Tarkshya Solutions). 
    You sell Smart QR tags for vehicles, pets, and personal use. Features include call masking, 100% privacy, instant WhatsApp alerts, and emergency helplines.
    Your goal is to answer questions politely. You must support both English and Hindi languages. If the user asks in Hindi or Hinglish, you MUST reply in Hindi or Hinglish.
    IMPORTANT: If a user explicitly asks to buy a product, or wants a callback, or asks for pricing and shows intent, you MUST ask for their Name and Phone number.
    If the user PROVIDES their name and phone number, you MUST reply ONLY with a JSON object in this exact format:
    { "intent": "LEAD", "name": "user name", "phone": "user phone", "inquiry": "brief summary of what they want" }
    Otherwise, reply normally in plain text. Keep answers brief (1-3 sentences max).`;

    // Format history for Gemini API
    const formattedContents = [];
    if (history && history.length > 0) {
      for (const msg of history) {
        formattedContents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      }
    }
    
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const payload = {
      system_instruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: formattedContents,
      generationConfig: {
        temperature: 0.2,
      }
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${geminiApiKey}`,
      payload
    );

    const replyText = response.data.candidates[0].content.parts[0].text.trim();

    // Check if the reply is a JSON lead object
    try {
      if (replyText.startsWith('{') && replyText.includes('"intent": "LEAD"')) {
        const leadData = JSON.parse(replyText);
        
        // Save to database
        await prisma.lead.create({
          data: {
            name: leadData.name || 'Unknown',
            phone: leadData.phone || 'Unknown',
            message: leadData.inquiry || 'Captured via chatbot',
            subject: 'Chatbot Lead'
          }
        });

        return res.json({ 
          reply: `Thank you, ${leadData.name}. I have forwarded your request to our team. They will contact you shortly at ${leadData.phone}!`
        });
      }
    } catch (e) {
      // Not JSON or parse error, continue
    }

    res.json({ reply: replyText });

  } catch (err) {
    console.error('Chatbot error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;
