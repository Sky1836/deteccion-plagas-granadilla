
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Diagnostico
 * 
 */
export type Diagnostico = $Result.DefaultSelection<Prisma.$DiagnosticoPayload>
/**
 * Model Plaga
 * 
 */
export type Plaga = $Result.DefaultSelection<Prisma.$PlagaPayload>
/**
 * Model Insecticida
 * 
 */
export type Insecticida = $Result.DefaultSelection<Prisma.$InsecticidaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  AGRICULTOR: 'AGRICULTOR',
  ADMIN: 'ADMIN'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostico`: Exposes CRUD operations for the **Diagnostico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosticos
    * const diagnosticos = await prisma.diagnostico.findMany()
    * ```
    */
  get diagnostico(): Prisma.DiagnosticoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plaga`: Exposes CRUD operations for the **Plaga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plagas
    * const plagas = await prisma.plaga.findMany()
    * ```
    */
  get plaga(): Prisma.PlagaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insecticida`: Exposes CRUD operations for the **Insecticida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insecticidas
    * const insecticidas = await prisma.insecticida.findMany()
    * ```
    */
  get insecticida(): Prisma.InsecticidaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Diagnostico: 'Diagnostico',
    Plaga: 'Plaga',
    Insecticida: 'Insecticida'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "diagnostico" | "plaga" | "insecticida"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Diagnostico: {
        payload: Prisma.$DiagnosticoPayload<ExtArgs>
        fields: Prisma.DiagnosticoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findMany: {
            args: Prisma.DiagnosticoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          create: {
            args: Prisma.DiagnosticoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          createMany: {
            args: Prisma.DiagnosticoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosticoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          delete: {
            args: Prisma.DiagnosticoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          update: {
            args: Prisma.DiagnosticoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosticoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosticoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostico>
          }
          groupBy: {
            args: Prisma.DiagnosticoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticoCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoCountAggregateOutputType> | number
          }
        }
      }
      Plaga: {
        payload: Prisma.$PlagaPayload<ExtArgs>
        fields: Prisma.PlagaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlagaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlagaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          findFirst: {
            args: Prisma.PlagaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlagaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          findMany: {
            args: Prisma.PlagaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>[]
          }
          create: {
            args: Prisma.PlagaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          createMany: {
            args: Prisma.PlagaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlagaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>[]
          }
          delete: {
            args: Prisma.PlagaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          update: {
            args: Prisma.PlagaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          deleteMany: {
            args: Prisma.PlagaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlagaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlagaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>[]
          }
          upsert: {
            args: Prisma.PlagaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlagaPayload>
          }
          aggregate: {
            args: Prisma.PlagaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaga>
          }
          groupBy: {
            args: Prisma.PlagaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlagaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlagaCountArgs<ExtArgs>
            result: $Utils.Optional<PlagaCountAggregateOutputType> | number
          }
        }
      }
      Insecticida: {
        payload: Prisma.$InsecticidaPayload<ExtArgs>
        fields: Prisma.InsecticidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsecticidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsecticidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          findFirst: {
            args: Prisma.InsecticidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsecticidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          findMany: {
            args: Prisma.InsecticidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>[]
          }
          create: {
            args: Prisma.InsecticidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          createMany: {
            args: Prisma.InsecticidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsecticidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>[]
          }
          delete: {
            args: Prisma.InsecticidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          update: {
            args: Prisma.InsecticidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          deleteMany: {
            args: Prisma.InsecticidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsecticidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsecticidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>[]
          }
          upsert: {
            args: Prisma.InsecticidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsecticidaPayload>
          }
          aggregate: {
            args: Prisma.InsecticidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsecticida>
          }
          groupBy: {
            args: Prisma.InsecticidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsecticidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsecticidaCountArgs<ExtArgs>
            result: $Utils.Optional<InsecticidaCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    diagnostico?: DiagnosticoOmit
    plaga?: PlagaOmit
    insecticida?: InsecticidaOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    diagnosticos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | UserCountOutputTypeCountDiagnosticosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
  }


  /**
   * Count Type PlagaCountOutputType
   */

  export type PlagaCountOutputType = {
    insecticidas: number
    diagnosticos: number
  }

  export type PlagaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insecticidas?: boolean | PlagaCountOutputTypeCountInsecticidasArgs
    diagnosticos?: boolean | PlagaCountOutputTypeCountDiagnosticosArgs
  }

  // Custom InputTypes
  /**
   * PlagaCountOutputType without action
   */
  export type PlagaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlagaCountOutputType
     */
    select?: PlagaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlagaCountOutputType without action
   */
  export type PlagaCountOutputTypeCountInsecticidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsecticidaWhereInput
  }

  /**
   * PlagaCountOutputType without action
   */
  export type PlagaCountOutputTypeCountDiagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    telefono: string | null
    rol: $Enums.Rol | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    rol: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    rol?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    rol?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    rol?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nombre: string
    email: string
    telefono: string | null
    rol: $Enums.Rol
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    rol?: boolean
    createdAt?: boolean
    diagnosticos?: boolean | User$diagnosticosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    rol?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "rol" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | User$diagnosticosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      diagnosticos: Prisma.$DiagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      telefono: string | null
      rol: $Enums.Rol
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticos<T extends User$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, User$diagnosticosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly telefono: FieldRef<"User", 'String'>
    readonly rol: FieldRef<"User", 'Rol'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.diagnosticos
   */
  export type User$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    cursor?: DiagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostico
   */

  export type AggregateDiagnostico = {
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  export type DiagnosticoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    plagaId: number | null
  }

  export type DiagnosticoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    plagaId: number | null
  }

  export type DiagnosticoMinAggregateOutputType = {
    id: number | null
    imagenUrl: string | null
    resultado: string | null
    recomendacion: string | null
    fecha: Date | null
    userId: number | null
    plagaId: number | null
  }

  export type DiagnosticoMaxAggregateOutputType = {
    id: number | null
    imagenUrl: string | null
    resultado: string | null
    recomendacion: string | null
    fecha: Date | null
    userId: number | null
    plagaId: number | null
  }

  export type DiagnosticoCountAggregateOutputType = {
    id: number
    imagenUrl: number
    resultado: number
    recomendacion: number
    fecha: number
    userId: number
    plagaId: number
    _all: number
  }


  export type DiagnosticoAvgAggregateInputType = {
    id?: true
    userId?: true
    plagaId?: true
  }

  export type DiagnosticoSumAggregateInputType = {
    id?: true
    userId?: true
    plagaId?: true
  }

  export type DiagnosticoMinAggregateInputType = {
    id?: true
    imagenUrl?: true
    resultado?: true
    recomendacion?: true
    fecha?: true
    userId?: true
    plagaId?: true
  }

  export type DiagnosticoMaxAggregateInputType = {
    id?: true
    imagenUrl?: true
    resultado?: true
    recomendacion?: true
    fecha?: true
    userId?: true
    plagaId?: true
  }

  export type DiagnosticoCountAggregateInputType = {
    id?: true
    imagenUrl?: true
    resultado?: true
    recomendacion?: true
    fecha?: true
    userId?: true
    plagaId?: true
    _all?: true
  }

  export type DiagnosticoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostico to aggregate.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnosticos
    **/
    _count?: true | DiagnosticoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type GetDiagnosticoAggregateType<T extends DiagnosticoAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostico[P]>
      : GetScalarType<T[P], AggregateDiagnostico[P]>
  }




  export type DiagnosticoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithAggregationInput | DiagnosticoOrderByWithAggregationInput[]
    by: DiagnosticoScalarFieldEnum[] | DiagnosticoScalarFieldEnum
    having?: DiagnosticoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticoCountAggregateInputType | true
    _avg?: DiagnosticoAvgAggregateInputType
    _sum?: DiagnosticoSumAggregateInputType
    _min?: DiagnosticoMinAggregateInputType
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type DiagnosticoGroupByOutputType = {
    id: number
    imagenUrl: string
    resultado: string
    recomendacion: string | null
    fecha: Date
    userId: number
    plagaId: number
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  type GetDiagnosticoGroupByPayload<T extends DiagnosticoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagenUrl?: boolean
    resultado?: boolean
    recomendacion?: boolean
    fecha?: boolean
    userId?: boolean
    plagaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagenUrl?: boolean
    resultado?: boolean
    recomendacion?: boolean
    fecha?: boolean
    userId?: boolean
    plagaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imagenUrl?: boolean
    resultado?: boolean
    recomendacion?: boolean
    fecha?: boolean
    userId?: boolean
    plagaId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectScalar = {
    id?: boolean
    imagenUrl?: boolean
    resultado?: boolean
    recomendacion?: boolean
    fecha?: boolean
    userId?: boolean
    plagaId?: boolean
  }

  export type DiagnosticoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imagenUrl" | "resultado" | "recomendacion" | "fecha" | "userId" | "plagaId", ExtArgs["result"]["diagnostico"]>
  export type DiagnosticoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }
  export type DiagnosticoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }
  export type DiagnosticoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }

  export type $DiagnosticoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostico"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plaga: Prisma.$PlagaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imagenUrl: string
      resultado: string
      recomendacion: string | null
      fecha: Date
      userId: number
      plagaId: number
    }, ExtArgs["result"]["diagnostico"]>
    composites: {}
  }

  type DiagnosticoGetPayload<S extends boolean | null | undefined | DiagnosticoDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticoPayload, S>

  type DiagnosticoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticoCountAggregateInputType | true
    }

  export interface DiagnosticoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostico'], meta: { name: 'Diagnostico' } }
    /**
     * Find zero or one Diagnostico that matches the filter.
     * @param {DiagnosticoFindUniqueArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticoFindUniqueArgs>(args: SelectSubset<T, DiagnosticoFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticoFindUniqueOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticoFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticoFindFirstArgs>(args?: SelectSubset<T, DiagnosticoFindFirstArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticoFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany()
     * 
     * // Get first 10 Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticoWithIdOnly = await prisma.diagnostico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticoFindManyArgs>(args?: SelectSubset<T, DiagnosticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostico.
     * @param {DiagnosticoCreateArgs} args - Arguments to create a Diagnostico.
     * @example
     * // Create one Diagnostico
     * const Diagnostico = await prisma.diagnostico.create({
     *   data: {
     *     // ... data to create a Diagnostico
     *   }
     * })
     * 
     */
    create<T extends DiagnosticoCreateArgs>(args: SelectSubset<T, DiagnosticoCreateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosticos.
     * @param {DiagnosticoCreateManyArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticoCreateManyArgs>(args?: SelectSubset<T, DiagnosticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnosticos and returns the data saved in the database.
     * @param {DiagnosticoCreateManyAndReturnArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnosticos and only return the `id`
     * const diagnosticoWithIdOnly = await prisma.diagnostico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosticoCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosticoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnostico.
     * @param {DiagnosticoDeleteArgs} args - Arguments to delete one Diagnostico.
     * @example
     * // Delete one Diagnostico
     * const Diagnostico = await prisma.diagnostico.delete({
     *   where: {
     *     // ... filter to delete one Diagnostico
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticoDeleteArgs>(args: SelectSubset<T, DiagnosticoDeleteArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostico.
     * @param {DiagnosticoUpdateArgs} args - Arguments to update one Diagnostico.
     * @example
     * // Update one Diagnostico
     * const diagnostico = await prisma.diagnostico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticoUpdateArgs>(args: SelectSubset<T, DiagnosticoUpdateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosticos.
     * @param {DiagnosticoDeleteManyArgs} args - Arguments to filter Diagnosticos to delete.
     * @example
     * // Delete a few Diagnosticos
     * const { count } = await prisma.diagnostico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticoDeleteManyArgs>(args?: SelectSubset<T, DiagnosticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosticos
     * const diagnostico = await prisma.diagnostico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticoUpdateManyArgs>(args: SelectSubset<T, DiagnosticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos and returns the data updated in the database.
     * @param {DiagnosticoUpdateManyAndReturnArgs} args - Arguments to update many Diagnosticos.
     * @example
     * // Update many Diagnosticos
     * const diagnostico = await prisma.diagnostico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnosticos and only return the `id`
     * const diagnosticoWithIdOnly = await prisma.diagnostico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiagnosticoUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosticoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnostico.
     * @param {DiagnosticoUpsertArgs} args - Arguments to update or create a Diagnostico.
     * @example
     * // Update or create a Diagnostico
     * const diagnostico = await prisma.diagnostico.upsert({
     *   create: {
     *     // ... data to create a Diagnostico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostico we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticoUpsertArgs>(args: SelectSubset<T, DiagnosticoUpsertArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoCountArgs} args - Arguments to filter Diagnosticos to count.
     * @example
     * // Count the number of Diagnosticos
     * const count = await prisma.diagnostico.count({
     *   where: {
     *     // ... the filter for the Diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticoCountArgs>(
      args?: Subset<T, DiagnosticoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticoAggregateArgs>(args: Subset<T, DiagnosticoAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticoAggregateType<T>>

    /**
     * Group by Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticoGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostico model
   */
  readonly fields: DiagnosticoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plaga<T extends PlagaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlagaDefaultArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diagnostico model
   */
  interface DiagnosticoFieldRefs {
    readonly id: FieldRef<"Diagnostico", 'Int'>
    readonly imagenUrl: FieldRef<"Diagnostico", 'String'>
    readonly resultado: FieldRef<"Diagnostico", 'String'>
    readonly recomendacion: FieldRef<"Diagnostico", 'String'>
    readonly fecha: FieldRef<"Diagnostico", 'DateTime'>
    readonly userId: FieldRef<"Diagnostico", 'Int'>
    readonly plagaId: FieldRef<"Diagnostico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostico findUnique
   */
  export type DiagnosticoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findUniqueOrThrow
   */
  export type DiagnosticoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findFirst
   */
  export type DiagnosticoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findFirstOrThrow
   */
  export type DiagnosticoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findMany
   */
  export type DiagnosticoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosticos to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico create
   */
  export type DiagnosticoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostico.
     */
    data: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
  }

  /**
   * Diagnostico createMany
   */
  export type DiagnosticoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnosticos.
     */
    data: DiagnosticoCreateManyInput | DiagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostico createManyAndReturn
   */
  export type DiagnosticoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnosticos.
     */
    data: DiagnosticoCreateManyInput | DiagnosticoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostico update
   */
  export type DiagnosticoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostico.
     */
    data: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
    /**
     * Choose, which Diagnostico to update.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico updateMany
   */
  export type DiagnosticoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnosticos.
     */
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Diagnosticos to update
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to update.
     */
    limit?: number
  }

  /**
   * Diagnostico updateManyAndReturn
   */
  export type DiagnosticoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * The data used to update Diagnosticos.
     */
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Diagnosticos to update
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostico upsert
   */
  export type DiagnosticoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostico to update in case it exists.
     */
    where: DiagnosticoWhereUniqueInput
    /**
     * In case the Diagnostico found by the `where` argument doesn't exist, create a new Diagnostico with this data.
     */
    create: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
    /**
     * In case the Diagnostico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
  }

  /**
   * Diagnostico delete
   */
  export type DiagnosticoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter which Diagnostico to delete.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico deleteMany
   */
  export type DiagnosticoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosticos to delete
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * Diagnostico without action
   */
  export type DiagnosticoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
  }


  /**
   * Model Plaga
   */

  export type AggregatePlaga = {
    _count: PlagaCountAggregateOutputType | null
    _avg: PlagaAvgAggregateOutputType | null
    _sum: PlagaSumAggregateOutputType | null
    _min: PlagaMinAggregateOutputType | null
    _max: PlagaMaxAggregateOutputType | null
  }

  export type PlagaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlagaSumAggregateOutputType = {
    id: number | null
  }

  export type PlagaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    tipo: string | null
    createdAt: Date | null
  }

  export type PlagaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    tipo: string | null
    createdAt: Date | null
  }

  export type PlagaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    tipo: number
    createdAt: number
    _all: number
  }


  export type PlagaAvgAggregateInputType = {
    id?: true
  }

  export type PlagaSumAggregateInputType = {
    id?: true
  }

  export type PlagaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tipo?: true
    createdAt?: true
  }

  export type PlagaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tipo?: true
    createdAt?: true
  }

  export type PlagaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    tipo?: true
    createdAt?: true
    _all?: true
  }

  export type PlagaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plaga to aggregate.
     */
    where?: PlagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plagas to fetch.
     */
    orderBy?: PlagaOrderByWithRelationInput | PlagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plagas
    **/
    _count?: true | PlagaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlagaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlagaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlagaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlagaMaxAggregateInputType
  }

  export type GetPlagaAggregateType<T extends PlagaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaga[P]>
      : GetScalarType<T[P], AggregatePlaga[P]>
  }




  export type PlagaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlagaWhereInput
    orderBy?: PlagaOrderByWithAggregationInput | PlagaOrderByWithAggregationInput[]
    by: PlagaScalarFieldEnum[] | PlagaScalarFieldEnum
    having?: PlagaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlagaCountAggregateInputType | true
    _avg?: PlagaAvgAggregateInputType
    _sum?: PlagaSumAggregateInputType
    _min?: PlagaMinAggregateInputType
    _max?: PlagaMaxAggregateInputType
  }

  export type PlagaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    tipo: string
    createdAt: Date
    _count: PlagaCountAggregateOutputType | null
    _avg: PlagaAvgAggregateOutputType | null
    _sum: PlagaSumAggregateOutputType | null
    _min: PlagaMinAggregateOutputType | null
    _max: PlagaMaxAggregateOutputType | null
  }

  type GetPlagaGroupByPayload<T extends PlagaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlagaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlagaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlagaGroupByOutputType[P]>
            : GetScalarType<T[P], PlagaGroupByOutputType[P]>
        }
      >
    >


  export type PlagaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipo?: boolean
    createdAt?: boolean
    insecticidas?: boolean | Plaga$insecticidasArgs<ExtArgs>
    diagnosticos?: boolean | Plaga$diagnosticosArgs<ExtArgs>
    _count?: boolean | PlagaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plaga"]>

  export type PlagaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plaga"]>

  export type PlagaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plaga"]>

  export type PlagaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    tipo?: boolean
    createdAt?: boolean
  }

  export type PlagaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "tipo" | "createdAt", ExtArgs["result"]["plaga"]>
  export type PlagaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insecticidas?: boolean | Plaga$insecticidasArgs<ExtArgs>
    diagnosticos?: boolean | Plaga$diagnosticosArgs<ExtArgs>
    _count?: boolean | PlagaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlagaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlagaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlagaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plaga"
    objects: {
      insecticidas: Prisma.$InsecticidaPayload<ExtArgs>[]
      diagnosticos: Prisma.$DiagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      tipo: string
      createdAt: Date
    }, ExtArgs["result"]["plaga"]>
    composites: {}
  }

  type PlagaGetPayload<S extends boolean | null | undefined | PlagaDefaultArgs> = $Result.GetResult<Prisma.$PlagaPayload, S>

  type PlagaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlagaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlagaCountAggregateInputType | true
    }

  export interface PlagaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plaga'], meta: { name: 'Plaga' } }
    /**
     * Find zero or one Plaga that matches the filter.
     * @param {PlagaFindUniqueArgs} args - Arguments to find a Plaga
     * @example
     * // Get one Plaga
     * const plaga = await prisma.plaga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlagaFindUniqueArgs>(args: SelectSubset<T, PlagaFindUniqueArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plaga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlagaFindUniqueOrThrowArgs} args - Arguments to find a Plaga
     * @example
     * // Get one Plaga
     * const plaga = await prisma.plaga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlagaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlagaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plaga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaFindFirstArgs} args - Arguments to find a Plaga
     * @example
     * // Get one Plaga
     * const plaga = await prisma.plaga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlagaFindFirstArgs>(args?: SelectSubset<T, PlagaFindFirstArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plaga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaFindFirstOrThrowArgs} args - Arguments to find a Plaga
     * @example
     * // Get one Plaga
     * const plaga = await prisma.plaga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlagaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlagaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plagas
     * const plagas = await prisma.plaga.findMany()
     * 
     * // Get first 10 Plagas
     * const plagas = await prisma.plaga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plagaWithIdOnly = await prisma.plaga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlagaFindManyArgs>(args?: SelectSubset<T, PlagaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plaga.
     * @param {PlagaCreateArgs} args - Arguments to create a Plaga.
     * @example
     * // Create one Plaga
     * const Plaga = await prisma.plaga.create({
     *   data: {
     *     // ... data to create a Plaga
     *   }
     * })
     * 
     */
    create<T extends PlagaCreateArgs>(args: SelectSubset<T, PlagaCreateArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plagas.
     * @param {PlagaCreateManyArgs} args - Arguments to create many Plagas.
     * @example
     * // Create many Plagas
     * const plaga = await prisma.plaga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlagaCreateManyArgs>(args?: SelectSubset<T, PlagaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plagas and returns the data saved in the database.
     * @param {PlagaCreateManyAndReturnArgs} args - Arguments to create many Plagas.
     * @example
     * // Create many Plagas
     * const plaga = await prisma.plaga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plagas and only return the `id`
     * const plagaWithIdOnly = await prisma.plaga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlagaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlagaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plaga.
     * @param {PlagaDeleteArgs} args - Arguments to delete one Plaga.
     * @example
     * // Delete one Plaga
     * const Plaga = await prisma.plaga.delete({
     *   where: {
     *     // ... filter to delete one Plaga
     *   }
     * })
     * 
     */
    delete<T extends PlagaDeleteArgs>(args: SelectSubset<T, PlagaDeleteArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plaga.
     * @param {PlagaUpdateArgs} args - Arguments to update one Plaga.
     * @example
     * // Update one Plaga
     * const plaga = await prisma.plaga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlagaUpdateArgs>(args: SelectSubset<T, PlagaUpdateArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plagas.
     * @param {PlagaDeleteManyArgs} args - Arguments to filter Plagas to delete.
     * @example
     * // Delete a few Plagas
     * const { count } = await prisma.plaga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlagaDeleteManyArgs>(args?: SelectSubset<T, PlagaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plagas
     * const plaga = await prisma.plaga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlagaUpdateManyArgs>(args: SelectSubset<T, PlagaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plagas and returns the data updated in the database.
     * @param {PlagaUpdateManyAndReturnArgs} args - Arguments to update many Plagas.
     * @example
     * // Update many Plagas
     * const plaga = await prisma.plaga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plagas and only return the `id`
     * const plagaWithIdOnly = await prisma.plaga.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlagaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlagaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plaga.
     * @param {PlagaUpsertArgs} args - Arguments to update or create a Plaga.
     * @example
     * // Update or create a Plaga
     * const plaga = await prisma.plaga.upsert({
     *   create: {
     *     // ... data to create a Plaga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plaga we want to update
     *   }
     * })
     */
    upsert<T extends PlagaUpsertArgs>(args: SelectSubset<T, PlagaUpsertArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaCountArgs} args - Arguments to filter Plagas to count.
     * @example
     * // Count the number of Plagas
     * const count = await prisma.plaga.count({
     *   where: {
     *     // ... the filter for the Plagas we want to count
     *   }
     * })
    **/
    count<T extends PlagaCountArgs>(
      args?: Subset<T, PlagaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlagaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlagaAggregateArgs>(args: Subset<T, PlagaAggregateArgs>): Prisma.PrismaPromise<GetPlagaAggregateType<T>>

    /**
     * Group by Plaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlagaGroupByArgs} args - Group by arguments.
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
      T extends PlagaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlagaGroupByArgs['orderBy'] }
        : { orderBy?: PlagaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlagaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlagaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plaga model
   */
  readonly fields: PlagaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plaga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlagaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insecticidas<T extends Plaga$insecticidasArgs<ExtArgs> = {}>(args?: Subset<T, Plaga$insecticidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnosticos<T extends Plaga$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, Plaga$diagnosticosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plaga model
   */
  interface PlagaFieldRefs {
    readonly id: FieldRef<"Plaga", 'Int'>
    readonly nombre: FieldRef<"Plaga", 'String'>
    readonly descripcion: FieldRef<"Plaga", 'String'>
    readonly tipo: FieldRef<"Plaga", 'String'>
    readonly createdAt: FieldRef<"Plaga", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plaga findUnique
   */
  export type PlagaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter, which Plaga to fetch.
     */
    where: PlagaWhereUniqueInput
  }

  /**
   * Plaga findUniqueOrThrow
   */
  export type PlagaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter, which Plaga to fetch.
     */
    where: PlagaWhereUniqueInput
  }

  /**
   * Plaga findFirst
   */
  export type PlagaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter, which Plaga to fetch.
     */
    where?: PlagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plagas to fetch.
     */
    orderBy?: PlagaOrderByWithRelationInput | PlagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plagas.
     */
    cursor?: PlagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plagas.
     */
    distinct?: PlagaScalarFieldEnum | PlagaScalarFieldEnum[]
  }

  /**
   * Plaga findFirstOrThrow
   */
  export type PlagaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter, which Plaga to fetch.
     */
    where?: PlagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plagas to fetch.
     */
    orderBy?: PlagaOrderByWithRelationInput | PlagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plagas.
     */
    cursor?: PlagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plagas.
     */
    distinct?: PlagaScalarFieldEnum | PlagaScalarFieldEnum[]
  }

  /**
   * Plaga findMany
   */
  export type PlagaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter, which Plagas to fetch.
     */
    where?: PlagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plagas to fetch.
     */
    orderBy?: PlagaOrderByWithRelationInput | PlagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plagas.
     */
    cursor?: PlagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plagas.
     */
    skip?: number
    distinct?: PlagaScalarFieldEnum | PlagaScalarFieldEnum[]
  }

  /**
   * Plaga create
   */
  export type PlagaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plaga.
     */
    data: XOR<PlagaCreateInput, PlagaUncheckedCreateInput>
  }

  /**
   * Plaga createMany
   */
  export type PlagaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plagas.
     */
    data: PlagaCreateManyInput | PlagaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plaga createManyAndReturn
   */
  export type PlagaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * The data used to create many Plagas.
     */
    data: PlagaCreateManyInput | PlagaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plaga update
   */
  export type PlagaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plaga.
     */
    data: XOR<PlagaUpdateInput, PlagaUncheckedUpdateInput>
    /**
     * Choose, which Plaga to update.
     */
    where: PlagaWhereUniqueInput
  }

  /**
   * Plaga updateMany
   */
  export type PlagaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plagas.
     */
    data: XOR<PlagaUpdateManyMutationInput, PlagaUncheckedUpdateManyInput>
    /**
     * Filter which Plagas to update
     */
    where?: PlagaWhereInput
    /**
     * Limit how many Plagas to update.
     */
    limit?: number
  }

  /**
   * Plaga updateManyAndReturn
   */
  export type PlagaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * The data used to update Plagas.
     */
    data: XOR<PlagaUpdateManyMutationInput, PlagaUncheckedUpdateManyInput>
    /**
     * Filter which Plagas to update
     */
    where?: PlagaWhereInput
    /**
     * Limit how many Plagas to update.
     */
    limit?: number
  }

  /**
   * Plaga upsert
   */
  export type PlagaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plaga to update in case it exists.
     */
    where: PlagaWhereUniqueInput
    /**
     * In case the Plaga found by the `where` argument doesn't exist, create a new Plaga with this data.
     */
    create: XOR<PlagaCreateInput, PlagaUncheckedCreateInput>
    /**
     * In case the Plaga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlagaUpdateInput, PlagaUncheckedUpdateInput>
  }

  /**
   * Plaga delete
   */
  export type PlagaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
    /**
     * Filter which Plaga to delete.
     */
    where: PlagaWhereUniqueInput
  }

  /**
   * Plaga deleteMany
   */
  export type PlagaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plagas to delete
     */
    where?: PlagaWhereInput
    /**
     * Limit how many Plagas to delete.
     */
    limit?: number
  }

  /**
   * Plaga.insecticidas
   */
  export type Plaga$insecticidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    where?: InsecticidaWhereInput
    orderBy?: InsecticidaOrderByWithRelationInput | InsecticidaOrderByWithRelationInput[]
    cursor?: InsecticidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsecticidaScalarFieldEnum | InsecticidaScalarFieldEnum[]
  }

  /**
   * Plaga.diagnosticos
   */
  export type Plaga$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    cursor?: DiagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Plaga without action
   */
  export type PlagaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plaga
     */
    select?: PlagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plaga
     */
    omit?: PlagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlagaInclude<ExtArgs> | null
  }


  /**
   * Model Insecticida
   */

  export type AggregateInsecticida = {
    _count: InsecticidaCountAggregateOutputType | null
    _avg: InsecticidaAvgAggregateOutputType | null
    _sum: InsecticidaSumAggregateOutputType | null
    _min: InsecticidaMinAggregateOutputType | null
    _max: InsecticidaMaxAggregateOutputType | null
  }

  export type InsecticidaAvgAggregateOutputType = {
    id: number | null
    plagaId: number | null
  }

  export type InsecticidaSumAggregateOutputType = {
    id: number | null
    plagaId: number | null
  }

  export type InsecticidaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    compuesto: string | null
    aplicacion: string | null
    plagaId: number | null
  }

  export type InsecticidaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    compuesto: string | null
    aplicacion: string | null
    plagaId: number | null
  }

  export type InsecticidaCountAggregateOutputType = {
    id: number
    nombre: number
    compuesto: number
    aplicacion: number
    plagaId: number
    _all: number
  }


  export type InsecticidaAvgAggregateInputType = {
    id?: true
    plagaId?: true
  }

  export type InsecticidaSumAggregateInputType = {
    id?: true
    plagaId?: true
  }

  export type InsecticidaMinAggregateInputType = {
    id?: true
    nombre?: true
    compuesto?: true
    aplicacion?: true
    plagaId?: true
  }

  export type InsecticidaMaxAggregateInputType = {
    id?: true
    nombre?: true
    compuesto?: true
    aplicacion?: true
    plagaId?: true
  }

  export type InsecticidaCountAggregateInputType = {
    id?: true
    nombre?: true
    compuesto?: true
    aplicacion?: true
    plagaId?: true
    _all?: true
  }

  export type InsecticidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insecticida to aggregate.
     */
    where?: InsecticidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insecticidas to fetch.
     */
    orderBy?: InsecticidaOrderByWithRelationInput | InsecticidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsecticidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insecticidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insecticidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insecticidas
    **/
    _count?: true | InsecticidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsecticidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsecticidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsecticidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsecticidaMaxAggregateInputType
  }

  export type GetInsecticidaAggregateType<T extends InsecticidaAggregateArgs> = {
        [P in keyof T & keyof AggregateInsecticida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsecticida[P]>
      : GetScalarType<T[P], AggregateInsecticida[P]>
  }




  export type InsecticidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsecticidaWhereInput
    orderBy?: InsecticidaOrderByWithAggregationInput | InsecticidaOrderByWithAggregationInput[]
    by: InsecticidaScalarFieldEnum[] | InsecticidaScalarFieldEnum
    having?: InsecticidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsecticidaCountAggregateInputType | true
    _avg?: InsecticidaAvgAggregateInputType
    _sum?: InsecticidaSumAggregateInputType
    _min?: InsecticidaMinAggregateInputType
    _max?: InsecticidaMaxAggregateInputType
  }

  export type InsecticidaGroupByOutputType = {
    id: number
    nombre: string
    compuesto: string
    aplicacion: string
    plagaId: number
    _count: InsecticidaCountAggregateOutputType | null
    _avg: InsecticidaAvgAggregateOutputType | null
    _sum: InsecticidaSumAggregateOutputType | null
    _min: InsecticidaMinAggregateOutputType | null
    _max: InsecticidaMaxAggregateOutputType | null
  }

  type GetInsecticidaGroupByPayload<T extends InsecticidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsecticidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsecticidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsecticidaGroupByOutputType[P]>
            : GetScalarType<T[P], InsecticidaGroupByOutputType[P]>
        }
      >
    >


  export type InsecticidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    compuesto?: boolean
    aplicacion?: boolean
    plagaId?: boolean
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insecticida"]>

  export type InsecticidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    compuesto?: boolean
    aplicacion?: boolean
    plagaId?: boolean
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insecticida"]>

  export type InsecticidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    compuesto?: boolean
    aplicacion?: boolean
    plagaId?: boolean
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insecticida"]>

  export type InsecticidaSelectScalar = {
    id?: boolean
    nombre?: boolean
    compuesto?: boolean
    aplicacion?: boolean
    plagaId?: boolean
  }

  export type InsecticidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "compuesto" | "aplicacion" | "plagaId", ExtArgs["result"]["insecticida"]>
  export type InsecticidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }
  export type InsecticidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }
  export type InsecticidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plaga?: boolean | PlagaDefaultArgs<ExtArgs>
  }

  export type $InsecticidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insecticida"
    objects: {
      plaga: Prisma.$PlagaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      compuesto: string
      aplicacion: string
      plagaId: number
    }, ExtArgs["result"]["insecticida"]>
    composites: {}
  }

  type InsecticidaGetPayload<S extends boolean | null | undefined | InsecticidaDefaultArgs> = $Result.GetResult<Prisma.$InsecticidaPayload, S>

  type InsecticidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsecticidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsecticidaCountAggregateInputType | true
    }

  export interface InsecticidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insecticida'], meta: { name: 'Insecticida' } }
    /**
     * Find zero or one Insecticida that matches the filter.
     * @param {InsecticidaFindUniqueArgs} args - Arguments to find a Insecticida
     * @example
     * // Get one Insecticida
     * const insecticida = await prisma.insecticida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsecticidaFindUniqueArgs>(args: SelectSubset<T, InsecticidaFindUniqueArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insecticida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsecticidaFindUniqueOrThrowArgs} args - Arguments to find a Insecticida
     * @example
     * // Get one Insecticida
     * const insecticida = await prisma.insecticida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsecticidaFindUniqueOrThrowArgs>(args: SelectSubset<T, InsecticidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insecticida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaFindFirstArgs} args - Arguments to find a Insecticida
     * @example
     * // Get one Insecticida
     * const insecticida = await prisma.insecticida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsecticidaFindFirstArgs>(args?: SelectSubset<T, InsecticidaFindFirstArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insecticida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaFindFirstOrThrowArgs} args - Arguments to find a Insecticida
     * @example
     * // Get one Insecticida
     * const insecticida = await prisma.insecticida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsecticidaFindFirstOrThrowArgs>(args?: SelectSubset<T, InsecticidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insecticidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insecticidas
     * const insecticidas = await prisma.insecticida.findMany()
     * 
     * // Get first 10 Insecticidas
     * const insecticidas = await prisma.insecticida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insecticidaWithIdOnly = await prisma.insecticida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsecticidaFindManyArgs>(args?: SelectSubset<T, InsecticidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insecticida.
     * @param {InsecticidaCreateArgs} args - Arguments to create a Insecticida.
     * @example
     * // Create one Insecticida
     * const Insecticida = await prisma.insecticida.create({
     *   data: {
     *     // ... data to create a Insecticida
     *   }
     * })
     * 
     */
    create<T extends InsecticidaCreateArgs>(args: SelectSubset<T, InsecticidaCreateArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insecticidas.
     * @param {InsecticidaCreateManyArgs} args - Arguments to create many Insecticidas.
     * @example
     * // Create many Insecticidas
     * const insecticida = await prisma.insecticida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsecticidaCreateManyArgs>(args?: SelectSubset<T, InsecticidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insecticidas and returns the data saved in the database.
     * @param {InsecticidaCreateManyAndReturnArgs} args - Arguments to create many Insecticidas.
     * @example
     * // Create many Insecticidas
     * const insecticida = await prisma.insecticida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insecticidas and only return the `id`
     * const insecticidaWithIdOnly = await prisma.insecticida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsecticidaCreateManyAndReturnArgs>(args?: SelectSubset<T, InsecticidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insecticida.
     * @param {InsecticidaDeleteArgs} args - Arguments to delete one Insecticida.
     * @example
     * // Delete one Insecticida
     * const Insecticida = await prisma.insecticida.delete({
     *   where: {
     *     // ... filter to delete one Insecticida
     *   }
     * })
     * 
     */
    delete<T extends InsecticidaDeleteArgs>(args: SelectSubset<T, InsecticidaDeleteArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insecticida.
     * @param {InsecticidaUpdateArgs} args - Arguments to update one Insecticida.
     * @example
     * // Update one Insecticida
     * const insecticida = await prisma.insecticida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsecticidaUpdateArgs>(args: SelectSubset<T, InsecticidaUpdateArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insecticidas.
     * @param {InsecticidaDeleteManyArgs} args - Arguments to filter Insecticidas to delete.
     * @example
     * // Delete a few Insecticidas
     * const { count } = await prisma.insecticida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsecticidaDeleteManyArgs>(args?: SelectSubset<T, InsecticidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insecticidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insecticidas
     * const insecticida = await prisma.insecticida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsecticidaUpdateManyArgs>(args: SelectSubset<T, InsecticidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insecticidas and returns the data updated in the database.
     * @param {InsecticidaUpdateManyAndReturnArgs} args - Arguments to update many Insecticidas.
     * @example
     * // Update many Insecticidas
     * const insecticida = await prisma.insecticida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insecticidas and only return the `id`
     * const insecticidaWithIdOnly = await prisma.insecticida.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InsecticidaUpdateManyAndReturnArgs>(args: SelectSubset<T, InsecticidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insecticida.
     * @param {InsecticidaUpsertArgs} args - Arguments to update or create a Insecticida.
     * @example
     * // Update or create a Insecticida
     * const insecticida = await prisma.insecticida.upsert({
     *   create: {
     *     // ... data to create a Insecticida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insecticida we want to update
     *   }
     * })
     */
    upsert<T extends InsecticidaUpsertArgs>(args: SelectSubset<T, InsecticidaUpsertArgs<ExtArgs>>): Prisma__InsecticidaClient<$Result.GetResult<Prisma.$InsecticidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insecticidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaCountArgs} args - Arguments to filter Insecticidas to count.
     * @example
     * // Count the number of Insecticidas
     * const count = await prisma.insecticida.count({
     *   where: {
     *     // ... the filter for the Insecticidas we want to count
     *   }
     * })
    **/
    count<T extends InsecticidaCountArgs>(
      args?: Subset<T, InsecticidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsecticidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insecticida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsecticidaAggregateArgs>(args: Subset<T, InsecticidaAggregateArgs>): Prisma.PrismaPromise<GetInsecticidaAggregateType<T>>

    /**
     * Group by Insecticida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsecticidaGroupByArgs} args - Group by arguments.
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
      T extends InsecticidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsecticidaGroupByArgs['orderBy'] }
        : { orderBy?: InsecticidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsecticidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsecticidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insecticida model
   */
  readonly fields: InsecticidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insecticida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsecticidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plaga<T extends PlagaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlagaDefaultArgs<ExtArgs>>): Prisma__PlagaClient<$Result.GetResult<Prisma.$PlagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Insecticida model
   */
  interface InsecticidaFieldRefs {
    readonly id: FieldRef<"Insecticida", 'Int'>
    readonly nombre: FieldRef<"Insecticida", 'String'>
    readonly compuesto: FieldRef<"Insecticida", 'String'>
    readonly aplicacion: FieldRef<"Insecticida", 'String'>
    readonly plagaId: FieldRef<"Insecticida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Insecticida findUnique
   */
  export type InsecticidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter, which Insecticida to fetch.
     */
    where: InsecticidaWhereUniqueInput
  }

  /**
   * Insecticida findUniqueOrThrow
   */
  export type InsecticidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter, which Insecticida to fetch.
     */
    where: InsecticidaWhereUniqueInput
  }

  /**
   * Insecticida findFirst
   */
  export type InsecticidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter, which Insecticida to fetch.
     */
    where?: InsecticidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insecticidas to fetch.
     */
    orderBy?: InsecticidaOrderByWithRelationInput | InsecticidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insecticidas.
     */
    cursor?: InsecticidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insecticidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insecticidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insecticidas.
     */
    distinct?: InsecticidaScalarFieldEnum | InsecticidaScalarFieldEnum[]
  }

  /**
   * Insecticida findFirstOrThrow
   */
  export type InsecticidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter, which Insecticida to fetch.
     */
    where?: InsecticidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insecticidas to fetch.
     */
    orderBy?: InsecticidaOrderByWithRelationInput | InsecticidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insecticidas.
     */
    cursor?: InsecticidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insecticidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insecticidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insecticidas.
     */
    distinct?: InsecticidaScalarFieldEnum | InsecticidaScalarFieldEnum[]
  }

  /**
   * Insecticida findMany
   */
  export type InsecticidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter, which Insecticidas to fetch.
     */
    where?: InsecticidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insecticidas to fetch.
     */
    orderBy?: InsecticidaOrderByWithRelationInput | InsecticidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insecticidas.
     */
    cursor?: InsecticidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insecticidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insecticidas.
     */
    skip?: number
    distinct?: InsecticidaScalarFieldEnum | InsecticidaScalarFieldEnum[]
  }

  /**
   * Insecticida create
   */
  export type InsecticidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Insecticida.
     */
    data: XOR<InsecticidaCreateInput, InsecticidaUncheckedCreateInput>
  }

  /**
   * Insecticida createMany
   */
  export type InsecticidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insecticidas.
     */
    data: InsecticidaCreateManyInput | InsecticidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insecticida createManyAndReturn
   */
  export type InsecticidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * The data used to create many Insecticidas.
     */
    data: InsecticidaCreateManyInput | InsecticidaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insecticida update
   */
  export type InsecticidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Insecticida.
     */
    data: XOR<InsecticidaUpdateInput, InsecticidaUncheckedUpdateInput>
    /**
     * Choose, which Insecticida to update.
     */
    where: InsecticidaWhereUniqueInput
  }

  /**
   * Insecticida updateMany
   */
  export type InsecticidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insecticidas.
     */
    data: XOR<InsecticidaUpdateManyMutationInput, InsecticidaUncheckedUpdateManyInput>
    /**
     * Filter which Insecticidas to update
     */
    where?: InsecticidaWhereInput
    /**
     * Limit how many Insecticidas to update.
     */
    limit?: number
  }

  /**
   * Insecticida updateManyAndReturn
   */
  export type InsecticidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * The data used to update Insecticidas.
     */
    data: XOR<InsecticidaUpdateManyMutationInput, InsecticidaUncheckedUpdateManyInput>
    /**
     * Filter which Insecticidas to update
     */
    where?: InsecticidaWhereInput
    /**
     * Limit how many Insecticidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insecticida upsert
   */
  export type InsecticidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Insecticida to update in case it exists.
     */
    where: InsecticidaWhereUniqueInput
    /**
     * In case the Insecticida found by the `where` argument doesn't exist, create a new Insecticida with this data.
     */
    create: XOR<InsecticidaCreateInput, InsecticidaUncheckedCreateInput>
    /**
     * In case the Insecticida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsecticidaUpdateInput, InsecticidaUncheckedUpdateInput>
  }

  /**
   * Insecticida delete
   */
  export type InsecticidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
    /**
     * Filter which Insecticida to delete.
     */
    where: InsecticidaWhereUniqueInput
  }

  /**
   * Insecticida deleteMany
   */
  export type InsecticidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insecticidas to delete
     */
    where?: InsecticidaWhereInput
    /**
     * Limit how many Insecticidas to delete.
     */
    limit?: number
  }

  /**
   * Insecticida without action
   */
  export type InsecticidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insecticida
     */
    select?: InsecticidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insecticida
     */
    omit?: InsecticidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsecticidaInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    rol: 'rol',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DiagnosticoScalarFieldEnum: {
    id: 'id',
    imagenUrl: 'imagenUrl',
    resultado: 'resultado',
    recomendacion: 'recomendacion',
    fecha: 'fecha',
    userId: 'userId',
    plagaId: 'plagaId'
  };

  export type DiagnosticoScalarFieldEnum = (typeof DiagnosticoScalarFieldEnum)[keyof typeof DiagnosticoScalarFieldEnum]


  export const PlagaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    tipo: 'tipo',
    createdAt: 'createdAt'
  };

  export type PlagaScalarFieldEnum = (typeof PlagaScalarFieldEnum)[keyof typeof PlagaScalarFieldEnum]


  export const InsecticidaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    compuesto: 'compuesto',
    aplicacion: 'aplicacion',
    plagaId: 'plagaId'
  };

  export type InsecticidaScalarFieldEnum = (typeof InsecticidaScalarFieldEnum)[keyof typeof InsecticidaScalarFieldEnum]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nombre?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    telefono?: StringNullableFilter<"User"> | string | null
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    createdAt?: DateTimeFilter<"User"> | Date | string
    diagnosticos?: DiagnosticoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    diagnosticos?: DiagnosticoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    telefono?: StringNullableFilter<"User"> | string | null
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    createdAt?: DateTimeFilter<"User"> | Date | string
    diagnosticos?: DiagnosticoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrderInput | SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nombre?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    telefono?: StringNullableWithAggregatesFilter<"User"> | string | null
    rol?: EnumRolWithAggregatesFilter<"User"> | $Enums.Rol
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DiagnosticoWhereInput = {
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    id?: IntFilter<"Diagnostico"> | number
    imagenUrl?: StringFilter<"Diagnostico"> | string
    resultado?: StringFilter<"Diagnostico"> | string
    recomendacion?: StringNullableFilter<"Diagnostico"> | string | null
    fecha?: DateTimeFilter<"Diagnostico"> | Date | string
    userId?: IntFilter<"Diagnostico"> | number
    plagaId?: IntFilter<"Diagnostico"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plaga?: XOR<PlagaScalarRelationFilter, PlagaWhereInput>
  }

  export type DiagnosticoOrderByWithRelationInput = {
    id?: SortOrder
    imagenUrl?: SortOrder
    resultado?: SortOrder
    recomendacion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
    user?: UserOrderByWithRelationInput
    plaga?: PlagaOrderByWithRelationInput
  }

  export type DiagnosticoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    imagenUrl?: StringFilter<"Diagnostico"> | string
    resultado?: StringFilter<"Diagnostico"> | string
    recomendacion?: StringNullableFilter<"Diagnostico"> | string | null
    fecha?: DateTimeFilter<"Diagnostico"> | Date | string
    userId?: IntFilter<"Diagnostico"> | number
    plagaId?: IntFilter<"Diagnostico"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plaga?: XOR<PlagaScalarRelationFilter, PlagaWhereInput>
  }, "id">

  export type DiagnosticoOrderByWithAggregationInput = {
    id?: SortOrder
    imagenUrl?: SortOrder
    resultado?: SortOrder
    recomendacion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
    _count?: DiagnosticoCountOrderByAggregateInput
    _avg?: DiagnosticoAvgOrderByAggregateInput
    _max?: DiagnosticoMaxOrderByAggregateInput
    _min?: DiagnosticoMinOrderByAggregateInput
    _sum?: DiagnosticoSumOrderByAggregateInput
  }

  export type DiagnosticoScalarWhereWithAggregatesInput = {
    AND?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    OR?: DiagnosticoScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diagnostico"> | number
    imagenUrl?: StringWithAggregatesFilter<"Diagnostico"> | string
    resultado?: StringWithAggregatesFilter<"Diagnostico"> | string
    recomendacion?: StringNullableWithAggregatesFilter<"Diagnostico"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Diagnostico"> | Date | string
    userId?: IntWithAggregatesFilter<"Diagnostico"> | number
    plagaId?: IntWithAggregatesFilter<"Diagnostico"> | number
  }

  export type PlagaWhereInput = {
    AND?: PlagaWhereInput | PlagaWhereInput[]
    OR?: PlagaWhereInput[]
    NOT?: PlagaWhereInput | PlagaWhereInput[]
    id?: IntFilter<"Plaga"> | number
    nombre?: StringFilter<"Plaga"> | string
    descripcion?: StringFilter<"Plaga"> | string
    tipo?: StringFilter<"Plaga"> | string
    createdAt?: DateTimeFilter<"Plaga"> | Date | string
    insecticidas?: InsecticidaListRelationFilter
    diagnosticos?: DiagnosticoListRelationFilter
  }

  export type PlagaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    insecticidas?: InsecticidaOrderByRelationAggregateInput
    diagnosticos?: DiagnosticoOrderByRelationAggregateInput
  }

  export type PlagaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PlagaWhereInput | PlagaWhereInput[]
    OR?: PlagaWhereInput[]
    NOT?: PlagaWhereInput | PlagaWhereInput[]
    descripcion?: StringFilter<"Plaga"> | string
    tipo?: StringFilter<"Plaga"> | string
    createdAt?: DateTimeFilter<"Plaga"> | Date | string
    insecticidas?: InsecticidaListRelationFilter
    diagnosticos?: DiagnosticoListRelationFilter
  }, "id" | "nombre">

  export type PlagaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    _count?: PlagaCountOrderByAggregateInput
    _avg?: PlagaAvgOrderByAggregateInput
    _max?: PlagaMaxOrderByAggregateInput
    _min?: PlagaMinOrderByAggregateInput
    _sum?: PlagaSumOrderByAggregateInput
  }

  export type PlagaScalarWhereWithAggregatesInput = {
    AND?: PlagaScalarWhereWithAggregatesInput | PlagaScalarWhereWithAggregatesInput[]
    OR?: PlagaScalarWhereWithAggregatesInput[]
    NOT?: PlagaScalarWhereWithAggregatesInput | PlagaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plaga"> | number
    nombre?: StringWithAggregatesFilter<"Plaga"> | string
    descripcion?: StringWithAggregatesFilter<"Plaga"> | string
    tipo?: StringWithAggregatesFilter<"Plaga"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Plaga"> | Date | string
  }

  export type InsecticidaWhereInput = {
    AND?: InsecticidaWhereInput | InsecticidaWhereInput[]
    OR?: InsecticidaWhereInput[]
    NOT?: InsecticidaWhereInput | InsecticidaWhereInput[]
    id?: IntFilter<"Insecticida"> | number
    nombre?: StringFilter<"Insecticida"> | string
    compuesto?: StringFilter<"Insecticida"> | string
    aplicacion?: StringFilter<"Insecticida"> | string
    plagaId?: IntFilter<"Insecticida"> | number
    plaga?: XOR<PlagaScalarRelationFilter, PlagaWhereInput>
  }

  export type InsecticidaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    compuesto?: SortOrder
    aplicacion?: SortOrder
    plagaId?: SortOrder
    plaga?: PlagaOrderByWithRelationInput
  }

  export type InsecticidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InsecticidaWhereInput | InsecticidaWhereInput[]
    OR?: InsecticidaWhereInput[]
    NOT?: InsecticidaWhereInput | InsecticidaWhereInput[]
    nombre?: StringFilter<"Insecticida"> | string
    compuesto?: StringFilter<"Insecticida"> | string
    aplicacion?: StringFilter<"Insecticida"> | string
    plagaId?: IntFilter<"Insecticida"> | number
    plaga?: XOR<PlagaScalarRelationFilter, PlagaWhereInput>
  }, "id">

  export type InsecticidaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    compuesto?: SortOrder
    aplicacion?: SortOrder
    plagaId?: SortOrder
    _count?: InsecticidaCountOrderByAggregateInput
    _avg?: InsecticidaAvgOrderByAggregateInput
    _max?: InsecticidaMaxOrderByAggregateInput
    _min?: InsecticidaMinOrderByAggregateInput
    _sum?: InsecticidaSumOrderByAggregateInput
  }

  export type InsecticidaScalarWhereWithAggregatesInput = {
    AND?: InsecticidaScalarWhereWithAggregatesInput | InsecticidaScalarWhereWithAggregatesInput[]
    OR?: InsecticidaScalarWhereWithAggregatesInput[]
    NOT?: InsecticidaScalarWhereWithAggregatesInput | InsecticidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Insecticida"> | number
    nombre?: StringWithAggregatesFilter<"Insecticida"> | string
    compuesto?: StringWithAggregatesFilter<"Insecticida"> | string
    aplicacion?: StringWithAggregatesFilter<"Insecticida"> | string
    plagaId?: IntWithAggregatesFilter<"Insecticida"> | number
  }

  export type UserCreateInput = {
    nombre: string
    email: string
    telefono?: string | null
    rol?: $Enums.Rol
    createdAt?: Date | string
    diagnosticos?: DiagnosticoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    telefono?: string | null
    rol?: $Enums.Rol
    createdAt?: Date | string
    diagnosticos?: DiagnosticoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nombre: string
    email: string
    telefono?: string | null
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoCreateInput = {
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    user: UserCreateNestedOneWithoutDiagnosticosInput
    plaga: PlagaCreateNestedOneWithoutDiagnosticosInput
  }

  export type DiagnosticoUncheckedCreateInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    userId: number
    plagaId: number
  }

  export type DiagnosticoUpdateInput = {
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiagnosticosNestedInput
    plaga?: PlagaUpdateOneRequiredWithoutDiagnosticosNestedInput
  }

  export type DiagnosticoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    plagaId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticoCreateManyInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    userId: number
    plagaId: number
  }

  export type DiagnosticoUpdateManyMutationInput = {
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    plagaId?: IntFieldUpdateOperationsInput | number
  }

  export type PlagaCreateInput = {
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    insecticidas?: InsecticidaCreateNestedManyWithoutPlagaInput
    diagnosticos?: DiagnosticoCreateNestedManyWithoutPlagaInput
  }

  export type PlagaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    insecticidas?: InsecticidaUncheckedCreateNestedManyWithoutPlagaInput
    diagnosticos?: DiagnosticoUncheckedCreateNestedManyWithoutPlagaInput
  }

  export type PlagaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insecticidas?: InsecticidaUpdateManyWithoutPlagaNestedInput
    diagnosticos?: DiagnosticoUpdateManyWithoutPlagaNestedInput
  }

  export type PlagaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insecticidas?: InsecticidaUncheckedUpdateManyWithoutPlagaNestedInput
    diagnosticos?: DiagnosticoUncheckedUpdateManyWithoutPlagaNestedInput
  }

  export type PlagaCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
  }

  export type PlagaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlagaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsecticidaCreateInput = {
    nombre: string
    compuesto: string
    aplicacion: string
    plaga: PlagaCreateNestedOneWithoutInsecticidasInput
  }

  export type InsecticidaUncheckedCreateInput = {
    id?: number
    nombre: string
    compuesto: string
    aplicacion: string
    plagaId: number
  }

  export type InsecticidaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
    plaga?: PlagaUpdateOneRequiredWithoutInsecticidasNestedInput
  }

  export type InsecticidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
    plagaId?: IntFieldUpdateOperationsInput | number
  }

  export type InsecticidaCreateManyInput = {
    id?: number
    nombre: string
    compuesto: string
    aplicacion: string
    plagaId: number
  }

  export type InsecticidaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
  }

  export type InsecticidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
    plagaId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type DiagnosticoListRelationFilter = {
    every?: DiagnosticoWhereInput
    some?: DiagnosticoWhereInput
    none?: DiagnosticoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiagnosticoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlagaScalarRelationFilter = {
    is?: PlagaWhereInput
    isNot?: PlagaWhereInput
  }

  export type DiagnosticoCountOrderByAggregateInput = {
    id?: SortOrder
    imagenUrl?: SortOrder
    resultado?: SortOrder
    recomendacion?: SortOrder
    fecha?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
  }

  export type DiagnosticoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
  }

  export type DiagnosticoMaxOrderByAggregateInput = {
    id?: SortOrder
    imagenUrl?: SortOrder
    resultado?: SortOrder
    recomendacion?: SortOrder
    fecha?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
  }

  export type DiagnosticoMinOrderByAggregateInput = {
    id?: SortOrder
    imagenUrl?: SortOrder
    resultado?: SortOrder
    recomendacion?: SortOrder
    fecha?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
  }

  export type DiagnosticoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plagaId?: SortOrder
  }

  export type InsecticidaListRelationFilter = {
    every?: InsecticidaWhereInput
    some?: InsecticidaWhereInput
    none?: InsecticidaWhereInput
  }

  export type InsecticidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlagaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
  }

  export type PlagaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlagaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
  }

  export type PlagaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
  }

  export type PlagaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InsecticidaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    compuesto?: SortOrder
    aplicacion?: SortOrder
    plagaId?: SortOrder
  }

  export type InsecticidaAvgOrderByAggregateInput = {
    id?: SortOrder
    plagaId?: SortOrder
  }

  export type InsecticidaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    compuesto?: SortOrder
    aplicacion?: SortOrder
    plagaId?: SortOrder
  }

  export type InsecticidaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    compuesto?: SortOrder
    aplicacion?: SortOrder
    plagaId?: SortOrder
  }

  export type InsecticidaSumOrderByAggregateInput = {
    id?: SortOrder
    plagaId?: SortOrder
  }

  export type DiagnosticoCreateNestedManyWithoutUserInput = {
    create?: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput> | DiagnosticoCreateWithoutUserInput[] | DiagnosticoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutUserInput | DiagnosticoCreateOrConnectWithoutUserInput[]
    createMany?: DiagnosticoCreateManyUserInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type DiagnosticoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput> | DiagnosticoCreateWithoutUserInput[] | DiagnosticoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutUserInput | DiagnosticoCreateOrConnectWithoutUserInput[]
    createMany?: DiagnosticoCreateManyUserInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DiagnosticoUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput> | DiagnosticoCreateWithoutUserInput[] | DiagnosticoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutUserInput | DiagnosticoCreateOrConnectWithoutUserInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutUserInput | DiagnosticoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiagnosticoCreateManyUserInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutUserInput | DiagnosticoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutUserInput | DiagnosticoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiagnosticoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput> | DiagnosticoCreateWithoutUserInput[] | DiagnosticoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutUserInput | DiagnosticoCreateOrConnectWithoutUserInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutUserInput | DiagnosticoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiagnosticoCreateManyUserInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutUserInput | DiagnosticoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutUserInput | DiagnosticoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDiagnosticosInput = {
    create?: XOR<UserCreateWithoutDiagnosticosInput, UserUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiagnosticosInput
    connect?: UserWhereUniqueInput
  }

  export type PlagaCreateNestedOneWithoutDiagnosticosInput = {
    create?: XOR<PlagaCreateWithoutDiagnosticosInput, PlagaUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: PlagaCreateOrConnectWithoutDiagnosticosInput
    connect?: PlagaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDiagnosticosNestedInput = {
    create?: XOR<UserCreateWithoutDiagnosticosInput, UserUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiagnosticosInput
    upsert?: UserUpsertWithoutDiagnosticosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiagnosticosInput, UserUpdateWithoutDiagnosticosInput>, UserUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type PlagaUpdateOneRequiredWithoutDiagnosticosNestedInput = {
    create?: XOR<PlagaCreateWithoutDiagnosticosInput, PlagaUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: PlagaCreateOrConnectWithoutDiagnosticosInput
    upsert?: PlagaUpsertWithoutDiagnosticosInput
    connect?: PlagaWhereUniqueInput
    update?: XOR<XOR<PlagaUpdateToOneWithWhereWithoutDiagnosticosInput, PlagaUpdateWithoutDiagnosticosInput>, PlagaUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type InsecticidaCreateNestedManyWithoutPlagaInput = {
    create?: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput> | InsecticidaCreateWithoutPlagaInput[] | InsecticidaUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: InsecticidaCreateOrConnectWithoutPlagaInput | InsecticidaCreateOrConnectWithoutPlagaInput[]
    createMany?: InsecticidaCreateManyPlagaInputEnvelope
    connect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
  }

  export type DiagnosticoCreateNestedManyWithoutPlagaInput = {
    create?: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput> | DiagnosticoCreateWithoutPlagaInput[] | DiagnosticoUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutPlagaInput | DiagnosticoCreateOrConnectWithoutPlagaInput[]
    createMany?: DiagnosticoCreateManyPlagaInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type InsecticidaUncheckedCreateNestedManyWithoutPlagaInput = {
    create?: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput> | InsecticidaCreateWithoutPlagaInput[] | InsecticidaUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: InsecticidaCreateOrConnectWithoutPlagaInput | InsecticidaCreateOrConnectWithoutPlagaInput[]
    createMany?: InsecticidaCreateManyPlagaInputEnvelope
    connect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
  }

  export type DiagnosticoUncheckedCreateNestedManyWithoutPlagaInput = {
    create?: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput> | DiagnosticoCreateWithoutPlagaInput[] | DiagnosticoUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutPlagaInput | DiagnosticoCreateOrConnectWithoutPlagaInput[]
    createMany?: DiagnosticoCreateManyPlagaInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type InsecticidaUpdateManyWithoutPlagaNestedInput = {
    create?: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput> | InsecticidaCreateWithoutPlagaInput[] | InsecticidaUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: InsecticidaCreateOrConnectWithoutPlagaInput | InsecticidaCreateOrConnectWithoutPlagaInput[]
    upsert?: InsecticidaUpsertWithWhereUniqueWithoutPlagaInput | InsecticidaUpsertWithWhereUniqueWithoutPlagaInput[]
    createMany?: InsecticidaCreateManyPlagaInputEnvelope
    set?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    disconnect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    delete?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    connect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    update?: InsecticidaUpdateWithWhereUniqueWithoutPlagaInput | InsecticidaUpdateWithWhereUniqueWithoutPlagaInput[]
    updateMany?: InsecticidaUpdateManyWithWhereWithoutPlagaInput | InsecticidaUpdateManyWithWhereWithoutPlagaInput[]
    deleteMany?: InsecticidaScalarWhereInput | InsecticidaScalarWhereInput[]
  }

  export type DiagnosticoUpdateManyWithoutPlagaNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput> | DiagnosticoCreateWithoutPlagaInput[] | DiagnosticoUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutPlagaInput | DiagnosticoCreateOrConnectWithoutPlagaInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutPlagaInput | DiagnosticoUpsertWithWhereUniqueWithoutPlagaInput[]
    createMany?: DiagnosticoCreateManyPlagaInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutPlagaInput | DiagnosticoUpdateWithWhereUniqueWithoutPlagaInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutPlagaInput | DiagnosticoUpdateManyWithWhereWithoutPlagaInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type InsecticidaUncheckedUpdateManyWithoutPlagaNestedInput = {
    create?: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput> | InsecticidaCreateWithoutPlagaInput[] | InsecticidaUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: InsecticidaCreateOrConnectWithoutPlagaInput | InsecticidaCreateOrConnectWithoutPlagaInput[]
    upsert?: InsecticidaUpsertWithWhereUniqueWithoutPlagaInput | InsecticidaUpsertWithWhereUniqueWithoutPlagaInput[]
    createMany?: InsecticidaCreateManyPlagaInputEnvelope
    set?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    disconnect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    delete?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    connect?: InsecticidaWhereUniqueInput | InsecticidaWhereUniqueInput[]
    update?: InsecticidaUpdateWithWhereUniqueWithoutPlagaInput | InsecticidaUpdateWithWhereUniqueWithoutPlagaInput[]
    updateMany?: InsecticidaUpdateManyWithWhereWithoutPlagaInput | InsecticidaUpdateManyWithWhereWithoutPlagaInput[]
    deleteMany?: InsecticidaScalarWhereInput | InsecticidaScalarWhereInput[]
  }

  export type DiagnosticoUncheckedUpdateManyWithoutPlagaNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput> | DiagnosticoCreateWithoutPlagaInput[] | DiagnosticoUncheckedCreateWithoutPlagaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutPlagaInput | DiagnosticoCreateOrConnectWithoutPlagaInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutPlagaInput | DiagnosticoUpsertWithWhereUniqueWithoutPlagaInput[]
    createMany?: DiagnosticoCreateManyPlagaInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutPlagaInput | DiagnosticoUpdateWithWhereUniqueWithoutPlagaInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutPlagaInput | DiagnosticoUpdateManyWithWhereWithoutPlagaInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type PlagaCreateNestedOneWithoutInsecticidasInput = {
    create?: XOR<PlagaCreateWithoutInsecticidasInput, PlagaUncheckedCreateWithoutInsecticidasInput>
    connectOrCreate?: PlagaCreateOrConnectWithoutInsecticidasInput
    connect?: PlagaWhereUniqueInput
  }

  export type PlagaUpdateOneRequiredWithoutInsecticidasNestedInput = {
    create?: XOR<PlagaCreateWithoutInsecticidasInput, PlagaUncheckedCreateWithoutInsecticidasInput>
    connectOrCreate?: PlagaCreateOrConnectWithoutInsecticidasInput
    upsert?: PlagaUpsertWithoutInsecticidasInput
    connect?: PlagaWhereUniqueInput
    update?: XOR<XOR<PlagaUpdateToOneWithWhereWithoutInsecticidasInput, PlagaUpdateWithoutInsecticidasInput>, PlagaUncheckedUpdateWithoutInsecticidasInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type DiagnosticoCreateWithoutUserInput = {
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    plaga: PlagaCreateNestedOneWithoutDiagnosticosInput
  }

  export type DiagnosticoUncheckedCreateWithoutUserInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    plagaId: number
  }

  export type DiagnosticoCreateOrConnectWithoutUserInput = {
    where: DiagnosticoWhereUniqueInput
    create: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput>
  }

  export type DiagnosticoCreateManyUserInputEnvelope = {
    data: DiagnosticoCreateManyUserInput | DiagnosticoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticoUpsertWithWhereUniqueWithoutUserInput = {
    where: DiagnosticoWhereUniqueInput
    update: XOR<DiagnosticoUpdateWithoutUserInput, DiagnosticoUncheckedUpdateWithoutUserInput>
    create: XOR<DiagnosticoCreateWithoutUserInput, DiagnosticoUncheckedCreateWithoutUserInput>
  }

  export type DiagnosticoUpdateWithWhereUniqueWithoutUserInput = {
    where: DiagnosticoWhereUniqueInput
    data: XOR<DiagnosticoUpdateWithoutUserInput, DiagnosticoUncheckedUpdateWithoutUserInput>
  }

  export type DiagnosticoUpdateManyWithWhereWithoutUserInput = {
    where: DiagnosticoScalarWhereInput
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyWithoutUserInput>
  }

  export type DiagnosticoScalarWhereInput = {
    AND?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
    OR?: DiagnosticoScalarWhereInput[]
    NOT?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
    id?: IntFilter<"Diagnostico"> | number
    imagenUrl?: StringFilter<"Diagnostico"> | string
    resultado?: StringFilter<"Diagnostico"> | string
    recomendacion?: StringNullableFilter<"Diagnostico"> | string | null
    fecha?: DateTimeFilter<"Diagnostico"> | Date | string
    userId?: IntFilter<"Diagnostico"> | number
    plagaId?: IntFilter<"Diagnostico"> | number
  }

  export type UserCreateWithoutDiagnosticosInput = {
    nombre: string
    email: string
    telefono?: string | null
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDiagnosticosInput = {
    id?: number
    nombre: string
    email: string
    telefono?: string | null
    rol?: $Enums.Rol
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDiagnosticosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiagnosticosInput, UserUncheckedCreateWithoutDiagnosticosInput>
  }

  export type PlagaCreateWithoutDiagnosticosInput = {
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    insecticidas?: InsecticidaCreateNestedManyWithoutPlagaInput
  }

  export type PlagaUncheckedCreateWithoutDiagnosticosInput = {
    id?: number
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    insecticidas?: InsecticidaUncheckedCreateNestedManyWithoutPlagaInput
  }

  export type PlagaCreateOrConnectWithoutDiagnosticosInput = {
    where: PlagaWhereUniqueInput
    create: XOR<PlagaCreateWithoutDiagnosticosInput, PlagaUncheckedCreateWithoutDiagnosticosInput>
  }

  export type UserUpsertWithoutDiagnosticosInput = {
    update: XOR<UserUpdateWithoutDiagnosticosInput, UserUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<UserCreateWithoutDiagnosticosInput, UserUncheckedCreateWithoutDiagnosticosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiagnosticosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiagnosticosInput, UserUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type UserUpdateWithoutDiagnosticosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDiagnosticosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlagaUpsertWithoutDiagnosticosInput = {
    update: XOR<PlagaUpdateWithoutDiagnosticosInput, PlagaUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<PlagaCreateWithoutDiagnosticosInput, PlagaUncheckedCreateWithoutDiagnosticosInput>
    where?: PlagaWhereInput
  }

  export type PlagaUpdateToOneWithWhereWithoutDiagnosticosInput = {
    where?: PlagaWhereInput
    data: XOR<PlagaUpdateWithoutDiagnosticosInput, PlagaUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type PlagaUpdateWithoutDiagnosticosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insecticidas?: InsecticidaUpdateManyWithoutPlagaNestedInput
  }

  export type PlagaUncheckedUpdateWithoutDiagnosticosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insecticidas?: InsecticidaUncheckedUpdateManyWithoutPlagaNestedInput
  }

  export type InsecticidaCreateWithoutPlagaInput = {
    nombre: string
    compuesto: string
    aplicacion: string
  }

  export type InsecticidaUncheckedCreateWithoutPlagaInput = {
    id?: number
    nombre: string
    compuesto: string
    aplicacion: string
  }

  export type InsecticidaCreateOrConnectWithoutPlagaInput = {
    where: InsecticidaWhereUniqueInput
    create: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput>
  }

  export type InsecticidaCreateManyPlagaInputEnvelope = {
    data: InsecticidaCreateManyPlagaInput | InsecticidaCreateManyPlagaInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticoCreateWithoutPlagaInput = {
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    user: UserCreateNestedOneWithoutDiagnosticosInput
  }

  export type DiagnosticoUncheckedCreateWithoutPlagaInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    userId: number
  }

  export type DiagnosticoCreateOrConnectWithoutPlagaInput = {
    where: DiagnosticoWhereUniqueInput
    create: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput>
  }

  export type DiagnosticoCreateManyPlagaInputEnvelope = {
    data: DiagnosticoCreateManyPlagaInput | DiagnosticoCreateManyPlagaInput[]
    skipDuplicates?: boolean
  }

  export type InsecticidaUpsertWithWhereUniqueWithoutPlagaInput = {
    where: InsecticidaWhereUniqueInput
    update: XOR<InsecticidaUpdateWithoutPlagaInput, InsecticidaUncheckedUpdateWithoutPlagaInput>
    create: XOR<InsecticidaCreateWithoutPlagaInput, InsecticidaUncheckedCreateWithoutPlagaInput>
  }

  export type InsecticidaUpdateWithWhereUniqueWithoutPlagaInput = {
    where: InsecticidaWhereUniqueInput
    data: XOR<InsecticidaUpdateWithoutPlagaInput, InsecticidaUncheckedUpdateWithoutPlagaInput>
  }

  export type InsecticidaUpdateManyWithWhereWithoutPlagaInput = {
    where: InsecticidaScalarWhereInput
    data: XOR<InsecticidaUpdateManyMutationInput, InsecticidaUncheckedUpdateManyWithoutPlagaInput>
  }

  export type InsecticidaScalarWhereInput = {
    AND?: InsecticidaScalarWhereInput | InsecticidaScalarWhereInput[]
    OR?: InsecticidaScalarWhereInput[]
    NOT?: InsecticidaScalarWhereInput | InsecticidaScalarWhereInput[]
    id?: IntFilter<"Insecticida"> | number
    nombre?: StringFilter<"Insecticida"> | string
    compuesto?: StringFilter<"Insecticida"> | string
    aplicacion?: StringFilter<"Insecticida"> | string
    plagaId?: IntFilter<"Insecticida"> | number
  }

  export type DiagnosticoUpsertWithWhereUniqueWithoutPlagaInput = {
    where: DiagnosticoWhereUniqueInput
    update: XOR<DiagnosticoUpdateWithoutPlagaInput, DiagnosticoUncheckedUpdateWithoutPlagaInput>
    create: XOR<DiagnosticoCreateWithoutPlagaInput, DiagnosticoUncheckedCreateWithoutPlagaInput>
  }

  export type DiagnosticoUpdateWithWhereUniqueWithoutPlagaInput = {
    where: DiagnosticoWhereUniqueInput
    data: XOR<DiagnosticoUpdateWithoutPlagaInput, DiagnosticoUncheckedUpdateWithoutPlagaInput>
  }

  export type DiagnosticoUpdateManyWithWhereWithoutPlagaInput = {
    where: DiagnosticoScalarWhereInput
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyWithoutPlagaInput>
  }

  export type PlagaCreateWithoutInsecticidasInput = {
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    diagnosticos?: DiagnosticoCreateNestedManyWithoutPlagaInput
  }

  export type PlagaUncheckedCreateWithoutInsecticidasInput = {
    id?: number
    nombre: string
    descripcion: string
    tipo: string
    createdAt?: Date | string
    diagnosticos?: DiagnosticoUncheckedCreateNestedManyWithoutPlagaInput
  }

  export type PlagaCreateOrConnectWithoutInsecticidasInput = {
    where: PlagaWhereUniqueInput
    create: XOR<PlagaCreateWithoutInsecticidasInput, PlagaUncheckedCreateWithoutInsecticidasInput>
  }

  export type PlagaUpsertWithoutInsecticidasInput = {
    update: XOR<PlagaUpdateWithoutInsecticidasInput, PlagaUncheckedUpdateWithoutInsecticidasInput>
    create: XOR<PlagaCreateWithoutInsecticidasInput, PlagaUncheckedCreateWithoutInsecticidasInput>
    where?: PlagaWhereInput
  }

  export type PlagaUpdateToOneWithWhereWithoutInsecticidasInput = {
    where?: PlagaWhereInput
    data: XOR<PlagaUpdateWithoutInsecticidasInput, PlagaUncheckedUpdateWithoutInsecticidasInput>
  }

  export type PlagaUpdateWithoutInsecticidasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUpdateManyWithoutPlagaNestedInput
  }

  export type PlagaUncheckedUpdateWithoutInsecticidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUncheckedUpdateManyWithoutPlagaNestedInput
  }

  export type DiagnosticoCreateManyUserInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    plagaId: number
  }

  export type DiagnosticoUpdateWithoutUserInput = {
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    plaga?: PlagaUpdateOneRequiredWithoutDiagnosticosNestedInput
  }

  export type DiagnosticoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    plagaId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    plagaId?: IntFieldUpdateOperationsInput | number
  }

  export type InsecticidaCreateManyPlagaInput = {
    id?: number
    nombre: string
    compuesto: string
    aplicacion: string
  }

  export type DiagnosticoCreateManyPlagaInput = {
    id?: number
    imagenUrl: string
    resultado: string
    recomendacion?: string | null
    fecha?: Date | string
    userId: number
  }

  export type InsecticidaUpdateWithoutPlagaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
  }

  export type InsecticidaUncheckedUpdateWithoutPlagaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
  }

  export type InsecticidaUncheckedUpdateManyWithoutPlagaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    compuesto?: StringFieldUpdateOperationsInput | string
    aplicacion?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticoUpdateWithoutPlagaInput = {
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDiagnosticosNestedInput
  }

  export type DiagnosticoUncheckedUpdateWithoutPlagaInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticoUncheckedUpdateManyWithoutPlagaInput = {
    id?: IntFieldUpdateOperationsInput | number
    imagenUrl?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    recomendacion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



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