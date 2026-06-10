
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

exports.Prisma.DuenoScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  cedula: 'cedula',
  telefono: 'telefono',
  cuentaBancaria: 'cuentaBancaria',
  banco: 'banco',
  estado: 'estado'
};

exports.Prisma.CooperativaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  ruc: 'ruc',
  logo: 'logo',
  cuentaBancaria: 'cuentaBancaria',
  estado: 'estado'
};

exports.Prisma.BusScalarFieldEnum = {
  id: 'id',
  cooperativaId: 'cooperativaId',
  duenoId: 'duenoId',
  placa: 'placa',
  marca: 'marca',
  carroceria: 'carroceria',
  modelo: 'modelo',
  anio: 'anio',
  capacidad: 'capacidad',
  color: 'color',
  foto: 'foto',
  estado: 'estado'
};

exports.Prisma.ChoferScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  cedula: 'cedula',
  telefono: 'telefono',
  licencia: 'licencia',
  tipoLicencia: 'tipoLicencia',
  estado: 'estado'
};

exports.Prisma.RutaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  origen: 'origen',
  destino: 'destino',
  duracionMin: 'duracionMin',
  precioPasaje: 'precioPasaje'
};

exports.Prisma.ParadaScalarFieldEnum = {
  id: 'id',
  rutaId: 'rutaId',
  nombre: 'nombre',
  orden: 'orden',
  latitud: 'latitud',
  longitud: 'longitud',
  precioDesdeOrigen: 'precioDesdeOrigen',
  metrosAlerta: 'metrosAlerta'
};

exports.Prisma.FrecuenciaScalarFieldEnum = {
  id: 'id',
  rutaId: 'rutaId',
  busId: 'busId',
  diaSemana: 'diaSemana',
  horaSalida: 'horaSalida',
  horaLlegada: 'horaLlegada',
  resolucion: 'resolucion'
};

exports.Prisma.TurnoScalarFieldEnum = {
  id: 'id',
  busId: 'busId',
  rutaId: 'rutaId',
  choferId: 'choferId',
  fecha: 'fecha',
  horaInicio: 'horaInicio',
  horaFin: 'horaFin',
  estado: 'estado'
};

exports.Prisma.AsientoScalarFieldEnum = {
  id: 'id',
  busId: 'busId',
  numero: 'numero',
  fila: 'fila',
  tipo: 'tipo',
  estado: 'estado'
};

exports.Prisma.AsientoTurnoScalarFieldEnum = {
  id: 'id',
  turnoId: 'turnoId',
  asientoId: 'asientoId',
  boletoId: 'boletoId',
  estado: 'estado'
};

