const https = require('https');

const API_BASE = 'https://admin.tarkshyasolution.in/api';

// Admin credentials
const ADMIN_EMAIL = 'admin@tarkshya.com';
const ADMIN_PASS  = 'admin123';

async function request(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const url = new URL(API_BASE + path);
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(data && { 'Content-Length': Buffer.byteLength(data) }),
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };
    const req = https.request(options, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); }
        catch { resolve(d); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function main() {
  console.log('🔑 Logging in...');
  const loginRes = await request('POST', '/auth/login', { email: ADMIN_EMAIL, password: ADMIN_PASS });
  const token = loginRes.token;
  if (!token) { console.error('❌ Login failed:', loginRes); process.exit(1); }
  console.log('✅ Logged in');

  const existing = await request('GET', '/plans?showAll=true', null, token);
  const existingPlans = existing.plans || [];
  console.log(`📋 Found ${existingPlans.length} existing plans`);

  const PLANS = [
    {
      name: 'car_lite',
      displayName: 'Car Lite QR',
      productTitle: 'Car Lite QR',
      price: 199,
      validityDays: 365,
      tier: 'Lite',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: ['only scan', 'connect to call', 'normal call and WhatsApp'],
    },
    {
      name: 'bike_lite',
      displayName: 'Bike Lite QR',
      productTitle: 'Bike Lite QR',
      price: 149,
      validityDays: 365,
      tier: 'Lite',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: ['only scan', 'connect to call', 'normal call and WhatsApp'],
    },
    {
      name: 'car_pro',
      displayName: 'Car Pro QR',
      productTitle: 'Car Pro QR',
      price: 399,
      validityDays: 365,
      tier: 'Pro',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: ['masking', '100% privacy', 'WhatsApp masking'],
    },
    {
      name: 'bike_pro',
      displayName: 'Bike Pro QR',
      productTitle: 'Bike Pro QR',
      price: 299,
      validityDays: 365,
      tier: 'Pro',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: ['masking', '100% privacy', 'WhatsApp masking'],
    },
    {
      name: 'car_elite',
      displayName: 'Car Elite QR',
      productTitle: 'Car Elite QR',
      price: 599,
      validityDays: 365,
      tier: 'Elite',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: ['customer photo', 'masking', '100% privacy', 'WhatsApp masking', 'Tap to connect'],
    },
    {
      name: 'bike_elite',
      displayName: 'Bike Elite QR',
      productTitle: 'Bike Elite QR',
      price: 499,
      validityDays: 365,
      tier: 'Elite',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: ['customer photo', 'masking', '100% privacy', 'WhatsApp masking', 'Tap to connect'],
    },
  ];

  for (const plan of PLANS) {
    const existing_plan = existingPlans.find(p => p.name === plan.name);
    if (existing_plan) {
      const res = await request('PUT', `/plans/${existing_plan.id}`, plan, token);
      console.log(`✏️  Updated: ${plan.displayName} (${plan.tier})`);
    } else {
      const res = await request('POST', '/plans', plan, token);
      console.log(`✅ Created: ${plan.displayName} (${plan.tier})`);
    }
  }

  console.log('\n🎉 All plans seeded successfully!');
}

main().catch(console.error);
