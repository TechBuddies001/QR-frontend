const prisma = require("../lib/prisma");

const adminId = "3acd5604-ee9b-44fd-a510-3e8553e47a28";

const products = [
  // Vehicle Protection
  {
    productCode: "VEH-QR-001",
    name: "KAWACH Pro Car Security Kit",
    brand: "V-KAWACH",
    mrp: 499,
    type: "SAFETY",
    categoryId: "03ce8752-320e-478f-8542-c9ae72a8cc78",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Premium Vinyl" },
      { label: "Validity", value: "1 Year" },
      { label: "Features", value: "Call Masking, SMS Alerts, GPS Pin" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/car.png"])
  },
  {
    productCode: "VEH-QR-002",
    name: "KAWACH Bike Security Sticker",
    brand: "V-KAWACH",
    mrp: 199,
    type: "SAFETY",
    categoryId: "03ce8752-320e-478f-8542-c9ae72a8cc78",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Reflective Vinyl" },
      { label: "Validity", value: "1 Year" },
      { label: "Waterproof", value: "Yes" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/motorcycle.png"])
  },
  // Pet Protection
  {
    productCode: "PET-QR-001",
    name: "Smart-Pet QR ID Tag",
    brand: "V-KAWACH",
    mrp: 299,
    type: "SAFETY",
    categoryId: "7b48d1cf-491e-4e79-826a-7cda6d70a80f",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Stainless Steel" },
      { label: "Weight", value: "5g" },
      { label: "Features", value: "No App Required, Worldwide Tracking" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/dog.png"])
  },
  // Child Safety
  {
    productCode: "KID-QR-001",
    name: "Kid-Safety QR Wristband",
    brand: "V-KAWACH",
    mrp: 349,
    type: "SAFETY",
    categoryId: "44f8ff68-259d-4612-a8df-ab9d64d579ec",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Soft Silicone" },
      { label: "Age Group", value: "3-12 Years" },
      { label: "Features", value: "Emergency Call, Parent Notification" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/child-safe.png"])
  },
  // Medical Emergency
  {
    productCode: "MED-QR-001",
    name: "Elderly SOS Emergency Card",
    brand: "V-KAWACH",
    mrp: 149,
    type: "SAFETY",
    categoryId: "6bfb41d3-0627-4ee7-8e19-addac0b9edd5",
    dynamicData: JSON.stringify([
      { label: "Type", value: "PVC Card" },
      { label: "Usage", value: "Wallet / Keychain" },
      { label: "Features", value: "Medical History, Blood Group Info" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/medical-history.png"])
  },
  // Gadget Shield
  {
    productCode: "GAD-QR-001",
    name: "Laptop Security QR Skin",
    brand: "V-KAWACH",
    mrp: 99,
    type: "SAFETY",
    categoryId: "bb1b8e1d-6cf7-4275-8ad2-9691b407508b",
    dynamicData: JSON.stringify([
      { label: "Compatibility", value: "All Laptops" },
      { label: "Finish", value: "Matte" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/laptop.png"])
  },
  // Smart Home
  {
    productCode: "HOM-QR-001",
    name: "Smart QR Doorbell Plate",
    brand: "V-KAWACH",
    mrp: 599,
    type: "SAFETY",
    categoryId: "93b9c760-c6b9-4830-aef1-de6673c6fb4e",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Acrylic" },
      { label: "Installation", value: "Self-Adhesive" },
      { label: "Features", value: "Virtual Doorbell, Message Drop" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/home.png"])
  },
  // Travel Security
  {
    productCode: "TRV-QR-001",
    name: "Luggge Security QR Tag",
    brand: "V-KAWACH",
    mrp: 199,
    type: "SAFETY",
    categoryId: "587c8390-9cd4-4a74-bd0e-de74bdfb40ea",
    dynamicData: JSON.stringify([
      { label: "Material", value: "Leather" },
      { label: "Features", value: "Lost & Found Global Support" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/suitcase.png"])
  },
  // FMCG - Authenticity
  {
    productCode: "FMCG-001",
    name: "Premium Kashmiri Saffron (5g)",
    brand: "Zaffran Pure",
    mrp: 1250,
    type: "FMCG",
    batchNumber: "BATCH-2024-001",
    mfgDate: new Date("2024-01-01"),
    expDate: new Date("2026-01-01"),
    dynamicData: JSON.stringify([
      { label: "Origin", value: "Pampore, Kashmir" },
      { label: "Grade", value: "Grade A++" },
      { label: "Authenticity", value: "Verified by V-KAWACH" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/spices.png"])
  },
  {
    productCode: "FMCG-002",
    name: "Aura Luxury Hand Watch",
    brand: "Aura Timepieces",
    mrp: 15999,
    type: "FMCG",
    batchNumber: "WATCH-7788",
    mfgDate: new Date("2023-11-15"),
    dynamicData: JSON.stringify([
      { label: "Warranty", value: "2 Years" },
      { label: "Movement", value: "Automatic Swiss" },
      { label: "Authenticity", value: "Blockchain Verified" }
    ]),
    photos: JSON.stringify(["https://images.icons8.com/bubbles/200/watch.png"])
  }
];

async function seed() {
  console.log("Seeding products...");
  for (const p of products) {
    try {
      await prisma.product.upsert({
        where: { productCode: p.productCode },
        update: { ...p, adminId },
        create: { ...p, adminId }
      });
      console.log(`✅ Seeded: ${p.name}`);
    } catch (e) {
      console.error(`❌ Error seeding ${p.name}:`, e.message);
    }
  }
  console.log("Seeding completed.");
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
