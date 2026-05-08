// Comprehensive image assignment for all V-Kawach products
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function fix() {
  const products = await prisma.product.findMany({ select: { id: true, name: true } });

  // Car/vehicle image
  const carImage = '/uploads/products/car_sticker.jpg';
  // Laptop/gadget image
  const laptopImage = '/uploads/products/laptop_sticker.jpg';

  const assignments = {
    // Car image → vehicle, bike, car products
    'Premium Car Dash Tag': carImage,
    'Smart Motorcycle ID': carImage,
    'KAWACH Pro Car Security Kit': carImage,
    'KAWACH Bike Security Sticker': carImage,

    // Laptop image → laptop, gadget, skin, sticker, door, luggage, kid, pet, medical, corporate
    'Laptop Recovery Sticker': laptopImage,
    'Laptop Security QR Skin': laptopImage,
    'Smart Door Scanner': laptopImage,
    'Luggge Security QR Tag': laptopImage,
    'Luggage Smart Tag': laptopImage,
    'Kid-Safety QR Wristband': laptopImage,
    "Kid's Safety Bracelet": laptopImage,
    'Smart-Pet QR ID Tag': laptopImage,
    'Pet Collar Smart Tag': laptopImage,
    'Elderly SOS Emergency Card': laptopImage,
    'Elder Medical Card': laptopImage,
    'Corporate Safety Badge': laptopImage,
    'Smart QR Doorbell Plate': laptopImage,
  };

  for (const p of products) {
    const url = assignments[p.name];
    if (url) {
      await prisma.product.update({
        where: { id: p.id },
        data: { photos: JSON.stringify([url]) }
      });
      console.log(`✅ "${p.name}" → ${url}`);
    }
  }

  await prisma.$disconnect();
  console.log('\nAll done!');
}

fix().catch(e => { console.error(e); process.exit(1); });
