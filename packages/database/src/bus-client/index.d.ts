
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
 * Model Dueno
 * 
 */
export type Dueno = $Result.DefaultSelection<Prisma.$DuenoPayload>
/**
 * Model Cooperativa
 * 
 */
export type Cooperativa = $Result.DefaultSelection<Prisma.$CooperativaPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Chofer
 * 
 */
export type Chofer = $Result.DefaultSelection<Prisma.$ChoferPayload>
/**
 * Model Ruta
 * 
 */
export type Ruta = $Result.DefaultSelection<Prisma.$RutaPayload>
/**
 * Model Parada
 * 
 */
export type Parada = $Result.DefaultSelection<Prisma.$ParadaPayload>
/**
 * Model Frecuencia
 * 
 */
export type Frecuencia = $Result.DefaultSelection<Prisma.$FrecuenciaPayload>
/**
 * Model Turno
 * 
 */
export type Turno = $Result.DefaultSelection<Prisma.$TurnoPayload>
/**
 * Model Asiento
 * 
 */
export type Asiento = $Result.DefaultSelection<Prisma.$AsientoPayload>
/**
 * Model AsientoTurno
 * 
 */
export type AsientoTurno = $Result.DefaultSelection<Prisma.$AsientoTurnoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoGeneral: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type EstadoGeneral = (typeof EstadoGeneral)[keyof typeof EstadoGeneral]


export const EstadoBus: {
  ACTIVO: 'ACTIVO',
  MANTENIMIENTO: 'MANTENIMIENTO',
  INACTIVO: 'INACTIVO'
};

export type EstadoBus = (typeof EstadoBus)[keyof typeof EstadoBus]


export const DiaSemana: {
  LUN: 'LUN',
  MAR: 'MAR',
  MIE: 'MIE',
  JUE: 'JUE',
  VIE: 'VIE',
  SAB: 'SAB',
  DOM: 'DOM'
};

export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana]


export const EstadoTurno: {
  PENDIENTE: 'PENDIENTE',
  EN_RUTA: 'EN_RUTA',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

export type EstadoTurno = (typeof EstadoTurno)[keyof typeof EstadoTurno]


export const TipoAsiento: {
  NORMAL: 'NORMAL',
  VIP: 'VIP',
  DISCAPACIDAD: 'DISCAPACIDAD'
};

export type TipoAsiento = (typeof TipoAsiento)[keyof typeof TipoAsiento]


export const EstadoAsientoTurno: {
  DISPONIBLE: 'DISPONIBLE',
  RESERVADO: 'RESERVADO',
  OCUPADO: 'OCUPADO',
  VACIO: 'VACIO'
};

export type EstadoAsientoTurno = (typeof EstadoAsientoTurno)[keyof typeof EstadoAsientoTurno]

}

export type EstadoGeneral = $Enums.EstadoGeneral

export const EstadoGeneral: typeof $Enums.EstadoGeneral

export type EstadoBus = $Enums.EstadoBus

export const EstadoBus: typeof $Enums.EstadoBus

export type DiaSemana = $Enums.DiaSemana

export const DiaSemana: typeof $Enums.DiaSemana

export type EstadoTurno = $Enums.EstadoTurno

export const EstadoTurno: typeof $Enums.EstadoTurno

export type TipoAsiento = $Enums.TipoAsiento

export const TipoAsiento: typeof $Enums.TipoAsiento

export type EstadoAsientoTurno = $Enums.EstadoAsientoTurno

