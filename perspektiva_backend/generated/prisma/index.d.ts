
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Publicist
 * 
 */
export type Publicist = $Result.DefaultSelection<Prisma.$PublicistPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicist`: Exposes CRUD operations for the **Publicist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicists
    * const publicists = await prisma.publicist.findMany()
    * ```
    */
  get publicist(): Prisma.PublicistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;

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
    User: 'User',
    Admin: 'Admin',
    Publicist: 'Publicist',
    Article: 'Article',
    Interest: 'Interest',
    UserInterest: 'UserInterest',
    ArticleInterest: 'ArticleInterest'
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
      modelProps: "user" | "admin" | "publicist" | "article" | "interest" | "userInterest" | "articleInterest"
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
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Publicist: {
        payload: Prisma.$PublicistPayload<ExtArgs>
        fields: Prisma.PublicistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          findFirst: {
            args: Prisma.PublicistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          findMany: {
            args: Prisma.PublicistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>[]
          }
          create: {
            args: Prisma.PublicistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          createMany: {
            args: Prisma.PublicistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PublicistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          update: {
            args: Prisma.PublicistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          deleteMany: {
            args: Prisma.PublicistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublicistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicistPayload>
          }
          aggregate: {
            args: Prisma.PublicistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicist>
          }
          groupBy: {
            args: Prisma.PublicistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicistCountArgs<ExtArgs>
            result: $Utils.Optional<PublicistCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
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
    user?: UserOmit
    admin?: AdminOmit
    publicist?: PublicistOmit
    article?: ArticleOmit
    interest?: InterestOmit
    userInterest?: UserInterestOmit
    articleInterest?: ArticleInterestOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    interests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
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
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }


  /**
   * Count Type PublicistCountOutputType
   */

  export type PublicistCountOutputType = {
    articles: number
  }

  export type PublicistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | PublicistCountOutputTypeCountArticlesArgs
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
  export type PublicistCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    interests: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | ArticleCountOutputTypeCountInterestsArgs
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
   * Count Type InterestCountOutputType
   */

  export type InterestCountOutputType = {
    users: number
    articles: number
  }

  export type InterestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | InterestCountOutputTypeCountUsersArgs
    articles?: boolean | InterestCountOutputTypeCountArticlesArgs
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
  export type InterestCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestWhereInput
  }

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInterestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
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
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      interests: Prisma.$UserInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
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
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    userId: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Publicist
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
  }

  export type PublicistMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PublicistCountAggregateOutputType = {
    id: number
    name: number
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
  }

  export type PublicistMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PublicistCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PublicistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicist to aggregate.
     */
    where?: PublicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicists to fetch.
     */
    orderBy?: PublicistOrderByWithRelationInput | PublicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicists
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




  export type PublicistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicistWhereInput
    orderBy?: PublicistOrderByWithAggregationInput | PublicistOrderByWithAggregationInput[]
    by: PublicistScalarFieldEnum[] | PublicistScalarFieldEnum
    having?: PublicistScalarWhereWithAggregatesInput
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
    _count: PublicistCountAggregateOutputType | null
    _avg: PublicistAvgAggregateOutputType | null
    _sum: PublicistSumAggregateOutputType | null
    _min: PublicistMinAggregateOutputType | null
    _max: PublicistMaxAggregateOutputType | null
  }

  type GetPublicistGroupByPayload<T extends PublicistGroupByArgs> = Prisma.PrismaPromise<
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


  export type PublicistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | Publicist$articlesArgs<ExtArgs>
    _count?: boolean | PublicistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicist"]>



  export type PublicistSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PublicistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["publicist"]>
  export type PublicistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Publicist$articlesArgs<ExtArgs>
    _count?: boolean | PublicistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PublicistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicist"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["publicist"]>
    composites: {}
  }

  type PublicistGetPayload<S extends boolean | null | undefined | PublicistDefaultArgs> = $Result.GetResult<Prisma.$PublicistPayload, S>

  type PublicistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicistCountAggregateInputType | true
    }

  export interface PublicistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicist'], meta: { name: 'Publicist' } }
    /**
     * Find zero or one Publicist that matches the filter.
     * @param {PublicistFindUniqueArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicistFindUniqueArgs>(args: SelectSubset<T, PublicistFindUniqueArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicistFindUniqueOrThrowArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicistFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistFindFirstArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicistFindFirstArgs>(args?: SelectSubset<T, PublicistFindFirstArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistFindFirstOrThrowArgs} args - Arguments to find a Publicist
     * @example
     * // Get one Publicist
     * const publicist = await prisma.publicist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicistFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends PublicistFindManyArgs>(args?: SelectSubset<T, PublicistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicist.
     * @param {PublicistCreateArgs} args - Arguments to create a Publicist.
     * @example
     * // Create one Publicist
     * const Publicist = await prisma.publicist.create({
     *   data: {
     *     // ... data to create a Publicist
     *   }
     * })
     * 
     */
    create<T extends PublicistCreateArgs>(args: SelectSubset<T, PublicistCreateArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicists.
     * @param {PublicistCreateManyArgs} args - Arguments to create many Publicists.
     * @example
     * // Create many Publicists
     * const publicist = await prisma.publicist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicistCreateManyArgs>(args?: SelectSubset<T, PublicistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publicist.
     * @param {PublicistDeleteArgs} args - Arguments to delete one Publicist.
     * @example
     * // Delete one Publicist
     * const Publicist = await prisma.publicist.delete({
     *   where: {
     *     // ... filter to delete one Publicist
     *   }
     * })
     * 
     */
    delete<T extends PublicistDeleteArgs>(args: SelectSubset<T, PublicistDeleteArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicist.
     * @param {PublicistUpdateArgs} args - Arguments to update one Publicist.
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
    update<T extends PublicistUpdateArgs>(args: SelectSubset<T, PublicistUpdateArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicists.
     * @param {PublicistDeleteManyArgs} args - Arguments to filter Publicists to delete.
     * @example
     * // Delete a few Publicists
     * const { count } = await prisma.publicist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicistDeleteManyArgs>(args?: SelectSubset<T, PublicistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends PublicistUpdateManyArgs>(args: SelectSubset<T, PublicistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publicist.
     * @param {PublicistUpsertArgs} args - Arguments to update or create a Publicist.
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
    upsert<T extends PublicistUpsertArgs>(args: SelectSubset<T, PublicistUpsertArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicistCountArgs} args - Arguments to filter Publicists to count.
     * @example
     * // Count the number of Publicists
     * const count = await prisma.publicist.count({
     *   where: {
     *     // ... the filter for the Publicists we want to count
     *   }
     * })
    **/
    count<T extends PublicistCountArgs>(
      args?: Subset<T, PublicistCountArgs>,
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
     * @param {PublicistGroupByArgs} args - Group by arguments.
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
      T extends PublicistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicistGroupByArgs['orderBy'] }
        : { orderBy?: PublicistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicist model
   */
  readonly fields: PublicistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Publicist$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Publicist$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Publicist model
   */
  interface PublicistFieldRefs {
    readonly id: FieldRef<"Publicist", 'Int'>
    readonly name: FieldRef<"Publicist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publicist findUnique
   */
  export type PublicistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter, which Publicist to fetch.
     */
    where: PublicistWhereUniqueInput
  }

  /**
   * Publicist findUniqueOrThrow
   */
  export type PublicistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter, which Publicist to fetch.
     */
    where: PublicistWhereUniqueInput
  }

  /**
   * Publicist findFirst
   */
  export type PublicistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter, which Publicist to fetch.
     */
    where?: PublicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicists to fetch.
     */
    orderBy?: PublicistOrderByWithRelationInput | PublicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicists.
     */
    cursor?: PublicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicists.
     */
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * Publicist findFirstOrThrow
   */
  export type PublicistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter, which Publicist to fetch.
     */
    where?: PublicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicists to fetch.
     */
    orderBy?: PublicistOrderByWithRelationInput | PublicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicists.
     */
    cursor?: PublicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicists.
     */
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * Publicist findMany
   */
  export type PublicistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter, which Publicists to fetch.
     */
    where?: PublicistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicists to fetch.
     */
    orderBy?: PublicistOrderByWithRelationInput | PublicistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicists.
     */
    cursor?: PublicistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicists.
     */
    skip?: number
    distinct?: PublicistScalarFieldEnum | PublicistScalarFieldEnum[]
  }

  /**
   * Publicist create
   */
  export type PublicistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicist.
     */
    data: XOR<PublicistCreateInput, PublicistUncheckedCreateInput>
  }

  /**
   * Publicist createMany
   */
  export type PublicistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicists.
     */
    data: PublicistCreateManyInput | PublicistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publicist update
   */
  export type PublicistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicist.
     */
    data: XOR<PublicistUpdateInput, PublicistUncheckedUpdateInput>
    /**
     * Choose, which Publicist to update.
     */
    where: PublicistWhereUniqueInput
  }

  /**
   * Publicist updateMany
   */
  export type PublicistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicists.
     */
    data: XOR<PublicistUpdateManyMutationInput, PublicistUncheckedUpdateManyInput>
    /**
     * Filter which Publicists to update
     */
    where?: PublicistWhereInput
    /**
     * Limit how many Publicists to update.
     */
    limit?: number
  }

  /**
   * Publicist upsert
   */
  export type PublicistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicist to update in case it exists.
     */
    where: PublicistWhereUniqueInput
    /**
     * In case the Publicist found by the `where` argument doesn't exist, create a new Publicist with this data.
     */
    create: XOR<PublicistCreateInput, PublicistUncheckedCreateInput>
    /**
     * In case the Publicist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicistUpdateInput, PublicistUncheckedUpdateInput>
  }

  /**
   * Publicist delete
   */
  export type PublicistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
    /**
     * Filter which Publicist to delete.
     */
    where: PublicistWhereUniqueInput
  }

  /**
   * Publicist deleteMany
   */
  export type PublicistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicists to delete
     */
    where?: PublicistWhereInput
    /**
     * Limit how many Publicists to delete.
     */
    limit?: number
  }

  /**
   * Publicist.articles
   */
  export type Publicist$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Publicist without action
   */
  export type PublicistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicist
     */
    select?: PublicistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicist
     */
    omit?: PublicistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicistInclude<ExtArgs> | null
  }


  /**
   * Model Article
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
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
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




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
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

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
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


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicistId?: boolean
    content?: boolean
    publicist?: boolean | PublicistDefaultArgs<ExtArgs>
    interests?: boolean | Article$interestsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>



  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    publicistId?: boolean
    content?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "publicistId" | "content", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicist?: boolean | PublicistDefaultArgs<ExtArgs>
    interests?: boolean | Article$interestsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      publicist: Prisma.$PublicistPayload<ExtArgs>
      interests: Prisma.$ArticleInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      publicistId: number
      content: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
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
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
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
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
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
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicist<T extends PublicistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicistDefaultArgs<ExtArgs>>): Prisma__PublicistClient<$Result.GetResult<Prisma.$PublicistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interests<T extends Article$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Article$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'Int'>
    readonly title: FieldRef<"Article", 'String'>
    readonly publicistId: FieldRef<"Article", 'Int'>
    readonly content: FieldRef<"Article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.interests
   */
  export type Article$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Interest
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
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
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




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
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

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
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


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Interest$usersArgs<ExtArgs>
    articles?: boolean | Interest$articlesArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>



  export type InterestSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Interest$usersArgs<ExtArgs>
    articles?: boolean | Interest$articlesArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      users: Prisma.$UserInterestPayload<ExtArgs>[]
      articles: Prisma.$ArticleInterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
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
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
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
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
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
     * @param {InterestGroupByArgs} args - Group by arguments.
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
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Interest$usersArgs<ExtArgs> = {}>(args?: Subset<T, Interest$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articles<T extends Interest$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Interest$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'Int'>
    readonly name: FieldRef<"Interest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest.users
   */
  export type Interest$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Interest.articles
   */
  export type Interest$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


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
    user?: boolean | UserDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterest"]>



  export type UserInterestSelectScalar = {
    userId?: boolean
    interestId?: boolean
  }

  export type UserInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "interestId", ExtArgs["result"]["userInterest"]>
  export type UserInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }

  export type $UserInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInterest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interest: Prisma.$InterestPayload<ExtArgs>
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestDefaultArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleInterest"]>



  export type ArticleInterestSelectScalar = {
    articleId?: boolean
    interestId?: boolean
  }

  export type ArticleInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "interestId", ExtArgs["result"]["articleInterest"]>
  export type ArticleInterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    interest?: boolean | InterestDefaultArgs<ExtArgs>
  }

  export type $ArticleInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleInterest"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      interest: Prisma.$InterestPayload<ExtArgs>
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
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestDefaultArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PublicistScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PublicistScalarFieldEnum = (typeof PublicistScalarFieldEnum)[keyof typeof PublicistScalarFieldEnum]


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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const PublicistOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PublicistOrderByRelevanceFieldEnum = (typeof PublicistOrderByRelevanceFieldEnum)[keyof typeof PublicistOrderByRelevanceFieldEnum]


  export const ArticleOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum]


  export const InterestOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type InterestOrderByRelevanceFieldEnum = (typeof InterestOrderByRelevanceFieldEnum)[keyof typeof InterestOrderByRelevanceFieldEnum]


  export const UserInterestOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type UserInterestOrderByRelevanceFieldEnum = (typeof UserInterestOrderByRelevanceFieldEnum)[keyof typeof UserInterestOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    interests?: UserInterestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    interests?: UserInterestOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    interests?: UserInterestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type PublicistWhereInput = {
    AND?: PublicistWhereInput | PublicistWhereInput[]
    OR?: PublicistWhereInput[]
    NOT?: PublicistWhereInput | PublicistWhereInput[]
    id?: IntFilter<"Publicist"> | number
    name?: StringFilter<"Publicist"> | string
    articles?: ArticleListRelationFilter
  }

  export type PublicistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    _relevance?: PublicistOrderByRelevanceInput
  }

  export type PublicistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicistWhereInput | PublicistWhereInput[]
    OR?: PublicistWhereInput[]
    NOT?: PublicistWhereInput | PublicistWhereInput[]
    name?: StringFilter<"Publicist"> | string
    articles?: ArticleListRelationFilter
  }, "id">

  export type PublicistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PublicistCountOrderByAggregateInput
    _avg?: PublicistAvgOrderByAggregateInput
    _max?: PublicistMaxOrderByAggregateInput
    _min?: PublicistMinOrderByAggregateInput
    _sum?: PublicistSumOrderByAggregateInput
  }

  export type PublicistScalarWhereWithAggregatesInput = {
    AND?: PublicistScalarWhereWithAggregatesInput | PublicistScalarWhereWithAggregatesInput[]
    OR?: PublicistScalarWhereWithAggregatesInput[]
    NOT?: PublicistScalarWhereWithAggregatesInput | PublicistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicist"> | number
    name?: StringWithAggregatesFilter<"Publicist"> | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: IntFilter<"Article"> | number
    title?: StringFilter<"Article"> | string
    publicistId?: IntFilter<"Article"> | number
    content?: StringFilter<"Article"> | string
    publicist?: XOR<PublicistScalarRelationFilter, PublicistWhereInput>
    interests?: ArticleInterestListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
    publicist?: PublicistOrderByWithRelationInput
    interests?: ArticleInterestOrderByRelationAggregateInput
    _relevance?: ArticleOrderByRelevanceInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    publicistId?: IntFilter<"Article"> | number
    content?: StringFilter<"Article"> | string
    publicist?: XOR<PublicistScalarRelationFilter, PublicistWhereInput>
    interests?: ArticleInterestListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Article"> | number
    title?: StringWithAggregatesFilter<"Article"> | string
    publicistId?: IntWithAggregatesFilter<"Article"> | number
    content?: StringWithAggregatesFilter<"Article"> | string
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: IntFilter<"Interest"> | number
    name?: StringFilter<"Interest"> | string
    users?: UserInterestListRelationFilter
    articles?: ArticleInterestListRelationFilter
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserInterestOrderByRelationAggregateInput
    articles?: ArticleInterestOrderByRelationAggregateInput
    _relevance?: InterestOrderByRelevanceInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    name?: StringFilter<"Interest"> | string
    users?: UserInterestListRelationFilter
    articles?: ArticleInterestListRelationFilter
  }, "id">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _avg?: InterestAvgOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
    _sum?: InterestSumOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interest"> | number
    name?: StringWithAggregatesFilter<"Interest"> | string
  }

  export type UserInterestWhereInput = {
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }

  export type UserInterestOrderByWithRelationInput = {
    userId?: SortOrder
    interestId?: SortOrder
    user?: UserOrderByWithRelationInput
    interest?: InterestOrderByWithRelationInput
    _relevance?: UserInterestOrderByRelevanceInput
  }

  export type UserInterestWhereUniqueInput = Prisma.AtLeast<{
    userId_interestId?: UserInterestUserIdInterestIdCompoundUniqueInput
    AND?: UserInterestWhereInput | UserInterestWhereInput[]
    OR?: UserInterestWhereInput[]
    NOT?: UserInterestWhereInput | UserInterestWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
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
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
  }

  export type ArticleInterestOrderByWithRelationInput = {
    articleId?: SortOrder
    interestId?: SortOrder
    article?: ArticleOrderByWithRelationInput
    interest?: InterestOrderByWithRelationInput
  }

  export type ArticleInterestWhereUniqueInput = Prisma.AtLeast<{
    articleId_interestId?: ArticleInterestArticleIdInterestIdCompoundUniqueInput
    AND?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    OR?: ArticleInterestWhereInput[]
    NOT?: ArticleInterestWhereInput | ArticleInterestWhereInput[]
    articleId?: IntFilter<"ArticleInterest"> | number
    interestId?: IntFilter<"ArticleInterest"> | number
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    interest?: XOR<InterestScalarRelationFilter, InterestWhereInput>
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

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    admin?: AdminCreateNestedOneWithoutUserInput
    interests?: UserInterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutUserNestedInput
    interests?: UserInterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    userId: string
  }

  export type AdminUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    userId: string
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PublicistCreateInput = {
    name: string
    articles?: ArticleCreateNestedManyWithoutPublicistInput
  }

  export type PublicistUncheckedCreateInput = {
    id?: number
    name: string
    articles?: ArticleUncheckedCreateNestedManyWithoutPublicistInput
  }

  export type PublicistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleUpdateManyWithoutPublicistNestedInput
  }

  export type PublicistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleUncheckedUpdateManyWithoutPublicistNestedInput
  }

  export type PublicistCreateManyInput = {
    id?: number
    name: string
  }

  export type PublicistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublicistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCreateInput = {
    title: string
    content: string
    publicist: PublicistCreateNestedOneWithoutArticlesInput
    interests?: ArticleInterestCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: number
    title: string
    publicistId: number
    content: string
    interests?: ArticleInterestUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publicist?: PublicistUpdateOneRequiredWithoutArticlesNestedInput
    interests?: ArticleInterestUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: number
    title: string
    publicistId: number
    content: string
  }

  export type ArticleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type InterestCreateInput = {
    name: string
    users?: UserInterestCreateNestedManyWithoutInterestInput
    articles?: ArticleInterestCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserInterestUncheckedCreateNestedManyWithoutInterestInput
    articles?: ArticleInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUpdateManyWithoutInterestNestedInput
    articles?: ArticleInterestUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUncheckedUpdateManyWithoutInterestNestedInput
    articles?: ArticleInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InterestCreateManyInput = {
    id?: number
    name: string
  }

  export type InterestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserInterestCreateInput = {
    user: UserCreateNestedOneWithoutInterestsInput
    interest: InterestCreateNestedOneWithoutUsersInput
  }

  export type UserInterestUncheckedCreateInput = {
    userId: string
    interestId: number
  }

  export type UserInterestUpdateInput = {
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
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
    article: ArticleCreateNestedOneWithoutInterestsInput
    interest: InterestCreateNestedOneWithoutArticlesInput
  }

  export type ArticleInterestUncheckedCreateInput = {
    articleId: number
    interestId: number
  }

  export type ArticleInterestUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutInterestsNestedInput
    interest?: InterestUpdateOneRequiredWithoutArticlesNestedInput
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

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserInterestListRelationFilter = {
    every?: UserInterestWhereInput
    some?: UserInterestWhereInput
    none?: UserInterestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicistOrderByRelevanceInput = {
    fields: PublicistOrderByRelevanceFieldEnum | PublicistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PublicistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublicistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublicistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublicistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicistScalarRelationFilter = {
    is?: PublicistWhereInput
    isNot?: PublicistWhereInput
  }

  export type ArticleInterestListRelationFilter = {
    every?: ArticleInterestWhereInput
    some?: ArticleInterestWhereInput
    none?: ArticleInterestWhereInput
  }

  export type ArticleInterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelevanceInput = {
    fields: ArticleOrderByRelevanceFieldEnum | ArticleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    publicistId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicistId?: SortOrder
    content?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
    publicistId?: SortOrder
  }

  export type InterestOrderByRelevanceInput = {
    fields: InterestOrderByRelevanceFieldEnum | InterestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InterestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterestScalarRelationFilter = {
    is?: InterestWhereInput
    isNot?: InterestWhereInput
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

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
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

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserInterestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserInterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInterestCreateWithoutUserInput, UserInterestUncheckedCreateWithoutUserInput> | UserInterestCreateWithoutUserInput[] | UserInterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutUserInput | UserInterestCreateOrConnectWithoutUserInput[]
    createMany?: UserInterestCreateManyUserInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
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

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
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

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleCreateNestedManyWithoutPublicistInput = {
    create?: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput> | ArticleCreateWithoutPublicistInput[] | ArticleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutPublicistInput | ArticleCreateOrConnectWithoutPublicistInput[]
    createMany?: ArticleCreateManyPublicistInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutPublicistInput = {
    create?: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput> | ArticleCreateWithoutPublicistInput[] | ArticleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutPublicistInput | ArticleCreateOrConnectWithoutPublicistInput[]
    createMany?: ArticleCreateManyPublicistInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutPublicistNestedInput = {
    create?: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput> | ArticleCreateWithoutPublicistInput[] | ArticleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutPublicistInput | ArticleCreateOrConnectWithoutPublicistInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutPublicistInput | ArticleUpsertWithWhereUniqueWithoutPublicistInput[]
    createMany?: ArticleCreateManyPublicistInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutPublicistInput | ArticleUpdateWithWhereUniqueWithoutPublicistInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutPublicistInput | ArticleUpdateManyWithWhereWithoutPublicistInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutPublicistNestedInput = {
    create?: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput> | ArticleCreateWithoutPublicistInput[] | ArticleUncheckedCreateWithoutPublicistInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutPublicistInput | ArticleCreateOrConnectWithoutPublicistInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutPublicistInput | ArticleUpsertWithWhereUniqueWithoutPublicistInput[]
    createMany?: ArticleCreateManyPublicistInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutPublicistInput | ArticleUpdateWithWhereUniqueWithoutPublicistInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutPublicistInput | ArticleUpdateManyWithWhereWithoutPublicistInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type PublicistCreateNestedOneWithoutArticlesInput = {
    create?: XOR<PublicistCreateWithoutArticlesInput, PublicistUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: PublicistCreateOrConnectWithoutArticlesInput
    connect?: PublicistWhereUniqueInput
  }

  export type ArticleInterestCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type ArticleInterestUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInterestCreateWithoutArticleInput, ArticleInterestUncheckedCreateWithoutArticleInput> | ArticleInterestCreateWithoutArticleInput[] | ArticleInterestUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutArticleInput | ArticleInterestCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInterestCreateManyArticleInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
  }

  export type PublicistUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<PublicistCreateWithoutArticlesInput, PublicistUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: PublicistCreateOrConnectWithoutArticlesInput
    upsert?: PublicistUpsertWithoutArticlesInput
    connect?: PublicistWhereUniqueInput
    update?: XOR<XOR<PublicistUpdateToOneWithWhereWithoutArticlesInput, PublicistUpdateWithoutArticlesInput>, PublicistUncheckedUpdateWithoutArticlesInput>
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

  export type UserInterestCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestCreateWithoutInterestInput, UserInterestUncheckedCreateWithoutInterestInput> | UserInterestCreateWithoutInterestInput[] | UserInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestCreateOrConnectWithoutInterestInput | UserInterestCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestCreateManyInterestInputEnvelope
    connect?: UserInterestWhereUniqueInput | UserInterestWhereUniqueInput[]
  }

  export type ArticleInterestCreateNestedManyWithoutInterestInput = {
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

  export type ArticleInterestUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<ArticleInterestCreateWithoutInterestInput, ArticleInterestUncheckedCreateWithoutInterestInput> | ArticleInterestCreateWithoutInterestInput[] | ArticleInterestUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: ArticleInterestCreateOrConnectWithoutInterestInput | ArticleInterestCreateOrConnectWithoutInterestInput[]
    createMany?: ArticleInterestCreateManyInterestInputEnvelope
    connect?: ArticleInterestWhereUniqueInput | ArticleInterestWhereUniqueInput[]
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

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type InterestCreateNestedOneWithoutUsersInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    connect?: InterestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type InterestUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InterestCreateOrConnectWithoutUsersInput
    upsert?: InterestUpsertWithoutUsersInput
    connect?: InterestWhereUniqueInput
    update?: XOR<XOR<InterestUpdateToOneWithWhereWithoutUsersInput, InterestUpdateWithoutUsersInput>, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type ArticleCreateNestedOneWithoutInterestsInput = {
    create?: XOR<ArticleCreateWithoutInterestsInput, ArticleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutInterestsInput
    connect?: ArticleWhereUniqueInput
  }

  export type InterestCreateNestedOneWithoutArticlesInput = {
    create?: XOR<InterestCreateWithoutArticlesInput, InterestUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: InterestCreateOrConnectWithoutArticlesInput
    connect?: InterestWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<ArticleCreateWithoutInterestsInput, ArticleUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutInterestsInput
    upsert?: ArticleUpsertWithoutInterestsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutInterestsInput, ArticleUpdateWithoutInterestsInput>, ArticleUncheckedUpdateWithoutInterestsInput>
  }

  export type InterestUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<InterestCreateWithoutArticlesInput, InterestUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: InterestCreateOrConnectWithoutArticlesInput
    upsert?: InterestUpsertWithoutArticlesInput
    connect?: InterestWhereUniqueInput
    update?: XOR<XOR<InterestUpdateToOneWithWhereWithoutArticlesInput, InterestUpdateWithoutArticlesInput>, InterestUncheckedUpdateWithoutArticlesInput>
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

  export type AdminCreateWithoutUserInput = {

  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type UserInterestCreateWithoutUserInput = {
    interest: InterestCreateNestedOneWithoutUsersInput
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

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {

  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
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

  export type UserInterestScalarWhereInput = {
    AND?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    OR?: UserInterestScalarWhereInput[]
    NOT?: UserInterestScalarWhereInput | UserInterestScalarWhereInput[]
    userId?: StringFilter<"UserInterest"> | string
    interestId?: IntFilter<"UserInterest"> | number
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    interests?: UserInterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    interests?: UserInterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserInterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserInterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleCreateWithoutPublicistInput = {
    title: string
    content: string
    interests?: ArticleInterestCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutPublicistInput = {
    id?: number
    title: string
    content: string
    interests?: ArticleInterestUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutPublicistInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput>
  }

  export type ArticleCreateManyPublicistInputEnvelope = {
    data: ArticleCreateManyPublicistInput | ArticleCreateManyPublicistInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutPublicistInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutPublicistInput, ArticleUncheckedUpdateWithoutPublicistInput>
    create: XOR<ArticleCreateWithoutPublicistInput, ArticleUncheckedCreateWithoutPublicistInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutPublicistInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutPublicistInput, ArticleUncheckedUpdateWithoutPublicistInput>
  }

  export type ArticleUpdateManyWithWhereWithoutPublicistInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutPublicistInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: IntFilter<"Article"> | number
    title?: StringFilter<"Article"> | string
    publicistId?: IntFilter<"Article"> | number
    content?: StringFilter<"Article"> | string
  }

  export type PublicistCreateWithoutArticlesInput = {
    name: string
  }

  export type PublicistUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
  }

  export type PublicistCreateOrConnectWithoutArticlesInput = {
    where: PublicistWhereUniqueInput
    create: XOR<PublicistCreateWithoutArticlesInput, PublicistUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleInterestCreateWithoutArticleInput = {
    interest: InterestCreateNestedOneWithoutArticlesInput
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

  export type PublicistUpsertWithoutArticlesInput = {
    update: XOR<PublicistUpdateWithoutArticlesInput, PublicistUncheckedUpdateWithoutArticlesInput>
    create: XOR<PublicistCreateWithoutArticlesInput, PublicistUncheckedCreateWithoutArticlesInput>
    where?: PublicistWhereInput
  }

  export type PublicistUpdateToOneWithWhereWithoutArticlesInput = {
    where?: PublicistWhereInput
    data: XOR<PublicistUpdateWithoutArticlesInput, PublicistUncheckedUpdateWithoutArticlesInput>
  }

  export type PublicistUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublicistUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type UserInterestCreateWithoutInterestInput = {
    user: UserCreateNestedOneWithoutInterestsInput
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

  export type ArticleInterestCreateWithoutInterestInput = {
    article: ArticleCreateNestedOneWithoutInterestsInput
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

  export type UserCreateWithoutInterestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type InterestCreateWithoutUsersInput = {
    name: string
    articles?: ArticleInterestCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    articles?: ArticleInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestCreateOrConnectWithoutUsersInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InterestUpsertWithoutUsersInput = {
    update: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
    create: XOR<InterestCreateWithoutUsersInput, InterestUncheckedCreateWithoutUsersInput>
    where?: InterestWhereInput
  }

  export type InterestUpdateToOneWithWhereWithoutUsersInput = {
    where?: InterestWhereInput
    data: XOR<InterestUpdateWithoutUsersInput, InterestUncheckedUpdateWithoutUsersInput>
  }

  export type InterestUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type ArticleCreateWithoutInterestsInput = {
    title: string
    content: string
    publicist: PublicistCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutInterestsInput = {
    id?: number
    title: string
    publicistId: number
    content: string
  }

  export type ArticleCreateOrConnectWithoutInterestsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutInterestsInput, ArticleUncheckedCreateWithoutInterestsInput>
  }

  export type InterestCreateWithoutArticlesInput = {
    name: string
    users?: UserInterestCreateNestedManyWithoutInterestInput
  }

  export type InterestUncheckedCreateWithoutArticlesInput = {
    id?: number
    name: string
    users?: UserInterestUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestCreateOrConnectWithoutArticlesInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutArticlesInput, InterestUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutInterestsInput = {
    update: XOR<ArticleUpdateWithoutInterestsInput, ArticleUncheckedUpdateWithoutInterestsInput>
    create: XOR<ArticleCreateWithoutInterestsInput, ArticleUncheckedCreateWithoutInterestsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutInterestsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutInterestsInput, ArticleUncheckedUpdateWithoutInterestsInput>
  }

  export type ArticleUpdateWithoutInterestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    publicist?: PublicistUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publicistId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUpsertWithoutArticlesInput = {
    update: XOR<InterestUpdateWithoutArticlesInput, InterestUncheckedUpdateWithoutArticlesInput>
    create: XOR<InterestCreateWithoutArticlesInput, InterestUncheckedCreateWithoutArticlesInput>
    where?: InterestWhereInput
  }

  export type InterestUpdateToOneWithWhereWithoutArticlesInput = {
    where?: InterestWhereInput
    data: XOR<InterestUpdateWithoutArticlesInput, InterestUncheckedUpdateWithoutArticlesInput>
  }

  export type InterestUpdateWithoutArticlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUpdateManyWithoutInterestNestedInput
  }

  export type InterestUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserInterestUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type UserInterestCreateManyUserInput = {
    interestId: number
  }

  export type UserInterestUpdateWithoutUserInput = {
    interest?: InterestUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutUserInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInterestUncheckedUpdateManyWithoutUserInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleCreateManyPublicistInput = {
    id?: number
    title: string
    content: string
  }

  export type ArticleUpdateWithoutPublicistInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutPublicistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    interests?: ArticleInterestUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutPublicistInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInterestCreateManyArticleInput = {
    interestId: number
  }

  export type ArticleInterestUpdateWithoutArticleInput = {
    interest?: InterestUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleInterestUncheckedUpdateWithoutArticleInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestUncheckedUpdateManyWithoutArticleInput = {
    interestId?: IntFieldUpdateOperationsInput | number
  }

  export type UserInterestCreateManyInterestInput = {
    userId: string
  }

  export type ArticleInterestCreateManyInterestInput = {
    articleId: number
  }

  export type UserInterestUpdateWithoutInterestInput = {
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type UserInterestUncheckedUpdateWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserInterestUncheckedUpdateManyWithoutInterestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInterestUpdateWithoutInterestInput = {
    article?: ArticleUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type ArticleInterestUncheckedUpdateWithoutInterestInput = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleInterestUncheckedUpdateManyWithoutInterestInput = {
    articleId?: IntFieldUpdateOperationsInput | number
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