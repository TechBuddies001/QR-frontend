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

const categories = [
  { name: "Vehicle Protection", icon: "Car", description: "Advanced anti-theft and parking security modules." },
  { name: "Personal Safety", icon: "ShieldAlert", description: "SOS and tracking solutions for individuals." },
  { name: "Medical Emergency", icon: "Activity", description: "Instant access to health records and emergency contacts." },
  { name: "Child Safety", icon: "Users", description: "Smart IDs and tracking for kids and students." },
  { name: "Pet Protection", icon: "Activity", description: "Lost and found tags with instant notifications." },
  { name: "Travel Security", icon: "Scan", description: "Luggage tracking and recovery solutions." },
  { name: "Gadget Shield", icon: "Smartphone", description: "Device recovery and ownership verification." },
  { name: "Smart Home", icon: "Lock", description: "QR based access and visitor management." },
  { name: "Corporate ID", icon: "ShieldCheck", description: "Employee safety and verification." },
  { name: "Event Security", icon: "Bell", description: "Secure access and emergency protocols for events." }
];

const products = [
  { name: "Premium Car Dash Tag", brand: "Tarkshya", mrp: 999, type: "SAFETY", categoryIdx: 0 },
  { name: "Smart Motorcycle ID", brand: "Tarkshya", mrp: 499, type: "SAFETY", categoryIdx: 0 },
  { name: "Emergency SOS Pendant", brand: "Jiyo", mrp: 1299, type: "SAFETY", categoryIdx: 1 },
  { name: "Elder Medical Card", brand: "Jiyo", mrp: 299, type: "SAFETY", categoryIdx: 2 },
  { name: "Kid's Safety Bracelet", brand: "Tarkshya", mrp: 599, type: "SAFETY", categoryIdx: 3 },
  { name: "Pet Collar Smart Tag", brand: "Jiyo", mrp: 399, type: "SAFETY", categoryIdx: 4 },
  { name: "Luggage Smart Tag", brand: "Tarkshya", mrp: 450, type: "SAFETY", categoryIdx: 5 },
  { name: "Laptop Recovery Sticker", brand: "Tarkshya", mrp: 199, type: "SAFETY", categoryIdx: 6 },
  { name: "Smart Door Scanner", brand: "Jiyo", mrp: 899, type: "SAFETY", categoryIdx: 7 },
  { name: "Corporate Safety Badge", brand: "Tarkshya", mrp: 350, type: "SAFETY", categoryIdx: 8 }
];

async function seed() {
  console.log("Seeding dummy data...");
  try {
    // We need an admin user to assign products to
    let admin = await prisma.admin.findFirst();
    let adminId = admin ? admin.id : null;

    const createdCategories = [];

    for (const cat of categories) {
      const c = await prisma.category.create({
        data: {
          name: cat.name,
          icon: cat.icon,
          description: cat.description,
          preventionHeading: `Prevent ${cat.name} Issues`,
          preventionText: "Stay ahead of problems with our proactive security measures.",
          emergencyHeading: "Emergency Response",
          emergencyText: "Instant action protocols when you need them most.",
          howItWorksHeading: "How It Operates",
          howItWorksText: "A seamless integration of hardware tags and cloud software.",
          trackingHeading: "Global Tracking",
          trackingText: "Monitor assets from anywhere in the world.",
          features: JSON.stringify(["Instant Alerts", "Cloud Sync", "AES-256 Encryption"]),
          preventionCards: JSON.stringify([{title: "24/7 Monitoring", text: "Always active."}]),
          emergencyCards: JSON.stringify([{title: "SOS Trigger", text: "One tap alert."}]),
          trackingCards: JSON.stringify([{title: "Live Location", text: "GPS integrated."}])
        }
      });
      createdCategories.push(c);
      console.log("Created Category:", c.name);
    }

    if (adminId) {
      for (const prod of products) {
        const pCode = 'DUMMY-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        await prisma.product.create({
          data: {
            productCode: pCode,
            name: prod.name,
            brand: prod.brand,
            mrp: prod.mrp,
            type: prod.type,
            categoryId: createdCategories[prod.categoryIdx].id,
            adminId: adminId,
            qrUrl: `/verify/${pCode}`,
            photos: JSON.stringify([""]),
            dynamicData: JSON.stringify([{label: "Material", value: "Premium Fiber"}, {label: "Warranty", value: "1 Year"}])
          }
        });
        console.log("Created Product:", prod.name);
      }
    } else {
      console.log("No admin found to assign products.");
    }
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
