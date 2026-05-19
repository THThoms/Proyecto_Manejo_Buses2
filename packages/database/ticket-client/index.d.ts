
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
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model Boleto
 * 
 */
export type Boleto = $Result.DefaultSelection<Prisma.$BoletoPayload>
/**
 * Model PagoPasajero
 * 
 */
export type PagoPasajero = $Result.DefaultSelection<Prisma.$PagoPasajeroPayload>
/**
 * Model PagoTarjeta
 * 
 */
export type PagoTarjeta = $Result.DefaultSelection<Prisma.$PagoTarjetaPayload>
/**
 * Model PagoTransferencia
 * 
 */
export type PagoTransferencia = $Result.DefaultSelection<Prisma.$PagoTransferenciaPayload>
/**
 * Model Aprobacion
 * 
 */
export type Aprobacion = $Result.DefaultSelection<Prisma.$AprobacionPayload>
/**
 * Model PagoEfectivo
 * 
 */
export type PagoEfectivo = $Result.DefaultSelection<Prisma.$PagoEfectivoPayload>
/**
 * Model Escaneo
 * 
 */
export type Escaneo = $Result.DefaultSelection<Prisma.$EscaneoPayload>
/**
 * Model BoletoParada
 * 
 */
export type BoletoParada = $Result.DefaultSelection<Prisma.$BoletoParadaPayload>
/**
 * Model AlertaGps
 * 
 */
export type AlertaGps = $Result.DefaultSelection<Prisma.$AlertaGpsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CanalVenta: {
  APP: 'APP',
  WEB: 'WEB',
  OFICIAL: 'OFICIAL',
  OFICINISTA: 'OFICINISTA'
};

export type CanalVenta = (typeof CanalVenta)[keyof typeof CanalVenta]


export const EstadoCompra: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADA: 'CONFIRMADA',
  ANULADA: 'ANULADA'
};

export type EstadoCompra = (typeof EstadoCompra)[keyof typeof EstadoCompra]


export const TipoTarifa: {
  NORMAL: 'NORMAL',
  TERCERA_EDAD: 'TERCERA_EDAD',
  DISCAPACIDAD: 'DISCAPACIDAD',
  MENOR: 'MENOR'
};

export type TipoTarifa = (typeof TipoTarifa)[keyof typeof TipoTarifa]


export const EstadoBoleto: {
  PENDIENTE: 'PENDIENTE',
  VIGENTE: 'VIGENTE',
  UTILIZADO: 'UTILIZADO',
  EXPIRADO: 'EXPIRADO',
  ANULADO: 'ANULADO'
};

export type EstadoBoleto = (typeof EstadoBoleto)[keyof typeof EstadoBoleto]


export const MetodoPago: {
  TARJETA: 'TARJETA',
  TRANSFERENCIA: 'TRANSFERENCIA',
  EFECTIVO: 'EFECTIVO'
};

export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago]


