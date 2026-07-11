
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewFinding
 * 
 */
export type ReviewFinding = $Result.DefaultSelection<Prisma.$ReviewFindingPayload>
/**
 * Model StaticIssue
 * 
 */
export type StaticIssue = $Result.DefaultSelection<Prisma.$StaticIssuePayload>
/**
 * Model ReviewMetric
 * 
 */
export type ReviewMetric = $Result.DefaultSelection<Prisma.$ReviewMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Language: {
  JAVASCRIPT: 'JAVASCRIPT',
  TYPESCRIPT: 'TYPESCRIPT',
  PYTHON: 'PYTHON',
  JAVA: 'JAVA',
  CPP: 'CPP'
};

export type Language = (typeof Language)[keyof typeof Language]


export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const ReviewStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]

}

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewFinding`: Exposes CRUD operations for the **ReviewFinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewFindings
    * const reviewFindings = await prisma.reviewFinding.findMany()
    * ```
    */
  get reviewFinding(): Prisma.ReviewFindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staticIssue`: Exposes CRUD operations for the **StaticIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaticIssues
    * const staticIssues = await prisma.staticIssue.findMany()
    * ```
    */
  get staticIssue(): Prisma.StaticIssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewMetric`: Exposes CRUD operations for the **ReviewMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewMetrics
    * const reviewMetrics = await prisma.reviewMetric.findMany()
    * ```
    */
  get reviewMetric(): Prisma.ReviewMetricDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Project: 'Project',
    Review: 'Review',
    ReviewFinding: 'ReviewFinding',
    StaticIssue: 'StaticIssue',
    ReviewMetric: 'ReviewMetric'
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
      modelProps: "user" | "project" | "review" | "reviewFinding" | "staticIssue" | "reviewMetric"
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
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewFinding: {
        payload: Prisma.$ReviewFindingPayload<ExtArgs>
        fields: Prisma.ReviewFindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          findMany: {
            args: Prisma.ReviewFindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>[]
          }
          create: {
            args: Prisma.ReviewFindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          createMany: {
            args: Prisma.ReviewFindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewFindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>[]
          }
          delete: {
            args: Prisma.ReviewFindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          update: {
            args: Prisma.ReviewFindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          deleteMany: {
            args: Prisma.ReviewFindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewFindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewFindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>[]
          }
          upsert: {
            args: Prisma.ReviewFindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewFindingPayload>
          }
          aggregate: {
            args: Prisma.ReviewFindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewFinding>
          }
          groupBy: {
            args: Prisma.ReviewFindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewFindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewFindingCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewFindingCountAggregateOutputType> | number
          }
        }
      }
      StaticIssue: {
        payload: Prisma.$StaticIssuePayload<ExtArgs>
        fields: Prisma.StaticIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaticIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaticIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          findFirst: {
            args: Prisma.StaticIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaticIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          findMany: {
            args: Prisma.StaticIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>[]
          }
          create: {
            args: Prisma.StaticIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          createMany: {
            args: Prisma.StaticIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaticIssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>[]
          }
          delete: {
            args: Prisma.StaticIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          update: {
            args: Prisma.StaticIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          deleteMany: {
            args: Prisma.StaticIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaticIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaticIssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>[]
          }
          upsert: {
            args: Prisma.StaticIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticIssuePayload>
          }
          aggregate: {
            args: Prisma.StaticIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaticIssue>
          }
          groupBy: {
            args: Prisma.StaticIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaticIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaticIssueCountArgs<ExtArgs>
            result: $Utils.Optional<StaticIssueCountAggregateOutputType> | number
          }
        }
      }
      ReviewMetric: {
        payload: Prisma.$ReviewMetricPayload<ExtArgs>
        fields: Prisma.ReviewMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          findFirst: {
            args: Prisma.ReviewMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          findMany: {
            args: Prisma.ReviewMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>[]
          }
          create: {
            args: Prisma.ReviewMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          createMany: {
            args: Prisma.ReviewMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>[]
          }
          delete: {
            args: Prisma.ReviewMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          update: {
            args: Prisma.ReviewMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          deleteMany: {
            args: Prisma.ReviewMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>[]
          }
          upsert: {
            args: Prisma.ReviewMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewMetricPayload>
          }
          aggregate: {
            args: Prisma.ReviewMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewMetric>
          }
          groupBy: {
            args: Prisma.ReviewMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewMetricCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewMetricCountAggregateOutputType> | number
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
    project?: ProjectOmit
    review?: ReviewOmit
    reviewFinding?: ReviewFindingOmit
    staticIssue?: StaticIssueOmit
    reviewMetric?: ReviewMetricOmit
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
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
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
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    reviews: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ProjectCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    findings: number
    staticIssues: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    findings?: boolean | ReviewCountOutputTypeCountFindingsArgs
    staticIssues?: boolean | ReviewCountOutputTypeCountStaticIssuesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewFindingWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountStaticIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticIssueWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
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
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    language: $Enums.Language | null
    userId: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    language: $Enums.Language | null
    userId: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    language: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    language?: true
    userId?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    language?: true
    userId?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    language?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    language: $Enums.Language
    userId: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Project$reviewsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    language?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    language?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "language" | "userId" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Project$reviewsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      language: $Enums.Language
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Project$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Project$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly language: FieldRef<"Project", 'Language'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.reviews
   */
  export type Project$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type ReviewSumAggregateOutputType = {
    overallScore: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    sourceCode: string | null
    overallScore: number | null
    summary: string | null
    aiModel: string | null
    projectId: string | null
    createdAt: Date | null
    status: $Enums.ReviewStatus | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    sourceCode: string | null
    overallScore: number | null
    summary: string | null
    aiModel: string | null
    projectId: string | null
    createdAt: Date | null
    status: $Enums.ReviewStatus | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    sourceCode: number
    overallScore: number
    summary: number
    aiModel: number
    projectId: number
    createdAt: number
    status: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    overallScore?: true
  }

  export type ReviewSumAggregateInputType = {
    overallScore?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    sourceCode?: true
    overallScore?: true
    summary?: true
    aiModel?: true
    projectId?: true
    createdAt?: true
    status?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    sourceCode?: true
    overallScore?: true
    summary?: true
    aiModel?: true
    projectId?: true
    createdAt?: true
    status?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    sourceCode?: true
    overallScore?: true
    summary?: true
    aiModel?: true
    projectId?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt: Date
    status: $Enums.ReviewStatus
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    overallScore?: boolean
    summary?: boolean
    aiModel?: boolean
    projectId?: boolean
    createdAt?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    findings?: boolean | Review$findingsArgs<ExtArgs>
    staticIssues?: boolean | Review$staticIssuesArgs<ExtArgs>
    metrics?: boolean | Review$metricsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    overallScore?: boolean
    summary?: boolean
    aiModel?: boolean
    projectId?: boolean
    createdAt?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    overallScore?: boolean
    summary?: boolean
    aiModel?: boolean
    projectId?: boolean
    createdAt?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    sourceCode?: boolean
    overallScore?: boolean
    summary?: boolean
    aiModel?: boolean
    projectId?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceCode" | "overallScore" | "summary" | "aiModel" | "projectId" | "createdAt" | "status", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    findings?: boolean | Review$findingsArgs<ExtArgs>
    staticIssues?: boolean | Review$staticIssuesArgs<ExtArgs>
    metrics?: boolean | Review$metricsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      findings: Prisma.$ReviewFindingPayload<ExtArgs>[]
      staticIssues: Prisma.$StaticIssuePayload<ExtArgs>[]
      metrics: Prisma.$ReviewMetricPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceCode: string
      overallScore: number
      summary: string
      aiModel: string
      projectId: string
      createdAt: Date
      status: $Enums.ReviewStatus
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    findings<T extends Review$findingsArgs<ExtArgs> = {}>(args?: Subset<T, Review$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staticIssues<T extends Review$staticIssuesArgs<ExtArgs> = {}>(args?: Subset<T, Review$staticIssuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrics<T extends Review$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Review$metricsArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly sourceCode: FieldRef<"Review", 'String'>
    readonly overallScore: FieldRef<"Review", 'Int'>
    readonly summary: FieldRef<"Review", 'String'>
    readonly aiModel: FieldRef<"Review", 'String'>
    readonly projectId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.findings
   */
  export type Review$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    where?: ReviewFindingWhereInput
    orderBy?: ReviewFindingOrderByWithRelationInput | ReviewFindingOrderByWithRelationInput[]
    cursor?: ReviewFindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewFindingScalarFieldEnum | ReviewFindingScalarFieldEnum[]
  }

  /**
   * Review.staticIssues
   */
  export type Review$staticIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    where?: StaticIssueWhereInput
    orderBy?: StaticIssueOrderByWithRelationInput | StaticIssueOrderByWithRelationInput[]
    cursor?: StaticIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaticIssueScalarFieldEnum | StaticIssueScalarFieldEnum[]
  }

  /**
   * Review.metrics
   */
  export type Review$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    where?: ReviewMetricWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewFinding
   */

  export type AggregateReviewFinding = {
    _count: ReviewFindingCountAggregateOutputType | null
    _avg: ReviewFindingAvgAggregateOutputType | null
    _sum: ReviewFindingSumAggregateOutputType | null
    _min: ReviewFindingMinAggregateOutputType | null
    _max: ReviewFindingMaxAggregateOutputType | null
  }

  export type ReviewFindingAvgAggregateOutputType = {
    lineNumber: number | null
  }

  export type ReviewFindingSumAggregateOutputType = {
    lineNumber: number | null
  }

  export type ReviewFindingMinAggregateOutputType = {
    id: string | null
    severity: $Enums.Severity | null
    issue: string | null
    explanation: string | null
    suggestedFix: string | null
    lineNumber: number | null
    reviewId: string | null
  }

  export type ReviewFindingMaxAggregateOutputType = {
    id: string | null
    severity: $Enums.Severity | null
    issue: string | null
    explanation: string | null
    suggestedFix: string | null
    lineNumber: number | null
    reviewId: string | null
  }

  export type ReviewFindingCountAggregateOutputType = {
    id: number
    severity: number
    issue: number
    explanation: number
    suggestedFix: number
    lineNumber: number
    reviewId: number
    _all: number
  }


  export type ReviewFindingAvgAggregateInputType = {
    lineNumber?: true
  }

  export type ReviewFindingSumAggregateInputType = {
    lineNumber?: true
  }

  export type ReviewFindingMinAggregateInputType = {
    id?: true
    severity?: true
    issue?: true
    explanation?: true
    suggestedFix?: true
    lineNumber?: true
    reviewId?: true
  }

  export type ReviewFindingMaxAggregateInputType = {
    id?: true
    severity?: true
    issue?: true
    explanation?: true
    suggestedFix?: true
    lineNumber?: true
    reviewId?: true
  }

  export type ReviewFindingCountAggregateInputType = {
    id?: true
    severity?: true
    issue?: true
    explanation?: true
    suggestedFix?: true
    lineNumber?: true
    reviewId?: true
    _all?: true
  }

  export type ReviewFindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewFinding to aggregate.
     */
    where?: ReviewFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewFindings to fetch.
     */
    orderBy?: ReviewFindingOrderByWithRelationInput | ReviewFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewFindings
    **/
    _count?: true | ReviewFindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewFindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewFindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewFindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewFindingMaxAggregateInputType
  }

  export type GetReviewFindingAggregateType<T extends ReviewFindingAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewFinding[P]>
      : GetScalarType<T[P], AggregateReviewFinding[P]>
  }




  export type ReviewFindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewFindingWhereInput
    orderBy?: ReviewFindingOrderByWithAggregationInput | ReviewFindingOrderByWithAggregationInput[]
    by: ReviewFindingScalarFieldEnum[] | ReviewFindingScalarFieldEnum
    having?: ReviewFindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewFindingCountAggregateInputType | true
    _avg?: ReviewFindingAvgAggregateInputType
    _sum?: ReviewFindingSumAggregateInputType
    _min?: ReviewFindingMinAggregateInputType
    _max?: ReviewFindingMaxAggregateInputType
  }

  export type ReviewFindingGroupByOutputType = {
    id: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber: number | null
    reviewId: string
    _count: ReviewFindingCountAggregateOutputType | null
    _avg: ReviewFindingAvgAggregateOutputType | null
    _sum: ReviewFindingSumAggregateOutputType | null
    _min: ReviewFindingMinAggregateOutputType | null
    _max: ReviewFindingMaxAggregateOutputType | null
  }

  type GetReviewFindingGroupByPayload<T extends ReviewFindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewFindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewFindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewFindingGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewFindingGroupByOutputType[P]>
        }
      >
    >


  export type ReviewFindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    severity?: boolean
    issue?: boolean
    explanation?: boolean
    suggestedFix?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewFinding"]>

  export type ReviewFindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    severity?: boolean
    issue?: boolean
    explanation?: boolean
    suggestedFix?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewFinding"]>

  export type ReviewFindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    severity?: boolean
    issue?: boolean
    explanation?: boolean
    suggestedFix?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewFinding"]>

  export type ReviewFindingSelectScalar = {
    id?: boolean
    severity?: boolean
    issue?: boolean
    explanation?: boolean
    suggestedFix?: boolean
    lineNumber?: boolean
    reviewId?: boolean
  }

  export type ReviewFindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "severity" | "issue" | "explanation" | "suggestedFix" | "lineNumber" | "reviewId", ExtArgs["result"]["reviewFinding"]>
  export type ReviewFindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewFindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewFindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewFindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewFinding"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      severity: $Enums.Severity
      issue: string
      explanation: string
      suggestedFix: string
      lineNumber: number | null
      reviewId: string
    }, ExtArgs["result"]["reviewFinding"]>
    composites: {}
  }

  type ReviewFindingGetPayload<S extends boolean | null | undefined | ReviewFindingDefaultArgs> = $Result.GetResult<Prisma.$ReviewFindingPayload, S>

  type ReviewFindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewFindingCountAggregateInputType | true
    }

  export interface ReviewFindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewFinding'], meta: { name: 'ReviewFinding' } }
    /**
     * Find zero or one ReviewFinding that matches the filter.
     * @param {ReviewFindingFindUniqueArgs} args - Arguments to find a ReviewFinding
     * @example
     * // Get one ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindingFindUniqueArgs>(args: SelectSubset<T, ReviewFindingFindUniqueArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewFinding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindingFindUniqueOrThrowArgs} args - Arguments to find a ReviewFinding
     * @example
     * // Get one ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindingFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewFinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingFindFirstArgs} args - Arguments to find a ReviewFinding
     * @example
     * // Get one ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindingFindFirstArgs>(args?: SelectSubset<T, ReviewFindingFindFirstArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewFinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingFindFirstOrThrowArgs} args - Arguments to find a ReviewFinding
     * @example
     * // Get one ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindingFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewFindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewFindings
     * const reviewFindings = await prisma.reviewFinding.findMany()
     * 
     * // Get first 10 ReviewFindings
     * const reviewFindings = await prisma.reviewFinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewFindingWithIdOnly = await prisma.reviewFinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindingFindManyArgs>(args?: SelectSubset<T, ReviewFindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewFinding.
     * @param {ReviewFindingCreateArgs} args - Arguments to create a ReviewFinding.
     * @example
     * // Create one ReviewFinding
     * const ReviewFinding = await prisma.reviewFinding.create({
     *   data: {
     *     // ... data to create a ReviewFinding
     *   }
     * })
     * 
     */
    create<T extends ReviewFindingCreateArgs>(args: SelectSubset<T, ReviewFindingCreateArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewFindings.
     * @param {ReviewFindingCreateManyArgs} args - Arguments to create many ReviewFindings.
     * @example
     * // Create many ReviewFindings
     * const reviewFinding = await prisma.reviewFinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewFindingCreateManyArgs>(args?: SelectSubset<T, ReviewFindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewFindings and returns the data saved in the database.
     * @param {ReviewFindingCreateManyAndReturnArgs} args - Arguments to create many ReviewFindings.
     * @example
     * // Create many ReviewFindings
     * const reviewFinding = await prisma.reviewFinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewFindings and only return the `id`
     * const reviewFindingWithIdOnly = await prisma.reviewFinding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewFindingCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewFindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewFinding.
     * @param {ReviewFindingDeleteArgs} args - Arguments to delete one ReviewFinding.
     * @example
     * // Delete one ReviewFinding
     * const ReviewFinding = await prisma.reviewFinding.delete({
     *   where: {
     *     // ... filter to delete one ReviewFinding
     *   }
     * })
     * 
     */
    delete<T extends ReviewFindingDeleteArgs>(args: SelectSubset<T, ReviewFindingDeleteArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewFinding.
     * @param {ReviewFindingUpdateArgs} args - Arguments to update one ReviewFinding.
     * @example
     * // Update one ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewFindingUpdateArgs>(args: SelectSubset<T, ReviewFindingUpdateArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewFindings.
     * @param {ReviewFindingDeleteManyArgs} args - Arguments to filter ReviewFindings to delete.
     * @example
     * // Delete a few ReviewFindings
     * const { count } = await prisma.reviewFinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewFindingDeleteManyArgs>(args?: SelectSubset<T, ReviewFindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewFindings
     * const reviewFinding = await prisma.reviewFinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewFindingUpdateManyArgs>(args: SelectSubset<T, ReviewFindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewFindings and returns the data updated in the database.
     * @param {ReviewFindingUpdateManyAndReturnArgs} args - Arguments to update many ReviewFindings.
     * @example
     * // Update many ReviewFindings
     * const reviewFinding = await prisma.reviewFinding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewFindings and only return the `id`
     * const reviewFindingWithIdOnly = await prisma.reviewFinding.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewFindingUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewFindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewFinding.
     * @param {ReviewFindingUpsertArgs} args - Arguments to update or create a ReviewFinding.
     * @example
     * // Update or create a ReviewFinding
     * const reviewFinding = await prisma.reviewFinding.upsert({
     *   create: {
     *     // ... data to create a ReviewFinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewFinding we want to update
     *   }
     * })
     */
    upsert<T extends ReviewFindingUpsertArgs>(args: SelectSubset<T, ReviewFindingUpsertArgs<ExtArgs>>): Prisma__ReviewFindingClient<$Result.GetResult<Prisma.$ReviewFindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingCountArgs} args - Arguments to filter ReviewFindings to count.
     * @example
     * // Count the number of ReviewFindings
     * const count = await prisma.reviewFinding.count({
     *   where: {
     *     // ... the filter for the ReviewFindings we want to count
     *   }
     * })
    **/
    count<T extends ReviewFindingCountArgs>(
      args?: Subset<T, ReviewFindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewFindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewFindingAggregateArgs>(args: Subset<T, ReviewFindingAggregateArgs>): Prisma.PrismaPromise<GetReviewFindingAggregateType<T>>

    /**
     * Group by ReviewFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindingGroupByArgs} args - Group by arguments.
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
      T extends ReviewFindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewFindingGroupByArgs['orderBy'] }
        : { orderBy?: ReviewFindingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewFindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewFinding model
   */
  readonly fields: ReviewFindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewFinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewFindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewFinding model
   */
  interface ReviewFindingFieldRefs {
    readonly id: FieldRef<"ReviewFinding", 'String'>
    readonly severity: FieldRef<"ReviewFinding", 'Severity'>
    readonly issue: FieldRef<"ReviewFinding", 'String'>
    readonly explanation: FieldRef<"ReviewFinding", 'String'>
    readonly suggestedFix: FieldRef<"ReviewFinding", 'String'>
    readonly lineNumber: FieldRef<"ReviewFinding", 'Int'>
    readonly reviewId: FieldRef<"ReviewFinding", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewFinding findUnique
   */
  export type ReviewFindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter, which ReviewFinding to fetch.
     */
    where: ReviewFindingWhereUniqueInput
  }

  /**
   * ReviewFinding findUniqueOrThrow
   */
  export type ReviewFindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter, which ReviewFinding to fetch.
     */
    where: ReviewFindingWhereUniqueInput
  }

  /**
   * ReviewFinding findFirst
   */
  export type ReviewFindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter, which ReviewFinding to fetch.
     */
    where?: ReviewFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewFindings to fetch.
     */
    orderBy?: ReviewFindingOrderByWithRelationInput | ReviewFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewFindings.
     */
    cursor?: ReviewFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewFindings.
     */
    distinct?: ReviewFindingScalarFieldEnum | ReviewFindingScalarFieldEnum[]
  }

  /**
   * ReviewFinding findFirstOrThrow
   */
  export type ReviewFindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter, which ReviewFinding to fetch.
     */
    where?: ReviewFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewFindings to fetch.
     */
    orderBy?: ReviewFindingOrderByWithRelationInput | ReviewFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewFindings.
     */
    cursor?: ReviewFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewFindings.
     */
    distinct?: ReviewFindingScalarFieldEnum | ReviewFindingScalarFieldEnum[]
  }

  /**
   * ReviewFinding findMany
   */
  export type ReviewFindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter, which ReviewFindings to fetch.
     */
    where?: ReviewFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewFindings to fetch.
     */
    orderBy?: ReviewFindingOrderByWithRelationInput | ReviewFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewFindings.
     */
    cursor?: ReviewFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewFindings.
     */
    skip?: number
    distinct?: ReviewFindingScalarFieldEnum | ReviewFindingScalarFieldEnum[]
  }

  /**
   * ReviewFinding create
   */
  export type ReviewFindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewFinding.
     */
    data: XOR<ReviewFindingCreateInput, ReviewFindingUncheckedCreateInput>
  }

  /**
   * ReviewFinding createMany
   */
  export type ReviewFindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewFindings.
     */
    data: ReviewFindingCreateManyInput | ReviewFindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewFinding createManyAndReturn
   */
  export type ReviewFindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewFindings.
     */
    data: ReviewFindingCreateManyInput | ReviewFindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewFinding update
   */
  export type ReviewFindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewFinding.
     */
    data: XOR<ReviewFindingUpdateInput, ReviewFindingUncheckedUpdateInput>
    /**
     * Choose, which ReviewFinding to update.
     */
    where: ReviewFindingWhereUniqueInput
  }

  /**
   * ReviewFinding updateMany
   */
  export type ReviewFindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewFindings.
     */
    data: XOR<ReviewFindingUpdateManyMutationInput, ReviewFindingUncheckedUpdateManyInput>
    /**
     * Filter which ReviewFindings to update
     */
    where?: ReviewFindingWhereInput
    /**
     * Limit how many ReviewFindings to update.
     */
    limit?: number
  }

  /**
   * ReviewFinding updateManyAndReturn
   */
  export type ReviewFindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * The data used to update ReviewFindings.
     */
    data: XOR<ReviewFindingUpdateManyMutationInput, ReviewFindingUncheckedUpdateManyInput>
    /**
     * Filter which ReviewFindings to update
     */
    where?: ReviewFindingWhereInput
    /**
     * Limit how many ReviewFindings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewFinding upsert
   */
  export type ReviewFindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewFinding to update in case it exists.
     */
    where: ReviewFindingWhereUniqueInput
    /**
     * In case the ReviewFinding found by the `where` argument doesn't exist, create a new ReviewFinding with this data.
     */
    create: XOR<ReviewFindingCreateInput, ReviewFindingUncheckedCreateInput>
    /**
     * In case the ReviewFinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewFindingUpdateInput, ReviewFindingUncheckedUpdateInput>
  }

  /**
   * ReviewFinding delete
   */
  export type ReviewFindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
    /**
     * Filter which ReviewFinding to delete.
     */
    where: ReviewFindingWhereUniqueInput
  }

  /**
   * ReviewFinding deleteMany
   */
  export type ReviewFindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewFindings to delete
     */
    where?: ReviewFindingWhereInput
    /**
     * Limit how many ReviewFindings to delete.
     */
    limit?: number
  }

  /**
   * ReviewFinding without action
   */
  export type ReviewFindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewFinding
     */
    select?: ReviewFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewFinding
     */
    omit?: ReviewFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewFindingInclude<ExtArgs> | null
  }


  /**
   * Model StaticIssue
   */

  export type AggregateStaticIssue = {
    _count: StaticIssueCountAggregateOutputType | null
    _avg: StaticIssueAvgAggregateOutputType | null
    _sum: StaticIssueSumAggregateOutputType | null
    _min: StaticIssueMinAggregateOutputType | null
    _max: StaticIssueMaxAggregateOutputType | null
  }

  export type StaticIssueAvgAggregateOutputType = {
    lineNumber: number | null
  }

  export type StaticIssueSumAggregateOutputType = {
    lineNumber: number | null
  }

  export type StaticIssueMinAggregateOutputType = {
    id: string | null
    tool: string | null
    severity: $Enums.Severity | null
    message: string | null
    lineNumber: number | null
    reviewId: string | null
  }

  export type StaticIssueMaxAggregateOutputType = {
    id: string | null
    tool: string | null
    severity: $Enums.Severity | null
    message: string | null
    lineNumber: number | null
    reviewId: string | null
  }

  export type StaticIssueCountAggregateOutputType = {
    id: number
    tool: number
    severity: number
    message: number
    lineNumber: number
    reviewId: number
    _all: number
  }


  export type StaticIssueAvgAggregateInputType = {
    lineNumber?: true
  }

  export type StaticIssueSumAggregateInputType = {
    lineNumber?: true
  }

  export type StaticIssueMinAggregateInputType = {
    id?: true
    tool?: true
    severity?: true
    message?: true
    lineNumber?: true
    reviewId?: true
  }

  export type StaticIssueMaxAggregateInputType = {
    id?: true
    tool?: true
    severity?: true
    message?: true
    lineNumber?: true
    reviewId?: true
  }

  export type StaticIssueCountAggregateInputType = {
    id?: true
    tool?: true
    severity?: true
    message?: true
    lineNumber?: true
    reviewId?: true
    _all?: true
  }

  export type StaticIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticIssue to aggregate.
     */
    where?: StaticIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticIssues to fetch.
     */
    orderBy?: StaticIssueOrderByWithRelationInput | StaticIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaticIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaticIssues
    **/
    _count?: true | StaticIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaticIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaticIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaticIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaticIssueMaxAggregateInputType
  }

  export type GetStaticIssueAggregateType<T extends StaticIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateStaticIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaticIssue[P]>
      : GetScalarType<T[P], AggregateStaticIssue[P]>
  }




  export type StaticIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticIssueWhereInput
    orderBy?: StaticIssueOrderByWithAggregationInput | StaticIssueOrderByWithAggregationInput[]
    by: StaticIssueScalarFieldEnum[] | StaticIssueScalarFieldEnum
    having?: StaticIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaticIssueCountAggregateInputType | true
    _avg?: StaticIssueAvgAggregateInputType
    _sum?: StaticIssueSumAggregateInputType
    _min?: StaticIssueMinAggregateInputType
    _max?: StaticIssueMaxAggregateInputType
  }

  export type StaticIssueGroupByOutputType = {
    id: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber: number | null
    reviewId: string
    _count: StaticIssueCountAggregateOutputType | null
    _avg: StaticIssueAvgAggregateOutputType | null
    _sum: StaticIssueSumAggregateOutputType | null
    _min: StaticIssueMinAggregateOutputType | null
    _max: StaticIssueMaxAggregateOutputType | null
  }

  type GetStaticIssueGroupByPayload<T extends StaticIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaticIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaticIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaticIssueGroupByOutputType[P]>
            : GetScalarType<T[P], StaticIssueGroupByOutputType[P]>
        }
      >
    >


  export type StaticIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tool?: boolean
    severity?: boolean
    message?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staticIssue"]>

  export type StaticIssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tool?: boolean
    severity?: boolean
    message?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staticIssue"]>

  export type StaticIssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tool?: boolean
    severity?: boolean
    message?: boolean
    lineNumber?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staticIssue"]>

  export type StaticIssueSelectScalar = {
    id?: boolean
    tool?: boolean
    severity?: boolean
    message?: boolean
    lineNumber?: boolean
    reviewId?: boolean
  }

  export type StaticIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tool" | "severity" | "message" | "lineNumber" | "reviewId", ExtArgs["result"]["staticIssue"]>
  export type StaticIssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type StaticIssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type StaticIssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $StaticIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaticIssue"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tool: string
      severity: $Enums.Severity
      message: string
      lineNumber: number | null
      reviewId: string
    }, ExtArgs["result"]["staticIssue"]>
    composites: {}
  }

  type StaticIssueGetPayload<S extends boolean | null | undefined | StaticIssueDefaultArgs> = $Result.GetResult<Prisma.$StaticIssuePayload, S>

  type StaticIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaticIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaticIssueCountAggregateInputType | true
    }

  export interface StaticIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaticIssue'], meta: { name: 'StaticIssue' } }
    /**
     * Find zero or one StaticIssue that matches the filter.
     * @param {StaticIssueFindUniqueArgs} args - Arguments to find a StaticIssue
     * @example
     * // Get one StaticIssue
     * const staticIssue = await prisma.staticIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaticIssueFindUniqueArgs>(args: SelectSubset<T, StaticIssueFindUniqueArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaticIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaticIssueFindUniqueOrThrowArgs} args - Arguments to find a StaticIssue
     * @example
     * // Get one StaticIssue
     * const staticIssue = await prisma.staticIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaticIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, StaticIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaticIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueFindFirstArgs} args - Arguments to find a StaticIssue
     * @example
     * // Get one StaticIssue
     * const staticIssue = await prisma.staticIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaticIssueFindFirstArgs>(args?: SelectSubset<T, StaticIssueFindFirstArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaticIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueFindFirstOrThrowArgs} args - Arguments to find a StaticIssue
     * @example
     * // Get one StaticIssue
     * const staticIssue = await prisma.staticIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaticIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, StaticIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaticIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaticIssues
     * const staticIssues = await prisma.staticIssue.findMany()
     * 
     * // Get first 10 StaticIssues
     * const staticIssues = await prisma.staticIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staticIssueWithIdOnly = await prisma.staticIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaticIssueFindManyArgs>(args?: SelectSubset<T, StaticIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaticIssue.
     * @param {StaticIssueCreateArgs} args - Arguments to create a StaticIssue.
     * @example
     * // Create one StaticIssue
     * const StaticIssue = await prisma.staticIssue.create({
     *   data: {
     *     // ... data to create a StaticIssue
     *   }
     * })
     * 
     */
    create<T extends StaticIssueCreateArgs>(args: SelectSubset<T, StaticIssueCreateArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaticIssues.
     * @param {StaticIssueCreateManyArgs} args - Arguments to create many StaticIssues.
     * @example
     * // Create many StaticIssues
     * const staticIssue = await prisma.staticIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaticIssueCreateManyArgs>(args?: SelectSubset<T, StaticIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaticIssues and returns the data saved in the database.
     * @param {StaticIssueCreateManyAndReturnArgs} args - Arguments to create many StaticIssues.
     * @example
     * // Create many StaticIssues
     * const staticIssue = await prisma.staticIssue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaticIssues and only return the `id`
     * const staticIssueWithIdOnly = await prisma.staticIssue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaticIssueCreateManyAndReturnArgs>(args?: SelectSubset<T, StaticIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaticIssue.
     * @param {StaticIssueDeleteArgs} args - Arguments to delete one StaticIssue.
     * @example
     * // Delete one StaticIssue
     * const StaticIssue = await prisma.staticIssue.delete({
     *   where: {
     *     // ... filter to delete one StaticIssue
     *   }
     * })
     * 
     */
    delete<T extends StaticIssueDeleteArgs>(args: SelectSubset<T, StaticIssueDeleteArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaticIssue.
     * @param {StaticIssueUpdateArgs} args - Arguments to update one StaticIssue.
     * @example
     * // Update one StaticIssue
     * const staticIssue = await prisma.staticIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaticIssueUpdateArgs>(args: SelectSubset<T, StaticIssueUpdateArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaticIssues.
     * @param {StaticIssueDeleteManyArgs} args - Arguments to filter StaticIssues to delete.
     * @example
     * // Delete a few StaticIssues
     * const { count } = await prisma.staticIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaticIssueDeleteManyArgs>(args?: SelectSubset<T, StaticIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaticIssues
     * const staticIssue = await prisma.staticIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaticIssueUpdateManyArgs>(args: SelectSubset<T, StaticIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticIssues and returns the data updated in the database.
     * @param {StaticIssueUpdateManyAndReturnArgs} args - Arguments to update many StaticIssues.
     * @example
     * // Update many StaticIssues
     * const staticIssue = await prisma.staticIssue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaticIssues and only return the `id`
     * const staticIssueWithIdOnly = await prisma.staticIssue.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaticIssueUpdateManyAndReturnArgs>(args: SelectSubset<T, StaticIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaticIssue.
     * @param {StaticIssueUpsertArgs} args - Arguments to update or create a StaticIssue.
     * @example
     * // Update or create a StaticIssue
     * const staticIssue = await prisma.staticIssue.upsert({
     *   create: {
     *     // ... data to create a StaticIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaticIssue we want to update
     *   }
     * })
     */
    upsert<T extends StaticIssueUpsertArgs>(args: SelectSubset<T, StaticIssueUpsertArgs<ExtArgs>>): Prisma__StaticIssueClient<$Result.GetResult<Prisma.$StaticIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaticIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueCountArgs} args - Arguments to filter StaticIssues to count.
     * @example
     * // Count the number of StaticIssues
     * const count = await prisma.staticIssue.count({
     *   where: {
     *     // ... the filter for the StaticIssues we want to count
     *   }
     * })
    **/
    count<T extends StaticIssueCountArgs>(
      args?: Subset<T, StaticIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaticIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaticIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaticIssueAggregateArgs>(args: Subset<T, StaticIssueAggregateArgs>): Prisma.PrismaPromise<GetStaticIssueAggregateType<T>>

    /**
     * Group by StaticIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticIssueGroupByArgs} args - Group by arguments.
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
      T extends StaticIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaticIssueGroupByArgs['orderBy'] }
        : { orderBy?: StaticIssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaticIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaticIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaticIssue model
   */
  readonly fields: StaticIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaticIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaticIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaticIssue model
   */
  interface StaticIssueFieldRefs {
    readonly id: FieldRef<"StaticIssue", 'String'>
    readonly tool: FieldRef<"StaticIssue", 'String'>
    readonly severity: FieldRef<"StaticIssue", 'Severity'>
    readonly message: FieldRef<"StaticIssue", 'String'>
    readonly lineNumber: FieldRef<"StaticIssue", 'Int'>
    readonly reviewId: FieldRef<"StaticIssue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaticIssue findUnique
   */
  export type StaticIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter, which StaticIssue to fetch.
     */
    where: StaticIssueWhereUniqueInput
  }

  /**
   * StaticIssue findUniqueOrThrow
   */
  export type StaticIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter, which StaticIssue to fetch.
     */
    where: StaticIssueWhereUniqueInput
  }

  /**
   * StaticIssue findFirst
   */
  export type StaticIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter, which StaticIssue to fetch.
     */
    where?: StaticIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticIssues to fetch.
     */
    orderBy?: StaticIssueOrderByWithRelationInput | StaticIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticIssues.
     */
    cursor?: StaticIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticIssues.
     */
    distinct?: StaticIssueScalarFieldEnum | StaticIssueScalarFieldEnum[]
  }

  /**
   * StaticIssue findFirstOrThrow
   */
  export type StaticIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter, which StaticIssue to fetch.
     */
    where?: StaticIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticIssues to fetch.
     */
    orderBy?: StaticIssueOrderByWithRelationInput | StaticIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticIssues.
     */
    cursor?: StaticIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticIssues.
     */
    distinct?: StaticIssueScalarFieldEnum | StaticIssueScalarFieldEnum[]
  }

  /**
   * StaticIssue findMany
   */
  export type StaticIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter, which StaticIssues to fetch.
     */
    where?: StaticIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticIssues to fetch.
     */
    orderBy?: StaticIssueOrderByWithRelationInput | StaticIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaticIssues.
     */
    cursor?: StaticIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticIssues.
     */
    skip?: number
    distinct?: StaticIssueScalarFieldEnum | StaticIssueScalarFieldEnum[]
  }

  /**
   * StaticIssue create
   */
  export type StaticIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * The data needed to create a StaticIssue.
     */
    data: XOR<StaticIssueCreateInput, StaticIssueUncheckedCreateInput>
  }

  /**
   * StaticIssue createMany
   */
  export type StaticIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaticIssues.
     */
    data: StaticIssueCreateManyInput | StaticIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaticIssue createManyAndReturn
   */
  export type StaticIssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * The data used to create many StaticIssues.
     */
    data: StaticIssueCreateManyInput | StaticIssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaticIssue update
   */
  export type StaticIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * The data needed to update a StaticIssue.
     */
    data: XOR<StaticIssueUpdateInput, StaticIssueUncheckedUpdateInput>
    /**
     * Choose, which StaticIssue to update.
     */
    where: StaticIssueWhereUniqueInput
  }

  /**
   * StaticIssue updateMany
   */
  export type StaticIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaticIssues.
     */
    data: XOR<StaticIssueUpdateManyMutationInput, StaticIssueUncheckedUpdateManyInput>
    /**
     * Filter which StaticIssues to update
     */
    where?: StaticIssueWhereInput
    /**
     * Limit how many StaticIssues to update.
     */
    limit?: number
  }

  /**
   * StaticIssue updateManyAndReturn
   */
  export type StaticIssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * The data used to update StaticIssues.
     */
    data: XOR<StaticIssueUpdateManyMutationInput, StaticIssueUncheckedUpdateManyInput>
    /**
     * Filter which StaticIssues to update
     */
    where?: StaticIssueWhereInput
    /**
     * Limit how many StaticIssues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaticIssue upsert
   */
  export type StaticIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * The filter to search for the StaticIssue to update in case it exists.
     */
    where: StaticIssueWhereUniqueInput
    /**
     * In case the StaticIssue found by the `where` argument doesn't exist, create a new StaticIssue with this data.
     */
    create: XOR<StaticIssueCreateInput, StaticIssueUncheckedCreateInput>
    /**
     * In case the StaticIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaticIssueUpdateInput, StaticIssueUncheckedUpdateInput>
  }

  /**
   * StaticIssue delete
   */
  export type StaticIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
    /**
     * Filter which StaticIssue to delete.
     */
    where: StaticIssueWhereUniqueInput
  }

  /**
   * StaticIssue deleteMany
   */
  export type StaticIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticIssues to delete
     */
    where?: StaticIssueWhereInput
    /**
     * Limit how many StaticIssues to delete.
     */
    limit?: number
  }

  /**
   * StaticIssue without action
   */
  export type StaticIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticIssue
     */
    select?: StaticIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticIssue
     */
    omit?: StaticIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaticIssueInclude<ExtArgs> | null
  }


  /**
   * Model ReviewMetric
   */

  export type AggregateReviewMetric = {
    _count: ReviewMetricCountAggregateOutputType | null
    _avg: ReviewMetricAvgAggregateOutputType | null
    _sum: ReviewMetricSumAggregateOutputType | null
    _min: ReviewMetricMinAggregateOutputType | null
    _max: ReviewMetricMaxAggregateOutputType | null
  }

  export type ReviewMetricAvgAggregateOutputType = {
    complexity: number | null
    maintainability: number | null
    securityScore: number | null
    performanceScore: number | null
    readabilityScore: number | null
  }

  export type ReviewMetricSumAggregateOutputType = {
    complexity: number | null
    maintainability: number | null
    securityScore: number | null
    performanceScore: number | null
    readabilityScore: number | null
  }

  export type ReviewMetricMinAggregateOutputType = {
    id: string | null
    complexity: number | null
    maintainability: number | null
    securityScore: number | null
    performanceScore: number | null
    readabilityScore: number | null
    reviewId: string | null
  }

  export type ReviewMetricMaxAggregateOutputType = {
    id: string | null
    complexity: number | null
    maintainability: number | null
    securityScore: number | null
    performanceScore: number | null
    readabilityScore: number | null
    reviewId: string | null
  }

  export type ReviewMetricCountAggregateOutputType = {
    id: number
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
    reviewId: number
    _all: number
  }


  export type ReviewMetricAvgAggregateInputType = {
    complexity?: true
    maintainability?: true
    securityScore?: true
    performanceScore?: true
    readabilityScore?: true
  }

  export type ReviewMetricSumAggregateInputType = {
    complexity?: true
    maintainability?: true
    securityScore?: true
    performanceScore?: true
    readabilityScore?: true
  }

  export type ReviewMetricMinAggregateInputType = {
    id?: true
    complexity?: true
    maintainability?: true
    securityScore?: true
    performanceScore?: true
    readabilityScore?: true
    reviewId?: true
  }

  export type ReviewMetricMaxAggregateInputType = {
    id?: true
    complexity?: true
    maintainability?: true
    securityScore?: true
    performanceScore?: true
    readabilityScore?: true
    reviewId?: true
  }

  export type ReviewMetricCountAggregateInputType = {
    id?: true
    complexity?: true
    maintainability?: true
    securityScore?: true
    performanceScore?: true
    readabilityScore?: true
    reviewId?: true
    _all?: true
  }

  export type ReviewMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewMetric to aggregate.
     */
    where?: ReviewMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMetrics to fetch.
     */
    orderBy?: ReviewMetricOrderByWithRelationInput | ReviewMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewMetrics
    **/
    _count?: true | ReviewMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMetricMaxAggregateInputType
  }

  export type GetReviewMetricAggregateType<T extends ReviewMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewMetric[P]>
      : GetScalarType<T[P], AggregateReviewMetric[P]>
  }




  export type ReviewMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewMetricWhereInput
    orderBy?: ReviewMetricOrderByWithAggregationInput | ReviewMetricOrderByWithAggregationInput[]
    by: ReviewMetricScalarFieldEnum[] | ReviewMetricScalarFieldEnum
    having?: ReviewMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewMetricCountAggregateInputType | true
    _avg?: ReviewMetricAvgAggregateInputType
    _sum?: ReviewMetricSumAggregateInputType
    _min?: ReviewMetricMinAggregateInputType
    _max?: ReviewMetricMaxAggregateInputType
  }

  export type ReviewMetricGroupByOutputType = {
    id: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
    reviewId: string
    _count: ReviewMetricCountAggregateOutputType | null
    _avg: ReviewMetricAvgAggregateOutputType | null
    _sum: ReviewMetricSumAggregateOutputType | null
    _min: ReviewMetricMinAggregateOutputType | null
    _max: ReviewMetricMaxAggregateOutputType | null
  }

  type GetReviewMetricGroupByPayload<T extends ReviewMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewMetricGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewMetricGroupByOutputType[P]>
        }
      >
    >


  export type ReviewMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complexity?: boolean
    maintainability?: boolean
    securityScore?: boolean
    performanceScore?: boolean
    readabilityScore?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMetric"]>

  export type ReviewMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complexity?: boolean
    maintainability?: boolean
    securityScore?: boolean
    performanceScore?: boolean
    readabilityScore?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMetric"]>

  export type ReviewMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complexity?: boolean
    maintainability?: boolean
    securityScore?: boolean
    performanceScore?: boolean
    readabilityScore?: boolean
    reviewId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewMetric"]>

  export type ReviewMetricSelectScalar = {
    id?: boolean
    complexity?: boolean
    maintainability?: boolean
    securityScore?: boolean
    performanceScore?: boolean
    readabilityScore?: boolean
    reviewId?: boolean
  }

  export type ReviewMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "complexity" | "maintainability" | "securityScore" | "performanceScore" | "readabilityScore" | "reviewId", ExtArgs["result"]["reviewMetric"]>
  export type ReviewMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewMetric"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      complexity: number
      maintainability: number
      securityScore: number
      performanceScore: number
      readabilityScore: number
      reviewId: string
    }, ExtArgs["result"]["reviewMetric"]>
    composites: {}
  }

  type ReviewMetricGetPayload<S extends boolean | null | undefined | ReviewMetricDefaultArgs> = $Result.GetResult<Prisma.$ReviewMetricPayload, S>

  type ReviewMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewMetricCountAggregateInputType | true
    }

  export interface ReviewMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewMetric'], meta: { name: 'ReviewMetric' } }
    /**
     * Find zero or one ReviewMetric that matches the filter.
     * @param {ReviewMetricFindUniqueArgs} args - Arguments to find a ReviewMetric
     * @example
     * // Get one ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewMetricFindUniqueArgs>(args: SelectSubset<T, ReviewMetricFindUniqueArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewMetricFindUniqueOrThrowArgs} args - Arguments to find a ReviewMetric
     * @example
     * // Get one ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricFindFirstArgs} args - Arguments to find a ReviewMetric
     * @example
     * // Get one ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewMetricFindFirstArgs>(args?: SelectSubset<T, ReviewMetricFindFirstArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricFindFirstOrThrowArgs} args - Arguments to find a ReviewMetric
     * @example
     * // Get one ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewMetrics
     * const reviewMetrics = await prisma.reviewMetric.findMany()
     * 
     * // Get first 10 ReviewMetrics
     * const reviewMetrics = await prisma.reviewMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewMetricWithIdOnly = await prisma.reviewMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewMetricFindManyArgs>(args?: SelectSubset<T, ReviewMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewMetric.
     * @param {ReviewMetricCreateArgs} args - Arguments to create a ReviewMetric.
     * @example
     * // Create one ReviewMetric
     * const ReviewMetric = await prisma.reviewMetric.create({
     *   data: {
     *     // ... data to create a ReviewMetric
     *   }
     * })
     * 
     */
    create<T extends ReviewMetricCreateArgs>(args: SelectSubset<T, ReviewMetricCreateArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewMetrics.
     * @param {ReviewMetricCreateManyArgs} args - Arguments to create many ReviewMetrics.
     * @example
     * // Create many ReviewMetrics
     * const reviewMetric = await prisma.reviewMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewMetricCreateManyArgs>(args?: SelectSubset<T, ReviewMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewMetrics and returns the data saved in the database.
     * @param {ReviewMetricCreateManyAndReturnArgs} args - Arguments to create many ReviewMetrics.
     * @example
     * // Create many ReviewMetrics
     * const reviewMetric = await prisma.reviewMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewMetrics and only return the `id`
     * const reviewMetricWithIdOnly = await prisma.reviewMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewMetric.
     * @param {ReviewMetricDeleteArgs} args - Arguments to delete one ReviewMetric.
     * @example
     * // Delete one ReviewMetric
     * const ReviewMetric = await prisma.reviewMetric.delete({
     *   where: {
     *     // ... filter to delete one ReviewMetric
     *   }
     * })
     * 
     */
    delete<T extends ReviewMetricDeleteArgs>(args: SelectSubset<T, ReviewMetricDeleteArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewMetric.
     * @param {ReviewMetricUpdateArgs} args - Arguments to update one ReviewMetric.
     * @example
     * // Update one ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewMetricUpdateArgs>(args: SelectSubset<T, ReviewMetricUpdateArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewMetrics.
     * @param {ReviewMetricDeleteManyArgs} args - Arguments to filter ReviewMetrics to delete.
     * @example
     * // Delete a few ReviewMetrics
     * const { count } = await prisma.reviewMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewMetricDeleteManyArgs>(args?: SelectSubset<T, ReviewMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewMetrics
     * const reviewMetric = await prisma.reviewMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewMetricUpdateManyArgs>(args: SelectSubset<T, ReviewMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewMetrics and returns the data updated in the database.
     * @param {ReviewMetricUpdateManyAndReturnArgs} args - Arguments to update many ReviewMetrics.
     * @example
     * // Update many ReviewMetrics
     * const reviewMetric = await prisma.reviewMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewMetrics and only return the `id`
     * const reviewMetricWithIdOnly = await prisma.reviewMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewMetric.
     * @param {ReviewMetricUpsertArgs} args - Arguments to update or create a ReviewMetric.
     * @example
     * // Update or create a ReviewMetric
     * const reviewMetric = await prisma.reviewMetric.upsert({
     *   create: {
     *     // ... data to create a ReviewMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewMetric we want to update
     *   }
     * })
     */
    upsert<T extends ReviewMetricUpsertArgs>(args: SelectSubset<T, ReviewMetricUpsertArgs<ExtArgs>>): Prisma__ReviewMetricClient<$Result.GetResult<Prisma.$ReviewMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricCountArgs} args - Arguments to filter ReviewMetrics to count.
     * @example
     * // Count the number of ReviewMetrics
     * const count = await prisma.reviewMetric.count({
     *   where: {
     *     // ... the filter for the ReviewMetrics we want to count
     *   }
     * })
    **/
    count<T extends ReviewMetricCountArgs>(
      args?: Subset<T, ReviewMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewMetricAggregateArgs>(args: Subset<T, ReviewMetricAggregateArgs>): Prisma.PrismaPromise<GetReviewMetricAggregateType<T>>

    /**
     * Group by ReviewMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewMetricGroupByArgs} args - Group by arguments.
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
      T extends ReviewMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewMetricGroupByArgs['orderBy'] }
        : { orderBy?: ReviewMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewMetric model
   */
  readonly fields: ReviewMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewMetric model
   */
  interface ReviewMetricFieldRefs {
    readonly id: FieldRef<"ReviewMetric", 'String'>
    readonly complexity: FieldRef<"ReviewMetric", 'Int'>
    readonly maintainability: FieldRef<"ReviewMetric", 'Int'>
    readonly securityScore: FieldRef<"ReviewMetric", 'Int'>
    readonly performanceScore: FieldRef<"ReviewMetric", 'Int'>
    readonly readabilityScore: FieldRef<"ReviewMetric", 'Int'>
    readonly reviewId: FieldRef<"ReviewMetric", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewMetric findUnique
   */
  export type ReviewMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMetric to fetch.
     */
    where: ReviewMetricWhereUniqueInput
  }

  /**
   * ReviewMetric findUniqueOrThrow
   */
  export type ReviewMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMetric to fetch.
     */
    where: ReviewMetricWhereUniqueInput
  }

  /**
   * ReviewMetric findFirst
   */
  export type ReviewMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMetric to fetch.
     */
    where?: ReviewMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMetrics to fetch.
     */
    orderBy?: ReviewMetricOrderByWithRelationInput | ReviewMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewMetrics.
     */
    cursor?: ReviewMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewMetrics.
     */
    distinct?: ReviewMetricScalarFieldEnum | ReviewMetricScalarFieldEnum[]
  }

  /**
   * ReviewMetric findFirstOrThrow
   */
  export type ReviewMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMetric to fetch.
     */
    where?: ReviewMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMetrics to fetch.
     */
    orderBy?: ReviewMetricOrderByWithRelationInput | ReviewMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewMetrics.
     */
    cursor?: ReviewMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewMetrics.
     */
    distinct?: ReviewMetricScalarFieldEnum | ReviewMetricScalarFieldEnum[]
  }

  /**
   * ReviewMetric findMany
   */
  export type ReviewMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter, which ReviewMetrics to fetch.
     */
    where?: ReviewMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewMetrics to fetch.
     */
    orderBy?: ReviewMetricOrderByWithRelationInput | ReviewMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewMetrics.
     */
    cursor?: ReviewMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewMetrics.
     */
    skip?: number
    distinct?: ReviewMetricScalarFieldEnum | ReviewMetricScalarFieldEnum[]
  }

  /**
   * ReviewMetric create
   */
  export type ReviewMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewMetric.
     */
    data: XOR<ReviewMetricCreateInput, ReviewMetricUncheckedCreateInput>
  }

  /**
   * ReviewMetric createMany
   */
  export type ReviewMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewMetrics.
     */
    data: ReviewMetricCreateManyInput | ReviewMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewMetric createManyAndReturn
   */
  export type ReviewMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewMetrics.
     */
    data: ReviewMetricCreateManyInput | ReviewMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewMetric update
   */
  export type ReviewMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewMetric.
     */
    data: XOR<ReviewMetricUpdateInput, ReviewMetricUncheckedUpdateInput>
    /**
     * Choose, which ReviewMetric to update.
     */
    where: ReviewMetricWhereUniqueInput
  }

  /**
   * ReviewMetric updateMany
   */
  export type ReviewMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewMetrics.
     */
    data: XOR<ReviewMetricUpdateManyMutationInput, ReviewMetricUncheckedUpdateManyInput>
    /**
     * Filter which ReviewMetrics to update
     */
    where?: ReviewMetricWhereInput
    /**
     * Limit how many ReviewMetrics to update.
     */
    limit?: number
  }

  /**
   * ReviewMetric updateManyAndReturn
   */
  export type ReviewMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * The data used to update ReviewMetrics.
     */
    data: XOR<ReviewMetricUpdateManyMutationInput, ReviewMetricUncheckedUpdateManyInput>
    /**
     * Filter which ReviewMetrics to update
     */
    where?: ReviewMetricWhereInput
    /**
     * Limit how many ReviewMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewMetric upsert
   */
  export type ReviewMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewMetric to update in case it exists.
     */
    where: ReviewMetricWhereUniqueInput
    /**
     * In case the ReviewMetric found by the `where` argument doesn't exist, create a new ReviewMetric with this data.
     */
    create: XOR<ReviewMetricCreateInput, ReviewMetricUncheckedCreateInput>
    /**
     * In case the ReviewMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewMetricUpdateInput, ReviewMetricUncheckedUpdateInput>
  }

  /**
   * ReviewMetric delete
   */
  export type ReviewMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
    /**
     * Filter which ReviewMetric to delete.
     */
    where: ReviewMetricWhereUniqueInput
  }

  /**
   * ReviewMetric deleteMany
   */
  export type ReviewMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewMetrics to delete
     */
    where?: ReviewMetricWhereInput
    /**
     * Limit how many ReviewMetrics to delete.
     */
    limit?: number
  }

  /**
   * ReviewMetric without action
   */
  export type ReviewMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewMetric
     */
    select?: ReviewMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewMetric
     */
    omit?: ReviewMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewMetricInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    language: 'language',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    sourceCode: 'sourceCode',
    overallScore: 'overallScore',
    summary: 'summary',
    aiModel: 'aiModel',
    projectId: 'projectId',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewFindingScalarFieldEnum: {
    id: 'id',
    severity: 'severity',
    issue: 'issue',
    explanation: 'explanation',
    suggestedFix: 'suggestedFix',
    lineNumber: 'lineNumber',
    reviewId: 'reviewId'
  };

  export type ReviewFindingScalarFieldEnum = (typeof ReviewFindingScalarFieldEnum)[keyof typeof ReviewFindingScalarFieldEnum]


  export const StaticIssueScalarFieldEnum: {
    id: 'id',
    tool: 'tool',
    severity: 'severity',
    message: 'message',
    lineNumber: 'lineNumber',
    reviewId: 'reviewId'
  };

  export type StaticIssueScalarFieldEnum = (typeof StaticIssueScalarFieldEnum)[keyof typeof StaticIssueScalarFieldEnum]


  export const ReviewMetricScalarFieldEnum: {
    id: 'id',
    complexity: 'complexity',
    maintainability: 'maintainability',
    securityScore: 'securityScore',
    performanceScore: 'performanceScore',
    readabilityScore: 'readabilityScore',
    reviewId: 'reviewId'
  };

  export type ReviewMetricScalarFieldEnum = (typeof ReviewMetricScalarFieldEnum)[keyof typeof ReviewMetricScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    language?: EnumLanguageFilter<"Project"> | $Enums.Language
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    language?: EnumLanguageFilter<"Project"> | $Enums.Language
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    language?: EnumLanguageWithAggregatesFilter<"Project"> | $Enums.Language
    userId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    sourceCode?: StringFilter<"Review"> | string
    overallScore?: IntFilter<"Review"> | number
    summary?: StringFilter<"Review"> | string
    aiModel?: StringFilter<"Review"> | string
    projectId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    findings?: ReviewFindingListRelationFilter
    staticIssues?: StaticIssueListRelationFilter
    metrics?: XOR<ReviewMetricNullableScalarRelationFilter, ReviewMetricWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    overallScore?: SortOrder
    summary?: SortOrder
    aiModel?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    project?: ProjectOrderByWithRelationInput
    findings?: ReviewFindingOrderByRelationAggregateInput
    staticIssues?: StaticIssueOrderByRelationAggregateInput
    metrics?: ReviewMetricOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    sourceCode?: StringFilter<"Review"> | string
    overallScore?: IntFilter<"Review"> | number
    summary?: StringFilter<"Review"> | string
    aiModel?: StringFilter<"Review"> | string
    projectId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    findings?: ReviewFindingListRelationFilter
    staticIssues?: StaticIssueListRelationFilter
    metrics?: XOR<ReviewMetricNullableScalarRelationFilter, ReviewMetricWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    overallScore?: SortOrder
    summary?: SortOrder
    aiModel?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    sourceCode?: StringWithAggregatesFilter<"Review"> | string
    overallScore?: IntWithAggregatesFilter<"Review"> | number
    summary?: StringWithAggregatesFilter<"Review"> | string
    aiModel?: StringWithAggregatesFilter<"Review"> | string
    projectId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
  }

  export type ReviewFindingWhereInput = {
    AND?: ReviewFindingWhereInput | ReviewFindingWhereInput[]
    OR?: ReviewFindingWhereInput[]
    NOT?: ReviewFindingWhereInput | ReviewFindingWhereInput[]
    id?: StringFilter<"ReviewFinding"> | string
    severity?: EnumSeverityFilter<"ReviewFinding"> | $Enums.Severity
    issue?: StringFilter<"ReviewFinding"> | string
    explanation?: StringFilter<"ReviewFinding"> | string
    suggestedFix?: StringFilter<"ReviewFinding"> | string
    lineNumber?: IntNullableFilter<"ReviewFinding"> | number | null
    reviewId?: StringFilter<"ReviewFinding"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewFindingOrderByWithRelationInput = {
    id?: SortOrder
    severity?: SortOrder
    issue?: SortOrder
    explanation?: SortOrder
    suggestedFix?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    reviewId?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type ReviewFindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewFindingWhereInput | ReviewFindingWhereInput[]
    OR?: ReviewFindingWhereInput[]
    NOT?: ReviewFindingWhereInput | ReviewFindingWhereInput[]
    severity?: EnumSeverityFilter<"ReviewFinding"> | $Enums.Severity
    issue?: StringFilter<"ReviewFinding"> | string
    explanation?: StringFilter<"ReviewFinding"> | string
    suggestedFix?: StringFilter<"ReviewFinding"> | string
    lineNumber?: IntNullableFilter<"ReviewFinding"> | number | null
    reviewId?: StringFilter<"ReviewFinding"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type ReviewFindingOrderByWithAggregationInput = {
    id?: SortOrder
    severity?: SortOrder
    issue?: SortOrder
    explanation?: SortOrder
    suggestedFix?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    reviewId?: SortOrder
    _count?: ReviewFindingCountOrderByAggregateInput
    _avg?: ReviewFindingAvgOrderByAggregateInput
    _max?: ReviewFindingMaxOrderByAggregateInput
    _min?: ReviewFindingMinOrderByAggregateInput
    _sum?: ReviewFindingSumOrderByAggregateInput
  }

  export type ReviewFindingScalarWhereWithAggregatesInput = {
    AND?: ReviewFindingScalarWhereWithAggregatesInput | ReviewFindingScalarWhereWithAggregatesInput[]
    OR?: ReviewFindingScalarWhereWithAggregatesInput[]
    NOT?: ReviewFindingScalarWhereWithAggregatesInput | ReviewFindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewFinding"> | string
    severity?: EnumSeverityWithAggregatesFilter<"ReviewFinding"> | $Enums.Severity
    issue?: StringWithAggregatesFilter<"ReviewFinding"> | string
    explanation?: StringWithAggregatesFilter<"ReviewFinding"> | string
    suggestedFix?: StringWithAggregatesFilter<"ReviewFinding"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"ReviewFinding"> | number | null
    reviewId?: StringWithAggregatesFilter<"ReviewFinding"> | string
  }

  export type StaticIssueWhereInput = {
    AND?: StaticIssueWhereInput | StaticIssueWhereInput[]
    OR?: StaticIssueWhereInput[]
    NOT?: StaticIssueWhereInput | StaticIssueWhereInput[]
    id?: StringFilter<"StaticIssue"> | string
    tool?: StringFilter<"StaticIssue"> | string
    severity?: EnumSeverityFilter<"StaticIssue"> | $Enums.Severity
    message?: StringFilter<"StaticIssue"> | string
    lineNumber?: IntNullableFilter<"StaticIssue"> | number | null
    reviewId?: StringFilter<"StaticIssue"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type StaticIssueOrderByWithRelationInput = {
    id?: SortOrder
    tool?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    reviewId?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type StaticIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaticIssueWhereInput | StaticIssueWhereInput[]
    OR?: StaticIssueWhereInput[]
    NOT?: StaticIssueWhereInput | StaticIssueWhereInput[]
    tool?: StringFilter<"StaticIssue"> | string
    severity?: EnumSeverityFilter<"StaticIssue"> | $Enums.Severity
    message?: StringFilter<"StaticIssue"> | string
    lineNumber?: IntNullableFilter<"StaticIssue"> | number | null
    reviewId?: StringFilter<"StaticIssue"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type StaticIssueOrderByWithAggregationInput = {
    id?: SortOrder
    tool?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    reviewId?: SortOrder
    _count?: StaticIssueCountOrderByAggregateInput
    _avg?: StaticIssueAvgOrderByAggregateInput
    _max?: StaticIssueMaxOrderByAggregateInput
    _min?: StaticIssueMinOrderByAggregateInput
    _sum?: StaticIssueSumOrderByAggregateInput
  }

  export type StaticIssueScalarWhereWithAggregatesInput = {
    AND?: StaticIssueScalarWhereWithAggregatesInput | StaticIssueScalarWhereWithAggregatesInput[]
    OR?: StaticIssueScalarWhereWithAggregatesInput[]
    NOT?: StaticIssueScalarWhereWithAggregatesInput | StaticIssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaticIssue"> | string
    tool?: StringWithAggregatesFilter<"StaticIssue"> | string
    severity?: EnumSeverityWithAggregatesFilter<"StaticIssue"> | $Enums.Severity
    message?: StringWithAggregatesFilter<"StaticIssue"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"StaticIssue"> | number | null
    reviewId?: StringWithAggregatesFilter<"StaticIssue"> | string
  }

  export type ReviewMetricWhereInput = {
    AND?: ReviewMetricWhereInput | ReviewMetricWhereInput[]
    OR?: ReviewMetricWhereInput[]
    NOT?: ReviewMetricWhereInput | ReviewMetricWhereInput[]
    id?: StringFilter<"ReviewMetric"> | string
    complexity?: IntFilter<"ReviewMetric"> | number
    maintainability?: IntFilter<"ReviewMetric"> | number
    securityScore?: IntFilter<"ReviewMetric"> | number
    performanceScore?: IntFilter<"ReviewMetric"> | number
    readabilityScore?: IntFilter<"ReviewMetric"> | number
    reviewId?: StringFilter<"ReviewMetric"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewMetricOrderByWithRelationInput = {
    id?: SortOrder
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
    reviewId?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type ReviewMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewId?: string
    AND?: ReviewMetricWhereInput | ReviewMetricWhereInput[]
    OR?: ReviewMetricWhereInput[]
    NOT?: ReviewMetricWhereInput | ReviewMetricWhereInput[]
    complexity?: IntFilter<"ReviewMetric"> | number
    maintainability?: IntFilter<"ReviewMetric"> | number
    securityScore?: IntFilter<"ReviewMetric"> | number
    performanceScore?: IntFilter<"ReviewMetric"> | number
    readabilityScore?: IntFilter<"ReviewMetric"> | number
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id" | "reviewId">

  export type ReviewMetricOrderByWithAggregationInput = {
    id?: SortOrder
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
    reviewId?: SortOrder
    _count?: ReviewMetricCountOrderByAggregateInput
    _avg?: ReviewMetricAvgOrderByAggregateInput
    _max?: ReviewMetricMaxOrderByAggregateInput
    _min?: ReviewMetricMinOrderByAggregateInput
    _sum?: ReviewMetricSumOrderByAggregateInput
  }

  export type ReviewMetricScalarWhereWithAggregatesInput = {
    AND?: ReviewMetricScalarWhereWithAggregatesInput | ReviewMetricScalarWhereWithAggregatesInput[]
    OR?: ReviewMetricScalarWhereWithAggregatesInput[]
    NOT?: ReviewMetricScalarWhereWithAggregatesInput | ReviewMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewMetric"> | string
    complexity?: IntWithAggregatesFilter<"ReviewMetric"> | number
    maintainability?: IntWithAggregatesFilter<"ReviewMetric"> | number
    securityScore?: IntWithAggregatesFilter<"ReviewMetric"> | number
    performanceScore?: IntWithAggregatesFilter<"ReviewMetric"> | number
    readabilityScore?: IntWithAggregatesFilter<"ReviewMetric"> | number
    reviewId?: StringWithAggregatesFilter<"ReviewMetric"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    language: $Enums.Language
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    reviews?: ReviewCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    language: $Enums.Language
    userId: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    reviews?: ReviewUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    language: $Enums.Language
    userId: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    project: ProjectCreateNestedOneWithoutReviewsInput
    findings?: ReviewFindingCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueUncheckedCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    project?: ProjectUpdateOneRequiredWithoutReviewsNestedInput
    findings?: ReviewFindingUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUncheckedUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
  }

  export type ReviewFindingCreateInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
    review: ReviewCreateNestedOneWithoutFindingsInput
  }

  export type ReviewFindingUncheckedCreateInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
    reviewId: string
  }

  export type ReviewFindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    review?: ReviewUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type ReviewFindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewFindingCreateManyInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
    reviewId: string
  }

  export type ReviewFindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewFindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type StaticIssueCreateInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
    review: ReviewCreateNestedOneWithoutStaticIssuesInput
  }

  export type StaticIssueUncheckedCreateInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
    reviewId: string
  }

  export type StaticIssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    review?: ReviewUpdateOneRequiredWithoutStaticIssuesNestedInput
  }

  export type StaticIssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type StaticIssueCreateManyInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
    reviewId: string
  }

  export type StaticIssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StaticIssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewMetricCreateInput = {
    id?: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
    review: ReviewCreateNestedOneWithoutMetricsInput
  }

  export type ReviewMetricUncheckedCreateInput = {
    id?: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
    reviewId: string
  }

  export type ReviewMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type ReviewMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewMetricCreateManyInput = {
    id?: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
    reviewId: string
  }

  export type ReviewMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    language?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
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

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ReviewFindingListRelationFilter = {
    every?: ReviewFindingWhereInput
    some?: ReviewFindingWhereInput
    none?: ReviewFindingWhereInput
  }

  export type StaticIssueListRelationFilter = {
    every?: StaticIssueWhereInput
    some?: StaticIssueWhereInput
    none?: StaticIssueWhereInput
  }

  export type ReviewMetricNullableScalarRelationFilter = {
    is?: ReviewMetricWhereInput | null
    isNot?: ReviewMetricWhereInput | null
  }

  export type ReviewFindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaticIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    overallScore?: SortOrder
    summary?: SortOrder
    aiModel?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    overallScore?: SortOrder
    summary?: SortOrder
    aiModel?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    overallScore?: SortOrder
    summary?: SortOrder
    aiModel?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    overallScore?: SortOrder
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

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
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

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewFindingCountOrderByAggregateInput = {
    id?: SortOrder
    severity?: SortOrder
    issue?: SortOrder
    explanation?: SortOrder
    suggestedFix?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewFindingAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type ReviewFindingMaxOrderByAggregateInput = {
    id?: SortOrder
    severity?: SortOrder
    issue?: SortOrder
    explanation?: SortOrder
    suggestedFix?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewFindingMinOrderByAggregateInput = {
    id?: SortOrder
    severity?: SortOrder
    issue?: SortOrder
    explanation?: SortOrder
    suggestedFix?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewFindingSumOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
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

  export type StaticIssueCountOrderByAggregateInput = {
    id?: SortOrder
    tool?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type StaticIssueAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type StaticIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    tool?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type StaticIssueMinOrderByAggregateInput = {
    id?: SortOrder
    tool?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    lineNumber?: SortOrder
    reviewId?: SortOrder
  }

  export type StaticIssueSumOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type ReviewMetricCountOrderByAggregateInput = {
    id?: SortOrder
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewMetricAvgOrderByAggregateInput = {
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
  }

  export type ReviewMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewMetricMinOrderByAggregateInput = {
    id?: SortOrder
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewMetricSumOrderByAggregateInput = {
    complexity?: SortOrder
    maintainability?: SortOrder
    securityScore?: SortOrder
    performanceScore?: SortOrder
    readabilityScore?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput> | ReviewCreateWithoutProjectInput[] | ReviewUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProjectInput | ReviewCreateOrConnectWithoutProjectInput[]
    createMany?: ReviewCreateManyProjectInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput> | ReviewCreateWithoutProjectInput[] | ReviewUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProjectInput | ReviewCreateOrConnectWithoutProjectInput[]
    createMany?: ReviewCreateManyProjectInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ReviewUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput> | ReviewCreateWithoutProjectInput[] | ReviewUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProjectInput | ReviewCreateOrConnectWithoutProjectInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProjectInput | ReviewUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReviewCreateManyProjectInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProjectInput | ReviewUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProjectInput | ReviewUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput> | ReviewCreateWithoutProjectInput[] | ReviewUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProjectInput | ReviewCreateOrConnectWithoutProjectInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProjectInput | ReviewUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReviewCreateManyProjectInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProjectInput | ReviewUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProjectInput | ReviewUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProjectCreateWithoutReviewsInput, ProjectUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReviewsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ReviewFindingCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput> | ReviewFindingCreateWithoutReviewInput[] | ReviewFindingUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewFindingCreateOrConnectWithoutReviewInput | ReviewFindingCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewFindingCreateManyReviewInputEnvelope
    connect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
  }

  export type StaticIssueCreateNestedManyWithoutReviewInput = {
    create?: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput> | StaticIssueCreateWithoutReviewInput[] | StaticIssueUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: StaticIssueCreateOrConnectWithoutReviewInput | StaticIssueCreateOrConnectWithoutReviewInput[]
    createMany?: StaticIssueCreateManyReviewInputEnvelope
    connect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
  }

  export type ReviewMetricCreateNestedOneWithoutReviewInput = {
    create?: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewMetricCreateOrConnectWithoutReviewInput
    connect?: ReviewMetricWhereUniqueInput
  }

  export type ReviewFindingUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput> | ReviewFindingCreateWithoutReviewInput[] | ReviewFindingUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewFindingCreateOrConnectWithoutReviewInput | ReviewFindingCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewFindingCreateManyReviewInputEnvelope
    connect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
  }

  export type StaticIssueUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput> | StaticIssueCreateWithoutReviewInput[] | StaticIssueUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: StaticIssueCreateOrConnectWithoutReviewInput | StaticIssueCreateOrConnectWithoutReviewInput[]
    createMany?: StaticIssueCreateManyReviewInputEnvelope
    connect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
  }

  export type ReviewMetricUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewMetricCreateOrConnectWithoutReviewInput
    connect?: ReviewMetricWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type ProjectUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProjectCreateWithoutReviewsInput, ProjectUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReviewsInput
    upsert?: ProjectUpsertWithoutReviewsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutReviewsInput, ProjectUpdateWithoutReviewsInput>, ProjectUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewFindingUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput> | ReviewFindingCreateWithoutReviewInput[] | ReviewFindingUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewFindingCreateOrConnectWithoutReviewInput | ReviewFindingCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewFindingUpsertWithWhereUniqueWithoutReviewInput | ReviewFindingUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewFindingCreateManyReviewInputEnvelope
    set?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    disconnect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    delete?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    connect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    update?: ReviewFindingUpdateWithWhereUniqueWithoutReviewInput | ReviewFindingUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewFindingUpdateManyWithWhereWithoutReviewInput | ReviewFindingUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewFindingScalarWhereInput | ReviewFindingScalarWhereInput[]
  }

  export type StaticIssueUpdateManyWithoutReviewNestedInput = {
    create?: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput> | StaticIssueCreateWithoutReviewInput[] | StaticIssueUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: StaticIssueCreateOrConnectWithoutReviewInput | StaticIssueCreateOrConnectWithoutReviewInput[]
    upsert?: StaticIssueUpsertWithWhereUniqueWithoutReviewInput | StaticIssueUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: StaticIssueCreateManyReviewInputEnvelope
    set?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    disconnect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    delete?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    connect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    update?: StaticIssueUpdateWithWhereUniqueWithoutReviewInput | StaticIssueUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: StaticIssueUpdateManyWithWhereWithoutReviewInput | StaticIssueUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: StaticIssueScalarWhereInput | StaticIssueScalarWhereInput[]
  }

  export type ReviewMetricUpdateOneWithoutReviewNestedInput = {
    create?: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewMetricCreateOrConnectWithoutReviewInput
    upsert?: ReviewMetricUpsertWithoutReviewInput
    disconnect?: ReviewMetricWhereInput | boolean
    delete?: ReviewMetricWhereInput | boolean
    connect?: ReviewMetricWhereUniqueInput
    update?: XOR<XOR<ReviewMetricUpdateToOneWithWhereWithoutReviewInput, ReviewMetricUpdateWithoutReviewInput>, ReviewMetricUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewFindingUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput> | ReviewFindingCreateWithoutReviewInput[] | ReviewFindingUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewFindingCreateOrConnectWithoutReviewInput | ReviewFindingCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewFindingUpsertWithWhereUniqueWithoutReviewInput | ReviewFindingUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewFindingCreateManyReviewInputEnvelope
    set?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    disconnect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    delete?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    connect?: ReviewFindingWhereUniqueInput | ReviewFindingWhereUniqueInput[]
    update?: ReviewFindingUpdateWithWhereUniqueWithoutReviewInput | ReviewFindingUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewFindingUpdateManyWithWhereWithoutReviewInput | ReviewFindingUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewFindingScalarWhereInput | ReviewFindingScalarWhereInput[]
  }

  export type StaticIssueUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput> | StaticIssueCreateWithoutReviewInput[] | StaticIssueUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: StaticIssueCreateOrConnectWithoutReviewInput | StaticIssueCreateOrConnectWithoutReviewInput[]
    upsert?: StaticIssueUpsertWithWhereUniqueWithoutReviewInput | StaticIssueUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: StaticIssueCreateManyReviewInputEnvelope
    set?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    disconnect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    delete?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    connect?: StaticIssueWhereUniqueInput | StaticIssueWhereUniqueInput[]
    update?: StaticIssueUpdateWithWhereUniqueWithoutReviewInput | StaticIssueUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: StaticIssueUpdateManyWithWhereWithoutReviewInput | StaticIssueUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: StaticIssueScalarWhereInput | StaticIssueScalarWhereInput[]
  }

  export type ReviewMetricUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ReviewMetricCreateOrConnectWithoutReviewInput
    upsert?: ReviewMetricUpsertWithoutReviewInput
    disconnect?: ReviewMetricWhereInput | boolean
    delete?: ReviewMetricWhereInput | boolean
    connect?: ReviewMetricWhereUniqueInput
    update?: XOR<XOR<ReviewMetricUpdateToOneWithWhereWithoutReviewInput, ReviewMetricUpdateWithoutReviewInput>, ReviewMetricUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewCreateNestedOneWithoutFindingsInput = {
    create?: XOR<ReviewCreateWithoutFindingsInput, ReviewUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFindingsInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<ReviewCreateWithoutFindingsInput, ReviewUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFindingsInput
    upsert?: ReviewUpsertWithoutFindingsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutFindingsInput, ReviewUpdateWithoutFindingsInput>, ReviewUncheckedUpdateWithoutFindingsInput>
  }

  export type ReviewCreateNestedOneWithoutStaticIssuesInput = {
    create?: XOR<ReviewCreateWithoutStaticIssuesInput, ReviewUncheckedCreateWithoutStaticIssuesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutStaticIssuesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutStaticIssuesNestedInput = {
    create?: XOR<ReviewCreateWithoutStaticIssuesInput, ReviewUncheckedCreateWithoutStaticIssuesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutStaticIssuesInput
    upsert?: ReviewUpsertWithoutStaticIssuesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutStaticIssuesInput, ReviewUpdateWithoutStaticIssuesInput>, ReviewUncheckedUpdateWithoutStaticIssuesInput>
  }

  export type ReviewCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ReviewCreateWithoutMetricsInput, ReviewUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutMetricsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<ReviewCreateWithoutMetricsInput, ReviewUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutMetricsInput
    upsert?: ReviewUpsertWithoutMetricsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutMetricsInput, ReviewUpdateWithoutMetricsInput>, ReviewUncheckedUpdateWithoutMetricsInput>
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

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
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

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
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

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
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

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    language: $Enums.Language
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    language: $Enums.Language
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    language?: EnumLanguageFilter<"Project"> | $Enums.Language
    userId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ReviewCreateWithoutProjectInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    findings?: ReviewFindingCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutProjectInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueUncheckedCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutProjectInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput>
  }

  export type ReviewCreateManyProjectInputEnvelope = {
    data: ReviewCreateManyProjectInput | ReviewCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProjectInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProjectInput, ReviewUncheckedUpdateWithoutProjectInput>
    create: XOR<ReviewCreateWithoutProjectInput, ReviewUncheckedCreateWithoutProjectInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProjectInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProjectInput, ReviewUncheckedUpdateWithoutProjectInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProjectInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProjectInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    sourceCode?: StringFilter<"Review"> | string
    overallScore?: IntFilter<"Review"> | number
    summary?: StringFilter<"Review"> | string
    aiModel?: StringFilter<"Review"> | string
    projectId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
  }

  export type ProjectCreateWithoutReviewsInput = {
    id?: string
    name: string
    language: $Enums.Language
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    language: $Enums.Language
    userId: string
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutReviewsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutReviewsInput, ProjectUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewFindingCreateWithoutReviewInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
  }

  export type ReviewFindingUncheckedCreateWithoutReviewInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
  }

  export type ReviewFindingCreateOrConnectWithoutReviewInput = {
    where: ReviewFindingWhereUniqueInput
    create: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput>
  }

  export type ReviewFindingCreateManyReviewInputEnvelope = {
    data: ReviewFindingCreateManyReviewInput | ReviewFindingCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type StaticIssueCreateWithoutReviewInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
  }

  export type StaticIssueUncheckedCreateWithoutReviewInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
  }

  export type StaticIssueCreateOrConnectWithoutReviewInput = {
    where: StaticIssueWhereUniqueInput
    create: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput>
  }

  export type StaticIssueCreateManyReviewInputEnvelope = {
    data: StaticIssueCreateManyReviewInput | StaticIssueCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ReviewMetricCreateWithoutReviewInput = {
    id?: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
  }

  export type ReviewMetricUncheckedCreateWithoutReviewInput = {
    id?: string
    complexity: number
    maintainability: number
    securityScore: number
    performanceScore: number
    readabilityScore: number
  }

  export type ReviewMetricCreateOrConnectWithoutReviewInput = {
    where: ReviewMetricWhereUniqueInput
    create: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
  }

  export type ProjectUpsertWithoutReviewsInput = {
    update: XOR<ProjectUpdateWithoutReviewsInput, ProjectUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProjectCreateWithoutReviewsInput, ProjectUncheckedCreateWithoutReviewsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutReviewsInput, ProjectUncheckedUpdateWithoutReviewsInput>
  }

  export type ProjectUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewFindingUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewFindingWhereUniqueInput
    update: XOR<ReviewFindingUpdateWithoutReviewInput, ReviewFindingUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewFindingCreateWithoutReviewInput, ReviewFindingUncheckedCreateWithoutReviewInput>
  }

  export type ReviewFindingUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewFindingWhereUniqueInput
    data: XOR<ReviewFindingUpdateWithoutReviewInput, ReviewFindingUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewFindingUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewFindingScalarWhereInput
    data: XOR<ReviewFindingUpdateManyMutationInput, ReviewFindingUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewFindingScalarWhereInput = {
    AND?: ReviewFindingScalarWhereInput | ReviewFindingScalarWhereInput[]
    OR?: ReviewFindingScalarWhereInput[]
    NOT?: ReviewFindingScalarWhereInput | ReviewFindingScalarWhereInput[]
    id?: StringFilter<"ReviewFinding"> | string
    severity?: EnumSeverityFilter<"ReviewFinding"> | $Enums.Severity
    issue?: StringFilter<"ReviewFinding"> | string
    explanation?: StringFilter<"ReviewFinding"> | string
    suggestedFix?: StringFilter<"ReviewFinding"> | string
    lineNumber?: IntNullableFilter<"ReviewFinding"> | number | null
    reviewId?: StringFilter<"ReviewFinding"> | string
  }

  export type StaticIssueUpsertWithWhereUniqueWithoutReviewInput = {
    where: StaticIssueWhereUniqueInput
    update: XOR<StaticIssueUpdateWithoutReviewInput, StaticIssueUncheckedUpdateWithoutReviewInput>
    create: XOR<StaticIssueCreateWithoutReviewInput, StaticIssueUncheckedCreateWithoutReviewInput>
  }

  export type StaticIssueUpdateWithWhereUniqueWithoutReviewInput = {
    where: StaticIssueWhereUniqueInput
    data: XOR<StaticIssueUpdateWithoutReviewInput, StaticIssueUncheckedUpdateWithoutReviewInput>
  }

  export type StaticIssueUpdateManyWithWhereWithoutReviewInput = {
    where: StaticIssueScalarWhereInput
    data: XOR<StaticIssueUpdateManyMutationInput, StaticIssueUncheckedUpdateManyWithoutReviewInput>
  }

  export type StaticIssueScalarWhereInput = {
    AND?: StaticIssueScalarWhereInput | StaticIssueScalarWhereInput[]
    OR?: StaticIssueScalarWhereInput[]
    NOT?: StaticIssueScalarWhereInput | StaticIssueScalarWhereInput[]
    id?: StringFilter<"StaticIssue"> | string
    tool?: StringFilter<"StaticIssue"> | string
    severity?: EnumSeverityFilter<"StaticIssue"> | $Enums.Severity
    message?: StringFilter<"StaticIssue"> | string
    lineNumber?: IntNullableFilter<"StaticIssue"> | number | null
    reviewId?: StringFilter<"StaticIssue"> | string
  }

  export type ReviewMetricUpsertWithoutReviewInput = {
    update: XOR<ReviewMetricUpdateWithoutReviewInput, ReviewMetricUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewMetricCreateWithoutReviewInput, ReviewMetricUncheckedCreateWithoutReviewInput>
    where?: ReviewMetricWhereInput
  }

  export type ReviewMetricUpdateToOneWithWhereWithoutReviewInput = {
    where?: ReviewMetricWhereInput
    data: XOR<ReviewMetricUpdateWithoutReviewInput, ReviewMetricUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewMetricUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewMetricUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    complexity?: IntFieldUpdateOperationsInput | number
    maintainability?: IntFieldUpdateOperationsInput | number
    securityScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    readabilityScore?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateWithoutFindingsInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    project: ProjectCreateNestedOneWithoutReviewsInput
    staticIssues?: StaticIssueCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutFindingsInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    staticIssues?: StaticIssueUncheckedCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutFindingsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutFindingsInput, ReviewUncheckedCreateWithoutFindingsInput>
  }

  export type ReviewUpsertWithoutFindingsInput = {
    update: XOR<ReviewUpdateWithoutFindingsInput, ReviewUncheckedUpdateWithoutFindingsInput>
    create: XOR<ReviewCreateWithoutFindingsInput, ReviewUncheckedCreateWithoutFindingsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutFindingsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutFindingsInput, ReviewUncheckedUpdateWithoutFindingsInput>
  }

  export type ReviewUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    project?: ProjectUpdateOneRequiredWithoutReviewsNestedInput
    staticIssues?: StaticIssueUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    staticIssues?: StaticIssueUncheckedUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutStaticIssuesInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    project: ProjectCreateNestedOneWithoutReviewsInput
    findings?: ReviewFindingCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutStaticIssuesInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedCreateNestedManyWithoutReviewInput
    metrics?: ReviewMetricUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutStaticIssuesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStaticIssuesInput, ReviewUncheckedCreateWithoutStaticIssuesInput>
  }

  export type ReviewUpsertWithoutStaticIssuesInput = {
    update: XOR<ReviewUpdateWithoutStaticIssuesInput, ReviewUncheckedUpdateWithoutStaticIssuesInput>
    create: XOR<ReviewCreateWithoutStaticIssuesInput, ReviewUncheckedCreateWithoutStaticIssuesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutStaticIssuesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutStaticIssuesInput, ReviewUncheckedUpdateWithoutStaticIssuesInput>
  }

  export type ReviewUpdateWithoutStaticIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    project?: ProjectUpdateOneRequiredWithoutReviewsNestedInput
    findings?: ReviewFindingUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStaticIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutMetricsInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    project: ProjectCreateNestedOneWithoutReviewsInput
    findings?: ReviewFindingCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutMetricsInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    projectId: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedCreateNestedManyWithoutReviewInput
    staticIssues?: StaticIssueUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutMetricsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMetricsInput, ReviewUncheckedCreateWithoutMetricsInput>
  }

  export type ReviewUpsertWithoutMetricsInput = {
    update: XOR<ReviewUpdateWithoutMetricsInput, ReviewUncheckedUpdateWithoutMetricsInput>
    create: XOR<ReviewCreateWithoutMetricsInput, ReviewUncheckedCreateWithoutMetricsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutMetricsInput, ReviewUncheckedUpdateWithoutMetricsInput>
  }

  export type ReviewUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    project?: ProjectUpdateOneRequiredWithoutReviewsNestedInput
    findings?: ReviewFindingUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    language: $Enums.Language
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyProjectInput = {
    id?: string
    sourceCode: string
    overallScore: number
    summary: string
    aiModel: string
    createdAt?: Date | string
    status?: $Enums.ReviewStatus
  }

  export type ReviewUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    findings?: ReviewFindingUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    findings?: ReviewFindingUncheckedUpdateManyWithoutReviewNestedInput
    staticIssues?: StaticIssueUncheckedUpdateManyWithoutReviewNestedInput
    metrics?: ReviewMetricUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
  }

  export type ReviewFindingCreateManyReviewInput = {
    id?: string
    severity: $Enums.Severity
    issue: string
    explanation: string
    suggestedFix: string
    lineNumber?: number | null
  }

  export type StaticIssueCreateManyReviewInput = {
    id?: string
    tool: string
    severity: $Enums.Severity
    message: string
    lineNumber?: number | null
  }

  export type ReviewFindingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewFindingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewFindingUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    issue?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    suggestedFix?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StaticIssueUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StaticIssueUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StaticIssueUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    tool?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
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