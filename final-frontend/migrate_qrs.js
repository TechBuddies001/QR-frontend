
require('dotenv').config();
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const { generateQRCode } = require('./src/services/qrGenerator');

async function main() {
    const tags = await prisma.tag.findMany();
    console.log(`Processing ${tags.length} tags...`);

    for (const tag of tags) {
        console.log(`Updating & Regenerating QR for: ${tag.tagCode}`);

        try {
            // Generate new QR image - it will use process.env.PUBLIC_TAG_BASE_URL if set,
            // or the production default if NODE_ENV=production
            const qr = await generateQRCode(
                tag.tagCode, 
                tag.designType || 'standard', 
                null, 
                tag.assetType,
                tag.customAssetType
            );
            
            // Update database with new URLs
            await prisma.tag.update({
                where: { id: tag.id },
                data: {
                    qrUrl: qr.publicUrl,
                    qrImagePath: qr.qrImageUrl
                }
            });
        } catch (err) {
            console.error(`Failed to update ${tag.tagCode}:`, err.message);
        }
    }
    console.log('Migration complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
