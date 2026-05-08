// Fix elderly/medical product icons to valid fluency names
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const fixes = {
  'Elderly SOS Emergency Card': 'https://img.icons8.com/fluency/200/stethoscope.png',
  'Elder Medical Card':         'https://img.icons8.com/fluency/200/stethoscope.png',
  'Corporate Safety Badge':     'https://img.icons8.com/fluency/200/conference-call.png',
};

async function fix() {
  for (const [name, url] of Object.entries(fixes)) {
    const prod = await prisma.product.findFirst({ where: { name } });
    if (prod) {
      await prisma.product.update({ where: { id: prod.id }, data: { photos: JSON.stringify([url]) } });
      console.log(`Fixed "${name}" → ${url}`);
    } else {
      console.log(`Not found: "${name}"`);
    }
  }
  await prisma.$disconnect();
}
fix().catch(e => { console.error(e); process.exit(1); });
