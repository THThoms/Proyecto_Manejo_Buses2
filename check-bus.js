const { PrismaClient } = require('@prisma/client/bus');
const prisma = new PrismaClient();

async function run() {
  const asientos = await prisma.asientoTurno.findMany({
    where: {
      estado: { in: ['RESERVADO', 'OCUPADO'] }
    }
  });
  console.log('Asientos ocupados o reservados en bus_db:');
  console.log(asientos);
  process.exit(0);
}

run();
