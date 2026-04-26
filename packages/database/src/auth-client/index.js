
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  email: 'email',
  passwordHash: 'passwordHash',
  estado: 'estado',
  creadoEn: 'creadoEn'
};

exports.Prisma.RolScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.UsuarioRolScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  rolId: 'rolId',
  asignadoPor: 'asignadoPor',
  asignadoEn: 'asignadoEn',
  expiraEn: 'expiraEn',
  estado: 'estado'
};

exports.Prisma.PermisoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.RolPermisoScalarFieldEnum = {
  id: 'id',
  rolId: 'rolId',
  permisoId: 'permisoId'
};

exports.Prisma.SesionScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  token: 'token',
  expiraEn: 'expiraEn',
  dispositivo: 'dispositivo'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.EstadoUsuario = exports.$Enums.EstadoUsuario = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

exports.NombreRol = exports.$Enums.NombreRol = {
  ADMIN: 'ADMIN',
  OFICIAL: 'OFICIAL',
  OFICINISTA: 'OFICINISTA',
  DUENO: 'DUENO',
  PASAJERO: 'PASAJERO',
  SOPORTE: 'SOPORTE'
};

exports.EstadoRolUsuario = exports.$Enums.EstadoRolUsuario = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

exports.NombrePermiso = exports.$Enums.NombrePermiso = {
  ESCANEAR_QR: 'ESCANEAR_QR',
  VER_TURNO: 'VER_TURNO',
  VER_ASIENTOS: 'VER_ASIENTOS',
  VENDER_BOLETO: 'VENDER_BOLETO',
  VER_REPORTES: 'VER_REPORTES',
  GESTIONAR_BUSES: 'GESTIONAR_BUSES',
  PAGAR_DUENOS: 'PAGAR_DUENOS',
  GESTIONAR_USUARIOS: 'GESTIONAR_USUARIOS',
  COMPRAR_BOLETO: 'COMPRAR_BOLETO',
  VER_MIS_BOLETOS: 'VER_MIS_BOLETOS',
  VER_MIS_PAGOS: 'VER_MIS_PAGOS',
  VER_TOTAL_VIAJES: 'VER_TOTAL_VIAJES',
  ALERTA_GPS: 'ALERTA_GPS',
  VER_RECLAMOS: 'VER_RECLAMOS',
  GESTIONAR_RECLAMOS: 'GESTIONAR_RECLAMOS',
  APROBAR_TRANSFERENCIA: 'APROBAR_TRANSFERENCIA',
  VENDER_BOLETO_OFICINA: 'VENDER_BOLETO_OFICINA',
  VER_PAGOS_PENDIENTES: 'VER_PAGOS_PENDIENTES',
  ANULAR_BOLETO: 'ANULAR_BOLETO'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Rol: 'Rol',
  UsuarioRol: 'UsuarioRol',
  Permiso: 'Permiso',
  RolPermiso: 'RolPermiso',
  Sesion: 'Sesion'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\src\\auth-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\prisma\\auth-schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "AUTH_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// ============================================\n// AUTH SERVICE - schema.prisma\n// ============================================\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/auth-client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"AUTH_DATABASE_URL\")\n}\n\nmodel Usuario {\n  id           Int           @id @default(autoincrement())\n  nombre       String\n  email        String        @unique\n  passwordHash String        @map(\"password_hash\")\n  estado       EstadoUsuario @default(ACTIVO)\n  creadoEn     DateTime      @default(now()) @map(\"creado_en\")\n\n  roles    UsuarioRol[]\n  sesiones Sesion[]\n\n  @@map(\"usuarios\")\n}\n\nmodel Rol {\n  id          Int       @id @default(autoincrement())\n  nombre      NombreRol @unique\n  descripcion String?\n\n  usuarios UsuarioRol[]\n  permisos RolPermiso[]\n\n  @@map(\"roles\")\n}\n\nmodel UsuarioRol {\n  id          Int              @id @default(autoincrement())\n  usuarioId   Int              @map(\"usuario_id\")\n  rolId       Int              @map(\"rol_id\")\n  asignadoPor Int?             @map(\"asignado_por\")\n  asignadoEn  DateTime         @default(now()) @map(\"asignado_en\")\n  expiraEn    DateTime?        @map(\"expira_en\")\n  estado      EstadoRolUsuario @default(ACTIVO)\n\n  usuario Usuario @relation(fields: [usuarioId], references: [id])\n  rol     Rol     @relation(fields: [rolId], references: [id])\n\n  @@unique([usuarioId, rolId])\n  @@map(\"usuario_roles\")\n}\n\nmodel Permiso {\n  id          Int           @id @default(autoincrement())\n  nombre      NombrePermiso @unique\n  descripcion String?\n\n  roles RolPermiso[]\n\n  @@map(\"permisos\")\n}\n\nmodel RolPermiso {\n  id        Int @id @default(autoincrement())\n  rolId     Int @map(\"rol_id\")\n  permisoId Int @map(\"permiso_id\")\n\n  rol     Rol     @relation(fields: [rolId], references: [id])\n  permiso Permiso @relation(fields: [permisoId], references: [id])\n\n  @@unique([rolId, permisoId])\n  @@map(\"rol_permisos\")\n}\n\nmodel Sesion {\n  id          Int      @id @default(autoincrement())\n  usuarioId   Int      @map(\"usuario_id\")\n  token       String   @unique\n  expiraEn    DateTime @map(\"expira_en\")\n  dispositivo String?\n\n  usuario Usuario @relation(fields: [usuarioId], references: [id])\n\n  @@map(\"sesiones\")\n}\n\n// ============================================\n// ENUMS\n// ============================================\n\nenum EstadoUsuario {\n  ACTIVO\n  INACTIVO\n}\n\nenum EstadoRolUsuario {\n  ACTIVO\n  INACTIVO\n}\n\nenum NombreRol {\n  ADMIN\n  OFICIAL\n  OFICINISTA\n  DUENO\n  PASAJERO\n  SOPORTE\n}\n\nenum NombrePermiso {\n  ESCANEAR_QR\n  VER_TURNO\n  VER_ASIENTOS\n  VENDER_BOLETO\n  VER_REPORTES\n  GESTIONAR_BUSES\n  PAGAR_DUENOS\n  GESTIONAR_USUARIOS\n  COMPRAR_BOLETO\n  VER_MIS_BOLETOS\n  VER_MIS_PAGOS\n  VER_TOTAL_VIAJES\n  ALERTA_GPS\n  VER_RECLAMOS\n  GESTIONAR_RECLAMOS\n  APROBAR_TRANSFERENCIA\n  VENDER_BOLETO_OFICINA\n  VER_PAGOS_PENDIENTES\n  ANULAR_BOLETO\n}\n",
  "inlineSchemaHash": "a4750930e452c1ba680315008cbdbc8b63652b2a430ad9492d51549179b3f6d2",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/auth-client",
    "auth-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"dbName\":\"usuarios\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"dbName\":\"password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoUsuario\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creadoEn\",\"dbName\":\"creado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsuarioRol\",\"relationName\":\"UsuarioToUsuarioRol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sesiones\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sesion\",\"relationName\":\"SesionToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Rol\":{\"dbName\":\"roles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NombreRol\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsuarioRol\",\"relationName\":\"RolToUsuarioRol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permisos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RolPermiso\",\"relationName\":\"RolToRolPermiso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UsuarioRol\":{\"dbName\":\"usuario_roles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"dbName\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolId\",\"dbName\":\"rol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asignadoPor\",\"dbName\":\"asignado_por\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asignadoEn\",\"dbName\":\"asignado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiraEn\",\"dbName\":\"expira_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoRolUsuario\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"UsuarioToUsuarioRol\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rol\",\"relationName\":\"RolToUsuarioRol\",\"relationFromFields\":[\"rolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"usuarioId\",\"rolId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"usuarioId\",\"rolId\"]}],\"isGenerated\":false},\"Permiso\":{\"dbName\":\"permisos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NombrePermiso\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RolPermiso\",\"relationName\":\"PermisoToRolPermiso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RolPermiso\":{\"dbName\":\"rol_permisos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolId\",\"dbName\":\"rol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permisoId\",\"dbName\":\"permiso_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rol\",\"relationName\":\"RolToRolPermiso\",\"relationFromFields\":[\"rolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permiso\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Permiso\",\"relationName\":\"PermisoToRolPermiso\",\"relationFromFields\":[\"permisoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"rolId\",\"permisoId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"rolId\",\"permisoId\"]}],\"isGenerated\":false},\"Sesion\":{\"dbName\":\"sesiones\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"dbName\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiraEn\",\"dbName\":\"expira_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"SesionToUsuario\",\"relationFromFields\":[\"usuarioId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"EstadoUsuario\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null}],\"dbName\":null},\"EstadoRolUsuario\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null}],\"dbName\":null},\"NombreRol\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"OFICIAL\",\"dbName\":null},{\"name\":\"OFICINISTA\",\"dbName\":null},{\"name\":\"DUENO\",\"dbName\":null},{\"name\":\"PASAJERO\",\"dbName\":null},{\"name\":\"SOPORTE\",\"dbName\":null}],\"dbName\":null},\"NombrePermiso\":{\"values\":[{\"name\":\"ESCANEAR_QR\",\"dbName\":null},{\"name\":\"VER_TURNO\",\"dbName\":null},{\"name\":\"VER_ASIENTOS\",\"dbName\":null},{\"name\":\"VENDER_BOLETO\",\"dbName\":null},{\"name\":\"VER_REPORTES\",\"dbName\":null},{\"name\":\"GESTIONAR_BUSES\",\"dbName\":null},{\"name\":\"PAGAR_DUENOS\",\"dbName\":null},{\"name\":\"GESTIONAR_USUARIOS\",\"dbName\":null},{\"name\":\"COMPRAR_BOLETO\",\"dbName\":null},{\"name\":\"VER_MIS_BOLETOS\",\"dbName\":null},{\"name\":\"VER_MIS_PAGOS\",\"dbName\":null},{\"name\":\"VER_TOTAL_VIAJES\",\"dbName\":null},{\"name\":\"ALERTA_GPS\",\"dbName\":null},{\"name\":\"VER_RECLAMOS\",\"dbName\":null},{\"name\":\"GESTIONAR_RECLAMOS\",\"dbName\":null},{\"name\":\"APROBAR_TRANSFERENCIA\",\"dbName\":null},{\"name\":\"VENDER_BOLETO_OFICINA\",\"dbName\":null},{\"name\":\"VER_PAGOS_PENDIENTES\",\"dbName\":null},{\"name\":\"ANULAR_BOLETO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/auth-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/auth-client/schema.prisma")
