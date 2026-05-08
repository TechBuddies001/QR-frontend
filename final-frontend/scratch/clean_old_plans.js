const prisma = require('./src/lib/prisma');
async function main() {
  await prisma.plan.deleteMany({
    where: {
      name: { in: ['basic', 'standard', 'premium', 'FREE_TRIAL'] }
    }
  });
  console.log('✅ Cleaned old plans');
}
main().finally(() => prisma.$disconnect());
