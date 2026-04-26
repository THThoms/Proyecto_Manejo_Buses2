
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
