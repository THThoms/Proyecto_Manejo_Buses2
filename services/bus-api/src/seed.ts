import 'dotenv/config';
import { PrismaClient } from '../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el sembrado de datos (Seed)...');

  // 1. Crear Cooperativa de prueba
  const coop = await prisma.cooperativa.upsert({
    where: { ruc: '1790000000001' },
    update: {},
    create: {
      nombre: 'Cooperativa TransAmazonas',
      ruc: '1790000000001',
      logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
      cuentaBancaria: '1234567890',
      estado: 'ACTIVO',
    },
  });
  console.log('Cooperativa creada:', coop.nombre);

  // 2. Crear Dueño de prueba
  const dueno = await prisma.dueno.upsert({
    where: { cedula: '1720000000' },
    update: {},
    create: {
      nombre: 'Allen Developer',
      cedula: '1720000000',
      telefono: '0999999999',
      estado: 'ACTIVO',
    },
  });
  console.log('Dueño creado:', dueno.nombre);

  // 3. Crear Bus de prueba
  const bus = await prisma.bus.upsert({
    where: { placa: 'ABC-1234' },
    update: {},
    create: {
      placa: 'ABC-1234',
      marca: 'Hino',
      carroceria: 'Cepeda',
      modelo: 'AK8J',
      anio: 2023,
      capacidad: 45,
      color: 'Azul y Blanco',
      foto: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
      cooperativaId: coop.id,
      duenoId: dueno.id,
      estado: 'ACTIVO',
    },
  });
  console.log('Bus creado/encontrado con placa:', bus.placa);

  // Crear asientos del bus si no existen
  const asientosCount = await prisma.asiento.count({ where: { busId: bus.id } });
  if (asientosCount === 0) {
    const asientosData = Array.from({ length: 45 }, (_, idx) => ({
      busId: bus.id,
      numero: idx + 1,
      tipo: 'NORMAL' as const,
      estado: 'ACTIVO' as const,
    }));
    await prisma.asiento.createMany({ data: asientosData });
  }

  // 4. Crear Ruta de prueba
  const ruta = await prisma.ruta.findFirst({ where: { nombre: 'Quito - Guayaquil (Directo)' } }) 
    || await prisma.ruta.create({
    data: {
      nombre: 'Quito - Guayaquil (Directo)',
      origen: 'Quito',
      destino: 'Guayaquil',
      duracionMin: 480,
      precioPasaje: 15.50,
    },
  });
  console.log('Ruta creada/encontrada:', ruta.nombre);

  // 5. Crear Chofer
  const chofer = await prisma.chofer.findFirst() || await prisma.chofer.create({
    data: { nombre: 'Chofer QG', cedula: '1799999999', licencia: '1799999999', tipoLicencia: 'E', estado: 'ACTIVO' }
  });

  // 6. Crear Turnos (Hoy y mañana)
  const fechas = [new Date(), new Date(new Date().setDate(new Date().getDate() + 1))];
  
  for (const fecha of fechas) {
    fecha.setUTCHours(0, 0, 0, 0);
    const turnosData = [
      { horaInicio: '08:00', horaFin: '16:00' },
      { horaInicio: '12:00', horaFin: '20:00' },
      { horaInicio: '20:00', horaFin: '04:00' }
    ];

    for (const t of turnosData) {
      const turno = await prisma.turno.create({
        data: {
          busId: bus.id,
          rutaId: ruta.id,
          choferId: chofer.id,
          fecha: fecha,
          horaInicio: t.horaInicio,
          estado: 'PENDIENTE',
        }
      });

      // Asientos del turno
      const asientos = await prisma.asiento.findMany({ where: { busId: bus.id } });
      await prisma.asientoTurno.createMany({
        data: asientos.map(a => ({
          turnoId: turno.id,
          asientoId: a.id,
          estado: 'DISPONIBLE'
        }))
      });
    }
  }

  console.log('Turnos para Quito - Guayaquil creados exitosamente.');
  console.log('¡Seed completado con éxito!');
}

main()
  .catch((e) => {
    console.error('Error en el Seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
