
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model UsuarioRol
 * 
 */
export type UsuarioRol = $Result.DefaultSelection<Prisma.$UsuarioRolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>
/**
 * Model Sesion
 * 
 */
export type Sesion = $Result.DefaultSelection<Prisma.$SesionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoUsuario: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type EstadoUsuario = (typeof EstadoUsuario)[keyof typeof EstadoUsuario]


export const NombreRol: {
  ADMIN: 'ADMIN',
  OFICIAL: 'OFICIAL',
  OFICINISTA: 'OFICINISTA',
  DUENO: 'DUENO',
  PASAJERO: 'PASAJERO',
  SOPORTE: 'SOPORTE'
};

export type NombreRol = (typeof NombreRol)[keyof typeof NombreRol]


export const EstadoRolUsuario: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type EstadoRolUsuario = (typeof EstadoRolUsuario)[keyof typeof EstadoRolUsuario]


export const NombrePermiso: {
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

export type NombrePermiso = (typeof NombrePermiso)[keyof typeof NombrePermiso]

}

export type EstadoUsuario = $Enums.EstadoUsuario

export const EstadoUsuario: typeof $Enums.EstadoUsuario

export type NombreRol = $Enums.NombreRol

export const NombreRol: typeof $Enums.NombreRol

export type EstadoRolUsuario = $Enums.EstadoRolUsuario

export const EstadoRolUsuario: typeof $Enums.EstadoRolUsuario

export type NombrePermiso = $Enums.NombrePermiso

