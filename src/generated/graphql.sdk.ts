// @ts-nocheck
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: string; output: string; }
  Cursor: { input: string; output: string; }
  Datetime: { input: Date; output: Date; }
  JSON: { input: any; output: any; }
  UUID: { input: string; output: string; }
};

export enum AuditEventType {
  Authentication = 'authentication',
  CircuitBreaker = 'circuit_breaker',
  PermissionCheck = 'permission_check',
  PermissionDenied = 'permission_denied',
  ResourceCreate = 'resource_create',
  ResourceDelete = 'resource_delete',
  ResourceUpdate = 'resource_update'
}

/** A filter to be used against AuditEventType fields. All fields are combined with a logical ‘and.’ */
export type AuditEventTypeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<AuditEventType>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<AuditEventType>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<AuditEventType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<AuditEventType>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<AuditEventType>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<AuditEventType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<AuditEventType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<AuditEventType>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<AuditEventType>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<AuditEventType>>;
};

export type AuditLog = Node & {
  __typename?: 'AuditLog';
  action?: Maybe<Scalars['String']['output']>;
  allowed?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['Datetime']['output'];
  durationMs?: Maybe<Scalars['Int']['output']>;
  eventType: AuditEventType;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  idpUserId?: Maybe<Scalars['UUID']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  resourceId?: Maybe<Scalars['UUID']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  rowId: Scalars['UUID']['output'];
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type AuditLogAggregates = {
  __typename?: 'AuditLogAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<AuditLogAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AuditLogDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<AuditLogMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<AuditLogMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<AuditLogStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<AuditLogStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<AuditLogSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<AuditLogVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<AuditLogVarianceSampleAggregates>;
};

export type AuditLogAverageAggregates = {
  __typename?: 'AuditLogAverageAggregates';
  /** Mean average of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `AuditLog` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AuditLogCondition = {
  /** Checks for equality with the object’s `action` field. */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `allowed` field. */
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `durationMs` field. */
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `eventType` field. */
  eventType?: InputMaybe<AuditEventType>;
  /** Checks for equality with the object’s `idpUserId` field. */
  idpUserId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `ipAddress` field. */
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `resourceId` field. */
  resourceId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `resourceType` field. */
  resourceType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `userAgent` field. */
  userAgent?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `AuditLog` values. */
export type AuditLogConnection = {
  __typename?: 'AuditLogConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AuditLogAggregates>;
  /** A list of edges which contains the `AuditLog` and cursor to aid in pagination. */
  edges: Array<AuditLogEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AuditLogAggregates>>;
  /** A list of `AuditLog` objects. */
  nodes: Array<AuditLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AuditLog` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `AuditLog` values. */
export type AuditLogConnectionGroupedAggregatesArgs = {
  groupBy: Array<AuditLogGroupBy>;
  having?: InputMaybe<AuditLogHavingInput>;
};

export type AuditLogDistinctCountAggregates = {
  __typename?: 'AuditLogDistinctCountAggregates';
  /** Distinct count of action across the matching connection */
  action?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of allowed across the matching connection */
  allowed?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventType across the matching connection */
  eventType?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of idpUserId across the matching connection */
  idpUserId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of ipAddress across the matching connection */
  ipAddress?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of metadata across the matching connection */
  metadata?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of resourceId across the matching connection */
  resourceId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of resourceType across the matching connection */
  resourceType?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userAgent across the matching connection */
  userAgent?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `AuditLog` edge in the connection. */
export type AuditLogEdge = {
  __typename?: 'AuditLogEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AuditLog` at the end of the edge. */
  node: AuditLog;
};

/** A filter to be used against `AuditLog` object types. All fields are combined with a logical ‘and.’ */
export type AuditLogFilter = {
  /** Filter by the object’s `action` field. */
  action?: InputMaybe<StringFilter>;
  /** Filter by the object’s `allowed` field. */
  allowed?: InputMaybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AuditLogFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `durationMs` field. */
  durationMs?: InputMaybe<IntFilter>;
  /** Filter by the object’s `eventType` field. */
  eventType?: InputMaybe<AuditEventTypeFilter>;
  /** Filter by the object’s `idpUserId` field. */
  idpUserId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `ipAddress` field. */
  ipAddress?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AuditLogFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AuditLogFilter>>;
  /** Filter by the object’s `resourceId` field. */
  resourceId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `resourceType` field. */
  resourceType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `userAgent` field. */
  userAgent?: InputMaybe<StringFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `AuditLog` for usage during aggregation. */
export enum AuditLogGroupBy {
  Action = 'ACTION',
  Allowed = 'ALLOWED',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DurationMs = 'DURATION_MS',
  EventType = 'EVENT_TYPE',
  IdpUserId = 'IDP_USER_ID',
  IpAddress = 'IP_ADDRESS',
  Metadata = 'METADATA',
  ResourceId = 'RESOURCE_ID',
  ResourceType = 'RESOURCE_TYPE',
  UserAgent = 'USER_AGENT',
  UserId = 'USER_ID'
}

export type AuditLogHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `AuditLog` aggregates. */
export type AuditLogHavingInput = {
  AND?: InputMaybe<Array<AuditLogHavingInput>>;
  OR?: InputMaybe<Array<AuditLogHavingInput>>;
  average?: InputMaybe<AuditLogHavingAverageInput>;
  distinctCount?: InputMaybe<AuditLogHavingDistinctCountInput>;
  max?: InputMaybe<AuditLogHavingMaxInput>;
  min?: InputMaybe<AuditLogHavingMinInput>;
  stddevPopulation?: InputMaybe<AuditLogHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AuditLogHavingStddevSampleInput>;
  sum?: InputMaybe<AuditLogHavingSumInput>;
  variancePopulation?: InputMaybe<AuditLogHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AuditLogHavingVarianceSampleInput>;
};

export type AuditLogHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

export type AuditLogHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  durationMs?: InputMaybe<HavingIntFilter>;
};

/** An input for mutations affecting `AuditLog` */
export type AuditLogInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  eventType: AuditEventType;
  idpUserId?: InputMaybe<Scalars['UUID']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  resourceId?: InputMaybe<Scalars['UUID']['input']>;
  resourceType?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type AuditLogMaxAggregates = {
  __typename?: 'AuditLogMaxAggregates';
  /** Maximum of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['Int']['output']>;
};

export type AuditLogMinAggregates = {
  __typename?: 'AuditLogMinAggregates';
  /** Minimum of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `AuditLog`. */
export enum AuditLogOrderBy {
  ActionAsc = 'ACTION_ASC',
  ActionDesc = 'ACTION_DESC',
  AllowedAsc = 'ALLOWED_ASC',
  AllowedDesc = 'ALLOWED_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DurationMsAsc = 'DURATION_MS_ASC',
  DurationMsDesc = 'DURATION_MS_DESC',
  IdpUserIdAsc = 'IDP_USER_ID_ASC',
  IdpUserIdDesc = 'IDP_USER_ID_DESC',
  IpAddressAsc = 'IP_ADDRESS_ASC',
  IpAddressDesc = 'IP_ADDRESS_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ResourceIdAsc = 'RESOURCE_ID_ASC',
  ResourceIdDesc = 'RESOURCE_ID_DESC',
  ResourceTypeAsc = 'RESOURCE_TYPE_ASC',
  ResourceTypeDesc = 'RESOURCE_TYPE_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UserAgentAsc = 'USER_AGENT_ASC',
  UserAgentDesc = 'USER_AGENT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `AuditLog`. Fields that are set will be updated. */
export type AuditLogPatch = {
  action?: InputMaybe<Scalars['String']['input']>;
  allowed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  eventType?: InputMaybe<AuditEventType>;
  idpUserId?: InputMaybe<Scalars['UUID']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  resourceId?: InputMaybe<Scalars['UUID']['input']>;
  resourceType?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type AuditLogStddevPopulationAggregates = {
  __typename?: 'AuditLogStddevPopulationAggregates';
  /** Population standard deviation of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigFloat']['output']>;
};

export type AuditLogStddevSampleAggregates = {
  __typename?: 'AuditLogStddevSampleAggregates';
  /** Sample standard deviation of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigFloat']['output']>;
};

export type AuditLogSumAggregates = {
  __typename?: 'AuditLogSumAggregates';
  /** Sum of durationMs across the matching connection */
  durationMs: Scalars['BigInt']['output'];
};

export type AuditLogVariancePopulationAggregates = {
  __typename?: 'AuditLogVariancePopulationAggregates';
  /** Population variance of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigFloat']['output']>;
};

export type AuditLogVarianceSampleAggregates = {
  __typename?: 'AuditLogVarianceSampleAggregates';
  /** Sample variance of durationMs across the matching connection */
  durationMs?: Maybe<Scalars['BigFloat']['output']>;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** A Git blob (file content). */
export type Blob = GitObject & {
  __typename?: 'Blob';
  /** Size of the blob in bytes. */
  byteSize: Scalars['Int']['output'];
  /** Whether this blob is binary. */
  isBinary: Scalars['Boolean']['output'];
  oid: Scalars['String']['output'];
  repository: Repository;
  /** UTF-8 text content, or null if binary. */
  text?: Maybe<Scalars['String']['output']>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** A Git commit. */
export type Commit = GitObject & {
  __typename?: 'Commit';
  /** The author of the commit. */
  author?: Maybe<GitActor>;
  /** When the commit was authored. */
  authoredDate?: Maybe<Scalars['Datetime']['output']>;
  /** When the commit was committed. */
  committedDate?: Maybe<Scalars['Datetime']['output']>;
  /** The committer of the commit. */
  committer?: Maybe<GitActor>;
  /** Commit history starting from this commit. */
  history: Array<Commit>;
  /** The full commit message. */
  message: Scalars['String']['output'];
  /** The first line of the commit message. */
  messageHeadline: Scalars['String']['output'];
  oid: Scalars['String']['output'];
  /** The parent commits. */
  parents: Array<Commit>;
  repository: Repository;
  /** The tree object for this commit. */
  tree?: Maybe<Tree>;
};


/** A Git commit. */
export type CommitHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `AuditLog` mutation. */
export type CreateAuditLogInput = {
  /** The `AuditLog` to be created by this mutation. */
  auditLog: AuditLogInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `AuditLog` mutation. */
export type CreateAuditLogPayload = {
  __typename?: 'CreateAuditLogPayload';
  /** The `AuditLog` that was created by this mutation. */
  auditLog?: Maybe<AuditLog>;
  /** An edge for our `AuditLog`. May be used by Relay 1. */
  auditLogEdge?: Maybe<AuditLogEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `AuditLog` mutation. */
export type CreateAuditLogPayloadAuditLogEdgeArgs = {
  orderBy?: Array<AuditLogOrderBy>;
};

/** All input for the create `ExternalDependency` mutation. */
export type CreateExternalDependencyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ExternalDependency` to be created by this mutation. */
  externalDependency: ExternalDependencyInput;
};

/** The output of our create `ExternalDependency` mutation. */
export type CreateExternalDependencyPayload = {
  __typename?: 'CreateExternalDependencyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `ExternalDependency` that was created by this mutation. */
  externalDependency?: Maybe<ExternalDependency>;
  /** An edge for our `ExternalDependency`. May be used by Relay 1. */
  externalDependencyEdge?: Maybe<ExternalDependencyEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ExternalDependency` mutation. */
export type CreateExternalDependencyPayloadExternalDependencyEdgeArgs = {
  orderBy?: Array<ExternalDependencyOrderBy>;
};

/** All input for the create `Organization` mutation. */
export type CreateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Organization` to be created by this mutation. */
  organization: OrganizationInput;
};

/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Organization` that was created by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Array<OrganizationOrderBy>;
};

/** All input for the create `PullRequestComment` mutation. */
export type CreatePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PullRequestComment` to be created by this mutation. */
  pullRequestComment: PullRequestCommentInput;
};

/** The output of our create `PullRequestComment` mutation. */
export type CreatePullRequestCommentPayload = {
  __typename?: 'CreatePullRequestCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequestComment` that was created by this mutation. */
  pullRequestComment?: Maybe<PullRequestComment>;
  /** An edge for our `PullRequestComment`. May be used by Relay 1. */
  pullRequestCommentEdge?: Maybe<PullRequestCommentEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PullRequestComment` mutation. */
export type CreatePullRequestCommentPayloadPullRequestCommentEdgeArgs = {
  orderBy?: Array<PullRequestCommentOrderBy>;
};

/** All input for the create `PullRequest` mutation. */
export type CreatePullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PullRequest` to be created by this mutation. */
  pullRequest: PullRequestInput;
};

/** The output of our create `PullRequest` mutation. */
export type CreatePullRequestPayload = {
  __typename?: 'CreatePullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequest` that was created by this mutation. */
  pullRequest?: Maybe<PullRequest>;
  /** An edge for our `PullRequest`. May be used by Relay 1. */
  pullRequestEdge?: Maybe<PullRequestEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PullRequest` mutation. */
export type CreatePullRequestPayloadPullRequestEdgeArgs = {
  orderBy?: Array<PullRequestOrderBy>;
};

/** All input for the create `PullRequestReview` mutation. */
export type CreatePullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PullRequestReview` to be created by this mutation. */
  pullRequestReview: PullRequestReviewInput;
};

/** The output of our create `PullRequestReview` mutation. */
export type CreatePullRequestReviewPayload = {
  __typename?: 'CreatePullRequestReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequestReview` that was created by this mutation. */
  pullRequestReview?: Maybe<PullRequestReview>;
  /** An edge for our `PullRequestReview`. May be used by Relay 1. */
  pullRequestReviewEdge?: Maybe<PullRequestReviewEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PullRequestReview` mutation. */
export type CreatePullRequestReviewPayloadPullRequestReviewEdgeArgs = {
  orderBy?: Array<PullRequestReviewOrderBy>;
};

/** Input for creating a new ref. */
export type CreateRefInput = {
  /** The fully qualified ref name (e.g., "refs/heads/feature-branch"). */
  name: Scalars['String']['input'];
  /** The SHA or ref to point to. */
  oid: Scalars['String']['input'];
  /** The repository ID. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for createRef mutation. */
export type CreateRefPayload = {
  __typename?: 'CreateRefPayload';
  /** Error message if creation failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The created ref. */
  ref?: Maybe<Ref>;
};

/** All input for the create `RepositoryCollaborator` mutation. */
export type CreateRepositoryCollaboratorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RepositoryCollaborator` to be created by this mutation. */
  repositoryCollaborator: RepositoryCollaboratorInput;
};

/** The output of our create `RepositoryCollaborator` mutation. */
export type CreateRepositoryCollaboratorPayload = {
  __typename?: 'CreateRepositoryCollaboratorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryCollaborator` that was created by this mutation. */
  repositoryCollaborator?: Maybe<RepositoryCollaborator>;
  /** An edge for our `RepositoryCollaborator`. May be used by Relay 1. */
  repositoryCollaboratorEdge?: Maybe<RepositoryCollaboratorEdge>;
};


/** The output of our create `RepositoryCollaborator` mutation. */
export type CreateRepositoryCollaboratorPayloadRepositoryCollaboratorEdgeArgs = {
  orderBy?: Array<RepositoryCollaboratorOrderBy>;
};

/** All input for the create `Repository` mutation. */
export type CreateRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Repository` to be created by this mutation. */
  repository: RepositoryInput;
};

/** The output of our create `Repository` mutation. */
export type CreateRepositoryPayload = {
  __typename?: 'CreateRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repository` that was created by this mutation. */
  repository?: Maybe<Repository>;
  /** An edge for our `Repository`. May be used by Relay 1. */
  repositoryEdge?: Maybe<RepositoryEdge>;
};


/** The output of our create `Repository` mutation. */
export type CreateRepositoryPayloadRepositoryEdgeArgs = {
  orderBy?: Array<RepositoryOrderBy>;
};

/** All input for the create `RepositoryRelationship` mutation. */
export type CreateRepositoryRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RepositoryRelationship` to be created by this mutation. */
  repositoryRelationship: RepositoryRelationshipInput;
};

/** All input for the create `RepositoryRelationshipMetadatum` mutation. */
export type CreateRepositoryRelationshipMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RepositoryRelationshipMetadatum` to be created by this mutation. */
  repositoryRelationshipMetadatum: RepositoryRelationshipMetadatumInput;
};

/** The output of our create `RepositoryRelationshipMetadatum` mutation. */
export type CreateRepositoryRelationshipMetadatumPayload = {
  __typename?: 'CreateRepositoryRelationshipMetadatumPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipMetadatum` that was created by this mutation. */
  repositoryRelationshipMetadatum?: Maybe<RepositoryRelationshipMetadatum>;
  /** An edge for our `RepositoryRelationshipMetadatum`. May be used by Relay 1. */
  repositoryRelationshipMetadatumEdge?: Maybe<RepositoryRelationshipMetadatumEdge>;
};


/** The output of our create `RepositoryRelationshipMetadatum` mutation. */
export type CreateRepositoryRelationshipMetadatumPayloadRepositoryRelationshipMetadatumEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipMetadatumOrderBy>;
};

/** The output of our create `RepositoryRelationship` mutation. */
export type CreateRepositoryRelationshipPayload = {
  __typename?: 'CreateRepositoryRelationshipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationship` that was created by this mutation. */
  repositoryRelationship?: Maybe<RepositoryRelationship>;
  /** An edge for our `RepositoryRelationship`. May be used by Relay 1. */
  repositoryRelationshipEdge?: Maybe<RepositoryRelationshipEdge>;
};


/** The output of our create `RepositoryRelationship` mutation. */
export type CreateRepositoryRelationshipPayloadRepositoryRelationshipEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipOrderBy>;
};

/** All input for the create `RepositoryRelationshipType` mutation. */
export type CreateRepositoryRelationshipTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RepositoryRelationshipType` to be created by this mutation. */
  repositoryRelationshipType: RepositoryRelationshipTypeInput;
};

/** The output of our create `RepositoryRelationshipType` mutation. */
export type CreateRepositoryRelationshipTypePayload = {
  __typename?: 'CreateRepositoryRelationshipTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipType` that was created by this mutation. */
  repositoryRelationshipType?: Maybe<RepositoryRelationshipType>;
  /** An edge for our `RepositoryRelationshipType`. May be used by Relay 1. */
  repositoryRelationshipTypeEdge?: Maybe<RepositoryRelationshipTypeEdge>;
};


/** The output of our create `RepositoryRelationshipType` mutation. */
export type CreateRepositoryRelationshipTypePayloadRepositoryRelationshipTypeEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipTypeOrderBy>;
};

/** Input for creating a repository. */
export type CreateRepositoryWithGitInput = {
  /** Default branch name. Defaults to master. */
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  /** Optional description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The repository name. */
  name: Scalars['String']['input'];
  /** Organization ID if this is an organization repository. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** The repository slug (URL-friendly name). */
  slug: Scalars['String']['input'];
  /** Visibility (public or private). Defaults to public. */
  visibility?: InputMaybe<Visibility>;
};

/** Payload for createRepositoryWithGit mutation. */
export type CreateRepositoryWithGitPayload = {
  __typename?: 'CreateRepositoryWithGitPayload';
  /** Error message if creation failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The organization slug (for org repos). */
  organizationSlug?: Maybe<Scalars['String']['output']>;
  /** The owner username (for personal repos). */
  ownerUsername?: Maybe<Scalars['String']['output']>;
  /** The created repository row ID. */
  rowId?: Maybe<Scalars['UUID']['output']>;
  /** The repository slug. */
  slug?: Maybe<Scalars['String']['output']>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** All input for the `deleteAuditLogById` mutation. */
export type DeleteAuditLogByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `AuditLog` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteAuditLog` mutation. */
export type DeleteAuditLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `AuditLog` mutation. */
export type DeleteAuditLogPayload = {
  __typename?: 'DeleteAuditLogPayload';
  /** The `AuditLog` that was deleted by this mutation. */
  auditLog?: Maybe<AuditLog>;
  /** An edge for our `AuditLog`. May be used by Relay 1. */
  auditLogEdge?: Maybe<AuditLogEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAuditLogId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `AuditLog` mutation. */
export type DeleteAuditLogPayloadAuditLogEdgeArgs = {
  orderBy?: Array<AuditLogOrderBy>;
};

/** All input for the `deleteExternalDependencyById` mutation. */
export type DeleteExternalDependencyByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `ExternalDependency` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteExternalDependency` mutation. */
export type DeleteExternalDependencyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `ExternalDependency` mutation. */
export type DeleteExternalDependencyPayload = {
  __typename?: 'DeleteExternalDependencyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalDependencyId?: Maybe<Scalars['ID']['output']>;
  /** The `ExternalDependency` that was deleted by this mutation. */
  externalDependency?: Maybe<ExternalDependency>;
  /** An edge for our `ExternalDependency`. May be used by Relay 1. */
  externalDependencyEdge?: Maybe<ExternalDependencyEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ExternalDependency` mutation. */
export type DeleteExternalDependencyPayloadExternalDependencyEdgeArgs = {
  orderBy?: Array<ExternalDependencyOrderBy>;
};

/** All input for the `deleteOrganizationById` mutation. */
export type DeleteOrganizationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Organization` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteOrganization` mutation. */
export type DeleteOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrganizationId?: Maybe<Scalars['ID']['output']>;
  /** The `Organization` that was deleted by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Array<OrganizationOrderBy>;
};

/** All input for the `deletePullRequestById` mutation. */
export type DeletePullRequestByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequest` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deletePullRequestCommentById` mutation. */
export type DeletePullRequestCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequestComment` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deletePullRequestComment` mutation. */
export type DeletePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `PullRequestComment` mutation. */
export type DeletePullRequestCommentPayload = {
  __typename?: 'DeletePullRequestCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPullRequestCommentId?: Maybe<Scalars['ID']['output']>;
  /** The `PullRequestComment` that was deleted by this mutation. */
  pullRequestComment?: Maybe<PullRequestComment>;
  /** An edge for our `PullRequestComment`. May be used by Relay 1. */
  pullRequestCommentEdge?: Maybe<PullRequestCommentEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PullRequestComment` mutation. */
export type DeletePullRequestCommentPayloadPullRequestCommentEdgeArgs = {
  orderBy?: Array<PullRequestCommentOrderBy>;
};

/** All input for the `deletePullRequest` mutation. */
export type DeletePullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `PullRequest` mutation. */
export type DeletePullRequestPayload = {
  __typename?: 'DeletePullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPullRequestId?: Maybe<Scalars['ID']['output']>;
  /** The `PullRequest` that was deleted by this mutation. */
  pullRequest?: Maybe<PullRequest>;
  /** An edge for our `PullRequest`. May be used by Relay 1. */
  pullRequestEdge?: Maybe<PullRequestEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PullRequest` mutation. */
export type DeletePullRequestPayloadPullRequestEdgeArgs = {
  orderBy?: Array<PullRequestOrderBy>;
};

/** All input for the `deletePullRequestReviewById` mutation. */
export type DeletePullRequestReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequestReview` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deletePullRequestReview` mutation. */
export type DeletePullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `PullRequestReview` mutation. */
export type DeletePullRequestReviewPayload = {
  __typename?: 'DeletePullRequestReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPullRequestReviewId?: Maybe<Scalars['ID']['output']>;
  /** The `PullRequestReview` that was deleted by this mutation. */
  pullRequestReview?: Maybe<PullRequestReview>;
  /** An edge for our `PullRequestReview`. May be used by Relay 1. */
  pullRequestReviewEdge?: Maybe<PullRequestReviewEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PullRequestReview` mutation. */
export type DeletePullRequestReviewPayloadPullRequestReviewEdgeArgs = {
  orderBy?: Array<PullRequestReviewOrderBy>;
};

/** Input for deleting a ref. */
export type DeleteRefInput = {
  /** The fully qualified ref name (e.g., "refs/heads/feature-branch"). */
  name: Scalars['String']['input'];
  /** The repository ID. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for deleteRef mutation. */
export type DeleteRefPayload = {
  __typename?: 'DeleteRefPayload';
  /** Error message if deletion failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** Whether the deletion was successful. */
  success: Scalars['Boolean']['output'];
};

/** All input for the `deleteRepositoryById` mutation. */
export type DeleteRepositoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Repository` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteRepositoryCollaboratorById` mutation. */
export type DeleteRepositoryCollaboratorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryCollaborator` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteRepositoryCollaborator` mutation. */
export type DeleteRepositoryCollaboratorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  repositoryId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** The output of our delete `RepositoryCollaborator` mutation. */
export type DeleteRepositoryCollaboratorPayload = {
  __typename?: 'DeleteRepositoryCollaboratorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRepositoryCollaboratorId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryCollaborator` that was deleted by this mutation. */
  repositoryCollaborator?: Maybe<RepositoryCollaborator>;
  /** An edge for our `RepositoryCollaborator`. May be used by Relay 1. */
  repositoryCollaboratorEdge?: Maybe<RepositoryCollaboratorEdge>;
};


/** The output of our delete `RepositoryCollaborator` mutation. */
export type DeleteRepositoryCollaboratorPayloadRepositoryCollaboratorEdgeArgs = {
  orderBy?: Array<RepositoryCollaboratorOrderBy>;
};

/** All input for the `deleteRepository` mutation. */
export type DeleteRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Repository` mutation. */
export type DeleteRepositoryPayload = {
  __typename?: 'DeleteRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRepositoryId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repository` that was deleted by this mutation. */
  repository?: Maybe<Repository>;
  /** An edge for our `Repository`. May be used by Relay 1. */
  repositoryEdge?: Maybe<RepositoryEdge>;
};


/** The output of our delete `Repository` mutation. */
export type DeleteRepositoryPayloadRepositoryEdgeArgs = {
  orderBy?: Array<RepositoryOrderBy>;
};

/** All input for the `deleteRepositoryRelationshipById` mutation. */
export type DeleteRepositoryRelationshipByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationship` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteRepositoryRelationship` mutation. */
export type DeleteRepositoryRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** All input for the `deleteRepositoryRelationshipMetadatumById` mutation. */
export type DeleteRepositoryRelationshipMetadatumByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationshipMetadatum` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteRepositoryRelationshipMetadatum` mutation. */
export type DeleteRepositoryRelationshipMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `RepositoryRelationshipMetadatum` mutation. */
export type DeleteRepositoryRelationshipMetadatumPayload = {
  __typename?: 'DeleteRepositoryRelationshipMetadatumPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRepositoryRelationshipMetadatumId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipMetadatum` that was deleted by this mutation. */
  repositoryRelationshipMetadatum?: Maybe<RepositoryRelationshipMetadatum>;
  /** An edge for our `RepositoryRelationshipMetadatum`. May be used by Relay 1. */
  repositoryRelationshipMetadatumEdge?: Maybe<RepositoryRelationshipMetadatumEdge>;
};


/** The output of our delete `RepositoryRelationshipMetadatum` mutation. */
export type DeleteRepositoryRelationshipMetadatumPayloadRepositoryRelationshipMetadatumEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipMetadatumOrderBy>;
};

/** The output of our delete `RepositoryRelationship` mutation. */
export type DeleteRepositoryRelationshipPayload = {
  __typename?: 'DeleteRepositoryRelationshipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRepositoryRelationshipId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationship` that was deleted by this mutation. */
  repositoryRelationship?: Maybe<RepositoryRelationship>;
  /** An edge for our `RepositoryRelationship`. May be used by Relay 1. */
  repositoryRelationshipEdge?: Maybe<RepositoryRelationshipEdge>;
};


/** The output of our delete `RepositoryRelationship` mutation. */
export type DeleteRepositoryRelationshipPayloadRepositoryRelationshipEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipOrderBy>;
};

/** All input for the `deleteRepositoryRelationshipTypeById` mutation. */
export type DeleteRepositoryRelationshipTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationshipType` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteRepositoryRelationshipType` mutation. */
export type DeleteRepositoryRelationshipTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `RepositoryRelationshipType` mutation. */
export type DeleteRepositoryRelationshipTypePayload = {
  __typename?: 'DeleteRepositoryRelationshipTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRepositoryRelationshipTypeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipType` that was deleted by this mutation. */
  repositoryRelationshipType?: Maybe<RepositoryRelationshipType>;
  /** An edge for our `RepositoryRelationshipType`. May be used by Relay 1. */
  repositoryRelationshipTypeEdge?: Maybe<RepositoryRelationshipTypeEdge>;
};


/** The output of our delete `RepositoryRelationshipType` mutation. */
export type DeleteRepositoryRelationshipTypePayloadRepositoryRelationshipTypeEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipTypeOrderBy>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

export enum DetectionSource {
  ArborManifest = 'arbor_manifest',
  CargoToml = 'cargo_toml',
  GoMod = 'go_mod',
  GraphqlSchema = 'graphql_schema',
  Manual = 'manual',
  Openapi = 'openapi',
  PackageJson = 'package_json'
}

/** A filter to be used against DetectionSource fields. All fields are combined with a logical ‘and.’ */
export type DetectionSourceFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<DetectionSource>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<DetectionSource>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<DetectionSource>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<DetectionSource>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<DetectionSource>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<DetectionSource>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<DetectionSource>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<DetectionSource>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<DetectionSource>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<DetectionSource>>;
};

export type ExternalDependency = Node & {
  __typename?: 'ExternalDependency';
  createdAt: Scalars['Datetime']['output'];
  detectionSource: DetectionSource;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  packageManager: Scalars['String']['output'];
  packageName: Scalars['String']['output'];
  /** Reads a single `Repository` that is related to this `ExternalDependency`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  versionConstraint?: Maybe<Scalars['String']['output']>;
};

export type ExternalDependencyAggregates = {
  __typename?: 'ExternalDependencyAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ExternalDependencyDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `ExternalDependency` object types. */
export type ExternalDependencyAggregatesFilter = {
  /** Distinct count aggregate over matching `ExternalDependency` objects. */
  distinctCount?: InputMaybe<ExternalDependencyDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `ExternalDependency` object to be included within the aggregate. */
  filter?: InputMaybe<ExternalDependencyFilter>;
};

/**
 * A condition to be used against `ExternalDependency` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ExternalDependencyCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<DetectionSource>;
  /** Checks for equality with the object’s `packageManager` field. */
  packageManager?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `packageName` field. */
  packageName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `versionConstraint` field. */
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `ExternalDependency` values. */
export type ExternalDependencyConnection = {
  __typename?: 'ExternalDependencyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ExternalDependencyAggregates>;
  /** A list of edges which contains the `ExternalDependency` and cursor to aid in pagination. */
  edges: Array<ExternalDependencyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ExternalDependencyAggregates>>;
  /** A list of `ExternalDependency` objects. */
  nodes: Array<ExternalDependency>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ExternalDependency` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `ExternalDependency` values. */
export type ExternalDependencyConnectionGroupedAggregatesArgs = {
  groupBy: Array<ExternalDependencyGroupBy>;
  having?: InputMaybe<ExternalDependencyHavingInput>;
};

export type ExternalDependencyDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  detectionSource?: InputMaybe<BigIntFilter>;
  packageManager?: InputMaybe<BigIntFilter>;
  packageName?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  versionConstraint?: InputMaybe<BigIntFilter>;
};

export type ExternalDependencyDistinctCountAggregates = {
  __typename?: 'ExternalDependencyDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of detectionSource across the matching connection */
  detectionSource?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of packageManager across the matching connection */
  packageManager?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of packageName across the matching connection */
  packageName?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of versionConstraint across the matching connection */
  versionConstraint?: Maybe<Scalars['BigInt']['output']>;
};

/** A `ExternalDependency` edge in the connection. */
export type ExternalDependencyEdge = {
  __typename?: 'ExternalDependencyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ExternalDependency` at the end of the edge. */
  node: ExternalDependency;
};

/** A filter to be used against `ExternalDependency` object types. All fields are combined with a logical ‘and.’ */
export type ExternalDependencyFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ExternalDependencyFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<DetectionSourceFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ExternalDependencyFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ExternalDependencyFilter>>;
  /** Filter by the object’s `packageManager` field. */
  packageManager?: InputMaybe<StringFilter>;
  /** Filter by the object’s `packageName` field. */
  packageName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `versionConstraint` field. */
  versionConstraint?: InputMaybe<StringFilter>;
};

/** Grouping methods for `ExternalDependency` for usage during aggregation. */
export enum ExternalDependencyGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DetectionSource = 'DETECTION_SOURCE',
  PackageManager = 'PACKAGE_MANAGER',
  PackageName = 'PACKAGE_NAME',
  RepositoryId = 'REPOSITORY_ID',
  VersionConstraint = 'VERSION_CONSTRAINT'
}

