
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
} = require('./runtime/edge.js')


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





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompraScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  frecuenciaId: 'frecuenciaId',
  fechaViaje: 'fechaViaje',
  cantidad: 'cantidad',
  total: 'total',
  canal: 'canal',
  estado: 'estado',
  creadoEn: 'creadoEn'
};

exports.Prisma.BoletoScalarFieldEnum = {
  id: 'id',
  compraId: 'compraId',
  uuidQr: 'uuidQr',
  cedulaPasajero: 'cedulaPasajero',
  nombrePasajero: 'nombrePasajero',
  tipoTarifa: 'tipoTarifa',
  estado: 'estado',
  expiraEn: 'expiraEn',
  creadoEn: 'creadoEn'
};

exports.Prisma.PagoPasajeroScalarFieldEnum = {
  id: 'id',
  compraId: 'compraId',
  monto: 'monto',
  metodo: 'metodo',
  estado: 'estado',
  pagadoEn: 'pagadoEn'
};

exports.Prisma.PagoTarjetaScalarFieldEnum = {
  id: 'id',
  pagoId: 'pagoId',
  ultimos4: 'ultimos4',
  marca: 'marca',
  referenciaPasarela: 'referenciaPasarela'
};

exports.Prisma.PagoTransferenciaScalarFieldEnum = {
  id: 'id',
  pagoId: 'pagoId',
  banco: 'banco',
  referencia: 'referencia',
  comprobanteUrl: 'comprobanteUrl',
  estado: 'estado'
};

exports.Prisma.AprobacionScalarFieldEnum = {
  id: 'id',
  pagoTransferenciaId: 'pagoTransferenciaId',
  oficinistaId: 'oficinistaId',
  estado: 'estado',
  observacion: 'observacion',
  revisadoEn: 'revisadoEn'
};

exports.Prisma.PagoEfectivoScalarFieldEnum = {
  id: 'id',
  pagoId: 'pagoId',
  vendedorId: 'vendedorId',
  montoRecibido: 'montoRecibido',
  cambio: 'cambio',
  canalVenta: 'canalVenta',
  turnoId: 'turnoId'
};

exports.Prisma.EscaneoScalarFieldEnum = {
  id: 'id',
  boletoId: 'boletoId',
  oficialId: 'oficialId',
  busId: 'busId',
  turnoId: 'turnoId',
  resultado: 'resultado',
  escaneadoEn: 'escaneadoEn'
};

exports.Prisma.BoletoParadaScalarFieldEnum = {
  id: 'id',
  boletoId: 'boletoId',
  paradaOrigenId: 'paradaOrigenId',
  paradaDestinoId: 'paradaDestinoId',
  estado: 'estado'
};

