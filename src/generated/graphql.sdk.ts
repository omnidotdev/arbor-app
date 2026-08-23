// @ts-nocheck
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { GraphQLClient, type RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: unknown; output: unknown; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: string; output: string; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: string; output: string; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: Date; output: Date; }
  /** Represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: string; output: string; }
};

export type Agent = Node & {
  __typename?: 'Agent';
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Reads a single `Organization` that is related to this `Agent`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `User` that is related to this `Agent`. */
  owner?: Maybe<User>;
  ownerId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `PersonalAccessToken`. */
  personalAccessTokens: PersonalAccessTokenConnection;
  /** Reads and enables pagination through a set of `PullRequest`. */
  pullRequestsByAuthoredByAgentId: PullRequestConnection;
  rowId: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Stack`. */
  stacksByAuthoredByAgentId: StackConnection;
  updatedAt: Scalars['Datetime']['output'];
  vendor?: Maybe<Scalars['String']['output']>;
};


export type AgentPersonalAccessTokensArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PersonalAccessTokenCondition>;
  filter?: InputMaybe<PersonalAccessTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PersonalAccessTokenOrderBy>>;
};


export type AgentPullRequestsByAuthoredByAgentIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PullRequestCondition>;
  filter?: InputMaybe<PullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PullRequestOrderBy>>;
};


export type AgentStacksByAuthoredByAgentIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StackCondition>;
  filter?: InputMaybe<StackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StackOrderBy>>;
};

export type AgentAggregates = {
  __typename?: 'AgentAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AgentDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `Agent` object types. */
export type AgentAggregatesFilter = {
  /** Distinct count aggregate over matching `Agent` objects. */
  distinctCount?: InputMaybe<AgentDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Agent` object to be included within the aggregate. */
  filter?: InputMaybe<AgentFilter>;
};

/** A condition to be used against `Agent` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AgentCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `model` field. */
  model?: InputMaybe<Scalars['String']['input']>;
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
  /** Checks for equality with the object’s `vendor` field. */
  vendor?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Agent` values. */
export type AgentConnection = {
  __typename?: 'AgentConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AgentAggregates>;
  /** A list of edges which contains the `Agent` and cursor to aid in pagination. */
  edges: Array<AgentEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AgentAggregates>>;
  /** A list of `Agent` objects. */
  nodes: Array<Agent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Agent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Agent` values. */
export type AgentConnectionGroupedAggregatesArgs = {
  groupBy: Array<AgentGroupBy>;
  having?: InputMaybe<AgentHavingInput>;
};

export type AgentDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  model?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  ownerId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  slug?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  vendor?: InputMaybe<BigIntFilter>;
};

export type AgentDistinctCountAggregates = {
  __typename?: 'AgentDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of model across the matching connection */
  model?: Maybe<Scalars['BigInt']['output']>;
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
  /** Distinct count of vendor across the matching connection */
  vendor?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Agent` edge in the connection. */
export type AgentEdge = {
  __typename?: 'AgentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Agent` at the end of the edge. */
  node: Agent;
};

/** A filter to be used against `Agent` object types. All fields are combined with a logical ‘and.’ */
export type AgentFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AgentFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `model` field. */
  model?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AgentFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AgentFilter>>;
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
  /** Filter by the object’s `personalAccessTokens` relation. */
  personalAccessTokens?: InputMaybe<AgentToManyPersonalAccessTokenFilter>;
  /** Some related `personalAccessTokens` exist. */
  personalAccessTokensExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `pullRequestsByAuthoredByAgentId` relation. */
  pullRequestsByAuthoredByAgentId?: InputMaybe<AgentToManyPullRequestFilter>;
  /** Some related `pullRequestsByAuthoredByAgentId` exist. */
  pullRequestsByAuthoredByAgentIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `stacksByAuthoredByAgentId` relation. */
  stacksByAuthoredByAgentId?: InputMaybe<AgentToManyStackFilter>;
  /** Some related `stacksByAuthoredByAgentId` exist. */
  stacksByAuthoredByAgentIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `vendor` field. */
  vendor?: InputMaybe<StringFilter>;
};

/** Grouping methods for `Agent` for usage during aggregation. */
export enum AgentGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Model = 'MODEL',
  Name = 'NAME',
  OrganizationId = 'ORGANIZATION_ID',
  OwnerId = 'OWNER_ID',
  Slug = 'SLUG',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  Vendor = 'VENDOR'
}