exports.Prisma.BoletoScalarFieldEnum = {
  id: 'id',
  cedulaPasajero: 'cedulaPasajero',
  tipoTarifa: 'tipoTarifa',
  creadoEn: 'creadoEn'
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
exports.EstadoGeneral = exports.$Enums.EstadoGeneral = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

exports.EstadoBus = exports.$Enums.EstadoBus = {
  ACTIVO: 'ACTIVO',
  MANTENIMIENTO: 'MANTENIMIENTO',
  INACTIVO: 'INACTIVO'
};

exports.DiaSemana = exports.$Enums.DiaSemana = {
  LUN: 'LUN',
  MAR: 'MAR',
  MIE: 'MIE',
  JUE: 'JUE',
  VIE: 'VIE',
  SAB: 'SAB',
  DOM: 'DOM'
};

exports.EstadoTurno = exports.$Enums.EstadoTurno = {
  PENDIENTE: 'PENDIENTE',
  EN_RUTA: 'EN_RUTA',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

exports.TipoAsiento = exports.$Enums.TipoAsiento = {
  NORMAL: 'NORMAL',
  VIP: 'VIP',
  DISCAPACIDAD: 'DISCAPACIDAD'
};

exports.EstadoAsientoTurno = exports.$Enums.EstadoAsientoTurno = {
  DISPONIBLE: 'DISPONIBLE',
  RESERVADO: 'RESERVADO',
  OCUPADO: 'OCUPADO',
  VACIO: 'VACIO'
};

exports.Prisma.ModelName = {
  Dueno: 'Dueno',
  Cooperativa: 'Cooperativa',
  Bus: 'Bus',
  Chofer: 'Chofer',
  Ruta: 'Ruta',
  Parada: 'Parada',
  Frecuencia: 'Frecuencia',
  Turno: 'Turno',
  Asiento: 'Asiento',
  AsientoTurno: 'AsientoTurno',
  Boleto: 'Boleto'
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
      "value": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\bus-client",
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
    "sourceFilePath": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\prisma\\bus-schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../prisma",
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
        "fromEnvVar": "BUS_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// ============================================\n// BUS SERVICE - schema.prisma\n// ============================================\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../bus-client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"BUS_DATABASE_URL\")\n}\n\nmodel Dueno {\n  id             Int           @id @default(autoincrement())\n  nombre         String\n  cedula         String        @unique\n  telefono       String?\n  cuentaBancaria String?       @map(\"cuenta_bancaria\")\n  banco          String?\n  estado         EstadoGeneral @default(ACTIVO)\n\n  buses Bus[]\n\n  @@map(\"duenos\")\n}\n\nmodel Cooperativa {\n  id             Int           @id @default(autoincrement())\n  nombre         String\n  ruc            String        @unique\n  logo           String?\n  cuentaBancaria String?       @map(\"cuenta_bancaria\")\n  estado         EstadoGeneral @default(ACTIVO)\n\n  buses Bus[]\n\n  @@map(\"cooperativas\")\n}\n\nmodel Bus {\n  id            Int       @id @default(autoincrement())\n  cooperativaId Int       @map(\"cooperativa_id\")\n  duenoId       Int       @map(\"dueno_id\")\n  placa         String    @unique\n  marca         String\n  carroceria    String\n  modelo        String\n  anio          Int\n  capacidad     Int\n  color         String?\n  foto          String?\n  estado        EstadoBus @default(ACTIVO)\n\n  cooperativa Cooperativa  @relation(fields: [cooperativaId], references: [id])\n  dueno       Dueno        @relation(fields: [duenoId], references: [id])\n  asientos    Asiento[]\n  frecuencias Frecuencia[]\n  turnos      Turno[]\n\n  @@map(\"buses\")\n}\n\nmodel Chofer {\n  id           Int           @id @default(autoincrement())\n  nombre       String\n  cedula       String        @unique\n  telefono     String?\n  licencia     String        @unique\n  tipoLicencia String        @map(\"tipo_licencia\")\n  estado       EstadoGeneral @default(ACTIVO)\n\n  turnos Turno[]\n\n  @@map(\"choferes\")\n}\n\nmodel Ruta {\n  id           Int     @id @default(autoincrement())\n  nombre       String\n  origen       String\n  destino      String\n  duracionMin  Int     @map(\"duracion_min\")\n  precioPasaje Decimal @map(\"precio_pasaje\") @db.Decimal(10, 2)\n\n  paradas     Parada[]\n  frecuencias Frecuencia[]\n  turnos      Turno[]\n\n  @@map(\"rutas\")\n}\n\nmodel Parada {\n  id                Int     @id @default(autoincrement())\n  rutaId            Int     @map(\"ruta_id\")\n  nombre            String\n  orden             Int\n  latitud           Decimal @db.Decimal(10, 8)\n  longitud          Decimal @db.Decimal(11, 8)\n  precioDesdeOrigen Decimal @default(0) @map(\"precio_desde_origen\") @db.Decimal(10, 2)\n  metrosAlerta      Int     @default(500) @map(\"metros_alerta\")\n\n  ruta Ruta @relation(fields: [rutaId], references: [id])\n\n  @@map(\"paradas\")\n}\n\nmodel Frecuencia {\n  id          Int       @id @default(autoincrement())\n  rutaId      Int       @map(\"ruta_id\")\n  busId       Int       @map(\"bus_id\")\n  diaSemana   DiaSemana @map(\"dia_semana\")\n  horaSalida  String    @map(\"hora_salida\")\n  horaLlegada String    @map(\"hora_llegada\")\n  resolucion  String?\n\n  ruta Ruta @relation(fields: [rutaId], references: [id])\n  bus  Bus  @relation(fields: [busId], references: [id])\n\n  @@map(\"frecuencias\")\n}\n\nmodel Turno {\n  id         Int         @id @default(autoincrement())\n  busId      Int         @map(\"bus_id\")\n  rutaId     Int         @map(\"ruta_id\")\n  choferId   Int         @map(\"chofer_id\")\n  fecha      DateTime    @db.Date\n  horaInicio String      @map(\"hora_inicio\")\n  horaFin    String?     @map(\"hora_fin\")\n  estado     EstadoTurno @default(PENDIENTE)\n\n  bus    Bus    @relation(fields: [busId], references: [id])\n  ruta   Ruta   @relation(fields: [rutaId], references: [id])\n  chofer Chofer @relation(fields: [choferId], references: [id])\n\n  asientosTurno AsientoTurno[]\n\n  @@map(\"turnos\")\n}\n\nmodel Asiento {\n  id     Int           @id @default(autoincrement())\n  busId  Int           @map(\"bus_id\")\n  numero Int\n  fila   String?\n  tipo   TipoAsiento   @default(NORMAL)\n  estado EstadoGeneral @default(ACTIVO)\n\n  bus    Bus            @relation(fields: [busId], references: [id])\n  turnos AsientoTurno[]\n\n  @@unique([busId, numero])\n  @@map(\"asientos\")\n}\n\nmodel AsientoTurno {\n  id        Int                @id @default(autoincrement())\n  turnoId   Int                @map(\"turno_id\")\n  asientoId Int                @map(\"asiento_id\")\n  boletoId  Int?               @map(\"boleto_id\")\n  estado    EstadoAsientoTurno @default(DISPONIBLE)\n\n  turno   Turno   @relation(fields: [turnoId], references: [id])\n  asiento Asiento @relation(fields: [asientoId], references: [id])\n\n  @@unique([turnoId, asientoId])\n  @@map(\"asiento_turnos\")\n}\n\nmodel Boleto {\n  id             Int      @id @default(autoincrement())\n  cedulaPasajero String   @map(\"cedula_pasajero\")\n  tipoTarifa     String   @default(\"NORMAL\") @map(\"tipo_tarifa\")\n  creadoEn       DateTime @default(now()) @map(\"creado_en\")\n\n  @@map(\"boletos_validacion\")\n}\n\n// ============================================\n// ENUMS\n// ============================================\n\nenum EstadoGeneral {\n  ACTIVO\n  INACTIVO\n}\n\nenum EstadoBus {\n  ACTIVO\n  MANTENIMIENTO\n  INACTIVO\n}\n\nenum EstadoTurno {\n  PENDIENTE\n  EN_RUTA\n  COMPLETADO\n  CANCELADO\n}\n\nenum TipoAsiento {\n  NORMAL\n  VIP\n  DISCAPACIDAD\n}\n\nenum EstadoAsientoTurno {\n  DISPONIBLE\n  RESERVADO\n  OCUPADO\n  VACIO\n}\n\nenum DiaSemana {\n  LUN\n  MAR\n  MIE\n  JUE\n  VIE\n  SAB\n  DOM\n}\n",
  "inlineSchemaHash": "6fab2c07c609c84d61e39ed76c25777287c383d9c82a6059b1582f7da48d8510",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "bus-client",
    "",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Dueno\":{\"dbName\":\"duenos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuentaBancaria\",\"dbName\":\"cuenta_bancaria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoGeneral\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"BusToDueno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cooperativa\":{\"dbName\":\"cooperativas\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuentaBancaria\",\"dbName\":\"cuenta_bancaria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoGeneral\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"BusToCooperativa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bus\":{\"dbName\":\"buses\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cooperativaId\",\"dbName\":\"cooperativa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duenoId\",\"dbName\":\"dueno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carroceria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoBus\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cooperativa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cooperativa\",\"relationName\":\"BusToCooperativa\",\"relationFromFields\":[\"cooperativaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueno\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dueno\",\"relationName\":\"BusToDueno\",\"relationFromFields\":[\"duenoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asientos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Asiento\",\"relationName\":\"AsientoToBus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frecuencias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Frecuencia\",\"relationName\":\"BusToFrecuencia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"BusToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Chofer\":{\"dbName\":\"choferes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoLicencia\",\"dbName\":\"tipo_licencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoGeneral\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"ChoferToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ruta\":{\"dbName\":\"rutas\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"origen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duracionMin\",\"dbName\":\"duracion_min\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precioPasaje\",\"dbName\":\"precio_pasaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paradas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Parada\",\"relationName\":\"ParadaToRuta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frecuencias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Frecuencia\",\"relationName\":\"FrecuenciaToRuta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"RutaToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Parada\":{\"dbName\":\"paradas\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rutaId\",\"dbName\":\"ruta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precioDesdeOrigen\",\"dbName\":\"precio_desde_origen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrosAlerta\",\"dbName\":\"metros_alerta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":500,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ruta\",\"relationName\":\"ParadaToRuta\",\"relationFromFields\":[\"rutaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Frecuencia\":{\"dbName\":\"frecuencias\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rutaId\",\"dbName\":\"ruta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"busId\",\"dbName\":\"bus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diaSemana\",\"dbName\":\"dia_semana\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DiaSemana\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaSalida\",\"dbName\":\"hora_salida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaLlegada\",\"dbName\":\"hora_llegada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resolucion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ruta\",\"relationName\":\"FrecuenciaToRuta\",\"relationFromFields\":[\"rutaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"BusToFrecuencia\",\"relationFromFields\":[\"busId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Turno\":{\"dbName\":\"turnos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"busId\",\"dbName\":\"bus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rutaId\",\"dbName\":\"ruta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choferId\",\"dbName\":\"chofer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaInicio\",\"dbName\":\"hora_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"horaFin\",\"dbName\":\"hora_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoTurno\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"BusToTurno\",\"relationFromFields\":[\"busId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ruta\",\"relationName\":\"RutaToTurno\",\"relationFromFields\":[\"rutaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chofer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chofer\",\"relationName\":\"ChoferToTurno\",\"relationFromFields\":[\"choferId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asientosTurno\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AsientoTurno\",\"relationName\":\"AsientoTurnoToTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Asiento\":{\"dbName\":\"asientos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"busId\",\"dbName\":\"bus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fila\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TipoAsiento\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoGeneral\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"AsientoToBus\",\"relationFromFields\":[\"busId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AsientoTurno\",\"relationName\":\"AsientoToAsientoTurno\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"busId\",\"numero\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"busId\",\"numero\"]}],\"isGenerated\":false},\"AsientoTurno\":{\"dbName\":\"asiento_turnos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnoId\",\"dbName\":\"turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asientoId\",\"dbName\":\"asiento_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletoId\",\"dbName\":\"boleto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoAsientoTurno\",\"default\":\"DISPONIBLE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turno\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Turno\",\"relationName\":\"AsientoTurnoToTurno\",\"relationFromFields\":[\"turnoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asiento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Asiento\",\"relationName\":\"AsientoToAsientoTurno\",\"relationFromFields\":[\"asientoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"turnoId\",\"asientoId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"turnoId\",\"asientoId\"]}],\"isGenerated\":false},\"Boleto\":{\"dbName\":\"boletos_validacion\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedulaPasajero\",\"dbName\":\"cedula_pasajero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoTarifa\",\"dbName\":\"tipo_tarifa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creadoEn\",\"dbName\":\"creado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"EstadoGeneral\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null}],\"dbName\":null},\"EstadoBus\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"MANTENIMIENTO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null}],\"dbName\":null},\"EstadoTurno\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"EN_RUTA\",\"dbName\":null},{\"name\":\"COMPLETADO\",\"dbName\":null},{\"name\":\"CANCELADO\",\"dbName\":null}],\"dbName\":null},\"TipoAsiento\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"VIP\",\"dbName\":null},{\"name\":\"DISCAPACIDAD\",\"dbName\":null}],\"dbName\":null},\"EstadoAsientoTurno\":{\"values\":[{\"name\":\"DISPONIBLE\",\"dbName\":null},{\"name\":\"RESERVADO\",\"dbName\":null},{\"name\":\"OCUPADO\",\"dbName\":null},{\"name\":\"VACIO\",\"dbName\":null}],\"dbName\":null},\"DiaSemana\":{\"values\":[{\"name\":\"LUN\",\"dbName\":null},{\"name\":\"MAR\",\"dbName\":null},{\"name\":\"MIE\",\"dbName\":null},{\"name\":\"JUE\",\"dbName\":null},{\"name\":\"VIE\",\"dbName\":null},{\"name\":\"SAB\",\"dbName\":null},{\"name\":\"DOM\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
path.join(process.cwd(), "bus-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "bus-client/schema.prisma")