exports.Prisma.AlertaGpsScalarFieldEnum = {
  id: 'id',
  boletoParadaId: 'boletoParadaId',
  turnoId: 'turnoId',
  latActual: 'latActual',
  lngActual: 'lngActual',
  metrosRestantes: 'metrosRestantes',
  estado: 'estado',
  actualizadoEn: 'actualizadoEn'
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
exports.CanalVenta = exports.$Enums.CanalVenta = {
  APP: 'APP',
  WEB: 'WEB',
  OFICIAL: 'OFICIAL',
  OFICINISTA: 'OFICINISTA'
};

exports.EstadoCompra = exports.$Enums.EstadoCompra = {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADA: 'CONFIRMADA',
  ANULADA: 'ANULADA'
};

exports.TipoTarifa = exports.$Enums.TipoTarifa = {
  NORMAL: 'NORMAL',
  TERCERA_EDAD: 'TERCERA_EDAD',
  DISCAPACIDAD: 'DISCAPACIDAD',
  MENOR: 'MENOR'
};

exports.EstadoBoleto = exports.$Enums.EstadoBoleto = {
  PENDIENTE: 'PENDIENTE',
  VIGENTE: 'VIGENTE',
  UTILIZADO: 'UTILIZADO',
  EXPIRADO: 'EXPIRADO',
  ANULADO: 'ANULADO'
};

exports.MetodoPago = exports.$Enums.MetodoPago = {
  TARJETA: 'TARJETA',
  TRANSFERENCIA: 'TRANSFERENCIA',
  EFECTIVO: 'EFECTIVO'
};

exports.EstadoPago = exports.$Enums.EstadoPago = {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

exports.EstadoTransferencia = exports.$Enums.EstadoTransferencia = {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

exports.EstadoAprobacion = exports.$Enums.EstadoAprobacion = {
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

exports.CanalEfectivo = exports.$Enums.CanalEfectivo = {
  BUS: 'BUS',
  OFICINA: 'OFICINA'
};

exports.ResultadoEscaneo = exports.$Enums.ResultadoEscaneo = {
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

exports.EstadoBoletoParada = exports.$Enums.EstadoBoletoParada = {
  PENDIENTE: 'PENDIENTE',
  ALERTADO: 'ALERTADO',
  BAJADO: 'BAJADO'
};

exports.EstadoAlerta = exports.$Enums.EstadoAlerta = {
  ACTIVA: 'ACTIVA',
  DISPARADA: 'DISPARADA',
  INACTIVA: 'INACTIVA'
};

exports.Prisma.ModelName = {
  Compra: 'Compra',
  Boleto: 'Boleto',
  PagoPasajero: 'PagoPasajero',
  PagoTarjeta: 'PagoTarjeta',
  PagoTransferencia: 'PagoTransferencia',
  Aprobacion: 'Aprobacion',
  PagoEfectivo: 'PagoEfectivo',
  Escaneo: 'Escaneo',
  BoletoParada: 'BoletoParada',
  AlertaGps: 'AlertaGps'
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
      "value": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\ticket-client",
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
    "sourceFilePath": "C:\\Users\\Acer Predator\\Documents\\agiles\\PROYECT2\\packages\\database\\prisma\\ticket-schema.prisma",
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
        "fromEnvVar": "TICKET_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// ============================================\n// TICKET SERVICE - schema.prisma\n// ============================================\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../ticket-client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"TICKET_DATABASE_URL\")\n}\n\nmodel Compra {\n  id           Int          @id @default(autoincrement())\n  usuarioId    Int          @map(\"usuario_id\") // Auth Service\n  frecuenciaId Int          @map(\"frecuencia_id\") // Bus Service\n  fechaViaje   DateTime     @map(\"fecha_viaje\") @db.Date\n  cantidad     Int          @default(1)\n  total        Decimal      @db.Decimal(10, 2)\n  canal        CanalVenta\n  estado       EstadoCompra @default(PENDIENTE)\n  creadoEn     DateTime     @default(now()) @map(\"creado_en\")\n\n  boletos Boleto[]\n  pago    PagoPasajero?\n\n  @@map(\"compras\")\n}\n\nmodel Boleto {\n  id             Int          @id @default(autoincrement())\n  compraId       Int          @map(\"compra_id\")\n  uuidQr         String       @unique @default(uuid()) @map(\"uuid_qr\")\n  cedulaPasajero String       @map(\"cedula_pasajero\")\n  nombrePasajero String       @map(\"nombre_pasajero\")\n  tipoTarifa     TipoTarifa   @default(NORMAL) @map(\"tipo_tarifa\")\n  estado         EstadoBoleto @default(PENDIENTE)\n  expiraEn       DateTime     @map(\"expira_en\")\n  creadoEn       DateTime     @default(now()) @map(\"creado_en\")\n\n  compra       Compra        @relation(fields: [compraId], references: [id])\n  escaneo      Escaneo?\n  boletoParada BoletoParada?\n\n  @@map(\"boletos\")\n}\n\nmodel PagoPasajero {\n  id       Int        @id @default(autoincrement())\n  compraId Int        @unique @map(\"compra_id\")\n  monto    Decimal    @db.Decimal(10, 2)\n  metodo   MetodoPago\n  estado   EstadoPago @default(PENDIENTE)\n  pagadoEn DateTime?  @map(\"pagado_en\")\n\n  compra            Compra             @relation(fields: [compraId], references: [id])\n  pagoTarjeta       PagoTarjeta?\n  pagoTransferencia PagoTransferencia?\n  pagoEfectivo      PagoEfectivo?\n\n  @@map(\"pagos_pasajero\")\n}\n\nmodel PagoTarjeta {\n  id                 Int    @id @default(autoincrement())\n  pagoId             Int    @unique @map(\"pago_id\")\n  ultimos4           String @map(\"ultimos_4\")\n  marca              String\n  referenciaPasarela String @map(\"referencia_pasarela\")\n\n  pago PagoPasajero @relation(fields: [pagoId], references: [id])\n\n  @@map(\"pagos_tarjeta\")\n}\n\nmodel PagoTransferencia {\n  id             Int                 @id @default(autoincrement())\n  pagoId         Int                 @unique @map(\"pago_id\")\n  banco          String\n  referencia     String\n  comprobanteUrl String?             @map(\"comprobante_url\")\n  estado         EstadoTransferencia @default(PENDIENTE)\n\n  pago       PagoPasajero @relation(fields: [pagoId], references: [id])\n  aprobacion Aprobacion?\n\n  @@map(\"pagos_transferencia\")\n}\n\nmodel Aprobacion {\n  id                  Int              @id @default(autoincrement())\n  pagoTransferenciaId Int              @unique @map(\"pago_transferencia_id\")\n  oficinistaId        Int              @map(\"oficinista_id\") // Auth Service\n  estado              EstadoAprobacion\n  observacion         String?\n  revisadoEn          DateTime         @default(now()) @map(\"revisado_en\")\n\n  pagoTransferencia PagoTransferencia @relation(fields: [pagoTransferenciaId], references: [id])\n\n  @@map(\"aprobaciones\")\n}\n\nmodel PagoEfectivo {\n  id            Int           @id @default(autoincrement())\n  pagoId        Int           @unique @map(\"pago_id\")\n  vendedorId    Int           @map(\"vendedor_id\") // Auth Service (OFICIAL u OFICINISTA)\n  montoRecibido Decimal       @map(\"monto_recibido\") @db.Decimal(10, 2)\n  cambio        Decimal       @db.Decimal(10, 2)\n  canalVenta    CanalEfectivo @map(\"canal_venta\")\n  turnoId       Int?          @map(\"turno_id\") // Bus Service, solo si es BUS\n\n  pago PagoPasajero @relation(fields: [pagoId], references: [id])\n\n  @@map(\"pagos_efectivo\")\n}\n\nmodel Escaneo {\n  id          Int              @id @default(autoincrement())\n  boletoId    Int              @unique @map(\"boleto_id\")\n  oficialId   Int              @map(\"oficial_id\") // Auth Service\n  busId       Int              @map(\"bus_id\") // Bus Service\n  turnoId     Int              @map(\"turno_id\") // Bus Service\n  resultado   ResultadoEscaneo\n  escaneadoEn DateTime         @default(now()) @map(\"escaneado_en\")\n\n  boleto Boleto @relation(fields: [boletoId], references: [id])\n\n  @@map(\"escaneos\")\n}\n\nmodel BoletoParada {\n  id              Int                @id @default(autoincrement())\n  boletoId        Int                @unique @map(\"boleto_id\")\n  paradaOrigenId  Int                @map(\"parada_origen_id\") // Bus Service\n  paradaDestinoId Int                @map(\"parada_destino_id\") // Bus Service\n  estado          EstadoBoletoParada @default(PENDIENTE)\n\n  boleto     Boleto      @relation(fields: [boletoId], references: [id])\n  alertasGps AlertaGps[]\n\n  @@map(\"boleto_paradas\")\n}\n\nmodel AlertaGps {\n  id              Int          @id @default(autoincrement())\n  boletoParadaId  Int          @map(\"boleto_parada_id\")\n  turnoId         Int          @map(\"turno_id\") // Bus Service\n  latActual       Decimal      @map(\"lat_actual\") @db.Decimal(10, 8)\n  lngActual       Decimal      @map(\"lng_actual\") @db.Decimal(11, 8)\n  metrosRestantes Int          @map(\"metros_restantes\")\n  estado          EstadoAlerta @default(ACTIVA)\n  actualizadoEn   DateTime     @default(now()) @updatedAt @map(\"actualizado_en\")\n\n  boletoParada BoletoParada @relation(fields: [boletoParadaId], references: [id])\n\n  @@map(\"alertas_gps\")\n}\n\n// ============================================\n// ENUMS\n// ============================================\n\nenum CanalVenta {\n  APP\n  WEB\n  OFICIAL\n  OFICINISTA\n}\n\nenum TipoTarifa {\n  NORMAL\n  TERCERA_EDAD\n  DISCAPACIDAD\n  MENOR\n}\n\nenum EstadoCompra {\n  PENDIENTE\n  CONFIRMADA\n  ANULADA\n}\n\nenum EstadoBoleto {\n  PENDIENTE\n  VIGENTE\n  UTILIZADO\n  EXPIRADO\n  ANULADO\n}\n\nenum MetodoPago {\n  TARJETA\n  TRANSFERENCIA\n  EFECTIVO\n}\n\nenum EstadoPago {\n  PENDIENTE\n  APROBADO\n  RECHAZADO\n}\n\nenum EstadoTransferencia {\n  PENDIENTE\n  APROBADO\n  RECHAZADO\n}\n\nenum EstadoAprobacion {\n  APROBADO\n  RECHAZADO\n}\n\nenum CanalEfectivo {\n  BUS\n  OFICINA\n}\n\nenum ResultadoEscaneo {\n  APROBADO\n  RECHAZADO\n}\n\nenum EstadoBoletoParada {\n  PENDIENTE\n  ALERTADO\n  BAJADO\n}\n\nenum EstadoAlerta {\n  ACTIVA\n  DISPARADA\n  INACTIVA\n}\n",
  "inlineSchemaHash": "de8060c281d225ed4ec90f934b4367a14f35db783d74141d06218b6ce6f914db",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Compra\":{\"dbName\":\"compras\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarioId\",\"dbName\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frecuenciaId\",\"dbName\":\"frecuencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaViaje\",\"dbName\":\"fecha_viaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canal\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CanalVenta\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoCompra\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creadoEn\",\"dbName\":\"creado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boleto\",\"relationName\":\"BoletoToCompra\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoPasajero\",\"relationName\":\"CompraToPagoPasajero\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Boleto\":{\"dbName\":\"boletos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compraId\",\"dbName\":\"compra_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuidQr\",\"dbName\":\"uuid_qr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedulaPasajero\",\"dbName\":\"cedula_pasajero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombrePasajero\",\"dbName\":\"nombre_pasajero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipoTarifa\",\"dbName\":\"tipo_tarifa\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TipoTarifa\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoBoleto\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiraEn\",\"dbName\":\"expira_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creadoEn\",\"dbName\":\"creado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compra\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Compra\",\"relationName\":\"BoletoToCompra\",\"relationFromFields\":[\"compraId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escaneo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Escaneo\",\"relationName\":\"BoletoToEscaneo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletoParada\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoletoParada\",\"relationName\":\"BoletoToBoletoParada\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PagoPasajero\":{\"dbName\":\"pagos_pasajero\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compraId\",\"dbName\":\"compra_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metodo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MetodoPago\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoPago\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagadoEn\",\"dbName\":\"pagado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compra\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Compra\",\"relationName\":\"CompraToPagoPasajero\",\"relationFromFields\":[\"compraId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoTarjeta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoTarjeta\",\"relationName\":\"PagoPasajeroToPagoTarjeta\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoTransferencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoTransferencia\",\"relationName\":\"PagoPasajeroToPagoTransferencia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoEfectivo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoEfectivo\",\"relationName\":\"PagoEfectivoToPagoPasajero\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PagoTarjeta\":{\"dbName\":\"pagos_tarjeta\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoId\",\"dbName\":\"pago_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimos4\",\"dbName\":\"ultimos_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenciaPasarela\",\"dbName\":\"referencia_pasarela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoPasajero\",\"relationName\":\"PagoPasajeroToPagoTarjeta\",\"relationFromFields\":[\"pagoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PagoTransferencia\":{\"dbName\":\"pagos_transferencia\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoId\",\"dbName\":\"pago_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comprobanteUrl\",\"dbName\":\"comprobante_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoTransferencia\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoPasajero\",\"relationName\":\"PagoPasajeroToPagoTransferencia\",\"relationFromFields\":[\"pagoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aprobacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Aprobacion\",\"relationName\":\"AprobacionToPagoTransferencia\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Aprobacion\":{\"dbName\":\"aprobaciones\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoTransferenciaId\",\"dbName\":\"pago_transferencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oficinistaId\",\"dbName\":\"oficinista_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EstadoAprobacion\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"observacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revisadoEn\",\"dbName\":\"revisado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoTransferencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoTransferencia\",\"relationName\":\"AprobacionToPagoTransferencia\",\"relationFromFields\":[\"pagoTransferenciaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PagoEfectivo\":{\"dbName\":\"pagos_efectivo\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagoId\",\"dbName\":\"pago_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendedorId\",\"dbName\":\"vendedor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"montoRecibido\",\"dbName\":\"monto_recibido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cambio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canalVenta\",\"dbName\":\"canal_venta\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CanalEfectivo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnoId\",\"dbName\":\"turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PagoPasajero\",\"relationName\":\"PagoEfectivoToPagoPasajero\",\"relationFromFields\":[\"pagoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Escaneo\":{\"dbName\":\"escaneos\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletoId\",\"dbName\":\"boleto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oficialId\",\"dbName\":\"oficial_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"busId\",\"dbName\":\"bus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnoId\",\"dbName\":\"turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ResultadoEscaneo\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escaneadoEn\",\"dbName\":\"escaneado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boleto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boleto\",\"relationName\":\"BoletoToEscaneo\",\"relationFromFields\":[\"boletoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BoletoParada\":{\"dbName\":\"boleto_paradas\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletoId\",\"dbName\":\"boleto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paradaOrigenId\",\"dbName\":\"parada_origen_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paradaDestinoId\",\"dbName\":\"parada_destino_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoBoletoParada\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boleto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boleto\",\"relationName\":\"BoletoToBoletoParada\",\"relationFromFields\":[\"boletoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alertasGps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AlertaGps\",\"relationName\":\"AlertaGpsToBoletoParada\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AlertaGps\":{\"dbName\":\"alertas_gps\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"boletoParadaId\",\"dbName\":\"boleto_parada_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnoId\",\"dbName\":\"turno_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latActual\",\"dbName\":\"lat_actual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lngActual\",\"dbName\":\"lng_actual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metrosRestantes\",\"dbName\":\"metros_restantes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoAlerta\",\"default\":\"ACTIVA\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualizadoEn\",\"dbName\":\"actualizado_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"boletoParada\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoletoParada\",\"relationName\":\"AlertaGpsToBoletoParada\",\"relationFromFields\":[\"boletoParadaId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"CanalVenta\":{\"values\":[{\"name\":\"APP\",\"dbName\":null},{\"name\":\"WEB\",\"dbName\":null},{\"name\":\"OFICIAL\",\"dbName\":null},{\"name\":\"OFICINISTA\",\"dbName\":null}],\"dbName\":null},\"TipoTarifa\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"TERCERA_EDAD\",\"dbName\":null},{\"name\":\"DISCAPACIDAD\",\"dbName\":null},{\"name\":\"MENOR\",\"dbName\":null}],\"dbName\":null},\"EstadoCompra\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"CONFIRMADA\",\"dbName\":null},{\"name\":\"ANULADA\",\"dbName\":null}],\"dbName\":null},\"EstadoBoleto\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"VIGENTE\",\"dbName\":null},{\"name\":\"UTILIZADO\",\"dbName\":null},{\"name\":\"EXPIRADO\",\"dbName\":null},{\"name\":\"ANULADO\",\"dbName\":null}],\"dbName\":null},\"MetodoPago\":{\"values\":[{\"name\":\"TARJETA\",\"dbName\":null},{\"name\":\"TRANSFERENCIA\",\"dbName\":null},{\"name\":\"EFECTIVO\",\"dbName\":null}],\"dbName\":null},\"EstadoPago\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"APROBADO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null}],\"dbName\":null},\"EstadoTransferencia\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"APROBADO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null}],\"dbName\":null},\"EstadoAprobacion\":{\"values\":[{\"name\":\"APROBADO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null}],\"dbName\":null},\"CanalEfectivo\":{\"values\":[{\"name\":\"BUS\",\"dbName\":null},{\"name\":\"OFICINA\",\"dbName\":null}],\"dbName\":null},\"ResultadoEscaneo\":{\"values\":[{\"name\":\"APROBADO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null}],\"dbName\":null},\"EstadoBoletoParada\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"ALERTADO\",\"dbName\":null},{\"name\":\"BAJADO\",\"dbName\":null}],\"dbName\":null},\"EstadoAlerta\":{\"values\":[{\"name\":\"ACTIVA\",\"dbName\":null},{\"name\":\"DISPARADA\",\"dbName\":null},{\"name\":\"INACTIVA\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    TICKET_DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['TICKET_DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.TICKET_DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

