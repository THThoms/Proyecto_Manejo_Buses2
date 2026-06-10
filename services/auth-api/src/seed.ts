import prisma from './services/prisma';
import { hashPassword } from './services/authTokens';

async function main() {
  console.log('Iniciando seeding de auth_db...');

  // 1. Crear Roles si no existen
  const rolesToCreate = ['ADMIN', 'OFICIAL', 'PASAJERO', 'OFICINISTA', 'DUENO', 'SOPORTE'];
  const dbRoles: Record<string, any> = {};

  for (const nombre of rolesToCreate) {
    const rol = await prisma.rol.upsert({
      where: { nombre: nombre as any },
      update: {},
      create: {
        nombre: nombre as any,
        descripcion: `Rol de ${nombre.toLowerCase()}`,
      },
    });
    dbRoles[nombre] = rol;
    console.log(`Rol ${nombre} verificado/creado.`);
  }

  // 2. Crear Usuarios de prueba
  const usuarios = [
    {
      nombre: 'Administrador',
      email: 'admin@example.com',
      password: 'admin1234password',
      rol: 'ADMIN',
    },
    {
      nombre: 'Chofer de Prueba',
      email: 'chofer@example.com',
      password: 'chofer1234password',
      rol: 'OFICIAL',
    },
    {
      nombre: 'Oficinista de Prueba',
      email: 'oficinista@example.com',
      password: 'oficinista1234',
      rol: 'OFICINISTA',
    },
    {
      nombre: 'Pasajero de Prueba',
      email: 'pasajero@example.com',
      password: 'pasajero1234password',
      rol: 'PASAJERO',
    },
  ];

  for (const userDef of usuarios) {
    const pwdHash = await hashPassword(userDef.password);
    
    // Upsert del usuario
    const user = await prisma.usuario.upsert({
      where: { email: userDef.email },
      update: {
        nombre: userDef.nombre,
        passwordHash: pwdHash,
      },
      create: {
        nombre: userDef.nombre,
        email: userDef.email,
        passwordHash: pwdHash,
      },
    });

    console.log(`Usuario ${userDef.email} verificado/creado (ID: ${user.id}).`);

    // Asignar rol
    const rol = dbRoles[userDef.rol];
    if (rol) {
      await prisma.usuarioRol.upsert({
        where: {
          usuarioId_rolId: {
            usuarioId: user.id,
            rolId: rol.id,
          },
        },
        update: {
          estado: 'ACTIVO',
        },
        create: {
          usuarioId: user.id,
          rolId: rol.id,
          estado: 'ACTIVO',
        },
      });
      console.log(`Rol ${userDef.rol} asignado a ${userDef.email}.`);
    }
  }

  console.log('Seeding de auth_db completado con éxito.');
}

main()
  .catch((e) => {
    console.error('Error durante el seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
