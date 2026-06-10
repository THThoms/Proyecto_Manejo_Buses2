import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  console.log('Intentando crear tabla boletos_validacion manualmente...');
  
  try {
    // Usamos SQL crudo para crear la tabla que Prisma no pudo crear por el bug de WASM
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS boletos_validacion (
        id SERIAL PRIMARY KEY,
        cedula_pasajero TEXT NOT NULL,
        tipo_tarifa TEXT NOT NULL,
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Tabla "boletos_validacion" creada con éxito.');
  } catch (error: any) {
    console.error('❌ Error ejecutando SQL:', error.message);
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