export const NombrePermiso: typeof $Enums.NombrePermiso

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs>;

  /**
   * `prisma.usuarioRol`: Exposes CRUD operations for the **UsuarioRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioRols
    * const usuarioRols = await prisma.usuarioRol.findMany()
    * ```
    */
  get usuarioRol(): Prisma.UsuarioRolDelegate<ExtArgs>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs>;

  /**
   * `prisma.sesion`: Exposes CRUD operations for the **Sesion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sesions
    * const sesions = await prisma.sesion.findMany()
    * ```
    */
  get sesion(): Prisma.SesionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Rol: 'Rol',
    UsuarioRol: 'UsuarioRol',
    Permiso: 'Permiso',
    RolPermiso: 'RolPermiso',
    Sesion: 'Sesion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "rol" | "usuarioRol" | "permiso" | "rolPermiso" | "sesion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      UsuarioRol: {
        payload: Prisma.$UsuarioRolPayload<ExtArgs>
        fields: Prisma.UsuarioRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findFirst: {
            args: Prisma.UsuarioRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          findMany: {
            args: Prisma.UsuarioRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          create: {
            args: Prisma.UsuarioRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          createMany: {
            args: Prisma.UsuarioRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>[]
          }
          delete: {
            args: Prisma.UsuarioRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          update: {
            args: Prisma.UsuarioRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioRolPayload>
          }
          aggregate: {
            args: Prisma.UsuarioRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioRol>
          }
          groupBy: {
            args: Prisma.UsuarioRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioRolCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioRolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
          }
        }
      }
      Sesion: {
        payload: Prisma.$SesionPayload<ExtArgs>
        fields: Prisma.SesionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SesionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SesionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          findFirst: {
            args: Prisma.SesionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SesionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          findMany: {
            args: Prisma.SesionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>[]
          }
          create: {
            args: Prisma.SesionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          createMany: {
            args: Prisma.SesionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SesionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>[]
          }
          delete: {
            args: Prisma.SesionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          update: {
            args: Prisma.SesionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          deleteMany: {
            args: Prisma.SesionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SesionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SesionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionPayload>
          }
          aggregate: {
            args: Prisma.SesionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSesion>
          }
          groupBy: {
            args: Prisma.SesionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SesionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SesionCountArgs<ExtArgs>
            result: $Utils.Optional<SesionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    roles: number
    sesiones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsuarioCountOutputTypeCountRolesArgs
    sesiones?: boolean | UsuarioCountOutputTypeCountSesionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
    permisos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    estado: $Enums.EstadoUsuario | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    estado: $Enums.EstadoUsuario | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    passwordHash: number
    estado: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    estado?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    estado?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    passwordHash?: true
    estado?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    passwordHash: string
    estado: $Enums.EstadoUsuario
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    estado?: boolean
    creadoEn?: boolean
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    estado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    estado?: boolean
    creadoEn?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Usuario$rolesArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      roles: Prisma.$UsuarioRolPayload<ExtArgs>[]
      sesiones: Prisma.$SesionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      passwordHash: string
      estado: $Enums.EstadoUsuario
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Usuario$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany"> | Null>
    sesiones<T extends Usuario$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'EstadoUsuario'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.roles
   */
  export type Usuario$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Usuario.sesiones
   */
  export type Usuario$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    where?: SesionWhereInput
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    cursor?: SesionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: $Enums.NombreRol | null
    descripcion: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: $Enums.NombreRol | null
    descripcion: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: $Enums.NombreRol
    descripcion: string | null
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioRolPayload<ExtArgs>[]
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: $Enums.NombreRol
      descripcion: string | null
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany"> | Null>
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rol model
   */ 
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'NombreRol'>
    readonly descripcion: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    cursor?: UsuarioRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioRol
   */

  export type AggregateUsuarioRol = {
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  export type UsuarioRolAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
    asignadoPor: number | null
  }

  export type UsuarioRolSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
    asignadoPor: number | null
  }

  export type UsuarioRolMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
    asignadoPor: number | null
    asignadoEn: Date | null
    expiraEn: Date | null
    estado: $Enums.EstadoRolUsuario | null
  }

  export type UsuarioRolMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rolId: number | null
    asignadoPor: number | null
    asignadoEn: Date | null
    expiraEn: Date | null
    estado: $Enums.EstadoRolUsuario | null
  }

  export type UsuarioRolCountAggregateOutputType = {
    id: number
    usuarioId: number
    rolId: number
    asignadoPor: number
    asignadoEn: number
    expiraEn: number
    estado: number
    _all: number
  }


  export type UsuarioRolAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    asignadoPor?: true
  }

  export type UsuarioRolSumAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    asignadoPor?: true
  }

  export type UsuarioRolMinAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    asignadoPor?: true
    asignadoEn?: true
    expiraEn?: true
    estado?: true
  }

  export type UsuarioRolMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    asignadoPor?: true
    asignadoEn?: true
    expiraEn?: true
    estado?: true
  }

  export type UsuarioRolCountAggregateInputType = {
    id?: true
    usuarioId?: true
    rolId?: true
    asignadoPor?: true
    asignadoEn?: true
    expiraEn?: true
    estado?: true
    _all?: true
  }

  export type UsuarioRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRol to aggregate.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioRols
    **/
    _count?: true | UsuarioRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type GetUsuarioRolAggregateType<T extends UsuarioRolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioRol[P]>
      : GetScalarType<T[P], AggregateUsuarioRol[P]>
  }




  export type UsuarioRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioRolWhereInput
    orderBy?: UsuarioRolOrderByWithAggregationInput | UsuarioRolOrderByWithAggregationInput[]
    by: UsuarioRolScalarFieldEnum[] | UsuarioRolScalarFieldEnum
    having?: UsuarioRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioRolCountAggregateInputType | true
    _avg?: UsuarioRolAvgAggregateInputType
    _sum?: UsuarioRolSumAggregateInputType
    _min?: UsuarioRolMinAggregateInputType
    _max?: UsuarioRolMaxAggregateInputType
  }

  export type UsuarioRolGroupByOutputType = {
    id: number
    usuarioId: number
    rolId: number
    asignadoPor: number | null
    asignadoEn: Date
    expiraEn: Date | null
    estado: $Enums.EstadoRolUsuario
    _count: UsuarioRolCountAggregateOutputType | null
    _avg: UsuarioRolAvgAggregateOutputType | null
    _sum: UsuarioRolSumAggregateOutputType | null
    _min: UsuarioRolMinAggregateOutputType | null
    _max: UsuarioRolMaxAggregateOutputType | null
  }

  type GetUsuarioRolGroupByPayload<T extends UsuarioRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioRolGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    asignadoPor?: boolean
    asignadoEn?: boolean
    expiraEn?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    asignadoPor?: boolean
    asignadoEn?: boolean
    expiraEn?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioRol"]>

  export type UsuarioRolSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    rolId?: boolean
    asignadoPor?: boolean
    asignadoEn?: boolean
    expiraEn?: boolean
    estado?: boolean
  }

  export type UsuarioRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioRol"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      rolId: number
      asignadoPor: number | null
      asignadoEn: Date
      expiraEn: Date | null
      estado: $Enums.EstadoRolUsuario
    }, ExtArgs["result"]["usuarioRol"]>
    composites: {}
  }

  type UsuarioRolGetPayload<S extends boolean | null | undefined | UsuarioRolDefaultArgs> = $Result.GetResult<Prisma.$UsuarioRolPayload, S>

  type UsuarioRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioRolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioRolCountAggregateInputType | true
    }

  export interface UsuarioRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioRol'], meta: { name: 'UsuarioRol' } }
    /**
     * Find zero or one UsuarioRol that matches the filter.
     * @param {UsuarioRolFindUniqueArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioRolFindUniqueArgs>(args: SelectSubset<T, UsuarioRolFindUniqueArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsuarioRol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioRolFindUniqueOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioRolFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsuarioRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioRolFindFirstArgs>(args?: SelectSubset<T, UsuarioRolFindFirstArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsuarioRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindFirstOrThrowArgs} args - Arguments to find a UsuarioRol
     * @example
     * // Get one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioRolFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsuarioRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany()
     * 
     * // Get first 10 UsuarioRols
     * const usuarioRols = await prisma.usuarioRol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioRolFindManyArgs>(args?: SelectSubset<T, UsuarioRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsuarioRol.
     * @param {UsuarioRolCreateArgs} args - Arguments to create a UsuarioRol.
     * @example
     * // Create one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.create({
     *   data: {
     *     // ... data to create a UsuarioRol
     *   }
     * })
     * 
     */
    create<T extends UsuarioRolCreateArgs>(args: SelectSubset<T, UsuarioRolCreateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsuarioRols.
     * @param {UsuarioRolCreateManyArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioRolCreateManyArgs>(args?: SelectSubset<T, UsuarioRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioRols and returns the data saved in the database.
     * @param {UsuarioRolCreateManyAndReturnArgs} args - Arguments to create many UsuarioRols.
     * @example
     * // Create many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioRols and only return the `id`
     * const usuarioRolWithIdOnly = await prisma.usuarioRol.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioRolCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UsuarioRol.
     * @param {UsuarioRolDeleteArgs} args - Arguments to delete one UsuarioRol.
     * @example
     * // Delete one UsuarioRol
     * const UsuarioRol = await prisma.usuarioRol.delete({
     *   where: {
     *     // ... filter to delete one UsuarioRol
     *   }
     * })
     * 
     */
    delete<T extends UsuarioRolDeleteArgs>(args: SelectSubset<T, UsuarioRolDeleteArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsuarioRol.
     * @param {UsuarioRolUpdateArgs} args - Arguments to update one UsuarioRol.
     * @example
     * // Update one UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioRolUpdateArgs>(args: SelectSubset<T, UsuarioRolUpdateArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsuarioRols.
     * @param {UsuarioRolDeleteManyArgs} args - Arguments to filter UsuarioRols to delete.
     * @example
     * // Delete a few UsuarioRols
     * const { count } = await prisma.usuarioRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioRolDeleteManyArgs>(args?: SelectSubset<T, UsuarioRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioRols
     * const usuarioRol = await prisma.usuarioRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioRolUpdateManyArgs>(args: SelectSubset<T, UsuarioRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsuarioRol.
     * @param {UsuarioRolUpsertArgs} args - Arguments to update or create a UsuarioRol.
     * @example
     * // Update or create a UsuarioRol
     * const usuarioRol = await prisma.usuarioRol.upsert({
     *   create: {
     *     // ... data to create a UsuarioRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioRol we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioRolUpsertArgs>(args: SelectSubset<T, UsuarioRolUpsertArgs<ExtArgs>>): Prisma__UsuarioRolClient<$Result.GetResult<Prisma.$UsuarioRolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsuarioRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolCountArgs} args - Arguments to filter UsuarioRols to count.
     * @example
     * // Count the number of UsuarioRols
     * const count = await prisma.usuarioRol.count({
     *   where: {
     *     // ... the filter for the UsuarioRols we want to count
     *   }
     * })
    **/
    count<T extends UsuarioRolCountArgs>(
      args?: Subset<T, UsuarioRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioRolAggregateArgs>(args: Subset<T, UsuarioRolAggregateArgs>): Prisma.PrismaPromise<GetUsuarioRolAggregateType<T>>

    /**
     * Group by UsuarioRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioRolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioRolGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioRolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioRol model
   */
  readonly fields: UsuarioRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioRol model
   */ 
  interface UsuarioRolFieldRefs {
    readonly id: FieldRef<"UsuarioRol", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioRol", 'Int'>
    readonly rolId: FieldRef<"UsuarioRol", 'Int'>
    readonly asignadoPor: FieldRef<"UsuarioRol", 'Int'>
    readonly asignadoEn: FieldRef<"UsuarioRol", 'DateTime'>
    readonly expiraEn: FieldRef<"UsuarioRol", 'DateTime'>
    readonly estado: FieldRef<"UsuarioRol", 'EstadoRolUsuario'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioRol findUnique
   */
  export type UsuarioRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findUniqueOrThrow
   */
  export type UsuarioRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol findFirst
   */
  export type UsuarioRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findFirstOrThrow
   */
  export type UsuarioRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRol to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioRols.
     */
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol findMany
   */
  export type UsuarioRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioRols to fetch.
     */
    where?: UsuarioRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioRols to fetch.
     */
    orderBy?: UsuarioRolOrderByWithRelationInput | UsuarioRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioRols.
     */
    cursor?: UsuarioRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioRols.
     */
    skip?: number
    distinct?: UsuarioRolScalarFieldEnum | UsuarioRolScalarFieldEnum[]
  }

  /**
   * UsuarioRol create
   */
  export type UsuarioRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioRol.
     */
    data: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
  }

  /**
   * UsuarioRol createMany
   */
  export type UsuarioRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioRol createManyAndReturn
   */
  export type UsuarioRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UsuarioRols.
     */
    data: UsuarioRolCreateManyInput | UsuarioRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioRol update
   */
  export type UsuarioRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioRol.
     */
    data: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
    /**
     * Choose, which UsuarioRol to update.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol updateMany
   */
  export type UsuarioRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioRols.
     */
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioRols to update
     */
    where?: UsuarioRolWhereInput
  }

  /**
   * UsuarioRol upsert
   */
  export type UsuarioRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioRol to update in case it exists.
     */
    where: UsuarioRolWhereUniqueInput
    /**
     * In case the UsuarioRol found by the `where` argument doesn't exist, create a new UsuarioRol with this data.
     */
    create: XOR<UsuarioRolCreateInput, UsuarioRolUncheckedCreateInput>
    /**
     * In case the UsuarioRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioRolUpdateInput, UsuarioRolUncheckedUpdateInput>
  }

  /**
   * UsuarioRol delete
   */
  export type UsuarioRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
    /**
     * Filter which UsuarioRol to delete.
     */
    where: UsuarioRolWhereUniqueInput
  }

  /**
   * UsuarioRol deleteMany
   */
  export type UsuarioRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioRols to delete
     */
    where?: UsuarioRolWhereInput
  }

  /**
   * UsuarioRol without action
   */
  export type UsuarioRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioRol
     */
    select?: UsuarioRolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioRolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    nombre: $Enums.NombrePermiso | null
    descripcion: string | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    nombre: $Enums.NombrePermiso | null
    descripcion: string | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    nombre: $Enums.NombrePermiso
    descripcion: string | null
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: $Enums.NombrePermiso
      descripcion: string | null
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permiso model
   */ 
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly nombre: FieldRef<"Permiso", 'NombrePermiso'>
    readonly descripcion: FieldRef<"Permiso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoSumAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMinAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    id: number | null
    rolId: number | null
    permisoId: number | null
  }

  export type RolPermisoCountAggregateOutputType = {
    id: number
    rolId: number
    permisoId: number
    _all: number
  }


  export type RolPermisoAvgAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoSumAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMinAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
  }

  export type RolPermisoCountAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _avg?: RolPermisoAvgAggregateInputType
    _sum?: RolPermisoSumAggregateInputType
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    id: number
    rolId: number
    permisoId: number
    _count: RolPermisoCountAggregateOutputType | null
    _avg: RolPermisoAvgAggregateOutputType | null
    _sum: RolPermisoSumAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>

  export type RolPermisoSelectScalar = {
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
  }

  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }
  export type RolPermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      permiso: Prisma.$PermisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rolId: number
      permisoId: number
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisoCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolPermiso model
   */ 
  interface RolPermisoFieldRefs {
    readonly id: FieldRef<"RolPermiso", 'Int'>
    readonly rolId: FieldRef<"RolPermiso", 'Int'>
    readonly permisoId: FieldRef<"RolPermiso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso createManyAndReturn
   */
  export type RolPermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
  }


  /**
   * Model Sesion
   */

  export type AggregateSesion = {
    _count: SesionCountAggregateOutputType | null
    _avg: SesionAvgAggregateOutputType | null
    _sum: SesionSumAggregateOutputType | null
    _min: SesionMinAggregateOutputType | null
    _max: SesionMaxAggregateOutputType | null
  }

  export type SesionAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type SesionSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type SesionMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    token: string | null
    expiraEn: Date | null
    dispositivo: string | null
  }

  export type SesionMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    token: string | null
    expiraEn: Date | null
    dispositivo: string | null
  }

  export type SesionCountAggregateOutputType = {
    id: number
    usuarioId: number
    token: number
    expiraEn: number
    dispositivo: number
    _all: number
  }


  export type SesionAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type SesionSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type SesionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    expiraEn?: true
    dispositivo?: true
  }

  export type SesionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    expiraEn?: true
    dispositivo?: true
  }

  export type SesionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    expiraEn?: true
    dispositivo?: true
    _all?: true
  }

  export type SesionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sesion to aggregate.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sesions
    **/
    _count?: true | SesionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SesionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SesionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SesionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SesionMaxAggregateInputType
  }

  export type GetSesionAggregateType<T extends SesionAggregateArgs> = {
        [P in keyof T & keyof AggregateSesion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSesion[P]>
      : GetScalarType<T[P], AggregateSesion[P]>
  }




  export type SesionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionWhereInput
    orderBy?: SesionOrderByWithAggregationInput | SesionOrderByWithAggregationInput[]
    by: SesionScalarFieldEnum[] | SesionScalarFieldEnum
    having?: SesionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SesionCountAggregateInputType | true
    _avg?: SesionAvgAggregateInputType
    _sum?: SesionSumAggregateInputType
    _min?: SesionMinAggregateInputType
    _max?: SesionMaxAggregateInputType
  }

  export type SesionGroupByOutputType = {
    id: number
    usuarioId: number
    token: string
    expiraEn: Date
    dispositivo: string | null
    _count: SesionCountAggregateOutputType | null
    _avg: SesionAvgAggregateOutputType | null
    _sum: SesionSumAggregateOutputType | null
    _min: SesionMinAggregateOutputType | null
    _max: SesionMaxAggregateOutputType | null
  }

  type GetSesionGroupByPayload<T extends SesionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SesionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SesionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SesionGroupByOutputType[P]>
            : GetScalarType<T[P], SesionGroupByOutputType[P]>
        }
      >
    >


  export type SesionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    expiraEn?: boolean
    dispositivo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesion"]>

  export type SesionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    expiraEn?: boolean
    dispositivo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesion"]>

  export type SesionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    expiraEn?: boolean
    dispositivo?: boolean
  }

  export type SesionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SesionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SesionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sesion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      token: string
      expiraEn: Date
      dispositivo: string | null
    }, ExtArgs["result"]["sesion"]>
    composites: {}
  }

  type SesionGetPayload<S extends boolean | null | undefined | SesionDefaultArgs> = $Result.GetResult<Prisma.$SesionPayload, S>

  type SesionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SesionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SesionCountAggregateInputType | true
    }

  export interface SesionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sesion'], meta: { name: 'Sesion' } }
    /**
     * Find zero or one Sesion that matches the filter.
     * @param {SesionFindUniqueArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SesionFindUniqueArgs>(args: SelectSubset<T, SesionFindUniqueArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sesion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SesionFindUniqueOrThrowArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SesionFindUniqueOrThrowArgs>(args: SelectSubset<T, SesionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sesion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindFirstArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SesionFindFirstArgs>(args?: SelectSubset<T, SesionFindFirstArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sesion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindFirstOrThrowArgs} args - Arguments to find a Sesion
     * @example
     * // Get one Sesion
     * const sesion = await prisma.sesion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SesionFindFirstOrThrowArgs>(args?: SelectSubset<T, SesionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sesions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sesions
     * const sesions = await prisma.sesion.findMany()
     * 
     * // Get first 10 Sesions
     * const sesions = await prisma.sesion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sesionWithIdOnly = await prisma.sesion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SesionFindManyArgs>(args?: SelectSubset<T, SesionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sesion.
     * @param {SesionCreateArgs} args - Arguments to create a Sesion.
     * @example
     * // Create one Sesion
     * const Sesion = await prisma.sesion.create({
     *   data: {
     *     // ... data to create a Sesion
     *   }
     * })
     * 
     */
    create<T extends SesionCreateArgs>(args: SelectSubset<T, SesionCreateArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sesions.
     * @param {SesionCreateManyArgs} args - Arguments to create many Sesions.
     * @example
     * // Create many Sesions
     * const sesion = await prisma.sesion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SesionCreateManyArgs>(args?: SelectSubset<T, SesionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sesions and returns the data saved in the database.
     * @param {SesionCreateManyAndReturnArgs} args - Arguments to create many Sesions.
     * @example
     * // Create many Sesions
     * const sesion = await prisma.sesion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sesions and only return the `id`
     * const sesionWithIdOnly = await prisma.sesion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SesionCreateManyAndReturnArgs>(args?: SelectSubset<T, SesionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sesion.
     * @param {SesionDeleteArgs} args - Arguments to delete one Sesion.
     * @example
     * // Delete one Sesion
     * const Sesion = await prisma.sesion.delete({
     *   where: {
     *     // ... filter to delete one Sesion
     *   }
     * })
     * 
     */
    delete<T extends SesionDeleteArgs>(args: SelectSubset<T, SesionDeleteArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sesion.
     * @param {SesionUpdateArgs} args - Arguments to update one Sesion.
     * @example
     * // Update one Sesion
     * const sesion = await prisma.sesion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SesionUpdateArgs>(args: SelectSubset<T, SesionUpdateArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sesions.
     * @param {SesionDeleteManyArgs} args - Arguments to filter Sesions to delete.
     * @example
     * // Delete a few Sesions
     * const { count } = await prisma.sesion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SesionDeleteManyArgs>(args?: SelectSubset<T, SesionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sesions
     * const sesion = await prisma.sesion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SesionUpdateManyArgs>(args: SelectSubset<T, SesionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sesion.
     * @param {SesionUpsertArgs} args - Arguments to update or create a Sesion.
     * @example
     * // Update or create a Sesion
     * const sesion = await prisma.sesion.upsert({
     *   create: {
     *     // ... data to create a Sesion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sesion we want to update
     *   }
     * })
     */
    upsert<T extends SesionUpsertArgs>(args: SelectSubset<T, SesionUpsertArgs<ExtArgs>>): Prisma__SesionClient<$Result.GetResult<Prisma.$SesionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sesions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionCountArgs} args - Arguments to filter Sesions to count.
     * @example
     * // Count the number of Sesions
     * const count = await prisma.sesion.count({
     *   where: {
     *     // ... the filter for the Sesions we want to count
     *   }
     * })
    **/
    count<T extends SesionCountArgs>(
      args?: Subset<T, SesionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SesionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SesionAggregateArgs>(args: Subset<T, SesionAggregateArgs>): Prisma.PrismaPromise<GetSesionAggregateType<T>>

    /**
     * Group by Sesion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SesionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SesionGroupByArgs['orderBy'] }
        : { orderBy?: SesionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SesionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sesion model
   */
  readonly fields: SesionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sesion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SesionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sesion model
   */ 
  interface SesionFieldRefs {
    readonly id: FieldRef<"Sesion", 'Int'>
    readonly usuarioId: FieldRef<"Sesion", 'Int'>
    readonly token: FieldRef<"Sesion", 'String'>
    readonly expiraEn: FieldRef<"Sesion", 'DateTime'>
    readonly dispositivo: FieldRef<"Sesion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sesion findUnique
   */
  export type SesionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion findUniqueOrThrow
   */
  export type SesionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion findFirst
   */
  export type SesionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sesions.
     */
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion findFirstOrThrow
   */
  export type SesionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesion to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sesions.
     */
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion findMany
   */
  export type SesionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter, which Sesions to fetch.
     */
    where?: SesionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sesions to fetch.
     */
    orderBy?: SesionOrderByWithRelationInput | SesionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sesions.
     */
    cursor?: SesionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sesions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sesions.
     */
    skip?: number
    distinct?: SesionScalarFieldEnum | SesionScalarFieldEnum[]
  }

  /**
   * Sesion create
   */
  export type SesionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The data needed to create a Sesion.
     */
    data: XOR<SesionCreateInput, SesionUncheckedCreateInput>
  }

  /**
   * Sesion createMany
   */
  export type SesionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sesions.
     */
    data: SesionCreateManyInput | SesionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sesion createManyAndReturn
   */
  export type SesionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sesions.
     */
    data: SesionCreateManyInput | SesionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sesion update
   */
  export type SesionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The data needed to update a Sesion.
     */
    data: XOR<SesionUpdateInput, SesionUncheckedUpdateInput>
    /**
     * Choose, which Sesion to update.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion updateMany
   */
  export type SesionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sesions.
     */
    data: XOR<SesionUpdateManyMutationInput, SesionUncheckedUpdateManyInput>
    /**
     * Filter which Sesions to update
     */
    where?: SesionWhereInput
  }

  /**
   * Sesion upsert
   */
  export type SesionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * The filter to search for the Sesion to update in case it exists.
     */
    where: SesionWhereUniqueInput
    /**
     * In case the Sesion found by the `where` argument doesn't exist, create a new Sesion with this data.
     */
    create: XOR<SesionCreateInput, SesionUncheckedCreateInput>
    /**
     * In case the Sesion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SesionUpdateInput, SesionUncheckedUpdateInput>
  }

  /**
   * Sesion delete
   */
  export type SesionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
    /**
     * Filter which Sesion to delete.
     */
    where: SesionWhereUniqueInput
  }

  /**
   * Sesion deleteMany
   */
  export type SesionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sesions to delete
     */
    where?: SesionWhereInput
  }

  /**
   * Sesion without action
   */
  export type SesionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sesion
     */
    select?: SesionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    passwordHash: 'passwordHash',
    estado: 'estado',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioRolScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    rolId: 'rolId',
    asignadoPor: 'asignadoPor',
    asignadoEn: 'asignadoEn',
    expiraEn: 'expiraEn',
    estado: 'estado'
  };

  export type UsuarioRolScalarFieldEnum = (typeof UsuarioRolScalarFieldEnum)[keyof typeof UsuarioRolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


  export const SesionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    token: 'token',
    expiraEn: 'expiraEn',
    dispositivo: 'dispositivo'
  };

  export type SesionScalarFieldEnum = (typeof SesionScalarFieldEnum)[keyof typeof SesionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EstadoUsuario'
   */
  export type EnumEstadoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoUsuario'>
    


  /**
   * Reference to a field of type 'EstadoUsuario[]'
   */
  export type ListEnumEstadoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'NombreRol'
   */
  export type EnumNombreRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NombreRol'>
    


  /**
   * Reference to a field of type 'NombreRol[]'
   */
  export type ListEnumNombreRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NombreRol[]'>
    


  /**
   * Reference to a field of type 'EstadoRolUsuario'
   */
  export type EnumEstadoRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRolUsuario'>
    


  /**
   * Reference to a field of type 'EstadoRolUsuario[]'
   */
  export type ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRolUsuario[]'>
    


  /**
   * Reference to a field of type 'NombrePermiso'
   */
  export type EnumNombrePermisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NombrePermiso'>
    


  /**
   * Reference to a field of type 'NombrePermiso[]'
   */
  export type ListEnumNombrePermisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NombrePermiso[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    estado?: EnumEstadoUsuarioFilter<"Usuario"> | $Enums.EstadoUsuario
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    roles?: UsuarioRolListRelationFilter
    sesiones?: SesionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    roles?: UsuarioRolOrderByRelationAggregateInput
    sesiones?: SesionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    estado?: EnumEstadoUsuarioFilter<"Usuario"> | $Enums.EstadoUsuario
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    roles?: UsuarioRolListRelationFilter
    sesiones?: SesionListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: EnumEstadoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.EstadoUsuario
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: EnumNombreRolFilter<"Rol"> | $Enums.NombreRol
    descripcion?: StringNullableFilter<"Rol"> | string | null
    usuarios?: UsuarioRolListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    usuarios?: UsuarioRolOrderByRelationAggregateInput
    permisos?: RolPermisoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: $Enums.NombreRol
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    descripcion?: StringNullableFilter<"Rol"> | string | null
    usuarios?: UsuarioRolListRelationFilter
    permisos?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: EnumNombreRolWithAggregatesFilter<"Rol"> | $Enums.NombreRol
    descripcion?: StringNullableWithAggregatesFilter<"Rol"> | string | null
  }

  export type UsuarioRolWhereInput = {
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    asignadoPor?: IntNullableFilter<"UsuarioRol"> | number | null
    asignadoEn?: DateTimeFilter<"UsuarioRol"> | Date | string
    expiraEn?: DateTimeNullableFilter<"UsuarioRol"> | Date | string | null
    estado?: EnumEstadoRolUsuarioFilter<"UsuarioRol"> | $Enums.EstadoRolUsuario
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolRelationFilter, RolWhereInput>
  }

  export type UsuarioRolOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrderInput | SortOrder
    asignadoEn?: SortOrder
    expiraEn?: SortOrderInput | SortOrder
    estado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type UsuarioRolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_rolId?: UsuarioRolUsuarioIdRolIdCompoundUniqueInput
    AND?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    OR?: UsuarioRolWhereInput[]
    NOT?: UsuarioRolWhereInput | UsuarioRolWhereInput[]
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    asignadoPor?: IntNullableFilter<"UsuarioRol"> | number | null
    asignadoEn?: DateTimeFilter<"UsuarioRol"> | Date | string
    expiraEn?: DateTimeNullableFilter<"UsuarioRol"> | Date | string | null
    estado?: EnumEstadoRolUsuarioFilter<"UsuarioRol"> | $Enums.EstadoRolUsuario
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolRelationFilter, RolWhereInput>
  }, "id" | "usuarioId_rolId">

  export type UsuarioRolOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrderInput | SortOrder
    asignadoEn?: SortOrder
    expiraEn?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: UsuarioRolCountOrderByAggregateInput
    _avg?: UsuarioRolAvgOrderByAggregateInput
    _max?: UsuarioRolMaxOrderByAggregateInput
    _min?: UsuarioRolMinOrderByAggregateInput
    _sum?: UsuarioRolSumOrderByAggregateInput
  }

  export type UsuarioRolScalarWhereWithAggregatesInput = {
    AND?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    OR?: UsuarioRolScalarWhereWithAggregatesInput[]
    NOT?: UsuarioRolScalarWhereWithAggregatesInput | UsuarioRolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioRol"> | number
    usuarioId?: IntWithAggregatesFilter<"UsuarioRol"> | number
    rolId?: IntWithAggregatesFilter<"UsuarioRol"> | number
    asignadoPor?: IntNullableWithAggregatesFilter<"UsuarioRol"> | number | null
    asignadoEn?: DateTimeWithAggregatesFilter<"UsuarioRol"> | Date | string
    expiraEn?: DateTimeNullableWithAggregatesFilter<"UsuarioRol"> | Date | string | null
    estado?: EnumEstadoRolUsuarioWithAggregatesFilter<"UsuarioRol"> | $Enums.EstadoRolUsuario
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    nombre?: EnumNombrePermisoFilter<"Permiso"> | $Enums.NombrePermiso
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    roles?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    roles?: RolPermisoOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: $Enums.NombrePermiso
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    roles?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    nombre?: EnumNombrePermisoWithAggregatesFilter<"Permiso"> | $Enums.NombrePermiso
    descripcion?: StringNullableWithAggregatesFilter<"Permiso"> | string | null
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoRelationFilter, PermisoWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    rol?: RolOrderByWithRelationInput
    permiso?: PermisoOrderByWithRelationInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rolId_permisoId?: RolPermisoRolIdPermisoIdCompoundUniqueInput
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
    rol?: XOR<RolRelationFilter, RolWhereInput>
    permiso?: XOR<PermisoRelationFilter, PermisoWhereInput>
  }, "id" | "rolId_permisoId">

  export type RolPermisoOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _avg?: RolPermisoAvgOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
    _sum?: RolPermisoSumOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolPermiso"> | number
    rolId?: IntWithAggregatesFilter<"RolPermiso"> | number
    permisoId?: IntWithAggregatesFilter<"RolPermiso"> | number
  }

  export type SesionWhereInput = {
    AND?: SesionWhereInput | SesionWhereInput[]
    OR?: SesionWhereInput[]
    NOT?: SesionWhereInput | SesionWhereInput[]
    id?: IntFilter<"Sesion"> | number
    usuarioId?: IntFilter<"Sesion"> | number
    token?: StringFilter<"Sesion"> | string
    expiraEn?: DateTimeFilter<"Sesion"> | Date | string
    dispositivo?: StringNullableFilter<"Sesion"> | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type SesionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    expiraEn?: SortOrder
    dispositivo?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SesionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: SesionWhereInput | SesionWhereInput[]
    OR?: SesionWhereInput[]
    NOT?: SesionWhereInput | SesionWhereInput[]
    usuarioId?: IntFilter<"Sesion"> | number
    expiraEn?: DateTimeFilter<"Sesion"> | Date | string
    dispositivo?: StringNullableFilter<"Sesion"> | string | null
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id" | "token">

  export type SesionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    expiraEn?: SortOrder
    dispositivo?: SortOrderInput | SortOrder
    _count?: SesionCountOrderByAggregateInput
    _avg?: SesionAvgOrderByAggregateInput
    _max?: SesionMaxOrderByAggregateInput
    _min?: SesionMinOrderByAggregateInput
    _sum?: SesionSumOrderByAggregateInput
  }

  export type SesionScalarWhereWithAggregatesInput = {
    AND?: SesionScalarWhereWithAggregatesInput | SesionScalarWhereWithAggregatesInput[]
    OR?: SesionScalarWhereWithAggregatesInput[]
    NOT?: SesionScalarWhereWithAggregatesInput | SesionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sesion"> | number
    usuarioId?: IntWithAggregatesFilter<"Sesion"> | number
    token?: StringWithAggregatesFilter<"Sesion"> | string
    expiraEn?: DateTimeWithAggregatesFilter<"Sesion"> | Date | string
    dispositivo?: StringNullableWithAggregatesFilter<"Sesion"> | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    roles?: UsuarioRolCreateNestedManyWithoutUsuarioInput
    sesiones?: SesionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    roles?: UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SesionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUpdateManyWithoutUsuarioNestedInput
    sesiones?: SesionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SesionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolCreateInput = {
    nombre: $Enums.NombreRol
    descripcion?: string | null
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: $Enums.NombreRol
    descripcion?: string | null
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: $Enums.NombreRol
    descripcion?: string | null
  }

  export type RolUpdateManyMutationInput = {
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioRolCreateInput = {
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
    usuario: UsuarioCreateNestedOneWithoutRolesInput
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateInput = {
    id?: number
    usuarioId: number
    rolId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type UsuarioRolUpdateInput = {
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type UsuarioRolCreateManyInput = {
    id?: number
    usuarioId: number
    rolId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type UsuarioRolUpdateManyMutationInput = {
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type UsuarioRolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type PermisoCreateInput = {
    nombre: $Enums.NombrePermiso
    descripcion?: string | null
    roles?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    nombre: $Enums.NombrePermiso
    descripcion?: string | null
    roles?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: number
    nombre: $Enums.NombrePermiso
    descripcion?: string | null
  }

  export type PermisoUpdateManyMutationInput = {
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolPermisoCreateInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyInput = {
    id?: number
    rolId: number
    permisoId: number
  }

  export type RolPermisoUpdateManyMutationInput = {

  }

  export type RolPermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type SesionCreateInput = {
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
    usuario: UsuarioCreateNestedOneWithoutSesionesInput
  }

  export type SesionUncheckedCreateInput = {
    id?: number
    usuarioId: number
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
  }

  export type SesionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SesionCreateManyInput = {
    id?: number
    usuarioId: number
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
  }

  export type SesionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SesionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumEstadoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoUsuario | EnumEstadoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoUsuarioFilter<$PrismaModel> | $Enums.EstadoUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioRolListRelationFilter = {
    every?: UsuarioRolWhereInput
    some?: UsuarioRolWhereInput
    none?: UsuarioRolWhereInput
  }

  export type SesionListRelationFilter = {
    every?: SesionWhereInput
    some?: SesionWhereInput
    none?: SesionWhereInput
  }

  export type UsuarioRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SesionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumEstadoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoUsuario | EnumEstadoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEstadoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumNombreRolFilter<$PrismaModel = never> = {
    equals?: $Enums.NombreRol | EnumNombreRolFieldRefInput<$PrismaModel>
    in?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    not?: NestedEnumNombreRolFilter<$PrismaModel> | $Enums.NombreRol
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumNombreRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NombreRol | EnumNombreRolFieldRefInput<$PrismaModel>
    in?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    not?: NestedEnumNombreRolWithAggregatesFilter<$PrismaModel> | $Enums.NombreRol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNombreRolFilter<$PrismaModel>
    _max?: NestedEnumNombreRolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEstadoRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRolUsuario | EnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel> | $Enums.EstadoRolUsuario
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RolRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type UsuarioRolUsuarioIdRolIdCompoundUniqueInput = {
    usuarioId: number
    rolId: number
  }

  export type UsuarioRolCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrder
    asignadoEn?: SortOrder
    expiraEn?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioRolAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrder
  }

  export type UsuarioRolMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrder
    asignadoEn?: SortOrder
    expiraEn?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioRolMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrder
    asignadoEn?: SortOrder
    expiraEn?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioRolSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    asignadoPor?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEstadoRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRolUsuario | EnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel>
  }

  export type EnumNombrePermisoFilter<$PrismaModel = never> = {
    equals?: $Enums.NombrePermiso | EnumNombrePermisoFieldRefInput<$PrismaModel>
    in?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumNombrePermisoFilter<$PrismaModel> | $Enums.NombrePermiso
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumNombrePermisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NombrePermiso | EnumNombrePermisoFieldRefInput<$PrismaModel>
    in?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumNombrePermisoWithAggregatesFilter<$PrismaModel> | $Enums.NombrePermiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNombrePermisoFilter<$PrismaModel>
    _max?: NestedEnumNombrePermisoFilter<$PrismaModel>
  }

  export type PermisoRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolPermisoRolIdPermisoIdCompoundUniqueInput = {
    rolId: number
    permisoId: number
  }

  export type RolPermisoCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type RolPermisoSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
  }

  export type SesionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    expiraEn?: SortOrder
    dispositivo?: SortOrder
  }

  export type SesionAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type SesionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    expiraEn?: SortOrder
    dispositivo?: SortOrder
  }

  export type SesionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    expiraEn?: SortOrder
    dispositivo?: SortOrder
  }

  export type SesionSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type UsuarioRolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type SesionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput> | SesionCreateWithoutUsuarioInput[] | SesionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutUsuarioInput | SesionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SesionCreateManyUsuarioInputEnvelope
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type SesionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput> | SesionCreateWithoutUsuarioInput[] | SesionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutUsuarioInput | SesionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SesionCreateManyUsuarioInputEnvelope
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEstadoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.EstadoUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioRolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type SesionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput> | SesionCreateWithoutUsuarioInput[] | SesionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutUsuarioInput | SesionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SesionUpsertWithWhereUniqueWithoutUsuarioInput | SesionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SesionCreateManyUsuarioInputEnvelope
    set?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    disconnect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    delete?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    update?: SesionUpdateWithWhereUniqueWithoutUsuarioInput | SesionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SesionUpdateManyWithWhereWithoutUsuarioInput | SesionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SesionScalarWhereInput | SesionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput> | UsuarioRolCreateWithoutUsuarioInput[] | UsuarioRolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutUsuarioInput | UsuarioRolCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioRolCreateManyUsuarioInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutUsuarioInput | UsuarioRolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type SesionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput> | SesionCreateWithoutUsuarioInput[] | SesionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionCreateOrConnectWithoutUsuarioInput | SesionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SesionUpsertWithWhereUniqueWithoutUsuarioInput | SesionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SesionCreateManyUsuarioInputEnvelope
    set?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    disconnect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    delete?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    connect?: SesionWhereUniqueInput | SesionWhereUniqueInput[]
    update?: SesionUpdateWithWhereUniqueWithoutUsuarioInput | SesionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SesionUpdateManyWithWhereWithoutUsuarioInput | SesionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SesionScalarWhereInput | SesionScalarWhereInput[]
  }

  export type UsuarioRolCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type EnumNombreRolFieldUpdateOperationsInput = {
    set?: $Enums.NombreRol
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput> | UsuarioRolCreateWithoutRolInput[] | UsuarioRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioRolCreateOrConnectWithoutRolInput | UsuarioRolCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioRolUpsertWithWhereUniqueWithoutRolInput | UsuarioRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioRolCreateManyRolInputEnvelope
    set?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    disconnect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    delete?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    connect?: UsuarioRolWhereUniqueInput | UsuarioRolWhereUniqueInput[]
    update?: UsuarioRolUpdateWithWhereUniqueWithoutRolInput | UsuarioRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioRolUpdateManyWithWhereWithoutRolInput | UsuarioRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRolesInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEstadoRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.EstadoRolUsuario
  }

  export type UsuarioUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesInput
    upsert?: UsuarioUpsertWithoutRolesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolesInput, UsuarioUpdateWithoutRolesInput>, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type EnumNombrePermisoFieldUpdateOperationsInput = {
    set?: $Enums.NombrePermiso
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type UsuarioCreateNestedOneWithoutSesionesInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    upsert?: UsuarioUpsertWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSesionesInput, UsuarioUpdateWithoutSesionesInput>, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEstadoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoUsuario | EnumEstadoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoUsuarioFilter<$PrismaModel> | $Enums.EstadoUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEstadoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoUsuario | EnumEstadoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoUsuario[] | ListEnumEstadoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEstadoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumNombreRolFilter<$PrismaModel = never> = {
    equals?: $Enums.NombreRol | EnumNombreRolFieldRefInput<$PrismaModel>
    in?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    not?: NestedEnumNombreRolFilter<$PrismaModel> | $Enums.NombreRol
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNombreRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NombreRol | EnumNombreRolFieldRefInput<$PrismaModel>
    in?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombreRol[] | ListEnumNombreRolFieldRefInput<$PrismaModel>
    not?: NestedEnumNombreRolWithAggregatesFilter<$PrismaModel> | $Enums.NombreRol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNombreRolFilter<$PrismaModel>
    _max?: NestedEnumNombreRolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEstadoRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRolUsuario | EnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel> | $Enums.EstadoRolUsuario
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRolUsuario | EnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRolUsuario[] | ListEnumEstadoRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumEstadoRolUsuarioFilter<$PrismaModel>
  }

  export type NestedEnumNombrePermisoFilter<$PrismaModel = never> = {
    equals?: $Enums.NombrePermiso | EnumNombrePermisoFieldRefInput<$PrismaModel>
    in?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumNombrePermisoFilter<$PrismaModel> | $Enums.NombrePermiso
  }

  export type NestedEnumNombrePermisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NombrePermiso | EnumNombrePermisoFieldRefInput<$PrismaModel>
    in?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.NombrePermiso[] | ListEnumNombrePermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumNombrePermisoWithAggregatesFilter<$PrismaModel> | $Enums.NombrePermiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNombrePermisoFilter<$PrismaModel>
    _max?: NestedEnumNombrePermisoFilter<$PrismaModel>
  }

  export type UsuarioRolCreateWithoutUsuarioInput = {
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioRolUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rolId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type UsuarioRolCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolCreateManyUsuarioInputEnvelope = {
    data: UsuarioRolCreateManyUsuarioInput | UsuarioRolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SesionCreateWithoutUsuarioInput = {
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
  }

  export type SesionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
  }

  export type SesionCreateOrConnectWithoutUsuarioInput = {
    where: SesionWhereUniqueInput
    create: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput>
  }

  export type SesionCreateManyUsuarioInputEnvelope = {
    data: SesionCreateManyUsuarioInput | SesionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioRolCreateWithoutUsuarioInput, UsuarioRolUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutUsuarioInput, UsuarioRolUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioRolScalarWhereInput = {
    AND?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    OR?: UsuarioRolScalarWhereInput[]
    NOT?: UsuarioRolScalarWhereInput | UsuarioRolScalarWhereInput[]
    id?: IntFilter<"UsuarioRol"> | number
    usuarioId?: IntFilter<"UsuarioRol"> | number
    rolId?: IntFilter<"UsuarioRol"> | number
    asignadoPor?: IntNullableFilter<"UsuarioRol"> | number | null
    asignadoEn?: DateTimeFilter<"UsuarioRol"> | Date | string
    expiraEn?: DateTimeNullableFilter<"UsuarioRol"> | Date | string | null
    estado?: EnumEstadoRolUsuarioFilter<"UsuarioRol"> | $Enums.EstadoRolUsuario
  }

  export type SesionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SesionWhereUniqueInput
    update: XOR<SesionUpdateWithoutUsuarioInput, SesionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SesionCreateWithoutUsuarioInput, SesionUncheckedCreateWithoutUsuarioInput>
  }

  export type SesionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SesionWhereUniqueInput
    data: XOR<SesionUpdateWithoutUsuarioInput, SesionUncheckedUpdateWithoutUsuarioInput>
  }

  export type SesionUpdateManyWithWhereWithoutUsuarioInput = {
    where: SesionScalarWhereInput
    data: XOR<SesionUpdateManyMutationInput, SesionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SesionScalarWhereInput = {
    AND?: SesionScalarWhereInput | SesionScalarWhereInput[]
    OR?: SesionScalarWhereInput[]
    NOT?: SesionScalarWhereInput | SesionScalarWhereInput[]
    id?: IntFilter<"Sesion"> | number
    usuarioId?: IntFilter<"Sesion"> | number
    token?: StringFilter<"Sesion"> | string
    expiraEn?: DateTimeFilter<"Sesion"> | Date | string
    dispositivo?: StringNullableFilter<"Sesion"> | string | null
  }

  export type UsuarioRolCreateWithoutRolInput = {
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
    usuario: UsuarioCreateNestedOneWithoutRolesInput
  }

  export type UsuarioRolUncheckedCreateWithoutRolInput = {
    id?: number
    usuarioId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type UsuarioRolCreateOrConnectWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolCreateManyRolInputEnvelope = {
    data: UsuarioRolCreateManyRolInput | UsuarioRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    id?: number
    permisoId: number
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioRolUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    update: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioRolCreateWithoutRolInput, UsuarioRolUncheckedCreateWithoutRolInput>
  }

  export type UsuarioRolUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioRolWhereUniqueInput
    data: XOR<UsuarioRolUpdateWithoutRolInput, UsuarioRolUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioRolUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioRolScalarWhereInput
    data: XOR<UsuarioRolUpdateManyMutationInput, UsuarioRolUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    id?: IntFilter<"RolPermiso"> | number
    rolId?: IntFilter<"RolPermiso"> | number
    permisoId?: IntFilter<"RolPermiso"> | number
  }

  export type UsuarioCreateWithoutRolesInput = {
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    sesiones?: SesionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    sesiones?: SesionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: $Enums.NombreRol
    descripcion?: string | null
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: $Enums.NombreRol
    descripcion?: string | null
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutRolesInput = {
    update: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
    create: XOR<UsuarioCreateWithoutRolesInput, UsuarioUncheckedCreateWithoutRolesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRolesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRolesInput, UsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type UsuarioUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type RolCreateWithoutPermisosInput = {
    nombre: $Enums.NombreRol
    descripcion?: string | null
    usuarios?: UsuarioRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: $Enums.NombreRol
    descripcion?: string | null
    usuarios?: UsuarioRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    nombre: $Enums.NombrePermiso
    descripcion?: string | null
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: $Enums.NombrePermiso
    descripcion?: string | null
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombreRolFieldUpdateOperationsInput | $Enums.NombreRol
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: EnumNombrePermisoFieldUpdateOperationsInput | $Enums.NombrePermiso
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateWithoutSesionesInput = {
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    roles?: UsuarioRolCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSesionesInput = {
    id?: number
    nombre: string
    email: string
    passwordHash: string
    estado?: $Enums.EstadoUsuario
    creadoEn?: Date | string
    roles?: UsuarioRolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSesionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
  }

  export type UsuarioUpsertWithoutSesionesInput = {
    update: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSesionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioUpdateWithoutSesionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSesionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoUsuarioFieldUpdateOperationsInput | $Enums.EstadoUsuario
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UsuarioRolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioRolCreateManyUsuarioInput = {
    id?: number
    rolId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type SesionCreateManyUsuarioInput = {
    id?: number
    token: string
    expiraEn: Date | string
    dispositivo?: string | null
  }

  export type UsuarioRolUpdateWithoutUsuarioInput = {
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type UsuarioRolUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type SesionUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SesionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SesionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioRolCreateManyRolInput = {
    id?: number
    usuarioId: number
    asignadoPor?: number | null
    asignadoEn?: Date | string
    expiraEn?: Date | string | null
    estado?: $Enums.EstadoRolUsuario
  }

  export type RolPermisoCreateManyRolInput = {
    id?: number
    permisoId: number
  }

  export type UsuarioRolUpdateWithoutRolInput = {
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
    usuario?: UsuarioUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UsuarioRolUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type UsuarioRolUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    asignadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    asignadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: EnumEstadoRolUsuarioFieldUpdateOperationsInput | $Enums.EstadoRolUsuario
  }

  export type RolPermisoUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoCreateManyPermisoInput = {
    id?: number
    rolId: number
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolCountOutputTypeDefaultArgs instead
     */
    export type RolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermisoCountOutputTypeDefaultArgs instead
     */
    export type PermisoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermisoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolDefaultArgs instead
     */
    export type RolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioRolDefaultArgs instead
     */
    export type UsuarioRolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioRolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermisoDefaultArgs instead
     */
    export type PermisoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermisoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolPermisoDefaultArgs instead
     */
    export type RolPermisoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolPermisoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SesionDefaultArgs instead
     */
    export type SesionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SesionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}