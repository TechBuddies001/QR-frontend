const prisma = require('./src/lib/prisma');
async function main() {
  const subs = await prisma.subscription.count();
  console.log('Subscriptions:', subs);
}
main().finally(() => prisma.$disconnect());
