const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const tagCode = '4r34r4';
  const tag = await prisma.tag.findFirst({
    where: {
      OR: [
        { tagCode: tagCode },
        { tagCode: tagCode.toUpperCase() }
      ]
    }
  });
  console.log('TAG_SEARCH_RESULT:', JSON.stringify(tag, null, 2));
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
