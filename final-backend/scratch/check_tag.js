const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function checkTag() {
  try {
    const tag = await prisma.tag.findUnique({
      where: { tagCode: 'VH-B823BL' }
    });
    console.log('Tag Info:', JSON.stringify(tag, null, 2));
  } catch (err) {
    console.error('Error fetching tag:', err);
  } finally {
    await prisma.$disconnect();
  }
}

checkTag();
