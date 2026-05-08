const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findUnique({ where: { email: 'akashyadav7991@gmail.com' } });
    console.log("User:", user);
    const orders = await prisma.order.findMany({
        where: {
            OR: [
                { customerEmail: user.email },
                { customerPhone: user.phone }
            ]
        }
    });
    console.log("Orders:", orders);
}
main().catch(console.error).finally(() => prisma.$disconnect());