export type AgentHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Agent` aggregates. */
export type AgentHavingInput = {
  AND?: InputMaybe<Array<AgentHavingInput>>;
  OR?: InputMaybe<Array<AgentHavingInput>>;
  average?: InputMaybe<AgentHavingAverageInput>;
  distinctCount?: InputMaybe<AgentHavingDistinctCountInput>;
  max?: InputMaybe<AgentHavingMaxInput>;
  min?: InputMaybe<AgentHavingMinInput>;
  stddevPopulation?: InputMaybe<AgentHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AgentHavingStddevSampleInput>;
  sum?: InputMaybe<AgentHavingSumInput>;
  variancePopulation?: InputMaybe<AgentHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AgentHavingVarianceSampleInput>;
};

export type AgentHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type AgentHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Agent` */
export type AgentInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Agent`. */
export enum AgentOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModelAsc = 'MODEL_ASC',
  ModelDesc = 'MODEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PersonalAccessTokensCountAsc = 'PERSONAL_ACCESS_TOKENS_COUNT_ASC',
  PersonalAccessTokensCountDesc = 'PERSONAL_ACCESS_TOKENS_COUNT_DESC',
  PersonalAccessTokensDistinctCountAgentIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_AGENT_ID_ASC',
  PersonalAccessTokensDistinctCountAgentIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_AGENT_ID_DESC',
  PersonalAccessTokensDistinctCountCreatedAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_CREATED_AT_ASC',
  PersonalAccessTokensDistinctCountCreatedAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_CREATED_AT_DESC',
  PersonalAccessTokensDistinctCountExpiresAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_EXPIRES_AT_ASC',
  PersonalAccessTokensDistinctCountExpiresAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_EXPIRES_AT_DESC',
  PersonalAccessTokensDistinctCountLastUsedAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_LAST_USED_AT_ASC',
  PersonalAccessTokensDistinctCountLastUsedAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_LAST_USED_AT_DESC',
  PersonalAccessTokensDistinctCountNameAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_NAME_ASC',
  PersonalAccessTokensDistinctCountNameDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_NAME_DESC',
  PersonalAccessTokensDistinctCountPermissionAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_PERMISSION_ASC',
  PersonalAccessTokensDistinctCountPermissionDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_PERMISSION_DESC',
  PersonalAccessTokensDistinctCountRowIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_ROW_ID_ASC',
  PersonalAccessTokensDistinctCountRowIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_ROW_ID_DESC',
  PersonalAccessTokensDistinctCountTokenPrefixAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_TOKEN_PREFIX_ASC',
  PersonalAccessTokensDistinctCountTokenPrefixDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_TOKEN_PREFIX_DESC',
  PersonalAccessTokensDistinctCountUserIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_USER_ID_ASC',
  PersonalAccessTokensDistinctCountUserIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestsByAuthoredByAgentIdAverageNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_AVERAGE_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdAverageNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_AVERAGE_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdCountAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_COUNT_ASC',
  PullRequestsByAuthoredByAgentIdCountDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_COUNT_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountAuthoredByAgentIdAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountAuthoredByAgentIdDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountAuthorIdAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHOR_ID_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountAuthorIdDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHOR_ID_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountClosedAtAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CLOSED_AT_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountClosedAtDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CLOSED_AT_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountCreatedAtAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountCreatedAtDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountDescriptionAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountDescriptionDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergedAtAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGED_AT_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergedAtDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGED_AT_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergedByIdAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGED_BY_ID_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergedByIdDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGED_BY_ID_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergeCommitShaAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGE_COMMIT_SHA_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountMergeCommitShaDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_MERGE_COMMIT_SHA_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountRepositoryIdAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountRepositoryIdDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountRowIdAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_ROW_ID_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountRowIdDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountSourceBranchAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_SOURCE_BRANCH_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountSourceBranchDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_SOURCE_BRANCH_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountStateAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_STATE_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountStateDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_STATE_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountTargetBranchAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountTargetBranchDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountTitleAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TITLE_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountTitleDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TITLE_DESC',
  PullRequestsByAuthoredByAgentIdDistinctCountUpdatedAtAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  PullRequestsByAuthoredByAgentIdDistinctCountUpdatedAtDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  PullRequestsByAuthoredByAgentIdMaxNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_MAX_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdMaxNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_MAX_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdMinNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_MIN_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdMinNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_MIN_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdStddevPopulationNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_STDDEV_POPULATION_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdStddevPopulationNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_STDDEV_POPULATION_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdStddevSampleNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_STDDEV_SAMPLE_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdStddevSampleNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_STDDEV_SAMPLE_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdSumNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_SUM_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdSumNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_SUM_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdVariancePopulationNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_VARIANCE_POPULATION_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdVariancePopulationNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_VARIANCE_POPULATION_NUMBER_DESC',
  PullRequestsByAuthoredByAgentIdVarianceSampleNumberAsc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_VARIANCE_SAMPLE_NUMBER_ASC',
  PullRequestsByAuthoredByAgentIdVarianceSampleNumberDesc = 'PULL_REQUESTS_BY_AUTHORED_BY_AGENT_ID_VARIANCE_SAMPLE_NUMBER_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StacksByAuthoredByAgentIdCountAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_COUNT_ASC',
  StacksByAuthoredByAgentIdCountDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_COUNT_DESC',
  StacksByAuthoredByAgentIdDistinctCountAuthoredByAgentIdAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  StacksByAuthoredByAgentIdDistinctCountAuthoredByAgentIdDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
  StacksByAuthoredByAgentIdDistinctCountAuthorIdAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHOR_ID_ASC',
  StacksByAuthoredByAgentIdDistinctCountAuthorIdDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_AUTHOR_ID_DESC',
  StacksByAuthoredByAgentIdDistinctCountBaseBranchAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_BASE_BRANCH_ASC',
  StacksByAuthoredByAgentIdDistinctCountBaseBranchDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_BASE_BRANCH_DESC',
  StacksByAuthoredByAgentIdDistinctCountCreatedAtAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  StacksByAuthoredByAgentIdDistinctCountCreatedAtDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  StacksByAuthoredByAgentIdDistinctCountDescriptionAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  StacksByAuthoredByAgentIdDistinctCountDescriptionDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  StacksByAuthoredByAgentIdDistinctCountRepositoryIdAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  StacksByAuthoredByAgentIdDistinctCountRepositoryIdDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  StacksByAuthoredByAgentIdDistinctCountRowIdAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_ROW_ID_ASC',
  StacksByAuthoredByAgentIdDistinctCountRowIdDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_ROW_ID_DESC',
  StacksByAuthoredByAgentIdDistinctCountStatusAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_STATUS_ASC',
  StacksByAuthoredByAgentIdDistinctCountStatusDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_STATUS_DESC',
  StacksByAuthoredByAgentIdDistinctCountTitleAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TITLE_ASC',
  StacksByAuthoredByAgentIdDistinctCountTitleDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_TITLE_DESC',
  StacksByAuthoredByAgentIdDistinctCountUpdatedAtAsc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  StacksByAuthoredByAgentIdDistinctCountUpdatedAtDesc = 'STACKS_BY_AUTHORED_BY_AGENT_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  VendorAsc = 'VENDOR_ASC',
  VendorDesc = 'VENDOR_DESC'
}

/** Represents an update to a `Agent`. Fields that are set will be updated. */
export type AgentPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `PersonalAccessToken` object types. All fields are combined with a logical ‘and.’ */
export type AgentToManyPersonalAccessTokenFilter = {
  /** Aggregates across related `PersonalAccessToken` match the filter criteria. */
  aggregates?: InputMaybe<PersonalAccessTokenAggregatesFilter>;
  /** Every related `PersonalAccessToken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PersonalAccessTokenFilter>;
  /** No related `PersonalAccessToken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PersonalAccessTokenFilter>;
  /** Some related `PersonalAccessToken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PersonalAccessTokenFilter>;
};

/** A filter to be used against many `PullRequest` object types. All fields are combined with a logical ‘and.’ */
export type AgentToManyPullRequestFilter = {
  /** Aggregates across related `PullRequest` match the filter criteria. */
  aggregates?: InputMaybe<PullRequestAggregatesFilter>;
  /** Every related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PullRequestFilter>;
  /** No related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PullRequestFilter>;
  /** Some related `PullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PullRequestFilter>;
};

/** A filter to be used against many `Stack` object types. All fields are combined with a logical ‘and.’ */
export type AgentToManyStackFilter = {
  /** Aggregates across related `Stack` match the filter criteria. */
  aggregates?: InputMaybe<StackAggregatesFilter>;
  /** Every related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<StackFilter>;
  /** No related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<StackFilter>;
  /** Some related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<StackFilter>;
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

/**
 * A repository affected by a change to another repository, with its shortest
 * dependency distance from it.
 */
export type BlastRadiusRepository = {
  __typename?: 'BlastRadiusRepository';
  /** Dependency distance from the changed repository (1 = a direct dependent). */
  depth?: Maybe<Scalars['Int']['output']>;
  /** The affected repository's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The organization slug, for an organization repository. */
  organizationSlug?: Maybe<Scalars['String']['output']>;
  /** The owner username, for a personal repository. */
  ownerUsername?: Maybe<Scalars['String']['output']>;
  /** The affected repository's row id. */
  repositoryId?: Maybe<Scalars['UUID']['output']>;
  /** The affected repository's slug. */
  slug?: Maybe<Scalars['String']['output']>;
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

export type BranchProtectionRule = Node & {
  __typename?: 'BranchProtectionRule';
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  refPattern: Scalars['String']['output'];
  /** Reads a single `Repository` that is related to this `BranchProtectionRule`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  requirePassingChecks: Scalars['Boolean']['output'];
  requiredApprovals: Scalars['Int']['output'];
  rowId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type BranchProtectionRuleAggregates = {
  __typename?: 'BranchProtectionRuleAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<BranchProtectionRuleAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BranchProtectionRuleDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<BranchProtectionRuleMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<BranchProtectionRuleMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<BranchProtectionRuleStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<BranchProtectionRuleStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<BranchProtectionRuleSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<BranchProtectionRuleVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<BranchProtectionRuleVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `BranchProtectionRule` object types. */
export type BranchProtectionRuleAggregatesFilter = {
  /** Mean average aggregate over matching `BranchProtectionRule` objects. */
  average?: InputMaybe<BranchProtectionRuleAverageAggregateFilter>;
  /** Distinct count aggregate over matching `BranchProtectionRule` objects. */
  distinctCount?: InputMaybe<BranchProtectionRuleDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `BranchProtectionRule` object to be included within the aggregate. */
  filter?: InputMaybe<BranchProtectionRuleFilter>;
  /** Maximum aggregate over matching `BranchProtectionRule` objects. */
  max?: InputMaybe<BranchProtectionRuleMaxAggregateFilter>;
  /** Minimum aggregate over matching `BranchProtectionRule` objects. */
  min?: InputMaybe<BranchProtectionRuleMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `BranchProtectionRule` objects. */
  stddevPopulation?: InputMaybe<BranchProtectionRuleStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `BranchProtectionRule` objects. */
  stddevSample?: InputMaybe<BranchProtectionRuleStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `BranchProtectionRule` objects. */
  sum?: InputMaybe<BranchProtectionRuleSumAggregateFilter>;
  /** Population variance aggregate over matching `BranchProtectionRule` objects. */
  variancePopulation?: InputMaybe<BranchProtectionRuleVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `BranchProtectionRule` objects. */
  varianceSample?: InputMaybe<BranchProtectionRuleVarianceSampleAggregateFilter>;
};

export type BranchProtectionRuleAverageAggregateFilter = {
  requiredApprovals?: InputMaybe<BigFloatFilter>;
};

export type BranchProtectionRuleAverageAggregates = {
  __typename?: 'BranchProtectionRuleAverageAggregates';
  /** Mean average of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `BranchProtectionRule` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type BranchProtectionRuleCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `refPattern` field. */
  refPattern?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `requirePassingChecks` field. */
  requirePassingChecks?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `requiredApprovals` field. */
  requiredApprovals?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `BranchProtectionRule` values. */
export type BranchProtectionRuleConnection = {
  __typename?: 'BranchProtectionRuleConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BranchProtectionRuleAggregates>;
  /** A list of edges which contains the `BranchProtectionRule` and cursor to aid in pagination. */
  edges: Array<BranchProtectionRuleEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BranchProtectionRuleAggregates>>;
  /** A list of `BranchProtectionRule` objects. */
  nodes: Array<BranchProtectionRule>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BranchProtectionRule` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `BranchProtectionRule` values. */
export type BranchProtectionRuleConnectionGroupedAggregatesArgs = {
  groupBy: Array<BranchProtectionRuleGroupBy>;
  having?: InputMaybe<BranchProtectionRuleHavingInput>;
};

export type BranchProtectionRuleDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  refPattern?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  requirePassingChecks?: InputMaybe<BigIntFilter>;
  requiredApprovals?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type BranchProtectionRuleDistinctCountAggregates = {
  __typename?: 'BranchProtectionRuleDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of refPattern across the matching connection */
  refPattern?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of requirePassingChecks across the matching connection */
  requirePassingChecks?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `BranchProtectionRule` edge in the connection. */
export type BranchProtectionRuleEdge = {
  __typename?: 'BranchProtectionRuleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BranchProtectionRule` at the end of the edge. */
  node: BranchProtectionRule;
};

/** A filter to be used against `BranchProtectionRule` object types. All fields are combined with a logical ‘and.’ */
export type BranchProtectionRuleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BranchProtectionRuleFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BranchProtectionRuleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BranchProtectionRuleFilter>>;
  /** Filter by the object’s `refPattern` field. */
  refPattern?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `requirePassingChecks` field. */
  requirePassingChecks?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `requiredApprovals` field. */
  requiredApprovals?: InputMaybe<IntFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `BranchProtectionRule` for usage during aggregation. */
export enum BranchProtectionRuleGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  RefPattern = 'REF_PATTERN',
  RepositoryId = 'REPOSITORY_ID',
  RequiredApprovals = 'REQUIRED_APPROVALS',
  RequirePassingChecks = 'REQUIRE_PASSING_CHECKS',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type BranchProtectionRuleHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `BranchProtectionRule` aggregates. */
export type BranchProtectionRuleHavingInput = {
  AND?: InputMaybe<Array<BranchProtectionRuleHavingInput>>;
  OR?: InputMaybe<Array<BranchProtectionRuleHavingInput>>;
  average?: InputMaybe<BranchProtectionRuleHavingAverageInput>;
  distinctCount?: InputMaybe<BranchProtectionRuleHavingDistinctCountInput>;
  max?: InputMaybe<BranchProtectionRuleHavingMaxInput>;
  min?: InputMaybe<BranchProtectionRuleHavingMinInput>;
  stddevPopulation?: InputMaybe<BranchProtectionRuleHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BranchProtectionRuleHavingStddevSampleInput>;
  sum?: InputMaybe<BranchProtectionRuleHavingSumInput>;
  variancePopulation?: InputMaybe<BranchProtectionRuleHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BranchProtectionRuleHavingVarianceSampleInput>;
};

export type BranchProtectionRuleHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type BranchProtectionRuleHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  requiredApprovals?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `BranchProtectionRule` */
export type BranchProtectionRuleInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  refPattern: Scalars['String']['input'];
  repositoryId: Scalars['UUID']['input'];
  requirePassingChecks?: InputMaybe<Scalars['Boolean']['input']>;
  requiredApprovals?: InputMaybe<Scalars['Int']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type BranchProtectionRuleMaxAggregateFilter = {
  requiredApprovals?: InputMaybe<IntFilter>;
};

export type BranchProtectionRuleMaxAggregates = {
  __typename?: 'BranchProtectionRuleMaxAggregates';
  /** Maximum of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['Int']['output']>;
};

export type BranchProtectionRuleMinAggregateFilter = {
  requiredApprovals?: InputMaybe<IntFilter>;
};

export type BranchProtectionRuleMinAggregates = {
  __typename?: 'BranchProtectionRuleMinAggregates';
  /** Minimum of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `BranchProtectionRule`. */
export enum BranchProtectionRuleOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RefPatternAsc = 'REF_PATTERN_ASC',
  RefPatternDesc = 'REF_PATTERN_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RequiredApprovalsAsc = 'REQUIRED_APPROVALS_ASC',
  RequiredApprovalsDesc = 'REQUIRED_APPROVALS_DESC',
  RequirePassingChecksAsc = 'REQUIRE_PASSING_CHECKS_ASC',
  RequirePassingChecksDesc = 'REQUIRE_PASSING_CHECKS_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `BranchProtectionRule`. Fields that are set will be updated. */
export type BranchProtectionRulePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  refPattern?: InputMaybe<Scalars['String']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  requirePassingChecks?: InputMaybe<Scalars['Boolean']['input']>;
  requiredApprovals?: InputMaybe<Scalars['Int']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type BranchProtectionRuleStddevPopulationAggregateFilter = {
  requiredApprovals?: InputMaybe<BigFloatFilter>;
};

export type BranchProtectionRuleStddevPopulationAggregates = {
  __typename?: 'BranchProtectionRuleStddevPopulationAggregates';
  /** Population standard deviation of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigFloat']['output']>;
};

export type BranchProtectionRuleStddevSampleAggregateFilter = {
  requiredApprovals?: InputMaybe<BigFloatFilter>;
};

export type BranchProtectionRuleStddevSampleAggregates = {
  __typename?: 'BranchProtectionRuleStddevSampleAggregates';
  /** Sample standard deviation of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigFloat']['output']>;
};

export type BranchProtectionRuleSumAggregateFilter = {
  requiredApprovals?: InputMaybe<BigIntFilter>;
};

export type BranchProtectionRuleSumAggregates = {
  __typename?: 'BranchProtectionRuleSumAggregates';
  /** Sum of requiredApprovals across the matching connection */
  requiredApprovals: Scalars['BigInt']['output'];
};

export type BranchProtectionRuleVariancePopulationAggregateFilter = {
  requiredApprovals?: InputMaybe<BigFloatFilter>;
};

export type BranchProtectionRuleVariancePopulationAggregates = {
  __typename?: 'BranchProtectionRuleVariancePopulationAggregates';
  /** Population variance of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigFloat']['output']>;
};

export type BranchProtectionRuleVarianceSampleAggregateFilter = {
  requiredApprovals?: InputMaybe<BigFloatFilter>;
};

export type BranchProtectionRuleVarianceSampleAggregates = {
  __typename?: 'BranchProtectionRuleVarianceSampleAggregates';
  /** Sample variance of requiredApprovals across the matching connection */
  requiredApprovals?: Maybe<Scalars['BigFloat']['output']>;
};

export type Change = Node & {
  __typename?: 'Change';
  commitSha?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  headBranch?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  parentChangeId?: Maybe<Scalars['UUID']['output']>;
  position: Scalars['Int']['output'];
  /** Reads a single `PullRequest` that is related to this `Change`. */
  pullRequest?: Maybe<PullRequest>;
  pullRequestId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Repository` that is related to this `Change`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  /** Reads a single `Stack` that is related to this `Change`. */
  stack?: Maybe<Stack>;
  stackId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `VerificationCheck`. */
  verificationChecks: VerificationCheckConnection;
};


export type ChangeVerificationChecksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VerificationCheckCondition>;
  filter?: InputMaybe<VerificationCheckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationCheckOrderBy>>;
};

export type ChangeAggregates = {
  __typename?: 'ChangeAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<ChangeAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ChangeDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<ChangeMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<ChangeMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<ChangeStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<ChangeStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<ChangeSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<ChangeVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<ChangeVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Change` object types. */
export type ChangeAggregatesFilter = {
  /** Mean average aggregate over matching `Change` objects. */
  average?: InputMaybe<ChangeAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Change` objects. */
  distinctCount?: InputMaybe<ChangeDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Change` object to be included within the aggregate. */
  filter?: InputMaybe<ChangeFilter>;
  /** Maximum aggregate over matching `Change` objects. */
  max?: InputMaybe<ChangeMaxAggregateFilter>;
  /** Minimum aggregate over matching `Change` objects. */
  min?: InputMaybe<ChangeMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Change` objects. */
  stddevPopulation?: InputMaybe<ChangeStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Change` objects. */
  stddevSample?: InputMaybe<ChangeStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Change` objects. */
  sum?: InputMaybe<ChangeSumAggregateFilter>;
  /** Population variance aggregate over matching `Change` objects. */
  variancePopulation?: InputMaybe<ChangeVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Change` objects. */
  varianceSample?: InputMaybe<ChangeVarianceSampleAggregateFilter>;
};

export type ChangeAverageAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type ChangeAverageAggregates = {
  __typename?: 'ChangeAverageAggregates';
  /** Mean average of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

/** A condition to be used against `Change` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ChangeCondition = {
  /** Checks for equality with the object’s `commitSha` field. */
  commitSha?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `headBranch` field. */
  headBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `parentChangeId` field. */
  parentChangeId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `stackId` field. */
  stackId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Change` values. */
export type ChangeConnection = {
  __typename?: 'ChangeConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ChangeAggregates>;
  /** A list of edges which contains the `Change` and cursor to aid in pagination. */
  edges: Array<ChangeEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ChangeAggregates>>;
  /** A list of `Change` objects. */
  nodes: Array<Change>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Change` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Change` values. */
export type ChangeConnectionGroupedAggregatesArgs = {
  groupBy: Array<ChangeGroupBy>;
  having?: InputMaybe<ChangeHavingInput>;
};

export type ChangeDistinctCountAggregateFilter = {
  commitSha?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  headBranch?: InputMaybe<BigIntFilter>;
  parentChangeId?: InputMaybe<BigIntFilter>;
  position?: InputMaybe<BigIntFilter>;
  pullRequestId?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  stackId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type ChangeDistinctCountAggregates = {
  __typename?: 'ChangeDistinctCountAggregates';
  /** Distinct count of commitSha across the matching connection */
  commitSha?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of headBranch across the matching connection */
  headBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of parentChangeId across the matching connection */
  parentChangeId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of position across the matching connection */
  position?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pullRequestId across the matching connection */
  pullRequestId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of stackId across the matching connection */
  stackId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Change` edge in the connection. */
export type ChangeEdge = {
  __typename?: 'ChangeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Change` at the end of the edge. */
  node: Change;
};

/** A filter to be used against `Change` object types. All fields are combined with a logical ‘and.’ */
export type ChangeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ChangeFilter>>;
  /** Filter by the object’s `commitSha` field. */
  commitSha?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headBranch` field. */
  headBranch?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ChangeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ChangeFilter>>;
  /** Filter by the object’s `parentChangeId` field. */
  parentChangeId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `position` field. */
  position?: InputMaybe<IntFilter>;
  /** Filter by the object’s `pullRequest` relation. */
  pullRequest?: InputMaybe<PullRequestFilter>;
  /** A related `pullRequest` exists. */
  pullRequestExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `stack` relation. */
  stack?: InputMaybe<StackFilter>;
  /** Filter by the object’s `stackId` field. */
  stackId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `verificationChecks` relation. */
  verificationChecks?: InputMaybe<ChangeToManyVerificationCheckFilter>;
  /** Some related `verificationChecks` exist. */
  verificationChecksExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Grouping methods for `Change` for usage during aggregation. */
export enum ChangeGroupBy {
  CommitSha = 'COMMIT_SHA',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  HeadBranch = 'HEAD_BRANCH',
  ParentChangeId = 'PARENT_CHANGE_ID',
  Position = 'POSITION',
  PullRequestId = 'PULL_REQUEST_ID',
  RepositoryId = 'REPOSITORY_ID',
  StackId = 'STACK_ID',
  Status = 'STATUS',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type ChangeHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Change` aggregates. */
export type ChangeHavingInput = {
  AND?: InputMaybe<Array<ChangeHavingInput>>;
  OR?: InputMaybe<Array<ChangeHavingInput>>;
  average?: InputMaybe<ChangeHavingAverageInput>;
  distinctCount?: InputMaybe<ChangeHavingDistinctCountInput>;
  max?: InputMaybe<ChangeHavingMaxInput>;
  min?: InputMaybe<ChangeHavingMinInput>;
  stddevPopulation?: InputMaybe<ChangeHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ChangeHavingStddevSampleInput>;
  sum?: InputMaybe<ChangeHavingSumInput>;
  variancePopulation?: InputMaybe<ChangeHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ChangeHavingVarianceSampleInput>;
};

export type ChangeHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ChangeHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Change` */
export type ChangeInput = {
  commitSha?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headBranch?: InputMaybe<Scalars['String']['input']>;
  parentChangeId?: InputMaybe<Scalars['UUID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stackId: Scalars['UUID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ChangeMaxAggregateFilter = {
  position?: InputMaybe<IntFilter>;
};

export type ChangeMaxAggregates = {
  __typename?: 'ChangeMaxAggregates';
  /** Maximum of position across the matching connection */
  position?: Maybe<Scalars['Int']['output']>;
};

export type ChangeMinAggregateFilter = {
  position?: InputMaybe<IntFilter>;
};

export type ChangeMinAggregates = {
  __typename?: 'ChangeMinAggregates';
  /** Minimum of position across the matching connection */
  position?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `Change`. */
export enum ChangeOrderBy {
  CommitShaAsc = 'COMMIT_SHA_ASC',
  CommitShaDesc = 'COMMIT_SHA_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  HeadBranchAsc = 'HEAD_BRANCH_ASC',
  HeadBranchDesc = 'HEAD_BRANCH_DESC',
  Natural = 'NATURAL',
  ParentChangeIdAsc = 'PARENT_CHANGE_ID_ASC',
  ParentChangeIdDesc = 'PARENT_CHANGE_ID_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestIdAsc = 'PULL_REQUEST_ID_ASC',
  PullRequestIdDesc = 'PULL_REQUEST_ID_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StackIdAsc = 'STACK_ID_ASC',
  StackIdDesc = 'STACK_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  VerificationChecksCountAsc = 'VERIFICATION_CHECKS_COUNT_ASC',
  VerificationChecksCountDesc = 'VERIFICATION_CHECKS_COUNT_DESC',
  VerificationChecksDistinctCountCategoryAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CATEGORY_ASC',
  VerificationChecksDistinctCountCategoryDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CATEGORY_DESC',
  VerificationChecksDistinctCountChangeIdAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CHANGE_ID_ASC',
  VerificationChecksDistinctCountChangeIdDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CHANGE_ID_DESC',
  VerificationChecksDistinctCountCreatedAtAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CREATED_AT_ASC',
  VerificationChecksDistinctCountCreatedAtDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_CREATED_AT_DESC',
  VerificationChecksDistinctCountDetailsUrlAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_DETAILS_URL_ASC',
  VerificationChecksDistinctCountDetailsUrlDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_DETAILS_URL_DESC',
  VerificationChecksDistinctCountNameAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_NAME_ASC',
  VerificationChecksDistinctCountNameDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_NAME_DESC',
  VerificationChecksDistinctCountRequiredAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_REQUIRED_ASC',
  VerificationChecksDistinctCountRequiredDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_REQUIRED_DESC',
  VerificationChecksDistinctCountRowIdAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_ROW_ID_ASC',
  VerificationChecksDistinctCountRowIdDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_ROW_ID_DESC',
  VerificationChecksDistinctCountStatusAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_STATUS_ASC',
  VerificationChecksDistinctCountStatusDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_STATUS_DESC',
  VerificationChecksDistinctCountSummaryAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_SUMMARY_ASC',
  VerificationChecksDistinctCountSummaryDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_SUMMARY_DESC',
  VerificationChecksDistinctCountUpdatedAtAsc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_UPDATED_AT_ASC',
  VerificationChecksDistinctCountUpdatedAtDesc = 'VERIFICATION_CHECKS_DISTINCT_COUNT_UPDATED_AT_DESC'
}

/** Represents an update to a `Change`. Fields that are set will be updated. */
export type ChangePatch = {
  commitSha?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headBranch?: InputMaybe<Scalars['String']['input']>;
  parentChangeId?: InputMaybe<Scalars['UUID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stackId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ChangeStddevPopulationAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type ChangeStddevPopulationAggregates = {
  __typename?: 'ChangeStddevPopulationAggregates';
  /** Population standard deviation of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type ChangeStddevSampleAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type ChangeStddevSampleAggregates = {
  __typename?: 'ChangeStddevSampleAggregates';
  /** Sample standard deviation of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type ChangeSumAggregateFilter = {
  position?: InputMaybe<BigIntFilter>;
};

export type ChangeSumAggregates = {
  __typename?: 'ChangeSumAggregates';
  /** Sum of position across the matching connection */
  position: Scalars['BigInt']['output'];
};

/** A filter to be used against many `VerificationCheck` object types. All fields are combined with a logical ‘and.’ */
export type ChangeToManyVerificationCheckFilter = {
  /** Aggregates across related `VerificationCheck` match the filter criteria. */
  aggregates?: InputMaybe<VerificationCheckAggregatesFilter>;
  /** Every related `VerificationCheck` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<VerificationCheckFilter>;
  /** No related `VerificationCheck` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<VerificationCheckFilter>;
  /** Some related `VerificationCheck` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<VerificationCheckFilter>;
};

export type ChangeVariancePopulationAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type ChangeVariancePopulationAggregates = {
  __typename?: 'ChangeVariancePopulationAggregates';
  /** Population variance of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type ChangeVarianceSampleAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type ChangeVarianceSampleAggregates = {
  __typename?: 'ChangeVarianceSampleAggregates';
  /** Sample variance of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

/** A single file that changed between two refs (the cheap file-list entry). */
export type ChangedFile = {
  __typename?: 'ChangedFile';
  /** Number of lines added. */
  additions: Scalars['Int']['output'];
  /** Number of lines removed. */
  deletions: Scalars['Int']['output'];
  /** Whether the file is binary (line counts are skipped for binary files). */
  isBinary: Scalars['Boolean']['output'];
  /** Whether the file is an image, derived from its extension. */
  isImage: Scalars['Boolean']['output'];
  /** The blob oid at the head ref, or null when the file was deleted. */
  newOid?: Maybe<Scalars['String']['output']>;
  /** The blob oid at the base ref, or null when the file was added. */
  oldOid?: Maybe<Scalars['String']['output']>;
  /** The previous path when the file was renamed, otherwise null. */
  oldPath?: Maybe<Scalars['String']['output']>;
  /** The file path at the head ref (or the base ref for deletions). */
  path: Scalars['String']['output'];
  /** How the file changed. */
  status: DiffStatus;
};

/** A Git commit. */
export type Commit = GitObject & {
  __typename?: 'Commit';
  /** The author of the commit. */
  author?: Maybe<GitActor>;
  /** When the commit was authored. */
  authoredDate?: Maybe<Scalars['Datetime']['output']>;
  /** The files changed by this commit relative to its first parent. */
  changedFiles: Array<ChangedFile>;
  /** When the commit was committed. */
  committedDate?: Maybe<Scalars['Datetime']['output']>;
  /** The committer of the commit. */
  committer?: Maybe<GitActor>;
  /** The old and new content for a single changed file. */
  fileDiff?: Maybe<FileDiffContent>;
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
export type CommitFileDiffArgs = {
  path: Scalars['String']['input'];
};


/** A Git commit. */
export type CommitHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `Agent` mutation. */
export type CreateAgentInput = {
  /** The `Agent` to be created by this mutation. */
  agent: AgentInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Agent` mutation. */
export type CreateAgentPayload = {
  __typename?: 'CreateAgentPayload';
  /** The `Agent` that was created by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Agent` mutation. */
export type CreateAgentPayloadAgentEdgeArgs = {
  orderBy?: Array<AgentOrderBy>;
};

/** All input for the create `BranchProtectionRule` mutation. */
export type CreateBranchProtectionRuleInput = {
  /** The `BranchProtectionRule` to be created by this mutation. */
  branchProtectionRule: BranchProtectionRuleInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `BranchProtectionRule` mutation. */
export type CreateBranchProtectionRulePayload = {
  __typename?: 'CreateBranchProtectionRulePayload';
  /** The `BranchProtectionRule` that was created by this mutation. */
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  /** An edge for our `BranchProtectionRule`. May be used by Relay 1. */
  branchProtectionRuleEdge?: Maybe<BranchProtectionRuleEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `BranchProtectionRule` mutation. */
export type CreateBranchProtectionRulePayloadBranchProtectionRuleEdgeArgs = {
  orderBy?: Array<BranchProtectionRuleOrderBy>;
};

/** All input for the create `Change` mutation. */
export type CreateChangeInput = {
  /** The `Change` to be created by this mutation. */
  change: ChangeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Change` mutation. */
export type CreateChangePayload = {
  __typename?: 'CreateChangePayload';
  /** The `Change` that was created by this mutation. */
  change?: Maybe<Change>;
  /** An edge for our `Change`. May be used by Relay 1. */
  changeEdge?: Maybe<ChangeEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Change` mutation. */
export type CreateChangePayloadChangeEdgeArgs = {
  orderBy?: Array<ChangeOrderBy>;
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

/** All input for the create `MergeBatch` mutation. */
export type CreateMergeBatchInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `MergeBatch` to be created by this mutation. */
  mergeBatch: MergeBatchInput;
};

/** The output of our create `MergeBatch` mutation. */
export type CreateMergeBatchPayload = {
  __typename?: 'CreateMergeBatchPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MergeBatch` that was created by this mutation. */
  mergeBatch?: Maybe<MergeBatch>;
  /** An edge for our `MergeBatch`. May be used by Relay 1. */
  mergeBatchEdge?: Maybe<MergeBatchEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MergeBatch` mutation. */
export type CreateMergeBatchPayloadMergeBatchEdgeArgs = {
  orderBy?: Array<MergeBatchOrderBy>;
};

/** All input for the create `MergeQueueEntry` mutation. */
export type CreateMergeQueueEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `MergeQueueEntry` to be created by this mutation. */
  mergeQueueEntry: MergeQueueEntryInput;
};

/** The output of our create `MergeQueueEntry` mutation. */
export type CreateMergeQueueEntryPayload = {
  __typename?: 'CreateMergeQueueEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MergeQueueEntry` that was created by this mutation. */
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
  /** An edge for our `MergeQueueEntry`. May be used by Relay 1. */
  mergeQueueEntryEdge?: Maybe<MergeQueueEntryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `MergeQueueEntry` mutation. */
export type CreateMergeQueueEntryPayloadMergeQueueEntryEdgeArgs = {
  orderBy?: Array<MergeQueueEntryOrderBy>;
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

/** All input for the create `OrganizationMember` mutation. */
export type CreateOrganizationMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OrganizationMember` to be created by this mutation. */
  organizationMember: OrganizationMemberInput;
};

/** The output of our create `OrganizationMember` mutation. */
export type CreateOrganizationMemberPayload = {
  __typename?: 'CreateOrganizationMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `OrganizationMember` that was created by this mutation. */
  organizationMember?: Maybe<OrganizationMember>;
  /** An edge for our `OrganizationMember`. May be used by Relay 1. */
  organizationMemberEdge?: Maybe<OrganizationMemberEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `OrganizationMember` mutation. */
export type CreateOrganizationMemberPayloadOrganizationMemberEdgeArgs = {
  orderBy?: Array<OrganizationMemberOrderBy>;
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

/** Payload for the createPersonalAccessToken mutation. */
export type CreatePersonalAccessTokenPayload = {
  __typename?: 'CreatePersonalAccessTokenPayload';
  /** When the token was created. */
  createdAt: Scalars['Datetime']['output'];
  /** When the token expires, or null if it never expires. */
  expiresAt?: Maybe<Scalars['Datetime']['output']>;
  /** The user-facing token label. */
  name: Scalars['String']['output'];
  /** Furthest operation the token may perform: "read" or "write". */
  permission: Scalars['String']['output'];
  /** The created token row ID. */
  rowId: Scalars['UUID']['output'];
  /**
   * The plaintext token. Returned exactly once, at creation, and never
   * retrievable again. Store it securely.
   */
  token: Scalars['String']['output'];
  /** Short non-secret prefix for display in the UI. */
  tokenPrefix: Scalars['String']['output'];
};

/** All input for the create `Project` mutation. */
export type CreateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Project` to be created by this mutation. */
  project: ProjectInput;
};

/** The output of our create `Project` mutation. */
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was created by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Project` mutation. */
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: Array<ProjectOrderBy>;
};

/** All input for the create `ProjectRepository` mutation. */
export type CreateProjectRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ProjectRepository` to be created by this mutation. */
  projectRepository: ProjectRepositoryInput;
};

/** The output of our create `ProjectRepository` mutation. */
export type CreateProjectRepositoryPayload = {
  __typename?: 'CreateProjectRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `ProjectRepository` that was created by this mutation. */
  projectRepository?: Maybe<ProjectRepository>;
  /** An edge for our `ProjectRepository`. May be used by Relay 1. */
  projectRepositoryEdge?: Maybe<ProjectRepositoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ProjectRepository` mutation. */
export type CreateProjectRepositoryPayloadProjectRepositoryEdgeArgs = {
  orderBy?: Array<ProjectRepositoryOrderBy>;
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

/** All input for the create `Stack` mutation. */
export type CreateStackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Stack` to be created by this mutation. */
  stack: StackInput;
};

/** The output of our create `Stack` mutation. */
export type CreateStackPayload = {
  __typename?: 'CreateStackPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Stack` that was created by this mutation. */
  stack?: Maybe<Stack>;
  /** An edge for our `Stack`. May be used by Relay 1. */
  stackEdge?: Maybe<StackEdge>;
};


/** The output of our create `Stack` mutation. */
export type CreateStackPayloadStackEdgeArgs = {
  orderBy?: Array<StackOrderBy>;
};

/** All input for the create `Topic` mutation. */
export type CreateTopicInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Topic` to be created by this mutation. */
  topic: TopicInput;
};

/** The output of our create `Topic` mutation. */
export type CreateTopicPayload = {
  __typename?: 'CreateTopicPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Topic` that was created by this mutation. */
  topic?: Maybe<Topic>;
  /** An edge for our `Topic`. May be used by Relay 1. */
  topicEdge?: Maybe<TopicEdge>;
};


/** The output of our create `Topic` mutation. */
export type CreateTopicPayloadTopicEdgeArgs = {
  orderBy?: Array<TopicOrderBy>;
};

/** All input for the create `TopicPullRequest` mutation. */
export type CreateTopicPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TopicPullRequest` to be created by this mutation. */
  topicPullRequest: TopicPullRequestInput;
};

/** The output of our create `TopicPullRequest` mutation. */
export type CreateTopicPullRequestPayload = {
  __typename?: 'CreateTopicPullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TopicPullRequest` that was created by this mutation. */
  topicPullRequest?: Maybe<TopicPullRequest>;
  /** An edge for our `TopicPullRequest`. May be used by Relay 1. */
  topicPullRequestEdge?: Maybe<TopicPullRequestEdge>;
};


/** The output of our create `TopicPullRequest` mutation. */
export type CreateTopicPullRequestPayloadTopicPullRequestEdgeArgs = {
  orderBy?: Array<TopicPullRequestOrderBy>;
};

/** All input for the create `VerificationCheck` mutation. */
export type CreateVerificationCheckInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `VerificationCheck` to be created by this mutation. */
  verificationCheck: VerificationCheckInput;
};

/** The output of our create `VerificationCheck` mutation. */
export type CreateVerificationCheckPayload = {
  __typename?: 'CreateVerificationCheckPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VerificationCheck` that was created by this mutation. */
  verificationCheck?: Maybe<VerificationCheck>;
  /** An edge for our `VerificationCheck`. May be used by Relay 1. */
  verificationCheckEdge?: Maybe<VerificationCheckEdge>;
};


/** The output of our create `VerificationCheck` mutation. */
export type CreateVerificationCheckPayloadVerificationCheckEdgeArgs = {
  orderBy?: Array<VerificationCheckOrderBy>;
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

/** All input for the `deleteAgent` mutation. */
export type DeleteAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayload = {
  __typename?: 'DeleteAgentPayload';
  /** The `Agent` that was deleted by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAgentId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayloadAgentEdgeArgs = {
  orderBy?: Array<AgentOrderBy>;
};

/** All input for the `deleteBranchProtectionRule` mutation. */
export type DeleteBranchProtectionRuleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `BranchProtectionRule` mutation. */
export type DeleteBranchProtectionRulePayload = {
  __typename?: 'DeleteBranchProtectionRulePayload';
  /** The `BranchProtectionRule` that was deleted by this mutation. */
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  /** An edge for our `BranchProtectionRule`. May be used by Relay 1. */
  branchProtectionRuleEdge?: Maybe<BranchProtectionRuleEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBranchProtectionRuleId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `BranchProtectionRule` mutation. */
export type DeleteBranchProtectionRulePayloadBranchProtectionRuleEdgeArgs = {
  orderBy?: Array<BranchProtectionRuleOrderBy>;
};

/** All input for the `deleteChange` mutation. */
export type DeleteChangeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Change` mutation. */
export type DeleteChangePayload = {
  __typename?: 'DeleteChangePayload';
  /** The `Change` that was deleted by this mutation. */
  change?: Maybe<Change>;
  /** An edge for our `Change`. May be used by Relay 1. */
  changeEdge?: Maybe<ChangeEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChangeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Change` mutation. */
export type DeleteChangePayloadChangeEdgeArgs = {
  orderBy?: Array<ChangeOrderBy>;
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

/** All input for the `deleteMergeBatch` mutation. */
export type DeleteMergeBatchInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `MergeBatch` mutation. */
export type DeleteMergeBatchPayload = {
  __typename?: 'DeleteMergeBatchPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMergeBatchId?: Maybe<Scalars['ID']['output']>;
  /** The `MergeBatch` that was deleted by this mutation. */
  mergeBatch?: Maybe<MergeBatch>;
  /** An edge for our `MergeBatch`. May be used by Relay 1. */
  mergeBatchEdge?: Maybe<MergeBatchEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MergeBatch` mutation. */
export type DeleteMergeBatchPayloadMergeBatchEdgeArgs = {
  orderBy?: Array<MergeBatchOrderBy>;
};

/** All input for the `deleteMergeQueueEntry` mutation. */
export type DeleteMergeQueueEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `MergeQueueEntry` mutation. */
export type DeleteMergeQueueEntryPayload = {
  __typename?: 'DeleteMergeQueueEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMergeQueueEntryId?: Maybe<Scalars['ID']['output']>;
  /** The `MergeQueueEntry` that was deleted by this mutation. */
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
  /** An edge for our `MergeQueueEntry`. May be used by Relay 1. */
  mergeQueueEntryEdge?: Maybe<MergeQueueEntryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `MergeQueueEntry` mutation. */
export type DeleteMergeQueueEntryPayloadMergeQueueEntryEdgeArgs = {
  orderBy?: Array<MergeQueueEntryOrderBy>;
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

/** All input for the `deleteOrganizationMember` mutation. */
export type DeleteOrganizationMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `OrganizationMember` mutation. */
export type DeleteOrganizationMemberPayload = {
  __typename?: 'DeleteOrganizationMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrganizationMemberId?: Maybe<Scalars['ID']['output']>;
  /** The `OrganizationMember` that was deleted by this mutation. */
  organizationMember?: Maybe<OrganizationMember>;
  /** An edge for our `OrganizationMember`. May be used by Relay 1. */
  organizationMemberEdge?: Maybe<OrganizationMemberEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `OrganizationMember` mutation. */
export type DeleteOrganizationMemberPayloadOrganizationMemberEdgeArgs = {
  orderBy?: Array<OrganizationMemberOrderBy>;
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

/** All input for the `deletePersonalAccessToken` mutation. */
export type DeletePersonalAccessTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `PersonalAccessToken` mutation. */
export type DeletePersonalAccessTokenPayload = {
  __typename?: 'DeletePersonalAccessTokenPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PersonalAccessToken` that was deleted by this mutation. */
  personalAccessToken?: Maybe<PersonalAccessToken>;
  /** An edge for our `PersonalAccessToken`. May be used by Relay 1. */
  personalAccessTokenEdge?: Maybe<PersonalAccessTokenEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PersonalAccessToken` mutation. */
export type DeletePersonalAccessTokenPayloadPersonalAccessTokenEdgeArgs = {
  orderBy?: Array<PersonalAccessTokenOrderBy>;
};

/** All input for the `deleteProject` mutation. */
export type DeleteProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Project` mutation. */
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectId?: Maybe<Scalars['ID']['output']>;
  /** The `Project` that was deleted by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Project` mutation. */
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: Array<ProjectOrderBy>;
};

/** All input for the `deleteProjectRepository` mutation. */
export type DeleteProjectRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `ProjectRepository` mutation. */
export type DeleteProjectRepositoryPayload = {
  __typename?: 'DeleteProjectRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectRepositoryId?: Maybe<Scalars['ID']['output']>;
  /** The `ProjectRepository` that was deleted by this mutation. */
  projectRepository?: Maybe<ProjectRepository>;
  /** An edge for our `ProjectRepository`. May be used by Relay 1. */
  projectRepositoryEdge?: Maybe<ProjectRepositoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ProjectRepository` mutation. */
export type DeleteProjectRepositoryPayloadProjectRepositoryEdgeArgs = {
  orderBy?: Array<ProjectRepositoryOrderBy>;
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

/** All input for the `deleteRepositoryRelationship` mutation. */
export type DeleteRepositoryRelationshipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
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

/** All input for the `deleteStack` mutation. */
export type DeleteStackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Stack` mutation. */
export type DeleteStackPayload = {
  __typename?: 'DeleteStackPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStackId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Stack` that was deleted by this mutation. */
  stack?: Maybe<Stack>;
  /** An edge for our `Stack`. May be used by Relay 1. */
  stackEdge?: Maybe<StackEdge>;
};


/** The output of our delete `Stack` mutation. */
export type DeleteStackPayloadStackEdgeArgs = {
  orderBy?: Array<StackOrderBy>;
};

/** All input for the `deleteTopic` mutation. */
export type DeleteTopicInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `Topic` mutation. */
export type DeleteTopicPayload = {
  __typename?: 'DeleteTopicPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTopicId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Topic` that was deleted by this mutation. */
  topic?: Maybe<Topic>;
  /** An edge for our `Topic`. May be used by Relay 1. */
  topicEdge?: Maybe<TopicEdge>;
};


/** The output of our delete `Topic` mutation. */
export type DeleteTopicPayloadTopicEdgeArgs = {
  orderBy?: Array<TopicOrderBy>;
};

/** All input for the `deleteTopicPullRequest` mutation. */
export type DeleteTopicPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `TopicPullRequest` mutation. */
export type DeleteTopicPullRequestPayload = {
  __typename?: 'DeleteTopicPullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTopicPullRequestId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TopicPullRequest` that was deleted by this mutation. */
  topicPullRequest?: Maybe<TopicPullRequest>;
  /** An edge for our `TopicPullRequest`. May be used by Relay 1. */
  topicPullRequestEdge?: Maybe<TopicPullRequestEdge>;
};


/** The output of our delete `TopicPullRequest` mutation. */
export type DeleteTopicPullRequestPayloadTopicPullRequestEdgeArgs = {
  orderBy?: Array<TopicPullRequestOrderBy>;
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

/** All input for the `deleteVerificationCheck` mutation. */
export type DeleteVerificationCheckInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['UUID']['input'];
};

/** The output of our delete `VerificationCheck` mutation. */
export type DeleteVerificationCheckPayload = {
  __typename?: 'DeleteVerificationCheckPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedVerificationCheckId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VerificationCheck` that was deleted by this mutation. */
  verificationCheck?: Maybe<VerificationCheck>;
  /** An edge for our `VerificationCheck`. May be used by Relay 1. */
  verificationCheckEdge?: Maybe<VerificationCheckEdge>;
};


/** The output of our delete `VerificationCheck` mutation. */
export type DeleteVerificationCheckPayloadVerificationCheckEdgeArgs = {
  orderBy?: Array<VerificationCheckOrderBy>;
};

/** The change status of a file within a diff. */
export enum DiffStatus {
  Added = 'ADDED',
  Copied = 'COPIED',
  Deleted = 'DELETED',
  Modified = 'MODIFIED',
  Renamed = 'RENAMED',
  TypeChanged = 'TYPE_CHANGED'
}

/** Input for discovering a repository's dependencies from its manifest. */
export type DiscoverDependenciesInput = {
  /** The repository to scan. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for the discoverDependencies mutation. */
export type DiscoverDependenciesPayload = {
  __typename?: 'DiscoverDependenciesPayload';
  /** A non-fatal reason discovery produced nothing (e.g. no manifest). */
  error?: Maybe<Scalars['String']['output']>;
  /** The number of external (non-Arbor) package dependencies detected. */
  externalDependencies?: Maybe<Scalars['Int']['output']>;
  /** The number of internal repository-to-repository edges detected. */
  internalDependencies?: Maybe<Scalars['Int']['output']>;
};

/** Input for enqueuing a stack onto its repository's merge queue. */
export type EnqueueStackInput = {
  /** The stack ID to enqueue. */
  stackId: Scalars['UUID']['input'];
};

/** Payload for the enqueueStack mutation. */
export type EnqueueStackPayload = {
  __typename?: 'EnqueueStackPayload';
  /** True when an active entry already existed, so no new entry was inserted. */
  alreadyQueued?: Maybe<Scalars['Boolean']['output']>;
  /** The merge queue entry for the stack. */
  entryId?: Maybe<Scalars['UUID']['output']>;
  /** Error message if the stack could not be enqueued. */
  error?: Maybe<Scalars['String']['output']>;
  /** Whether the stack was enqueued (or already had an active entry). */
  success: Scalars['Boolean']['output'];
};

export type ExternalDependency = Node & {
  __typename?: 'ExternalDependency';
  createdAt: Scalars['Datetime']['output'];
  detectionSource: Scalars['String']['output'];
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
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
  detectionSource?: InputMaybe<StringFilter>;
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
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
  DetectionSourceAsc = 'DETECTION_SOURCE_ASC',
  DetectionSourceDesc = 'DETECTION_SOURCE_DESC',
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
  packageManager?: InputMaybe<Scalars['String']['input']>;
  packageName?: InputMaybe<Scalars['String']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  versionConstraint?: InputMaybe<Scalars['String']['input']>;
};

/** The old and new content of a single file, fetched lazily per file. */
export type FileDiffContent = {
  __typename?: 'FileDiffContent';
  /** Whether the file is binary. */
  isBinary: Scalars['Boolean']['output'];
  /** UTF-8 content at the head ref, or null when deleted or binary. */
  newText?: Maybe<Scalars['String']['output']>;
  /** UTF-8 content at the base ref, or null when added or binary. */
  oldText?: Maybe<Scalars['String']['output']>;
  /** The file path. */
  path: Scalars['String']['output'];
  /** How the file changed. */
  status: DiffStatus;
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

export type MergeBatch = Node & {
  __typename?: 'MergeBatch';
  ciStatus: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `MergeQueueEntry`. */
  mergeQueueEntriesByBatchId: MergeQueueEntryConnection;
  /** Reads a single `Repository` that is related to this `MergeBatch`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  speculativeBranch?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};


export type MergeBatchMergeQueueEntriesByBatchIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeQueueEntryCondition>;
  filter?: InputMaybe<MergeQueueEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeQueueEntryOrderBy>>;
};

export type MergeBatchAggregates = {
  __typename?: 'MergeBatchAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<MergeBatchDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `MergeBatch` object types. */
export type MergeBatchAggregatesFilter = {
  /** Distinct count aggregate over matching `MergeBatch` objects. */
  distinctCount?: InputMaybe<MergeBatchDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `MergeBatch` object to be included within the aggregate. */
  filter?: InputMaybe<MergeBatchFilter>;
};

/**
 * A condition to be used against `MergeBatch` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MergeBatchCondition = {
  /** Checks for equality with the object’s `ciStatus` field. */
  ciStatus?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `speculativeBranch` field. */
  speculativeBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `MergeBatch` values. */
export type MergeBatchConnection = {
  __typename?: 'MergeBatchConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<MergeBatchAggregates>;
  /** A list of edges which contains the `MergeBatch` and cursor to aid in pagination. */
  edges: Array<MergeBatchEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<MergeBatchAggregates>>;
  /** A list of `MergeBatch` objects. */
  nodes: Array<MergeBatch>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MergeBatch` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `MergeBatch` values. */
export type MergeBatchConnectionGroupedAggregatesArgs = {
  groupBy: Array<MergeBatchGroupBy>;
  having?: InputMaybe<MergeBatchHavingInput>;
};

export type MergeBatchDistinctCountAggregateFilter = {
  ciStatus?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  speculativeBranch?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type MergeBatchDistinctCountAggregates = {
  __typename?: 'MergeBatchDistinctCountAggregates';
  /** Distinct count of ciStatus across the matching connection */
  ciStatus?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of speculativeBranch across the matching connection */
  speculativeBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `MergeBatch` edge in the connection. */
export type MergeBatchEdge = {
  __typename?: 'MergeBatchEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MergeBatch` at the end of the edge. */
  node: MergeBatch;
};

/** A filter to be used against `MergeBatch` object types. All fields are combined with a logical ‘and.’ */
export type MergeBatchFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MergeBatchFilter>>;
  /** Filter by the object’s `ciStatus` field. */
  ciStatus?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `mergeQueueEntriesByBatchId` relation. */
  mergeQueueEntriesByBatchId?: InputMaybe<MergeBatchToManyMergeQueueEntryFilter>;
  /** Some related `mergeQueueEntriesByBatchId` exist. */
  mergeQueueEntriesByBatchIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<MergeBatchFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MergeBatchFilter>>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `speculativeBranch` field. */
  speculativeBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `MergeBatch` for usage during aggregation. */
export enum MergeBatchGroupBy {
  CiStatus = 'CI_STATUS',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  RepositoryId = 'REPOSITORY_ID',
  SpeculativeBranch = 'SPECULATIVE_BRANCH',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type MergeBatchHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `MergeBatch` aggregates. */
export type MergeBatchHavingInput = {
  AND?: InputMaybe<Array<MergeBatchHavingInput>>;
  OR?: InputMaybe<Array<MergeBatchHavingInput>>;
  average?: InputMaybe<MergeBatchHavingAverageInput>;
  distinctCount?: InputMaybe<MergeBatchHavingDistinctCountInput>;
  max?: InputMaybe<MergeBatchHavingMaxInput>;
  min?: InputMaybe<MergeBatchHavingMinInput>;
  stddevPopulation?: InputMaybe<MergeBatchHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<MergeBatchHavingStddevSampleInput>;
  sum?: InputMaybe<MergeBatchHavingSumInput>;
  variancePopulation?: InputMaybe<MergeBatchHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<MergeBatchHavingVarianceSampleInput>;
};

export type MergeBatchHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeBatchHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `MergeBatch` */
export type MergeBatchInput = {
  ciStatus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  speculativeBranch?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `MergeBatch`. */
export enum MergeBatchOrderBy {
  CiStatusAsc = 'CI_STATUS_ASC',
  CiStatusDesc = 'CI_STATUS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  MergeQueueEntriesByBatchIdAveragePositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_AVERAGE_POSITION_ASC',
  MergeQueueEntriesByBatchIdAveragePositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_AVERAGE_POSITION_DESC',
  MergeQueueEntriesByBatchIdCountAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_COUNT_ASC',
  MergeQueueEntriesByBatchIdCountDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_COUNT_DESC',
  MergeQueueEntriesByBatchIdDistinctCountBatchIdAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_BATCH_ID_ASC',
  MergeQueueEntriesByBatchIdDistinctCountBatchIdDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_BATCH_ID_DESC',
  MergeQueueEntriesByBatchIdDistinctCountCreatedAtAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  MergeQueueEntriesByBatchIdDistinctCountCreatedAtDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  MergeQueueEntriesByBatchIdDistinctCountEnqueuedAtAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_ENQUEUED_AT_ASC',
  MergeQueueEntriesByBatchIdDistinctCountEnqueuedAtDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_ENQUEUED_AT_DESC',
  MergeQueueEntriesByBatchIdDistinctCountPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_POSITION_ASC',
  MergeQueueEntriesByBatchIdDistinctCountPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_POSITION_DESC',
  MergeQueueEntriesByBatchIdDistinctCountPullRequestIdAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  MergeQueueEntriesByBatchIdDistinctCountPullRequestIdDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  MergeQueueEntriesByBatchIdDistinctCountRepositoryIdAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  MergeQueueEntriesByBatchIdDistinctCountRepositoryIdDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  MergeQueueEntriesByBatchIdDistinctCountRowIdAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_ROW_ID_ASC',
  MergeQueueEntriesByBatchIdDistinctCountRowIdDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_ROW_ID_DESC',
  MergeQueueEntriesByBatchIdDistinctCountStackIdAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_STACK_ID_ASC',
  MergeQueueEntriesByBatchIdDistinctCountStackIdDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_STACK_ID_DESC',
  MergeQueueEntriesByBatchIdDistinctCountStateAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_STATE_ASC',
  MergeQueueEntriesByBatchIdDistinctCountStateDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_STATE_DESC',
  MergeQueueEntriesByBatchIdDistinctCountTargetBranchAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  MergeQueueEntriesByBatchIdDistinctCountTargetBranchDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  MergeQueueEntriesByBatchIdDistinctCountUpdatedAtAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  MergeQueueEntriesByBatchIdDistinctCountUpdatedAtDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  MergeQueueEntriesByBatchIdMaxPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_MAX_POSITION_ASC',
  MergeQueueEntriesByBatchIdMaxPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_MAX_POSITION_DESC',
  MergeQueueEntriesByBatchIdMinPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_MIN_POSITION_ASC',
  MergeQueueEntriesByBatchIdMinPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_MIN_POSITION_DESC',
  MergeQueueEntriesByBatchIdStddevPopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_STDDEV_POPULATION_POSITION_ASC',
  MergeQueueEntriesByBatchIdStddevPopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_STDDEV_POPULATION_POSITION_DESC',
  MergeQueueEntriesByBatchIdStddevSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_STDDEV_SAMPLE_POSITION_ASC',
  MergeQueueEntriesByBatchIdStddevSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_STDDEV_SAMPLE_POSITION_DESC',
  MergeQueueEntriesByBatchIdSumPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_SUM_POSITION_ASC',
  MergeQueueEntriesByBatchIdSumPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_SUM_POSITION_DESC',
  MergeQueueEntriesByBatchIdVariancePopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_VARIANCE_POPULATION_POSITION_ASC',
  MergeQueueEntriesByBatchIdVariancePopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_VARIANCE_POPULATION_POSITION_DESC',
  MergeQueueEntriesByBatchIdVarianceSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_VARIANCE_SAMPLE_POSITION_ASC',
  MergeQueueEntriesByBatchIdVarianceSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_BY_BATCH_ID_VARIANCE_SAMPLE_POSITION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SpeculativeBranchAsc = 'SPECULATIVE_BRANCH_ASC',
  SpeculativeBranchDesc = 'SPECULATIVE_BRANCH_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `MergeBatch`. Fields that are set will be updated. */
export type MergeBatchPatch = {
  ciStatus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  speculativeBranch?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against many `MergeQueueEntry` object types. All fields are combined with a logical ‘and.’ */
export type MergeBatchToManyMergeQueueEntryFilter = {
  /** Aggregates across related `MergeQueueEntry` match the filter criteria. */
  aggregates?: InputMaybe<MergeQueueEntryAggregatesFilter>;
  /** Every related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MergeQueueEntryFilter>;
  /** No related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MergeQueueEntryFilter>;
  /** Some related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MergeQueueEntryFilter>;
};

/** Input for merging a change onto its stack base branch. */
export type MergeChangeInput = {
  /** The change ID to merge. */
  changeId: Scalars['UUID']['input'];
};

/** Payload for the mergeChange mutation. */
export type MergeChangePayload = {
  __typename?: 'MergeChangePayload';
  /** Names of required checks blocking the merge, when it was not mergeable. */
  blockingChecks?: Maybe<Array<Scalars['String']['output']>>;
  /** The change that was merged. */
  changeId?: Maybe<Scalars['UUID']['output']>;
  /** Always true: the base-branch ref advance is deferred to the merge queue. */
  deferred: Scalars['Boolean']['output'];
  /** Error message if the merge did not proceed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The landing shape: "fast-forward" or "merge-commit". */
  mode?: Maybe<Scalars['String']['output']>;
  /** The commit the merge intent was recorded against. */
  recordedTargetOid?: Maybe<Scalars['String']['output']>;
  /** Whether the merge intent was recorded successfully. */
  success: Scalars['Boolean']['output'];
};

/** Input for merging a pull request. */
export type MergePullRequestInput = {
  /** Optional custom commit message. If not provided, a default message is used. */
  commitMessage?: InputMaybe<Scalars['String']['input']>;
  /** The pull request ID. */
  pullRequestId: Scalars['UUID']['input'];
};

/** Payload for mergePullRequest mutation. */
export type MergePullRequestPayload = {
  __typename?: 'MergePullRequestPayload';
  /** Error message if merge failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The merge commit SHA. */
  mergeCommitSha?: Maybe<Scalars['String']['output']>;
  /** Whether the merge was successful. */
  success: Scalars['Boolean']['output'];
};

export type MergeQueueEntry = Node & {
  __typename?: 'MergeQueueEntry';
  /** Reads a single `MergeBatch` that is related to this `MergeQueueEntry`. */
  batch?: Maybe<MergeBatch>;
  batchId?: Maybe<Scalars['UUID']['output']>;
  createdAt: Scalars['Datetime']['output'];
  enqueuedAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  /** Reads a single `PullRequest` that is related to this `MergeQueueEntry`. */
  pullRequest?: Maybe<PullRequest>;
  pullRequestId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Repository` that is related to this `MergeQueueEntry`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  /** Reads a single `Stack` that is related to this `MergeQueueEntry`. */
  stack?: Maybe<Stack>;
  stackId?: Maybe<Scalars['UUID']['output']>;
  state: Scalars['String']['output'];
  targetBranch: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

export type MergeQueueEntryAggregates = {
  __typename?: 'MergeQueueEntryAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<MergeQueueEntryAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<MergeQueueEntryDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<MergeQueueEntryMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<MergeQueueEntryMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<MergeQueueEntryStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<MergeQueueEntryStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<MergeQueueEntrySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<MergeQueueEntryVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<MergeQueueEntryVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `MergeQueueEntry` object types. */
export type MergeQueueEntryAggregatesFilter = {
  /** Mean average aggregate over matching `MergeQueueEntry` objects. */
  average?: InputMaybe<MergeQueueEntryAverageAggregateFilter>;
  /** Distinct count aggregate over matching `MergeQueueEntry` objects. */
  distinctCount?: InputMaybe<MergeQueueEntryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `MergeQueueEntry` object to be included within the aggregate. */
  filter?: InputMaybe<MergeQueueEntryFilter>;
  /** Maximum aggregate over matching `MergeQueueEntry` objects. */
  max?: InputMaybe<MergeQueueEntryMaxAggregateFilter>;
  /** Minimum aggregate over matching `MergeQueueEntry` objects. */
  min?: InputMaybe<MergeQueueEntryMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `MergeQueueEntry` objects. */
  stddevPopulation?: InputMaybe<MergeQueueEntryStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `MergeQueueEntry` objects. */
  stddevSample?: InputMaybe<MergeQueueEntryStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `MergeQueueEntry` objects. */
  sum?: InputMaybe<MergeQueueEntrySumAggregateFilter>;
  /** Population variance aggregate over matching `MergeQueueEntry` objects. */
  variancePopulation?: InputMaybe<MergeQueueEntryVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `MergeQueueEntry` objects. */
  varianceSample?: InputMaybe<MergeQueueEntryVarianceSampleAggregateFilter>;
};

export type MergeQueueEntryAverageAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type MergeQueueEntryAverageAggregates = {
  __typename?: 'MergeQueueEntryAverageAggregates';
  /** Mean average of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `MergeQueueEntry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type MergeQueueEntryCondition = {
  /** Checks for equality with the object’s `batchId` field. */
  batchId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `enqueuedAt` field. */
  enqueuedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `stackId` field. */
  stackId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `targetBranch` field. */
  targetBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `MergeQueueEntry` values. */
export type MergeQueueEntryConnection = {
  __typename?: 'MergeQueueEntryConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<MergeQueueEntryAggregates>;
  /** A list of edges which contains the `MergeQueueEntry` and cursor to aid in pagination. */
  edges: Array<MergeQueueEntryEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<MergeQueueEntryAggregates>>;
  /** A list of `MergeQueueEntry` objects. */
  nodes: Array<MergeQueueEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MergeQueueEntry` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `MergeQueueEntry` values. */
export type MergeQueueEntryConnectionGroupedAggregatesArgs = {
  groupBy: Array<MergeQueueEntryGroupBy>;
  having?: InputMaybe<MergeQueueEntryHavingInput>;
};

export type MergeQueueEntryDistinctCountAggregateFilter = {
  batchId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  enqueuedAt?: InputMaybe<BigIntFilter>;
  position?: InputMaybe<BigIntFilter>;
  pullRequestId?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  stackId?: InputMaybe<BigIntFilter>;
  state?: InputMaybe<BigIntFilter>;
  targetBranch?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type MergeQueueEntryDistinctCountAggregates = {
  __typename?: 'MergeQueueEntryDistinctCountAggregates';
  /** Distinct count of batchId across the matching connection */
  batchId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of enqueuedAt across the matching connection */
  enqueuedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of position across the matching connection */
  position?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pullRequestId across the matching connection */
  pullRequestId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of stackId across the matching connection */
  stackId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of targetBranch across the matching connection */
  targetBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `MergeQueueEntry` edge in the connection. */
export type MergeQueueEntryEdge = {
  __typename?: 'MergeQueueEntryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MergeQueueEntry` at the end of the edge. */
  node: MergeQueueEntry;
};

/** A filter to be used against `MergeQueueEntry` object types. All fields are combined with a logical ‘and.’ */
export type MergeQueueEntryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MergeQueueEntryFilter>>;
  /** Filter by the object’s `batch` relation. */
  batch?: InputMaybe<MergeBatchFilter>;
  /** A related `batch` exists. */
  batchExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `batchId` field. */
  batchId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `enqueuedAt` field. */
  enqueuedAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MergeQueueEntryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MergeQueueEntryFilter>>;
  /** Filter by the object’s `position` field. */
  position?: InputMaybe<IntFilter>;
  /** Filter by the object’s `pullRequest` relation. */
  pullRequest?: InputMaybe<PullRequestFilter>;
  /** A related `pullRequest` exists. */
  pullRequestExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `stack` relation. */
  stack?: InputMaybe<StackFilter>;
  /** A related `stack` exists. */
  stackExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `stackId` field. */
  stackId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `targetBranch` field. */
  targetBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `MergeQueueEntry` for usage during aggregation. */
export enum MergeQueueEntryGroupBy {
  BatchId = 'BATCH_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  EnqueuedAt = 'ENQUEUED_AT',
  EnqueuedAtTruncatedToDay = 'ENQUEUED_AT_TRUNCATED_TO_DAY',
  EnqueuedAtTruncatedToHour = 'ENQUEUED_AT_TRUNCATED_TO_HOUR',
  Position = 'POSITION',
  PullRequestId = 'PULL_REQUEST_ID',
  RepositoryId = 'REPOSITORY_ID',
  StackId = 'STACK_ID',
  State = 'STATE',
  TargetBranch = 'TARGET_BRANCH',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type MergeQueueEntryHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `MergeQueueEntry` aggregates. */
export type MergeQueueEntryHavingInput = {
  AND?: InputMaybe<Array<MergeQueueEntryHavingInput>>;
  OR?: InputMaybe<Array<MergeQueueEntryHavingInput>>;
  average?: InputMaybe<MergeQueueEntryHavingAverageInput>;
  distinctCount?: InputMaybe<MergeQueueEntryHavingDistinctCountInput>;
  max?: InputMaybe<MergeQueueEntryHavingMaxInput>;
  min?: InputMaybe<MergeQueueEntryHavingMinInput>;
  stddevPopulation?: InputMaybe<MergeQueueEntryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<MergeQueueEntryHavingStddevSampleInput>;
  sum?: InputMaybe<MergeQueueEntryHavingSumInput>;
  variancePopulation?: InputMaybe<MergeQueueEntryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<MergeQueueEntryHavingVarianceSampleInput>;
};

export type MergeQueueEntryHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type MergeQueueEntryHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  enqueuedAt?: InputMaybe<HavingDatetimeFilter>;
  position?: InputMaybe<HavingIntFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `MergeQueueEntry` */
export type MergeQueueEntryInput = {
  batchId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  enqueuedAt?: InputMaybe<Scalars['Datetime']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stackId?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  targetBranch?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MergeQueueEntryMaxAggregateFilter = {
  position?: InputMaybe<IntFilter>;
};

export type MergeQueueEntryMaxAggregates = {
  __typename?: 'MergeQueueEntryMaxAggregates';
  /** Maximum of position across the matching connection */
  position?: Maybe<Scalars['Int']['output']>;
};

export type MergeQueueEntryMinAggregateFilter = {
  position?: InputMaybe<IntFilter>;
};

export type MergeQueueEntryMinAggregates = {
  __typename?: 'MergeQueueEntryMinAggregates';
  /** Minimum of position across the matching connection */
  position?: Maybe<Scalars['Int']['output']>;
};

/** Methods to use when ordering `MergeQueueEntry`. */
export enum MergeQueueEntryOrderBy {
  BatchIdAsc = 'BATCH_ID_ASC',
  BatchIdDesc = 'BATCH_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EnqueuedAtAsc = 'ENQUEUED_AT_ASC',
  EnqueuedAtDesc = 'ENQUEUED_AT_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestIdAsc = 'PULL_REQUEST_ID_ASC',
  PullRequestIdDesc = 'PULL_REQUEST_ID_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StackIdAsc = 'STACK_ID_ASC',
  StackIdDesc = 'STACK_ID_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TargetBranchAsc = 'TARGET_BRANCH_ASC',
  TargetBranchDesc = 'TARGET_BRANCH_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `MergeQueueEntry`. Fields that are set will be updated. */
export type MergeQueueEntryPatch = {
  batchId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  enqueuedAt?: InputMaybe<Scalars['Datetime']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  stackId?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  targetBranch?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Result of processing a single merge queue entry. */
export type MergeQueueEntryResult = {
  __typename?: 'MergeQueueEntryResult';
  /** Names of required checks blocking the entry, when it was gated. */
  blockingChecks?: Maybe<Array<Scalars['String']['output']>>;
  /** A generic explanation when the entry was blocked or skipped. */
  detail?: Maybe<Scalars['String']['output']>;
  /** The merge queue entry that was processed. */
  entryId: Scalars['UUID']['output'];
  /** The changes that landed during this pass, bottom-up. */
  mergedChangeIds: Array<Scalars['UUID']['output']>;
  /** The stack the entry references, when it is a stack entry. */
  stackId?: Maybe<Scalars['UUID']['output']>;
  /** The entry's status after this pass: "merged", "blocked" or "skipped". */
  status: Scalars['String']['output'];
};

export type MergeQueueEntryStddevPopulationAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type MergeQueueEntryStddevPopulationAggregates = {
  __typename?: 'MergeQueueEntryStddevPopulationAggregates';
  /** Population standard deviation of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type MergeQueueEntryStddevSampleAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type MergeQueueEntryStddevSampleAggregates = {
  __typename?: 'MergeQueueEntryStddevSampleAggregates';
  /** Sample standard deviation of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type MergeQueueEntrySumAggregateFilter = {
  position?: InputMaybe<BigIntFilter>;
};

export type MergeQueueEntrySumAggregates = {
  __typename?: 'MergeQueueEntrySumAggregates';
  /** Sum of position across the matching connection */
  position: Scalars['BigInt']['output'];
};

export type MergeQueueEntryVariancePopulationAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type MergeQueueEntryVariancePopulationAggregates = {
  __typename?: 'MergeQueueEntryVariancePopulationAggregates';
  /** Population variance of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

export type MergeQueueEntryVarianceSampleAggregateFilter = {
  position?: InputMaybe<BigFloatFilter>;
};

export type MergeQueueEntryVarianceSampleAggregates = {
  __typename?: 'MergeQueueEntryVarianceSampleAggregates';
  /** Sample variance of position across the matching connection */
  position?: Maybe<Scalars['BigFloat']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Close an open pull request without merging it. Requires the repository
   * owner, a write/admin collaborator, or the pull request's author. A merged
   * pull request cannot be closed.
   */
  closePullRequest?: Maybe<SetPullRequestStatePayload>;
  /** Creates a single `Agent`. */
  createAgent?: Maybe<CreateAgentPayload>;
  /** Creates a single `BranchProtectionRule`. */
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>;
  /** Creates a single `Change`. */
  createChange?: Maybe<CreateChangePayload>;
  /** Creates a single `ExternalDependency`. */
  createExternalDependency?: Maybe<CreateExternalDependencyPayload>;
  /** Creates a single `MergeBatch`. */
  createMergeBatch?: Maybe<CreateMergeBatchPayload>;
  /** Creates a single `MergeQueueEntry`. */
  createMergeQueueEntry?: Maybe<CreateMergeQueueEntryPayload>;
  /** Creates a single `Organization`. */
  createOrganization?: Maybe<CreateOrganizationPayload>;
  /** Creates a single `OrganizationMember`. */
  createOrganizationMember?: Maybe<CreateOrganizationMemberPayload>;
  /**
   * Create a personal access token for the authenticated user.
   * The plaintext token is returned once in the payload and never again.
   */
  createPersonalAccessToken?: Maybe<CreatePersonalAccessTokenPayload>;
  /** Creates a single `Project`. */
  createProject?: Maybe<CreateProjectPayload>;
  /** Creates a single `ProjectRepository`. */
  createProjectRepository?: Maybe<CreateProjectRepositoryPayload>;
  /** Creates a single `PullRequest`. */
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  /** Creates a single `PullRequestComment`. */
  createPullRequestComment?: Maybe<CreatePullRequestCommentPayload>;
  /** Creates a single `PullRequestReview`. */
  createPullRequestReview?: Maybe<CreatePullRequestReviewPayload>;
  /** Create a new ref (branch or tag). */
  createRef?: Maybe<CreateRefPayload>;
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
  /** Creates a single `Stack`. */
  createStack?: Maybe<CreateStackPayload>;
  /** Creates a single `Topic`. */
  createTopic?: Maybe<CreateTopicPayload>;
  /** Creates a single `TopicPullRequest`. */
  createTopicPullRequest?: Maybe<CreateTopicPullRequestPayload>;
  /** Creates a single `VerificationCheck`. */
  createVerificationCheck?: Maybe<CreateVerificationCheckPayload>;
  /** Deletes a single `Agent` using a unique key. */
  deleteAgent?: Maybe<DeleteAgentPayload>;
  /** Deletes a single `BranchProtectionRule` using a unique key. */
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>;
  /** Deletes a single `Change` using a unique key. */
  deleteChange?: Maybe<DeleteChangePayload>;
  /** Deletes a single `ExternalDependency` using a unique key. */
  deleteExternalDependency?: Maybe<DeleteExternalDependencyPayload>;
  /** Deletes a single `MergeBatch` using a unique key. */
  deleteMergeBatch?: Maybe<DeleteMergeBatchPayload>;
  /** Deletes a single `MergeQueueEntry` using a unique key. */
  deleteMergeQueueEntry?: Maybe<DeleteMergeQueueEntryPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `OrganizationMember` using a unique key. */
  deleteOrganizationMember?: Maybe<DeleteOrganizationMemberPayload>;
  /** Deletes a single `PersonalAccessToken` using a unique key. */
  deletePersonalAccessToken?: Maybe<DeletePersonalAccessTokenPayload>;
  /** Deletes a single `Project` using a unique key. */
  deleteProject?: Maybe<DeleteProjectPayload>;
  /** Deletes a single `ProjectRepository` using a unique key. */
  deleteProjectRepository?: Maybe<DeleteProjectRepositoryPayload>;
  /** Deletes a single `PullRequest` using a unique key. */
  deletePullRequest?: Maybe<DeletePullRequestPayload>;
  /** Deletes a single `PullRequestComment` using a unique key. */
  deletePullRequestComment?: Maybe<DeletePullRequestCommentPayload>;
  /** Deletes a single `PullRequestReview` using a unique key. */
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  /** Delete a ref (branch or tag). */
  deleteRef?: Maybe<DeleteRefPayload>;
  /** Deletes a single `Repository` using a unique key. */
  deleteRepository?: Maybe<DeleteRepositoryPayload>;
  /** Deletes a single `RepositoryCollaborator` using a unique key. */
  deleteRepositoryCollaborator?: Maybe<DeleteRepositoryCollaboratorPayload>;
  /** Deletes a single `RepositoryRelationship` using a unique key. */
  deleteRepositoryRelationship?: Maybe<DeleteRepositoryRelationshipPayload>;
  /** Deletes a single `RepositoryRelationshipMetadatum` using a unique key. */
  deleteRepositoryRelationshipMetadatum?: Maybe<DeleteRepositoryRelationshipMetadatumPayload>;
  /** Deletes a single `RepositoryRelationshipType` using a unique key. */
  deleteRepositoryRelationshipType?: Maybe<DeleteRepositoryRelationshipTypePayload>;
  /** Deletes a single `Stack` using a unique key. */
  deleteStack?: Maybe<DeleteStackPayload>;
  /** Deletes a single `Topic` using a unique key. */
  deleteTopic?: Maybe<DeleteTopicPayload>;
  /** Deletes a single `TopicPullRequest` using a unique key. */
  deleteTopicPullRequest?: Maybe<DeleteTopicPullRequestPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `VerificationCheck` using a unique key. */
  deleteVerificationCheck?: Maybe<DeleteVerificationCheckPayload>;
  /**
   * Scan a repository's package manifest at its default branch and reconcile
   * its dependency graph, replacing previously auto-detected dependencies.
   */
  discoverDependencies?: Maybe<DiscoverDependenciesPayload>;
  /**
   * Enqueue a stack onto its repository's merge queue.
   * Idempotent: an already-queued stack returns its existing entry. Requires
   * write access to the repository.
   */
  enqueueStack?: Maybe<EnqueueStackPayload>;
  /**
   * Initialize git storage for a repository.
   * Called after the repository record is created in the database.
   */
  initializeRepository?: Maybe<InitializeRepositoryPayload>;
  /**
   * Merge a change onto its stack base branch.
   * Only the bottom mergeable change of a stack can be merged, and only when
   * every required check has passed. Requires write access to the repository.
   */
  mergeChange?: Maybe<MergeChangePayload>;
  /**
   * Merge a pull request into its target branch.
   * Requires write access to the repository.
   */
  mergePullRequest?: Maybe<MergePullRequestPayload>;
  /**
   * Open a pull request from a source branch into a target branch. Assigns
   * the next per-repository number and records the authenticated user as
   * author. Requires write access; both branches must already exist.
   */
  openPullRequest?: Maybe<OpenPullRequestPayload>;
  /**
   * Process a repository's merge queue with one serial pass, landing the
   * changes it safely can through the existing merge path. Requires write
   * access to the repository.
   */
  processMergeQueue?: Maybe<ProcessMergeQueuePayload>;
  /**
   * Apply a repository's arbor.project.json, linking it to the projects it
   * declares (and its owner holds) and unlinking descriptor memberships it no
   * longer declares. Manually added memberships are left untouched.
   */
  reconcileProjectMembership?: Maybe<ReconcileProjectMembershipPayload>;
  /**
   * Rename a repository, moving its on-disk git storage to match the new
   * slug so the database row and storage never diverge. Requires the
   * repository owner or an admin collaborator.
   */
  renameRepository?: Maybe<RenameRepositoryPayload>;
  /**
   * Reopen a closed pull request. Requires the repository owner, a
   * write/admin collaborator, or the pull request's author. A merged pull
   * request cannot be reopened.
   */
  reopenPullRequest?: Maybe<SetPullRequestStatePayload>;
  /**
   * Submit (or re-submit after a decline) the authenticated user's arbor
   * closed-beta tester application. Requires accepting the beta terms.
   */
  submitTesterApplication?: Maybe<SubmitTesterApplicationPayload>;
  /** Updates a single `Agent` using a unique key and a patch. */
  updateAgent?: Maybe<UpdateAgentPayload>;
  /** Updates a single `BranchProtectionRule` using a unique key and a patch. */
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>;
  /** Updates a single `Change` using a unique key and a patch. */
  updateChange?: Maybe<UpdateChangePayload>;
  /** Updates a single `ExternalDependency` using a unique key and a patch. */
  updateExternalDependency?: Maybe<UpdateExternalDependencyPayload>;
  /** Updates a single `MergeBatch` using a unique key and a patch. */
  updateMergeBatch?: Maybe<UpdateMergeBatchPayload>;
  /** Updates a single `MergeQueueEntry` using a unique key and a patch. */
  updateMergeQueueEntry?: Maybe<UpdateMergeQueueEntryPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `OrganizationMember` using a unique key and a patch. */
  updateOrganizationMember?: Maybe<UpdateOrganizationMemberPayload>;
  /** Updates a single `Project` using a unique key and a patch. */
  updateProject?: Maybe<UpdateProjectPayload>;
  /** Updates a single `ProjectRepository` using a unique key and a patch. */
  updateProjectRepository?: Maybe<UpdateProjectRepositoryPayload>;
  /** Updates a single `PullRequest` using a unique key and a patch. */
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  /** Updates a single `PullRequestComment` using a unique key and a patch. */
  updatePullRequestComment?: Maybe<UpdatePullRequestCommentPayload>;
  /** Updates a single `PullRequestReview` using a unique key and a patch. */
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  /** Updates a single `Repository` using a unique key and a patch. */
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  /** Updates a single `RepositoryCollaborator` using a unique key and a patch. */
  updateRepositoryCollaborator?: Maybe<UpdateRepositoryCollaboratorPayload>;
  /** Updates a single `RepositoryRelationship` using a unique key and a patch. */
  updateRepositoryRelationship?: Maybe<UpdateRepositoryRelationshipPayload>;
  /** Updates a single `RepositoryRelationshipMetadatum` using a unique key and a patch. */
  updateRepositoryRelationshipMetadatum?: Maybe<UpdateRepositoryRelationshipMetadatumPayload>;
  /** Updates a single `RepositoryRelationshipType` using a unique key and a patch. */
  updateRepositoryRelationshipType?: Maybe<UpdateRepositoryRelationshipTypePayload>;
  /** Updates a single `Stack` using a unique key and a patch. */
  updateStack?: Maybe<UpdateStackPayload>;
  /** Updates a single `Topic` using a unique key and a patch. */
  updateTopic?: Maybe<UpdateTopicPayload>;
  /** Updates a single `TopicPullRequest` using a unique key and a patch. */
  updateTopicPullRequest?: Maybe<UpdateTopicPullRequestPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `VerificationCheck` using a unique key and a patch. */
  updateVerificationCheck?: Maybe<UpdateVerificationCheckPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationClosePullRequestArgs = {
  input: SetPullRequestStateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBranchProtectionRuleArgs = {
  input: CreateBranchProtectionRuleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChangeArgs = {
  input: CreateChangeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateExternalDependencyArgs = {
  input: CreateExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMergeBatchArgs = {
  input: CreateMergeBatchInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMergeQueueEntryArgs = {
  input: CreateMergeQueueEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationMemberArgs = {
  input: CreateOrganizationMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonalAccessTokenArgs = {
  expiresInDays?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  permission?: InputMaybe<PersonalAccessTokenPermission>;
  repositoryIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
  repositoryScopes?: InputMaybe<Array<PersonalAccessTokenRepositoryScopeInput>>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProjectRepositoryArgs = {
  input: CreateProjectRepositoryInput;
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
export type MutationCreateStackArgs = {
  input: CreateStackInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTopicArgs = {
  input: CreateTopicInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTopicPullRequestArgs = {
  input: CreateTopicPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVerificationCheckArgs = {
  input: CreateVerificationCheckInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBranchProtectionRuleArgs = {
  input: DeleteBranchProtectionRuleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChangeArgs = {
  input: DeleteChangeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteExternalDependencyArgs = {
  input: DeleteExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergeBatchArgs = {
  input: DeleteMergeBatchInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergeQueueEntryArgs = {
  input: DeleteMergeQueueEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationMemberArgs = {
  input: DeleteOrganizationMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonalAccessTokenArgs = {
  input: DeletePersonalAccessTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProjectRepositoryArgs = {
  input: DeleteProjectRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestArgs = {
  input: DeletePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestCommentArgs = {
  input: DeletePullRequestCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput;
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
export type MutationDeleteRepositoryCollaboratorArgs = {
  input: DeleteRepositoryCollaboratorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipArgs = {
  input: DeleteRepositoryRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipMetadatumArgs = {
  input: DeleteRepositoryRelationshipMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepositoryRelationshipTypeArgs = {
  input: DeleteRepositoryRelationshipTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStackArgs = {
  input: DeleteStackInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTopicArgs = {
  input: DeleteTopicInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTopicPullRequestArgs = {
  input: DeleteTopicPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVerificationCheckArgs = {
  input: DeleteVerificationCheckInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDiscoverDependenciesArgs = {
  input: DiscoverDependenciesInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationEnqueueStackArgs = {
  input: EnqueueStackInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInitializeRepositoryArgs = {
  input: InitializeRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMergeChangeArgs = {
  input: MergeChangeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMergePullRequestArgs = {
  input: MergePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationOpenPullRequestArgs = {
  input: OpenPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationProcessMergeQueueArgs = {
  input: ProcessMergeQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationReconcileProjectMembershipArgs = {
  input: ReconcileProjectMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRenameRepositoryArgs = {
  input: RenameRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationReopenPullRequestArgs = {
  input: SetPullRequestStateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSubmitTesterApplicationArgs = {
  input: SubmitTesterApplicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBranchProtectionRuleArgs = {
  input: UpdateBranchProtectionRuleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChangeArgs = {
  input: UpdateChangeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateExternalDependencyArgs = {
  input: UpdateExternalDependencyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergeBatchArgs = {
  input: UpdateMergeBatchInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergeQueueEntryArgs = {
  input: UpdateMergeQueueEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationMemberArgs = {
  input: UpdateOrganizationMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProjectRepositoryArgs = {
  input: UpdateProjectRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestCommentArgs = {
  input: UpdatePullRequestCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryCollaboratorArgs = {
  input: UpdateRepositoryCollaboratorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipArgs = {
  input: UpdateRepositoryRelationshipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipMetadatumArgs = {
  input: UpdateRepositoryRelationshipMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepositoryRelationshipTypeArgs = {
  input: UpdateRepositoryRelationshipTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStackArgs = {
  input: UpdateStackInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTopicArgs = {
  input: UpdateTopicInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTopicPullRequestArgs = {
  input: UpdateTopicPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVerificationCheckArgs = {
  input: UpdateVerificationCheckInput;
};

/** The authenticated caller's own closed-beta tester application. */
export type MyTesterApplication = {
  __typename?: 'MyTesterApplication';
  /** When the application was created. */
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  /** When the beta terms were accepted. */
  ndaAcceptedAt?: Maybe<Scalars['Datetime']['output']>;
  /** The accepted beta terms version. */
  ndaVersion?: Maybe<Scalars['String']['output']>;
  /** Reviewer note, present after a decision. */
  reviewerNote?: Maybe<Scalars['String']['output']>;
  /** The application row ID. */
  rowId?: Maybe<Scalars['UUID']['output']>;
  /** Lifecycle status (pending, approved, declined). */
  status?: Maybe<Scalars['String']['output']>;
  /** When the application was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
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

/** Input for opening a pull request. */
export type OpenPullRequestInput = {
  /** Optional description (Markdown). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The repository the pull request belongs to. */
  repositoryId: Scalars['UUID']['input'];
  /** Branch the changes come from. */
  sourceBranch: Scalars['String']['input'];
  /** Branch the changes merge into. */
  targetBranch: Scalars['String']['input'];
  /** Pull request title. */
  title: Scalars['String']['input'];
};

/** Payload for the openPullRequest mutation. */
export type OpenPullRequestPayload = {
  __typename?: 'OpenPullRequestPayload';
  /** Error message if opening failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The per-repository pull request number. */
  number?: Maybe<Scalars['Int']['output']>;
  /** The created pull request row ID. */
  rowId?: Maybe<Scalars['UUID']['output']>;
};

export type Organization = Node & {
  __typename?: 'Organization';
  /** Reads and enables pagination through a set of `Agent`. */
  agents: AgentConnection;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  billingAccountId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  deletionReason?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  idpOrganizationId: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers: OrganizationMemberConnection;
  /** Reads and enables pagination through a set of `Project`. */
  projects: ProjectConnection;
  /** Reads and enables pagination through a set of `Repository`. */
  repositories: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryRelationshipType`. */
  repositoryRelationshipTypes: RepositoryRelationshipTypeConnection;
  rowId: Scalars['UUID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Topic`. */
  topics: TopicConnection;
  updatedAt: Scalars['Datetime']['output'];
};


export type OrganizationAgentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  filter?: InputMaybe<AgentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentOrderBy>>;
};


export type OrganizationOrganizationMembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationMemberCondition>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
};


export type OrganizationProjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectOrderBy>>;
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


export type OrganizationTopicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicCondition>;
  filter?: InputMaybe<TopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicOrderBy>>;
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
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
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
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of slug across the matching connection */
  slug?: Maybe<Scalars['BigInt']['output']>;
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
  /** Filter by the object’s `agents` relation. */
  agents?: InputMaybe<OrganizationToManyAgentFilter>;
  /** Some related `agents` exist. */
  agentsExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OrganizationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OrganizationFilter>>;
  /** Filter by the object’s `organizationMembers` relation. */
  organizationMembers?: InputMaybe<OrganizationToManyOrganizationMemberFilter>;
  /** Some related `organizationMembers` exist. */
  organizationMembersExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `projects` relation. */
  projects?: InputMaybe<OrganizationToManyProjectFilter>;
  /** Some related `projects` exist. */
  projectsExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `topics` relation. */
  topics?: InputMaybe<OrganizationToManyTopicFilter>;
  /** Some related `topics` exist. */
  topicsExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  Name = 'NAME',
  Slug = 'SLUG',
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
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OrganizationMember = Node & {
  __typename?: 'OrganizationMember';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Organization` that is related to this `OrganizationMember`. */
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID']['output'];
  roles: Scalars['JSON']['output'];
  rowId: Scalars['UUID']['output'];
  syncedAt: Scalars['Datetime']['output'];
  /** Reads a single `User` that is related to this `OrganizationMember`. */
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type OrganizationMemberAggregates = {
  __typename?: 'OrganizationMemberAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<OrganizationMemberDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `OrganizationMember` object types. */
export type OrganizationMemberAggregatesFilter = {
  /** Distinct count aggregate over matching `OrganizationMember` objects. */
  distinctCount?: InputMaybe<OrganizationMemberDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `OrganizationMember` object to be included within the aggregate. */
  filter?: InputMaybe<OrganizationMemberFilter>;
};

/**
 * A condition to be used against `OrganizationMember` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganizationMemberCondition = {
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `syncedAt` field. */
  syncedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `OrganizationMember` values. */
export type OrganizationMemberConnection = {
  __typename?: 'OrganizationMemberConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<OrganizationMemberAggregates>;
  /** A list of edges which contains the `OrganizationMember` and cursor to aid in pagination. */
  edges: Array<OrganizationMemberEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<OrganizationMemberAggregates>>;
  /** A list of `OrganizationMember` objects. */
  nodes: Array<OrganizationMember>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OrganizationMember` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `OrganizationMember` values. */
export type OrganizationMemberConnectionGroupedAggregatesArgs = {
  groupBy: Array<OrganizationMemberGroupBy>;
  having?: InputMaybe<OrganizationMemberHavingInput>;
};

export type OrganizationMemberDistinctCountAggregateFilter = {
  organizationId?: InputMaybe<BigIntFilter>;
  roles?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  syncedAt?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type OrganizationMemberDistinctCountAggregates = {
  __typename?: 'OrganizationMemberDistinctCountAggregates';
  /** Distinct count of organizationId across the matching connection */
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of roles across the matching connection */
  roles?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of syncedAt across the matching connection */
  syncedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `OrganizationMember` edge in the connection. */
export type OrganizationMemberEdge = {
  __typename?: 'OrganizationMemberEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OrganizationMember` at the end of the edge. */
  node: OrganizationMember;
};

/** A filter to be used against `OrganizationMember` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationMemberFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OrganizationMemberFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<OrganizationMemberFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OrganizationMemberFilter>>;
  /** Filter by the object’s `organization` relation. */
  organization?: InputMaybe<OrganizationFilter>;
  /** Filter by the object’s `organizationId` field. */
  organizationId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `syncedAt` field. */
  syncedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `OrganizationMember` for usage during aggregation. */
export enum OrganizationMemberGroupBy {
  OrganizationId = 'ORGANIZATION_ID',
  Roles = 'ROLES',
  SyncedAt = 'SYNCED_AT',
  SyncedAtTruncatedToDay = 'SYNCED_AT_TRUNCATED_TO_DAY',
  SyncedAtTruncatedToHour = 'SYNCED_AT_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type OrganizationMemberHavingAverageInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingDistinctCountInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `OrganizationMember` aggregates. */
export type OrganizationMemberHavingInput = {
  AND?: InputMaybe<Array<OrganizationMemberHavingInput>>;
  OR?: InputMaybe<Array<OrganizationMemberHavingInput>>;
  average?: InputMaybe<OrganizationMemberHavingAverageInput>;
  distinctCount?: InputMaybe<OrganizationMemberHavingDistinctCountInput>;
  max?: InputMaybe<OrganizationMemberHavingMaxInput>;
  min?: InputMaybe<OrganizationMemberHavingMinInput>;
  stddevPopulation?: InputMaybe<OrganizationMemberHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<OrganizationMemberHavingStddevSampleInput>;
  sum?: InputMaybe<OrganizationMemberHavingSumInput>;
  variancePopulation?: InputMaybe<OrganizationMemberHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<OrganizationMemberHavingVarianceSampleInput>;
};

export type OrganizationMemberHavingMaxInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingMinInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingStddevPopulationInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingStddevSampleInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingSumInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingVariancePopulationInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingVarianceSampleInput = {
  syncedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `OrganizationMember` */
export type OrganizationMemberInput = {
  organizationId: Scalars['UUID']['input'];
  roles?: InputMaybe<Scalars['JSON']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  syncedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `OrganizationMember`. */
export enum OrganizationMemberOrderBy {
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SyncedAtAsc = 'SYNCED_AT_ASC',
  SyncedAtDesc = 'SYNCED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `OrganizationMember`. Fields that are set will be updated. */
export type OrganizationMemberPatch = {
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  roles?: InputMaybe<Scalars['JSON']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  syncedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Methods to use when ordering `Organization`. */
export enum OrganizationOrderBy {
  AgentsCountAsc = 'AGENTS_COUNT_ASC',
  AgentsCountDesc = 'AGENTS_COUNT_DESC',
  AgentsDistinctCountCreatedAtAsc = 'AGENTS_DISTINCT_COUNT_CREATED_AT_ASC',
  AgentsDistinctCountCreatedAtDesc = 'AGENTS_DISTINCT_COUNT_CREATED_AT_DESC',
  AgentsDistinctCountDescriptionAsc = 'AGENTS_DISTINCT_COUNT_DESCRIPTION_ASC',
  AgentsDistinctCountDescriptionDesc = 'AGENTS_DISTINCT_COUNT_DESCRIPTION_DESC',
  AgentsDistinctCountModelAsc = 'AGENTS_DISTINCT_COUNT_MODEL_ASC',
  AgentsDistinctCountModelDesc = 'AGENTS_DISTINCT_COUNT_MODEL_DESC',
  AgentsDistinctCountNameAsc = 'AGENTS_DISTINCT_COUNT_NAME_ASC',
  AgentsDistinctCountNameDesc = 'AGENTS_DISTINCT_COUNT_NAME_DESC',
  AgentsDistinctCountOrganizationIdAsc = 'AGENTS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  AgentsDistinctCountOrganizationIdDesc = 'AGENTS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  AgentsDistinctCountOwnerIdAsc = 'AGENTS_DISTINCT_COUNT_OWNER_ID_ASC',
  AgentsDistinctCountOwnerIdDesc = 'AGENTS_DISTINCT_COUNT_OWNER_ID_DESC',
  AgentsDistinctCountRowIdAsc = 'AGENTS_DISTINCT_COUNT_ROW_ID_ASC',
  AgentsDistinctCountRowIdDesc = 'AGENTS_DISTINCT_COUNT_ROW_ID_DESC',
  AgentsDistinctCountSlugAsc = 'AGENTS_DISTINCT_COUNT_SLUG_ASC',
  AgentsDistinctCountSlugDesc = 'AGENTS_DISTINCT_COUNT_SLUG_DESC',
  AgentsDistinctCountUpdatedAtAsc = 'AGENTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  AgentsDistinctCountUpdatedAtDesc = 'AGENTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  AgentsDistinctCountVendorAsc = 'AGENTS_DISTINCT_COUNT_VENDOR_ASC',
  AgentsDistinctCountVendorDesc = 'AGENTS_DISTINCT_COUNT_VENDOR_DESC',
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
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationMembersCountAsc = 'ORGANIZATION_MEMBERS_COUNT_ASC',
  OrganizationMembersCountDesc = 'ORGANIZATION_MEMBERS_COUNT_DESC',
  OrganizationMembersDistinctCountOrganizationIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  OrganizationMembersDistinctCountOrganizationIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  OrganizationMembersDistinctCountRolesAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLES_ASC',
  OrganizationMembersDistinctCountRolesDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLES_DESC',
  OrganizationMembersDistinctCountRowIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROW_ID_ASC',
  OrganizationMembersDistinctCountRowIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROW_ID_DESC',
  OrganizationMembersDistinctCountSyncedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_SYNCED_AT_ASC',
  OrganizationMembersDistinctCountSyncedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_SYNCED_AT_DESC',
  OrganizationMembersDistinctCountUserIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_ASC',
  OrganizationMembersDistinctCountUserIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectsCountAsc = 'PROJECTS_COUNT_ASC',
  ProjectsCountDesc = 'PROJECTS_COUNT_DESC',
  ProjectsDistinctCountCreatedAtAsc = 'PROJECTS_DISTINCT_COUNT_CREATED_AT_ASC',
  ProjectsDistinctCountCreatedAtDesc = 'PROJECTS_DISTINCT_COUNT_CREATED_AT_DESC',
  ProjectsDistinctCountDescriptionAsc = 'PROJECTS_DISTINCT_COUNT_DESCRIPTION_ASC',
  ProjectsDistinctCountDescriptionDesc = 'PROJECTS_DISTINCT_COUNT_DESCRIPTION_DESC',
  ProjectsDistinctCountNameAsc = 'PROJECTS_DISTINCT_COUNT_NAME_ASC',
  ProjectsDistinctCountNameDesc = 'PROJECTS_DISTINCT_COUNT_NAME_DESC',
  ProjectsDistinctCountOrganizationIdAsc = 'PROJECTS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  ProjectsDistinctCountOrganizationIdDesc = 'PROJECTS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  ProjectsDistinctCountOwnerIdAsc = 'PROJECTS_DISTINCT_COUNT_OWNER_ID_ASC',
  ProjectsDistinctCountOwnerIdDesc = 'PROJECTS_DISTINCT_COUNT_OWNER_ID_DESC',
  ProjectsDistinctCountRowIdAsc = 'PROJECTS_DISTINCT_COUNT_ROW_ID_ASC',
  ProjectsDistinctCountRowIdDesc = 'PROJECTS_DISTINCT_COUNT_ROW_ID_DESC',
  ProjectsDistinctCountSlugAsc = 'PROJECTS_DISTINCT_COUNT_SLUG_ASC',
  ProjectsDistinctCountSlugDesc = 'PROJECTS_DISTINCT_COUNT_SLUG_DESC',
  ProjectsDistinctCountUpdatedAtAsc = 'PROJECTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  ProjectsDistinctCountUpdatedAtDesc = 'PROJECTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  ProjectsDistinctCountVisibilityAsc = 'PROJECTS_DISTINCT_COUNT_VISIBILITY_ASC',
  ProjectsDistinctCountVisibilityDesc = 'PROJECTS_DISTINCT_COUNT_VISIBILITY_DESC',
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
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  SubscriptionIdAsc = 'SUBSCRIPTION_ID_ASC',
  SubscriptionIdDesc = 'SUBSCRIPTION_ID_DESC',
  TopicsCountAsc = 'TOPICS_COUNT_ASC',
  TopicsCountDesc = 'TOPICS_COUNT_DESC',
  TopicsDistinctCountCreatedAtAsc = 'TOPICS_DISTINCT_COUNT_CREATED_AT_ASC',
  TopicsDistinctCountCreatedAtDesc = 'TOPICS_DISTINCT_COUNT_CREATED_AT_DESC',
  TopicsDistinctCountDescriptionAsc = 'TOPICS_DISTINCT_COUNT_DESCRIPTION_ASC',
  TopicsDistinctCountDescriptionDesc = 'TOPICS_DISTINCT_COUNT_DESCRIPTION_DESC',
  TopicsDistinctCountOrganizationIdAsc = 'TOPICS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  TopicsDistinctCountOrganizationIdDesc = 'TOPICS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  TopicsDistinctCountOwnerIdAsc = 'TOPICS_DISTINCT_COUNT_OWNER_ID_ASC',
  TopicsDistinctCountOwnerIdDesc = 'TOPICS_DISTINCT_COUNT_OWNER_ID_DESC',
  TopicsDistinctCountRowIdAsc = 'TOPICS_DISTINCT_COUNT_ROW_ID_ASC',
  TopicsDistinctCountRowIdDesc = 'TOPICS_DISTINCT_COUNT_ROW_ID_DESC',
  TopicsDistinctCountStatusAsc = 'TOPICS_DISTINCT_COUNT_STATUS_ASC',
  TopicsDistinctCountStatusDesc = 'TOPICS_DISTINCT_COUNT_STATUS_DESC',
  TopicsDistinctCountTitleAsc = 'TOPICS_DISTINCT_COUNT_TITLE_ASC',
  TopicsDistinctCountTitleDesc = 'TOPICS_DISTINCT_COUNT_TITLE_DESC',
  TopicsDistinctCountUpdatedAtAsc = 'TOPICS_DISTINCT_COUNT_UPDATED_AT_ASC',
  TopicsDistinctCountUpdatedAtDesc = 'TOPICS_DISTINCT_COUNT_UPDATED_AT_DESC',
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
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against many `Agent` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyAgentFilter = {
  /** Aggregates across related `Agent` match the filter criteria. */
  aggregates?: InputMaybe<AgentAggregatesFilter>;
  /** Every related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AgentFilter>;
  /** No related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AgentFilter>;
  /** Some related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AgentFilter>;
};

/** A filter to be used against many `OrganizationMember` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyOrganizationMemberFilter = {
  /** Aggregates across related `OrganizationMember` match the filter criteria. */
  aggregates?: InputMaybe<OrganizationMemberAggregatesFilter>;
  /** Every related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OrganizationMemberFilter>;
  /** No related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OrganizationMemberFilter>;
  /** Some related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OrganizationMemberFilter>;
};

/** A filter to be used against many `Project` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyProjectFilter = {
  /** Aggregates across related `Project` match the filter criteria. */
  aggregates?: InputMaybe<ProjectAggregatesFilter>;
  /** Every related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProjectFilter>;
  /** No related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProjectFilter>;
  /** Some related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProjectFilter>;
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

/** A filter to be used against many `Topic` object types. All fields are combined with a logical ‘and.’ */
export type OrganizationToManyTopicFilter = {
  /** Aggregates across related `Topic` match the filter criteria. */
  aggregates?: InputMaybe<TopicAggregatesFilter>;
  /** Every related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TopicFilter>;
  /** No related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TopicFilter>;
  /** Some related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TopicFilter>;
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

export type PersonalAccessToken = {
  __typename?: 'PersonalAccessToken';
  /** Reads a single `Agent` that is related to this `PersonalAccessToken`. */
  agent?: Maybe<Agent>;
  agentId?: Maybe<Scalars['UUID']['output']>;
  createdAt: Scalars['Datetime']['output'];
  expiresAt?: Maybe<Scalars['Datetime']['output']>;
  lastUsedAt?: Maybe<Scalars['Datetime']['output']>;
  name: Scalars['String']['output'];
  permission: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `PersonalAccessTokenRepository`. */
  personalAccessTokenRepositories: PersonalAccessTokenRepositoryConnection;
  rowId: Scalars['UUID']['output'];
  tokenPrefix: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};


export type PersonalAccessTokenPersonalAccessTokenRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PersonalAccessTokenRepositoryCondition>;
  filter?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PersonalAccessTokenRepositoryOrderBy>>;
};

export type PersonalAccessTokenAggregates = {
  __typename?: 'PersonalAccessTokenAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PersonalAccessTokenDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `PersonalAccessToken` object types. */
export type PersonalAccessTokenAggregatesFilter = {
  /** Distinct count aggregate over matching `PersonalAccessToken` objects. */
  distinctCount?: InputMaybe<PersonalAccessTokenDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `PersonalAccessToken` object to be included within the aggregate. */
  filter?: InputMaybe<PersonalAccessTokenFilter>;
};

/**
 * A condition to be used against `PersonalAccessToken` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PersonalAccessTokenCondition = {
  /** Checks for equality with the object’s `agentId` field. */
  agentId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `lastUsedAt` field. */
  lastUsedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `permission` field. */
  permission?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `tokenPrefix` field. */
  tokenPrefix?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `PersonalAccessToken` values. */
export type PersonalAccessTokenConnection = {
  __typename?: 'PersonalAccessTokenConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PersonalAccessTokenAggregates>;
  /** A list of edges which contains the `PersonalAccessToken` and cursor to aid in pagination. */
  edges: Array<PersonalAccessTokenEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PersonalAccessTokenAggregates>>;
  /** A list of `PersonalAccessToken` objects. */
  nodes: Array<PersonalAccessToken>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PersonalAccessToken` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `PersonalAccessToken` values. */
export type PersonalAccessTokenConnectionGroupedAggregatesArgs = {
  groupBy: Array<PersonalAccessTokenGroupBy>;
  having?: InputMaybe<PersonalAccessTokenHavingInput>;
};

export type PersonalAccessTokenDistinctCountAggregateFilter = {
  agentId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  expiresAt?: InputMaybe<BigIntFilter>;
  lastUsedAt?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  permission?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  tokenPrefix?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type PersonalAccessTokenDistinctCountAggregates = {
  __typename?: 'PersonalAccessTokenDistinctCountAggregates';
  /** Distinct count of agentId across the matching connection */
  agentId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of expiresAt across the matching connection */
  expiresAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of lastUsedAt across the matching connection */
  lastUsedAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of permission across the matching connection */
  permission?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of tokenPrefix across the matching connection */
  tokenPrefix?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `PersonalAccessToken` edge in the connection. */
export type PersonalAccessTokenEdge = {
  __typename?: 'PersonalAccessTokenEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PersonalAccessToken` at the end of the edge. */
  node: PersonalAccessToken;
};

/** A filter to be used against `PersonalAccessToken` object types. All fields are combined with a logical ‘and.’ */
export type PersonalAccessTokenFilter = {
  /** Filter by the object’s `agent` relation. */
  agent?: InputMaybe<AgentFilter>;
  /** A related `agent` exists. */
  agentExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `agentId` field. */
  agentId?: InputMaybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PersonalAccessTokenFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `expiresAt` field. */
  expiresAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastUsedAt` field. */
  lastUsedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PersonalAccessTokenFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PersonalAccessTokenFilter>>;
  /** Filter by the object’s `permission` field. */
  permission?: InputMaybe<StringFilter>;
  /** Filter by the object’s `personalAccessTokenRepositories` relation. */
  personalAccessTokenRepositories?: InputMaybe<PersonalAccessTokenToManyPersonalAccessTokenRepositoryFilter>;
  /** Some related `personalAccessTokenRepositories` exist. */
  personalAccessTokenRepositoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `tokenPrefix` field. */
  tokenPrefix?: InputMaybe<StringFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `PersonalAccessToken` for usage during aggregation. */
export enum PersonalAccessTokenGroupBy {
  AgentId = 'AGENT_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  ExpiresAt = 'EXPIRES_AT',
  ExpiresAtTruncatedToDay = 'EXPIRES_AT_TRUNCATED_TO_DAY',
  ExpiresAtTruncatedToHour = 'EXPIRES_AT_TRUNCATED_TO_HOUR',
  LastUsedAt = 'LAST_USED_AT',
  LastUsedAtTruncatedToDay = 'LAST_USED_AT_TRUNCATED_TO_DAY',
  LastUsedAtTruncatedToHour = 'LAST_USED_AT_TRUNCATED_TO_HOUR',
  Name = 'NAME',
  Permission = 'PERMISSION',
  TokenPrefix = 'TOKEN_PREFIX',
  UserId = 'USER_ID'
}

export type PersonalAccessTokenHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `PersonalAccessToken` aggregates. */
export type PersonalAccessTokenHavingInput = {
  AND?: InputMaybe<Array<PersonalAccessTokenHavingInput>>;
  OR?: InputMaybe<Array<PersonalAccessTokenHavingInput>>;
  average?: InputMaybe<PersonalAccessTokenHavingAverageInput>;
  distinctCount?: InputMaybe<PersonalAccessTokenHavingDistinctCountInput>;
  max?: InputMaybe<PersonalAccessTokenHavingMaxInput>;
  min?: InputMaybe<PersonalAccessTokenHavingMinInput>;
  stddevPopulation?: InputMaybe<PersonalAccessTokenHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PersonalAccessTokenHavingStddevSampleInput>;
  sum?: InputMaybe<PersonalAccessTokenHavingSumInput>;
  variancePopulation?: InputMaybe<PersonalAccessTokenHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PersonalAccessTokenHavingVarianceSampleInput>;
};

export type PersonalAccessTokenHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  expiresAt?: InputMaybe<HavingDatetimeFilter>;
  lastUsedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `PersonalAccessToken`. */
export enum PersonalAccessTokenOrderBy {
  AgentIdAsc = 'AGENT_ID_ASC',
  AgentIdDesc = 'AGENT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ExpiresAtAsc = 'EXPIRES_AT_ASC',
  ExpiresAtDesc = 'EXPIRES_AT_DESC',
  LastUsedAtAsc = 'LAST_USED_AT_ASC',
  LastUsedAtDesc = 'LAST_USED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PermissionAsc = 'PERMISSION_ASC',
  PermissionDesc = 'PERMISSION_DESC',
  PersonalAccessTokenRepositoriesCountAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_COUNT_ASC',
  PersonalAccessTokenRepositoriesCountDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_COUNT_DESC',
  PersonalAccessTokenRepositoriesDistinctCountCreatedAtAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_ASC',
  PersonalAccessTokenRepositoriesDistinctCountCreatedAtDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_DESC',
  PersonalAccessTokenRepositoriesDistinctCountPathPatternsAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PATH_PATTERNS_ASC',
  PersonalAccessTokenRepositoriesDistinctCountPathPatternsDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PATH_PATTERNS_DESC',
  PersonalAccessTokenRepositoriesDistinctCountPersonalAccessTokenIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PERSONAL_ACCESS_TOKEN_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountPersonalAccessTokenIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PERSONAL_ACCESS_TOKEN_ID_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRefPatternsAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REF_PATTERNS_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRefPatternsDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REF_PATTERNS_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRepositoryIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRepositoryIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRowIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_ROW_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRowIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_ROW_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  TokenPrefixAsc = 'TOKEN_PREFIX_ASC',
  TokenPrefixDesc = 'TOKEN_PREFIX_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Furthest operation an access token may perform. */
export enum PersonalAccessTokenPermission {
  Read = 'READ',
  Write = 'WRITE'
}

export type PersonalAccessTokenRepository = {
  __typename?: 'PersonalAccessTokenRepository';
  createdAt: Scalars['Datetime']['output'];
  pathPatterns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  personalAccessTokenId: Scalars['UUID']['output'];
  refPatterns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Reads a single `Repository` that is related to this `PersonalAccessTokenRepository`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
};

export type PersonalAccessTokenRepositoryAggregates = {
  __typename?: 'PersonalAccessTokenRepositoryAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<PersonalAccessTokenRepositoryDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `PersonalAccessTokenRepository` object types. */
export type PersonalAccessTokenRepositoryAggregatesFilter = {
  /** Distinct count aggregate over matching `PersonalAccessTokenRepository` objects. */
  distinctCount?: InputMaybe<PersonalAccessTokenRepositoryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `PersonalAccessTokenRepository` object to be included within the aggregate. */
  filter?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
};

/**
 * A condition to be used against `PersonalAccessTokenRepository` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type PersonalAccessTokenRepositoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `personalAccessTokenId` field. */
  personalAccessTokenId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `PersonalAccessTokenRepository` values. */
export type PersonalAccessTokenRepositoryConnection = {
  __typename?: 'PersonalAccessTokenRepositoryConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<PersonalAccessTokenRepositoryAggregates>;
  /** A list of edges which contains the `PersonalAccessTokenRepository` and cursor to aid in pagination. */
  edges: Array<PersonalAccessTokenRepositoryEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<PersonalAccessTokenRepositoryAggregates>>;
  /** A list of `PersonalAccessTokenRepository` objects. */
  nodes: Array<PersonalAccessTokenRepository>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PersonalAccessTokenRepository` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `PersonalAccessTokenRepository` values. */
export type PersonalAccessTokenRepositoryConnectionGroupedAggregatesArgs = {
  groupBy: Array<PersonalAccessTokenRepositoryGroupBy>;
  having?: InputMaybe<PersonalAccessTokenRepositoryHavingInput>;
};

export type PersonalAccessTokenRepositoryDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  pathPatterns?: InputMaybe<BigIntFilter>;
  personalAccessTokenId?: InputMaybe<BigIntFilter>;
  refPatterns?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
};

export type PersonalAccessTokenRepositoryDistinctCountAggregates = {
  __typename?: 'PersonalAccessTokenRepositoryDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pathPatterns across the matching connection */
  pathPatterns?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of personalAccessTokenId across the matching connection */
  personalAccessTokenId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of refPatterns across the matching connection */
  refPatterns?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `PersonalAccessTokenRepository` edge in the connection. */
export type PersonalAccessTokenRepositoryEdge = {
  __typename?: 'PersonalAccessTokenRepositoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PersonalAccessTokenRepository` at the end of the edge. */
  node: PersonalAccessTokenRepository;
};

/** A filter to be used against `PersonalAccessTokenRepository` object types. All fields are combined with a logical ‘and.’ */
export type PersonalAccessTokenRepositoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PersonalAccessTokenRepositoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PersonalAccessTokenRepositoryFilter>>;
  /** Filter by the object’s `pathPatterns` field. */
  pathPatterns?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `personalAccessToken` relation. */
  personalAccessToken?: InputMaybe<PersonalAccessTokenFilter>;
  /** Filter by the object’s `personalAccessTokenId` field. */
  personalAccessTokenId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `refPatterns` field. */
  refPatterns?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `PersonalAccessTokenRepository` for usage during aggregation. */
export enum PersonalAccessTokenRepositoryGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  PathPatterns = 'PATH_PATTERNS',
  PersonalAccessTokenId = 'PERSONAL_ACCESS_TOKEN_ID',
  RefPatterns = 'REF_PATTERNS',
  RepositoryId = 'REPOSITORY_ID'
}

export type PersonalAccessTokenRepositoryHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `PersonalAccessTokenRepository` aggregates. */
export type PersonalAccessTokenRepositoryHavingInput = {
  AND?: InputMaybe<Array<PersonalAccessTokenRepositoryHavingInput>>;
  OR?: InputMaybe<Array<PersonalAccessTokenRepositoryHavingInput>>;
  average?: InputMaybe<PersonalAccessTokenRepositoryHavingAverageInput>;
  distinctCount?: InputMaybe<PersonalAccessTokenRepositoryHavingDistinctCountInput>;
  max?: InputMaybe<PersonalAccessTokenRepositoryHavingMaxInput>;
  min?: InputMaybe<PersonalAccessTokenRepositoryHavingMinInput>;
  stddevPopulation?: InputMaybe<PersonalAccessTokenRepositoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<PersonalAccessTokenRepositoryHavingStddevSampleInput>;
  sum?: InputMaybe<PersonalAccessTokenRepositoryHavingSumInput>;
  variancePopulation?: InputMaybe<PersonalAccessTokenRepositoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<PersonalAccessTokenRepositoryHavingVarianceSampleInput>;
};

export type PersonalAccessTokenRepositoryHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type PersonalAccessTokenRepositoryHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `PersonalAccessTokenRepository`. */
export enum PersonalAccessTokenRepositoryOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PersonalAccessTokenIdAsc = 'PERSONAL_ACCESS_TOKEN_ID_ASC',
  PersonalAccessTokenIdDesc = 'PERSONAL_ACCESS_TOKEN_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/**
 * Per-repository confinement for an access token, limiting the refs and paths
 * it may touch within that repository. Enforced against real pushes by the
 * git credential boundary and against in-process ref moves (e.g. merges).
 */
export type PersonalAccessTokenRepositoryScopeInput = {
  /**
   * Repo-relative path globs the token may modify (e.g. "src/**"). Omit for
   * every path in the repository.
   */
  pathPatterns?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Full-form ref globs the token may touch (e.g. "refs/heads/agent/*").
   * Omit for every ref in the repository.
   */
  refPatterns?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The repository this confinement applies to. */
  repositoryId: Scalars['UUID']['input'];
};

/** A filter to be used against many `PersonalAccessTokenRepository` object types. All fields are combined with a logical ‘and.’ */
export type PersonalAccessTokenToManyPersonalAccessTokenRepositoryFilter = {
  /** Aggregates across related `PersonalAccessTokenRepository` match the filter criteria. */
  aggregates?: InputMaybe<PersonalAccessTokenRepositoryAggregatesFilter>;
  /** Every related `PersonalAccessTokenRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
  /** No related `PersonalAccessTokenRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
  /** Some related `PersonalAccessTokenRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
};

/** Input for processing a repository's merge queue. */
export type ProcessMergeQueueInput = {
  /** The repository ID whose queue to process. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for the processMergeQueue mutation. */
export type ProcessMergeQueuePayload = {
  __typename?: 'ProcessMergeQueuePayload';
  /** Error message if the pass did not run. */
  error?: Maybe<Scalars['String']['output']>;
  /** Per-entry results of the pass, in queue order. */
  results?: Maybe<Array<MergeQueueEntryResult>>;
  /** Whether the queue pass ran. */
  success: Scalars['Boolean']['output'];
};

export type Project = Node & {
  __typename?: 'Project';
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `Organization` that is related to this `Project`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `User` that is related to this `Project`. */
  owner?: Maybe<User>;
  ownerId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `ProjectRepository`. */
  projectRepositories: ProjectRepositoryConnection;
  rowId: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  visibility: Visibility;
};


export type ProjectProjectRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectRepositoryCondition>;
  filter?: InputMaybe<ProjectRepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRepositoryOrderBy>>;
};

export type ProjectAggregates = {
  __typename?: 'ProjectAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ProjectDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `Project` object types. */
export type ProjectAggregatesFilter = {
  /** Distinct count aggregate over matching `Project` objects. */
  distinctCount?: InputMaybe<ProjectDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Project` object to be included within the aggregate. */
  filter?: InputMaybe<ProjectFilter>;
};

/** A condition to be used against `Project` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProjectCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
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

/** A connection to a list of `Project` values. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ProjectAggregates>;
  /** A list of edges which contains the `Project` and cursor to aid in pagination. */
  edges: Array<ProjectEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ProjectAggregates>>;
  /** A list of `Project` objects. */
  nodes: Array<Project>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Project` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Project` values. */
export type ProjectConnectionGroupedAggregatesArgs = {
  groupBy: Array<ProjectGroupBy>;
  having?: InputMaybe<ProjectHavingInput>;
};

export type ProjectDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  ownerId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  slug?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  visibility?: InputMaybe<BigIntFilter>;
};

export type ProjectDistinctCountAggregates = {
  __typename?: 'ProjectDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
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

/** A `Project` edge in the connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Project` at the end of the edge. */
  node: Project;
};

/** A filter to be used against `Project` object types. All fields are combined with a logical ‘and.’ */
export type ProjectFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProjectFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProjectFilter>>;
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
  /** Filter by the object’s `projectRepositories` relation. */
  projectRepositories?: InputMaybe<ProjectToManyProjectRepositoryFilter>;
  /** Some related `projectRepositories` exist. */
  projectRepositoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `visibility` field. */
  visibility?: InputMaybe<VisibilityFilter>;
};

/** Grouping methods for `Project` for usage during aggregation. */
export enum ProjectGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
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

export type ProjectHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Project` aggregates. */
export type ProjectHavingInput = {
  AND?: InputMaybe<Array<ProjectHavingInput>>;
  OR?: InputMaybe<Array<ProjectHavingInput>>;
  average?: InputMaybe<ProjectHavingAverageInput>;
  distinctCount?: InputMaybe<ProjectHavingDistinctCountInput>;
  max?: InputMaybe<ProjectHavingMaxInput>;
  min?: InputMaybe<ProjectHavingMinInput>;
  stddevPopulation?: InputMaybe<ProjectHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ProjectHavingStddevSampleInput>;
  sum?: InputMaybe<ProjectHavingSumInput>;
  variancePopulation?: InputMaybe<ProjectHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ProjectHavingVarianceSampleInput>;
};

export type ProjectHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Project` */
export type ProjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  visibility?: InputMaybe<Visibility>;
};

/** Methods to use when ordering `Project`. */
export enum ProjectOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectRepositoriesCountAsc = 'PROJECT_REPOSITORIES_COUNT_ASC',
  ProjectRepositoriesCountDesc = 'PROJECT_REPOSITORIES_COUNT_DESC',
  ProjectRepositoriesDistinctCountCreatedAtAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_ASC',
  ProjectRepositoriesDistinctCountCreatedAtDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_DESC',
  ProjectRepositoriesDistinctCountDetectionSourceAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  ProjectRepositoriesDistinctCountDetectionSourceDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  ProjectRepositoriesDistinctCountProjectIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_PROJECT_ID_ASC',
  ProjectRepositoriesDistinctCountProjectIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_PROJECT_ID_DESC',
  ProjectRepositoriesDistinctCountRepositoryIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ProjectRepositoriesDistinctCountRepositoryIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ProjectRepositoriesDistinctCountRowIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_ROW_ID_ASC',
  ProjectRepositoriesDistinctCountRowIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_ROW_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `Project`. Fields that are set will be updated. */
export type ProjectPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type ProjectRepository = Node & {
  __typename?: 'ProjectRepository';
  createdAt: Scalars['Datetime']['output'];
  detectionSource: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Project` that is related to this `ProjectRepository`. */
  project?: Maybe<Project>;
  projectId: Scalars['UUID']['output'];
  /** Reads a single `Repository` that is related to this `ProjectRepository`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
};

export type ProjectRepositoryAggregates = {
  __typename?: 'ProjectRepositoryAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ProjectRepositoryDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `ProjectRepository` object types. */
export type ProjectRepositoryAggregatesFilter = {
  /** Distinct count aggregate over matching `ProjectRepository` objects. */
  distinctCount?: InputMaybe<ProjectRepositoryDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `ProjectRepository` object to be included within the aggregate. */
  filter?: InputMaybe<ProjectRepositoryFilter>;
};

/**
 * A condition to be used against `ProjectRepository` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ProjectRepositoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `ProjectRepository` values. */
export type ProjectRepositoryConnection = {
  __typename?: 'ProjectRepositoryConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ProjectRepositoryAggregates>;
  /** A list of edges which contains the `ProjectRepository` and cursor to aid in pagination. */
  edges: Array<ProjectRepositoryEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ProjectRepositoryAggregates>>;
  /** A list of `ProjectRepository` objects. */
  nodes: Array<ProjectRepository>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ProjectRepository` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `ProjectRepository` values. */
export type ProjectRepositoryConnectionGroupedAggregatesArgs = {
  groupBy: Array<ProjectRepositoryGroupBy>;
  having?: InputMaybe<ProjectRepositoryHavingInput>;
};

export type ProjectRepositoryDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  detectionSource?: InputMaybe<BigIntFilter>;
  projectId?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
};

export type ProjectRepositoryDistinctCountAggregates = {
  __typename?: 'ProjectRepositoryDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of detectionSource across the matching connection */
  detectionSource?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of projectId across the matching connection */
  projectId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `ProjectRepository` edge in the connection. */
export type ProjectRepositoryEdge = {
  __typename?: 'ProjectRepositoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ProjectRepository` at the end of the edge. */
  node: ProjectRepository;
};

/** A filter to be used against `ProjectRepository` object types. All fields are combined with a logical ‘and.’ */
export type ProjectRepositoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProjectRepositoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `detectionSource` field. */
  detectionSource?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProjectRepositoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProjectRepositoryFilter>>;
  /** Filter by the object’s `project` relation. */
  project?: InputMaybe<ProjectFilter>;
  /** Filter by the object’s `projectId` field. */
  projectId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `ProjectRepository` for usage during aggregation. */
export enum ProjectRepositoryGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DetectionSource = 'DETECTION_SOURCE',
  ProjectId = 'PROJECT_ID',
  RepositoryId = 'REPOSITORY_ID'
}

export type ProjectRepositoryHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `ProjectRepository` aggregates. */
export type ProjectRepositoryHavingInput = {
  AND?: InputMaybe<Array<ProjectRepositoryHavingInput>>;
  OR?: InputMaybe<Array<ProjectRepositoryHavingInput>>;
  average?: InputMaybe<ProjectRepositoryHavingAverageInput>;
  distinctCount?: InputMaybe<ProjectRepositoryHavingDistinctCountInput>;
  max?: InputMaybe<ProjectRepositoryHavingMaxInput>;
  min?: InputMaybe<ProjectRepositoryHavingMinInput>;
  stddevPopulation?: InputMaybe<ProjectRepositoryHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ProjectRepositoryHavingStddevSampleInput>;
  sum?: InputMaybe<ProjectRepositoryHavingSumInput>;
  variancePopulation?: InputMaybe<ProjectRepositoryHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ProjectRepositoryHavingVarianceSampleInput>;
};

export type ProjectRepositoryHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type ProjectRepositoryHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `ProjectRepository` */
export type ProjectRepositoryInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['UUID']['input'];
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Methods to use when ordering `ProjectRepository`. */
export enum ProjectRepositoryOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DetectionSourceAsc = 'DETECTION_SOURCE_ASC',
  DetectionSourceDesc = 'DETECTION_SOURCE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectIdAsc = 'PROJECT_ID_ASC',
  ProjectIdDesc = 'PROJECT_ID_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** Represents an update to a `ProjectRepository`. Fields that are set will be updated. */
export type ProjectRepositoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detectionSource?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against many `ProjectRepository` object types. All fields are combined with a logical ‘and.’ */
export type ProjectToManyProjectRepositoryFilter = {
  /** Aggregates across related `ProjectRepository` match the filter criteria. */
  aggregates?: InputMaybe<ProjectRepositoryAggregatesFilter>;
  /** Every related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProjectRepositoryFilter>;
  /** No related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProjectRepositoryFilter>;
  /** Some related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProjectRepositoryFilter>;
};

export type PullRequest = Node & {
  __typename?: 'PullRequest';
  /** Reads a single `User` that is related to this `PullRequest`. */
  author?: Maybe<User>;
  authorId: Scalars['UUID']['output'];
  /** Reads a single `Agent` that is related to this `PullRequest`. */
  authoredByAgent?: Maybe<Agent>;
  authoredByAgentId?: Maybe<Scalars['UUID']['output']>;
  /**
   * The files changed by this pull request (merge-base of target and source
   * to the source tip).
   */
  changedFiles: Array<ChangedFile>;
  /** Reads and enables pagination through a set of `Change`. */
  changes: ChangeConnection;
  closedAt?: Maybe<Scalars['Datetime']['output']>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** The old and new content for a single changed file. */
  fileDiff?: Maybe<FileDiffContent>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  mergeCommitSha?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `MergeQueueEntry`. */
  mergeQueueEntries: MergeQueueEntryConnection;
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
  state: Scalars['String']['output'];
  targetBranch: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `TopicPullRequest`. */
  topicPullRequests: TopicPullRequestConnection;
  updatedAt: Scalars['Datetime']['output'];
};


export type PullRequestChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChangeCondition>;
  filter?: InputMaybe<ChangeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangeOrderBy>>;
};


export type PullRequestFileDiffArgs = {
  path: Scalars['String']['input'];
};


export type PullRequestMergeQueueEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeQueueEntryCondition>;
  filter?: InputMaybe<MergeQueueEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeQueueEntryOrderBy>>;
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


export type PullRequestTopicPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicPullRequestCondition>;
  filter?: InputMaybe<TopicPullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicPullRequestOrderBy>>;
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

/** The kind of change delivered on a pullRequestCommentChanged event. */
export enum PullRequestCommentChangeAction {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

/** A single change to a comment on a pull request's conversation. */
export type PullRequestCommentChangePayload = {
  __typename?: 'PullRequestCommentChangePayload';
  /** Whether the comment was created, updated, or deleted. */
  action?: Maybe<PullRequestCommentChangeAction>;
  /** The affected comment, or null if it was deleted. */
  comment?: Maybe<PullRequestComment>;
  /** The affected comment's id (always present, including on delete). */
  commentId?: Maybe<Scalars['UUID']['output']>;
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
  /** Checks for equality with the object’s `authoredByAgentId` field. */
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
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
  state?: InputMaybe<Scalars['String']['input']>;
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
  authoredByAgentId?: InputMaybe<BigIntFilter>;
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
  /** Distinct count of authoredByAgentId across the matching connection */
  authoredByAgentId?: Maybe<Scalars['BigInt']['output']>;
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
  /** Filter by the object’s `authoredByAgent` relation. */
  authoredByAgent?: InputMaybe<AgentFilter>;
  /** A related `authoredByAgent` exists. */
  authoredByAgentExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `authoredByAgentId` field. */
  authoredByAgentId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `changes` relation. */
  changes?: InputMaybe<PullRequestToManyChangeFilter>;
  /** Some related `changes` exist. */
  changesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mergeCommitSha` field. */
  mergeCommitSha?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mergeQueueEntries` relation. */
  mergeQueueEntries?: InputMaybe<PullRequestToManyMergeQueueEntryFilter>;
  /** Some related `mergeQueueEntries` exist. */
  mergeQueueEntriesExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `targetBranch` field. */
  targetBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `topicPullRequests` relation. */
  topicPullRequests?: InputMaybe<PullRequestToManyTopicPullRequestFilter>;
  /** Some related `topicPullRequests` exist. */
  topicPullRequestsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `PullRequest` for usage during aggregation. */
export enum PullRequestGroupBy {
  AuthoredByAgentId = 'AUTHORED_BY_AGENT_ID',
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
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
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
  state?: InputMaybe<Scalars['String']['input']>;
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
  AuthoredByAgentIdAsc = 'AUTHORED_BY_AGENT_ID_ASC',
  AuthoredByAgentIdDesc = 'AUTHORED_BY_AGENT_ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  ChangesAveragePositionAsc = 'CHANGES_AVERAGE_POSITION_ASC',
  ChangesAveragePositionDesc = 'CHANGES_AVERAGE_POSITION_DESC',
  ChangesCountAsc = 'CHANGES_COUNT_ASC',
  ChangesCountDesc = 'CHANGES_COUNT_DESC',
  ChangesDistinctCountCommitShaAsc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_ASC',
  ChangesDistinctCountCommitShaDesc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_DESC',
  ChangesDistinctCountCreatedAtAsc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_ASC',
  ChangesDistinctCountCreatedAtDesc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_DESC',
  ChangesDistinctCountDescriptionAsc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_ASC',
  ChangesDistinctCountDescriptionDesc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_DESC',
  ChangesDistinctCountHeadBranchAsc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_ASC',
  ChangesDistinctCountHeadBranchDesc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_DESC',
  ChangesDistinctCountParentChangeIdAsc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_ASC',
  ChangesDistinctCountParentChangeIdDesc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_DESC',
  ChangesDistinctCountPositionAsc = 'CHANGES_DISTINCT_COUNT_POSITION_ASC',
  ChangesDistinctCountPositionDesc = 'CHANGES_DISTINCT_COUNT_POSITION_DESC',
  ChangesDistinctCountPullRequestIdAsc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  ChangesDistinctCountPullRequestIdDesc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  ChangesDistinctCountRepositoryIdAsc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ChangesDistinctCountRepositoryIdDesc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ChangesDistinctCountRowIdAsc = 'CHANGES_DISTINCT_COUNT_ROW_ID_ASC',
  ChangesDistinctCountRowIdDesc = 'CHANGES_DISTINCT_COUNT_ROW_ID_DESC',
  ChangesDistinctCountStackIdAsc = 'CHANGES_DISTINCT_COUNT_STACK_ID_ASC',
  ChangesDistinctCountStackIdDesc = 'CHANGES_DISTINCT_COUNT_STACK_ID_DESC',
  ChangesDistinctCountStatusAsc = 'CHANGES_DISTINCT_COUNT_STATUS_ASC',
  ChangesDistinctCountStatusDesc = 'CHANGES_DISTINCT_COUNT_STATUS_DESC',
  ChangesDistinctCountTitleAsc = 'CHANGES_DISTINCT_COUNT_TITLE_ASC',
  ChangesDistinctCountTitleDesc = 'CHANGES_DISTINCT_COUNT_TITLE_DESC',
  ChangesDistinctCountUpdatedAtAsc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_ASC',
  ChangesDistinctCountUpdatedAtDesc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_DESC',
  ChangesMaxPositionAsc = 'CHANGES_MAX_POSITION_ASC',
  ChangesMaxPositionDesc = 'CHANGES_MAX_POSITION_DESC',
  ChangesMinPositionAsc = 'CHANGES_MIN_POSITION_ASC',
  ChangesMinPositionDesc = 'CHANGES_MIN_POSITION_DESC',
  ChangesStddevPopulationPositionAsc = 'CHANGES_STDDEV_POPULATION_POSITION_ASC',
  ChangesStddevPopulationPositionDesc = 'CHANGES_STDDEV_POPULATION_POSITION_DESC',
  ChangesStddevSamplePositionAsc = 'CHANGES_STDDEV_SAMPLE_POSITION_ASC',
  ChangesStddevSamplePositionDesc = 'CHANGES_STDDEV_SAMPLE_POSITION_DESC',
  ChangesSumPositionAsc = 'CHANGES_SUM_POSITION_ASC',
  ChangesSumPositionDesc = 'CHANGES_SUM_POSITION_DESC',
  ChangesVariancePopulationPositionAsc = 'CHANGES_VARIANCE_POPULATION_POSITION_ASC',
  ChangesVariancePopulationPositionDesc = 'CHANGES_VARIANCE_POPULATION_POSITION_DESC',
  ChangesVarianceSamplePositionAsc = 'CHANGES_VARIANCE_SAMPLE_POSITION_ASC',
  ChangesVarianceSamplePositionDesc = 'CHANGES_VARIANCE_SAMPLE_POSITION_DESC',
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
  MergeQueueEntriesAveragePositionAsc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_ASC',
  MergeQueueEntriesAveragePositionDesc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_DESC',
  MergeQueueEntriesCountAsc = 'MERGE_QUEUE_ENTRIES_COUNT_ASC',
  MergeQueueEntriesCountDesc = 'MERGE_QUEUE_ENTRIES_COUNT_DESC',
  MergeQueueEntriesDistinctCountBatchIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_ASC',
  MergeQueueEntriesDistinctCountBatchIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_DESC',
  MergeQueueEntriesDistinctCountCreatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_ASC',
  MergeQueueEntriesDistinctCountCreatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_DESC',
  MergeQueueEntriesDistinctCountEnqueuedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_ASC',
  MergeQueueEntriesDistinctCountEnqueuedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_DESC',
  MergeQueueEntriesDistinctCountPositionAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_ASC',
  MergeQueueEntriesDistinctCountPositionDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_DESC',
  MergeQueueEntriesDistinctCountPullRequestIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  MergeQueueEntriesDistinctCountPullRequestIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  MergeQueueEntriesDistinctCountRepositoryIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  MergeQueueEntriesDistinctCountRepositoryIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  MergeQueueEntriesDistinctCountRowIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_ASC',
  MergeQueueEntriesDistinctCountRowIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_DESC',
  MergeQueueEntriesDistinctCountStackIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_ASC',
  MergeQueueEntriesDistinctCountStackIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_DESC',
  MergeQueueEntriesDistinctCountStateAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_ASC',
  MergeQueueEntriesDistinctCountStateDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_DESC',
  MergeQueueEntriesDistinctCountTargetBranchAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  MergeQueueEntriesDistinctCountTargetBranchDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  MergeQueueEntriesDistinctCountUpdatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_ASC',
  MergeQueueEntriesDistinctCountUpdatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_DESC',
  MergeQueueEntriesMaxPositionAsc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_ASC',
  MergeQueueEntriesMaxPositionDesc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_DESC',
  MergeQueueEntriesMinPositionAsc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_ASC',
  MergeQueueEntriesMinPositionDesc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_DESC',
  MergeQueueEntriesStddevPopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_ASC',
  MergeQueueEntriesStddevPopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_DESC',
  MergeQueueEntriesStddevSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_ASC',
  MergeQueueEntriesStddevSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_DESC',
  MergeQueueEntriesSumPositionAsc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_ASC',
  MergeQueueEntriesSumPositionDesc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_DESC',
  MergeQueueEntriesVariancePopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_ASC',
  MergeQueueEntriesVariancePopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_DESC',
  MergeQueueEntriesVarianceSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_ASC',
  MergeQueueEntriesVarianceSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_DESC',
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
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TargetBranchAsc = 'TARGET_BRANCH_ASC',
  TargetBranchDesc = 'TARGET_BRANCH_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TopicPullRequestsCountAsc = 'TOPIC_PULL_REQUESTS_COUNT_ASC',
  TopicPullRequestsCountDesc = 'TOPIC_PULL_REQUESTS_COUNT_DESC',
  TopicPullRequestsDistinctCountCreatedAtAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_ASC',
  TopicPullRequestsDistinctCountCreatedAtDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_DESC',
  TopicPullRequestsDistinctCountPullRequestIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  TopicPullRequestsDistinctCountPullRequestIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  TopicPullRequestsDistinctCountRowIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_ASC',
  TopicPullRequestsDistinctCountRowIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_DESC',
  TopicPullRequestsDistinctCountTopicIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_TOPIC_ID_ASC',
  TopicPullRequestsDistinctCountTopicIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_TOPIC_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `PullRequest`. Fields that are set will be updated. */
export type PullRequestPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
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
  state?: InputMaybe<Scalars['String']['input']>;
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
  state: Scalars['String']['output'];
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
  state?: InputMaybe<Scalars['String']['input']>;
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
  state?: InputMaybe<StringFilter>;
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
  state?: InputMaybe<Scalars['String']['input']>;
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
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
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
  state?: InputMaybe<Scalars['String']['input']>;
  submittedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
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

/** A filter to be used against many `Change` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestToManyChangeFilter = {
  /** Aggregates across related `Change` match the filter criteria. */
  aggregates?: InputMaybe<ChangeAggregatesFilter>;
  /** Every related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ChangeFilter>;
  /** No related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ChangeFilter>;
  /** Some related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ChangeFilter>;
};

/** A filter to be used against many `MergeQueueEntry` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestToManyMergeQueueEntryFilter = {
  /** Aggregates across related `MergeQueueEntry` match the filter criteria. */
  aggregates?: InputMaybe<MergeQueueEntryAggregatesFilter>;
  /** Every related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MergeQueueEntryFilter>;
  /** No related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MergeQueueEntryFilter>;
  /** Some related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MergeQueueEntryFilter>;
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

/** A filter to be used against many `TopicPullRequest` object types. All fields are combined with a logical ‘and.’ */
export type PullRequestToManyTopicPullRequestFilter = {
  /** Aggregates across related `TopicPullRequest` match the filter criteria. */
  aggregates?: InputMaybe<TopicPullRequestAggregatesFilter>;
  /** Every related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TopicPullRequestFilter>;
  /** No related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TopicPullRequestFilter>;
  /** Some related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TopicPullRequestFilter>;
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
  /** Get a single `Agent`. */
  agent?: Maybe<Agent>;
  /** Reads a single `Agent` using its globally unique `ID`. */
  agentById?: Maybe<Agent>;
  /** Reads and enables pagination through a set of `Agent`. */
  agents?: Maybe<AgentConnection>;
  /** Get a single `BranchProtectionRule`. */
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  /** Reads a single `BranchProtectionRule` using its globally unique `ID`. */
  branchProtectionRuleById?: Maybe<BranchProtectionRule>;
  /** Reads and enables pagination through a set of `BranchProtectionRule`. */
  branchProtectionRules?: Maybe<BranchProtectionRuleConnection>;
  /** Get a single `Change`. */
  change?: Maybe<Change>;
  /** Reads a single `Change` using its globally unique `ID`. */
  changeById?: Maybe<Change>;
  /** Reads and enables pagination through a set of `Change`. */
  changes?: Maybe<ChangeConnection>;
  /** Reads and enables pagination through a set of `ExternalDependency`. */
  externalDependencies?: Maybe<ExternalDependencyConnection>;
  /** Get a single `ExternalDependency`. */
  externalDependency?: Maybe<ExternalDependency>;
  /** Reads a single `ExternalDependency` using its globally unique `ID`. */
  externalDependencyById?: Maybe<ExternalDependency>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output'];
  /** Get a single `MergeBatch`. */
  mergeBatch?: Maybe<MergeBatch>;
  /** Reads a single `MergeBatch` using its globally unique `ID`. */
  mergeBatchById?: Maybe<MergeBatch>;
  /** Reads and enables pagination through a set of `MergeBatch`. */
  mergeBatches?: Maybe<MergeBatchConnection>;
  /** Reads and enables pagination through a set of `MergeQueueEntry`. */
  mergeQueueEntries?: Maybe<MergeQueueEntryConnection>;
  /** Get a single `MergeQueueEntry`. */
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
  /** Reads a single `MergeQueueEntry` using its globally unique `ID`. */
  mergeQueueEntryById?: Maybe<MergeQueueEntry>;
  /**
   * Returns the authenticated caller's own closed-beta tester application, or
   * null when they have not applied.
   */
  myTesterApplication?: Maybe<MyTesterApplication>;
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
  /** Get a single `OrganizationMember`. */
  organizationMember?: Maybe<OrganizationMember>;
  /** Reads a single `OrganizationMember` using its globally unique `ID`. */
  organizationMemberById?: Maybe<OrganizationMember>;
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers?: Maybe<OrganizationMemberConnection>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationConnection>;
  /** Reads and enables pagination through a set of `PersonalAccessTokenRepository`. */
  personalAccessTokenRepositories?: Maybe<PersonalAccessTokenRepositoryConnection>;
  /** Reads and enables pagination through a set of `PersonalAccessToken`. */
  personalAccessTokens?: Maybe<PersonalAccessTokenConnection>;
  /**
   * Enforces access to the org-wide polyrepo graph, a paid graph capability
   * (Pro tier). Resolves to true when the viewer's plan includes it and
   * throws GRAPH_TIER_REQUIRED otherwise. Being non-null, a denial nulls the
   * whole response so no graph data is returned below the tier. Request this
   * alongside the polyrepo graph query.
   */
  polyrepoGraphAccess: Scalars['Boolean']['output'];
  /** Get a single `Project`. */
  project?: Maybe<Project>;
  /** Reads a single `Project` using its globally unique `ID`. */
  projectById?: Maybe<Project>;
  /** Reads and enables pagination through a set of `ProjectRepository`. */
  projectRepositories?: Maybe<ProjectRepositoryConnection>;
  /** Get a single `ProjectRepository`. */
  projectRepository?: Maybe<ProjectRepository>;
  /** Reads a single `ProjectRepository` using its globally unique `ID`. */
  projectRepositoryById?: Maybe<ProjectRepository>;
  /**
   * External packages the project's repositories depend on at inconsistent
   * versions, one row per package/version/repository. Only repositories the
   * caller may see appear.
   */
  projectVersionDrift?: Maybe<Array<VersionDriftEntry>>;
  /** Reads and enables pagination through a set of `Project`. */
  projects?: Maybe<ProjectConnection>;
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
  /**
   * The repositories transitively affected by a change to the given
   * repository, nearest first. Only repositories the caller may see appear.
   */
  repositoryBlastRadius?: Maybe<Array<BlastRadiusRepository>>;
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
  /** Get a single `Stack`. */
  stack?: Maybe<Stack>;
  /** Reads a single `Stack` using its globally unique `ID`. */
  stackById?: Maybe<Stack>;
  /** Whether a change can merge, from its required verification checks. */
  stackMergeability?: Maybe<StackMergeabilityResult>;
  /** Reads and enables pagination through a set of `Stack`. */
  stacks?: Maybe<StackConnection>;
  /** Get a single `Topic`. */
  topic?: Maybe<Topic>;
  /** Reads a single `Topic` using its globally unique `ID`. */
  topicById?: Maybe<Topic>;
  /** Get a single `TopicPullRequest`. */
  topicPullRequest?: Maybe<TopicPullRequest>;
  /** Reads a single `TopicPullRequest` using its globally unique `ID`. */
  topicPullRequestById?: Maybe<TopicPullRequest>;
  /** Reads and enables pagination through a set of `TopicPullRequest`. */
  topicPullRequests?: Maybe<TopicPullRequestConnection>;
  /**
   * Whether the topic is ready to submit as one all-or-nothing unit. Only
   * member pull requests the caller may see are considered.
   */
  topicReadiness?: Maybe<TopicReadiness>;
  /** Reads and enables pagination through a set of `Topic`. */
  topics?: Maybe<TopicConnection>;
  /** Get a single `VerificationCheck`. */
  verificationCheck?: Maybe<VerificationCheck>;
  /** Reads a single `VerificationCheck` using its globally unique `ID`. */
  verificationCheckById?: Maybe<VerificationCheck>;
  /** Reads and enables pagination through a set of `VerificationCheck`. */
  verificationChecks?: Maybe<VerificationCheckConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  filter?: InputMaybe<AgentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchProtectionRuleArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchProtectionRuleByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchProtectionRulesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BranchProtectionRuleCondition>;
  filter?: InputMaybe<BranchProtectionRuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BranchProtectionRuleOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChangeArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChangeByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChangeCondition>;
  filter?: InputMaybe<ChangeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangeOrderBy>>;
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
export type QueryMergeBatchArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMergeBatchByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMergeBatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeBatchCondition>;
  filter?: InputMaybe<MergeBatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeBatchOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMergeQueueEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeQueueEntryCondition>;
  filter?: InputMaybe<MergeQueueEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeQueueEntryOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMergeQueueEntryArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMergeQueueEntryByIdArgs = {
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
export type QueryOrganizationMemberArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationMemberByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationMembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationMemberCondition>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
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
export type QueryPersonalAccessTokenRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PersonalAccessTokenRepositoryCondition>;
  filter?: InputMaybe<PersonalAccessTokenRepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PersonalAccessTokenRepositoryOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonalAccessTokensArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PersonalAccessTokenCondition>;
  filter?: InputMaybe<PersonalAccessTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PersonalAccessTokenOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectRepositoryCondition>;
  filter?: InputMaybe<ProjectRepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRepositoryOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRepositoryArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRepositoryByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectVersionDriftArgs = {
  projectId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectOrderBy>>;
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
export type QueryRepositoryBlastRadiusArgs = {
  repositoryId: Scalars['UUID']['input'];
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
export type QueryStackArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStackByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStackMergeabilityArgs = {
  changeId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStacksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StackCondition>;
  filter?: InputMaybe<StackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StackOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicPullRequestArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicPullRequestByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicPullRequestCondition>;
  filter?: InputMaybe<TopicPullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicPullRequestOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicReadinessArgs = {
  topicId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTopicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicCondition>;
  filter?: InputMaybe<TopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVerificationCheckArgs = {
  rowId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVerificationCheckByIdArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVerificationChecksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<VerificationCheckCondition>;
  filter?: InputMaybe<VerificationCheckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationCheckOrderBy>>;
};

/** Input for reconciling a repository's project memberships from its descriptor. */
export type ReconcileProjectMembershipInput = {
  /** The repository whose arbor.project.json to apply. */
  repositoryId: Scalars['UUID']['input'];
};

/** Payload for the reconcileProjectMembership mutation. */
export type ReconcileProjectMembershipPayload = {
  __typename?: 'ReconcileProjectMembershipPayload';
  /** A non-fatal reason reconciliation produced nothing (e.g. no descriptor). */
  error?: Maybe<Scalars['String']['output']>;
  /** The number of projects the repository is now linked to via its descriptor. */
  linkedProjects?: Maybe<Scalars['Int']['output']>;
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

/** Input for renaming a repository. */
export type RenameRepositoryInput = {
  /** Optional new display name. The name is left unchanged when omitted. */
  newName?: InputMaybe<Scalars['String']['input']>;
  /** The new slug (URL-friendly name). Moves the on-disk storage. */
  newSlug: Scalars['String']['input'];
  /** The repository row ID. */
  rowId: Scalars['UUID']['input'];
};

/** Payload for renameRepository mutation. */
export type RenameRepositoryPayload = {
  __typename?: 'RenameRepositoryPayload';
  /** Error message if the rename failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The renamed repository. */
  repository?: Maybe<Repository>;
};

export type Repository = {
  __typename?: 'Repository';
  /** Reads and enables pagination through a set of `BranchProtectionRule`. */
  branchProtectionRules: BranchProtectionRuleConnection;
  /** Reads and enables pagination through a set of `Change`. */
  changes: ChangeConnection;
  /** Fetch a commit by its SHA. */
  commit?: Maybe<Commit>;
  createdAt: Scalars['Datetime']['output'];
  defaultBranch: Scalars['String']['output'];
  /** The default branch ref. */
  defaultBranchRef?: Maybe<Ref>;
  description?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ExternalDependency`. */
  externalDependencies: ExternalDependencyConnection;
  /** Reads and enables pagination through a set of `MergeBatch`. */
  mergeBatches: MergeBatchConnection;
  /** Reads and enables pagination through a set of `MergeQueueEntry`. */
  mergeQueueEntries: MergeQueueEntryConnection;
  name: Scalars['String']['output'];
  /** Reads a single `Organization` that is related to this `Repository`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `User` that is related to this `Repository`. */
  owner?: Maybe<User>;
  ownerId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `ProjectRepository`. */
  projectRepositories: ProjectRepositoryConnection;
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
  /** Reads and enables pagination through a set of `Stack`. */
  stacks: StackConnection;
  updatedAt: Scalars['Datetime']['output'];
  visibility: Visibility;
};


export type RepositoryBranchProtectionRulesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BranchProtectionRuleCondition>;
  filter?: InputMaybe<BranchProtectionRuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BranchProtectionRuleOrderBy>>;
};


export type RepositoryChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChangeCondition>;
  filter?: InputMaybe<ChangeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangeOrderBy>>;
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


export type RepositoryMergeBatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeBatchCondition>;
  filter?: InputMaybe<MergeBatchFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeBatchOrderBy>>;
};


export type RepositoryMergeQueueEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeQueueEntryCondition>;
  filter?: InputMaybe<MergeQueueEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeQueueEntryOrderBy>>;
};


export type RepositoryProjectRepositoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectRepositoryCondition>;
  filter?: InputMaybe<ProjectRepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRepositoryOrderBy>>;
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


export type RepositoryStacksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StackCondition>;
  filter?: InputMaybe<StackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StackOrderBy>>;
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
  /** Filter by the object’s `branchProtectionRules` relation. */
  branchProtectionRules?: InputMaybe<RepositoryToManyBranchProtectionRuleFilter>;
  /** Some related `branchProtectionRules` exist. */
  branchProtectionRulesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `changes` relation. */
  changes?: InputMaybe<RepositoryToManyChangeFilter>;
  /** Some related `changes` exist. */
  changesExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `mergeBatches` relation. */
  mergeBatches?: InputMaybe<RepositoryToManyMergeBatchFilter>;
  /** Some related `mergeBatches` exist. */
  mergeBatchesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `mergeQueueEntries` relation. */
  mergeQueueEntries?: InputMaybe<RepositoryToManyMergeQueueEntryFilter>;
  /** Some related `mergeQueueEntries` exist. */
  mergeQueueEntriesExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `projectRepositories` relation. */
  projectRepositories?: InputMaybe<RepositoryToManyProjectRepositoryFilter>;
  /** Some related `projectRepositories` exist. */
  projectRepositoriesExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `stacks` relation. */
  stacks?: InputMaybe<RepositoryToManyStackFilter>;
  /** Some related `stacks` exist. */
  stacksExist?: InputMaybe<Scalars['Boolean']['input']>;
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

/** Methods to use when ordering `Repository`. */
export enum RepositoryOrderBy {
  BranchProtectionRulesAverageRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_AVERAGE_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesAverageRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_AVERAGE_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesCountAsc = 'BRANCH_PROTECTION_RULES_COUNT_ASC',
  BranchProtectionRulesCountDesc = 'BRANCH_PROTECTION_RULES_COUNT_DESC',
  BranchProtectionRulesDistinctCountCreatedAtAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_CREATED_AT_ASC',
  BranchProtectionRulesDistinctCountCreatedAtDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_CREATED_AT_DESC',
  BranchProtectionRulesDistinctCountRefPatternAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REF_PATTERN_ASC',
  BranchProtectionRulesDistinctCountRefPatternDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REF_PATTERN_DESC',
  BranchProtectionRulesDistinctCountRepositoryIdAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  BranchProtectionRulesDistinctCountRepositoryIdDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  BranchProtectionRulesDistinctCountRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesDistinctCountRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesDistinctCountRequirePassingChecksAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REQUIRE_PASSING_CHECKS_ASC',
  BranchProtectionRulesDistinctCountRequirePassingChecksDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_REQUIRE_PASSING_CHECKS_DESC',
  BranchProtectionRulesDistinctCountRowIdAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_ROW_ID_ASC',
  BranchProtectionRulesDistinctCountRowIdDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_ROW_ID_DESC',
  BranchProtectionRulesDistinctCountUpdatedAtAsc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_UPDATED_AT_ASC',
  BranchProtectionRulesDistinctCountUpdatedAtDesc = 'BRANCH_PROTECTION_RULES_DISTINCT_COUNT_UPDATED_AT_DESC',
  BranchProtectionRulesMaxRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_MAX_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesMaxRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_MAX_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesMinRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_MIN_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesMinRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_MIN_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesStddevPopulationRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_STDDEV_POPULATION_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesStddevPopulationRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_STDDEV_POPULATION_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesStddevSampleRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_STDDEV_SAMPLE_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesStddevSampleRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_STDDEV_SAMPLE_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesSumRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_SUM_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesSumRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_SUM_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesVariancePopulationRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_VARIANCE_POPULATION_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesVariancePopulationRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_VARIANCE_POPULATION_REQUIRED_APPROVALS_DESC',
  BranchProtectionRulesVarianceSampleRequiredApprovalsAsc = 'BRANCH_PROTECTION_RULES_VARIANCE_SAMPLE_REQUIRED_APPROVALS_ASC',
  BranchProtectionRulesVarianceSampleRequiredApprovalsDesc = 'BRANCH_PROTECTION_RULES_VARIANCE_SAMPLE_REQUIRED_APPROVALS_DESC',
  ChangesAveragePositionAsc = 'CHANGES_AVERAGE_POSITION_ASC',
  ChangesAveragePositionDesc = 'CHANGES_AVERAGE_POSITION_DESC',
  ChangesCountAsc = 'CHANGES_COUNT_ASC',
  ChangesCountDesc = 'CHANGES_COUNT_DESC',
  ChangesDistinctCountCommitShaAsc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_ASC',
  ChangesDistinctCountCommitShaDesc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_DESC',
  ChangesDistinctCountCreatedAtAsc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_ASC',
  ChangesDistinctCountCreatedAtDesc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_DESC',
  ChangesDistinctCountDescriptionAsc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_ASC',
  ChangesDistinctCountDescriptionDesc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_DESC',
  ChangesDistinctCountHeadBranchAsc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_ASC',
  ChangesDistinctCountHeadBranchDesc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_DESC',
  ChangesDistinctCountParentChangeIdAsc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_ASC',
  ChangesDistinctCountParentChangeIdDesc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_DESC',
  ChangesDistinctCountPositionAsc = 'CHANGES_DISTINCT_COUNT_POSITION_ASC',
  ChangesDistinctCountPositionDesc = 'CHANGES_DISTINCT_COUNT_POSITION_DESC',
  ChangesDistinctCountPullRequestIdAsc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  ChangesDistinctCountPullRequestIdDesc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  ChangesDistinctCountRepositoryIdAsc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ChangesDistinctCountRepositoryIdDesc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ChangesDistinctCountRowIdAsc = 'CHANGES_DISTINCT_COUNT_ROW_ID_ASC',
  ChangesDistinctCountRowIdDesc = 'CHANGES_DISTINCT_COUNT_ROW_ID_DESC',
  ChangesDistinctCountStackIdAsc = 'CHANGES_DISTINCT_COUNT_STACK_ID_ASC',
  ChangesDistinctCountStackIdDesc = 'CHANGES_DISTINCT_COUNT_STACK_ID_DESC',
  ChangesDistinctCountStatusAsc = 'CHANGES_DISTINCT_COUNT_STATUS_ASC',
  ChangesDistinctCountStatusDesc = 'CHANGES_DISTINCT_COUNT_STATUS_DESC',
  ChangesDistinctCountTitleAsc = 'CHANGES_DISTINCT_COUNT_TITLE_ASC',
  ChangesDistinctCountTitleDesc = 'CHANGES_DISTINCT_COUNT_TITLE_DESC',
  ChangesDistinctCountUpdatedAtAsc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_ASC',
  ChangesDistinctCountUpdatedAtDesc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_DESC',
  ChangesMaxPositionAsc = 'CHANGES_MAX_POSITION_ASC',
  ChangesMaxPositionDesc = 'CHANGES_MAX_POSITION_DESC',
  ChangesMinPositionAsc = 'CHANGES_MIN_POSITION_ASC',
  ChangesMinPositionDesc = 'CHANGES_MIN_POSITION_DESC',
  ChangesStddevPopulationPositionAsc = 'CHANGES_STDDEV_POPULATION_POSITION_ASC',
  ChangesStddevPopulationPositionDesc = 'CHANGES_STDDEV_POPULATION_POSITION_DESC',
  ChangesStddevSamplePositionAsc = 'CHANGES_STDDEV_SAMPLE_POSITION_ASC',
  ChangesStddevSamplePositionDesc = 'CHANGES_STDDEV_SAMPLE_POSITION_DESC',
  ChangesSumPositionAsc = 'CHANGES_SUM_POSITION_ASC',
  ChangesSumPositionDesc = 'CHANGES_SUM_POSITION_DESC',
  ChangesVariancePopulationPositionAsc = 'CHANGES_VARIANCE_POPULATION_POSITION_ASC',
  ChangesVariancePopulationPositionDesc = 'CHANGES_VARIANCE_POPULATION_POSITION_DESC',
  ChangesVarianceSamplePositionAsc = 'CHANGES_VARIANCE_SAMPLE_POSITION_ASC',
  ChangesVarianceSamplePositionDesc = 'CHANGES_VARIANCE_SAMPLE_POSITION_DESC',
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
  MergeBatchesCountAsc = 'MERGE_BATCHES_COUNT_ASC',
  MergeBatchesCountDesc = 'MERGE_BATCHES_COUNT_DESC',
  MergeBatchesDistinctCountCiStatusAsc = 'MERGE_BATCHES_DISTINCT_COUNT_CI_STATUS_ASC',
  MergeBatchesDistinctCountCiStatusDesc = 'MERGE_BATCHES_DISTINCT_COUNT_CI_STATUS_DESC',
  MergeBatchesDistinctCountCreatedAtAsc = 'MERGE_BATCHES_DISTINCT_COUNT_CREATED_AT_ASC',
  MergeBatchesDistinctCountCreatedAtDesc = 'MERGE_BATCHES_DISTINCT_COUNT_CREATED_AT_DESC',
  MergeBatchesDistinctCountRepositoryIdAsc = 'MERGE_BATCHES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  MergeBatchesDistinctCountRepositoryIdDesc = 'MERGE_BATCHES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  MergeBatchesDistinctCountRowIdAsc = 'MERGE_BATCHES_DISTINCT_COUNT_ROW_ID_ASC',
  MergeBatchesDistinctCountRowIdDesc = 'MERGE_BATCHES_DISTINCT_COUNT_ROW_ID_DESC',
  MergeBatchesDistinctCountSpeculativeBranchAsc = 'MERGE_BATCHES_DISTINCT_COUNT_SPECULATIVE_BRANCH_ASC',
  MergeBatchesDistinctCountSpeculativeBranchDesc = 'MERGE_BATCHES_DISTINCT_COUNT_SPECULATIVE_BRANCH_DESC',
  MergeBatchesDistinctCountUpdatedAtAsc = 'MERGE_BATCHES_DISTINCT_COUNT_UPDATED_AT_ASC',
  MergeBatchesDistinctCountUpdatedAtDesc = 'MERGE_BATCHES_DISTINCT_COUNT_UPDATED_AT_DESC',
  MergeQueueEntriesAveragePositionAsc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_ASC',
  MergeQueueEntriesAveragePositionDesc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_DESC',
  MergeQueueEntriesCountAsc = 'MERGE_QUEUE_ENTRIES_COUNT_ASC',
  MergeQueueEntriesCountDesc = 'MERGE_QUEUE_ENTRIES_COUNT_DESC',
  MergeQueueEntriesDistinctCountBatchIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_ASC',
  MergeQueueEntriesDistinctCountBatchIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_DESC',
  MergeQueueEntriesDistinctCountCreatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_ASC',
  MergeQueueEntriesDistinctCountCreatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_DESC',
  MergeQueueEntriesDistinctCountEnqueuedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_ASC',
  MergeQueueEntriesDistinctCountEnqueuedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_DESC',
  MergeQueueEntriesDistinctCountPositionAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_ASC',
  MergeQueueEntriesDistinctCountPositionDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_DESC',
  MergeQueueEntriesDistinctCountPullRequestIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  MergeQueueEntriesDistinctCountPullRequestIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  MergeQueueEntriesDistinctCountRepositoryIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  MergeQueueEntriesDistinctCountRepositoryIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  MergeQueueEntriesDistinctCountRowIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_ASC',
  MergeQueueEntriesDistinctCountRowIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_DESC',
  MergeQueueEntriesDistinctCountStackIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_ASC',
  MergeQueueEntriesDistinctCountStackIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_DESC',
  MergeQueueEntriesDistinctCountStateAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_ASC',
  MergeQueueEntriesDistinctCountStateDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_DESC',
  MergeQueueEntriesDistinctCountTargetBranchAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  MergeQueueEntriesDistinctCountTargetBranchDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  MergeQueueEntriesDistinctCountUpdatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_ASC',
  MergeQueueEntriesDistinctCountUpdatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_DESC',
  MergeQueueEntriesMaxPositionAsc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_ASC',
  MergeQueueEntriesMaxPositionDesc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_DESC',
  MergeQueueEntriesMinPositionAsc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_ASC',
  MergeQueueEntriesMinPositionDesc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_DESC',
  MergeQueueEntriesStddevPopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_ASC',
  MergeQueueEntriesStddevPopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_DESC',
  MergeQueueEntriesStddevSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_ASC',
  MergeQueueEntriesStddevSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_DESC',
  MergeQueueEntriesSumPositionAsc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_ASC',
  MergeQueueEntriesSumPositionDesc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_DESC',
  MergeQueueEntriesVariancePopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_ASC',
  MergeQueueEntriesVariancePopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_DESC',
  MergeQueueEntriesVarianceSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_ASC',
  MergeQueueEntriesVarianceSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PersonalAccessTokenRepositoriesCountAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_COUNT_ASC',
  PersonalAccessTokenRepositoriesCountDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_COUNT_DESC',
  PersonalAccessTokenRepositoriesDistinctCountCreatedAtAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_ASC',
  PersonalAccessTokenRepositoriesDistinctCountCreatedAtDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_DESC',
  PersonalAccessTokenRepositoriesDistinctCountPathPatternsAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PATH_PATTERNS_ASC',
  PersonalAccessTokenRepositoriesDistinctCountPathPatternsDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PATH_PATTERNS_DESC',
  PersonalAccessTokenRepositoriesDistinctCountPersonalAccessTokenIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PERSONAL_ACCESS_TOKEN_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountPersonalAccessTokenIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_PERSONAL_ACCESS_TOKEN_ID_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRefPatternsAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REF_PATTERNS_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRefPatternsDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REF_PATTERNS_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRepositoryIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRepositoryIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  PersonalAccessTokenRepositoriesDistinctCountRowIdAsc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_ROW_ID_ASC',
  PersonalAccessTokenRepositoriesDistinctCountRowIdDesc = 'PERSONAL_ACCESS_TOKEN_REPOSITORIES_DISTINCT_COUNT_ROW_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectRepositoriesCountAsc = 'PROJECT_REPOSITORIES_COUNT_ASC',
  ProjectRepositoriesCountDesc = 'PROJECT_REPOSITORIES_COUNT_DESC',
  ProjectRepositoriesDistinctCountCreatedAtAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_ASC',
  ProjectRepositoriesDistinctCountCreatedAtDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_CREATED_AT_DESC',
  ProjectRepositoriesDistinctCountDetectionSourceAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_DETECTION_SOURCE_ASC',
  ProjectRepositoriesDistinctCountDetectionSourceDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_DETECTION_SOURCE_DESC',
  ProjectRepositoriesDistinctCountProjectIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_PROJECT_ID_ASC',
  ProjectRepositoriesDistinctCountProjectIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_PROJECT_ID_DESC',
  ProjectRepositoriesDistinctCountRepositoryIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ProjectRepositoriesDistinctCountRepositoryIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ProjectRepositoriesDistinctCountRowIdAsc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_ROW_ID_ASC',
  ProjectRepositoriesDistinctCountRowIdDesc = 'PROJECT_REPOSITORIES_DISTINCT_COUNT_ROW_ID_DESC',
  PullRequestsAverageNumberAsc = 'PULL_REQUESTS_AVERAGE_NUMBER_ASC',
  PullRequestsAverageNumberDesc = 'PULL_REQUESTS_AVERAGE_NUMBER_DESC',
  PullRequestsCountAsc = 'PULL_REQUESTS_COUNT_ASC',
  PullRequestsCountDesc = 'PULL_REQUESTS_COUNT_DESC',
  PullRequestsDistinctCountAuthoredByAgentIdAsc = 'PULL_REQUESTS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  PullRequestsDistinctCountAuthoredByAgentIdDesc = 'PULL_REQUESTS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
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
  StacksCountAsc = 'STACKS_COUNT_ASC',
  StacksCountDesc = 'STACKS_COUNT_DESC',
  StacksDistinctCountAuthoredByAgentIdAsc = 'STACKS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  StacksDistinctCountAuthoredByAgentIdDesc = 'STACKS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
  StacksDistinctCountAuthorIdAsc = 'STACKS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  StacksDistinctCountAuthorIdDesc = 'STACKS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  StacksDistinctCountBaseBranchAsc = 'STACKS_DISTINCT_COUNT_BASE_BRANCH_ASC',
  StacksDistinctCountBaseBranchDesc = 'STACKS_DISTINCT_COUNT_BASE_BRANCH_DESC',
  StacksDistinctCountCreatedAtAsc = 'STACKS_DISTINCT_COUNT_CREATED_AT_ASC',
  StacksDistinctCountCreatedAtDesc = 'STACKS_DISTINCT_COUNT_CREATED_AT_DESC',
  StacksDistinctCountDescriptionAsc = 'STACKS_DISTINCT_COUNT_DESCRIPTION_ASC',
  StacksDistinctCountDescriptionDesc = 'STACKS_DISTINCT_COUNT_DESCRIPTION_DESC',
  StacksDistinctCountRepositoryIdAsc = 'STACKS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  StacksDistinctCountRepositoryIdDesc = 'STACKS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  StacksDistinctCountRowIdAsc = 'STACKS_DISTINCT_COUNT_ROW_ID_ASC',
  StacksDistinctCountRowIdDesc = 'STACKS_DISTINCT_COUNT_ROW_ID_DESC',
  StacksDistinctCountStatusAsc = 'STACKS_DISTINCT_COUNT_STATUS_ASC',
  StacksDistinctCountStatusDesc = 'STACKS_DISTINCT_COUNT_STATUS_DESC',
  StacksDistinctCountTitleAsc = 'STACKS_DISTINCT_COUNT_TITLE_ASC',
  StacksDistinctCountTitleDesc = 'STACKS_DISTINCT_COUNT_TITLE_DESC',
  StacksDistinctCountUpdatedAtAsc = 'STACKS_DISTINCT_COUNT_UPDATED_AT_ASC',
  StacksDistinctCountUpdatedAtDesc = 'STACKS_DISTINCT_COUNT_UPDATED_AT_DESC',
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
  detectionSource: Scalars['String']['output'];
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
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
  detectionSource?: InputMaybe<StringFilter>;
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
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
  DetectionSourceAsc = 'DETECTION_SOURCE_ASC',
  DetectionSourceDesc = 'DETECTION_SOURCE_DESC',
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
  detectionSource?: InputMaybe<Scalars['String']['input']>;
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

/** A filter to be used against many `BranchProtectionRule` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyBranchProtectionRuleFilter = {
  /** Aggregates across related `BranchProtectionRule` match the filter criteria. */
  aggregates?: InputMaybe<BranchProtectionRuleAggregatesFilter>;
  /** Every related `BranchProtectionRule` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BranchProtectionRuleFilter>;
  /** No related `BranchProtectionRule` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BranchProtectionRuleFilter>;
  /** Some related `BranchProtectionRule` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BranchProtectionRuleFilter>;
};

/** A filter to be used against many `Change` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyChangeFilter = {
  /** Aggregates across related `Change` match the filter criteria. */
  aggregates?: InputMaybe<ChangeAggregatesFilter>;
  /** Every related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ChangeFilter>;
  /** No related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ChangeFilter>;
  /** Some related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ChangeFilter>;
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

/** A filter to be used against many `MergeBatch` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyMergeBatchFilter = {
  /** Aggregates across related `MergeBatch` match the filter criteria. */
  aggregates?: InputMaybe<MergeBatchAggregatesFilter>;
  /** Every related `MergeBatch` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MergeBatchFilter>;
  /** No related `MergeBatch` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MergeBatchFilter>;
  /** Some related `MergeBatch` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MergeBatchFilter>;
};

/** A filter to be used against many `MergeQueueEntry` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyMergeQueueEntryFilter = {
  /** Aggregates across related `MergeQueueEntry` match the filter criteria. */
  aggregates?: InputMaybe<MergeQueueEntryAggregatesFilter>;
  /** Every related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MergeQueueEntryFilter>;
  /** No related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MergeQueueEntryFilter>;
  /** Some related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MergeQueueEntryFilter>;
};

/** A filter to be used against many `ProjectRepository` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyProjectRepositoryFilter = {
  /** Aggregates across related `ProjectRepository` match the filter criteria. */
  aggregates?: InputMaybe<ProjectRepositoryAggregatesFilter>;
  /** Every related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProjectRepositoryFilter>;
  /** No related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProjectRepositoryFilter>;
  /** Some related `ProjectRepository` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProjectRepositoryFilter>;
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

/** A filter to be used against many `Stack` object types. All fields are combined with a logical ‘and.’ */
export type RepositoryToManyStackFilter = {
  /** Aggregates across related `Stack` match the filter criteria. */
  aggregates?: InputMaybe<StackAggregatesFilter>;
  /** Every related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<StackFilter>;
  /** No related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<StackFilter>;
  /** Some related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<StackFilter>;
};

/** Input for closing or reopening a pull request. */
export type SetPullRequestStateInput = {
  /** The pull request to act on. */
  pullRequestId: Scalars['UUID']['input'];
};

/** Payload for the closePullRequest / reopenPullRequest mutations. */
export type SetPullRequestStatePayload = {
  __typename?: 'SetPullRequestStatePayload';
  /** Error message if the change failed. */
  error?: Maybe<Scalars['String']['output']>;
  /** The per-repository pull request number. */
  number?: Maybe<Scalars['Int']['output']>;
  /** The affected pull request row id. */
  rowId?: Maybe<Scalars['UUID']['output']>;
  /** The pull request's state after the change. */
  state?: Maybe<Scalars['String']['output']>;
};

export type Stack = Node & {
  __typename?: 'Stack';
  /** Reads a single `User` that is related to this `Stack`. */
  author?: Maybe<User>;
  authorId: Scalars['UUID']['output'];
  /** Reads a single `Agent` that is related to this `Stack`. */
  authoredByAgent?: Maybe<Agent>;
  authoredByAgentId?: Maybe<Scalars['UUID']['output']>;
  baseBranch: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Change`. */
  changes: ChangeConnection;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `MergeQueueEntry`. */
  mergeQueueEntries: MergeQueueEntryConnection;
  /** Reads a single `Repository` that is related to this `Stack`. */
  repository?: Maybe<Repository>;
  repositoryId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};


export type StackChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChangeCondition>;
  filter?: InputMaybe<ChangeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChangeOrderBy>>;
};


export type StackMergeQueueEntriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MergeQueueEntryCondition>;
  filter?: InputMaybe<MergeQueueEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MergeQueueEntryOrderBy>>;
};

export type StackAggregates = {
  __typename?: 'StackAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<StackDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `Stack` object types. */
export type StackAggregatesFilter = {
  /** Distinct count aggregate over matching `Stack` objects. */
  distinctCount?: InputMaybe<StackDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Stack` object to be included within the aggregate. */
  filter?: InputMaybe<StackFilter>;
};

/** A condition to be used against `Stack` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StackCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `authoredByAgentId` field. */
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `baseBranch` field. */
  baseBranch?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Stack` values. */
export type StackConnection = {
  __typename?: 'StackConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<StackAggregates>;
  /** A list of edges which contains the `Stack` and cursor to aid in pagination. */
  edges: Array<StackEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<StackAggregates>>;
  /** A list of `Stack` objects. */
  nodes: Array<Stack>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Stack` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Stack` values. */
export type StackConnectionGroupedAggregatesArgs = {
  groupBy: Array<StackGroupBy>;
  having?: InputMaybe<StackHavingInput>;
};

export type StackDistinctCountAggregateFilter = {
  authorId?: InputMaybe<BigIntFilter>;
  authoredByAgentId?: InputMaybe<BigIntFilter>;
  baseBranch?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  repositoryId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type StackDistinctCountAggregates = {
  __typename?: 'StackDistinctCountAggregates';
  /** Distinct count of authorId across the matching connection */
  authorId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of authoredByAgentId across the matching connection */
  authoredByAgentId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of baseBranch across the matching connection */
  baseBranch?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of repositoryId across the matching connection */
  repositoryId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Stack` edge in the connection. */
export type StackEdge = {
  __typename?: 'StackEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Stack` at the end of the edge. */
  node: Stack;
};

/** A filter to be used against `Stack` object types. All fields are combined with a logical ‘and.’ */
export type StackFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StackFilter>>;
  /** Filter by the object’s `author` relation. */
  author?: InputMaybe<UserFilter>;
  /** Filter by the object’s `authorId` field. */
  authorId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `authoredByAgent` relation. */
  authoredByAgent?: InputMaybe<AgentFilter>;
  /** A related `authoredByAgent` exists. */
  authoredByAgentExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `authoredByAgentId` field. */
  authoredByAgentId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `baseBranch` field. */
  baseBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `changes` relation. */
  changes?: InputMaybe<StackToManyChangeFilter>;
  /** Some related `changes` exist. */
  changesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `mergeQueueEntries` relation. */
  mergeQueueEntries?: InputMaybe<StackToManyMergeQueueEntryFilter>;
  /** Some related `mergeQueueEntries` exist. */
  mergeQueueEntriesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<StackFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StackFilter>>;
  /** Filter by the object’s `repository` relation. */
  repository?: InputMaybe<RepositoryFilter>;
  /** Filter by the object’s `repositoryId` field. */
  repositoryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Stack` for usage during aggregation. */
export enum StackGroupBy {
  AuthoredByAgentId = 'AUTHORED_BY_AGENT_ID',
  AuthorId = 'AUTHOR_ID',
  BaseBranch = 'BASE_BRANCH',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  RepositoryId = 'REPOSITORY_ID',
  Status = 'STATUS',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type StackHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Stack` aggregates. */
export type StackHavingInput = {
  AND?: InputMaybe<Array<StackHavingInput>>;
  OR?: InputMaybe<Array<StackHavingInput>>;
  average?: InputMaybe<StackHavingAverageInput>;
  distinctCount?: InputMaybe<StackHavingDistinctCountInput>;
  max?: InputMaybe<StackHavingMaxInput>;
  min?: InputMaybe<StackHavingMinInput>;
  stddevPopulation?: InputMaybe<StackHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<StackHavingStddevSampleInput>;
  sum?: InputMaybe<StackHavingSumInput>;
  variancePopulation?: InputMaybe<StackHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<StackHavingVarianceSampleInput>;
};

export type StackHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type StackHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Stack` */
export type StackInput = {
  authorId: Scalars['UUID']['input'];
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
  baseBranch?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  repositoryId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Whether a change can merge, derived from its required verification checks. */
export type StackMergeabilityResult = {
  __typename?: 'StackMergeabilityResult';
  /** Names of the required checks that are not yet passed. */
  blockingChecks: Array<Scalars['String']['output']>;
  /** True when every required check has passed. */
  mergeable: Scalars['Boolean']['output'];
};

/** Methods to use when ordering `Stack`. */
export enum StackOrderBy {
  AuthoredByAgentIdAsc = 'AUTHORED_BY_AGENT_ID_ASC',
  AuthoredByAgentIdDesc = 'AUTHORED_BY_AGENT_ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  BaseBranchAsc = 'BASE_BRANCH_ASC',
  BaseBranchDesc = 'BASE_BRANCH_DESC',
  ChangesAveragePositionAsc = 'CHANGES_AVERAGE_POSITION_ASC',
  ChangesAveragePositionDesc = 'CHANGES_AVERAGE_POSITION_DESC',
  ChangesCountAsc = 'CHANGES_COUNT_ASC',
  ChangesCountDesc = 'CHANGES_COUNT_DESC',
  ChangesDistinctCountCommitShaAsc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_ASC',
  ChangesDistinctCountCommitShaDesc = 'CHANGES_DISTINCT_COUNT_COMMIT_SHA_DESC',
  ChangesDistinctCountCreatedAtAsc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_ASC',
  ChangesDistinctCountCreatedAtDesc = 'CHANGES_DISTINCT_COUNT_CREATED_AT_DESC',
  ChangesDistinctCountDescriptionAsc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_ASC',
  ChangesDistinctCountDescriptionDesc = 'CHANGES_DISTINCT_COUNT_DESCRIPTION_DESC',
  ChangesDistinctCountHeadBranchAsc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_ASC',
  ChangesDistinctCountHeadBranchDesc = 'CHANGES_DISTINCT_COUNT_HEAD_BRANCH_DESC',
  ChangesDistinctCountParentChangeIdAsc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_ASC',
  ChangesDistinctCountParentChangeIdDesc = 'CHANGES_DISTINCT_COUNT_PARENT_CHANGE_ID_DESC',
  ChangesDistinctCountPositionAsc = 'CHANGES_DISTINCT_COUNT_POSITION_ASC',
  ChangesDistinctCountPositionDesc = 'CHANGES_DISTINCT_COUNT_POSITION_DESC',
  ChangesDistinctCountPullRequestIdAsc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  ChangesDistinctCountPullRequestIdDesc = 'CHANGES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  ChangesDistinctCountRepositoryIdAsc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  ChangesDistinctCountRepositoryIdDesc = 'CHANGES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  ChangesDistinctCountRowIdAsc = 'CHANGES_DISTINCT_COUNT_ROW_ID_ASC',
  ChangesDistinctCountRowIdDesc = 'CHANGES_DISTINCT_COUNT_ROW_ID_DESC',
  ChangesDistinctCountStackIdAsc = 'CHANGES_DISTINCT_COUNT_STACK_ID_ASC',
  ChangesDistinctCountStackIdDesc = 'CHANGES_DISTINCT_COUNT_STACK_ID_DESC',
  ChangesDistinctCountStatusAsc = 'CHANGES_DISTINCT_COUNT_STATUS_ASC',
  ChangesDistinctCountStatusDesc = 'CHANGES_DISTINCT_COUNT_STATUS_DESC',
  ChangesDistinctCountTitleAsc = 'CHANGES_DISTINCT_COUNT_TITLE_ASC',
  ChangesDistinctCountTitleDesc = 'CHANGES_DISTINCT_COUNT_TITLE_DESC',
  ChangesDistinctCountUpdatedAtAsc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_ASC',
  ChangesDistinctCountUpdatedAtDesc = 'CHANGES_DISTINCT_COUNT_UPDATED_AT_DESC',
  ChangesMaxPositionAsc = 'CHANGES_MAX_POSITION_ASC',
  ChangesMaxPositionDesc = 'CHANGES_MAX_POSITION_DESC',
  ChangesMinPositionAsc = 'CHANGES_MIN_POSITION_ASC',
  ChangesMinPositionDesc = 'CHANGES_MIN_POSITION_DESC',
  ChangesStddevPopulationPositionAsc = 'CHANGES_STDDEV_POPULATION_POSITION_ASC',
  ChangesStddevPopulationPositionDesc = 'CHANGES_STDDEV_POPULATION_POSITION_DESC',
  ChangesStddevSamplePositionAsc = 'CHANGES_STDDEV_SAMPLE_POSITION_ASC',
  ChangesStddevSamplePositionDesc = 'CHANGES_STDDEV_SAMPLE_POSITION_DESC',
  ChangesSumPositionAsc = 'CHANGES_SUM_POSITION_ASC',
  ChangesSumPositionDesc = 'CHANGES_SUM_POSITION_DESC',
  ChangesVariancePopulationPositionAsc = 'CHANGES_VARIANCE_POPULATION_POSITION_ASC',
  ChangesVariancePopulationPositionDesc = 'CHANGES_VARIANCE_POPULATION_POSITION_DESC',
  ChangesVarianceSamplePositionAsc = 'CHANGES_VARIANCE_SAMPLE_POSITION_ASC',
  ChangesVarianceSamplePositionDesc = 'CHANGES_VARIANCE_SAMPLE_POSITION_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  MergeQueueEntriesAveragePositionAsc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_ASC',
  MergeQueueEntriesAveragePositionDesc = 'MERGE_QUEUE_ENTRIES_AVERAGE_POSITION_DESC',
  MergeQueueEntriesCountAsc = 'MERGE_QUEUE_ENTRIES_COUNT_ASC',
  MergeQueueEntriesCountDesc = 'MERGE_QUEUE_ENTRIES_COUNT_DESC',
  MergeQueueEntriesDistinctCountBatchIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_ASC',
  MergeQueueEntriesDistinctCountBatchIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_BATCH_ID_DESC',
  MergeQueueEntriesDistinctCountCreatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_ASC',
  MergeQueueEntriesDistinctCountCreatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_CREATED_AT_DESC',
  MergeQueueEntriesDistinctCountEnqueuedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_ASC',
  MergeQueueEntriesDistinctCountEnqueuedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ENQUEUED_AT_DESC',
  MergeQueueEntriesDistinctCountPositionAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_ASC',
  MergeQueueEntriesDistinctCountPositionDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_POSITION_DESC',
  MergeQueueEntriesDistinctCountPullRequestIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  MergeQueueEntriesDistinctCountPullRequestIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  MergeQueueEntriesDistinctCountRepositoryIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  MergeQueueEntriesDistinctCountRepositoryIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  MergeQueueEntriesDistinctCountRowIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_ASC',
  MergeQueueEntriesDistinctCountRowIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_ROW_ID_DESC',
  MergeQueueEntriesDistinctCountStackIdAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_ASC',
  MergeQueueEntriesDistinctCountStackIdDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STACK_ID_DESC',
  MergeQueueEntriesDistinctCountStateAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_ASC',
  MergeQueueEntriesDistinctCountStateDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_STATE_DESC',
  MergeQueueEntriesDistinctCountTargetBranchAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_ASC',
  MergeQueueEntriesDistinctCountTargetBranchDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_TARGET_BRANCH_DESC',
  MergeQueueEntriesDistinctCountUpdatedAtAsc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_ASC',
  MergeQueueEntriesDistinctCountUpdatedAtDesc = 'MERGE_QUEUE_ENTRIES_DISTINCT_COUNT_UPDATED_AT_DESC',
  MergeQueueEntriesMaxPositionAsc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_ASC',
  MergeQueueEntriesMaxPositionDesc = 'MERGE_QUEUE_ENTRIES_MAX_POSITION_DESC',
  MergeQueueEntriesMinPositionAsc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_ASC',
  MergeQueueEntriesMinPositionDesc = 'MERGE_QUEUE_ENTRIES_MIN_POSITION_DESC',
  MergeQueueEntriesStddevPopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_ASC',
  MergeQueueEntriesStddevPopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_POPULATION_POSITION_DESC',
  MergeQueueEntriesStddevSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_ASC',
  MergeQueueEntriesStddevSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_STDDEV_SAMPLE_POSITION_DESC',
  MergeQueueEntriesSumPositionAsc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_ASC',
  MergeQueueEntriesSumPositionDesc = 'MERGE_QUEUE_ENTRIES_SUM_POSITION_DESC',
  MergeQueueEntriesVariancePopulationPositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_ASC',
  MergeQueueEntriesVariancePopulationPositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_POPULATION_POSITION_DESC',
  MergeQueueEntriesVarianceSamplePositionAsc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_ASC',
  MergeQueueEntriesVarianceSamplePositionDesc = 'MERGE_QUEUE_ENTRIES_VARIANCE_SAMPLE_POSITION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepositoryIdAsc = 'REPOSITORY_ID_ASC',
  RepositoryIdDesc = 'REPOSITORY_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `Stack`. Fields that are set will be updated. */
export type StackPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
  authoredByAgentId?: InputMaybe<Scalars['UUID']['input']>;
  baseBranch?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  repositoryId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against many `Change` object types. All fields are combined with a logical ‘and.’ */
export type StackToManyChangeFilter = {
  /** Aggregates across related `Change` match the filter criteria. */
  aggregates?: InputMaybe<ChangeAggregatesFilter>;
  /** Every related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ChangeFilter>;
  /** No related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ChangeFilter>;
  /** Some related `Change` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ChangeFilter>;
};

/** A filter to be used against many `MergeQueueEntry` object types. All fields are combined with a logical ‘and.’ */
export type StackToManyMergeQueueEntryFilter = {
  /** Aggregates across related `MergeQueueEntry` match the filter criteria. */
  aggregates?: InputMaybe<MergeQueueEntryAggregatesFilter>;
  /** Every related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MergeQueueEntryFilter>;
  /** No related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MergeQueueEntryFilter>;
  /** Some related `MergeQueueEntry` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MergeQueueEntryFilter>;
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

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Input for submitting a closed-beta tester application. */
export type SubmitTesterApplicationInput = {
  /** Free-form application form answers (use case, stack, team size, links, notes). */
  answers?: InputMaybe<Scalars['JSON']['input']>;
  /** Whether the applicant accepted the beta confidentiality terms. Must be true. */
  ndaAccepted: Scalars['Boolean']['input'];
  /** The version of the beta terms the applicant accepted. */
  ndaVersion: Scalars['String']['input'];
};

/** Payload for the submitTesterApplication mutation, the applicant's row. */
export type SubmitTesterApplicationPayload = {
  __typename?: 'SubmitTesterApplicationPayload';
  /** When the application was created. */
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  /** When the beta terms were accepted. */
  ndaAcceptedAt?: Maybe<Scalars['Datetime']['output']>;
  /** The accepted beta terms version. */
  ndaVersion?: Maybe<Scalars['String']['output']>;
  /** Reviewer note, present after a decision. */
  reviewerNote?: Maybe<Scalars['String']['output']>;
  /** The application row ID. */
  rowId?: Maybe<Scalars['UUID']['output']>;
  /** Lifecycle status (pending, approved, declined). */
  status?: Maybe<Scalars['String']['output']>;
  /** When the application was last updated. */
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  /** Fires when a comment on the given pull request is created, updated, or deleted. */
  pullRequestCommentChanged?: Maybe<PullRequestCommentChangePayload>;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionPullRequestCommentChangedArgs = {
  pullRequestId: Scalars['UUID']['input'];
};

export type Topic = Node & {
  __typename?: 'Topic';
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Organization` that is related to this `Topic`. */
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `User` that is related to this `Topic`. */
  owner?: Maybe<User>;
  ownerId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `TopicPullRequest`. */
  topicPullRequests: TopicPullRequestConnection;
  updatedAt: Scalars['Datetime']['output'];
};


export type TopicTopicPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicPullRequestCondition>;
  filter?: InputMaybe<TopicPullRequestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicPullRequestOrderBy>>;
};

export type TopicAggregates = {
  __typename?: 'TopicAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TopicDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `Topic` object types. */
export type TopicAggregatesFilter = {
  /** Distinct count aggregate over matching `Topic` objects. */
  distinctCount?: InputMaybe<TopicDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Topic` object to be included within the aggregate. */
  filter?: InputMaybe<TopicFilter>;
};

/** A condition to be used against `Topic` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TopicCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `ownerId` field. */
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Topic` values. */
export type TopicConnection = {
  __typename?: 'TopicConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TopicAggregates>;
  /** A list of edges which contains the `Topic` and cursor to aid in pagination. */
  edges: Array<TopicEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TopicAggregates>>;
  /** A list of `Topic` objects. */
  nodes: Array<Topic>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Topic` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Topic` values. */
export type TopicConnectionGroupedAggregatesArgs = {
  groupBy: Array<TopicGroupBy>;
  having?: InputMaybe<TopicHavingInput>;
};

export type TopicDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  ownerId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type TopicDistinctCountAggregates = {
  __typename?: 'TopicDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of organizationId across the matching connection */
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of ownerId across the matching connection */
  ownerId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `Topic` edge in the connection. */
export type TopicEdge = {
  __typename?: 'TopicEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Topic` at the end of the edge. */
  node: Topic;
};

/** A filter to be used against `Topic` object types. All fields are combined with a logical ‘and.’ */
export type TopicFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TopicFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TopicFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TopicFilter>>;
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
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `topicPullRequests` relation. */
  topicPullRequests?: InputMaybe<TopicToManyTopicPullRequestFilter>;
  /** Some related `topicPullRequests` exist. */
  topicPullRequestsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Topic` for usage during aggregation. */
export enum TopicGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  OrganizationId = 'ORGANIZATION_ID',
  OwnerId = 'OWNER_ID',
  Status = 'STATUS',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type TopicHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Topic` aggregates. */
export type TopicHavingInput = {
  AND?: InputMaybe<Array<TopicHavingInput>>;
  OR?: InputMaybe<Array<TopicHavingInput>>;
  average?: InputMaybe<TopicHavingAverageInput>;
  distinctCount?: InputMaybe<TopicHavingDistinctCountInput>;
  max?: InputMaybe<TopicHavingMaxInput>;
  min?: InputMaybe<TopicHavingMinInput>;
  stddevPopulation?: InputMaybe<TopicHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TopicHavingStddevSampleInput>;
  sum?: InputMaybe<TopicHavingSumInput>;
  variancePopulation?: InputMaybe<TopicHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TopicHavingVarianceSampleInput>;
};

export type TopicHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Topic` */
export type TopicInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `Topic`. */
export enum TopicOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TopicPullRequestsCountAsc = 'TOPIC_PULL_REQUESTS_COUNT_ASC',
  TopicPullRequestsCountDesc = 'TOPIC_PULL_REQUESTS_COUNT_DESC',
  TopicPullRequestsDistinctCountCreatedAtAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_ASC',
  TopicPullRequestsDistinctCountCreatedAtDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_CREATED_AT_DESC',
  TopicPullRequestsDistinctCountPullRequestIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_PULL_REQUEST_ID_ASC',
  TopicPullRequestsDistinctCountPullRequestIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_PULL_REQUEST_ID_DESC',
  TopicPullRequestsDistinctCountRowIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_ASC',
  TopicPullRequestsDistinctCountRowIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_ROW_ID_DESC',
  TopicPullRequestsDistinctCountTopicIdAsc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_TOPIC_ID_ASC',
  TopicPullRequestsDistinctCountTopicIdDesc = 'TOPIC_PULL_REQUESTS_DISTINCT_COUNT_TOPIC_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `Topic`. Fields that are set will be updated. */
export type TopicPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  ownerId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TopicPullRequest = Node & {
  __typename?: 'TopicPullRequest';
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `PullRequest` that is related to this `TopicPullRequest`. */
  pullRequest?: Maybe<PullRequest>;
  pullRequestId: Scalars['UUID']['output'];
  rowId: Scalars['UUID']['output'];
  /** Reads a single `Topic` that is related to this `TopicPullRequest`. */
  topic?: Maybe<Topic>;
  topicId: Scalars['UUID']['output'];
};

export type TopicPullRequestAggregates = {
  __typename?: 'TopicPullRequestAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TopicPullRequestDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `TopicPullRequest` object types. */
export type TopicPullRequestAggregatesFilter = {
  /** Distinct count aggregate over matching `TopicPullRequest` objects. */
  distinctCount?: InputMaybe<TopicPullRequestDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `TopicPullRequest` object to be included within the aggregate. */
  filter?: InputMaybe<TopicPullRequestFilter>;
};

/**
 * A condition to be used against `TopicPullRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TopicPullRequestCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `topicId` field. */
  topicId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `TopicPullRequest` values. */
export type TopicPullRequestConnection = {
  __typename?: 'TopicPullRequestConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TopicPullRequestAggregates>;
  /** A list of edges which contains the `TopicPullRequest` and cursor to aid in pagination. */
  edges: Array<TopicPullRequestEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TopicPullRequestAggregates>>;
  /** A list of `TopicPullRequest` objects. */
  nodes: Array<TopicPullRequest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TopicPullRequest` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `TopicPullRequest` values. */
export type TopicPullRequestConnectionGroupedAggregatesArgs = {
  groupBy: Array<TopicPullRequestGroupBy>;
  having?: InputMaybe<TopicPullRequestHavingInput>;
};

export type TopicPullRequestDistinctCountAggregateFilter = {
  createdAt?: InputMaybe<BigIntFilter>;
  pullRequestId?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  topicId?: InputMaybe<BigIntFilter>;
};

export type TopicPullRequestDistinctCountAggregates = {
  __typename?: 'TopicPullRequestDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of pullRequestId across the matching connection */
  pullRequestId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of topicId across the matching connection */
  topicId?: Maybe<Scalars['BigInt']['output']>;
};

/** A `TopicPullRequest` edge in the connection. */
export type TopicPullRequestEdge = {
  __typename?: 'TopicPullRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TopicPullRequest` at the end of the edge. */
  node: TopicPullRequest;
};

/** A filter to be used against `TopicPullRequest` object types. All fields are combined with a logical ‘and.’ */
export type TopicPullRequestFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TopicPullRequestFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TopicPullRequestFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TopicPullRequestFilter>>;
  /** Filter by the object’s `pullRequest` relation. */
  pullRequest?: InputMaybe<PullRequestFilter>;
  /** Filter by the object’s `pullRequestId` field. */
  pullRequestId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `topic` relation. */
  topic?: InputMaybe<TopicFilter>;
  /** Filter by the object’s `topicId` field. */
  topicId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `TopicPullRequest` for usage during aggregation. */
export enum TopicPullRequestGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  PullRequestId = 'PULL_REQUEST_ID',
  TopicId = 'TOPIC_ID'
}

export type TopicPullRequestHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `TopicPullRequest` aggregates. */
export type TopicPullRequestHavingInput = {
  AND?: InputMaybe<Array<TopicPullRequestHavingInput>>;
  OR?: InputMaybe<Array<TopicPullRequestHavingInput>>;
  average?: InputMaybe<TopicPullRequestHavingAverageInput>;
  distinctCount?: InputMaybe<TopicPullRequestHavingDistinctCountInput>;
  max?: InputMaybe<TopicPullRequestHavingMaxInput>;
  min?: InputMaybe<TopicPullRequestHavingMinInput>;
  stddevPopulation?: InputMaybe<TopicPullRequestHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TopicPullRequestHavingStddevSampleInput>;
  sum?: InputMaybe<TopicPullRequestHavingSumInput>;
  variancePopulation?: InputMaybe<TopicPullRequestHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TopicPullRequestHavingVarianceSampleInput>;
};

export type TopicPullRequestHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

export type TopicPullRequestHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `TopicPullRequest` */
export type TopicPullRequestInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  pullRequestId: Scalars['UUID']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  topicId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `TopicPullRequest`. */
export enum TopicPullRequestOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestIdAsc = 'PULL_REQUEST_ID_ASC',
  PullRequestIdDesc = 'PULL_REQUEST_ID_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  TopicIdAsc = 'TOPIC_ID_ASC',
  TopicIdDesc = 'TOPIC_ID_DESC'
}

/** Represents an update to a `TopicPullRequest`. Fields that are set will be updated. */
export type TopicPullRequestPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  pullRequestId?: InputMaybe<Scalars['UUID']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  topicId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Whether a topic can submit all-or-nothing, and the members blocking it. */
export type TopicReadiness = {
  __typename?: 'TopicReadiness';
  /** The member pull requests that cannot land yet, by row id. */
  blockingPullRequestIds?: Maybe<Array<Scalars['UUID']['output']>>;
  /** True when every member pull request is landable (merged or open). */
  ready?: Maybe<Scalars['Boolean']['output']>;
};

/** A filter to be used against many `TopicPullRequest` object types. All fields are combined with a logical ‘and.’ */
export type TopicToManyTopicPullRequestFilter = {
  /** Aggregates across related `TopicPullRequest` match the filter criteria. */
  aggregates?: InputMaybe<TopicPullRequestAggregatesFilter>;
  /** Every related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TopicPullRequestFilter>;
  /** No related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TopicPullRequestFilter>;
  /** Some related `TopicPullRequest` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TopicPullRequestFilter>;
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

/** All input for the `updateAgent` mutation. */
export type UpdateAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Agent` being updated. */
  patch: AgentPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Agent` mutation. */
export type UpdateAgentPayload = {
  __typename?: 'UpdateAgentPayload';
  /** The `Agent` that was updated by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Agent` mutation. */
export type UpdateAgentPayloadAgentEdgeArgs = {
  orderBy?: Array<AgentOrderBy>;
};

/** All input for the `updateBranchProtectionRule` mutation. */
export type UpdateBranchProtectionRuleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `BranchProtectionRule` being updated. */
  patch: BranchProtectionRulePatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `BranchProtectionRule` mutation. */
export type UpdateBranchProtectionRulePayload = {
  __typename?: 'UpdateBranchProtectionRulePayload';
  /** The `BranchProtectionRule` that was updated by this mutation. */
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  /** An edge for our `BranchProtectionRule`. May be used by Relay 1. */
  branchProtectionRuleEdge?: Maybe<BranchProtectionRuleEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `BranchProtectionRule` mutation. */
export type UpdateBranchProtectionRulePayloadBranchProtectionRuleEdgeArgs = {
  orderBy?: Array<BranchProtectionRuleOrderBy>;
};

/** All input for the `updateChange` mutation. */
export type UpdateChangeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Change` being updated. */
  patch: ChangePatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Change` mutation. */
export type UpdateChangePayload = {
  __typename?: 'UpdateChangePayload';
  /** The `Change` that was updated by this mutation. */
  change?: Maybe<Change>;
  /** An edge for our `Change`. May be used by Relay 1. */
  changeEdge?: Maybe<ChangeEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Change` mutation. */
export type UpdateChangePayloadChangeEdgeArgs = {
  orderBy?: Array<ChangeOrderBy>;
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

/** All input for the `updateMergeBatch` mutation. */
export type UpdateMergeBatchInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `MergeBatch` being updated. */
  patch: MergeBatchPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `MergeBatch` mutation. */
export type UpdateMergeBatchPayload = {
  __typename?: 'UpdateMergeBatchPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MergeBatch` that was updated by this mutation. */
  mergeBatch?: Maybe<MergeBatch>;
  /** An edge for our `MergeBatch`. May be used by Relay 1. */
  mergeBatchEdge?: Maybe<MergeBatchEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MergeBatch` mutation. */
export type UpdateMergeBatchPayloadMergeBatchEdgeArgs = {
  orderBy?: Array<MergeBatchOrderBy>;
};

/** All input for the `updateMergeQueueEntry` mutation. */
export type UpdateMergeQueueEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `MergeQueueEntry` being updated. */
  patch: MergeQueueEntryPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `MergeQueueEntry` mutation. */
export type UpdateMergeQueueEntryPayload = {
  __typename?: 'UpdateMergeQueueEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MergeQueueEntry` that was updated by this mutation. */
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
  /** An edge for our `MergeQueueEntry`. May be used by Relay 1. */
  mergeQueueEntryEdge?: Maybe<MergeQueueEntryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `MergeQueueEntry` mutation. */
export type UpdateMergeQueueEntryPayloadMergeQueueEntryEdgeArgs = {
  orderBy?: Array<MergeQueueEntryOrderBy>;
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

/** All input for the `updateOrganizationMember` mutation. */
export type UpdateOrganizationMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `OrganizationMember` being updated. */
  patch: OrganizationMemberPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `OrganizationMember` mutation. */
export type UpdateOrganizationMemberPayload = {
  __typename?: 'UpdateOrganizationMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `OrganizationMember` that was updated by this mutation. */
  organizationMember?: Maybe<OrganizationMember>;
  /** An edge for our `OrganizationMember`. May be used by Relay 1. */
  organizationMemberEdge?: Maybe<OrganizationMemberEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `OrganizationMember` mutation. */
export type UpdateOrganizationMemberPayloadOrganizationMemberEdgeArgs = {
  orderBy?: Array<OrganizationMemberOrderBy>;
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

/** All input for the `updateProject` mutation. */
export type UpdateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Project` being updated. */
  patch: ProjectPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Project` mutation. */
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was updated by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Project` mutation. */
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: Array<ProjectOrderBy>;
};

/** All input for the `updateProjectRepository` mutation. */
export type UpdateProjectRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `ProjectRepository` being updated. */
  patch: ProjectRepositoryPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `ProjectRepository` mutation. */
export type UpdateProjectRepositoryPayload = {
  __typename?: 'UpdateProjectRepositoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `ProjectRepository` that was updated by this mutation. */
  projectRepository?: Maybe<ProjectRepository>;
  /** An edge for our `ProjectRepository`. May be used by Relay 1. */
  projectRepositoryEdge?: Maybe<ProjectRepositoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ProjectRepository` mutation. */
export type UpdateProjectRepositoryPayloadProjectRepositoryEdgeArgs = {
  orderBy?: Array<ProjectRepositoryOrderBy>;
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

/** All input for the `updateStack` mutation. */
export type UpdateStackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Stack` being updated. */
  patch: StackPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Stack` mutation. */
export type UpdateStackPayload = {
  __typename?: 'UpdateStackPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Stack` that was updated by this mutation. */
  stack?: Maybe<Stack>;
  /** An edge for our `Stack`. May be used by Relay 1. */
  stackEdge?: Maybe<StackEdge>;
};


/** The output of our update `Stack` mutation. */
export type UpdateStackPayloadStackEdgeArgs = {
  orderBy?: Array<StackOrderBy>;
};

/** All input for the `updateTopic` mutation. */
export type UpdateTopicInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Topic` being updated. */
  patch: TopicPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `Topic` mutation. */
export type UpdateTopicPayload = {
  __typename?: 'UpdateTopicPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Topic` that was updated by this mutation. */
  topic?: Maybe<Topic>;
  /** An edge for our `Topic`. May be used by Relay 1. */
  topicEdge?: Maybe<TopicEdge>;
};


/** The output of our update `Topic` mutation. */
export type UpdateTopicPayloadTopicEdgeArgs = {
  orderBy?: Array<TopicOrderBy>;
};

/** All input for the `updateTopicPullRequest` mutation. */
export type UpdateTopicPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `TopicPullRequest` being updated. */
  patch: TopicPullRequestPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `TopicPullRequest` mutation. */
export type UpdateTopicPullRequestPayload = {
  __typename?: 'UpdateTopicPullRequestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TopicPullRequest` that was updated by this mutation. */
  topicPullRequest?: Maybe<TopicPullRequest>;
  /** An edge for our `TopicPullRequest`. May be used by Relay 1. */
  topicPullRequestEdge?: Maybe<TopicPullRequestEdge>;
};


/** The output of our update `TopicPullRequest` mutation. */
export type UpdateTopicPullRequestPayloadTopicPullRequestEdgeArgs = {
  orderBy?: Array<TopicPullRequestOrderBy>;
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

/** All input for the `updateVerificationCheck` mutation. */
export type UpdateVerificationCheckInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `VerificationCheck` being updated. */
  patch: VerificationCheckPatch;
  rowId: Scalars['UUID']['input'];
};

/** The output of our update `VerificationCheck` mutation. */
export type UpdateVerificationCheckPayload = {
  __typename?: 'UpdateVerificationCheckPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VerificationCheck` that was updated by this mutation. */
  verificationCheck?: Maybe<VerificationCheck>;
  /** An edge for our `VerificationCheck`. May be used by Relay 1. */
  verificationCheckEdge?: Maybe<VerificationCheckEdge>;
};


/** The output of our update `VerificationCheck` mutation. */
export type UpdateVerificationCheckPayloadVerificationCheckEdgeArgs = {
  orderBy?: Array<VerificationCheckOrderBy>;
};

export type User = {
  __typename?: 'User';
  /** Reads and enables pagination through a set of `Agent`. */
  agentsByOwnerId: AgentConnection;
  /** Reads and enables pagination through a set of `PullRequestComment`. */
  authoredPullRequestComments: PullRequestCommentConnection;
  /** Reads and enables pagination through a set of `PullRequest`. */
  authoredPullRequests: PullRequestConnection;
  /** Reads and enables pagination through a set of `Stack`. */
  authoredStacks: StackConnection;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers: OrganizationMemberConnection;
  /** Reads and enables pagination through a set of `Project`. */
  projectsByOwnerId: ProjectConnection;
  /** Reads and enables pagination through a set of `PullRequest`. */
  pullRequestsByMergedById: PullRequestConnection;
  /** Reads and enables pagination through a set of `Repository`. */
  repositoriesByOwnerId: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryCollaborator`. */
  repositoryCollaborators: RepositoryCollaboratorConnection;
  /** Reads and enables pagination through a set of `PullRequestReview`. */
  reviewedPullRequestReviews: PullRequestReviewConnection;
  rowId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Topic`. */
  topicsByOwnerId: TopicConnection;
  updatedAt: Scalars['Datetime']['output'];
  username: Scalars['String']['output'];
};


export type UserAgentsByOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  filter?: InputMaybe<AgentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentOrderBy>>;
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


export type UserAuthoredStacksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StackCondition>;
  filter?: InputMaybe<StackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StackOrderBy>>;
};


export type UserOrganizationMembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationMemberCondition>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
};


export type UserProjectsByOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectOrderBy>>;
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


export type UserTopicsByOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TopicCondition>;
  filter?: InputMaybe<TopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TopicOrderBy>>;
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
  /** Filter by the object’s `agentsByOwnerId` relation. */
  agentsByOwnerId?: InputMaybe<UserToManyAgentFilter>;
  /** Some related `agentsByOwnerId` exist. */
  agentsByOwnerIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `authoredStacks` relation. */
  authoredStacks?: InputMaybe<UserToManyStackFilter>;
  /** Some related `authoredStacks` exist. */
  authoredStacksExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `bio` field. */
  bio?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `organizationMembers` relation. */
  organizationMembers?: InputMaybe<UserToManyOrganizationMemberFilter>;
  /** Some related `organizationMembers` exist. */
  organizationMembersExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `projectsByOwnerId` relation. */
  projectsByOwnerId?: InputMaybe<UserToManyProjectFilter>;
  /** Some related `projectsByOwnerId` exist. */
  projectsByOwnerIdExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** Filter by the object’s `topicsByOwnerId` relation. */
  topicsByOwnerId?: InputMaybe<UserToManyTopicFilter>;
  /** Some related `topicsByOwnerId` exist. */
  topicsByOwnerIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `User`. */
export enum UserOrderBy {
  AgentsByOwnerIdCountAsc = 'AGENTS_BY_OWNER_ID_COUNT_ASC',
  AgentsByOwnerIdCountDesc = 'AGENTS_BY_OWNER_ID_COUNT_DESC',
  AgentsByOwnerIdDistinctCountCreatedAtAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  AgentsByOwnerIdDistinctCountCreatedAtDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  AgentsByOwnerIdDistinctCountDescriptionAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  AgentsByOwnerIdDistinctCountDescriptionDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  AgentsByOwnerIdDistinctCountModelAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_MODEL_ASC',
  AgentsByOwnerIdDistinctCountModelDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_MODEL_DESC',
  AgentsByOwnerIdDistinctCountNameAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_NAME_ASC',
  AgentsByOwnerIdDistinctCountNameDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_NAME_DESC',
  AgentsByOwnerIdDistinctCountOrganizationIdAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  AgentsByOwnerIdDistinctCountOrganizationIdDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  AgentsByOwnerIdDistinctCountOwnerIdAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_ASC',
  AgentsByOwnerIdDistinctCountOwnerIdDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_DESC',
  AgentsByOwnerIdDistinctCountRowIdAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_ASC',
  AgentsByOwnerIdDistinctCountRowIdDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_DESC',
  AgentsByOwnerIdDistinctCountSlugAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_SLUG_ASC',
  AgentsByOwnerIdDistinctCountSlugDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_SLUG_DESC',
  AgentsByOwnerIdDistinctCountUpdatedAtAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  AgentsByOwnerIdDistinctCountUpdatedAtDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  AgentsByOwnerIdDistinctCountVendorAsc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_VENDOR_ASC',
  AgentsByOwnerIdDistinctCountVendorDesc = 'AGENTS_BY_OWNER_ID_DISTINCT_COUNT_VENDOR_DESC',
  AuthoredPullRequestsAverageNumberAsc = 'AUTHORED_PULL_REQUESTS_AVERAGE_NUMBER_ASC',
  AuthoredPullRequestsAverageNumberDesc = 'AUTHORED_PULL_REQUESTS_AVERAGE_NUMBER_DESC',
  AuthoredPullRequestsCountAsc = 'AUTHORED_PULL_REQUESTS_COUNT_ASC',
  AuthoredPullRequestsCountDesc = 'AUTHORED_PULL_REQUESTS_COUNT_DESC',
  AuthoredPullRequestsDistinctCountAuthoredByAgentIdAsc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  AuthoredPullRequestsDistinctCountAuthoredByAgentIdDesc = 'AUTHORED_PULL_REQUESTS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
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
  AuthoredStacksCountAsc = 'AUTHORED_STACKS_COUNT_ASC',
  AuthoredStacksCountDesc = 'AUTHORED_STACKS_COUNT_DESC',
  AuthoredStacksDistinctCountAuthoredByAgentIdAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  AuthoredStacksDistinctCountAuthoredByAgentIdDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
  AuthoredStacksDistinctCountAuthorIdAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_AUTHOR_ID_ASC',
  AuthoredStacksDistinctCountAuthorIdDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_AUTHOR_ID_DESC',
  AuthoredStacksDistinctCountBaseBranchAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_BASE_BRANCH_ASC',
  AuthoredStacksDistinctCountBaseBranchDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_BASE_BRANCH_DESC',
  AuthoredStacksDistinctCountCreatedAtAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_CREATED_AT_ASC',
  AuthoredStacksDistinctCountCreatedAtDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_CREATED_AT_DESC',
  AuthoredStacksDistinctCountDescriptionAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_DESCRIPTION_ASC',
  AuthoredStacksDistinctCountDescriptionDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_DESCRIPTION_DESC',
  AuthoredStacksDistinctCountRepositoryIdAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_REPOSITORY_ID_ASC',
  AuthoredStacksDistinctCountRepositoryIdDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_REPOSITORY_ID_DESC',
  AuthoredStacksDistinctCountRowIdAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_ROW_ID_ASC',
  AuthoredStacksDistinctCountRowIdDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_ROW_ID_DESC',
  AuthoredStacksDistinctCountStatusAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_STATUS_ASC',
  AuthoredStacksDistinctCountStatusDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_STATUS_DESC',
  AuthoredStacksDistinctCountTitleAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_TITLE_ASC',
  AuthoredStacksDistinctCountTitleDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_TITLE_DESC',
  AuthoredStacksDistinctCountUpdatedAtAsc = 'AUTHORED_STACKS_DISTINCT_COUNT_UPDATED_AT_ASC',
  AuthoredStacksDistinctCountUpdatedAtDesc = 'AUTHORED_STACKS_DISTINCT_COUNT_UPDATED_AT_DESC',
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  BioAsc = 'BIO_ASC',
  BioDesc = 'BIO_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationMembersCountAsc = 'ORGANIZATION_MEMBERS_COUNT_ASC',
  OrganizationMembersCountDesc = 'ORGANIZATION_MEMBERS_COUNT_DESC',
  OrganizationMembersDistinctCountOrganizationIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  OrganizationMembersDistinctCountOrganizationIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  OrganizationMembersDistinctCountRolesAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLES_ASC',
  OrganizationMembersDistinctCountRolesDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLES_DESC',
  OrganizationMembersDistinctCountRowIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROW_ID_ASC',
  OrganizationMembersDistinctCountRowIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROW_ID_DESC',
  OrganizationMembersDistinctCountSyncedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_SYNCED_AT_ASC',
  OrganizationMembersDistinctCountSyncedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_SYNCED_AT_DESC',
  OrganizationMembersDistinctCountUserIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_ASC',
  OrganizationMembersDistinctCountUserIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_DESC',
  PersonalAccessTokensCountAsc = 'PERSONAL_ACCESS_TOKENS_COUNT_ASC',
  PersonalAccessTokensCountDesc = 'PERSONAL_ACCESS_TOKENS_COUNT_DESC',
  PersonalAccessTokensDistinctCountAgentIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_AGENT_ID_ASC',
  PersonalAccessTokensDistinctCountAgentIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_AGENT_ID_DESC',
  PersonalAccessTokensDistinctCountCreatedAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_CREATED_AT_ASC',
  PersonalAccessTokensDistinctCountCreatedAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_CREATED_AT_DESC',
  PersonalAccessTokensDistinctCountExpiresAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_EXPIRES_AT_ASC',
  PersonalAccessTokensDistinctCountExpiresAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_EXPIRES_AT_DESC',
  PersonalAccessTokensDistinctCountLastUsedAtAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_LAST_USED_AT_ASC',
  PersonalAccessTokensDistinctCountLastUsedAtDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_LAST_USED_AT_DESC',
  PersonalAccessTokensDistinctCountNameAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_NAME_ASC',
  PersonalAccessTokensDistinctCountNameDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_NAME_DESC',
  PersonalAccessTokensDistinctCountPermissionAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_PERMISSION_ASC',
  PersonalAccessTokensDistinctCountPermissionDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_PERMISSION_DESC',
  PersonalAccessTokensDistinctCountRowIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_ROW_ID_ASC',
  PersonalAccessTokensDistinctCountRowIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_ROW_ID_DESC',
  PersonalAccessTokensDistinctCountTokenPrefixAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_TOKEN_PREFIX_ASC',
  PersonalAccessTokensDistinctCountTokenPrefixDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_TOKEN_PREFIX_DESC',
  PersonalAccessTokensDistinctCountUserIdAsc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_USER_ID_ASC',
  PersonalAccessTokensDistinctCountUserIdDesc = 'PERSONAL_ACCESS_TOKENS_DISTINCT_COUNT_USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectsByOwnerIdCountAsc = 'PROJECTS_BY_OWNER_ID_COUNT_ASC',
  ProjectsByOwnerIdCountDesc = 'PROJECTS_BY_OWNER_ID_COUNT_DESC',
  ProjectsByOwnerIdDistinctCountCreatedAtAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  ProjectsByOwnerIdDistinctCountCreatedAtDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  ProjectsByOwnerIdDistinctCountDescriptionAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  ProjectsByOwnerIdDistinctCountDescriptionDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  ProjectsByOwnerIdDistinctCountNameAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_NAME_ASC',
  ProjectsByOwnerIdDistinctCountNameDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_NAME_DESC',
  ProjectsByOwnerIdDistinctCountOrganizationIdAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  ProjectsByOwnerIdDistinctCountOrganizationIdDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  ProjectsByOwnerIdDistinctCountOwnerIdAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_ASC',
  ProjectsByOwnerIdDistinctCountOwnerIdDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_DESC',
  ProjectsByOwnerIdDistinctCountRowIdAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_ASC',
  ProjectsByOwnerIdDistinctCountRowIdDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_DESC',
  ProjectsByOwnerIdDistinctCountSlugAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_SLUG_ASC',
  ProjectsByOwnerIdDistinctCountSlugDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_SLUG_DESC',
  ProjectsByOwnerIdDistinctCountUpdatedAtAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  ProjectsByOwnerIdDistinctCountUpdatedAtDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  ProjectsByOwnerIdDistinctCountVisibilityAsc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_VISIBILITY_ASC',
  ProjectsByOwnerIdDistinctCountVisibilityDesc = 'PROJECTS_BY_OWNER_ID_DISTINCT_COUNT_VISIBILITY_DESC',
  PullRequestsByMergedByIdAverageNumberAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_AVERAGE_NUMBER_ASC',
  PullRequestsByMergedByIdAverageNumberDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_AVERAGE_NUMBER_DESC',
  PullRequestsByMergedByIdCountAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_COUNT_ASC',
  PullRequestsByMergedByIdCountDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_COUNT_DESC',
  PullRequestsByMergedByIdDistinctCountAuthoredByAgentIdAsc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_ASC',
  PullRequestsByMergedByIdDistinctCountAuthoredByAgentIdDesc = 'PULL_REQUESTS_BY_MERGED_BY_ID_DISTINCT_COUNT_AUTHORED_BY_AGENT_ID_DESC',
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
  TopicsByOwnerIdCountAsc = 'TOPICS_BY_OWNER_ID_COUNT_ASC',
  TopicsByOwnerIdCountDesc = 'TOPICS_BY_OWNER_ID_COUNT_DESC',
  TopicsByOwnerIdDistinctCountCreatedAtAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  TopicsByOwnerIdDistinctCountCreatedAtDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  TopicsByOwnerIdDistinctCountDescriptionAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_ASC',
  TopicsByOwnerIdDistinctCountDescriptionDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_DESCRIPTION_DESC',
  TopicsByOwnerIdDistinctCountOrganizationIdAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  TopicsByOwnerIdDistinctCountOrganizationIdDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  TopicsByOwnerIdDistinctCountOwnerIdAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_ASC',
  TopicsByOwnerIdDistinctCountOwnerIdDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_OWNER_ID_DESC',
  TopicsByOwnerIdDistinctCountRowIdAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_ASC',
  TopicsByOwnerIdDistinctCountRowIdDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_ROW_ID_DESC',
  TopicsByOwnerIdDistinctCountStatusAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_STATUS_ASC',
  TopicsByOwnerIdDistinctCountStatusDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_STATUS_DESC',
  TopicsByOwnerIdDistinctCountTitleAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_TITLE_ASC',
  TopicsByOwnerIdDistinctCountTitleDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_TITLE_DESC',
  TopicsByOwnerIdDistinctCountUpdatedAtAsc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  TopicsByOwnerIdDistinctCountUpdatedAtDesc = 'TOPICS_BY_OWNER_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
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
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against many `Agent` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyAgentFilter = {
  /** Aggregates across related `Agent` match the filter criteria. */
  aggregates?: InputMaybe<AgentAggregatesFilter>;
  /** Every related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AgentFilter>;
  /** No related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AgentFilter>;
  /** Some related `Agent` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AgentFilter>;
};

/** A filter to be used against many `OrganizationMember` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyOrganizationMemberFilter = {
  /** Aggregates across related `OrganizationMember` match the filter criteria. */
  aggregates?: InputMaybe<OrganizationMemberAggregatesFilter>;
  /** Every related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<OrganizationMemberFilter>;
  /** No related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<OrganizationMemberFilter>;
  /** Some related `OrganizationMember` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<OrganizationMemberFilter>;
};

/** A filter to be used against many `Project` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyProjectFilter = {
  /** Aggregates across related `Project` match the filter criteria. */
  aggregates?: InputMaybe<ProjectAggregatesFilter>;
  /** Every related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProjectFilter>;
  /** No related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProjectFilter>;
  /** Some related `Project` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProjectFilter>;
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

/** A filter to be used against many `Stack` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyStackFilter = {
  /** Aggregates across related `Stack` match the filter criteria. */
  aggregates?: InputMaybe<StackAggregatesFilter>;
  /** Every related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<StackFilter>;
  /** No related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<StackFilter>;
  /** Some related `Stack` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<StackFilter>;
};

/** A filter to be used against many `Topic` object types. All fields are combined with a logical ‘and.’ */
export type UserToManyTopicFilter = {
  /** Aggregates across related `Topic` match the filter criteria. */
  aggregates?: InputMaybe<TopicAggregatesFilter>;
  /** Every related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TopicFilter>;
  /** No related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TopicFilter>;
  /** Some related `Topic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TopicFilter>;
};

export type VerificationCheck = Node & {
  __typename?: 'VerificationCheck';
  category: Scalars['String']['output'];
  /** Reads a single `Change` that is related to this `VerificationCheck`. */
  change?: Maybe<Change>;
  changeId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  detailsUrl?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  rowId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

export type VerificationCheckAggregates = {
  __typename?: 'VerificationCheckAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<VerificationCheckDistinctCountAggregates>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A filter to be used against aggregates of `VerificationCheck` object types. */
export type VerificationCheckAggregatesFilter = {
  /** Distinct count aggregate over matching `VerificationCheck` objects. */
  distinctCount?: InputMaybe<VerificationCheckDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `VerificationCheck` object to be included within the aggregate. */
  filter?: InputMaybe<VerificationCheckFilter>;
};

/**
 * A condition to be used against `VerificationCheck` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type VerificationCheckCondition = {
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `changeId` field. */
  changeId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `detailsUrl` field. */
  detailsUrl?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `required` field. */
  required?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `summary` field. */
  summary?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `VerificationCheck` values. */
export type VerificationCheckConnection = {
  __typename?: 'VerificationCheckConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<VerificationCheckAggregates>;
  /** A list of edges which contains the `VerificationCheck` and cursor to aid in pagination. */
  edges: Array<VerificationCheckEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<VerificationCheckAggregates>>;
  /** A list of `VerificationCheck` objects. */
  nodes: Array<VerificationCheck>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `VerificationCheck` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `VerificationCheck` values. */
export type VerificationCheckConnectionGroupedAggregatesArgs = {
  groupBy: Array<VerificationCheckGroupBy>;
  having?: InputMaybe<VerificationCheckHavingInput>;
};

export type VerificationCheckDistinctCountAggregateFilter = {
  category?: InputMaybe<BigIntFilter>;
  changeId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  detailsUrl?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  required?: InputMaybe<BigIntFilter>;
  rowId?: InputMaybe<BigIntFilter>;
  status?: InputMaybe<BigIntFilter>;
  summary?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
};

export type VerificationCheckDistinctCountAggregates = {
  __typename?: 'VerificationCheckDistinctCountAggregates';
  /** Distinct count of category across the matching connection */
  category?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of changeId across the matching connection */
  changeId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of detailsUrl across the matching connection */
  detailsUrl?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of required across the matching connection */
  required?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of summary across the matching connection */
  summary?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

/** A `VerificationCheck` edge in the connection. */
export type VerificationCheckEdge = {
  __typename?: 'VerificationCheckEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `VerificationCheck` at the end of the edge. */
  node: VerificationCheck;
};

/** A filter to be used against `VerificationCheck` object types. All fields are combined with a logical ‘and.’ */
export type VerificationCheckFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<VerificationCheckFilter>>;
  /** Filter by the object’s `category` field. */
  category?: InputMaybe<StringFilter>;
  /** Filter by the object’s `change` relation. */
  change?: InputMaybe<ChangeFilter>;
  /** Filter by the object’s `changeId` field. */
  changeId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `detailsUrl` field. */
  detailsUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<VerificationCheckFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<VerificationCheckFilter>>;
  /** Filter by the object’s `required` field. */
  required?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rowId` field. */
  rowId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `summary` field. */
  summary?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `VerificationCheck` for usage during aggregation. */
export enum VerificationCheckGroupBy {
  Category = 'CATEGORY',
  ChangeId = 'CHANGE_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DetailsUrl = 'DETAILS_URL',
  Name = 'NAME',
  Required = 'REQUIRED',
  Status = 'STATUS',
  Summary = 'SUMMARY',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type VerificationCheckHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `VerificationCheck` aggregates. */
export type VerificationCheckHavingInput = {
  AND?: InputMaybe<Array<VerificationCheckHavingInput>>;
  OR?: InputMaybe<Array<VerificationCheckHavingInput>>;
  average?: InputMaybe<VerificationCheckHavingAverageInput>;
  distinctCount?: InputMaybe<VerificationCheckHavingDistinctCountInput>;
  max?: InputMaybe<VerificationCheckHavingMaxInput>;
  min?: InputMaybe<VerificationCheckHavingMinInput>;
  stddevPopulation?: InputMaybe<VerificationCheckHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<VerificationCheckHavingStddevSampleInput>;
  sum?: InputMaybe<VerificationCheckHavingSumInput>;
  variancePopulation?: InputMaybe<VerificationCheckHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<VerificationCheckHavingVarianceSampleInput>;
};

export type VerificationCheckHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type VerificationCheckHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `VerificationCheck` */
export type VerificationCheckInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  changeId: Scalars['UUID']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detailsUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  required?: InputMaybe<Scalars['Boolean']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Methods to use when ordering `VerificationCheck`. */
export enum VerificationCheckOrderBy {
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ChangeIdAsc = 'CHANGE_ID_ASC',
  ChangeIdDesc = 'CHANGE_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DetailsUrlAsc = 'DETAILS_URL_ASC',
  DetailsUrlDesc = 'DETAILS_URL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RequiredAsc = 'REQUIRED_ASC',
  RequiredDesc = 'REQUIRED_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `VerificationCheck`. Fields that are set will be updated. */
export type VerificationCheckPatch = {
  category?: InputMaybe<Scalars['String']['input']>;
  changeId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  detailsUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** One (package, version, repository) cell of a project's version-drift view. */
export type VersionDriftEntry = {
  __typename?: 'VersionDriftEntry';
  /** The depending repository's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The organization slug, for an organization repository. */
  organizationSlug?: Maybe<Scalars['String']['output']>;
  /** The owner username, for a personal repository. */
  ownerUsername?: Maybe<Scalars['String']['output']>;
  /** The package manager (npm, cargo, go, pip). */
  packageManager?: Maybe<Scalars['String']['output']>;
  /** The package name. */
  packageName?: Maybe<Scalars['String']['output']>;
  /** The depending repository's row id. */
  repositoryId?: Maybe<Scalars['UUID']['output']>;
  /** The depending repository's slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The version constraint this repository declares (null = unpinned). */
  versionConstraint?: Maybe<Scalars['String']['output']>;
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

/** An input for mutations affecting `Agent` */
export type AgentInput = {
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  model?: string | null | undefined;
  name: string;
  organizationId?: string | null | undefined;
  ownerId: string;
  rowId?: string | null | undefined;
  slug: string;
  updatedAt?: Date | null | undefined;
  vendor?: string | null | undefined;
};

/** An input for mutations affecting `BranchProtectionRule` */
export type BranchProtectionRuleInput = {
  createdAt?: Date | null | undefined;
  refPattern: string;
  repositoryId: string;
  requirePassingChecks?: boolean | null | undefined;
  requiredApprovals?: number | null | undefined;
  rowId?: string | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** All input for the create `Agent` mutation. */
export type CreateAgentInput = {
  /** The `Agent` to be created by this mutation. */
  agent: AgentInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
};

/** All input for the create `Organization` mutation. */
export type CreateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `Organization` to be created by this mutation. */
  organization: OrganizationInput;
};

/** All input for the create `Project` mutation. */
export type CreateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `Project` to be created by this mutation. */
  project: ProjectInput;
};

/** All input for the create `ProjectRepository` mutation. */
export type CreateProjectRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `ProjectRepository` to be created by this mutation. */
  projectRepository: ProjectRepositoryInput;
};

/** All input for the create `PullRequestComment` mutation. */
export type CreatePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `PullRequestComment` to be created by this mutation. */
  pullRequestComment: PullRequestCommentInput;
};

/** All input for the create `PullRequestReview` mutation. */
export type CreatePullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `PullRequestReview` to be created by this mutation. */
  pullRequestReview: PullRequestReviewInput;
};

/** All input for the create `Stack` mutation. */
export type CreateStackInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `Stack` to be created by this mutation. */
  stack: StackInput;
};

/** All input for the `deletePersonalAccessToken` mutation. */
export type DeletePersonalAccessTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  rowId: string;
};

/** All input for the `deleteProjectRepository` mutation. */
export type DeleteProjectRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  rowId: string;
};

/** All input for the `deletePullRequestComment` mutation. */
export type DeletePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  rowId: string;
};

/** All input for the `deleteRepository` mutation. */
export type DeleteRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  rowId: string;
};

/** The change status of a file within a diff. */
export type DiffStatus =
  | 'ADDED'
  | 'COPIED'
  | 'DELETED'
  | 'MODIFIED'
  | 'RENAMED'
  | 'TYPE_CHANGED';

/** Input for discovering a repository's dependencies from its manifest. */
export type DiscoverDependenciesInput = {
  /** The repository to scan. */
  repositoryId: string;
};

/** Input for opening a pull request. */
export type OpenPullRequestInput = {
  /** Optional description (Markdown). */
  description?: string | null | undefined;
  /** The repository the pull request belongs to. */
  repositoryId: string;
  /** Branch the changes come from. */
  sourceBranch: string;
  /** Branch the changes merge into. */
  targetBranch: string;
  /** Pull request title. */
  title: string;
};

/** An input for mutations affecting `Organization` */
export type OrganizationInput = {
  avatarUrl?: string | null | undefined;
  billingAccountId?: string | null | undefined;
  createdAt?: Date | null | undefined;
  deletedAt?: Date | null | undefined;
  deletionReason?: string | null | undefined;
  description?: string | null | undefined;
  idpOrganizationId: string;
  name?: string | null | undefined;
  rowId?: string | null | undefined;
  slug?: string | null | undefined;
  subscriptionId?: string | null | undefined;
  updatedAt?: Date | null | undefined;
};

export type Permission =
  | 'admin'
  | 'read'
  | 'write';

/** Furthest operation an access token may perform. */
export type PersonalAccessTokenPermission =
  | 'READ'
  | 'WRITE';

/**
 * Per-repository confinement for an access token, limiting the refs and paths
 * it may touch within that repository. Enforced against real pushes by the
 * git credential boundary and against in-process ref moves (e.g. merges).
 */
export type PersonalAccessTokenRepositoryScopeInput = {
  /**
   * Repo-relative path globs the token may modify (e.g. "src/**"). Omit for
   * every path in the repository.
   */
  pathPatterns?: Array<string> | null | undefined;
  /**
   * Full-form ref globs the token may touch (e.g. "refs/heads/agent/*").
   * Omit for every ref in the repository.
   */
  refPatterns?: Array<string> | null | undefined;
  /** The repository this confinement applies to. */
  repositoryId: string;
};

/** An input for mutations affecting `Project` */
export type ProjectInput = {
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  name: string;
  organizationId?: string | null | undefined;
  ownerId: string;
  rowId?: string | null | undefined;
  slug: string;
  updatedAt?: Date | null | undefined;
  visibility?: Visibility | null | undefined;
};

/** An input for mutations affecting `ProjectRepository` */
export type ProjectRepositoryInput = {
  createdAt?: Date | null | undefined;
  detectionSource?: string | null | undefined;
  projectId: string;
  repositoryId: string;
  rowId?: string | null | undefined;
};

/** The kind of change delivered on a pullRequestCommentChanged event. */
export type PullRequestCommentChangeAction =
  | 'CREATED'
  | 'DELETED'
  | 'UPDATED';

/** An input for mutations affecting `PullRequestComment` */
export type PullRequestCommentInput = {
  authorId: string;
  body: string;
  commitSha?: string | null | undefined;
  createdAt?: Date | null | undefined;
  line?: number | null | undefined;
  path?: string | null | undefined;
  pullRequestId: string;
  replyToId?: string | null | undefined;
  rowId?: string | null | undefined;
  side?: string | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** Represents an update to a `PullRequestComment`. Fields that are set will be updated. */
export type PullRequestCommentPatch = {
  authorId?: string | null | undefined;
  body?: string | null | undefined;
  commitSha?: string | null | undefined;
  createdAt?: Date | null | undefined;
  line?: number | null | undefined;
  path?: string | null | undefined;
  pullRequestId?: string | null | undefined;
  replyToId?: string | null | undefined;
  rowId?: string | null | undefined;
  side?: string | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** An input for mutations affecting `PullRequestReview` */
export type PullRequestReviewInput = {
  body?: string | null | undefined;
  createdAt?: Date | null | undefined;
  pullRequestId: string;
  reviewerId: string;
  rowId?: string | null | undefined;
  state?: string | null | undefined;
  submittedAt?: Date | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** Input for renaming a repository. */
export type RenameRepositoryInput = {
  /** Optional new display name. The name is left unchanged when omitted. */
  newName?: string | null | undefined;
  /** The new slug (URL-friendly name). Moves the on-disk storage. */
  newSlug: string;
  /** The repository row ID. */
  rowId: string;
};

/** Represents an update to a `Repository`. Fields that are set will be updated. */
export type RepositoryPatch = {
  createdAt?: Date | null | undefined;
  defaultBranch?: string | null | undefined;
  description?: string | null | undefined;
  name?: string | null | undefined;
  organizationId?: string | null | undefined;
  ownerId?: string | null | undefined;
  rowId?: string | null | undefined;
  slug?: string | null | undefined;
  updatedAt?: Date | null | undefined;
  visibility?: Visibility | null | undefined;
};

/** Input for closing or reopening a pull request. */
export type SetPullRequestStateInput = {
  /** The pull request to act on. */
  pullRequestId: string;
};

/** An input for mutations affecting `Stack` */
export type StackInput = {
  authorId: string;
  authoredByAgentId?: string | null | undefined;
  baseBranch?: string | null | undefined;
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  repositoryId: string;
  rowId?: string | null | undefined;
  status?: string | null | undefined;
  title: string;
  updatedAt?: Date | null | undefined;
};

/** Input for submitting a closed-beta tester application. */
export type SubmitTesterApplicationInput = {
  /** Free-form application form answers (use case, stack, team size, links, notes). */
  answers?: unknown;
  /** Whether the applicant accepted the beta confidentiality terms. Must be true. */
  ndaAccepted: boolean;
  /** The version of the beta terms the applicant accepted. */
  ndaVersion: string;
};

/** All input for the `updatePullRequestComment` mutation. */
export type UpdatePullRequestCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** An object where the defined keys will be set on the `PullRequestComment` being updated. */
  patch: PullRequestCommentPatch;
  rowId: string;
};

/** All input for the `updateRepository` mutation. */
export type UpdateRepositoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** An object where the defined keys will be set on the `Repository` being updated. */
  patch: RepositoryPatch;
  rowId: string;
};

export type Visibility =
  | 'private'
  | 'public';

export type CreateBranchProtectionRuleMutationVariables = Exact<{
  input: BranchProtectionRuleInput;
}>;


export type CreateBranchProtectionRuleMutation = { createBranchProtectionRule: { branchProtectionRule: { rowId: string, refPattern: string, requiredApprovals: number, requirePassingChecks: boolean } | null } | null };

export type DeleteBranchProtectionRuleMutationVariables = Exact<{
  rowId: string;
}>;


export type DeleteBranchProtectionRuleMutation = { deleteBranchProtectionRule: { clientMutationId: string | null } | null };

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { createOrganization: { organization: { rowId: string, idpOrganizationId: string, description: string | null, avatarUrl: string | null, createdAt: Date } | null } | null };

export type CreatePersonalAccessTokenMutationVariables = Exact<{
  name: string;
  expiresInDays?: number | null | undefined;
  permission?: PersonalAccessTokenPermission | null | undefined;
  repositoryIds?: Array<string> | string | null | undefined;
  repositoryScopes?: Array<PersonalAccessTokenRepositoryScopeInput> | PersonalAccessTokenRepositoryScopeInput | null | undefined;
}>;


export type CreatePersonalAccessTokenMutation = { createPersonalAccessToken: { rowId: string, name: string, tokenPrefix: string, expiresAt: Date | null, createdAt: Date, permission: string, token: string } | null };

export type DeletePersonalAccessTokenMutationVariables = Exact<{
  input: DeletePersonalAccessTokenInput;
}>;


export type DeletePersonalAccessTokenMutation = { deletePersonalAccessToken: { personalAccessToken: { rowId: string } | null } | null };

export type AddProjectRepositoryMutationVariables = Exact<{
  input: CreateProjectRepositoryInput;
}>;


export type AddProjectRepositoryMutation = { createProjectRepository: { projectRepository: { rowId: string, projectId: string, repositoryId: string } | null } | null };

export type RemoveProjectRepositoryMutationVariables = Exact<{
  input: DeleteProjectRepositoryInput;
}>;


export type RemoveProjectRepositoryMutation = { deleteProjectRepository: { deletedProjectRepositoryId: string | null } | null };

export type ClosePullRequestMutationVariables = Exact<{
  input: SetPullRequestStateInput;
}>;


export type ClosePullRequestMutation = { closePullRequest: { rowId: string | null, number: number | null, state: string | null, error: string | null } | null };

export type CreatePullRequestCommentMutationVariables = Exact<{
  input: CreatePullRequestCommentInput;
}>;


export type CreatePullRequestCommentMutation = { createPullRequestComment: { pullRequestComment: { id: string, rowId: string, pullRequestId: string, authorId: string, body: string, path: string | null, line: number | null, side: string | null, commitSha: string | null, replyToId: string | null, createdAt: Date, updatedAt: Date, author: { rowId: string, username: string, avatarUrl: string | null } | null } | null } | null };

export type CreatePullRequestReviewMutationVariables = Exact<{
  input: CreatePullRequestReviewInput;
}>;


export type CreatePullRequestReviewMutation = { createPullRequestReview: { pullRequestReview: { id: string, rowId: string, pullRequestId: string, reviewerId: string, state: string, body: string | null, submittedAt: Date | null, createdAt: Date, updatedAt: Date, reviewer: { rowId: string, username: string, avatarUrl: string | null } | null } | null } | null };

export type DeletePullRequestCommentMutationVariables = Exact<{
  input: DeletePullRequestCommentInput;
}>;


export type DeletePullRequestCommentMutation = { deletePullRequestComment: { deletedPullRequestCommentId: string | null } | null };

export type OpenPullRequestMutationVariables = Exact<{
  input: OpenPullRequestInput;
}>;


export type OpenPullRequestMutation = { openPullRequest: { rowId: string | null, number: number | null, error: string | null } | null };

export type ReopenPullRequestMutationVariables = Exact<{
  input: SetPullRequestStateInput;
}>;


export type ReopenPullRequestMutation = { reopenPullRequest: { rowId: string | null, number: number | null, state: string | null, error: string | null } | null };

export type UpdatePullRequestCommentMutationVariables = Exact<{
  input: UpdatePullRequestCommentInput;
}>;


export type UpdatePullRequestCommentMutation = { updatePullRequestComment: { pullRequestComment: { id: string, rowId: string, body: string, updatedAt: Date } | null } | null };

export type DeleteRepositoryMutationVariables = Exact<{
  input: DeleteRepositoryInput;
}>;


export type DeleteRepositoryMutation = { deleteRepository: { repository: { rowId: string } | null } | null };

export type DiscoverDependenciesMutationVariables = Exact<{
  input: DiscoverDependenciesInput;
}>;


export type DiscoverDependenciesMutation = { discoverDependencies: { internalDependencies: number | null, externalDependencies: number | null, error: string | null } | null };

export type RenameRepositoryMutationVariables = Exact<{
  input: RenameRepositoryInput;
}>;


export type RenameRepositoryMutation = { renameRepository: { error: string | null, repository: { rowId: string, name: string, slug: string, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string } | null } | null } | null };

export type UpdateRepositoryMutationVariables = Exact<{
  input: UpdateRepositoryInput;
}>;


export type UpdateRepositoryMutation = { updateRepository: { repository: { rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string } | null } | null } | null };

export type CreateStackMutationVariables = Exact<{
  input: CreateStackInput;
}>;


export type CreateStackMutation = { createStack: { stack: { id: string, rowId: string, title: string, description: string | null, baseBranch: string, status: string, createdAt: Date, repository: { slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null } | null } | null };

export type MergeChangeMutationVariables = Exact<{
  changeId: string;
}>;


export type MergeChangeMutation = { mergeChange: { success: boolean, changeId: string | null, mode: string | null, deferred: boolean, blockingChecks: Array<string> | null, error: string | null } | null };

export type SubmitTesterApplicationMutationVariables = Exact<{
  input: SubmitTesterApplicationInput;
}>;


export type SubmitTesterApplicationMutation = { submitTesterApplication: { rowId: string | null, status: string | null, reviewerNote: string | null, ndaVersion: string | null, ndaAcceptedAt: Date | null, createdAt: Date | null, updatedAt: Date | null } | null };

export type AgentsQueryVariables = Exact<{
  userId: string;
  organizationId?: string | null | undefined;
  limit?: number | null | undefined;
}>;


export type AgentsQuery = { agents: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, model: string | null, vendor: string | null, createdAt: Date, owner: { username: string } | null }> } | null };

export type CreateAgentMutationVariables = Exact<{
  input: CreateAgentInput;
}>;


export type CreateAgentMutation = { createAgent: { agent: { rowId: string, name: string, slug: string, description: string | null, model: string | null, vendor: string | null, createdAt: Date, owner: { username: string } | null } | null } | null };

export type BranchProtectionRulesQueryVariables = Exact<{
  repositoryId: string;
}>;


export type BranchProtectionRulesQuery = { branchProtectionRules: { nodes: Array<{ rowId: string, refPattern: string, requiredApprovals: number, requirePassingChecks: boolean }> } | null };

export type RepositoryGraphQueryVariables = Exact<{
  userId: string;
  organizationId?: string | null | undefined;
}>;


export type RepositoryGraphQuery = { polyrepoGraphAccess: boolean, repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string } | null, outgoingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, targetRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> } }> } | null, repositoryRelationshipTypes: { nodes: Array<{ rowId: string, name: string, description: string | null, isDirected: boolean }> } | null };

export type OrganizationQueryVariables = Exact<{
  rowId: string;
}>;


export type OrganizationQuery = { organization: { rowId: string, idpOrganizationId: string, description: string | null, avatarUrl: string | null, createdAt: Date, updatedAt: Date, repositories: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, updatedAt: Date }> } } | null };

export type OrganizationsQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type OrganizationsQuery = { organizations: { totalCount: number, nodes: Array<{ rowId: string, idpOrganizationId: string, description: string | null, avatarUrl: string | null, createdAt: Date, updatedAt: Date, repositories: { totalCount: number } }> } | null };

export type PersonalAccessTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonalAccessTokensQuery = { personalAccessTokens: { nodes: Array<{ rowId: string, name: string, tokenPrefix: string, lastUsedAt: Date | null, expiresAt: Date | null, createdAt: Date, permission: string, personalAccessTokenRepositories: { totalCount: number, nodes: Array<{ refPatterns: Array<string | null> | null, pathPatterns: Array<string | null> | null, repository: { rowId: string, slug: string, owner: { username: string } | null } | null }> } }> } | null };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { createProject: { project: { rowId: string, name: string, slug: string, visibility: Visibility, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null } | null };

export type ProjectBySlugQueryVariables = Exact<{
  ownerSlug: string;
  slug: string;
}>;


export type ProjectBySlugQuery = { projects: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, createdAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, avatarUrl: string | null } | null, projectRepositories: { totalCount: number, nodes: Array<{ rowId: string, repository: { rowId: string, name: string, slug: string, visibility: Visibility, owner: { username: string } | null, organization: { idpOrganizationId: string } | null, memberships: { totalCount: number }, outgoingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, targetRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> }, incomingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, sourceRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> } } | null }> } }> } | null };

export type ProjectVersionDriftQueryVariables = Exact<{
  projectId: string;
}>;


export type ProjectVersionDriftQuery = { projectVersionDrift: Array<{ packageManager: string | null, packageName: string | null, versionConstraint: string | null, repositoryId: string | null, name: string | null, slug: string | null, ownerUsername: string | null, organizationSlug: string | null }> | null };

export type ProjectsQueryVariables = Exact<{
  userId: string;
  organizationId?: string | null | undefined;
  limit?: number | null | undefined;
}>;


export type ProjectsQuery = { projects: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, createdAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, avatarUrl: string | null } | null, projectRepositories: { totalCount: number } }> } | null };

export type PullRequestConversationQueryVariables = Exact<{
  pullRequestId: string;
}>;


export type PullRequestConversationQuery = { pullRequestComments: { nodes: Array<{ id: string, rowId: string, pullRequestId: string, authorId: string, body: string, path: string | null, line: number | null, side: string | null, commitSha: string | null, replyToId: string | null, createdAt: Date, updatedAt: Date, author: { rowId: string, username: string, avatarUrl: string | null } | null }> } | null, pullRequestReviews: { nodes: Array<{ id: string, rowId: string, pullRequestId: string, reviewerId: string, state: string, body: string | null, submittedAt: Date | null, createdAt: Date, updatedAt: Date, reviewer: { rowId: string, username: string, avatarUrl: string | null } | null }> } | null };

export type PullRequestFileDiffQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
  number: number;
  path: string;
}>;


export type PullRequestFileDiffQuery = { pullRequests: { nodes: Array<{ id: string, rowId: string, fileDiff: { path: string, status: DiffStatus, isBinary: boolean, oldText: string | null, newText: string | null } | null }> } | null };

export type PullRequestFilesQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
  number: number;
}>;


export type PullRequestFilesQuery = { pullRequests: { nodes: Array<{ id: string, rowId: string, number: number, title: string, description: string | null, state: string, sourceBranch: string, targetBranch: string, createdAt: Date, mergedAt: Date | null, author: { rowId: string, username: string, avatarUrl: string | null } | null, authoredByAgent: { rowId: string, name: string } | null, mergedBy: { rowId: string, username: string } | null, changedFiles: Array<{ path: string, oldPath: string | null, status: DiffStatus, oldOid: string | null, newOid: string | null, isBinary: boolean, isImage: boolean, additions: number, deletions: number }> }> } | null };

export type PullRequestsQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type PullRequestsQuery = { pullRequests: { nodes: Array<{ id: string, rowId: string, number: number, title: string, state: string, sourceBranch: string, targetBranch: string, createdAt: Date, author: { rowId: string, username: string } | null, authoredByAgent: { rowId: string, name: string } | null, pullRequestComments: { totalCount: number } }> } | null };

export type CommitDetailQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
  oid: string;
}>;


export type CommitDetailQuery = { repositories: { nodes: Array<{ rowId: string, commit: { oid: string, message: string, messageHeadline: string, committedDate: Date | null, authoredDate: Date | null, author: { name: string | null, email: string | null } | null, parents: Array<{ oid: string }>, changedFiles: Array<{ path: string, oldPath: string | null, status: DiffStatus, oldOid: string | null, newOid: string | null, isBinary: boolean, isImage: boolean, additions: number, deletions: number }> } | null }> } | null };

export type CommitFileDiffQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
  oid: string;
  path: string;
}>;


export type CommitFileDiffQuery = { repositories: { nodes: Array<{ rowId: string, commit: { oid: string, fileDiff: { path: string, status: DiffStatus, isBinary: boolean, oldText: string | null, newText: string | null } | null } | null }> } | null };

export type RepositoriesQueryVariables = Exact<{
  userId: string;
  limit?: number | null | undefined;
}>;


export type RepositoriesQuery = { repositories: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, avatarUrl: string | null } | null }> } | null };

export type RepositoryBlastRadiusQueryVariables = Exact<{
  repositoryId: string;
}>;


export type RepositoryBlastRadiusQuery = { repositoryBlastRadius: Array<{ repositoryId: string | null, name: string | null, slug: string | null, ownerUsername: string | null, organizationSlug: string | null, depth: number | null }> | null };

export type RepositoryBySlugQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type RepositoryBySlugQuery = { repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string } | null, repositoryCollaborators: { nodes: Array<{ userId: string, permission: Permission }> } }> } | null };

export type RepositoryWithBranchesQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type RepositoryWithBranchesQuery = { repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, avatarUrl: string | null } | null, refs: { totalCount: number, nodes: Array<{ id: string, name: string, prefix: string, target:
            | { oid: string }
            | Record<PropertyKey, never>
           | null }> }, defaultBranchRef: { id: string, name: string, prefix: string, target:
          | { oid: string, messageHeadline: string, committedDate: Date | null, author: { name: string | null } | null }
          | Record<PropertyKey, never>
         | null } | null }> } | null };

export type MergeQueueEntriesQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type MergeQueueEntriesQuery = { mergeQueueEntries: { nodes: Array<{ id: string, rowId: string, state: string, position: number, targetBranch: string, enqueuedAt: Date, createdAt: Date, stack: { rowId: string, title: string } | null, pullRequest: { rowId: string, number: number, title: string } | null, batch: { rowId: string, ciStatus: string, speculativeBranch: string | null } | null }> } | null };

export type StackQueryVariables = Exact<{
  rowId: string;
}>;


export type StackQuery = { stack: { id: string, rowId: string, title: string, description: string | null, baseBranch: string, status: string, createdAt: Date, updatedAt: Date, repository: { rowId: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string } | null } | null, author: { rowId: string, username: string } | null, authoredByAgent: { rowId: string, name: string } | null, changes: { nodes: Array<{ id: string, rowId: string, title: string, description: string | null, position: number, status: string, commitSha: string | null, parentChangeId: string | null, pullRequest: { rowId: string, number: number } | null, verificationChecks: { nodes: Array<{ id: string, rowId: string, name: string, category: string, status: string, required: boolean, summary: string | null, detailsUrl: string | null }> } }> } } | null };

export type StacksQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type StacksQuery = { stacks: { nodes: Array<{ id: string, rowId: string, title: string, description: string | null, baseBranch: string, status: string, createdAt: Date, author: { rowId: string, username: string } | null, authoredByAgent: { rowId: string, name: string } | null, changes: { totalCount: number } }> } | null };

export type MyTesterApplicationQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTesterApplicationQuery = { myTesterApplication: { rowId: string | null, status: string | null, reviewerNote: string | null, ndaVersion: string | null, ndaAcceptedAt: Date | null, createdAt: Date | null, updatedAt: Date | null } | null };

export type ObserverQueryVariables = Exact<{ [key: string]: never; }>;


export type ObserverQuery = { observer: { rowId: string } | null };

export type PullRequestCommentChangedSubscriptionVariables = Exact<{
  pullRequestId: string;
}>;


export type PullRequestCommentChangedSubscription = { pullRequestCommentChanged: { action: PullRequestCommentChangeAction | null, commentId: string | null, comment: { id: string, rowId: string } | null } | null };


export const CreateBranchProtectionRuleDocument = gql`
    mutation CreateBranchProtectionRule($input: BranchProtectionRuleInput!) {
  createBranchProtectionRule(input: {branchProtectionRule: $input}) {
    branchProtectionRule {
      rowId
      refPattern
      requiredApprovals
      requirePassingChecks
    }
  }
}
    `;
export const DeleteBranchProtectionRuleDocument = gql`
    mutation DeleteBranchProtectionRule($rowId: UUID!) {
  deleteBranchProtectionRule(input: {rowId: $rowId}) {
    clientMutationId
  }
}
    `;
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
export const CreatePersonalAccessTokenDocument = gql`
    mutation CreatePersonalAccessToken($name: String!, $expiresInDays: Int, $permission: PersonalAccessTokenPermission, $repositoryIds: [UUID!], $repositoryScopes: [PersonalAccessTokenRepositoryScopeInput!]) {
  createPersonalAccessToken(
    name: $name
    expiresInDays: $expiresInDays
    permission: $permission
    repositoryIds: $repositoryIds
    repositoryScopes: $repositoryScopes
  ) {
    rowId
    name
    tokenPrefix
    expiresAt
    createdAt
    permission
    token
  }
}
    `;
export const DeletePersonalAccessTokenDocument = gql`
    mutation DeletePersonalAccessToken($input: DeletePersonalAccessTokenInput!) {
  deletePersonalAccessToken(input: $input) {
    personalAccessToken {
      rowId
    }
  }
}
    `;
export const AddProjectRepositoryDocument = gql`
    mutation AddProjectRepository($input: CreateProjectRepositoryInput!) {
  createProjectRepository(input: $input) {
    projectRepository {
      rowId
      projectId
      repositoryId
    }
  }
}
    `;
export const RemoveProjectRepositoryDocument = gql`
    mutation RemoveProjectRepository($input: DeleteProjectRepositoryInput!) {
  deleteProjectRepository(input: $input) {
    deletedProjectRepositoryId
  }
}
    `;
export const ClosePullRequestDocument = gql`
    mutation ClosePullRequest($input: SetPullRequestStateInput!) {
  closePullRequest(input: $input) {
    rowId
    number
    state
    error
  }
}
    `;
export const CreatePullRequestCommentDocument = gql`
    mutation CreatePullRequestComment($input: CreatePullRequestCommentInput!) {
  createPullRequestComment(input: $input) {
    pullRequestComment {
      id
      rowId
      pullRequestId
      authorId
      body
      path
      line
      side
      commitSha
      replyToId
      createdAt
      updatedAt
      author {
        rowId
        username
        avatarUrl
      }
    }
  }
}
    `;
export const CreatePullRequestReviewDocument = gql`
    mutation CreatePullRequestReview($input: CreatePullRequestReviewInput!) {
  createPullRequestReview(input: $input) {
    pullRequestReview {
      id
      rowId
      pullRequestId
      reviewerId
      state
      body
      submittedAt
      createdAt
      updatedAt
      reviewer {
        rowId
        username
        avatarUrl
      }
    }
  }
}
    `;
export const DeletePullRequestCommentDocument = gql`
    mutation DeletePullRequestComment($input: DeletePullRequestCommentInput!) {
  deletePullRequestComment(input: $input) {
    deletedPullRequestCommentId
  }
}
    `;
export const OpenPullRequestDocument = gql`
    mutation OpenPullRequest($input: OpenPullRequestInput!) {
  openPullRequest(input: $input) {
    rowId
    number
    error
  }
}
    `;
export const ReopenPullRequestDocument = gql`
    mutation ReopenPullRequest($input: SetPullRequestStateInput!) {
  reopenPullRequest(input: $input) {
    rowId
    number
    state
    error
  }
}
    `;
export const UpdatePullRequestCommentDocument = gql`
    mutation UpdatePullRequestComment($input: UpdatePullRequestCommentInput!) {
  updatePullRequestComment(input: $input) {
    pullRequestComment {
      id
      rowId
      body
      updatedAt
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
export const DiscoverDependenciesDocument = gql`
    mutation DiscoverDependencies($input: DiscoverDependenciesInput!) {
  discoverDependencies(input: $input) {
    internalDependencies
    externalDependencies
    error
  }
}
    `;
export const RenameRepositoryDocument = gql`
    mutation RenameRepository($input: RenameRepositoryInput!) {
  renameRepository(input: $input) {
    repository {
      rowId
      name
      slug
      owner {
        rowId
        username
      }
      organization {
        rowId
        idpOrganizationId
      }
    }
    error
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
export const CreateStackDocument = gql`
    mutation CreateStack($input: CreateStackInput!) {
  createStack(input: $input) {
    stack {
      id
      rowId
      title
      description
      baseBranch
      status
      createdAt
      repository {
        slug
        owner {
          username
        }
        organization {
          idpOrganizationId
        }
      }
    }
  }
}
    `;
export const MergeChangeDocument = gql`
    mutation MergeChange($changeId: UUID!) {
  mergeChange(input: {changeId: $changeId}) {
    success
    changeId
    mode
    deferred
    blockingChecks
    error
  }
}
    `;
export const SubmitTesterApplicationDocument = gql`
    mutation SubmitTesterApplication($input: SubmitTesterApplicationInput!) {
  submitTesterApplication(input: $input) {
    rowId
    status
    reviewerNote
    ndaVersion
    ndaAcceptedAt
    createdAt
    updatedAt
  }
}
    `;
export const AgentsDocument = gql`
    query Agents($userId: UUID!, $organizationId: UUID, $limit: Int) {
  agents(
    filter: {or: [{ownerId: {equalTo: $userId}}, {organizationId: {equalTo: $organizationId}}]}
    orderBy: CREATED_AT_DESC
    first: $limit
  ) {
    nodes {
      rowId
      name
      slug
      description
      model
      vendor
      createdAt
      owner {
        username
      }
    }
    totalCount
  }
}
    `;
export const CreateAgentDocument = gql`
    mutation CreateAgent($input: CreateAgentInput!) {
  createAgent(input: $input) {
    agent {
      rowId
      name
      slug
      description
      model
      vendor
      createdAt
      owner {
        username
      }
    }
  }
}
    `;
export const BranchProtectionRulesDocument = gql`
    query BranchProtectionRules($repositoryId: UUID!) {
  branchProtectionRules(condition: {repositoryId: $repositoryId}) {
    nodes {
      rowId
      refPattern
      requiredApprovals
      requirePassingChecks
    }
  }
}
    `;
export const RepositoryGraphDocument = gql`
    query RepositoryGraph($userId: UUID!, $organizationId: UUID) {
  polyrepoGraphAccess
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
export const PersonalAccessTokensDocument = gql`
    query PersonalAccessTokens {
  personalAccessTokens(orderBy: CREATED_AT_DESC) {
    nodes {
      rowId
      name
      tokenPrefix
      lastUsedAt
      expiresAt
      createdAt
      permission
      personalAccessTokenRepositories {
        totalCount
        nodes {
          refPatterns
          pathPatterns
          repository {
            rowId
            slug
            owner {
              username
            }
          }
        }
      }
    }
  }
}
    `;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    project {
      rowId
      name
      slug
      visibility
      owner {
        username
      }
      organization {
        idpOrganizationId
      }
    }
  }
}
    `;
export const ProjectBySlugDocument = gql`
    query ProjectBySlug($ownerSlug: String!, $slug: String!) {
  projects(
    filter: {slug: {equalTo: $slug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
    first: 1
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      createdAt
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
      projectRepositories {
        totalCount
        nodes {
          rowId
          repository {
            rowId
            name
            slug
            visibility
            owner {
              username
            }
            organization {
              idpOrganizationId
            }
            memberships: projectRepositories {
              totalCount
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
            incomingRelationships: repositoryRelationshipsByTargetRepositoryId {
              nodes {
                rowId
                confidence
                versionConstraint
                sourceRepository {
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
      }
    }
  }
}
    `;
export const ProjectVersionDriftDocument = gql`
    query ProjectVersionDrift($projectId: UUID!) {
  projectVersionDrift(projectId: $projectId) {
    packageManager
    packageName
    versionConstraint
    repositoryId
    name
    slug
    ownerUsername
    organizationSlug
  }
}
    `;
export const ProjectsDocument = gql`
    query Projects($userId: UUID!, $organizationId: UUID, $limit: Int) {
  projects(
    filter: {or: [{ownerId: {equalTo: $userId}}, {organizationId: {equalTo: $organizationId}}]}
    orderBy: UPDATED_AT_DESC
    first: $limit
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      createdAt
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
      projectRepositories {
        totalCount
      }
    }
    totalCount
  }
}
    `;
export const PullRequestConversationDocument = gql`
    query PullRequestConversation($pullRequestId: UUID!) {
  pullRequestComments(
    condition: {pullRequestId: $pullRequestId}
    orderBy: [CREATED_AT_ASC]
    first: 50
  ) {
    nodes {
      id
      rowId
      pullRequestId
      authorId
      body
      path
      line
      side
      commitSha
      replyToId
      createdAt
      updatedAt
      author {
        rowId
        username
        avatarUrl
      }
    }
  }
  pullRequestReviews(
    condition: {pullRequestId: $pullRequestId}
    orderBy: [CREATED_AT_ASC]
    first: 50
  ) {
    nodes {
      id
      rowId
      pullRequestId
      reviewerId
      state
      body
      submittedAt
      createdAt
      updatedAt
      reviewer {
        rowId
        username
        avatarUrl
      }
    }
  }
}
    `;
export const PullRequestFileDiffDocument = gql`
    query PullRequestFileDiff($ownerSlug: String!, $repoSlug: String!, $number: Int!, $path: String!) {
  pullRequests(
    filter: {number: {equalTo: $number}, repository: {slug: {equalTo: $repoSlug}, owner: {username: {equalTo: $ownerSlug}}}}
    first: 1
  ) {
    nodes {
      id
      rowId
      fileDiff(path: $path) {
        path
        status
        isBinary
        oldText
        newText
      }
    }
  }
}
    `;
export const PullRequestFilesDocument = gql`
    query PullRequestFiles($ownerSlug: String!, $repoSlug: String!, $number: Int!) {
  pullRequests(
    filter: {number: {equalTo: $number}, repository: {slug: {equalTo: $repoSlug}, owner: {username: {equalTo: $ownerSlug}}}}
    first: 1
  ) {
    nodes {
      id
      rowId
      number
      title
      description
      state
      sourceBranch
      targetBranch
      createdAt
      mergedAt
      author {
        rowId
        username
        avatarUrl
      }
      authoredByAgent {
        rowId
        name
      }
      mergedBy {
        rowId
        username
      }
      changedFiles {
        path
        oldPath
        status
        oldOid
        newOid
        isBinary
        isImage
        additions
        deletions
      }
    }
  }
}
    `;
export const PullRequestsDocument = gql`
    query PullRequests($ownerSlug: String!, $repoSlug: String!) {
  pullRequests(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
    orderBy: [CREATED_AT_DESC]
    first: 100
  ) {
    nodes {
      id
      rowId
      number
      title
      state
      sourceBranch
      targetBranch
      createdAt
      author {
        rowId
        username
      }
      authoredByAgent {
        rowId
        name
      }
      pullRequestComments {
        totalCount
      }
    }
  }
}
    `;
export const CommitDetailDocument = gql`
    query CommitDetail($ownerSlug: String!, $repoSlug: String!, $oid: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, owner: {username: {equalTo: $ownerSlug}}}
    first: 1
  ) {
    nodes {
      rowId
      commit(sha: $oid) {
        oid
        message
        messageHeadline
        committedDate
        authoredDate
        author {
          name
          email
        }
        parents {
          oid
        }
        changedFiles {
          path
          oldPath
          status
          oldOid
          newOid
          isBinary
          isImage
          additions
          deletions
        }
      }
    }
  }
}
    `;
export const CommitFileDiffDocument = gql`
    query CommitFileDiff($ownerSlug: String!, $repoSlug: String!, $oid: String!, $path: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, owner: {username: {equalTo: $ownerSlug}}}
    first: 1
  ) {
    nodes {
      rowId
      commit(sha: $oid) {
        oid
        fileDiff(path: $path) {
          path
          status
          isBinary
          oldText
          newText
        }
      }
    }
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
export const RepositoryBlastRadiusDocument = gql`
    query RepositoryBlastRadius($repositoryId: UUID!) {
  repositoryBlastRadius(repositoryId: $repositoryId) {
    repositoryId
    name
    slug
    ownerUsername
    organizationSlug
    depth
  }
}
    `;
export const RepositoryBySlugDocument = gql`
    query RepositoryBySlug($ownerSlug: String!, $repoSlug: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
    first: 1
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      owner {
        rowId
        username
      }
      organization {
        rowId
        idpOrganizationId
      }
      repositoryCollaborators {
        nodes {
          userId
          permission
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
            messageHeadline
            committedDate
            author {
              name
            }
          }
        }
      }
    }
  }
}
    `;
export const MergeQueueEntriesDocument = gql`
    query MergeQueueEntries($ownerSlug: String!, $repoSlug: String!) {
  mergeQueueEntries(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
    orderBy: [POSITION_ASC]
    first: 100
  ) {
    nodes {
      id
      rowId
      state
      position
      targetBranch
      enqueuedAt
      createdAt
      stack {
        rowId
        title
      }
      pullRequest {
        rowId
        number
        title
      }
      batch {
        rowId
        ciStatus
        speculativeBranch
      }
    }
  }
}
    `;
export const StackDocument = gql`
    query Stack($rowId: UUID!) {
  stack(rowId: $rowId) {
    id
    rowId
    title
    description
    baseBranch
    status
    createdAt
    updatedAt
    repository {
      rowId
      slug
      owner {
        username
      }
      organization {
        idpOrganizationId
      }
    }
    author {
      rowId
      username
    }
    authoredByAgent {
      rowId
      name
    }
    changes(orderBy: [POSITION_ASC]) {
      nodes {
        id
        rowId
        title
        description
        position
        status
        commitSha
        parentChangeId
        pullRequest {
          rowId
          number
        }
        verificationChecks(orderBy: [NAME_ASC]) {
          nodes {
            id
            rowId
            name
            category
            status
            required
            summary
            detailsUrl
          }
        }
      }
    }
  }
}
    `;
export const StacksDocument = gql`
    query Stacks($ownerSlug: String!, $repoSlug: String!) {
  stacks(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
    orderBy: [CREATED_AT_DESC]
    first: 100
  ) {
    nodes {
      id
      rowId
      title
      description
      baseBranch
      status
      createdAt
      author {
        rowId
        username
      }
      authoredByAgent {
        rowId
        name
      }
      changes {
        totalCount
      }
    }
  }
}
    `;
export const MyTesterApplicationDocument = gql`
    query MyTesterApplication {
  myTesterApplication {
    rowId
    status
    reviewerNote
    ndaVersion
    ndaAcceptedAt
    createdAt
    updatedAt
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
export const PullRequestCommentChangedDocument = gql`
    subscription PullRequestCommentChanged($pullRequestId: UUID!) {
  pullRequestCommentChanged(pullRequestId: $pullRequestId) {
    action
    commentId
    comment {
      id
      rowId
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateBranchProtectionRule(variables: CreateBranchProtectionRuleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateBranchProtectionRuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBranchProtectionRuleMutation>({ document: CreateBranchProtectionRuleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateBranchProtectionRule', 'mutation', variables);
    },
    DeleteBranchProtectionRule(variables: DeleteBranchProtectionRuleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteBranchProtectionRuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteBranchProtectionRuleMutation>({ document: DeleteBranchProtectionRuleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeleteBranchProtectionRule', 'mutation', variables);
    },
    CreateOrganization(variables: CreateOrganizationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateOrganizationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrganizationMutation>({ document: CreateOrganizationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateOrganization', 'mutation', variables);
    },
    CreatePersonalAccessToken(variables: CreatePersonalAccessTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreatePersonalAccessTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePersonalAccessTokenMutation>({ document: CreatePersonalAccessTokenDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreatePersonalAccessToken', 'mutation', variables);
    },
    DeletePersonalAccessToken(variables: DeletePersonalAccessTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeletePersonalAccessTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePersonalAccessTokenMutation>({ document: DeletePersonalAccessTokenDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeletePersonalAccessToken', 'mutation', variables);
    },
    AddProjectRepository(variables: AddProjectRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AddProjectRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddProjectRepositoryMutation>({ document: AddProjectRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AddProjectRepository', 'mutation', variables);
    },
    RemoveProjectRepository(variables: RemoveProjectRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RemoveProjectRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveProjectRepositoryMutation>({ document: RemoveProjectRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RemoveProjectRepository', 'mutation', variables);
    },
    ClosePullRequest(variables: ClosePullRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ClosePullRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ClosePullRequestMutation>({ document: ClosePullRequestDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ClosePullRequest', 'mutation', variables);
    },
    CreatePullRequestComment(variables: CreatePullRequestCommentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreatePullRequestCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePullRequestCommentMutation>({ document: CreatePullRequestCommentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreatePullRequestComment', 'mutation', variables);
    },
    CreatePullRequestReview(variables: CreatePullRequestReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreatePullRequestReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePullRequestReviewMutation>({ document: CreatePullRequestReviewDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreatePullRequestReview', 'mutation', variables);
    },
    DeletePullRequestComment(variables: DeletePullRequestCommentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeletePullRequestCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePullRequestCommentMutation>({ document: DeletePullRequestCommentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeletePullRequestComment', 'mutation', variables);
    },
    OpenPullRequest(variables: OpenPullRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<OpenPullRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<OpenPullRequestMutation>({ document: OpenPullRequestDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'OpenPullRequest', 'mutation', variables);
    },
    ReopenPullRequest(variables: ReopenPullRequestMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ReopenPullRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReopenPullRequestMutation>({ document: ReopenPullRequestDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ReopenPullRequest', 'mutation', variables);
    },
    UpdatePullRequestComment(variables: UpdatePullRequestCommentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdatePullRequestCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePullRequestCommentMutation>({ document: UpdatePullRequestCommentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdatePullRequestComment', 'mutation', variables);
    },
    DeleteRepository(variables: DeleteRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRepositoryMutation>({ document: DeleteRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeleteRepository', 'mutation', variables);
    },
    DiscoverDependencies(variables: DiscoverDependenciesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DiscoverDependenciesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DiscoverDependenciesMutation>({ document: DiscoverDependenciesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DiscoverDependencies', 'mutation', variables);
    },
    RenameRepository(variables: RenameRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RenameRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenameRepositoryMutation>({ document: RenameRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RenameRepository', 'mutation', variables);
    },
    UpdateRepository(variables: UpdateRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRepositoryMutation>({ document: UpdateRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateRepository', 'mutation', variables);
    },
    CreateStack(variables: CreateStackMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateStackMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateStackMutation>({ document: CreateStackDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateStack', 'mutation', variables);
    },
    MergeChange(variables: MergeChangeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MergeChangeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MergeChangeMutation>({ document: MergeChangeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'MergeChange', 'mutation', variables);
    },
    SubmitTesterApplication(variables: SubmitTesterApplicationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SubmitTesterApplicationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitTesterApplicationMutation>({ document: SubmitTesterApplicationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SubmitTesterApplication', 'mutation', variables);
    },
    Agents(variables: AgentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AgentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AgentsQuery>({ document: AgentsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Agents', 'query', variables);
    },
    CreateAgent(variables: CreateAgentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateAgentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAgentMutation>({ document: CreateAgentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateAgent', 'mutation', variables);
    },
    BranchProtectionRules(variables: BranchProtectionRulesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BranchProtectionRulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BranchProtectionRulesQuery>({ document: BranchProtectionRulesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'BranchProtectionRules', 'query', variables);
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
    PersonalAccessTokens(variables?: PersonalAccessTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PersonalAccessTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PersonalAccessTokensQuery>({ document: PersonalAccessTokensDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PersonalAccessTokens', 'query', variables);
    },
    CreateProject(variables: CreateProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectMutation>({ document: CreateProjectDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreateProject', 'mutation', variables);
    },
    ProjectBySlug(variables: ProjectBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectBySlugQuery>({ document: ProjectBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ProjectBySlug', 'query', variables);
    },
    ProjectVersionDrift(variables: ProjectVersionDriftQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectVersionDriftQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectVersionDriftQuery>({ document: ProjectVersionDriftDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ProjectVersionDrift', 'query', variables);
    },
    Projects(variables: ProjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsQuery>({ document: ProjectsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Projects', 'query', variables);
    },
    PullRequestConversation(variables: PullRequestConversationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PullRequestConversationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PullRequestConversationQuery>({ document: PullRequestConversationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PullRequestConversation', 'query', variables);
    },
    PullRequestFileDiff(variables: PullRequestFileDiffQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PullRequestFileDiffQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PullRequestFileDiffQuery>({ document: PullRequestFileDiffDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PullRequestFileDiff', 'query', variables);
    },
    PullRequestFiles(variables: PullRequestFilesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PullRequestFilesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PullRequestFilesQuery>({ document: PullRequestFilesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PullRequestFiles', 'query', variables);
    },
    PullRequests(variables: PullRequestsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PullRequestsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PullRequestsQuery>({ document: PullRequestsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PullRequests', 'query', variables);
    },
    CommitDetail(variables: CommitDetailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CommitDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommitDetailQuery>({ document: CommitDetailDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CommitDetail', 'query', variables);
    },
    CommitFileDiff(variables: CommitFileDiffQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CommitFileDiffQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommitFileDiffQuery>({ document: CommitFileDiffDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CommitFileDiff', 'query', variables);
    },
    Repositories(variables: RepositoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoriesQuery>({ document: RepositoriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Repositories', 'query', variables);
    },
    RepositoryBlastRadius(variables: RepositoryBlastRadiusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryBlastRadiusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryBlastRadiusQuery>({ document: RepositoryBlastRadiusDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RepositoryBlastRadius', 'query', variables);
    },
    RepositoryBySlug(variables: RepositoryBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryBySlugQuery>({ document: RepositoryBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RepositoryBySlug', 'query', variables);
    },
    RepositoryWithBranches(variables: RepositoryWithBranchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RepositoryWithBranchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RepositoryWithBranchesQuery>({ document: RepositoryWithBranchesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RepositoryWithBranches', 'query', variables);
    },
    MergeQueueEntries(variables: MergeQueueEntriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MergeQueueEntriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MergeQueueEntriesQuery>({ document: MergeQueueEntriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'MergeQueueEntries', 'query', variables);
    },
    Stack(variables: StackQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<StackQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StackQuery>({ document: StackDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Stack', 'query', variables);
    },
    Stacks(variables: StacksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<StacksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StacksQuery>({ document: StacksDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Stacks', 'query', variables);
    },
    MyTesterApplication(variables?: MyTesterApplicationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MyTesterApplicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyTesterApplicationQuery>({ document: MyTesterApplicationDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'MyTesterApplication', 'query', variables);
    },
    Observer(variables?: ObserverQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ObserverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObserverQuery>({ document: ObserverDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Observer', 'query', variables);
    },
    PullRequestCommentChanged(variables: PullRequestCommentChangedSubscriptionVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PullRequestCommentChangedSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<PullRequestCommentChangedSubscription>({ document: PullRequestCommentChangedDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'PullRequestCommentChanged', 'subscription', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;