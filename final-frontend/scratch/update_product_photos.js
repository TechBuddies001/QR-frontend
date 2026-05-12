const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.findMany();
  for (const product of products) {
    if (product.name.includes('Bike')) {
      await prisma.product.update({
        where: { id: product.id },
        data: { photos: JSON.stringify(['/assets/vehicle_sticker_1.jpg', '/assets/vehicle_sticker_2.jpg']) }
      });
      console.log('Updated Bike product');
    } else if (product.name.includes('Car')) {
      await prisma.product.update({
        where: { id: product.id },
        data: { photos: JSON.stringify(['/assets/vehicle_sticker_1.jpg', '/assets/vehicle_sticker_2.jpg']) }
      });
      console.log('Updated Car product');
    } else if (product.name.includes('Elderly') || product.name.includes('Card') || product.name.includes('Student')) {
      await prisma.product.update({
        where: { id: product.id },
        data: { photos: JSON.stringify(['/assets/student_id_1.jpg', '/assets/student_id_2.jpg']) }
      });
      console.log('Updated ID product');
    }
  }
  console.log('Done!');
}
main().catch(console.error).finally(() => prisma.$disconnect());
