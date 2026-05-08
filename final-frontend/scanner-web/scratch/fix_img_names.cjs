// Fix: assign correct img.icons8.com/fluency icons to all products
// Also fills in empty photo arrays
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

// Map product name → correct fluency icon URL
const iconMap = {
  'Luggge Security QR Tag':      'https://img.icons8.com/fluency/200/suitcase.png',
  'Luggage Smart Tag':            'https://img.icons8.com/fluency/200/suitcase.png',
  'Smart QR Doorbell Plate':      'https://img.icons8.com/fluency/200/door-sensor.png',
  'Smart Door Scanner':           'https://img.icons8.com/fluency/200/door-sensor.png',
  'Laptop Security QR Skin':      'https://img.icons8.com/fluency/200/laptop.png',
  'Laptop Recovery Sticker':      'https://img.icons8.com/fluency/200/laptop.png',
  'Elderly SOS Emergency Card':   'https://img.icons8.com/fluency/200/first-aid-kit.png',
  'Elder Medical Card':           'https://img.icons8.com/fluency/200/first-aid-kit.png',
  'Kid-Safety QR Wristband':      'https://img.icons8.com/fluency/200/baby.png',
  "Kid's Safety Bracelet":        'https://img.icons8.com/fluency/200/baby.png',
  'Smart-Pet QR ID Tag':          'https://img.icons8.com/fluency/200/dog.png',
  'Pet Collar Smart Tag':         'https://img.icons8.com/fluency/200/dog.png',
  'KAWACH Bike Security Sticker': 'https://img.icons8.com/fluency/200/motorcycle.png',
  'Smart Motorcycle ID':          'https://img.icons8.com/fluency/200/motorcycle.png',
  'KAWACH Pro Car Security Kit':  'https://img.icons8.com/fluency/200/car.png',
  'Premium Car Dash Tag':         'https://img.icons8.com/fluency/200/car.png',
  'Corporate Safety Badge':       'https://img.icons8.com/fluency/200/briefcase.png',
};

async function fix() {
  const products = await prisma.product.findMany({ select: { id: true, name: true, photos: true } });
  let fixed = 0;
  for (const p of products) {
    const correctUrl = iconMap[p.name];
    if (correctUrl) {
      await prisma.product.update({ where: { id: p.id }, data: { photos: JSON.stringify([correctUrl]) } });
      console.log(`Fixed "${p.name}" → ${correctUrl}`);
      fixed++;
    }
  }
  console.log(`\nDone. Fixed ${fixed} products.`);
  await prisma.$disconnect();
}

fix().catch(e => { console.error(e); process.exit(1); });
