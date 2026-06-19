const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(async () => {
  const cats = await prisma.category.findMany();
  console.log(cats.map(c => c.name));
})();
