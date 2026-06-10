const { PrismaClient } = require('./packages/database/node_modules/@prisma/client/auth');
const prisma = new PrismaClient();
async function run() {
  const u = await prisma.usuario.findUnique({
    where: { email: 'admin@example.com' },
    include: { roles: { include: { rol: true } } }
  });
  console.log(JSON.stringify(u, null, 2));
}
run();
