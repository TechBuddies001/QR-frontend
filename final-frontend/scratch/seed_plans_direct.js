const prisma = require('./src/lib/prisma');

async function main() {
  const PLANS = [
    {
      name: 'car_lite',
      displayName: 'Car Lite QR',
      productTitle: 'Car Lite QR',
      price: 199,
      validityDays: 365,
      tier: 'Lite',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: JSON.stringify(['only scan', 'connect to call', 'normal call and WhatsApp']),
    },
    {
      name: 'bike_lite',
      displayName: 'Bike Lite QR',
      productTitle: 'Bike Lite QR',
      price: 149,
      validityDays: 365,
      tier: 'Lite',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: JSON.stringify(['only scan', 'connect to call', 'normal call and WhatsApp']),
    },
    {
      name: 'car_pro',
      displayName: 'Car Pro QR',
      productTitle: 'Car Pro QR',
      price: 399,
      validityDays: 365,
      tier: 'Pro',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: JSON.stringify(['masking', '100% privacy', 'WhatsApp masking']),
    },
    {
      name: 'bike_pro',
      displayName: 'Bike Pro QR',
      productTitle: 'Bike Pro QR',
      price: 299,
      validityDays: 365,
      tier: 'Pro',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: JSON.stringify(['masking', '100% privacy', 'WhatsApp masking']),
    },
    {
      name: 'car_elite',
      displayName: 'Car Elite QR',
      productTitle: 'Car Elite QR',
      price: 599,
      validityDays: 365,
      tier: 'Elite',
      image: '/assets/car_qr_tag_mockup_1776107740073.png',
      features: JSON.stringify(['customer photo', 'masking', '100% privacy', 'WhatsApp masking', 'Tap to connect']),
    },
    {
      name: 'bike_elite',
      displayName: 'Bike Elite QR',
      productTitle: 'Bike Elite QR',
      price: 499,
      validityDays: 365,
      tier: 'Elite',
      image: '/assets/pet_qr_tag_mockup_1776107762376.png',
      features: JSON.stringify(['customer photo', 'masking', '100% privacy', 'WhatsApp masking', 'Tap to connect']),
    },
  ];

  for (const plan of PLANS) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: plan,
      create: plan,
    });
    console.log(`✅ Upserted ${plan.displayName}`);
  }
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
