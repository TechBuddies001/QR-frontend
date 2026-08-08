
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
    const tags = await prisma.tag.findMany();
    console.log(JSON.stringify(tags, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
