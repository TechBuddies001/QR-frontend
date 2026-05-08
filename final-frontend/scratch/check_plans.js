const prisma = require('./src/lib/prisma');
async function main() {
  const plans = await prisma.plan.findMany();
  console.log(JSON.stringify(plans, null, 2));
}
main().finally(() => prisma.$disconnect());
