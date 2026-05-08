const path = require('path');
const { PrismaClient } = require('../../final-backend/generated/prisma');

const dbUrl = 'file:' + path.resolve(__dirname, '../../final-backend/prisma/dev.db');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: dbUrl
    }
  }
});

const plans = [
  { name: "basic", displayName: "Basic Protection", price: 0, validityDays: 365, features: JSON.stringify(["QR Scan Alerts", "Basic Support"]) },
  { name: "standard", displayName: "Standard Security", price: 499, validityDays: 365, features: JSON.stringify(["Call Masking", "SMS Alerts", "Location Tracking"]) },
  { name: "premium", displayName: "Premium Ecosystem", price: 999, validityDays: 365, features: JSON.stringify(["Ambulance Alert", "Priority Support", "Family Notification", "Cloud Backup"]) }
];

const sponsors = [
  { name: "Tarkshya Motors", description: "Leading vehicle safety partner." },
  { name: "Jiyo Health", description: "Premium medical response provider." },
  { name: "SecureTech India", description: "Cybersecurity and digital asset protection." }
];

const users = [
  { email: "john.doe@example.com", password: "hashed_password", name: "John Doe", phone: "9876543210" },
  { email: "jane.smith@example.com", password: "hashed_password", name: "Jane Smith", phone: "9876543211" },
  { email: "raj.kumar@example.com", password: "hashed_password", name: "Raj Kumar", phone: "9876543212" }
];

const leads = [
  { name: "Alice Wonderland", email: "alice@example.com", phone: "9988776655", message: "Interested in bulk corporate badges.", subject: "Corporate Inquiry" },
  { name: "Bob Builder", email: "bob@example.com", phone: "9988776656", message: "How do I secure my fleet of trucks?", subject: "Fleet Security" },
  { name: "Charlie Chaplin", email: "charlie@example.com", phone: "9988776657", message: "Need support for pet tag.", subject: "Support" }
];

async function seedMore() {
  console.log("Seeding more dummy data...");
  try {
    let admin = await prisma.admin.findFirst();
    if (!admin) {
        admin = await prisma.admin.create({
            data: {
                email: "admin@tarkshya.com",
                password: "dummy",
                name: "Tarkshya Admin"
            }
        });
    }

    // Seed Plans
    for (const p of plans) {
      await prisma.plan.upsert({
        where: { name: p.name },
        update: p,
        create: p
      });
      console.log("Created/Updated Plan:", p.displayName);
    }

    // Seed Sponsors
    const createdSponsors = [];
    for (const s of sponsors) {
      const sp = await prisma.sponsor.create({ data: s });
      createdSponsors.push(sp);
      console.log("Created Sponsor:", s.name);
    }

    // Seed Users
    const createdUsers = [];
    for (const u of users) {
      const existing = await prisma.user.findUnique({ where: { email: u.email } });
      if (!existing) {
          const usr = await prisma.user.create({ data: u });
          createdUsers.push(usr);
          console.log("Created User:", u.name);
      } else {
          createdUsers.push(existing);
      }
    }

    // Seed Leads
    for (const l of leads) {
      await prisma.lead.create({ data: l });
      console.log("Created Lead:", l.name);
    }

    // Seed Tags (QR Tags)
    if (admin) {
        for (let i = 1; i <= 10; i++) {
            const tagCode = 'TKG' + Math.random().toString(36).substring(2, 6).toUpperCase() + i;
            await prisma.tag.create({
                data: {
                    tagCode: tagCode,
                    ownerName: "Owner " + i,
                    ownerPhone: "900000000" + i,
                    assetModel: i % 2 === 0 ? "Honda City" : "MacBook Pro",
                    assetColor: i % 2 === 0 ? "White" : "Silver",
                    assetNumber: "KA01XX" + (1000 + i),
                    planType: i % 3 === 0 ? "premium" : "standard",
                    adminId: admin.id,
                    userId: createdUsers[i % createdUsers.length]?.id,
                    sponsorId: createdSponsors[i % createdSponsors.length]?.id
                }
            });
            console.log("Created Tag:", tagCode);
        }
    }

    // Seed Orders
    for (let i = 1; i <= 5; i++) {
        await prisma.order.create({
            data: {
                orderNumber: "ORD-2024-" + (1000 + i),
                totalAmount: i * 500,
                status: i % 2 === 0 ? "DELIVERED" : "PROCESSING",
                paymentStatus: "PAID",
                customerName: "Customer " + i,
                customerEmail: `customer${i}@example.com`,
                customerPhone: "987600000" + i,
                shippingAddress: "123 Security Avenue, Tech Park",
                items: {
                    create: [
                        {
                            productId: "dummy-id-" + i,
                            productName: "Premium Smart Tag " + i,
                            quantity: 1,
                            price: i * 500,
                            totalPrice: i * 500
                        }
                    ]
                }
            }
        });
        console.log("Created Order: ORD-2024-" + (1000 + i));
    }

    console.log("Extra Seeding complete!");
  } catch (error) {
    console.error("Error seeding extra data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedMore();
