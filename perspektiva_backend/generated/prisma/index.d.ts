
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
 * Model UserInterest
 * 
 */
export type UserInterest = $Result.DefaultSelection<Prisma.$UserInterestPayload>
/**
 * Model ArticleInterest
 * 
 */
export type ArticleInterest = $Result.DefaultSelection<Prisma.$ArticleInterestPayload>
/**
 * Model article
 * 
 */
export type article = $Result.DefaultSelection<Prisma.$articlePayload>
/**
 * Model interest
 * 
 */
export type interest = $Result.DefaultSelection<Prisma.$interestPayload>
/**
 * Model publicist
 * 
 */
export type publicist = $Result.DefaultSelection<Prisma.$publicistPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model favourites
 * 
 */
export type favourites = $Result.DefaultSelection<Prisma.$favouritesPayload>
/**
 * Model mediums
 * 
 */
export type mediums = $Result.DefaultSelection<Prisma.$mediumsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserInterests
 * const userInterests = await prisma.userInterest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserInterests
   * const userInterests = await prisma.userInterest.findMany()
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
   * `prisma.userInterest`: Exposes CRUD operations for the **UserInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInterests
    * const userInterests = await prisma.userInterest.findMany()
    * ```
    */
  get userInterest(): Prisma.UserInterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleInterest`: Exposes CRUD operations for the **ArticleInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleInterests
    * const articleInterests = await prisma.articleInterest.findMany()
    * ```
    */
  get articleInterest(): Prisma.ArticleInterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.articleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.interestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicist`: Exposes CRUD operations for the **publicist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicists
    * const publicists = await prisma.publicist.findMany()
    * ```
    */
  get publicist(): Prisma.publicistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourites`: Exposes CRUD operations for the **favourites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourites.findMany()
    * ```
    */
  get favourites(): Prisma.favouritesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediums`: Exposes CRUD operations for the **mediums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mediums
    * const mediums = await prisma.mediums.findMany()
    * ```
    */
  get mediums(): Prisma.mediumsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    UserInterest: 'UserInterest',
    ArticleInterest: 'ArticleInterest',
    article: 'article',
    interest: 'interest',
    publicist: 'publicist',
    user: 'user',
    favourites: 'favourites',
    mediums: 'mediums'
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
      modelProps: "userInterest" | "articleInterest" | "article" | "interest" | "publicist" | "user" | "favourites" | "mediums"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserInterest: {
        payload: Prisma.$UserInterestPayload<ExtArgs>
        fields: Prisma.UserInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          findFirst: {
            args: Prisma.UserInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          findMany: {
            args: Prisma.UserInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>[]
          }
          create: {
            args: Prisma.UserInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          createMany: {
            args: Prisma.UserInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          update: {
            args: Prisma.UserInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          deleteMany: {
            args: Prisma.UserInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestPayload>
          }
          aggregate: {
            args: Prisma.UserInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInterest>
          }
          groupBy: {
            args: Prisma.UserInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInterestCountArgs<ExtArgs>
            result: $Utils.Optional<UserInterestCountAggregateOutputType> | number
          }
        }
      }
      ArticleInterest: {
        payload: Prisma.$ArticleInterestPayload<ExtArgs>
        fields: Prisma.ArticleInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          findFirst: {
            args: Prisma.ArticleInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          findMany: {
            args: Prisma.ArticleInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>[]
          }
          create: {
            args: Prisma.ArticleInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          createMany: {
            args: Prisma.ArticleInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          update: {
            args: Prisma.ArticleInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          deleteMany: {
            args: Prisma.ArticleInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInterestPayload>
          }
          aggregate: {
            args: Prisma.ArticleInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleInterest>
          }
          groupBy: {
            args: Prisma.ArticleInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleInterestCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleInterestCountAggregateOutputType> | number
          }
        }
      }
      article: {
        payload: Prisma.$articlePayload<ExtArgs>
        fields: Prisma.articleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findFirst: {
            args: Prisma.articleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findMany: {
            args: Prisma.articleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          create: {
            args: Prisma.articleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          createMany: {
            args: Prisma.articleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          update: {
            args: Prisma.articleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          deleteMany: {
            args: Prisma.articleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.articleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      interest: {
        payload: Prisma.$interestPayload<ExtArgs>
        fields: Prisma.interestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          findFirst: {
            args: Prisma.interestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          findMany: {
            args: Prisma.interestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>[]
          }
          create: {
            args: Prisma.interestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          createMany: {
            args: Prisma.interestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.interestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          update: {
            args: Prisma.interestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          deleteMany: {
            args: Prisma.interestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.interestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.interestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.interestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.interestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      publicist: {
        payload: Prisma.$publicistPayload<ExtArgs>
        fields: Prisma.publicistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.publicistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.publicistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          findFirst: {
            args: Prisma.publicistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.publicistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          findMany: {
            args: Prisma.publicistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>[]
          }
          create: {
            args: Prisma.publicistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          createMany: {
            args: Prisma.publicistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.publicistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          update: {
            args: Prisma.publicistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          deleteMany: {
            args: Prisma.publicistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.publicistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.publicistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicistPayload>
          }
          aggregate: {
            args: Prisma.PublicistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicist>
          }
          groupBy: {
            args: Prisma.publicistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicistGroupByOutputType>[]
          }
          count: {
            args: Prisma.publicistCountArgs<ExtArgs>
            result: $Utils.Optional<PublicistCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      favourites: {
        payload: Prisma.$favouritesPayload<ExtArgs>
        fields: Prisma.favouritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favouritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favouritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          findFirst: {
            args: Prisma.favouritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favouritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          findMany: {
            args: Prisma.favouritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>[]
          }
          create: {
            args: Prisma.favouritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          createMany: {
            args: Prisma.favouritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.favouritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          update: {
            args: Prisma.favouritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          deleteMany: {
            args: Prisma.favouritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favouritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.favouritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          aggregate: {
            args: Prisma.FavouritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourites>
          }
          groupBy: {
            args: Prisma.favouritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.favouritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavouritesCountAggregateOutputType> | number
          }
        }
      }
      mediums: {
        payload: Prisma.$mediumsPayload<ExtArgs>
        fields: Prisma.mediumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediumsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediumsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          findFirst: {
            args: Prisma.mediumsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediumsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          findMany: {
            args: Prisma.mediumsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>[]
          }
          create: {
            args: Prisma.mediumsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          createMany: {
            args: Prisma.mediumsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mediumsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          update: {
            args: Prisma.mediumsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          deleteMany: {
            args: Prisma.mediumsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediumsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mediumsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediumsPayload>
          }
          aggregate: {
            args: Prisma.MediumsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediums>
          }
          groupBy: {
            args: Prisma.mediumsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediumsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediumsCountArgs<ExtArgs>
            result: $Utils.Optional<MediumsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    userInterest?: UserInterestOmit
    articleInterest?: ArticleInterestOmit
    article?: articleOmit
    interest?: interestOmit
    publicist?: publicistOmit
    user?: userOmit
    favourites?: favouritesOmit
    mediums?: mediumsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    interests: number
    favourites: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | ArticleCountOutputTypeCountInterestsArgs
    favourites?: boolean | ArticleCountOutputTypeCountFavouritesArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInterestWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favouritesWhereInput
  }


  /**
   * Count Type InterestCountOutputType
   */

  export type InterestCountOutputType = {
    articles: number
    users: number
  }

  export type InterestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | InterestCountOutputTypeCountArticlesArgs
    users?: boolean | InterestCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestCountOutputType
     */
    select?: InterestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInterestWhereInput
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }


  /**
   * Count Type PublicistCountOutputType
   */

  export type PublicistCountOutputType = {
    article: number
  }

  export type PublicistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | PublicistCountOutputTypeCountArticleArgs
  }

  // Custom InputTypes
  /**
   * PublicistCountOutputType without action
   */
  export type PublicistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicistCountOutputType
     */
    select?: PublicistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicistCountOutputType without action
   */
  export type PublicistCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favourites: number
    publicist: number
    interests: number
    mediums: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
    publicist?: boolean | UserCountOutputTypeCountPublicistArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
    mediums?: boolean | UserCountOutputTypeCountMediumsArgs
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
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favouritesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediumsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserInterest
   */

  export type AggregateUserInterest = {
    _count: UserInterestCountAggregateOutputType | null
    _avg: UserInterestAvgAggregateOutputType | null
    _sum: UserInterestSumAggregateOutputType | null
    _min: UserInterestMinAggregateOutputType | null
    _max: UserInterestMaxAggregateOutputType | null
  }

  export type UserInterestAvgAggregateOutputType = {
    interestId: number | null
  }

  export type UserInterestSumAggregateOutputType = {
    interestId: number | null
  }

  export type UserInterestMinAggregateOutputType = {
    userId: string | null
    interestId: number | null
  }

  export type UserInterestMaxAggregateOutputType = {
    userId: string | null
    interestId: number | null
  }

  export type UserInterestCountAggregateOutputType = {
    userId: number
    interestId: number
    _all: number
  }


  export type UserInterestAvgAggregateInputType = {
    interestId?: true
  }

  export type UserInterestSumAggregateInputType = {
    interestId?: true
  }

  export type UserInterestMinAggregateInputType = {
    userId?: true
    interestId?: true
  }

  export type UserInterestMaxAggregateInputType = {
    userId?: true
    interestId?: true
  }

  export type UserInterestCountAggregateInputType = {
    userId?: true
    interestId?: true
    _all?: true
  }

  export type UserInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterest to aggregate.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInterests
    **/
    _count?: true | UserInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInterestMaxAggregateInputType
  }

  export type GetUserInterestAggregateType<T extends UserInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInterest[P]>
      : GetScalarType<T[P], AggregateUserInterest[P]>
  }




  export type UserInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithAggregationInput | UserInterestOrderByWithAggregationInput[]
    by: UserInterestScalarFieldEnum[] | UserInterestScalarFieldEnum
    having?: UserInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInterestCountAggregateInputType | true
    _avg?: UserInterestAvgAggregateInputType
    _sum?: UserInterestSumAggregateInputType
    _min?: UserInterestMinAggregateInputType
    _max?: UserInterestMaxAggregateInputType
  }

  export type UserInterestGroupByOutputType = {
    userId: string
    interestId: number
    _count: UserInterestCountAggregateOutputType | null
    _avg: UserInterestAvgAggregateOutputType | null
    _sum: UserInterestSumAggregateOutputType | null
    _min: UserInterestMinAggregateOutputType | null
    _max: UserInterestMaxAggregateOutputType | null
  }

  type GetUserInterestGroupByPayload<T extends UserInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInterestGroupByOutputType[P]>
            : GetScalarType<T[P], UserInterestGroupByOutputType[P]>
        }
      >
    >


  export type UserInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    interestId?: boolean
    interest?: boolean | interestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterest"]>



  export type UserInterestSelectScalar = {
    userId?: boolean
    interestId?: boolean
  }

  export type UserInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "interestId", ExtArgs["result"]["userInterest"]>
  export type UserInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interest?: boolean | interestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $UserInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInterest"
    objects: {
      interest: Prisma.$interestPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      interestId: number
    }, ExtArgs["result"]["userInterest"]>
    composites: {}
  }

  type UserInterestGetPayload<S extends boolean | null | undefined | UserInterestDefaultArgs> = $Result.GetResult<Prisma.$UserInterestPayload, S>

  type UserInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInterestCountAggregateInputType | true
    }

  export interface UserInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInterest'], meta: { name: 'UserInterest' } }
    /**
     * Find zero or one UserInterest that matches the filter.
     * @param {UserInterestFindUniqueArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInterestFindUniqueArgs>(args: SelectSubset<T, UserInterestFindUniqueArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInterestFindUniqueOrThrowArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindFirstArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInterestFindFirstArgs>(args?: SelectSubset<T, UserInterestFindFirstArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindFirstOrThrowArgs} args - Arguments to find a UserInterest
     * @example
     * // Get one UserInterest
     * const userInterest = await prisma.userInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInterests
     * const userInterests = await prisma.userInterest.findMany()
     * 
     * // Get first 10 UserInterests
     * const userInterests = await prisma.userInterest.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userInterestWithUserIdOnly = await prisma.userInterest.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserInterestFindManyArgs>(args?: SelectSubset<T, UserInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInterest.
     * @param {UserInterestCreateArgs} args - Arguments to create a UserInterest.
     * @example
     * // Create one UserInterest
     * const UserInterest = await prisma.userInterest.create({
     *   data: {
     *     // ... data to create a UserInterest
     *   }
     * })
     * 
     */
    create<T extends UserInterestCreateArgs>(args: SelectSubset<T, UserInterestCreateArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInterests.
     * @param {UserInterestCreateManyArgs} args - Arguments to create many UserInterests.
     * @example
     * // Create many UserInterests
     * const userInterest = await prisma.userInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInterestCreateManyArgs>(args?: SelectSubset<T, UserInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInterest.
     * @param {UserInterestDeleteArgs} args - Arguments to delete one UserInterest.
     * @example
     * // Delete one UserInterest
     * const UserInterest = await prisma.userInterest.delete({
     *   where: {
     *     // ... filter to delete one UserInterest
     *   }
     * })
     * 
     */
    delete<T extends UserInterestDeleteArgs>(args: SelectSubset<T, UserInterestDeleteArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInterest.
     * @param {UserInterestUpdateArgs} args - Arguments to update one UserInterest.
     * @example
     * // Update one UserInterest
     * const userInterest = await prisma.userInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInterestUpdateArgs>(args: SelectSubset<T, UserInterestUpdateArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInterests.
     * @param {UserInterestDeleteManyArgs} args - Arguments to filter UserInterests to delete.
     * @example
     * // Delete a few UserInterests
     * const { count } = await prisma.userInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInterestDeleteManyArgs>(args?: SelectSubset<T, UserInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInterests
     * const userInterest = await prisma.userInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInterestUpdateManyArgs>(args: SelectSubset<T, UserInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInterest.
     * @param {UserInterestUpsertArgs} args - Arguments to update or create a UserInterest.
     * @example
     * // Update or create a UserInterest
     * const userInterest = await prisma.userInterest.upsert({
     *   create: {
     *     // ... data to create a UserInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInterest we want to update
     *   }
     * })
     */
    upsert<T extends UserInterestUpsertArgs>(args: SelectSubset<T, UserInterestUpsertArgs<ExtArgs>>): Prisma__UserInterestClient<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestCountArgs} args - Arguments to filter UserInterests to count.
     * @example
     * // Count the number of UserInterests
     * const count = await prisma.userInterest.count({
     *   where: {
     *     // ... the filter for the UserInterests we want to count
     *   }
     * })
    **/
    count<T extends UserInterestCountArgs>(
      args?: Subset<T, UserInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInterestAggregateArgs>(args: Subset<T, UserInterestAggregateArgs>): Prisma.PrismaPromise<GetUserInterestAggregateType<T>>

    /**
     * Group by UserInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestGroupByArgs} args - Group by arguments.
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
      T extends UserInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInterestGroupByArgs['orderBy'] }
        : { orderBy?: UserInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInterest model
   */
  readonly fields: UserInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interest<T extends interestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, interestDefaultArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserInterest model
   */
  interface UserInterestFieldRefs {
    readonly userId: FieldRef<"UserInterest", 'String'>
    readonly interestId: FieldRef<"UserInterest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserInterest findUnique
   */
  export type UserInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest findUniqueOrThrow
   */
  export type UserInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest findFirst
   */
  export type UserInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest findFirstOrThrow
   */
  export type UserInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterest to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest findMany
   */
  export type UserInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where?: UserInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInterests.
     */
    cursor?: UserInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * UserInterest create
   */
  export type UserInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInterest.
     */
    data: XOR<UserInterestCreateInput, UserInterestUncheckedCreateInput>
  }

  /**
   * UserInterest createMany
   */
  export type UserInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInterests.
     */
    data: UserInterestCreateManyInput | UserInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInterest update
   */
  export type UserInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInterest.
     */
    data: XOR<UserInterestUpdateInput, UserInterestUncheckedUpdateInput>
    /**
     * Choose, which UserInterest to update.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest updateMany
   */
  export type UserInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInterests.
     */
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyInput>
    /**
     * Filter which UserInterests to update
     */
    where?: UserInterestWhereInput
    /**
     * Limit how many UserInterests to update.
     */
    limit?: number
  }

  /**
   * UserInterest upsert
   */
  export type UserInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInterest to update in case it exists.
     */
    where: UserInterestWhereUniqueInput
    /**
     * In case the UserInterest found by the `where` argument doesn't exist, create a new UserInterest with this data.
     */
    create: XOR<UserInterestCreateInput, UserInterestUncheckedCreateInput>
    /**
     * In case the UserInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInterestUpdateInput, UserInterestUncheckedUpdateInput>
  }

  /**
   * UserInterest delete
   */
  export type UserInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    /**
     * Filter which UserInterest to delete.
     */
    where: UserInterestWhereUniqueInput
  }

  /**
   * UserInterest deleteMany
   */
  export type UserInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterests to delete
     */
    where?: UserInterestWhereInput
    /**
     * Limit how many UserInterests to delete.
     */
    limit?: number
  }

  /**
   * UserInterest without action
   */
  export type UserInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
  }


  /**
   * Model ArticleInterest
   */

  export type AggregateArticleInterest = {
    _count: ArticleInterestCountAggregateOutputType | null
    _avg: ArticleInterestAvgAggregateOutputType | null
    _sum: ArticleInterestSumAggregateOutputType | null
    _min: ArticleInterestMinAggregateOutputType | null
    _max: ArticleInterestMaxAggregateOutputType | null
  }

  export type ArticleInterestAvgAggregateOutputType = {
    articleId: number | null
    interestId: number | null
  }

  export type ArticleInterestSumAggregateOutputType = {
    articleId: number | null
    interestId: number | null
  }

  export type ArticleInterestMinAggregateOutputType = {
    articleId: number | null
    interestId: number | null
  }

  export type ArticleInterestMaxAggregateOutputType = {
    articleId: number | null
    interestId: number | null
  }

  export type ArticleInterestCountAggregateOutputType = {
    articleId: number
    interestId: number
    _all: number
  }


  export type ArticleInterestAvgAggregateInputType = {
    articleId?: true
    interestId?: true
  }

  export type ArticleInterestSumAggregateInputType = {
    articleId?: true
    interestId?: true
  }

  export type ArticleInterestMinAggregateInputType = {
    articleId?: true
    interestId?: true
  }

  export type ArticleInterestMaxAggregateInputType = {
    articleId?: true
    interestId?: true
  }

  export type ArticleInterestCountAggregateInputType = {
    articleId?: true
    interestId?: true
    _all?: true
  }

  export type ArticleInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleInterest to aggregate.
     */
    where?: ArticleInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInterests to fetch.
     */
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleInterests
    **/
    _count?: true | ArticleInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleInterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleInterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleInterestMaxAggregateInputType
  }

  export type GetArticleInterestAggregateType<T extends ArticleInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleInterest[P]>
      : GetScalarType<T[P], AggregateArticleInterest[P]>
  }




  export type ArticleInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInterestWhereInput
    orderBy?: ArticleInterestOrderByWithAggregationInput | ArticleInterestOrderByWithAggregationInput[]
    by: ArticleInterestScalarFieldEnum[] | ArticleInterestScalarFieldEnum
    having?: ArticleInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleInterestCountAggregateInputType | true
    _avg?: ArticleInterestAvgAggregateInputType
    _sum?: ArticleInterestSumAggregateInputType
    _min?: ArticleInterestMinAggregateInputType
    _max?: ArticleInterestMaxAggregateInputType
  }

  export type ArticleInterestGroupByOutputType = {
    articleId: number
    interestId: number
    _count: ArticleInterestCountAggregateOutputType | null
    _avg: ArticleInterestAvgAggregateOutputType | null
    _sum: ArticleInterestSumAggregateOutputType | null
    _min: ArticleInterestMinAggregateOutputType | null
    _max: ArticleInterestMaxAggregateOutputType | null
  }

  type GetArticleInterestGroupByPayload<T extends ArticleInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleInterestGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleInterestGroupByOutputType[P]>
        }
      >
    >


  export type ArticleInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    interestId?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    interest?: boolean | interestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleInterest"]>



  export type ArticleInterestSelectScalar = {
    articleId?: boolean
    interestId?: boolean
  }

  export type ArticleInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "interestId", ExtArgs["result"]["articleInterest"]>
  export type ArticleInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    interest?: boolean | interestDefaultArgs<ExtArgs>
  }

  export type $ArticleInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleInterest"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      interest: Prisma.$interestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      interestId: number
    }, ExtArgs["result"]["articleInterest"]>
    composites: {}
  }

  type ArticleInterestGetPayload<S extends boolean | null | undefined | ArticleInterestDefaultArgs> = $Result.GetResult<Prisma.$ArticleInterestPayload, S>

  type ArticleInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleInterestCountAggregateInputType | true
    }

  export interface ArticleInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleInterest'], meta: { name: 'ArticleInterest' } }
    /**
     * Find zero or one ArticleInterest that matches the filter.
     * @param {ArticleInterestFindUniqueArgs} args - Arguments to find a ArticleInterest
     * @example
     * // Get one ArticleInterest
     * const articleInterest = await prisma.articleInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleInterestFindUniqueArgs>(args: SelectSubset<T, ArticleInterestFindUniqueArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleInterestFindUniqueOrThrowArgs} args - Arguments to find a ArticleInterest
     * @example
     * // Get one ArticleInterest
     * const articleInterest = await prisma.articleInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestFindFirstArgs} args - Arguments to find a ArticleInterest
     * @example
     * // Get one ArticleInterest
     * const articleInterest = await prisma.articleInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleInterestFindFirstArgs>(args?: SelectSubset<T, ArticleInterestFindFirstArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestFindFirstOrThrowArgs} args - Arguments to find a ArticleInterest
     * @example
     * // Get one ArticleInterest
     * const articleInterest = await prisma.articleInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleInterests
     * const articleInterests = await prisma.articleInterest.findMany()
     * 
     * // Get first 10 ArticleInterests
     * const articleInterests = await prisma.articleInterest.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleInterestWithArticleIdOnly = await prisma.articleInterest.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleInterestFindManyArgs>(args?: SelectSubset<T, ArticleInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleInterest.
     * @param {ArticleInterestCreateArgs} args - Arguments to create a ArticleInterest.
     * @example
     * // Create one ArticleInterest
     * const ArticleInterest = await prisma.articleInterest.create({
     *   data: {
     *     // ... data to create a ArticleInterest
     *   }
     * })
     * 
     */
    create<T extends ArticleInterestCreateArgs>(args: SelectSubset<T, ArticleInterestCreateArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleInterests.
     * @param {ArticleInterestCreateManyArgs} args - Arguments to create many ArticleInterests.
     * @example
     * // Create many ArticleInterests
     * const articleInterest = await prisma.articleInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleInterestCreateManyArgs>(args?: SelectSubset<T, ArticleInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleInterest.
     * @param {ArticleInterestDeleteArgs} args - Arguments to delete one ArticleInterest.
     * @example
     * // Delete one ArticleInterest
     * const ArticleInterest = await prisma.articleInterest.delete({
     *   where: {
     *     // ... filter to delete one ArticleInterest
     *   }
     * })
     * 
     */
    delete<T extends ArticleInterestDeleteArgs>(args: SelectSubset<T, ArticleInterestDeleteArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleInterest.
     * @param {ArticleInterestUpdateArgs} args - Arguments to update one ArticleInterest.
     * @example
     * // Update one ArticleInterest
     * const articleInterest = await prisma.articleInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleInterestUpdateArgs>(args: SelectSubset<T, ArticleInterestUpdateArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleInterests.
     * @param {ArticleInterestDeleteManyArgs} args - Arguments to filter ArticleInterests to delete.
     * @example
     * // Delete a few ArticleInterests
     * const { count } = await prisma.articleInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleInterestDeleteManyArgs>(args?: SelectSubset<T, ArticleInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleInterests
     * const articleInterest = await prisma.articleInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleInterestUpdateManyArgs>(args: SelectSubset<T, ArticleInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleInterest.
     * @param {ArticleInterestUpsertArgs} args - Arguments to update or create a ArticleInterest.
     * @example
     * // Update or create a ArticleInterest
     * const articleInterest = await prisma.articleInterest.upsert({
     *   create: {
     *     // ... data to create a ArticleInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleInterest we want to update
     *   }
     * })
     */
    upsert<T extends ArticleInterestUpsertArgs>(args: SelectSubset<T, ArticleInterestUpsertArgs<ExtArgs>>): Prisma__ArticleInterestClient<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestCountArgs} args - Arguments to filter ArticleInterests to count.
     * @example
     * // Count the number of ArticleInterests
     * const count = await prisma.articleInterest.count({
     *   where: {
     *     // ... the filter for the ArticleInterests we want to count
     *   }
     * })
    **/
    count<T extends ArticleInterestCountArgs>(
      args?: Subset<T, ArticleInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleInterestAggregateArgs>(args: Subset<T, ArticleInterestAggregateArgs>): Prisma.PrismaPromise<GetArticleInterestAggregateType<T>>

    /**
     * Group by ArticleInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInterestGroupByArgs} args - Group by arguments.
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
      T extends ArticleInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleInterestGroupByArgs['orderBy'] }
        : { orderBy?: ArticleInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleInterest model
   */
  readonly fields: ArticleInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends interestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, interestDefaultArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleInterest model
   */
  interface ArticleInterestFieldRefs {
    readonly articleId: FieldRef<"ArticleInterest", 'Int'>
    readonly interestId: FieldRef<"ArticleInterest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArticleInterest findUnique
   */
  export type ArticleInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInterest to fetch.
     */
    where: ArticleInterestWhereUniqueInput
  }

  /**
   * ArticleInterest findUniqueOrThrow
   */
  export type ArticleInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInterest to fetch.
     */
    where: ArticleInterestWhereUniqueInput
  }

  /**
   * ArticleInterest findFirst
   */
  export type ArticleInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInterest to fetch.
     */
    where?: ArticleInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInterests to fetch.
     */
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleInterests.
     */
    cursor?: ArticleInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleInterests.
     */
    distinct?: ArticleInterestScalarFieldEnum | ArticleInterestScalarFieldEnum[]
  }

  /**
   * ArticleInterest findFirstOrThrow
   */
  export type ArticleInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInterest to fetch.
     */
    where?: ArticleInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInterests to fetch.
     */
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleInterests.
     */
    cursor?: ArticleInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleInterests.
     */
    distinct?: ArticleInterestScalarFieldEnum | ArticleInterestScalarFieldEnum[]
  }

  /**
   * ArticleInterest findMany
   */
  export type ArticleInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInterests to fetch.
     */
    where?: ArticleInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInterests to fetch.
     */
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleInterests.
     */
    cursor?: ArticleInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInterests.
     */
    skip?: number
    distinct?: ArticleInterestScalarFieldEnum | ArticleInterestScalarFieldEnum[]
  }

  /**
   * ArticleInterest create
   */
  export type ArticleInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleInterest.
     */
    data: XOR<ArticleInterestCreateInput, ArticleInterestUncheckedCreateInput>
  }

  /**
   * ArticleInterest createMany
   */
  export type ArticleInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleInterests.
     */
    data: ArticleInterestCreateManyInput | ArticleInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleInterest update
   */
  export type ArticleInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleInterest.
     */
    data: XOR<ArticleInterestUpdateInput, ArticleInterestUncheckedUpdateInput>
    /**
     * Choose, which ArticleInterest to update.
     */
    where: ArticleInterestWhereUniqueInput
  }

  /**
   * ArticleInterest updateMany
   */
  export type ArticleInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleInterests.
     */
    data: XOR<ArticleInterestUpdateManyMutationInput, ArticleInterestUncheckedUpdateManyInput>
    /**
     * Filter which ArticleInterests to update
     */
    where?: ArticleInterestWhereInput
    /**
     * Limit how many ArticleInterests to update.
     */
    limit?: number
  }

  /**
   * ArticleInterest upsert
   */
  export type ArticleInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleInterest to update in case it exists.
     */
    where: ArticleInterestWhereUniqueInput
    /**
     * In case the ArticleInterest found by the `where` argument doesn't exist, create a new ArticleInterest with this data.
     */
    create: XOR<ArticleInterestCreateInput, ArticleInterestUncheckedCreateInput>
    /**
     * In case the ArticleInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleInterestUpdateInput, ArticleInterestUncheckedUpdateInput>
  }

  /**
   * ArticleInterest delete
   */
  export type ArticleInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    /**
     * Filter which ArticleInterest to delete.
     */
    where: ArticleInterestWhereUniqueInput
  }

  /**
   * ArticleInterest deleteMany
   */
  export type ArticleInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleInterests to delete
     */
    where?: ArticleInterestWhereInput
    /**
     * Limit how many ArticleInterests to delete.
     */
    limit?: number
  }

  /**
   * ArticleInterest without action
   */
  export type ArticleInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
  }


  /**
   * Model article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    publicistId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    publicistId: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    title: string | null
    publicistId: number | null
    content: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    publicistId: number | null
    content: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    publicistId: number
    content: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    publicistId?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    publicistId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    publicistId?: true
    content?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    publicistId?: true
    content?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    publicistId?: true
    content?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article to aggregate.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type articleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
    orderBy?: articleOrderByWithAggregationInput | articleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: articleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    title: string
    publicistId: number
    content: string
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends articleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type articleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicistId?: boolean
    content?: boolean
    publicist?: boolean | publicistDefaultArgs<ExtArgs>
    interests?: boolean | article$interestsArgs<ExtArgs>
    favourites?: boolean | article$favouritesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>



  export type articleSelectScalar = {
    id?: boolean
    title?: boolean
    publicistId?: boolean
    content?: boolean
  }

  export type articleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "publicistId" | "content", ExtArgs["result"]["article"]>
  export type articleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicist?: boolean | publicistDefaultArgs<ExtArgs>
    interests?: boolean | article$interestsArgs<ExtArgs>
    favourites?: boolean | article$favouritesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $articlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article"
    objects: {
      publicist: Prisma.$publicistPayload<ExtArgs>
      interests: Prisma.$ArticleInterestPayload<ExtArgs>[]
      favourites: Prisma.$favouritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      publicistId: number
      content: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type articleGetPayload<S extends boolean | null | undefined | articleDefaultArgs> = $Result.GetResult<Prisma.$articlePayload, S>

  type articleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface articleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article'], meta: { name: 'article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {articleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articleFindUniqueArgs>(args: SelectSubset<T, articleFindUniqueArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articleFindUniqueOrThrowArgs>(args: SelectSubset<T, articleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articleFindFirstArgs>(args?: SelectSubset<T, articleFindFirstArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articleFindFirstOrThrowArgs>(args?: SelectSubset<T, articleFindFirstOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articleFindManyArgs>(args?: SelectSubset<T, articleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {articleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends articleCreateArgs>(args: SelectSubset<T, articleCreateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articleCreateManyArgs>(args?: SelectSubset<T, articleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {articleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends articleDeleteArgs>(args: SelectSubset<T, articleDeleteArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {articleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articleUpdateArgs>(args: SelectSubset<T, articleUpdateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articleDeleteManyArgs>(args?: SelectSubset<T, articleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articleUpdateManyArgs>(args: SelectSubset<T, articleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {articleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends articleUpsertArgs>(args: SelectSubset<T, articleUpsertArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articleCountArgs>(
      args?: Subset<T, articleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleGroupByArgs} args - Group by arguments.
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
      T extends articleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleGroupByArgs['orderBy'] }
        : { orderBy?: articleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article model
   */
  readonly fields: articleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicist<T extends publicistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, publicistDefaultArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interests<T extends article$interestsArgs<ExtArgs> = {}>(args?: Subset<T, article$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends article$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, article$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the article model
   */
  interface articleFieldRefs {
    readonly id: FieldRef<"article", 'Int'>
    readonly title: FieldRef<"article", 'String'>
    readonly publicistId: FieldRef<"article", 'Int'>
    readonly content: FieldRef<"article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * article findUnique
   */
  export type articleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findUniqueOrThrow
   */
  export type articleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findFirst
   */
  export type articleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findFirstOrThrow
   */
  export type articleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findMany
   */
  export type articleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article create
   */
  export type articleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to create a article.
     */
    data: XOR<articleCreateInput, articleUncheckedCreateInput>
  }

  /**
   * article createMany
   */
  export type articleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article update
   */
  export type articleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to update a article.
     */
    data: XOR<articleUpdateInput, articleUncheckedUpdateInput>
    /**
     * Choose, which article to update.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article updateMany
   */
  export type articleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * article upsert
   */
  export type articleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The filter to search for the article to update in case it exists.
     */
    where: articleWhereUniqueInput
    /**
     * In case the article found by the `where` argument doesn't exist, create a new article with this data.
     */
    create: XOR<articleCreateInput, articleUncheckedCreateInput>
    /**
     * In case the article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleUpdateInput, articleUncheckedUpdateInput>
  }

  /**
   * article delete
   */
  export type articleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter which article to delete.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article deleteMany
   */
  export type articleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * article.interests
   */
  export type article$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    where?: ArticleInterestWhereInput
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    cursor?: ArticleInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleInterestScalarFieldEnum | ArticleInterestScalarFieldEnum[]
  }

  /**
   * article.favourites
   */
  export type article$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    where?: favouritesWhereInput
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    cursor?: favouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * article without action
   */
  export type articleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
  }


  /**
   * Model interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestAvgAggregateOutputType = {
    id: number | null
  }

  export type InterestSumAggregateOutputType = {
    id: number | null
  }

  export type InterestMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InterestMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InterestAvgAggregateInputType = {
    id?: true
  }

  export type InterestSumAggregateInputType = {
    id?: true
  }

  export type InterestMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interest to aggregate.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type interestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interestWhereInput
    orderBy?: interestOrderByWithAggregationInput | interestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: interestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _avg?: InterestAvgAggregateInputType
    _sum?: InterestSumAggregateInputType
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: number
    name: string
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends interestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type interestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | interest$articlesArgs<ExtArgs>
    users?: boolean | interest$usersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>



  export type interestSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type interestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["interest"]>
  export type interestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | interest$articlesArgs<ExtArgs>
    users?: boolean | interest$usersArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $interestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interest"
    objects: {
      articles: Prisma.$ArticleInterestPayload<ExtArgs>[]
      users: Prisma.$UserInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type interestGetPayload<S extends boolean | null | undefined | interestDefaultArgs> = $Result.GetResult<Prisma.$interestPayload, S>

  type interestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<interestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface interestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interest'], meta: { name: 'interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {interestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends interestFindUniqueArgs>(args: SelectSubset<T, interestFindUniqueArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {interestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends interestFindUniqueOrThrowArgs>(args: SelectSubset<T, interestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends interestFindFirstArgs>(args?: SelectSubset<T, interestFindFirstArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends interestFindFirstOrThrowArgs>(args?: SelectSubset<T, interestFindFirstOrThrowArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends interestFindManyArgs>(args?: SelectSubset<T, interestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {interestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends interestCreateArgs>(args: SelectSubset<T, interestCreateArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {interestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends interestCreateManyArgs>(args?: SelectSubset<T, interestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {interestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends interestDeleteArgs>(args: SelectSubset<T, interestDeleteArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {interestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends interestUpdateArgs>(args: SelectSubset<T, interestUpdateArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {interestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends interestDeleteManyArgs>(args?: SelectSubset<T, interestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends interestUpdateManyArgs>(args: SelectSubset<T, interestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {interestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends interestUpsertArgs>(args: SelectSubset<T, interestUpsertArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends interestCountArgs>(
      args?: Subset<T, interestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestGroupByArgs} args - Group by arguments.
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
      T extends interestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interestGroupByArgs['orderBy'] }
        : { orderBy?: interestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, interestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interest model
   */
  readonly fields: interestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends interest$articlesArgs<ExtArgs> = {}>(args?: Subset<T, interest$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends interest$usersArgs<ExtArgs> = {}>(args?: Subset<T, interest$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the interest model
   */
  interface interestFieldRefs {
    readonly id: FieldRef<"interest", 'Int'>
    readonly name: FieldRef<"interest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * interest findUnique
   */
  export type interestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where: interestWhereUniqueInput
  }

  /**
   * interest findUniqueOrThrow
   */
  export type interestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where: interestWhereUniqueInput
  }

  /**
   * interest findFirst
   */
  export type interestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * interest findFirstOrThrow
   */
  export type interestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * interest findMany
   */
  export type interestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * interest create
   */
  export type interestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The data needed to create a interest.
     */
    data: XOR<interestCreateInput, interestUncheckedCreateInput>
  }

  /**
   * interest createMany
   */
  export type interestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interests.
     */
    data: interestCreateManyInput | interestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * interest update
   */
  export type interestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The data needed to update a interest.
     */
    data: XOR<interestUpdateInput, interestUncheckedUpdateInput>
    /**
     * Choose, which interest to update.
     */
    where: interestWhereUniqueInput
  }

  /**
   * interest updateMany
   */
  export type interestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interests.
     */
    data: XOR<interestUpdateManyMutationInput, interestUncheckedUpdateManyInput>
    /**
     * Filter which interests to update
     */
    where?: interestWhereInput
    /**
     * Limit how many interests to update.
     */
    limit?: number
  }

  /**
   * interest upsert
   */
  export type interestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The filter to search for the interest to update in case it exists.
     */
    where: interestWhereUniqueInput
    /**
     * In case the interest found by the `where` argument doesn't exist, create a new interest with this data.
     */
    create: XOR<interestCreateInput, interestUncheckedCreateInput>
    /**
     * In case the interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interestUpdateInput, interestUncheckedUpdateInput>
  }

  /**
   * interest delete
   */
  export type interestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter which interest to delete.
     */
    where: interestWhereUniqueInput
  }

  /**
   * interest deleteMany
   */
  export type interestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interests to delete
     */
    where?: interestWhereInput
    /**
     * Limit how many interests to delete.
     */
    limit?: number
  }

  /**
   * interest.articles
   */
  export type interest$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInterest
     */
    select?: ArticleInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInterest
     */
    omit?: ArticleInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInterestInclude<ExtArgs> | null
    where?: ArticleInterestWhereInput
    orderBy?: ArticleInterestOrderByWithRelationInput | ArticleInterestOrderByWithRelationInput[]
    cursor?: ArticleInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleInterestScalarFieldEnum | ArticleInterestScalarFieldEnum[]
  }

  /**
   * interest.users
   */
  export type interest$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    cursor?: UserInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * interest without action
   */
  export type interestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interest
     */
    omit?: interestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interestInclude<ExtArgs> | null
  }


  /**
   * Model publicist
   */

  export type AggregatePublicist = {
    _count: PublicistCountAggregateOutputType | null
    _avg: PublicistAvgAggregateOutputType | null
    _sum: PublicistSumAggregateOutputType | null
    _min: PublicistMinAggregateOutputType | null
    _max: PublicistMaxAggregateOutputType | null
  }

  export type PublicistAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicistSumAggregateOutputType = {
    id: number | null
  }

  export type PublicistMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: string | null
  }

  export type PublicistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: string | null
  }

  export type PublicistCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type PublicistAvgAggregateInputType = {
    id?: true
  }

  export type PublicistSumAggregateInputType = {
    id?: true
  }

  export type PublicistMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type PublicistMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type PublicistCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type PublicistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publicist to aggregate.
     */
    where?: publicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicists to fetch.
     */
    orderBy?: publicistOrderByWithRelationInput | publicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: publicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned publicists
    **/
    _count?: true | PublicistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicistMaxAggregateInputType
  }

  export type GetPublicistAggregateType<T extends PublicistAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicist[P]>
      : GetScalarType<T[P], AggregatePublicist[P]>
  }




  export type publicistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicistWhereInput
    orderBy?: publicistOrderByWithAggregationInput | publicistOrderByWithAggregationInput[]
    by: PublicistScalarFieldEnum[] | PublicistScalarFieldEnum
    having?: publicistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicistCountAggregateInputType | true
    _avg?: PublicistAvgAggregateInputType
    _sum?: PublicistSumAggregateInputType
    _min?: PublicistMinAggregateInputType
    _max?: PublicistMaxAggregateInputType
  }

  export type PublicistGroupByOutputType = {
    id: number
    name: string
    user_id: string | null
    _count: PublicistCountAggregateOutputType | null
    _avg: PublicistAvgAggregateOutputType | null
    _sum: PublicistSumAggregateOutputType | null
    _min: PublicistMinAggregateOutputType | null
    _max: PublicistMaxAggregateOutputType | null
  }

  type GetPublicistGroupByPayload<T extends publicistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicistGroupByOutputType[P]>
            : GetScalarType<T[P], PublicistGroupByOutputType[P]>
        }
      >
    >


  export type publicistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    article?: boolean | publicist$articleArgs<ExtArgs>
    user?: boolean | publicist$userArgs<ExtArgs>
    _count?: boolean | PublicistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicist"]>



  export type publicistSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
  }

  export type publicistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "user_id", ExtArgs["result"]["publicist"]>
  export type publicistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | publicist$articleArgs<ExtArgs>
    user?: boolean | publicist$userArgs<ExtArgs>
    _count?: boolean | PublicistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $publicistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "publicist"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      user_id: string | null
    }, ExtArgs["result"]["publicist"]>
    composites: {}
  }

  type publicistGetPayload<S extends boolean | null | undefined | publicistDefaultArgs> = $Result.GetResult<Prisma.$publicistPayload, S>

  type publicistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<publicistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicistCountAggregateInputType | true
    }

  export interface publicistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publicist'], meta: { name: 'publicist' } }
    /**
     * Find zero or one Publicist that matches the filter.
     * @param {publicistFindUniqueArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends publicistFindUniqueArgs>(args: SelectSubset<T, publicistFindUniqueArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {publicistFindUniqueOrThrowArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends publicistFindUniqueOrThrowArgs>(args: SelectSubset<T, publicistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistFindFirstArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends publicistFindFirstArgs>(args?: SelectSubset<T, publicistFindFirstArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistFindFirstOrThrowArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends publicistFindFirstOrThrowArgs>(args?: SelectSubset<T, publicistFindFirstOrThrowArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicists
     * const publicists = await prisma.publicist.findMany()
     * 
     * // Get first 10 Publicists
     * const publicists = await prisma.publicist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicistWithIdOnly = await prisma.publicist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends publicistFindManyArgs>(args?: SelectSubset<T, publicistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicist.
     * @param {publicistCreateArgs} args - Arguments to create a Publicist.
     * @example
     * // Create one Publicist
     * const Publicist = await prisma.publicist.create({
     *   data: {
     *     // ... data to create a Publicist
     *   }
     * })
     * 
     */
    create<T extends publicistCreateArgs>(args: SelectSubset<T, publicistCreateArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicists.
     * @param {publicistCreateManyArgs} args - Arguments to create many Publicists.
     * @example
     * // Create many Publicists
     * const publicist = await prisma.publicist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends publicistCreateManyArgs>(args?: SelectSubset<T, publicistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publicist.
     * @param {publicistDeleteArgs} args - Arguments to delete one Publicist.
     * @example
     * // Delete one Publicist
     * const Publicist = await prisma.publicist.delete({
     *   where: {
     *     // ... filter to delete one Publicist
     *   }
     * })
     * 
     */
    delete<T extends publicistDeleteArgs>(args: SelectSubset<T, publicistDeleteArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicist.
     * @param {publicistUpdateArgs} args - Arguments to update one Publicist.
     * @example
     * // Update one Publicist
     * const publicist = await prisma.publicist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends publicistUpdateArgs>(args: SelectSubset<T, publicistUpdateArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicists.
     * @param {publicistDeleteManyArgs} args - Arguments to filter Publicists to delete.
     * @example
     * // Delete a few Publicists
     * const { count } = await prisma.publicist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends publicistDeleteManyArgs>(args?: SelectSubset<T, publicistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicists
     * const publicist = await prisma.publicist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends publicistUpdateManyArgs>(args: SelectSubset<T, publicistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publicist.
     * @param {publicistUpsertArgs} args - Arguments to update or create a Publicist.
     * @example
     * // Update or create a Publicist
     * const publicist = await prisma.publicist.upsert({
     *   create: {
     *     // ... data to create a Publicist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicist we want to update
     *   }
     * })
     */
    upsert<T extends publicistUpsertArgs>(args: SelectSubset<T, publicistUpsertArgs<ExtArgs>>): Prisma__publicistClient<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistCountArgs} args - Arguments to filter Publicists to count.
     * @example
     * // Count the number of Publicists
     * const count = await prisma.publicist.count({
     *   where: {
     *     // ... the filter for the Publicists we want to count
     *   }
     * })
    **/
    count<T extends publicistCountArgs>(
      args?: Subset<T, publicistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicistAggregateArgs>(args: Subset<T, PublicistAggregateArgs>): Prisma.PrismaPromise<GetPublicistAggregateType<T>>

    /**
     * Group by Publicist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicistGroupByArgs} args - Group by arguments.
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
      T extends publicistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicistGroupByArgs['orderBy'] }
        : { orderBy?: publicistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, publicistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the publicist model
   */
  readonly fields: publicistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publicist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends publicist$articleArgs<ExtArgs> = {}>(args?: Subset<T, publicist$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends publicist$userArgs<ExtArgs> = {}>(args?: Subset<T, publicist$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the publicist model
   */
  interface publicistFieldRefs {
    readonly id: FieldRef<"publicist", 'Int'>
    readonly name: FieldRef<"publicist", 'String'>
    readonly user_id: FieldRef<"publicist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * publicist findUnique
   */
  export type publicistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter, which publicist to fetch.
     */
    where: publicistWhereUniqueInput
  }

  /**
   * publicist findUniqueOrThrow
   */
  export type publicistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter, which publicist to fetch.
     */
    where: publicistWhereUniqueInput
  }

  /**
   * publicist findFirst
   */
  export type publicistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter, which publicist to fetch.
     */
    where?: publicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicists to fetch.
     */
    orderBy?: publicistOrderByWithRelationInput | publicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publicists.
     */
    cursor?: publicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publicists.
     */
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * publicist findFirstOrThrow
   */
  export type publicistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter, which publicist to fetch.
     */
    where?: publicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicists to fetch.
     */
    orderBy?: publicistOrderByWithRelationInput | publicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publicists.
     */
    cursor?: publicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publicists.
     */
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * publicist findMany
   */
  export type publicistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter, which publicists to fetch.
     */
    where?: publicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publicists to fetch.
     */
    orderBy?: publicistOrderByWithRelationInput | publicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing publicists.
     */
    cursor?: publicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publicists.
     */
    skip?: number
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * publicist create
   */
  export type publicistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * The data needed to create a publicist.
     */
    data: XOR<publicistCreateInput, publicistUncheckedCreateInput>
  }

  /**
   * publicist createMany
   */
  export type publicistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publicists.
     */
    data: publicistCreateManyInput | publicistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publicist update
   */
  export type publicistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * The data needed to update a publicist.
     */
    data: XOR<publicistUpdateInput, publicistUncheckedUpdateInput>
    /**
     * Choose, which publicist to update.
     */
    where: publicistWhereUniqueInput
  }

  /**
   * publicist updateMany
   */
  export type publicistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publicists.
     */
    data: XOR<publicistUpdateManyMutationInput, publicistUncheckedUpdateManyInput>
    /**
     * Filter which publicists to update
     */
    where?: publicistWhereInput
    /**
     * Limit how many publicists to update.
     */
    limit?: number
  }

  /**
   * publicist upsert
   */
  export type publicistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * The filter to search for the publicist to update in case it exists.
     */
    where: publicistWhereUniqueInput
    /**
     * In case the publicist found by the `where` argument doesn't exist, create a new publicist with this data.
     */
    create: XOR<publicistCreateInput, publicistUncheckedCreateInput>
    /**
     * In case the publicist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicistUpdateInput, publicistUncheckedUpdateInput>
  }

  /**
   * publicist delete
   */
  export type publicistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    /**
     * Filter which publicist to delete.
     */
    where: publicistWhereUniqueInput
  }

  /**
   * publicist deleteMany
   */
  export type publicistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publicists to delete
     */
    where?: publicistWhereInput
    /**
     * Limit how many publicists to delete.
     */
    limit?: number
  }

  /**
   * publicist.article
   */
  export type publicist$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * publicist.user
   */
  export type publicist$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * publicist without action
   */
  export type publicistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    isAdmin?: boolean
    favourites?: boolean | user$favouritesArgs<ExtArgs>
    publicist?: boolean | user$publicistArgs<ExtArgs>
    interests?: boolean | user$interestsArgs<ExtArgs>
    mediums?: boolean | user$mediumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    isAdmin?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "isAdmin", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | user$favouritesArgs<ExtArgs>
    publicist?: boolean | user$publicistArgs<ExtArgs>
    interests?: boolean | user$interestsArgs<ExtArgs>
    mediums?: boolean | user$mediumsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      favourites: Prisma.$favouritesPayload<ExtArgs>[]
      publicist: Prisma.$publicistPayload<ExtArgs>[]
      interests: Prisma.$UserInterestPayload<ExtArgs>[]
      mediums: Prisma.$mediumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends user$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, user$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicist<T extends user$publicistArgs<ExtArgs> = {}>(args?: Subset<T, user$publicistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends user$interestsArgs<ExtArgs> = {}>(args?: Subset<T, user$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediums<T extends user$mediumsArgs<ExtArgs> = {}>(args?: Subset<T, user$mediumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly isAdmin: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.favourites
   */
  export type user$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    where?: favouritesWhereInput
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    cursor?: favouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * user.publicist
   */
  export type user$publicistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publicist
     */
    select?: publicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publicist
     */
    omit?: publicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicistInclude<ExtArgs> | null
    where?: publicistWhereInput
    orderBy?: publicistOrderByWithRelationInput | publicistOrderByWithRelationInput[]
    cursor?: publicistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * user.interests
   */
  export type user$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterest
     */
    select?: UserInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterest
     */
    omit?: UserInterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestInclude<ExtArgs> | null
    where?: UserInterestWhereInput
    orderBy?: UserInterestOrderByWithRelationInput | UserInterestOrderByWithRelationInput[]
    cursor?: UserInterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestScalarFieldEnum | UserInterestScalarFieldEnum[]
  }

  /**
   * user.mediums
   */
  export type user$mediumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    where?: mediumsWhereInput
    orderBy?: mediumsOrderByWithRelationInput | mediumsOrderByWithRelationInput[]
    cursor?: mediumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediumsScalarFieldEnum | MediumsScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model favourites
   */

  export type AggregateFavourites = {
    _count: FavouritesCountAggregateOutputType | null
    _avg: FavouritesAvgAggregateOutputType | null
    _sum: FavouritesSumAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  export type FavouritesAvgAggregateOutputType = {
    id: number | null
    article_id: number | null
  }

  export type FavouritesSumAggregateOutputType = {
    id: number | null
    article_id: number | null
  }

  export type FavouritesMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    article_id: number | null
  }

  export type FavouritesMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    article_id: number | null
  }

  export type FavouritesCountAggregateOutputType = {
    id: number
    user_id: number
    article_id: number
    _all: number
  }


  export type FavouritesAvgAggregateInputType = {
    id?: true
    article_id?: true
  }

  export type FavouritesSumAggregateInputType = {
    id?: true
    article_id?: true
  }

  export type FavouritesMinAggregateInputType = {
    id?: true
    user_id?: true
    article_id?: true
  }

  export type FavouritesMaxAggregateInputType = {
    id?: true
    user_id?: true
    article_id?: true
  }

  export type FavouritesCountAggregateInputType = {
    id?: true
    user_id?: true
    article_id?: true
    _all?: true
  }

  export type FavouritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourites to aggregate.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favourites
    **/
    _count?: true | FavouritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavouritesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavouritesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouritesMaxAggregateInputType
  }

  export type GetFavouritesAggregateType<T extends FavouritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourites[P]>
      : GetScalarType<T[P], AggregateFavourites[P]>
  }




  export type favouritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favouritesWhereInput
    orderBy?: favouritesOrderByWithAggregationInput | favouritesOrderByWithAggregationInput[]
    by: FavouritesScalarFieldEnum[] | FavouritesScalarFieldEnum
    having?: favouritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouritesCountAggregateInputType | true
    _avg?: FavouritesAvgAggregateInputType
    _sum?: FavouritesSumAggregateInputType
    _min?: FavouritesMinAggregateInputType
    _max?: FavouritesMaxAggregateInputType
  }

  export type FavouritesGroupByOutputType = {
    id: number
    user_id: string | null
    article_id: number | null
    _count: FavouritesCountAggregateOutputType | null
    _avg: FavouritesAvgAggregateOutputType | null
    _sum: FavouritesSumAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  type GetFavouritesGroupByPayload<T extends favouritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
        }
      >
    >


  export type favouritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    article_id?: boolean
    article?: boolean | favourites$articleArgs<ExtArgs>
    user?: boolean | favourites$userArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>



  export type favouritesSelectScalar = {
    id?: boolean
    user_id?: boolean
    article_id?: boolean
  }

  export type favouritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "article_id", ExtArgs["result"]["favourites"]>
  export type favouritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | favourites$articleArgs<ExtArgs>
    user?: boolean | favourites$userArgs<ExtArgs>
  }

  export type $favouritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favourites"
    objects: {
      article: Prisma.$articlePayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      article_id: number | null
    }, ExtArgs["result"]["favourites"]>
    composites: {}
  }

  type favouritesGetPayload<S extends boolean | null | undefined | favouritesDefaultArgs> = $Result.GetResult<Prisma.$favouritesPayload, S>

  type favouritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favouritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouritesCountAggregateInputType | true
    }

  export interface favouritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favourites'], meta: { name: 'favourites' } }
    /**
     * Find zero or one Favourites that matches the filter.
     * @param {favouritesFindUniqueArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favouritesFindUniqueArgs>(args: SelectSubset<T, favouritesFindUniqueArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favouritesFindUniqueOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favouritesFindUniqueOrThrowArgs>(args: SelectSubset<T, favouritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindFirstArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favouritesFindFirstArgs>(args?: SelectSubset<T, favouritesFindFirstArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindFirstOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favouritesFindFirstOrThrowArgs>(args?: SelectSubset<T, favouritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourites.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouritesWithIdOnly = await prisma.favourites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends favouritesFindManyArgs>(args?: SelectSubset<T, favouritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourites.
     * @param {favouritesCreateArgs} args - Arguments to create a Favourites.
     * @example
     * // Create one Favourites
     * const Favourites = await prisma.favourites.create({
     *   data: {
     *     // ... data to create a Favourites
     *   }
     * })
     * 
     */
    create<T extends favouritesCreateArgs>(args: SelectSubset<T, favouritesCreateArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {favouritesCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favouritesCreateManyArgs>(args?: SelectSubset<T, favouritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favourites.
     * @param {favouritesDeleteArgs} args - Arguments to delete one Favourites.
     * @example
     * // Delete one Favourites
     * const Favourites = await prisma.favourites.delete({
     *   where: {
     *     // ... filter to delete one Favourites
     *   }
     * })
     * 
     */
    delete<T extends favouritesDeleteArgs>(args: SelectSubset<T, favouritesDeleteArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourites.
     * @param {favouritesUpdateArgs} args - Arguments to update one Favourites.
     * @example
     * // Update one Favourites
     * const favourites = await prisma.favourites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favouritesUpdateArgs>(args: SelectSubset<T, favouritesUpdateArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {favouritesDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favouritesDeleteManyArgs>(args?: SelectSubset<T, favouritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favouritesUpdateManyArgs>(args: SelectSubset<T, favouritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favourites.
     * @param {favouritesUpsertArgs} args - Arguments to update or create a Favourites.
     * @example
     * // Update or create a Favourites
     * const favourites = await prisma.favourites.upsert({
     *   create: {
     *     // ... data to create a Favourites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourites we want to update
     *   }
     * })
     */
    upsert<T extends favouritesUpsertArgs>(args: SelectSubset<T, favouritesUpsertArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourites.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends favouritesCountArgs>(
      args?: Subset<T, favouritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouritesAggregateArgs>(args: Subset<T, FavouritesAggregateArgs>): Prisma.PrismaPromise<GetFavouritesAggregateType<T>>

    /**
     * Group by Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesGroupByArgs} args - Group by arguments.
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
      T extends favouritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favouritesGroupByArgs['orderBy'] }
        : { orderBy?: favouritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favouritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favourites model
   */
  readonly fields: favouritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favourites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favouritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends favourites$articleArgs<ExtArgs> = {}>(args?: Subset<T, favourites$articleArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends favourites$userArgs<ExtArgs> = {}>(args?: Subset<T, favourites$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favourites model
   */
  interface favouritesFieldRefs {
    readonly id: FieldRef<"favourites", 'Int'>
    readonly user_id: FieldRef<"favourites", 'String'>
    readonly article_id: FieldRef<"favourites", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favourites findUnique
   */
  export type favouritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites findUniqueOrThrow
   */
  export type favouritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites findFirst
   */
  export type favouritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites findFirstOrThrow
   */
  export type favouritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites findMany
   */
  export type favouritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites create
   */
  export type favouritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The data needed to create a favourites.
     */
    data?: XOR<favouritesCreateInput, favouritesUncheckedCreateInput>
  }

  /**
   * favourites createMany
   */
  export type favouritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favourites.
     */
    data: favouritesCreateManyInput | favouritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favourites update
   */
  export type favouritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The data needed to update a favourites.
     */
    data: XOR<favouritesUpdateInput, favouritesUncheckedUpdateInput>
    /**
     * Choose, which favourites to update.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites updateMany
   */
  export type favouritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favourites.
     */
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyInput>
    /**
     * Filter which favourites to update
     */
    where?: favouritesWhereInput
    /**
     * Limit how many favourites to update.
     */
    limit?: number
  }

  /**
   * favourites upsert
   */
  export type favouritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The filter to search for the favourites to update in case it exists.
     */
    where: favouritesWhereUniqueInput
    /**
     * In case the favourites found by the `where` argument doesn't exist, create a new favourites with this data.
     */
    create: XOR<favouritesCreateInput, favouritesUncheckedCreateInput>
    /**
     * In case the favourites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favouritesUpdateInput, favouritesUncheckedUpdateInput>
  }

  /**
   * favourites delete
   */
  export type favouritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter which favourites to delete.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites deleteMany
   */
  export type favouritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourites to delete
     */
    where?: favouritesWhereInput
    /**
     * Limit how many favourites to delete.
     */
    limit?: number
  }

  /**
   * favourites.article
   */
  export type favourites$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
  }

  /**
   * favourites.user
   */
  export type favourites$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * favourites without action
   */
  export type favouritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
  }


  /**
   * Model mediums
   */

  export type AggregateMediums = {
    _count: MediumsCountAggregateOutputType | null
    _avg: MediumsAvgAggregateOutputType | null
    _sum: MediumsSumAggregateOutputType | null
    _min: MediumsMinAggregateOutputType | null
    _max: MediumsMaxAggregateOutputType | null
  }

  export type MediumsAvgAggregateOutputType = {
    id: number | null
  }

  export type MediumsSumAggregateOutputType = {
    id: number | null
  }

  export type MediumsMinAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    user_id: string | null
  }

  export type MediumsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    user_id: string | null
  }

  export type MediumsCountAggregateOutputType = {
    id: number
    name: number
    active: number
    user_id: number
    _all: number
  }


  export type MediumsAvgAggregateInputType = {
    id?: true
  }

  export type MediumsSumAggregateInputType = {
    id?: true
  }

  export type MediumsMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    user_id?: true
  }

  export type MediumsMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    user_id?: true
  }

  export type MediumsCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    user_id?: true
    _all?: true
  }

  export type MediumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediums to aggregate.
     */
    where?: mediumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediums to fetch.
     */
    orderBy?: mediumsOrderByWithRelationInput | mediumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mediums
    **/
    _count?: true | MediumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediumsMaxAggregateInputType
  }

  export type GetMediumsAggregateType<T extends MediumsAggregateArgs> = {
        [P in keyof T & keyof AggregateMediums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediums[P]>
      : GetScalarType<T[P], AggregateMediums[P]>
  }




  export type mediumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediumsWhereInput
    orderBy?: mediumsOrderByWithAggregationInput | mediumsOrderByWithAggregationInput[]
    by: MediumsScalarFieldEnum[] | MediumsScalarFieldEnum
    having?: mediumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediumsCountAggregateInputType | true
    _avg?: MediumsAvgAggregateInputType
    _sum?: MediumsSumAggregateInputType
    _min?: MediumsMinAggregateInputType
    _max?: MediumsMaxAggregateInputType
  }

  export type MediumsGroupByOutputType = {
    id: number
    name: string
    active: boolean
    user_id: string
    _count: MediumsCountAggregateOutputType | null
    _avg: MediumsAvgAggregateOutputType | null
    _sum: MediumsSumAggregateOutputType | null
    _min: MediumsMinAggregateOutputType | null
    _max: MediumsMaxAggregateOutputType | null
  }

  type GetMediumsGroupByPayload<T extends mediumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediumsGroupByOutputType[P]>
            : GetScalarType<T[P], MediumsGroupByOutputType[P]>
        }
      >
    >


  export type mediumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediums"]>



  export type mediumsSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    user_id?: boolean
  }

  export type mediumsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "user_id", ExtArgs["result"]["mediums"]>
  export type mediumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $mediumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mediums"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      active: boolean
      user_id: string
    }, ExtArgs["result"]["mediums"]>
    composites: {}
  }

  type mediumsGetPayload<S extends boolean | null | undefined | mediumsDefaultArgs> = $Result.GetResult<Prisma.$mediumsPayload, S>

  type mediumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediumsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediumsCountAggregateInputType | true
    }

  export interface mediumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mediums'], meta: { name: 'mediums' } }
    /**
     * Find zero or one Mediums that matches the filter.
     * @param {mediumsFindUniqueArgs} args - Arguments to find a Mediums
     * @example
     * // Get one Mediums
     * const mediums = await prisma.mediums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediumsFindUniqueArgs>(args: SelectSubset<T, mediumsFindUniqueArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mediums that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediumsFindUniqueOrThrowArgs} args - Arguments to find a Mediums
     * @example
     * // Get one Mediums
     * const mediums = await prisma.mediums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediumsFindUniqueOrThrowArgs>(args: SelectSubset<T, mediumsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mediums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsFindFirstArgs} args - Arguments to find a Mediums
     * @example
     * // Get one Mediums
     * const mediums = await prisma.mediums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediumsFindFirstArgs>(args?: SelectSubset<T, mediumsFindFirstArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mediums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsFindFirstOrThrowArgs} args - Arguments to find a Mediums
     * @example
     * // Get one Mediums
     * const mediums = await prisma.mediums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediumsFindFirstOrThrowArgs>(args?: SelectSubset<T, mediumsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mediums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mediums
     * const mediums = await prisma.mediums.findMany()
     * 
     * // Get first 10 Mediums
     * const mediums = await prisma.mediums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediumsWithIdOnly = await prisma.mediums.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediumsFindManyArgs>(args?: SelectSubset<T, mediumsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mediums.
     * @param {mediumsCreateArgs} args - Arguments to create a Mediums.
     * @example
     * // Create one Mediums
     * const Mediums = await prisma.mediums.create({
     *   data: {
     *     // ... data to create a Mediums
     *   }
     * })
     * 
     */
    create<T extends mediumsCreateArgs>(args: SelectSubset<T, mediumsCreateArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mediums.
     * @param {mediumsCreateManyArgs} args - Arguments to create many Mediums.
     * @example
     * // Create many Mediums
     * const mediums = await prisma.mediums.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediumsCreateManyArgs>(args?: SelectSubset<T, mediumsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mediums.
     * @param {mediumsDeleteArgs} args - Arguments to delete one Mediums.
     * @example
     * // Delete one Mediums
     * const Mediums = await prisma.mediums.delete({
     *   where: {
     *     // ... filter to delete one Mediums
     *   }
     * })
     * 
     */
    delete<T extends mediumsDeleteArgs>(args: SelectSubset<T, mediumsDeleteArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mediums.
     * @param {mediumsUpdateArgs} args - Arguments to update one Mediums.
     * @example
     * // Update one Mediums
     * const mediums = await prisma.mediums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediumsUpdateArgs>(args: SelectSubset<T, mediumsUpdateArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mediums.
     * @param {mediumsDeleteManyArgs} args - Arguments to filter Mediums to delete.
     * @example
     * // Delete a few Mediums
     * const { count } = await prisma.mediums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediumsDeleteManyArgs>(args?: SelectSubset<T, mediumsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mediums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mediums
     * const mediums = await prisma.mediums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediumsUpdateManyArgs>(args: SelectSubset<T, mediumsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mediums.
     * @param {mediumsUpsertArgs} args - Arguments to update or create a Mediums.
     * @example
     * // Update or create a Mediums
     * const mediums = await prisma.mediums.upsert({
     *   create: {
     *     // ... data to create a Mediums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mediums we want to update
     *   }
     * })
     */
    upsert<T extends mediumsUpsertArgs>(args: SelectSubset<T, mediumsUpsertArgs<ExtArgs>>): Prisma__mediumsClient<$Result.GetResult<Prisma.$mediumsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mediums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsCountArgs} args - Arguments to filter Mediums to count.
     * @example
     * // Count the number of Mediums
     * const count = await prisma.mediums.count({
     *   where: {
     *     // ... the filter for the Mediums we want to count
     *   }
     * })
    **/
    count<T extends mediumsCountArgs>(
      args?: Subset<T, mediumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mediums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediumsAggregateArgs>(args: Subset<T, MediumsAggregateArgs>): Prisma.PrismaPromise<GetMediumsAggregateType<T>>

    /**
     * Group by Mediums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediumsGroupByArgs} args - Group by arguments.
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
      T extends mediumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediumsGroupByArgs['orderBy'] }
        : { orderBy?: mediumsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mediumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mediums model
   */
  readonly fields: mediumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mediums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mediums model
   */
  interface mediumsFieldRefs {
    readonly id: FieldRef<"mediums", 'Int'>
    readonly name: FieldRef<"mediums", 'String'>
    readonly active: FieldRef<"mediums", 'Boolean'>
    readonly user_id: FieldRef<"mediums", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mediums findUnique
   */
  export type mediumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter, which mediums to fetch.
     */
    where: mediumsWhereUniqueInput
  }

  /**
   * mediums findUniqueOrThrow
   */
  export type mediumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter, which mediums to fetch.
     */
    where: mediumsWhereUniqueInput
  }

  /**
   * mediums findFirst
   */
  export type mediumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter, which mediums to fetch.
     */
    where?: mediumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediums to fetch.
     */
    orderBy?: mediumsOrderByWithRelationInput | mediumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediums.
     */
    cursor?: mediumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediums.
     */
    distinct?: MediumsScalarFieldEnum | MediumsScalarFieldEnum[]
  }

  /**
   * mediums findFirstOrThrow
   */
  export type mediumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter, which mediums to fetch.
     */
    where?: mediumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediums to fetch.
     */
    orderBy?: mediumsOrderByWithRelationInput | mediumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediums.
     */
    cursor?: mediumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediums.
     */
    distinct?: MediumsScalarFieldEnum | MediumsScalarFieldEnum[]
  }

  /**
   * mediums findMany
   */
  export type mediumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter, which mediums to fetch.
     */
    where?: mediumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediums to fetch.
     */
    orderBy?: mediumsOrderByWithRelationInput | mediumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mediums.
     */
    cursor?: mediumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediums.
     */
    skip?: number
    distinct?: MediumsScalarFieldEnum | MediumsScalarFieldEnum[]
  }

  /**
   * mediums create
   */
  export type mediumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * The data needed to create a mediums.
     */
    data: XOR<mediumsCreateInput, mediumsUncheckedCreateInput>
  }

  /**
   * mediums createMany
   */
  export type mediumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mediums.
     */
    data: mediumsCreateManyInput | mediumsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mediums update
   */
  export type mediumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * The data needed to update a mediums.
     */
    data: XOR<mediumsUpdateInput, mediumsUncheckedUpdateInput>
    /**
     * Choose, which mediums to update.
     */
    where: mediumsWhereUniqueInput
  }

  /**
   * mediums updateMany
   */
  export type mediumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mediums.
     */
    data: XOR<mediumsUpdateManyMutationInput, mediumsUncheckedUpdateManyInput>
    /**
     * Filter which mediums to update
     */
    where?: mediumsWhereInput
    /**
     * Limit how many mediums to update.
     */
    limit?: number
  }

  /**
   * mediums upsert
   */
  export type mediumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * The filter to search for the mediums to update in case it exists.
     */
    where: mediumsWhereUniqueInput
    /**
     * In case the mediums found by the `where` argument doesn't exist, create a new mediums with this data.
     */
    create: XOR<mediumsCreateInput, mediumsUncheckedCreateInput>
    /**
     * In case the mediums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediumsUpdateInput, mediumsUncheckedUpdateInput>
  }

  /**
   * mediums delete
   */
  export type mediumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
    /**
     * Filter which mediums to delete.
     */
    where: mediumsWhereUniqueInput
  }

  /**
   * mediums deleteMany
   */
  export type mediumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediums to delete
     */
    where?: mediumsWhereInput
    /**
     * Limit how many mediums to delete.
     */
    limit?: number
  }

  /**
   * mediums without action
   */
  export type mediumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediums
     */
    select?: mediumsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediums
     */
    omit?: mediumsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediumsInclude<ExtArgs> | null
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


  export const UserInterestScalarFieldEnum: {
    userId: 'userId',
    interestId: 'interestId'
  };

  export type UserInterestScalarFieldEnum = (typeof UserInterestScalarFieldEnum)[keyof typeof UserInterestScalarFieldEnum]


  export const ArticleInterestScalarFieldEnum: {
    articleId: 'articleId',
    interestId: 'interestId'
  };

  export type ArticleInterestScalarFieldEnum = (typeof ArticleInterestScalarFieldEnum)[keyof typeof ArticleInterestScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    publicistId: 'publicistId',
    content: 'content'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const PublicistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type PublicistScalarFieldEnum = (typeof PublicistScalarFieldEnum)[keyof typeof PublicistScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FavouritesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    article_id: 'article_id'
  };

  export type FavouritesScalarFieldEnum = (typeof FavouritesScalarFieldEnum)[keyof typeof FavouritesScalarFieldEnum]


  export const MediumsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    user_id: 'user_id'
  };

  export type MediumsScalarFieldEnum = (typeof MediumsScalarFieldEnum)[keyof typeof MediumsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserInterestOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type UserInterestOrderByRelevanceFieldEnum = (typeof UserInterestOrderByRelevanceFieldEnum)[keyof typeof UserInterestOrderByRelevanceFieldEnum]


  export const articleOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type articleOrderByRelevanceFieldEnum = (typeof articleOrderByRelevanceFieldEnum)[keyof typeof articleOrderByRelevanceFieldEnum]


  export const interestOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type interestOrderByRelevanceFieldEnum = (typeof interestOrderByRelevanceFieldEnum)[keyof typeof interestOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const publicistOrderByRelevanceFieldEnum: {
    name: 'name',
    user_id: 'user_id'
  };

  export type publicistOrderByRelevanceFieldEnum = (typeof publicistOrderByRelevanceFieldEnum)[keyof typeof publicistOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const favouritesOrderByRelevanceFieldEnum: {
    user_id: 'user_id'
  };

  export type favouritesOrderByRelevanceFieldEnum = (typeof favouritesOrderByRelevanceFieldEnum)[keyof typeof favouritesOrderByRelevanceFieldEnum]


  export const mediumsOrderByRelevanceFieldEnum: {
    name: 'name',
    user_id: 'user_id'
  };

  export type mediumsOrderByRelevanceFieldEnum = (typeof mediumsOrderByRelevanceFieldEnum)[keyof typeof mediumsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserInterestWhereInput = {
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
    interest?: XOR<InterestScalarRelationFilter, interestWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type UserInterestOrderByWithRelationInput = {
    userId?: SortOrder
    interestId?: SortOrder
    interest?: interestOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: UserInterestOrderByRelevanceInput
  }

  export type UserInterestWhereUniqueInput = Prisma.AtLeast<{
    userId_interestId?: UserInterestUserIdInterestIdCompoundUniqueInput
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
    interest?: XOR<InterestScalarRelationFilter, interestWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "userId_interestId">

  export type UserInterestOrderByWithAggregationInput = {
    userId?: SortOrder
    interestId?: SortOrder
    _count?: UserInterestCountOrderByAggregateInput
    _avg?: UserInterestAvgOrderByAggregateInput
    _max?: UserInterestMaxOrderByAggregateInput
    _min?: UserInterestMinOrderByAggregateInput
    _sum?: UserInterestSumOrderByAggregateInput
  }

  export type UserInterestScalarWhereWithAggregatesInput = {
    AND?: UserInterestScalarWhereWithAggregatesInput | UserInterestScalarWhereWithAggregatesInput[]
    OR?: UserInterestScalarWhereWithAggregatesInput[]
    NOT?: UserInterestScalarWhereWithAggregatesInput | UserInterestScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserInterest"> | string
    interestId?: IntWithAggregatesFilter<"UserInterest"> | number
  }

  export type ArticleInterestWhereInput = {
    AND?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    OR?: ArticleInterestWhereInput[]
    NOT?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    articleId?: IntFilter<"ArticleInterest"> | number
    interestId?: IntFilter<"ArticleInterest"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    interest?: XOR<InterestScalarRelationFilter, interestWhereInput>
  }

  export type ArticleInterestOrderByWithRelationInput = {
    articleId?: SortOrder
    interestId?: SortOrder
    article?: articleOrderByWithRelationInput
    interest?: interestOrderByWithRelationInput
  }

  export type ArticleInterestWhereUniqueInput = Prisma.AtLeast<{
    articleId_interestId?: ArticleInterestArticleIdInterestIdCompoundUniqueInput
    AND?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    OR?: ArticleInterestWhereInput[]
    NOT?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    articleId?: IntFilter<"ArticleInterest"> | number
    interestId?: IntFilter<"ArticleInterest"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    interest?: XOR<InterestScalarRelationFilter, interestWhereInput>
  }, "articleId_interestId">

  export type ArticleInterestOrderByWithAggregationInput = {
    articleId?: SortOrder
    interestId?: SortOrder
    _count?: ArticleInterestCountOrderByAggregateInput
    _avg?: ArticleInterestAvgOrderByAggregateInput
    _max?: ArticleInterestMaxOrderByAggregateInput
    _min?: ArticleInterestMinOrderByAggregateInput
    _sum?: ArticleInterestSumOrderByAggregateInput
  }

  export type ArticleInterestScalarWhereWithAggregatesInput = {
    AND?: ArticleInterestScalarWhereWithAggregatesInput | ArticleInterestScalarWhereWithAggregatesInput[]
    OR?: ArticleInterestScalarWhereWithAggregatesInput[]
    NOT?: ArticleInterestScalarWhereWithAggregatesInput | ArticleInterestScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"ArticleInterest"> | number
    interestId?: IntWithAggregatesFilter<"ArticleInterest"> | number
  }

  export type articleWhereInput = {
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    id?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    publicistId?: IntFilter<"article"> | number
    content?: StringFilter<"article"> | string
    publicist?: XOR<PublicistScalarRelationFilter, publicistWhereInput>
    interests?: ArticleInterestListRelationFilter
    favourites?: FavouritesListRelationFilter
  }

  export type articleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
    publicist?: publicistOrderByWithRelationInput
    interests?: ArticleInterestOrderByRelationAggregateInput
    favourites?: favouritesOrderByRelationAggregateInput
    _relevance?: articleOrderByRelevanceInput
  }

  export type articleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    title?: StringFilter<"article"> | string
    publicistId?: IntFilter<"article"> | number
    content?: StringFilter<"article"> | string
    publicist?: XOR<PublicistScalarRelationFilter, publicistWhereInput>
    interests?: ArticleInterestListRelationFilter
    favourites?: FavouritesListRelationFilter
  }, "id">

  export type articleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
    _count?: articleCountOrderByAggregateInput
    _avg?: articleAvgOrderByAggregateInput
    _max?: articleMaxOrderByAggregateInput
    _min?: articleMinOrderByAggregateInput
    _sum?: articleSumOrderByAggregateInput
  }

  export type articleScalarWhereWithAggregatesInput = {
    AND?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    OR?: articleScalarWhereWithAggregatesInput[]
    NOT?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"article"> | number
    title?: StringWithAggregatesFilter<"article"> | string
    publicistId?: IntWithAggregatesFilter<"article"> | number
    content?: StringWithAggregatesFilter<"article"> | string
  }

  export type interestWhereInput = {
    AND?: interestWhereInput | interestWhereInput[]
    OR?: interestWhereInput[]
    NOT?: interestWhereInput | interestWhereInput[]
    id?: IntFilter<"interest"> | number
    name?: StringFilter<"interest"> | string
    articles?: ArticleInterestListRelationFilter
    users?: UserInterestListRelationFilter
  }

  export type interestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: ArticleInterestOrderByRelationAggregateInput
    users?: UserInterestOrderByRelationAggregateInput
    _relevance?: interestOrderByRelevanceInput
  }

  export type interestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: interestWhereInput | interestWhereInput[]
    OR?: interestWhereInput[]
    NOT?: interestWhereInput | interestWhereInput[]
    name?: StringFilter<"interest"> | string
    articles?: ArticleInterestListRelationFilter
    users?: UserInterestListRelationFilter
  }, "id">

  export type interestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: interestCountOrderByAggregateInput
    _avg?: interestAvgOrderByAggregateInput
    _max?: interestMaxOrderByAggregateInput
    _min?: interestMinOrderByAggregateInput
    _sum?: interestSumOrderByAggregateInput
  }

  export type interestScalarWhereWithAggregatesInput = {
    AND?: interestScalarWhereWithAggregatesInput | interestScalarWhereWithAggregatesInput[]
    OR?: interestScalarWhereWithAggregatesInput[]
    NOT?: interestScalarWhereWithAggregatesInput | interestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"interest"> | number
    name?: StringWithAggregatesFilter<"interest"> | string
  }

  export type publicistWhereInput = {
    AND?: publicistWhereInput | publicistWhereInput[]
    OR?: publicistWhereInput[]
    NOT?: publicistWhereInput | publicistWhereInput[]
    id?: IntFilter<"publicist"> | number
    name?: StringFilter<"publicist"> | string
    user_id?: StringNullableFilter<"publicist"> | string | null
    article?: ArticleListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type publicistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    article?: articleOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    _relevance?: publicistOrderByRelevanceInput
  }

  export type publicistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: publicistWhereInput | publicistWhereInput[]
    OR?: publicistWhereInput[]
    NOT?: publicistWhereInput | publicistWhereInput[]
    name?: StringFilter<"publicist"> | string
    user_id?: StringNullableFilter<"publicist"> | string | null
    article?: ArticleListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type publicistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: publicistCountOrderByAggregateInput
    _avg?: publicistAvgOrderByAggregateInput
    _max?: publicistMaxOrderByAggregateInput
    _min?: publicistMinOrderByAggregateInput
    _sum?: publicistSumOrderByAggregateInput
  }

  export type publicistScalarWhereWithAggregatesInput = {
    AND?: publicistScalarWhereWithAggregatesInput | publicistScalarWhereWithAggregatesInput[]
    OR?: publicistScalarWhereWithAggregatesInput[]
    NOT?: publicistScalarWhereWithAggregatesInput | publicistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"publicist"> | number
    name?: StringWithAggregatesFilter<"publicist"> | string
    user_id?: StringNullableWithAggregatesFilter<"publicist"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    isAdmin?: BoolFilter<"user"> | boolean
    favourites?: FavouritesListRelationFilter
    publicist?: PublicistListRelationFilter
    interests?: UserInterestListRelationFilter
    mediums?: MediumsListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    favourites?: favouritesOrderByRelationAggregateInput
    publicist?: publicistOrderByRelationAggregateInput
    interests?: UserInterestOrderByRelationAggregateInput
    mediums?: mediumsOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    isAdmin?: BoolFilter<"user"> | boolean
    favourites?: FavouritesListRelationFilter
    publicist?: PublicistListRelationFilter
    interests?: UserInterestListRelationFilter
    mediums?: MediumsListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type favouritesWhereInput = {
    AND?: favouritesWhereInput | favouritesWhereInput[]
    OR?: favouritesWhereInput[]
    NOT?: favouritesWhereInput | favouritesWhereInput[]
    id?: IntFilter<"favourites"> | number
    user_id?: StringNullableFilter<"favourites"> | string | null
    article_id?: IntNullableFilter<"favourites"> | number | null
    article?: XOR<ArticleNullableScalarRelationFilter, articleWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type favouritesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    article_id?: SortOrderInput | SortOrder
    article?: articleOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: favouritesOrderByRelevanceInput
  }

  export type favouritesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_article_id?: favouritesUser_idArticle_idCompoundUniqueInput
    AND?: favouritesWhereInput | favouritesWhereInput[]
    OR?: favouritesWhereInput[]
    NOT?: favouritesWhereInput | favouritesWhereInput[]
    user_id?: StringNullableFilter<"favourites"> | string | null
    article_id?: IntNullableFilter<"favourites"> | number | null
    article?: XOR<ArticleNullableScalarRelationFilter, articleWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "user_id_article_id">

  export type favouritesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    article_id?: SortOrderInput | SortOrder
    _count?: favouritesCountOrderByAggregateInput
    _avg?: favouritesAvgOrderByAggregateInput
    _max?: favouritesMaxOrderByAggregateInput
    _min?: favouritesMinOrderByAggregateInput
    _sum?: favouritesSumOrderByAggregateInput
  }

  export type favouritesScalarWhereWithAggregatesInput = {
    AND?: favouritesScalarWhereWithAggregatesInput | favouritesScalarWhereWithAggregatesInput[]
    OR?: favouritesScalarWhereWithAggregatesInput[]
    NOT?: favouritesScalarWhereWithAggregatesInput | favouritesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"favourites"> | number
    user_id?: StringNullableWithAggregatesFilter<"favourites"> | string | null
    article_id?: IntNullableWithAggregatesFilter<"favourites"> | number | null
  }

  export type mediumsWhereInput = {
    AND?: mediumsWhereInput | mediumsWhereInput[]
    OR?: mediumsWhereInput[]
    NOT?: mediumsWhereInput | mediumsWhereInput[]
    id?: IntFilter<"mediums"> | number
    name?: StringFilter<"mediums"> | string
    active?: BoolFilter<"mediums"> | boolean
    user_id?: StringFilter<"mediums"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type mediumsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: mediumsOrderByRelevanceInput
  }

  export type mediumsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mediumsWhereInput | mediumsWhereInput[]
    OR?: mediumsWhereInput[]
    NOT?: mediumsWhereInput | mediumsWhereInput[]
    name?: StringFilter<"mediums"> | string
    active?: BoolFilter<"mediums"> | boolean
    user_id?: StringFilter<"mediums"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type mediumsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    user_id?: SortOrder
    _count?: mediumsCountOrderByAggregateInput
    _avg?: mediumsAvgOrderByAggregateInput
    _max?: mediumsMaxOrderByAggregateInput
    _min?: mediumsMinOrderByAggregateInput
    _sum?: mediumsSumOrderByAggregateInput
  }

  export type mediumsScalarWhereWithAggregatesInput = {
    AND?: mediumsScalarWhereWithAggregatesInput | mediumsScalarWhereWithAggregatesInput[]
    OR?: mediumsScalarWhereWithAggregatesInput[]
    NOT?: mediumsScalarWhereWithAggregatesInput | mediumsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mediums"> | number
    name?: StringWithAggregatesFilter<"mediums"> | string
    active?: BoolWithAggregatesFilter<"mediums"> | boolean
    user_id?: StringWithAggregatesFilter<"mediums"> | string
  }

  export type UserInterestCreateInput = {
    interest: interestCreateNestedOneWithoutUsersInput
    user: userCreateNestedOneWithoutInterestsInput
  }

  export type UserInterestUncheckedCreateInput = {
    userId: string
    interestId: number
  }

  export type UserInterestUpdateInput = {
    interest?: interestUpdateOneRequiredWithoutUsersNestedInput
    user?: userUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type UserInterestUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInterestCreateManyInput = {
    userId: string
    interestId: number
  }

  export type UserInterestUpdateManyMutationInput = {

  }

  export type UserInterestUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestCreateInput = {
    article: articleCreateNestedOneWithoutInterestsInput
    interest: interestCreateNestedOneWithoutArticlesInput
  }

  export type ArticleInterestUncheckedCreateInput = {
    articleId: number
    interestId: number
  }

  export type ArticleInterestUpdateInput = {
    article?: articleUpdateOneRequiredWithoutInterestsNestedInput
    interest?: interestUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleInterestUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestCreateManyInput = {
    articleId: number
    interestId: number
  }

  export type ArticleInterestUpdateManyMutationInput = {

  }

  export type ArticleInterestUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type articleCreateInput = {
    title: string
    content: string
    publicist: publicistCreateNestedOneWithoutArticleInput
    interests?: ArticleInterestCreateNestedManyWithoutArticleInput
    favourites?: favouritesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateInput = {
    id?: number
    title: string
    publicistId: number
    content: string
    interests?: ArticleInterestUncheckedCreateNestedManyWithoutArticleInput
    favourites?: favouritesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publicist?: publicistUpdateOneRequiredWithoutArticleNestedInput
    interests?: ArticleInterestUpdateManyWithoutArticleNestedInput
    favourites?: favouritesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput
    favourites?: favouritesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleCreateManyInput = {
    id?: number
    title: string
    publicistId: number
    content: string
  }

  export type articleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type articleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type interestCreateInput = {
    name: string
    articles?: ArticleInterestCreateNestedManyWithoutInterestInput
    users?: UserInterestCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateInput = {
    id?: number
    name: string
    articles?: ArticleInterestUncheckedCreateNestedManyWithoutInterestInput
    users?: UserInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUpdateManyWithoutInterestNestedInput
    users?: UserInterestUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUncheckedUpdateManyWithoutInterestNestedInput
    users?: UserInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type interestCreateManyInput = {
    id?: number
    name: string
  }

  export type interestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type interestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type publicistCreateInput = {
    name: string
    article?: articleCreateNestedManyWithoutPublicistInput
    user?: userCreateNestedOneWithoutPublicistInput
  }

  export type publicistUncheckedCreateInput = {
    id?: number
    name: string
    user_id?: string | null
    article?: articleUncheckedCreateNestedManyWithoutPublicistInput
  }

  export type publicistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    article?: articleUpdateManyWithoutPublicistNestedInput
    user?: userUpdateOneWithoutPublicistNestedInput
  }

  export type publicistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUncheckedUpdateManyWithoutPublicistNestedInput
  }

  export type publicistCreateManyInput = {
    id?: number
    name: string
    user_id?: string | null
  }

  export type publicistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type publicistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesCreateNestedManyWithoutUserInput
    publicist?: publicistCreateNestedManyWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
    mediums?: mediumsCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesUncheckedCreateNestedManyWithoutUserInput
    publicist?: publicistUncheckedCreateNestedManyWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
    mediums?: mediumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUpdateManyWithoutUserNestedInput
    publicist?: publicistUpdateManyWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
    mediums?: mediumsUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUncheckedUpdateManyWithoutUserNestedInput
    publicist?: publicistUncheckedUpdateManyWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
    mediums?: mediumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type favouritesCreateInput = {
    article?: articleCreateNestedOneWithoutFavouritesInput
    user?: userCreateNestedOneWithoutFavouritesInput
  }

  export type favouritesUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    article_id?: number | null
  }

  export type favouritesUpdateInput = {
    article?: articleUpdateOneWithoutFavouritesNestedInput
    user?: userUpdateOneWithoutFavouritesNestedInput
  }

  export type favouritesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    article_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type favouritesCreateManyInput = {
    id?: number
    user_id?: string | null
    article_id?: number | null
  }

  export type favouritesUpdateManyMutationInput = {

  }

  export type favouritesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    article_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mediumsCreateInput = {
    name: string
    active: boolean
    user: userCreateNestedOneWithoutMediumsInput
  }

  export type mediumsUncheckedCreateInput = {
    id?: number
    name: string
    active: boolean
    user_id: string
  }

  export type mediumsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutMediumsNestedInput
  }

  export type mediumsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type mediumsCreateManyInput = {
    id?: number
    name: string
    active: boolean
    user_id: string
  }

  export type mediumsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type mediumsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type InterestScalarRelationFilter = {
    is?: interestWhereInput
    isNot?: interestWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type UserInterestOrderByRelevanceInput = {
    fields: UserInterestOrderByRelevanceFieldEnum | UserInterestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserInterestUserIdInterestIdCompoundUniqueInput = {
    userId: string
    interestId: number
  }

  export type UserInterestCountOrderByAggregateInput = {
    userId?: SortOrder
    interestId?: SortOrder
  }

  export type UserInterestAvgOrderByAggregateInput = {
    interestId?: SortOrder
  }

  export type UserInterestMaxOrderByAggregateInput = {
    userId?: SortOrder
    interestId?: SortOrder
  }

  export type UserInterestMinOrderByAggregateInput = {
    userId?: SortOrder
    interestId?: SortOrder
  }

  export type UserInterestSumOrderByAggregateInput = {
    interestId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ArticleScalarRelationFilter = {
    is?: articleWhereInput
    isNot?: articleWhereInput
  }

  export type ArticleInterestArticleIdInterestIdCompoundUniqueInput = {
    articleId: number
    interestId: number
  }

  export type ArticleInterestCountOrderByAggregateInput = {
    articleId?: SortOrder
    interestId?: SortOrder
  }

  export type ArticleInterestAvgOrderByAggregateInput = {
    articleId?: SortOrder
    interestId?: SortOrder
  }

  export type ArticleInterestMaxOrderByAggregateInput = {
    articleId?: SortOrder
    interestId?: SortOrder
  }

  export type ArticleInterestMinOrderByAggregateInput = {
    articleId?: SortOrder
    interestId?: SortOrder
  }

  export type ArticleInterestSumOrderByAggregateInput = {
    articleId?: SortOrder
    interestId?: SortOrder
  }

  export type PublicistScalarRelationFilter = {
    is?: publicistWhereInput
    isNot?: publicistWhereInput
  }

  export type ArticleInterestListRelationFilter = {
    every?: ArticleInterestWhereInput
    some?: ArticleInterestWhereInput
    none?: ArticleInterestWhereInput
  }

  export type FavouritesListRelationFilter = {
    every?: favouritesWhereInput
    some?: favouritesWhereInput
    none?: favouritesWhereInput
  }

  export type ArticleInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favouritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articleOrderByRelevanceInput = {
    fields: articleOrderByRelevanceFieldEnum | articleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type articleAvgOrderByAggregateInput = {
    id?: SortOrder
    publicistId?: SortOrder
  }

  export type articleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type articleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type articleSumOrderByAggregateInput = {
    id?: SortOrder
    publicistId?: SortOrder
  }

  export type UserInterestListRelationFilter = {
    every?: UserInterestWhereInput
    some?: UserInterestWhereInput
    none?: UserInterestWhereInput
  }

  export type UserInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type interestOrderByRelevanceInput = {
    fields: interestOrderByRelevanceFieldEnum | interestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type interestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type interestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type interestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type interestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type interestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArticleListRelationFilter = {
    every?: articleWhereInput
    some?: articleWhereInput
    none?: articleWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type articleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type publicistOrderByRelevanceInput = {
    fields: publicistOrderByRelevanceFieldEnum | publicistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type publicistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type publicistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type publicistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type publicistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type publicistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PublicistListRelationFilter = {
    every?: publicistWhereInput
    some?: publicistWhereInput
    none?: publicistWhereInput
  }

  export type MediumsListRelationFilter = {
    every?: mediumsWhereInput
    some?: mediumsWhereInput
    none?: mediumsWhereInput
  }

  export type publicistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mediumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    isAdmin?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArticleNullableScalarRelationFilter = {
    is?: articleWhereInput | null
    isNot?: articleWhereInput | null
  }

  export type favouritesOrderByRelevanceInput = {
    fields: favouritesOrderByRelevanceFieldEnum | favouritesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type favouritesUser_idArticle_idCompoundUniqueInput = {
    user_id: string
    article_id: number
  }

  export type favouritesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
  }

  export type favouritesAvgOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
  }

  export type favouritesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
  }

  export type favouritesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
  }

  export type favouritesSumOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type mediumsOrderByRelevanceInput = {
    fields: mediumsOrderByRelevanceFieldEnum | mediumsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mediumsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    user_id?: SortOrder
  }

  export type mediumsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mediumsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    user_id?: SortOrder
  }

  export type mediumsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    user_id?: SortOrder
  }

  export type mediumsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type interestCreateNestedOneWithoutUsersInput = {
    create?: XOR<interestCreateWithoutUsersInput, interestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: interestCreateOrConnectWithoutUsersInput
    connect?: interestWhereUniqueInput
  }

  export type userCreateNestedOneWithoutInterestsInput = {
    create?: XOR<userCreateWithoutInterestsInput, userUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: userCreateOrConnectWithoutInterestsInput
    connect?: userWhereUniqueInput
  }

  export type interestUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<interestCreateWithoutUsersInput, interestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: interestCreateOrConnectWithoutUsersInput
    upsert?: interestUpsertWithoutUsersInput
    connect?: interestWhereUniqueInput
    update?: XOR<XOR<interestUpdateToOneWithWhereWithoutUsersInput, interestUpdateWithoutUsersInput>, interestUncheckedUpdateWithoutUsersInput>
  }

  export type userUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<userCreateWithoutInterestsInput, userUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: userCreateOrConnectWithoutInterestsInput
    upsert?: userUpsertWithoutInterestsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInterestsInput, userUpdateWithoutInterestsInput>, userUncheckedUpdateWithoutInterestsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type articleCreateNestedOneWithoutInterestsInput = {
    create?: XOR<articleCreateWithoutInterestsInput, articleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: articleCreateOrConnectWithoutInterestsInput
    connect?: articleWhereUniqueInput
  }

  export type interestCreateNestedOneWithoutArticlesInput = {
    create?: XOR<interestCreateWithoutArticlesInput, interestUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: interestCreateOrConnectWithoutArticlesInput
    connect?: interestWhereUniqueInput
  }

  export type articleUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<articleCreateWithoutInterestsInput, articleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: articleCreateOrConnectWithoutInterestsInput
    upsert?: articleUpsertWithoutInterestsInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutInterestsInput, articleUpdateWithoutInterestsInput>, articleUncheckedUpdateWithoutInterestsInput>
  }

  export type interestUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<interestCreateWithoutArticlesInput, interestUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: interestCreateOrConnectWithoutArticlesInput
    upsert?: interestUpsertWithoutArticlesInput
    connect?: interestWhereUniqueInput
    update?: XOR<XOR<interestUpdateToOneWithWhereWithoutArticlesInput, interestUpdateWithoutArticlesInput>, interestUncheckedUpdateWithoutArticlesInput>
  }

  export type publicistCreateNestedOneWithoutArticleInput = {
    create?: XOR<publicistCreateWithoutArticleInput, publicistUncheckedCreateWithoutArticleInput>
    connectOrCreate?: publicistCreateOrConnectWithoutArticleInput
    connect?: publicistWhereUniqueInput
  }

  export type ArticleInterestCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type favouritesCreateNestedManyWithoutArticleInput = {
    create?: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput> | favouritesCreateWithoutArticleInput[] | favouritesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutArticleInput | favouritesCreateOrConnectWithoutArticleInput[]
    createMany?: favouritesCreateManyArticleInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type ArticleInterestUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type favouritesUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput> | favouritesCreateWithoutArticleInput[] | favouritesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutArticleInput | favouritesCreateOrConnectWithoutArticleInput[]
    createMany?: favouritesCreateManyArticleInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type publicistUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<publicistCreateWithoutArticleInput, publicistUncheckedCreateWithoutArticleInput>
    connectOrCreate?: publicistCreateOrConnectWithoutArticleInput
    upsert?: publicistUpsertWithoutArticleInput
    connect?: publicistWhereUniqueInput
    update?: XOR<XOR<publicistUpdateToOneWithWhereWithoutArticleInput, publicistUpdateWithoutArticleInput>, publicistUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleInterestUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleInterestUpsertWithWhereUniqueWithoutArticleInput | ArticleInterestUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    set?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    disconnect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    delete?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    update?: ArticleInterestUpdateWithWhereUniqueWithoutArticleInput | ArticleInterestUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleInterestUpdateManyWithWhereWithoutArticleInput | ArticleInterestUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
  }

  export type favouritesUpdateManyWithoutArticleNestedInput = {
    create?: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput> | favouritesCreateWithoutArticleInput[] | favouritesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutArticleInput | favouritesCreateOrConnectWithoutArticleInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutArticleInput | favouritesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: favouritesCreateManyArticleInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutArticleInput | favouritesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutArticleInput | favouritesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleInterestUpsertWithWhereUniqueWithoutArticleInput | ArticleInterestUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    set?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    disconnect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    delete?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    update?: ArticleInterestUpdateWithWhereUniqueWithoutArticleInput | ArticleInterestUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleInterestUpdateManyWithWhereWithoutArticleInput | ArticleInterestUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
  }

  export type favouritesUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput> | favouritesCreateWithoutArticleInput[] | favouritesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutArticleInput | favouritesCreateOrConnectWithoutArticleInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutArticleInput | favouritesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: favouritesCreateManyArticleInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutArticleInput | favouritesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutArticleInput | favouritesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type ArticleInterestCreateNestedManyWithoutInterestInput = {
    create?: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput> | ArticleInterestCreateWithoutInterestInput[] | ArticleInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutInterestInput | ArticleInterestCreateOrConnectWithoutInterestInput[]
    createMany?: ArticleInterestCreateManyInterestInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type UserInterestCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type ArticleInterestUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput> | ArticleInterestCreateWithoutInterestInput[] | ArticleInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutInterestInput | ArticleInterestCreateOrConnectWithoutInterestInput[]
    createMany?: ArticleInterestCreateManyInterestInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type UserInterestUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type ArticleInterestUpdateManyWithoutInterestNestedInput = {
    create?: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput> | ArticleInterestCreateWithoutInterestInput[] | ArticleInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutInterestInput | ArticleInterestCreateOrConnectWithoutInterestInput[]
    upsert?: ArticleInterestUpsertWithWhereUniqueWithoutInterestInput | ArticleInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: ArticleInterestCreateManyInterestInputEnvelope
    set?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    disconnect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    delete?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    update?: ArticleInterestUpdateWithWhereUniqueWithoutInterestInput | ArticleInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: ArticleInterestUpdateManyWithWhereWithoutInterestInput | ArticleInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
  }

  export type UserInterestUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutInterestInput | UserInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutInterestInput | UserInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutInterestInput | UserInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type ArticleInterestUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput> | ArticleInterestCreateWithoutInterestInput[] | ArticleInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutInterestInput | ArticleInterestCreateOrConnectWithoutInterestInput[]
    upsert?: ArticleInterestUpsertWithWhereUniqueWithoutInterestInput | ArticleInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: ArticleInterestCreateManyInterestInputEnvelope
    set?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    disconnect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    delete?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
    update?: ArticleInterestUpdateWithWhereUniqueWithoutInterestInput | ArticleInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: ArticleInterestUpdateManyWithWhereWithoutInterestInput | ArticleInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
  }

  export type UserInterestUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutInterestInput | UserInterestUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutInterestInput | UserInterestUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutInterestInput | UserInterestUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type articleCreateNestedManyWithoutPublicistInput = {
    create?: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput> | articleCreateWithoutPublicistInput[] | articleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: articleCreateOrConnectWithoutPublicistInput | articleCreateOrConnectWithoutPublicistInput[]
    createMany?: articleCreateManyPublicistInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutPublicistInput = {
    create?: XOR<userCreateWithoutPublicistInput, userUncheckedCreateWithoutPublicistInput>
    connectOrCreate?: userCreateOrConnectWithoutPublicistInput
    connect?: userWhereUniqueInput
  }

  export type articleUncheckedCreateNestedManyWithoutPublicistInput = {
    create?: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput> | articleCreateWithoutPublicistInput[] | articleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: articleCreateOrConnectWithoutPublicistInput | articleCreateOrConnectWithoutPublicistInput[]
    createMany?: articleCreateManyPublicistInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleUpdateManyWithoutPublicistNestedInput = {
    create?: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput> | articleCreateWithoutPublicistInput[] | articleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: articleCreateOrConnectWithoutPublicistInput | articleCreateOrConnectWithoutPublicistInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutPublicistInput | articleUpsertWithWhereUniqueWithoutPublicistInput[]
    createMany?: articleCreateManyPublicistInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutPublicistInput | articleUpdateWithWhereUniqueWithoutPublicistInput[]
    updateMany?: articleUpdateManyWithWhereWithoutPublicistInput | articleUpdateManyWithWhereWithoutPublicistInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type userUpdateOneWithoutPublicistNestedInput = {
    create?: XOR<userCreateWithoutPublicistInput, userUncheckedCreateWithoutPublicistInput>
    connectOrCreate?: userCreateOrConnectWithoutPublicistInput
    upsert?: userUpsertWithoutPublicistInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPublicistInput, userUpdateWithoutPublicistInput>, userUncheckedUpdateWithoutPublicistInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type articleUncheckedUpdateManyWithoutPublicistNestedInput = {
    create?: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput> | articleCreateWithoutPublicistInput[] | articleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: articleCreateOrConnectWithoutPublicistInput | articleCreateOrConnectWithoutPublicistInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutPublicistInput | articleUpsertWithWhereUniqueWithoutPublicistInput[]
    createMany?: articleCreateManyPublicistInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutPublicistInput | articleUpdateWithWhereUniqueWithoutPublicistInput[]
    updateMany?: articleUpdateManyWithWhereWithoutPublicistInput | articleUpdateManyWithWhereWithoutPublicistInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type favouritesCreateNestedManyWithoutUserInput = {
    create?: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput> | favouritesCreateWithoutUserInput[] | favouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutUserInput | favouritesCreateOrConnectWithoutUserInput[]
    createMany?: favouritesCreateManyUserInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type publicistCreateNestedManyWithoutUserInput = {
    create?: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput> | publicistCreateWithoutUserInput[] | publicistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: publicistCreateOrConnectWithoutUserInput | publicistCreateOrConnectWithoutUserInput[]
    createMany?: publicistCreateManyUserInputEnvelope
    connect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
  }

  export type UserInterestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type mediumsCreateNestedManyWithoutUserInput = {
    create?: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput> | mediumsCreateWithoutUserInput[] | mediumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mediumsCreateOrConnectWithoutUserInput | mediumsCreateOrConnectWithoutUserInput[]
    createMany?: mediumsCreateManyUserInputEnvelope
    connect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
  }

  export type favouritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput> | favouritesCreateWithoutUserInput[] | favouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutUserInput | favouritesCreateOrConnectWithoutUserInput[]
    createMany?: favouritesCreateManyUserInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type publicistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput> | publicistCreateWithoutUserInput[] | publicistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: publicistCreateOrConnectWithoutUserInput | publicistCreateOrConnectWithoutUserInput[]
    createMany?: publicistCreateManyUserInputEnvelope
    connect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
  }

  export type UserInterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type mediumsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput> | mediumsCreateWithoutUserInput[] | mediumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mediumsCreateOrConnectWithoutUserInput | mediumsCreateOrConnectWithoutUserInput[]
    createMany?: mediumsCreateManyUserInputEnvelope
    connect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type favouritesUpdateManyWithoutUserNestedInput = {
    create?: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput> | favouritesCreateWithoutUserInput[] | favouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutUserInput | favouritesCreateOrConnectWithoutUserInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutUserInput | favouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favouritesCreateManyUserInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutUserInput | favouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutUserInput | favouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type publicistUpdateManyWithoutUserNestedInput = {
    create?: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput> | publicistCreateWithoutUserInput[] | publicistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: publicistCreateOrConnectWithoutUserInput | publicistCreateOrConnectWithoutUserInput[]
    upsert?: publicistUpsertWithWhereUniqueWithoutUserInput | publicistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: publicistCreateManyUserInputEnvelope
    set?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    disconnect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    delete?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    connect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    update?: publicistUpdateWithWhereUniqueWithoutUserInput | publicistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: publicistUpdateManyWithWhereWithoutUserInput | publicistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: publicistScalarWhereInput | publicistScalarWhereInput[]
  }

  export type UserInterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutUserInput | UserInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutUserInput | UserInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutUserInput | UserInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type mediumsUpdateManyWithoutUserNestedInput = {
    create?: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput> | mediumsCreateWithoutUserInput[] | mediumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mediumsCreateOrConnectWithoutUserInput | mediumsCreateOrConnectWithoutUserInput[]
    upsert?: mediumsUpsertWithWhereUniqueWithoutUserInput | mediumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: mediumsCreateManyUserInputEnvelope
    set?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    disconnect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    delete?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    connect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    update?: mediumsUpdateWithWhereUniqueWithoutUserInput | mediumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: mediumsUpdateManyWithWhereWithoutUserInput | mediumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: mediumsScalarWhereInput | mediumsScalarWhereInput[]
  }

  export type favouritesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput> | favouritesCreateWithoutUserInput[] | favouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutUserInput | favouritesCreateOrConnectWithoutUserInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutUserInput | favouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favouritesCreateManyUserInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutUserInput | favouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutUserInput | favouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type publicistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput> | publicistCreateWithoutUserInput[] | publicistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: publicistCreateOrConnectWithoutUserInput | publicistCreateOrConnectWithoutUserInput[]
    upsert?: publicistUpsertWithWhereUniqueWithoutUserInput | publicistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: publicistCreateManyUserInputEnvelope
    set?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    disconnect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    delete?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    connect?: publicistWhereUniqueInput | publicistWhereUniqueInput[]
    update?: publicistUpdateWithWhereUniqueWithoutUserInput | publicistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: publicistUpdateManyWithWhereWithoutUserInput | publicistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: publicistScalarWhereInput | publicistScalarWhereInput[]
  }

  export type UserInterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    upsert?: UserInterestUpsertWithWhereUniqueWithoutUserInput | UserInterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    set?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    disconnect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    delete?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
    update?: UserInterestUpdateWithWhereUniqueWithoutUserInput | UserInterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInterestUpdateManyWithWhereWithoutUserInput | UserInterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
  }

  export type mediumsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput> | mediumsCreateWithoutUserInput[] | mediumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: mediumsCreateOrConnectWithoutUserInput | mediumsCreateOrConnectWithoutUserInput[]
    upsert?: mediumsUpsertWithWhereUniqueWithoutUserInput | mediumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: mediumsCreateManyUserInputEnvelope
    set?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    disconnect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    delete?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    connect?: mediumsWhereUniqueInput | mediumsWhereUniqueInput[]
    update?: mediumsUpdateWithWhereUniqueWithoutUserInput | mediumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: mediumsUpdateManyWithWhereWithoutUserInput | mediumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: mediumsScalarWhereInput | mediumsScalarWhereInput[]
  }

  export type articleCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<articleCreateWithoutFavouritesInput, articleUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: articleCreateOrConnectWithoutFavouritesInput
    connect?: articleWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<userCreateWithoutFavouritesInput, userUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavouritesInput
    connect?: userWhereUniqueInput
  }

  export type articleUpdateOneWithoutFavouritesNestedInput = {
    create?: XOR<articleCreateWithoutFavouritesInput, articleUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: articleCreateOrConnectWithoutFavouritesInput
    upsert?: articleUpsertWithoutFavouritesInput
    disconnect?: articleWhereInput | boolean
    delete?: articleWhereInput | boolean
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutFavouritesInput, articleUpdateWithoutFavouritesInput>, articleUncheckedUpdateWithoutFavouritesInput>
  }

  export type userUpdateOneWithoutFavouritesNestedInput = {
    create?: XOR<userCreateWithoutFavouritesInput, userUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavouritesInput
    upsert?: userUpsertWithoutFavouritesInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFavouritesInput, userUpdateWithoutFavouritesInput>, userUncheckedUpdateWithoutFavouritesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutMediumsInput = {
    create?: XOR<userCreateWithoutMediumsInput, userUncheckedCreateWithoutMediumsInput>
    connectOrCreate?: userCreateOrConnectWithoutMediumsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutMediumsNestedInput = {
    create?: XOR<userCreateWithoutMediumsInput, userUncheckedCreateWithoutMediumsInput>
    connectOrCreate?: userCreateOrConnectWithoutMediumsInput
    upsert?: userUpsertWithoutMediumsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMediumsInput, userUpdateWithoutMediumsInput>, userUncheckedUpdateWithoutMediumsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type interestCreateWithoutUsersInput = {
    name: string
    articles?: ArticleInterestCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    articles?: ArticleInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestCreateOrConnectWithoutUsersInput = {
    where: interestWhereUniqueInput
    create: XOR<interestCreateWithoutUsersInput, interestUncheckedCreateWithoutUsersInput>
  }

  export type userCreateWithoutInterestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesCreateNestedManyWithoutUserInput
    publicist?: publicistCreateNestedManyWithoutUserInput
    mediums?: mediumsCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutInterestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesUncheckedCreateNestedManyWithoutUserInput
    publicist?: publicistUncheckedCreateNestedManyWithoutUserInput
    mediums?: mediumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutInterestsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInterestsInput, userUncheckedCreateWithoutInterestsInput>
  }

  export type interestUpsertWithoutUsersInput = {
    update: XOR<interestUpdateWithoutUsersInput, interestUncheckedUpdateWithoutUsersInput>
    create: XOR<interestCreateWithoutUsersInput, interestUncheckedCreateWithoutUsersInput>
    where?: interestWhereInput
  }

  export type interestUpdateToOneWithWhereWithoutUsersInput = {
    where?: interestWhereInput
    data: XOR<interestUpdateWithoutUsersInput, interestUncheckedUpdateWithoutUsersInput>
  }

  export type interestUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type userUpsertWithoutInterestsInput = {
    update: XOR<userUpdateWithoutInterestsInput, userUncheckedUpdateWithoutInterestsInput>
    create: XOR<userCreateWithoutInterestsInput, userUncheckedCreateWithoutInterestsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInterestsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInterestsInput, userUncheckedUpdateWithoutInterestsInput>
  }

  export type userUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUpdateManyWithoutUserNestedInput
    publicist?: publicistUpdateManyWithoutUserNestedInput
    mediums?: mediumsUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUncheckedUpdateManyWithoutUserNestedInput
    publicist?: publicistUncheckedUpdateManyWithoutUserNestedInput
    mediums?: mediumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type articleCreateWithoutInterestsInput = {
    title: string
    content: string
    publicist: publicistCreateNestedOneWithoutArticleInput
    favourites?: favouritesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutInterestsInput = {
    id?: number
    title: string
    publicistId: number
    content: string
    favourites?: favouritesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutInterestsInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutInterestsInput, articleUncheckedCreateWithoutInterestsInput>
  }

  export type interestCreateWithoutArticlesInput = {
    name: string
    users?: UserInterestCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
    users?: UserInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestCreateOrConnectWithoutArticlesInput = {
    where: interestWhereUniqueInput
    create: XOR<interestCreateWithoutArticlesInput, interestUncheckedCreateWithoutArticlesInput>
  }

  export type articleUpsertWithoutInterestsInput = {
    update: XOR<articleUpdateWithoutInterestsInput, articleUncheckedUpdateWithoutInterestsInput>
    create: XOR<articleCreateWithoutInterestsInput, articleUncheckedCreateWithoutInterestsInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutInterestsInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutInterestsInput, articleUncheckedUpdateWithoutInterestsInput>
  }

  export type articleUpdateWithoutInterestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publicist?: publicistUpdateOneRequiredWithoutArticleNestedInput
    favourites?: favouritesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    favourites?: favouritesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type interestUpsertWithoutArticlesInput = {
    update: XOR<interestUpdateWithoutArticlesInput, interestUncheckedUpdateWithoutArticlesInput>
    create: XOR<interestCreateWithoutArticlesInput, interestUncheckedCreateWithoutArticlesInput>
    where?: interestWhereInput
  }

  export type interestUpdateToOneWithWhereWithoutArticlesInput = {
    where?: interestWhereInput
    data: XOR<interestUpdateWithoutArticlesInput, interestUncheckedUpdateWithoutArticlesInput>
  }

  export type interestUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type publicistCreateWithoutArticleInput = {
    name: string
    user?: userCreateNestedOneWithoutPublicistInput
  }

  export type publicistUncheckedCreateWithoutArticleInput = {
    id?: number
    name: string
    user_id?: string | null
  }

  export type publicistCreateOrConnectWithoutArticleInput = {
    where: publicistWhereUniqueInput
    create: XOR<publicistCreateWithoutArticleInput, publicistUncheckedCreateWithoutArticleInput>
  }

  export type ArticleInterestCreateWithoutArticleInput = {
    interest: interestCreateNestedOneWithoutArticlesInput
  }

  export type ArticleInterestUncheckedCreateWithoutArticleInput = {
    interestId: number
  }

  export type ArticleInterestCreateOrConnectWithoutArticleInput = {
    where: ArticleInterestWhereUniqueInput
    create: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput>
  }

  export type ArticleInterestCreateManyArticleInputEnvelope = {
    data: ArticleInterestCreateManyArticleInput | ArticleInterestCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type favouritesCreateWithoutArticleInput = {
    user?: userCreateNestedOneWithoutFavouritesInput
  }

  export type favouritesUncheckedCreateWithoutArticleInput = {
    id?: number
    user_id?: string | null
  }

  export type favouritesCreateOrConnectWithoutArticleInput = {
    where: favouritesWhereUniqueInput
    create: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput>
  }

  export type favouritesCreateManyArticleInputEnvelope = {
    data: favouritesCreateManyArticleInput | favouritesCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type publicistUpsertWithoutArticleInput = {
    update: XOR<publicistUpdateWithoutArticleInput, publicistUncheckedUpdateWithoutArticleInput>
    create: XOR<publicistCreateWithoutArticleInput, publicistUncheckedCreateWithoutArticleInput>
    where?: publicistWhereInput
  }

  export type publicistUpdateToOneWithWhereWithoutArticleInput = {
    where?: publicistWhereInput
    data: XOR<publicistUpdateWithoutArticleInput, publicistUncheckedUpdateWithoutArticleInput>
  }

  export type publicistUpdateWithoutArticleInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneWithoutPublicistNestedInput
  }

  export type publicistUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleInterestUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleInterestWhereUniqueInput
    update: XOR<ArticleInterestUpdateWithoutArticleInput, ArticleInterestUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput>
  }

  export type ArticleInterestUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleInterestWhereUniqueInput
    data: XOR<ArticleInterestUpdateWithoutArticleInput, ArticleInterestUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleInterestUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleInterestScalarWhereInput
    data: XOR<ArticleInterestUpdateManyMutationInput, ArticleInterestUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleInterestScalarWhereInput = {
    AND?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
    OR?: ArticleInterestScalarWhereInput[]
    NOT?: ArticleInterestScalarWhereInput | ArticleInterestScalarWhereInput[]
    articleId?: IntFilter<"ArticleInterest"> | number
    interestId?: IntFilter<"ArticleInterest"> | number
  }

  export type favouritesUpsertWithWhereUniqueWithoutArticleInput = {
    where: favouritesWhereUniqueInput
    update: XOR<favouritesUpdateWithoutArticleInput, favouritesUncheckedUpdateWithoutArticleInput>
    create: XOR<favouritesCreateWithoutArticleInput, favouritesUncheckedCreateWithoutArticleInput>
  }

  export type favouritesUpdateWithWhereUniqueWithoutArticleInput = {
    where: favouritesWhereUniqueInput
    data: XOR<favouritesUpdateWithoutArticleInput, favouritesUncheckedUpdateWithoutArticleInput>
  }

  export type favouritesUpdateManyWithWhereWithoutArticleInput = {
    where: favouritesScalarWhereInput
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyWithoutArticleInput>
  }

  export type favouritesScalarWhereInput = {
    AND?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
    OR?: favouritesScalarWhereInput[]
    NOT?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
    id?: IntFilter<"favourites"> | number
    user_id?: StringNullableFilter<"favourites"> | string | null
    article_id?: IntNullableFilter<"favourites"> | number | null
  }

  export type ArticleInterestCreateWithoutInterestInput = {
    article: articleCreateNestedOneWithoutInterestsInput
  }

  export type ArticleInterestUncheckedCreateWithoutInterestInput = {
    articleId: number
  }

  export type ArticleInterestCreateOrConnectWithoutInterestInput = {
    where: ArticleInterestWhereUniqueInput
    create: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput>
  }

  export type ArticleInterestCreateManyInterestInputEnvelope = {
    data: ArticleInterestCreateManyInterestInput | ArticleInterestCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type UserInterestCreateWithoutInterestInput = {
    user: userCreateNestedOneWithoutInterestsInput
  }

  export type UserInterestUncheckedCreateWithoutInterestInput = {
    userId: string
  }

  export type UserInterestCreateOrConnectWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    create: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestCreateManyInterestInputEnvelope = {
    data: UserInterestCreateManyInterestInput | UserInterestCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type ArticleInterestUpsertWithWhereUniqueWithoutInterestInput = {
    where: ArticleInterestWhereUniqueInput
    update: XOR<ArticleInterestUpdateWithoutInterestInput, ArticleInterestUncheckedUpdateWithoutInterestInput>
    create: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput>
  }

  export type ArticleInterestUpdateWithWhereUniqueWithoutInterestInput = {
    where: ArticleInterestWhereUniqueInput
    data: XOR<ArticleInterestUpdateWithoutInterestInput, ArticleInterestUncheckedUpdateWithoutInterestInput>
  }

  export type ArticleInterestUpdateManyWithWhereWithoutInterestInput = {
    where: ArticleInterestScalarWhereInput
    data: XOR<ArticleInterestUpdateManyMutationInput, ArticleInterestUncheckedUpdateManyWithoutInterestInput>
  }

  export type UserInterestUpsertWithWhereUniqueWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    update: XOR<UserInterestUpdateWithoutInterestInput, UserInterestUncheckedUpdateWithoutInterestInput>
    create: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestUpdateWithWhereUniqueWithoutInterestInput = {
    where: UserInterestWhereUniqueInput
    data: XOR<UserInterestUpdateWithoutInterestInput, UserInterestUncheckedUpdateWithoutInterestInput>
  }

  export type UserInterestUpdateManyWithWhereWithoutInterestInput = {
    where: UserInterestScalarWhereInput
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyWithoutInterestInput>
  }

  export type UserInterestScalarWhereInput = {
    AND?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    OR?: UserInterestScalarWhereInput[]
    NOT?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
  }

  export type articleCreateWithoutPublicistInput = {
    title: string
    content: string
    interests?: ArticleInterestCreateNestedManyWithoutArticleInput
    favourites?: favouritesCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutPublicistInput = {
    id?: number
    title: string
    content: string
    interests?: ArticleInterestUncheckedCreateNestedManyWithoutArticleInput
    favourites?: favouritesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutPublicistInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput>
  }

  export type articleCreateManyPublicistInputEnvelope = {
    data: articleCreateManyPublicistInput | articleCreateManyPublicistInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutPublicistInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesCreateNestedManyWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
    mediums?: mediumsCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPublicistInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesUncheckedCreateNestedManyWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
    mediums?: mediumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPublicistInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPublicistInput, userUncheckedCreateWithoutPublicistInput>
  }

  export type articleUpsertWithWhereUniqueWithoutPublicistInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutPublicistInput, articleUncheckedUpdateWithoutPublicistInput>
    create: XOR<articleCreateWithoutPublicistInput, articleUncheckedCreateWithoutPublicistInput>
  }

  export type articleUpdateWithWhereUniqueWithoutPublicistInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutPublicistInput, articleUncheckedUpdateWithoutPublicistInput>
  }

  export type articleUpdateManyWithWhereWithoutPublicistInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutPublicistInput>
  }

  export type articleScalarWhereInput = {
    AND?: articleScalarWhereInput | articleScalarWhereInput[]
    OR?: articleScalarWhereInput[]
    NOT?: articleScalarWhereInput | articleScalarWhereInput[]
    id?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    publicistId?: IntFilter<"article"> | number
    content?: StringFilter<"article"> | string
  }

  export type userUpsertWithoutPublicistInput = {
    update: XOR<userUpdateWithoutPublicistInput, userUncheckedUpdateWithoutPublicistInput>
    create: XOR<userCreateWithoutPublicistInput, userUncheckedCreateWithoutPublicistInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPublicistInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPublicistInput, userUncheckedUpdateWithoutPublicistInput>
  }

  export type userUpdateWithoutPublicistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUpdateManyWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
    mediums?: mediumsUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPublicistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUncheckedUpdateManyWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
    mediums?: mediumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type favouritesCreateWithoutUserInput = {
    article?: articleCreateNestedOneWithoutFavouritesInput
  }

  export type favouritesUncheckedCreateWithoutUserInput = {
    id?: number
    article_id?: number | null
  }

  export type favouritesCreateOrConnectWithoutUserInput = {
    where: favouritesWhereUniqueInput
    create: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput>
  }

  export type favouritesCreateManyUserInputEnvelope = {
    data: favouritesCreateManyUserInput | favouritesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type publicistCreateWithoutUserInput = {
    name: string
    article?: articleCreateNestedManyWithoutPublicistInput
  }

  export type publicistUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    article?: articleUncheckedCreateNestedManyWithoutPublicistInput
  }

  export type publicistCreateOrConnectWithoutUserInput = {
    where: publicistWhereUniqueInput
    create: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput>
  }

  export type publicistCreateManyUserInputEnvelope = {
    data: publicistCreateManyUserInput | publicistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserInterestCreateWithoutUserInput = {
    interest: interestCreateNestedOneWithoutUsersInput
  }

  export type UserInterestUncheckedCreateWithoutUserInput = {
    interestId: number
  }

  export type UserInterestCreateOrConnectWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    create: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput>
  }

  export type UserInterestCreateManyUserInputEnvelope = {
    data: UserInterestCreateManyUserInput | UserInterestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type mediumsCreateWithoutUserInput = {
    name: string
    active: boolean
  }

  export type mediumsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    active: boolean
  }

  export type mediumsCreateOrConnectWithoutUserInput = {
    where: mediumsWhereUniqueInput
    create: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput>
  }

  export type mediumsCreateManyUserInputEnvelope = {
    data: mediumsCreateManyUserInput | mediumsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type favouritesUpsertWithWhereUniqueWithoutUserInput = {
    where: favouritesWhereUniqueInput
    update: XOR<favouritesUpdateWithoutUserInput, favouritesUncheckedUpdateWithoutUserInput>
    create: XOR<favouritesCreateWithoutUserInput, favouritesUncheckedCreateWithoutUserInput>
  }

  export type favouritesUpdateWithWhereUniqueWithoutUserInput = {
    where: favouritesWhereUniqueInput
    data: XOR<favouritesUpdateWithoutUserInput, favouritesUncheckedUpdateWithoutUserInput>
  }

  export type favouritesUpdateManyWithWhereWithoutUserInput = {
    where: favouritesScalarWhereInput
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyWithoutUserInput>
  }

  export type publicistUpsertWithWhereUniqueWithoutUserInput = {
    where: publicistWhereUniqueInput
    update: XOR<publicistUpdateWithoutUserInput, publicistUncheckedUpdateWithoutUserInput>
    create: XOR<publicistCreateWithoutUserInput, publicistUncheckedCreateWithoutUserInput>
  }

  export type publicistUpdateWithWhereUniqueWithoutUserInput = {
    where: publicistWhereUniqueInput
    data: XOR<publicistUpdateWithoutUserInput, publicistUncheckedUpdateWithoutUserInput>
  }

  export type publicistUpdateManyWithWhereWithoutUserInput = {
    where: publicistScalarWhereInput
    data: XOR<publicistUpdateManyMutationInput, publicistUncheckedUpdateManyWithoutUserInput>
  }

  export type publicistScalarWhereInput = {
    AND?: publicistScalarWhereInput | publicistScalarWhereInput[]
    OR?: publicistScalarWhereInput[]
    NOT?: publicistScalarWhereInput | publicistScalarWhereInput[]
    id?: IntFilter<"publicist"> | number
    name?: StringFilter<"publicist"> | string
    user_id?: StringNullableFilter<"publicist"> | string | null
  }

  export type UserInterestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    update: XOR<UserInterestUpdateWithoutUserInput, UserInterestUncheckedUpdateWithoutUserInput>
    create: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput>
  }

  export type UserInterestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserInterestWhereUniqueInput
    data: XOR<UserInterestUpdateWithoutUserInput, UserInterestUncheckedUpdateWithoutUserInput>
  }

  export type UserInterestUpdateManyWithWhereWithoutUserInput = {
    where: UserInterestScalarWhereInput
    data: XOR<UserInterestUpdateManyMutationInput, UserInterestUncheckedUpdateManyWithoutUserInput>
  }

  export type mediumsUpsertWithWhereUniqueWithoutUserInput = {
    where: mediumsWhereUniqueInput
    update: XOR<mediumsUpdateWithoutUserInput, mediumsUncheckedUpdateWithoutUserInput>
    create: XOR<mediumsCreateWithoutUserInput, mediumsUncheckedCreateWithoutUserInput>
  }

  export type mediumsUpdateWithWhereUniqueWithoutUserInput = {
    where: mediumsWhereUniqueInput
    data: XOR<mediumsUpdateWithoutUserInput, mediumsUncheckedUpdateWithoutUserInput>
  }

  export type mediumsUpdateManyWithWhereWithoutUserInput = {
    where: mediumsScalarWhereInput
    data: XOR<mediumsUpdateManyMutationInput, mediumsUncheckedUpdateManyWithoutUserInput>
  }

  export type mediumsScalarWhereInput = {
    AND?: mediumsScalarWhereInput | mediumsScalarWhereInput[]
    OR?: mediumsScalarWhereInput[]
    NOT?: mediumsScalarWhereInput | mediumsScalarWhereInput[]
    id?: IntFilter<"mediums"> | number
    name?: StringFilter<"mediums"> | string
    active?: BoolFilter<"mediums"> | boolean
    user_id?: StringFilter<"mediums"> | string
  }

  export type articleCreateWithoutFavouritesInput = {
    title: string
    content: string
    publicist: publicistCreateNestedOneWithoutArticleInput
    interests?: ArticleInterestCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutFavouritesInput = {
    id?: number
    title: string
    publicistId: number
    content: string
    interests?: ArticleInterestUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutFavouritesInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutFavouritesInput, articleUncheckedCreateWithoutFavouritesInput>
  }

  export type userCreateWithoutFavouritesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    publicist?: publicistCreateNestedManyWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
    mediums?: mediumsCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFavouritesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    publicist?: publicistUncheckedCreateNestedManyWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
    mediums?: mediumsUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFavouritesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFavouritesInput, userUncheckedCreateWithoutFavouritesInput>
  }

  export type articleUpsertWithoutFavouritesInput = {
    update: XOR<articleUpdateWithoutFavouritesInput, articleUncheckedUpdateWithoutFavouritesInput>
    create: XOR<articleCreateWithoutFavouritesInput, articleUncheckedCreateWithoutFavouritesInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutFavouritesInput, articleUncheckedUpdateWithoutFavouritesInput>
  }

  export type articleUpdateWithoutFavouritesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publicist?: publicistUpdateOneRequiredWithoutArticleNestedInput
    interests?: ArticleInterestUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type userUpsertWithoutFavouritesInput = {
    update: XOR<userUpdateWithoutFavouritesInput, userUncheckedUpdateWithoutFavouritesInput>
    create: XOR<userCreateWithoutFavouritesInput, userUncheckedCreateWithoutFavouritesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFavouritesInput, userUncheckedUpdateWithoutFavouritesInput>
  }

  export type userUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    publicist?: publicistUpdateManyWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
    mediums?: mediumsUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    publicist?: publicistUncheckedUpdateManyWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
    mediums?: mediumsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutMediumsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesCreateNestedManyWithoutUserInput
    publicist?: publicistCreateNestedManyWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMediumsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    isAdmin?: boolean
    favourites?: favouritesUncheckedCreateNestedManyWithoutUserInput
    publicist?: publicistUncheckedCreateNestedManyWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMediumsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMediumsInput, userUncheckedCreateWithoutMediumsInput>
  }

  export type userUpsertWithoutMediumsInput = {
    update: XOR<userUpdateWithoutMediumsInput, userUncheckedUpdateWithoutMediumsInput>
    create: XOR<userCreateWithoutMediumsInput, userUncheckedCreateWithoutMediumsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMediumsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMediumsInput, userUncheckedUpdateWithoutMediumsInput>
  }

  export type userUpdateWithoutMediumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUpdateManyWithoutUserNestedInput
    publicist?: publicistUpdateManyWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMediumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    favourites?: favouritesUncheckedUpdateManyWithoutUserNestedInput
    publicist?: publicistUncheckedUpdateManyWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleInterestCreateManyArticleInput = {
    interestId: number
  }

  export type favouritesCreateManyArticleInput = {
    id?: number
    user_id?: string | null
  }

  export type ArticleInterestUpdateWithoutArticleInput = {
    interest?: interestUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleInterestUncheckedUpdateWithoutArticleInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestUncheckedUpdateManyWithoutArticleInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type favouritesUpdateWithoutArticleInput = {
    user?: userUpdateOneWithoutFavouritesNestedInput
  }

  export type favouritesUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favouritesUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleInterestCreateManyInterestInput = {
    articleId: number
  }

  export type UserInterestCreateManyInterestInput = {
    userId: string
  }

  export type ArticleInterestUpdateWithoutInterestInput = {
    article?: articleUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type ArticleInterestUncheckedUpdateWithoutInterestInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestUncheckedUpdateManyWithoutInterestInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInterestUpdateWithoutInterestInput = {
    user?: userUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserInterestUncheckedUpdateManyWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type articleCreateManyPublicistInput = {
    id?: number
    title: string
    content: string
  }

  export type articleUpdateWithoutPublicistInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUpdateManyWithoutArticleNestedInput
    favourites?: favouritesUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutPublicistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput
    favourites?: favouritesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutPublicistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type favouritesCreateManyUserInput = {
    id?: number
    article_id?: number | null
  }

  export type publicistCreateManyUserInput = {
    id?: number
    name: string
  }

  export type UserInterestCreateManyUserInput = {
    interestId: number
  }

  export type mediumsCreateManyUserInput = {
    id?: number
    name: string
    active: boolean
  }

  export type favouritesUpdateWithoutUserInput = {
    article?: articleUpdateOneWithoutFavouritesNestedInput
  }

  export type favouritesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type favouritesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type publicistUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    article?: articleUpdateManyWithoutPublicistNestedInput
  }

  export type publicistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    article?: articleUncheckedUpdateManyWithoutPublicistNestedInput
  }

  export type publicistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserInterestUpdateWithoutUserInput = {
    interest?: interestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutUserInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInterestUncheckedUpdateManyWithoutUserInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type mediumsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type mediumsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type mediumsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
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