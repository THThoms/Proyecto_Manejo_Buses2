
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