export const EstadoPago: {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type EstadoPago = (typeof EstadoPago)[keyof typeof EstadoPago]


export const EstadoTransferencia: {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type EstadoTransferencia = (typeof EstadoTransferencia)[keyof typeof EstadoTransferencia]


export const EstadoAprobacion: {
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type EstadoAprobacion = (typeof EstadoAprobacion)[keyof typeof EstadoAprobacion]


export const CanalEfectivo: {
  BUS: 'BUS',
  OFICINA: 'OFICINA'
};

export type CanalEfectivo = (typeof CanalEfectivo)[keyof typeof CanalEfectivo]


export const ResultadoEscaneo: {
  APROBADO: 'APROBADO',
  RECHAZADO: 'RECHAZADO'
};

export type ResultadoEscaneo = (typeof ResultadoEscaneo)[keyof typeof ResultadoEscaneo]


export const EstadoBoletoParada: {
  PENDIENTE: 'PENDIENTE',
  ALERTADO: 'ALERTADO',
  BAJADO: 'BAJADO'
};

export type EstadoBoletoParada = (typeof EstadoBoletoParada)[keyof typeof EstadoBoletoParada]


export const EstadoAlerta: {
  ACTIVA: 'ACTIVA',
  DISPARADA: 'DISPARADA',
  INACTIVA: 'INACTIVA'
};

export type EstadoAlerta = (typeof EstadoAlerta)[keyof typeof EstadoAlerta]

}

export type CanalVenta = $Enums.CanalVenta

export const CanalVenta: typeof $Enums.CanalVenta

export type EstadoCompra = $Enums.EstadoCompra

export const EstadoCompra: typeof $Enums.EstadoCompra

export type TipoTarifa = $Enums.TipoTarifa

export const TipoTarifa: typeof $Enums.TipoTarifa

export type EstadoBoleto = $Enums.EstadoBoleto

export const EstadoBoleto: typeof $Enums.EstadoBoleto

export type MetodoPago = $Enums.MetodoPago

export const MetodoPago: typeof $Enums.MetodoPago

export type EstadoPago = $Enums.EstadoPago

export const EstadoPago: typeof $Enums.EstadoPago

export type EstadoTransferencia = $Enums.EstadoTransferencia

export const EstadoTransferencia: typeof $Enums.EstadoTransferencia

export type EstadoAprobacion = $Enums.EstadoAprobacion

export const EstadoAprobacion: typeof $Enums.EstadoAprobacion

export type CanalEfectivo = $Enums.CanalEfectivo

export const CanalEfectivo: typeof $Enums.CanalEfectivo

export type ResultadoEscaneo = $Enums.ResultadoEscaneo

export const ResultadoEscaneo: typeof $Enums.ResultadoEscaneo

export type EstadoBoletoParada = $Enums.EstadoBoletoParada

export const EstadoBoletoParada: typeof $Enums.EstadoBoletoParada

export type EstadoAlerta = $Enums.EstadoAlerta

export const EstadoAlerta: typeof $Enums.EstadoAlerta

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Compras
 * const compras = await prisma.compra.findMany()
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
   * // Fetch zero or more Compras
   * const compras = await prisma.compra.findMany()
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
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs>;

  /**
   * `prisma.boleto`: Exposes CRUD operations for the **Boleto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boletos
    * const boletos = await prisma.boleto.findMany()
    * ```
    */
  get boleto(): Prisma.BoletoDelegate<ExtArgs>;

  /**
   * `prisma.pagoPasajero`: Exposes CRUD operations for the **PagoPasajero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoPasajeros
    * const pagoPasajeros = await prisma.pagoPasajero.findMany()
    * ```
    */
  get pagoPasajero(): Prisma.PagoPasajeroDelegate<ExtArgs>;

  /**
   * `prisma.pagoTarjeta`: Exposes CRUD operations for the **PagoTarjeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoTarjetas
    * const pagoTarjetas = await prisma.pagoTarjeta.findMany()
    * ```
    */
  get pagoTarjeta(): Prisma.PagoTarjetaDelegate<ExtArgs>;

  /**
   * `prisma.pagoTransferencia`: Exposes CRUD operations for the **PagoTransferencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoTransferencias
    * const pagoTransferencias = await prisma.pagoTransferencia.findMany()
    * ```
    */
  get pagoTransferencia(): Prisma.PagoTransferenciaDelegate<ExtArgs>;

  /**
   * `prisma.aprobacion`: Exposes CRUD operations for the **Aprobacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aprobacions
    * const aprobacions = await prisma.aprobacion.findMany()
    * ```
    */
  get aprobacion(): Prisma.AprobacionDelegate<ExtArgs>;

  /**
   * `prisma.pagoEfectivo`: Exposes CRUD operations for the **PagoEfectivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PagoEfectivos
    * const pagoEfectivos = await prisma.pagoEfectivo.findMany()
    * ```
    */
  get pagoEfectivo(): Prisma.PagoEfectivoDelegate<ExtArgs>;

  /**
   * `prisma.escaneo`: Exposes CRUD operations for the **Escaneo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escaneos
    * const escaneos = await prisma.escaneo.findMany()
    * ```
    */
  get escaneo(): Prisma.EscaneoDelegate<ExtArgs>;

  /**
   * `prisma.boletoParada`: Exposes CRUD operations for the **BoletoParada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoletoParadas
    * const boletoParadas = await prisma.boletoParada.findMany()
    * ```
    */
  get boletoParada(): Prisma.BoletoParadaDelegate<ExtArgs>;

  /**
   * `prisma.alertaGps`: Exposes CRUD operations for the **AlertaGps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertaGps
    * const alertaGps = await prisma.alertaGps.findMany()
    * ```
    */
  get alertaGps(): Prisma.AlertaGpsDelegate<ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "compra" | "boleto" | "pagoPasajero" | "pagoTarjeta" | "pagoTransferencia" | "aprobacion" | "pagoEfectivo" | "escaneo" | "boletoParada" | "alertaGps"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      Boleto: {
        payload: Prisma.$BoletoPayload<ExtArgs>
        fields: Prisma.BoletoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoletoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoletoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findFirst: {
            args: Prisma.BoletoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoletoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findMany: {
            args: Prisma.BoletoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          create: {
            args: Prisma.BoletoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          createMany: {
            args: Prisma.BoletoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoletoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          delete: {
            args: Prisma.BoletoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          update: {
            args: Prisma.BoletoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          deleteMany: {
            args: Prisma.BoletoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoletoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoletoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          aggregate: {
            args: Prisma.BoletoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoleto>
          }
          groupBy: {
            args: Prisma.BoletoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoletoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoletoCountArgs<ExtArgs>
            result: $Utils.Optional<BoletoCountAggregateOutputType> | number
          }
        }
      }
      PagoPasajero: {
        payload: Prisma.$PagoPasajeroPayload<ExtArgs>
        fields: Prisma.PagoPasajeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoPasajeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoPasajeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          findFirst: {
            args: Prisma.PagoPasajeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoPasajeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          findMany: {
            args: Prisma.PagoPasajeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>[]
          }
          create: {
            args: Prisma.PagoPasajeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          createMany: {
            args: Prisma.PagoPasajeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoPasajeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>[]
          }
          delete: {
            args: Prisma.PagoPasajeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          update: {
            args: Prisma.PagoPasajeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          deleteMany: {
            args: Prisma.PagoPasajeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoPasajeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoPasajeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPasajeroPayload>
          }
          aggregate: {
            args: Prisma.PagoPasajeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoPasajero>
          }
          groupBy: {
            args: Prisma.PagoPasajeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoPasajeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoPasajeroCountArgs<ExtArgs>
            result: $Utils.Optional<PagoPasajeroCountAggregateOutputType> | number
          }
        }
      }
      PagoTarjeta: {
        payload: Prisma.$PagoTarjetaPayload<ExtArgs>
        fields: Prisma.PagoTarjetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoTarjetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoTarjetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          findFirst: {
            args: Prisma.PagoTarjetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoTarjetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          findMany: {
            args: Prisma.PagoTarjetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>[]
          }
          create: {
            args: Prisma.PagoTarjetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          createMany: {
            args: Prisma.PagoTarjetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoTarjetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>[]
          }
          delete: {
            args: Prisma.PagoTarjetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          update: {
            args: Prisma.PagoTarjetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          deleteMany: {
            args: Prisma.PagoTarjetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoTarjetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoTarjetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTarjetaPayload>
          }
          aggregate: {
            args: Prisma.PagoTarjetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoTarjeta>
          }
          groupBy: {
            args: Prisma.PagoTarjetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoTarjetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoTarjetaCountArgs<ExtArgs>
            result: $Utils.Optional<PagoTarjetaCountAggregateOutputType> | number
          }
        }
      }
      PagoTransferencia: {
        payload: Prisma.$PagoTransferenciaPayload<ExtArgs>
        fields: Prisma.PagoTransferenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoTransferenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoTransferenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          findFirst: {
            args: Prisma.PagoTransferenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoTransferenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          findMany: {
            args: Prisma.PagoTransferenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>[]
          }
          create: {
            args: Prisma.PagoTransferenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          createMany: {
            args: Prisma.PagoTransferenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoTransferenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>[]
          }
          delete: {
            args: Prisma.PagoTransferenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          update: {
            args: Prisma.PagoTransferenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          deleteMany: {
            args: Prisma.PagoTransferenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoTransferenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoTransferenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoTransferenciaPayload>
          }
          aggregate: {
            args: Prisma.PagoTransferenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoTransferencia>
          }
          groupBy: {
            args: Prisma.PagoTransferenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoTransferenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoTransferenciaCountArgs<ExtArgs>
            result: $Utils.Optional<PagoTransferenciaCountAggregateOutputType> | number
          }
        }
      }
      Aprobacion: {
        payload: Prisma.$AprobacionPayload<ExtArgs>
        fields: Prisma.AprobacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AprobacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AprobacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          findFirst: {
            args: Prisma.AprobacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AprobacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          findMany: {
            args: Prisma.AprobacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>[]
          }
          create: {
            args: Prisma.AprobacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          createMany: {
            args: Prisma.AprobacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AprobacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>[]
          }
          delete: {
            args: Prisma.AprobacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          update: {
            args: Prisma.AprobacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          deleteMany: {
            args: Prisma.AprobacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AprobacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AprobacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AprobacionPayload>
          }
          aggregate: {
            args: Prisma.AprobacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAprobacion>
          }
          groupBy: {
            args: Prisma.AprobacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AprobacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AprobacionCountArgs<ExtArgs>
            result: $Utils.Optional<AprobacionCountAggregateOutputType> | number
          }
        }
      }
      PagoEfectivo: {
        payload: Prisma.$PagoEfectivoPayload<ExtArgs>
        fields: Prisma.PagoEfectivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoEfectivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoEfectivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          findFirst: {
            args: Prisma.PagoEfectivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoEfectivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          findMany: {
            args: Prisma.PagoEfectivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>[]
          }
          create: {
            args: Prisma.PagoEfectivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          createMany: {
            args: Prisma.PagoEfectivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoEfectivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>[]
          }
          delete: {
            args: Prisma.PagoEfectivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          update: {
            args: Prisma.PagoEfectivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          deleteMany: {
            args: Prisma.PagoEfectivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoEfectivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoEfectivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoEfectivoPayload>
          }
          aggregate: {
            args: Prisma.PagoEfectivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagoEfectivo>
          }
          groupBy: {
            args: Prisma.PagoEfectivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoEfectivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoEfectivoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoEfectivoCountAggregateOutputType> | number
          }
        }
      }
      Escaneo: {
        payload: Prisma.$EscaneoPayload<ExtArgs>
        fields: Prisma.EscaneoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscaneoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscaneoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          findFirst: {
            args: Prisma.EscaneoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscaneoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          findMany: {
            args: Prisma.EscaneoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>[]
          }
          create: {
            args: Prisma.EscaneoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          createMany: {
            args: Prisma.EscaneoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscaneoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>[]
          }
          delete: {
            args: Prisma.EscaneoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          update: {
            args: Prisma.EscaneoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          deleteMany: {
            args: Prisma.EscaneoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscaneoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EscaneoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscaneoPayload>
          }
          aggregate: {
            args: Prisma.EscaneoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscaneo>
          }
          groupBy: {
            args: Prisma.EscaneoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscaneoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscaneoCountArgs<ExtArgs>
            result: $Utils.Optional<EscaneoCountAggregateOutputType> | number
          }
        }
      }
      BoletoParada: {
        payload: Prisma.$BoletoParadaPayload<ExtArgs>
        fields: Prisma.BoletoParadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoletoParadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoletoParadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          findFirst: {
            args: Prisma.BoletoParadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoletoParadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          findMany: {
            args: Prisma.BoletoParadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>[]
          }
          create: {
            args: Prisma.BoletoParadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          createMany: {
            args: Prisma.BoletoParadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoletoParadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>[]
          }
          delete: {
            args: Prisma.BoletoParadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          update: {
            args: Prisma.BoletoParadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          deleteMany: {
            args: Prisma.BoletoParadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoletoParadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoletoParadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoParadaPayload>
          }
          aggregate: {
            args: Prisma.BoletoParadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoletoParada>
          }
          groupBy: {
            args: Prisma.BoletoParadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoletoParadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoletoParadaCountArgs<ExtArgs>
            result: $Utils.Optional<BoletoParadaCountAggregateOutputType> | number
          }
        }
      }
      AlertaGps: {
        payload: Prisma.$AlertaGpsPayload<ExtArgs>
        fields: Prisma.AlertaGpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaGpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaGpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          findFirst: {
            args: Prisma.AlertaGpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaGpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          findMany: {
            args: Prisma.AlertaGpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>[]
          }
          create: {
            args: Prisma.AlertaGpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          createMany: {
            args: Prisma.AlertaGpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertaGpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>[]
          }
          delete: {
            args: Prisma.AlertaGpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          update: {
            args: Prisma.AlertaGpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          deleteMany: {
            args: Prisma.AlertaGpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaGpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertaGpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaGpsPayload>
          }
          aggregate: {
            args: Prisma.AlertaGpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertaGps>
          }
          groupBy: {
            args: Prisma.AlertaGpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaGpsCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaGpsCountAggregateOutputType> | number
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
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    boletos: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | CompraCountOutputTypeCountBoletosArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }


  /**
   * Count Type BoletoParadaCountOutputType
   */

  export type BoletoParadaCountOutputType = {
    alertasGps: number
  }

  export type BoletoParadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alertasGps?: boolean | BoletoParadaCountOutputTypeCountAlertasGpsArgs
  }

  // Custom InputTypes
  /**
   * BoletoParadaCountOutputType without action
   */
  export type BoletoParadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParadaCountOutputType
     */
    select?: BoletoParadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoletoParadaCountOutputType without action
   */
  export type BoletoParadaCountOutputTypeCountAlertasGpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaGpsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    frecuenciaId: number | null
    cantidad: number | null
    total: Decimal | null
  }

  export type CompraSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    frecuenciaId: number | null
    cantidad: number | null
    total: Decimal | null
  }

  export type CompraMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    frecuenciaId: number | null
    fechaViaje: Date | null
    cantidad: number | null
    total: Decimal | null
    canal: $Enums.CanalVenta | null
    estado: $Enums.EstadoCompra | null
    creadoEn: Date | null
  }

  export type CompraMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    frecuenciaId: number | null
    fechaViaje: Date | null
    cantidad: number | null
    total: Decimal | null
    canal: $Enums.CanalVenta | null
    estado: $Enums.EstadoCompra | null
    creadoEn: Date | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: number
    cantidad: number
    total: number
    canal: number
    estado: number
    creadoEn: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    frecuenciaId?: true
    cantidad?: true
    total?: true
  }

  export type CompraSumAggregateInputType = {
    id?: true
    usuarioId?: true
    frecuenciaId?: true
    cantidad?: true
    total?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    usuarioId?: true
    frecuenciaId?: true
    fechaViaje?: true
    cantidad?: true
    total?: true
    canal?: true
    estado?: true
    creadoEn?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    frecuenciaId?: true
    fechaViaje?: true
    cantidad?: true
    total?: true
    canal?: true
    estado?: true
    creadoEn?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    usuarioId?: true
    frecuenciaId?: true
    fechaViaje?: true
    cantidad?: true
    total?: true
    canal?: true
    estado?: true
    creadoEn?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date
    cantidad: number
    total: Decimal
    canal: $Enums.CanalVenta
    estado: $Enums.EstadoCompra
    creadoEn: Date
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    frecuenciaId?: boolean
    fechaViaje?: boolean
    cantidad?: boolean
    total?: boolean
    canal?: boolean
    estado?: boolean
    creadoEn?: boolean
    boletos?: boolean | Compra$boletosArgs<ExtArgs>
    pago?: boolean | Compra$pagoArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    frecuenciaId?: boolean
    fechaViaje?: boolean
    cantidad?: boolean
    total?: boolean
    canal?: boolean
    estado?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    frecuenciaId?: boolean
    fechaViaje?: boolean
    cantidad?: boolean
    total?: boolean
    canal?: boolean
    estado?: boolean
    creadoEn?: boolean
  }

  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | Compra$boletosArgs<ExtArgs>
    pago?: boolean | Compra$pagoArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
      pago: Prisma.$PagoPasajeroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      frecuenciaId: number
      fechaViaje: Date
      cantidad: number
      total: Prisma.Decimal
      canal: $Enums.CanalVenta
      estado: $Enums.EstadoCompra
      creadoEn: Date
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compras and returns the data saved in the database.
     * @param {CompraCreateManyAndReturnArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compras and only return the `id`
     * const compraWithIdOnly = await prisma.compra.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompraCreateManyAndReturnArgs>(args?: SelectSubset<T, CompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
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
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends Compra$boletosArgs<ExtArgs> = {}>(args?: Subset<T, Compra$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany"> | Null>
    pago<T extends Compra$pagoArgs<ExtArgs> = {}>(args?: Subset<T, Compra$pagoArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Compra model
   */ 
  interface CompraFieldRefs {
    readonly id: FieldRef<"Compra", 'Int'>
    readonly usuarioId: FieldRef<"Compra", 'Int'>
    readonly frecuenciaId: FieldRef<"Compra", 'Int'>
    readonly fechaViaje: FieldRef<"Compra", 'DateTime'>
    readonly cantidad: FieldRef<"Compra", 'Int'>
    readonly total: FieldRef<"Compra", 'Decimal'>
    readonly canal: FieldRef<"Compra", 'CanalVenta'>
    readonly estado: FieldRef<"Compra", 'EstadoCompra'>
    readonly creadoEn: FieldRef<"Compra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra createManyAndReturn
   */
  export type CompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
  }

  /**
   * Compra.boletos
   */
  export type Compra$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    cursor?: BoletoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Compra.pago
   */
  export type Compra$pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    where?: PagoPasajeroWhereInput
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model Boleto
   */

  export type AggregateBoleto = {
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  export type BoletoAvgAggregateOutputType = {
    id: number | null
    compraId: number | null
  }

  export type BoletoSumAggregateOutputType = {
    id: number | null
    compraId: number | null
  }

  export type BoletoMinAggregateOutputType = {
    id: number | null
    compraId: number | null
    uuidQr: string | null
    cedulaPasajero: string | null
    nombrePasajero: string | null
    tipoTarifa: $Enums.TipoTarifa | null
    estado: $Enums.EstadoBoleto | null
    expiraEn: Date | null
    creadoEn: Date | null
  }

  export type BoletoMaxAggregateOutputType = {
    id: number | null
    compraId: number | null
    uuidQr: string | null
    cedulaPasajero: string | null
    nombrePasajero: string | null
    tipoTarifa: $Enums.TipoTarifa | null
    estado: $Enums.EstadoBoleto | null
    expiraEn: Date | null
    creadoEn: Date | null
  }

  export type BoletoCountAggregateOutputType = {
    id: number
    compraId: number
    uuidQr: number
    cedulaPasajero: number
    nombrePasajero: number
    tipoTarifa: number
    estado: number
    expiraEn: number
    creadoEn: number
    _all: number
  }


  export type BoletoAvgAggregateInputType = {
    id?: true
    compraId?: true
  }

  export type BoletoSumAggregateInputType = {
    id?: true
    compraId?: true
  }

  export type BoletoMinAggregateInputType = {
    id?: true
    compraId?: true
    uuidQr?: true
    cedulaPasajero?: true
    nombrePasajero?: true
    tipoTarifa?: true
    estado?: true
    expiraEn?: true
    creadoEn?: true
  }

  export type BoletoMaxAggregateInputType = {
    id?: true
    compraId?: true
    uuidQr?: true
    cedulaPasajero?: true
    nombrePasajero?: true
    tipoTarifa?: true
    estado?: true
    expiraEn?: true
    creadoEn?: true
  }

  export type BoletoCountAggregateInputType = {
    id?: true
    compraId?: true
    uuidQr?: true
    cedulaPasajero?: true
    nombrePasajero?: true
    tipoTarifa?: true
    estado?: true
    expiraEn?: true
    creadoEn?: true
    _all?: true
  }

  export type BoletoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boleto to aggregate.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boletos
    **/
    _count?: true | BoletoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoletoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoletoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoletoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoletoMaxAggregateInputType
  }

  export type GetBoletoAggregateType<T extends BoletoAggregateArgs> = {
        [P in keyof T & keyof AggregateBoleto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoleto[P]>
      : GetScalarType<T[P], AggregateBoleto[P]>
  }




  export type BoletoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithAggregationInput | BoletoOrderByWithAggregationInput[]
    by: BoletoScalarFieldEnum[] | BoletoScalarFieldEnum
    having?: BoletoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoletoCountAggregateInputType | true
    _avg?: BoletoAvgAggregateInputType
    _sum?: BoletoSumAggregateInputType
    _min?: BoletoMinAggregateInputType
    _max?: BoletoMaxAggregateInputType
  }

  export type BoletoGroupByOutputType = {
    id: number
    compraId: number
    uuidQr: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa: $Enums.TipoTarifa
    estado: $Enums.EstadoBoleto
    expiraEn: Date
    creadoEn: Date
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  type GetBoletoGroupByPayload<T extends BoletoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoletoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoletoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoletoGroupByOutputType[P]>
            : GetScalarType<T[P], BoletoGroupByOutputType[P]>
        }
      >
    >


  export type BoletoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    uuidQr?: boolean
    cedulaPasajero?: boolean
    nombrePasajero?: boolean
    tipoTarifa?: boolean
    estado?: boolean
    expiraEn?: boolean
    creadoEn?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    escaneo?: boolean | Boleto$escaneoArgs<ExtArgs>
    boletoParada?: boolean | Boleto$boletoParadaArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    uuidQr?: boolean
    cedulaPasajero?: boolean
    nombrePasajero?: boolean
    tipoTarifa?: boolean
    estado?: boolean
    expiraEn?: boolean
    creadoEn?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectScalar = {
    id?: boolean
    compraId?: boolean
    uuidQr?: boolean
    cedulaPasajero?: boolean
    nombrePasajero?: boolean
    tipoTarifa?: boolean
    estado?: boolean
    expiraEn?: boolean
    creadoEn?: boolean
  }

  export type BoletoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    escaneo?: boolean | Boleto$escaneoArgs<ExtArgs>
    boletoParada?: boolean | Boleto$boletoParadaArgs<ExtArgs>
  }
  export type BoletoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }

  export type $BoletoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boleto"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
      escaneo: Prisma.$EscaneoPayload<ExtArgs> | null
      boletoParada: Prisma.$BoletoParadaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      compraId: number
      uuidQr: string
      cedulaPasajero: string
      nombrePasajero: string
      tipoTarifa: $Enums.TipoTarifa
      estado: $Enums.EstadoBoleto
      expiraEn: Date
      creadoEn: Date
    }, ExtArgs["result"]["boleto"]>
    composites: {}
  }

  type BoletoGetPayload<S extends boolean | null | undefined | BoletoDefaultArgs> = $Result.GetResult<Prisma.$BoletoPayload, S>

  type BoletoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoletoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoletoCountAggregateInputType | true
    }

  export interface BoletoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boleto'], meta: { name: 'Boleto' } }
    /**
     * Find zero or one Boleto that matches the filter.
     * @param {BoletoFindUniqueArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoletoFindUniqueArgs>(args: SelectSubset<T, BoletoFindUniqueArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Boleto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoletoFindUniqueOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoletoFindUniqueOrThrowArgs>(args: SelectSubset<T, BoletoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Boleto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoletoFindFirstArgs>(args?: SelectSubset<T, BoletoFindFirstArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Boleto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoletoFindFirstOrThrowArgs>(args?: SelectSubset<T, BoletoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boletos
     * const boletos = await prisma.boleto.findMany()
     * 
     * // Get first 10 Boletos
     * const boletos = await prisma.boleto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boletoWithIdOnly = await prisma.boleto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoletoFindManyArgs>(args?: SelectSubset<T, BoletoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Boleto.
     * @param {BoletoCreateArgs} args - Arguments to create a Boleto.
     * @example
     * // Create one Boleto
     * const Boleto = await prisma.boleto.create({
     *   data: {
     *     // ... data to create a Boleto
     *   }
     * })
     * 
     */
    create<T extends BoletoCreateArgs>(args: SelectSubset<T, BoletoCreateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Boletos.
     * @param {BoletoCreateManyArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoletoCreateManyArgs>(args?: SelectSubset<T, BoletoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boletos and returns the data saved in the database.
     * @param {BoletoCreateManyAndReturnArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boletos and only return the `id`
     * const boletoWithIdOnly = await prisma.boleto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoletoCreateManyAndReturnArgs>(args?: SelectSubset<T, BoletoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Boleto.
     * @param {BoletoDeleteArgs} args - Arguments to delete one Boleto.
     * @example
     * // Delete one Boleto
     * const Boleto = await prisma.boleto.delete({
     *   where: {
     *     // ... filter to delete one Boleto
     *   }
     * })
     * 
     */
    delete<T extends BoletoDeleteArgs>(args: SelectSubset<T, BoletoDeleteArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Boleto.
     * @param {BoletoUpdateArgs} args - Arguments to update one Boleto.
     * @example
     * // Update one Boleto
     * const boleto = await prisma.boleto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoletoUpdateArgs>(args: SelectSubset<T, BoletoUpdateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Boletos.
     * @param {BoletoDeleteManyArgs} args - Arguments to filter Boletos to delete.
     * @example
     * // Delete a few Boletos
     * const { count } = await prisma.boleto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoletoDeleteManyArgs>(args?: SelectSubset<T, BoletoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoletoUpdateManyArgs>(args: SelectSubset<T, BoletoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boleto.
     * @param {BoletoUpsertArgs} args - Arguments to update or create a Boleto.
     * @example
     * // Update or create a Boleto
     * const boleto = await prisma.boleto.upsert({
     *   create: {
     *     // ... data to create a Boleto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boleto we want to update
     *   }
     * })
     */
    upsert<T extends BoletoUpsertArgs>(args: SelectSubset<T, BoletoUpsertArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoCountArgs} args - Arguments to filter Boletos to count.
     * @example
     * // Count the number of Boletos
     * const count = await prisma.boleto.count({
     *   where: {
     *     // ... the filter for the Boletos we want to count
     *   }
     * })
    **/
    count<T extends BoletoCountArgs>(
      args?: Subset<T, BoletoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoletoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoletoAggregateArgs>(args: Subset<T, BoletoAggregateArgs>): Prisma.PrismaPromise<GetBoletoAggregateType<T>>

    /**
     * Group by Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoGroupByArgs} args - Group by arguments.
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
      T extends BoletoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoletoGroupByArgs['orderBy'] }
        : { orderBy?: BoletoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoletoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoletoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boleto model
   */
  readonly fields: BoletoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boleto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoletoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    escaneo<T extends Boleto$escaneoArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$escaneoArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    boletoParada<T extends Boleto$boletoParadaArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$boletoParadaArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Boleto model
   */ 
  interface BoletoFieldRefs {
    readonly id: FieldRef<"Boleto", 'Int'>
    readonly compraId: FieldRef<"Boleto", 'Int'>
    readonly uuidQr: FieldRef<"Boleto", 'String'>
    readonly cedulaPasajero: FieldRef<"Boleto", 'String'>
    readonly nombrePasajero: FieldRef<"Boleto", 'String'>
    readonly tipoTarifa: FieldRef<"Boleto", 'TipoTarifa'>
    readonly estado: FieldRef<"Boleto", 'EstadoBoleto'>
    readonly expiraEn: FieldRef<"Boleto", 'DateTime'>
    readonly creadoEn: FieldRef<"Boleto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Boleto findUnique
   */
  export type BoletoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findUniqueOrThrow
   */
  export type BoletoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findFirst
   */
  export type BoletoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findFirstOrThrow
   */
  export type BoletoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findMany
   */
  export type BoletoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boletos to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto create
   */
  export type BoletoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to create a Boleto.
     */
    data: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
  }

  /**
   * Boleto createMany
   */
  export type BoletoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boleto createManyAndReturn
   */
  export type BoletoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boleto update
   */
  export type BoletoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to update a Boleto.
     */
    data: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
    /**
     * Choose, which Boleto to update.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto updateMany
   */
  export type BoletoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boletos.
     */
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyInput>
    /**
     * Filter which Boletos to update
     */
    where?: BoletoWhereInput
  }

  /**
   * Boleto upsert
   */
  export type BoletoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The filter to search for the Boleto to update in case it exists.
     */
    where: BoletoWhereUniqueInput
    /**
     * In case the Boleto found by the `where` argument doesn't exist, create a new Boleto with this data.
     */
    create: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
    /**
     * In case the Boleto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
  }

  /**
   * Boleto delete
   */
  export type BoletoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter which Boleto to delete.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto deleteMany
   */
  export type BoletoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boletos to delete
     */
    where?: BoletoWhereInput
  }

  /**
   * Boleto.escaneo
   */
  export type Boleto$escaneoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    where?: EscaneoWhereInput
  }

  /**
   * Boleto.boletoParada
   */
  export type Boleto$boletoParadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    where?: BoletoParadaWhereInput
  }

  /**
   * Boleto without action
   */
  export type BoletoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
  }


  /**
   * Model PagoPasajero
   */

  export type AggregatePagoPasajero = {
    _count: PagoPasajeroCountAggregateOutputType | null
    _avg: PagoPasajeroAvgAggregateOutputType | null
    _sum: PagoPasajeroSumAggregateOutputType | null
    _min: PagoPasajeroMinAggregateOutputType | null
    _max: PagoPasajeroMaxAggregateOutputType | null
  }

  export type PagoPasajeroAvgAggregateOutputType = {
    id: number | null
    compraId: number | null
    monto: Decimal | null
  }

  export type PagoPasajeroSumAggregateOutputType = {
    id: number | null
    compraId: number | null
    monto: Decimal | null
  }

  export type PagoPasajeroMinAggregateOutputType = {
    id: number | null
    compraId: number | null
    monto: Decimal | null
    metodo: $Enums.MetodoPago | null
    estado: $Enums.EstadoPago | null
    pagadoEn: Date | null
  }

  export type PagoPasajeroMaxAggregateOutputType = {
    id: number | null
    compraId: number | null
    monto: Decimal | null
    metodo: $Enums.MetodoPago | null
    estado: $Enums.EstadoPago | null
    pagadoEn: Date | null
  }

  export type PagoPasajeroCountAggregateOutputType = {
    id: number
    compraId: number
    monto: number
    metodo: number
    estado: number
    pagadoEn: number
    _all: number
  }


  export type PagoPasajeroAvgAggregateInputType = {
    id?: true
    compraId?: true
    monto?: true
  }

  export type PagoPasajeroSumAggregateInputType = {
    id?: true
    compraId?: true
    monto?: true
  }

  export type PagoPasajeroMinAggregateInputType = {
    id?: true
    compraId?: true
    monto?: true
    metodo?: true
    estado?: true
    pagadoEn?: true
  }

  export type PagoPasajeroMaxAggregateInputType = {
    id?: true
    compraId?: true
    monto?: true
    metodo?: true
    estado?: true
    pagadoEn?: true
  }

  export type PagoPasajeroCountAggregateInputType = {
    id?: true
    compraId?: true
    monto?: true
    metodo?: true
    estado?: true
    pagadoEn?: true
    _all?: true
  }

  export type PagoPasajeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoPasajero to aggregate.
     */
    where?: PagoPasajeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoPasajeros to fetch.
     */
    orderBy?: PagoPasajeroOrderByWithRelationInput | PagoPasajeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoPasajeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoPasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoPasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoPasajeros
    **/
    _count?: true | PagoPasajeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoPasajeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoPasajeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoPasajeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoPasajeroMaxAggregateInputType
  }

  export type GetPagoPasajeroAggregateType<T extends PagoPasajeroAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoPasajero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoPasajero[P]>
      : GetScalarType<T[P], AggregatePagoPasajero[P]>
  }




  export type PagoPasajeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoPasajeroWhereInput
    orderBy?: PagoPasajeroOrderByWithAggregationInput | PagoPasajeroOrderByWithAggregationInput[]
    by: PagoPasajeroScalarFieldEnum[] | PagoPasajeroScalarFieldEnum
    having?: PagoPasajeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoPasajeroCountAggregateInputType | true
    _avg?: PagoPasajeroAvgAggregateInputType
    _sum?: PagoPasajeroSumAggregateInputType
    _min?: PagoPasajeroMinAggregateInputType
    _max?: PagoPasajeroMaxAggregateInputType
  }

  export type PagoPasajeroGroupByOutputType = {
    id: number
    compraId: number
    monto: Decimal
    metodo: $Enums.MetodoPago
    estado: $Enums.EstadoPago
    pagadoEn: Date | null
    _count: PagoPasajeroCountAggregateOutputType | null
    _avg: PagoPasajeroAvgAggregateOutputType | null
    _sum: PagoPasajeroSumAggregateOutputType | null
    _min: PagoPasajeroMinAggregateOutputType | null
    _max: PagoPasajeroMaxAggregateOutputType | null
  }

  type GetPagoPasajeroGroupByPayload<T extends PagoPasajeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoPasajeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoPasajeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoPasajeroGroupByOutputType[P]>
            : GetScalarType<T[P], PagoPasajeroGroupByOutputType[P]>
        }
      >
    >


  export type PagoPasajeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    pagadoEn?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    pagoTarjeta?: boolean | PagoPasajero$pagoTarjetaArgs<ExtArgs>
    pagoTransferencia?: boolean | PagoPasajero$pagoTransferenciaArgs<ExtArgs>
    pagoEfectivo?: boolean | PagoPasajero$pagoEfectivoArgs<ExtArgs>
  }, ExtArgs["result"]["pagoPasajero"]>

  export type PagoPasajeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compraId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    pagadoEn?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoPasajero"]>

  export type PagoPasajeroSelectScalar = {
    id?: boolean
    compraId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    pagadoEn?: boolean
  }

  export type PagoPasajeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    pagoTarjeta?: boolean | PagoPasajero$pagoTarjetaArgs<ExtArgs>
    pagoTransferencia?: boolean | PagoPasajero$pagoTransferenciaArgs<ExtArgs>
    pagoEfectivo?: boolean | PagoPasajero$pagoEfectivoArgs<ExtArgs>
  }
  export type PagoPasajeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }

  export type $PagoPasajeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoPasajero"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
      pagoTarjeta: Prisma.$PagoTarjetaPayload<ExtArgs> | null
      pagoTransferencia: Prisma.$PagoTransferenciaPayload<ExtArgs> | null
      pagoEfectivo: Prisma.$PagoEfectivoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      compraId: number
      monto: Prisma.Decimal
      metodo: $Enums.MetodoPago
      estado: $Enums.EstadoPago
      pagadoEn: Date | null
    }, ExtArgs["result"]["pagoPasajero"]>
    composites: {}
  }

  type PagoPasajeroGetPayload<S extends boolean | null | undefined | PagoPasajeroDefaultArgs> = $Result.GetResult<Prisma.$PagoPasajeroPayload, S>

  type PagoPasajeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoPasajeroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoPasajeroCountAggregateInputType | true
    }

  export interface PagoPasajeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoPasajero'], meta: { name: 'PagoPasajero' } }
    /**
     * Find zero or one PagoPasajero that matches the filter.
     * @param {PagoPasajeroFindUniqueArgs} args - Arguments to find a PagoPasajero
     * @example
     * // Get one PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoPasajeroFindUniqueArgs>(args: SelectSubset<T, PagoPasajeroFindUniqueArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PagoPasajero that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagoPasajeroFindUniqueOrThrowArgs} args - Arguments to find a PagoPasajero
     * @example
     * // Get one PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoPasajeroFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoPasajeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PagoPasajero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroFindFirstArgs} args - Arguments to find a PagoPasajero
     * @example
     * // Get one PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoPasajeroFindFirstArgs>(args?: SelectSubset<T, PagoPasajeroFindFirstArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PagoPasajero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroFindFirstOrThrowArgs} args - Arguments to find a PagoPasajero
     * @example
     * // Get one PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoPasajeroFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoPasajeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PagoPasajeros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoPasajeros
     * const pagoPasajeros = await prisma.pagoPasajero.findMany()
     * 
     * // Get first 10 PagoPasajeros
     * const pagoPasajeros = await prisma.pagoPasajero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoPasajeroWithIdOnly = await prisma.pagoPasajero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoPasajeroFindManyArgs>(args?: SelectSubset<T, PagoPasajeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PagoPasajero.
     * @param {PagoPasajeroCreateArgs} args - Arguments to create a PagoPasajero.
     * @example
     * // Create one PagoPasajero
     * const PagoPasajero = await prisma.pagoPasajero.create({
     *   data: {
     *     // ... data to create a PagoPasajero
     *   }
     * })
     * 
     */
    create<T extends PagoPasajeroCreateArgs>(args: SelectSubset<T, PagoPasajeroCreateArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PagoPasajeros.
     * @param {PagoPasajeroCreateManyArgs} args - Arguments to create many PagoPasajeros.
     * @example
     * // Create many PagoPasajeros
     * const pagoPasajero = await prisma.pagoPasajero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoPasajeroCreateManyArgs>(args?: SelectSubset<T, PagoPasajeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagoPasajeros and returns the data saved in the database.
     * @param {PagoPasajeroCreateManyAndReturnArgs} args - Arguments to create many PagoPasajeros.
     * @example
     * // Create many PagoPasajeros
     * const pagoPasajero = await prisma.pagoPasajero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagoPasajeros and only return the `id`
     * const pagoPasajeroWithIdOnly = await prisma.pagoPasajero.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoPasajeroCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoPasajeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PagoPasajero.
     * @param {PagoPasajeroDeleteArgs} args - Arguments to delete one PagoPasajero.
     * @example
     * // Delete one PagoPasajero
     * const PagoPasajero = await prisma.pagoPasajero.delete({
     *   where: {
     *     // ... filter to delete one PagoPasajero
     *   }
     * })
     * 
     */
    delete<T extends PagoPasajeroDeleteArgs>(args: SelectSubset<T, PagoPasajeroDeleteArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PagoPasajero.
     * @param {PagoPasajeroUpdateArgs} args - Arguments to update one PagoPasajero.
     * @example
     * // Update one PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoPasajeroUpdateArgs>(args: SelectSubset<T, PagoPasajeroUpdateArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PagoPasajeros.
     * @param {PagoPasajeroDeleteManyArgs} args - Arguments to filter PagoPasajeros to delete.
     * @example
     * // Delete a few PagoPasajeros
     * const { count } = await prisma.pagoPasajero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoPasajeroDeleteManyArgs>(args?: SelectSubset<T, PagoPasajeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoPasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoPasajeros
     * const pagoPasajero = await prisma.pagoPasajero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoPasajeroUpdateManyArgs>(args: SelectSubset<T, PagoPasajeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PagoPasajero.
     * @param {PagoPasajeroUpsertArgs} args - Arguments to update or create a PagoPasajero.
     * @example
     * // Update or create a PagoPasajero
     * const pagoPasajero = await prisma.pagoPasajero.upsert({
     *   create: {
     *     // ... data to create a PagoPasajero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoPasajero we want to update
     *   }
     * })
     */
    upsert<T extends PagoPasajeroUpsertArgs>(args: SelectSubset<T, PagoPasajeroUpsertArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PagoPasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroCountArgs} args - Arguments to filter PagoPasajeros to count.
     * @example
     * // Count the number of PagoPasajeros
     * const count = await prisma.pagoPasajero.count({
     *   where: {
     *     // ... the filter for the PagoPasajeros we want to count
     *   }
     * })
    **/
    count<T extends PagoPasajeroCountArgs>(
      args?: Subset<T, PagoPasajeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoPasajeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoPasajero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoPasajeroAggregateArgs>(args: Subset<T, PagoPasajeroAggregateArgs>): Prisma.PrismaPromise<GetPagoPasajeroAggregateType<T>>

    /**
     * Group by PagoPasajero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoPasajeroGroupByArgs} args - Group by arguments.
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
      T extends PagoPasajeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoPasajeroGroupByArgs['orderBy'] }
        : { orderBy?: PagoPasajeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoPasajeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoPasajeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoPasajero model
   */
  readonly fields: PagoPasajeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoPasajero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoPasajeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pagoTarjeta<T extends PagoPasajero$pagoTarjetaArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajero$pagoTarjetaArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    pagoTransferencia<T extends PagoPasajero$pagoTransferenciaArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajero$pagoTransferenciaArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    pagoEfectivo<T extends PagoPasajero$pagoEfectivoArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajero$pagoEfectivoArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PagoPasajero model
   */ 
  interface PagoPasajeroFieldRefs {
    readonly id: FieldRef<"PagoPasajero", 'Int'>
    readonly compraId: FieldRef<"PagoPasajero", 'Int'>
    readonly monto: FieldRef<"PagoPasajero", 'Decimal'>
    readonly metodo: FieldRef<"PagoPasajero", 'MetodoPago'>
    readonly estado: FieldRef<"PagoPasajero", 'EstadoPago'>
    readonly pagadoEn: FieldRef<"PagoPasajero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PagoPasajero findUnique
   */
  export type PagoPasajeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter, which PagoPasajero to fetch.
     */
    where: PagoPasajeroWhereUniqueInput
  }

  /**
   * PagoPasajero findUniqueOrThrow
   */
  export type PagoPasajeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter, which PagoPasajero to fetch.
     */
    where: PagoPasajeroWhereUniqueInput
  }

  /**
   * PagoPasajero findFirst
   */
  export type PagoPasajeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter, which PagoPasajero to fetch.
     */
    where?: PagoPasajeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoPasajeros to fetch.
     */
    orderBy?: PagoPasajeroOrderByWithRelationInput | PagoPasajeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoPasajeros.
     */
    cursor?: PagoPasajeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoPasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoPasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoPasajeros.
     */
    distinct?: PagoPasajeroScalarFieldEnum | PagoPasajeroScalarFieldEnum[]
  }

  /**
   * PagoPasajero findFirstOrThrow
   */
  export type PagoPasajeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter, which PagoPasajero to fetch.
     */
    where?: PagoPasajeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoPasajeros to fetch.
     */
    orderBy?: PagoPasajeroOrderByWithRelationInput | PagoPasajeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoPasajeros.
     */
    cursor?: PagoPasajeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoPasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoPasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoPasajeros.
     */
    distinct?: PagoPasajeroScalarFieldEnum | PagoPasajeroScalarFieldEnum[]
  }

  /**
   * PagoPasajero findMany
   */
  export type PagoPasajeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter, which PagoPasajeros to fetch.
     */
    where?: PagoPasajeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoPasajeros to fetch.
     */
    orderBy?: PagoPasajeroOrderByWithRelationInput | PagoPasajeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoPasajeros.
     */
    cursor?: PagoPasajeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoPasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoPasajeros.
     */
    skip?: number
    distinct?: PagoPasajeroScalarFieldEnum | PagoPasajeroScalarFieldEnum[]
  }

  /**
   * PagoPasajero create
   */
  export type PagoPasajeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoPasajero.
     */
    data: XOR<PagoPasajeroCreateInput, PagoPasajeroUncheckedCreateInput>
  }

  /**
   * PagoPasajero createMany
   */
  export type PagoPasajeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoPasajeros.
     */
    data: PagoPasajeroCreateManyInput | PagoPasajeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoPasajero createManyAndReturn
   */
  export type PagoPasajeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PagoPasajeros.
     */
    data: PagoPasajeroCreateManyInput | PagoPasajeroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoPasajero update
   */
  export type PagoPasajeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoPasajero.
     */
    data: XOR<PagoPasajeroUpdateInput, PagoPasajeroUncheckedUpdateInput>
    /**
     * Choose, which PagoPasajero to update.
     */
    where: PagoPasajeroWhereUniqueInput
  }

  /**
   * PagoPasajero updateMany
   */
  export type PagoPasajeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoPasajeros.
     */
    data: XOR<PagoPasajeroUpdateManyMutationInput, PagoPasajeroUncheckedUpdateManyInput>
    /**
     * Filter which PagoPasajeros to update
     */
    where?: PagoPasajeroWhereInput
  }

  /**
   * PagoPasajero upsert
   */
  export type PagoPasajeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoPasajero to update in case it exists.
     */
    where: PagoPasajeroWhereUniqueInput
    /**
     * In case the PagoPasajero found by the `where` argument doesn't exist, create a new PagoPasajero with this data.
     */
    create: XOR<PagoPasajeroCreateInput, PagoPasajeroUncheckedCreateInput>
    /**
     * In case the PagoPasajero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoPasajeroUpdateInput, PagoPasajeroUncheckedUpdateInput>
  }

  /**
   * PagoPasajero delete
   */
  export type PagoPasajeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
    /**
     * Filter which PagoPasajero to delete.
     */
    where: PagoPasajeroWhereUniqueInput
  }

  /**
   * PagoPasajero deleteMany
   */
  export type PagoPasajeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoPasajeros to delete
     */
    where?: PagoPasajeroWhereInput
  }

  /**
   * PagoPasajero.pagoTarjeta
   */
  export type PagoPasajero$pagoTarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    where?: PagoTarjetaWhereInput
  }

  /**
   * PagoPasajero.pagoTransferencia
   */
  export type PagoPasajero$pagoTransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    where?: PagoTransferenciaWhereInput
  }

  /**
   * PagoPasajero.pagoEfectivo
   */
  export type PagoPasajero$pagoEfectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    where?: PagoEfectivoWhereInput
  }

  /**
   * PagoPasajero without action
   */
  export type PagoPasajeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoPasajero
     */
    select?: PagoPasajeroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoPasajeroInclude<ExtArgs> | null
  }


  /**
   * Model PagoTarjeta
   */

  export type AggregatePagoTarjeta = {
    _count: PagoTarjetaCountAggregateOutputType | null
    _avg: PagoTarjetaAvgAggregateOutputType | null
    _sum: PagoTarjetaSumAggregateOutputType | null
    _min: PagoTarjetaMinAggregateOutputType | null
    _max: PagoTarjetaMaxAggregateOutputType | null
  }

  export type PagoTarjetaAvgAggregateOutputType = {
    id: number | null
    pagoId: number | null
  }

  export type PagoTarjetaSumAggregateOutputType = {
    id: number | null
    pagoId: number | null
  }

  export type PagoTarjetaMinAggregateOutputType = {
    id: number | null
    pagoId: number | null
    ultimos4: string | null
    marca: string | null
    referenciaPasarela: string | null
  }

  export type PagoTarjetaMaxAggregateOutputType = {
    id: number | null
    pagoId: number | null
    ultimos4: string | null
    marca: string | null
    referenciaPasarela: string | null
  }

  export type PagoTarjetaCountAggregateOutputType = {
    id: number
    pagoId: number
    ultimos4: number
    marca: number
    referenciaPasarela: number
    _all: number
  }


  export type PagoTarjetaAvgAggregateInputType = {
    id?: true
    pagoId?: true
  }

  export type PagoTarjetaSumAggregateInputType = {
    id?: true
    pagoId?: true
  }

  export type PagoTarjetaMinAggregateInputType = {
    id?: true
    pagoId?: true
    ultimos4?: true
    marca?: true
    referenciaPasarela?: true
  }

  export type PagoTarjetaMaxAggregateInputType = {
    id?: true
    pagoId?: true
    ultimos4?: true
    marca?: true
    referenciaPasarela?: true
  }

  export type PagoTarjetaCountAggregateInputType = {
    id?: true
    pagoId?: true
    ultimos4?: true
    marca?: true
    referenciaPasarela?: true
    _all?: true
  }

  export type PagoTarjetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoTarjeta to aggregate.
     */
    where?: PagoTarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTarjetas to fetch.
     */
    orderBy?: PagoTarjetaOrderByWithRelationInput | PagoTarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoTarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoTarjetas
    **/
    _count?: true | PagoTarjetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoTarjetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoTarjetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoTarjetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoTarjetaMaxAggregateInputType
  }

  export type GetPagoTarjetaAggregateType<T extends PagoTarjetaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoTarjeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoTarjeta[P]>
      : GetScalarType<T[P], AggregatePagoTarjeta[P]>
  }




  export type PagoTarjetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoTarjetaWhereInput
    orderBy?: PagoTarjetaOrderByWithAggregationInput | PagoTarjetaOrderByWithAggregationInput[]
    by: PagoTarjetaScalarFieldEnum[] | PagoTarjetaScalarFieldEnum
    having?: PagoTarjetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoTarjetaCountAggregateInputType | true
    _avg?: PagoTarjetaAvgAggregateInputType
    _sum?: PagoTarjetaSumAggregateInputType
    _min?: PagoTarjetaMinAggregateInputType
    _max?: PagoTarjetaMaxAggregateInputType
  }

  export type PagoTarjetaGroupByOutputType = {
    id: number
    pagoId: number
    ultimos4: string
    marca: string
    referenciaPasarela: string
    _count: PagoTarjetaCountAggregateOutputType | null
    _avg: PagoTarjetaAvgAggregateOutputType | null
    _sum: PagoTarjetaSumAggregateOutputType | null
    _min: PagoTarjetaMinAggregateOutputType | null
    _max: PagoTarjetaMaxAggregateOutputType | null
  }

  type GetPagoTarjetaGroupByPayload<T extends PagoTarjetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoTarjetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoTarjetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoTarjetaGroupByOutputType[P]>
            : GetScalarType<T[P], PagoTarjetaGroupByOutputType[P]>
        }
      >
    >


  export type PagoTarjetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    ultimos4?: boolean
    marca?: boolean
    referenciaPasarela?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoTarjeta"]>

  export type PagoTarjetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    ultimos4?: boolean
    marca?: boolean
    referenciaPasarela?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoTarjeta"]>

  export type PagoTarjetaSelectScalar = {
    id?: boolean
    pagoId?: boolean
    ultimos4?: boolean
    marca?: boolean
    referenciaPasarela?: boolean
  }

  export type PagoTarjetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }
  export type PagoTarjetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }

  export type $PagoTarjetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoTarjeta"
    objects: {
      pago: Prisma.$PagoPasajeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pagoId: number
      ultimos4: string
      marca: string
      referenciaPasarela: string
    }, ExtArgs["result"]["pagoTarjeta"]>
    composites: {}
  }

  type PagoTarjetaGetPayload<S extends boolean | null | undefined | PagoTarjetaDefaultArgs> = $Result.GetResult<Prisma.$PagoTarjetaPayload, S>

  type PagoTarjetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoTarjetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoTarjetaCountAggregateInputType | true
    }

  export interface PagoTarjetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoTarjeta'], meta: { name: 'PagoTarjeta' } }
    /**
     * Find zero or one PagoTarjeta that matches the filter.
     * @param {PagoTarjetaFindUniqueArgs} args - Arguments to find a PagoTarjeta
     * @example
     * // Get one PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoTarjetaFindUniqueArgs>(args: SelectSubset<T, PagoTarjetaFindUniqueArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PagoTarjeta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagoTarjetaFindUniqueOrThrowArgs} args - Arguments to find a PagoTarjeta
     * @example
     * // Get one PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoTarjetaFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoTarjetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PagoTarjeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaFindFirstArgs} args - Arguments to find a PagoTarjeta
     * @example
     * // Get one PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoTarjetaFindFirstArgs>(args?: SelectSubset<T, PagoTarjetaFindFirstArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PagoTarjeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaFindFirstOrThrowArgs} args - Arguments to find a PagoTarjeta
     * @example
     * // Get one PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoTarjetaFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoTarjetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PagoTarjetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoTarjetas
     * const pagoTarjetas = await prisma.pagoTarjeta.findMany()
     * 
     * // Get first 10 PagoTarjetas
     * const pagoTarjetas = await prisma.pagoTarjeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoTarjetaWithIdOnly = await prisma.pagoTarjeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoTarjetaFindManyArgs>(args?: SelectSubset<T, PagoTarjetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PagoTarjeta.
     * @param {PagoTarjetaCreateArgs} args - Arguments to create a PagoTarjeta.
     * @example
     * // Create one PagoTarjeta
     * const PagoTarjeta = await prisma.pagoTarjeta.create({
     *   data: {
     *     // ... data to create a PagoTarjeta
     *   }
     * })
     * 
     */
    create<T extends PagoTarjetaCreateArgs>(args: SelectSubset<T, PagoTarjetaCreateArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PagoTarjetas.
     * @param {PagoTarjetaCreateManyArgs} args - Arguments to create many PagoTarjetas.
     * @example
     * // Create many PagoTarjetas
     * const pagoTarjeta = await prisma.pagoTarjeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoTarjetaCreateManyArgs>(args?: SelectSubset<T, PagoTarjetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagoTarjetas and returns the data saved in the database.
     * @param {PagoTarjetaCreateManyAndReturnArgs} args - Arguments to create many PagoTarjetas.
     * @example
     * // Create many PagoTarjetas
     * const pagoTarjeta = await prisma.pagoTarjeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagoTarjetas and only return the `id`
     * const pagoTarjetaWithIdOnly = await prisma.pagoTarjeta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoTarjetaCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoTarjetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PagoTarjeta.
     * @param {PagoTarjetaDeleteArgs} args - Arguments to delete one PagoTarjeta.
     * @example
     * // Delete one PagoTarjeta
     * const PagoTarjeta = await prisma.pagoTarjeta.delete({
     *   where: {
     *     // ... filter to delete one PagoTarjeta
     *   }
     * })
     * 
     */
    delete<T extends PagoTarjetaDeleteArgs>(args: SelectSubset<T, PagoTarjetaDeleteArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PagoTarjeta.
     * @param {PagoTarjetaUpdateArgs} args - Arguments to update one PagoTarjeta.
     * @example
     * // Update one PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoTarjetaUpdateArgs>(args: SelectSubset<T, PagoTarjetaUpdateArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PagoTarjetas.
     * @param {PagoTarjetaDeleteManyArgs} args - Arguments to filter PagoTarjetas to delete.
     * @example
     * // Delete a few PagoTarjetas
     * const { count } = await prisma.pagoTarjeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoTarjetaDeleteManyArgs>(args?: SelectSubset<T, PagoTarjetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoTarjetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoTarjetas
     * const pagoTarjeta = await prisma.pagoTarjeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoTarjetaUpdateManyArgs>(args: SelectSubset<T, PagoTarjetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PagoTarjeta.
     * @param {PagoTarjetaUpsertArgs} args - Arguments to update or create a PagoTarjeta.
     * @example
     * // Update or create a PagoTarjeta
     * const pagoTarjeta = await prisma.pagoTarjeta.upsert({
     *   create: {
     *     // ... data to create a PagoTarjeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoTarjeta we want to update
     *   }
     * })
     */
    upsert<T extends PagoTarjetaUpsertArgs>(args: SelectSubset<T, PagoTarjetaUpsertArgs<ExtArgs>>): Prisma__PagoTarjetaClient<$Result.GetResult<Prisma.$PagoTarjetaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PagoTarjetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaCountArgs} args - Arguments to filter PagoTarjetas to count.
     * @example
     * // Count the number of PagoTarjetas
     * const count = await prisma.pagoTarjeta.count({
     *   where: {
     *     // ... the filter for the PagoTarjetas we want to count
     *   }
     * })
    **/
    count<T extends PagoTarjetaCountArgs>(
      args?: Subset<T, PagoTarjetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoTarjetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoTarjeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoTarjetaAggregateArgs>(args: Subset<T, PagoTarjetaAggregateArgs>): Prisma.PrismaPromise<GetPagoTarjetaAggregateType<T>>

    /**
     * Group by PagoTarjeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTarjetaGroupByArgs} args - Group by arguments.
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
      T extends PagoTarjetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoTarjetaGroupByArgs['orderBy'] }
        : { orderBy?: PagoTarjetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoTarjetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoTarjetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoTarjeta model
   */
  readonly fields: PagoTarjetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoTarjeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoTarjetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pago<T extends PagoPasajeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajeroDefaultArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PagoTarjeta model
   */ 
  interface PagoTarjetaFieldRefs {
    readonly id: FieldRef<"PagoTarjeta", 'Int'>
    readonly pagoId: FieldRef<"PagoTarjeta", 'Int'>
    readonly ultimos4: FieldRef<"PagoTarjeta", 'String'>
    readonly marca: FieldRef<"PagoTarjeta", 'String'>
    readonly referenciaPasarela: FieldRef<"PagoTarjeta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PagoTarjeta findUnique
   */
  export type PagoTarjetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTarjeta to fetch.
     */
    where: PagoTarjetaWhereUniqueInput
  }

  /**
   * PagoTarjeta findUniqueOrThrow
   */
  export type PagoTarjetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTarjeta to fetch.
     */
    where: PagoTarjetaWhereUniqueInput
  }

  /**
   * PagoTarjeta findFirst
   */
  export type PagoTarjetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTarjeta to fetch.
     */
    where?: PagoTarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTarjetas to fetch.
     */
    orderBy?: PagoTarjetaOrderByWithRelationInput | PagoTarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoTarjetas.
     */
    cursor?: PagoTarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoTarjetas.
     */
    distinct?: PagoTarjetaScalarFieldEnum | PagoTarjetaScalarFieldEnum[]
  }

  /**
   * PagoTarjeta findFirstOrThrow
   */
  export type PagoTarjetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTarjeta to fetch.
     */
    where?: PagoTarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTarjetas to fetch.
     */
    orderBy?: PagoTarjetaOrderByWithRelationInput | PagoTarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoTarjetas.
     */
    cursor?: PagoTarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTarjetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoTarjetas.
     */
    distinct?: PagoTarjetaScalarFieldEnum | PagoTarjetaScalarFieldEnum[]
  }

  /**
   * PagoTarjeta findMany
   */
  export type PagoTarjetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTarjetas to fetch.
     */
    where?: PagoTarjetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTarjetas to fetch.
     */
    orderBy?: PagoTarjetaOrderByWithRelationInput | PagoTarjetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoTarjetas.
     */
    cursor?: PagoTarjetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTarjetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTarjetas.
     */
    skip?: number
    distinct?: PagoTarjetaScalarFieldEnum | PagoTarjetaScalarFieldEnum[]
  }

  /**
   * PagoTarjeta create
   */
  export type PagoTarjetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoTarjeta.
     */
    data: XOR<PagoTarjetaCreateInput, PagoTarjetaUncheckedCreateInput>
  }

  /**
   * PagoTarjeta createMany
   */
  export type PagoTarjetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoTarjetas.
     */
    data: PagoTarjetaCreateManyInput | PagoTarjetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoTarjeta createManyAndReturn
   */
  export type PagoTarjetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PagoTarjetas.
     */
    data: PagoTarjetaCreateManyInput | PagoTarjetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoTarjeta update
   */
  export type PagoTarjetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoTarjeta.
     */
    data: XOR<PagoTarjetaUpdateInput, PagoTarjetaUncheckedUpdateInput>
    /**
     * Choose, which PagoTarjeta to update.
     */
    where: PagoTarjetaWhereUniqueInput
  }

  /**
   * PagoTarjeta updateMany
   */
  export type PagoTarjetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoTarjetas.
     */
    data: XOR<PagoTarjetaUpdateManyMutationInput, PagoTarjetaUncheckedUpdateManyInput>
    /**
     * Filter which PagoTarjetas to update
     */
    where?: PagoTarjetaWhereInput
  }

  /**
   * PagoTarjeta upsert
   */
  export type PagoTarjetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoTarjeta to update in case it exists.
     */
    where: PagoTarjetaWhereUniqueInput
    /**
     * In case the PagoTarjeta found by the `where` argument doesn't exist, create a new PagoTarjeta with this data.
     */
    create: XOR<PagoTarjetaCreateInput, PagoTarjetaUncheckedCreateInput>
    /**
     * In case the PagoTarjeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoTarjetaUpdateInput, PagoTarjetaUncheckedUpdateInput>
  }

  /**
   * PagoTarjeta delete
   */
  export type PagoTarjetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
    /**
     * Filter which PagoTarjeta to delete.
     */
    where: PagoTarjetaWhereUniqueInput
  }

  /**
   * PagoTarjeta deleteMany
   */
  export type PagoTarjetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoTarjetas to delete
     */
    where?: PagoTarjetaWhereInput
  }

  /**
   * PagoTarjeta without action
   */
  export type PagoTarjetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTarjeta
     */
    select?: PagoTarjetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTarjetaInclude<ExtArgs> | null
  }


  /**
   * Model PagoTransferencia
   */

  export type AggregatePagoTransferencia = {
    _count: PagoTransferenciaCountAggregateOutputType | null
    _avg: PagoTransferenciaAvgAggregateOutputType | null
    _sum: PagoTransferenciaSumAggregateOutputType | null
    _min: PagoTransferenciaMinAggregateOutputType | null
    _max: PagoTransferenciaMaxAggregateOutputType | null
  }

  export type PagoTransferenciaAvgAggregateOutputType = {
    id: number | null
    pagoId: number | null
  }

  export type PagoTransferenciaSumAggregateOutputType = {
    id: number | null
    pagoId: number | null
  }

  export type PagoTransferenciaMinAggregateOutputType = {
    id: number | null
    pagoId: number | null
    banco: string | null
    referencia: string | null
    comprobanteUrl: string | null
    estado: $Enums.EstadoTransferencia | null
  }

  export type PagoTransferenciaMaxAggregateOutputType = {
    id: number | null
    pagoId: number | null
    banco: string | null
    referencia: string | null
    comprobanteUrl: string | null
    estado: $Enums.EstadoTransferencia | null
  }

  export type PagoTransferenciaCountAggregateOutputType = {
    id: number
    pagoId: number
    banco: number
    referencia: number
    comprobanteUrl: number
    estado: number
    _all: number
  }


  export type PagoTransferenciaAvgAggregateInputType = {
    id?: true
    pagoId?: true
  }

  export type PagoTransferenciaSumAggregateInputType = {
    id?: true
    pagoId?: true
  }

  export type PagoTransferenciaMinAggregateInputType = {
    id?: true
    pagoId?: true
    banco?: true
    referencia?: true
    comprobanteUrl?: true
    estado?: true
  }

  export type PagoTransferenciaMaxAggregateInputType = {
    id?: true
    pagoId?: true
    banco?: true
    referencia?: true
    comprobanteUrl?: true
    estado?: true
  }

  export type PagoTransferenciaCountAggregateInputType = {
    id?: true
    pagoId?: true
    banco?: true
    referencia?: true
    comprobanteUrl?: true
    estado?: true
    _all?: true
  }

  export type PagoTransferenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoTransferencia to aggregate.
     */
    where?: PagoTransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTransferencias to fetch.
     */
    orderBy?: PagoTransferenciaOrderByWithRelationInput | PagoTransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoTransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTransferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTransferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoTransferencias
    **/
    _count?: true | PagoTransferenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoTransferenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoTransferenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoTransferenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoTransferenciaMaxAggregateInputType
  }

  export type GetPagoTransferenciaAggregateType<T extends PagoTransferenciaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoTransferencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoTransferencia[P]>
      : GetScalarType<T[P], AggregatePagoTransferencia[P]>
  }




  export type PagoTransferenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoTransferenciaWhereInput
    orderBy?: PagoTransferenciaOrderByWithAggregationInput | PagoTransferenciaOrderByWithAggregationInput[]
    by: PagoTransferenciaScalarFieldEnum[] | PagoTransferenciaScalarFieldEnum
    having?: PagoTransferenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoTransferenciaCountAggregateInputType | true
    _avg?: PagoTransferenciaAvgAggregateInputType
    _sum?: PagoTransferenciaSumAggregateInputType
    _min?: PagoTransferenciaMinAggregateInputType
    _max?: PagoTransferenciaMaxAggregateInputType
  }

  export type PagoTransferenciaGroupByOutputType = {
    id: number
    pagoId: number
    banco: string
    referencia: string
    comprobanteUrl: string | null
    estado: $Enums.EstadoTransferencia
    _count: PagoTransferenciaCountAggregateOutputType | null
    _avg: PagoTransferenciaAvgAggregateOutputType | null
    _sum: PagoTransferenciaSumAggregateOutputType | null
    _min: PagoTransferenciaMinAggregateOutputType | null
    _max: PagoTransferenciaMaxAggregateOutputType | null
  }

  type GetPagoTransferenciaGroupByPayload<T extends PagoTransferenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoTransferenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoTransferenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoTransferenciaGroupByOutputType[P]>
            : GetScalarType<T[P], PagoTransferenciaGroupByOutputType[P]>
        }
      >
    >


  export type PagoTransferenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    banco?: boolean
    referencia?: boolean
    comprobanteUrl?: boolean
    estado?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
    aprobacion?: boolean | PagoTransferencia$aprobacionArgs<ExtArgs>
  }, ExtArgs["result"]["pagoTransferencia"]>

  export type PagoTransferenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    banco?: boolean
    referencia?: boolean
    comprobanteUrl?: boolean
    estado?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoTransferencia"]>

  export type PagoTransferenciaSelectScalar = {
    id?: boolean
    pagoId?: boolean
    banco?: boolean
    referencia?: boolean
    comprobanteUrl?: boolean
    estado?: boolean
  }

  export type PagoTransferenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
    aprobacion?: boolean | PagoTransferencia$aprobacionArgs<ExtArgs>
  }
  export type PagoTransferenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }

  export type $PagoTransferenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoTransferencia"
    objects: {
      pago: Prisma.$PagoPasajeroPayload<ExtArgs>
      aprobacion: Prisma.$AprobacionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pagoId: number
      banco: string
      referencia: string
      comprobanteUrl: string | null
      estado: $Enums.EstadoTransferencia
    }, ExtArgs["result"]["pagoTransferencia"]>
    composites: {}
  }

  type PagoTransferenciaGetPayload<S extends boolean | null | undefined | PagoTransferenciaDefaultArgs> = $Result.GetResult<Prisma.$PagoTransferenciaPayload, S>

  type PagoTransferenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoTransferenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoTransferenciaCountAggregateInputType | true
    }

  export interface PagoTransferenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoTransferencia'], meta: { name: 'PagoTransferencia' } }
    /**
     * Find zero or one PagoTransferencia that matches the filter.
     * @param {PagoTransferenciaFindUniqueArgs} args - Arguments to find a PagoTransferencia
     * @example
     * // Get one PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoTransferenciaFindUniqueArgs>(args: SelectSubset<T, PagoTransferenciaFindUniqueArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PagoTransferencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagoTransferenciaFindUniqueOrThrowArgs} args - Arguments to find a PagoTransferencia
     * @example
     * // Get one PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoTransferenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoTransferenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PagoTransferencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaFindFirstArgs} args - Arguments to find a PagoTransferencia
     * @example
     * // Get one PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoTransferenciaFindFirstArgs>(args?: SelectSubset<T, PagoTransferenciaFindFirstArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PagoTransferencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaFindFirstOrThrowArgs} args - Arguments to find a PagoTransferencia
     * @example
     * // Get one PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoTransferenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoTransferenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PagoTransferencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoTransferencias
     * const pagoTransferencias = await prisma.pagoTransferencia.findMany()
     * 
     * // Get first 10 PagoTransferencias
     * const pagoTransferencias = await prisma.pagoTransferencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoTransferenciaWithIdOnly = await prisma.pagoTransferencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoTransferenciaFindManyArgs>(args?: SelectSubset<T, PagoTransferenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PagoTransferencia.
     * @param {PagoTransferenciaCreateArgs} args - Arguments to create a PagoTransferencia.
     * @example
     * // Create one PagoTransferencia
     * const PagoTransferencia = await prisma.pagoTransferencia.create({
     *   data: {
     *     // ... data to create a PagoTransferencia
     *   }
     * })
     * 
     */
    create<T extends PagoTransferenciaCreateArgs>(args: SelectSubset<T, PagoTransferenciaCreateArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PagoTransferencias.
     * @param {PagoTransferenciaCreateManyArgs} args - Arguments to create many PagoTransferencias.
     * @example
     * // Create many PagoTransferencias
     * const pagoTransferencia = await prisma.pagoTransferencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoTransferenciaCreateManyArgs>(args?: SelectSubset<T, PagoTransferenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagoTransferencias and returns the data saved in the database.
     * @param {PagoTransferenciaCreateManyAndReturnArgs} args - Arguments to create many PagoTransferencias.
     * @example
     * // Create many PagoTransferencias
     * const pagoTransferencia = await prisma.pagoTransferencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagoTransferencias and only return the `id`
     * const pagoTransferenciaWithIdOnly = await prisma.pagoTransferencia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoTransferenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoTransferenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PagoTransferencia.
     * @param {PagoTransferenciaDeleteArgs} args - Arguments to delete one PagoTransferencia.
     * @example
     * // Delete one PagoTransferencia
     * const PagoTransferencia = await prisma.pagoTransferencia.delete({
     *   where: {
     *     // ... filter to delete one PagoTransferencia
     *   }
     * })
     * 
     */
    delete<T extends PagoTransferenciaDeleteArgs>(args: SelectSubset<T, PagoTransferenciaDeleteArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PagoTransferencia.
     * @param {PagoTransferenciaUpdateArgs} args - Arguments to update one PagoTransferencia.
     * @example
     * // Update one PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoTransferenciaUpdateArgs>(args: SelectSubset<T, PagoTransferenciaUpdateArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PagoTransferencias.
     * @param {PagoTransferenciaDeleteManyArgs} args - Arguments to filter PagoTransferencias to delete.
     * @example
     * // Delete a few PagoTransferencias
     * const { count } = await prisma.pagoTransferencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoTransferenciaDeleteManyArgs>(args?: SelectSubset<T, PagoTransferenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoTransferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoTransferencias
     * const pagoTransferencia = await prisma.pagoTransferencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoTransferenciaUpdateManyArgs>(args: SelectSubset<T, PagoTransferenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PagoTransferencia.
     * @param {PagoTransferenciaUpsertArgs} args - Arguments to update or create a PagoTransferencia.
     * @example
     * // Update or create a PagoTransferencia
     * const pagoTransferencia = await prisma.pagoTransferencia.upsert({
     *   create: {
     *     // ... data to create a PagoTransferencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoTransferencia we want to update
     *   }
     * })
     */
    upsert<T extends PagoTransferenciaUpsertArgs>(args: SelectSubset<T, PagoTransferenciaUpsertArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PagoTransferencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaCountArgs} args - Arguments to filter PagoTransferencias to count.
     * @example
     * // Count the number of PagoTransferencias
     * const count = await prisma.pagoTransferencia.count({
     *   where: {
     *     // ... the filter for the PagoTransferencias we want to count
     *   }
     * })
    **/
    count<T extends PagoTransferenciaCountArgs>(
      args?: Subset<T, PagoTransferenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoTransferenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoTransferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoTransferenciaAggregateArgs>(args: Subset<T, PagoTransferenciaAggregateArgs>): Prisma.PrismaPromise<GetPagoTransferenciaAggregateType<T>>

    /**
     * Group by PagoTransferencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoTransferenciaGroupByArgs} args - Group by arguments.
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
      T extends PagoTransferenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoTransferenciaGroupByArgs['orderBy'] }
        : { orderBy?: PagoTransferenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoTransferenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoTransferenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoTransferencia model
   */
  readonly fields: PagoTransferenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoTransferencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoTransferenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pago<T extends PagoPasajeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajeroDefaultArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aprobacion<T extends PagoTransferencia$aprobacionArgs<ExtArgs> = {}>(args?: Subset<T, PagoTransferencia$aprobacionArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PagoTransferencia model
   */ 
  interface PagoTransferenciaFieldRefs {
    readonly id: FieldRef<"PagoTransferencia", 'Int'>
    readonly pagoId: FieldRef<"PagoTransferencia", 'Int'>
    readonly banco: FieldRef<"PagoTransferencia", 'String'>
    readonly referencia: FieldRef<"PagoTransferencia", 'String'>
    readonly comprobanteUrl: FieldRef<"PagoTransferencia", 'String'>
    readonly estado: FieldRef<"PagoTransferencia", 'EstadoTransferencia'>
  }
    

  // Custom InputTypes
  /**
   * PagoTransferencia findUnique
   */
  export type PagoTransferenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTransferencia to fetch.
     */
    where: PagoTransferenciaWhereUniqueInput
  }

  /**
   * PagoTransferencia findUniqueOrThrow
   */
  export type PagoTransferenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTransferencia to fetch.
     */
    where: PagoTransferenciaWhereUniqueInput
  }

  /**
   * PagoTransferencia findFirst
   */
  export type PagoTransferenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTransferencia to fetch.
     */
    where?: PagoTransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTransferencias to fetch.
     */
    orderBy?: PagoTransferenciaOrderByWithRelationInput | PagoTransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoTransferencias.
     */
    cursor?: PagoTransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTransferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTransferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoTransferencias.
     */
    distinct?: PagoTransferenciaScalarFieldEnum | PagoTransferenciaScalarFieldEnum[]
  }

  /**
   * PagoTransferencia findFirstOrThrow
   */
  export type PagoTransferenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTransferencia to fetch.
     */
    where?: PagoTransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTransferencias to fetch.
     */
    orderBy?: PagoTransferenciaOrderByWithRelationInput | PagoTransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoTransferencias.
     */
    cursor?: PagoTransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTransferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTransferencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoTransferencias.
     */
    distinct?: PagoTransferenciaScalarFieldEnum | PagoTransferenciaScalarFieldEnum[]
  }

  /**
   * PagoTransferencia findMany
   */
  export type PagoTransferenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter, which PagoTransferencias to fetch.
     */
    where?: PagoTransferenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoTransferencias to fetch.
     */
    orderBy?: PagoTransferenciaOrderByWithRelationInput | PagoTransferenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoTransferencias.
     */
    cursor?: PagoTransferenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoTransferencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoTransferencias.
     */
    skip?: number
    distinct?: PagoTransferenciaScalarFieldEnum | PagoTransferenciaScalarFieldEnum[]
  }

  /**
   * PagoTransferencia create
   */
  export type PagoTransferenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoTransferencia.
     */
    data: XOR<PagoTransferenciaCreateInput, PagoTransferenciaUncheckedCreateInput>
  }

  /**
   * PagoTransferencia createMany
   */
  export type PagoTransferenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoTransferencias.
     */
    data: PagoTransferenciaCreateManyInput | PagoTransferenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoTransferencia createManyAndReturn
   */
  export type PagoTransferenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PagoTransferencias.
     */
    data: PagoTransferenciaCreateManyInput | PagoTransferenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoTransferencia update
   */
  export type PagoTransferenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoTransferencia.
     */
    data: XOR<PagoTransferenciaUpdateInput, PagoTransferenciaUncheckedUpdateInput>
    /**
     * Choose, which PagoTransferencia to update.
     */
    where: PagoTransferenciaWhereUniqueInput
  }

  /**
   * PagoTransferencia updateMany
   */
  export type PagoTransferenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoTransferencias.
     */
    data: XOR<PagoTransferenciaUpdateManyMutationInput, PagoTransferenciaUncheckedUpdateManyInput>
    /**
     * Filter which PagoTransferencias to update
     */
    where?: PagoTransferenciaWhereInput
  }

  /**
   * PagoTransferencia upsert
   */
  export type PagoTransferenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoTransferencia to update in case it exists.
     */
    where: PagoTransferenciaWhereUniqueInput
    /**
     * In case the PagoTransferencia found by the `where` argument doesn't exist, create a new PagoTransferencia with this data.
     */
    create: XOR<PagoTransferenciaCreateInput, PagoTransferenciaUncheckedCreateInput>
    /**
     * In case the PagoTransferencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoTransferenciaUpdateInput, PagoTransferenciaUncheckedUpdateInput>
  }

  /**
   * PagoTransferencia delete
   */
  export type PagoTransferenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
    /**
     * Filter which PagoTransferencia to delete.
     */
    where: PagoTransferenciaWhereUniqueInput
  }

  /**
   * PagoTransferencia deleteMany
   */
  export type PagoTransferenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoTransferencias to delete
     */
    where?: PagoTransferenciaWhereInput
  }

  /**
   * PagoTransferencia.aprobacion
   */
  export type PagoTransferencia$aprobacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    where?: AprobacionWhereInput
  }

  /**
   * PagoTransferencia without action
   */
  export type PagoTransferenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoTransferencia
     */
    select?: PagoTransferenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoTransferenciaInclude<ExtArgs> | null
  }


  /**
   * Model Aprobacion
   */

  export type AggregateAprobacion = {
    _count: AprobacionCountAggregateOutputType | null
    _avg: AprobacionAvgAggregateOutputType | null
    _sum: AprobacionSumAggregateOutputType | null
    _min: AprobacionMinAggregateOutputType | null
    _max: AprobacionMaxAggregateOutputType | null
  }

  export type AprobacionAvgAggregateOutputType = {
    id: number | null
    pagoTransferenciaId: number | null
    oficinistaId: number | null
  }

  export type AprobacionSumAggregateOutputType = {
    id: number | null
    pagoTransferenciaId: number | null
    oficinistaId: number | null
  }

  export type AprobacionMinAggregateOutputType = {
    id: number | null
    pagoTransferenciaId: number | null
    oficinistaId: number | null
    estado: $Enums.EstadoAprobacion | null
    observacion: string | null
    revisadoEn: Date | null
  }

  export type AprobacionMaxAggregateOutputType = {
    id: number | null
    pagoTransferenciaId: number | null
    oficinistaId: number | null
    estado: $Enums.EstadoAprobacion | null
    observacion: string | null
    revisadoEn: Date | null
  }

  export type AprobacionCountAggregateOutputType = {
    id: number
    pagoTransferenciaId: number
    oficinistaId: number
    estado: number
    observacion: number
    revisadoEn: number
    _all: number
  }


  export type AprobacionAvgAggregateInputType = {
    id?: true
    pagoTransferenciaId?: true
    oficinistaId?: true
  }

  export type AprobacionSumAggregateInputType = {
    id?: true
    pagoTransferenciaId?: true
    oficinistaId?: true
  }

  export type AprobacionMinAggregateInputType = {
    id?: true
    pagoTransferenciaId?: true
    oficinistaId?: true
    estado?: true
    observacion?: true
    revisadoEn?: true
  }

  export type AprobacionMaxAggregateInputType = {
    id?: true
    pagoTransferenciaId?: true
    oficinistaId?: true
    estado?: true
    observacion?: true
    revisadoEn?: true
  }

  export type AprobacionCountAggregateInputType = {
    id?: true
    pagoTransferenciaId?: true
    oficinistaId?: true
    estado?: true
    observacion?: true
    revisadoEn?: true
    _all?: true
  }

  export type AprobacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aprobacion to aggregate.
     */
    where?: AprobacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aprobacions to fetch.
     */
    orderBy?: AprobacionOrderByWithRelationInput | AprobacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AprobacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aprobacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aprobacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aprobacions
    **/
    _count?: true | AprobacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AprobacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AprobacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AprobacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AprobacionMaxAggregateInputType
  }

  export type GetAprobacionAggregateType<T extends AprobacionAggregateArgs> = {
        [P in keyof T & keyof AggregateAprobacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAprobacion[P]>
      : GetScalarType<T[P], AggregateAprobacion[P]>
  }




  export type AprobacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AprobacionWhereInput
    orderBy?: AprobacionOrderByWithAggregationInput | AprobacionOrderByWithAggregationInput[]
    by: AprobacionScalarFieldEnum[] | AprobacionScalarFieldEnum
    having?: AprobacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AprobacionCountAggregateInputType | true
    _avg?: AprobacionAvgAggregateInputType
    _sum?: AprobacionSumAggregateInputType
    _min?: AprobacionMinAggregateInputType
    _max?: AprobacionMaxAggregateInputType
  }

  export type AprobacionGroupByOutputType = {
    id: number
    pagoTransferenciaId: number
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion: string | null
    revisadoEn: Date
    _count: AprobacionCountAggregateOutputType | null
    _avg: AprobacionAvgAggregateOutputType | null
    _sum: AprobacionSumAggregateOutputType | null
    _min: AprobacionMinAggregateOutputType | null
    _max: AprobacionMaxAggregateOutputType | null
  }

  type GetAprobacionGroupByPayload<T extends AprobacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AprobacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AprobacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AprobacionGroupByOutputType[P]>
            : GetScalarType<T[P], AprobacionGroupByOutputType[P]>
        }
      >
    >


  export type AprobacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoTransferenciaId?: boolean
    oficinistaId?: boolean
    estado?: boolean
    observacion?: boolean
    revisadoEn?: boolean
    pagoTransferencia?: boolean | PagoTransferenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aprobacion"]>

  export type AprobacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoTransferenciaId?: boolean
    oficinistaId?: boolean
    estado?: boolean
    observacion?: boolean
    revisadoEn?: boolean
    pagoTransferencia?: boolean | PagoTransferenciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aprobacion"]>

  export type AprobacionSelectScalar = {
    id?: boolean
    pagoTransferenciaId?: boolean
    oficinistaId?: boolean
    estado?: boolean
    observacion?: boolean
    revisadoEn?: boolean
  }

  export type AprobacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagoTransferencia?: boolean | PagoTransferenciaDefaultArgs<ExtArgs>
  }
  export type AprobacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagoTransferencia?: boolean | PagoTransferenciaDefaultArgs<ExtArgs>
  }

  export type $AprobacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aprobacion"
    objects: {
      pagoTransferencia: Prisma.$PagoTransferenciaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pagoTransferenciaId: number
      oficinistaId: number
      estado: $Enums.EstadoAprobacion
      observacion: string | null
      revisadoEn: Date
    }, ExtArgs["result"]["aprobacion"]>
    composites: {}
  }

  type AprobacionGetPayload<S extends boolean | null | undefined | AprobacionDefaultArgs> = $Result.GetResult<Prisma.$AprobacionPayload, S>

  type AprobacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AprobacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AprobacionCountAggregateInputType | true
    }

  export interface AprobacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aprobacion'], meta: { name: 'Aprobacion' } }
    /**
     * Find zero or one Aprobacion that matches the filter.
     * @param {AprobacionFindUniqueArgs} args - Arguments to find a Aprobacion
     * @example
     * // Get one Aprobacion
     * const aprobacion = await prisma.aprobacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AprobacionFindUniqueArgs>(args: SelectSubset<T, AprobacionFindUniqueArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Aprobacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AprobacionFindUniqueOrThrowArgs} args - Arguments to find a Aprobacion
     * @example
     * // Get one Aprobacion
     * const aprobacion = await prisma.aprobacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AprobacionFindUniqueOrThrowArgs>(args: SelectSubset<T, AprobacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Aprobacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionFindFirstArgs} args - Arguments to find a Aprobacion
     * @example
     * // Get one Aprobacion
     * const aprobacion = await prisma.aprobacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AprobacionFindFirstArgs>(args?: SelectSubset<T, AprobacionFindFirstArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Aprobacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionFindFirstOrThrowArgs} args - Arguments to find a Aprobacion
     * @example
     * // Get one Aprobacion
     * const aprobacion = await prisma.aprobacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AprobacionFindFirstOrThrowArgs>(args?: SelectSubset<T, AprobacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Aprobacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aprobacions
     * const aprobacions = await prisma.aprobacion.findMany()
     * 
     * // Get first 10 Aprobacions
     * const aprobacions = await prisma.aprobacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aprobacionWithIdOnly = await prisma.aprobacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AprobacionFindManyArgs>(args?: SelectSubset<T, AprobacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Aprobacion.
     * @param {AprobacionCreateArgs} args - Arguments to create a Aprobacion.
     * @example
     * // Create one Aprobacion
     * const Aprobacion = await prisma.aprobacion.create({
     *   data: {
     *     // ... data to create a Aprobacion
     *   }
     * })
     * 
     */
    create<T extends AprobacionCreateArgs>(args: SelectSubset<T, AprobacionCreateArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Aprobacions.
     * @param {AprobacionCreateManyArgs} args - Arguments to create many Aprobacions.
     * @example
     * // Create many Aprobacions
     * const aprobacion = await prisma.aprobacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AprobacionCreateManyArgs>(args?: SelectSubset<T, AprobacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aprobacions and returns the data saved in the database.
     * @param {AprobacionCreateManyAndReturnArgs} args - Arguments to create many Aprobacions.
     * @example
     * // Create many Aprobacions
     * const aprobacion = await prisma.aprobacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aprobacions and only return the `id`
     * const aprobacionWithIdOnly = await prisma.aprobacion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AprobacionCreateManyAndReturnArgs>(args?: SelectSubset<T, AprobacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Aprobacion.
     * @param {AprobacionDeleteArgs} args - Arguments to delete one Aprobacion.
     * @example
     * // Delete one Aprobacion
     * const Aprobacion = await prisma.aprobacion.delete({
     *   where: {
     *     // ... filter to delete one Aprobacion
     *   }
     * })
     * 
     */
    delete<T extends AprobacionDeleteArgs>(args: SelectSubset<T, AprobacionDeleteArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Aprobacion.
     * @param {AprobacionUpdateArgs} args - Arguments to update one Aprobacion.
     * @example
     * // Update one Aprobacion
     * const aprobacion = await prisma.aprobacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AprobacionUpdateArgs>(args: SelectSubset<T, AprobacionUpdateArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Aprobacions.
     * @param {AprobacionDeleteManyArgs} args - Arguments to filter Aprobacions to delete.
     * @example
     * // Delete a few Aprobacions
     * const { count } = await prisma.aprobacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AprobacionDeleteManyArgs>(args?: SelectSubset<T, AprobacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aprobacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aprobacions
     * const aprobacion = await prisma.aprobacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AprobacionUpdateManyArgs>(args: SelectSubset<T, AprobacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aprobacion.
     * @param {AprobacionUpsertArgs} args - Arguments to update or create a Aprobacion.
     * @example
     * // Update or create a Aprobacion
     * const aprobacion = await prisma.aprobacion.upsert({
     *   create: {
     *     // ... data to create a Aprobacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aprobacion we want to update
     *   }
     * })
     */
    upsert<T extends AprobacionUpsertArgs>(args: SelectSubset<T, AprobacionUpsertArgs<ExtArgs>>): Prisma__AprobacionClient<$Result.GetResult<Prisma.$AprobacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Aprobacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionCountArgs} args - Arguments to filter Aprobacions to count.
     * @example
     * // Count the number of Aprobacions
     * const count = await prisma.aprobacion.count({
     *   where: {
     *     // ... the filter for the Aprobacions we want to count
     *   }
     * })
    **/
    count<T extends AprobacionCountArgs>(
      args?: Subset<T, AprobacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AprobacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aprobacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AprobacionAggregateArgs>(args: Subset<T, AprobacionAggregateArgs>): Prisma.PrismaPromise<GetAprobacionAggregateType<T>>

    /**
     * Group by Aprobacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AprobacionGroupByArgs} args - Group by arguments.
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
      T extends AprobacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AprobacionGroupByArgs['orderBy'] }
        : { orderBy?: AprobacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AprobacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAprobacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aprobacion model
   */
  readonly fields: AprobacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aprobacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AprobacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagoTransferencia<T extends PagoTransferenciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagoTransferenciaDefaultArgs<ExtArgs>>): Prisma__PagoTransferenciaClient<$Result.GetResult<Prisma.$PagoTransferenciaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Aprobacion model
   */ 
  interface AprobacionFieldRefs {
    readonly id: FieldRef<"Aprobacion", 'Int'>
    readonly pagoTransferenciaId: FieldRef<"Aprobacion", 'Int'>
    readonly oficinistaId: FieldRef<"Aprobacion", 'Int'>
    readonly estado: FieldRef<"Aprobacion", 'EstadoAprobacion'>
    readonly observacion: FieldRef<"Aprobacion", 'String'>
    readonly revisadoEn: FieldRef<"Aprobacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aprobacion findUnique
   */
  export type AprobacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter, which Aprobacion to fetch.
     */
    where: AprobacionWhereUniqueInput
  }

  /**
   * Aprobacion findUniqueOrThrow
   */
  export type AprobacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter, which Aprobacion to fetch.
     */
    where: AprobacionWhereUniqueInput
  }

  /**
   * Aprobacion findFirst
   */
  export type AprobacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter, which Aprobacion to fetch.
     */
    where?: AprobacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aprobacions to fetch.
     */
    orderBy?: AprobacionOrderByWithRelationInput | AprobacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aprobacions.
     */
    cursor?: AprobacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aprobacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aprobacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aprobacions.
     */
    distinct?: AprobacionScalarFieldEnum | AprobacionScalarFieldEnum[]
  }

  /**
   * Aprobacion findFirstOrThrow
   */
  export type AprobacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter, which Aprobacion to fetch.
     */
    where?: AprobacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aprobacions to fetch.
     */
    orderBy?: AprobacionOrderByWithRelationInput | AprobacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aprobacions.
     */
    cursor?: AprobacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aprobacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aprobacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aprobacions.
     */
    distinct?: AprobacionScalarFieldEnum | AprobacionScalarFieldEnum[]
  }

  /**
   * Aprobacion findMany
   */
  export type AprobacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter, which Aprobacions to fetch.
     */
    where?: AprobacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aprobacions to fetch.
     */
    orderBy?: AprobacionOrderByWithRelationInput | AprobacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aprobacions.
     */
    cursor?: AprobacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aprobacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aprobacions.
     */
    skip?: number
    distinct?: AprobacionScalarFieldEnum | AprobacionScalarFieldEnum[]
  }

  /**
   * Aprobacion create
   */
  export type AprobacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Aprobacion.
     */
    data: XOR<AprobacionCreateInput, AprobacionUncheckedCreateInput>
  }

  /**
   * Aprobacion createMany
   */
  export type AprobacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aprobacions.
     */
    data: AprobacionCreateManyInput | AprobacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aprobacion createManyAndReturn
   */
  export type AprobacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Aprobacions.
     */
    data: AprobacionCreateManyInput | AprobacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aprobacion update
   */
  export type AprobacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Aprobacion.
     */
    data: XOR<AprobacionUpdateInput, AprobacionUncheckedUpdateInput>
    /**
     * Choose, which Aprobacion to update.
     */
    where: AprobacionWhereUniqueInput
  }

  /**
   * Aprobacion updateMany
   */
  export type AprobacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aprobacions.
     */
    data: XOR<AprobacionUpdateManyMutationInput, AprobacionUncheckedUpdateManyInput>
    /**
     * Filter which Aprobacions to update
     */
    where?: AprobacionWhereInput
  }

  /**
   * Aprobacion upsert
   */
  export type AprobacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Aprobacion to update in case it exists.
     */
    where: AprobacionWhereUniqueInput
    /**
     * In case the Aprobacion found by the `where` argument doesn't exist, create a new Aprobacion with this data.
     */
    create: XOR<AprobacionCreateInput, AprobacionUncheckedCreateInput>
    /**
     * In case the Aprobacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AprobacionUpdateInput, AprobacionUncheckedUpdateInput>
  }

  /**
   * Aprobacion delete
   */
  export type AprobacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
    /**
     * Filter which Aprobacion to delete.
     */
    where: AprobacionWhereUniqueInput
  }

  /**
   * Aprobacion deleteMany
   */
  export type AprobacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aprobacions to delete
     */
    where?: AprobacionWhereInput
  }

  /**
   * Aprobacion without action
   */
  export type AprobacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aprobacion
     */
    select?: AprobacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AprobacionInclude<ExtArgs> | null
  }


  /**
   * Model PagoEfectivo
   */

  export type AggregatePagoEfectivo = {
    _count: PagoEfectivoCountAggregateOutputType | null
    _avg: PagoEfectivoAvgAggregateOutputType | null
    _sum: PagoEfectivoSumAggregateOutputType | null
    _min: PagoEfectivoMinAggregateOutputType | null
    _max: PagoEfectivoMaxAggregateOutputType | null
  }

  export type PagoEfectivoAvgAggregateOutputType = {
    id: number | null
    pagoId: number | null
    vendedorId: number | null
    montoRecibido: Decimal | null
    cambio: Decimal | null
    turnoId: number | null
  }

  export type PagoEfectivoSumAggregateOutputType = {
    id: number | null
    pagoId: number | null
    vendedorId: number | null
    montoRecibido: Decimal | null
    cambio: Decimal | null
    turnoId: number | null
  }

  export type PagoEfectivoMinAggregateOutputType = {
    id: number | null
    pagoId: number | null
    vendedorId: number | null
    montoRecibido: Decimal | null
    cambio: Decimal | null
    canalVenta: $Enums.CanalEfectivo | null
    turnoId: number | null
  }

  export type PagoEfectivoMaxAggregateOutputType = {
    id: number | null
    pagoId: number | null
    vendedorId: number | null
    montoRecibido: Decimal | null
    cambio: Decimal | null
    canalVenta: $Enums.CanalEfectivo | null
    turnoId: number | null
  }

  export type PagoEfectivoCountAggregateOutputType = {
    id: number
    pagoId: number
    vendedorId: number
    montoRecibido: number
    cambio: number
    canalVenta: number
    turnoId: number
    _all: number
  }


  export type PagoEfectivoAvgAggregateInputType = {
    id?: true
    pagoId?: true
    vendedorId?: true
    montoRecibido?: true
    cambio?: true
    turnoId?: true
  }

  export type PagoEfectivoSumAggregateInputType = {
    id?: true
    pagoId?: true
    vendedorId?: true
    montoRecibido?: true
    cambio?: true
    turnoId?: true
  }

  export type PagoEfectivoMinAggregateInputType = {
    id?: true
    pagoId?: true
    vendedorId?: true
    montoRecibido?: true
    cambio?: true
    canalVenta?: true
    turnoId?: true
  }

  export type PagoEfectivoMaxAggregateInputType = {
    id?: true
    pagoId?: true
    vendedorId?: true
    montoRecibido?: true
    cambio?: true
    canalVenta?: true
    turnoId?: true
  }

  export type PagoEfectivoCountAggregateInputType = {
    id?: true
    pagoId?: true
    vendedorId?: true
    montoRecibido?: true
    cambio?: true
    canalVenta?: true
    turnoId?: true
    _all?: true
  }

  export type PagoEfectivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoEfectivo to aggregate.
     */
    where?: PagoEfectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoEfectivos to fetch.
     */
    orderBy?: PagoEfectivoOrderByWithRelationInput | PagoEfectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoEfectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoEfectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoEfectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PagoEfectivos
    **/
    _count?: true | PagoEfectivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoEfectivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoEfectivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoEfectivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoEfectivoMaxAggregateInputType
  }

  export type GetPagoEfectivoAggregateType<T extends PagoEfectivoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagoEfectivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagoEfectivo[P]>
      : GetScalarType<T[P], AggregatePagoEfectivo[P]>
  }




  export type PagoEfectivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoEfectivoWhereInput
    orderBy?: PagoEfectivoOrderByWithAggregationInput | PagoEfectivoOrderByWithAggregationInput[]
    by: PagoEfectivoScalarFieldEnum[] | PagoEfectivoScalarFieldEnum
    having?: PagoEfectivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoEfectivoCountAggregateInputType | true
    _avg?: PagoEfectivoAvgAggregateInputType
    _sum?: PagoEfectivoSumAggregateInputType
    _min?: PagoEfectivoMinAggregateInputType
    _max?: PagoEfectivoMaxAggregateInputType
  }

  export type PagoEfectivoGroupByOutputType = {
    id: number
    pagoId: number
    vendedorId: number
    montoRecibido: Decimal
    cambio: Decimal
    canalVenta: $Enums.CanalEfectivo
    turnoId: number | null
    _count: PagoEfectivoCountAggregateOutputType | null
    _avg: PagoEfectivoAvgAggregateOutputType | null
    _sum: PagoEfectivoSumAggregateOutputType | null
    _min: PagoEfectivoMinAggregateOutputType | null
    _max: PagoEfectivoMaxAggregateOutputType | null
  }

  type GetPagoEfectivoGroupByPayload<T extends PagoEfectivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoEfectivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoEfectivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoEfectivoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoEfectivoGroupByOutputType[P]>
        }
      >
    >


  export type PagoEfectivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    vendedorId?: boolean
    montoRecibido?: boolean
    cambio?: boolean
    canalVenta?: boolean
    turnoId?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoEfectivo"]>

  export type PagoEfectivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagoId?: boolean
    vendedorId?: boolean
    montoRecibido?: boolean
    cambio?: boolean
    canalVenta?: boolean
    turnoId?: boolean
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagoEfectivo"]>

  export type PagoEfectivoSelectScalar = {
    id?: boolean
    pagoId?: boolean
    vendedorId?: boolean
    montoRecibido?: boolean
    cambio?: boolean
    canalVenta?: boolean
    turnoId?: boolean
  }

  export type PagoEfectivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }
  export type PagoEfectivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pago?: boolean | PagoPasajeroDefaultArgs<ExtArgs>
  }

  export type $PagoEfectivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PagoEfectivo"
    objects: {
      pago: Prisma.$PagoPasajeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pagoId: number
      vendedorId: number
      montoRecibido: Prisma.Decimal
      cambio: Prisma.Decimal
      canalVenta: $Enums.CanalEfectivo
      turnoId: number | null
    }, ExtArgs["result"]["pagoEfectivo"]>
    composites: {}
  }

  type PagoEfectivoGetPayload<S extends boolean | null | undefined | PagoEfectivoDefaultArgs> = $Result.GetResult<Prisma.$PagoEfectivoPayload, S>

  type PagoEfectivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoEfectivoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoEfectivoCountAggregateInputType | true
    }

  export interface PagoEfectivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PagoEfectivo'], meta: { name: 'PagoEfectivo' } }
    /**
     * Find zero or one PagoEfectivo that matches the filter.
     * @param {PagoEfectivoFindUniqueArgs} args - Arguments to find a PagoEfectivo
     * @example
     * // Get one PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoEfectivoFindUniqueArgs>(args: SelectSubset<T, PagoEfectivoFindUniqueArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PagoEfectivo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagoEfectivoFindUniqueOrThrowArgs} args - Arguments to find a PagoEfectivo
     * @example
     * // Get one PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoEfectivoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoEfectivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PagoEfectivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoFindFirstArgs} args - Arguments to find a PagoEfectivo
     * @example
     * // Get one PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoEfectivoFindFirstArgs>(args?: SelectSubset<T, PagoEfectivoFindFirstArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PagoEfectivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoFindFirstOrThrowArgs} args - Arguments to find a PagoEfectivo
     * @example
     * // Get one PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoEfectivoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoEfectivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PagoEfectivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PagoEfectivos
     * const pagoEfectivos = await prisma.pagoEfectivo.findMany()
     * 
     * // Get first 10 PagoEfectivos
     * const pagoEfectivos = await prisma.pagoEfectivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoEfectivoWithIdOnly = await prisma.pagoEfectivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoEfectivoFindManyArgs>(args?: SelectSubset<T, PagoEfectivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PagoEfectivo.
     * @param {PagoEfectivoCreateArgs} args - Arguments to create a PagoEfectivo.
     * @example
     * // Create one PagoEfectivo
     * const PagoEfectivo = await prisma.pagoEfectivo.create({
     *   data: {
     *     // ... data to create a PagoEfectivo
     *   }
     * })
     * 
     */
    create<T extends PagoEfectivoCreateArgs>(args: SelectSubset<T, PagoEfectivoCreateArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PagoEfectivos.
     * @param {PagoEfectivoCreateManyArgs} args - Arguments to create many PagoEfectivos.
     * @example
     * // Create many PagoEfectivos
     * const pagoEfectivo = await prisma.pagoEfectivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoEfectivoCreateManyArgs>(args?: SelectSubset<T, PagoEfectivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PagoEfectivos and returns the data saved in the database.
     * @param {PagoEfectivoCreateManyAndReturnArgs} args - Arguments to create many PagoEfectivos.
     * @example
     * // Create many PagoEfectivos
     * const pagoEfectivo = await prisma.pagoEfectivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PagoEfectivos and only return the `id`
     * const pagoEfectivoWithIdOnly = await prisma.pagoEfectivo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoEfectivoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoEfectivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PagoEfectivo.
     * @param {PagoEfectivoDeleteArgs} args - Arguments to delete one PagoEfectivo.
     * @example
     * // Delete one PagoEfectivo
     * const PagoEfectivo = await prisma.pagoEfectivo.delete({
     *   where: {
     *     // ... filter to delete one PagoEfectivo
     *   }
     * })
     * 
     */
    delete<T extends PagoEfectivoDeleteArgs>(args: SelectSubset<T, PagoEfectivoDeleteArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PagoEfectivo.
     * @param {PagoEfectivoUpdateArgs} args - Arguments to update one PagoEfectivo.
     * @example
     * // Update one PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoEfectivoUpdateArgs>(args: SelectSubset<T, PagoEfectivoUpdateArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PagoEfectivos.
     * @param {PagoEfectivoDeleteManyArgs} args - Arguments to filter PagoEfectivos to delete.
     * @example
     * // Delete a few PagoEfectivos
     * const { count } = await prisma.pagoEfectivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoEfectivoDeleteManyArgs>(args?: SelectSubset<T, PagoEfectivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PagoEfectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PagoEfectivos
     * const pagoEfectivo = await prisma.pagoEfectivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoEfectivoUpdateManyArgs>(args: SelectSubset<T, PagoEfectivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PagoEfectivo.
     * @param {PagoEfectivoUpsertArgs} args - Arguments to update or create a PagoEfectivo.
     * @example
     * // Update or create a PagoEfectivo
     * const pagoEfectivo = await prisma.pagoEfectivo.upsert({
     *   create: {
     *     // ... data to create a PagoEfectivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PagoEfectivo we want to update
     *   }
     * })
     */
    upsert<T extends PagoEfectivoUpsertArgs>(args: SelectSubset<T, PagoEfectivoUpsertArgs<ExtArgs>>): Prisma__PagoEfectivoClient<$Result.GetResult<Prisma.$PagoEfectivoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PagoEfectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoCountArgs} args - Arguments to filter PagoEfectivos to count.
     * @example
     * // Count the number of PagoEfectivos
     * const count = await prisma.pagoEfectivo.count({
     *   where: {
     *     // ... the filter for the PagoEfectivos we want to count
     *   }
     * })
    **/
    count<T extends PagoEfectivoCountArgs>(
      args?: Subset<T, PagoEfectivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoEfectivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PagoEfectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoEfectivoAggregateArgs>(args: Subset<T, PagoEfectivoAggregateArgs>): Prisma.PrismaPromise<GetPagoEfectivoAggregateType<T>>

    /**
     * Group by PagoEfectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoEfectivoGroupByArgs} args - Group by arguments.
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
      T extends PagoEfectivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoEfectivoGroupByArgs['orderBy'] }
        : { orderBy?: PagoEfectivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoEfectivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoEfectivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PagoEfectivo model
   */
  readonly fields: PagoEfectivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PagoEfectivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoEfectivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pago<T extends PagoPasajeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PagoPasajeroDefaultArgs<ExtArgs>>): Prisma__PagoPasajeroClient<$Result.GetResult<Prisma.$PagoPasajeroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PagoEfectivo model
   */ 
  interface PagoEfectivoFieldRefs {
    readonly id: FieldRef<"PagoEfectivo", 'Int'>
    readonly pagoId: FieldRef<"PagoEfectivo", 'Int'>
    readonly vendedorId: FieldRef<"PagoEfectivo", 'Int'>
    readonly montoRecibido: FieldRef<"PagoEfectivo", 'Decimal'>
    readonly cambio: FieldRef<"PagoEfectivo", 'Decimal'>
    readonly canalVenta: FieldRef<"PagoEfectivo", 'CanalEfectivo'>
    readonly turnoId: FieldRef<"PagoEfectivo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PagoEfectivo findUnique
   */
  export type PagoEfectivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter, which PagoEfectivo to fetch.
     */
    where: PagoEfectivoWhereUniqueInput
  }

  /**
   * PagoEfectivo findUniqueOrThrow
   */
  export type PagoEfectivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter, which PagoEfectivo to fetch.
     */
    where: PagoEfectivoWhereUniqueInput
  }

  /**
   * PagoEfectivo findFirst
   */
  export type PagoEfectivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter, which PagoEfectivo to fetch.
     */
    where?: PagoEfectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoEfectivos to fetch.
     */
    orderBy?: PagoEfectivoOrderByWithRelationInput | PagoEfectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoEfectivos.
     */
    cursor?: PagoEfectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoEfectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoEfectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoEfectivos.
     */
    distinct?: PagoEfectivoScalarFieldEnum | PagoEfectivoScalarFieldEnum[]
  }

  /**
   * PagoEfectivo findFirstOrThrow
   */
  export type PagoEfectivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter, which PagoEfectivo to fetch.
     */
    where?: PagoEfectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoEfectivos to fetch.
     */
    orderBy?: PagoEfectivoOrderByWithRelationInput | PagoEfectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PagoEfectivos.
     */
    cursor?: PagoEfectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoEfectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoEfectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PagoEfectivos.
     */
    distinct?: PagoEfectivoScalarFieldEnum | PagoEfectivoScalarFieldEnum[]
  }

  /**
   * PagoEfectivo findMany
   */
  export type PagoEfectivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter, which PagoEfectivos to fetch.
     */
    where?: PagoEfectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PagoEfectivos to fetch.
     */
    orderBy?: PagoEfectivoOrderByWithRelationInput | PagoEfectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PagoEfectivos.
     */
    cursor?: PagoEfectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PagoEfectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PagoEfectivos.
     */
    skip?: number
    distinct?: PagoEfectivoScalarFieldEnum | PagoEfectivoScalarFieldEnum[]
  }

  /**
   * PagoEfectivo create
   */
  export type PagoEfectivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * The data needed to create a PagoEfectivo.
     */
    data: XOR<PagoEfectivoCreateInput, PagoEfectivoUncheckedCreateInput>
  }

  /**
   * PagoEfectivo createMany
   */
  export type PagoEfectivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PagoEfectivos.
     */
    data: PagoEfectivoCreateManyInput | PagoEfectivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PagoEfectivo createManyAndReturn
   */
  export type PagoEfectivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PagoEfectivos.
     */
    data: PagoEfectivoCreateManyInput | PagoEfectivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PagoEfectivo update
   */
  export type PagoEfectivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * The data needed to update a PagoEfectivo.
     */
    data: XOR<PagoEfectivoUpdateInput, PagoEfectivoUncheckedUpdateInput>
    /**
     * Choose, which PagoEfectivo to update.
     */
    where: PagoEfectivoWhereUniqueInput
  }

  /**
   * PagoEfectivo updateMany
   */
  export type PagoEfectivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PagoEfectivos.
     */
    data: XOR<PagoEfectivoUpdateManyMutationInput, PagoEfectivoUncheckedUpdateManyInput>
    /**
     * Filter which PagoEfectivos to update
     */
    where?: PagoEfectivoWhereInput
  }

  /**
   * PagoEfectivo upsert
   */
  export type PagoEfectivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * The filter to search for the PagoEfectivo to update in case it exists.
     */
    where: PagoEfectivoWhereUniqueInput
    /**
     * In case the PagoEfectivo found by the `where` argument doesn't exist, create a new PagoEfectivo with this data.
     */
    create: XOR<PagoEfectivoCreateInput, PagoEfectivoUncheckedCreateInput>
    /**
     * In case the PagoEfectivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoEfectivoUpdateInput, PagoEfectivoUncheckedUpdateInput>
  }

  /**
   * PagoEfectivo delete
   */
  export type PagoEfectivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
    /**
     * Filter which PagoEfectivo to delete.
     */
    where: PagoEfectivoWhereUniqueInput
  }

  /**
   * PagoEfectivo deleteMany
   */
  export type PagoEfectivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PagoEfectivos to delete
     */
    where?: PagoEfectivoWhereInput
  }

  /**
   * PagoEfectivo without action
   */
  export type PagoEfectivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoEfectivo
     */
    select?: PagoEfectivoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoEfectivoInclude<ExtArgs> | null
  }


  /**
   * Model Escaneo
   */

  export type AggregateEscaneo = {
    _count: EscaneoCountAggregateOutputType | null
    _avg: EscaneoAvgAggregateOutputType | null
    _sum: EscaneoSumAggregateOutputType | null
    _min: EscaneoMinAggregateOutputType | null
    _max: EscaneoMaxAggregateOutputType | null
  }

  export type EscaneoAvgAggregateOutputType = {
    id: number | null
    boletoId: number | null
    oficialId: number | null
    busId: number | null
    turnoId: number | null
  }

  export type EscaneoSumAggregateOutputType = {
    id: number | null
    boletoId: number | null
    oficialId: number | null
    busId: number | null
    turnoId: number | null
  }

  export type EscaneoMinAggregateOutputType = {
    id: number | null
    boletoId: number | null
    oficialId: number | null
    busId: number | null
    turnoId: number | null
    resultado: $Enums.ResultadoEscaneo | null
    escaneadoEn: Date | null
  }

  export type EscaneoMaxAggregateOutputType = {
    id: number | null
    boletoId: number | null
    oficialId: number | null
    busId: number | null
    turnoId: number | null
    resultado: $Enums.ResultadoEscaneo | null
    escaneadoEn: Date | null
  }

  export type EscaneoCountAggregateOutputType = {
    id: number
    boletoId: number
    oficialId: number
    busId: number
    turnoId: number
    resultado: number
    escaneadoEn: number
    _all: number
  }


  export type EscaneoAvgAggregateInputType = {
    id?: true
    boletoId?: true
    oficialId?: true
    busId?: true
    turnoId?: true
  }

  export type EscaneoSumAggregateInputType = {
    id?: true
    boletoId?: true
    oficialId?: true
    busId?: true
    turnoId?: true
  }

  export type EscaneoMinAggregateInputType = {
    id?: true
    boletoId?: true
    oficialId?: true
    busId?: true
    turnoId?: true
    resultado?: true
    escaneadoEn?: true
  }

  export type EscaneoMaxAggregateInputType = {
    id?: true
    boletoId?: true
    oficialId?: true
    busId?: true
    turnoId?: true
    resultado?: true
    escaneadoEn?: true
  }

  export type EscaneoCountAggregateInputType = {
    id?: true
    boletoId?: true
    oficialId?: true
    busId?: true
    turnoId?: true
    resultado?: true
    escaneadoEn?: true
    _all?: true
  }

  export type EscaneoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escaneo to aggregate.
     */
    where?: EscaneoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escaneos to fetch.
     */
    orderBy?: EscaneoOrderByWithRelationInput | EscaneoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscaneoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escaneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escaneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escaneos
    **/
    _count?: true | EscaneoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscaneoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscaneoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscaneoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscaneoMaxAggregateInputType
  }

  export type GetEscaneoAggregateType<T extends EscaneoAggregateArgs> = {
        [P in keyof T & keyof AggregateEscaneo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscaneo[P]>
      : GetScalarType<T[P], AggregateEscaneo[P]>
  }




  export type EscaneoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscaneoWhereInput
    orderBy?: EscaneoOrderByWithAggregationInput | EscaneoOrderByWithAggregationInput[]
    by: EscaneoScalarFieldEnum[] | EscaneoScalarFieldEnum
    having?: EscaneoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscaneoCountAggregateInputType | true
    _avg?: EscaneoAvgAggregateInputType
    _sum?: EscaneoSumAggregateInputType
    _min?: EscaneoMinAggregateInputType
    _max?: EscaneoMaxAggregateInputType
  }

  export type EscaneoGroupByOutputType = {
    id: number
    boletoId: number
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn: Date
    _count: EscaneoCountAggregateOutputType | null
    _avg: EscaneoAvgAggregateOutputType | null
    _sum: EscaneoSumAggregateOutputType | null
    _min: EscaneoMinAggregateOutputType | null
    _max: EscaneoMaxAggregateOutputType | null
  }

  type GetEscaneoGroupByPayload<T extends EscaneoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscaneoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscaneoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscaneoGroupByOutputType[P]>
            : GetScalarType<T[P], EscaneoGroupByOutputType[P]>
        }
      >
    >


  export type EscaneoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoId?: boolean
    oficialId?: boolean
    busId?: boolean
    turnoId?: boolean
    resultado?: boolean
    escaneadoEn?: boolean
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escaneo"]>

  export type EscaneoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoId?: boolean
    oficialId?: boolean
    busId?: boolean
    turnoId?: boolean
    resultado?: boolean
    escaneadoEn?: boolean
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escaneo"]>

  export type EscaneoSelectScalar = {
    id?: boolean
    boletoId?: boolean
    oficialId?: boolean
    busId?: boolean
    turnoId?: boolean
    resultado?: boolean
    escaneadoEn?: boolean
  }

  export type EscaneoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }
  export type EscaneoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }

  export type $EscaneoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escaneo"
    objects: {
      boleto: Prisma.$BoletoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boletoId: number
      oficialId: number
      busId: number
      turnoId: number
      resultado: $Enums.ResultadoEscaneo
      escaneadoEn: Date
    }, ExtArgs["result"]["escaneo"]>
    composites: {}
  }

  type EscaneoGetPayload<S extends boolean | null | undefined | EscaneoDefaultArgs> = $Result.GetResult<Prisma.$EscaneoPayload, S>

  type EscaneoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EscaneoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EscaneoCountAggregateInputType | true
    }

  export interface EscaneoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escaneo'], meta: { name: 'Escaneo' } }
    /**
     * Find zero or one Escaneo that matches the filter.
     * @param {EscaneoFindUniqueArgs} args - Arguments to find a Escaneo
     * @example
     * // Get one Escaneo
     * const escaneo = await prisma.escaneo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscaneoFindUniqueArgs>(args: SelectSubset<T, EscaneoFindUniqueArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Escaneo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EscaneoFindUniqueOrThrowArgs} args - Arguments to find a Escaneo
     * @example
     * // Get one Escaneo
     * const escaneo = await prisma.escaneo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscaneoFindUniqueOrThrowArgs>(args: SelectSubset<T, EscaneoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Escaneo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoFindFirstArgs} args - Arguments to find a Escaneo
     * @example
     * // Get one Escaneo
     * const escaneo = await prisma.escaneo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscaneoFindFirstArgs>(args?: SelectSubset<T, EscaneoFindFirstArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Escaneo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoFindFirstOrThrowArgs} args - Arguments to find a Escaneo
     * @example
     * // Get one Escaneo
     * const escaneo = await prisma.escaneo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscaneoFindFirstOrThrowArgs>(args?: SelectSubset<T, EscaneoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Escaneos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escaneos
     * const escaneos = await prisma.escaneo.findMany()
     * 
     * // Get first 10 Escaneos
     * const escaneos = await prisma.escaneo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escaneoWithIdOnly = await prisma.escaneo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscaneoFindManyArgs>(args?: SelectSubset<T, EscaneoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Escaneo.
     * @param {EscaneoCreateArgs} args - Arguments to create a Escaneo.
     * @example
     * // Create one Escaneo
     * const Escaneo = await prisma.escaneo.create({
     *   data: {
     *     // ... data to create a Escaneo
     *   }
     * })
     * 
     */
    create<T extends EscaneoCreateArgs>(args: SelectSubset<T, EscaneoCreateArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Escaneos.
     * @param {EscaneoCreateManyArgs} args - Arguments to create many Escaneos.
     * @example
     * // Create many Escaneos
     * const escaneo = await prisma.escaneo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscaneoCreateManyArgs>(args?: SelectSubset<T, EscaneoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escaneos and returns the data saved in the database.
     * @param {EscaneoCreateManyAndReturnArgs} args - Arguments to create many Escaneos.
     * @example
     * // Create many Escaneos
     * const escaneo = await prisma.escaneo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escaneos and only return the `id`
     * const escaneoWithIdOnly = await prisma.escaneo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscaneoCreateManyAndReturnArgs>(args?: SelectSubset<T, EscaneoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Escaneo.
     * @param {EscaneoDeleteArgs} args - Arguments to delete one Escaneo.
     * @example
     * // Delete one Escaneo
     * const Escaneo = await prisma.escaneo.delete({
     *   where: {
     *     // ... filter to delete one Escaneo
     *   }
     * })
     * 
     */
    delete<T extends EscaneoDeleteArgs>(args: SelectSubset<T, EscaneoDeleteArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Escaneo.
     * @param {EscaneoUpdateArgs} args - Arguments to update one Escaneo.
     * @example
     * // Update one Escaneo
     * const escaneo = await prisma.escaneo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscaneoUpdateArgs>(args: SelectSubset<T, EscaneoUpdateArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Escaneos.
     * @param {EscaneoDeleteManyArgs} args - Arguments to filter Escaneos to delete.
     * @example
     * // Delete a few Escaneos
     * const { count } = await prisma.escaneo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscaneoDeleteManyArgs>(args?: SelectSubset<T, EscaneoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escaneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escaneos
     * const escaneo = await prisma.escaneo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscaneoUpdateManyArgs>(args: SelectSubset<T, EscaneoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Escaneo.
     * @param {EscaneoUpsertArgs} args - Arguments to update or create a Escaneo.
     * @example
     * // Update or create a Escaneo
     * const escaneo = await prisma.escaneo.upsert({
     *   create: {
     *     // ... data to create a Escaneo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escaneo we want to update
     *   }
     * })
     */
    upsert<T extends EscaneoUpsertArgs>(args: SelectSubset<T, EscaneoUpsertArgs<ExtArgs>>): Prisma__EscaneoClient<$Result.GetResult<Prisma.$EscaneoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Escaneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoCountArgs} args - Arguments to filter Escaneos to count.
     * @example
     * // Count the number of Escaneos
     * const count = await prisma.escaneo.count({
     *   where: {
     *     // ... the filter for the Escaneos we want to count
     *   }
     * })
    **/
    count<T extends EscaneoCountArgs>(
      args?: Subset<T, EscaneoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscaneoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escaneo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscaneoAggregateArgs>(args: Subset<T, EscaneoAggregateArgs>): Prisma.PrismaPromise<GetEscaneoAggregateType<T>>

    /**
     * Group by Escaneo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscaneoGroupByArgs} args - Group by arguments.
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
      T extends EscaneoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscaneoGroupByArgs['orderBy'] }
        : { orderBy?: EscaneoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscaneoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscaneoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escaneo model
   */
  readonly fields: EscaneoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escaneo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscaneoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boleto<T extends BoletoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoletoDefaultArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Escaneo model
   */ 
  interface EscaneoFieldRefs {
    readonly id: FieldRef<"Escaneo", 'Int'>
    readonly boletoId: FieldRef<"Escaneo", 'Int'>
    readonly oficialId: FieldRef<"Escaneo", 'Int'>
    readonly busId: FieldRef<"Escaneo", 'Int'>
    readonly turnoId: FieldRef<"Escaneo", 'Int'>
    readonly resultado: FieldRef<"Escaneo", 'ResultadoEscaneo'>
    readonly escaneadoEn: FieldRef<"Escaneo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Escaneo findUnique
   */
  export type EscaneoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter, which Escaneo to fetch.
     */
    where: EscaneoWhereUniqueInput
  }

  /**
   * Escaneo findUniqueOrThrow
   */
  export type EscaneoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter, which Escaneo to fetch.
     */
    where: EscaneoWhereUniqueInput
  }

  /**
   * Escaneo findFirst
   */
  export type EscaneoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter, which Escaneo to fetch.
     */
    where?: EscaneoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escaneos to fetch.
     */
    orderBy?: EscaneoOrderByWithRelationInput | EscaneoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escaneos.
     */
    cursor?: EscaneoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escaneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escaneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escaneos.
     */
    distinct?: EscaneoScalarFieldEnum | EscaneoScalarFieldEnum[]
  }

  /**
   * Escaneo findFirstOrThrow
   */
  export type EscaneoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter, which Escaneo to fetch.
     */
    where?: EscaneoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escaneos to fetch.
     */
    orderBy?: EscaneoOrderByWithRelationInput | EscaneoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escaneos.
     */
    cursor?: EscaneoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escaneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escaneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escaneos.
     */
    distinct?: EscaneoScalarFieldEnum | EscaneoScalarFieldEnum[]
  }

  /**
   * Escaneo findMany
   */
  export type EscaneoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter, which Escaneos to fetch.
     */
    where?: EscaneoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escaneos to fetch.
     */
    orderBy?: EscaneoOrderByWithRelationInput | EscaneoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escaneos.
     */
    cursor?: EscaneoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escaneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escaneos.
     */
    skip?: number
    distinct?: EscaneoScalarFieldEnum | EscaneoScalarFieldEnum[]
  }

  /**
   * Escaneo create
   */
  export type EscaneoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * The data needed to create a Escaneo.
     */
    data: XOR<EscaneoCreateInput, EscaneoUncheckedCreateInput>
  }

  /**
   * Escaneo createMany
   */
  export type EscaneoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escaneos.
     */
    data: EscaneoCreateManyInput | EscaneoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escaneo createManyAndReturn
   */
  export type EscaneoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Escaneos.
     */
    data: EscaneoCreateManyInput | EscaneoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escaneo update
   */
  export type EscaneoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * The data needed to update a Escaneo.
     */
    data: XOR<EscaneoUpdateInput, EscaneoUncheckedUpdateInput>
    /**
     * Choose, which Escaneo to update.
     */
    where: EscaneoWhereUniqueInput
  }

  /**
   * Escaneo updateMany
   */
  export type EscaneoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escaneos.
     */
    data: XOR<EscaneoUpdateManyMutationInput, EscaneoUncheckedUpdateManyInput>
    /**
     * Filter which Escaneos to update
     */
    where?: EscaneoWhereInput
  }

  /**
   * Escaneo upsert
   */
  export type EscaneoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * The filter to search for the Escaneo to update in case it exists.
     */
    where: EscaneoWhereUniqueInput
    /**
     * In case the Escaneo found by the `where` argument doesn't exist, create a new Escaneo with this data.
     */
    create: XOR<EscaneoCreateInput, EscaneoUncheckedCreateInput>
    /**
     * In case the Escaneo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscaneoUpdateInput, EscaneoUncheckedUpdateInput>
  }

  /**
   * Escaneo delete
   */
  export type EscaneoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
    /**
     * Filter which Escaneo to delete.
     */
    where: EscaneoWhereUniqueInput
  }

  /**
   * Escaneo deleteMany
   */
  export type EscaneoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escaneos to delete
     */
    where?: EscaneoWhereInput
  }

  /**
   * Escaneo without action
   */
  export type EscaneoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escaneo
     */
    select?: EscaneoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscaneoInclude<ExtArgs> | null
  }


  /**
   * Model BoletoParada
   */

  export type AggregateBoletoParada = {
    _count: BoletoParadaCountAggregateOutputType | null
    _avg: BoletoParadaAvgAggregateOutputType | null
    _sum: BoletoParadaSumAggregateOutputType | null
    _min: BoletoParadaMinAggregateOutputType | null
    _max: BoletoParadaMaxAggregateOutputType | null
  }

  export type BoletoParadaAvgAggregateOutputType = {
    id: number | null
    boletoId: number | null
    paradaOrigenId: number | null
    paradaDestinoId: number | null
  }

  export type BoletoParadaSumAggregateOutputType = {
    id: number | null
    boletoId: number | null
    paradaOrigenId: number | null
    paradaDestinoId: number | null
  }

  export type BoletoParadaMinAggregateOutputType = {
    id: number | null
    boletoId: number | null
    paradaOrigenId: number | null
    paradaDestinoId: number | null
    estado: $Enums.EstadoBoletoParada | null
  }

  export type BoletoParadaMaxAggregateOutputType = {
    id: number | null
    boletoId: number | null
    paradaOrigenId: number | null
    paradaDestinoId: number | null
    estado: $Enums.EstadoBoletoParada | null
  }

  export type BoletoParadaCountAggregateOutputType = {
    id: number
    boletoId: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado: number
    _all: number
  }


  export type BoletoParadaAvgAggregateInputType = {
    id?: true
    boletoId?: true
    paradaOrigenId?: true
    paradaDestinoId?: true
  }

  export type BoletoParadaSumAggregateInputType = {
    id?: true
    boletoId?: true
    paradaOrigenId?: true
    paradaDestinoId?: true
  }

  export type BoletoParadaMinAggregateInputType = {
    id?: true
    boletoId?: true
    paradaOrigenId?: true
    paradaDestinoId?: true
    estado?: true
  }

  export type BoletoParadaMaxAggregateInputType = {
    id?: true
    boletoId?: true
    paradaOrigenId?: true
    paradaDestinoId?: true
    estado?: true
  }

  export type BoletoParadaCountAggregateInputType = {
    id?: true
    boletoId?: true
    paradaOrigenId?: true
    paradaDestinoId?: true
    estado?: true
    _all?: true
  }

  export type BoletoParadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoletoParada to aggregate.
     */
    where?: BoletoParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoletoParadas to fetch.
     */
    orderBy?: BoletoParadaOrderByWithRelationInput | BoletoParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoletoParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoletoParadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoletoParadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoletoParadas
    **/
    _count?: true | BoletoParadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoletoParadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoletoParadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoletoParadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoletoParadaMaxAggregateInputType
  }

  export type GetBoletoParadaAggregateType<T extends BoletoParadaAggregateArgs> = {
        [P in keyof T & keyof AggregateBoletoParada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoletoParada[P]>
      : GetScalarType<T[P], AggregateBoletoParada[P]>
  }




  export type BoletoParadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoParadaWhereInput
    orderBy?: BoletoParadaOrderByWithAggregationInput | BoletoParadaOrderByWithAggregationInput[]
    by: BoletoParadaScalarFieldEnum[] | BoletoParadaScalarFieldEnum
    having?: BoletoParadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoletoParadaCountAggregateInputType | true
    _avg?: BoletoParadaAvgAggregateInputType
    _sum?: BoletoParadaSumAggregateInputType
    _min?: BoletoParadaMinAggregateInputType
    _max?: BoletoParadaMaxAggregateInputType
  }

  export type BoletoParadaGroupByOutputType = {
    id: number
    boletoId: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado: $Enums.EstadoBoletoParada
    _count: BoletoParadaCountAggregateOutputType | null
    _avg: BoletoParadaAvgAggregateOutputType | null
    _sum: BoletoParadaSumAggregateOutputType | null
    _min: BoletoParadaMinAggregateOutputType | null
    _max: BoletoParadaMaxAggregateOutputType | null
  }

  type GetBoletoParadaGroupByPayload<T extends BoletoParadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoletoParadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoletoParadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoletoParadaGroupByOutputType[P]>
            : GetScalarType<T[P], BoletoParadaGroupByOutputType[P]>
        }
      >
    >


  export type BoletoParadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoId?: boolean
    paradaOrigenId?: boolean
    paradaDestinoId?: boolean
    estado?: boolean
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
    alertasGps?: boolean | BoletoParada$alertasGpsArgs<ExtArgs>
    _count?: boolean | BoletoParadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boletoParada"]>

  export type BoletoParadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoId?: boolean
    paradaOrigenId?: boolean
    paradaDestinoId?: boolean
    estado?: boolean
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boletoParada"]>

  export type BoletoParadaSelectScalar = {
    id?: boolean
    boletoId?: boolean
    paradaOrigenId?: boolean
    paradaDestinoId?: boolean
    estado?: boolean
  }

  export type BoletoParadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
    alertasGps?: boolean | BoletoParada$alertasGpsArgs<ExtArgs>
    _count?: boolean | BoletoParadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoletoParadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boleto?: boolean | BoletoDefaultArgs<ExtArgs>
  }

  export type $BoletoParadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoletoParada"
    objects: {
      boleto: Prisma.$BoletoPayload<ExtArgs>
      alertasGps: Prisma.$AlertaGpsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boletoId: number
      paradaOrigenId: number
      paradaDestinoId: number
      estado: $Enums.EstadoBoletoParada
    }, ExtArgs["result"]["boletoParada"]>
    composites: {}
  }

  type BoletoParadaGetPayload<S extends boolean | null | undefined | BoletoParadaDefaultArgs> = $Result.GetResult<Prisma.$BoletoParadaPayload, S>

  type BoletoParadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoletoParadaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoletoParadaCountAggregateInputType | true
    }

  export interface BoletoParadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoletoParada'], meta: { name: 'BoletoParada' } }
    /**
     * Find zero or one BoletoParada that matches the filter.
     * @param {BoletoParadaFindUniqueArgs} args - Arguments to find a BoletoParada
     * @example
     * // Get one BoletoParada
     * const boletoParada = await prisma.boletoParada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoletoParadaFindUniqueArgs>(args: SelectSubset<T, BoletoParadaFindUniqueArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BoletoParada that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoletoParadaFindUniqueOrThrowArgs} args - Arguments to find a BoletoParada
     * @example
     * // Get one BoletoParada
     * const boletoParada = await prisma.boletoParada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoletoParadaFindUniqueOrThrowArgs>(args: SelectSubset<T, BoletoParadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BoletoParada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaFindFirstArgs} args - Arguments to find a BoletoParada
     * @example
     * // Get one BoletoParada
     * const boletoParada = await prisma.boletoParada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoletoParadaFindFirstArgs>(args?: SelectSubset<T, BoletoParadaFindFirstArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BoletoParada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaFindFirstOrThrowArgs} args - Arguments to find a BoletoParada
     * @example
     * // Get one BoletoParada
     * const boletoParada = await prisma.boletoParada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoletoParadaFindFirstOrThrowArgs>(args?: SelectSubset<T, BoletoParadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BoletoParadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoletoParadas
     * const boletoParadas = await prisma.boletoParada.findMany()
     * 
     * // Get first 10 BoletoParadas
     * const boletoParadas = await prisma.boletoParada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boletoParadaWithIdOnly = await prisma.boletoParada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoletoParadaFindManyArgs>(args?: SelectSubset<T, BoletoParadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BoletoParada.
     * @param {BoletoParadaCreateArgs} args - Arguments to create a BoletoParada.
     * @example
     * // Create one BoletoParada
     * const BoletoParada = await prisma.boletoParada.create({
     *   data: {
     *     // ... data to create a BoletoParada
     *   }
     * })
     * 
     */
    create<T extends BoletoParadaCreateArgs>(args: SelectSubset<T, BoletoParadaCreateArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BoletoParadas.
     * @param {BoletoParadaCreateManyArgs} args - Arguments to create many BoletoParadas.
     * @example
     * // Create many BoletoParadas
     * const boletoParada = await prisma.boletoParada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoletoParadaCreateManyArgs>(args?: SelectSubset<T, BoletoParadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoletoParadas and returns the data saved in the database.
     * @param {BoletoParadaCreateManyAndReturnArgs} args - Arguments to create many BoletoParadas.
     * @example
     * // Create many BoletoParadas
     * const boletoParada = await prisma.boletoParada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoletoParadas and only return the `id`
     * const boletoParadaWithIdOnly = await prisma.boletoParada.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoletoParadaCreateManyAndReturnArgs>(args?: SelectSubset<T, BoletoParadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BoletoParada.
     * @param {BoletoParadaDeleteArgs} args - Arguments to delete one BoletoParada.
     * @example
     * // Delete one BoletoParada
     * const BoletoParada = await prisma.boletoParada.delete({
     *   where: {
     *     // ... filter to delete one BoletoParada
     *   }
     * })
     * 
     */
    delete<T extends BoletoParadaDeleteArgs>(args: SelectSubset<T, BoletoParadaDeleteArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BoletoParada.
     * @param {BoletoParadaUpdateArgs} args - Arguments to update one BoletoParada.
     * @example
     * // Update one BoletoParada
     * const boletoParada = await prisma.boletoParada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoletoParadaUpdateArgs>(args: SelectSubset<T, BoletoParadaUpdateArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BoletoParadas.
     * @param {BoletoParadaDeleteManyArgs} args - Arguments to filter BoletoParadas to delete.
     * @example
     * // Delete a few BoletoParadas
     * const { count } = await prisma.boletoParada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoletoParadaDeleteManyArgs>(args?: SelectSubset<T, BoletoParadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoletoParadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoletoParadas
     * const boletoParada = await prisma.boletoParada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoletoParadaUpdateManyArgs>(args: SelectSubset<T, BoletoParadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoletoParada.
     * @param {BoletoParadaUpsertArgs} args - Arguments to update or create a BoletoParada.
     * @example
     * // Update or create a BoletoParada
     * const boletoParada = await prisma.boletoParada.upsert({
     *   create: {
     *     // ... data to create a BoletoParada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoletoParada we want to update
     *   }
     * })
     */
    upsert<T extends BoletoParadaUpsertArgs>(args: SelectSubset<T, BoletoParadaUpsertArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BoletoParadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaCountArgs} args - Arguments to filter BoletoParadas to count.
     * @example
     * // Count the number of BoletoParadas
     * const count = await prisma.boletoParada.count({
     *   where: {
     *     // ... the filter for the BoletoParadas we want to count
     *   }
     * })
    **/
    count<T extends BoletoParadaCountArgs>(
      args?: Subset<T, BoletoParadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoletoParadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoletoParada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoletoParadaAggregateArgs>(args: Subset<T, BoletoParadaAggregateArgs>): Prisma.PrismaPromise<GetBoletoParadaAggregateType<T>>

    /**
     * Group by BoletoParada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoParadaGroupByArgs} args - Group by arguments.
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
      T extends BoletoParadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoletoParadaGroupByArgs['orderBy'] }
        : { orderBy?: BoletoParadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoletoParadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoletoParadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoletoParada model
   */
  readonly fields: BoletoParadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoletoParada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoletoParadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boleto<T extends BoletoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoletoDefaultArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    alertasGps<T extends BoletoParada$alertasGpsArgs<ExtArgs> = {}>(args?: Subset<T, BoletoParada$alertasGpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the BoletoParada model
   */ 
  interface BoletoParadaFieldRefs {
    readonly id: FieldRef<"BoletoParada", 'Int'>
    readonly boletoId: FieldRef<"BoletoParada", 'Int'>
    readonly paradaOrigenId: FieldRef<"BoletoParada", 'Int'>
    readonly paradaDestinoId: FieldRef<"BoletoParada", 'Int'>
    readonly estado: FieldRef<"BoletoParada", 'EstadoBoletoParada'>
  }
    

  // Custom InputTypes
  /**
   * BoletoParada findUnique
   */
  export type BoletoParadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter, which BoletoParada to fetch.
     */
    where: BoletoParadaWhereUniqueInput
  }

  /**
   * BoletoParada findUniqueOrThrow
   */
  export type BoletoParadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter, which BoletoParada to fetch.
     */
    where: BoletoParadaWhereUniqueInput
  }

  /**
   * BoletoParada findFirst
   */
  export type BoletoParadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter, which BoletoParada to fetch.
     */
    where?: BoletoParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoletoParadas to fetch.
     */
    orderBy?: BoletoParadaOrderByWithRelationInput | BoletoParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoletoParadas.
     */
    cursor?: BoletoParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoletoParadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoletoParadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoletoParadas.
     */
    distinct?: BoletoParadaScalarFieldEnum | BoletoParadaScalarFieldEnum[]
  }

  /**
   * BoletoParada findFirstOrThrow
   */
  export type BoletoParadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter, which BoletoParada to fetch.
     */
    where?: BoletoParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoletoParadas to fetch.
     */
    orderBy?: BoletoParadaOrderByWithRelationInput | BoletoParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoletoParadas.
     */
    cursor?: BoletoParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoletoParadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoletoParadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoletoParadas.
     */
    distinct?: BoletoParadaScalarFieldEnum | BoletoParadaScalarFieldEnum[]
  }

  /**
   * BoletoParada findMany
   */
  export type BoletoParadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter, which BoletoParadas to fetch.
     */
    where?: BoletoParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoletoParadas to fetch.
     */
    orderBy?: BoletoParadaOrderByWithRelationInput | BoletoParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoletoParadas.
     */
    cursor?: BoletoParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoletoParadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoletoParadas.
     */
    skip?: number
    distinct?: BoletoParadaScalarFieldEnum | BoletoParadaScalarFieldEnum[]
  }

  /**
   * BoletoParada create
   */
  export type BoletoParadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * The data needed to create a BoletoParada.
     */
    data: XOR<BoletoParadaCreateInput, BoletoParadaUncheckedCreateInput>
  }

  /**
   * BoletoParada createMany
   */
  export type BoletoParadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoletoParadas.
     */
    data: BoletoParadaCreateManyInput | BoletoParadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoletoParada createManyAndReturn
   */
  export type BoletoParadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BoletoParadas.
     */
    data: BoletoParadaCreateManyInput | BoletoParadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoletoParada update
   */
  export type BoletoParadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * The data needed to update a BoletoParada.
     */
    data: XOR<BoletoParadaUpdateInput, BoletoParadaUncheckedUpdateInput>
    /**
     * Choose, which BoletoParada to update.
     */
    where: BoletoParadaWhereUniqueInput
  }

  /**
   * BoletoParada updateMany
   */
  export type BoletoParadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoletoParadas.
     */
    data: XOR<BoletoParadaUpdateManyMutationInput, BoletoParadaUncheckedUpdateManyInput>
    /**
     * Filter which BoletoParadas to update
     */
    where?: BoletoParadaWhereInput
  }

  /**
   * BoletoParada upsert
   */
  export type BoletoParadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * The filter to search for the BoletoParada to update in case it exists.
     */
    where: BoletoParadaWhereUniqueInput
    /**
     * In case the BoletoParada found by the `where` argument doesn't exist, create a new BoletoParada with this data.
     */
    create: XOR<BoletoParadaCreateInput, BoletoParadaUncheckedCreateInput>
    /**
     * In case the BoletoParada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoletoParadaUpdateInput, BoletoParadaUncheckedUpdateInput>
  }

  /**
   * BoletoParada delete
   */
  export type BoletoParadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
    /**
     * Filter which BoletoParada to delete.
     */
    where: BoletoParadaWhereUniqueInput
  }

  /**
   * BoletoParada deleteMany
   */
  export type BoletoParadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoletoParadas to delete
     */
    where?: BoletoParadaWhereInput
  }

  /**
   * BoletoParada.alertasGps
   */
  export type BoletoParada$alertasGpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    where?: AlertaGpsWhereInput
    orderBy?: AlertaGpsOrderByWithRelationInput | AlertaGpsOrderByWithRelationInput[]
    cursor?: AlertaGpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaGpsScalarFieldEnum | AlertaGpsScalarFieldEnum[]
  }

  /**
   * BoletoParada without action
   */
  export type BoletoParadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoletoParada
     */
    select?: BoletoParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoParadaInclude<ExtArgs> | null
  }


  /**
   * Model AlertaGps
   */

  export type AggregateAlertaGps = {
    _count: AlertaGpsCountAggregateOutputType | null
    _avg: AlertaGpsAvgAggregateOutputType | null
    _sum: AlertaGpsSumAggregateOutputType | null
    _min: AlertaGpsMinAggregateOutputType | null
    _max: AlertaGpsMaxAggregateOutputType | null
  }

  export type AlertaGpsAvgAggregateOutputType = {
    id: number | null
    boletoParadaId: number | null
    turnoId: number | null
    latActual: Decimal | null
    lngActual: Decimal | null
    metrosRestantes: number | null
  }

  export type AlertaGpsSumAggregateOutputType = {
    id: number | null
    boletoParadaId: number | null
    turnoId: number | null
    latActual: Decimal | null
    lngActual: Decimal | null
    metrosRestantes: number | null
  }

  export type AlertaGpsMinAggregateOutputType = {
    id: number | null
    boletoParadaId: number | null
    turnoId: number | null
    latActual: Decimal | null
    lngActual: Decimal | null
    metrosRestantes: number | null
    estado: $Enums.EstadoAlerta | null
    actualizadoEn: Date | null
  }

  export type AlertaGpsMaxAggregateOutputType = {
    id: number | null
    boletoParadaId: number | null
    turnoId: number | null
    latActual: Decimal | null
    lngActual: Decimal | null
    metrosRestantes: number | null
    estado: $Enums.EstadoAlerta | null
    actualizadoEn: Date | null
  }

  export type AlertaGpsCountAggregateOutputType = {
    id: number
    boletoParadaId: number
    turnoId: number
    latActual: number
    lngActual: number
    metrosRestantes: number
    estado: number
    actualizadoEn: number
    _all: number
  }


  export type AlertaGpsAvgAggregateInputType = {
    id?: true
    boletoParadaId?: true
    turnoId?: true
    latActual?: true
    lngActual?: true
    metrosRestantes?: true
  }

  export type AlertaGpsSumAggregateInputType = {
    id?: true
    boletoParadaId?: true
    turnoId?: true
    latActual?: true
    lngActual?: true
    metrosRestantes?: true
  }

  export type AlertaGpsMinAggregateInputType = {
    id?: true
    boletoParadaId?: true
    turnoId?: true
    latActual?: true
    lngActual?: true
    metrosRestantes?: true
    estado?: true
    actualizadoEn?: true
  }

  export type AlertaGpsMaxAggregateInputType = {
    id?: true
    boletoParadaId?: true
    turnoId?: true
    latActual?: true
    lngActual?: true
    metrosRestantes?: true
    estado?: true
    actualizadoEn?: true
  }

  export type AlertaGpsCountAggregateInputType = {
    id?: true
    boletoParadaId?: true
    turnoId?: true
    latActual?: true
    lngActual?: true
    metrosRestantes?: true
    estado?: true
    actualizadoEn?: true
    _all?: true
  }

  export type AlertaGpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertaGps to aggregate.
     */
    where?: AlertaGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaGps to fetch.
     */
    orderBy?: AlertaGpsOrderByWithRelationInput | AlertaGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertaGps
    **/
    _count?: true | AlertaGpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaGpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaGpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaGpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaGpsMaxAggregateInputType
  }

  export type GetAlertaGpsAggregateType<T extends AlertaGpsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertaGps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertaGps[P]>
      : GetScalarType<T[P], AggregateAlertaGps[P]>
  }




  export type AlertaGpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaGpsWhereInput
    orderBy?: AlertaGpsOrderByWithAggregationInput | AlertaGpsOrderByWithAggregationInput[]
    by: AlertaGpsScalarFieldEnum[] | AlertaGpsScalarFieldEnum
    having?: AlertaGpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaGpsCountAggregateInputType | true
    _avg?: AlertaGpsAvgAggregateInputType
    _sum?: AlertaGpsSumAggregateInputType
    _min?: AlertaGpsMinAggregateInputType
    _max?: AlertaGpsMaxAggregateInputType
  }

  export type AlertaGpsGroupByOutputType = {
    id: number
    boletoParadaId: number
    turnoId: number
    latActual: Decimal
    lngActual: Decimal
    metrosRestantes: number
    estado: $Enums.EstadoAlerta
    actualizadoEn: Date
    _count: AlertaGpsCountAggregateOutputType | null
    _avg: AlertaGpsAvgAggregateOutputType | null
    _sum: AlertaGpsSumAggregateOutputType | null
    _min: AlertaGpsMinAggregateOutputType | null
    _max: AlertaGpsMaxAggregateOutputType | null
  }

  type GetAlertaGpsGroupByPayload<T extends AlertaGpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGpsGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGpsGroupByOutputType[P]>
        }
      >
    >


  export type AlertaGpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoParadaId?: boolean
    turnoId?: boolean
    latActual?: boolean
    lngActual?: boolean
    metrosRestantes?: boolean
    estado?: boolean
    actualizadoEn?: boolean
    boletoParada?: boolean | BoletoParadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertaGps"]>

  export type AlertaGpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boletoParadaId?: boolean
    turnoId?: boolean
    latActual?: boolean
    lngActual?: boolean
    metrosRestantes?: boolean
    estado?: boolean
    actualizadoEn?: boolean
    boletoParada?: boolean | BoletoParadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertaGps"]>

  export type AlertaGpsSelectScalar = {
    id?: boolean
    boletoParadaId?: boolean
    turnoId?: boolean
    latActual?: boolean
    lngActual?: boolean
    metrosRestantes?: boolean
    estado?: boolean
    actualizadoEn?: boolean
  }

  export type AlertaGpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletoParada?: boolean | BoletoParadaDefaultArgs<ExtArgs>
  }
  export type AlertaGpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletoParada?: boolean | BoletoParadaDefaultArgs<ExtArgs>
  }

  export type $AlertaGpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertaGps"
    objects: {
      boletoParada: Prisma.$BoletoParadaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boletoParadaId: number
      turnoId: number
      latActual: Prisma.Decimal
      lngActual: Prisma.Decimal
      metrosRestantes: number
      estado: $Enums.EstadoAlerta
      actualizadoEn: Date
    }, ExtArgs["result"]["alertaGps"]>
    composites: {}
  }

  type AlertaGpsGetPayload<S extends boolean | null | undefined | AlertaGpsDefaultArgs> = $Result.GetResult<Prisma.$AlertaGpsPayload, S>

  type AlertaGpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertaGpsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertaGpsCountAggregateInputType | true
    }

  export interface AlertaGpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertaGps'], meta: { name: 'AlertaGps' } }
    /**
     * Find zero or one AlertaGps that matches the filter.
     * @param {AlertaGpsFindUniqueArgs} args - Arguments to find a AlertaGps
     * @example
     * // Get one AlertaGps
     * const alertaGps = await prisma.alertaGps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaGpsFindUniqueArgs>(args: SelectSubset<T, AlertaGpsFindUniqueArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AlertaGps that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertaGpsFindUniqueOrThrowArgs} args - Arguments to find a AlertaGps
     * @example
     * // Get one AlertaGps
     * const alertaGps = await prisma.alertaGps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaGpsFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaGpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AlertaGps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsFindFirstArgs} args - Arguments to find a AlertaGps
     * @example
     * // Get one AlertaGps
     * const alertaGps = await prisma.alertaGps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaGpsFindFirstArgs>(args?: SelectSubset<T, AlertaGpsFindFirstArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AlertaGps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsFindFirstOrThrowArgs} args - Arguments to find a AlertaGps
     * @example
     * // Get one AlertaGps
     * const alertaGps = await prisma.alertaGps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaGpsFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaGpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AlertaGps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertaGps
     * const alertaGps = await prisma.alertaGps.findMany()
     * 
     * // Get first 10 AlertaGps
     * const alertaGps = await prisma.alertaGps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaGpsWithIdOnly = await prisma.alertaGps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaGpsFindManyArgs>(args?: SelectSubset<T, AlertaGpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AlertaGps.
     * @param {AlertaGpsCreateArgs} args - Arguments to create a AlertaGps.
     * @example
     * // Create one AlertaGps
     * const AlertaGps = await prisma.alertaGps.create({
     *   data: {
     *     // ... data to create a AlertaGps
     *   }
     * })
     * 
     */
    create<T extends AlertaGpsCreateArgs>(args: SelectSubset<T, AlertaGpsCreateArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AlertaGps.
     * @param {AlertaGpsCreateManyArgs} args - Arguments to create many AlertaGps.
     * @example
     * // Create many AlertaGps
     * const alertaGps = await prisma.alertaGps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaGpsCreateManyArgs>(args?: SelectSubset<T, AlertaGpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertaGps and returns the data saved in the database.
     * @param {AlertaGpsCreateManyAndReturnArgs} args - Arguments to create many AlertaGps.
     * @example
     * // Create many AlertaGps
     * const alertaGps = await prisma.alertaGps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertaGps and only return the `id`
     * const alertaGpsWithIdOnly = await prisma.alertaGps.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertaGpsCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertaGpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AlertaGps.
     * @param {AlertaGpsDeleteArgs} args - Arguments to delete one AlertaGps.
     * @example
     * // Delete one AlertaGps
     * const AlertaGps = await prisma.alertaGps.delete({
     *   where: {
     *     // ... filter to delete one AlertaGps
     *   }
     * })
     * 
     */
    delete<T extends AlertaGpsDeleteArgs>(args: SelectSubset<T, AlertaGpsDeleteArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AlertaGps.
     * @param {AlertaGpsUpdateArgs} args - Arguments to update one AlertaGps.
     * @example
     * // Update one AlertaGps
     * const alertaGps = await prisma.alertaGps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaGpsUpdateArgs>(args: SelectSubset<T, AlertaGpsUpdateArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AlertaGps.
     * @param {AlertaGpsDeleteManyArgs} args - Arguments to filter AlertaGps to delete.
     * @example
     * // Delete a few AlertaGps
     * const { count } = await prisma.alertaGps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaGpsDeleteManyArgs>(args?: SelectSubset<T, AlertaGpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertaGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertaGps
     * const alertaGps = await prisma.alertaGps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaGpsUpdateManyArgs>(args: SelectSubset<T, AlertaGpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertaGps.
     * @param {AlertaGpsUpsertArgs} args - Arguments to update or create a AlertaGps.
     * @example
     * // Update or create a AlertaGps
     * const alertaGps = await prisma.alertaGps.upsert({
     *   create: {
     *     // ... data to create a AlertaGps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertaGps we want to update
     *   }
     * })
     */
    upsert<T extends AlertaGpsUpsertArgs>(args: SelectSubset<T, AlertaGpsUpsertArgs<ExtArgs>>): Prisma__AlertaGpsClient<$Result.GetResult<Prisma.$AlertaGpsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AlertaGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsCountArgs} args - Arguments to filter AlertaGps to count.
     * @example
     * // Count the number of AlertaGps
     * const count = await prisma.alertaGps.count({
     *   where: {
     *     // ... the filter for the AlertaGps we want to count
     *   }
     * })
    **/
    count<T extends AlertaGpsCountArgs>(
      args?: Subset<T, AlertaGpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaGpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertaGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertaGpsAggregateArgs>(args: Subset<T, AlertaGpsAggregateArgs>): Prisma.PrismaPromise<GetAlertaGpsAggregateType<T>>

    /**
     * Group by AlertaGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGpsGroupByArgs} args - Group by arguments.
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
      T extends AlertaGpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaGpsGroupByArgs['orderBy'] }
        : { orderBy?: AlertaGpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertaGpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertaGps model
   */
  readonly fields: AlertaGpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertaGps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaGpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletoParada<T extends BoletoParadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoletoParadaDefaultArgs<ExtArgs>>): Prisma__BoletoParadaClient<$Result.GetResult<Prisma.$BoletoParadaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AlertaGps model
   */ 
  interface AlertaGpsFieldRefs {
    readonly id: FieldRef<"AlertaGps", 'Int'>
    readonly boletoParadaId: FieldRef<"AlertaGps", 'Int'>
    readonly turnoId: FieldRef<"AlertaGps", 'Int'>
    readonly latActual: FieldRef<"AlertaGps", 'Decimal'>
    readonly lngActual: FieldRef<"AlertaGps", 'Decimal'>
    readonly metrosRestantes: FieldRef<"AlertaGps", 'Int'>
    readonly estado: FieldRef<"AlertaGps", 'EstadoAlerta'>
    readonly actualizadoEn: FieldRef<"AlertaGps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertaGps findUnique
   */
  export type AlertaGpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter, which AlertaGps to fetch.
     */
    where: AlertaGpsWhereUniqueInput
  }

  /**
   * AlertaGps findUniqueOrThrow
   */
  export type AlertaGpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter, which AlertaGps to fetch.
     */
    where: AlertaGpsWhereUniqueInput
  }

  /**
   * AlertaGps findFirst
   */
  export type AlertaGpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter, which AlertaGps to fetch.
     */
    where?: AlertaGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaGps to fetch.
     */
    orderBy?: AlertaGpsOrderByWithRelationInput | AlertaGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertaGps.
     */
    cursor?: AlertaGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertaGps.
     */
    distinct?: AlertaGpsScalarFieldEnum | AlertaGpsScalarFieldEnum[]
  }

  /**
   * AlertaGps findFirstOrThrow
   */
  export type AlertaGpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter, which AlertaGps to fetch.
     */
    where?: AlertaGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaGps to fetch.
     */
    orderBy?: AlertaGpsOrderByWithRelationInput | AlertaGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertaGps.
     */
    cursor?: AlertaGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertaGps.
     */
    distinct?: AlertaGpsScalarFieldEnum | AlertaGpsScalarFieldEnum[]
  }

  /**
   * AlertaGps findMany
   */
  export type AlertaGpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter, which AlertaGps to fetch.
     */
    where?: AlertaGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaGps to fetch.
     */
    orderBy?: AlertaGpsOrderByWithRelationInput | AlertaGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertaGps.
     */
    cursor?: AlertaGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaGps.
     */
    skip?: number
    distinct?: AlertaGpsScalarFieldEnum | AlertaGpsScalarFieldEnum[]
  }

  /**
   * AlertaGps create
   */
  export type AlertaGpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertaGps.
     */
    data: XOR<AlertaGpsCreateInput, AlertaGpsUncheckedCreateInput>
  }

  /**
   * AlertaGps createMany
   */
  export type AlertaGpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertaGps.
     */
    data: AlertaGpsCreateManyInput | AlertaGpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertaGps createManyAndReturn
   */
  export type AlertaGpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AlertaGps.
     */
    data: AlertaGpsCreateManyInput | AlertaGpsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlertaGps update
   */
  export type AlertaGpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertaGps.
     */
    data: XOR<AlertaGpsUpdateInput, AlertaGpsUncheckedUpdateInput>
    /**
     * Choose, which AlertaGps to update.
     */
    where: AlertaGpsWhereUniqueInput
  }

  /**
   * AlertaGps updateMany
   */
  export type AlertaGpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertaGps.
     */
    data: XOR<AlertaGpsUpdateManyMutationInput, AlertaGpsUncheckedUpdateManyInput>
    /**
     * Filter which AlertaGps to update
     */
    where?: AlertaGpsWhereInput
  }

  /**
   * AlertaGps upsert
   */
  export type AlertaGpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertaGps to update in case it exists.
     */
    where: AlertaGpsWhereUniqueInput
    /**
     * In case the AlertaGps found by the `where` argument doesn't exist, create a new AlertaGps with this data.
     */
    create: XOR<AlertaGpsCreateInput, AlertaGpsUncheckedCreateInput>
    /**
     * In case the AlertaGps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaGpsUpdateInput, AlertaGpsUncheckedUpdateInput>
  }

  /**
   * AlertaGps delete
   */
  export type AlertaGpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
    /**
     * Filter which AlertaGps to delete.
     */
    where: AlertaGpsWhereUniqueInput
  }

  /**
   * AlertaGps deleteMany
   */
  export type AlertaGpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertaGps to delete
     */
    where?: AlertaGpsWhereInput
  }

  /**
   * AlertaGps without action
   */
  export type AlertaGpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaGps
     */
    select?: AlertaGpsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaGpsInclude<ExtArgs> | null
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


  export const CompraScalarFieldEnum: {
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

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const BoletoScalarFieldEnum: {
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

  export type BoletoScalarFieldEnum = (typeof BoletoScalarFieldEnum)[keyof typeof BoletoScalarFieldEnum]


  export const PagoPasajeroScalarFieldEnum: {
    id: 'id',
    compraId: 'compraId',
    monto: 'monto',
    metodo: 'metodo',
    estado: 'estado',
    pagadoEn: 'pagadoEn'
  };

  export type PagoPasajeroScalarFieldEnum = (typeof PagoPasajeroScalarFieldEnum)[keyof typeof PagoPasajeroScalarFieldEnum]


  export const PagoTarjetaScalarFieldEnum: {
    id: 'id',
    pagoId: 'pagoId',
    ultimos4: 'ultimos4',
    marca: 'marca',
    referenciaPasarela: 'referenciaPasarela'
  };

  export type PagoTarjetaScalarFieldEnum = (typeof PagoTarjetaScalarFieldEnum)[keyof typeof PagoTarjetaScalarFieldEnum]


  export const PagoTransferenciaScalarFieldEnum: {
    id: 'id',
    pagoId: 'pagoId',
    banco: 'banco',
    referencia: 'referencia',
    comprobanteUrl: 'comprobanteUrl',
    estado: 'estado'
  };

  export type PagoTransferenciaScalarFieldEnum = (typeof PagoTransferenciaScalarFieldEnum)[keyof typeof PagoTransferenciaScalarFieldEnum]


  export const AprobacionScalarFieldEnum: {
    id: 'id',
    pagoTransferenciaId: 'pagoTransferenciaId',
    oficinistaId: 'oficinistaId',
    estado: 'estado',
    observacion: 'observacion',
    revisadoEn: 'revisadoEn'
  };

  export type AprobacionScalarFieldEnum = (typeof AprobacionScalarFieldEnum)[keyof typeof AprobacionScalarFieldEnum]


  export const PagoEfectivoScalarFieldEnum: {
    id: 'id',
    pagoId: 'pagoId',
    vendedorId: 'vendedorId',
    montoRecibido: 'montoRecibido',
    cambio: 'cambio',
    canalVenta: 'canalVenta',
    turnoId: 'turnoId'
  };

  export type PagoEfectivoScalarFieldEnum = (typeof PagoEfectivoScalarFieldEnum)[keyof typeof PagoEfectivoScalarFieldEnum]


  export const EscaneoScalarFieldEnum: {
    id: 'id',
    boletoId: 'boletoId',
    oficialId: 'oficialId',
    busId: 'busId',
    turnoId: 'turnoId',
    resultado: 'resultado',
    escaneadoEn: 'escaneadoEn'
  };

  export type EscaneoScalarFieldEnum = (typeof EscaneoScalarFieldEnum)[keyof typeof EscaneoScalarFieldEnum]


  export const BoletoParadaScalarFieldEnum: {
    id: 'id',
    boletoId: 'boletoId',
    paradaOrigenId: 'paradaOrigenId',
    paradaDestinoId: 'paradaDestinoId',
    estado: 'estado'
  };

  export type BoletoParadaScalarFieldEnum = (typeof BoletoParadaScalarFieldEnum)[keyof typeof BoletoParadaScalarFieldEnum]


  export const AlertaGpsScalarFieldEnum: {
    id: 'id',
    boletoParadaId: 'boletoParadaId',
    turnoId: 'turnoId',
    latActual: 'latActual',
    lngActual: 'lngActual',
    metrosRestantes: 'metrosRestantes',
    estado: 'estado',
    actualizadoEn: 'actualizadoEn'
  };

  export type AlertaGpsScalarFieldEnum = (typeof AlertaGpsScalarFieldEnum)[keyof typeof AlertaGpsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CanalVenta'
   */
  export type EnumCanalVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalVenta'>
    


  /**
   * Reference to a field of type 'CanalVenta[]'
   */
  export type ListEnumCanalVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalVenta[]'>
    


  /**
   * Reference to a field of type 'EstadoCompra'
   */
  export type EnumEstadoCompraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCompra'>
    


  /**
   * Reference to a field of type 'EstadoCompra[]'
   */
  export type ListEnumEstadoCompraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCompra[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoTarifa'
   */
  export type EnumTipoTarifaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTarifa'>
    


  /**
   * Reference to a field of type 'TipoTarifa[]'
   */
  export type ListEnumTipoTarifaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTarifa[]'>
    


  /**
   * Reference to a field of type 'EstadoBoleto'
   */
  export type EnumEstadoBoletoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBoleto'>
    


  /**
   * Reference to a field of type 'EstadoBoleto[]'
   */
  export type ListEnumEstadoBoletoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBoleto[]'>
    


  /**
   * Reference to a field of type 'MetodoPago'
   */
  export type EnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago'>
    


  /**
   * Reference to a field of type 'MetodoPago[]'
   */
  export type ListEnumMetodoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPago[]'>
    


  /**
   * Reference to a field of type 'EstadoPago'
   */
  export type EnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago'>
    


  /**
   * Reference to a field of type 'EstadoPago[]'
   */
  export type ListEnumEstadoPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPago[]'>
    


  /**
   * Reference to a field of type 'EstadoTransferencia'
   */
  export type EnumEstadoTransferenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTransferencia'>
    


  /**
   * Reference to a field of type 'EstadoTransferencia[]'
   */
  export type ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTransferencia[]'>
    


  /**
   * Reference to a field of type 'EstadoAprobacion'
   */
  export type EnumEstadoAprobacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAprobacion'>
    


  /**
   * Reference to a field of type 'EstadoAprobacion[]'
   */
  export type ListEnumEstadoAprobacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAprobacion[]'>
    


  /**
   * Reference to a field of type 'CanalEfectivo'
   */
  export type EnumCanalEfectivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalEfectivo'>
    


  /**
   * Reference to a field of type 'CanalEfectivo[]'
   */
  export type ListEnumCanalEfectivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CanalEfectivo[]'>
    


  /**
   * Reference to a field of type 'ResultadoEscaneo'
   */
  export type EnumResultadoEscaneoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultadoEscaneo'>
    


  /**
   * Reference to a field of type 'ResultadoEscaneo[]'
   */
  export type ListEnumResultadoEscaneoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultadoEscaneo[]'>
    


  /**
   * Reference to a field of type 'EstadoBoletoParada'
   */
  export type EnumEstadoBoletoParadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBoletoParada'>
    


  /**
   * Reference to a field of type 'EstadoBoletoParada[]'
   */
  export type ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBoletoParada[]'>
    


  /**
   * Reference to a field of type 'EstadoAlerta'
   */
  export type EnumEstadoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAlerta'>
    


  /**
   * Reference to a field of type 'EstadoAlerta[]'
   */
  export type ListEnumEstadoAlertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAlerta[]'>
    


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


  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    id?: IntFilter<"Compra"> | number
    usuarioId?: IntFilter<"Compra"> | number
    frecuenciaId?: IntFilter<"Compra"> | number
    fechaViaje?: DateTimeFilter<"Compra"> | Date | string
    cantidad?: IntFilter<"Compra"> | number
    total?: DecimalFilter<"Compra"> | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFilter<"Compra"> | $Enums.CanalVenta
    estado?: EnumEstadoCompraFilter<"Compra"> | $Enums.EstadoCompra
    creadoEn?: DateTimeFilter<"Compra"> | Date | string
    boletos?: BoletoListRelationFilter
    pago?: XOR<PagoPasajeroNullableRelationFilter, PagoPasajeroWhereInput> | null
  }

  export type CompraOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    fechaViaje?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    canal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
    pago?: PagoPasajeroOrderByWithRelationInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    usuarioId?: IntFilter<"Compra"> | number
    frecuenciaId?: IntFilter<"Compra"> | number
    fechaViaje?: DateTimeFilter<"Compra"> | Date | string
    cantidad?: IntFilter<"Compra"> | number
    total?: DecimalFilter<"Compra"> | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFilter<"Compra"> | $Enums.CanalVenta
    estado?: EnumEstadoCompraFilter<"Compra"> | $Enums.EstadoCompra
    creadoEn?: DateTimeFilter<"Compra"> | Date | string
    boletos?: BoletoListRelationFilter
    pago?: XOR<PagoPasajeroNullableRelationFilter, PagoPasajeroWhereInput> | null
  }, "id">

  export type CompraOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    fechaViaje?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    canal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compra"> | number
    usuarioId?: IntWithAggregatesFilter<"Compra"> | number
    frecuenciaId?: IntWithAggregatesFilter<"Compra"> | number
    fechaViaje?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
    cantidad?: IntWithAggregatesFilter<"Compra"> | number
    total?: DecimalWithAggregatesFilter<"Compra"> | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaWithAggregatesFilter<"Compra"> | $Enums.CanalVenta
    estado?: EnumEstadoCompraWithAggregatesFilter<"Compra"> | $Enums.EstadoCompra
    creadoEn?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
  }

  export type BoletoWhereInput = {
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    id?: IntFilter<"Boleto"> | number
    compraId?: IntFilter<"Boleto"> | number
    uuidQr?: StringFilter<"Boleto"> | string
    cedulaPasajero?: StringFilter<"Boleto"> | string
    nombrePasajero?: StringFilter<"Boleto"> | string
    tipoTarifa?: EnumTipoTarifaFilter<"Boleto"> | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFilter<"Boleto"> | $Enums.EstadoBoleto
    expiraEn?: DateTimeFilter<"Boleto"> | Date | string
    creadoEn?: DateTimeFilter<"Boleto"> | Date | string
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    escaneo?: XOR<EscaneoNullableRelationFilter, EscaneoWhereInput> | null
    boletoParada?: XOR<BoletoParadaNullableRelationFilter, BoletoParadaWhereInput> | null
  }

  export type BoletoOrderByWithRelationInput = {
    id?: SortOrder
    compraId?: SortOrder
    uuidQr?: SortOrder
    cedulaPasajero?: SortOrder
    nombrePasajero?: SortOrder
    tipoTarifa?: SortOrder
    estado?: SortOrder
    expiraEn?: SortOrder
    creadoEn?: SortOrder
    compra?: CompraOrderByWithRelationInput
    escaneo?: EscaneoOrderByWithRelationInput
    boletoParada?: BoletoParadaOrderByWithRelationInput
  }

  export type BoletoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuidQr?: string
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    compraId?: IntFilter<"Boleto"> | number
    cedulaPasajero?: StringFilter<"Boleto"> | string
    nombrePasajero?: StringFilter<"Boleto"> | string
    tipoTarifa?: EnumTipoTarifaFilter<"Boleto"> | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFilter<"Boleto"> | $Enums.EstadoBoleto
    expiraEn?: DateTimeFilter<"Boleto"> | Date | string
    creadoEn?: DateTimeFilter<"Boleto"> | Date | string
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    escaneo?: XOR<EscaneoNullableRelationFilter, EscaneoWhereInput> | null
    boletoParada?: XOR<BoletoParadaNullableRelationFilter, BoletoParadaWhereInput> | null
  }, "id" | "uuidQr">

  export type BoletoOrderByWithAggregationInput = {
    id?: SortOrder
    compraId?: SortOrder
    uuidQr?: SortOrder
    cedulaPasajero?: SortOrder
    nombrePasajero?: SortOrder
    tipoTarifa?: SortOrder
    estado?: SortOrder
    expiraEn?: SortOrder
    creadoEn?: SortOrder
    _count?: BoletoCountOrderByAggregateInput
    _avg?: BoletoAvgOrderByAggregateInput
    _max?: BoletoMaxOrderByAggregateInput
    _min?: BoletoMinOrderByAggregateInput
    _sum?: BoletoSumOrderByAggregateInput
  }

  export type BoletoScalarWhereWithAggregatesInput = {
    AND?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    OR?: BoletoScalarWhereWithAggregatesInput[]
    NOT?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Boleto"> | number
    compraId?: IntWithAggregatesFilter<"Boleto"> | number
    uuidQr?: StringWithAggregatesFilter<"Boleto"> | string
    cedulaPasajero?: StringWithAggregatesFilter<"Boleto"> | string
    nombrePasajero?: StringWithAggregatesFilter<"Boleto"> | string
    tipoTarifa?: EnumTipoTarifaWithAggregatesFilter<"Boleto"> | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoWithAggregatesFilter<"Boleto"> | $Enums.EstadoBoleto
    expiraEn?: DateTimeWithAggregatesFilter<"Boleto"> | Date | string
    creadoEn?: DateTimeWithAggregatesFilter<"Boleto"> | Date | string
  }

  export type PagoPasajeroWhereInput = {
    AND?: PagoPasajeroWhereInput | PagoPasajeroWhereInput[]
    OR?: PagoPasajeroWhereInput[]
    NOT?: PagoPasajeroWhereInput | PagoPasajeroWhereInput[]
    id?: IntFilter<"PagoPasajero"> | number
    compraId?: IntFilter<"PagoPasajero"> | number
    monto?: DecimalFilter<"PagoPasajero"> | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFilter<"PagoPasajero"> | $Enums.MetodoPago
    estado?: EnumEstadoPagoFilter<"PagoPasajero"> | $Enums.EstadoPago
    pagadoEn?: DateTimeNullableFilter<"PagoPasajero"> | Date | string | null
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    pagoTarjeta?: XOR<PagoTarjetaNullableRelationFilter, PagoTarjetaWhereInput> | null
    pagoTransferencia?: XOR<PagoTransferenciaNullableRelationFilter, PagoTransferenciaWhereInput> | null
    pagoEfectivo?: XOR<PagoEfectivoNullableRelationFilter, PagoEfectivoWhereInput> | null
  }

  export type PagoPasajeroOrderByWithRelationInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
    pagadoEn?: SortOrderInput | SortOrder
    compra?: CompraOrderByWithRelationInput
    pagoTarjeta?: PagoTarjetaOrderByWithRelationInput
    pagoTransferencia?: PagoTransferenciaOrderByWithRelationInput
    pagoEfectivo?: PagoEfectivoOrderByWithRelationInput
  }

  export type PagoPasajeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    compraId?: number
    AND?: PagoPasajeroWhereInput | PagoPasajeroWhereInput[]
    OR?: PagoPasajeroWhereInput[]
    NOT?: PagoPasajeroWhereInput | PagoPasajeroWhereInput[]
    monto?: DecimalFilter<"PagoPasajero"> | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFilter<"PagoPasajero"> | $Enums.MetodoPago
    estado?: EnumEstadoPagoFilter<"PagoPasajero"> | $Enums.EstadoPago
    pagadoEn?: DateTimeNullableFilter<"PagoPasajero"> | Date | string | null
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    pagoTarjeta?: XOR<PagoTarjetaNullableRelationFilter, PagoTarjetaWhereInput> | null
    pagoTransferencia?: XOR<PagoTransferenciaNullableRelationFilter, PagoTransferenciaWhereInput> | null
    pagoEfectivo?: XOR<PagoEfectivoNullableRelationFilter, PagoEfectivoWhereInput> | null
  }, "id" | "compraId">

  export type PagoPasajeroOrderByWithAggregationInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
    pagadoEn?: SortOrderInput | SortOrder
    _count?: PagoPasajeroCountOrderByAggregateInput
    _avg?: PagoPasajeroAvgOrderByAggregateInput
    _max?: PagoPasajeroMaxOrderByAggregateInput
    _min?: PagoPasajeroMinOrderByAggregateInput
    _sum?: PagoPasajeroSumOrderByAggregateInput
  }

  export type PagoPasajeroScalarWhereWithAggregatesInput = {
    AND?: PagoPasajeroScalarWhereWithAggregatesInput | PagoPasajeroScalarWhereWithAggregatesInput[]
    OR?: PagoPasajeroScalarWhereWithAggregatesInput[]
    NOT?: PagoPasajeroScalarWhereWithAggregatesInput | PagoPasajeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoPasajero"> | number
    compraId?: IntWithAggregatesFilter<"PagoPasajero"> | number
    monto?: DecimalWithAggregatesFilter<"PagoPasajero"> | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoWithAggregatesFilter<"PagoPasajero"> | $Enums.MetodoPago
    estado?: EnumEstadoPagoWithAggregatesFilter<"PagoPasajero"> | $Enums.EstadoPago
    pagadoEn?: DateTimeNullableWithAggregatesFilter<"PagoPasajero"> | Date | string | null
  }

  export type PagoTarjetaWhereInput = {
    AND?: PagoTarjetaWhereInput | PagoTarjetaWhereInput[]
    OR?: PagoTarjetaWhereInput[]
    NOT?: PagoTarjetaWhereInput | PagoTarjetaWhereInput[]
    id?: IntFilter<"PagoTarjeta"> | number
    pagoId?: IntFilter<"PagoTarjeta"> | number
    ultimos4?: StringFilter<"PagoTarjeta"> | string
    marca?: StringFilter<"PagoTarjeta"> | string
    referenciaPasarela?: StringFilter<"PagoTarjeta"> | string
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
  }

  export type PagoTarjetaOrderByWithRelationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    ultimos4?: SortOrder
    marca?: SortOrder
    referenciaPasarela?: SortOrder
    pago?: PagoPasajeroOrderByWithRelationInput
  }

  export type PagoTarjetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pagoId?: number
    AND?: PagoTarjetaWhereInput | PagoTarjetaWhereInput[]
    OR?: PagoTarjetaWhereInput[]
    NOT?: PagoTarjetaWhereInput | PagoTarjetaWhereInput[]
    ultimos4?: StringFilter<"PagoTarjeta"> | string
    marca?: StringFilter<"PagoTarjeta"> | string
    referenciaPasarela?: StringFilter<"PagoTarjeta"> | string
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
  }, "id" | "pagoId">

  export type PagoTarjetaOrderByWithAggregationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    ultimos4?: SortOrder
    marca?: SortOrder
    referenciaPasarela?: SortOrder
    _count?: PagoTarjetaCountOrderByAggregateInput
    _avg?: PagoTarjetaAvgOrderByAggregateInput
    _max?: PagoTarjetaMaxOrderByAggregateInput
    _min?: PagoTarjetaMinOrderByAggregateInput
    _sum?: PagoTarjetaSumOrderByAggregateInput
  }

  export type PagoTarjetaScalarWhereWithAggregatesInput = {
    AND?: PagoTarjetaScalarWhereWithAggregatesInput | PagoTarjetaScalarWhereWithAggregatesInput[]
    OR?: PagoTarjetaScalarWhereWithAggregatesInput[]
    NOT?: PagoTarjetaScalarWhereWithAggregatesInput | PagoTarjetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoTarjeta"> | number
    pagoId?: IntWithAggregatesFilter<"PagoTarjeta"> | number
    ultimos4?: StringWithAggregatesFilter<"PagoTarjeta"> | string
    marca?: StringWithAggregatesFilter<"PagoTarjeta"> | string
    referenciaPasarela?: StringWithAggregatesFilter<"PagoTarjeta"> | string
  }

  export type PagoTransferenciaWhereInput = {
    AND?: PagoTransferenciaWhereInput | PagoTransferenciaWhereInput[]
    OR?: PagoTransferenciaWhereInput[]
    NOT?: PagoTransferenciaWhereInput | PagoTransferenciaWhereInput[]
    id?: IntFilter<"PagoTransferencia"> | number
    pagoId?: IntFilter<"PagoTransferencia"> | number
    banco?: StringFilter<"PagoTransferencia"> | string
    referencia?: StringFilter<"PagoTransferencia"> | string
    comprobanteUrl?: StringNullableFilter<"PagoTransferencia"> | string | null
    estado?: EnumEstadoTransferenciaFilter<"PagoTransferencia"> | $Enums.EstadoTransferencia
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
    aprobacion?: XOR<AprobacionNullableRelationFilter, AprobacionWhereInput> | null
  }

  export type PagoTransferenciaOrderByWithRelationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    banco?: SortOrder
    referencia?: SortOrder
    comprobanteUrl?: SortOrderInput | SortOrder
    estado?: SortOrder
    pago?: PagoPasajeroOrderByWithRelationInput
    aprobacion?: AprobacionOrderByWithRelationInput
  }

  export type PagoTransferenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pagoId?: number
    AND?: PagoTransferenciaWhereInput | PagoTransferenciaWhereInput[]
    OR?: PagoTransferenciaWhereInput[]
    NOT?: PagoTransferenciaWhereInput | PagoTransferenciaWhereInput[]
    banco?: StringFilter<"PagoTransferencia"> | string
    referencia?: StringFilter<"PagoTransferencia"> | string
    comprobanteUrl?: StringNullableFilter<"PagoTransferencia"> | string | null
    estado?: EnumEstadoTransferenciaFilter<"PagoTransferencia"> | $Enums.EstadoTransferencia
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
    aprobacion?: XOR<AprobacionNullableRelationFilter, AprobacionWhereInput> | null
  }, "id" | "pagoId">

  export type PagoTransferenciaOrderByWithAggregationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    banco?: SortOrder
    referencia?: SortOrder
    comprobanteUrl?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: PagoTransferenciaCountOrderByAggregateInput
    _avg?: PagoTransferenciaAvgOrderByAggregateInput
    _max?: PagoTransferenciaMaxOrderByAggregateInput
    _min?: PagoTransferenciaMinOrderByAggregateInput
    _sum?: PagoTransferenciaSumOrderByAggregateInput
  }

  export type PagoTransferenciaScalarWhereWithAggregatesInput = {
    AND?: PagoTransferenciaScalarWhereWithAggregatesInput | PagoTransferenciaScalarWhereWithAggregatesInput[]
    OR?: PagoTransferenciaScalarWhereWithAggregatesInput[]
    NOT?: PagoTransferenciaScalarWhereWithAggregatesInput | PagoTransferenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoTransferencia"> | number
    pagoId?: IntWithAggregatesFilter<"PagoTransferencia"> | number
    banco?: StringWithAggregatesFilter<"PagoTransferencia"> | string
    referencia?: StringWithAggregatesFilter<"PagoTransferencia"> | string
    comprobanteUrl?: StringNullableWithAggregatesFilter<"PagoTransferencia"> | string | null
    estado?: EnumEstadoTransferenciaWithAggregatesFilter<"PagoTransferencia"> | $Enums.EstadoTransferencia
  }

  export type AprobacionWhereInput = {
    AND?: AprobacionWhereInput | AprobacionWhereInput[]
    OR?: AprobacionWhereInput[]
    NOT?: AprobacionWhereInput | AprobacionWhereInput[]
    id?: IntFilter<"Aprobacion"> | number
    pagoTransferenciaId?: IntFilter<"Aprobacion"> | number
    oficinistaId?: IntFilter<"Aprobacion"> | number
    estado?: EnumEstadoAprobacionFilter<"Aprobacion"> | $Enums.EstadoAprobacion
    observacion?: StringNullableFilter<"Aprobacion"> | string | null
    revisadoEn?: DateTimeFilter<"Aprobacion"> | Date | string
    pagoTransferencia?: XOR<PagoTransferenciaRelationFilter, PagoTransferenciaWhereInput>
  }

  export type AprobacionOrderByWithRelationInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
    estado?: SortOrder
    observacion?: SortOrderInput | SortOrder
    revisadoEn?: SortOrder
    pagoTransferencia?: PagoTransferenciaOrderByWithRelationInput
  }

  export type AprobacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pagoTransferenciaId?: number
    AND?: AprobacionWhereInput | AprobacionWhereInput[]
    OR?: AprobacionWhereInput[]
    NOT?: AprobacionWhereInput | AprobacionWhereInput[]
    oficinistaId?: IntFilter<"Aprobacion"> | number
    estado?: EnumEstadoAprobacionFilter<"Aprobacion"> | $Enums.EstadoAprobacion
    observacion?: StringNullableFilter<"Aprobacion"> | string | null
    revisadoEn?: DateTimeFilter<"Aprobacion"> | Date | string
    pagoTransferencia?: XOR<PagoTransferenciaRelationFilter, PagoTransferenciaWhereInput>
  }, "id" | "pagoTransferenciaId">

  export type AprobacionOrderByWithAggregationInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
    estado?: SortOrder
    observacion?: SortOrderInput | SortOrder
    revisadoEn?: SortOrder
    _count?: AprobacionCountOrderByAggregateInput
    _avg?: AprobacionAvgOrderByAggregateInput
    _max?: AprobacionMaxOrderByAggregateInput
    _min?: AprobacionMinOrderByAggregateInput
    _sum?: AprobacionSumOrderByAggregateInput
  }

  export type AprobacionScalarWhereWithAggregatesInput = {
    AND?: AprobacionScalarWhereWithAggregatesInput | AprobacionScalarWhereWithAggregatesInput[]
    OR?: AprobacionScalarWhereWithAggregatesInput[]
    NOT?: AprobacionScalarWhereWithAggregatesInput | AprobacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Aprobacion"> | number
    pagoTransferenciaId?: IntWithAggregatesFilter<"Aprobacion"> | number
    oficinistaId?: IntWithAggregatesFilter<"Aprobacion"> | number
    estado?: EnumEstadoAprobacionWithAggregatesFilter<"Aprobacion"> | $Enums.EstadoAprobacion
    observacion?: StringNullableWithAggregatesFilter<"Aprobacion"> | string | null
    revisadoEn?: DateTimeWithAggregatesFilter<"Aprobacion"> | Date | string
  }

  export type PagoEfectivoWhereInput = {
    AND?: PagoEfectivoWhereInput | PagoEfectivoWhereInput[]
    OR?: PagoEfectivoWhereInput[]
    NOT?: PagoEfectivoWhereInput | PagoEfectivoWhereInput[]
    id?: IntFilter<"PagoEfectivo"> | number
    pagoId?: IntFilter<"PagoEfectivo"> | number
    vendedorId?: IntFilter<"PagoEfectivo"> | number
    montoRecibido?: DecimalFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFilter<"PagoEfectivo"> | $Enums.CanalEfectivo
    turnoId?: IntNullableFilter<"PagoEfectivo"> | number | null
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
  }

  export type PagoEfectivoOrderByWithRelationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    canalVenta?: SortOrder
    turnoId?: SortOrderInput | SortOrder
    pago?: PagoPasajeroOrderByWithRelationInput
  }

  export type PagoEfectivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pagoId?: number
    AND?: PagoEfectivoWhereInput | PagoEfectivoWhereInput[]
    OR?: PagoEfectivoWhereInput[]
    NOT?: PagoEfectivoWhereInput | PagoEfectivoWhereInput[]
    vendedorId?: IntFilter<"PagoEfectivo"> | number
    montoRecibido?: DecimalFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFilter<"PagoEfectivo"> | $Enums.CanalEfectivo
    turnoId?: IntNullableFilter<"PagoEfectivo"> | number | null
    pago?: XOR<PagoPasajeroRelationFilter, PagoPasajeroWhereInput>
  }, "id" | "pagoId">

  export type PagoEfectivoOrderByWithAggregationInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    canalVenta?: SortOrder
    turnoId?: SortOrderInput | SortOrder
    _count?: PagoEfectivoCountOrderByAggregateInput
    _avg?: PagoEfectivoAvgOrderByAggregateInput
    _max?: PagoEfectivoMaxOrderByAggregateInput
    _min?: PagoEfectivoMinOrderByAggregateInput
    _sum?: PagoEfectivoSumOrderByAggregateInput
  }

  export type PagoEfectivoScalarWhereWithAggregatesInput = {
    AND?: PagoEfectivoScalarWhereWithAggregatesInput | PagoEfectivoScalarWhereWithAggregatesInput[]
    OR?: PagoEfectivoScalarWhereWithAggregatesInput[]
    NOT?: PagoEfectivoScalarWhereWithAggregatesInput | PagoEfectivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PagoEfectivo"> | number
    pagoId?: IntWithAggregatesFilter<"PagoEfectivo"> | number
    vendedorId?: IntWithAggregatesFilter<"PagoEfectivo"> | number
    montoRecibido?: DecimalWithAggregatesFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    cambio?: DecimalWithAggregatesFilter<"PagoEfectivo"> | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoWithAggregatesFilter<"PagoEfectivo"> | $Enums.CanalEfectivo
    turnoId?: IntNullableWithAggregatesFilter<"PagoEfectivo"> | number | null
  }

  export type EscaneoWhereInput = {
    AND?: EscaneoWhereInput | EscaneoWhereInput[]
    OR?: EscaneoWhereInput[]
    NOT?: EscaneoWhereInput | EscaneoWhereInput[]
    id?: IntFilter<"Escaneo"> | number
    boletoId?: IntFilter<"Escaneo"> | number
    oficialId?: IntFilter<"Escaneo"> | number
    busId?: IntFilter<"Escaneo"> | number
    turnoId?: IntFilter<"Escaneo"> | number
    resultado?: EnumResultadoEscaneoFilter<"Escaneo"> | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFilter<"Escaneo"> | Date | string
    boleto?: XOR<BoletoRelationFilter, BoletoWhereInput>
  }

  export type EscaneoOrderByWithRelationInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
    resultado?: SortOrder
    escaneadoEn?: SortOrder
    boleto?: BoletoOrderByWithRelationInput
  }

  export type EscaneoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    boletoId?: number
    AND?: EscaneoWhereInput | EscaneoWhereInput[]
    OR?: EscaneoWhereInput[]
    NOT?: EscaneoWhereInput | EscaneoWhereInput[]
    oficialId?: IntFilter<"Escaneo"> | number
    busId?: IntFilter<"Escaneo"> | number
    turnoId?: IntFilter<"Escaneo"> | number
    resultado?: EnumResultadoEscaneoFilter<"Escaneo"> | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFilter<"Escaneo"> | Date | string
    boleto?: XOR<BoletoRelationFilter, BoletoWhereInput>
  }, "id" | "boletoId">

  export type EscaneoOrderByWithAggregationInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
    resultado?: SortOrder
    escaneadoEn?: SortOrder
    _count?: EscaneoCountOrderByAggregateInput
    _avg?: EscaneoAvgOrderByAggregateInput
    _max?: EscaneoMaxOrderByAggregateInput
    _min?: EscaneoMinOrderByAggregateInput
    _sum?: EscaneoSumOrderByAggregateInput
  }

  export type EscaneoScalarWhereWithAggregatesInput = {
    AND?: EscaneoScalarWhereWithAggregatesInput | EscaneoScalarWhereWithAggregatesInput[]
    OR?: EscaneoScalarWhereWithAggregatesInput[]
    NOT?: EscaneoScalarWhereWithAggregatesInput | EscaneoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Escaneo"> | number
    boletoId?: IntWithAggregatesFilter<"Escaneo"> | number
    oficialId?: IntWithAggregatesFilter<"Escaneo"> | number
    busId?: IntWithAggregatesFilter<"Escaneo"> | number
    turnoId?: IntWithAggregatesFilter<"Escaneo"> | number
    resultado?: EnumResultadoEscaneoWithAggregatesFilter<"Escaneo"> | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeWithAggregatesFilter<"Escaneo"> | Date | string
  }

  export type BoletoParadaWhereInput = {
    AND?: BoletoParadaWhereInput | BoletoParadaWhereInput[]
    OR?: BoletoParadaWhereInput[]
    NOT?: BoletoParadaWhereInput | BoletoParadaWhereInput[]
    id?: IntFilter<"BoletoParada"> | number
    boletoId?: IntFilter<"BoletoParada"> | number
    paradaOrigenId?: IntFilter<"BoletoParada"> | number
    paradaDestinoId?: IntFilter<"BoletoParada"> | number
    estado?: EnumEstadoBoletoParadaFilter<"BoletoParada"> | $Enums.EstadoBoletoParada
    boleto?: XOR<BoletoRelationFilter, BoletoWhereInput>
    alertasGps?: AlertaGpsListRelationFilter
  }

  export type BoletoParadaOrderByWithRelationInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
    estado?: SortOrder
    boleto?: BoletoOrderByWithRelationInput
    alertasGps?: AlertaGpsOrderByRelationAggregateInput
  }

  export type BoletoParadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    boletoId?: number
    AND?: BoletoParadaWhereInput | BoletoParadaWhereInput[]
    OR?: BoletoParadaWhereInput[]
    NOT?: BoletoParadaWhereInput | BoletoParadaWhereInput[]
    paradaOrigenId?: IntFilter<"BoletoParada"> | number
    paradaDestinoId?: IntFilter<"BoletoParada"> | number
    estado?: EnumEstadoBoletoParadaFilter<"BoletoParada"> | $Enums.EstadoBoletoParada
    boleto?: XOR<BoletoRelationFilter, BoletoWhereInput>
    alertasGps?: AlertaGpsListRelationFilter
  }, "id" | "boletoId">

  export type BoletoParadaOrderByWithAggregationInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
    estado?: SortOrder
    _count?: BoletoParadaCountOrderByAggregateInput
    _avg?: BoletoParadaAvgOrderByAggregateInput
    _max?: BoletoParadaMaxOrderByAggregateInput
    _min?: BoletoParadaMinOrderByAggregateInput
    _sum?: BoletoParadaSumOrderByAggregateInput
  }

  export type BoletoParadaScalarWhereWithAggregatesInput = {
    AND?: BoletoParadaScalarWhereWithAggregatesInput | BoletoParadaScalarWhereWithAggregatesInput[]
    OR?: BoletoParadaScalarWhereWithAggregatesInput[]
    NOT?: BoletoParadaScalarWhereWithAggregatesInput | BoletoParadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BoletoParada"> | number
    boletoId?: IntWithAggregatesFilter<"BoletoParada"> | number
    paradaOrigenId?: IntWithAggregatesFilter<"BoletoParada"> | number
    paradaDestinoId?: IntWithAggregatesFilter<"BoletoParada"> | number
    estado?: EnumEstadoBoletoParadaWithAggregatesFilter<"BoletoParada"> | $Enums.EstadoBoletoParada
  }

  export type AlertaGpsWhereInput = {
    AND?: AlertaGpsWhereInput | AlertaGpsWhereInput[]
    OR?: AlertaGpsWhereInput[]
    NOT?: AlertaGpsWhereInput | AlertaGpsWhereInput[]
    id?: IntFilter<"AlertaGps"> | number
    boletoParadaId?: IntFilter<"AlertaGps"> | number
    turnoId?: IntFilter<"AlertaGps"> | number
    latActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFilter<"AlertaGps"> | number
    estado?: EnumEstadoAlertaFilter<"AlertaGps"> | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFilter<"AlertaGps"> | Date | string
    boletoParada?: XOR<BoletoParadaRelationFilter, BoletoParadaWhereInput>
  }

  export type AlertaGpsOrderByWithRelationInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
    estado?: SortOrder
    actualizadoEn?: SortOrder
    boletoParada?: BoletoParadaOrderByWithRelationInput
  }

  export type AlertaGpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertaGpsWhereInput | AlertaGpsWhereInput[]
    OR?: AlertaGpsWhereInput[]
    NOT?: AlertaGpsWhereInput | AlertaGpsWhereInput[]
    boletoParadaId?: IntFilter<"AlertaGps"> | number
    turnoId?: IntFilter<"AlertaGps"> | number
    latActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFilter<"AlertaGps"> | number
    estado?: EnumEstadoAlertaFilter<"AlertaGps"> | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFilter<"AlertaGps"> | Date | string
    boletoParada?: XOR<BoletoParadaRelationFilter, BoletoParadaWhereInput>
  }, "id">

  export type AlertaGpsOrderByWithAggregationInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
    estado?: SortOrder
    actualizadoEn?: SortOrder
    _count?: AlertaGpsCountOrderByAggregateInput
    _avg?: AlertaGpsAvgOrderByAggregateInput
    _max?: AlertaGpsMaxOrderByAggregateInput
    _min?: AlertaGpsMinOrderByAggregateInput
    _sum?: AlertaGpsSumOrderByAggregateInput
  }

  export type AlertaGpsScalarWhereWithAggregatesInput = {
    AND?: AlertaGpsScalarWhereWithAggregatesInput | AlertaGpsScalarWhereWithAggregatesInput[]
    OR?: AlertaGpsScalarWhereWithAggregatesInput[]
    NOT?: AlertaGpsScalarWhereWithAggregatesInput | AlertaGpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlertaGps"> | number
    boletoParadaId?: IntWithAggregatesFilter<"AlertaGps"> | number
    turnoId?: IntWithAggregatesFilter<"AlertaGps"> | number
    latActual?: DecimalWithAggregatesFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalWithAggregatesFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntWithAggregatesFilter<"AlertaGps"> | number
    estado?: EnumEstadoAlertaWithAggregatesFilter<"AlertaGps"> | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeWithAggregatesFilter<"AlertaGps"> | Date | string
  }

  export type CompraCreateInput = {
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    boletos?: BoletoCreateNestedManyWithoutCompraInput
    pago?: PagoPasajeroCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    id?: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutCompraInput
    pago?: PagoPasajeroUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutCompraNestedInput
    pago?: PagoPasajeroUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutCompraNestedInput
    pago?: PagoPasajeroUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    id?: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
  }

  export type CompraUpdateManyMutationInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoCreateInput = {
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    compra: CompraCreateNestedOneWithoutBoletosInput
    escaneo?: EscaneoCreateNestedOneWithoutBoletoInput
    boletoParada?: BoletoParadaCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUncheckedCreateInput = {
    id?: number
    compraId: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    escaneo?: EscaneoUncheckedCreateNestedOneWithoutBoletoInput
    boletoParada?: BoletoParadaUncheckedCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUpdateInput = {
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    compra?: CompraUpdateOneRequiredWithoutBoletosNestedInput
    escaneo?: EscaneoUpdateOneWithoutBoletoNestedInput
    boletoParada?: BoletoParadaUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    escaneo?: EscaneoUncheckedUpdateOneWithoutBoletoNestedInput
    boletoParada?: BoletoParadaUncheckedUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoCreateManyInput = {
    id?: number
    compraId: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
  }

  export type BoletoUpdateManyMutationInput = {
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoPasajeroCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    compra: CompraCreateNestedOneWithoutPagoInput
    pagoTarjeta?: PagoTarjetaCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUncheckedCreateInput = {
    id?: number
    compraId: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaUncheckedCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoUncheckedCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compra?: CompraUpdateOneRequiredWithoutPagoNestedInput
    pagoTarjeta?: PagoTarjetaUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUncheckedUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUncheckedUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroCreateManyInput = {
    id?: number
    compraId: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
  }

  export type PagoPasajeroUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagoPasajeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagoTarjetaCreateInput = {
    ultimos4: string
    marca: string
    referenciaPasarela: string
    pago: PagoPasajeroCreateNestedOneWithoutPagoTarjetaInput
  }

  export type PagoTarjetaUncheckedCreateInput = {
    id?: number
    pagoId: number
    ultimos4: string
    marca: string
    referenciaPasarela: string
  }

  export type PagoTarjetaUpdateInput = {
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
    pago?: PagoPasajeroUpdateOneRequiredWithoutPagoTarjetaNestedInput
  }

  export type PagoTarjetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
  }

  export type PagoTarjetaCreateManyInput = {
    id?: number
    pagoId: number
    ultimos4: string
    marca: string
    referenciaPasarela: string
  }

  export type PagoTarjetaUpdateManyMutationInput = {
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
  }

  export type PagoTarjetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
  }

  export type PagoTransferenciaCreateInput = {
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
    pago: PagoPasajeroCreateNestedOneWithoutPagoTransferenciaInput
    aprobacion?: AprobacionCreateNestedOneWithoutPagoTransferenciaInput
  }

  export type PagoTransferenciaUncheckedCreateInput = {
    id?: number
    pagoId: number
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
    aprobacion?: AprobacionUncheckedCreateNestedOneWithoutPagoTransferenciaInput
  }

  export type PagoTransferenciaUpdateInput = {
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
    pago?: PagoPasajeroUpdateOneRequiredWithoutPagoTransferenciaNestedInput
    aprobacion?: AprobacionUpdateOneWithoutPagoTransferenciaNestedInput
  }

  export type PagoTransferenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
    aprobacion?: AprobacionUncheckedUpdateOneWithoutPagoTransferenciaNestedInput
  }

  export type PagoTransferenciaCreateManyInput = {
    id?: number
    pagoId: number
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
  }

  export type PagoTransferenciaUpdateManyMutationInput = {
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
  }

  export type PagoTransferenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
  }

  export type AprobacionCreateInput = {
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion?: string | null
    revisadoEn?: Date | string
    pagoTransferencia: PagoTransferenciaCreateNestedOneWithoutAprobacionInput
  }

  export type AprobacionUncheckedCreateInput = {
    id?: number
    pagoTransferenciaId: number
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion?: string | null
    revisadoEn?: Date | string
  }

  export type AprobacionUpdateInput = {
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    pagoTransferencia?: PagoTransferenciaUpdateOneRequiredWithoutAprobacionNestedInput
  }

  export type AprobacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoTransferenciaId?: IntFieldUpdateOperationsInput | number
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AprobacionCreateManyInput = {
    id?: number
    pagoTransferenciaId: number
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion?: string | null
    revisadoEn?: Date | string
  }

  export type AprobacionUpdateManyMutationInput = {
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AprobacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoTransferenciaId?: IntFieldUpdateOperationsInput | number
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoEfectivoCreateInput = {
    vendedorId: number
    montoRecibido: Decimal | DecimalJsLike | number | string
    cambio: Decimal | DecimalJsLike | number | string
    canalVenta: $Enums.CanalEfectivo
    turnoId?: number | null
    pago: PagoPasajeroCreateNestedOneWithoutPagoEfectivoInput
  }

  export type PagoEfectivoUncheckedCreateInput = {
    id?: number
    pagoId: number
    vendedorId: number
    montoRecibido: Decimal | DecimalJsLike | number | string
    cambio: Decimal | DecimalJsLike | number | string
    canalVenta: $Enums.CanalEfectivo
    turnoId?: number | null
  }

  export type PagoEfectivoUpdateInput = {
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
    pago?: PagoPasajeroUpdateOneRequiredWithoutPagoEfectivoNestedInput
  }

  export type PagoEfectivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PagoEfectivoCreateManyInput = {
    id?: number
    pagoId: number
    vendedorId: number
    montoRecibido: Decimal | DecimalJsLike | number | string
    cambio: Decimal | DecimalJsLike | number | string
    canalVenta: $Enums.CanalEfectivo
    turnoId?: number | null
  }

  export type PagoEfectivoUpdateManyMutationInput = {
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PagoEfectivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EscaneoCreateInput = {
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn?: Date | string
    boleto: BoletoCreateNestedOneWithoutEscaneoInput
  }

  export type EscaneoUncheckedCreateInput = {
    id?: number
    boletoId: number
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn?: Date | string
  }

  export type EscaneoUpdateInput = {
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boleto?: BoletoUpdateOneRequiredWithoutEscaneoNestedInput
  }

  export type EscaneoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoId?: IntFieldUpdateOperationsInput | number
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscaneoCreateManyInput = {
    id?: number
    boletoId: number
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn?: Date | string
  }

  export type EscaneoUpdateManyMutationInput = {
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscaneoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoId?: IntFieldUpdateOperationsInput | number
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoParadaCreateInput = {
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
    boleto: BoletoCreateNestedOneWithoutBoletoParadaInput
    alertasGps?: AlertaGpsCreateNestedManyWithoutBoletoParadaInput
  }

  export type BoletoParadaUncheckedCreateInput = {
    id?: number
    boletoId: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsUncheckedCreateNestedManyWithoutBoletoParadaInput
  }

  export type BoletoParadaUpdateInput = {
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
    boleto?: BoletoUpdateOneRequiredWithoutBoletoParadaNestedInput
    alertasGps?: AlertaGpsUpdateManyWithoutBoletoParadaNestedInput
  }

  export type BoletoParadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoId?: IntFieldUpdateOperationsInput | number
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsUncheckedUpdateManyWithoutBoletoParadaNestedInput
  }

  export type BoletoParadaCreateManyInput = {
    id?: number
    boletoId: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
  }

  export type BoletoParadaUpdateManyMutationInput = {
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
  }

  export type BoletoParadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoId?: IntFieldUpdateOperationsInput | number
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
  }

  export type AlertaGpsCreateInput = {
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
    boletoParada: BoletoParadaCreateNestedOneWithoutAlertasGpsInput
  }

  export type AlertaGpsUncheckedCreateInput = {
    id?: number
    boletoParadaId: number
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
  }

  export type AlertaGpsUpdateInput = {
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletoParada?: BoletoParadaUpdateOneRequiredWithoutAlertasGpsNestedInput
  }

  export type AlertaGpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoParadaId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaGpsCreateManyInput = {
    id?: number
    boletoParadaId: number
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
  }

  export type AlertaGpsUpdateManyMutationInput = {
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaGpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoParadaId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumCanalVentaFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalVenta | EnumCanalVentaFieldRefInput<$PrismaModel>
    in?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalVentaFilter<$PrismaModel> | $Enums.CanalVenta
  }

  export type EnumEstadoCompraFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCompra | EnumEstadoCompraFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCompraFilter<$PrismaModel> | $Enums.EstadoCompra
  }

  export type BoletoListRelationFilter = {
    every?: BoletoWhereInput
    some?: BoletoWhereInput
    none?: BoletoWhereInput
  }

  export type PagoPasajeroNullableRelationFilter = {
    is?: PagoPasajeroWhereInput | null
    isNot?: PagoPasajeroWhereInput | null
  }

  export type BoletoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    fechaViaje?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    canal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    fechaViaje?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    canal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    fechaViaje?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    canal?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    frecuenciaId?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumCanalVentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalVenta | EnumCanalVentaFieldRefInput<$PrismaModel>
    in?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalVentaWithAggregatesFilter<$PrismaModel> | $Enums.CanalVenta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalVentaFilter<$PrismaModel>
    _max?: NestedEnumCanalVentaFilter<$PrismaModel>
  }

  export type EnumEstadoCompraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCompra | EnumEstadoCompraFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCompraWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCompra
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCompraFilter<$PrismaModel>
    _max?: NestedEnumEstadoCompraFilter<$PrismaModel>
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

  export type EnumTipoTarifaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTarifa | EnumTipoTarifaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTarifaFilter<$PrismaModel> | $Enums.TipoTarifa
  }

  export type EnumEstadoBoletoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoleto | EnumEstadoBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoFilter<$PrismaModel> | $Enums.EstadoBoleto
  }

  export type CompraRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type EscaneoNullableRelationFilter = {
    is?: EscaneoWhereInput | null
    isNot?: EscaneoWhereInput | null
  }

  export type BoletoParadaNullableRelationFilter = {
    is?: BoletoParadaWhereInput | null
    isNot?: BoletoParadaWhereInput | null
  }

  export type BoletoCountOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    uuidQr?: SortOrder
    cedulaPasajero?: SortOrder
    nombrePasajero?: SortOrder
    tipoTarifa?: SortOrder
    estado?: SortOrder
    expiraEn?: SortOrder
    creadoEn?: SortOrder
  }

  export type BoletoAvgOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
  }

  export type BoletoMaxOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    uuidQr?: SortOrder
    cedulaPasajero?: SortOrder
    nombrePasajero?: SortOrder
    tipoTarifa?: SortOrder
    estado?: SortOrder
    expiraEn?: SortOrder
    creadoEn?: SortOrder
  }

  export type BoletoMinOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    uuidQr?: SortOrder
    cedulaPasajero?: SortOrder
    nombrePasajero?: SortOrder
    tipoTarifa?: SortOrder
    estado?: SortOrder
    expiraEn?: SortOrder
    creadoEn?: SortOrder
  }

  export type BoletoSumOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
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

  export type EnumTipoTarifaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTarifa | EnumTipoTarifaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTarifaWithAggregatesFilter<$PrismaModel> | $Enums.TipoTarifa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTarifaFilter<$PrismaModel>
    _max?: NestedEnumTipoTarifaFilter<$PrismaModel>
  }

  export type EnumEstadoBoletoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoleto | EnumEstadoBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBoleto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBoletoFilter<$PrismaModel>
    _max?: NestedEnumEstadoBoletoFilter<$PrismaModel>
  }

  export type EnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type EnumEstadoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPago | EnumEstadoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPagoFilter<$PrismaModel> | $Enums.EstadoPago
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

  export type PagoTarjetaNullableRelationFilter = {
    is?: PagoTarjetaWhereInput | null
    isNot?: PagoTarjetaWhereInput | null
  }

  export type PagoTransferenciaNullableRelationFilter = {
    is?: PagoTransferenciaWhereInput | null
    isNot?: PagoTransferenciaWhereInput | null
  }

  export type PagoEfectivoNullableRelationFilter = {
    is?: PagoEfectivoWhereInput | null
    isNot?: PagoEfectivoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PagoPasajeroCountOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
    pagadoEn?: SortOrder
  }

  export type PagoPasajeroAvgOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
  }

  export type PagoPasajeroMaxOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
    pagadoEn?: SortOrder
  }

  export type PagoPasajeroMinOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
    pagadoEn?: SortOrder
  }

  export type PagoPasajeroSumOrderByAggregateInput = {
    id?: SortOrder
    compraId?: SortOrder
    monto?: SortOrder
  }

  export type EnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type EnumEstadoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPago | EnumEstadoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPagoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPagoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPagoFilter<$PrismaModel>
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

  export type PagoPasajeroRelationFilter = {
    is?: PagoPasajeroWhereInput
    isNot?: PagoPasajeroWhereInput
  }

  export type PagoTarjetaCountOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    ultimos4?: SortOrder
    marca?: SortOrder
    referenciaPasarela?: SortOrder
  }

  export type PagoTarjetaAvgOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
  }

  export type PagoTarjetaMaxOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    ultimos4?: SortOrder
    marca?: SortOrder
    referenciaPasarela?: SortOrder
  }

  export type PagoTarjetaMinOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    ultimos4?: SortOrder
    marca?: SortOrder
    referenciaPasarela?: SortOrder
  }

  export type PagoTarjetaSumOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
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

  export type EnumEstadoTransferenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransferencia | EnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTransferenciaFilter<$PrismaModel> | $Enums.EstadoTransferencia
  }

  export type AprobacionNullableRelationFilter = {
    is?: AprobacionWhereInput | null
    isNot?: AprobacionWhereInput | null
  }

  export type PagoTransferenciaCountOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    banco?: SortOrder
    referencia?: SortOrder
    comprobanteUrl?: SortOrder
    estado?: SortOrder
  }

  export type PagoTransferenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
  }

  export type PagoTransferenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    banco?: SortOrder
    referencia?: SortOrder
    comprobanteUrl?: SortOrder
    estado?: SortOrder
  }

  export type PagoTransferenciaMinOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    banco?: SortOrder
    referencia?: SortOrder
    comprobanteUrl?: SortOrder
    estado?: SortOrder
  }

  export type PagoTransferenciaSumOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
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

  export type EnumEstadoTransferenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransferencia | EnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTransferenciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTransferencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTransferenciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoTransferenciaFilter<$PrismaModel>
  }

  export type EnumEstadoAprobacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAprobacion | EnumEstadoAprobacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAprobacionFilter<$PrismaModel> | $Enums.EstadoAprobacion
  }

  export type PagoTransferenciaRelationFilter = {
    is?: PagoTransferenciaWhereInput
    isNot?: PagoTransferenciaWhereInput
  }

  export type AprobacionCountOrderByAggregateInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
    estado?: SortOrder
    observacion?: SortOrder
    revisadoEn?: SortOrder
  }

  export type AprobacionAvgOrderByAggregateInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
  }

  export type AprobacionMaxOrderByAggregateInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
    estado?: SortOrder
    observacion?: SortOrder
    revisadoEn?: SortOrder
  }

  export type AprobacionMinOrderByAggregateInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
    estado?: SortOrder
    observacion?: SortOrder
    revisadoEn?: SortOrder
  }

  export type AprobacionSumOrderByAggregateInput = {
    id?: SortOrder
    pagoTransferenciaId?: SortOrder
    oficinistaId?: SortOrder
  }

  export type EnumEstadoAprobacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAprobacion | EnumEstadoAprobacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAprobacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAprobacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAprobacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoAprobacionFilter<$PrismaModel>
  }

  export type EnumCanalEfectivoFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalEfectivo | EnumCanalEfectivoFieldRefInput<$PrismaModel>
    in?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalEfectivoFilter<$PrismaModel> | $Enums.CanalEfectivo
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

  export type PagoEfectivoCountOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    canalVenta?: SortOrder
    turnoId?: SortOrder
  }

  export type PagoEfectivoAvgOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    turnoId?: SortOrder
  }

  export type PagoEfectivoMaxOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    canalVenta?: SortOrder
    turnoId?: SortOrder
  }

  export type PagoEfectivoMinOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    canalVenta?: SortOrder
    turnoId?: SortOrder
  }

  export type PagoEfectivoSumOrderByAggregateInput = {
    id?: SortOrder
    pagoId?: SortOrder
    vendedorId?: SortOrder
    montoRecibido?: SortOrder
    cambio?: SortOrder
    turnoId?: SortOrder
  }

  export type EnumCanalEfectivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalEfectivo | EnumCanalEfectivoFieldRefInput<$PrismaModel>
    in?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalEfectivoWithAggregatesFilter<$PrismaModel> | $Enums.CanalEfectivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalEfectivoFilter<$PrismaModel>
    _max?: NestedEnumCanalEfectivoFilter<$PrismaModel>
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

  export type EnumResultadoEscaneoFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoEscaneo | EnumResultadoEscaneoFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoEscaneoFilter<$PrismaModel> | $Enums.ResultadoEscaneo
  }

  export type BoletoRelationFilter = {
    is?: BoletoWhereInput
    isNot?: BoletoWhereInput
  }

  export type EscaneoCountOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
    resultado?: SortOrder
    escaneadoEn?: SortOrder
  }

  export type EscaneoAvgOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
  }

  export type EscaneoMaxOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
    resultado?: SortOrder
    escaneadoEn?: SortOrder
  }

  export type EscaneoMinOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
    resultado?: SortOrder
    escaneadoEn?: SortOrder
  }

  export type EscaneoSumOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    oficialId?: SortOrder
    busId?: SortOrder
    turnoId?: SortOrder
  }

  export type EnumResultadoEscaneoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoEscaneo | EnumResultadoEscaneoFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoEscaneoWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoEscaneo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoEscaneoFilter<$PrismaModel>
    _max?: NestedEnumResultadoEscaneoFilter<$PrismaModel>
  }

  export type EnumEstadoBoletoParadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoletoParada | EnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel> | $Enums.EstadoBoletoParada
  }

  export type AlertaGpsListRelationFilter = {
    every?: AlertaGpsWhereInput
    some?: AlertaGpsWhereInput
    none?: AlertaGpsWhereInput
  }

  export type AlertaGpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoletoParadaCountOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
    estado?: SortOrder
  }

  export type BoletoParadaAvgOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
  }

  export type BoletoParadaMaxOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
    estado?: SortOrder
  }

  export type BoletoParadaMinOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
    estado?: SortOrder
  }

  export type BoletoParadaSumOrderByAggregateInput = {
    id?: SortOrder
    boletoId?: SortOrder
    paradaOrigenId?: SortOrder
    paradaDestinoId?: SortOrder
  }

  export type EnumEstadoBoletoParadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoletoParada | EnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoParadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBoletoParada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel>
  }

  export type EnumEstadoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaFilter<$PrismaModel> | $Enums.EstadoAlerta
  }

  export type BoletoParadaRelationFilter = {
    is?: BoletoParadaWhereInput
    isNot?: BoletoParadaWhereInput
  }

  export type AlertaGpsCountOrderByAggregateInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
    estado?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AlertaGpsAvgOrderByAggregateInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
  }

  export type AlertaGpsMaxOrderByAggregateInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
    estado?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AlertaGpsMinOrderByAggregateInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
    estado?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type AlertaGpsSumOrderByAggregateInput = {
    id?: SortOrder
    boletoParadaId?: SortOrder
    turnoId?: SortOrder
    latActual?: SortOrder
    lngActual?: SortOrder
    metrosRestantes?: SortOrder
  }

  export type EnumEstadoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAlertaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAlertaFilter<$PrismaModel>
  }

  export type BoletoCreateNestedManyWithoutCompraInput = {
    create?: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput> | BoletoCreateWithoutCompraInput[] | BoletoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompraInput | BoletoCreateOrConnectWithoutCompraInput[]
    createMany?: BoletoCreateManyCompraInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type PagoPasajeroCreateNestedOneWithoutCompraInput = {
    create?: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutCompraInput
    connect?: PagoPasajeroWhereUniqueInput
  }

  export type BoletoUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput> | BoletoCreateWithoutCompraInput[] | BoletoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompraInput | BoletoCreateOrConnectWithoutCompraInput[]
    createMany?: BoletoCreateManyCompraInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type PagoPasajeroUncheckedCreateNestedOneWithoutCompraInput = {
    create?: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutCompraInput
    connect?: PagoPasajeroWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCanalVentaFieldUpdateOperationsInput = {
    set?: $Enums.CanalVenta
  }

  export type EnumEstadoCompraFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCompra
  }

  export type BoletoUpdateManyWithoutCompraNestedInput = {
    create?: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput> | BoletoCreateWithoutCompraInput[] | BoletoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompraInput | BoletoCreateOrConnectWithoutCompraInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutCompraInput | BoletoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: BoletoCreateManyCompraInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutCompraInput | BoletoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutCompraInput | BoletoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type PagoPasajeroUpdateOneWithoutCompraNestedInput = {
    create?: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutCompraInput
    upsert?: PagoPasajeroUpsertWithoutCompraInput
    disconnect?: PagoPasajeroWhereInput | boolean
    delete?: PagoPasajeroWhereInput | boolean
    connect?: PagoPasajeroWhereUniqueInput
    update?: XOR<XOR<PagoPasajeroUpdateToOneWithWhereWithoutCompraInput, PagoPasajeroUpdateWithoutCompraInput>, PagoPasajeroUncheckedUpdateWithoutCompraInput>
  }

  export type BoletoUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput> | BoletoCreateWithoutCompraInput[] | BoletoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompraInput | BoletoCreateOrConnectWithoutCompraInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutCompraInput | BoletoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: BoletoCreateManyCompraInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutCompraInput | BoletoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutCompraInput | BoletoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type PagoPasajeroUncheckedUpdateOneWithoutCompraNestedInput = {
    create?: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutCompraInput
    upsert?: PagoPasajeroUpsertWithoutCompraInput
    disconnect?: PagoPasajeroWhereInput | boolean
    delete?: PagoPasajeroWhereInput | boolean
    connect?: PagoPasajeroWhereUniqueInput
    update?: XOR<XOR<PagoPasajeroUpdateToOneWithWhereWithoutCompraInput, PagoPasajeroUpdateWithoutCompraInput>, PagoPasajeroUncheckedUpdateWithoutCompraInput>
  }

  export type CompraCreateNestedOneWithoutBoletosInput = {
    create?: XOR<CompraCreateWithoutBoletosInput, CompraUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutBoletosInput
    connect?: CompraWhereUniqueInput
  }

  export type EscaneoCreateNestedOneWithoutBoletoInput = {
    create?: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: EscaneoCreateOrConnectWithoutBoletoInput
    connect?: EscaneoWhereUniqueInput
  }

  export type BoletoParadaCreateNestedOneWithoutBoletoInput = {
    create?: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutBoletoInput
    connect?: BoletoParadaWhereUniqueInput
  }

  export type EscaneoUncheckedCreateNestedOneWithoutBoletoInput = {
    create?: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: EscaneoCreateOrConnectWithoutBoletoInput
    connect?: EscaneoWhereUniqueInput
  }

  export type BoletoParadaUncheckedCreateNestedOneWithoutBoletoInput = {
    create?: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutBoletoInput
    connect?: BoletoParadaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoTarifaFieldUpdateOperationsInput = {
    set?: $Enums.TipoTarifa
  }

  export type EnumEstadoBoletoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoBoleto
  }

  export type CompraUpdateOneRequiredWithoutBoletosNestedInput = {
    create?: XOR<CompraCreateWithoutBoletosInput, CompraUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutBoletosInput
    upsert?: CompraUpsertWithoutBoletosInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutBoletosInput, CompraUpdateWithoutBoletosInput>, CompraUncheckedUpdateWithoutBoletosInput>
  }

  export type EscaneoUpdateOneWithoutBoletoNestedInput = {
    create?: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: EscaneoCreateOrConnectWithoutBoletoInput
    upsert?: EscaneoUpsertWithoutBoletoInput
    disconnect?: EscaneoWhereInput | boolean
    delete?: EscaneoWhereInput | boolean
    connect?: EscaneoWhereUniqueInput
    update?: XOR<XOR<EscaneoUpdateToOneWithWhereWithoutBoletoInput, EscaneoUpdateWithoutBoletoInput>, EscaneoUncheckedUpdateWithoutBoletoInput>
  }

  export type BoletoParadaUpdateOneWithoutBoletoNestedInput = {
    create?: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutBoletoInput
    upsert?: BoletoParadaUpsertWithoutBoletoInput
    disconnect?: BoletoParadaWhereInput | boolean
    delete?: BoletoParadaWhereInput | boolean
    connect?: BoletoParadaWhereUniqueInput
    update?: XOR<XOR<BoletoParadaUpdateToOneWithWhereWithoutBoletoInput, BoletoParadaUpdateWithoutBoletoInput>, BoletoParadaUncheckedUpdateWithoutBoletoInput>
  }

  export type EscaneoUncheckedUpdateOneWithoutBoletoNestedInput = {
    create?: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: EscaneoCreateOrConnectWithoutBoletoInput
    upsert?: EscaneoUpsertWithoutBoletoInput
    disconnect?: EscaneoWhereInput | boolean
    delete?: EscaneoWhereInput | boolean
    connect?: EscaneoWhereUniqueInput
    update?: XOR<XOR<EscaneoUpdateToOneWithWhereWithoutBoletoInput, EscaneoUpdateWithoutBoletoInput>, EscaneoUncheckedUpdateWithoutBoletoInput>
  }

  export type BoletoParadaUncheckedUpdateOneWithoutBoletoNestedInput = {
    create?: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutBoletoInput
    upsert?: BoletoParadaUpsertWithoutBoletoInput
    disconnect?: BoletoParadaWhereInput | boolean
    delete?: BoletoParadaWhereInput | boolean
    connect?: BoletoParadaWhereUniqueInput
    update?: XOR<XOR<BoletoParadaUpdateToOneWithWhereWithoutBoletoInput, BoletoParadaUpdateWithoutBoletoInput>, BoletoParadaUncheckedUpdateWithoutBoletoInput>
  }

  export type CompraCreateNestedOneWithoutPagoInput = {
    create?: XOR<CompraCreateWithoutPagoInput, CompraUncheckedCreateWithoutPagoInput>
    connectOrCreate?: CompraCreateOrConnectWithoutPagoInput
    connect?: CompraWhereUniqueInput
  }

  export type PagoTarjetaCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTarjetaCreateOrConnectWithoutPagoInput
    connect?: PagoTarjetaWhereUniqueInput
  }

  export type PagoTransferenciaCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutPagoInput
    connect?: PagoTransferenciaWhereUniqueInput
  }

  export type PagoEfectivoCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoEfectivoCreateOrConnectWithoutPagoInput
    connect?: PagoEfectivoWhereUniqueInput
  }

  export type PagoTarjetaUncheckedCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTarjetaCreateOrConnectWithoutPagoInput
    connect?: PagoTarjetaWhereUniqueInput
  }

  export type PagoTransferenciaUncheckedCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutPagoInput
    connect?: PagoTransferenciaWhereUniqueInput
  }

  export type PagoEfectivoUncheckedCreateNestedOneWithoutPagoInput = {
    create?: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoEfectivoCreateOrConnectWithoutPagoInput
    connect?: PagoEfectivoWhereUniqueInput
  }

  export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago
  }

  export type EnumEstadoPagoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPago
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompraUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<CompraCreateWithoutPagoInput, CompraUncheckedCreateWithoutPagoInput>
    connectOrCreate?: CompraCreateOrConnectWithoutPagoInput
    upsert?: CompraUpsertWithoutPagoInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutPagoInput, CompraUpdateWithoutPagoInput>, CompraUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTarjetaUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTarjetaCreateOrConnectWithoutPagoInput
    upsert?: PagoTarjetaUpsertWithoutPagoInput
    disconnect?: PagoTarjetaWhereInput | boolean
    delete?: PagoTarjetaWhereInput | boolean
    connect?: PagoTarjetaWhereUniqueInput
    update?: XOR<XOR<PagoTarjetaUpdateToOneWithWhereWithoutPagoInput, PagoTarjetaUpdateWithoutPagoInput>, PagoTarjetaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTransferenciaUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutPagoInput
    upsert?: PagoTransferenciaUpsertWithoutPagoInput
    disconnect?: PagoTransferenciaWhereInput | boolean
    delete?: PagoTransferenciaWhereInput | boolean
    connect?: PagoTransferenciaWhereUniqueInput
    update?: XOR<XOR<PagoTransferenciaUpdateToOneWithWhereWithoutPagoInput, PagoTransferenciaUpdateWithoutPagoInput>, PagoTransferenciaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoEfectivoUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoEfectivoCreateOrConnectWithoutPagoInput
    upsert?: PagoEfectivoUpsertWithoutPagoInput
    disconnect?: PagoEfectivoWhereInput | boolean
    delete?: PagoEfectivoWhereInput | boolean
    connect?: PagoEfectivoWhereUniqueInput
    update?: XOR<XOR<PagoEfectivoUpdateToOneWithWhereWithoutPagoInput, PagoEfectivoUpdateWithoutPagoInput>, PagoEfectivoUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTarjetaUncheckedUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTarjetaCreateOrConnectWithoutPagoInput
    upsert?: PagoTarjetaUpsertWithoutPagoInput
    disconnect?: PagoTarjetaWhereInput | boolean
    delete?: PagoTarjetaWhereInput | boolean
    connect?: PagoTarjetaWhereUniqueInput
    update?: XOR<XOR<PagoTarjetaUpdateToOneWithWhereWithoutPagoInput, PagoTarjetaUpdateWithoutPagoInput>, PagoTarjetaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTransferenciaUncheckedUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutPagoInput
    upsert?: PagoTransferenciaUpsertWithoutPagoInput
    disconnect?: PagoTransferenciaWhereInput | boolean
    delete?: PagoTransferenciaWhereInput | boolean
    connect?: PagoTransferenciaWhereUniqueInput
    update?: XOR<XOR<PagoTransferenciaUpdateToOneWithWhereWithoutPagoInput, PagoTransferenciaUpdateWithoutPagoInput>, PagoTransferenciaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoEfectivoUncheckedUpdateOneWithoutPagoNestedInput = {
    create?: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PagoEfectivoCreateOrConnectWithoutPagoInput
    upsert?: PagoEfectivoUpsertWithoutPagoInput
    disconnect?: PagoEfectivoWhereInput | boolean
    delete?: PagoEfectivoWhereInput | boolean
    connect?: PagoEfectivoWhereUniqueInput
    update?: XOR<XOR<PagoEfectivoUpdateToOneWithWhereWithoutPagoInput, PagoEfectivoUpdateWithoutPagoInput>, PagoEfectivoUncheckedUpdateWithoutPagoInput>
  }

  export type PagoPasajeroCreateNestedOneWithoutPagoTarjetaInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoTarjetaInput, PagoPasajeroUncheckedCreateWithoutPagoTarjetaInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoTarjetaInput
    connect?: PagoPasajeroWhereUniqueInput
  }

  export type PagoPasajeroUpdateOneRequiredWithoutPagoTarjetaNestedInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoTarjetaInput, PagoPasajeroUncheckedCreateWithoutPagoTarjetaInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoTarjetaInput
    upsert?: PagoPasajeroUpsertWithoutPagoTarjetaInput
    connect?: PagoPasajeroWhereUniqueInput
    update?: XOR<XOR<PagoPasajeroUpdateToOneWithWhereWithoutPagoTarjetaInput, PagoPasajeroUpdateWithoutPagoTarjetaInput>, PagoPasajeroUncheckedUpdateWithoutPagoTarjetaInput>
  }

  export type PagoPasajeroCreateNestedOneWithoutPagoTransferenciaInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoTransferenciaInput
    connect?: PagoPasajeroWhereUniqueInput
  }

  export type AprobacionCreateNestedOneWithoutPagoTransferenciaInput = {
    create?: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: AprobacionCreateOrConnectWithoutPagoTransferenciaInput
    connect?: AprobacionWhereUniqueInput
  }

  export type AprobacionUncheckedCreateNestedOneWithoutPagoTransferenciaInput = {
    create?: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: AprobacionCreateOrConnectWithoutPagoTransferenciaInput
    connect?: AprobacionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEstadoTransferenciaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTransferencia
  }

  export type PagoPasajeroUpdateOneRequiredWithoutPagoTransferenciaNestedInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoTransferenciaInput
    upsert?: PagoPasajeroUpsertWithoutPagoTransferenciaInput
    connect?: PagoPasajeroWhereUniqueInput
    update?: XOR<XOR<PagoPasajeroUpdateToOneWithWhereWithoutPagoTransferenciaInput, PagoPasajeroUpdateWithoutPagoTransferenciaInput>, PagoPasajeroUncheckedUpdateWithoutPagoTransferenciaInput>
  }

  export type AprobacionUpdateOneWithoutPagoTransferenciaNestedInput = {
    create?: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: AprobacionCreateOrConnectWithoutPagoTransferenciaInput
    upsert?: AprobacionUpsertWithoutPagoTransferenciaInput
    disconnect?: AprobacionWhereInput | boolean
    delete?: AprobacionWhereInput | boolean
    connect?: AprobacionWhereUniqueInput
    update?: XOR<XOR<AprobacionUpdateToOneWithWhereWithoutPagoTransferenciaInput, AprobacionUpdateWithoutPagoTransferenciaInput>, AprobacionUncheckedUpdateWithoutPagoTransferenciaInput>
  }

  export type AprobacionUncheckedUpdateOneWithoutPagoTransferenciaNestedInput = {
    create?: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
    connectOrCreate?: AprobacionCreateOrConnectWithoutPagoTransferenciaInput
    upsert?: AprobacionUpsertWithoutPagoTransferenciaInput
    disconnect?: AprobacionWhereInput | boolean
    delete?: AprobacionWhereInput | boolean
    connect?: AprobacionWhereUniqueInput
    update?: XOR<XOR<AprobacionUpdateToOneWithWhereWithoutPagoTransferenciaInput, AprobacionUpdateWithoutPagoTransferenciaInput>, AprobacionUncheckedUpdateWithoutPagoTransferenciaInput>
  }

  export type PagoTransferenciaCreateNestedOneWithoutAprobacionInput = {
    create?: XOR<PagoTransferenciaCreateWithoutAprobacionInput, PagoTransferenciaUncheckedCreateWithoutAprobacionInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutAprobacionInput
    connect?: PagoTransferenciaWhereUniqueInput
  }

  export type EnumEstadoAprobacionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAprobacion
  }

  export type PagoTransferenciaUpdateOneRequiredWithoutAprobacionNestedInput = {
    create?: XOR<PagoTransferenciaCreateWithoutAprobacionInput, PagoTransferenciaUncheckedCreateWithoutAprobacionInput>
    connectOrCreate?: PagoTransferenciaCreateOrConnectWithoutAprobacionInput
    upsert?: PagoTransferenciaUpsertWithoutAprobacionInput
    connect?: PagoTransferenciaWhereUniqueInput
    update?: XOR<XOR<PagoTransferenciaUpdateToOneWithWhereWithoutAprobacionInput, PagoTransferenciaUpdateWithoutAprobacionInput>, PagoTransferenciaUncheckedUpdateWithoutAprobacionInput>
  }

  export type PagoPasajeroCreateNestedOneWithoutPagoEfectivoInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoEfectivoInput, PagoPasajeroUncheckedCreateWithoutPagoEfectivoInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoEfectivoInput
    connect?: PagoPasajeroWhereUniqueInput
  }

  export type EnumCanalEfectivoFieldUpdateOperationsInput = {
    set?: $Enums.CanalEfectivo
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PagoPasajeroUpdateOneRequiredWithoutPagoEfectivoNestedInput = {
    create?: XOR<PagoPasajeroCreateWithoutPagoEfectivoInput, PagoPasajeroUncheckedCreateWithoutPagoEfectivoInput>
    connectOrCreate?: PagoPasajeroCreateOrConnectWithoutPagoEfectivoInput
    upsert?: PagoPasajeroUpsertWithoutPagoEfectivoInput
    connect?: PagoPasajeroWhereUniqueInput
    update?: XOR<XOR<PagoPasajeroUpdateToOneWithWhereWithoutPagoEfectivoInput, PagoPasajeroUpdateWithoutPagoEfectivoInput>, PagoPasajeroUncheckedUpdateWithoutPagoEfectivoInput>
  }

  export type BoletoCreateNestedOneWithoutEscaneoInput = {
    create?: XOR<BoletoCreateWithoutEscaneoInput, BoletoUncheckedCreateWithoutEscaneoInput>
    connectOrCreate?: BoletoCreateOrConnectWithoutEscaneoInput
    connect?: BoletoWhereUniqueInput
  }

  export type EnumResultadoEscaneoFieldUpdateOperationsInput = {
    set?: $Enums.ResultadoEscaneo
  }

  export type BoletoUpdateOneRequiredWithoutEscaneoNestedInput = {
    create?: XOR<BoletoCreateWithoutEscaneoInput, BoletoUncheckedCreateWithoutEscaneoInput>
    connectOrCreate?: BoletoCreateOrConnectWithoutEscaneoInput
    upsert?: BoletoUpsertWithoutEscaneoInput
    connect?: BoletoWhereUniqueInput
    update?: XOR<XOR<BoletoUpdateToOneWithWhereWithoutEscaneoInput, BoletoUpdateWithoutEscaneoInput>, BoletoUncheckedUpdateWithoutEscaneoInput>
  }

  export type BoletoCreateNestedOneWithoutBoletoParadaInput = {
    create?: XOR<BoletoCreateWithoutBoletoParadaInput, BoletoUncheckedCreateWithoutBoletoParadaInput>
    connectOrCreate?: BoletoCreateOrConnectWithoutBoletoParadaInput
    connect?: BoletoWhereUniqueInput
  }

  export type AlertaGpsCreateNestedManyWithoutBoletoParadaInput = {
    create?: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput> | AlertaGpsCreateWithoutBoletoParadaInput[] | AlertaGpsUncheckedCreateWithoutBoletoParadaInput[]
    connectOrCreate?: AlertaGpsCreateOrConnectWithoutBoletoParadaInput | AlertaGpsCreateOrConnectWithoutBoletoParadaInput[]
    createMany?: AlertaGpsCreateManyBoletoParadaInputEnvelope
    connect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
  }

  export type AlertaGpsUncheckedCreateNestedManyWithoutBoletoParadaInput = {
    create?: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput> | AlertaGpsCreateWithoutBoletoParadaInput[] | AlertaGpsUncheckedCreateWithoutBoletoParadaInput[]
    connectOrCreate?: AlertaGpsCreateOrConnectWithoutBoletoParadaInput | AlertaGpsCreateOrConnectWithoutBoletoParadaInput[]
    createMany?: AlertaGpsCreateManyBoletoParadaInputEnvelope
    connect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
  }

  export type EnumEstadoBoletoParadaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoBoletoParada
  }

  export type BoletoUpdateOneRequiredWithoutBoletoParadaNestedInput = {
    create?: XOR<BoletoCreateWithoutBoletoParadaInput, BoletoUncheckedCreateWithoutBoletoParadaInput>
    connectOrCreate?: BoletoCreateOrConnectWithoutBoletoParadaInput
    upsert?: BoletoUpsertWithoutBoletoParadaInput
    connect?: BoletoWhereUniqueInput
    update?: XOR<XOR<BoletoUpdateToOneWithWhereWithoutBoletoParadaInput, BoletoUpdateWithoutBoletoParadaInput>, BoletoUncheckedUpdateWithoutBoletoParadaInput>
  }

  export type AlertaGpsUpdateManyWithoutBoletoParadaNestedInput = {
    create?: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput> | AlertaGpsCreateWithoutBoletoParadaInput[] | AlertaGpsUncheckedCreateWithoutBoletoParadaInput[]
    connectOrCreate?: AlertaGpsCreateOrConnectWithoutBoletoParadaInput | AlertaGpsCreateOrConnectWithoutBoletoParadaInput[]
    upsert?: AlertaGpsUpsertWithWhereUniqueWithoutBoletoParadaInput | AlertaGpsUpsertWithWhereUniqueWithoutBoletoParadaInput[]
    createMany?: AlertaGpsCreateManyBoletoParadaInputEnvelope
    set?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    disconnect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    delete?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    connect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    update?: AlertaGpsUpdateWithWhereUniqueWithoutBoletoParadaInput | AlertaGpsUpdateWithWhereUniqueWithoutBoletoParadaInput[]
    updateMany?: AlertaGpsUpdateManyWithWhereWithoutBoletoParadaInput | AlertaGpsUpdateManyWithWhereWithoutBoletoParadaInput[]
    deleteMany?: AlertaGpsScalarWhereInput | AlertaGpsScalarWhereInput[]
  }

  export type AlertaGpsUncheckedUpdateManyWithoutBoletoParadaNestedInput = {
    create?: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput> | AlertaGpsCreateWithoutBoletoParadaInput[] | AlertaGpsUncheckedCreateWithoutBoletoParadaInput[]
    connectOrCreate?: AlertaGpsCreateOrConnectWithoutBoletoParadaInput | AlertaGpsCreateOrConnectWithoutBoletoParadaInput[]
    upsert?: AlertaGpsUpsertWithWhereUniqueWithoutBoletoParadaInput | AlertaGpsUpsertWithWhereUniqueWithoutBoletoParadaInput[]
    createMany?: AlertaGpsCreateManyBoletoParadaInputEnvelope
    set?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    disconnect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    delete?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    connect?: AlertaGpsWhereUniqueInput | AlertaGpsWhereUniqueInput[]
    update?: AlertaGpsUpdateWithWhereUniqueWithoutBoletoParadaInput | AlertaGpsUpdateWithWhereUniqueWithoutBoletoParadaInput[]
    updateMany?: AlertaGpsUpdateManyWithWhereWithoutBoletoParadaInput | AlertaGpsUpdateManyWithWhereWithoutBoletoParadaInput[]
    deleteMany?: AlertaGpsScalarWhereInput | AlertaGpsScalarWhereInput[]
  }

  export type BoletoParadaCreateNestedOneWithoutAlertasGpsInput = {
    create?: XOR<BoletoParadaCreateWithoutAlertasGpsInput, BoletoParadaUncheckedCreateWithoutAlertasGpsInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutAlertasGpsInput
    connect?: BoletoParadaWhereUniqueInput
  }

  export type EnumEstadoAlertaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAlerta
  }

  export type BoletoParadaUpdateOneRequiredWithoutAlertasGpsNestedInput = {
    create?: XOR<BoletoParadaCreateWithoutAlertasGpsInput, BoletoParadaUncheckedCreateWithoutAlertasGpsInput>
    connectOrCreate?: BoletoParadaCreateOrConnectWithoutAlertasGpsInput
    upsert?: BoletoParadaUpsertWithoutAlertasGpsInput
    connect?: BoletoParadaWhereUniqueInput
    update?: XOR<XOR<BoletoParadaUpdateToOneWithWhereWithoutAlertasGpsInput, BoletoParadaUpdateWithoutAlertasGpsInput>, BoletoParadaUncheckedUpdateWithoutAlertasGpsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCanalVentaFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalVenta | EnumCanalVentaFieldRefInput<$PrismaModel>
    in?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalVentaFilter<$PrismaModel> | $Enums.CanalVenta
  }

  export type NestedEnumEstadoCompraFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCompra | EnumEstadoCompraFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCompraFilter<$PrismaModel> | $Enums.EstadoCompra
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCanalVentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalVenta | EnumCanalVentaFieldRefInput<$PrismaModel>
    in?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalVenta[] | ListEnumCanalVentaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalVentaWithAggregatesFilter<$PrismaModel> | $Enums.CanalVenta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalVentaFilter<$PrismaModel>
    _max?: NestedEnumCanalVentaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCompraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCompra | EnumEstadoCompraFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCompra[] | ListEnumEstadoCompraFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCompraWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCompra
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCompraFilter<$PrismaModel>
    _max?: NestedEnumEstadoCompraFilter<$PrismaModel>
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

  export type NestedEnumTipoTarifaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTarifa | EnumTipoTarifaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTarifaFilter<$PrismaModel> | $Enums.TipoTarifa
  }

  export type NestedEnumEstadoBoletoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoleto | EnumEstadoBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoFilter<$PrismaModel> | $Enums.EstadoBoleto
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

  export type NestedEnumTipoTarifaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTarifa | EnumTipoTarifaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTarifa[] | ListEnumTipoTarifaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTarifaWithAggregatesFilter<$PrismaModel> | $Enums.TipoTarifa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTarifaFilter<$PrismaModel>
    _max?: NestedEnumTipoTarifaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoBoletoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoleto | EnumEstadoBoletoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoleto[] | ListEnumEstadoBoletoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBoleto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBoletoFilter<$PrismaModel>
    _max?: NestedEnumEstadoBoletoFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoFilter<$PrismaModel> | $Enums.MetodoPago
  }

  export type NestedEnumEstadoPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPago | EnumEstadoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPagoFilter<$PrismaModel> | $Enums.EstadoPago
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

  export type NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPago | EnumMetodoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPago[] | ListEnumMetodoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPago | EnumEstadoPagoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPago[] | ListEnumEstadoPagoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPagoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPagoFilter<$PrismaModel>
    _max?: NestedEnumEstadoPagoFilter<$PrismaModel>
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

  export type NestedEnumEstadoTransferenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransferencia | EnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTransferenciaFilter<$PrismaModel> | $Enums.EstadoTransferencia
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

  export type NestedEnumEstadoTransferenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTransferencia | EnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTransferencia[] | ListEnumEstadoTransferenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTransferenciaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTransferencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTransferenciaFilter<$PrismaModel>
    _max?: NestedEnumEstadoTransferenciaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoAprobacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAprobacion | EnumEstadoAprobacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAprobacionFilter<$PrismaModel> | $Enums.EstadoAprobacion
  }

  export type NestedEnumEstadoAprobacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAprobacion | EnumEstadoAprobacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAprobacion[] | ListEnumEstadoAprobacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAprobacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAprobacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAprobacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoAprobacionFilter<$PrismaModel>
  }

  export type NestedEnumCanalEfectivoFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalEfectivo | EnumCanalEfectivoFieldRefInput<$PrismaModel>
    in?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalEfectivoFilter<$PrismaModel> | $Enums.CanalEfectivo
  }

  export type NestedEnumCanalEfectivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CanalEfectivo | EnumCanalEfectivoFieldRefInput<$PrismaModel>
    in?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CanalEfectivo[] | ListEnumCanalEfectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumCanalEfectivoWithAggregatesFilter<$PrismaModel> | $Enums.CanalEfectivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanalEfectivoFilter<$PrismaModel>
    _max?: NestedEnumCanalEfectivoFilter<$PrismaModel>
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

  export type NestedEnumResultadoEscaneoFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoEscaneo | EnumResultadoEscaneoFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoEscaneoFilter<$PrismaModel> | $Enums.ResultadoEscaneo
  }

  export type NestedEnumResultadoEscaneoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoEscaneo | EnumResultadoEscaneoFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResultadoEscaneo[] | ListEnumResultadoEscaneoFieldRefInput<$PrismaModel>
    not?: NestedEnumResultadoEscaneoWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoEscaneo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoEscaneoFilter<$PrismaModel>
    _max?: NestedEnumResultadoEscaneoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoBoletoParadaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoletoParada | EnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel> | $Enums.EstadoBoletoParada
  }

  export type NestedEnumEstadoBoletoParadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBoletoParada | EnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBoletoParada[] | ListEnumEstadoBoletoParadaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBoletoParadaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBoletoParada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel>
    _max?: NestedEnumEstadoBoletoParadaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoAlertaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaFilter<$PrismaModel> | $Enums.EstadoAlerta
  }

  export type NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAlerta | EnumEstadoAlertaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAlerta[] | ListEnumEstadoAlertaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAlertaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAlerta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAlertaFilter<$PrismaModel>
    _max?: NestedEnumEstadoAlertaFilter<$PrismaModel>
  }

  export type BoletoCreateWithoutCompraInput = {
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    escaneo?: EscaneoCreateNestedOneWithoutBoletoInput
    boletoParada?: BoletoParadaCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUncheckedCreateWithoutCompraInput = {
    id?: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    escaneo?: EscaneoUncheckedCreateNestedOneWithoutBoletoInput
    boletoParada?: BoletoParadaUncheckedCreateNestedOneWithoutBoletoInput
  }

  export type BoletoCreateOrConnectWithoutCompraInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput>
  }

  export type BoletoCreateManyCompraInputEnvelope = {
    data: BoletoCreateManyCompraInput | BoletoCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type PagoPasajeroCreateWithoutCompraInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTarjeta?: PagoTarjetaCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUncheckedCreateWithoutCompraInput = {
    id?: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaUncheckedCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoUncheckedCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroCreateOrConnectWithoutCompraInput = {
    where: PagoPasajeroWhereUniqueInput
    create: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
  }

  export type BoletoUpsertWithWhereUniqueWithoutCompraInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutCompraInput, BoletoUncheckedUpdateWithoutCompraInput>
    create: XOR<BoletoCreateWithoutCompraInput, BoletoUncheckedCreateWithoutCompraInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutCompraInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutCompraInput, BoletoUncheckedUpdateWithoutCompraInput>
  }

  export type BoletoUpdateManyWithWhereWithoutCompraInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutCompraInput>
  }

  export type BoletoScalarWhereInput = {
    AND?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    OR?: BoletoScalarWhereInput[]
    NOT?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    id?: IntFilter<"Boleto"> | number
    compraId?: IntFilter<"Boleto"> | number
    uuidQr?: StringFilter<"Boleto"> | string
    cedulaPasajero?: StringFilter<"Boleto"> | string
    nombrePasajero?: StringFilter<"Boleto"> | string
    tipoTarifa?: EnumTipoTarifaFilter<"Boleto"> | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFilter<"Boleto"> | $Enums.EstadoBoleto
    expiraEn?: DateTimeFilter<"Boleto"> | Date | string
    creadoEn?: DateTimeFilter<"Boleto"> | Date | string
  }

  export type PagoPasajeroUpsertWithoutCompraInput = {
    update: XOR<PagoPasajeroUpdateWithoutCompraInput, PagoPasajeroUncheckedUpdateWithoutCompraInput>
    create: XOR<PagoPasajeroCreateWithoutCompraInput, PagoPasajeroUncheckedCreateWithoutCompraInput>
    where?: PagoPasajeroWhereInput
  }

  export type PagoPasajeroUpdateToOneWithWhereWithoutCompraInput = {
    where?: PagoPasajeroWhereInput
    data: XOR<PagoPasajeroUpdateWithoutCompraInput, PagoPasajeroUncheckedUpdateWithoutCompraInput>
  }

  export type PagoPasajeroUpdateWithoutCompraInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTarjeta?: PagoTarjetaUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroUncheckedUpdateWithoutCompraInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUncheckedUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUncheckedUpdateOneWithoutPagoNestedInput
  }

  export type CompraCreateWithoutBoletosInput = {
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    pago?: PagoPasajeroCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutBoletosInput = {
    id?: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    pago?: PagoPasajeroUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutBoletosInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutBoletosInput, CompraUncheckedCreateWithoutBoletosInput>
  }

  export type EscaneoCreateWithoutBoletoInput = {
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn?: Date | string
  }

  export type EscaneoUncheckedCreateWithoutBoletoInput = {
    id?: number
    oficialId: number
    busId: number
    turnoId: number
    resultado: $Enums.ResultadoEscaneo
    escaneadoEn?: Date | string
  }

  export type EscaneoCreateOrConnectWithoutBoletoInput = {
    where: EscaneoWhereUniqueInput
    create: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
  }

  export type BoletoParadaCreateWithoutBoletoInput = {
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsCreateNestedManyWithoutBoletoParadaInput
  }

  export type BoletoParadaUncheckedCreateWithoutBoletoInput = {
    id?: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsUncheckedCreateNestedManyWithoutBoletoParadaInput
  }

  export type BoletoParadaCreateOrConnectWithoutBoletoInput = {
    where: BoletoParadaWhereUniqueInput
    create: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
  }

  export type CompraUpsertWithoutBoletosInput = {
    update: XOR<CompraUpdateWithoutBoletosInput, CompraUncheckedUpdateWithoutBoletosInput>
    create: XOR<CompraCreateWithoutBoletosInput, CompraUncheckedCreateWithoutBoletosInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutBoletosInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutBoletosInput, CompraUncheckedUpdateWithoutBoletosInput>
  }

  export type CompraUpdateWithoutBoletosInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    pago?: PagoPasajeroUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    pago?: PagoPasajeroUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type EscaneoUpsertWithoutBoletoInput = {
    update: XOR<EscaneoUpdateWithoutBoletoInput, EscaneoUncheckedUpdateWithoutBoletoInput>
    create: XOR<EscaneoCreateWithoutBoletoInput, EscaneoUncheckedCreateWithoutBoletoInput>
    where?: EscaneoWhereInput
  }

  export type EscaneoUpdateToOneWithWhereWithoutBoletoInput = {
    where?: EscaneoWhereInput
    data: XOR<EscaneoUpdateWithoutBoletoInput, EscaneoUncheckedUpdateWithoutBoletoInput>
  }

  export type EscaneoUpdateWithoutBoletoInput = {
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscaneoUncheckedUpdateWithoutBoletoInput = {
    id?: IntFieldUpdateOperationsInput | number
    oficialId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    resultado?: EnumResultadoEscaneoFieldUpdateOperationsInput | $Enums.ResultadoEscaneo
    escaneadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoParadaUpsertWithoutBoletoInput = {
    update: XOR<BoletoParadaUpdateWithoutBoletoInput, BoletoParadaUncheckedUpdateWithoutBoletoInput>
    create: XOR<BoletoParadaCreateWithoutBoletoInput, BoletoParadaUncheckedCreateWithoutBoletoInput>
    where?: BoletoParadaWhereInput
  }

  export type BoletoParadaUpdateToOneWithWhereWithoutBoletoInput = {
    where?: BoletoParadaWhereInput
    data: XOR<BoletoParadaUpdateWithoutBoletoInput, BoletoParadaUncheckedUpdateWithoutBoletoInput>
  }

  export type BoletoParadaUpdateWithoutBoletoInput = {
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsUpdateManyWithoutBoletoParadaNestedInput
  }

  export type BoletoParadaUncheckedUpdateWithoutBoletoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
    alertasGps?: AlertaGpsUncheckedUpdateManyWithoutBoletoParadaNestedInput
  }

  export type CompraCreateWithoutPagoInput = {
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    boletos?: BoletoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutPagoInput = {
    id?: number
    usuarioId: number
    frecuenciaId: number
    fechaViaje: Date | string
    cantidad?: number
    total: Decimal | DecimalJsLike | number | string
    canal: $Enums.CanalVenta
    estado?: $Enums.EstadoCompra
    creadoEn?: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutPagoInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutPagoInput, CompraUncheckedCreateWithoutPagoInput>
  }

  export type PagoTarjetaCreateWithoutPagoInput = {
    ultimos4: string
    marca: string
    referenciaPasarela: string
  }

  export type PagoTarjetaUncheckedCreateWithoutPagoInput = {
    id?: number
    ultimos4: string
    marca: string
    referenciaPasarela: string
  }

  export type PagoTarjetaCreateOrConnectWithoutPagoInput = {
    where: PagoTarjetaWhereUniqueInput
    create: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
  }

  export type PagoTransferenciaCreateWithoutPagoInput = {
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
    aprobacion?: AprobacionCreateNestedOneWithoutPagoTransferenciaInput
  }

  export type PagoTransferenciaUncheckedCreateWithoutPagoInput = {
    id?: number
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
    aprobacion?: AprobacionUncheckedCreateNestedOneWithoutPagoTransferenciaInput
  }

  export type PagoTransferenciaCreateOrConnectWithoutPagoInput = {
    where: PagoTransferenciaWhereUniqueInput
    create: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
  }

  export type PagoEfectivoCreateWithoutPagoInput = {
    vendedorId: number
    montoRecibido: Decimal | DecimalJsLike | number | string
    cambio: Decimal | DecimalJsLike | number | string
    canalVenta: $Enums.CanalEfectivo
    turnoId?: number | null
  }

  export type PagoEfectivoUncheckedCreateWithoutPagoInput = {
    id?: number
    vendedorId: number
    montoRecibido: Decimal | DecimalJsLike | number | string
    cambio: Decimal | DecimalJsLike | number | string
    canalVenta: $Enums.CanalEfectivo
    turnoId?: number | null
  }

  export type PagoEfectivoCreateOrConnectWithoutPagoInput = {
    where: PagoEfectivoWhereUniqueInput
    create: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
  }

  export type CompraUpsertWithoutPagoInput = {
    update: XOR<CompraUpdateWithoutPagoInput, CompraUncheckedUpdateWithoutPagoInput>
    create: XOR<CompraCreateWithoutPagoInput, CompraUncheckedCreateWithoutPagoInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutPagoInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutPagoInput, CompraUncheckedUpdateWithoutPagoInput>
  }

  export type CompraUpdateWithoutPagoInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    frecuenciaId?: IntFieldUpdateOperationsInput | number
    fechaViaje?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canal?: EnumCanalVentaFieldUpdateOperationsInput | $Enums.CanalVenta
    estado?: EnumEstadoCompraFieldUpdateOperationsInput | $Enums.EstadoCompra
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type PagoTarjetaUpsertWithoutPagoInput = {
    update: XOR<PagoTarjetaUpdateWithoutPagoInput, PagoTarjetaUncheckedUpdateWithoutPagoInput>
    create: XOR<PagoTarjetaCreateWithoutPagoInput, PagoTarjetaUncheckedCreateWithoutPagoInput>
    where?: PagoTarjetaWhereInput
  }

  export type PagoTarjetaUpdateToOneWithWhereWithoutPagoInput = {
    where?: PagoTarjetaWhereInput
    data: XOR<PagoTarjetaUpdateWithoutPagoInput, PagoTarjetaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTarjetaUpdateWithoutPagoInput = {
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
  }

  export type PagoTarjetaUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ultimos4?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    referenciaPasarela?: StringFieldUpdateOperationsInput | string
  }

  export type PagoTransferenciaUpsertWithoutPagoInput = {
    update: XOR<PagoTransferenciaUpdateWithoutPagoInput, PagoTransferenciaUncheckedUpdateWithoutPagoInput>
    create: XOR<PagoTransferenciaCreateWithoutPagoInput, PagoTransferenciaUncheckedCreateWithoutPagoInput>
    where?: PagoTransferenciaWhereInput
  }

  export type PagoTransferenciaUpdateToOneWithWhereWithoutPagoInput = {
    where?: PagoTransferenciaWhereInput
    data: XOR<PagoTransferenciaUpdateWithoutPagoInput, PagoTransferenciaUncheckedUpdateWithoutPagoInput>
  }

  export type PagoTransferenciaUpdateWithoutPagoInput = {
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
    aprobacion?: AprobacionUpdateOneWithoutPagoTransferenciaNestedInput
  }

  export type PagoTransferenciaUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
    aprobacion?: AprobacionUncheckedUpdateOneWithoutPagoTransferenciaNestedInput
  }

  export type PagoEfectivoUpsertWithoutPagoInput = {
    update: XOR<PagoEfectivoUpdateWithoutPagoInput, PagoEfectivoUncheckedUpdateWithoutPagoInput>
    create: XOR<PagoEfectivoCreateWithoutPagoInput, PagoEfectivoUncheckedCreateWithoutPagoInput>
    where?: PagoEfectivoWhereInput
  }

  export type PagoEfectivoUpdateToOneWithWhereWithoutPagoInput = {
    where?: PagoEfectivoWhereInput
    data: XOR<PagoEfectivoUpdateWithoutPagoInput, PagoEfectivoUncheckedUpdateWithoutPagoInput>
  }

  export type PagoEfectivoUpdateWithoutPagoInput = {
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PagoEfectivoUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    montoRecibido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cambio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canalVenta?: EnumCanalEfectivoFieldUpdateOperationsInput | $Enums.CanalEfectivo
    turnoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PagoPasajeroCreateWithoutPagoTarjetaInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    compra: CompraCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUncheckedCreateWithoutPagoTarjetaInput = {
    id?: number
    compraId: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTransferencia?: PagoTransferenciaUncheckedCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoUncheckedCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroCreateOrConnectWithoutPagoTarjetaInput = {
    where: PagoPasajeroWhereUniqueInput
    create: XOR<PagoPasajeroCreateWithoutPagoTarjetaInput, PagoPasajeroUncheckedCreateWithoutPagoTarjetaInput>
  }

  export type PagoPasajeroUpsertWithoutPagoTarjetaInput = {
    update: XOR<PagoPasajeroUpdateWithoutPagoTarjetaInput, PagoPasajeroUncheckedUpdateWithoutPagoTarjetaInput>
    create: XOR<PagoPasajeroCreateWithoutPagoTarjetaInput, PagoPasajeroUncheckedCreateWithoutPagoTarjetaInput>
    where?: PagoPasajeroWhereInput
  }

  export type PagoPasajeroUpdateToOneWithWhereWithoutPagoTarjetaInput = {
    where?: PagoPasajeroWhereInput
    data: XOR<PagoPasajeroUpdateWithoutPagoTarjetaInput, PagoPasajeroUncheckedUpdateWithoutPagoTarjetaInput>
  }

  export type PagoPasajeroUpdateWithoutPagoTarjetaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compra?: CompraUpdateOneRequiredWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroUncheckedUpdateWithoutPagoTarjetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTransferencia?: PagoTransferenciaUncheckedUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUncheckedUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroCreateWithoutPagoTransferenciaInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    compra: CompraCreateNestedOneWithoutPagoInput
    pagoTarjeta?: PagoTarjetaCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUncheckedCreateWithoutPagoTransferenciaInput = {
    id?: number
    compraId: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedCreateNestedOneWithoutPagoInput
    pagoEfectivo?: PagoEfectivoUncheckedCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroCreateOrConnectWithoutPagoTransferenciaInput = {
    where: PagoPasajeroWhereUniqueInput
    create: XOR<PagoPasajeroCreateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedCreateWithoutPagoTransferenciaInput>
  }

  export type AprobacionCreateWithoutPagoTransferenciaInput = {
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion?: string | null
    revisadoEn?: Date | string
  }

  export type AprobacionUncheckedCreateWithoutPagoTransferenciaInput = {
    id?: number
    oficinistaId: number
    estado: $Enums.EstadoAprobacion
    observacion?: string | null
    revisadoEn?: Date | string
  }

  export type AprobacionCreateOrConnectWithoutPagoTransferenciaInput = {
    where: AprobacionWhereUniqueInput
    create: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
  }

  export type PagoPasajeroUpsertWithoutPagoTransferenciaInput = {
    update: XOR<PagoPasajeroUpdateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedUpdateWithoutPagoTransferenciaInput>
    create: XOR<PagoPasajeroCreateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedCreateWithoutPagoTransferenciaInput>
    where?: PagoPasajeroWhereInput
  }

  export type PagoPasajeroUpdateToOneWithWhereWithoutPagoTransferenciaInput = {
    where?: PagoPasajeroWhereInput
    data: XOR<PagoPasajeroUpdateWithoutPagoTransferenciaInput, PagoPasajeroUncheckedUpdateWithoutPagoTransferenciaInput>
  }

  export type PagoPasajeroUpdateWithoutPagoTransferenciaInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compra?: CompraUpdateOneRequiredWithoutPagoNestedInput
    pagoTarjeta?: PagoTarjetaUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroUncheckedUpdateWithoutPagoTransferenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedUpdateOneWithoutPagoNestedInput
    pagoEfectivo?: PagoEfectivoUncheckedUpdateOneWithoutPagoNestedInput
  }

  export type AprobacionUpsertWithoutPagoTransferenciaInput = {
    update: XOR<AprobacionUpdateWithoutPagoTransferenciaInput, AprobacionUncheckedUpdateWithoutPagoTransferenciaInput>
    create: XOR<AprobacionCreateWithoutPagoTransferenciaInput, AprobacionUncheckedCreateWithoutPagoTransferenciaInput>
    where?: AprobacionWhereInput
  }

  export type AprobacionUpdateToOneWithWhereWithoutPagoTransferenciaInput = {
    where?: AprobacionWhereInput
    data: XOR<AprobacionUpdateWithoutPagoTransferenciaInput, AprobacionUncheckedUpdateWithoutPagoTransferenciaInput>
  }

  export type AprobacionUpdateWithoutPagoTransferenciaInput = {
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AprobacionUncheckedUpdateWithoutPagoTransferenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    oficinistaId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAprobacionFieldUpdateOperationsInput | $Enums.EstadoAprobacion
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    revisadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoTransferenciaCreateWithoutAprobacionInput = {
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
    pago: PagoPasajeroCreateNestedOneWithoutPagoTransferenciaInput
  }

  export type PagoTransferenciaUncheckedCreateWithoutAprobacionInput = {
    id?: number
    pagoId: number
    banco: string
    referencia: string
    comprobanteUrl?: string | null
    estado?: $Enums.EstadoTransferencia
  }

  export type PagoTransferenciaCreateOrConnectWithoutAprobacionInput = {
    where: PagoTransferenciaWhereUniqueInput
    create: XOR<PagoTransferenciaCreateWithoutAprobacionInput, PagoTransferenciaUncheckedCreateWithoutAprobacionInput>
  }

  export type PagoTransferenciaUpsertWithoutAprobacionInput = {
    update: XOR<PagoTransferenciaUpdateWithoutAprobacionInput, PagoTransferenciaUncheckedUpdateWithoutAprobacionInput>
    create: XOR<PagoTransferenciaCreateWithoutAprobacionInput, PagoTransferenciaUncheckedCreateWithoutAprobacionInput>
    where?: PagoTransferenciaWhereInput
  }

  export type PagoTransferenciaUpdateToOneWithWhereWithoutAprobacionInput = {
    where?: PagoTransferenciaWhereInput
    data: XOR<PagoTransferenciaUpdateWithoutAprobacionInput, PagoTransferenciaUncheckedUpdateWithoutAprobacionInput>
  }

  export type PagoTransferenciaUpdateWithoutAprobacionInput = {
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
    pago?: PagoPasajeroUpdateOneRequiredWithoutPagoTransferenciaNestedInput
  }

  export type PagoTransferenciaUncheckedUpdateWithoutAprobacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    pagoId?: IntFieldUpdateOperationsInput | number
    banco?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTransferenciaFieldUpdateOperationsInput | $Enums.EstadoTransferencia
  }

  export type PagoPasajeroCreateWithoutPagoEfectivoInput = {
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    compra: CompraCreateNestedOneWithoutPagoInput
    pagoTarjeta?: PagoTarjetaCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroUncheckedCreateWithoutPagoEfectivoInput = {
    id?: number
    compraId: number
    monto: Decimal | DecimalJsLike | number | string
    metodo: $Enums.MetodoPago
    estado?: $Enums.EstadoPago
    pagadoEn?: Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedCreateNestedOneWithoutPagoInput
    pagoTransferencia?: PagoTransferenciaUncheckedCreateNestedOneWithoutPagoInput
  }

  export type PagoPasajeroCreateOrConnectWithoutPagoEfectivoInput = {
    where: PagoPasajeroWhereUniqueInput
    create: XOR<PagoPasajeroCreateWithoutPagoEfectivoInput, PagoPasajeroUncheckedCreateWithoutPagoEfectivoInput>
  }

  export type PagoPasajeroUpsertWithoutPagoEfectivoInput = {
    update: XOR<PagoPasajeroUpdateWithoutPagoEfectivoInput, PagoPasajeroUncheckedUpdateWithoutPagoEfectivoInput>
    create: XOR<PagoPasajeroCreateWithoutPagoEfectivoInput, PagoPasajeroUncheckedCreateWithoutPagoEfectivoInput>
    where?: PagoPasajeroWhereInput
  }

  export type PagoPasajeroUpdateToOneWithWhereWithoutPagoEfectivoInput = {
    where?: PagoPasajeroWhereInput
    data: XOR<PagoPasajeroUpdateWithoutPagoEfectivoInput, PagoPasajeroUncheckedUpdateWithoutPagoEfectivoInput>
  }

  export type PagoPasajeroUpdateWithoutPagoEfectivoInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compra?: CompraUpdateOneRequiredWithoutPagoNestedInput
    pagoTarjeta?: PagoTarjetaUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUpdateOneWithoutPagoNestedInput
  }

  export type PagoPasajeroUncheckedUpdateWithoutPagoEfectivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo?: EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago
    estado?: EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago
    pagadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoTarjeta?: PagoTarjetaUncheckedUpdateOneWithoutPagoNestedInput
    pagoTransferencia?: PagoTransferenciaUncheckedUpdateOneWithoutPagoNestedInput
  }

  export type BoletoCreateWithoutEscaneoInput = {
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    compra: CompraCreateNestedOneWithoutBoletosInput
    boletoParada?: BoletoParadaCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUncheckedCreateWithoutEscaneoInput = {
    id?: number
    compraId: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    boletoParada?: BoletoParadaUncheckedCreateNestedOneWithoutBoletoInput
  }

  export type BoletoCreateOrConnectWithoutEscaneoInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutEscaneoInput, BoletoUncheckedCreateWithoutEscaneoInput>
  }

  export type BoletoUpsertWithoutEscaneoInput = {
    update: XOR<BoletoUpdateWithoutEscaneoInput, BoletoUncheckedUpdateWithoutEscaneoInput>
    create: XOR<BoletoCreateWithoutEscaneoInput, BoletoUncheckedCreateWithoutEscaneoInput>
    where?: BoletoWhereInput
  }

  export type BoletoUpdateToOneWithWhereWithoutEscaneoInput = {
    where?: BoletoWhereInput
    data: XOR<BoletoUpdateWithoutEscaneoInput, BoletoUncheckedUpdateWithoutEscaneoInput>
  }

  export type BoletoUpdateWithoutEscaneoInput = {
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    compra?: CompraUpdateOneRequiredWithoutBoletosNestedInput
    boletoParada?: BoletoParadaUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateWithoutEscaneoInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    boletoParada?: BoletoParadaUncheckedUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoCreateWithoutBoletoParadaInput = {
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    compra: CompraCreateNestedOneWithoutBoletosInput
    escaneo?: EscaneoCreateNestedOneWithoutBoletoInput
  }

  export type BoletoUncheckedCreateWithoutBoletoParadaInput = {
    id?: number
    compraId: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
    escaneo?: EscaneoUncheckedCreateNestedOneWithoutBoletoInput
  }

  export type BoletoCreateOrConnectWithoutBoletoParadaInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutBoletoParadaInput, BoletoUncheckedCreateWithoutBoletoParadaInput>
  }

  export type AlertaGpsCreateWithoutBoletoParadaInput = {
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
  }

  export type AlertaGpsUncheckedCreateWithoutBoletoParadaInput = {
    id?: number
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
  }

  export type AlertaGpsCreateOrConnectWithoutBoletoParadaInput = {
    where: AlertaGpsWhereUniqueInput
    create: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput>
  }

  export type AlertaGpsCreateManyBoletoParadaInputEnvelope = {
    data: AlertaGpsCreateManyBoletoParadaInput | AlertaGpsCreateManyBoletoParadaInput[]
    skipDuplicates?: boolean
  }

  export type BoletoUpsertWithoutBoletoParadaInput = {
    update: XOR<BoletoUpdateWithoutBoletoParadaInput, BoletoUncheckedUpdateWithoutBoletoParadaInput>
    create: XOR<BoletoCreateWithoutBoletoParadaInput, BoletoUncheckedCreateWithoutBoletoParadaInput>
    where?: BoletoWhereInput
  }

  export type BoletoUpdateToOneWithWhereWithoutBoletoParadaInput = {
    where?: BoletoWhereInput
    data: XOR<BoletoUpdateWithoutBoletoParadaInput, BoletoUncheckedUpdateWithoutBoletoParadaInput>
  }

  export type BoletoUpdateWithoutBoletoParadaInput = {
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    compra?: CompraUpdateOneRequiredWithoutBoletosNestedInput
    escaneo?: EscaneoUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateWithoutBoletoParadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    compraId?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    escaneo?: EscaneoUncheckedUpdateOneWithoutBoletoNestedInput
  }

  export type AlertaGpsUpsertWithWhereUniqueWithoutBoletoParadaInput = {
    where: AlertaGpsWhereUniqueInput
    update: XOR<AlertaGpsUpdateWithoutBoletoParadaInput, AlertaGpsUncheckedUpdateWithoutBoletoParadaInput>
    create: XOR<AlertaGpsCreateWithoutBoletoParadaInput, AlertaGpsUncheckedCreateWithoutBoletoParadaInput>
  }

  export type AlertaGpsUpdateWithWhereUniqueWithoutBoletoParadaInput = {
    where: AlertaGpsWhereUniqueInput
    data: XOR<AlertaGpsUpdateWithoutBoletoParadaInput, AlertaGpsUncheckedUpdateWithoutBoletoParadaInput>
  }

  export type AlertaGpsUpdateManyWithWhereWithoutBoletoParadaInput = {
    where: AlertaGpsScalarWhereInput
    data: XOR<AlertaGpsUpdateManyMutationInput, AlertaGpsUncheckedUpdateManyWithoutBoletoParadaInput>
  }

  export type AlertaGpsScalarWhereInput = {
    AND?: AlertaGpsScalarWhereInput | AlertaGpsScalarWhereInput[]
    OR?: AlertaGpsScalarWhereInput[]
    NOT?: AlertaGpsScalarWhereInput | AlertaGpsScalarWhereInput[]
    id?: IntFilter<"AlertaGps"> | number
    boletoParadaId?: IntFilter<"AlertaGps"> | number
    turnoId?: IntFilter<"AlertaGps"> | number
    latActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFilter<"AlertaGps"> | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFilter<"AlertaGps"> | number
    estado?: EnumEstadoAlertaFilter<"AlertaGps"> | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFilter<"AlertaGps"> | Date | string
  }

  export type BoletoParadaCreateWithoutAlertasGpsInput = {
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
    boleto: BoletoCreateNestedOneWithoutBoletoParadaInput
  }

  export type BoletoParadaUncheckedCreateWithoutAlertasGpsInput = {
    id?: number
    boletoId: number
    paradaOrigenId: number
    paradaDestinoId: number
    estado?: $Enums.EstadoBoletoParada
  }

  export type BoletoParadaCreateOrConnectWithoutAlertasGpsInput = {
    where: BoletoParadaWhereUniqueInput
    create: XOR<BoletoParadaCreateWithoutAlertasGpsInput, BoletoParadaUncheckedCreateWithoutAlertasGpsInput>
  }

  export type BoletoParadaUpsertWithoutAlertasGpsInput = {
    update: XOR<BoletoParadaUpdateWithoutAlertasGpsInput, BoletoParadaUncheckedUpdateWithoutAlertasGpsInput>
    create: XOR<BoletoParadaCreateWithoutAlertasGpsInput, BoletoParadaUncheckedCreateWithoutAlertasGpsInput>
    where?: BoletoParadaWhereInput
  }

  export type BoletoParadaUpdateToOneWithWhereWithoutAlertasGpsInput = {
    where?: BoletoParadaWhereInput
    data: XOR<BoletoParadaUpdateWithoutAlertasGpsInput, BoletoParadaUncheckedUpdateWithoutAlertasGpsInput>
  }

  export type BoletoParadaUpdateWithoutAlertasGpsInput = {
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
    boleto?: BoletoUpdateOneRequiredWithoutBoletoParadaNestedInput
  }

  export type BoletoParadaUncheckedUpdateWithoutAlertasGpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    boletoId?: IntFieldUpdateOperationsInput | number
    paradaOrigenId?: IntFieldUpdateOperationsInput | number
    paradaDestinoId?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoBoletoParadaFieldUpdateOperationsInput | $Enums.EstadoBoletoParada
  }

  export type BoletoCreateManyCompraInput = {
    id?: number
    uuidQr?: string
    cedulaPasajero: string
    nombrePasajero: string
    tipoTarifa?: $Enums.TipoTarifa
    estado?: $Enums.EstadoBoleto
    expiraEn: Date | string
    creadoEn?: Date | string
  }

  export type BoletoUpdateWithoutCompraInput = {
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    escaneo?: EscaneoUpdateOneWithoutBoletoNestedInput
    boletoParada?: BoletoParadaUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateWithoutCompraInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    escaneo?: EscaneoUncheckedUpdateOneWithoutBoletoNestedInput
    boletoParada?: BoletoParadaUncheckedUpdateOneWithoutBoletoNestedInput
  }

  export type BoletoUncheckedUpdateManyWithoutCompraInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuidQr?: StringFieldUpdateOperationsInput | string
    cedulaPasajero?: StringFieldUpdateOperationsInput | string
    nombrePasajero?: StringFieldUpdateOperationsInput | string
    tipoTarifa?: EnumTipoTarifaFieldUpdateOperationsInput | $Enums.TipoTarifa
    estado?: EnumEstadoBoletoFieldUpdateOperationsInput | $Enums.EstadoBoleto
    expiraEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaGpsCreateManyBoletoParadaInput = {
    id?: number
    turnoId: number
    latActual: Decimal | DecimalJsLike | number | string
    lngActual: Decimal | DecimalJsLike | number | string
    metrosRestantes: number
    estado?: $Enums.EstadoAlerta
    actualizadoEn?: Date | string
  }

  export type AlertaGpsUpdateWithoutBoletoParadaInput = {
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaGpsUncheckedUpdateWithoutBoletoParadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaGpsUncheckedUpdateManyWithoutBoletoParadaInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    latActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lngActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosRestantes?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoAlertaFieldUpdateOperationsInput | $Enums.EstadoAlerta
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompraCountOutputTypeDefaultArgs instead
     */
    export type CompraCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoletoParadaCountOutputTypeDefaultArgs instead
     */
    export type BoletoParadaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoletoParadaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraDefaultArgs instead
     */
    export type CompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoletoDefaultArgs instead
     */
    export type BoletoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoletoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoPasajeroDefaultArgs instead
     */
    export type PagoPasajeroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoPasajeroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoTarjetaDefaultArgs instead
     */
    export type PagoTarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoTarjetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoTransferenciaDefaultArgs instead
     */
    export type PagoTransferenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoTransferenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AprobacionDefaultArgs instead
     */
    export type AprobacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AprobacionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoEfectivoDefaultArgs instead
     */
    export type PagoEfectivoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoEfectivoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EscaneoDefaultArgs instead
     */
    export type EscaneoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EscaneoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoletoParadaDefaultArgs instead
     */
    export type BoletoParadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoletoParadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertaGpsDefaultArgs instead
     */
    export type AlertaGpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertaGpsDefaultArgs<ExtArgs>

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