
const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');
const fs = require('fs');

async function migrate() {
  const railwayUrl = "postgresql://postgres:SRXgaNrmrgMSpjGbNdowQvhZSYZGnUxn@maglev.proxy.rlwy.net:32688/railway";
  
  console.log("Connecting to Railway...");
  // We use a temporary prisma client for railway
  const railwayPrisma = new PrismaClient({
    datasources: { db: { url: railwayUrl } }
  });

  try {
    console.log("Fetching Admins...");
    const admins = await railwayPrisma.admin.findMany();
    console.log(`Found ${admins.length} admins.`);

    console.log("Fetching Users...");
    const users = await railwayPrisma.user.findMany();
    console.log(`Found ${users.length} users.`);

    console.log("Fetching Tags...");
    const tags = await railwayPrisma.tag.findMany();
    console.log(`Found ${tags.length} tags.`);

    const data = { admins, users, tags };
    fs.writeFileSync('migration_dump.json', JSON.stringify(data, null, 2));
    console.log("Dump saved to migration_dump.json");

  } catch (e) {
    console.error("Migration failed:", e);
  } finally {
    await railwayPrisma.$disconnect();
  }
}

migrate();
