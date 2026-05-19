import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const bus = await prisma.bus.findFirst();
  const ruta = await prisma.ruta.findFirst();
  const chofer = await prisma.chofer.findFirst();

  if (!bus || !ruta || !chofer) {
    return console.log('Faltan datos base');
  }

  const t = await prisma.turno.create({
    data: {
      busId: bus.id,
      rutaId: ruta.id,
      choferId: chofer.id,
      fecha: new Date('2026-05-16T00:00:00.000Z'),
      horaInicio: '08:00',
      estado: 'PENDIENTE'
    }
  });

  // Generar AsientoTurnos (relacion entre los asientos del bus y este turno especifico)
  const asientos = await prisma.asiento.findMany({ where: { busId: bus.id } });
  
  const asientoTurnosData = asientos.map((a) => ({
    turnoId: t.id,
    asientoId: a.id,
    estado: 'DISPONIBLE' as const
  }));

  await prisma.asientoTurno.createMany({ data: asientoTurnosData });

  console.log('Turno creado con éxito para la fecha 2026-05-16:', t.id);
}

main().finally(() => prisma.$disconnect());
