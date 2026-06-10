import 'dotenv/config';
import { PrismaClient } from '../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando Prueba de Fuego...');

  // 1. Crear la Cooperativa Latacunga
  const coop = await prisma.cooperativa.upsert({
    where: { ruc: '0590000000001' },
    update: {},
    create: {
      nombre: 'Transportes Latacunga',
      ruc: '0590000000001',
      estado: 'ACTIVO',
    },
  });
  console.log('Cooperativa creada:', coop.nombre);

  // 2. Crear un Dueño y un Chofer
  const dueno = await prisma.dueno.findFirst() || await prisma.dueno.create({
    data: { nombre: 'Juan Perez', cedula: '0500000001', estado: 'ACTIVO' }
  });

  const chofer = await prisma.chofer.findFirst() || await prisma.chofer.create({
    data: { nombre: 'Carlos Conductor', cedula: '0500000002', licencia: '0500000002', tipoLicencia: 'E', estado: 'ACTIVO' }
  });

  // 3. Crear Buses para la Cooperativa
  const buses = [];
  for (let i = 1; i <= 5; i++) {
    const placa = `LTC-000${i}`;
    const bus = await prisma.bus.upsert({
      where: { placa },
      update: {},
      create: {
        placa,
        marca: 'Scania',
        carroceria: 'Marcopolo',
        modelo: 'Paradiso',
        anio: 2023,
        capacidad: 45,
        estado: 'ACTIVO',
        cooperativaId: coop.id,
        duenoId: dueno.id,
      }
    });

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
    buses.push(bus);
  }
  console.log(`Creados ${buses.length} buses con 45 asientos cada uno.`);

  // 4. Crear las Rutas con Paradas Intermedias (US04)
  const rutasData = [
    { 
      origen: 'Latacunga', destino: 'Quito', duracionMin: 90, precioPasaje: 3.50,
      paradas: [
        { nombre: 'Machachi', orden: 1, latitud: -0.5100, longitud: -78.5600 },
        { nombre: 'Tambillo', orden: 2, latitud: -0.4100, longitud: -78.5300 }
      ]
    },
    { 
      origen: 'Quito', destino: 'Latacunga', duracionMin: 90, precioPasaje: 3.50,
      paradas: [
        { nombre: 'Tambillo', orden: 1, latitud: -0.4100, longitud: -78.5300 },
        { nombre: 'Machachi', orden: 2, latitud: -0.5100, longitud: -78.5600 }
      ]
    },
    { 
      origen: 'Latacunga', destino: 'Guayaquil', duracionMin: 360, precioPasaje: 12.00,
      paradas: [
        { nombre: 'Quevedo', orden: 1, latitud: -1.0200, longitud: -79.4600 },
        { nombre: 'Babahoyo', orden: 2, latitud: -1.8000, longitud: -79.5300 }
      ]
    },
    { origen: 'Latacunga', destino: 'Quevedo', duracionMin: 150, precioPasaje: 5.00 },
    { origen: 'Latacunga', destino: 'Riobamba', duracionMin: 120, precioPasaje: 4.00 },
  ];

  const rutas = [];
  for (const r of rutasData) {
    const ruta = await prisma.ruta.create({
      data: {
        nombre: `${r.origen} - ${r.destino} (Con Paradas)`,
        origen: r.origen,
        destino: r.destino,
        duracionMin: r.duracionMin,
        precioPasaje: r.precioPasaje,
        paradas: r.paradas ? {
          create: r.paradas.map(p => ({
            nombre: p.nombre,
            orden: p.orden,
            latitud: p.latitud,
            longitud: p.longitud
          }))
        } : undefined
      }
    });
    rutas.push(ruta);
  }
  console.log(`Creadas ${rutas.length} rutas.`);

  // 5. Crear al menos 20 turnos dispersos
  const fechas = [
    new Date(), // Hoy
    new Date(new Date().setDate(new Date().getDate() + 1)), // Mañana
    new Date('2026-05-16T00:00:00.000Z') // La fecha de las pruebas
  ];

  let turnosTotales = 0;

  for (const fecha of fechas) {
    fecha.setUTCHours(0, 0, 0, 0);
    let hora = 6; // Empiezan a las 6:00 AM
    let minuto = 0;
    
    for (let i = 0; i < 24; i++) { // Crearemos 24 turnos por día
      const ruta = rutas[i % rutas.length];
      const bus = buses[i % buses.length];
      
      const horaStr = hora.toString().padStart(2, '0');
      const minStr = minuto.toString().padStart(2, '0');
      const horaInicio = `${horaStr}:${minStr}`;

      const turno = await prisma.turno.create({
        data: {
          busId: bus.id,
          rutaId: ruta.id,
          choferId: chofer.id,
          fecha: fecha,
          horaInicio,
          estado: 'PENDIENTE',
        }
      });

      // Generar AsientoTurno
      const asientos = await prisma.asiento.findMany({ where: { busId: bus.id } });
      await prisma.asientoTurno.createMany({
        data: asientos.map(a => ({
          turnoId: turno.id,
          asientoId: a.id,
          estado: 'DISPONIBLE'
        }))
      });

      turnosTotales++;

      minuto += 45;
      if (minuto >= 60) {
        hora += 1;
        minuto -= 60;
      }
    }
  }

  console.log(`Creados ${turnosTotales} turnos en total para 3 fechas distintas.`);
  console.log('¡Prueba de fuego completada con éxito!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
