import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  console.log('Buscando datos base...');
  
  const coop = await prisma.cooperativa.findFirst();
  const dueno = await prisma.dueno.findFirst();

  if (!coop || !dueno) {
    console.error('Error: No se encontró cooperativa o dueño en la DB.');
    return;
  }

  console.log('Insertando segundo bus...');
  const secondBus = await prisma.bus.upsert({
    where: { placa: 'XYZ-9876' },
    update: {},
    create: {
      placa: 'XYZ-9876',
      marca: 'Mercedes Benz',
      carroceria: 'Marcopolo',
      modelo: 'Paradiso 1200',
      anio: 2024,
      capacidad: 45,
      estado: 'ACTIVO',
      cooperativaId: coop.id,
      duenoId: dueno.id,
    },
  });

  // Crear asientos para el segundo bus
  for (let i = 1; i <= 45; i++) {
    await prisma.asiento.upsert({
      where: { busId_numero: { busId: secondBus.id, numero: i } },
      update: {},
      create: { busId: secondBus.id, numero: i },
    });
  }

  console.log('¡Segundo bus (XYZ-9876) y sus asientos creados con éxito!');

  // Agregar un Turno para que haya resultados en la búsqueda del usuario (16 de mayo 2026)
  const ruta = await prisma.ruta.findFirst();
  const chofer = await prisma.chofer.findFirst();
  
  if (ruta && chofer) {
    const turno = await prisma.turno.create({
      data: {
        busId: secondBus.id,
        rutaId: ruta.id,
        choferId: chofer.id,
        fecha: new Date('2026-05-16T00:00:00.000Z'),
        horaInicio: '14:30',
        estado: 'PENDIENTE'
      }
    });

    const asientos = await prisma.asiento.findMany({ where: { busId: secondBus.id } });
    await prisma.asientoTurno.createMany({
      data: asientos.map(a => ({
        turnoId: turno.id,
        asientoId: a.id,
        estado: 'DISPONIBLE'
      }))
    });

    console.log('¡Turno para 16-May-2026 creado con éxito!');
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
