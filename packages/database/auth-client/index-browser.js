
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
