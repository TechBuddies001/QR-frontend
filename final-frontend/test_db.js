const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const code = 'VH-OQQ0CH';
  const tag = await prisma.tag.findUnique({ where: { tagCode: code } });
  console.log('Tag QR URL:', tag ? tag.qrUrl : 'not found');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