export type ExternalDependencyHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `ExternalDependency` aggregates. */
export type ExternalDependencyHavingInput = {
  AND?: InputMaybe<Array<ExternalDependencyHavingInput>>;
  OR?: InputMaybe<Array<ExternalDependencyHavingInput>>;
  average?: InputMaybe<ExternalDependencyHavingAverageInput>;
  distinctCount?: InputMaybe<ExternalDependencyHavingDistinctCountInput>;
  max?: InputMaybe<ExternalDependencyHavingMaxInput>;
  min?: InputMaybe<ExternalDependencyHavingMinInput>;
  stddevPopulation?: InputMaybe<ExternalDependencyHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ExternalDependencyHavingStddevSampleInput>;
  sum?: InputMaybe<ExternalDependencyHavingSumInput>;
  variancePopulation?: InputMaybe<ExternalDependencyHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ExternalDependencyHavingVarianceSampleInput>;
};

export type ExternalDependencyHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ExternalDependencyHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `ExternalDependency` */
export type ExternalDependencyInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<DetectionSource>;
  packageManager: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `ExternalDependency`. */
export enum ExternalDependencyOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PackageManagerAsc = 'PACKAGE_MANAGER_ASC',
  PackageManagerDesc = 'PACKAGE_MANAGER_DESC',
  PackageNameAsc = 'PACKAGE_NAME_ASC',
  PackageNameDesc = 'PACKAGE_NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  VersionConstraintAsc = 'VERSION_CONSTRAINT_ASC',
  VersionConstraintDesc = 'VERSION_CONSTRAINT_DESC'
}

/** Represents an update to a `ExternalDependency`. Fields that are set will be updated. */
export type ExternalDependencyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<DetectionSource>;
  packageManager?: InputMaybe<Scalars['String']['input']>;
  packageName?: InputMaybe<Scalars['String']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Float']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** An actor in a Git commit (author or committer). */
