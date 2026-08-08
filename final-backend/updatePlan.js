const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const plans = await prisma.plan.findMany();
  console.log("Current plans:", plans);

  for (const plan of plans) {
    if (plan.price === 399) {
      await prisma.plan.update({
        where: { id: plan.id },
        data: { price: 499 }
      });
      console.log(`Updated plan ${plan.name} from 399 to 499`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