export const EstadoAsientoTurno: typeof $Enums.EstadoAsientoTurno

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Duenos
 * const duenos = await prisma.dueno.findMany()
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
   * // Fetch zero or more Duenos
   * const duenos = await prisma.dueno.findMany()
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
   * `prisma.dueno`: Exposes CRUD operations for the **Dueno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Duenos
    * const duenos = await prisma.dueno.findMany()
    * ```
    */
  get dueno(): Prisma.DuenoDelegate<ExtArgs>;

  /**
   * `prisma.cooperativa`: Exposes CRUD operations for the **Cooperativa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cooperativas
    * const cooperativas = await prisma.cooperativa.findMany()
    * ```
    */
  get cooperativa(): Prisma.CooperativaDelegate<ExtArgs>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs>;

  /**
   * `prisma.chofer`: Exposes CRUD operations for the **Chofer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chofers
    * const chofers = await prisma.chofer.findMany()
    * ```
    */
  get chofer(): Prisma.ChoferDelegate<ExtArgs>;

  /**
   * `prisma.ruta`: Exposes CRUD operations for the **Ruta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutas
    * const rutas = await prisma.ruta.findMany()
    * ```
    */
  get ruta(): Prisma.RutaDelegate<ExtArgs>;

  /**
   * `prisma.parada`: Exposes CRUD operations for the **Parada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paradas
    * const paradas = await prisma.parada.findMany()
    * ```
    */
  get parada(): Prisma.ParadaDelegate<ExtArgs>;

  /**
   * `prisma.frecuencia`: Exposes CRUD operations for the **Frecuencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frecuencias
    * const frecuencias = await prisma.frecuencia.findMany()
    * ```
    */
  get frecuencia(): Prisma.FrecuenciaDelegate<ExtArgs>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **Turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.TurnoDelegate<ExtArgs>;

  /**
   * `prisma.asiento`: Exposes CRUD operations for the **Asiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asientos
    * const asientos = await prisma.asiento.findMany()
    * ```
    */
  get asiento(): Prisma.AsientoDelegate<ExtArgs>;

  /**
   * `prisma.asientoTurno`: Exposes CRUD operations for the **AsientoTurno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsientoTurnos
    * const asientoTurnos = await prisma.asientoTurno.findMany()
    * ```
    */
  get asientoTurno(): Prisma.AsientoTurnoDelegate<ExtArgs>;
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
    Dueno: 'Dueno',
    Cooperativa: 'Cooperativa',
    Bus: 'Bus',
    Chofer: 'Chofer',
    Ruta: 'Ruta',
    Parada: 'Parada',
    Frecuencia: 'Frecuencia',
    Turno: 'Turno',
    Asiento: 'Asiento',
    AsientoTurno: 'AsientoTurno'
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
      modelProps: "dueno" | "cooperativa" | "bus" | "chofer" | "ruta" | "parada" | "frecuencia" | "turno" | "asiento" | "asientoTurno"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dueno: {
        payload: Prisma.$DuenoPayload<ExtArgs>
        fields: Prisma.DuenoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DuenoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DuenoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          findFirst: {
            args: Prisma.DuenoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DuenoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          findMany: {
            args: Prisma.DuenoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>[]
          }
          create: {
            args: Prisma.DuenoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          createMany: {
            args: Prisma.DuenoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DuenoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>[]
          }
          delete: {
            args: Prisma.DuenoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          update: {
            args: Prisma.DuenoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          deleteMany: {
            args: Prisma.DuenoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DuenoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DuenoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuenoPayload>
          }
          aggregate: {
            args: Prisma.DuenoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDueno>
          }
          groupBy: {
            args: Prisma.DuenoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DuenoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DuenoCountArgs<ExtArgs>
            result: $Utils.Optional<DuenoCountAggregateOutputType> | number
          }
        }
      }
      Cooperativa: {
        payload: Prisma.$CooperativaPayload<ExtArgs>
        fields: Prisma.CooperativaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CooperativaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CooperativaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          findFirst: {
            args: Prisma.CooperativaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CooperativaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          findMany: {
            args: Prisma.CooperativaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>[]
          }
          create: {
            args: Prisma.CooperativaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          createMany: {
            args: Prisma.CooperativaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CooperativaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>[]
          }
          delete: {
            args: Prisma.CooperativaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          update: {
            args: Prisma.CooperativaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          deleteMany: {
            args: Prisma.CooperativaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CooperativaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CooperativaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          aggregate: {
            args: Prisma.CooperativaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCooperativa>
          }
          groupBy: {
            args: Prisma.CooperativaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CooperativaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CooperativaCountArgs<ExtArgs>
            result: $Utils.Optional<CooperativaCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Chofer: {
        payload: Prisma.$ChoferPayload<ExtArgs>
        fields: Prisma.ChoferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findFirst: {
            args: Prisma.ChoferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findMany: {
            args: Prisma.ChoferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          create: {
            args: Prisma.ChoferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          createMany: {
            args: Prisma.ChoferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          delete: {
            args: Prisma.ChoferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          update: {
            args: Prisma.ChoferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          deleteMany: {
            args: Prisma.ChoferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          aggregate: {
            args: Prisma.ChoferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChofer>
          }
          groupBy: {
            args: Prisma.ChoferGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoferGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoferCountArgs<ExtArgs>
            result: $Utils.Optional<ChoferCountAggregateOutputType> | number
          }
        }
      }
      Ruta: {
        payload: Prisma.$RutaPayload<ExtArgs>
        fields: Prisma.RutaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findFirst: {
            args: Prisma.RutaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          findMany: {
            args: Prisma.RutaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          create: {
            args: Prisma.RutaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          createMany: {
            args: Prisma.RutaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>[]
          }
          delete: {
            args: Prisma.RutaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          update: {
            args: Prisma.RutaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          deleteMany: {
            args: Prisma.RutaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RutaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutaPayload>
          }
          aggregate: {
            args: Prisma.RutaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuta>
          }
          groupBy: {
            args: Prisma.RutaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutaCountArgs<ExtArgs>
            result: $Utils.Optional<RutaCountAggregateOutputType> | number
          }
        }
      }
      Parada: {
        payload: Prisma.$ParadaPayload<ExtArgs>
        fields: Prisma.ParadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          findFirst: {
            args: Prisma.ParadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          findMany: {
            args: Prisma.ParadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>[]
          }
          create: {
            args: Prisma.ParadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          createMany: {
            args: Prisma.ParadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>[]
          }
          delete: {
            args: Prisma.ParadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          update: {
            args: Prisma.ParadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          deleteMany: {
            args: Prisma.ParadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParadaPayload>
          }
          aggregate: {
            args: Prisma.ParadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParada>
          }
          groupBy: {
            args: Prisma.ParadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParadaCountArgs<ExtArgs>
            result: $Utils.Optional<ParadaCountAggregateOutputType> | number
          }
        }
      }
      Frecuencia: {
        payload: Prisma.$FrecuenciaPayload<ExtArgs>
        fields: Prisma.FrecuenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrecuenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrecuenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          findFirst: {
            args: Prisma.FrecuenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrecuenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          findMany: {
            args: Prisma.FrecuenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>[]
          }
          create: {
            args: Prisma.FrecuenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          createMany: {
            args: Prisma.FrecuenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrecuenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>[]
          }
          delete: {
            args: Prisma.FrecuenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          update: {
            args: Prisma.FrecuenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          deleteMany: {
            args: Prisma.FrecuenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrecuenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FrecuenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrecuenciaPayload>
          }
          aggregate: {
            args: Prisma.FrecuenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrecuencia>
          }
          groupBy: {
            args: Prisma.FrecuenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrecuenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrecuenciaCountArgs<ExtArgs>
            result: $Utils.Optional<FrecuenciaCountAggregateOutputType> | number
          }
        }
      }
      Turno: {
        payload: Prisma.$TurnoPayload<ExtArgs>
        fields: Prisma.TurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findMany: {
            args: Prisma.TurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          create: {
            args: Prisma.TurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          createMany: {
            args: Prisma.TurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          delete: {
            args: Prisma.TurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          update: {
            args: Prisma.TurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          aggregate: {
            args: Prisma.TurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurno>
          }
          groupBy: {
            args: Prisma.TurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoCountAggregateOutputType> | number
          }
        }
      }
      Asiento: {
        payload: Prisma.$AsientoPayload<ExtArgs>
        fields: Prisma.AsientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          findFirst: {
            args: Prisma.AsientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          findMany: {
            args: Prisma.AsientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>[]
          }
          create: {
            args: Prisma.AsientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          createMany: {
            args: Prisma.AsientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>[]
          }
          delete: {
            args: Prisma.AsientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          update: {
            args: Prisma.AsientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          deleteMany: {
            args: Prisma.AsientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoPayload>
          }
          aggregate: {
            args: Prisma.AsientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsiento>
          }
          groupBy: {
            args: Prisma.AsientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsientoCountArgs<ExtArgs>
            result: $Utils.Optional<AsientoCountAggregateOutputType> | number
          }
        }
      }
      AsientoTurno: {
        payload: Prisma.$AsientoTurnoPayload<ExtArgs>
        fields: Prisma.AsientoTurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsientoTurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsientoTurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          findFirst: {
            args: Prisma.AsientoTurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsientoTurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          findMany: {
            args: Prisma.AsientoTurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>[]
          }
          create: {
            args: Prisma.AsientoTurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          createMany: {
            args: Prisma.AsientoTurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsientoTurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>[]
          }
          delete: {
            args: Prisma.AsientoTurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          update: {
            args: Prisma.AsientoTurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          deleteMany: {
            args: Prisma.AsientoTurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsientoTurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsientoTurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsientoTurnoPayload>
          }
          aggregate: {
            args: Prisma.AsientoTurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsientoTurno>
          }
          groupBy: {
            args: Prisma.AsientoTurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsientoTurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsientoTurnoCountArgs<ExtArgs>
            result: $Utils.Optional<AsientoTurnoCountAggregateOutputType> | number
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
   * Count Type DuenoCountOutputType
   */

  export type DuenoCountOutputType = {
    buses: number
  }

  export type DuenoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | DuenoCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * DuenoCountOutputType without action
   */
  export type DuenoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DuenoCountOutputType
     */
    select?: DuenoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DuenoCountOutputType without action
   */
  export type DuenoCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type CooperativaCountOutputType
   */

  export type CooperativaCountOutputType = {
    buses: number
  }

  export type CooperativaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | CooperativaCountOutputTypeCountBusesArgs
  }

  // Custom InputTypes
  /**
   * CooperativaCountOutputType without action
   */
  export type CooperativaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CooperativaCountOutputType
     */
    select?: CooperativaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CooperativaCountOutputType without action
   */
  export type CooperativaCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    asientos: number
    frecuencias: number
    turnos: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asientos?: boolean | BusCountOutputTypeCountAsientosArgs
    frecuencias?: boolean | BusCountOutputTypeCountFrecuenciasArgs
    turnos?: boolean | BusCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountAsientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountFrecuenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrecuenciaWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type ChoferCountOutputType
   */

  export type ChoferCountOutputType = {
    turnos: number
  }

  export type ChoferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | ChoferCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferCountOutputType
     */
    select?: ChoferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type RutaCountOutputType
   */

  export type RutaCountOutputType = {
    paradas: number
    frecuencias: number
    turnos: number
  }

  export type RutaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paradas?: boolean | RutaCountOutputTypeCountParadasArgs
    frecuencias?: boolean | RutaCountOutputTypeCountFrecuenciasArgs
    turnos?: boolean | RutaCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutaCountOutputType
     */
    select?: RutaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountParadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParadaWhereInput
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountFrecuenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrecuenciaWhereInput
  }

  /**
   * RutaCountOutputType without action
   */
  export type RutaCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type TurnoCountOutputType
   */

  export type TurnoCountOutputType = {
    asientosTurno: number
  }

  export type TurnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asientosTurno?: boolean | TurnoCountOutputTypeCountAsientosTurnoArgs
  }

  // Custom InputTypes
  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoCountOutputType
     */
    select?: TurnoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeCountAsientosTurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoTurnoWhereInput
  }


  /**
   * Count Type AsientoCountOutputType
   */

  export type AsientoCountOutputType = {
    turnos: number
  }

  export type AsientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | AsientoCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * AsientoCountOutputType without action
   */
  export type AsientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoCountOutputType
     */
    select?: AsientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsientoCountOutputType without action
   */
  export type AsientoCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoTurnoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dueno
   */

  export type AggregateDueno = {
    _count: DuenoCountAggregateOutputType | null
    _avg: DuenoAvgAggregateOutputType | null
    _sum: DuenoSumAggregateOutputType | null
    _min: DuenoMinAggregateOutputType | null
    _max: DuenoMaxAggregateOutputType | null
  }

  export type DuenoAvgAggregateOutputType = {
    id: number | null
  }

  export type DuenoSumAggregateOutputType = {
    id: number | null
  }

  export type DuenoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    cuentaBancaria: string | null
    banco: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type DuenoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    cuentaBancaria: string | null
    banco: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type DuenoCountAggregateOutputType = {
    id: number
    nombre: number
    cedula: number
    telefono: number
    cuentaBancaria: number
    banco: number
    estado: number
    _all: number
  }


  export type DuenoAvgAggregateInputType = {
    id?: true
  }

  export type DuenoSumAggregateInputType = {
    id?: true
  }

  export type DuenoMinAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    cuentaBancaria?: true
    banco?: true
    estado?: true
  }

  export type DuenoMaxAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    cuentaBancaria?: true
    banco?: true
    estado?: true
  }

  export type DuenoCountAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    cuentaBancaria?: true
    banco?: true
    estado?: true
    _all?: true
  }

  export type DuenoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dueno to aggregate.
     */
    where?: DuenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Duenos to fetch.
     */
    orderBy?: DuenoOrderByWithRelationInput | DuenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DuenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Duenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Duenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Duenos
    **/
    _count?: true | DuenoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DuenoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DuenoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DuenoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DuenoMaxAggregateInputType
  }

  export type GetDuenoAggregateType<T extends DuenoAggregateArgs> = {
        [P in keyof T & keyof AggregateDueno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDueno[P]>
      : GetScalarType<T[P], AggregateDueno[P]>
  }




  export type DuenoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DuenoWhereInput
    orderBy?: DuenoOrderByWithAggregationInput | DuenoOrderByWithAggregationInput[]
    by: DuenoScalarFieldEnum[] | DuenoScalarFieldEnum
    having?: DuenoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DuenoCountAggregateInputType | true
    _avg?: DuenoAvgAggregateInputType
    _sum?: DuenoSumAggregateInputType
    _min?: DuenoMinAggregateInputType
    _max?: DuenoMaxAggregateInputType
  }

  export type DuenoGroupByOutputType = {
    id: number
    nombre: string
    cedula: string
    telefono: string | null
    cuentaBancaria: string | null
    banco: string | null
    estado: $Enums.EstadoGeneral
    _count: DuenoCountAggregateOutputType | null
    _avg: DuenoAvgAggregateOutputType | null
    _sum: DuenoSumAggregateOutputType | null
    _min: DuenoMinAggregateOutputType | null
    _max: DuenoMaxAggregateOutputType | null
  }

  type GetDuenoGroupByPayload<T extends DuenoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DuenoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DuenoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DuenoGroupByOutputType[P]>
            : GetScalarType<T[P], DuenoGroupByOutputType[P]>
        }
      >
    >


  export type DuenoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    cuentaBancaria?: boolean
    banco?: boolean
    estado?: boolean
    buses?: boolean | Dueno$busesArgs<ExtArgs>
    _count?: boolean | DuenoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dueno"]>

  export type DuenoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    cuentaBancaria?: boolean
    banco?: boolean
    estado?: boolean
  }, ExtArgs["result"]["dueno"]>

  export type DuenoSelectScalar = {
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    cuentaBancaria?: boolean
    banco?: boolean
    estado?: boolean
  }

  export type DuenoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | Dueno$busesArgs<ExtArgs>
    _count?: boolean | DuenoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DuenoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DuenoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dueno"
    objects: {
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      cedula: string
      telefono: string | null
      cuentaBancaria: string | null
      banco: string | null
      estado: $Enums.EstadoGeneral
    }, ExtArgs["result"]["dueno"]>
    composites: {}
  }

  type DuenoGetPayload<S extends boolean | null | undefined | DuenoDefaultArgs> = $Result.GetResult<Prisma.$DuenoPayload, S>

  type DuenoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DuenoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DuenoCountAggregateInputType | true
    }

  export interface DuenoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dueno'], meta: { name: 'Dueno' } }
    /**
     * Find zero or one Dueno that matches the filter.
     * @param {DuenoFindUniqueArgs} args - Arguments to find a Dueno
     * @example
     * // Get one Dueno
     * const dueno = await prisma.dueno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DuenoFindUniqueArgs>(args: SelectSubset<T, DuenoFindUniqueArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dueno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DuenoFindUniqueOrThrowArgs} args - Arguments to find a Dueno
     * @example
     * // Get one Dueno
     * const dueno = await prisma.dueno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DuenoFindUniqueOrThrowArgs>(args: SelectSubset<T, DuenoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dueno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoFindFirstArgs} args - Arguments to find a Dueno
     * @example
     * // Get one Dueno
     * const dueno = await prisma.dueno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DuenoFindFirstArgs>(args?: SelectSubset<T, DuenoFindFirstArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dueno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoFindFirstOrThrowArgs} args - Arguments to find a Dueno
     * @example
     * // Get one Dueno
     * const dueno = await prisma.dueno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DuenoFindFirstOrThrowArgs>(args?: SelectSubset<T, DuenoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Duenos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Duenos
     * const duenos = await prisma.dueno.findMany()
     * 
     * // Get first 10 Duenos
     * const duenos = await prisma.dueno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duenoWithIdOnly = await prisma.dueno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DuenoFindManyArgs>(args?: SelectSubset<T, DuenoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dueno.
     * @param {DuenoCreateArgs} args - Arguments to create a Dueno.
     * @example
     * // Create one Dueno
     * const Dueno = await prisma.dueno.create({
     *   data: {
     *     // ... data to create a Dueno
     *   }
     * })
     * 
     */
    create<T extends DuenoCreateArgs>(args: SelectSubset<T, DuenoCreateArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Duenos.
     * @param {DuenoCreateManyArgs} args - Arguments to create many Duenos.
     * @example
     * // Create many Duenos
     * const dueno = await prisma.dueno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DuenoCreateManyArgs>(args?: SelectSubset<T, DuenoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Duenos and returns the data saved in the database.
     * @param {DuenoCreateManyAndReturnArgs} args - Arguments to create many Duenos.
     * @example
     * // Create many Duenos
     * const dueno = await prisma.dueno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Duenos and only return the `id`
     * const duenoWithIdOnly = await prisma.dueno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DuenoCreateManyAndReturnArgs>(args?: SelectSubset<T, DuenoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dueno.
     * @param {DuenoDeleteArgs} args - Arguments to delete one Dueno.
     * @example
     * // Delete one Dueno
     * const Dueno = await prisma.dueno.delete({
     *   where: {
     *     // ... filter to delete one Dueno
     *   }
     * })
     * 
     */
    delete<T extends DuenoDeleteArgs>(args: SelectSubset<T, DuenoDeleteArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dueno.
     * @param {DuenoUpdateArgs} args - Arguments to update one Dueno.
     * @example
     * // Update one Dueno
     * const dueno = await prisma.dueno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DuenoUpdateArgs>(args: SelectSubset<T, DuenoUpdateArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Duenos.
     * @param {DuenoDeleteManyArgs} args - Arguments to filter Duenos to delete.
     * @example
     * // Delete a few Duenos
     * const { count } = await prisma.dueno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DuenoDeleteManyArgs>(args?: SelectSubset<T, DuenoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Duenos
     * const dueno = await prisma.dueno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DuenoUpdateManyArgs>(args: SelectSubset<T, DuenoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dueno.
     * @param {DuenoUpsertArgs} args - Arguments to update or create a Dueno.
     * @example
     * // Update or create a Dueno
     * const dueno = await prisma.dueno.upsert({
     *   create: {
     *     // ... data to create a Dueno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dueno we want to update
     *   }
     * })
     */
    upsert<T extends DuenoUpsertArgs>(args: SelectSubset<T, DuenoUpsertArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Duenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoCountArgs} args - Arguments to filter Duenos to count.
     * @example
     * // Count the number of Duenos
     * const count = await prisma.dueno.count({
     *   where: {
     *     // ... the filter for the Duenos we want to count
     *   }
     * })
    **/
    count<T extends DuenoCountArgs>(
      args?: Subset<T, DuenoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DuenoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dueno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DuenoAggregateArgs>(args: Subset<T, DuenoAggregateArgs>): Prisma.PrismaPromise<GetDuenoAggregateType<T>>

    /**
     * Group by Dueno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuenoGroupByArgs} args - Group by arguments.
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
      T extends DuenoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DuenoGroupByArgs['orderBy'] }
        : { orderBy?: DuenoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DuenoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuenoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dueno model
   */
  readonly fields: DuenoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dueno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DuenoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buses<T extends Dueno$busesArgs<ExtArgs> = {}>(args?: Subset<T, Dueno$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Dueno model
   */ 
  interface DuenoFieldRefs {
    readonly id: FieldRef<"Dueno", 'Int'>
    readonly nombre: FieldRef<"Dueno", 'String'>
    readonly cedula: FieldRef<"Dueno", 'String'>
    readonly telefono: FieldRef<"Dueno", 'String'>
    readonly cuentaBancaria: FieldRef<"Dueno", 'String'>
    readonly banco: FieldRef<"Dueno", 'String'>
    readonly estado: FieldRef<"Dueno", 'EstadoGeneral'>
  }
    

  // Custom InputTypes
  /**
   * Dueno findUnique
   */
  export type DuenoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter, which Dueno to fetch.
     */
    where: DuenoWhereUniqueInput
  }

  /**
   * Dueno findUniqueOrThrow
   */
  export type DuenoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter, which Dueno to fetch.
     */
    where: DuenoWhereUniqueInput
  }

  /**
   * Dueno findFirst
   */
  export type DuenoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter, which Dueno to fetch.
     */
    where?: DuenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Duenos to fetch.
     */
    orderBy?: DuenoOrderByWithRelationInput | DuenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Duenos.
     */
    cursor?: DuenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Duenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Duenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Duenos.
     */
    distinct?: DuenoScalarFieldEnum | DuenoScalarFieldEnum[]
  }

  /**
   * Dueno findFirstOrThrow
   */
  export type DuenoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter, which Dueno to fetch.
     */
    where?: DuenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Duenos to fetch.
     */
    orderBy?: DuenoOrderByWithRelationInput | DuenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Duenos.
     */
    cursor?: DuenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Duenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Duenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Duenos.
     */
    distinct?: DuenoScalarFieldEnum | DuenoScalarFieldEnum[]
  }

  /**
   * Dueno findMany
   */
  export type DuenoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter, which Duenos to fetch.
     */
    where?: DuenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Duenos to fetch.
     */
    orderBy?: DuenoOrderByWithRelationInput | DuenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Duenos.
     */
    cursor?: DuenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Duenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Duenos.
     */
    skip?: number
    distinct?: DuenoScalarFieldEnum | DuenoScalarFieldEnum[]
  }

  /**
   * Dueno create
   */
  export type DuenoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dueno.
     */
    data: XOR<DuenoCreateInput, DuenoUncheckedCreateInput>
  }

  /**
   * Dueno createMany
   */
  export type DuenoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Duenos.
     */
    data: DuenoCreateManyInput | DuenoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dueno createManyAndReturn
   */
  export type DuenoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Duenos.
     */
    data: DuenoCreateManyInput | DuenoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dueno update
   */
  export type DuenoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dueno.
     */
    data: XOR<DuenoUpdateInput, DuenoUncheckedUpdateInput>
    /**
     * Choose, which Dueno to update.
     */
    where: DuenoWhereUniqueInput
  }

  /**
   * Dueno updateMany
   */
  export type DuenoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Duenos.
     */
    data: XOR<DuenoUpdateManyMutationInput, DuenoUncheckedUpdateManyInput>
    /**
     * Filter which Duenos to update
     */
    where?: DuenoWhereInput
  }

  /**
   * Dueno upsert
   */
  export type DuenoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dueno to update in case it exists.
     */
    where: DuenoWhereUniqueInput
    /**
     * In case the Dueno found by the `where` argument doesn't exist, create a new Dueno with this data.
     */
    create: XOR<DuenoCreateInput, DuenoUncheckedCreateInput>
    /**
     * In case the Dueno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DuenoUpdateInput, DuenoUncheckedUpdateInput>
  }

  /**
   * Dueno delete
   */
  export type DuenoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
    /**
     * Filter which Dueno to delete.
     */
    where: DuenoWhereUniqueInput
  }

  /**
   * Dueno deleteMany
   */
  export type DuenoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Duenos to delete
     */
    where?: DuenoWhereInput
  }

  /**
   * Dueno.buses
   */
  export type Dueno$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Dueno without action
   */
  export type DuenoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dueno
     */
    select?: DuenoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuenoInclude<ExtArgs> | null
  }


  /**
   * Model Cooperativa
   */

  export type AggregateCooperativa = {
    _count: CooperativaCountAggregateOutputType | null
    _avg: CooperativaAvgAggregateOutputType | null
    _sum: CooperativaSumAggregateOutputType | null
    _min: CooperativaMinAggregateOutputType | null
    _max: CooperativaMaxAggregateOutputType | null
  }

  export type CooperativaAvgAggregateOutputType = {
    id: number | null
  }

  export type CooperativaSumAggregateOutputType = {
    id: number | null
  }

  export type CooperativaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type CooperativaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type CooperativaCountAggregateOutputType = {
    id: number
    nombre: number
    ruc: number
    estado: number
    _all: number
  }


  export type CooperativaAvgAggregateInputType = {
    id?: true
  }

  export type CooperativaSumAggregateInputType = {
    id?: true
  }

  export type CooperativaMinAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    estado?: true
  }

  export type CooperativaMaxAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    estado?: true
  }

  export type CooperativaCountAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    estado?: true
    _all?: true
  }

  export type CooperativaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cooperativa to aggregate.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cooperativas
    **/
    _count?: true | CooperativaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CooperativaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CooperativaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CooperativaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CooperativaMaxAggregateInputType
  }

  export type GetCooperativaAggregateType<T extends CooperativaAggregateArgs> = {
        [P in keyof T & keyof AggregateCooperativa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCooperativa[P]>
      : GetScalarType<T[P], AggregateCooperativa[P]>
  }




  export type CooperativaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CooperativaWhereInput
    orderBy?: CooperativaOrderByWithAggregationInput | CooperativaOrderByWithAggregationInput[]
    by: CooperativaScalarFieldEnum[] | CooperativaScalarFieldEnum
    having?: CooperativaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CooperativaCountAggregateInputType | true
    _avg?: CooperativaAvgAggregateInputType
    _sum?: CooperativaSumAggregateInputType
    _min?: CooperativaMinAggregateInputType
    _max?: CooperativaMaxAggregateInputType
  }

  export type CooperativaGroupByOutputType = {
    id: number
    nombre: string
    ruc: string
    estado: $Enums.EstadoGeneral
    _count: CooperativaCountAggregateOutputType | null
    _avg: CooperativaAvgAggregateOutputType | null
    _sum: CooperativaSumAggregateOutputType | null
    _min: CooperativaMinAggregateOutputType | null
    _max: CooperativaMaxAggregateOutputType | null
  }

  type GetCooperativaGroupByPayload<T extends CooperativaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CooperativaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CooperativaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CooperativaGroupByOutputType[P]>
            : GetScalarType<T[P], CooperativaGroupByOutputType[P]>
        }
      >
    >


  export type CooperativaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    estado?: boolean
    buses?: boolean | Cooperativa$busesArgs<ExtArgs>
    _count?: boolean | CooperativaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cooperativa"]>

  export type CooperativaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    estado?: boolean
  }, ExtArgs["result"]["cooperativa"]>

  export type CooperativaSelectScalar = {
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    estado?: boolean
  }

  export type CooperativaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | Cooperativa$busesArgs<ExtArgs>
    _count?: boolean | CooperativaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CooperativaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CooperativaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cooperativa"
    objects: {
      buses: Prisma.$BusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ruc: string
      estado: $Enums.EstadoGeneral
    }, ExtArgs["result"]["cooperativa"]>
    composites: {}
  }

  type CooperativaGetPayload<S extends boolean | null | undefined | CooperativaDefaultArgs> = $Result.GetResult<Prisma.$CooperativaPayload, S>

  type CooperativaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CooperativaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CooperativaCountAggregateInputType | true
    }

  export interface CooperativaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cooperativa'], meta: { name: 'Cooperativa' } }
    /**
     * Find zero or one Cooperativa that matches the filter.
     * @param {CooperativaFindUniqueArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CooperativaFindUniqueArgs>(args: SelectSubset<T, CooperativaFindUniqueArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cooperativa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CooperativaFindUniqueOrThrowArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CooperativaFindUniqueOrThrowArgs>(args: SelectSubset<T, CooperativaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cooperativa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindFirstArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CooperativaFindFirstArgs>(args?: SelectSubset<T, CooperativaFindFirstArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cooperativa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindFirstOrThrowArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CooperativaFindFirstOrThrowArgs>(args?: SelectSubset<T, CooperativaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cooperativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cooperativas
     * const cooperativas = await prisma.cooperativa.findMany()
     * 
     * // Get first 10 Cooperativas
     * const cooperativas = await prisma.cooperativa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cooperativaWithIdOnly = await prisma.cooperativa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CooperativaFindManyArgs>(args?: SelectSubset<T, CooperativaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cooperativa.
     * @param {CooperativaCreateArgs} args - Arguments to create a Cooperativa.
     * @example
     * // Create one Cooperativa
     * const Cooperativa = await prisma.cooperativa.create({
     *   data: {
     *     // ... data to create a Cooperativa
     *   }
     * })
     * 
     */
    create<T extends CooperativaCreateArgs>(args: SelectSubset<T, CooperativaCreateArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cooperativas.
     * @param {CooperativaCreateManyArgs} args - Arguments to create many Cooperativas.
     * @example
     * // Create many Cooperativas
     * const cooperativa = await prisma.cooperativa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CooperativaCreateManyArgs>(args?: SelectSubset<T, CooperativaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cooperativas and returns the data saved in the database.
     * @param {CooperativaCreateManyAndReturnArgs} args - Arguments to create many Cooperativas.
     * @example
     * // Create many Cooperativas
     * const cooperativa = await prisma.cooperativa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cooperativas and only return the `id`
     * const cooperativaWithIdOnly = await prisma.cooperativa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CooperativaCreateManyAndReturnArgs>(args?: SelectSubset<T, CooperativaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cooperativa.
     * @param {CooperativaDeleteArgs} args - Arguments to delete one Cooperativa.
     * @example
     * // Delete one Cooperativa
     * const Cooperativa = await prisma.cooperativa.delete({
     *   where: {
     *     // ... filter to delete one Cooperativa
     *   }
     * })
     * 
     */
    delete<T extends CooperativaDeleteArgs>(args: SelectSubset<T, CooperativaDeleteArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cooperativa.
     * @param {CooperativaUpdateArgs} args - Arguments to update one Cooperativa.
     * @example
     * // Update one Cooperativa
     * const cooperativa = await prisma.cooperativa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CooperativaUpdateArgs>(args: SelectSubset<T, CooperativaUpdateArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cooperativas.
     * @param {CooperativaDeleteManyArgs} args - Arguments to filter Cooperativas to delete.
     * @example
     * // Delete a few Cooperativas
     * const { count } = await prisma.cooperativa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CooperativaDeleteManyArgs>(args?: SelectSubset<T, CooperativaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cooperativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cooperativas
     * const cooperativa = await prisma.cooperativa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CooperativaUpdateManyArgs>(args: SelectSubset<T, CooperativaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cooperativa.
     * @param {CooperativaUpsertArgs} args - Arguments to update or create a Cooperativa.
     * @example
     * // Update or create a Cooperativa
     * const cooperativa = await prisma.cooperativa.upsert({
     *   create: {
     *     // ... data to create a Cooperativa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cooperativa we want to update
     *   }
     * })
     */
    upsert<T extends CooperativaUpsertArgs>(args: SelectSubset<T, CooperativaUpsertArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cooperativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaCountArgs} args - Arguments to filter Cooperativas to count.
     * @example
     * // Count the number of Cooperativas
     * const count = await prisma.cooperativa.count({
     *   where: {
     *     // ... the filter for the Cooperativas we want to count
     *   }
     * })
    **/
    count<T extends CooperativaCountArgs>(
      args?: Subset<T, CooperativaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CooperativaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cooperativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CooperativaAggregateArgs>(args: Subset<T, CooperativaAggregateArgs>): Prisma.PrismaPromise<GetCooperativaAggregateType<T>>

    /**
     * Group by Cooperativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaGroupByArgs} args - Group by arguments.
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
      T extends CooperativaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CooperativaGroupByArgs['orderBy'] }
        : { orderBy?: CooperativaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CooperativaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCooperativaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cooperativa model
   */
  readonly fields: CooperativaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cooperativa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CooperativaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buses<T extends Cooperativa$busesArgs<ExtArgs> = {}>(args?: Subset<T, Cooperativa$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cooperativa model
   */ 
  interface CooperativaFieldRefs {
    readonly id: FieldRef<"Cooperativa", 'Int'>
    readonly nombre: FieldRef<"Cooperativa", 'String'>
    readonly ruc: FieldRef<"Cooperativa", 'String'>
    readonly estado: FieldRef<"Cooperativa", 'EstadoGeneral'>
  }
    

  // Custom InputTypes
  /**
   * Cooperativa findUnique
   */
  export type CooperativaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa findUniqueOrThrow
   */
  export type CooperativaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa findFirst
   */
  export type CooperativaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cooperativas.
     */
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa findFirstOrThrow
   */
  export type CooperativaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cooperativas.
     */
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa findMany
   */
  export type CooperativaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter, which Cooperativas to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa create
   */
  export type CooperativaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cooperativa.
     */
    data: XOR<CooperativaCreateInput, CooperativaUncheckedCreateInput>
  }

  /**
   * Cooperativa createMany
   */
  export type CooperativaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cooperativas.
     */
    data: CooperativaCreateManyInput | CooperativaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cooperativa createManyAndReturn
   */
  export type CooperativaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cooperativas.
     */
    data: CooperativaCreateManyInput | CooperativaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cooperativa update
   */
  export type CooperativaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cooperativa.
     */
    data: XOR<CooperativaUpdateInput, CooperativaUncheckedUpdateInput>
    /**
     * Choose, which Cooperativa to update.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa updateMany
   */
  export type CooperativaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cooperativas.
     */
    data: XOR<CooperativaUpdateManyMutationInput, CooperativaUncheckedUpdateManyInput>
    /**
     * Filter which Cooperativas to update
     */
    where?: CooperativaWhereInput
  }

  /**
   * Cooperativa upsert
   */
  export type CooperativaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cooperativa to update in case it exists.
     */
    where: CooperativaWhereUniqueInput
    /**
     * In case the Cooperativa found by the `where` argument doesn't exist, create a new Cooperativa with this data.
     */
    create: XOR<CooperativaCreateInput, CooperativaUncheckedCreateInput>
    /**
     * In case the Cooperativa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CooperativaUpdateInput, CooperativaUncheckedUpdateInput>
  }

  /**
   * Cooperativa delete
   */
  export type CooperativaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
    /**
     * Filter which Cooperativa to delete.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa deleteMany
   */
  export type CooperativaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cooperativas to delete
     */
    where?: CooperativaWhereInput
  }

  /**
   * Cooperativa.buses
   */
  export type Cooperativa$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Cooperativa without action
   */
  export type CooperativaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CooperativaInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id: number | null
    cooperativaId: number | null
    duenoId: number | null
    anio: number | null
    capacidad: number | null
  }

  export type BusSumAggregateOutputType = {
    id: number | null
    cooperativaId: number | null
    duenoId: number | null
    anio: number | null
    capacidad: number | null
  }

  export type BusMinAggregateOutputType = {
    id: number | null
    cooperativaId: number | null
    duenoId: number | null
    placa: string | null
    marca: string | null
    carroceria: string | null
    modelo: string | null
    anio: number | null
    capacidad: number | null
    color: string | null
    estado: $Enums.EstadoBus | null
  }

  export type BusMaxAggregateOutputType = {
    id: number | null
    cooperativaId: number | null
    duenoId: number | null
    placa: string | null
    marca: string | null
    carroceria: string | null
    modelo: string | null
    anio: number | null
    capacidad: number | null
    color: string | null
    estado: $Enums.EstadoBus | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    cooperativaId: number
    duenoId: number
    placa: number
    marca: number
    carroceria: number
    modelo: number
    anio: number
    capacidad: number
    color: number
    estado: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id?: true
    cooperativaId?: true
    duenoId?: true
    anio?: true
    capacidad?: true
  }

  export type BusSumAggregateInputType = {
    id?: true
    cooperativaId?: true
    duenoId?: true
    anio?: true
    capacidad?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    cooperativaId?: true
    duenoId?: true
    placa?: true
    marca?: true
    carroceria?: true
    modelo?: true
    anio?: true
    capacidad?: true
    color?: true
    estado?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    cooperativaId?: true
    duenoId?: true
    placa?: true
    marca?: true
    carroceria?: true
    modelo?: true
    anio?: true
    capacidad?: true
    color?: true
    estado?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    cooperativaId?: true
    duenoId?: true
    placa?: true
    marca?: true
    carroceria?: true
    modelo?: true
    anio?: true
    capacidad?: true
    color?: true
    estado?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color: string | null
    estado: $Enums.EstadoBus
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cooperativaId?: boolean
    duenoId?: boolean
    placa?: boolean
    marca?: boolean
    carroceria?: boolean
    modelo?: boolean
    anio?: boolean
    capacidad?: boolean
    color?: boolean
    estado?: boolean
    cooperativa?: boolean | CooperativaDefaultArgs<ExtArgs>
    dueno?: boolean | DuenoDefaultArgs<ExtArgs>
    asientos?: boolean | Bus$asientosArgs<ExtArgs>
    frecuencias?: boolean | Bus$frecuenciasArgs<ExtArgs>
    turnos?: boolean | Bus$turnosArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cooperativaId?: boolean
    duenoId?: boolean
    placa?: boolean
    marca?: boolean
    carroceria?: boolean
    modelo?: boolean
    anio?: boolean
    capacidad?: boolean
    color?: boolean
    estado?: boolean
    cooperativa?: boolean | CooperativaDefaultArgs<ExtArgs>
    dueno?: boolean | DuenoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    cooperativaId?: boolean
    duenoId?: boolean
    placa?: boolean
    marca?: boolean
    carroceria?: boolean
    modelo?: boolean
    anio?: boolean
    capacidad?: boolean
    color?: boolean
    estado?: boolean
  }

  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cooperativa?: boolean | CooperativaDefaultArgs<ExtArgs>
    dueno?: boolean | DuenoDefaultArgs<ExtArgs>
    asientos?: boolean | Bus$asientosArgs<ExtArgs>
    frecuencias?: boolean | Bus$frecuenciasArgs<ExtArgs>
    turnos?: boolean | Bus$turnosArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cooperativa?: boolean | CooperativaDefaultArgs<ExtArgs>
    dueno?: boolean | DuenoDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      cooperativa: Prisma.$CooperativaPayload<ExtArgs>
      dueno: Prisma.$DuenoPayload<ExtArgs>
      asientos: Prisma.$AsientoPayload<ExtArgs>[]
      frecuencias: Prisma.$FrecuenciaPayload<ExtArgs>[]
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cooperativaId: number
      duenoId: number
      placa: string
      marca: string
      carroceria: string
      modelo: string
      anio: number
      capacidad: number
      color: string | null
      estado: $Enums.EstadoBus
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
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
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cooperativa<T extends CooperativaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CooperativaDefaultArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dueno<T extends DuenoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DuenoDefaultArgs<ExtArgs>>): Prisma__DuenoClient<$Result.GetResult<Prisma.$DuenoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    asientos<T extends Bus$asientosArgs<ExtArgs> = {}>(args?: Subset<T, Bus$asientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findMany"> | Null>
    frecuencias<T extends Bus$frecuenciasArgs<ExtArgs> = {}>(args?: Subset<T, Bus$frecuenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findMany"> | Null>
    turnos<T extends Bus$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Bus$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Bus model
   */ 
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'Int'>
    readonly cooperativaId: FieldRef<"Bus", 'Int'>
    readonly duenoId: FieldRef<"Bus", 'Int'>
    readonly placa: FieldRef<"Bus", 'String'>
    readonly marca: FieldRef<"Bus", 'String'>
    readonly carroceria: FieldRef<"Bus", 'String'>
    readonly modelo: FieldRef<"Bus", 'String'>
    readonly anio: FieldRef<"Bus", 'Int'>
    readonly capacidad: FieldRef<"Bus", 'Int'>
    readonly color: FieldRef<"Bus", 'String'>
    readonly estado: FieldRef<"Bus", 'EstadoBus'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
  }

  /**
   * Bus.asientos
   */
  export type Bus$asientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    where?: AsientoWhereInput
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    cursor?: AsientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Bus.frecuencias
   */
  export type Bus$frecuenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    where?: FrecuenciaWhereInput
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    cursor?: FrecuenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrecuenciaScalarFieldEnum | FrecuenciaScalarFieldEnum[]
  }

  /**
   * Bus.turnos
   */
  export type Bus$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Chofer
   */

  export type AggregateChofer = {
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  export type ChoferAvgAggregateOutputType = {
    id: number | null
  }

  export type ChoferSumAggregateOutputType = {
    id: number | null
  }

  export type ChoferMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    licencia: string | null
    tipoLicencia: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type ChoferMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    licencia: string | null
    tipoLicencia: string | null
    estado: $Enums.EstadoGeneral | null
  }

  export type ChoferCountAggregateOutputType = {
    id: number
    nombre: number
    cedula: number
    telefono: number
    licencia: number
    tipoLicencia: number
    estado: number
    _all: number
  }


  export type ChoferAvgAggregateInputType = {
    id?: true
  }

  export type ChoferSumAggregateInputType = {
    id?: true
  }

  export type ChoferMinAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    licencia?: true
    tipoLicencia?: true
    estado?: true
  }

  export type ChoferMaxAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    licencia?: true
    tipoLicencia?: true
    estado?: true
  }

  export type ChoferCountAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    telefono?: true
    licencia?: true
    tipoLicencia?: true
    estado?: true
    _all?: true
  }

  export type ChoferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofer to aggregate.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chofers
    **/
    _count?: true | ChoferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoferMaxAggregateInputType
  }

  export type GetChoferAggregateType<T extends ChoferAggregateArgs> = {
        [P in keyof T & keyof AggregateChofer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChofer[P]>
      : GetScalarType<T[P], AggregateChofer[P]>
  }




  export type ChoferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoferWhereInput
    orderBy?: ChoferOrderByWithAggregationInput | ChoferOrderByWithAggregationInput[]
    by: ChoferScalarFieldEnum[] | ChoferScalarFieldEnum
    having?: ChoferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoferCountAggregateInputType | true
    _avg?: ChoferAvgAggregateInputType
    _sum?: ChoferSumAggregateInputType
    _min?: ChoferMinAggregateInputType
    _max?: ChoferMaxAggregateInputType
  }

  export type ChoferGroupByOutputType = {
    id: number
    nombre: string
    cedula: string
    telefono: string | null
    licencia: string
    tipoLicencia: string
    estado: $Enums.EstadoGeneral
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  type GetChoferGroupByPayload<T extends ChoferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoferGroupByOutputType[P]>
            : GetScalarType<T[P], ChoferGroupByOutputType[P]>
        }
      >
    >


  export type ChoferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    licencia?: boolean
    tipoLicencia?: boolean
    estado?: boolean
    turnos?: boolean | Chofer$turnosArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>

  export type ChoferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    licencia?: boolean
    tipoLicencia?: boolean
    estado?: boolean
  }, ExtArgs["result"]["chofer"]>

  export type ChoferSelectScalar = {
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    licencia?: boolean
    tipoLicencia?: boolean
    estado?: boolean
  }

  export type ChoferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | Chofer$turnosArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChoferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chofer"
    objects: {
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      cedula: string
      telefono: string | null
      licencia: string
      tipoLicencia: string
      estado: $Enums.EstadoGeneral
    }, ExtArgs["result"]["chofer"]>
    composites: {}
  }

  type ChoferGetPayload<S extends boolean | null | undefined | ChoferDefaultArgs> = $Result.GetResult<Prisma.$ChoferPayload, S>

  type ChoferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChoferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChoferCountAggregateInputType | true
    }

  export interface ChoferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chofer'], meta: { name: 'Chofer' } }
    /**
     * Find zero or one Chofer that matches the filter.
     * @param {ChoferFindUniqueArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoferFindUniqueArgs>(args: SelectSubset<T, ChoferFindUniqueArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chofer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChoferFindUniqueOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoferFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chofer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoferFindFirstArgs>(args?: SelectSubset<T, ChoferFindFirstArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chofer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoferFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoferFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chofers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chofers
     * const chofers = await prisma.chofer.findMany()
     * 
     * // Get first 10 Chofers
     * const chofers = await prisma.chofer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choferWithIdOnly = await prisma.chofer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoferFindManyArgs>(args?: SelectSubset<T, ChoferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chofer.
     * @param {ChoferCreateArgs} args - Arguments to create a Chofer.
     * @example
     * // Create one Chofer
     * const Chofer = await prisma.chofer.create({
     *   data: {
     *     // ... data to create a Chofer
     *   }
     * })
     * 
     */
    create<T extends ChoferCreateArgs>(args: SelectSubset<T, ChoferCreateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chofers.
     * @param {ChoferCreateManyArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoferCreateManyArgs>(args?: SelectSubset<T, ChoferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chofers and returns the data saved in the database.
     * @param {ChoferCreateManyAndReturnArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chofers and only return the `id`
     * const choferWithIdOnly = await prisma.chofer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoferCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chofer.
     * @param {ChoferDeleteArgs} args - Arguments to delete one Chofer.
     * @example
     * // Delete one Chofer
     * const Chofer = await prisma.chofer.delete({
     *   where: {
     *     // ... filter to delete one Chofer
     *   }
     * })
     * 
     */
    delete<T extends ChoferDeleteArgs>(args: SelectSubset<T, ChoferDeleteArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chofer.
     * @param {ChoferUpdateArgs} args - Arguments to update one Chofer.
     * @example
     * // Update one Chofer
     * const chofer = await prisma.chofer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoferUpdateArgs>(args: SelectSubset<T, ChoferUpdateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chofers.
     * @param {ChoferDeleteManyArgs} args - Arguments to filter Chofers to delete.
     * @example
     * // Delete a few Chofers
     * const { count } = await prisma.chofer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoferDeleteManyArgs>(args?: SelectSubset<T, ChoferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chofers
     * const chofer = await prisma.chofer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoferUpdateManyArgs>(args: SelectSubset<T, ChoferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chofer.
     * @param {ChoferUpsertArgs} args - Arguments to update or create a Chofer.
     * @example
     * // Update or create a Chofer
     * const chofer = await prisma.chofer.upsert({
     *   create: {
     *     // ... data to create a Chofer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chofer we want to update
     *   }
     * })
     */
    upsert<T extends ChoferUpsertArgs>(args: SelectSubset<T, ChoferUpsertArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferCountArgs} args - Arguments to filter Chofers to count.
     * @example
     * // Count the number of Chofers
     * const count = await prisma.chofer.count({
     *   where: {
     *     // ... the filter for the Chofers we want to count
     *   }
     * })
    **/
    count<T extends ChoferCountArgs>(
      args?: Subset<T, ChoferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoferAggregateArgs>(args: Subset<T, ChoferAggregateArgs>): Prisma.PrismaPromise<GetChoferAggregateType<T>>

    /**
     * Group by Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferGroupByArgs} args - Group by arguments.
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
      T extends ChoferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoferGroupByArgs['orderBy'] }
        : { orderBy?: ChoferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chofer model
   */
  readonly fields: ChoferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chofer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnos<T extends Chofer$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Chofer$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Chofer model
   */ 
  interface ChoferFieldRefs {
    readonly id: FieldRef<"Chofer", 'Int'>
    readonly nombre: FieldRef<"Chofer", 'String'>
    readonly cedula: FieldRef<"Chofer", 'String'>
    readonly telefono: FieldRef<"Chofer", 'String'>
    readonly licencia: FieldRef<"Chofer", 'String'>
    readonly tipoLicencia: FieldRef<"Chofer", 'String'>
    readonly estado: FieldRef<"Chofer", 'EstadoGeneral'>
  }
    

  // Custom InputTypes
  /**
   * Chofer findUnique
   */
  export type ChoferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findUniqueOrThrow
   */
  export type ChoferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findFirst
   */
  export type ChoferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findFirstOrThrow
   */
  export type ChoferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findMany
   */
  export type ChoferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofers to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer create
   */
  export type ChoferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to create a Chofer.
     */
    data: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
  }

  /**
   * Chofer createMany
   */
  export type ChoferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chofers.
     */
    data: ChoferCreateManyInput | ChoferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chofer createManyAndReturn
   */
  export type ChoferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chofers.
     */
    data: ChoferCreateManyInput | ChoferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chofer update
   */
  export type ChoferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to update a Chofer.
     */
    data: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
    /**
     * Choose, which Chofer to update.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer updateMany
   */
  export type ChoferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chofers.
     */
    data: XOR<ChoferUpdateManyMutationInput, ChoferUncheckedUpdateManyInput>
    /**
     * Filter which Chofers to update
     */
    where?: ChoferWhereInput
  }

  /**
   * Chofer upsert
   */
  export type ChoferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The filter to search for the Chofer to update in case it exists.
     */
    where: ChoferWhereUniqueInput
    /**
     * In case the Chofer found by the `where` argument doesn't exist, create a new Chofer with this data.
     */
    create: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
    /**
     * In case the Chofer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
  }

  /**
   * Chofer delete
   */
  export type ChoferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter which Chofer to delete.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer deleteMany
   */
  export type ChoferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofers to delete
     */
    where?: ChoferWhereInput
  }

  /**
   * Chofer.turnos
   */
  export type Chofer$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Chofer without action
   */
  export type ChoferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
  }


  /**
   * Model Ruta
   */

  export type AggregateRuta = {
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  export type RutaAvgAggregateOutputType = {
    id: number | null
    duracionMin: number | null
    precioPasaje: Decimal | null
  }

  export type RutaSumAggregateOutputType = {
    id: number | null
    duracionMin: number | null
    precioPasaje: Decimal | null
  }

  export type RutaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    origen: string | null
    destino: string | null
    duracionMin: number | null
    precioPasaje: Decimal | null
  }

  export type RutaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    origen: string | null
    destino: string | null
    duracionMin: number | null
    precioPasaje: Decimal | null
  }

  export type RutaCountAggregateOutputType = {
    id: number
    nombre: number
    origen: number
    destino: number
    duracionMin: number
    precioPasaje: number
    _all: number
  }


  export type RutaAvgAggregateInputType = {
    id?: true
    duracionMin?: true
    precioPasaje?: true
  }

  export type RutaSumAggregateInputType = {
    id?: true
    duracionMin?: true
    precioPasaje?: true
  }

  export type RutaMinAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    destino?: true
    duracionMin?: true
    precioPasaje?: true
  }

  export type RutaMaxAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    destino?: true
    duracionMin?: true
    precioPasaje?: true
  }

  export type RutaCountAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    destino?: true
    duracionMin?: true
    precioPasaje?: true
    _all?: true
  }

  export type RutaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruta to aggregate.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutas
    **/
    _count?: true | RutaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutaMaxAggregateInputType
  }

  export type GetRutaAggregateType<T extends RutaAggregateArgs> = {
        [P in keyof T & keyof AggregateRuta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuta[P]>
      : GetScalarType<T[P], AggregateRuta[P]>
  }




  export type RutaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutaWhereInput
    orderBy?: RutaOrderByWithAggregationInput | RutaOrderByWithAggregationInput[]
    by: RutaScalarFieldEnum[] | RutaScalarFieldEnum
    having?: RutaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutaCountAggregateInputType | true
    _avg?: RutaAvgAggregateInputType
    _sum?: RutaSumAggregateInputType
    _min?: RutaMinAggregateInputType
    _max?: RutaMaxAggregateInputType
  }

  export type RutaGroupByOutputType = {
    id: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal
    _count: RutaCountAggregateOutputType | null
    _avg: RutaAvgAggregateOutputType | null
    _sum: RutaSumAggregateOutputType | null
    _min: RutaMinAggregateOutputType | null
    _max: RutaMaxAggregateOutputType | null
  }

  type GetRutaGroupByPayload<T extends RutaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutaGroupByOutputType[P]>
            : GetScalarType<T[P], RutaGroupByOutputType[P]>
        }
      >
    >


  export type RutaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    origen?: boolean
    destino?: boolean
    duracionMin?: boolean
    precioPasaje?: boolean
    paradas?: boolean | Ruta$paradasArgs<ExtArgs>
    frecuencias?: boolean | Ruta$frecuenciasArgs<ExtArgs>
    turnos?: boolean | Ruta$turnosArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    origen?: boolean
    destino?: boolean
    duracionMin?: boolean
    precioPasaje?: boolean
  }, ExtArgs["result"]["ruta"]>

  export type RutaSelectScalar = {
    id?: boolean
    nombre?: boolean
    origen?: boolean
    destino?: boolean
    duracionMin?: boolean
    precioPasaje?: boolean
  }

  export type RutaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paradas?: boolean | Ruta$paradasArgs<ExtArgs>
    frecuencias?: boolean | Ruta$frecuenciasArgs<ExtArgs>
    turnos?: boolean | Ruta$turnosArgs<ExtArgs>
    _count?: boolean | RutaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RutaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruta"
    objects: {
      paradas: Prisma.$ParadaPayload<ExtArgs>[]
      frecuencias: Prisma.$FrecuenciaPayload<ExtArgs>[]
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      origen: string
      destino: string
      duracionMin: number
      precioPasaje: Prisma.Decimal
    }, ExtArgs["result"]["ruta"]>
    composites: {}
  }

  type RutaGetPayload<S extends boolean | null | undefined | RutaDefaultArgs> = $Result.GetResult<Prisma.$RutaPayload, S>

  type RutaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RutaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RutaCountAggregateInputType | true
    }

  export interface RutaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruta'], meta: { name: 'Ruta' } }
    /**
     * Find zero or one Ruta that matches the filter.
     * @param {RutaFindUniqueArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutaFindUniqueArgs>(args: SelectSubset<T, RutaFindUniqueArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ruta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RutaFindUniqueOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ruta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutaFindFirstArgs>(args?: SelectSubset<T, RutaFindFirstArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ruta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindFirstOrThrowArgs} args - Arguments to find a Ruta
     * @example
     * // Get one Ruta
     * const ruta = await prisma.ruta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rutas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutas
     * const rutas = await prisma.ruta.findMany()
     * 
     * // Get first 10 Rutas
     * const rutas = await prisma.ruta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutaWithIdOnly = await prisma.ruta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutaFindManyArgs>(args?: SelectSubset<T, RutaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ruta.
     * @param {RutaCreateArgs} args - Arguments to create a Ruta.
     * @example
     * // Create one Ruta
     * const Ruta = await prisma.ruta.create({
     *   data: {
     *     // ... data to create a Ruta
     *   }
     * })
     * 
     */
    create<T extends RutaCreateArgs>(args: SelectSubset<T, RutaCreateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rutas.
     * @param {RutaCreateManyArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutaCreateManyArgs>(args?: SelectSubset<T, RutaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutas and returns the data saved in the database.
     * @param {RutaCreateManyAndReturnArgs} args - Arguments to create many Rutas.
     * @example
     * // Create many Rutas
     * const ruta = await prisma.ruta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutas and only return the `id`
     * const rutaWithIdOnly = await prisma.ruta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ruta.
     * @param {RutaDeleteArgs} args - Arguments to delete one Ruta.
     * @example
     * // Delete one Ruta
     * const Ruta = await prisma.ruta.delete({
     *   where: {
     *     // ... filter to delete one Ruta
     *   }
     * })
     * 
     */
    delete<T extends RutaDeleteArgs>(args: SelectSubset<T, RutaDeleteArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ruta.
     * @param {RutaUpdateArgs} args - Arguments to update one Ruta.
     * @example
     * // Update one Ruta
     * const ruta = await prisma.ruta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutaUpdateArgs>(args: SelectSubset<T, RutaUpdateArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rutas.
     * @param {RutaDeleteManyArgs} args - Arguments to filter Rutas to delete.
     * @example
     * // Delete a few Rutas
     * const { count } = await prisma.ruta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutaDeleteManyArgs>(args?: SelectSubset<T, RutaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutas
     * const ruta = await prisma.ruta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutaUpdateManyArgs>(args: SelectSubset<T, RutaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ruta.
     * @param {RutaUpsertArgs} args - Arguments to update or create a Ruta.
     * @example
     * // Update or create a Ruta
     * const ruta = await prisma.ruta.upsert({
     *   create: {
     *     // ... data to create a Ruta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruta we want to update
     *   }
     * })
     */
    upsert<T extends RutaUpsertArgs>(args: SelectSubset<T, RutaUpsertArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rutas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaCountArgs} args - Arguments to filter Rutas to count.
     * @example
     * // Count the number of Rutas
     * const count = await prisma.ruta.count({
     *   where: {
     *     // ... the filter for the Rutas we want to count
     *   }
     * })
    **/
    count<T extends RutaCountArgs>(
      args?: Subset<T, RutaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutaAggregateArgs>(args: Subset<T, RutaAggregateArgs>): Prisma.PrismaPromise<GetRutaAggregateType<T>>

    /**
     * Group by Ruta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutaGroupByArgs} args - Group by arguments.
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
      T extends RutaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutaGroupByArgs['orderBy'] }
        : { orderBy?: RutaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruta model
   */
  readonly fields: RutaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paradas<T extends Ruta$paradasArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$paradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findMany"> | Null>
    frecuencias<T extends Ruta$frecuenciasArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$frecuenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findMany"> | Null>
    turnos<T extends Ruta$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Ruta$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ruta model
   */ 
  interface RutaFieldRefs {
    readonly id: FieldRef<"Ruta", 'Int'>
    readonly nombre: FieldRef<"Ruta", 'String'>
    readonly origen: FieldRef<"Ruta", 'String'>
    readonly destino: FieldRef<"Ruta", 'String'>
    readonly duracionMin: FieldRef<"Ruta", 'Int'>
    readonly precioPasaje: FieldRef<"Ruta", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Ruta findUnique
   */
  export type RutaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findUniqueOrThrow
   */
  export type RutaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta findFirst
   */
  export type RutaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findFirstOrThrow
   */
  export type RutaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Ruta to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutas.
     */
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta findMany
   */
  export type RutaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter, which Rutas to fetch.
     */
    where?: RutaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutas to fetch.
     */
    orderBy?: RutaOrderByWithRelationInput | RutaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutas.
     */
    cursor?: RutaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutas.
     */
    skip?: number
    distinct?: RutaScalarFieldEnum | RutaScalarFieldEnum[]
  }

  /**
   * Ruta create
   */
  export type RutaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruta.
     */
    data: XOR<RutaCreateInput, RutaUncheckedCreateInput>
  }

  /**
   * Ruta createMany
   */
  export type RutaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta createManyAndReturn
   */
  export type RutaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rutas.
     */
    data: RutaCreateManyInput | RutaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruta update
   */
  export type RutaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruta.
     */
    data: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
    /**
     * Choose, which Ruta to update.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta updateMany
   */
  export type RutaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutas.
     */
    data: XOR<RutaUpdateManyMutationInput, RutaUncheckedUpdateManyInput>
    /**
     * Filter which Rutas to update
     */
    where?: RutaWhereInput
  }

  /**
   * Ruta upsert
   */
  export type RutaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruta to update in case it exists.
     */
    where: RutaWhereUniqueInput
    /**
     * In case the Ruta found by the `where` argument doesn't exist, create a new Ruta with this data.
     */
    create: XOR<RutaCreateInput, RutaUncheckedCreateInput>
    /**
     * In case the Ruta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutaUpdateInput, RutaUncheckedUpdateInput>
  }

  /**
   * Ruta delete
   */
  export type RutaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
    /**
     * Filter which Ruta to delete.
     */
    where: RutaWhereUniqueInput
  }

  /**
   * Ruta deleteMany
   */
  export type RutaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutas to delete
     */
    where?: RutaWhereInput
  }

  /**
   * Ruta.paradas
   */
  export type Ruta$paradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    where?: ParadaWhereInput
    orderBy?: ParadaOrderByWithRelationInput | ParadaOrderByWithRelationInput[]
    cursor?: ParadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * Ruta.frecuencias
   */
  export type Ruta$frecuenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    where?: FrecuenciaWhereInput
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    cursor?: FrecuenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrecuenciaScalarFieldEnum | FrecuenciaScalarFieldEnum[]
  }

  /**
   * Ruta.turnos
   */
  export type Ruta$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Ruta without action
   */
  export type RutaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruta
     */
    select?: RutaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutaInclude<ExtArgs> | null
  }


  /**
   * Model Parada
   */

  export type AggregateParada = {
    _count: ParadaCountAggregateOutputType | null
    _avg: ParadaAvgAggregateOutputType | null
    _sum: ParadaSumAggregateOutputType | null
    _min: ParadaMinAggregateOutputType | null
    _max: ParadaMaxAggregateOutputType | null
  }

  export type ParadaAvgAggregateOutputType = {
    id: number | null
    rutaId: number | null
    orden: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    metrosAlerta: number | null
  }

  export type ParadaSumAggregateOutputType = {
    id: number | null
    rutaId: number | null
    orden: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    metrosAlerta: number | null
  }

  export type ParadaMinAggregateOutputType = {
    id: number | null
    rutaId: number | null
    nombre: string | null
    orden: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    metrosAlerta: number | null
  }

  export type ParadaMaxAggregateOutputType = {
    id: number | null
    rutaId: number | null
    nombre: string | null
    orden: number | null
    latitud: Decimal | null
    longitud: Decimal | null
    metrosAlerta: number | null
  }

  export type ParadaCountAggregateOutputType = {
    id: number
    rutaId: number
    nombre: number
    orden: number
    latitud: number
    longitud: number
    metrosAlerta: number
    _all: number
  }


  export type ParadaAvgAggregateInputType = {
    id?: true
    rutaId?: true
    orden?: true
    latitud?: true
    longitud?: true
    metrosAlerta?: true
  }

  export type ParadaSumAggregateInputType = {
    id?: true
    rutaId?: true
    orden?: true
    latitud?: true
    longitud?: true
    metrosAlerta?: true
  }

  export type ParadaMinAggregateInputType = {
    id?: true
    rutaId?: true
    nombre?: true
    orden?: true
    latitud?: true
    longitud?: true
    metrosAlerta?: true
  }

  export type ParadaMaxAggregateInputType = {
    id?: true
    rutaId?: true
    nombre?: true
    orden?: true
    latitud?: true
    longitud?: true
    metrosAlerta?: true
  }

  export type ParadaCountAggregateInputType = {
    id?: true
    rutaId?: true
    nombre?: true
    orden?: true
    latitud?: true
    longitud?: true
    metrosAlerta?: true
    _all?: true
  }

  export type ParadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parada to aggregate.
     */
    where?: ParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paradas to fetch.
     */
    orderBy?: ParadaOrderByWithRelationInput | ParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paradas
    **/
    _count?: true | ParadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParadaMaxAggregateInputType
  }

  export type GetParadaAggregateType<T extends ParadaAggregateArgs> = {
        [P in keyof T & keyof AggregateParada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParada[P]>
      : GetScalarType<T[P], AggregateParada[P]>
  }




  export type ParadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParadaWhereInput
    orderBy?: ParadaOrderByWithAggregationInput | ParadaOrderByWithAggregationInput[]
    by: ParadaScalarFieldEnum[] | ParadaScalarFieldEnum
    having?: ParadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParadaCountAggregateInputType | true
    _avg?: ParadaAvgAggregateInputType
    _sum?: ParadaSumAggregateInputType
    _min?: ParadaMinAggregateInputType
    _max?: ParadaMaxAggregateInputType
  }

  export type ParadaGroupByOutputType = {
    id: number
    rutaId: number
    nombre: string
    orden: number
    latitud: Decimal
    longitud: Decimal
    metrosAlerta: number
    _count: ParadaCountAggregateOutputType | null
    _avg: ParadaAvgAggregateOutputType | null
    _sum: ParadaSumAggregateOutputType | null
    _min: ParadaMinAggregateOutputType | null
    _max: ParadaMaxAggregateOutputType | null
  }

  type GetParadaGroupByPayload<T extends ParadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParadaGroupByOutputType[P]>
            : GetScalarType<T[P], ParadaGroupByOutputType[P]>
        }
      >
    >


  export type ParadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutaId?: boolean
    nombre?: boolean
    orden?: boolean
    latitud?: boolean
    longitud?: boolean
    metrosAlerta?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parada"]>

  export type ParadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutaId?: boolean
    nombre?: boolean
    orden?: boolean
    latitud?: boolean
    longitud?: boolean
    metrosAlerta?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parada"]>

  export type ParadaSelectScalar = {
    id?: boolean
    rutaId?: boolean
    nombre?: boolean
    orden?: boolean
    latitud?: boolean
    longitud?: boolean
    metrosAlerta?: boolean
  }

  export type ParadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }
  export type ParadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
  }

  export type $ParadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parada"
    objects: {
      ruta: Prisma.$RutaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutaId: number
      nombre: string
      orden: number
      latitud: Prisma.Decimal
      longitud: Prisma.Decimal
      metrosAlerta: number
    }, ExtArgs["result"]["parada"]>
    composites: {}
  }

  type ParadaGetPayload<S extends boolean | null | undefined | ParadaDefaultArgs> = $Result.GetResult<Prisma.$ParadaPayload, S>

  type ParadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParadaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParadaCountAggregateInputType | true
    }

  export interface ParadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parada'], meta: { name: 'Parada' } }
    /**
     * Find zero or one Parada that matches the filter.
     * @param {ParadaFindUniqueArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParadaFindUniqueArgs>(args: SelectSubset<T, ParadaFindUniqueArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Parada that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParadaFindUniqueOrThrowArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParadaFindUniqueOrThrowArgs>(args: SelectSubset<T, ParadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Parada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaFindFirstArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParadaFindFirstArgs>(args?: SelectSubset<T, ParadaFindFirstArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Parada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaFindFirstOrThrowArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParadaFindFirstOrThrowArgs>(args?: SelectSubset<T, ParadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Paradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paradas
     * const paradas = await prisma.parada.findMany()
     * 
     * // Get first 10 Paradas
     * const paradas = await prisma.parada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paradaWithIdOnly = await prisma.parada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParadaFindManyArgs>(args?: SelectSubset<T, ParadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Parada.
     * @param {ParadaCreateArgs} args - Arguments to create a Parada.
     * @example
     * // Create one Parada
     * const Parada = await prisma.parada.create({
     *   data: {
     *     // ... data to create a Parada
     *   }
     * })
     * 
     */
    create<T extends ParadaCreateArgs>(args: SelectSubset<T, ParadaCreateArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Paradas.
     * @param {ParadaCreateManyArgs} args - Arguments to create many Paradas.
     * @example
     * // Create many Paradas
     * const parada = await prisma.parada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParadaCreateManyArgs>(args?: SelectSubset<T, ParadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paradas and returns the data saved in the database.
     * @param {ParadaCreateManyAndReturnArgs} args - Arguments to create many Paradas.
     * @example
     * // Create many Paradas
     * const parada = await prisma.parada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paradas and only return the `id`
     * const paradaWithIdOnly = await prisma.parada.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParadaCreateManyAndReturnArgs>(args?: SelectSubset<T, ParadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Parada.
     * @param {ParadaDeleteArgs} args - Arguments to delete one Parada.
     * @example
     * // Delete one Parada
     * const Parada = await prisma.parada.delete({
     *   where: {
     *     // ... filter to delete one Parada
     *   }
     * })
     * 
     */
    delete<T extends ParadaDeleteArgs>(args: SelectSubset<T, ParadaDeleteArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Parada.
     * @param {ParadaUpdateArgs} args - Arguments to update one Parada.
     * @example
     * // Update one Parada
     * const parada = await prisma.parada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParadaUpdateArgs>(args: SelectSubset<T, ParadaUpdateArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Paradas.
     * @param {ParadaDeleteManyArgs} args - Arguments to filter Paradas to delete.
     * @example
     * // Delete a few Paradas
     * const { count } = await prisma.parada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParadaDeleteManyArgs>(args?: SelectSubset<T, ParadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paradas
     * const parada = await prisma.parada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParadaUpdateManyArgs>(args: SelectSubset<T, ParadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parada.
     * @param {ParadaUpsertArgs} args - Arguments to update or create a Parada.
     * @example
     * // Update or create a Parada
     * const parada = await prisma.parada.upsert({
     *   create: {
     *     // ... data to create a Parada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parada we want to update
     *   }
     * })
     */
    upsert<T extends ParadaUpsertArgs>(args: SelectSubset<T, ParadaUpsertArgs<ExtArgs>>): Prisma__ParadaClient<$Result.GetResult<Prisma.$ParadaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Paradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaCountArgs} args - Arguments to filter Paradas to count.
     * @example
     * // Count the number of Paradas
     * const count = await prisma.parada.count({
     *   where: {
     *     // ... the filter for the Paradas we want to count
     *   }
     * })
    **/
    count<T extends ParadaCountArgs>(
      args?: Subset<T, ParadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParadaAggregateArgs>(args: Subset<T, ParadaAggregateArgs>): Prisma.PrismaPromise<GetParadaAggregateType<T>>

    /**
     * Group by Parada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaGroupByArgs} args - Group by arguments.
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
      T extends ParadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParadaGroupByArgs['orderBy'] }
        : { orderBy?: ParadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parada model
   */
  readonly fields: ParadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Parada model
   */ 
  interface ParadaFieldRefs {
    readonly id: FieldRef<"Parada", 'Int'>
    readonly rutaId: FieldRef<"Parada", 'Int'>
    readonly nombre: FieldRef<"Parada", 'String'>
    readonly orden: FieldRef<"Parada", 'Int'>
    readonly latitud: FieldRef<"Parada", 'Decimal'>
    readonly longitud: FieldRef<"Parada", 'Decimal'>
    readonly metrosAlerta: FieldRef<"Parada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Parada findUnique
   */
  export type ParadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter, which Parada to fetch.
     */
    where: ParadaWhereUniqueInput
  }

  /**
   * Parada findUniqueOrThrow
   */
  export type ParadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter, which Parada to fetch.
     */
    where: ParadaWhereUniqueInput
  }

  /**
   * Parada findFirst
   */
  export type ParadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter, which Parada to fetch.
     */
    where?: ParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paradas to fetch.
     */
    orderBy?: ParadaOrderByWithRelationInput | ParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paradas.
     */
    cursor?: ParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paradas.
     */
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * Parada findFirstOrThrow
   */
  export type ParadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter, which Parada to fetch.
     */
    where?: ParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paradas to fetch.
     */
    orderBy?: ParadaOrderByWithRelationInput | ParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paradas.
     */
    cursor?: ParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paradas.
     */
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * Parada findMany
   */
  export type ParadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter, which Paradas to fetch.
     */
    where?: ParadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paradas to fetch.
     */
    orderBy?: ParadaOrderByWithRelationInput | ParadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paradas.
     */
    cursor?: ParadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paradas.
     */
    skip?: number
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * Parada create
   */
  export type ParadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Parada.
     */
    data: XOR<ParadaCreateInput, ParadaUncheckedCreateInput>
  }

  /**
   * Parada createMany
   */
  export type ParadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paradas.
     */
    data: ParadaCreateManyInput | ParadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parada createManyAndReturn
   */
  export type ParadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Paradas.
     */
    data: ParadaCreateManyInput | ParadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parada update
   */
  export type ParadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Parada.
     */
    data: XOR<ParadaUpdateInput, ParadaUncheckedUpdateInput>
    /**
     * Choose, which Parada to update.
     */
    where: ParadaWhereUniqueInput
  }

  /**
   * Parada updateMany
   */
  export type ParadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paradas.
     */
    data: XOR<ParadaUpdateManyMutationInput, ParadaUncheckedUpdateManyInput>
    /**
     * Filter which Paradas to update
     */
    where?: ParadaWhereInput
  }

  /**
   * Parada upsert
   */
  export type ParadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Parada to update in case it exists.
     */
    where: ParadaWhereUniqueInput
    /**
     * In case the Parada found by the `where` argument doesn't exist, create a new Parada with this data.
     */
    create: XOR<ParadaCreateInput, ParadaUncheckedCreateInput>
    /**
     * In case the Parada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParadaUpdateInput, ParadaUncheckedUpdateInput>
  }

  /**
   * Parada delete
   */
  export type ParadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
    /**
     * Filter which Parada to delete.
     */
    where: ParadaWhereUniqueInput
  }

  /**
   * Parada deleteMany
   */
  export type ParadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paradas to delete
     */
    where?: ParadaWhereInput
  }

  /**
   * Parada without action
   */
  export type ParadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parada
     */
    select?: ParadaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParadaInclude<ExtArgs> | null
  }


  /**
   * Model Frecuencia
   */

  export type AggregateFrecuencia = {
    _count: FrecuenciaCountAggregateOutputType | null
    _avg: FrecuenciaAvgAggregateOutputType | null
    _sum: FrecuenciaSumAggregateOutputType | null
    _min: FrecuenciaMinAggregateOutputType | null
    _max: FrecuenciaMaxAggregateOutputType | null
  }

  export type FrecuenciaAvgAggregateOutputType = {
    id: number | null
    rutaId: number | null
    busId: number | null
  }

  export type FrecuenciaSumAggregateOutputType = {
    id: number | null
    rutaId: number | null
    busId: number | null
  }

  export type FrecuenciaMinAggregateOutputType = {
    id: number | null
    rutaId: number | null
    busId: number | null
    diaSemana: $Enums.DiaSemana | null
    horaSalida: string | null
    horaLlegada: string | null
  }

  export type FrecuenciaMaxAggregateOutputType = {
    id: number | null
    rutaId: number | null
    busId: number | null
    diaSemana: $Enums.DiaSemana | null
    horaSalida: string | null
    horaLlegada: string | null
  }

  export type FrecuenciaCountAggregateOutputType = {
    id: number
    rutaId: number
    busId: number
    diaSemana: number
    horaSalida: number
    horaLlegada: number
    _all: number
  }


  export type FrecuenciaAvgAggregateInputType = {
    id?: true
    rutaId?: true
    busId?: true
  }

  export type FrecuenciaSumAggregateInputType = {
    id?: true
    rutaId?: true
    busId?: true
  }

  export type FrecuenciaMinAggregateInputType = {
    id?: true
    rutaId?: true
    busId?: true
    diaSemana?: true
    horaSalida?: true
    horaLlegada?: true
  }

  export type FrecuenciaMaxAggregateInputType = {
    id?: true
    rutaId?: true
    busId?: true
    diaSemana?: true
    horaSalida?: true
    horaLlegada?: true
  }

  export type FrecuenciaCountAggregateInputType = {
    id?: true
    rutaId?: true
    busId?: true
    diaSemana?: true
    horaSalida?: true
    horaLlegada?: true
    _all?: true
  }

  export type FrecuenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frecuencia to aggregate.
     */
    where?: FrecuenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frecuencias to fetch.
     */
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrecuenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frecuencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frecuencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frecuencias
    **/
    _count?: true | FrecuenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FrecuenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FrecuenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrecuenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrecuenciaMaxAggregateInputType
  }

  export type GetFrecuenciaAggregateType<T extends FrecuenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFrecuencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrecuencia[P]>
      : GetScalarType<T[P], AggregateFrecuencia[P]>
  }




  export type FrecuenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrecuenciaWhereInput
    orderBy?: FrecuenciaOrderByWithAggregationInput | FrecuenciaOrderByWithAggregationInput[]
    by: FrecuenciaScalarFieldEnum[] | FrecuenciaScalarFieldEnum
    having?: FrecuenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrecuenciaCountAggregateInputType | true
    _avg?: FrecuenciaAvgAggregateInputType
    _sum?: FrecuenciaSumAggregateInputType
    _min?: FrecuenciaMinAggregateInputType
    _max?: FrecuenciaMaxAggregateInputType
  }

  export type FrecuenciaGroupByOutputType = {
    id: number
    rutaId: number
    busId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
    _count: FrecuenciaCountAggregateOutputType | null
    _avg: FrecuenciaAvgAggregateOutputType | null
    _sum: FrecuenciaSumAggregateOutputType | null
    _min: FrecuenciaMinAggregateOutputType | null
    _max: FrecuenciaMaxAggregateOutputType | null
  }

  type GetFrecuenciaGroupByPayload<T extends FrecuenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrecuenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrecuenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrecuenciaGroupByOutputType[P]>
            : GetScalarType<T[P], FrecuenciaGroupByOutputType[P]>
        }
      >
    >


  export type FrecuenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutaId?: boolean
    busId?: boolean
    diaSemana?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frecuencia"]>

  export type FrecuenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutaId?: boolean
    busId?: boolean
    diaSemana?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frecuencia"]>

  export type FrecuenciaSelectScalar = {
    id?: boolean
    rutaId?: boolean
    busId?: boolean
    diaSemana?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
  }

  export type FrecuenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }
  export type FrecuenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $FrecuenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frecuencia"
    objects: {
      ruta: Prisma.$RutaPayload<ExtArgs>
      bus: Prisma.$BusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutaId: number
      busId: number
      diaSemana: $Enums.DiaSemana
      horaSalida: string
      horaLlegada: string
    }, ExtArgs["result"]["frecuencia"]>
    composites: {}
  }

  type FrecuenciaGetPayload<S extends boolean | null | undefined | FrecuenciaDefaultArgs> = $Result.GetResult<Prisma.$FrecuenciaPayload, S>

  type FrecuenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FrecuenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FrecuenciaCountAggregateInputType | true
    }

  export interface FrecuenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frecuencia'], meta: { name: 'Frecuencia' } }
    /**
     * Find zero or one Frecuencia that matches the filter.
     * @param {FrecuenciaFindUniqueArgs} args - Arguments to find a Frecuencia
     * @example
     * // Get one Frecuencia
     * const frecuencia = await prisma.frecuencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrecuenciaFindUniqueArgs>(args: SelectSubset<T, FrecuenciaFindUniqueArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Frecuencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FrecuenciaFindUniqueOrThrowArgs} args - Arguments to find a Frecuencia
     * @example
     * // Get one Frecuencia
     * const frecuencia = await prisma.frecuencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrecuenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FrecuenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Frecuencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaFindFirstArgs} args - Arguments to find a Frecuencia
     * @example
     * // Get one Frecuencia
     * const frecuencia = await prisma.frecuencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrecuenciaFindFirstArgs>(args?: SelectSubset<T, FrecuenciaFindFirstArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Frecuencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaFindFirstOrThrowArgs} args - Arguments to find a Frecuencia
     * @example
     * // Get one Frecuencia
     * const frecuencia = await prisma.frecuencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrecuenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FrecuenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Frecuencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frecuencias
     * const frecuencias = await prisma.frecuencia.findMany()
     * 
     * // Get first 10 Frecuencias
     * const frecuencias = await prisma.frecuencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frecuenciaWithIdOnly = await prisma.frecuencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrecuenciaFindManyArgs>(args?: SelectSubset<T, FrecuenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Frecuencia.
     * @param {FrecuenciaCreateArgs} args - Arguments to create a Frecuencia.
     * @example
     * // Create one Frecuencia
     * const Frecuencia = await prisma.frecuencia.create({
     *   data: {
     *     // ... data to create a Frecuencia
     *   }
     * })
     * 
     */
    create<T extends FrecuenciaCreateArgs>(args: SelectSubset<T, FrecuenciaCreateArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Frecuencias.
     * @param {FrecuenciaCreateManyArgs} args - Arguments to create many Frecuencias.
     * @example
     * // Create many Frecuencias
     * const frecuencia = await prisma.frecuencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrecuenciaCreateManyArgs>(args?: SelectSubset<T, FrecuenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frecuencias and returns the data saved in the database.
     * @param {FrecuenciaCreateManyAndReturnArgs} args - Arguments to create many Frecuencias.
     * @example
     * // Create many Frecuencias
     * const frecuencia = await prisma.frecuencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frecuencias and only return the `id`
     * const frecuenciaWithIdOnly = await prisma.frecuencia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrecuenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, FrecuenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Frecuencia.
     * @param {FrecuenciaDeleteArgs} args - Arguments to delete one Frecuencia.
     * @example
     * // Delete one Frecuencia
     * const Frecuencia = await prisma.frecuencia.delete({
     *   where: {
     *     // ... filter to delete one Frecuencia
     *   }
     * })
     * 
     */
    delete<T extends FrecuenciaDeleteArgs>(args: SelectSubset<T, FrecuenciaDeleteArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Frecuencia.
     * @param {FrecuenciaUpdateArgs} args - Arguments to update one Frecuencia.
     * @example
     * // Update one Frecuencia
     * const frecuencia = await prisma.frecuencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrecuenciaUpdateArgs>(args: SelectSubset<T, FrecuenciaUpdateArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Frecuencias.
     * @param {FrecuenciaDeleteManyArgs} args - Arguments to filter Frecuencias to delete.
     * @example
     * // Delete a few Frecuencias
     * const { count } = await prisma.frecuencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrecuenciaDeleteManyArgs>(args?: SelectSubset<T, FrecuenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frecuencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frecuencias
     * const frecuencia = await prisma.frecuencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrecuenciaUpdateManyArgs>(args: SelectSubset<T, FrecuenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Frecuencia.
     * @param {FrecuenciaUpsertArgs} args - Arguments to update or create a Frecuencia.
     * @example
     * // Update or create a Frecuencia
     * const frecuencia = await prisma.frecuencia.upsert({
     *   create: {
     *     // ... data to create a Frecuencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frecuencia we want to update
     *   }
     * })
     */
    upsert<T extends FrecuenciaUpsertArgs>(args: SelectSubset<T, FrecuenciaUpsertArgs<ExtArgs>>): Prisma__FrecuenciaClient<$Result.GetResult<Prisma.$FrecuenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Frecuencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaCountArgs} args - Arguments to filter Frecuencias to count.
     * @example
     * // Count the number of Frecuencias
     * const count = await prisma.frecuencia.count({
     *   where: {
     *     // ... the filter for the Frecuencias we want to count
     *   }
     * })
    **/
    count<T extends FrecuenciaCountArgs>(
      args?: Subset<T, FrecuenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrecuenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frecuencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrecuenciaAggregateArgs>(args: Subset<T, FrecuenciaAggregateArgs>): Prisma.PrismaPromise<GetFrecuenciaAggregateType<T>>

    /**
     * Group by Frecuencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrecuenciaGroupByArgs} args - Group by arguments.
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
      T extends FrecuenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrecuenciaGroupByArgs['orderBy'] }
        : { orderBy?: FrecuenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrecuenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrecuenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frecuencia model
   */
  readonly fields: FrecuenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frecuencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrecuenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Frecuencia model
   */ 
  interface FrecuenciaFieldRefs {
    readonly id: FieldRef<"Frecuencia", 'Int'>
    readonly rutaId: FieldRef<"Frecuencia", 'Int'>
    readonly busId: FieldRef<"Frecuencia", 'Int'>
    readonly diaSemana: FieldRef<"Frecuencia", 'DiaSemana'>
    readonly horaSalida: FieldRef<"Frecuencia", 'String'>
    readonly horaLlegada: FieldRef<"Frecuencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Frecuencia findUnique
   */
  export type FrecuenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frecuencia to fetch.
     */
    where: FrecuenciaWhereUniqueInput
  }

  /**
   * Frecuencia findUniqueOrThrow
   */
  export type FrecuenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frecuencia to fetch.
     */
    where: FrecuenciaWhereUniqueInput
  }

  /**
   * Frecuencia findFirst
   */
  export type FrecuenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frecuencia to fetch.
     */
    where?: FrecuenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frecuencias to fetch.
     */
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frecuencias.
     */
    cursor?: FrecuenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frecuencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frecuencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frecuencias.
     */
    distinct?: FrecuenciaScalarFieldEnum | FrecuenciaScalarFieldEnum[]
  }

  /**
   * Frecuencia findFirstOrThrow
   */
  export type FrecuenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frecuencia to fetch.
     */
    where?: FrecuenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frecuencias to fetch.
     */
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frecuencias.
     */
    cursor?: FrecuenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frecuencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frecuencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frecuencias.
     */
    distinct?: FrecuenciaScalarFieldEnum | FrecuenciaScalarFieldEnum[]
  }

  /**
   * Frecuencia findMany
   */
  export type FrecuenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter, which Frecuencias to fetch.
     */
    where?: FrecuenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frecuencias to fetch.
     */
    orderBy?: FrecuenciaOrderByWithRelationInput | FrecuenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frecuencias.
     */
    cursor?: FrecuenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frecuencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frecuencias.
     */
    skip?: number
    distinct?: FrecuenciaScalarFieldEnum | FrecuenciaScalarFieldEnum[]
  }

  /**
   * Frecuencia create
   */
  export type FrecuenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Frecuencia.
     */
    data: XOR<FrecuenciaCreateInput, FrecuenciaUncheckedCreateInput>
  }

  /**
   * Frecuencia createMany
   */
  export type FrecuenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frecuencias.
     */
    data: FrecuenciaCreateManyInput | FrecuenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frecuencia createManyAndReturn
   */
  export type FrecuenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Frecuencias.
     */
    data: FrecuenciaCreateManyInput | FrecuenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frecuencia update
   */
  export type FrecuenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Frecuencia.
     */
    data: XOR<FrecuenciaUpdateInput, FrecuenciaUncheckedUpdateInput>
    /**
     * Choose, which Frecuencia to update.
     */
    where: FrecuenciaWhereUniqueInput
  }

  /**
   * Frecuencia updateMany
   */
  export type FrecuenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frecuencias.
     */
    data: XOR<FrecuenciaUpdateManyMutationInput, FrecuenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frecuencias to update
     */
    where?: FrecuenciaWhereInput
  }

  /**
   * Frecuencia upsert
   */
  export type FrecuenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Frecuencia to update in case it exists.
     */
    where: FrecuenciaWhereUniqueInput
    /**
     * In case the Frecuencia found by the `where` argument doesn't exist, create a new Frecuencia with this data.
     */
    create: XOR<FrecuenciaCreateInput, FrecuenciaUncheckedCreateInput>
    /**
     * In case the Frecuencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrecuenciaUpdateInput, FrecuenciaUncheckedUpdateInput>
  }

  /**
   * Frecuencia delete
   */
  export type FrecuenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
    /**
     * Filter which Frecuencia to delete.
     */
    where: FrecuenciaWhereUniqueInput
  }

  /**
   * Frecuencia deleteMany
   */
  export type FrecuenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frecuencias to delete
     */
    where?: FrecuenciaWhereInput
  }

  /**
   * Frecuencia without action
   */
  export type FrecuenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frecuencia
     */
    select?: FrecuenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrecuenciaInclude<ExtArgs> | null
  }


  /**
   * Model Turno
   */

  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoAvgAggregateOutputType = {
    id: number | null
    busId: number | null
    rutaId: number | null
    choferId: number | null
  }

  export type TurnoSumAggregateOutputType = {
    id: number | null
    busId: number | null
    rutaId: number | null
    choferId: number | null
  }

  export type TurnoMinAggregateOutputType = {
    id: number | null
    busId: number | null
    rutaId: number | null
    choferId: number | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoTurno | null
  }

  export type TurnoMaxAggregateOutputType = {
    id: number | null
    busId: number | null
    rutaId: number | null
    choferId: number | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    estado: $Enums.EstadoTurno | null
  }

  export type TurnoCountAggregateOutputType = {
    id: number
    busId: number
    rutaId: number
    choferId: number
    fecha: number
    horaInicio: number
    horaFin: number
    estado: number
    _all: number
  }


  export type TurnoAvgAggregateInputType = {
    id?: true
    busId?: true
    rutaId?: true
    choferId?: true
  }

  export type TurnoSumAggregateInputType = {
    id?: true
    busId?: true
    rutaId?: true
    choferId?: true
  }

  export type TurnoMinAggregateInputType = {
    id?: true
    busId?: true
    rutaId?: true
    choferId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
  }

  export type TurnoMaxAggregateInputType = {
    id?: true
    busId?: true
    rutaId?: true
    choferId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
  }

  export type TurnoCountAggregateInputType = {
    id?: true
    busId?: true
    rutaId?: true
    choferId?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    estado?: true
    _all?: true
  }

  export type TurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turno to aggregate.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithAggregationInput | TurnoOrderByWithAggregationInput[]
    by: TurnoScalarFieldEnum[] | TurnoScalarFieldEnum
    having?: TurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _avg?: TurnoAvgAggregateInputType
    _sum?: TurnoSumAggregateInputType
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }

  export type TurnoGroupByOutputType = {
    id: number
    busId: number
    rutaId: number
    choferId: number
    fecha: Date
    horaInicio: string
    horaFin: string | null
    estado: $Enums.EstadoTurno
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    rutaId?: boolean
    choferId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    asientosTurno?: boolean | Turno$asientosTurnoArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    rutaId?: boolean
    choferId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectScalar = {
    id?: boolean
    busId?: boolean
    rutaId?: boolean
    choferId?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    estado?: boolean
  }

  export type TurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
    asientosTurno?: boolean | Turno$asientosTurnoArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    ruta?: boolean | RutaDefaultArgs<ExtArgs>
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
  }

  export type $TurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turno"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      ruta: Prisma.$RutaPayload<ExtArgs>
      chofer: Prisma.$ChoferPayload<ExtArgs>
      asientosTurno: Prisma.$AsientoTurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      busId: number
      rutaId: number
      choferId: number
      fecha: Date
      horaInicio: string
      horaFin: string | null
      estado: $Enums.EstadoTurno
    }, ExtArgs["result"]["turno"]>
    composites: {}
  }

  type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = $Result.GetResult<Prisma.$TurnoPayload, S>

  type TurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface TurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turno'], meta: { name: 'Turno' } }
    /**
     * Find zero or one Turno that matches the filter.
     * @param {TurnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoFindUniqueArgs>(args: SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Turno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoFindFirstArgs>(args?: SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Turno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoWithIdOnly = await prisma.turno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoFindManyArgs>(args?: SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Turno.
     * @param {TurnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
     */
    create<T extends TurnoCreateArgs>(args: SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Turnos.
     * @param {TurnoCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoCreateManyArgs>(args?: SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {TurnoCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnoWithIdOnly = await prisma.turno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Turno.
     * @param {TurnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
     */
    delete<T extends TurnoDeleteArgs>(args: SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Turno.
     * @param {TurnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoUpdateArgs>(args: SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Turnos.
     * @param {TurnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoDeleteManyArgs>(args?: SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoUpdateManyArgs>(args: SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turno.
     * @param {TurnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
     */
    upsert<T extends TurnoUpsertArgs>(args: SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnoCountArgs>(
      args?: Subset<T, TurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
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
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turno model
   */
  readonly fields: TurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ruta<T extends RutaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutaDefaultArgs<ExtArgs>>): Prisma__RutaClient<$Result.GetResult<Prisma.$RutaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    chofer<T extends ChoferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoferDefaultArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    asientosTurno<T extends Turno$asientosTurnoArgs<ExtArgs> = {}>(args?: Subset<T, Turno$asientosTurnoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Turno model
   */ 
  interface TurnoFieldRefs {
    readonly id: FieldRef<"Turno", 'Int'>
    readonly busId: FieldRef<"Turno", 'Int'>
    readonly rutaId: FieldRef<"Turno", 'Int'>
    readonly choferId: FieldRef<"Turno", 'Int'>
    readonly fecha: FieldRef<"Turno", 'DateTime'>
    readonly horaInicio: FieldRef<"Turno", 'String'>
    readonly horaFin: FieldRef<"Turno", 'String'>
    readonly estado: FieldRef<"Turno", 'EstadoTurno'>
  }
    

  // Custom InputTypes
  /**
   * Turno findUnique
   */
  export type TurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findUniqueOrThrow
   */
  export type TurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findFirst
   */
  export type TurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findFirstOrThrow
   */
  export type TurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findMany
   */
  export type TurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno create
   */
  export type TurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Turno.
     */
    data: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
  }

  /**
   * Turno createMany
   */
  export type TurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turno createManyAndReturn
   */
  export type TurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turno update
   */
  export type TurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Turno.
     */
    data: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
    /**
     * Choose, which Turno to update.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno updateMany
   */
  export type TurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno upsert
   */
  export type TurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Turno to update in case it exists.
     */
    where: TurnoWhereUniqueInput
    /**
     * In case the Turno found by the `where` argument doesn't exist, create a new Turno with this data.
     */
    create: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
    /**
     * In case the Turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
  }

  /**
   * Turno delete
   */
  export type TurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter which Turno to delete.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno deleteMany
   */
  export type TurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno.asientosTurno
   */
  export type Turno$asientosTurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    where?: AsientoTurnoWhereInput
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    cursor?: AsientoTurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsientoTurnoScalarFieldEnum | AsientoTurnoScalarFieldEnum[]
  }

  /**
   * Turno without action
   */
  export type TurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
  }


  /**
   * Model Asiento
   */

  export type AggregateAsiento = {
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  export type AsientoAvgAggregateOutputType = {
    id: number | null
    busId: number | null
    numero: number | null
  }

  export type AsientoSumAggregateOutputType = {
    id: number | null
    busId: number | null
    numero: number | null
  }

  export type AsientoMinAggregateOutputType = {
    id: number | null
    busId: number | null
    numero: number | null
    fila: string | null
    tipo: $Enums.TipoAsiento | null
    estado: $Enums.EstadoGeneral | null
  }

  export type AsientoMaxAggregateOutputType = {
    id: number | null
    busId: number | null
    numero: number | null
    fila: string | null
    tipo: $Enums.TipoAsiento | null
    estado: $Enums.EstadoGeneral | null
  }

  export type AsientoCountAggregateOutputType = {
    id: number
    busId: number
    numero: number
    fila: number
    tipo: number
    estado: number
    _all: number
  }


  export type AsientoAvgAggregateInputType = {
    id?: true
    busId?: true
    numero?: true
  }

  export type AsientoSumAggregateInputType = {
    id?: true
    busId?: true
    numero?: true
  }

  export type AsientoMinAggregateInputType = {
    id?: true
    busId?: true
    numero?: true
    fila?: true
    tipo?: true
    estado?: true
  }

  export type AsientoMaxAggregateInputType = {
    id?: true
    busId?: true
    numero?: true
    fila?: true
    tipo?: true
    estado?: true
  }

  export type AsientoCountAggregateInputType = {
    id?: true
    busId?: true
    numero?: true
    fila?: true
    tipo?: true
    estado?: true
    _all?: true
  }

  export type AsientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asiento to aggregate.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asientos
    **/
    _count?: true | AsientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsientoMaxAggregateInputType
  }

  export type GetAsientoAggregateType<T extends AsientoAggregateArgs> = {
        [P in keyof T & keyof AggregateAsiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsiento[P]>
      : GetScalarType<T[P], AggregateAsiento[P]>
  }




  export type AsientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoWhereInput
    orderBy?: AsientoOrderByWithAggregationInput | AsientoOrderByWithAggregationInput[]
    by: AsientoScalarFieldEnum[] | AsientoScalarFieldEnum
    having?: AsientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsientoCountAggregateInputType | true
    _avg?: AsientoAvgAggregateInputType
    _sum?: AsientoSumAggregateInputType
    _min?: AsientoMinAggregateInputType
    _max?: AsientoMaxAggregateInputType
  }

  export type AsientoGroupByOutputType = {
    id: number
    busId: number
    numero: number
    fila: string | null
    tipo: $Enums.TipoAsiento
    estado: $Enums.EstadoGeneral
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  type GetAsientoGroupByPayload<T extends AsientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsientoGroupByOutputType[P]>
            : GetScalarType<T[P], AsientoGroupByOutputType[P]>
        }
      >
    >


  export type AsientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    numero?: boolean
    fila?: boolean
    tipo?: boolean
    estado?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    turnos?: boolean | Asiento$turnosArgs<ExtArgs>
    _count?: boolean | AsientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type AsientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    busId?: boolean
    numero?: boolean
    fila?: boolean
    tipo?: boolean
    estado?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type AsientoSelectScalar = {
    id?: boolean
    busId?: boolean
    numero?: boolean
    fila?: boolean
    tipo?: boolean
    estado?: boolean
  }

  export type AsientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    turnos?: boolean | Asiento$turnosArgs<ExtArgs>
    _count?: boolean | AsientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $AsientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asiento"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      turnos: Prisma.$AsientoTurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      busId: number
      numero: number
      fila: string | null
      tipo: $Enums.TipoAsiento
      estado: $Enums.EstadoGeneral
    }, ExtArgs["result"]["asiento"]>
    composites: {}
  }

  type AsientoGetPayload<S extends boolean | null | undefined | AsientoDefaultArgs> = $Result.GetResult<Prisma.$AsientoPayload, S>

  type AsientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AsientoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsientoCountAggregateInputType | true
    }

  export interface AsientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asiento'], meta: { name: 'Asiento' } }
    /**
     * Find zero or one Asiento that matches the filter.
     * @param {AsientoFindUniqueArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsientoFindUniqueArgs>(args: SelectSubset<T, AsientoFindUniqueArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asiento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AsientoFindUniqueOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsientoFindUniqueOrThrowArgs>(args: SelectSubset<T, AsientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindFirstArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsientoFindFirstArgs>(args?: SelectSubset<T, AsientoFindFirstArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindFirstOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsientoFindFirstOrThrowArgs>(args?: SelectSubset<T, AsientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Asientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asientos
     * const asientos = await prisma.asiento.findMany()
     * 
     * // Get first 10 Asientos
     * const asientos = await prisma.asiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asientoWithIdOnly = await prisma.asiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsientoFindManyArgs>(args?: SelectSubset<T, AsientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asiento.
     * @param {AsientoCreateArgs} args - Arguments to create a Asiento.
     * @example
     * // Create one Asiento
     * const Asiento = await prisma.asiento.create({
     *   data: {
     *     // ... data to create a Asiento
     *   }
     * })
     * 
     */
    create<T extends AsientoCreateArgs>(args: SelectSubset<T, AsientoCreateArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Asientos.
     * @param {AsientoCreateManyArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsientoCreateManyArgs>(args?: SelectSubset<T, AsientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asientos and returns the data saved in the database.
     * @param {AsientoCreateManyAndReturnArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asientos and only return the `id`
     * const asientoWithIdOnly = await prisma.asiento.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsientoCreateManyAndReturnArgs>(args?: SelectSubset<T, AsientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asiento.
     * @param {AsientoDeleteArgs} args - Arguments to delete one Asiento.
     * @example
     * // Delete one Asiento
     * const Asiento = await prisma.asiento.delete({
     *   where: {
     *     // ... filter to delete one Asiento
     *   }
     * })
     * 
     */
    delete<T extends AsientoDeleteArgs>(args: SelectSubset<T, AsientoDeleteArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asiento.
     * @param {AsientoUpdateArgs} args - Arguments to update one Asiento.
     * @example
     * // Update one Asiento
     * const asiento = await prisma.asiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsientoUpdateArgs>(args: SelectSubset<T, AsientoUpdateArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Asientos.
     * @param {AsientoDeleteManyArgs} args - Arguments to filter Asientos to delete.
     * @example
     * // Delete a few Asientos
     * const { count } = await prisma.asiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsientoDeleteManyArgs>(args?: SelectSubset<T, AsientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsientoUpdateManyArgs>(args: SelectSubset<T, AsientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asiento.
     * @param {AsientoUpsertArgs} args - Arguments to update or create a Asiento.
     * @example
     * // Update or create a Asiento
     * const asiento = await prisma.asiento.upsert({
     *   create: {
     *     // ... data to create a Asiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asiento we want to update
     *   }
     * })
     */
    upsert<T extends AsientoUpsertArgs>(args: SelectSubset<T, AsientoUpsertArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoCountArgs} args - Arguments to filter Asientos to count.
     * @example
     * // Count the number of Asientos
     * const count = await prisma.asiento.count({
     *   where: {
     *     // ... the filter for the Asientos we want to count
     *   }
     * })
    **/
    count<T extends AsientoCountArgs>(
      args?: Subset<T, AsientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsientoAggregateArgs>(args: Subset<T, AsientoAggregateArgs>): Prisma.PrismaPromise<GetAsientoAggregateType<T>>

    /**
     * Group by Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoGroupByArgs} args - Group by arguments.
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
      T extends AsientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsientoGroupByArgs['orderBy'] }
        : { orderBy?: AsientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asiento model
   */
  readonly fields: AsientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    turnos<T extends Asiento$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Asiento$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Asiento model
   */ 
  interface AsientoFieldRefs {
    readonly id: FieldRef<"Asiento", 'Int'>
    readonly busId: FieldRef<"Asiento", 'Int'>
    readonly numero: FieldRef<"Asiento", 'Int'>
    readonly fila: FieldRef<"Asiento", 'String'>
    readonly tipo: FieldRef<"Asiento", 'TipoAsiento'>
    readonly estado: FieldRef<"Asiento", 'EstadoGeneral'>
  }
    

  // Custom InputTypes
  /**
   * Asiento findUnique
   */
  export type AsientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento findUniqueOrThrow
   */
  export type AsientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento findFirst
   */
  export type AsientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento findFirstOrThrow
   */
  export type AsientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asiento to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento findMany
   */
  export type AsientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter, which Asientos to fetch.
     */
    where?: AsientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asientos to fetch.
     */
    orderBy?: AsientoOrderByWithRelationInput | AsientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asientos.
     */
    cursor?: AsientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asientos.
     */
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * Asiento create
   */
  export type AsientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Asiento.
     */
    data: XOR<AsientoCreateInput, AsientoUncheckedCreateInput>
  }

  /**
   * Asiento createMany
   */
  export type AsientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asientos.
     */
    data: AsientoCreateManyInput | AsientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asiento createManyAndReturn
   */
  export type AsientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Asientos.
     */
    data: AsientoCreateManyInput | AsientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asiento update
   */
  export type AsientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Asiento.
     */
    data: XOR<AsientoUpdateInput, AsientoUncheckedUpdateInput>
    /**
     * Choose, which Asiento to update.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento updateMany
   */
  export type AsientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asientos.
     */
    data: XOR<AsientoUpdateManyMutationInput, AsientoUncheckedUpdateManyInput>
    /**
     * Filter which Asientos to update
     */
    where?: AsientoWhereInput
  }

  /**
   * Asiento upsert
   */
  export type AsientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Asiento to update in case it exists.
     */
    where: AsientoWhereUniqueInput
    /**
     * In case the Asiento found by the `where` argument doesn't exist, create a new Asiento with this data.
     */
    create: XOR<AsientoCreateInput, AsientoUncheckedCreateInput>
    /**
     * In case the Asiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsientoUpdateInput, AsientoUncheckedUpdateInput>
  }

  /**
   * Asiento delete
   */
  export type AsientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
    /**
     * Filter which Asiento to delete.
     */
    where: AsientoWhereUniqueInput
  }

  /**
   * Asiento deleteMany
   */
  export type AsientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asientos to delete
     */
    where?: AsientoWhereInput
  }

  /**
   * Asiento.turnos
   */
  export type Asiento$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    where?: AsientoTurnoWhereInput
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    cursor?: AsientoTurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsientoTurnoScalarFieldEnum | AsientoTurnoScalarFieldEnum[]
  }

  /**
   * Asiento without action
   */
  export type AsientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asiento
     */
    select?: AsientoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoInclude<ExtArgs> | null
  }


  /**
   * Model AsientoTurno
   */

  export type AggregateAsientoTurno = {
    _count: AsientoTurnoCountAggregateOutputType | null
    _avg: AsientoTurnoAvgAggregateOutputType | null
    _sum: AsientoTurnoSumAggregateOutputType | null
    _min: AsientoTurnoMinAggregateOutputType | null
    _max: AsientoTurnoMaxAggregateOutputType | null
  }

  export type AsientoTurnoAvgAggregateOutputType = {
    id: number | null
    turnoId: number | null
    asientoId: number | null
    boletoId: number | null
  }

  export type AsientoTurnoSumAggregateOutputType = {
    id: number | null
    turnoId: number | null
    asientoId: number | null
    boletoId: number | null
  }

  export type AsientoTurnoMinAggregateOutputType = {
    id: number | null
    turnoId: number | null
    asientoId: number | null
    boletoId: number | null
    estado: $Enums.EstadoAsientoTurno | null
  }

  export type AsientoTurnoMaxAggregateOutputType = {
    id: number | null
    turnoId: number | null
    asientoId: number | null
    boletoId: number | null
    estado: $Enums.EstadoAsientoTurno | null
  }

  export type AsientoTurnoCountAggregateOutputType = {
    id: number
    turnoId: number
    asientoId: number
    boletoId: number
    estado: number
    _all: number
  }


  export type AsientoTurnoAvgAggregateInputType = {
    id?: true
    turnoId?: true
    asientoId?: true
    boletoId?: true
  }

  export type AsientoTurnoSumAggregateInputType = {
    id?: true
    turnoId?: true
    asientoId?: true
    boletoId?: true
  }

  export type AsientoTurnoMinAggregateInputType = {
    id?: true
    turnoId?: true
    asientoId?: true
    boletoId?: true
    estado?: true
  }

  export type AsientoTurnoMaxAggregateInputType = {
    id?: true
    turnoId?: true
    asientoId?: true
    boletoId?: true
    estado?: true
  }

  export type AsientoTurnoCountAggregateInputType = {
    id?: true
    turnoId?: true
    asientoId?: true
    boletoId?: true
    estado?: true
    _all?: true
  }

  export type AsientoTurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsientoTurno to aggregate.
     */
    where?: AsientoTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsientoTurnos to fetch.
     */
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsientoTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsientoTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsientoTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsientoTurnos
    **/
    _count?: true | AsientoTurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsientoTurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsientoTurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsientoTurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsientoTurnoMaxAggregateInputType
  }

  export type GetAsientoTurnoAggregateType<T extends AsientoTurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateAsientoTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsientoTurno[P]>
      : GetScalarType<T[P], AggregateAsientoTurno[P]>
  }




  export type AsientoTurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsientoTurnoWhereInput
    orderBy?: AsientoTurnoOrderByWithAggregationInput | AsientoTurnoOrderByWithAggregationInput[]
    by: AsientoTurnoScalarFieldEnum[] | AsientoTurnoScalarFieldEnum
    having?: AsientoTurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsientoTurnoCountAggregateInputType | true
    _avg?: AsientoTurnoAvgAggregateInputType
    _sum?: AsientoTurnoSumAggregateInputType
    _min?: AsientoTurnoMinAggregateInputType
    _max?: AsientoTurnoMaxAggregateInputType
  }

  export type AsientoTurnoGroupByOutputType = {
    id: number
    turnoId: number
    asientoId: number
    boletoId: number | null
    estado: $Enums.EstadoAsientoTurno
    _count: AsientoTurnoCountAggregateOutputType | null
    _avg: AsientoTurnoAvgAggregateOutputType | null
    _sum: AsientoTurnoSumAggregateOutputType | null
    _min: AsientoTurnoMinAggregateOutputType | null
    _max: AsientoTurnoMaxAggregateOutputType | null
  }

  type GetAsientoTurnoGroupByPayload<T extends AsientoTurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsientoTurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsientoTurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsientoTurnoGroupByOutputType[P]>
            : GetScalarType<T[P], AsientoTurnoGroupByOutputType[P]>
        }
      >
    >


  export type AsientoTurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    asientoId?: boolean
    boletoId?: boolean
    estado?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    asiento?: boolean | AsientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asientoTurno"]>

  export type AsientoTurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    asientoId?: boolean
    boletoId?: boolean
    estado?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    asiento?: boolean | AsientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asientoTurno"]>

  export type AsientoTurnoSelectScalar = {
    id?: boolean
    turnoId?: boolean
    asientoId?: boolean
    boletoId?: boolean
    estado?: boolean
  }

  export type AsientoTurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    asiento?: boolean | AsientoDefaultArgs<ExtArgs>
  }
  export type AsientoTurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    asiento?: boolean | AsientoDefaultArgs<ExtArgs>
  }

  export type $AsientoTurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsientoTurno"
    objects: {
      turno: Prisma.$TurnoPayload<ExtArgs>
      asiento: Prisma.$AsientoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      turnoId: number
      asientoId: number
      boletoId: number | null
      estado: $Enums.EstadoAsientoTurno
    }, ExtArgs["result"]["asientoTurno"]>
    composites: {}
  }

  type AsientoTurnoGetPayload<S extends boolean | null | undefined | AsientoTurnoDefaultArgs> = $Result.GetResult<Prisma.$AsientoTurnoPayload, S>

  type AsientoTurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AsientoTurnoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsientoTurnoCountAggregateInputType | true
    }

  export interface AsientoTurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsientoTurno'], meta: { name: 'AsientoTurno' } }
    /**
     * Find zero or one AsientoTurno that matches the filter.
     * @param {AsientoTurnoFindUniqueArgs} args - Arguments to find a AsientoTurno
     * @example
     * // Get one AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsientoTurnoFindUniqueArgs>(args: SelectSubset<T, AsientoTurnoFindUniqueArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AsientoTurno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AsientoTurnoFindUniqueOrThrowArgs} args - Arguments to find a AsientoTurno
     * @example
     * // Get one AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsientoTurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, AsientoTurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AsientoTurno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoFindFirstArgs} args - Arguments to find a AsientoTurno
     * @example
     * // Get one AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsientoTurnoFindFirstArgs>(args?: SelectSubset<T, AsientoTurnoFindFirstArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AsientoTurno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoFindFirstOrThrowArgs} args - Arguments to find a AsientoTurno
     * @example
     * // Get one AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsientoTurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, AsientoTurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AsientoTurnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsientoTurnos
     * const asientoTurnos = await prisma.asientoTurno.findMany()
     * 
     * // Get first 10 AsientoTurnos
     * const asientoTurnos = await prisma.asientoTurno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asientoTurnoWithIdOnly = await prisma.asientoTurno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsientoTurnoFindManyArgs>(args?: SelectSubset<T, AsientoTurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AsientoTurno.
     * @param {AsientoTurnoCreateArgs} args - Arguments to create a AsientoTurno.
     * @example
     * // Create one AsientoTurno
     * const AsientoTurno = await prisma.asientoTurno.create({
     *   data: {
     *     // ... data to create a AsientoTurno
     *   }
     * })
     * 
     */
    create<T extends AsientoTurnoCreateArgs>(args: SelectSubset<T, AsientoTurnoCreateArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AsientoTurnos.
     * @param {AsientoTurnoCreateManyArgs} args - Arguments to create many AsientoTurnos.
     * @example
     * // Create many AsientoTurnos
     * const asientoTurno = await prisma.asientoTurno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsientoTurnoCreateManyArgs>(args?: SelectSubset<T, AsientoTurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsientoTurnos and returns the data saved in the database.
     * @param {AsientoTurnoCreateManyAndReturnArgs} args - Arguments to create many AsientoTurnos.
     * @example
     * // Create many AsientoTurnos
     * const asientoTurno = await prisma.asientoTurno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsientoTurnos and only return the `id`
     * const asientoTurnoWithIdOnly = await prisma.asientoTurno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsientoTurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, AsientoTurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AsientoTurno.
     * @param {AsientoTurnoDeleteArgs} args - Arguments to delete one AsientoTurno.
     * @example
     * // Delete one AsientoTurno
     * const AsientoTurno = await prisma.asientoTurno.delete({
     *   where: {
     *     // ... filter to delete one AsientoTurno
     *   }
     * })
     * 
     */
    delete<T extends AsientoTurnoDeleteArgs>(args: SelectSubset<T, AsientoTurnoDeleteArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AsientoTurno.
     * @param {AsientoTurnoUpdateArgs} args - Arguments to update one AsientoTurno.
     * @example
     * // Update one AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsientoTurnoUpdateArgs>(args: SelectSubset<T, AsientoTurnoUpdateArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AsientoTurnos.
     * @param {AsientoTurnoDeleteManyArgs} args - Arguments to filter AsientoTurnos to delete.
     * @example
     * // Delete a few AsientoTurnos
     * const { count } = await prisma.asientoTurno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsientoTurnoDeleteManyArgs>(args?: SelectSubset<T, AsientoTurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsientoTurnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsientoTurnos
     * const asientoTurno = await prisma.asientoTurno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsientoTurnoUpdateManyArgs>(args: SelectSubset<T, AsientoTurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AsientoTurno.
     * @param {AsientoTurnoUpsertArgs} args - Arguments to update or create a AsientoTurno.
     * @example
     * // Update or create a AsientoTurno
     * const asientoTurno = await prisma.asientoTurno.upsert({
     *   create: {
     *     // ... data to create a AsientoTurno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsientoTurno we want to update
     *   }
     * })
     */
    upsert<T extends AsientoTurnoUpsertArgs>(args: SelectSubset<T, AsientoTurnoUpsertArgs<ExtArgs>>): Prisma__AsientoTurnoClient<$Result.GetResult<Prisma.$AsientoTurnoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AsientoTurnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoCountArgs} args - Arguments to filter AsientoTurnos to count.
     * @example
     * // Count the number of AsientoTurnos
     * const count = await prisma.asientoTurno.count({
     *   where: {
     *     // ... the filter for the AsientoTurnos we want to count
     *   }
     * })
    **/
    count<T extends AsientoTurnoCountArgs>(
      args?: Subset<T, AsientoTurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsientoTurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsientoTurno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsientoTurnoAggregateArgs>(args: Subset<T, AsientoTurnoAggregateArgs>): Prisma.PrismaPromise<GetAsientoTurnoAggregateType<T>>

    /**
     * Group by AsientoTurno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoTurnoGroupByArgs} args - Group by arguments.
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
      T extends AsientoTurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsientoTurnoGroupByArgs['orderBy'] }
        : { orderBy?: AsientoTurnoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsientoTurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsientoTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsientoTurno model
   */
  readonly fields: AsientoTurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsientoTurno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsientoTurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turno<T extends TurnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurnoDefaultArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    asiento<T extends AsientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsientoDefaultArgs<ExtArgs>>): Prisma__AsientoClient<$Result.GetResult<Prisma.$AsientoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AsientoTurno model
   */ 
  interface AsientoTurnoFieldRefs {
    readonly id: FieldRef<"AsientoTurno", 'Int'>
    readonly turnoId: FieldRef<"AsientoTurno", 'Int'>
    readonly asientoId: FieldRef<"AsientoTurno", 'Int'>
    readonly boletoId: FieldRef<"AsientoTurno", 'Int'>
    readonly estado: FieldRef<"AsientoTurno", 'EstadoAsientoTurno'>
  }
    

  // Custom InputTypes
  /**
   * AsientoTurno findUnique
   */
  export type AsientoTurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter, which AsientoTurno to fetch.
     */
    where: AsientoTurnoWhereUniqueInput
  }

  /**
   * AsientoTurno findUniqueOrThrow
   */
  export type AsientoTurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter, which AsientoTurno to fetch.
     */
    where: AsientoTurnoWhereUniqueInput
  }

  /**
   * AsientoTurno findFirst
   */
  export type AsientoTurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter, which AsientoTurno to fetch.
     */
    where?: AsientoTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsientoTurnos to fetch.
     */
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsientoTurnos.
     */
    cursor?: AsientoTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsientoTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsientoTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsientoTurnos.
     */
    distinct?: AsientoTurnoScalarFieldEnum | AsientoTurnoScalarFieldEnum[]
  }

  /**
   * AsientoTurno findFirstOrThrow
   */
  export type AsientoTurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter, which AsientoTurno to fetch.
     */
    where?: AsientoTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsientoTurnos to fetch.
     */
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsientoTurnos.
     */
    cursor?: AsientoTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsientoTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsientoTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsientoTurnos.
     */
    distinct?: AsientoTurnoScalarFieldEnum | AsientoTurnoScalarFieldEnum[]
  }

  /**
   * AsientoTurno findMany
   */
  export type AsientoTurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter, which AsientoTurnos to fetch.
     */
    where?: AsientoTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsientoTurnos to fetch.
     */
    orderBy?: AsientoTurnoOrderByWithRelationInput | AsientoTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsientoTurnos.
     */
    cursor?: AsientoTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsientoTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsientoTurnos.
     */
    skip?: number
    distinct?: AsientoTurnoScalarFieldEnum | AsientoTurnoScalarFieldEnum[]
  }

  /**
   * AsientoTurno create
   */
  export type AsientoTurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a AsientoTurno.
     */
    data: XOR<AsientoTurnoCreateInput, AsientoTurnoUncheckedCreateInput>
  }

  /**
   * AsientoTurno createMany
   */
  export type AsientoTurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsientoTurnos.
     */
    data: AsientoTurnoCreateManyInput | AsientoTurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsientoTurno createManyAndReturn
   */
  export type AsientoTurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AsientoTurnos.
     */
    data: AsientoTurnoCreateManyInput | AsientoTurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsientoTurno update
   */
  export type AsientoTurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a AsientoTurno.
     */
    data: XOR<AsientoTurnoUpdateInput, AsientoTurnoUncheckedUpdateInput>
    /**
     * Choose, which AsientoTurno to update.
     */
    where: AsientoTurnoWhereUniqueInput
  }

  /**
   * AsientoTurno updateMany
   */
  export type AsientoTurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsientoTurnos.
     */
    data: XOR<AsientoTurnoUpdateManyMutationInput, AsientoTurnoUncheckedUpdateManyInput>
    /**
     * Filter which AsientoTurnos to update
     */
    where?: AsientoTurnoWhereInput
  }

  /**
   * AsientoTurno upsert
   */
  export type AsientoTurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the AsientoTurno to update in case it exists.
     */
    where: AsientoTurnoWhereUniqueInput
    /**
     * In case the AsientoTurno found by the `where` argument doesn't exist, create a new AsientoTurno with this data.
     */
    create: XOR<AsientoTurnoCreateInput, AsientoTurnoUncheckedCreateInput>
    /**
     * In case the AsientoTurno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsientoTurnoUpdateInput, AsientoTurnoUncheckedUpdateInput>
  }

  /**
   * AsientoTurno delete
   */
  export type AsientoTurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
    /**
     * Filter which AsientoTurno to delete.
     */
    where: AsientoTurnoWhereUniqueInput
  }

  /**
   * AsientoTurno deleteMany
   */
  export type AsientoTurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsientoTurnos to delete
     */
    where?: AsientoTurnoWhereInput
  }

  /**
   * AsientoTurno without action
   */
  export type AsientoTurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoTurno
     */
    select?: AsientoTurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsientoTurnoInclude<ExtArgs> | null
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


  export const DuenoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cedula: 'cedula',
    telefono: 'telefono',
    cuentaBancaria: 'cuentaBancaria',
    banco: 'banco',
    estado: 'estado'
  };

  export type DuenoScalarFieldEnum = (typeof DuenoScalarFieldEnum)[keyof typeof DuenoScalarFieldEnum]


  export const CooperativaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ruc: 'ruc',
    estado: 'estado'
  };

  export type CooperativaScalarFieldEnum = (typeof CooperativaScalarFieldEnum)[keyof typeof CooperativaScalarFieldEnum]


  export const BusScalarFieldEnum: {
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
    estado: 'estado'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const ChoferScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cedula: 'cedula',
    telefono: 'telefono',
    licencia: 'licencia',
    tipoLicencia: 'tipoLicencia',
    estado: 'estado'
  };

  export type ChoferScalarFieldEnum = (typeof ChoferScalarFieldEnum)[keyof typeof ChoferScalarFieldEnum]


  export const RutaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    origen: 'origen',
    destino: 'destino',
    duracionMin: 'duracionMin',
    precioPasaje: 'precioPasaje'
  };

  export type RutaScalarFieldEnum = (typeof RutaScalarFieldEnum)[keyof typeof RutaScalarFieldEnum]


  export const ParadaScalarFieldEnum: {
    id: 'id',
    rutaId: 'rutaId',
    nombre: 'nombre',
    orden: 'orden',
    latitud: 'latitud',
    longitud: 'longitud',
    metrosAlerta: 'metrosAlerta'
  };

  export type ParadaScalarFieldEnum = (typeof ParadaScalarFieldEnum)[keyof typeof ParadaScalarFieldEnum]


  export const FrecuenciaScalarFieldEnum: {
    id: 'id',
    rutaId: 'rutaId',
    busId: 'busId',
    diaSemana: 'diaSemana',
    horaSalida: 'horaSalida',
    horaLlegada: 'horaLlegada'
  };

  export type FrecuenciaScalarFieldEnum = (typeof FrecuenciaScalarFieldEnum)[keyof typeof FrecuenciaScalarFieldEnum]


  export const TurnoScalarFieldEnum: {
    id: 'id',
    busId: 'busId',
    rutaId: 'rutaId',
    choferId: 'choferId',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    estado: 'estado'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  export const AsientoScalarFieldEnum: {
    id: 'id',
    busId: 'busId',
    numero: 'numero',
    fila: 'fila',
    tipo: 'tipo',
    estado: 'estado'
  };

  export type AsientoScalarFieldEnum = (typeof AsientoScalarFieldEnum)[keyof typeof AsientoScalarFieldEnum]


  export const AsientoTurnoScalarFieldEnum: {
    id: 'id',
    turnoId: 'turnoId',
    asientoId: 'asientoId',
    boletoId: 'boletoId',
    estado: 'estado'
  };

  export type AsientoTurnoScalarFieldEnum = (typeof AsientoTurnoScalarFieldEnum)[keyof typeof AsientoTurnoScalarFieldEnum]


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
   * Reference to a field of type 'EstadoGeneral'
   */
  export type EnumEstadoGeneralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoGeneral'>
    


  /**
   * Reference to a field of type 'EstadoGeneral[]'
   */
  export type ListEnumEstadoGeneralFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoGeneral[]'>
    


  /**
   * Reference to a field of type 'EstadoBus'
   */
  export type EnumEstadoBusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBus'>
    


  /**
   * Reference to a field of type 'EstadoBus[]'
   */
  export type ListEnumEstadoBusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoBus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DiaSemana'
   */
  export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>
    


  /**
   * Reference to a field of type 'DiaSemana[]'
   */
  export type ListEnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoTurno'
   */
  export type EnumEstadoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTurno'>
    


  /**
   * Reference to a field of type 'EstadoTurno[]'
   */
  export type ListEnumEstadoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTurno[]'>
    


  /**
   * Reference to a field of type 'TipoAsiento'
   */
  export type EnumTipoAsientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAsiento'>
    


  /**
   * Reference to a field of type 'TipoAsiento[]'
   */
  export type ListEnumTipoAsientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAsiento[]'>
    


  /**
   * Reference to a field of type 'EstadoAsientoTurno'
   */
  export type EnumEstadoAsientoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAsientoTurno'>
    


  /**
   * Reference to a field of type 'EstadoAsientoTurno[]'
   */
  export type ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAsientoTurno[]'>
    


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


  export type DuenoWhereInput = {
    AND?: DuenoWhereInput | DuenoWhereInput[]
    OR?: DuenoWhereInput[]
    NOT?: DuenoWhereInput | DuenoWhereInput[]
    id?: IntFilter<"Dueno"> | number
    nombre?: StringFilter<"Dueno"> | string
    cedula?: StringFilter<"Dueno"> | string
    telefono?: StringNullableFilter<"Dueno"> | string | null
    cuentaBancaria?: StringNullableFilter<"Dueno"> | string | null
    banco?: StringNullableFilter<"Dueno"> | string | null
    estado?: EnumEstadoGeneralFilter<"Dueno"> | $Enums.EstadoGeneral
    buses?: BusListRelationFilter
  }

  export type DuenoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    cuentaBancaria?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    estado?: SortOrder
    buses?: BusOrderByRelationAggregateInput
  }

  export type DuenoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cedula?: string
    AND?: DuenoWhereInput | DuenoWhereInput[]
    OR?: DuenoWhereInput[]
    NOT?: DuenoWhereInput | DuenoWhereInput[]
    nombre?: StringFilter<"Dueno"> | string
    telefono?: StringNullableFilter<"Dueno"> | string | null
    cuentaBancaria?: StringNullableFilter<"Dueno"> | string | null
    banco?: StringNullableFilter<"Dueno"> | string | null
    estado?: EnumEstadoGeneralFilter<"Dueno"> | $Enums.EstadoGeneral
    buses?: BusListRelationFilter
  }, "id" | "cedula">

  export type DuenoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    cuentaBancaria?: SortOrderInput | SortOrder
    banco?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: DuenoCountOrderByAggregateInput
    _avg?: DuenoAvgOrderByAggregateInput
    _max?: DuenoMaxOrderByAggregateInput
    _min?: DuenoMinOrderByAggregateInput
    _sum?: DuenoSumOrderByAggregateInput
  }

  export type DuenoScalarWhereWithAggregatesInput = {
    AND?: DuenoScalarWhereWithAggregatesInput | DuenoScalarWhereWithAggregatesInput[]
    OR?: DuenoScalarWhereWithAggregatesInput[]
    NOT?: DuenoScalarWhereWithAggregatesInput | DuenoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dueno"> | number
    nombre?: StringWithAggregatesFilter<"Dueno"> | string
    cedula?: StringWithAggregatesFilter<"Dueno"> | string
    telefono?: StringNullableWithAggregatesFilter<"Dueno"> | string | null
    cuentaBancaria?: StringNullableWithAggregatesFilter<"Dueno"> | string | null
    banco?: StringNullableWithAggregatesFilter<"Dueno"> | string | null
    estado?: EnumEstadoGeneralWithAggregatesFilter<"Dueno"> | $Enums.EstadoGeneral
  }

  export type CooperativaWhereInput = {
    AND?: CooperativaWhereInput | CooperativaWhereInput[]
    OR?: CooperativaWhereInput[]
    NOT?: CooperativaWhereInput | CooperativaWhereInput[]
    id?: IntFilter<"Cooperativa"> | number
    nombre?: StringFilter<"Cooperativa"> | string
    ruc?: StringFilter<"Cooperativa"> | string
    estado?: EnumEstadoGeneralFilter<"Cooperativa"> | $Enums.EstadoGeneral
    buses?: BusListRelationFilter
  }

  export type CooperativaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    estado?: SortOrder
    buses?: BusOrderByRelationAggregateInput
  }

  export type CooperativaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ruc?: string
    AND?: CooperativaWhereInput | CooperativaWhereInput[]
    OR?: CooperativaWhereInput[]
    NOT?: CooperativaWhereInput | CooperativaWhereInput[]
    nombre?: StringFilter<"Cooperativa"> | string
    estado?: EnumEstadoGeneralFilter<"Cooperativa"> | $Enums.EstadoGeneral
    buses?: BusListRelationFilter
  }, "id" | "ruc">

  export type CooperativaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    estado?: SortOrder
    _count?: CooperativaCountOrderByAggregateInput
    _avg?: CooperativaAvgOrderByAggregateInput
    _max?: CooperativaMaxOrderByAggregateInput
    _min?: CooperativaMinOrderByAggregateInput
    _sum?: CooperativaSumOrderByAggregateInput
  }

  export type CooperativaScalarWhereWithAggregatesInput = {
    AND?: CooperativaScalarWhereWithAggregatesInput | CooperativaScalarWhereWithAggregatesInput[]
    OR?: CooperativaScalarWhereWithAggregatesInput[]
    NOT?: CooperativaScalarWhereWithAggregatesInput | CooperativaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cooperativa"> | number
    nombre?: StringWithAggregatesFilter<"Cooperativa"> | string
    ruc?: StringWithAggregatesFilter<"Cooperativa"> | string
    estado?: EnumEstadoGeneralWithAggregatesFilter<"Cooperativa"> | $Enums.EstadoGeneral
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: IntFilter<"Bus"> | number
    cooperativaId?: IntFilter<"Bus"> | number
    duenoId?: IntFilter<"Bus"> | number
    placa?: StringFilter<"Bus"> | string
    marca?: StringFilter<"Bus"> | string
    carroceria?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    anio?: IntFilter<"Bus"> | number
    capacidad?: IntFilter<"Bus"> | number
    color?: StringNullableFilter<"Bus"> | string | null
    estado?: EnumEstadoBusFilter<"Bus"> | $Enums.EstadoBus
    cooperativa?: XOR<CooperativaRelationFilter, CooperativaWhereInput>
    dueno?: XOR<DuenoRelationFilter, DuenoWhereInput>
    asientos?: AsientoListRelationFilter
    frecuencias?: FrecuenciaListRelationFilter
    turnos?: TurnoListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    carroceria?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
    color?: SortOrderInput | SortOrder
    estado?: SortOrder
    cooperativa?: CooperativaOrderByWithRelationInput
    dueno?: DuenoOrderByWithRelationInput
    asientos?: AsientoOrderByRelationAggregateInput
    frecuencias?: FrecuenciaOrderByRelationAggregateInput
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    cooperativaId?: IntFilter<"Bus"> | number
    duenoId?: IntFilter<"Bus"> | number
    marca?: StringFilter<"Bus"> | string
    carroceria?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    anio?: IntFilter<"Bus"> | number
    capacidad?: IntFilter<"Bus"> | number
    color?: StringNullableFilter<"Bus"> | string | null
    estado?: EnumEstadoBusFilter<"Bus"> | $Enums.EstadoBus
    cooperativa?: XOR<CooperativaRelationFilter, CooperativaWhereInput>
    dueno?: XOR<DuenoRelationFilter, DuenoWhereInput>
    asientos?: AsientoListRelationFilter
    frecuencias?: FrecuenciaListRelationFilter
    turnos?: TurnoListRelationFilter
  }, "id" | "placa">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    carroceria?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
    color?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bus"> | number
    cooperativaId?: IntWithAggregatesFilter<"Bus"> | number
    duenoId?: IntWithAggregatesFilter<"Bus"> | number
    placa?: StringWithAggregatesFilter<"Bus"> | string
    marca?: StringWithAggregatesFilter<"Bus"> | string
    carroceria?: StringWithAggregatesFilter<"Bus"> | string
    modelo?: StringWithAggregatesFilter<"Bus"> | string
    anio?: IntWithAggregatesFilter<"Bus"> | number
    capacidad?: IntWithAggregatesFilter<"Bus"> | number
    color?: StringNullableWithAggregatesFilter<"Bus"> | string | null
    estado?: EnumEstadoBusWithAggregatesFilter<"Bus"> | $Enums.EstadoBus
  }

  export type ChoferWhereInput = {
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    id?: IntFilter<"Chofer"> | number
    nombre?: StringFilter<"Chofer"> | string
    cedula?: StringFilter<"Chofer"> | string
    telefono?: StringNullableFilter<"Chofer"> | string | null
    licencia?: StringFilter<"Chofer"> | string
    tipoLicencia?: StringFilter<"Chofer"> | string
    estado?: EnumEstadoGeneralFilter<"Chofer"> | $Enums.EstadoGeneral
    turnos?: TurnoListRelationFilter
  }

  export type ChoferOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    licencia?: SortOrder
    tipoLicencia?: SortOrder
    estado?: SortOrder
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type ChoferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cedula?: string
    licencia?: string
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    nombre?: StringFilter<"Chofer"> | string
    telefono?: StringNullableFilter<"Chofer"> | string | null
    tipoLicencia?: StringFilter<"Chofer"> | string
    estado?: EnumEstadoGeneralFilter<"Chofer"> | $Enums.EstadoGeneral
    turnos?: TurnoListRelationFilter
  }, "id" | "cedula" | "licencia">

  export type ChoferOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    licencia?: SortOrder
    tipoLicencia?: SortOrder
    estado?: SortOrder
    _count?: ChoferCountOrderByAggregateInput
    _avg?: ChoferAvgOrderByAggregateInput
    _max?: ChoferMaxOrderByAggregateInput
    _min?: ChoferMinOrderByAggregateInput
    _sum?: ChoferSumOrderByAggregateInput
  }

  export type ChoferScalarWhereWithAggregatesInput = {
    AND?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    OR?: ChoferScalarWhereWithAggregatesInput[]
    NOT?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chofer"> | number
    nombre?: StringWithAggregatesFilter<"Chofer"> | string
    cedula?: StringWithAggregatesFilter<"Chofer"> | string
    telefono?: StringNullableWithAggregatesFilter<"Chofer"> | string | null
    licencia?: StringWithAggregatesFilter<"Chofer"> | string
    tipoLicencia?: StringWithAggregatesFilter<"Chofer"> | string
    estado?: EnumEstadoGeneralWithAggregatesFilter<"Chofer"> | $Enums.EstadoGeneral
  }

  export type RutaWhereInput = {
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    id?: IntFilter<"Ruta"> | number
    nombre?: StringFilter<"Ruta"> | string
    origen?: StringFilter<"Ruta"> | string
    destino?: StringFilter<"Ruta"> | string
    duracionMin?: IntFilter<"Ruta"> | number
    precioPasaje?: DecimalFilter<"Ruta"> | Decimal | DecimalJsLike | number | string
    paradas?: ParadaListRelationFilter
    frecuencias?: FrecuenciaListRelationFilter
    turnos?: TurnoListRelationFilter
  }

  export type RutaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    destino?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
    paradas?: ParadaOrderByRelationAggregateInput
    frecuencias?: FrecuenciaOrderByRelationAggregateInput
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type RutaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutaWhereInput | RutaWhereInput[]
    OR?: RutaWhereInput[]
    NOT?: RutaWhereInput | RutaWhereInput[]
    nombre?: StringFilter<"Ruta"> | string
    origen?: StringFilter<"Ruta"> | string
    destino?: StringFilter<"Ruta"> | string
    duracionMin?: IntFilter<"Ruta"> | number
    precioPasaje?: DecimalFilter<"Ruta"> | Decimal | DecimalJsLike | number | string
    paradas?: ParadaListRelationFilter
    frecuencias?: FrecuenciaListRelationFilter
    turnos?: TurnoListRelationFilter
  }, "id">

  export type RutaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    destino?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
    _count?: RutaCountOrderByAggregateInput
    _avg?: RutaAvgOrderByAggregateInput
    _max?: RutaMaxOrderByAggregateInput
    _min?: RutaMinOrderByAggregateInput
    _sum?: RutaSumOrderByAggregateInput
  }

  export type RutaScalarWhereWithAggregatesInput = {
    AND?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    OR?: RutaScalarWhereWithAggregatesInput[]
    NOT?: RutaScalarWhereWithAggregatesInput | RutaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ruta"> | number
    nombre?: StringWithAggregatesFilter<"Ruta"> | string
    origen?: StringWithAggregatesFilter<"Ruta"> | string
    destino?: StringWithAggregatesFilter<"Ruta"> | string
    duracionMin?: IntWithAggregatesFilter<"Ruta"> | number
    precioPasaje?: DecimalWithAggregatesFilter<"Ruta"> | Decimal | DecimalJsLike | number | string
  }

  export type ParadaWhereInput = {
    AND?: ParadaWhereInput | ParadaWhereInput[]
    OR?: ParadaWhereInput[]
    NOT?: ParadaWhereInput | ParadaWhereInput[]
    id?: IntFilter<"Parada"> | number
    rutaId?: IntFilter<"Parada"> | number
    nombre?: StringFilter<"Parada"> | string
    orden?: IntFilter<"Parada"> | number
    latitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFilter<"Parada"> | number
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
  }

  export type ParadaOrderByWithRelationInput = {
    id?: SortOrder
    rutaId?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
    ruta?: RutaOrderByWithRelationInput
  }

  export type ParadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParadaWhereInput | ParadaWhereInput[]
    OR?: ParadaWhereInput[]
    NOT?: ParadaWhereInput | ParadaWhereInput[]
    rutaId?: IntFilter<"Parada"> | number
    nombre?: StringFilter<"Parada"> | string
    orden?: IntFilter<"Parada"> | number
    latitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFilter<"Parada"> | number
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
  }, "id">

  export type ParadaOrderByWithAggregationInput = {
    id?: SortOrder
    rutaId?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
    _count?: ParadaCountOrderByAggregateInput
    _avg?: ParadaAvgOrderByAggregateInput
    _max?: ParadaMaxOrderByAggregateInput
    _min?: ParadaMinOrderByAggregateInput
    _sum?: ParadaSumOrderByAggregateInput
  }

  export type ParadaScalarWhereWithAggregatesInput = {
    AND?: ParadaScalarWhereWithAggregatesInput | ParadaScalarWhereWithAggregatesInput[]
    OR?: ParadaScalarWhereWithAggregatesInput[]
    NOT?: ParadaScalarWhereWithAggregatesInput | ParadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parada"> | number
    rutaId?: IntWithAggregatesFilter<"Parada"> | number
    nombre?: StringWithAggregatesFilter<"Parada"> | string
    orden?: IntWithAggregatesFilter<"Parada"> | number
    latitud?: DecimalWithAggregatesFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalWithAggregatesFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntWithAggregatesFilter<"Parada"> | number
  }

  export type FrecuenciaWhereInput = {
    AND?: FrecuenciaWhereInput | FrecuenciaWhereInput[]
    OR?: FrecuenciaWhereInput[]
    NOT?: FrecuenciaWhereInput | FrecuenciaWhereInput[]
    id?: IntFilter<"Frecuencia"> | number
    rutaId?: IntFilter<"Frecuencia"> | number
    busId?: IntFilter<"Frecuencia"> | number
    diaSemana?: EnumDiaSemanaFilter<"Frecuencia"> | $Enums.DiaSemana
    horaSalida?: StringFilter<"Frecuencia"> | string
    horaLlegada?: StringFilter<"Frecuencia"> | string
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
    bus?: XOR<BusRelationFilter, BusWhereInput>
  }

  export type FrecuenciaOrderByWithRelationInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
    diaSemana?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    ruta?: RutaOrderByWithRelationInput
    bus?: BusOrderByWithRelationInput
  }

  export type FrecuenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FrecuenciaWhereInput | FrecuenciaWhereInput[]
    OR?: FrecuenciaWhereInput[]
    NOT?: FrecuenciaWhereInput | FrecuenciaWhereInput[]
    rutaId?: IntFilter<"Frecuencia"> | number
    busId?: IntFilter<"Frecuencia"> | number
    diaSemana?: EnumDiaSemanaFilter<"Frecuencia"> | $Enums.DiaSemana
    horaSalida?: StringFilter<"Frecuencia"> | string
    horaLlegada?: StringFilter<"Frecuencia"> | string
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
    bus?: XOR<BusRelationFilter, BusWhereInput>
  }, "id">

  export type FrecuenciaOrderByWithAggregationInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
    diaSemana?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    _count?: FrecuenciaCountOrderByAggregateInput
    _avg?: FrecuenciaAvgOrderByAggregateInput
    _max?: FrecuenciaMaxOrderByAggregateInput
    _min?: FrecuenciaMinOrderByAggregateInput
    _sum?: FrecuenciaSumOrderByAggregateInput
  }

  export type FrecuenciaScalarWhereWithAggregatesInput = {
    AND?: FrecuenciaScalarWhereWithAggregatesInput | FrecuenciaScalarWhereWithAggregatesInput[]
    OR?: FrecuenciaScalarWhereWithAggregatesInput[]
    NOT?: FrecuenciaScalarWhereWithAggregatesInput | FrecuenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Frecuencia"> | number
    rutaId?: IntWithAggregatesFilter<"Frecuencia"> | number
    busId?: IntWithAggregatesFilter<"Frecuencia"> | number
    diaSemana?: EnumDiaSemanaWithAggregatesFilter<"Frecuencia"> | $Enums.DiaSemana
    horaSalida?: StringWithAggregatesFilter<"Frecuencia"> | string
    horaLlegada?: StringWithAggregatesFilter<"Frecuencia"> | string
  }

  export type TurnoWhereInput = {
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    id?: IntFilter<"Turno"> | number
    busId?: IntFilter<"Turno"> | number
    rutaId?: IntFilter<"Turno"> | number
    choferId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringNullableFilter<"Turno"> | string | null
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
    bus?: XOR<BusRelationFilter, BusWhereInput>
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
    chofer?: XOR<ChoferRelationFilter, ChoferWhereInput>
    asientosTurno?: AsientoTurnoListRelationFilter
  }

  export type TurnoOrderByWithRelationInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    bus?: BusOrderByWithRelationInput
    ruta?: RutaOrderByWithRelationInput
    chofer?: ChoferOrderByWithRelationInput
    asientosTurno?: AsientoTurnoOrderByRelationAggregateInput
  }

  export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    busId?: IntFilter<"Turno"> | number
    rutaId?: IntFilter<"Turno"> | number
    choferId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringNullableFilter<"Turno"> | string | null
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
    bus?: XOR<BusRelationFilter, BusWhereInput>
    ruta?: XOR<RutaRelationFilter, RutaWhereInput>
    chofer?: XOR<ChoferRelationFilter, ChoferWhereInput>
    asientosTurno?: AsientoTurnoListRelationFilter
  }, "id">

  export type TurnoOrderByWithAggregationInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: TurnoCountOrderByAggregateInput
    _avg?: TurnoAvgOrderByAggregateInput
    _max?: TurnoMaxOrderByAggregateInput
    _min?: TurnoMinOrderByAggregateInput
    _sum?: TurnoSumOrderByAggregateInput
  }

  export type TurnoScalarWhereWithAggregatesInput = {
    AND?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    OR?: TurnoScalarWhereWithAggregatesInput[]
    NOT?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turno"> | number
    busId?: IntWithAggregatesFilter<"Turno"> | number
    rutaId?: IntWithAggregatesFilter<"Turno"> | number
    choferId?: IntWithAggregatesFilter<"Turno"> | number
    fecha?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
    horaInicio?: StringWithAggregatesFilter<"Turno"> | string
    horaFin?: StringNullableWithAggregatesFilter<"Turno"> | string | null
    estado?: EnumEstadoTurnoWithAggregatesFilter<"Turno"> | $Enums.EstadoTurno
  }

  export type AsientoWhereInput = {
    AND?: AsientoWhereInput | AsientoWhereInput[]
    OR?: AsientoWhereInput[]
    NOT?: AsientoWhereInput | AsientoWhereInput[]
    id?: IntFilter<"Asiento"> | number
    busId?: IntFilter<"Asiento"> | number
    numero?: IntFilter<"Asiento"> | number
    fila?: StringNullableFilter<"Asiento"> | string | null
    tipo?: EnumTipoAsientoFilter<"Asiento"> | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFilter<"Asiento"> | $Enums.EstadoGeneral
    bus?: XOR<BusRelationFilter, BusWhereInput>
    turnos?: AsientoTurnoListRelationFilter
  }

  export type AsientoOrderByWithRelationInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
    fila?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    bus?: BusOrderByWithRelationInput
    turnos?: AsientoTurnoOrderByRelationAggregateInput
  }

  export type AsientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    busId_numero?: AsientoBusIdNumeroCompoundUniqueInput
    AND?: AsientoWhereInput | AsientoWhereInput[]
    OR?: AsientoWhereInput[]
    NOT?: AsientoWhereInput | AsientoWhereInput[]
    busId?: IntFilter<"Asiento"> | number
    numero?: IntFilter<"Asiento"> | number
    fila?: StringNullableFilter<"Asiento"> | string | null
    tipo?: EnumTipoAsientoFilter<"Asiento"> | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFilter<"Asiento"> | $Enums.EstadoGeneral
    bus?: XOR<BusRelationFilter, BusWhereInput>
    turnos?: AsientoTurnoListRelationFilter
  }, "id" | "busId_numero">

  export type AsientoOrderByWithAggregationInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
    fila?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    _count?: AsientoCountOrderByAggregateInput
    _avg?: AsientoAvgOrderByAggregateInput
    _max?: AsientoMaxOrderByAggregateInput
    _min?: AsientoMinOrderByAggregateInput
    _sum?: AsientoSumOrderByAggregateInput
  }

  export type AsientoScalarWhereWithAggregatesInput = {
    AND?: AsientoScalarWhereWithAggregatesInput | AsientoScalarWhereWithAggregatesInput[]
    OR?: AsientoScalarWhereWithAggregatesInput[]
    NOT?: AsientoScalarWhereWithAggregatesInput | AsientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asiento"> | number
    busId?: IntWithAggregatesFilter<"Asiento"> | number
    numero?: IntWithAggregatesFilter<"Asiento"> | number
    fila?: StringNullableWithAggregatesFilter<"Asiento"> | string | null
    tipo?: EnumTipoAsientoWithAggregatesFilter<"Asiento"> | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralWithAggregatesFilter<"Asiento"> | $Enums.EstadoGeneral
  }

  export type AsientoTurnoWhereInput = {
    AND?: AsientoTurnoWhereInput | AsientoTurnoWhereInput[]
    OR?: AsientoTurnoWhereInput[]
    NOT?: AsientoTurnoWhereInput | AsientoTurnoWhereInput[]
    id?: IntFilter<"AsientoTurno"> | number
    turnoId?: IntFilter<"AsientoTurno"> | number
    asientoId?: IntFilter<"AsientoTurno"> | number
    boletoId?: IntNullableFilter<"AsientoTurno"> | number | null
    estado?: EnumEstadoAsientoTurnoFilter<"AsientoTurno"> | $Enums.EstadoAsientoTurno
    turno?: XOR<TurnoRelationFilter, TurnoWhereInput>
    asiento?: XOR<AsientoRelationFilter, AsientoWhereInput>
  }

  export type AsientoTurnoOrderByWithRelationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrderInput | SortOrder
    estado?: SortOrder
    turno?: TurnoOrderByWithRelationInput
    asiento?: AsientoOrderByWithRelationInput
  }

  export type AsientoTurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    turnoId_asientoId?: AsientoTurnoTurnoIdAsientoIdCompoundUniqueInput
    AND?: AsientoTurnoWhereInput | AsientoTurnoWhereInput[]
    OR?: AsientoTurnoWhereInput[]
    NOT?: AsientoTurnoWhereInput | AsientoTurnoWhereInput[]
    turnoId?: IntFilter<"AsientoTurno"> | number
    asientoId?: IntFilter<"AsientoTurno"> | number
    boletoId?: IntNullableFilter<"AsientoTurno"> | number | null
    estado?: EnumEstadoAsientoTurnoFilter<"AsientoTurno"> | $Enums.EstadoAsientoTurno
    turno?: XOR<TurnoRelationFilter, TurnoWhereInput>
    asiento?: XOR<AsientoRelationFilter, AsientoWhereInput>
  }, "id" | "turnoId_asientoId">

  export type AsientoTurnoOrderByWithAggregationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: AsientoTurnoCountOrderByAggregateInput
    _avg?: AsientoTurnoAvgOrderByAggregateInput
    _max?: AsientoTurnoMaxOrderByAggregateInput
    _min?: AsientoTurnoMinOrderByAggregateInput
    _sum?: AsientoTurnoSumOrderByAggregateInput
  }

  export type AsientoTurnoScalarWhereWithAggregatesInput = {
    AND?: AsientoTurnoScalarWhereWithAggregatesInput | AsientoTurnoScalarWhereWithAggregatesInput[]
    OR?: AsientoTurnoScalarWhereWithAggregatesInput[]
    NOT?: AsientoTurnoScalarWhereWithAggregatesInput | AsientoTurnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AsientoTurno"> | number
    turnoId?: IntWithAggregatesFilter<"AsientoTurno"> | number
    asientoId?: IntWithAggregatesFilter<"AsientoTurno"> | number
    boletoId?: IntNullableWithAggregatesFilter<"AsientoTurno"> | number | null
    estado?: EnumEstadoAsientoTurnoWithAggregatesFilter<"AsientoTurno"> | $Enums.EstadoAsientoTurno
  }

  export type DuenoCreateInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    cuentaBancaria?: string | null
    banco?: string | null
    estado?: $Enums.EstadoGeneral
    buses?: BusCreateNestedManyWithoutDuenoInput
  }

  export type DuenoUncheckedCreateInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    cuentaBancaria?: string | null
    banco?: string | null
    estado?: $Enums.EstadoGeneral
    buses?: BusUncheckedCreateNestedManyWithoutDuenoInput
  }

  export type DuenoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    buses?: BusUpdateManyWithoutDuenoNestedInput
  }

  export type DuenoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    buses?: BusUncheckedUpdateManyWithoutDuenoNestedInput
  }

  export type DuenoCreateManyInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    cuentaBancaria?: string | null
    banco?: string | null
    estado?: $Enums.EstadoGeneral
  }

  export type DuenoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type DuenoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type CooperativaCreateInput = {
    nombre: string
    ruc: string
    estado?: $Enums.EstadoGeneral
    buses?: BusCreateNestedManyWithoutCooperativaInput
  }

  export type CooperativaUncheckedCreateInput = {
    id?: number
    nombre: string
    ruc: string
    estado?: $Enums.EstadoGeneral
    buses?: BusUncheckedCreateNestedManyWithoutCooperativaInput
  }

  export type CooperativaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    buses?: BusUpdateManyWithoutCooperativaNestedInput
  }

  export type CooperativaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    buses?: BusUncheckedUpdateManyWithoutCooperativaNestedInput
  }

  export type CooperativaCreateManyInput = {
    id?: number
    nombre: string
    ruc: string
    estado?: $Enums.EstadoGeneral
  }

  export type CooperativaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type CooperativaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type BusCreateInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    cooperativa: CooperativaCreateNestedOneWithoutBusesInput
    dueno: DuenoCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutBusInput
    turnos?: TurnoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutBusInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    cooperativa?: CooperativaUpdateOneRequiredWithoutBusesNestedInput
    dueno?: DuenoUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutBusNestedInput
    turnos?: TurnoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutBusNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
  }

  export type BusUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
  }

  export type BusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
  }

  export type ChoferCreateInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    licencia: string
    tipoLicencia: string
    estado?: $Enums.EstadoGeneral
    turnos?: TurnoCreateNestedManyWithoutChoferInput
  }

  export type ChoferUncheckedCreateInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    licencia: string
    tipoLicencia: string
    estado?: $Enums.EstadoGeneral
    turnos?: TurnoUncheckedCreateNestedManyWithoutChoferInput
  }

  export type ChoferUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    turnos?: TurnoUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    turnos?: TurnoUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type ChoferCreateManyInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    licencia: string
    tipoLicencia: string
    estado?: $Enums.EstadoGeneral
  }

  export type ChoferUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type ChoferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type RutaCreateInput = {
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaCreateNestedManyWithoutRutaInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutRutaInput
    turnos?: TurnoCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateInput = {
    id?: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedCreateNestedManyWithoutRutaInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutRutaInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUpdateManyWithoutRutaNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedUpdateManyWithoutRutaNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaCreateManyInput = {
    id?: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
  }

  export type RutaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RutaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ParadaCreateInput = {
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
    ruta: RutaCreateNestedOneWithoutParadasInput
  }

  export type ParadaUncheckedCreateInput = {
    id?: number
    rutaId: number
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
  }

  export type ParadaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
    ruta?: RutaUpdateOneRequiredWithoutParadasNestedInput
  }

  export type ParadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type ParadaCreateManyInput = {
    id?: number
    rutaId: number
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
  }

  export type ParadaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type ParadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type FrecuenciaCreateInput = {
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
    ruta: RutaCreateNestedOneWithoutFrecuenciasInput
    bus: BusCreateNestedOneWithoutFrecuenciasInput
  }

  export type FrecuenciaUncheckedCreateInput = {
    id?: number
    rutaId: number
    busId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type FrecuenciaUpdateInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
    ruta?: RutaUpdateOneRequiredWithoutFrecuenciasNestedInput
    bus?: BusUpdateOneRequiredWithoutFrecuenciasNestedInput
  }

  export type FrecuenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type FrecuenciaCreateManyInput = {
    id?: number
    rutaId: number
    busId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type FrecuenciaUpdateManyMutationInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type FrecuenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoCreateInput = {
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    bus: BusCreateNestedOneWithoutTurnosInput
    ruta: RutaCreateNestedOneWithoutTurnosInput
    chofer: ChoferCreateNestedOneWithoutTurnosInput
    asientosTurno?: AsientoTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateInput = {
    id?: number
    busId: number
    rutaId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    bus?: BusUpdateOneRequiredWithoutTurnosNestedInput
    ruta?: RutaUpdateOneRequiredWithoutTurnosNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutTurnosNestedInput
    asientosTurno?: AsientoTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoCreateManyInput = {
    id?: number
    busId: number
    rutaId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
  }

  export type TurnoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type TurnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type AsientoCreateInput = {
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
    bus: BusCreateNestedOneWithoutAsientosInput
    turnos?: AsientoTurnoCreateNestedManyWithoutAsientoInput
  }

  export type AsientoUncheckedCreateInput = {
    id?: number
    busId: number
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
    turnos?: AsientoTurnoUncheckedCreateNestedManyWithoutAsientoInput
  }

  export type AsientoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    bus?: BusUpdateOneRequiredWithoutAsientosNestedInput
    turnos?: AsientoTurnoUpdateManyWithoutAsientoNestedInput
  }

  export type AsientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    turnos?: AsientoTurnoUncheckedUpdateManyWithoutAsientoNestedInput
  }

  export type AsientoCreateManyInput = {
    id?: number
    busId: number
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
  }

  export type AsientoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type AsientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type AsientoTurnoCreateInput = {
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
    turno: TurnoCreateNestedOneWithoutAsientosTurnoInput
    asiento: AsientoCreateNestedOneWithoutTurnosInput
  }

  export type AsientoTurnoUncheckedCreateInput = {
    id?: number
    turnoId: number
    asientoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUpdateInput = {
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
    turno?: TurnoUpdateOneRequiredWithoutAsientosTurnoNestedInput
    asiento?: AsientoUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type AsientoTurnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    asientoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoCreateManyInput = {
    id?: number
    turnoId: number
    asientoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUpdateManyMutationInput = {
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    asientoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
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

  export type EnumEstadoGeneralFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralFilter<$PrismaModel> | $Enums.EstadoGeneral
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DuenoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    cuentaBancaria?: SortOrder
    banco?: SortOrder
    estado?: SortOrder
  }

  export type DuenoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DuenoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    cuentaBancaria?: SortOrder
    banco?: SortOrder
    estado?: SortOrder
  }

  export type DuenoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    cuentaBancaria?: SortOrder
    banco?: SortOrder
    estado?: SortOrder
  }

  export type DuenoSumOrderByAggregateInput = {
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

  export type EnumEstadoGeneralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel> | $Enums.EstadoGeneral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoGeneralFilter<$PrismaModel>
    _max?: NestedEnumEstadoGeneralFilter<$PrismaModel>
  }

  export type CooperativaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    estado?: SortOrder
  }

  export type CooperativaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CooperativaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    estado?: SortOrder
  }

  export type CooperativaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    estado?: SortOrder
  }

  export type CooperativaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoBusFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBus | EnumEstadoBusFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBusFilter<$PrismaModel> | $Enums.EstadoBus
  }

  export type CooperativaRelationFilter = {
    is?: CooperativaWhereInput
    isNot?: CooperativaWhereInput
  }

  export type DuenoRelationFilter = {
    is?: DuenoWhereInput
    isNot?: DuenoWhereInput
  }

  export type AsientoListRelationFilter = {
    every?: AsientoWhereInput
    some?: AsientoWhereInput
    none?: AsientoWhereInput
  }

  export type FrecuenciaListRelationFilter = {
    every?: FrecuenciaWhereInput
    some?: FrecuenciaWhereInput
    none?: FrecuenciaWhereInput
  }

  export type TurnoListRelationFilter = {
    every?: TurnoWhereInput
    some?: TurnoWhereInput
    none?: TurnoWhereInput
  }

  export type AsientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FrecuenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    carroceria?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
    color?: SortOrder
    estado?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    carroceria?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
    color?: SortOrder
    estado?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    carroceria?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
    color?: SortOrder
    estado?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    id?: SortOrder
    cooperativaId?: SortOrder
    duenoId?: SortOrder
    anio?: SortOrder
    capacidad?: SortOrder
  }

  export type EnumEstadoBusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBus | EnumEstadoBusFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBusWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBusFilter<$PrismaModel>
    _max?: NestedEnumEstadoBusFilter<$PrismaModel>
  }

  export type ChoferCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    licencia?: SortOrder
    tipoLicencia?: SortOrder
    estado?: SortOrder
  }

  export type ChoferAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChoferMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    licencia?: SortOrder
    tipoLicencia?: SortOrder
    estado?: SortOrder
  }

  export type ChoferMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    licencia?: SortOrder
    tipoLicencia?: SortOrder
    estado?: SortOrder
  }

  export type ChoferSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ParadaListRelationFilter = {
    every?: ParadaWhereInput
    some?: ParadaWhereInput
    none?: ParadaWhereInput
  }

  export type ParadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    destino?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
  }

  export type RutaAvgOrderByAggregateInput = {
    id?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
  }

  export type RutaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    destino?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
  }

  export type RutaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    destino?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
  }

  export type RutaSumOrderByAggregateInput = {
    id?: SortOrder
    duracionMin?: SortOrder
    precioPasaje?: SortOrder
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

  export type RutaRelationFilter = {
    is?: RutaWhereInput
    isNot?: RutaWhereInput
  }

  export type ParadaCountOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
  }

  export type ParadaAvgOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
  }

  export type ParadaMaxOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
  }

  export type ParadaMinOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
  }

  export type ParadaSumOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    orden?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    metrosAlerta?: SortOrder
  }

  export type EnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type BusRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type FrecuenciaCountOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
    diaSemana?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
  }

  export type FrecuenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
  }

  export type FrecuenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
    diaSemana?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
  }

  export type FrecuenciaMinOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
    diaSemana?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
  }

  export type FrecuenciaSumOrderByAggregateInput = {
    id?: SortOrder
    rutaId?: SortOrder
    busId?: SortOrder
  }

  export type EnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
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

  export type EnumEstadoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoFilter<$PrismaModel> | $Enums.EstadoTurno
  }

  export type ChoferRelationFilter = {
    is?: ChoferWhereInput
    isNot?: ChoferWhereInput
  }

  export type AsientoTurnoListRelationFilter = {
    every?: AsientoTurnoWhereInput
    some?: AsientoTurnoWhereInput
    none?: AsientoTurnoWhereInput
  }

  export type AsientoTurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnoCountOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
  }

  export type TurnoAvgOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
  }

  export type TurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
  }

  export type TurnoMinOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    estado?: SortOrder
  }

  export type TurnoSumOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    rutaId?: SortOrder
    choferId?: SortOrder
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

  export type EnumEstadoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoTurnoFilter<$PrismaModel>
  }

  export type EnumTipoAsientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAsiento | EnumTipoAsientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAsientoFilter<$PrismaModel> | $Enums.TipoAsiento
  }

  export type AsientoBusIdNumeroCompoundUniqueInput = {
    busId: number
    numero: number
  }

  export type AsientoCountOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
    fila?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type AsientoAvgOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
  }

  export type AsientoMaxOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
    fila?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type AsientoMinOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
    fila?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type AsientoSumOrderByAggregateInput = {
    id?: SortOrder
    busId?: SortOrder
    numero?: SortOrder
  }

  export type EnumTipoAsientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAsiento | EnumTipoAsientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAsientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAsiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAsientoFilter<$PrismaModel>
    _max?: NestedEnumTipoAsientoFilter<$PrismaModel>
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

  export type EnumEstadoAsientoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsientoTurno | EnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel> | $Enums.EstadoAsientoTurno
  }

  export type TurnoRelationFilter = {
    is?: TurnoWhereInput
    isNot?: TurnoWhereInput
  }

  export type AsientoRelationFilter = {
    is?: AsientoWhereInput
    isNot?: AsientoWhereInput
  }

  export type AsientoTurnoTurnoIdAsientoIdCompoundUniqueInput = {
    turnoId: number
    asientoId: number
  }

  export type AsientoTurnoCountOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrder
    estado?: SortOrder
  }

  export type AsientoTurnoAvgOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrder
  }

  export type AsientoTurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrder
    estado?: SortOrder
  }

  export type AsientoTurnoMinOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrder
    estado?: SortOrder
  }

  export type AsientoTurnoSumOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    asientoId?: SortOrder
    boletoId?: SortOrder
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

  export type EnumEstadoAsientoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsientoTurno | EnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsientoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAsientoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel>
  }

  export type BusCreateNestedManyWithoutDuenoInput = {
    create?: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput> | BusCreateWithoutDuenoInput[] | BusUncheckedCreateWithoutDuenoInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDuenoInput | BusCreateOrConnectWithoutDuenoInput[]
    createMany?: BusCreateManyDuenoInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutDuenoInput = {
    create?: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput> | BusCreateWithoutDuenoInput[] | BusUncheckedCreateWithoutDuenoInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDuenoInput | BusCreateOrConnectWithoutDuenoInput[]
    createMany?: BusCreateManyDuenoInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEstadoGeneralFieldUpdateOperationsInput = {
    set?: $Enums.EstadoGeneral
  }

  export type BusUpdateManyWithoutDuenoNestedInput = {
    create?: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput> | BusCreateWithoutDuenoInput[] | BusUncheckedCreateWithoutDuenoInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDuenoInput | BusCreateOrConnectWithoutDuenoInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutDuenoInput | BusUpsertWithWhereUniqueWithoutDuenoInput[]
    createMany?: BusCreateManyDuenoInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutDuenoInput | BusUpdateWithWhereUniqueWithoutDuenoInput[]
    updateMany?: BusUpdateManyWithWhereWithoutDuenoInput | BusUpdateManyWithWhereWithoutDuenoInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusUncheckedUpdateManyWithoutDuenoNestedInput = {
    create?: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput> | BusCreateWithoutDuenoInput[] | BusUncheckedCreateWithoutDuenoInput[]
    connectOrCreate?: BusCreateOrConnectWithoutDuenoInput | BusCreateOrConnectWithoutDuenoInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutDuenoInput | BusUpsertWithWhereUniqueWithoutDuenoInput[]
    createMany?: BusCreateManyDuenoInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutDuenoInput | BusUpdateWithWhereUniqueWithoutDuenoInput[]
    updateMany?: BusUpdateManyWithWhereWithoutDuenoInput | BusUpdateManyWithWhereWithoutDuenoInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusCreateNestedManyWithoutCooperativaInput = {
    create?: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput> | BusCreateWithoutCooperativaInput[] | BusUncheckedCreateWithoutCooperativaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutCooperativaInput | BusCreateOrConnectWithoutCooperativaInput[]
    createMany?: BusCreateManyCooperativaInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutCooperativaInput = {
    create?: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput> | BusCreateWithoutCooperativaInput[] | BusUncheckedCreateWithoutCooperativaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutCooperativaInput | BusCreateOrConnectWithoutCooperativaInput[]
    createMany?: BusCreateManyCooperativaInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type BusUpdateManyWithoutCooperativaNestedInput = {
    create?: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput> | BusCreateWithoutCooperativaInput[] | BusUncheckedCreateWithoutCooperativaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutCooperativaInput | BusCreateOrConnectWithoutCooperativaInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutCooperativaInput | BusUpsertWithWhereUniqueWithoutCooperativaInput[]
    createMany?: BusCreateManyCooperativaInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutCooperativaInput | BusUpdateWithWhereUniqueWithoutCooperativaInput[]
    updateMany?: BusUpdateManyWithWhereWithoutCooperativaInput | BusUpdateManyWithWhereWithoutCooperativaInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutCooperativaNestedInput = {
    create?: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput> | BusCreateWithoutCooperativaInput[] | BusUncheckedCreateWithoutCooperativaInput[]
    connectOrCreate?: BusCreateOrConnectWithoutCooperativaInput | BusCreateOrConnectWithoutCooperativaInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutCooperativaInput | BusUpsertWithWhereUniqueWithoutCooperativaInput[]
    createMany?: BusCreateManyCooperativaInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutCooperativaInput | BusUpdateWithWhereUniqueWithoutCooperativaInput[]
    updateMany?: BusUpdateManyWithWhereWithoutCooperativaInput | BusUpdateManyWithWhereWithoutCooperativaInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type CooperativaCreateNestedOneWithoutBusesInput = {
    create?: XOR<CooperativaCreateWithoutBusesInput, CooperativaUncheckedCreateWithoutBusesInput>
    connectOrCreate?: CooperativaCreateOrConnectWithoutBusesInput
    connect?: CooperativaWhereUniqueInput
  }

  export type DuenoCreateNestedOneWithoutBusesInput = {
    create?: XOR<DuenoCreateWithoutBusesInput, DuenoUncheckedCreateWithoutBusesInput>
    connectOrCreate?: DuenoCreateOrConnectWithoutBusesInput
    connect?: DuenoWhereUniqueInput
  }

  export type AsientoCreateNestedManyWithoutBusInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
  }

  export type FrecuenciaCreateNestedManyWithoutBusInput = {
    create?: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput> | FrecuenciaCreateWithoutBusInput[] | FrecuenciaUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutBusInput | FrecuenciaCreateOrConnectWithoutBusInput[]
    createMany?: FrecuenciaCreateManyBusInputEnvelope
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
  }

  export type TurnoCreateNestedManyWithoutBusInput = {
    create?: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput> | TurnoCreateWithoutBusInput[] | TurnoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutBusInput | TurnoCreateOrConnectWithoutBusInput[]
    createMany?: TurnoCreateManyBusInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type AsientoUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
  }

  export type FrecuenciaUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput> | FrecuenciaCreateWithoutBusInput[] | FrecuenciaUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutBusInput | FrecuenciaCreateOrConnectWithoutBusInput[]
    createMany?: FrecuenciaCreateManyBusInputEnvelope
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput> | TurnoCreateWithoutBusInput[] | TurnoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutBusInput | TurnoCreateOrConnectWithoutBusInput[]
    createMany?: TurnoCreateManyBusInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type EnumEstadoBusFieldUpdateOperationsInput = {
    set?: $Enums.EstadoBus
  }

  export type CooperativaUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<CooperativaCreateWithoutBusesInput, CooperativaUncheckedCreateWithoutBusesInput>
    connectOrCreate?: CooperativaCreateOrConnectWithoutBusesInput
    upsert?: CooperativaUpsertWithoutBusesInput
    connect?: CooperativaWhereUniqueInput
    update?: XOR<XOR<CooperativaUpdateToOneWithWhereWithoutBusesInput, CooperativaUpdateWithoutBusesInput>, CooperativaUncheckedUpdateWithoutBusesInput>
  }

  export type DuenoUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<DuenoCreateWithoutBusesInput, DuenoUncheckedCreateWithoutBusesInput>
    connectOrCreate?: DuenoCreateOrConnectWithoutBusesInput
    upsert?: DuenoUpsertWithoutBusesInput
    connect?: DuenoWhereUniqueInput
    update?: XOR<XOR<DuenoUpdateToOneWithWhereWithoutBusesInput, DuenoUpdateWithoutBusesInput>, DuenoUncheckedUpdateWithoutBusesInput>
  }

  export type AsientoUpdateManyWithoutBusNestedInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    upsert?: AsientoUpsertWithWhereUniqueWithoutBusInput | AsientoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    set?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    disconnect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    delete?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    update?: AsientoUpdateWithWhereUniqueWithoutBusInput | AsientoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: AsientoUpdateManyWithWhereWithoutBusInput | AsientoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
  }

  export type FrecuenciaUpdateManyWithoutBusNestedInput = {
    create?: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput> | FrecuenciaCreateWithoutBusInput[] | FrecuenciaUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutBusInput | FrecuenciaCreateOrConnectWithoutBusInput[]
    upsert?: FrecuenciaUpsertWithWhereUniqueWithoutBusInput | FrecuenciaUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: FrecuenciaCreateManyBusInputEnvelope
    set?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    disconnect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    delete?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    update?: FrecuenciaUpdateWithWhereUniqueWithoutBusInput | FrecuenciaUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: FrecuenciaUpdateManyWithWhereWithoutBusInput | FrecuenciaUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
  }

  export type TurnoUpdateManyWithoutBusNestedInput = {
    create?: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput> | TurnoCreateWithoutBusInput[] | TurnoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutBusInput | TurnoCreateOrConnectWithoutBusInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutBusInput | TurnoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TurnoCreateManyBusInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutBusInput | TurnoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutBusInput | TurnoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type AsientoUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput> | AsientoCreateWithoutBusInput[] | AsientoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: AsientoCreateOrConnectWithoutBusInput | AsientoCreateOrConnectWithoutBusInput[]
    upsert?: AsientoUpsertWithWhereUniqueWithoutBusInput | AsientoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: AsientoCreateManyBusInputEnvelope
    set?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    disconnect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    delete?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    connect?: AsientoWhereUniqueInput | AsientoWhereUniqueInput[]
    update?: AsientoUpdateWithWhereUniqueWithoutBusInput | AsientoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: AsientoUpdateManyWithWhereWithoutBusInput | AsientoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
  }

  export type FrecuenciaUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput> | FrecuenciaCreateWithoutBusInput[] | FrecuenciaUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutBusInput | FrecuenciaCreateOrConnectWithoutBusInput[]
    upsert?: FrecuenciaUpsertWithWhereUniqueWithoutBusInput | FrecuenciaUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: FrecuenciaCreateManyBusInputEnvelope
    set?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    disconnect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    delete?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    update?: FrecuenciaUpdateWithWhereUniqueWithoutBusInput | FrecuenciaUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: FrecuenciaUpdateManyWithWhereWithoutBusInput | FrecuenciaUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput> | TurnoCreateWithoutBusInput[] | TurnoUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutBusInput | TurnoCreateOrConnectWithoutBusInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutBusInput | TurnoUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TurnoCreateManyBusInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutBusInput | TurnoUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutBusInput | TurnoUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type TurnoCreateNestedManyWithoutChoferInput = {
    create?: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput> | TurnoCreateWithoutChoferInput[] | TurnoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutChoferInput | TurnoCreateOrConnectWithoutChoferInput[]
    createMany?: TurnoCreateManyChoferInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutChoferInput = {
    create?: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput> | TurnoCreateWithoutChoferInput[] | TurnoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutChoferInput | TurnoCreateOrConnectWithoutChoferInput[]
    createMany?: TurnoCreateManyChoferInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type TurnoUpdateManyWithoutChoferNestedInput = {
    create?: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput> | TurnoCreateWithoutChoferInput[] | TurnoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutChoferInput | TurnoCreateOrConnectWithoutChoferInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutChoferInput | TurnoUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: TurnoCreateManyChoferInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutChoferInput | TurnoUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutChoferInput | TurnoUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutChoferNestedInput = {
    create?: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput> | TurnoCreateWithoutChoferInput[] | TurnoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutChoferInput | TurnoCreateOrConnectWithoutChoferInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutChoferInput | TurnoUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: TurnoCreateManyChoferInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutChoferInput | TurnoUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutChoferInput | TurnoUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type ParadaCreateNestedManyWithoutRutaInput = {
    create?: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput> | ParadaCreateWithoutRutaInput[] | ParadaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ParadaCreateOrConnectWithoutRutaInput | ParadaCreateOrConnectWithoutRutaInput[]
    createMany?: ParadaCreateManyRutaInputEnvelope
    connect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
  }

  export type FrecuenciaCreateNestedManyWithoutRutaInput = {
    create?: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput> | FrecuenciaCreateWithoutRutaInput[] | FrecuenciaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutRutaInput | FrecuenciaCreateOrConnectWithoutRutaInput[]
    createMany?: FrecuenciaCreateManyRutaInputEnvelope
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
  }

  export type TurnoCreateNestedManyWithoutRutaInput = {
    create?: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput> | TurnoCreateWithoutRutaInput[] | TurnoUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRutaInput | TurnoCreateOrConnectWithoutRutaInput[]
    createMany?: TurnoCreateManyRutaInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type ParadaUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput> | ParadaCreateWithoutRutaInput[] | ParadaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ParadaCreateOrConnectWithoutRutaInput | ParadaCreateOrConnectWithoutRutaInput[]
    createMany?: ParadaCreateManyRutaInputEnvelope
    connect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
  }

  export type FrecuenciaUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput> | FrecuenciaCreateWithoutRutaInput[] | FrecuenciaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutRutaInput | FrecuenciaCreateOrConnectWithoutRutaInput[]
    createMany?: FrecuenciaCreateManyRutaInputEnvelope
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutRutaInput = {
    create?: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput> | TurnoCreateWithoutRutaInput[] | TurnoUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRutaInput | TurnoCreateOrConnectWithoutRutaInput[]
    createMany?: TurnoCreateManyRutaInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ParadaUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput> | ParadaCreateWithoutRutaInput[] | ParadaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ParadaCreateOrConnectWithoutRutaInput | ParadaCreateOrConnectWithoutRutaInput[]
    upsert?: ParadaUpsertWithWhereUniqueWithoutRutaInput | ParadaUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ParadaCreateManyRutaInputEnvelope
    set?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    disconnect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    delete?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    connect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    update?: ParadaUpdateWithWhereUniqueWithoutRutaInput | ParadaUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ParadaUpdateManyWithWhereWithoutRutaInput | ParadaUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ParadaScalarWhereInput | ParadaScalarWhereInput[]
  }

  export type FrecuenciaUpdateManyWithoutRutaNestedInput = {
    create?: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput> | FrecuenciaCreateWithoutRutaInput[] | FrecuenciaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutRutaInput | FrecuenciaCreateOrConnectWithoutRutaInput[]
    upsert?: FrecuenciaUpsertWithWhereUniqueWithoutRutaInput | FrecuenciaUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: FrecuenciaCreateManyRutaInputEnvelope
    set?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    disconnect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    delete?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    update?: FrecuenciaUpdateWithWhereUniqueWithoutRutaInput | FrecuenciaUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: FrecuenciaUpdateManyWithWhereWithoutRutaInput | FrecuenciaUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
  }

  export type TurnoUpdateManyWithoutRutaNestedInput = {
    create?: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput> | TurnoCreateWithoutRutaInput[] | TurnoUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRutaInput | TurnoCreateOrConnectWithoutRutaInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutRutaInput | TurnoUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: TurnoCreateManyRutaInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutRutaInput | TurnoUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutRutaInput | TurnoUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type ParadaUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput> | ParadaCreateWithoutRutaInput[] | ParadaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: ParadaCreateOrConnectWithoutRutaInput | ParadaCreateOrConnectWithoutRutaInput[]
    upsert?: ParadaUpsertWithWhereUniqueWithoutRutaInput | ParadaUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: ParadaCreateManyRutaInputEnvelope
    set?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    disconnect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    delete?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    connect?: ParadaWhereUniqueInput | ParadaWhereUniqueInput[]
    update?: ParadaUpdateWithWhereUniqueWithoutRutaInput | ParadaUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: ParadaUpdateManyWithWhereWithoutRutaInput | ParadaUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: ParadaScalarWhereInput | ParadaScalarWhereInput[]
  }

  export type FrecuenciaUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput> | FrecuenciaCreateWithoutRutaInput[] | FrecuenciaUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: FrecuenciaCreateOrConnectWithoutRutaInput | FrecuenciaCreateOrConnectWithoutRutaInput[]
    upsert?: FrecuenciaUpsertWithWhereUniqueWithoutRutaInput | FrecuenciaUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: FrecuenciaCreateManyRutaInputEnvelope
    set?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    disconnect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    delete?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    connect?: FrecuenciaWhereUniqueInput | FrecuenciaWhereUniqueInput[]
    update?: FrecuenciaUpdateWithWhereUniqueWithoutRutaInput | FrecuenciaUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: FrecuenciaUpdateManyWithWhereWithoutRutaInput | FrecuenciaUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutRutaNestedInput = {
    create?: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput> | TurnoCreateWithoutRutaInput[] | TurnoUncheckedCreateWithoutRutaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutRutaInput | TurnoCreateOrConnectWithoutRutaInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutRutaInput | TurnoUpsertWithWhereUniqueWithoutRutaInput[]
    createMany?: TurnoCreateManyRutaInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutRutaInput | TurnoUpdateWithWhereUniqueWithoutRutaInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutRutaInput | TurnoUpdateManyWithWhereWithoutRutaInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type RutaCreateNestedOneWithoutParadasInput = {
    create?: XOR<RutaCreateWithoutParadasInput, RutaUncheckedCreateWithoutParadasInput>
    connectOrCreate?: RutaCreateOrConnectWithoutParadasInput
    connect?: RutaWhereUniqueInput
  }

  export type RutaUpdateOneRequiredWithoutParadasNestedInput = {
    create?: XOR<RutaCreateWithoutParadasInput, RutaUncheckedCreateWithoutParadasInput>
    connectOrCreate?: RutaCreateOrConnectWithoutParadasInput
    upsert?: RutaUpsertWithoutParadasInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutParadasInput, RutaUpdateWithoutParadasInput>, RutaUncheckedUpdateWithoutParadasInput>
  }

  export type RutaCreateNestedOneWithoutFrecuenciasInput = {
    create?: XOR<RutaCreateWithoutFrecuenciasInput, RutaUncheckedCreateWithoutFrecuenciasInput>
    connectOrCreate?: RutaCreateOrConnectWithoutFrecuenciasInput
    connect?: RutaWhereUniqueInput
  }

  export type BusCreateNestedOneWithoutFrecuenciasInput = {
    create?: XOR<BusCreateWithoutFrecuenciasInput, BusUncheckedCreateWithoutFrecuenciasInput>
    connectOrCreate?: BusCreateOrConnectWithoutFrecuenciasInput
    connect?: BusWhereUniqueInput
  }

  export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana
  }

  export type RutaUpdateOneRequiredWithoutFrecuenciasNestedInput = {
    create?: XOR<RutaCreateWithoutFrecuenciasInput, RutaUncheckedCreateWithoutFrecuenciasInput>
    connectOrCreate?: RutaCreateOrConnectWithoutFrecuenciasInput
    upsert?: RutaUpsertWithoutFrecuenciasInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutFrecuenciasInput, RutaUpdateWithoutFrecuenciasInput>, RutaUncheckedUpdateWithoutFrecuenciasInput>
  }

  export type BusUpdateOneRequiredWithoutFrecuenciasNestedInput = {
    create?: XOR<BusCreateWithoutFrecuenciasInput, BusUncheckedCreateWithoutFrecuenciasInput>
    connectOrCreate?: BusCreateOrConnectWithoutFrecuenciasInput
    upsert?: BusUpsertWithoutFrecuenciasInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutFrecuenciasInput, BusUpdateWithoutFrecuenciasInput>, BusUncheckedUpdateWithoutFrecuenciasInput>
  }

  export type BusCreateNestedOneWithoutTurnosInput = {
    create?: XOR<BusCreateWithoutTurnosInput, BusUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: BusCreateOrConnectWithoutTurnosInput
    connect?: BusWhereUniqueInput
  }

  export type RutaCreateNestedOneWithoutTurnosInput = {
    create?: XOR<RutaCreateWithoutTurnosInput, RutaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: RutaCreateOrConnectWithoutTurnosInput
    connect?: RutaWhereUniqueInput
  }

  export type ChoferCreateNestedOneWithoutTurnosInput = {
    create?: XOR<ChoferCreateWithoutTurnosInput, ChoferUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutTurnosInput
    connect?: ChoferWhereUniqueInput
  }

  export type AsientoTurnoCreateNestedManyWithoutTurnoInput = {
    create?: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput> | AsientoTurnoCreateWithoutTurnoInput[] | AsientoTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutTurnoInput | AsientoTurnoCreateOrConnectWithoutTurnoInput[]
    createMany?: AsientoTurnoCreateManyTurnoInputEnvelope
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
  }

  export type AsientoTurnoUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput> | AsientoTurnoCreateWithoutTurnoInput[] | AsientoTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutTurnoInput | AsientoTurnoCreateOrConnectWithoutTurnoInput[]
    createMany?: AsientoTurnoCreateManyTurnoInputEnvelope
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEstadoTurnoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTurno
  }

  export type BusUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<BusCreateWithoutTurnosInput, BusUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: BusCreateOrConnectWithoutTurnosInput
    upsert?: BusUpsertWithoutTurnosInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTurnosInput, BusUpdateWithoutTurnosInput>, BusUncheckedUpdateWithoutTurnosInput>
  }

  export type RutaUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<RutaCreateWithoutTurnosInput, RutaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: RutaCreateOrConnectWithoutTurnosInput
    upsert?: RutaUpsertWithoutTurnosInput
    connect?: RutaWhereUniqueInput
    update?: XOR<XOR<RutaUpdateToOneWithWhereWithoutTurnosInput, RutaUpdateWithoutTurnosInput>, RutaUncheckedUpdateWithoutTurnosInput>
  }

  export type ChoferUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<ChoferCreateWithoutTurnosInput, ChoferUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutTurnosInput
    upsert?: ChoferUpsertWithoutTurnosInput
    connect?: ChoferWhereUniqueInput
    update?: XOR<XOR<ChoferUpdateToOneWithWhereWithoutTurnosInput, ChoferUpdateWithoutTurnosInput>, ChoferUncheckedUpdateWithoutTurnosInput>
  }

  export type AsientoTurnoUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput> | AsientoTurnoCreateWithoutTurnoInput[] | AsientoTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutTurnoInput | AsientoTurnoCreateOrConnectWithoutTurnoInput[]
    upsert?: AsientoTurnoUpsertWithWhereUniqueWithoutTurnoInput | AsientoTurnoUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: AsientoTurnoCreateManyTurnoInputEnvelope
    set?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    disconnect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    delete?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    update?: AsientoTurnoUpdateWithWhereUniqueWithoutTurnoInput | AsientoTurnoUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: AsientoTurnoUpdateManyWithWhereWithoutTurnoInput | AsientoTurnoUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
  }

  export type AsientoTurnoUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput> | AsientoTurnoCreateWithoutTurnoInput[] | AsientoTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutTurnoInput | AsientoTurnoCreateOrConnectWithoutTurnoInput[]
    upsert?: AsientoTurnoUpsertWithWhereUniqueWithoutTurnoInput | AsientoTurnoUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: AsientoTurnoCreateManyTurnoInputEnvelope
    set?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    disconnect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    delete?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    update?: AsientoTurnoUpdateWithWhereUniqueWithoutTurnoInput | AsientoTurnoUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: AsientoTurnoUpdateManyWithWhereWithoutTurnoInput | AsientoTurnoUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutAsientosInput = {
    create?: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    connectOrCreate?: BusCreateOrConnectWithoutAsientosInput
    connect?: BusWhereUniqueInput
  }

  export type AsientoTurnoCreateNestedManyWithoutAsientoInput = {
    create?: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput> | AsientoTurnoCreateWithoutAsientoInput[] | AsientoTurnoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutAsientoInput | AsientoTurnoCreateOrConnectWithoutAsientoInput[]
    createMany?: AsientoTurnoCreateManyAsientoInputEnvelope
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
  }

  export type AsientoTurnoUncheckedCreateNestedManyWithoutAsientoInput = {
    create?: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput> | AsientoTurnoCreateWithoutAsientoInput[] | AsientoTurnoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutAsientoInput | AsientoTurnoCreateOrConnectWithoutAsientoInput[]
    createMany?: AsientoTurnoCreateManyAsientoInputEnvelope
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
  }

  export type EnumTipoAsientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoAsiento
  }

  export type BusUpdateOneRequiredWithoutAsientosNestedInput = {
    create?: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    connectOrCreate?: BusCreateOrConnectWithoutAsientosInput
    upsert?: BusUpsertWithoutAsientosInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutAsientosInput, BusUpdateWithoutAsientosInput>, BusUncheckedUpdateWithoutAsientosInput>
  }

  export type AsientoTurnoUpdateManyWithoutAsientoNestedInput = {
    create?: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput> | AsientoTurnoCreateWithoutAsientoInput[] | AsientoTurnoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutAsientoInput | AsientoTurnoCreateOrConnectWithoutAsientoInput[]
    upsert?: AsientoTurnoUpsertWithWhereUniqueWithoutAsientoInput | AsientoTurnoUpsertWithWhereUniqueWithoutAsientoInput[]
    createMany?: AsientoTurnoCreateManyAsientoInputEnvelope
    set?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    disconnect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    delete?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    update?: AsientoTurnoUpdateWithWhereUniqueWithoutAsientoInput | AsientoTurnoUpdateWithWhereUniqueWithoutAsientoInput[]
    updateMany?: AsientoTurnoUpdateManyWithWhereWithoutAsientoInput | AsientoTurnoUpdateManyWithWhereWithoutAsientoInput[]
    deleteMany?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
  }

  export type AsientoTurnoUncheckedUpdateManyWithoutAsientoNestedInput = {
    create?: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput> | AsientoTurnoCreateWithoutAsientoInput[] | AsientoTurnoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: AsientoTurnoCreateOrConnectWithoutAsientoInput | AsientoTurnoCreateOrConnectWithoutAsientoInput[]
    upsert?: AsientoTurnoUpsertWithWhereUniqueWithoutAsientoInput | AsientoTurnoUpsertWithWhereUniqueWithoutAsientoInput[]
    createMany?: AsientoTurnoCreateManyAsientoInputEnvelope
    set?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    disconnect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    delete?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    connect?: AsientoTurnoWhereUniqueInput | AsientoTurnoWhereUniqueInput[]
    update?: AsientoTurnoUpdateWithWhereUniqueWithoutAsientoInput | AsientoTurnoUpdateWithWhereUniqueWithoutAsientoInput[]
    updateMany?: AsientoTurnoUpdateManyWithWhereWithoutAsientoInput | AsientoTurnoUpdateManyWithWhereWithoutAsientoInput[]
    deleteMany?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
  }

  export type TurnoCreateNestedOneWithoutAsientosTurnoInput = {
    create?: XOR<TurnoCreateWithoutAsientosTurnoInput, TurnoUncheckedCreateWithoutAsientosTurnoInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutAsientosTurnoInput
    connect?: TurnoWhereUniqueInput
  }

  export type AsientoCreateNestedOneWithoutTurnosInput = {
    create?: XOR<AsientoCreateWithoutTurnosInput, AsientoUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AsientoCreateOrConnectWithoutTurnosInput
    connect?: AsientoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEstadoAsientoTurnoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAsientoTurno
  }

  export type TurnoUpdateOneRequiredWithoutAsientosTurnoNestedInput = {
    create?: XOR<TurnoCreateWithoutAsientosTurnoInput, TurnoUncheckedCreateWithoutAsientosTurnoInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutAsientosTurnoInput
    upsert?: TurnoUpsertWithoutAsientosTurnoInput
    connect?: TurnoWhereUniqueInput
    update?: XOR<XOR<TurnoUpdateToOneWithWhereWithoutAsientosTurnoInput, TurnoUpdateWithoutAsientosTurnoInput>, TurnoUncheckedUpdateWithoutAsientosTurnoInput>
  }

  export type AsientoUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<AsientoCreateWithoutTurnosInput, AsientoUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AsientoCreateOrConnectWithoutTurnosInput
    upsert?: AsientoUpsertWithoutTurnosInput
    connect?: AsientoWhereUniqueInput
    update?: XOR<XOR<AsientoUpdateToOneWithWhereWithoutTurnosInput, AsientoUpdateWithoutTurnosInput>, AsientoUncheckedUpdateWithoutTurnosInput>
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

  export type NestedEnumEstadoGeneralFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralFilter<$PrismaModel> | $Enums.EstadoGeneral
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

  export type NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoGeneral | EnumEstadoGeneralFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoGeneral[] | ListEnumEstadoGeneralFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoGeneralWithAggregatesFilter<$PrismaModel> | $Enums.EstadoGeneral
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoGeneralFilter<$PrismaModel>
    _max?: NestedEnumEstadoGeneralFilter<$PrismaModel>
  }

  export type NestedEnumEstadoBusFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBus | EnumEstadoBusFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBusFilter<$PrismaModel> | $Enums.EstadoBus
  }

  export type NestedEnumEstadoBusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoBus | EnumEstadoBusFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoBus[] | ListEnumEstadoBusFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoBusWithAggregatesFilter<$PrismaModel> | $Enums.EstadoBus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoBusFilter<$PrismaModel>
    _max?: NestedEnumEstadoBusFilter<$PrismaModel>
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

  export type NestedEnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
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

  export type NestedEnumEstadoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoFilter<$PrismaModel> | $Enums.EstadoTurno
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

  export type NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoTurnoFilter<$PrismaModel>
  }

  export type NestedEnumTipoAsientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAsiento | EnumTipoAsientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAsientoFilter<$PrismaModel> | $Enums.TipoAsiento
  }

  export type NestedEnumTipoAsientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAsiento | EnumTipoAsientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAsiento[] | ListEnumTipoAsientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAsientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAsiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAsientoFilter<$PrismaModel>
    _max?: NestedEnumTipoAsientoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoAsientoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsientoTurno | EnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel> | $Enums.EstadoAsientoTurno
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

  export type NestedEnumEstadoAsientoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAsientoTurno | EnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAsientoTurno[] | ListEnumEstadoAsientoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAsientoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAsientoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAsientoTurnoFilter<$PrismaModel>
  }

  export type BusCreateWithoutDuenoInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    cooperativa: CooperativaCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutBusInput
    turnos?: TurnoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutDuenoInput = {
    id?: number
    cooperativaId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutBusInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutDuenoInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput>
  }

  export type BusCreateManyDuenoInputEnvelope = {
    data: BusCreateManyDuenoInput | BusCreateManyDuenoInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithWhereUniqueWithoutDuenoInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutDuenoInput, BusUncheckedUpdateWithoutDuenoInput>
    create: XOR<BusCreateWithoutDuenoInput, BusUncheckedCreateWithoutDuenoInput>
  }

  export type BusUpdateWithWhereUniqueWithoutDuenoInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutDuenoInput, BusUncheckedUpdateWithoutDuenoInput>
  }

  export type BusUpdateManyWithWhereWithoutDuenoInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutDuenoInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: IntFilter<"Bus"> | number
    cooperativaId?: IntFilter<"Bus"> | number
    duenoId?: IntFilter<"Bus"> | number
    placa?: StringFilter<"Bus"> | string
    marca?: StringFilter<"Bus"> | string
    carroceria?: StringFilter<"Bus"> | string
    modelo?: StringFilter<"Bus"> | string
    anio?: IntFilter<"Bus"> | number
    capacidad?: IntFilter<"Bus"> | number
    color?: StringNullableFilter<"Bus"> | string | null
    estado?: EnumEstadoBusFilter<"Bus"> | $Enums.EstadoBus
  }

  export type BusCreateWithoutCooperativaInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    dueno: DuenoCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutBusInput
    turnos?: TurnoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutCooperativaInput = {
    id?: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutBusInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutCooperativaInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput>
  }

  export type BusCreateManyCooperativaInputEnvelope = {
    data: BusCreateManyCooperativaInput | BusCreateManyCooperativaInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithWhereUniqueWithoutCooperativaInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutCooperativaInput, BusUncheckedUpdateWithoutCooperativaInput>
    create: XOR<BusCreateWithoutCooperativaInput, BusUncheckedCreateWithoutCooperativaInput>
  }

  export type BusUpdateWithWhereUniqueWithoutCooperativaInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutCooperativaInput, BusUncheckedUpdateWithoutCooperativaInput>
  }

  export type BusUpdateManyWithWhereWithoutCooperativaInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutCooperativaInput>
  }

  export type CooperativaCreateWithoutBusesInput = {
    nombre: string
    ruc: string
    estado?: $Enums.EstadoGeneral
  }

  export type CooperativaUncheckedCreateWithoutBusesInput = {
    id?: number
    nombre: string
    ruc: string
    estado?: $Enums.EstadoGeneral
  }

  export type CooperativaCreateOrConnectWithoutBusesInput = {
    where: CooperativaWhereUniqueInput
    create: XOR<CooperativaCreateWithoutBusesInput, CooperativaUncheckedCreateWithoutBusesInput>
  }

  export type DuenoCreateWithoutBusesInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    cuentaBancaria?: string | null
    banco?: string | null
    estado?: $Enums.EstadoGeneral
  }

  export type DuenoUncheckedCreateWithoutBusesInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    cuentaBancaria?: string | null
    banco?: string | null
    estado?: $Enums.EstadoGeneral
  }

  export type DuenoCreateOrConnectWithoutBusesInput = {
    where: DuenoWhereUniqueInput
    create: XOR<DuenoCreateWithoutBusesInput, DuenoUncheckedCreateWithoutBusesInput>
  }

  export type AsientoCreateWithoutBusInput = {
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
    turnos?: AsientoTurnoCreateNestedManyWithoutAsientoInput
  }

  export type AsientoUncheckedCreateWithoutBusInput = {
    id?: number
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
    turnos?: AsientoTurnoUncheckedCreateNestedManyWithoutAsientoInput
  }

  export type AsientoCreateOrConnectWithoutBusInput = {
    where: AsientoWhereUniqueInput
    create: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput>
  }

  export type AsientoCreateManyBusInputEnvelope = {
    data: AsientoCreateManyBusInput | AsientoCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type FrecuenciaCreateWithoutBusInput = {
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
    ruta: RutaCreateNestedOneWithoutFrecuenciasInput
  }

  export type FrecuenciaUncheckedCreateWithoutBusInput = {
    id?: number
    rutaId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type FrecuenciaCreateOrConnectWithoutBusInput = {
    where: FrecuenciaWhereUniqueInput
    create: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput>
  }

  export type FrecuenciaCreateManyBusInputEnvelope = {
    data: FrecuenciaCreateManyBusInput | FrecuenciaCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type TurnoCreateWithoutBusInput = {
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    ruta: RutaCreateNestedOneWithoutTurnosInput
    chofer: ChoferCreateNestedOneWithoutTurnosInput
    asientosTurno?: AsientoTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutBusInput = {
    id?: number
    rutaId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutBusInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput>
  }

  export type TurnoCreateManyBusInputEnvelope = {
    data: TurnoCreateManyBusInput | TurnoCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type CooperativaUpsertWithoutBusesInput = {
    update: XOR<CooperativaUpdateWithoutBusesInput, CooperativaUncheckedUpdateWithoutBusesInput>
    create: XOR<CooperativaCreateWithoutBusesInput, CooperativaUncheckedCreateWithoutBusesInput>
    where?: CooperativaWhereInput
  }

  export type CooperativaUpdateToOneWithWhereWithoutBusesInput = {
    where?: CooperativaWhereInput
    data: XOR<CooperativaUpdateWithoutBusesInput, CooperativaUncheckedUpdateWithoutBusesInput>
  }

  export type CooperativaUpdateWithoutBusesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type CooperativaUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type DuenoUpsertWithoutBusesInput = {
    update: XOR<DuenoUpdateWithoutBusesInput, DuenoUncheckedUpdateWithoutBusesInput>
    create: XOR<DuenoCreateWithoutBusesInput, DuenoUncheckedCreateWithoutBusesInput>
    where?: DuenoWhereInput
  }

  export type DuenoUpdateToOneWithWhereWithoutBusesInput = {
    where?: DuenoWhereInput
    data: XOR<DuenoUpdateWithoutBusesInput, DuenoUncheckedUpdateWithoutBusesInput>
  }

  export type DuenoUpdateWithoutBusesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type DuenoUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaBancaria?: NullableStringFieldUpdateOperationsInput | string | null
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type AsientoUpsertWithWhereUniqueWithoutBusInput = {
    where: AsientoWhereUniqueInput
    update: XOR<AsientoUpdateWithoutBusInput, AsientoUncheckedUpdateWithoutBusInput>
    create: XOR<AsientoCreateWithoutBusInput, AsientoUncheckedCreateWithoutBusInput>
  }

  export type AsientoUpdateWithWhereUniqueWithoutBusInput = {
    where: AsientoWhereUniqueInput
    data: XOR<AsientoUpdateWithoutBusInput, AsientoUncheckedUpdateWithoutBusInput>
  }

  export type AsientoUpdateManyWithWhereWithoutBusInput = {
    where: AsientoScalarWhereInput
    data: XOR<AsientoUpdateManyMutationInput, AsientoUncheckedUpdateManyWithoutBusInput>
  }

  export type AsientoScalarWhereInput = {
    AND?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
    OR?: AsientoScalarWhereInput[]
    NOT?: AsientoScalarWhereInput | AsientoScalarWhereInput[]
    id?: IntFilter<"Asiento"> | number
    busId?: IntFilter<"Asiento"> | number
    numero?: IntFilter<"Asiento"> | number
    fila?: StringNullableFilter<"Asiento"> | string | null
    tipo?: EnumTipoAsientoFilter<"Asiento"> | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFilter<"Asiento"> | $Enums.EstadoGeneral
  }

  export type FrecuenciaUpsertWithWhereUniqueWithoutBusInput = {
    where: FrecuenciaWhereUniqueInput
    update: XOR<FrecuenciaUpdateWithoutBusInput, FrecuenciaUncheckedUpdateWithoutBusInput>
    create: XOR<FrecuenciaCreateWithoutBusInput, FrecuenciaUncheckedCreateWithoutBusInput>
  }

  export type FrecuenciaUpdateWithWhereUniqueWithoutBusInput = {
    where: FrecuenciaWhereUniqueInput
    data: XOR<FrecuenciaUpdateWithoutBusInput, FrecuenciaUncheckedUpdateWithoutBusInput>
  }

  export type FrecuenciaUpdateManyWithWhereWithoutBusInput = {
    where: FrecuenciaScalarWhereInput
    data: XOR<FrecuenciaUpdateManyMutationInput, FrecuenciaUncheckedUpdateManyWithoutBusInput>
  }

  export type FrecuenciaScalarWhereInput = {
    AND?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
    OR?: FrecuenciaScalarWhereInput[]
    NOT?: FrecuenciaScalarWhereInput | FrecuenciaScalarWhereInput[]
    id?: IntFilter<"Frecuencia"> | number
    rutaId?: IntFilter<"Frecuencia"> | number
    busId?: IntFilter<"Frecuencia"> | number
    diaSemana?: EnumDiaSemanaFilter<"Frecuencia"> | $Enums.DiaSemana
    horaSalida?: StringFilter<"Frecuencia"> | string
    horaLlegada?: StringFilter<"Frecuencia"> | string
  }

  export type TurnoUpsertWithWhereUniqueWithoutBusInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutBusInput, TurnoUncheckedUpdateWithoutBusInput>
    create: XOR<TurnoCreateWithoutBusInput, TurnoUncheckedCreateWithoutBusInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutBusInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutBusInput, TurnoUncheckedUpdateWithoutBusInput>
  }

  export type TurnoUpdateManyWithWhereWithoutBusInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutBusInput>
  }

  export type TurnoScalarWhereInput = {
    AND?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    OR?: TurnoScalarWhereInput[]
    NOT?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    id?: IntFilter<"Turno"> | number
    busId?: IntFilter<"Turno"> | number
    rutaId?: IntFilter<"Turno"> | number
    choferId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    horaInicio?: StringFilter<"Turno"> | string
    horaFin?: StringNullableFilter<"Turno"> | string | null
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
  }

  export type TurnoCreateWithoutChoferInput = {
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    bus: BusCreateNestedOneWithoutTurnosInput
    ruta: RutaCreateNestedOneWithoutTurnosInput
    asientosTurno?: AsientoTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutChoferInput = {
    id?: number
    busId: number
    rutaId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutChoferInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput>
  }

  export type TurnoCreateManyChoferInputEnvelope = {
    data: TurnoCreateManyChoferInput | TurnoCreateManyChoferInput[]
    skipDuplicates?: boolean
  }

  export type TurnoUpsertWithWhereUniqueWithoutChoferInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutChoferInput, TurnoUncheckedUpdateWithoutChoferInput>
    create: XOR<TurnoCreateWithoutChoferInput, TurnoUncheckedCreateWithoutChoferInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutChoferInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutChoferInput, TurnoUncheckedUpdateWithoutChoferInput>
  }

  export type TurnoUpdateManyWithWhereWithoutChoferInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutChoferInput>
  }

  export type ParadaCreateWithoutRutaInput = {
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
  }

  export type ParadaUncheckedCreateWithoutRutaInput = {
    id?: number
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
  }

  export type ParadaCreateOrConnectWithoutRutaInput = {
    where: ParadaWhereUniqueInput
    create: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput>
  }

  export type ParadaCreateManyRutaInputEnvelope = {
    data: ParadaCreateManyRutaInput | ParadaCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type FrecuenciaCreateWithoutRutaInput = {
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
    bus: BusCreateNestedOneWithoutFrecuenciasInput
  }

  export type FrecuenciaUncheckedCreateWithoutRutaInput = {
    id?: number
    busId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type FrecuenciaCreateOrConnectWithoutRutaInput = {
    where: FrecuenciaWhereUniqueInput
    create: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput>
  }

  export type FrecuenciaCreateManyRutaInputEnvelope = {
    data: FrecuenciaCreateManyRutaInput | FrecuenciaCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type TurnoCreateWithoutRutaInput = {
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    bus: BusCreateNestedOneWithoutTurnosInput
    chofer: ChoferCreateNestedOneWithoutTurnosInput
    asientosTurno?: AsientoTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutRutaInput = {
    id?: number
    busId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutRutaInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput>
  }

  export type TurnoCreateManyRutaInputEnvelope = {
    data: TurnoCreateManyRutaInput | TurnoCreateManyRutaInput[]
    skipDuplicates?: boolean
  }

  export type ParadaUpsertWithWhereUniqueWithoutRutaInput = {
    where: ParadaWhereUniqueInput
    update: XOR<ParadaUpdateWithoutRutaInput, ParadaUncheckedUpdateWithoutRutaInput>
    create: XOR<ParadaCreateWithoutRutaInput, ParadaUncheckedCreateWithoutRutaInput>
  }

  export type ParadaUpdateWithWhereUniqueWithoutRutaInput = {
    where: ParadaWhereUniqueInput
    data: XOR<ParadaUpdateWithoutRutaInput, ParadaUncheckedUpdateWithoutRutaInput>
  }

  export type ParadaUpdateManyWithWhereWithoutRutaInput = {
    where: ParadaScalarWhereInput
    data: XOR<ParadaUpdateManyMutationInput, ParadaUncheckedUpdateManyWithoutRutaInput>
  }

  export type ParadaScalarWhereInput = {
    AND?: ParadaScalarWhereInput | ParadaScalarWhereInput[]
    OR?: ParadaScalarWhereInput[]
    NOT?: ParadaScalarWhereInput | ParadaScalarWhereInput[]
    id?: IntFilter<"Parada"> | number
    rutaId?: IntFilter<"Parada"> | number
    nombre?: StringFilter<"Parada"> | string
    orden?: IntFilter<"Parada"> | number
    latitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFilter<"Parada"> | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFilter<"Parada"> | number
  }

  export type FrecuenciaUpsertWithWhereUniqueWithoutRutaInput = {
    where: FrecuenciaWhereUniqueInput
    update: XOR<FrecuenciaUpdateWithoutRutaInput, FrecuenciaUncheckedUpdateWithoutRutaInput>
    create: XOR<FrecuenciaCreateWithoutRutaInput, FrecuenciaUncheckedCreateWithoutRutaInput>
  }

  export type FrecuenciaUpdateWithWhereUniqueWithoutRutaInput = {
    where: FrecuenciaWhereUniqueInput
    data: XOR<FrecuenciaUpdateWithoutRutaInput, FrecuenciaUncheckedUpdateWithoutRutaInput>
  }

  export type FrecuenciaUpdateManyWithWhereWithoutRutaInput = {
    where: FrecuenciaScalarWhereInput
    data: XOR<FrecuenciaUpdateManyMutationInput, FrecuenciaUncheckedUpdateManyWithoutRutaInput>
  }

  export type TurnoUpsertWithWhereUniqueWithoutRutaInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutRutaInput, TurnoUncheckedUpdateWithoutRutaInput>
    create: XOR<TurnoCreateWithoutRutaInput, TurnoUncheckedCreateWithoutRutaInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutRutaInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutRutaInput, TurnoUncheckedUpdateWithoutRutaInput>
  }

  export type TurnoUpdateManyWithWhereWithoutRutaInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutRutaInput>
  }

  export type RutaCreateWithoutParadasInput = {
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    frecuencias?: FrecuenciaCreateNestedManyWithoutRutaInput
    turnos?: TurnoCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateWithoutParadasInput = {
    id?: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutRutaInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaCreateOrConnectWithoutParadasInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutParadasInput, RutaUncheckedCreateWithoutParadasInput>
  }

  export type RutaUpsertWithoutParadasInput = {
    update: XOR<RutaUpdateWithoutParadasInput, RutaUncheckedUpdateWithoutParadasInput>
    create: XOR<RutaCreateWithoutParadasInput, RutaUncheckedCreateWithoutParadasInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutParadasInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutParadasInput, RutaUncheckedUpdateWithoutParadasInput>
  }

  export type RutaUpdateWithoutParadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frecuencias?: FrecuenciaUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateWithoutParadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type RutaCreateWithoutFrecuenciasInput = {
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaCreateNestedManyWithoutRutaInput
    turnos?: TurnoCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateWithoutFrecuenciasInput = {
    id?: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedCreateNestedManyWithoutRutaInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaCreateOrConnectWithoutFrecuenciasInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutFrecuenciasInput, RutaUncheckedCreateWithoutFrecuenciasInput>
  }

  export type BusCreateWithoutFrecuenciasInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    cooperativa: CooperativaCreateNestedOneWithoutBusesInput
    dueno: DuenoCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    turnos?: TurnoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutFrecuenciasInput = {
    id?: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutFrecuenciasInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutFrecuenciasInput, BusUncheckedCreateWithoutFrecuenciasInput>
  }

  export type RutaUpsertWithoutFrecuenciasInput = {
    update: XOR<RutaUpdateWithoutFrecuenciasInput, RutaUncheckedUpdateWithoutFrecuenciasInput>
    create: XOR<RutaCreateWithoutFrecuenciasInput, RutaUncheckedCreateWithoutFrecuenciasInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutFrecuenciasInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutFrecuenciasInput, RutaUncheckedUpdateWithoutFrecuenciasInput>
  }

  export type RutaUpdateWithoutFrecuenciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateWithoutFrecuenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedUpdateManyWithoutRutaNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type BusUpsertWithoutFrecuenciasInput = {
    update: XOR<BusUpdateWithoutFrecuenciasInput, BusUncheckedUpdateWithoutFrecuenciasInput>
    create: XOR<BusCreateWithoutFrecuenciasInput, BusUncheckedCreateWithoutFrecuenciasInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutFrecuenciasInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutFrecuenciasInput, BusUncheckedUpdateWithoutFrecuenciasInput>
  }

  export type BusUpdateWithoutFrecuenciasInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    cooperativa?: CooperativaUpdateOneRequiredWithoutBusesNestedInput
    dueno?: DuenoUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    turnos?: TurnoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutFrecuenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateWithoutTurnosInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    cooperativa: CooperativaCreateNestedOneWithoutBusesInput
    dueno: DuenoCreateNestedOneWithoutBusesInput
    asientos?: AsientoCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutTurnosInput = {
    id?: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    asientos?: AsientoUncheckedCreateNestedManyWithoutBusInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutTurnosInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTurnosInput, BusUncheckedCreateWithoutTurnosInput>
  }

  export type RutaCreateWithoutTurnosInput = {
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaCreateNestedManyWithoutRutaInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutRutaInput
  }

  export type RutaUncheckedCreateWithoutTurnosInput = {
    id?: number
    nombre: string
    origen: string
    destino: string
    duracionMin: number
    precioPasaje: Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedCreateNestedManyWithoutRutaInput
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutRutaInput
  }

  export type RutaCreateOrConnectWithoutTurnosInput = {
    where: RutaWhereUniqueInput
    create: XOR<RutaCreateWithoutTurnosInput, RutaUncheckedCreateWithoutTurnosInput>
  }

  export type ChoferCreateWithoutTurnosInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    licencia: string
    tipoLicencia: string
    estado?: $Enums.EstadoGeneral
  }

  export type ChoferUncheckedCreateWithoutTurnosInput = {
    id?: number
    nombre: string
    cedula: string
    telefono?: string | null
    licencia: string
    tipoLicencia: string
    estado?: $Enums.EstadoGeneral
  }

  export type ChoferCreateOrConnectWithoutTurnosInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutTurnosInput, ChoferUncheckedCreateWithoutTurnosInput>
  }

  export type AsientoTurnoCreateWithoutTurnoInput = {
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
    asiento: AsientoCreateNestedOneWithoutTurnosInput
  }

  export type AsientoTurnoUncheckedCreateWithoutTurnoInput = {
    id?: number
    asientoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoCreateOrConnectWithoutTurnoInput = {
    where: AsientoTurnoWhereUniqueInput
    create: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput>
  }

  export type AsientoTurnoCreateManyTurnoInputEnvelope = {
    data: AsientoTurnoCreateManyTurnoInput | AsientoTurnoCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithoutTurnosInput = {
    update: XOR<BusUpdateWithoutTurnosInput, BusUncheckedUpdateWithoutTurnosInput>
    create: XOR<BusCreateWithoutTurnosInput, BusUncheckedCreateWithoutTurnosInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTurnosInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTurnosInput, BusUncheckedUpdateWithoutTurnosInput>
  }

  export type BusUpdateWithoutTurnosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    cooperativa?: CooperativaUpdateOneRequiredWithoutBusesNestedInput
    dueno?: DuenoUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutBusNestedInput
  }

  export type RutaUpsertWithoutTurnosInput = {
    update: XOR<RutaUpdateWithoutTurnosInput, RutaUncheckedUpdateWithoutTurnosInput>
    create: XOR<RutaCreateWithoutTurnosInput, RutaUncheckedCreateWithoutTurnosInput>
    where?: RutaWhereInput
  }

  export type RutaUpdateToOneWithWhereWithoutTurnosInput = {
    where?: RutaWhereInput
    data: XOR<RutaUpdateWithoutTurnosInput, RutaUncheckedUpdateWithoutTurnosInput>
  }

  export type RutaUpdateWithoutTurnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUpdateManyWithoutRutaNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutRutaNestedInput
  }

  export type RutaUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    duracionMin?: IntFieldUpdateOperationsInput | number
    precioPasaje?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paradas?: ParadaUncheckedUpdateManyWithoutRutaNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutRutaNestedInput
  }

  export type ChoferUpsertWithoutTurnosInput = {
    update: XOR<ChoferUpdateWithoutTurnosInput, ChoferUncheckedUpdateWithoutTurnosInput>
    create: XOR<ChoferCreateWithoutTurnosInput, ChoferUncheckedCreateWithoutTurnosInput>
    where?: ChoferWhereInput
  }

  export type ChoferUpdateToOneWithWhereWithoutTurnosInput = {
    where?: ChoferWhereInput
    data: XOR<ChoferUpdateWithoutTurnosInput, ChoferUncheckedUpdateWithoutTurnosInput>
  }

  export type ChoferUpdateWithoutTurnosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type ChoferUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: StringFieldUpdateOperationsInput | string
    tipoLicencia?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type AsientoTurnoUpsertWithWhereUniqueWithoutTurnoInput = {
    where: AsientoTurnoWhereUniqueInput
    update: XOR<AsientoTurnoUpdateWithoutTurnoInput, AsientoTurnoUncheckedUpdateWithoutTurnoInput>
    create: XOR<AsientoTurnoCreateWithoutTurnoInput, AsientoTurnoUncheckedCreateWithoutTurnoInput>
  }

  export type AsientoTurnoUpdateWithWhereUniqueWithoutTurnoInput = {
    where: AsientoTurnoWhereUniqueInput
    data: XOR<AsientoTurnoUpdateWithoutTurnoInput, AsientoTurnoUncheckedUpdateWithoutTurnoInput>
  }

  export type AsientoTurnoUpdateManyWithWhereWithoutTurnoInput = {
    where: AsientoTurnoScalarWhereInput
    data: XOR<AsientoTurnoUpdateManyMutationInput, AsientoTurnoUncheckedUpdateManyWithoutTurnoInput>
  }

  export type AsientoTurnoScalarWhereInput = {
    AND?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
    OR?: AsientoTurnoScalarWhereInput[]
    NOT?: AsientoTurnoScalarWhereInput | AsientoTurnoScalarWhereInput[]
    id?: IntFilter<"AsientoTurno"> | number
    turnoId?: IntFilter<"AsientoTurno"> | number
    asientoId?: IntFilter<"AsientoTurno"> | number
    boletoId?: IntNullableFilter<"AsientoTurno"> | number | null
    estado?: EnumEstadoAsientoTurnoFilter<"AsientoTurno"> | $Enums.EstadoAsientoTurno
  }

  export type BusCreateWithoutAsientosInput = {
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    cooperativa: CooperativaCreateNestedOneWithoutBusesInput
    dueno: DuenoCreateNestedOneWithoutBusesInput
    frecuencias?: FrecuenciaCreateNestedManyWithoutBusInput
    turnos?: TurnoCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutAsientosInput = {
    id?: number
    cooperativaId: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
    frecuencias?: FrecuenciaUncheckedCreateNestedManyWithoutBusInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutAsientosInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
  }

  export type AsientoTurnoCreateWithoutAsientoInput = {
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
    turno: TurnoCreateNestedOneWithoutAsientosTurnoInput
  }

  export type AsientoTurnoUncheckedCreateWithoutAsientoInput = {
    id?: number
    turnoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoCreateOrConnectWithoutAsientoInput = {
    where: AsientoTurnoWhereUniqueInput
    create: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput>
  }

  export type AsientoTurnoCreateManyAsientoInputEnvelope = {
    data: AsientoTurnoCreateManyAsientoInput | AsientoTurnoCreateManyAsientoInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithoutAsientosInput = {
    update: XOR<BusUpdateWithoutAsientosInput, BusUncheckedUpdateWithoutAsientosInput>
    create: XOR<BusCreateWithoutAsientosInput, BusUncheckedCreateWithoutAsientosInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutAsientosInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutAsientosInput, BusUncheckedUpdateWithoutAsientosInput>
  }

  export type BusUpdateWithoutAsientosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    cooperativa?: CooperativaUpdateOneRequiredWithoutBusesNestedInput
    dueno?: DuenoUpdateOneRequiredWithoutBusesNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutBusNestedInput
    turnos?: TurnoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutAsientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutBusNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type AsientoTurnoUpsertWithWhereUniqueWithoutAsientoInput = {
    where: AsientoTurnoWhereUniqueInput
    update: XOR<AsientoTurnoUpdateWithoutAsientoInput, AsientoTurnoUncheckedUpdateWithoutAsientoInput>
    create: XOR<AsientoTurnoCreateWithoutAsientoInput, AsientoTurnoUncheckedCreateWithoutAsientoInput>
  }

  export type AsientoTurnoUpdateWithWhereUniqueWithoutAsientoInput = {
    where: AsientoTurnoWhereUniqueInput
    data: XOR<AsientoTurnoUpdateWithoutAsientoInput, AsientoTurnoUncheckedUpdateWithoutAsientoInput>
  }

  export type AsientoTurnoUpdateManyWithWhereWithoutAsientoInput = {
    where: AsientoTurnoScalarWhereInput
    data: XOR<AsientoTurnoUpdateManyMutationInput, AsientoTurnoUncheckedUpdateManyWithoutAsientoInput>
  }

  export type TurnoCreateWithoutAsientosTurnoInput = {
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
    bus: BusCreateNestedOneWithoutTurnosInput
    ruta: RutaCreateNestedOneWithoutTurnosInput
    chofer: ChoferCreateNestedOneWithoutTurnosInput
  }

  export type TurnoUncheckedCreateWithoutAsientosTurnoInput = {
    id?: number
    busId: number
    rutaId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
  }

  export type TurnoCreateOrConnectWithoutAsientosTurnoInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutAsientosTurnoInput, TurnoUncheckedCreateWithoutAsientosTurnoInput>
  }

  export type AsientoCreateWithoutTurnosInput = {
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
    bus: BusCreateNestedOneWithoutAsientosInput
  }

  export type AsientoUncheckedCreateWithoutTurnosInput = {
    id?: number
    busId: number
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
  }

  export type AsientoCreateOrConnectWithoutTurnosInput = {
    where: AsientoWhereUniqueInput
    create: XOR<AsientoCreateWithoutTurnosInput, AsientoUncheckedCreateWithoutTurnosInput>
  }

  export type TurnoUpsertWithoutAsientosTurnoInput = {
    update: XOR<TurnoUpdateWithoutAsientosTurnoInput, TurnoUncheckedUpdateWithoutAsientosTurnoInput>
    create: XOR<TurnoCreateWithoutAsientosTurnoInput, TurnoUncheckedCreateWithoutAsientosTurnoInput>
    where?: TurnoWhereInput
  }

  export type TurnoUpdateToOneWithWhereWithoutAsientosTurnoInput = {
    where?: TurnoWhereInput
    data: XOR<TurnoUpdateWithoutAsientosTurnoInput, TurnoUncheckedUpdateWithoutAsientosTurnoInput>
  }

  export type TurnoUpdateWithoutAsientosTurnoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    bus?: BusUpdateOneRequiredWithoutTurnosNestedInput
    ruta?: RutaUpdateOneRequiredWithoutTurnosNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnoUncheckedUpdateWithoutAsientosTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type AsientoUpsertWithoutTurnosInput = {
    update: XOR<AsientoUpdateWithoutTurnosInput, AsientoUncheckedUpdateWithoutTurnosInput>
    create: XOR<AsientoCreateWithoutTurnosInput, AsientoUncheckedCreateWithoutTurnosInput>
    where?: AsientoWhereInput
  }

  export type AsientoUpdateToOneWithWhereWithoutTurnosInput = {
    where?: AsientoWhereInput
    data: XOR<AsientoUpdateWithoutTurnosInput, AsientoUncheckedUpdateWithoutTurnosInput>
  }

  export type AsientoUpdateWithoutTurnosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    bus?: BusUpdateOneRequiredWithoutAsientosNestedInput
  }

  export type AsientoUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type BusCreateManyDuenoInput = {
    id?: number
    cooperativaId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
  }

  export type BusUpdateWithoutDuenoInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    cooperativa?: CooperativaUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutBusNestedInput
    turnos?: TurnoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutDuenoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutBusNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutDuenoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cooperativaId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
  }

  export type BusCreateManyCooperativaInput = {
    id?: number
    duenoId: number
    placa: string
    marca: string
    carroceria: string
    modelo: string
    anio: number
    capacidad: number
    color?: string | null
    estado?: $Enums.EstadoBus
  }

  export type BusUpdateWithoutCooperativaInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    dueno?: DuenoUpdateOneRequiredWithoutBusesNestedInput
    asientos?: AsientoUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUpdateManyWithoutBusNestedInput
    turnos?: TurnoUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutCooperativaInput = {
    id?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
    asientos?: AsientoUncheckedUpdateManyWithoutBusNestedInput
    frecuencias?: FrecuenciaUncheckedUpdateManyWithoutBusNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutCooperativaInput = {
    id?: IntFieldUpdateOperationsInput | number
    duenoId?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    carroceria?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoBusFieldUpdateOperationsInput | $Enums.EstadoBus
  }

  export type AsientoCreateManyBusInput = {
    id?: number
    numero: number
    fila?: string | null
    tipo?: $Enums.TipoAsiento
    estado?: $Enums.EstadoGeneral
  }

  export type FrecuenciaCreateManyBusInput = {
    id?: number
    rutaId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type TurnoCreateManyBusInput = {
    id?: number
    rutaId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
  }

  export type AsientoUpdateWithoutBusInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    turnos?: AsientoTurnoUpdateManyWithoutAsientoNestedInput
  }

  export type AsientoUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
    turnos?: AsientoTurnoUncheckedUpdateManyWithoutAsientoNestedInput
  }

  export type AsientoUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fila?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoAsientoFieldUpdateOperationsInput | $Enums.TipoAsiento
    estado?: EnumEstadoGeneralFieldUpdateOperationsInput | $Enums.EstadoGeneral
  }

  export type FrecuenciaUpdateWithoutBusInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
    ruta?: RutaUpdateOneRequiredWithoutFrecuenciasNestedInput
  }

  export type FrecuenciaUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type FrecuenciaUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoUpdateWithoutBusInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    ruta?: RutaUpdateOneRequiredWithoutTurnosNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutTurnosNestedInput
    asientosTurno?: AsientoTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type TurnoCreateManyChoferInput = {
    id?: number
    busId: number
    rutaId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
  }

  export type TurnoUpdateWithoutChoferInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    bus?: BusUpdateOneRequiredWithoutTurnosNestedInput
    ruta?: RutaUpdateOneRequiredWithoutTurnosNestedInput
    asientosTurno?: AsientoTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutChoferInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutChoferInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rutaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type ParadaCreateManyRutaInput = {
    id?: number
    nombre: string
    orden: number
    latitud: Decimal | DecimalJsLike | number | string
    longitud: Decimal | DecimalJsLike | number | string
    metrosAlerta?: number
  }

  export type FrecuenciaCreateManyRutaInput = {
    id?: number
    busId: number
    diaSemana: $Enums.DiaSemana
    horaSalida: string
    horaLlegada: string
  }

  export type TurnoCreateManyRutaInput = {
    id?: number
    busId: number
    choferId: number
    fecha: Date | string
    horaInicio: string
    horaFin?: string | null
    estado?: $Enums.EstadoTurno
  }

  export type ParadaUpdateWithoutRutaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type ParadaUncheckedUpdateWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type ParadaUncheckedUpdateManyWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    latitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitud?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metrosAlerta?: IntFieldUpdateOperationsInput | number
  }

  export type FrecuenciaUpdateWithoutRutaInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
    bus?: BusUpdateOneRequiredWithoutFrecuenciasNestedInput
  }

  export type FrecuenciaUncheckedUpdateWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type FrecuenciaUncheckedUpdateManyWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaSalida?: StringFieldUpdateOperationsInput | string
    horaLlegada?: StringFieldUpdateOperationsInput | string
  }

  export type TurnoUpdateWithoutRutaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    bus?: BusUpdateOneRequiredWithoutTurnosNestedInput
    chofer?: ChoferUpdateOneRequiredWithoutTurnosNestedInput
    asientosTurno?: AsientoTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    asientosTurno?: AsientoTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutRutaInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    choferId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
  }

  export type AsientoTurnoCreateManyTurnoInput = {
    id?: number
    asientoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUpdateWithoutTurnoInput = {
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
    asiento?: AsientoUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type AsientoTurnoUncheckedUpdateWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    asientoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUncheckedUpdateManyWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    asientoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoCreateManyAsientoInput = {
    id?: number
    turnoId: number
    boletoId?: number | null
    estado?: $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUpdateWithoutAsientoInput = {
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
    turno?: TurnoUpdateOneRequiredWithoutAsientosTurnoNestedInput
  }

  export type AsientoTurnoUncheckedUpdateWithoutAsientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }

  export type AsientoTurnoUncheckedUpdateManyWithoutAsientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    boletoId?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAsientoTurnoFieldUpdateOperationsInput | $Enums.EstadoAsientoTurno
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DuenoCountOutputTypeDefaultArgs instead
     */
    export type DuenoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DuenoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CooperativaCountOutputTypeDefaultArgs instead
     */
    export type CooperativaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CooperativaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusCountOutputTypeDefaultArgs instead
     */
    export type BusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChoferCountOutputTypeDefaultArgs instead
     */
    export type ChoferCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChoferCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RutaCountOutputTypeDefaultArgs instead
     */
    export type RutaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RutaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoCountOutputTypeDefaultArgs instead
     */
    export type TurnoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsientoCountOutputTypeDefaultArgs instead
     */
    export type AsientoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsientoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DuenoDefaultArgs instead
     */
    export type DuenoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DuenoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CooperativaDefaultArgs instead
     */
    export type CooperativaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CooperativaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusDefaultArgs instead
     */
    export type BusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChoferDefaultArgs instead
     */
    export type ChoferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChoferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RutaDefaultArgs instead
     */
    export type RutaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RutaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParadaDefaultArgs instead
     */
    export type ParadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParadaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrecuenciaDefaultArgs instead
     */
    export type FrecuenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrecuenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoDefaultArgs instead
     */
    export type TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsientoDefaultArgs instead
     */
    export type AsientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsientoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsientoTurnoDefaultArgs instead
     */
    export type AsientoTurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsientoTurnoDefaultArgs<ExtArgs>

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