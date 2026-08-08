
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true }
    });
    console.log('--- DATABASE CHECK ---');
    console.log('Total Orders:', orders.length);
    console.log(JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error('Error checking orders:', err);
  } finally {
    await prisma.$disconnect();
  }
}

check();
