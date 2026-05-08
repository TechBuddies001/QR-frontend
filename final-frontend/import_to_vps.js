
const { PrismaClient } = require('../generated/prisma');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function importData() {
  const dumpPath = path.join(__dirname, 'migration_dump.json');
  if (!fs.existsSync(dumpPath)) {
    console.error("Dump file not found!");
    return;
  }

  const data = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));

  try {
    console.log("Starting import...");

    // 1. Sponsors
    if (data.Sponsor) {
        console.log(`Importing ${data.Sponsor.length} Sponsors...`);
        for (const s of data.Sponsor) {
            await prisma.sponsor.upsert({
                where: { id: s.id },
                update: s,
                create: s
            }).catch(e => console.log("Sponsor already exists or error"));
        }
    }

    // 2. Plans
    if (data.Plan) {
        console.log(`Importing ${data.Plan.length} Plans...`);
        for (const p of data.Plan) {
            await prisma.plan.upsert({
                where: { name: p.name },
                update: p,
                create: p
            }).catch(e => console.log("Plan skip"));
        }
    }

    // 3. Admins
    if (data.Admin) {
        console.log(`Importing ${data.Admin.length} Admins...`);
        for (const a of data.Admin) {
            await prisma.admin.upsert({
                where: { email: a.email },
                update: a,
                create: a
            }).catch(e => console.log("Admin skip"));
        }
    }

    // 4. Users
    if (data.User) {
        console.log(`Importing ${data.User.length} Users...`);
        for (const u of data.User) {
            await prisma.user.upsert({
                where: { email: u.email },
                update: u,
                create: u
            }).catch(e => console.log("User skip"));
        }
    }

    // 5. Tags
    if (data.Tag) {
        console.log(`Importing ${data.Tag.length} Tags...`);
        let count = 0;
        for (const t of data.Tag) {
            const { sponsor, user, admin, callLogs, scanLogs, smsLogs, ...tagData } = t;
            
            if (!tagData.dynamicData) tagData.dynamicData = "[]";
            if (!tagData.photos) tagData.photos = "[]";
            
            if (tagData.createdAt) tagData.createdAt = new Date(tagData.createdAt);
            if (tagData.updatedAt) tagData.updatedAt = new Date(tagData.updatedAt);
            if (tagData.expiresAt) tagData.expiresAt = new Date(tagData.expiresAt);

            await prisma.tag.upsert({
                where: { tagCode: t.tagCode },
                update: tagData,
                create: tagData
            });
            count++;
        }
        console.log(`Successfuly imported/updated ${count} tags.`);
    }

    console.log("Migration complete!");

  } catch (e) {
    console.error("Import failed:", e);
  } finally {
    await prisma.$disconnect();
  }
}

importData();
