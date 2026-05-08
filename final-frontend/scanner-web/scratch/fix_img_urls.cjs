const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
async function fix() {
  const products = await prisma.product.findMany({ select: { id: true, photos: true } });
  let fixed = 0;
  for (const p of products) {
    const photos = JSON.parse(p.photos || '[]');
    const updated = photos.map(u => u.replace('images.icons8.com', 'img.icons8.com').replace('/bubbles/', '/fluency/'));
    if (JSON.stringify(photos) !== JSON.stringify(updated)) {
      await prisma.product.update({ where: { id: p.id }, data: { photos: JSON.stringify(updated) } });
      fixed++;
    }
  }
  console.log('Fixed', fixed, 'products');
  await prisma.$disconnect();
}
fix().catch(e => { console.error(e); process.exit(1); });
