const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrateUrls() {
  try {
    const oldBase = 'https://q-rscanner-mu.vercel.app/tag';
    const newBase = 'https://tarkshyasolution.in/tag';
    
    const tags = await prisma.tag.findMany();
    console.log(`Found ${tags.length} tags to check...`);

    let updatedCount = 0;
    for (const tag of tags) {
      if (tag.qrUrl.includes('vercel.app') || tag.qrUrl.includes('admin.tarkshyasolution.in')) {
        const newUrl = tag.qrUrl.replace(/https:\/\/[^/]+\/tag/, newBase);
        await prisma.tag.update({
          where: { id: tag.id },
          data: { qrUrl: newUrl }
        });
        updatedCount++;
      }
    }

    console.log(`Migration complete. Updated ${updatedCount} tags.`);
  } catch (err) {
    console.error('Migration failed:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

migrateUrls();
