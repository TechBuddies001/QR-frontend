require('dotenv').config();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Admin
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin@123', 12);
  const admin = await prisma.admin.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@tarkshya.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@tarkshya.com',
      password: hashedPassword,
      name: process.env.ADMIN_NAME || 'Tarkshya Admin',
      role: 'admin',
    },
  });
  console.log('✅ Admin created:', admin.email);

  // Seed Plans
  const plans = [
    { name: 'free_trial', displayName: 'Free Trial', price: 0, validityDays: 30, features: JSON.stringify(['1 QR Tag', 'Basic Alert System', 'Standard Support']) },
    { name: 'basic', displayName: 'Basic', price: 299, validityDays: 365, features: JSON.stringify(['1 QR Tag', 'Call Masking', 'Scan Alerts', 'Email Support']) },
    { name: 'standard', displayName: 'Standard', price: 599, validityDays: 730, features: JSON.stringify(['3 QR Tags', 'Call Masking', 'SMS Alerts', 'Priority Support', 'Emergency Contact']) },
    { name: 'premium', displayName: 'Premium', price: 1499, validityDays: 1825, features: JSON.stringify(['10 QR Tags', 'Call Masking', 'SMS Alerts', 'Emergency Contact', 'Sponsor Branding', '24/7 Support', 'Analytics']) },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: {},
      create: plan,
    });
    console.log('✅ Plan upserted:', plan.name);
  }

  // Seed Sample Sponsor
  const sponsor = await prisma.sponsor.upsert({
    where: { id: 'sample-sponsor-id' },
    update: {},
    create: {
      id: 'sample-sponsor-id',
      name: 'Nek Insan Foundation',
      website: 'https://nekinsan.org',
      description: 'Helping lost assets find their way home.',
      isActive: true,
    },
  }).catch(() => null);
  if (sponsor) console.log('✅ Sample sponsor created');

  // Seed Sample Tag
  const { generateQRCode } = require('./services/qrGenerator');
  const tagCode = 'VH-DEMO01';
  const existingTag = await prisma.tag.findUnique({ where: { tagCode } });

  if (!existingTag) {
    const qr = await generateQRCode(tagCode);
    await prisma.tag.create({
      data: {
        tagCode,
        qrUrl: qr.publicUrl,
        qrImagePath: qr.qrImageUrl,
        ownerName: 'Vikas Kumar',
        ownerPhone: '9999999999',
        emergencyContact: '8888888888',
        customMessage: 'This vehicle belongs to Vikas Kumar. Please contact if found.',
        address: 'Delhi, India',
        assetType: 'vehicle',
        planType: 'premium',
        isActive: true,
        adminId: admin.id,
        expiresAt: new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000),
      },
    });
    console.log('✅ Demo tag created:', tagCode);
  }

  // Seed Settings
  const settings = [
    { key: 'site_name', value: 'Tarkshya Solution' },
    { key: 'site_email', value: 'support@tarkshya.com' },
    { key: 'site_phone', value: '+91-9999999999' },
    { key: 'sms_enabled', value: 'true' },
    { key: 'call_enabled', value: 'true' },
    { key: 'location_sms', value: 'true' },
  ];
  for (const s of settings) {
    await prisma.setting.upsert({ where: { key: s.key }, update: {}, create: s });
  }
  console.log('✅ Settings seeded');

  console.log('\n✨ Database seeded successfully!');
  console.log('🔑 Admin Login:', process.env.ADMIN_EMAIL || 'admin@tarkshya.com');
  console.log('🔑 Admin Password:', process.env.ADMIN_PASSWORD || 'Admin@123');
  console.log('🏷️  Demo Tag URL:', `${process.env.PUBLIC_TAG_BASE_URL || 'http://localhost:3000/tag'}/${tagCode}`);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
