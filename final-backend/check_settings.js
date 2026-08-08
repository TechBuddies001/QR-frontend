const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const settings = await prisma.setting.findMany();
  console.log(JSON.stringify(settings, null, 2));
}

main();
