const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS WhatsappSession (
        id TEXT PRIMARY KEY,
        scannerPhone TEXT NOT NULL,
        ownerPhone TEXT NOT NULL,
        tagId TEXT NOT NULL,
        lastActivity DATETIME DEFAULT CURRENT_TIMESTAMP,
        isActive INTEGER DEFAULT 1,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('WhatsappSession table created successfully.');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
