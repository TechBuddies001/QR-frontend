const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function run() {
  console.log("Starting DB update for Vehicle products...");

  // 1. Update existing Bike sticker to be "Lite Bike Security Sticker" with MRP 299
  const bikeLite = await prisma.product.update({
    where: { id: '059ce948-b8cb-401e-85fa-3e68ce1dd59d' },
    data: {
      name: 'Lite Bike Security Sticker',
      mrp: 299
    }
  });
  console.log("Updated Lite Bike Sticker:", bikeLite.name, "MRP:", bikeLite.mrp);

  // 2. Update existing Motorcycle sticker to be "Premium Bike Security Sticker" with MRP 499
  const bikePremium = await prisma.product.update({
    where: { id: '03837e65-1162-46e7-9e91-57bf4440bdf3' },
    data: {
      name: 'Premium Bike Security Sticker',
      mrp: 499
    }
  });
  console.log("Updated Premium Bike Sticker:", bikePremium.name, "MRP:", bikePremium.mrp);

  // 3. Create or update "Lite Car Safety Sticker" with MRP 499
  const carLite = await prisma.product.upsert({
    where: { productCode: 'VEH-QR-003' },
    update: {
      name: 'Lite Car Safety Sticker',
      brand: 'V-Kawach',
      mrp: 499,
      type: 'SAFETY',
      categoryId: '03ce8752-320e-478f-8542-c9ae72a8cc78',
      photos: JSON.stringify(["/uploads/photos/photo_1779687787973.png"]),
      dynamicData: JSON.stringify([
        { label: "Material", value: "Premium Vinyl" },
        { label: "Warranty", value: "1 Year" },
        { label: "Waterproof", value: "Yes" },
        { label: "UV Resistant", value: "Yes" }
      ]),
      isActive: true,
      adminId: '3acd5604-ee9b-44fd-a510-3e8553e47a28'
    },
    create: {
      productCode: 'VEH-QR-003',
      name: 'Lite Car Safety Sticker',
      brand: 'V-Kawach',
      mrp: 499,
      type: 'SAFETY',
      categoryId: '03ce8752-320e-478f-8542-c9ae72a8cc78',
      photos: JSON.stringify(["/uploads/photos/photo_1779687787973.png"]),
      dynamicData: JSON.stringify([
        { label: "Material", value: "Premium Vinyl" },
        { label: "Warranty", value: "1 Year" },
        { label: "Waterproof", value: "Yes" },
        { label: "UV Resistant", value: "Yes" }
      ]),
      isActive: true,
      adminId: '3acd5604-ee9b-44fd-a510-3e8553e47a28'
    }
  });
  console.log("Upserted Lite Car Sticker:", carLite.name, "MRP:", carLite.mrp);

  // 4. Ensure Premium Car Safety Sticker has MRP 999
  const carPremium = await prisma.product.update({
    where: { id: '969b3f40-f894-47c1-9d03-0db6f2bb27d5' },
    data: {
      name: 'Premium Car Safety Sticker',
      mrp: 999
    }
  });
  console.log("Ensured Premium Car Sticker:", carPremium.name, "MRP:", carPremium.mrp);

  console.log("DB update completed successfully!");
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