export type GitActor = {
  __typename?: 'GitActor';
  date?: Maybe<Scalars['Datetime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Base interface for Git objects. */
export type GitObject = {
  /** The Git object ID (SHA). */
  oid: Scalars['String']['output'];
  /** The repository this object belongs to. */
  repository: Repository;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
};

export type HavingFloatFilter = {
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
};

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
};

/** Input for initializing a repository's git storage. */
export type InitializeRepositoryInput = {
  /** The repository ID. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for initializeRepository mutation. */
export type InitializeRepositoryPayload = {
  __typename?: 'InitializeRepositoryPayload';
  /** Error message if initialization failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The repository that was initialized. */
  repository?: Maybe<Repository>;
  /** Whether the initialization was successful. */
  success: Scalars['Boolean']['output'];
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `AuditLog`. */
  createAuditLog?: Maybe<CreateAuditLogPayload>;
  /** Creates a single `ExternalDependency`. */
  createExternalDependency?: Maybe<CreateExternalDependencyPayload>;
  /** Creates a single `Organization`. */
  createOrganization?: Maybe<CreateOrganizationPayload>;
  /** Creates a single `PullRequest`. */
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  /** Creates a single `PullRequestComment`. */
  createPullRequestComment?: Maybe<CreatePullRequestCommentPayload>;
  /** Creates a single `PullRequestReview`. */
  createPullRequestReview?: Maybe<CreatePullRequestReviewPayload>;
  /** Create a new ref (branch or tag). */
  createRef?: Maybe<CreateRefPayload>;
  /** Creates a single `Repository`. */
  createRepository?: Maybe<CreateRepositoryPayload>;
  /** Creates a single `RepositoryCollaborator`. */
  createRepositoryCollaborator?: Maybe<CreateRepositoryCollaboratorPayload>;
  /** Creates a single `RepositoryRelationship`. */
  createRepositoryRelationship?: Maybe<CreateRepositoryRelationshipPayload>;
  /** Creates a single `RepositoryRelationshipMetadatum`. */
  createRepositoryRelationshipMetadatum?: Maybe<CreateRepositoryRelationshipMetadatumPayload>;
  /** Creates a single `RepositoryRelationshipType`. */
  createRepositoryRelationshipType?: Maybe<CreateRepositoryRelationshipTypePayload>;
  /**
   * Create a repository and initialize git storage.
   * This replaces the standard createRepository mutation to ensure
   * the git repository is properly initialized on disk.
   */
  createRepositoryWithGit?: Maybe<CreateRepositoryWithGitPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `AuditLog` using a unique key. */
  deleteAuditLog?: Maybe<DeleteAuditLogPayload>;
  /** Deletes a single `AuditLog` using its globally unique id. */
  deleteAuditLogById?: Maybe<DeleteAuditLogPayload>;
  /** Deletes a single `ExternalDependency` using a unique key. */
  deleteExternalDependency?: Maybe<DeleteExternalDependencyPayload>;
  /** Deletes a single `ExternalDependency` using its globally unique id. */
  deleteExternalDependencyById?: Maybe<DeleteExternalDependencyPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organization` using its globally unique id. */
  deleteOrganizationById?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `PullRequest` using a unique key. */
  deletePullRequest?: Maybe<DeletePullRequestPayload>;
  /** Deletes a single `PullRequest` using its globally unique id. */
  deletePullRequestById?: Maybe<DeletePullRequestPayload>;
  /** Deletes a single `PullRequestComment` using a unique key. */
  deletePullRequestComment?: Maybe<DeletePullRequestCommentPayload>;
  /** Deletes a single `PullRequestComment` using its globally unique id. */
  deletePullRequestCommentById?: Maybe<DeletePullRequestCommentPayload>;
  /** Deletes a single `PullRequestReview` using a unique key. */
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  /** Deletes a single `PullRequestReview` using its globally unique id. */
  deletePullRequestReviewById?: Maybe<DeletePullRequestReviewPayload>;
  /** Delete a ref (branch or tag). */
  deleteRef?: Maybe<DeleteRefPayload>;
  /** Deletes a single `Repository` using a unique key. */
  deleteRepository?: Maybe<DeleteRepositoryPayload>;
  /** Deletes a single `Repository` using its globally unique id. */
  deleteRepositoryById?: Maybe<DeleteRepositoryPayload>;
  /** Deletes a single `RepositoryCollaborator` using a unique key. */
  deleteRepositoryCollaborator?: Maybe<DeleteRepositoryCollaboratorPayload>;
  /** Deletes a single `RepositoryCollaborator` using its globally unique id. */
  deleteRepositoryCollaboratorById?: Maybe<DeleteRepositoryCollaboratorPayload>;
  /** Deletes a single `RepositoryRelationship` using a unique key. */
  deleteRepositoryRelationship?: Maybe<DeleteRepositoryRelationshipPayload>;
  /** Deletes a single `RepositoryRelationship` using its globally unique id. */
  deleteRepositoryRelationshipById?: Maybe<DeleteRepositoryRelationshipPayload>;
  /** Deletes a single `RepositoryRelationshipMetadatum` using a unique key. */
  deleteRepositoryRelationshipMetadatum?: Maybe<DeleteRepositoryRelationshipMetadatumPayload>;
  /** Deletes a single `RepositoryRelationshipMetadatum` using its globally unique id. */
  deleteRepositoryRelationshipMetadatumById?: Maybe<DeleteRepositoryRelationshipMetadatumPayload>;
  /** Deletes a single `RepositoryRelationshipType` using a unique key. */
  deleteRepositoryRelationshipType?: Maybe<DeleteRepositoryRelationshipTypePayload>;
  /** Deletes a single `RepositoryRelationshipType` using its globally unique id. */
  deleteRepositoryRelationshipTypeById?: Maybe<DeleteRepositoryRelationshipTypePayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /**
   * Initialize git storage for a repository.
   * Called after the repository record is created in the database.
   */
  initializeRepository?: Maybe<InitializeRepositoryPayload>;
  /** Updates a single `AuditLog` using a unique key and a patch. */
  updateAuditLog?: Maybe<UpdateAuditLogPayload>;
  /** Updates a single `AuditLog` using its globally unique id and a patch. */
  updateAuditLogById?: Maybe<UpdateAuditLogPayload>;
  /** Updates a single `ExternalDependency` using a unique key and a patch. */
  updateExternalDependency?: Maybe<UpdateExternalDependencyPayload>;
  /** Updates a single `ExternalDependency` using its globally unique id and a patch. */
  updateExternalDependencyById?: Maybe<UpdateExternalDependencyPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organization` using its globally unique id and a patch. */
  updateOrganizationById?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `PullRequest` using a unique key and a patch. */
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  /** Updates a single `PullRequest` using its globally unique id and a patch. */
  updatePullRequestById?: Maybe<UpdatePullRequestPayload>;
  /** Updates a single `PullRequestComment` using a unique key and a patch. */
  updatePullRequestComment?: Maybe<UpdatePullRequestCommentPayload>;
  /** Updates a single `PullRequestComment` using its globally unique id and a patch. */
  updatePullRequestCommentById?: Maybe<UpdatePullRequestCommentPayload>;
  /** Updates a single `PullRequestReview` using a unique key and a patch. */
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  /** Updates a single `PullRequestReview` using its globally unique id and a patch. */
  updatePullRequestReviewById?: Maybe<UpdatePullRequestReviewPayload>;
  /** Updates a single `Repository` using a unique key and a patch. */
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  /** Updates a single `Repository` using its globally unique id and a patch. */
  updateRepositoryById?: Maybe<UpdateRepositoryPayload>;
  /** Updates a single `RepositoryCollaborator` using a unique key and a patch. */
  updateRepositoryCollaborator?: Maybe<UpdateRepositoryCollaboratorPayload>;
  /** Updates a single `RepositoryCollaborator` using its globally unique id and a patch. */
  updateRepositoryCollaboratorById?: Maybe<UpdateRepositoryCollaboratorPayload>;
  /** Updates a single `RepositoryRelationship` using a unique key and a patch. */
  updateRepositoryRelationship?: Maybe<UpdateRepositoryRelationshipPayload>;
  /** Updates a single `RepositoryRelationship` using its globally unique id and a patch. */
  updateRepositoryRelationshipById?: Maybe<UpdateRepositoryRelationshipPayload>;
  /** Updates a single `RepositoryRelationshipMetadatum` using a unique key and a patch. */
  updateRepositoryRelationshipMetadatum?: Maybe<UpdateRepositoryRelationshipMetadatumPayload>;
  /** Updates a single `RepositoryRelationshipMetadatum` using its globally unique id and a patch. */
  updateRepositoryRelationshipMetadatumById?: Maybe<UpdateRepositoryRelationshipMetadatumPayload>;
  /** Updates a single `RepositoryRelationshipType` using a unique key and a patch. */
  updateRepositoryRelationshipType?: Maybe<UpdateRepositoryRelationshipTypePayload>;
  /** Updates a single `RepositoryRelationshipType` using its globally unique id and a patch. */
  updateRepositoryRelationshipTypeById?: Maybe<UpdateRepositoryRelationshipTypePayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuditLogArgs = {
  input: CreateAuditLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateExternalDependencyArgs = {
  input: CreateExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePullRequestArgs = {
  input: CreatePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePullRequestCommentArgs = {
  input: CreatePullRequestCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePullRequestReviewArgs = {
  input: CreatePullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRefArgs = {
  input: CreateRefInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryArgs = {
  input: CreateRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryCollaboratorArgs = {
  input: CreateRepositoryCollaboratorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryRelationshipArgs = {
  input: CreateRepositoryRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryRelationshipMetadatumArgs = {
  input: CreateRepositoryRelationshipMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryRelationshipTypeArgs = {
  input: CreateRepositoryRelationshipTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepositoryWithGitArgs = {
  input: CreateRepositoryWithGitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuditLogArgs = {
  input: DeleteAuditLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuditLogByIdArgs = {
  input: DeleteAuditLogByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteExternalDependencyArgs = {
  input: DeleteExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteExternalDependencyByIdArgs = {
  input: DeleteExternalDependencyByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationByIdArgs = {
  input: DeleteOrganizationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestArgs = {
  input: DeletePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestByIdArgs = {
  input: DeletePullRequestByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestCommentArgs = {
  input: DeletePullRequestCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestCommentByIdArgs = {
  input: DeletePullRequestCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestReviewByIdArgs = {
  input: DeletePullRequestReviewByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRefArgs = {
  input: DeleteRefInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryArgs = {
  input: DeleteRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryByIdArgs = {
  input: DeleteRepositoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryCollaboratorArgs = {
  input: DeleteRepositoryCollaboratorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryCollaboratorByIdArgs = {
  input: DeleteRepositoryCollaboratorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipArgs = {
  input: DeleteRepositoryRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipByIdArgs = {
  input: DeleteRepositoryRelationshipByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipMetadatumArgs = {
  input: DeleteRepositoryRelationshipMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipMetadatumByIdArgs = {
  input: DeleteRepositoryRelationshipMetadatumByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipTypeArgs = {
  input: DeleteRepositoryRelationshipTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipTypeByIdArgs = {
  input: DeleteRepositoryRelationshipTypeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInitializeRepositoryArgs = {
  input: InitializeRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuditLogArgs = {
  input: UpdateAuditLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuditLogByIdArgs = {
  input: UpdateAuditLogByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateExternalDependencyArgs = {
  input: UpdateExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateExternalDependencyByIdArgs = {
  input: UpdateExternalDependencyByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationByIdArgs = {
  input: UpdateOrganizationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestByIdArgs = {
  input: UpdatePullRequestByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestCommentArgs = {
  input: UpdatePullRequestCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestCommentByIdArgs = {
  input: UpdatePullRequestCommentByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestReviewByIdArgs = {
  input: UpdatePullRequestReviewByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryByIdArgs = {
  input: UpdateRepositoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryCollaboratorArgs = {
  input: UpdateRepositoryCollaboratorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryCollaboratorByIdArgs = {
  input: UpdateRepositoryCollaboratorByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipArgs = {
  input: UpdateRepositoryRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipByIdArgs = {
  input: UpdateRepositoryRelationshipByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipMetadatumArgs = {
  input: UpdateRepositoryRelationshipMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipMetadatumByIdArgs = {
  input: UpdateRepositoryRelationshipMetadatumByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipTypeArgs = {
  input: UpdateRepositoryRelationshipTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipTypeByIdArgs = {
  input: UpdateRepositoryRelationshipTypeByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
};

/** The currently authenticated user. */
export type Observer = {
  __typename?: 'Observer';
  email: Scalars['String']['output'];
  identityProviderId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['UUID']['output'];
};

export type Organization = Node & {
  __typename?: 'Organization';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  billingAccountId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  deletionReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  idpOrganizationId: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Repository`. */
  repositories: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryRelationshipType`. */
  repositoryRelationshipTypes: RepositoryRelationshipTypeConnection;
  rowId: Scalars['UUID']['output'];
  subscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};


export type OrganizationRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCondition>;
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryOrderBy>>;
};


export type OrganizationRepositoryRelationshipTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipTypeCondition>;
  filter?: InputMaybe<RepositoryRelationshipTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipTypeOrderBy>>;
};

export type OrganizationAggregates = {
  __typename?: 'OrganizationAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<OrganizationDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/**
 * A condition to be used against `Organization` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganizationCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `billingAccountId` field. */
  billingAccountId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `deletionReason` field. */
  deletionReason?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `idpOrganizationId` field. */
  idpOrganizationId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Organization` values. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<OrganizationAggregates>;
  /** A list of edges which contains the `Organization` and cursor to aid in pagination. */
  edges: Array<OrganizationEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<OrganizationAggregates>>;
  /** A list of `Organization` objects. */
  nodes: Array<Organization>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organization` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Organization` values. */
export type OrganizationConnectionGroupedAggregatesArgs = {
  groupBy: Array<OrganizationGroupBy>;
  having?: InputMaybe<OrganizationHavingInput>;
};

export type OrganizationDistinctCountAggregates = {
  __typename?: 'OrganizationDistinctCountAggregates';
  /** Distinct count of avatarUrl across the matching connection */
  avatarUrl?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of billingAccountId across the matching connection */
  billingAccountId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of deletedAt across the matching connection */
  deletedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of deletionReason across the matching connection */
  deletionReason?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of idpOrganizationId across the matching connection */
  idpOrganizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of subscriptionId across the matching connection */
  subscriptionId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Organization` edge in the connection. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Organization` at the end of the edge. */
  node: Organization;
};

/** A filter to be used against `Organization` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OrganizationFilter>>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `billingAccountId` field. */
  billingAccountId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletionReason` field. */
  deletionReason?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `idpOrganizationId` field. */
  idpOrganizationId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OrganizationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OrganizationFilter>>;
  /** Filter by the object’s `repositories` relation. */
  repositories?: InputMaybe<OrganizationToManyRepositoryFilter>;
  /** Some related `repositories` exist. */
  repositoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryRelationshipTypes` relation. */
  repositoryRelationshipTypes?: InputMaybe<OrganizationToManyRepositoryRelationshipTypeFilter>;
  /** Some related `repositoryRelationshipTypes` exist. */
  repositoryRelationshipTypesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Organization` for usage during aggregation. */
export enum OrganizationGroupBy {
  AvatarUrl = 'AVATAR_URL',
  BillingAccountId = 'BILLING_ACCOUNT_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DeletedAt = 'DELETED_AT',
  DeletedAtTruncatedToDay = 'DELETED_AT_TRUNCATED_TO_DAY',
  DeletedAtTruncatedToHour = 'DELETED_AT_TRUNCATED_TO_HOUR',
  DeletionReason = 'DELETION_REASON',
  Description = 'DESCRIPTION',
  SubscriptionId = 'SUBSCRIPTION_ID',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type OrganizationHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Organization` aggregates. */
export type OrganizationHavingInput = {
  AND?: InputMaybe<Array<OrganizationHavingInput>>;
  OR?: InputMaybe<Array<OrganizationHavingInput>>;
  average?: InputMaybe<OrganizationHavingAverageInput>;
  distinctCount?: InputMaybe<OrganizationHavingDistinctCountInput>;
  max?: InputMaybe<OrganizationHavingMaxInput>;
  min?: InputMaybe<OrganizationHavingMinInput>;
  stddevPopulation?: InputMaybe<OrganizationHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<OrganizationHavingStddevSampleInput>;
  sum?: InputMaybe<OrganizationHavingSumInput>;
  variancePopulation?: InputMaybe<OrganizationHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<OrganizationHavingVarianceSampleInput>;
};

export type OrganizationHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  deletedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Organization` */
export type OrganizationInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  billingAccountId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletionReason?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  idpOrganizationId: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `Organization`. */
export enum OrganizationOrderBy {
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  BillingAccountIdAsc = 'BILLING_ACCOUNT_ID_ASC',
  BillingAccountIdDesc = 'BILLING_ACCOUNT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  DeletionReasonAsc = 'DELETION_REASON_ASC',
  DeletionReasonDesc = 'DELETION_REASON_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdpOrganizationIdAsc = 'IDP_ORGANIZATION_ID_ASC',
  IdpOrganizationIdDesc = 'IDP_ORGANIZATION_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoriesCountAsc = 'REPOSITORIES_COUNT_ASC',
  RepositoriesCountDesc = 'REPOSITORIES_COUNT_DESC',
  RepositoriesDistinctCountCreatedAtAsc = 'REPOSITORIES_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoriesDistinctCountCreatedAtDesc = 'REPOSITORIES_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoriesDistinctCountDefaultBranchAsc = 'REPOSITORIES_DISTINCT_COUNT_DEFAULT_BRANCH_ASC',
  RepositoriesDistinctCountDefaultBranchDesc = 'REPOSITORIES_DISTINCT_COUNT_DEFAULT_BRANCH_DESC',
  RepositoriesDistinctCountDescriptionAsc = 'REPOSITORIES_DISTINCT_COUNT_DESCRIPTION_ASC',
  RepositoriesDistinctCountDescriptionDesc = 'REPOSITORIES_DISTINCT_COUNT_DESCRIPTION_DESC',
  RepositoriesDistinctCountNameAsc = 'REPOSITORIES_DISTINCT_COUNT_NAME_ASC',
  RepositoriesDistinctCountNameDesc = 'REPOSITORIES_DISTINCT_COUNT_NAME_DESC',
  RepositoriesDistinctCountOrganizationIdAsc = 'REPOSITORIES_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  RepositoriesDistinctCountOrganizationIdDesc = 'REPOSITORIES_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  RepositoriesDistinctCountOwnerIdAsc = 'REPOSITORIES_DISTINCT_COUNT_OWNER_ID_ASC',
  RepositoriesDistinctCountOwnerIdDesc = 'REPOSITORIES_DISTINCT_COUNT_OWNER_ID_DESC',
  RepositoriesDistinctCountRowIdAsc = 'REPOSITORIES_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoriesDistinctCountRowIdDesc = 'REPOSITORIES_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoriesDistinctCountSlugAsc = 'REPOSITORIES_DISTINCT_COUNT_SLUG_ASC',
  RepositoriesDistinctCountSlugDesc = 'REPOSITORIES_DISTINCT_COUNT_SLUG_DESC',
  RepositoriesDistinctCountUpdatedAtAsc = 'REPOSITORIES_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoriesDistinctCountUpdatedAtDesc = 'REPOSITORIES_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoriesDistinctCountVisibilityAsc = 'REPOSITORIES_DISTINCT_COUNT_VISIBILITY_ASC',
  RepositoriesDistinctCountVisibilityDesc = 'REPOSITORIES_DISTINCT_COUNT_VISIBILITY_DESC',
  RepositoryRelationshipTypesCountAsc = 'REPOSITORY_RELATIONSHIP_TYPES_COUNT_ASC',
  RepositoryRelationshipTypesCountDesc = 'REPOSITORY_RELATIONSHIP_TYPES_COUNT_DESC',
  RepositoryRelationshipTypesDistinctCountCreatedAtAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryRelationshipTypesDistinctCountCreatedAtDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryRelationshipTypesDistinctCountDescriptionAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_DESCRIPTION_ASC',
  RepositoryRelationshipTypesDistinctCountDescriptionDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_DESCRIPTION_DESC',
  RepositoryRelationshipTypesDistinctCountIsDirectedAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_IS_DIRECTED_ASC',
  RepositoryRelationshipTypesDistinctCountIsDirectedDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_IS_DIRECTED_DESC',
  RepositoryRelationshipTypesDistinctCountNameAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_NAME_ASC',
  RepositoryRelationshipTypesDistinctCountNameDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_NAME_DESC',
  RepositoryRelationshipTypesDistinctCountOrganizationIdAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  RepositoryRelationshipTypesDistinctCountOrganizationIdDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  RepositoryRelationshipTypesDistinctCountRowIdAsc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoryRelationshipTypesDistinctCountRowIdDesc = 'REPOSITORY_RELATIONSHIP_TYPES_DISTINCT_COUNT_ROW_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SubscriptionIdAsc = 'SUBSCRIPTION_ID_ASC',
  SubscriptionIdDesc = 'SUBSCRIPTION_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `Organization`. Fields that are set will be updated. */
export type OrganizationPatch = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  billingAccountId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletionReason?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  idpOrganizationId?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against many `Repository` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyRepositoryFilter = {
  /** Aggregates across related `Repository` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryAggregatesFilter>;
  /** Every related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryFilter>;
  /** No related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryFilter>;
  /** Some related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryFilter>;
};

/** A filter to be used against many `RepositoryRelationshipType` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyRepositoryRelationshipTypeFilter = {
  /** Aggregates across related `RepositoryRelationshipType` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryRelationshipTypeAggregatesFilter>;
  /** Every related `RepositoryRelationshipType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryRelationshipTypeFilter>;
  /** No related `RepositoryRelationshipType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryRelationshipTypeFilter>;
  /** Some related `RepositoryRelationshipType` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryRelationshipTypeFilter>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export enum Permission {
  Admin = 'admin',
  Read = 'read',
  Write = 'write'
}

/** A filter to be used against Permission fields. All fields are combined with a logical ‘and.’ */
export type PermissionFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Permission>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Permission>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Permission>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Permission>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Permission>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Permission>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Permission>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Permission>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Permission>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Permission>>;
};

export type PullRequest = Node & {
  __typename?: 'PullRequest';
  /** Reads a single `User` that is related to this `PullRequest`. */
  author?: Maybe<User>;
  authorId: Scalars['UUID']['output'];
  closedAt?: Maybe<Scalars['Datetime']['output']>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  mergeCommitSha?: Maybe<Scalars['String']['output']>;
  mergedAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `User` that is related to this `PullRequest`. */
  mergedBy?: Maybe<User>;
  mergedById?: Maybe<Scalars['UUID']['output']>;
  number: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `PullRequestComment`. */
  pullRequestComments: PullRequestCommentConnection;
  /** Reads and enables pagination through a set of `PullRequestReview`. */
  pullRequestReviews: PullRequestReviewConnection;
  /** Reads a single `Repository` that is related to this `PullRequest`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  sourceBranch: Scalars['String']['output'];
  state: PullRequestState;
  targetBranch: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};


export type PullRequestPullRequestCommentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCommentCondition>;
  filter?: InputMaybe<PullRequestCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestCommentOrderBy>>;
};


export type PullRequestPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestReviewCondition>;
  filter?: InputMaybe<PullRequestReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestReviewOrderBy>>;
};

export type PullRequestAggregates = {
  __typename?: 'PullRequestAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<PullRequestAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PullRequestDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<PullRequestMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<PullRequestMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<PullRequestStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<PullRequestStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<PullRequestSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<PullRequestVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<PullRequestVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `PullRequest` object types. */
export type PullRequestAggregatesFilter = {
  /** Mean average aggregate over matching `PullRequest` objects. */
  average?: InputMaybe<PullRequestAverageAggregateFilter>;
  /** Distinct count aggregate over matching `PullRequest` objects. */
  distinctCount?: InputMaybe<PullRequestDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `PullRequest` object to be included within the aggregate. */
  filter?: InputMaybe<PullRequestFilter>;
  /** Maximum aggregate over matching `PullRequest` objects. */
  max?: InputMaybe<PullRequestMaxAggregateFilter>;
  /** Minimum aggregate over matching `PullRequest` objects. */
  min?: InputMaybe<PullRequestMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `PullRequest` objects. */
  stddevPopulation?: InputMaybe<PullRequestStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `PullRequest` objects. */
  stddevSample?: InputMaybe<PullRequestStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `PullRequest` objects. */
  sum?: InputMaybe<PullRequestSumAggregateFilter>;
  /** Population variance aggregate over matching `PullRequest` objects. */
  variancePopulation?: InputMaybe<PullRequestVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `PullRequest` objects. */
  varianceSample?: InputMaybe<PullRequestVarianceSampleAggregateFilter>;
};

export type PullRequestAverageAggregateFilter = {
  number?: InputMaybe<BigFloatFilter>;
};

export type PullRequestAverageAggregates = {
  __typename?: 'PullRequestAverageAggregates';
  /** Mean average of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestComment = Node & {
  __typename?: 'PullRequestComment';
  /** Reads a single `User` that is related to this `PullRequestComment`. */
  author?: Maybe<User>;
  authorId: Scalars['UUID']['output'];
  body: Scalars['String']['output'];
  commitSha?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  line?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  /** Reads a single `PullRequest` that is related to this `PullRequestComment`. */
  pullRequest?: Maybe<PullRequest>;
  pullRequestId: Scalars['UUID']['output'];
  replyToId?: Maybe<Scalars['UUID']['output']>;
  rowId: Scalars['UUID']['output'];
  side?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

export type PullRequestCommentAggregates = {
  __typename?: 'PullRequestCommentAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<PullRequestCommentAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PullRequestCommentDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<PullRequestCommentMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<PullRequestCommentMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<PullRequestCommentStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<PullRequestCommentStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<PullRequestCommentSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<PullRequestCommentVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<PullRequestCommentVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `PullRequestComment` object types. */
export type PullRequestCommentAggregatesFilter = {
  /** Mean average aggregate over matching `PullRequestComment` objects. */
  average?: InputMaybe<PullRequestCommentAverageAggregateFilter>;
  /** Distinct count aggregate over matching `PullRequestComment` objects. */
  distinctCount?: InputMaybe<PullRequestCommentDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `PullRequestComment` object to be included within the aggregate. */
  filter?: InputMaybe<PullRequestCommentFilter>;
  /** Maximum aggregate over matching `PullRequestComment` objects. */
  max?: InputMaybe<PullRequestCommentMaxAggregateFilter>;
  /** Minimum aggregate over matching `PullRequestComment` objects. */
  min?: InputMaybe<PullRequestCommentMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `PullRequestComment` objects. */
  stddevPopulation?: InputMaybe<PullRequestCommentStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `PullRequestComment` objects. */
  stddevSample?: InputMaybe<PullRequestCommentStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `PullRequestComment` objects. */
  sum?: InputMaybe<PullRequestCommentSumAggregateFilter>;
  /** Population variance aggregate over matching `PullRequestComment` objects. */
  variancePopulation?: InputMaybe<PullRequestCommentVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `PullRequestComment` objects. */
  varianceSample?: InputMaybe<PullRequestCommentVarianceSampleAggregateFilter>;
};

export type PullRequestCommentAverageAggregateFilter = {
  line?: InputMaybe<BigFloatFilter>;
};

export type PullRequestCommentAverageAggregates = {
  __typename?: 'PullRequestCommentAverageAggregates';
  /** Mean average of line across the matching connection */
  line?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `PullRequestComment` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PullRequestCommentCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `commitSha` field. */
  commitSha?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `line` field. */
  line?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `replyToId` field. */
  replyToId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `side` field. */
  side?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `PullRequestComment` values. */
export type PullRequestCommentConnection = {
  __typename?: 'PullRequestCommentConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PullRequestCommentAggregates>;
  /** A list of edges which contains the `PullRequestComment` and cursor to aid in pagination. */
  edges: Array<PullRequestCommentEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PullRequestCommentAggregates>>;
  /** A list of `PullRequestComment` objects. */
  nodes: Array<PullRequestComment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PullRequestComment` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `PullRequestComment` values. */
export type PullRequestCommentConnectionGroupedAggregatesArgs = {
  groupBy: Array<PullRequestCommentGroupBy>;
  having?: InputMaybe<PullRequestCommentHavingInput>;
};

export type PullRequestCommentDistinctCountAggregateFilter = {
  authorId?: InputMaybe<BigIntFilter>;
  body?: InputMaybe<BigIntFilter>;
  commitSha?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  line?: InputMaybe<BigIntFilter>;
  path?: InputMaybe<BigIntFilter>;
  pullRequestId?: InputMaybe<BigIntFilter>;
  replyToId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  side?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type PullRequestCommentDistinctCountAggregates = {
  __typename?: 'PullRequestCommentDistinctCountAggregates';
  /** Distinct count of authorId across the matching connection */
  authorId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of body across the matching connection */
  body?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of commitSha across the matching connection */
  commitSha?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of line across the matching connection */
  line?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of path across the matching connection */
  path?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pullRequestId across the matching connection */
  pullRequestId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of replyToId across the matching connection */
  replyToId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of side across the matching connection */
  side?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `PullRequestComment` edge in the connection. */
export type PullRequestCommentEdge = {
  __typename?: 'PullRequestCommentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PullRequestComment` at the end of the edge. */
  node: PullRequestComment;
};

/** A filter to be used against `PullRequestComment` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestCommentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PullRequestCommentFilter>>;
  /** Filter by the object’s `author` relation. */
  author?: InputMaybe<UserFilter>;
  /** Filter by the object’s `authorId` field. */
  authorId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `commitSha` field. */
  commitSha?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `line` field. */
  line?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PullRequestCommentFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PullRequestCommentFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `pullRequest` relation. */
  pullRequest?: InputMaybe<PullRequestFilter>;
  /** Filter by the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `replyToId` field. */
  replyToId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `side` field. */
  side?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `PullRequestComment` for usage during aggregation. */
export enum PullRequestCommentGroupBy {
  AuthorId = 'AUTHOR_ID',
  Body = 'BODY',
  CommitSha = 'COMMIT_SHA',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Line = 'LINE',
  Path = 'PATH',
  PullRequestId = 'PULL_REQUEST_ID',
  ReplyToId = 'REPLY_TO_ID',
  Side = 'SIDE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type PullRequestCommentHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `PullRequestComment` aggregates. */
export type PullRequestCommentHavingInput = {
  AND?: InputMaybe<Array<PullRequestCommentHavingInput>>;
  OR?: InputMaybe<Array<PullRequestCommentHavingInput>>;
  average?: InputMaybe<PullRequestCommentHavingAverageInput>;
  distinctCount?: InputMaybe<PullRequestCommentHavingDistinctCountInput>;
  max?: InputMaybe<PullRequestCommentHavingMaxInput>;
  min?: InputMaybe<PullRequestCommentHavingMinInput>;
  stddevPopulation?: InputMaybe<PullRequestCommentHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PullRequestCommentHavingStddevSampleInput>;
  sum?: InputMaybe<PullRequestCommentHavingSumInput>;
  variancePopulation?: InputMaybe<PullRequestCommentHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PullRequestCommentHavingVarianceSampleInput>;
};

export type PullRequestCommentHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestCommentHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  line?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `PullRequestComment` */
export type PullRequestCommentInput = {
  authorId: Scalars['UUID']['input'];
  body: Scalars['String']['input'];
  commitSha?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  line?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pullRequestId: Scalars['UUID']['input'];
  replyToId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PullRequestCommentMaxAggregateFilter = {
  line?: InputMaybe<IntFilter>;
};

export type PullRequestCommentMaxAggregates = {
  __typename?: 'PullRequestCommentMaxAggregates';
  /** Maximum of line across the matching connection */
  line?: Maybe<Scalars['Int']['output']>;
};

export type PullRequestCommentMinAggregateFilter = {
  line?: InputMaybe<IntFilter>;
};

export type PullRequestCommentMinAggregates = {
  __typename?: 'PullRequestCommentMinAggregates';
  /** Minimum of line across the matching connection */
  line?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `PullRequestComment`. */
export enum PullRequestCommentOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CommitShaAsc = 'COMMIT_SHA_ASC',
  CommitShaDesc = 'COMMIT_SHA_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  LineAsc = 'LINE_ASC',
  LineDesc = 'LINE_DESC',
  Natural = 'NATURAL',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestIdAsc = 'PULL_REQUEST_ID_ASC',
  PullRequestIdDesc = 'PULL_REQUEST_ID_DESC',
  ReplyToIdAsc = 'REPLY_TO_ID_ASC',
  ReplyToIdDesc = 'REPLY_TO_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SideAsc = 'SIDE_ASC',
  SideDesc = 'SIDE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `PullRequestComment`. Fields that are set will be updated. */
export type PullRequestCommentPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  commitSha?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  line?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  replyToId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PullRequestCommentStddevPopulationAggregateFilter = {
  line?: InputMaybe<BigFloatFilter>;
};

export type PullRequestCommentStddevPopulationAggregates = {
  __typename?: 'PullRequestCommentStddevPopulationAggregates';
  /** Population standard deviation of line across the matching connection */
  line?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestCommentStddevSampleAggregateFilter = {
  line?: InputMaybe<BigFloatFilter>;
};

export type PullRequestCommentStddevSampleAggregates = {
  __typename?: 'PullRequestCommentStddevSampleAggregates';
  /** Sample standard deviation of line across the matching connection */
  line?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestCommentSumAggregateFilter = {
  line?: InputMaybe<BigIntFilter>;
};

export type PullRequestCommentSumAggregates = {
  __typename?: 'PullRequestCommentSumAggregates';
  /** Sum of line across the matching connection */
  line: Scalars['BigInt']['output'];
};

export type PullRequestCommentVariancePopulationAggregateFilter = {
  line?: InputMaybe<BigFloatFilter>;
};

export type PullRequestCommentVariancePopulationAggregates = {
  __typename?: 'PullRequestCommentVariancePopulationAggregates';
  /** Population variance of line across the matching connection */
  line?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestCommentVarianceSampleAggregateFilter = {
  line?: InputMaybe<BigFloatFilter>;
};

export type PullRequestCommentVarianceSampleAggregates = {
  __typename?: 'PullRequestCommentVarianceSampleAggregates';
  /** Sample variance of line across the matching connection */
  line?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `PullRequest` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PullRequestCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `mergeCommitSha` field. */
  mergeCommitSha?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `mergedAt` field. */
  mergedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `mergedById` field. */
  mergedById?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `number` field. */
  number?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `sourceBranch` field. */
  sourceBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<PullRequestState>;
  /** Checks for equality with the object’s `targetBranch` field. */
  targetBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `PullRequest` values. */
export type PullRequestConnection = {
  __typename?: 'PullRequestConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PullRequestAggregates>;
  /** A list of edges which contains the `PullRequest` and cursor to aid in pagination. */
  edges: Array<PullRequestEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PullRequestAggregates>>;
  /** A list of `PullRequest` objects. */
  nodes: Array<PullRequest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PullRequest` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `PullRequest` values. */
export type PullRequestConnectionGroupedAggregatesArgs = {
  groupBy: Array<PullRequestGroupBy>;
  having?: InputMaybe<PullRequestHavingInput>;
};

export type PullRequestDistinctCountAggregateFilter = {
  authorId?: InputMaybe<BigIntFilter>;
  closedAt?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  mergeCommitSha?: InputMaybe<BigIntFilter>;
  mergedAt?: InputMaybe<BigIntFilter>;
  mergedById?: InputMaybe<BigIntFilter>;
  number?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  sourceBranch?: InputMaybe<BigIntFilter>;
  state?: InputMaybe<BigIntFilter>;
  targetBranch?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type PullRequestDistinctCountAggregates = {
  __typename?: 'PullRequestDistinctCountAggregates';
  /** Distinct count of authorId across the matching connection */
  authorId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of closedAt across the matching connection */
  closedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of mergeCommitSha across the matching connection */
  mergeCommitSha?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of mergedAt across the matching connection */
  mergedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of mergedById across the matching connection */
  mergedById?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of number across the matching connection */
  number?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of sourceBranch across the matching connection */
  sourceBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of targetBranch across the matching connection */
  targetBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `PullRequest` edge in the connection. */
export type PullRequestEdge = {
  __typename?: 'PullRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PullRequest` at the end of the edge. */
  node: PullRequest;
};

/** A filter to be used against `PullRequest` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PullRequestFilter>>;
  /** Filter by the object’s `author` relation. */
  author?: InputMaybe<UserFilter>;
  /** Filter by the object’s `authorId` field. */
  authorId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mergeCommitSha` field. */
  mergeCommitSha?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mergedAt` field. */
  mergedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `mergedBy` relation. */
  mergedBy?: InputMaybe<UserFilter>;
  /** A related `mergedBy` exists. */
  mergedByExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `mergedById` field. */
  mergedById?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PullRequestFilter>;
  /** Filter by the object’s `number` field. */
  number?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PullRequestFilter>>;
  /** Filter by the object’s `pullRequestComments` relation. */
  pullRequestComments?: InputMaybe<PullRequestToManyPullRequestCommentFilter>;
  /** Some related `pullRequestComments` exist. */
  pullRequestCommentsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `pullRequestReviews` relation. */
  pullRequestReviews?: InputMaybe<PullRequestToManyPullRequestReviewFilter>;
  /** Some related `pullRequestReviews` exist. */
  pullRequestReviewsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `sourceBranch` field. */
  sourceBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<PullRequestStateFilter>;
  /** Filter by the object’s `targetBranch` field. */
  targetBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `PullRequest` for usage during aggregation. */
export enum PullRequestGroupBy {
  AuthorId = 'AUTHOR_ID',
  ClosedAt = 'CLOSED_AT',
  ClosedAtTruncatedToDay = 'CLOSED_AT_TRUNCATED_TO_DAY',
  ClosedAtTruncatedToHour = 'CLOSED_AT_TRUNCATED_TO_HOUR',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  MergedAt = 'MERGED_AT',
  MergedAtTruncatedToDay = 'MERGED_AT_TRUNCATED_TO_DAY',
  MergedAtTruncatedToHour = 'MERGED_AT_TRUNCATED_TO_HOUR',
  MergedById = 'MERGED_BY_ID',
  MergeCommitSha = 'MERGE_COMMIT_SHA',
  Number = 'NUMBER',
  RepositoryId = 'REPOSITORY_ID',
  SourceBranch = 'SOURCE_BRANCH',
  State = 'STATE',
  TargetBranch = 'TARGET_BRANCH',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type PullRequestHavingAverageInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingDistinctCountInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `PullRequest` aggregates. */
export type PullRequestHavingInput = {
  AND?: InputMaybe<Array<PullRequestHavingInput>>;
  OR?: InputMaybe<Array<PullRequestHavingInput>>;
  average?: InputMaybe<PullRequestHavingAverageInput>;
  distinctCount?: InputMaybe<PullRequestHavingDistinctCountInput>;
  max?: InputMaybe<PullRequestHavingMaxInput>;
  min?: InputMaybe<PullRequestHavingMinInput>;
  stddevPopulation?: InputMaybe<PullRequestHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PullRequestHavingStddevSampleInput>;
  sum?: InputMaybe<PullRequestHavingSumInput>;
  variancePopulation?: InputMaybe<PullRequestHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PullRequestHavingVarianceSampleInput>;
};

export type PullRequestHavingMaxInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingMinInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingStddevPopulationInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingStddevSampleInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingSumInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingVariancePopulationInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestHavingVarianceSampleInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  mergedAt?: InputMaybe<HavingDatetimeFilter>;
  number?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `PullRequest` */
export type PullRequestInput = {
  authorId: Scalars['UUID']['input'];
  closedAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mergeCommitSha?: InputMaybe<Scalars['String']['input']>;
  mergedAt?: InputMaybe<Scalars['Datetime']['input']>;
  mergedById?: InputMaybe<Scalars['UUID']['input']>;
  number: Scalars['Int']['input'];
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  sourceBranch: Scalars['String']['input'];
  state?: InputMaybe<PullRequestState>;
  targetBranch: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PullRequestMaxAggregateFilter = {
  number?: InputMaybe<IntFilter>;
};

export type PullRequestMaxAggregates = {
  __typename?: 'PullRequestMaxAggregates';
  /** Maximum of number across the matching connection */
  number?: Maybe<Scalars['Int']['output']>;
};

export type PullRequestMinAggregateFilter = {
  number?: InputMaybe<IntFilter>;
};

export type PullRequestMinAggregates = {
  __typename?: 'PullRequestMinAggregates';
  /** Minimum of number across the matching connection */
  number?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `PullRequest`. */
export enum PullRequestOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  MergedAtAsc = 'MERGED_AT_ASC',
  MergedAtDesc = 'MERGED_AT_DESC',
  MergedByIdAsc = 'MERGED_BY_ID_ASC',
  MergedByIdDesc = 'MERGED_BY_ID_DESC',
  MergeCommitShaAsc = 'MERGE_COMMIT_SHA_ASC',
  MergeCommitShaDesc = 'MERGE_COMMIT_SHA_DESC',
  Natural = 'NATURAL',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestCommentsAverageLineAsc = 'PULL_REQUEST_COMMENTS_AVERAGE_LINE_ASC',
  PullRequestCommentsAverageLineDesc = 'PULL_REQUEST_COMMENTS_AVERAGE_LINE_DESC',
  PullRequestCommentsCountAsc = 'PULL_REQUEST_COMMENTS_COUNT_ASC',
  PullRequestCommentsCountDesc = 'PULL_REQUEST_COMMENTS_COUNT_DESC',
  PullRequestCommentsDistinctCountAuthorIdAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  PullRequestCommentsDistinctCountAuthorIdDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  PullRequestCommentsDistinctCountBodyAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_BODY_ASC',
  PullRequestCommentsDistinctCountBodyDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_BODY_DESC',
  PullRequestCommentsDistinctCountCommitShaAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_COMMIT_SHA_ASC',
  PullRequestCommentsDistinctCountCommitShaDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_COMMIT_SHA_DESC',
  PullRequestCommentsDistinctCountCreatedAtAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_CREATED_AT_ASC',
  PullRequestCommentsDistinctCountCreatedAtDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_CREATED_AT_DESC',
  PullRequestCommentsDistinctCountLineAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_LINE_ASC',
  PullRequestCommentsDistinctCountLineDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_LINE_DESC',
  PullRequestCommentsDistinctCountPathAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PATH_ASC',
  PullRequestCommentsDistinctCountPathDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PATH_DESC',
  PullRequestCommentsDistinctCountPullRequestIdAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  PullRequestCommentsDistinctCountPullRequestIdDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  PullRequestCommentsDistinctCountReplyToIdAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_REPLY_TO_ID_ASC',
  PullRequestCommentsDistinctCountReplyToIdDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_REPLY_TO_ID_DESC',
  PullRequestCommentsDistinctCountRowIdAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_ROW_ID_ASC',
  PullRequestCommentsDistinctCountRowIdDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestCommentsDistinctCountSideAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_SIDE_ASC',
  PullRequestCommentsDistinctCountSideDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_SIDE_DESC',
  PullRequestCommentsDistinctCountUpdatedAtAsc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  PullRequestCommentsDistinctCountUpdatedAtDesc = 'PULL_REQUEST_COMMENTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  PullRequestCommentsMaxLineAsc = 'PULL_REQUEST_COMMENTS_MAX_LINE_ASC',
  PullRequestCommentsMaxLineDesc = 'PULL_REQUEST_COMMENTS_MAX_LINE_DESC',
  PullRequestCommentsMinLineAsc = 'PULL_REQUEST_COMMENTS_MIN_LINE_ASC',
  PullRequestCommentsMinLineDesc = 'PULL_REQUEST_COMMENTS_MIN_LINE_DESC',
  PullRequestCommentsStddevPopulationLineAsc = 'PULL_REQUEST_COMMENTS_STDDEV_POPULATION_LINE_ASC',
  PullRequestCommentsStddevPopulationLineDesc = 'PULL_REQUEST_COMMENTS_STDDEV_POPULATION_LINE_DESC',
  PullRequestCommentsStddevSampleLineAsc = 'PULL_REQUEST_COMMENTS_STDDEV_SAMPLE_LINE_ASC',
  PullRequestCommentsStddevSampleLineDesc = 'PULL_REQUEST_COMMENTS_STDDEV_SAMPLE_LINE_DESC',
  PullRequestCommentsSumLineAsc = 'PULL_REQUEST_COMMENTS_SUM_LINE_ASC',
  PullRequestCommentsSumLineDesc = 'PULL_REQUEST_COMMENTS_SUM_LINE_DESC',
  PullRequestCommentsVariancePopulationLineAsc = 'PULL_REQUEST_COMMENTS_VARIANCE_POPULATION_LINE_ASC',
  PullRequestCommentsVariancePopulationLineDesc = 'PULL_REQUEST_COMMENTS_VARIANCE_POPULATION_LINE_DESC',
  PullRequestCommentsVarianceSampleLineAsc = 'PULL_REQUEST_COMMENTS_VARIANCE_SAMPLE_LINE_ASC',
  PullRequestCommentsVarianceSampleLineDesc = 'PULL_REQUEST_COMMENTS_VARIANCE_SAMPLE_LINE_DESC',
  PullRequestReviewsCountAsc = 'PULL_REQUEST_REVIEWS_COUNT_ASC',
  PullRequestReviewsCountDesc = 'PULL_REQUEST_REVIEWS_COUNT_DESC',
  PullRequestReviewsDistinctCountBodyAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_BODY_ASC',
  PullRequestReviewsDistinctCountBodyDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_BODY_DESC',
  PullRequestReviewsDistinctCountCreatedAtAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_CREATED_AT_ASC',
  PullRequestReviewsDistinctCountCreatedAtDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_CREATED_AT_DESC',
  PullRequestReviewsDistinctCountPullRequestIdAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  PullRequestReviewsDistinctCountPullRequestIdDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  PullRequestReviewsDistinctCountReviewerIdAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_REVIEWER_ID_ASC',
  PullRequestReviewsDistinctCountReviewerIdDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_REVIEWER_ID_DESC',
  PullRequestReviewsDistinctCountRowIdAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_ROW_ID_ASC',
  PullRequestReviewsDistinctCountRowIdDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestReviewsDistinctCountStateAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_STATE_ASC',
  PullRequestReviewsDistinctCountStateDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_STATE_DESC',
  PullRequestReviewsDistinctCountSubmittedAtAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_SUBMITTED_AT_ASC',
  PullRequestReviewsDistinctCountSubmittedAtDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_SUBMITTED_AT_DESC',
  PullRequestReviewsDistinctCountUpdatedAtAsc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_UPDATED_AT_ASC',
  PullRequestReviewsDistinctCountUpdatedAtDesc = 'PULL_REQUEST_REVIEWS_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SourceBranchAsc = 'SOURCE_BRANCH_ASC',
  SourceBranchDesc = 'SOURCE_BRANCH_DESC',
  TargetBranchAsc = 'TARGET_BRANCH_ASC',
  TargetBranchDesc = 'TARGET_BRANCH_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `PullRequest`. Fields that are set will be updated. */
export type PullRequestPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  closedAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mergeCommitSha?: InputMaybe<Scalars['String']['input']>;
  mergedAt?: InputMaybe<Scalars['Datetime']['input']>;
  mergedById?: InputMaybe<Scalars['UUID']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  sourceBranch?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<PullRequestState>;
  targetBranch?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PullRequestReview = Node & {
  __typename?: 'PullRequestReview';
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `PullRequest` that is related to this `PullRequestReview`. */
  pullRequest?: Maybe<PullRequest>;
  pullRequestId: Scalars['UUID']['output'];
  /** Reads a single `User` that is related to this `PullRequestReview`. */
  reviewer?: Maybe<User>;
  reviewerId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  state: ReviewState;
  submittedAt?: Maybe<Scalars['Datetime']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

export type PullRequestReviewAggregates = {
  __typename?: 'PullRequestReviewAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PullRequestReviewDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `PullRequestReview` object types. */
export type PullRequestReviewAggregatesFilter = {
  /** Distinct count aggregate over matching `PullRequestReview` objects. */
  distinctCount?: InputMaybe<PullRequestReviewDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `PullRequestReview` object to be included within the aggregate. */
  filter?: InputMaybe<PullRequestReviewFilter>;
};

/**
 * A condition to be used against `PullRequestReview` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PullRequestReviewCondition = {
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `reviewerId` field. */
  reviewerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<ReviewState>;
  /** Checks for equality with the object’s `submittedAt` field. */
  submittedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `PullRequestReview` values. */
export type PullRequestReviewConnection = {
  __typename?: 'PullRequestReviewConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PullRequestReviewAggregates>;
  /** A list of edges which contains the `PullRequestReview` and cursor to aid in pagination. */
  edges: Array<PullRequestReviewEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PullRequestReviewAggregates>>;
  /** A list of `PullRequestReview` objects. */
  nodes: Array<PullRequestReview>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PullRequestReview` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `PullRequestReview` values. */
export type PullRequestReviewConnectionGroupedAggregatesArgs = {
  groupBy: Array<PullRequestReviewGroupBy>;
  having?: InputMaybe<PullRequestReviewHavingInput>;
};

export type PullRequestReviewDistinctCountAggregateFilter = {
  body?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  pullRequestId?: InputMaybe<BigIntFilter>;
  reviewerId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  state?: InputMaybe<BigIntFilter>;
  submittedAt?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type PullRequestReviewDistinctCountAggregates = {
  __typename?: 'PullRequestReviewDistinctCountAggregates';
  /** Distinct count of body across the matching connection */
  body?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pullRequestId across the matching connection */
  pullRequestId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of reviewerId across the matching connection */
  reviewerId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of submittedAt across the matching connection */
  submittedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `PullRequestReview` edge in the connection. */
export type PullRequestReviewEdge = {
  __typename?: 'PullRequestReviewEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PullRequestReview` at the end of the edge. */
  node: PullRequestReview;
};

/** A filter to be used against `PullRequestReview` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestReviewFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PullRequestReviewFilter>>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PullRequestReviewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PullRequestReviewFilter>>;
  /** Filter by the object’s `pullRequest` relation. */
  pullRequest?: InputMaybe<PullRequestFilter>;
  /** Filter by the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `reviewer` relation. */
  reviewer?: InputMaybe<UserFilter>;
  /** Filter by the object’s `reviewerId` field. */
  reviewerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<ReviewStateFilter>;
  /** Filter by the object’s `submittedAt` field. */
  submittedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `PullRequestReview` for usage during aggregation. */
export enum PullRequestReviewGroupBy {
  Body = 'BODY',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  PullRequestId = 'PULL_REQUEST_ID',
  ReviewerId = 'REVIEWER_ID',
  State = 'STATE',
  SubmittedAt = 'SUBMITTED_AT',
  SubmittedAtTruncatedToDay = 'SUBMITTED_AT_TRUNCATED_TO_DAY',
  SubmittedAtTruncatedToHour = 'SUBMITTED_AT_TRUNCATED_TO_HOUR',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type PullRequestReviewHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `PullRequestReview` aggregates. */
export type PullRequestReviewHavingInput = {
  AND?: InputMaybe<Array<PullRequestReviewHavingInput>>;
  OR?: InputMaybe<Array<PullRequestReviewHavingInput>>;
  average?: InputMaybe<PullRequestReviewHavingAverageInput>;
  distinctCount?: InputMaybe<PullRequestReviewHavingDistinctCountInput>;
  max?: InputMaybe<PullRequestReviewHavingMaxInput>;
  min?: InputMaybe<PullRequestReviewHavingMinInput>;
  stddevPopulation?: InputMaybe<PullRequestReviewHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PullRequestReviewHavingStddevSampleInput>;
  sum?: InputMaybe<PullRequestReviewHavingSumInput>;
  variancePopulation?: InputMaybe<PullRequestReviewHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PullRequestReviewHavingVarianceSampleInput>;
};

export type PullRequestReviewHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PullRequestReviewHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  submittedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `PullRequestReview` */
export type PullRequestReviewInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  pullRequestId: Scalars['UUID']['input'];
  reviewerId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<ReviewState>;
  submittedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `PullRequestReview`. */
export enum PullRequestReviewOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestIdAsc = 'PULL_REQUEST_ID_ASC',
  PullRequestIdDesc = 'PULL_REQUEST_ID_DESC',
  ReviewerIdAsc = 'REVIEWER_ID_ASC',
  ReviewerIdDesc = 'REVIEWER_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SubmittedAtAsc = 'SUBMITTED_AT_ASC',
  SubmittedAtDesc = 'SUBMITTED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `PullRequestReview`. Fields that are set will be updated. */
export type PullRequestReviewPatch = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  reviewerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<ReviewState>;
  submittedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum PullRequestState {
  Closed = 'closed',
  Draft = 'draft',
  Merged = 'merged',
  Open = 'open'
}

/** A filter to be used against PullRequestState fields. All fields are combined with a logical ‘and.’ */
export type PullRequestStateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<PullRequestState>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<PullRequestState>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<PullRequestState>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<PullRequestState>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<PullRequestState>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<PullRequestState>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<PullRequestState>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<PullRequestState>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<PullRequestState>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<PullRequestState>>;
};

export type PullRequestStddevPopulationAggregateFilter = {
  number?: InputMaybe<BigFloatFilter>;
};

export type PullRequestStddevPopulationAggregates = {
  __typename?: 'PullRequestStddevPopulationAggregates';
  /** Population standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestStddevSampleAggregateFilter = {
  number?: InputMaybe<BigFloatFilter>;
};

export type PullRequestStddevSampleAggregates = {
  __typename?: 'PullRequestStddevSampleAggregates';
  /** Sample standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestSumAggregateFilter = {
  number?: InputMaybe<BigIntFilter>;
};

export type PullRequestSumAggregates = {
  __typename?: 'PullRequestSumAggregates';
  /** Sum of number across the matching connection */
  number: Scalars['BigInt']['output'];
};

/** A filter to be used against many `PullRequestComment` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestToManyPullRequestCommentFilter = {
  /** Aggregates across related `PullRequestComment` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestCommentAggregatesFilter>;
  /** Every related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestCommentFilter>;
  /** No related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestCommentFilter>;
  /** Some related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestCommentFilter>;
};

/** A filter to be used against many `PullRequestReview` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestToManyPullRequestReviewFilter = {
  /** Aggregates across related `PullRequestReview` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestReviewAggregatesFilter>;
  /** Every related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestReviewFilter>;
  /** No related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestReviewFilter>;
  /** Some related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestReviewFilter>;
};

export type PullRequestVariancePopulationAggregateFilter = {
  number?: InputMaybe<BigFloatFilter>;
};

export type PullRequestVariancePopulationAggregates = {
  __typename?: 'PullRequestVariancePopulationAggregates';
  /** Population variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
};

export type PullRequestVarianceSampleAggregateFilter = {
  number?: InputMaybe<BigFloatFilter>;
};

export type PullRequestVarianceSampleAggregates = {
  __typename?: 'PullRequestVarianceSampleAggregates';
  /** Sample variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Get a single `AuditLog`. */
  auditLog?: Maybe<AuditLog>;
  /** Reads a single `AuditLog` using its globally unique `ID`. */
  auditLogById?: Maybe<AuditLog>;
  /** Reads and enables pagination through a set of `AuditLog`. */
  auditLogs?: Maybe<AuditLogConnection>;
  /** Reads and enables pagination through a set of `ExternalDependency`. */
  externalDependencies?: Maybe<ExternalDependencyConnection>;
  /** Get a single `ExternalDependency`. */
  externalDependency?: Maybe<ExternalDependency>;
  /** Reads a single `ExternalDependency` using its globally unique `ID`. */
  externalDependencyById?: Maybe<ExternalDependency>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /**
   * Returns the currently authenticated user (observer).
   * Returns null if not authenticated.
   */
  observer?: Maybe<Observer>;
  /** Get a single `Organization`. */
  organization?: Maybe<Organization>;
  /** Reads a single `Organization` using its globally unique `ID`. */
  organizationById?: Maybe<Organization>;
  /** Get a single `Organization`. */
  organizationByIdpOrganizationId?: Maybe<Organization>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationConnection>;
  /** Get a single `PullRequest`. */
  pullRequest?: Maybe<PullRequest>;
  /** Reads a single `PullRequest` using its globally unique `ID`. */
  pullRequestById?: Maybe<PullRequest>;
  /** Get a single `PullRequestComment`. */
  pullRequestComment?: Maybe<PullRequestComment>;
  /** Reads a single `PullRequestComment` using its globally unique `ID`. */
  pullRequestCommentById?: Maybe<PullRequestComment>;
  /** Reads and enables pagination through a set of `PullRequestComment`. */
  pullRequestComments?: Maybe<PullRequestCommentConnection>;
  /** Get a single `PullRequestReview`. */
  pullRequestReview?: Maybe<PullRequestReview>;
  /** Reads a single `PullRequestReview` using its globally unique `ID`. */
  pullRequestReviewById?: Maybe<PullRequestReview>;
  /** Reads and enables pagination through a set of `PullRequestReview`. */
  pullRequestReviews?: Maybe<PullRequestReviewConnection>;
  /** Reads and enables pagination through a set of `PullRequest`. */
  pullRequests?: Maybe<PullRequestConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads and enables pagination through a set of `Repository`. */
  repositories?: Maybe<RepositoryConnection>;
  /** Get a single `Repository`. */
  repository?: Maybe<Repository>;
  /** Reads a single `Repository` using its globally unique `ID`. */
  repositoryById?: Maybe<Repository>;
  /** Get a single `RepositoryCollaborator`. */
  repositoryCollaborator?: Maybe<RepositoryCollaborator>;
  /** Reads a single `RepositoryCollaborator` using its globally unique `ID`. */
  repositoryCollaboratorById?: Maybe<RepositoryCollaborator>;
  /** Reads and enables pagination through a set of `RepositoryCollaborator`. */
  repositoryCollaborators?: Maybe<RepositoryCollaboratorConnection>;
  /** Get a single `RepositoryRelationship`. */
  repositoryRelationship?: Maybe<RepositoryRelationship>;
  /** Reads a single `RepositoryRelationship` using its globally unique `ID`. */
  repositoryRelationshipById?: Maybe<RepositoryRelationship>;
  /** Reads and enables pagination through a set of `RepositoryRelationshipMetadatum`. */
  repositoryRelationshipMetadata?: Maybe<RepositoryRelationshipMetadatumConnection>;
  /** Get a single `RepositoryRelationshipMetadatum`. */
  repositoryRelationshipMetadatum?: Maybe<RepositoryRelationshipMetadatum>;
  /** Reads a single `RepositoryRelationshipMetadatum` using its globally unique `ID`. */
  repositoryRelationshipMetadatumById?: Maybe<RepositoryRelationshipMetadatum>;
  /** Get a single `RepositoryRelationshipType`. */
  repositoryRelationshipType?: Maybe<RepositoryRelationshipType>;
  /** Reads a single `RepositoryRelationshipType` using its globally unique `ID`. */
  repositoryRelationshipTypeById?: Maybe<RepositoryRelationshipType>;
  /** Reads and enables pagination through a set of `RepositoryRelationshipType`. */
  repositoryRelationshipTypes?: Maybe<RepositoryRelationshipTypeConnection>;
  /** Reads and enables pagination through a set of `RepositoryRelationship`. */
  repositoryRelationships?: Maybe<RepositoryRelationshipConnection>;
  /** Get a single `User`. */
  user?: Maybe<User>;
  /** Get a single `User`. */
  userByEmail?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userById?: Maybe<User>;
  /** Get a single `User`. */
  userByIdentityProviderId?: Maybe<User>;
  /** Get a single `User`. */
  userByUsername?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UserConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AuditLogCondition>;
  filter?: InputMaybe<AuditLogFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuditLogOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryExternalDependenciesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalDependencyCondition>;
  filter?: InputMaybe<ExternalDependencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalDependencyOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryExternalDependencyArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryExternalDependencyByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationByIdpOrganizationIdArgs = {
  idpOrganizationId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationCondition>;
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestCommentArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestCommentByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestCommentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCommentCondition>;
  filter?: InputMaybe<PullRequestCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestCommentOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestReviewArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestReviewByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestReviewCondition>;
  filter?: InputMaybe<PullRequestReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestReviewOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCondition>;
  filter?: InputMaybe<PullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCondition>;
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryCollaboratorArgs = {
  repositoryId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryCollaboratorByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryCollaboratorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCollaboratorCondition>;
  filter?: InputMaybe<RepositoryCollaboratorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryCollaboratorOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipMetadatumCondition>;
  filter?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipMetadatumOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipMetadatumArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipMetadatumByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipTypeArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipTypeByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipTypeCondition>;
  filter?: InputMaybe<RepositoryRelationshipTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipTypeOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepositoryRelationshipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipCondition>;
  filter?: InputMaybe<RepositoryRelationshipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdentityProviderIdArgs = {
  identityProviderId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};

/** A Git reference (branch or tag). */
export type Ref = {
  __typename?: 'Ref';
  /** Unique identifier for this ref. */
  id: Scalars['ID']['output'];
  /** The reference name without the prefix (e.g., "master" for refs/heads/master). */
  name: Scalars['String']['output'];
  /** The reference prefix (e.g., "refs/heads/" or "refs/tags/"). */
  prefix: Scalars['String']['output'];
  /** The Git object the ref points to. */
  target?: Maybe<GitObject>;
};

/** A connection to a list of refs. */
export type RefConnection = {
  __typename?: 'RefConnection';
  /** The refs. */
  nodes: Array<Ref>;
  /** The total count of refs. */
  totalCount: Scalars['Int']['output'];
};

export type Repository = Node & {
  __typename?: 'Repository';
  /** Fetch a commit by its SHA. */
  commit?: Maybe<Commit>;
  createdAt: Scalars['Datetime']['output'];
  defaultBranch: Scalars['String']['output'];
  /** The default branch ref. */
  defaultBranchRef?: Maybe<Ref>;
  description?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ExternalDependency`. */
  externalDependencies: ExternalDependencyConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `Organization` that is related to this `Repository`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `User` that is related to this `Repository`. */
  owner?: Maybe<User>;
  ownerId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `PullRequest`. */
  pullRequests: PullRequestConnection;
  /** Fetch a ref by its fully qualified name (e.g., "refs/heads/main"). */
  ref?: Maybe<Ref>;
  /** List refs matching a prefix. */
  refs: RefConnection;
  /** Reads and enables pagination through a set of `RepositoryCollaborator`. */
  repositoryCollaborators: RepositoryCollaboratorConnection;
  /** Reads and enables pagination through a set of `RepositoryRelationship`. */
  repositoryRelationshipsBySourceRepositoryId: RepositoryRelationshipConnection;
  /** Reads and enables pagination through a set of `RepositoryRelationship`. */
  repositoryRelationshipsByTargetRepositoryId: RepositoryRelationshipConnection;
  rowId: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  visibility: Visibility;
};


export type RepositoryCommitArgs = {
  sha: Scalars['String']['input'];
};


export type RepositoryExternalDependenciesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalDependencyCondition>;
  filter?: InputMaybe<ExternalDependencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalDependencyOrderBy>>;
};


export type RepositoryPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCondition>;
  filter?: InputMaybe<PullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestOrderBy>>;
};


export type RepositoryRefArgs = {
  qualifiedName: Scalars['String']['input'];
};


export type RepositoryRefsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  refPrefix: Scalars['String']['input'];
};


export type RepositoryRepositoryCollaboratorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCollaboratorCondition>;
  filter?: InputMaybe<RepositoryCollaboratorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryCollaboratorOrderBy>>;
};


export type RepositoryRepositoryRelationshipsBySourceRepositoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipCondition>;
  filter?: InputMaybe<RepositoryRelationshipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipOrderBy>>;
};


export type RepositoryRepositoryRelationshipsByTargetRepositoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipCondition>;
  filter?: InputMaybe<RepositoryRelationshipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipOrderBy>>;
};

export type RepositoryAggregates = {
  __typename?: 'RepositoryAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepositoryDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `Repository` object types. */
export type RepositoryAggregatesFilter = {
  /** Distinct count aggregate over matching `Repository` objects. */
  distinctCount?: InputMaybe<RepositoryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Repository` object to be included within the aggregate. */
  filter?: InputMaybe<RepositoryFilter>;
};

export type RepositoryCollaborator = Node & {
  __typename?: 'RepositoryCollaborator';
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  permission: Permission;
  /** Reads a single `Repository` that is related to this `RepositoryCollaborator`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `RepositoryCollaborator`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type RepositoryCollaboratorAggregates = {
  __typename?: 'RepositoryCollaboratorAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepositoryCollaboratorDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `RepositoryCollaborator` object types. */
export type RepositoryCollaboratorAggregatesFilter = {
  /** Distinct count aggregate over matching `RepositoryCollaborator` objects. */
  distinctCount?: InputMaybe<RepositoryCollaboratorDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `RepositoryCollaborator` object to be included within the aggregate. */
  filter?: InputMaybe<RepositoryCollaboratorFilter>;
};

/**
 * A condition to be used against `RepositoryCollaborator` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type RepositoryCollaboratorCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `permission` field. */
  permission?: InputMaybe<Permission>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `RepositoryCollaborator` values. */
export type RepositoryCollaboratorConnection = {
  __typename?: 'RepositoryCollaboratorConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepositoryCollaboratorAggregates>;
  /** A list of edges which contains the `RepositoryCollaborator` and cursor to aid in pagination. */
  edges: Array<RepositoryCollaboratorEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepositoryCollaboratorAggregates>>;
  /** A list of `RepositoryCollaborator` objects. */
  nodes: Array<RepositoryCollaborator>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepositoryCollaborator` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `RepositoryCollaborator` values. */
export type RepositoryCollaboratorConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepositoryCollaboratorGroupBy>;
  having?: InputMaybe<RepositoryCollaboratorHavingInput>;
};

export type RepositoryCollaboratorDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  permission?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type RepositoryCollaboratorDistinctCountAggregates = {
  __typename?: 'RepositoryCollaboratorDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of permission across the matching connection */
  permission?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `RepositoryCollaborator` edge in the connection. */
export type RepositoryCollaboratorEdge = {
  __typename?: 'RepositoryCollaboratorEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RepositoryCollaborator` at the end of the edge. */
  node: RepositoryCollaborator;
};

/** A filter to be used against `RepositoryCollaborator` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryCollaboratorFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepositoryCollaboratorFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepositoryCollaboratorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepositoryCollaboratorFilter>>;
  /** Filter by the object’s `permission` field. */
  permission?: InputMaybe<PermissionFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `RepositoryCollaborator` for usage during aggregation. */
export enum RepositoryCollaboratorGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Permission = 'PERMISSION',
  RepositoryId = 'REPOSITORY_ID',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type RepositoryCollaboratorHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `RepositoryCollaborator` aggregates. */
export type RepositoryCollaboratorHavingInput = {
  AND?: InputMaybe<Array<RepositoryCollaboratorHavingInput>>;
  OR?: InputMaybe<Array<RepositoryCollaboratorHavingInput>>;
  average?: InputMaybe<RepositoryCollaboratorHavingAverageInput>;
  distinctCount?: InputMaybe<RepositoryCollaboratorHavingDistinctCountInput>;
  max?: InputMaybe<RepositoryCollaboratorHavingMaxInput>;
  min?: InputMaybe<RepositoryCollaboratorHavingMinInput>;
  stddevPopulation?: InputMaybe<RepositoryCollaboratorHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RepositoryCollaboratorHavingStddevSampleInput>;
  sum?: InputMaybe<RepositoryCollaboratorHavingSumInput>;
  variancePopulation?: InputMaybe<RepositoryCollaboratorHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RepositoryCollaboratorHavingVarianceSampleInput>;
};

export type RepositoryCollaboratorHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryCollaboratorHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `RepositoryCollaborator` */
export type RepositoryCollaboratorInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  permission?: InputMaybe<Permission>;
  repositoryId: Scalars['UUID']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `RepositoryCollaborator`. */
export enum RepositoryCollaboratorOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PermissionAsc = 'PERMISSION_ASC',
  PermissionDesc = 'PERMISSION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `RepositoryCollaborator`. Fields that are set will be updated. */
export type RepositoryCollaboratorPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  permission?: InputMaybe<Permission>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/**
 * A condition to be used against `Repository` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepositoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `defaultBranch` field. */
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `ownerId` field. */
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `visibility` field. */
  visibility?: InputMaybe<Visibility>;
};

/** A connection to a list of `Repository` values. */
export type RepositoryConnection = {
  __typename?: 'RepositoryConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepositoryAggregates>;
  /** A list of edges which contains the `Repository` and cursor to aid in pagination. */
  edges: Array<RepositoryEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepositoryAggregates>>;
  /** A list of `Repository` objects. */
  nodes: Array<Repository>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Repository` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Repository` values. */
export type RepositoryConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepositoryGroupBy>;
  having?: InputMaybe<RepositoryHavingInput>;
};

export type RepositoryDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  defaultBranch?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  ownerId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  slug?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  visibility?: InputMaybe<BigIntFilter>;
};

export type RepositoryDistinctCountAggregates = {
  __typename?: 'RepositoryDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of defaultBranch across the matching connection */
  defaultBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of organizationId across the matching connection */
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of ownerId across the matching connection */
  ownerId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of slug across the matching connection */
  slug?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of visibility across the matching connection */
  visibility?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Repository` edge in the connection. */
export type RepositoryEdge = {
  __typename?: 'RepositoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Repository` at the end of the edge. */
  node: Repository;
};

/** A filter to be used against `Repository` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepositoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `defaultBranch` field. */
  defaultBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `externalDependencies` relation. */
  externalDependencies?: InputMaybe<RepositoryToManyExternalDependencyFilter>;
  /** Some related `externalDependencies` exist. */
  externalDependenciesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepositoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepositoryFilter>>;
  /** Filter by the object’s `organization` relation. */
  organization?: InputMaybe<OrganizationFilter>;
  /** A related `organization` exists. */
  organizationExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `organizationId` field. */
  organizationId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `owner` relation. */
  owner?: InputMaybe<UserFilter>;
  /** Filter by the object’s `ownerId` field. */
  ownerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `pullRequests` relation. */
  pullRequests?: InputMaybe<RepositoryToManyPullRequestFilter>;
  /** Some related `pullRequests` exist. */
  pullRequestsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryCollaborators` relation. */
  repositoryCollaborators?: InputMaybe<RepositoryToManyRepositoryCollaboratorFilter>;
  /** Some related `repositoryCollaborators` exist. */
  repositoryCollaboratorsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryRelationshipsBySourceRepositoryId` relation. */
  repositoryRelationshipsBySourceRepositoryId?: InputMaybe<RepositoryToManyRepositoryRelationshipFilter>;
  /** Some related `repositoryRelationshipsBySourceRepositoryId` exist. */
  repositoryRelationshipsBySourceRepositoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryRelationshipsByTargetRepositoryId` relation. */
  repositoryRelationshipsByTargetRepositoryId?: InputMaybe<RepositoryToManyRepositoryRelationshipFilter>;
  /** Some related `repositoryRelationshipsByTargetRepositoryId` exist. */
  repositoryRelationshipsByTargetRepositoryIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `visibility` field. */
  visibility?: InputMaybe<VisibilityFilter>;
};

/** Grouping methods for `Repository` for usage during aggregation. */
export enum RepositoryGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DefaultBranch = 'DEFAULT_BRANCH',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  OwnerId = 'OWNER_ID',
  Slug = 'SLUG',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  Visibility = 'VISIBILITY'
}

export type RepositoryHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Repository` aggregates. */
export type RepositoryHavingInput = {
  AND?: InputMaybe<Array<RepositoryHavingInput>>;
  OR?: InputMaybe<Array<RepositoryHavingInput>>;
  average?: InputMaybe<RepositoryHavingAverageInput>;
  distinctCount?: InputMaybe<RepositoryHavingDistinctCountInput>;
  max?: InputMaybe<RepositoryHavingMaxInput>;
  min?: InputMaybe<RepositoryHavingMinInput>;
  stddevPopulation?: InputMaybe<RepositoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RepositoryHavingStddevSampleInput>;
  sum?: InputMaybe<RepositoryHavingSumInput>;
  variancePopulation?: InputMaybe<RepositoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RepositoryHavingVarianceSampleInput>;
};

export type RepositoryHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Repository` */
export type RepositoryInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  visibility?: InputMaybe<Visibility>;
};

/** Methods to use when ordering `Repository`. */
export enum RepositoryOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DefaultBranchAsc = 'DEFAULT_BRANCH_ASC',
  DefaultBranchDesc = 'DEFAULT_BRANCH_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ExternalDependenciesCountAsc = 'EXTERNAL_DEPENDENCIES_COUNT_ASC',
  ExternalDependenciesCountDesc = 'EXTERNAL_DEPENDENCIES_COUNT_DESC',
  ExternalDependenciesDistinctCountCreatedAtAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_CREATED_AT_ASC',
  ExternalDependenciesDistinctCountCreatedAtDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_CREATED_AT_DESC',
  ExternalDependenciesDistinctCountDetectionSourceAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  ExternalDependenciesDistinctCountDetectionSourceDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  ExternalDependenciesDistinctCountPackageManagerAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_PACKAGE_MANAGER_ASC',
  ExternalDependenciesDistinctCountPackageManagerDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_PACKAGE_MANAGER_DESC',
  ExternalDependenciesDistinctCountPackageNameAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_PACKAGE_NAME_ASC',
  ExternalDependenciesDistinctCountPackageNameDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_PACKAGE_NAME_DESC',
  ExternalDependenciesDistinctCountRepositoryIdAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ExternalDependenciesDistinctCountRepositoryIdDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ExternalDependenciesDistinctCountRowIdAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_ROW_ID_ASC',
  ExternalDependenciesDistinctCountRowIdDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_ROW_ID_DESC',
  ExternalDependenciesDistinctCountVersionConstraintAsc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_VERSION_CONSTRAINT_ASC',
  ExternalDependenciesDistinctCountVersionConstraintDesc = 'EXTERNAL_DEPENDENCIES_DISTINCT_COUNT_VERSION_CONSTRAINT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestsAverageNumberAsc = 'PULL_REQUESTS_AVERAGE_NUMBER_ASC',
  PullRequestsAverageNumberDesc = 'PULL_REQUESTS_AVERAGE_NUMBER_DESC',
  PullRequestsCountAsc = 'PULL_REQUESTS_COUNT_ASC',
  PullRequestsCountDesc = 'PULL_REQUESTS_COUNT_DESC',
  PullRequestsDistinctCountAuthorIdAsc = 'PULL_REQUESTS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  PullRequestsDistinctCountAuthorIdDesc = 'PULL_REQUESTS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  PullRequestsDistinctCountClosedAtAsc = 'PULL_REQUESTS_DISTINCT_COUNT_CLOSED_AT_ASC',
  PullRequestsDistinctCountClosedAtDesc = 'PULL_REQUESTS_DISTINCT_COUNT_CLOSED_AT_DESC',
  PullRequestsDistinctCountCreatedAtAsc = 'PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_ASC',
  PullRequestsDistinctCountCreatedAtDesc = 'PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_DESC',
  PullRequestsDistinctCountDescriptionAsc = 'PULL_REQUESTS_DISTINCT_COUNT_DESCRIPTION_ASC',
  PullRequestsDistinctCountDescriptionDesc = 'PULL_REQUESTS_DISTINCT_COUNT_DESCRIPTION_DESC',
  PullRequestsDistinctCountMergedAtAsc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGED_AT_ASC',
  PullRequestsDistinctCountMergedAtDesc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGED_AT_DESC',
  PullRequestsDistinctCountMergedByIdAsc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGED_BY_ID_ASC',
  PullRequestsDistinctCountMergedByIdDesc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGED_BY_ID_DESC',
  PullRequestsDistinctCountMergeCommitShaAsc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGE_COMMIT_SHA_ASC',
  PullRequestsDistinctCountMergeCommitShaDesc = 'PULL_REQUESTS_DISTINCT_COUNT_MERGE_COMMIT_SHA_DESC',
  PullRequestsDistinctCountNumberAsc = 'PULL_REQUESTS_DISTINCT_COUNT_NUMBER_ASC',
  PullRequestsDistinctCountNumberDesc = 'PULL_REQUESTS_DISTINCT_COUNT_NUMBER_DESC',
  PullRequestsDistinctCountRepositoryIdAsc = 'PULL_REQUESTS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  PullRequestsDistinctCountRepositoryIdDesc = 'PULL_REQUESTS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  PullRequestsDistinctCountRowIdAsc = 'PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_ASC',
  PullRequestsDistinctCountRowIdDesc = 'PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestsDistinctCountSourceBranchAsc = 'PULL_REQUESTS_DISTINCT_COUNT_SOURCE_BRANCH_ASC',
  PullRequestsDistinctCountSourceBranchDesc = 'PULL_REQUESTS_DISTINCT_COUNT_SOURCE_BRANCH_DESC',
  PullRequestsDistinctCountStateAsc = 'PULL_REQUESTS_DISTINCT_COUNT_STATE_ASC',
  PullRequestsDistinctCountStateDesc = 'PULL_REQUESTS_DISTINCT_COUNT_STATE_DESC',
  PullRequestsDistinctCountTargetBranchAsc = 'PULL_REQUESTS_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  PullRequestsDistinctCountTargetBranchDesc = 'PULL_REQUESTS_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  PullRequestsDistinctCountTitleAsc = 'PULL_REQUESTS_DISTINCT_COUNT_TITLE_ASC',
  PullRequestsDistinctCountTitleDesc = 'PULL_REQUESTS_DISTINCT_COUNT_TITLE_DESC',
  PullRequestsDistinctCountUpdatedAtAsc = 'PULL_REQUESTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  PullRequestsDistinctCountUpdatedAtDesc = 'PULL_REQUESTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  PullRequestsMaxNumberAsc = 'PULL_REQUESTS_MAX_NUMBER_ASC',
  PullRequestsMaxNumberDesc = 'PULL_REQUESTS_MAX_NUMBER_DESC',
  PullRequestsMinNumberAsc = 'PULL_REQUESTS_MIN_NUMBER_ASC',
  PullRequestsMinNumberDesc = 'PULL_REQUESTS_MIN_NUMBER_DESC',
  PullRequestsStddevPopulationNumberAsc = 'PULL_REQUESTS_STDDEV_POPULATION_NUMBER_ASC',
  PullRequestsStddevPopulationNumberDesc = 'PULL_REQUESTS_STDDEV_POPULATION_NUMBER_DESC',
  PullRequestsStddevSampleNumberAsc = 'PULL_REQUESTS_STDDEV_SAMPLE_NUMBER_ASC',
  PullRequestsStddevSampleNumberDesc = 'PULL_REQUESTS_STDDEV_SAMPLE_NUMBER_DESC',
  PullRequestsSumNumberAsc = 'PULL_REQUESTS_SUM_NUMBER_ASC',
  PullRequestsSumNumberDesc = 'PULL_REQUESTS_SUM_NUMBER_DESC',
  PullRequestsVariancePopulationNumberAsc = 'PULL_REQUESTS_VARIANCE_POPULATION_NUMBER_ASC',
  PullRequestsVariancePopulationNumberDesc = 'PULL_REQUESTS_VARIANCE_POPULATION_NUMBER_DESC',
  PullRequestsVarianceSampleNumberAsc = 'PULL_REQUESTS_VARIANCE_SAMPLE_NUMBER_ASC',
  PullRequestsVarianceSampleNumberDesc = 'PULL_REQUESTS_VARIANCE_SAMPLE_NUMBER_DESC',
  RepositoryCollaboratorsCountAsc = 'REPOSITORY_COLLABORATORS_COUNT_ASC',
  RepositoryCollaboratorsCountDesc = 'REPOSITORY_COLLABORATORS_COUNT_DESC',
  RepositoryCollaboratorsDistinctCountCreatedAtAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryCollaboratorsDistinctCountCreatedAtDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryCollaboratorsDistinctCountPermissionAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_PERMISSION_ASC',
  RepositoryCollaboratorsDistinctCountPermissionDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_PERMISSION_DESC',
  RepositoryCollaboratorsDistinctCountRepositoryIdAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  RepositoryCollaboratorsDistinctCountRepositoryIdDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  RepositoryCollaboratorsDistinctCountUpdatedAtAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoryCollaboratorsDistinctCountUpdatedAtDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryCollaboratorsDistinctCountUserIdAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_USER_ID_ASC',
  RepositoryCollaboratorsDistinctCountUserIdDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_USER_ID_DESC',
  RepositoryRelationshipsBySourceRepositoryIdAverageConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_AVERAGE_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdAverageConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_AVERAGE_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdCountAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_COUNT_ASC',
  RepositoryRelationshipsBySourceRepositoryIdCountDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_COUNT_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountBranchAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_BRANCH_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountBranchDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_BRANCH_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountCreatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountCreatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountDetectionSourceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountDetectionSourceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountRelationshipTypeIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountRelationshipTypeIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountRowIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountRowIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountSourceRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountSourceRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountTargetRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountTargetRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountUpdatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountUpdatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountVersionConstraintAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_ASC',
  RepositoryRelationshipsBySourceRepositoryIdDistinctCountVersionConstraintDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_DESC',
  RepositoryRelationshipsBySourceRepositoryIdMaxConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_MAX_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdMaxConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_MAX_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdMinConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_MIN_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdMinConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_MIN_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdStddevPopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_STDDEV_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdStddevPopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_STDDEV_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdStddevSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_STDDEV_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdStddevSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_STDDEV_SAMPLE_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdSumConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_SUM_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdSumConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_SUM_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdVariancePopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_VARIANCE_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdVariancePopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_VARIANCE_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsBySourceRepositoryIdVarianceSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_VARIANCE_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsBySourceRepositoryIdVarianceSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_SOURCE_REPOSITORY_ID_VARIANCE_SAMPLE_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdAverageConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_AVERAGE_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdAverageConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_AVERAGE_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdCountAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_COUNT_ASC',
  RepositoryRelationshipsByTargetRepositoryIdCountDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_COUNT_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountBranchAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_BRANCH_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountBranchDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_BRANCH_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountCreatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountCreatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountDetectionSourceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountDetectionSourceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountRelationshipTypeIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountRelationshipTypeIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountRowIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountRowIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountSourceRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountSourceRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountTargetRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountTargetRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountUpdatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountUpdatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountVersionConstraintAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_ASC',
  RepositoryRelationshipsByTargetRepositoryIdDistinctCountVersionConstraintDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_DESC',
  RepositoryRelationshipsByTargetRepositoryIdMaxConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_MAX_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdMaxConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_MAX_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdMinConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_MIN_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdMinConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_MIN_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdStddevPopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_STDDEV_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdStddevPopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_STDDEV_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdStddevSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_STDDEV_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdStddevSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_STDDEV_SAMPLE_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdSumConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_SUM_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdSumConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_SUM_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdVariancePopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_VARIANCE_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdVariancePopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_VARIANCE_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsByTargetRepositoryIdVarianceSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_VARIANCE_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsByTargetRepositoryIdVarianceSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_TARGET_REPOSITORY_ID_VARIANCE_SAMPLE_CONFIDENCE_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  VisibilityAsc = 'VISIBILITY_ASC',
  VisibilityDesc = 'VISIBILITY_DESC'
}

/** Represents an update to a `Repository`. Fields that are set will be updated. */
export type RepositoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type RepositoryRelationship = Node & {
  __typename?: 'RepositoryRelationship';
  branch?: Maybe<Scalars['String']['output']>;
  confidence: Scalars['Float']['output'];
  createdAt: Scalars['Datetime']['output'];
  detectionSource: DetectionSource;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `RepositoryRelationshipType` that is related to this `RepositoryRelationship`. */
  relationshipType?: Maybe<RepositoryRelationshipType>;
  relationshipTypeId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `RepositoryRelationshipMetadatum`. */
  repositoryRelationshipMetadataByRelationshipId: RepositoryRelationshipMetadatumConnection;
  rowId: Scalars['UUID']['output'];
  /** Reads a single `Repository` that is related to this `RepositoryRelationship`. */
  sourceRepository?: Maybe<Repository>;
  sourceRepositoryId: Scalars['UUID']['output'];
  /** Reads a single `Repository` that is related to this `RepositoryRelationship`. */
  targetRepository?: Maybe<Repository>;
  targetRepositoryId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  versionConstraint?: Maybe<Scalars['String']['output']>;
};


export type RepositoryRelationshipRepositoryRelationshipMetadataByRelationshipIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipMetadatumCondition>;
  filter?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipMetadatumOrderBy>>;
};

export type RepositoryRelationshipAggregates = {
  __typename?: 'RepositoryRelationshipAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<RepositoryRelationshipAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepositoryRelationshipDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<RepositoryRelationshipMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<RepositoryRelationshipMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<RepositoryRelationshipStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<RepositoryRelationshipStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<RepositoryRelationshipSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<RepositoryRelationshipVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<RepositoryRelationshipVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `RepositoryRelationship` object types. */
export type RepositoryRelationshipAggregatesFilter = {
  /** Mean average aggregate over matching `RepositoryRelationship` objects. */
  average?: InputMaybe<RepositoryRelationshipAverageAggregateFilter>;
  /** Distinct count aggregate over matching `RepositoryRelationship` objects. */
  distinctCount?: InputMaybe<RepositoryRelationshipDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `RepositoryRelationship` object to be included within the aggregate. */
  filter?: InputMaybe<RepositoryRelationshipFilter>;
  /** Maximum aggregate over matching `RepositoryRelationship` objects. */
  max?: InputMaybe<RepositoryRelationshipMaxAggregateFilter>;
  /** Minimum aggregate over matching `RepositoryRelationship` objects. */
  min?: InputMaybe<RepositoryRelationshipMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `RepositoryRelationship` objects. */
  stddevPopulation?: InputMaybe<RepositoryRelationshipStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `RepositoryRelationship` objects. */
  stddevSample?: InputMaybe<RepositoryRelationshipStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `RepositoryRelationship` objects. */
  sum?: InputMaybe<RepositoryRelationshipSumAggregateFilter>;
  /** Population variance aggregate over matching `RepositoryRelationship` objects. */
  variancePopulation?: InputMaybe<RepositoryRelationshipVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `RepositoryRelationship` objects. */
  varianceSample?: InputMaybe<RepositoryRelationshipVarianceSampleAggregateFilter>;
};

export type RepositoryRelationshipAverageAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipAverageAggregates = {
  __typename?: 'RepositoryRelationshipAverageAggregates';
  /** Mean average of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

/**
 * A condition to be used against `RepositoryRelationship` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type RepositoryRelationshipCondition = {
  /** Checks for equality with the object’s `branch` field. */
  branch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `confidence` field. */
  confidence?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<DetectionSource>;
  /** Checks for equality with the object’s `relationshipTypeId` field. */
  relationshipTypeId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `sourceRepositoryId` field. */
  sourceRepositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `targetRepositoryId` field. */
  targetRepositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `versionConstraint` field. */
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `RepositoryRelationship` values. */
export type RepositoryRelationshipConnection = {
  __typename?: 'RepositoryRelationshipConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepositoryRelationshipAggregates>;
  /** A list of edges which contains the `RepositoryRelationship` and cursor to aid in pagination. */
  edges: Array<RepositoryRelationshipEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepositoryRelationshipAggregates>>;
  /** A list of `RepositoryRelationship` objects. */
  nodes: Array<RepositoryRelationship>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepositoryRelationship` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `RepositoryRelationship` values. */
export type RepositoryRelationshipConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepositoryRelationshipGroupBy>;
  having?: InputMaybe<RepositoryRelationshipHavingInput>;
};

export type RepositoryRelationshipDistinctCountAggregateFilter = {
  branch?: InputMaybe<BigIntFilter>;
  confidence?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  detectionSource?: InputMaybe<BigIntFilter>;
  relationshipTypeId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  sourceRepositoryId?: InputMaybe<BigIntFilter>;
  targetRepositoryId?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  versionConstraint?: InputMaybe<BigIntFilter>;
};

export type RepositoryRelationshipDistinctCountAggregates = {
  __typename?: 'RepositoryRelationshipDistinctCountAggregates';
  /** Distinct count of branch across the matching connection */
  branch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of confidence across the matching connection */
  confidence?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of detectionSource across the matching connection */
  detectionSource?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of relationshipTypeId across the matching connection */
  relationshipTypeId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of sourceRepositoryId across the matching connection */
  sourceRepositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of targetRepositoryId across the matching connection */
  targetRepositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of versionConstraint across the matching connection */
  versionConstraint?: Maybe<Scalars['BigInt']['output']>;
};

/** A `RepositoryRelationship` edge in the connection. */
export type RepositoryRelationshipEdge = {
  __typename?: 'RepositoryRelationshipEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RepositoryRelationship` at the end of the edge. */
  node: RepositoryRelationship;
};

/** A filter to be used against `RepositoryRelationship` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryRelationshipFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepositoryRelationshipFilter>>;
  /** Filter by the object’s `branch` field. */
  branch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `confidence` field. */
  confidence?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<DetectionSourceFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepositoryRelationshipFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepositoryRelationshipFilter>>;
  /** Filter by the object’s `relationshipType` relation. */
  relationshipType?: InputMaybe<RepositoryRelationshipTypeFilter>;
  /** Filter by the object’s `relationshipTypeId` field. */
  relationshipTypeId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repositoryRelationshipMetadataByRelationshipId` relation. */
  repositoryRelationshipMetadataByRelationshipId?: InputMaybe<RepositoryRelationshipToManyRepositoryRelationshipMetadatumFilter>;
  /** Some related `repositoryRelationshipMetadataByRelationshipId` exist. */
  repositoryRelationshipMetadataByRelationshipIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `sourceRepository` relation. */
  sourceRepository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `sourceRepositoryId` field. */
  sourceRepositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `targetRepository` relation. */
  targetRepository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `targetRepositoryId` field. */
  targetRepositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `versionConstraint` field. */
  versionConstraint?: InputMaybe<StringFilter>;
};

/** Grouping methods for `RepositoryRelationship` for usage during aggregation. */
export enum RepositoryRelationshipGroupBy {
  Branch = 'BRANCH',
  Confidence = 'CONFIDENCE',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DetectionSource = 'DETECTION_SOURCE',
  RelationshipTypeId = 'RELATIONSHIP_TYPE_ID',
  SourceRepositoryId = 'SOURCE_REPOSITORY_ID',
  TargetRepositoryId = 'TARGET_REPOSITORY_ID',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  VersionConstraint = 'VERSION_CONSTRAINT'
}

export type RepositoryRelationshipHavingAverageInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingDistinctCountInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `RepositoryRelationship` aggregates. */
export type RepositoryRelationshipHavingInput = {
  AND?: InputMaybe<Array<RepositoryRelationshipHavingInput>>;
  OR?: InputMaybe<Array<RepositoryRelationshipHavingInput>>;
  average?: InputMaybe<RepositoryRelationshipHavingAverageInput>;
  distinctCount?: InputMaybe<RepositoryRelationshipHavingDistinctCountInput>;
  max?: InputMaybe<RepositoryRelationshipHavingMaxInput>;
  min?: InputMaybe<RepositoryRelationshipHavingMinInput>;
  stddevPopulation?: InputMaybe<RepositoryRelationshipHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RepositoryRelationshipHavingStddevSampleInput>;
  sum?: InputMaybe<RepositoryRelationshipHavingSumInput>;
  variancePopulation?: InputMaybe<RepositoryRelationshipHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RepositoryRelationshipHavingVarianceSampleInput>;
};

export type RepositoryRelationshipHavingMaxInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingMinInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingStddevPopulationInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingStddevSampleInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingSumInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingVariancePopulationInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipHavingVarianceSampleInput = {
  confidence?: InputMaybe<HavingFloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `RepositoryRelationship` */
export type RepositoryRelationshipInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  confidence?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<DetectionSource>;
  relationshipTypeId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  sourceRepositoryId: Scalars['UUID']['input'];
  targetRepositoryId: Scalars['UUID']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

export type RepositoryRelationshipMaxAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipMaxAggregates = {
  __typename?: 'RepositoryRelationshipMaxAggregates';
  /** Maximum of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

export type RepositoryRelationshipMetadatum = Node & {
  __typename?: 'RepositoryRelationshipMetadatum';
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** Reads a single `RepositoryRelationship` that is related to this `RepositoryRelationshipMetadatum`. */
  relationship?: Maybe<RepositoryRelationship>;
  relationshipId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  value: Scalars['String']['output'];
};

export type RepositoryRelationshipMetadatumAggregates = {
  __typename?: 'RepositoryRelationshipMetadatumAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepositoryRelationshipMetadatumDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `RepositoryRelationshipMetadatum` object types. */
export type RepositoryRelationshipMetadatumAggregatesFilter = {
  /** Distinct count aggregate over matching `RepositoryRelationshipMetadatum` objects. */
  distinctCount?: InputMaybe<RepositoryRelationshipMetadatumDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `RepositoryRelationshipMetadatum` object to be included within the aggregate. */
  filter?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
};

/**
 * A condition to be used against `RepositoryRelationshipMetadatum` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type RepositoryRelationshipMetadatumCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `relationshipId` field. */
  relationshipId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `RepositoryRelationshipMetadatum` values. */
export type RepositoryRelationshipMetadatumConnection = {
  __typename?: 'RepositoryRelationshipMetadatumConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepositoryRelationshipMetadatumAggregates>;
  /** A list of edges which contains the `RepositoryRelationshipMetadatum` and cursor to aid in pagination. */
  edges: Array<RepositoryRelationshipMetadatumEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepositoryRelationshipMetadatumAggregates>>;
  /** A list of `RepositoryRelationshipMetadatum` objects. */
  nodes: Array<RepositoryRelationshipMetadatum>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepositoryRelationshipMetadatum` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `RepositoryRelationshipMetadatum` values. */
export type RepositoryRelationshipMetadatumConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepositoryRelationshipMetadatumGroupBy>;
  having?: InputMaybe<RepositoryRelationshipMetadatumHavingInput>;
};

export type RepositoryRelationshipMetadatumDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  key?: InputMaybe<BigIntFilter>;
  relationshipId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type RepositoryRelationshipMetadatumDistinctCountAggregates = {
  __typename?: 'RepositoryRelationshipMetadatumDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of key across the matching connection */
  key?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of relationshipId across the matching connection */
  relationshipId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A `RepositoryRelationshipMetadatum` edge in the connection. */
export type RepositoryRelationshipMetadatumEdge = {
  __typename?: 'RepositoryRelationshipMetadatumEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RepositoryRelationshipMetadatum` at the end of the edge. */
  node: RepositoryRelationshipMetadatum;
};

/** A filter to be used against `RepositoryRelationshipMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryRelationshipMetadatumFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepositoryRelationshipMetadatumFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `key` field. */
  key?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepositoryRelationshipMetadatumFilter>>;
  /** Filter by the object’s `relationship` relation. */
  relationship?: InputMaybe<RepositoryRelationshipFilter>;
  /** Filter by the object’s `relationshipId` field. */
  relationshipId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<StringFilter>;
};

/** Grouping methods for `RepositoryRelationshipMetadatum` for usage during aggregation. */
export enum RepositoryRelationshipMetadatumGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Key = 'KEY',
  RelationshipId = 'RELATIONSHIP_ID',
  Value = 'VALUE'
}

export type RepositoryRelationshipMetadatumHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `RepositoryRelationshipMetadatum` aggregates. */
export type RepositoryRelationshipMetadatumHavingInput = {
  AND?: InputMaybe<Array<RepositoryRelationshipMetadatumHavingInput>>;
  OR?: InputMaybe<Array<RepositoryRelationshipMetadatumHavingInput>>;
  average?: InputMaybe<RepositoryRelationshipMetadatumHavingAverageInput>;
  distinctCount?: InputMaybe<RepositoryRelationshipMetadatumHavingDistinctCountInput>;
  max?: InputMaybe<RepositoryRelationshipMetadatumHavingMaxInput>;
  min?: InputMaybe<RepositoryRelationshipMetadatumHavingMinInput>;
  stddevPopulation?: InputMaybe<RepositoryRelationshipMetadatumHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RepositoryRelationshipMetadatumHavingStddevSampleInput>;
  sum?: InputMaybe<RepositoryRelationshipMetadatumHavingSumInput>;
  variancePopulation?: InputMaybe<RepositoryRelationshipMetadatumHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RepositoryRelationshipMetadatumHavingVarianceSampleInput>;
};

export type RepositoryRelationshipMetadatumHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipMetadatumHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `RepositoryRelationshipMetadatum` */
export type RepositoryRelationshipMetadatumInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  key: Scalars['String']['input'];
  relationshipId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  value: Scalars['String']['input'];
};

/** Methods to use when ordering `RepositoryRelationshipMetadatum`. */
export enum RepositoryRelationshipMetadatumOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RelationshipIdAsc = 'RELATIONSHIP_ID_ASC',
  RelationshipIdDesc = 'RELATIONSHIP_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** Represents an update to a `RepositoryRelationshipMetadatum`. Fields that are set will be updated. */
export type RepositoryRelationshipMetadatumPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  relationshipId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type RepositoryRelationshipMinAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipMinAggregates = {
  __typename?: 'RepositoryRelationshipMinAggregates';
  /** Minimum of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** Methods to use when ordering `RepositoryRelationship`. */
export enum RepositoryRelationshipOrderBy {
  BranchAsc = 'BRANCH_ASC',
  BranchDesc = 'BRANCH_DESC',
  ConfidenceAsc = 'CONFIDENCE_ASC',
  ConfidenceDesc = 'CONFIDENCE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RelationshipTypeIdAsc = 'RELATIONSHIP_TYPE_ID_ASC',
  RelationshipTypeIdDesc = 'RELATIONSHIP_TYPE_ID_DESC',
  RepositoryRelationshipMetadataByRelationshipIdCountAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_COUNT_ASC',
  RepositoryRelationshipMetadataByRelationshipIdCountDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_COUNT_DESC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountCreatedAtAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountCreatedAtDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountKeyAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_KEY_ASC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountKeyDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_KEY_DESC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountRelationshipIdAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_RELATIONSHIP_ID_ASC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountRelationshipIdDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_RELATIONSHIP_ID_DESC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountRowIdAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountRowIdDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountValueAsc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_VALUE_ASC',
  RepositoryRelationshipMetadataByRelationshipIdDistinctCountValueDesc = 'REPOSITORY_RELATIONSHIP_METADATA_BY_RELATIONSHIP_ID_DISTINCT_COUNT_VALUE_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SourceRepositoryIdAsc = 'SOURCE_REPOSITORY_ID_ASC',
  SourceRepositoryIdDesc = 'SOURCE_REPOSITORY_ID_DESC',
  TargetRepositoryIdAsc = 'TARGET_REPOSITORY_ID_ASC',
  TargetRepositoryIdDesc = 'TARGET_REPOSITORY_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  VersionConstraintAsc = 'VERSION_CONSTRAINT_ASC',
  VersionConstraintDesc = 'VERSION_CONSTRAINT_DESC'
}

/** Represents an update to a `RepositoryRelationship`. Fields that are set will be updated. */
export type RepositoryRelationshipPatch = {
  branch?: InputMaybe<Scalars['String']['input']>;
  confidence?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<DetectionSource>;
  relationshipTypeId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  sourceRepositoryId?: InputMaybe<Scalars['UUID']['input']>;
  targetRepositoryId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

export type RepositoryRelationshipStddevPopulationAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipStddevPopulationAggregates = {
  __typename?: 'RepositoryRelationshipStddevPopulationAggregates';
  /** Population standard deviation of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

export type RepositoryRelationshipStddevSampleAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipStddevSampleAggregates = {
  __typename?: 'RepositoryRelationshipStddevSampleAggregates';
  /** Sample standard deviation of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

export type RepositoryRelationshipSumAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipSumAggregates = {
  __typename?: 'RepositoryRelationshipSumAggregates';
  /** Sum of confidence across the matching connection */
  confidence: Scalars['Float']['output'];
};

/** A filter to be used against many `RepositoryRelationshipMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryRelationshipToManyRepositoryRelationshipMetadatumFilter = {
  /** Aggregates across related `RepositoryRelationshipMetadatum` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryRelationshipMetadatumAggregatesFilter>;
  /** Every related `RepositoryRelationshipMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
  /** No related `RepositoryRelationshipMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
  /** Some related `RepositoryRelationshipMetadatum` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryRelationshipMetadatumFilter>;
};

export type RepositoryRelationshipType = Node & {
  __typename?: 'RepositoryRelationshipType';
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  isDirected: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `Organization` that is related to this `RepositoryRelationshipType`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `RepositoryRelationship`. */
  repositoryRelationshipsByRelationshipTypeId: RepositoryRelationshipConnection;
  rowId: Scalars['UUID']['output'];
};


export type RepositoryRelationshipTypeRepositoryRelationshipsByRelationshipTypeIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryRelationshipCondition>;
  filter?: InputMaybe<RepositoryRelationshipFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryRelationshipOrderBy>>;
};

export type RepositoryRelationshipTypeAggregates = {
  __typename?: 'RepositoryRelationshipTypeAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepositoryRelationshipTypeDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `RepositoryRelationshipType` object types. */
export type RepositoryRelationshipTypeAggregatesFilter = {
  /** Distinct count aggregate over matching `RepositoryRelationshipType` objects. */
  distinctCount?: InputMaybe<RepositoryRelationshipTypeDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `RepositoryRelationshipType` object to be included within the aggregate. */
  filter?: InputMaybe<RepositoryRelationshipTypeFilter>;
};

/**
 * A condition to be used against `RepositoryRelationshipType` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type RepositoryRelationshipTypeCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `isDirected` field. */
  isDirected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `RepositoryRelationshipType` values. */
export type RepositoryRelationshipTypeConnection = {
  __typename?: 'RepositoryRelationshipTypeConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepositoryRelationshipTypeAggregates>;
  /** A list of edges which contains the `RepositoryRelationshipType` and cursor to aid in pagination. */
  edges: Array<RepositoryRelationshipTypeEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepositoryRelationshipTypeAggregates>>;
  /** A list of `RepositoryRelationshipType` objects. */
  nodes: Array<RepositoryRelationshipType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepositoryRelationshipType` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `RepositoryRelationshipType` values. */
export type RepositoryRelationshipTypeConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepositoryRelationshipTypeGroupBy>;
  having?: InputMaybe<RepositoryRelationshipTypeHavingInput>;
};

export type RepositoryRelationshipTypeDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  isDirected?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
};

export type RepositoryRelationshipTypeDistinctCountAggregates = {
  __typename?: 'RepositoryRelationshipTypeDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of isDirected across the matching connection */
  isDirected?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of organizationId across the matching connection */
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `RepositoryRelationshipType` edge in the connection. */
export type RepositoryRelationshipTypeEdge = {
  __typename?: 'RepositoryRelationshipTypeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RepositoryRelationshipType` at the end of the edge. */
  node: RepositoryRelationshipType;
};

/** A filter to be used against `RepositoryRelationshipType` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryRelationshipTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepositoryRelationshipTypeFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isDirected` field. */
  isDirected?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepositoryRelationshipTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepositoryRelationshipTypeFilter>>;
  /** Filter by the object’s `organization` relation. */
  organization?: InputMaybe<OrganizationFilter>;
  /** A related `organization` exists. */
  organizationExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `organizationId` field. */
  organizationId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repositoryRelationshipsByRelationshipTypeId` relation. */
  repositoryRelationshipsByRelationshipTypeId?: InputMaybe<RepositoryRelationshipTypeToManyRepositoryRelationshipFilter>;
  /** Some related `repositoryRelationshipsByRelationshipTypeId` exist. */
  repositoryRelationshipsByRelationshipTypeIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `RepositoryRelationshipType` for usage during aggregation. */
export enum RepositoryRelationshipTypeGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  IsDirected = 'IS_DIRECTED',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID'
}

export type RepositoryRelationshipTypeHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `RepositoryRelationshipType` aggregates. */
export type RepositoryRelationshipTypeHavingInput = {
  AND?: InputMaybe<Array<RepositoryRelationshipTypeHavingInput>>;
  OR?: InputMaybe<Array<RepositoryRelationshipTypeHavingInput>>;
  average?: InputMaybe<RepositoryRelationshipTypeHavingAverageInput>;
  distinctCount?: InputMaybe<RepositoryRelationshipTypeHavingDistinctCountInput>;
  max?: InputMaybe<RepositoryRelationshipTypeHavingMaxInput>;
  min?: InputMaybe<RepositoryRelationshipTypeHavingMinInput>;
  stddevPopulation?: InputMaybe<RepositoryRelationshipTypeHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<RepositoryRelationshipTypeHavingStddevSampleInput>;
  sum?: InputMaybe<RepositoryRelationshipTypeHavingSumInput>;
  variancePopulation?: InputMaybe<RepositoryRelationshipTypeHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<RepositoryRelationshipTypeHavingVarianceSampleInput>;
};

export type RepositoryRelationshipTypeHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type RepositoryRelationshipTypeHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `RepositoryRelationshipType` */
export type RepositoryRelationshipTypeInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isDirected?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Methods to use when ordering `RepositoryRelationshipType`. */
export enum RepositoryRelationshipTypeOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IsDirectedAsc = 'IS_DIRECTED_ASC',
  IsDirectedDesc = 'IS_DIRECTED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryRelationshipsByRelationshipTypeIdAverageConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_AVERAGE_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdAverageConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_AVERAGE_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdCountAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_COUNT_ASC',
  RepositoryRelationshipsByRelationshipTypeIdCountDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_COUNT_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountBranchAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_BRANCH_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountBranchDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_BRANCH_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountCreatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountCreatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountDetectionSourceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountDetectionSourceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountRelationshipTypeIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountRelationshipTypeIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_RELATIONSHIP_TYPE_ID_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountRowIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountRowIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountSourceRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountSourceRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_SOURCE_REPOSITORY_ID_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountTargetRepositoryIdAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountTargetRepositoryIdDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_TARGET_REPOSITORY_ID_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountUpdatedAtAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountUpdatedAtDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountVersionConstraintAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_ASC',
  RepositoryRelationshipsByRelationshipTypeIdDistinctCountVersionConstraintDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_DISTINCT_COUNT_VERSION_CONSTRAINT_DESC',
  RepositoryRelationshipsByRelationshipTypeIdMaxConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_MAX_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdMaxConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_MAX_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdMinConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_MIN_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdMinConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_MIN_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdStddevPopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_STDDEV_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdStddevPopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_STDDEV_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdStddevSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_STDDEV_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdStddevSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_STDDEV_SAMPLE_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdSumConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_SUM_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdSumConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_SUM_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdVariancePopulationConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_VARIANCE_POPULATION_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdVariancePopulationConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_VARIANCE_POPULATION_CONFIDENCE_DESC',
  RepositoryRelationshipsByRelationshipTypeIdVarianceSampleConfidenceAsc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_VARIANCE_SAMPLE_CONFIDENCE_ASC',
  RepositoryRelationshipsByRelationshipTypeIdVarianceSampleConfidenceDesc = 'REPOSITORY_RELATIONSHIPS_BY_RELATIONSHIP_TYPE_ID_VARIANCE_SAMPLE_CONFIDENCE_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** Represents an update to a `RepositoryRelationshipType`. Fields that are set will be updated. */
export type RepositoryRelationshipTypePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isDirected?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against many `RepositoryRelationship` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryRelationshipTypeToManyRepositoryRelationshipFilter = {
  /** Aggregates across related `RepositoryRelationship` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryRelationshipAggregatesFilter>;
  /** Every related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryRelationshipFilter>;
  /** No related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryRelationshipFilter>;
  /** Some related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryRelationshipFilter>;
};

export type RepositoryRelationshipVariancePopulationAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipVariancePopulationAggregates = {
  __typename?: 'RepositoryRelationshipVariancePopulationAggregates';
  /** Population variance of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

export type RepositoryRelationshipVarianceSampleAggregateFilter = {
  confidence?: InputMaybe<FloatFilter>;
};

export type RepositoryRelationshipVarianceSampleAggregates = {
  __typename?: 'RepositoryRelationshipVarianceSampleAggregates';
  /** Sample variance of confidence across the matching connection */
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** A filter to be used against many `ExternalDependency` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyExternalDependencyFilter = {
  /** Aggregates across related `ExternalDependency` match the filter criteria. */
  aggregates?: InputMaybe<ExternalDependencyAggregatesFilter>;
  /** Every related `ExternalDependency` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ExternalDependencyFilter>;
  /** No related `ExternalDependency` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ExternalDependencyFilter>;
  /** Some related `ExternalDependency` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ExternalDependencyFilter>;
};

/** A filter to be used against many `PullRequest` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyPullRequestFilter = {
  /** Aggregates across related `PullRequest` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestAggregatesFilter>;
  /** Every related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestFilter>;
  /** No related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestFilter>;
  /** Some related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestFilter>;
};

/** A filter to be used against many `RepositoryCollaborator` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyRepositoryCollaboratorFilter = {
  /** Aggregates across related `RepositoryCollaborator` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryCollaboratorAggregatesFilter>;
  /** Every related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryCollaboratorFilter>;
  /** No related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryCollaboratorFilter>;
  /** Some related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryCollaboratorFilter>;
};

/** A filter to be used against many `RepositoryRelationship` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyRepositoryRelationshipFilter = {
  /** Aggregates across related `RepositoryRelationship` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryRelationshipAggregatesFilter>;
  /** Every related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryRelationshipFilter>;
  /** No related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryRelationshipFilter>;
  /** Some related `RepositoryRelationship` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryRelationshipFilter>;
};

export enum ReviewState {
  Approved = 'approved',
  ChangesRequested = 'changes_requested',
  Commented = 'commented',
  Pending = 'pending'
}

/** A filter to be used against ReviewState fields. All fields are combined with a logical ‘and.’ */
export type ReviewStateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<ReviewState>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<ReviewState>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<ReviewState>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<ReviewState>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<ReviewState>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<ReviewState>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<ReviewState>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<ReviewState>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<ReviewState>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<ReviewState>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** A Git tree (directory). */
export type Tree = GitObject & {
  __typename?: 'Tree';
  /** The entries in this tree. */
  entries: Array<TreeEntry>;
  oid: Scalars['String']['output'];
  repository: Repository;
};

/** An entry in a Git tree. */
export type TreeEntry = {
  __typename?: 'TreeEntry';
  /** The file mode. */
  mode: Scalars['String']['output'];
  /** The entry name. */
  name: Scalars['String']['output'];
  /** The Git object this entry points to. */
  object?: Maybe<GitObject>;
  /** The Git object ID. */
  oid: Scalars['String']['output'];
  /** The full path from the repository root. */
  path: Scalars['String']['output'];
  /** The entry type (blob, tree, or commit for submodules). */
  type: Scalars['String']['output'];
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** All input for the `updateAuditLogById` mutation. */
export type UpdateAuditLogByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `AuditLog` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `AuditLog` being updated. */
  patch: AuditLogPatch;
};

/** All input for the `updateAuditLog` mutation. */
export type UpdateAuditLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `AuditLog` being updated. */
  patch: AuditLogPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `AuditLog` mutation. */
export type UpdateAuditLogPayload = {
  __typename?: 'UpdateAuditLogPayload';
  /** The `AuditLog` that was updated by this mutation. */
  auditLog?: Maybe<AuditLog>;
  /** An edge for our `AuditLog`. May be used by Relay 1. */
  auditLogEdge?: Maybe<AuditLogEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `AuditLog` mutation. */
export type UpdateAuditLogPayloadAuditLogEdgeArgs = {
  orderBy?: Array<AuditLogOrderBy>;
};

/** All input for the `updateExternalDependencyById` mutation. */
export type UpdateExternalDependencyByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `ExternalDependency` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `ExternalDependency` being updated. */
  patch: ExternalDependencyPatch;
};

/** All input for the `updateExternalDependency` mutation. */
export type UpdateExternalDependencyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `ExternalDependency` being updated. */
  patch: ExternalDependencyPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `ExternalDependency` mutation. */
export type UpdateExternalDependencyPayload = {
  __typename?: 'UpdateExternalDependencyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `ExternalDependency` that was updated by this mutation. */
  externalDependency?: Maybe<ExternalDependency>;
  /** An edge for our `ExternalDependency`. May be used by Relay 1. */
  externalDependencyEdge?: Maybe<ExternalDependencyEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ExternalDependency` mutation. */
export type UpdateExternalDependencyPayloadExternalDependencyEdgeArgs = {
  orderBy?: Array<ExternalDependencyOrderBy>;
};

/** All input for the `updateOrganizationById` mutation. */
export type UpdateOrganizationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Organization` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Organization` being updated. */
  patch: OrganizationPatch;
};

/** All input for the `updateOrganization` mutation. */
export type UpdateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Organization` being updated. */
  patch: OrganizationPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Organization` that was updated by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: Array<OrganizationOrderBy>;
};

/** All input for the `updatePullRequestById` mutation. */
export type UpdatePullRequestByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequest` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `PullRequest` being updated. */
  patch: PullRequestPatch;
};

/** All input for the `updatePullRequestCommentById` mutation. */
export type UpdatePullRequestCommentByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequestComment` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `PullRequestComment` being updated. */
  patch: PullRequestCommentPatch;
};

/** All input for the `updatePullRequestComment` mutation. */
export type UpdatePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `PullRequestComment` being updated. */
  patch: PullRequestCommentPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `PullRequestComment` mutation. */
export type UpdatePullRequestCommentPayload = {
  __typename?: 'UpdatePullRequestCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequestComment` that was updated by this mutation. */
  pullRequestComment?: Maybe<PullRequestComment>;
  /** An edge for our `PullRequestComment`. May be used by Relay 1. */
  pullRequestCommentEdge?: Maybe<PullRequestCommentEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PullRequestComment` mutation. */
export type UpdatePullRequestCommentPayloadPullRequestCommentEdgeArgs = {
  orderBy?: Array<PullRequestCommentOrderBy>;
};

/** All input for the `updatePullRequest` mutation. */
export type UpdatePullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `PullRequest` being updated. */
  patch: PullRequestPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `PullRequest` mutation. */
export type UpdatePullRequestPayload = {
  __typename?: 'UpdatePullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequest` that was updated by this mutation. */
  pullRequest?: Maybe<PullRequest>;
  /** An edge for our `PullRequest`. May be used by Relay 1. */
  pullRequestEdge?: Maybe<PullRequestEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PullRequest` mutation. */
export type UpdatePullRequestPayloadPullRequestEdgeArgs = {
  orderBy?: Array<PullRequestOrderBy>;
};

/** All input for the `updatePullRequestReviewById` mutation. */
export type UpdatePullRequestReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PullRequestReview` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `PullRequestReview` being updated. */
  patch: PullRequestReviewPatch;
};

/** All input for the `updatePullRequestReview` mutation. */
export type UpdatePullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `PullRequestReview` being updated. */
  patch: PullRequestReviewPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `PullRequestReview` mutation. */
export type UpdatePullRequestReviewPayload = {
  __typename?: 'UpdatePullRequestReviewPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PullRequestReview` that was updated by this mutation. */
  pullRequestReview?: Maybe<PullRequestReview>;
  /** An edge for our `PullRequestReview`. May be used by Relay 1. */
  pullRequestReviewEdge?: Maybe<PullRequestReviewEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PullRequestReview` mutation. */
export type UpdatePullRequestReviewPayloadPullRequestReviewEdgeArgs = {
  orderBy?: Array<PullRequestReviewOrderBy>;
};

/** All input for the `updateRepositoryById` mutation. */
export type UpdateRepositoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Repository` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Repository` being updated. */
  patch: RepositoryPatch;
};

/** All input for the `updateRepositoryCollaboratorById` mutation. */
export type UpdateRepositoryCollaboratorByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryCollaborator` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RepositoryCollaborator` being updated. */
  patch: RepositoryCollaboratorPatch;
};

/** All input for the `updateRepositoryCollaborator` mutation. */
export type UpdateRepositoryCollaboratorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `RepositoryCollaborator` being updated. */
  patch: RepositoryCollaboratorPatch;
  repositoryId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};

/** The output of our update `RepositoryCollaborator` mutation. */
export type UpdateRepositoryCollaboratorPayload = {
  __typename?: 'UpdateRepositoryCollaboratorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryCollaborator` that was updated by this mutation. */
  repositoryCollaborator?: Maybe<RepositoryCollaborator>;
  /** An edge for our `RepositoryCollaborator`. May be used by Relay 1. */
  repositoryCollaboratorEdge?: Maybe<RepositoryCollaboratorEdge>;
};


/** The output of our update `RepositoryCollaborator` mutation. */
export type UpdateRepositoryCollaboratorPayloadRepositoryCollaboratorEdgeArgs = {
  orderBy?: Array<RepositoryCollaboratorOrderBy>;
};

/** All input for the `updateRepository` mutation. */
export type UpdateRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Repository` being updated. */
  patch: RepositoryPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Repository` mutation. */
export type UpdateRepositoryPayload = {
  __typename?: 'UpdateRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repository` that was updated by this mutation. */
  repository?: Maybe<Repository>;
  /** An edge for our `Repository`. May be used by Relay 1. */
  repositoryEdge?: Maybe<RepositoryEdge>;
};


/** The output of our update `Repository` mutation. */
export type UpdateRepositoryPayloadRepositoryEdgeArgs = {
  orderBy?: Array<RepositoryOrderBy>;
};

/** All input for the `updateRepositoryRelationshipById` mutation. */
export type UpdateRepositoryRelationshipByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationship` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RepositoryRelationship` being updated. */
  patch: RepositoryRelationshipPatch;
};

/** All input for the `updateRepositoryRelationship` mutation. */
export type UpdateRepositoryRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `RepositoryRelationship` being updated. */
  patch: RepositoryRelationshipPatch;
  rowId: Scalars['UUID']['input'];
};

/** All input for the `updateRepositoryRelationshipMetadatumById` mutation. */
export type UpdateRepositoryRelationshipMetadatumByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationshipMetadatum` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RepositoryRelationshipMetadatum` being updated. */
  patch: RepositoryRelationshipMetadatumPatch;
};

/** All input for the `updateRepositoryRelationshipMetadatum` mutation. */
export type UpdateRepositoryRelationshipMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `RepositoryRelationshipMetadatum` being updated. */
  patch: RepositoryRelationshipMetadatumPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `RepositoryRelationshipMetadatum` mutation. */
export type UpdateRepositoryRelationshipMetadatumPayload = {
  __typename?: 'UpdateRepositoryRelationshipMetadatumPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipMetadatum` that was updated by this mutation. */
  repositoryRelationshipMetadatum?: Maybe<RepositoryRelationshipMetadatum>;
  /** An edge for our `RepositoryRelationshipMetadatum`. May be used by Relay 1. */
  repositoryRelationshipMetadatumEdge?: Maybe<RepositoryRelationshipMetadatumEdge>;
};


/** The output of our update `RepositoryRelationshipMetadatum` mutation. */
export type UpdateRepositoryRelationshipMetadatumPayloadRepositoryRelationshipMetadatumEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipMetadatumOrderBy>;
};

/** The output of our update `RepositoryRelationship` mutation. */
export type UpdateRepositoryRelationshipPayload = {
  __typename?: 'UpdateRepositoryRelationshipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationship` that was updated by this mutation. */
  repositoryRelationship?: Maybe<RepositoryRelationship>;
  /** An edge for our `RepositoryRelationship`. May be used by Relay 1. */
  repositoryRelationshipEdge?: Maybe<RepositoryRelationshipEdge>;
};


/** The output of our update `RepositoryRelationship` mutation. */
export type UpdateRepositoryRelationshipPayloadRepositoryRelationshipEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipOrderBy>;
};

/** All input for the `updateRepositoryRelationshipTypeById` mutation. */
export type UpdateRepositoryRelationshipTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RepositoryRelationshipType` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RepositoryRelationshipType` being updated. */
  patch: RepositoryRelationshipTypePatch;
};

/** All input for the `updateRepositoryRelationshipType` mutation. */
export type UpdateRepositoryRelationshipTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `RepositoryRelationshipType` being updated. */
  patch: RepositoryRelationshipTypePatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `RepositoryRelationshipType` mutation. */
export type UpdateRepositoryRelationshipTypePayload = {
  __typename?: 'UpdateRepositoryRelationshipTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepositoryRelationshipType` that was updated by this mutation. */
  repositoryRelationshipType?: Maybe<RepositoryRelationshipType>;
  /** An edge for our `RepositoryRelationshipType`. May be used by Relay 1. */
  repositoryRelationshipTypeEdge?: Maybe<RepositoryRelationshipTypeEdge>;
};


/** The output of our update `RepositoryRelationshipType` mutation. */
export type UpdateRepositoryRelationshipTypePayloadRepositoryRelationshipTypeEdgeArgs = {
  orderBy?: Array<RepositoryRelationshipTypeOrderBy>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

export type User = Node & {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `PullRequestComment`. */
  authoredPullRequestComments: PullRequestCommentConnection;
  /** Reads and enables pagination through a set of `PullRequest`. */
  authoredPullRequests: PullRequestConnection;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  identityProviderId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `PullRequest`. */
  pullRequestsByMergedById: PullRequestConnection;
  /** Reads and enables pagination through a set of `Repository`. */
  repositoriesByOwnerId: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryCollaborator`. */
  repositoryCollaborators: RepositoryCollaboratorConnection;
  /** Reads and enables pagination through a set of `PullRequestReview`. */
  reviewedPullRequestReviews: PullRequestReviewConnection;
  rowId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  username: Scalars['String']['output'];
};


export type UserAuthoredPullRequestCommentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCommentCondition>;
  filter?: InputMaybe<PullRequestCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestCommentOrderBy>>;
};


export type UserAuthoredPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCondition>;
  filter?: InputMaybe<PullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestOrderBy>>;
};


export type UserPullRequestsByMergedByIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCondition>;
  filter?: InputMaybe<PullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestOrderBy>>;
};


export type UserRepositoriesByOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCondition>;
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryOrderBy>>;
};


export type UserRepositoryCollaboratorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RepositoryCollaboratorCondition>;
  filter?: InputMaybe<RepositoryCollaboratorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RepositoryCollaboratorOrderBy>>;
};


export type UserReviewedPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestReviewCondition>;
  filter?: InputMaybe<PullRequestReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestReviewOrderBy>>;
};

export type UserAggregates = {
  __typename?: 'UserAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<UserDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `bio` field. */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `identityProviderId` field. */
  identityProviderId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `User` values. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<UserAggregates>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UserEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<UserAggregates>>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `User` values. */
export type UserConnectionGroupedAggregatesArgs = {
  groupBy: Array<UserGroupBy>;
  having?: InputMaybe<UserHavingInput>;
};

export type UserDistinctCountAggregates = {
  __typename?: 'UserDistinctCountAggregates';
  /** Distinct count of avatarUrl across the matching connection */
  avatarUrl?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of bio across the matching connection */
  bio?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of identityProviderId across the matching connection */
  identityProviderId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of username across the matching connection */
  username?: Maybe<Scalars['BigInt']['output']>;
};

/** A `User` edge in the connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `authoredPullRequestComments` relation. */
  authoredPullRequestComments?: InputMaybe<UserToManyPullRequestCommentFilter>;
  /** Some related `authoredPullRequestComments` exist. */
  authoredPullRequestCommentsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `authoredPullRequests` relation. */
  authoredPullRequests?: InputMaybe<UserToManyPullRequestFilter>;
  /** Some related `authoredPullRequests` exist. */
  authoredPullRequestsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `bio` field. */
  bio?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `identityProviderId` field. */
  identityProviderId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `pullRequestsByMergedById` relation. */
  pullRequestsByMergedById?: InputMaybe<UserToManyPullRequestFilter>;
  /** Some related `pullRequestsByMergedById` exist. */
  pullRequestsByMergedByIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoriesByOwnerId` relation. */
  repositoriesByOwnerId?: InputMaybe<UserToManyRepositoryFilter>;
  /** Some related `repositoriesByOwnerId` exist. */
  repositoriesByOwnerIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryCollaborators` relation. */
  repositoryCollaborators?: InputMaybe<UserToManyRepositoryCollaboratorFilter>;
  /** Some related `repositoryCollaborators` exist. */
  repositoryCollaboratorsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `reviewedPullRequestReviews` relation. */
  reviewedPullRequestReviews?: InputMaybe<UserToManyPullRequestReviewFilter>;
  /** Some related `reviewedPullRequestReviews` exist. */
  reviewedPullRequestReviewsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

/** Grouping methods for `User` for usage during aggregation. */
export enum UserGroupBy {
  AvatarUrl = 'AVATAR_URL',
  Bio = 'BIO',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Name = 'NAME',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type UserHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `User` aggregates. */
export type UserHavingInput = {
  AND?: InputMaybe<Array<UserHavingInput>>;
  OR?: InputMaybe<Array<UserHavingInput>>;
  average?: InputMaybe<UserHavingAverageInput>;
  distinctCount?: InputMaybe<UserHavingDistinctCountInput>;
  max?: InputMaybe<UserHavingMaxInput>;
  min?: InputMaybe<UserHavingMinInput>;
  stddevPopulation?: InputMaybe<UserHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<UserHavingStddevSampleInput>;
  sum?: InputMaybe<UserHavingSumInput>;
  variancePopulation?: InputMaybe<UserHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<UserHavingVarianceSampleInput>;
};

export type UserHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type UserHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  identityProviderId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  username: Scalars['String']['input'];
};

/** Methods to use when ordering `User`. */
export enum UserOrderBy {
  AuthoredPullRequestsAverageNumberAsc = 'AUTHORED_PULL_REQUESTS_AVERAGE_NUMBER_ASC',
  AuthoredPullRequestsAverageNumberDesc = 'AUTHORED_PULL_REQUESTS_AVERAGE_NUMBER_DESC',
  AuthoredPullRequestsCountAsc = 'AUTHORED_PULL_REQUESTS_COUNT_ASC',
  AuthoredPullRequestsCountDesc = 'AUTHORED_PULL_REQUESTS_COUNT_DESC',
  AuthoredPullRequestsDistinctCountAuthorIdAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  AuthoredPullRequestsDistinctCountAuthorIdDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  AuthoredPullRequestsDistinctCountClosedAtAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_CLOSED_AT_ASC',
  AuthoredPullRequestsDistinctCountClosedAtDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_CLOSED_AT_DESC',
  AuthoredPullRequestsDistinctCountCreatedAtAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_ASC',
  AuthoredPullRequestsDistinctCountCreatedAtDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_DESC',
  AuthoredPullRequestsDistinctCountDescriptionAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_DESCRIPTION_ASC',
  AuthoredPullRequestsDistinctCountDescriptionDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_DESCRIPTION_DESC',
  AuthoredPullRequestsDistinctCountMergedAtAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGED_AT_ASC',
  AuthoredPullRequestsDistinctCountMergedAtDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGED_AT_DESC',
  AuthoredPullRequestsDistinctCountMergedByIdAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGED_BY_ID_ASC',
  AuthoredPullRequestsDistinctCountMergedByIdDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGED_BY_ID_DESC',
  AuthoredPullRequestsDistinctCountMergeCommitShaAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGE_COMMIT_SHA_ASC',
  AuthoredPullRequestsDistinctCountMergeCommitShaDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_MERGE_COMMIT_SHA_DESC',
  AuthoredPullRequestsDistinctCountNumberAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_NUMBER_ASC',
  AuthoredPullRequestsDistinctCountNumberDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_NUMBER_DESC',
  AuthoredPullRequestsDistinctCountRepositoryIdAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  AuthoredPullRequestsDistinctCountRepositoryIdDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  AuthoredPullRequestsDistinctCountRowIdAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_ASC',
  AuthoredPullRequestsDistinctCountRowIdDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_DESC',
  AuthoredPullRequestsDistinctCountSourceBranchAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_SOURCE_BRANCH_ASC',
  AuthoredPullRequestsDistinctCountSourceBranchDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_SOURCE_BRANCH_DESC',
  AuthoredPullRequestsDistinctCountStateAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_STATE_ASC',
  AuthoredPullRequestsDistinctCountStateDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_STATE_DESC',
  AuthoredPullRequestsDistinctCountTargetBranchAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  AuthoredPullRequestsDistinctCountTargetBranchDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  AuthoredPullRequestsDistinctCountTitleAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_TITLE_ASC',
  AuthoredPullRequestsDistinctCountTitleDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_TITLE_DESC',
  AuthoredPullRequestsDistinctCountUpdatedAtAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  AuthoredPullRequestsDistinctCountUpdatedAtDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  AuthoredPullRequestsMaxNumberAsc = 'AUTHORED_PULL_REQUESTS_MAX_NUMBER_ASC',
  AuthoredPullRequestsMaxNumberDesc = 'AUTHORED_PULL_REQUESTS_MAX_NUMBER_DESC',
  AuthoredPullRequestsMinNumberAsc = 'AUTHORED_PULL_REQUESTS_MIN_NUMBER_ASC',
  AuthoredPullRequestsMinNumberDesc = 'AUTHORED_PULL_REQUESTS_MIN_NUMBER_DESC',
  AuthoredPullRequestsStddevPopulationNumberAsc = 'AUTHORED_PULL_REQUESTS_STDDEV_POPULATION_NUMBER_ASC',
  AuthoredPullRequestsStddevPopulationNumberDesc = 'AUTHORED_PULL_REQUESTS_STDDEV_POPULATION_NUMBER_DESC',
  AuthoredPullRequestsStddevSampleNumberAsc = 'AUTHORED_PULL_REQUESTS_STDDEV_SAMPLE_NUMBER_ASC',
  AuthoredPullRequestsStddevSampleNumberDesc = 'AUTHORED_PULL_REQUESTS_STDDEV_SAMPLE_NUMBER_DESC',
  AuthoredPullRequestsSumNumberAsc = 'AUTHORED_PULL_REQUESTS_SUM_NUMBER_ASC',
  AuthoredPullRequestsSumNumberDesc = 'AUTHORED_PULL_REQUESTS_SUM_NUMBER_DESC',
  AuthoredPullRequestsVariancePopulationNumberAsc = 'AUTHORED_PULL_REQUESTS_VARIANCE_POPULATION_NUMBER_ASC',
  AuthoredPullRequestsVariancePopulationNumberDesc = 'AUTHORED_PULL_REQUESTS_VARIANCE_POPULATION_NUMBER_DESC',
  AuthoredPullRequestsVarianceSampleNumberAsc = 'AUTHORED_PULL_REQUESTS_VARIANCE_SAMPLE_NUMBER_ASC',
  AuthoredPullRequestsVarianceSampleNumberDesc = 'AUTHORED_PULL_REQUESTS_VARIANCE_SAMPLE_NUMBER_DESC',
  AuthoredPullRequestCommentsAverageLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_AVERAGE_LINE_ASC',
  AuthoredPullRequestCommentsAverageLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_AVERAGE_LINE_DESC',
  AuthoredPullRequestCommentsCountAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_COUNT_ASC',
  AuthoredPullRequestCommentsCountDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_COUNT_DESC',
  AuthoredPullRequestCommentsDistinctCountAuthorIdAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  AuthoredPullRequestCommentsDistinctCountAuthorIdDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  AuthoredPullRequestCommentsDistinctCountBodyAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_BODY_ASC',
  AuthoredPullRequestCommentsDistinctCountBodyDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_BODY_DESC',
  AuthoredPullRequestCommentsDistinctCountCommitShaAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_COMMIT_SHA_ASC',
  AuthoredPullRequestCommentsDistinctCountCommitShaDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_COMMIT_SHA_DESC',
  AuthoredPullRequestCommentsDistinctCountCreatedAtAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_CREATED_AT_ASC',
  AuthoredPullRequestCommentsDistinctCountCreatedAtDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_CREATED_AT_DESC',
  AuthoredPullRequestCommentsDistinctCountLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_LINE_ASC',
  AuthoredPullRequestCommentsDistinctCountLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_LINE_DESC',
  AuthoredPullRequestCommentsDistinctCountPathAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PATH_ASC',
  AuthoredPullRequestCommentsDistinctCountPathDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PATH_DESC',
  AuthoredPullRequestCommentsDistinctCountPullRequestIdAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  AuthoredPullRequestCommentsDistinctCountPullRequestIdDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  AuthoredPullRequestCommentsDistinctCountReplyToIdAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_REPLY_TO_ID_ASC',
  AuthoredPullRequestCommentsDistinctCountReplyToIdDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_REPLY_TO_ID_DESC',
  AuthoredPullRequestCommentsDistinctCountRowIdAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_ROW_ID_ASC',
  AuthoredPullRequestCommentsDistinctCountRowIdDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_ROW_ID_DESC',
  AuthoredPullRequestCommentsDistinctCountSideAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_SIDE_ASC',
  AuthoredPullRequestCommentsDistinctCountSideDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_SIDE_DESC',
  AuthoredPullRequestCommentsDistinctCountUpdatedAtAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  AuthoredPullRequestCommentsDistinctCountUpdatedAtDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  AuthoredPullRequestCommentsMaxLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_MAX_LINE_ASC',
  AuthoredPullRequestCommentsMaxLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_MAX_LINE_DESC',
  AuthoredPullRequestCommentsMinLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_MIN_LINE_ASC',
  AuthoredPullRequestCommentsMinLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_MIN_LINE_DESC',
  AuthoredPullRequestCommentsStddevPopulationLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_STDDEV_POPULATION_LINE_ASC',
  AuthoredPullRequestCommentsStddevPopulationLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_STDDEV_POPULATION_LINE_DESC',
  AuthoredPullRequestCommentsStddevSampleLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_STDDEV_SAMPLE_LINE_ASC',
  AuthoredPullRequestCommentsStddevSampleLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_STDDEV_SAMPLE_LINE_DESC',
  AuthoredPullRequestCommentsSumLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_SUM_LINE_ASC',
  AuthoredPullRequestCommentsSumLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_SUM_LINE_DESC',
  AuthoredPullRequestCommentsVariancePopulationLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_VARIANCE_POPULATION_LINE_ASC',
  AuthoredPullRequestCommentsVariancePopulationLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_VARIANCE_POPULATION_LINE_DESC',
  AuthoredPullRequestCommentsVarianceSampleLineAsc = 'AUTHORED_PULL_REQUEST_COMMENTS_VARIANCE_SAMPLE_LINE_ASC',
  AuthoredPullRequestCommentsVarianceSampleLineDesc = 'AUTHORED_PULL_REQUEST_COMMENTS_VARIANCE_SAMPLE_LINE_DESC',
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  BioAsc = 'BIO_ASC',
  BioDesc = 'BIO_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdentityProviderIdAsc = 'IDENTITY_PROVIDER_ID_ASC',
  IdentityProviderIdDesc = 'IDENTITY_PROVIDER_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestsByMergedByIdAverageNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_AVERAGE_NUMBER_ASC',
  PullRequestsByMergedByIdAverageNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_AVERAGE_NUMBER_DESC',
  PullRequestsByMergedByIdCountAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_COUNT_ASC',
  PullRequestsByMergedByIdCountDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_COUNT_DESC',
  PullRequestsByMergedByIdDistinctCountAuthorIdAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_AUTHOR_ID_ASC',
  PullRequestsByMergedByIdDistinctCountAuthorIdDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_AUTHOR_ID_DESC',
  PullRequestsByMergedByIdDistinctCountClosedAtAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_CLOSED_AT_ASC',
  PullRequestsByMergedByIdDistinctCountClosedAtDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_CLOSED_AT_DESC',
  PullRequestsByMergedByIdDistinctCountCreatedAtAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  PullRequestsByMergedByIdDistinctCountCreatedAtDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  PullRequestsByMergedByIdDistinctCountDescriptionAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  PullRequestsByMergedByIdDistinctCountDescriptionDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  PullRequestsByMergedByIdDistinctCountMergedAtAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGED_AT_ASC',
  PullRequestsByMergedByIdDistinctCountMergedAtDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGED_AT_DESC',
  PullRequestsByMergedByIdDistinctCountMergedByIdAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGED_BY_ID_ASC',
  PullRequestsByMergedByIdDistinctCountMergedByIdDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGED_BY_ID_DESC',
  PullRequestsByMergedByIdDistinctCountMergeCommitShaAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGE_COMMIT_SHA_ASC',
  PullRequestsByMergedByIdDistinctCountMergeCommitShaDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_MERGE_COMMIT_SHA_DESC',
  PullRequestsByMergedByIdDistinctCountNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_NUMBER_ASC',
  PullRequestsByMergedByIdDistinctCountNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_NUMBER_DESC',
  PullRequestsByMergedByIdDistinctCountRepositoryIdAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  PullRequestsByMergedByIdDistinctCountRepositoryIdDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  PullRequestsByMergedByIdDistinctCountRowIdAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_ROW_ID_ASC',
  PullRequestsByMergedByIdDistinctCountRowIdDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestsByMergedByIdDistinctCountSourceBranchAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_SOURCE_BRANCH_ASC',
  PullRequestsByMergedByIdDistinctCountSourceBranchDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_SOURCE_BRANCH_DESC',
  PullRequestsByMergedByIdDistinctCountStateAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_STATE_ASC',
  PullRequestsByMergedByIdDistinctCountStateDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_STATE_DESC',
  PullRequestsByMergedByIdDistinctCountTargetBranchAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  PullRequestsByMergedByIdDistinctCountTargetBranchDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  PullRequestsByMergedByIdDistinctCountTitleAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_TITLE_ASC',
  PullRequestsByMergedByIdDistinctCountTitleDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_TITLE_DESC',
  PullRequestsByMergedByIdDistinctCountUpdatedAtAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  PullRequestsByMergedByIdDistinctCountUpdatedAtDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  PullRequestsByMergedByIdMaxNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_MAX_NUMBER_ASC',
  PullRequestsByMergedByIdMaxNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_MAX_NUMBER_DESC',
  PullRequestsByMergedByIdMinNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_MIN_NUMBER_ASC',
  PullRequestsByMergedByIdMinNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_MIN_NUMBER_DESC',
  PullRequestsByMergedByIdStddevPopulationNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_STDDEV_POPULATION_NUMBER_ASC',
  PullRequestsByMergedByIdStddevPopulationNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_STDDEV_POPULATION_NUMBER_DESC',
  PullRequestsByMergedByIdStddevSampleNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_STDDEV_SAMPLE_NUMBER_ASC',
  PullRequestsByMergedByIdStddevSampleNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_STDDEV_SAMPLE_NUMBER_DESC',
  PullRequestsByMergedByIdSumNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_SUM_NUMBER_ASC',
  PullRequestsByMergedByIdSumNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_SUM_NUMBER_DESC',
  PullRequestsByMergedByIdVariancePopulationNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_VARIANCE_POPULATION_NUMBER_ASC',
  PullRequestsByMergedByIdVariancePopulationNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_VARIANCE_POPULATION_NUMBER_DESC',
  PullRequestsByMergedByIdVarianceSampleNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_VARIANCE_SAMPLE_NUMBER_ASC',
  PullRequestsByMergedByIdVarianceSampleNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_VARIANCE_SAMPLE_NUMBER_DESC',
  RepositoriesByOwnerIdCountAsc = 'REPOSITORIES_BY_OWNER_ID_COUNT_ASC',
  RepositoriesByOwnerIdCountDesc = 'REPOSITORIES_BY_OWNER_ID_COUNT_DESC',
  RepositoriesByOwnerIdDistinctCountCreatedAtAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoriesByOwnerIdDistinctCountCreatedAtDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoriesByOwnerIdDistinctCountDefaultBranchAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_DEFAULT_BRANCH_ASC',
  RepositoriesByOwnerIdDistinctCountDefaultBranchDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_DEFAULT_BRANCH_DESC',
  RepositoriesByOwnerIdDistinctCountDescriptionAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  RepositoriesByOwnerIdDistinctCountDescriptionDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  RepositoriesByOwnerIdDistinctCountNameAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_NAME_ASC',
  RepositoriesByOwnerIdDistinctCountNameDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_NAME_DESC',
  RepositoriesByOwnerIdDistinctCountOrganizationIdAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  RepositoriesByOwnerIdDistinctCountOrganizationIdDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  RepositoriesByOwnerIdDistinctCountOwnerIdAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_ASC',
  RepositoriesByOwnerIdDistinctCountOwnerIdDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_DESC',
  RepositoriesByOwnerIdDistinctCountRowIdAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_ASC',
  RepositoriesByOwnerIdDistinctCountRowIdDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_DESC',
  RepositoriesByOwnerIdDistinctCountSlugAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_SLUG_ASC',
  RepositoriesByOwnerIdDistinctCountSlugDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_SLUG_DESC',
  RepositoriesByOwnerIdDistinctCountUpdatedAtAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoriesByOwnerIdDistinctCountUpdatedAtDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoriesByOwnerIdDistinctCountVisibilityAsc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_VISIBILITY_ASC',
  RepositoriesByOwnerIdDistinctCountVisibilityDesc = 'REPOSITORIES_BY_OWNER_ID_DISTINCT_COUNT_VISIBILITY_DESC',
  RepositoryCollaboratorsCountAsc = 'REPOSITORY_COLLABORATORS_COUNT_ASC',
  RepositoryCollaboratorsCountDesc = 'REPOSITORY_COLLABORATORS_COUNT_DESC',
  RepositoryCollaboratorsDistinctCountCreatedAtAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_CREATED_AT_ASC',
  RepositoryCollaboratorsDistinctCountCreatedAtDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_CREATED_AT_DESC',
  RepositoryCollaboratorsDistinctCountPermissionAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_PERMISSION_ASC',
  RepositoryCollaboratorsDistinctCountPermissionDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_PERMISSION_DESC',
  RepositoryCollaboratorsDistinctCountRepositoryIdAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  RepositoryCollaboratorsDistinctCountRepositoryIdDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  RepositoryCollaboratorsDistinctCountUpdatedAtAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepositoryCollaboratorsDistinctCountUpdatedAtDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepositoryCollaboratorsDistinctCountUserIdAsc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_USER_ID_ASC',
  RepositoryCollaboratorsDistinctCountUserIdDesc = 'REPOSITORY_COLLABORATORS_DISTINCT_COUNT_USER_ID_DESC',
  ReviewedPullRequestReviewsCountAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_COUNT_ASC',
  ReviewedPullRequestReviewsCountDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_COUNT_DESC',
  ReviewedPullRequestReviewsDistinctCountBodyAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_BODY_ASC',
  ReviewedPullRequestReviewsDistinctCountBodyDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_BODY_DESC',
  ReviewedPullRequestReviewsDistinctCountCreatedAtAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_CREATED_AT_ASC',
  ReviewedPullRequestReviewsDistinctCountCreatedAtDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_CREATED_AT_DESC',
  ReviewedPullRequestReviewsDistinctCountPullRequestIdAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  ReviewedPullRequestReviewsDistinctCountPullRequestIdDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  ReviewedPullRequestReviewsDistinctCountReviewerIdAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_REVIEWER_ID_ASC',
  ReviewedPullRequestReviewsDistinctCountReviewerIdDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_REVIEWER_ID_DESC',
  ReviewedPullRequestReviewsDistinctCountRowIdAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_ROW_ID_ASC',
  ReviewedPullRequestReviewsDistinctCountRowIdDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_ROW_ID_DESC',
  ReviewedPullRequestReviewsDistinctCountStateAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_STATE_ASC',
  ReviewedPullRequestReviewsDistinctCountStateDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_STATE_DESC',
  ReviewedPullRequestReviewsDistinctCountSubmittedAtAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_SUBMITTED_AT_ASC',
  ReviewedPullRequestReviewsDistinctCountSubmittedAtDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_SUBMITTED_AT_DESC',
  ReviewedPullRequestReviewsDistinctCountUpdatedAtAsc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_UPDATED_AT_ASC',
  ReviewedPullRequestReviewsDistinctCountUpdatedAtDesc = 'REVIEWED_PULL_REQUEST_REVIEWS_DISTINCT_COUNT_UPDATED_AT_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  identityProviderId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `PullRequestComment` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyPullRequestCommentFilter = {
  /** Aggregates across related `PullRequestComment` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestCommentAggregatesFilter>;
  /** Every related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestCommentFilter>;
  /** No related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestCommentFilter>;
  /** Some related `PullRequestComment` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestCommentFilter>;
};

/** A filter to be used against many `PullRequest` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyPullRequestFilter = {
  /** Aggregates across related `PullRequest` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestAggregatesFilter>;
  /** Every related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestFilter>;
  /** No related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestFilter>;
  /** Some related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestFilter>;
};

/** A filter to be used against many `PullRequestReview` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyPullRequestReviewFilter = {
  /** Aggregates across related `PullRequestReview` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestReviewAggregatesFilter>;
  /** Every related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestReviewFilter>;
  /** No related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestReviewFilter>;
  /** Some related `PullRequestReview` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestReviewFilter>;
};

/** A filter to be used against many `RepositoryCollaborator` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyRepositoryCollaboratorFilter = {
  /** Aggregates across related `RepositoryCollaborator` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryCollaboratorAggregatesFilter>;
  /** Every related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryCollaboratorFilter>;
  /** No related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryCollaboratorFilter>;
  /** Some related `RepositoryCollaborator` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryCollaboratorFilter>;
};

/** A filter to be used against many `Repository` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyRepositoryFilter = {
  /** Aggregates across related `Repository` match the filter criteria. */
  aggregates?: InputMaybe<RepositoryAggregatesFilter>;
  /** Every related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RepositoryFilter>;
  /** No related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RepositoryFilter>;
  /** Some related `Repository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RepositoryFilter>;
};

export enum Visibility {
  Private = 'private',
  Public = 'public'
}

/** A filter to be used against Visibility fields. All fields are combined with a logical ‘and.’ */
export type VisibilityFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Visibility>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Visibility>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Visibility>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Visibility>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Visibility>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Visibility>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Visibility>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Visibility>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Visibility>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Visibility>>;
};

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization?: { __typename?: 'CreateOrganizationPayload', organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string, description?: string | null, avatarUrl?: string | null, createdAt: Date } | null } | null };

export type CreateRepositoryMutationVariables = Exact<{
  input: CreateRepositoryInput;
}>;


export type CreateRepositoryMutation = { __typename?: 'Mutation', createRepository?: { __typename?: 'CreateRepositoryPayload', repository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string } | null } | null } | null };

export type DeleteRepositoryMutationVariables = Exact<{
  input: DeleteRepositoryInput;
}>;


export type DeleteRepositoryMutation = { __typename?: 'Mutation', deleteRepository?: { __typename?: 'DeleteRepositoryPayload', repository?: { __typename?: 'Repository', rowId: string } | null } | null };

export type UpdateRepositoryMutationVariables = Exact<{
  input: UpdateRepositoryInput;
}>;


export type UpdateRepositoryMutation = { __typename?: 'Mutation', updateRepository?: { __typename?: 'UpdateRepositoryPayload', repository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string } | null } | null } | null };

export type RepositoryGraphQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type RepositoryGraphQuery = { __typename?: 'Query', repositories?: { __typename?: 'RepositoryConnection', nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, owner?: { __typename?: 'User', rowId: string, username: string } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string } | null, outgoingRelationships: { __typename?: 'RepositoryRelationshipConnection', nodes: Array<{ __typename?: 'RepositoryRelationship', rowId: string, confidence: number, versionConstraint?: string | null, targetRepository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, owner?: { __typename?: 'User', username: string } | null, organization?: { __typename?: 'Organization', idpOrganizationId: string } | null } | null, relationshipType?: { __typename?: 'RepositoryRelationshipType', rowId: string, name: string, isDirected: boolean } | null }> } }> } | null, repositoryRelationshipTypes?: { __typename?: 'RepositoryRelationshipTypeConnection', nodes: Array<{ __typename?: 'RepositoryRelationshipType', rowId: string, name: string, description?: string | null, isDirected: boolean }> } | null };

export type OrganizationQueryVariables = Exact<{
  rowId: Scalars['UUID']['input'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string, description?: string | null, avatarUrl?: string | null, createdAt: Date, updatedAt: Date, repositories: { __typename?: 'RepositoryConnection', totalCount: number, nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, updatedAt: Date }> } } | null };

export type OrganizationsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations?: { __typename?: 'OrganizationConnection', totalCount: number, nodes: Array<{ __typename?: 'Organization', rowId: string, idpOrganizationId: string, description?: string | null, avatarUrl?: string | null, createdAt: Date, updatedAt: Date, repositories: { __typename?: 'RepositoryConnection', totalCount: number } }> } | null };

export type RepositoriesQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RepositoriesQuery = { __typename?: 'Query', repositories?: { __typename?: 'RepositoryConnection', totalCount: number, nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string, avatarUrl?: string | null } | null }> } | null };

export type RepositoryQueryVariables = Exact<{
  rowId: Scalars['UUID']['input'];
}>;


export type RepositoryQuery = { __typename?: 'Query', repository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string, avatarUrl?: string | null } | null, repositoryCollaborators: { __typename?: 'RepositoryCollaboratorConnection', nodes: Array<{ __typename?: 'RepositoryCollaborator', userId: string, permission: Permission, user?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null }> } } | null };

export type RepositoryWithBranchesQueryVariables = Exact<{
  ownerSlug: Scalars['String']['input'];
  repoSlug: Scalars['String']['input'];
}>;


export type RepositoryWithBranchesQuery = { __typename?: 'Query', repositories?: { __typename?: 'RepositoryConnection', nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null, organization?: { __typename?: 'Organization', rowId: string, idpOrganizationId: string, avatarUrl?: string | null } | null, refs: { __typename?: 'RefConnection', totalCount: number, nodes: Array<{ __typename?: 'Ref', id: string, name: string, prefix: string, target?:
            | { __typename?: 'Blob' }
            | { __typename?: 'Commit', oid: string }
            | { __typename?: 'Tree' }
           | null }> }, defaultBranchRef?: { __typename?: 'Ref', id: string, name: string, prefix: string, target?:
          | { __typename?: 'Blob' }
          | { __typename?: 'Commit', oid: string }
          | { __typename?: 'Tree' }
         | null } | null }> } | null };

export type ObserverQueryVariables = Exact<{ [key: string]: never; }>;


export type ObserverQuery = { __typename?: 'Query', observer?: { __typename?: 'Observer', rowId: string } | null };


export const CreateOrganizationDocument = gql`
    mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    organization {
      rowId
      idpOrganizationId
      description
      avatarUrl
      createdAt
    }
  }
}
    `;
export const CreateRepositoryDocument = gql`
    mutation CreateRepository($input: CreateRepositoryInput!) {
  createRepository(input: $input) {
    repository {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      createdAt
      updatedAt
      owner {
        rowId
        username
      }
      organization {
        rowId
        idpOrganizationId
      }
    }
  }
}
    `;
export const DeleteRepositoryDocument = gql`
    mutation DeleteRepository($input: DeleteRepositoryInput!) {
  deleteRepository(input: $input) {
    repository {
      rowId
    }
  }
}
    `;
export const UpdateRepositoryDocument = gql`
    mutation UpdateRepository($input: UpdateRepositoryInput!) {
  updateRepository(input: $input) {
    repository {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      createdAt
      updatedAt
      owner {
        rowId
        username
      }
      organization {
        rowId
        idpOrganizationId
      }
    }
  }
}
    `;
export const RepositoryGraphDocument = gql`
    query RepositoryGraph($userId: UUID!, $organizationId: UUID) {
  repositories(
    filter: {or: [{ownerId: {equalTo: $userId}}, {repositoryCollaborators: {some: {userId: {equalTo: $userId}}}}, {organizationId: {equalTo: $organizationId}}]}
    orderBy: NAME_ASC
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      owner {
        rowId
        username
      }
      organization {
        rowId
        idpOrganizationId
      }
      outgoingRelationships: repositoryRelationshipsBySourceRepositoryId {
        nodes {
          rowId
          confidence
          versionConstraint
          targetRepository {
            rowId
            name
            slug
            owner {
              username
            }
            organization {
              idpOrganizationId
            }
          }
          relationshipType {
            rowId
            name
            isDirected
          }
        }
      }
    }
  }
  repositoryRelationshipTypes(orderBy: NAME_ASC) {
    nodes {
      rowId
      name
      description
      isDirected
    }
  }
}
    `;
export const OrganizationDocument = gql`
    query Organization($rowId: UUID!) {
  organization(rowId: $rowId) {
    rowId
    idpOrganizationId
    description
    avatarUrl
    createdAt
    updatedAt
    repositories {
      nodes {
        rowId
        name
        slug
        description
        visibility
        updatedAt
      }
      totalCount
    }
  }
}
    `;
export const OrganizationsDocument = gql`
    query Organizations($limit: Int) {
  organizations(first: $limit) {
    nodes {
      rowId
      idpOrganizationId
      description
      avatarUrl
      createdAt
      updatedAt
      repositories {
        totalCount
      }
    }
    totalCount
  }
}
    `;
export const RepositoriesDocument = gql`
    query Repositories($userId: UUID!, $limit: Int) {
  repositories(
    filter: {or: [{ownerId: {equalTo: $userId}}, {repositoryCollaborators: {some: {userId: {equalTo: $userId}}}}]}
    orderBy: UPDATED_AT_DESC
    first: $limit
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      createdAt
      updatedAt
      owner {
        rowId
        username
        avatarUrl
      }
      organization {
        rowId
        idpOrganizationId
        avatarUrl
      }
    }
    totalCount
  }
}
    `;
export const RepositoryDocument = gql`
    query Repository($rowId: UUID!) {
  repository(rowId: $rowId) {
    rowId
    name
    slug
    description
    visibility
    defaultBranch
    createdAt
    updatedAt
    owner {
      rowId
      username
      avatarUrl
    }
    organization {
      rowId
      idpOrganizationId
      avatarUrl
    }
    repositoryCollaborators {
      nodes {
        userId
        permission
        user {
          rowId
          username
          avatarUrl
        }
      }
    }
  }
}
    `;
export const RepositoryWithBranchesDocument = gql`
    query RepositoryWithBranches($ownerSlug: String!, $repoSlug: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, owner: {username: {equalTo: $ownerSlug}}}
    first: 1
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      createdAt
      updatedAt
      owner {
        rowId
        username
        avatarUrl
      }
      organization {
        rowId
        idpOrganizationId
        avatarUrl
      }
      refs(refPrefix: "refs/heads/") {
        nodes {
          id
          name
          prefix
          target {
            ... on Commit {
              oid
            }
          }
        }
        totalCount
      }
      defaultBranchRef {
        id
        name
        prefix
        target {
          ... on Commit {
            oid
          }
        }
      }
    }
  }
}
    `;
export const ObserverDocument = gql`
    query Observer {
  observer {
    rowId
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateOrganization(variables: CreateOrganizationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateOrganizationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrganizationMutation>({ document: CreateOrganizationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateOrganization', 'mutation', variables);
    },
    CreateRepository(variables: CreateRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRepositoryMutation>({ document: CreateRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateRepository', 'mutation', variables);
    },
    DeleteRepository(variables: DeleteRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRepositoryMutation>({ document: DeleteRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeleteRepository', 'mutation', variables);
    },
    UpdateRepository(variables: UpdateRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRepositoryMutation>({ document: UpdateRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateRepository', 'mutation', variables);
    },
    RepositoryGraph(variables: RepositoryGraphQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryGraphQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryGraphQuery>({ document: RepositoryGraphDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RepositoryGraph', 'query', variables);
    },
    Organization(variables: OrganizationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OrganizationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrganizationQuery>({ document: OrganizationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Organization', 'query', variables);
    },
    Organizations(variables?: OrganizationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OrganizationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrganizationsQuery>({ document: OrganizationsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Organizations', 'query', variables);
    },
    Repositories(variables: RepositoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoriesQuery>({ document: RepositoriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Repositories', 'query', variables);
    },
    Repository(variables: RepositoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryQuery>({ document: RepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Repository', 'query', variables);
    },
    RepositoryWithBranches(variables: RepositoryWithBranchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryWithBranchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryWithBranchesQuery>({ document: RepositoryWithBranchesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RepositoryWithBranches', 'query', variables);
    },
    Observer(variables?: ObserverQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ObserverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObserverQuery>({ document: ObserverDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Observer', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;