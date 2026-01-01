// @ts-nocheck
import { useMutation, useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseMutationOptions, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
import { graphqlFetch } from '@/lib/graphql/graphqlFetch';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: string; output: string; }
  Cursor: { input: string; output: string; }
  Datetime: { input: Date; output: Date; }
  UUID: { input: string; output: string; }
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

/** All input for the `deleteOrganizationMemberById` mutation. */
export type DeleteOrganizationMemberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OrganizationMember` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteOrganizationMember` mutation. */
export type DeleteOrganizationMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `ExternalDependency`. */
  createExternalDependency?: Maybe<CreateExternalDependencyPayload>;
  /** Creates a single `Organization`. */
  createOrganization?: Maybe<CreateOrganizationPayload>;
  /** Creates a single `OrganizationMember`. */
  createOrganizationMember?: Maybe<CreateOrganizationMemberPayload>;
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
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `ExternalDependency` using a unique key. */
  deleteExternalDependency?: Maybe<DeleteExternalDependencyPayload>;
  /** Deletes a single `ExternalDependency` using its globally unique id. */
  deleteExternalDependencyById?: Maybe<DeleteExternalDependencyPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organization` using its globally unique id. */
  deleteOrganizationById?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `OrganizationMember` using a unique key. */
  deleteOrganizationMember?: Maybe<DeleteOrganizationMemberPayload>;
  /** Deletes a single `OrganizationMember` using its globally unique id. */
  deleteOrganizationMemberById?: Maybe<DeleteOrganizationMemberPayload>;
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
  /** Updates a single `ExternalDependency` using a unique key and a patch. */
  updateExternalDependency?: Maybe<UpdateExternalDependencyPayload>;
  /** Updates a single `ExternalDependency` using its globally unique id and a patch. */
  updateExternalDependencyById?: Maybe<UpdateExternalDependencyPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organization` using its globally unique id and a patch. */
  updateOrganizationById?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `OrganizationMember` using a unique key and a patch. */
  updateOrganizationMember?: Maybe<UpdateOrganizationMemberPayload>;
  /** Updates a single `OrganizationMember` using its globally unique id and a patch. */
  updateOrganizationMemberById?: Maybe<UpdateOrganizationMemberPayload>;
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
export type MutationCreateExternalDependencyArgs = {
  input: CreateExternalDependencyInput;
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
export type MutationCreateUserArgs = {
  input: CreateUserInput;
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
export type MutationDeleteOrganizationMemberArgs = {
  input: DeleteOrganizationMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationMemberByIdArgs = {
  input: DeleteOrganizationMemberByIdInput;
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
export type MutationUpdateOrganizationMemberArgs = {
  input: UpdateOrganizationMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationMemberByIdArgs = {
  input: UpdateOrganizationMemberByIdInput;
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

export type Organization = Node & {
  __typename?: 'Organization';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers: OrganizationMemberConnection;
  /** Reads and enables pagination through a set of `Repository`. */
  repositories: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryRelationshipType`. */
  repositoryRelationshipTypes: RepositoryRelationshipTypeConnection;
  rowId: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  tier: Tier;
  updatedAt: Scalars['Datetime']['output'];
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
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `stripeCustomerId` field. */
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `stripeSubscriptionId` field. */
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tier` field. */
  tier?: InputMaybe<Tier>;
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
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rowId across the matching connection */
  rowId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of slug across the matching connection */
  slug?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of stripeCustomerId across the matching connection */
  stripeCustomerId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of stripeSubscriptionId across the matching connection */
  stripeSubscriptionId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of tier across the matching connection */
  tier?: Maybe<Scalars['BigInt']['output']>;
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
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
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
  /** Filter by the object’s `stripeCustomerId` field. */
  stripeCustomerId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `stripeSubscriptionId` field. */
  stripeSubscriptionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tier` field. */
  tier?: InputMaybe<TierFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Grouping methods for `Organization` for usage during aggregation. */
export enum OrganizationGroupBy {
  AvatarUrl = 'AVATAR_URL',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  StripeCustomerId = 'STRIPE_CUSTOMER_ID',
  StripeSubscriptionId = 'STRIPE_SUBSCRIPTION_ID',
  Tier = 'TIER',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR'
}

export type OrganizationHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
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
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `Organization` */
export type OrganizationInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug: Scalars['String']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OrganizationMember = Node & {
  __typename?: 'OrganizationMember';
  createdAt: Scalars['Datetime']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Organization` that is related to this `OrganizationMember`. */
  organization?: Maybe<Organization>;
  organizationId: Scalars['UUID']['output'];
  role: Role;
  updatedAt: Scalars['Datetime']['output'];
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
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `organizationId` field. */
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<Role>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
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
  createdAt?: InputMaybe<BigIntFilter>;
  organizationId?: InputMaybe<BigIntFilter>;
  role?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
};

export type OrganizationMemberDistinctCountAggregates = {
  __typename?: 'OrganizationMemberDistinctCountAggregates';
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of organizationId across the matching connection */
  organizationId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of role across the matching connection */
  role?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
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
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OrganizationMemberFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OrganizationMemberFilter>>;
  /** Filter by the object’s `organization` relation. */
  organization?: InputMaybe<OrganizationFilter>;
  /** Filter by the object’s `organizationId` field. */
  organizationId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<RoleFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<UserFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<UuidFilter>;
};

/** Grouping methods for `OrganizationMember` for usage during aggregation. */
export enum OrganizationMemberGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  OrganizationId = 'ORGANIZATION_ID',
  Role = 'ROLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UserId = 'USER_ID'
}

export type OrganizationMemberHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
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
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

export type OrganizationMemberHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
};

/** An input for mutations affecting `OrganizationMember` */
export type OrganizationMemberInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  organizationId: Scalars['UUID']['input'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId: Scalars['UUID']['input'];
};

/** Methods to use when ordering `OrganizationMember`. */
export enum OrganizationMemberOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Natural = 'NATURAL',
  OrganizationIdAsc = 'ORGANIZATION_ID_ASC',
  OrganizationIdDesc = 'ORGANIZATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** Represents an update to a `OrganizationMember`. Fields that are set will be updated. */
export type OrganizationMemberPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Methods to use when ordering `Organization`. */
export enum OrganizationOrderBy {
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationMembersCountAsc = 'ORGANIZATION_MEMBERS_COUNT_ASC',
  OrganizationMembersCountDesc = 'ORGANIZATION_MEMBERS_COUNT_DESC',
  OrganizationMembersDistinctCountCreatedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_CREATED_AT_ASC',
  OrganizationMembersDistinctCountCreatedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_CREATED_AT_DESC',
  OrganizationMembersDistinctCountOrganizationIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  OrganizationMembersDistinctCountOrganizationIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  OrganizationMembersDistinctCountRoleAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLE_ASC',
  OrganizationMembersDistinctCountRoleDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLE_DESC',
  OrganizationMembersDistinctCountUpdatedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_UPDATED_AT_ASC',
  OrganizationMembersDistinctCountUpdatedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_UPDATED_AT_DESC',
  OrganizationMembersDistinctCountUserIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_ASC',
  OrganizationMembersDistinctCountUserIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_DESC',
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
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  StripeCustomerIdAsc = 'STRIPE_CUSTOMER_ID_ASC',
  StripeCustomerIdDesc = 'STRIPE_CUSTOMER_ID_DESC',
  StripeSubscriptionIdAsc = 'STRIPE_SUBSCRIPTION_ID_ASC',
  StripeSubscriptionIdDesc = 'STRIPE_SUBSCRIPTION_ID_DESC',
  TierAsc = 'TIER_ASC',
  TierDesc = 'TIER_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Represents an update to a `Organization`. Fields that are set will be updated. */
export type OrganizationPatch = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
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

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
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
  /** Get a single `Organization`. */
  organization?: Maybe<Organization>;
  /** Reads a single `Organization` using its globally unique `ID`. */
  organizationById?: Maybe<Organization>;
  /** Get a single `Organization`. */
  organizationBySlug?: Maybe<Organization>;
  /** Get a single `OrganizationMember`. */
  organizationMember?: Maybe<OrganizationMember>;
  /** Reads a single `OrganizationMember` using its globally unique `ID`. */
  organizationMemberById?: Maybe<OrganizationMember>;
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers?: Maybe<OrganizationMemberConnection>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationConnection>;
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
export type QueryOrganizationBySlugArgs = {
  slug: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationMemberArgs = {
  organizationId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
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

export type Repository = Node & {
  __typename?: 'Repository';
  createdAt: Scalars['Datetime']['output'];
  defaultBranch: Scalars['String']['output'];
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

export enum Role {
  Admin = 'admin',
  Member = 'member',
  Owner = 'owner'
}

/** A filter to be used against Role fields. All fields are combined with a logical ‘and.’ */
export type RoleFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Role>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Role>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Role>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Role>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Role>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Role>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Role>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Role>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Role>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Role>>;
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

export enum Tier {
  Basic = 'basic',
  Free = 'free',
  Team = 'team'
}

/** A filter to be used against Tier fields. All fields are combined with a logical ‘and.’ */
export type TierFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Tier>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Tier>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Tier>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Tier>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Tier>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Tier>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Tier>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Tier>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Tier>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Tier>>;
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

/** All input for the `updateOrganizationMemberById` mutation. */
export type UpdateOrganizationMemberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OrganizationMember` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OrganizationMember` being updated. */
  patch: OrganizationMemberPatch;
};

/** All input for the `updateOrganizationMember` mutation. */
export type UpdateOrganizationMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OrganizationMember` being updated. */
  patch: OrganizationMemberPatch;
  userId: Scalars['UUID']['input'];
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
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  identityProviderId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `OrganizationMember`. */
  organizationMembers: OrganizationMemberConnection;
  /** Reads and enables pagination through a set of `Repository`. */
  repositoriesByOwnerId: RepositoryConnection;
  /** Reads and enables pagination through a set of `RepositoryCollaborator`. */
  repositoryCollaborators: RepositoryCollaboratorConnection;
  rowId: Scalars['UUID']['output'];
  updatedAt: Scalars['Datetime']['output'];
  username: Scalars['String']['output'];
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
  /** Filter by the object’s `organizationMembers` relation. */
  organizationMembers?: InputMaybe<UserToManyOrganizationMemberFilter>;
  /** Some related `organizationMembers` exist. */
  organizationMembersExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoriesByOwnerId` relation. */
  repositoriesByOwnerId?: InputMaybe<UserToManyRepositoryFilter>;
  /** Some related `repositoriesByOwnerId` exist. */
  repositoriesByOwnerIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `repositoryCollaborators` relation. */
  repositoryCollaborators?: InputMaybe<UserToManyRepositoryCollaboratorFilter>;
  /** Some related `repositoryCollaborators` exist. */
  repositoryCollaboratorsExist?: InputMaybe<Scalars['Boolean']['input']>;
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
  OrganizationMembersCountAsc = 'ORGANIZATION_MEMBERS_COUNT_ASC',
  OrganizationMembersCountDesc = 'ORGANIZATION_MEMBERS_COUNT_DESC',
  OrganizationMembersDistinctCountCreatedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_CREATED_AT_ASC',
  OrganizationMembersDistinctCountCreatedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_CREATED_AT_DESC',
  OrganizationMembersDistinctCountOrganizationIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_ASC',
  OrganizationMembersDistinctCountOrganizationIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ORGANIZATION_ID_DESC',
  OrganizationMembersDistinctCountRoleAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLE_ASC',
  OrganizationMembersDistinctCountRoleDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_ROLE_DESC',
  OrganizationMembersDistinctCountUpdatedAtAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_UPDATED_AT_ASC',
  OrganizationMembersDistinctCountUpdatedAtDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_UPDATED_AT_DESC',
  OrganizationMembersDistinctCountUserIdAsc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_ASC',
  OrganizationMembersDistinctCountUserIdDesc = 'ORGANIZATION_MEMBERS_DISTINCT_COUNT_USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
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


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization?: { __typename?: 'CreateOrganizationPayload', organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string, description?: string | null, avatarUrl?: string | null, tier: Tier, createdAt: Date } | null } | null };

export type CreateRepositoryMutationVariables = Exact<{
  input: CreateRepositoryInput;
}>;


export type CreateRepositoryMutation = { __typename?: 'Mutation', createRepository?: { __typename?: 'CreateRepositoryPayload', repository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string } | null, organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string } | null } | null } | null };

export type DeleteRepositoryMutationVariables = Exact<{
  input: DeleteRepositoryInput;
}>;


export type DeleteRepositoryMutation = { __typename?: 'Mutation', deleteRepository?: { __typename?: 'DeleteRepositoryPayload', repository?: { __typename?: 'Repository', rowId: string } | null } | null };

export type RepositoryGraphQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  organizationId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type RepositoryGraphQuery = { __typename?: 'Query', repositories?: { __typename?: 'RepositoryConnection', nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, owner?: { __typename?: 'User', rowId: string, username: string } | null, organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string } | null, outgoingRelationships: { __typename?: 'RepositoryRelationshipConnection', nodes: Array<{ __typename?: 'RepositoryRelationship', rowId: string, confidence: number, versionConstraint?: string | null, targetRepository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, owner?: { __typename?: 'User', username: string } | null, organization?: { __typename?: 'Organization', slug: string } | null } | null, relationshipType?: { __typename?: 'RepositoryRelationshipType', rowId: string, name: string, isDirected: boolean } | null }> } }> } | null, repositoryRelationshipTypes?: { __typename?: 'RepositoryRelationshipTypeConnection', nodes: Array<{ __typename?: 'RepositoryRelationshipType', rowId: string, name: string, description?: string | null, isDirected: boolean }> } | null };

export type OrganizationQueryVariables = Exact<{
  rowId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string, description?: string | null, avatarUrl?: string | null, tier: Tier, createdAt: Date, updatedAt: Date, organizationMembers: { __typename?: 'OrganizationMemberConnection', totalCount: number, nodes: Array<{ __typename?: 'OrganizationMember', userId: string, role: Role, createdAt: Date, user?: { __typename?: 'User', rowId: string, username: string, name: string, email: string, avatarUrl?: string | null } | null }> }, currentUser: { __typename?: 'OrganizationMemberConnection', nodes: Array<{ __typename?: 'OrganizationMember', role: Role }> }, repositories: { __typename?: 'RepositoryConnection', totalCount: number, nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, updatedAt: Date }> } } | null };

export type OrganizationsQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrganizationsQuery = { __typename?: 'Query', organizations?: { __typename?: 'OrganizationConnection', totalCount: number, nodes: Array<{ __typename?: 'Organization', rowId: string, name: string, slug: string, description?: string | null, avatarUrl?: string | null, tier: Tier, createdAt: Date, updatedAt: Date, organizationMembers: { __typename?: 'OrganizationMemberConnection', totalCount: number }, currentUser: { __typename?: 'OrganizationMemberConnection', nodes: Array<{ __typename?: 'OrganizationMember', role: Role }> }, repositories: { __typename?: 'RepositoryConnection', totalCount: number } }> } | null };

export type RepositoriesQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RepositoriesQuery = { __typename?: 'Query', repositories?: { __typename?: 'RepositoryConnection', totalCount: number, nodes: Array<{ __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null, organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string, avatarUrl?: string | null } | null }> } | null };

export type RepositoryQueryVariables = Exact<{
  rowId: Scalars['UUID']['input'];
}>;


export type RepositoryQuery = { __typename?: 'Query', repository?: { __typename?: 'Repository', rowId: string, name: string, slug: string, description?: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null, organization?: { __typename?: 'Organization', rowId: string, name: string, slug: string, avatarUrl?: string | null } | null, repositoryCollaborators: { __typename?: 'RepositoryCollaboratorConnection', nodes: Array<{ __typename?: 'RepositoryCollaborator', userId: string, permission: Permission, user?: { __typename?: 'User', rowId: string, username: string, avatarUrl?: string | null } | null }> } } | null };

export type UserByIdentityProviderIdQueryVariables = Exact<{
  identityProviderId: Scalars['UUID']['input'];
}>;


export type UserByIdentityProviderIdQuery = { __typename?: 'Query', userByIdentityProviderId?: { __typename?: 'User', rowId: string } | null };



export const CreateOrganizationDocument = `
    mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    organization {
      rowId
      name
      slug
      description
      avatarUrl
      tier
      createdAt
    }
  }
}
    `;

export const useCreateOrganizationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateOrganizationMutation, TError, CreateOrganizationMutationVariables, TContext>) => {
    
    return useMutation<CreateOrganizationMutation, TError, CreateOrganizationMutationVariables, TContext>(
      {
    mutationKey: ['CreateOrganization'],
    mutationFn: (variables?: CreateOrganizationMutationVariables) => graphqlFetch<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, variables)(),
    ...options
  }
    )};

useCreateOrganizationMutation.getKey = () => ['CreateOrganization'];


useCreateOrganizationMutation.fetcher = (variables: CreateOrganizationMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, variables, options);

export const CreateRepositoryDocument = `
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
        name
        slug
      }
    }
  }
}
    `;

export const useCreateRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateRepositoryMutation, TError, CreateRepositoryMutationVariables, TContext>) => {
    
    return useMutation<CreateRepositoryMutation, TError, CreateRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['CreateRepository'],
    mutationFn: (variables?: CreateRepositoryMutationVariables) => graphqlFetch<CreateRepositoryMutation, CreateRepositoryMutationVariables>(CreateRepositoryDocument, variables)(),
    ...options
  }
    )};

useCreateRepositoryMutation.getKey = () => ['CreateRepository'];


useCreateRepositoryMutation.fetcher = (variables: CreateRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateRepositoryMutation, CreateRepositoryMutationVariables>(CreateRepositoryDocument, variables, options);

export const DeleteRepositoryDocument = `
    mutation DeleteRepository($input: DeleteRepositoryInput!) {
  deleteRepository(input: $input) {
    repository {
      rowId
    }
  }
}
    `;

export const useDeleteRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteRepositoryMutation, TError, DeleteRepositoryMutationVariables, TContext>) => {
    
    return useMutation<DeleteRepositoryMutation, TError, DeleteRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['DeleteRepository'],
    mutationFn: (variables?: DeleteRepositoryMutationVariables) => graphqlFetch<DeleteRepositoryMutation, DeleteRepositoryMutationVariables>(DeleteRepositoryDocument, variables)(),
    ...options
  }
    )};

useDeleteRepositoryMutation.getKey = () => ['DeleteRepository'];


useDeleteRepositoryMutation.fetcher = (variables: DeleteRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<DeleteRepositoryMutation, DeleteRepositoryMutationVariables>(DeleteRepositoryDocument, variables, options);

export const RepositoryGraphDocument = `
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
        name
        slug
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
              slug
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

export const useRepositoryGraphQuery = <
      TData = RepositoryGraphQuery,
      TError = unknown
    >(
      variables: RepositoryGraphQueryVariables,
      options?: Omit<UseQueryOptions<RepositoryGraphQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoryGraphQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoryGraphQuery, TError, TData>(
      {
    queryKey: ['RepositoryGraph', variables],
    queryFn: graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, variables),
    ...options
  }
    )};

useRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraph', variables];

export const useSuspenseRepositoryGraphQuery = <
      TData = RepositoryGraphQuery,
      TError = unknown
    >(
      variables: RepositoryGraphQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoryGraphQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoryGraphQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoryGraphQuery, TError, TData>(
      {
    queryKey: ['RepositoryGraphSuspense', variables],
    queryFn: graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraphSuspense', variables];

export const useInfiniteRepositoryGraphQuery = <
      TData = InfiniteData<RepositoryGraphQuery>,
      TError = unknown
    >(
      variables: RepositoryGraphQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoryGraphQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoryGraphQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoryGraphQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryGraph.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraph.infinite', variables];

export const useSuspenseInfiniteRepositoryGraphQuery = <
      TData = InfiniteData<RepositoryGraphQuery>,
      TError = unknown
    >(
      variables: RepositoryGraphQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoryGraphQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoryGraphQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoryGraphQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryGraph.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraph.infiniteSuspense', variables];


useRepositoryGraphQuery.fetcher = (variables: RepositoryGraphQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, variables, options);

export const OrganizationDocument = `
    query Organization($rowId: UUID!, $userId: UUID!) {
  organization(rowId: $rowId) {
    rowId
    name
    slug
    description
    avatarUrl
    tier
    createdAt
    updatedAt
    organizationMembers {
      nodes {
        userId
        role
        createdAt
        user {
          rowId
          username
          name
          email
          avatarUrl
        }
      }
      totalCount
    }
    currentUser: organizationMembers(condition: {userId: $userId}) {
      nodes {
        role
      }
    }
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

export const useOrganizationQuery = <
      TData = OrganizationQuery,
      TError = unknown
    >(
      variables: OrganizationQueryVariables,
      options?: Omit<UseQueryOptions<OrganizationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<OrganizationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<OrganizationQuery, TError, TData>(
      {
    queryKey: ['Organization', variables],
    queryFn: graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, variables),
    ...options
  }
    )};

useOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['Organization', variables];

export const useSuspenseOrganizationQuery = <
      TData = OrganizationQuery,
      TError = unknown
    >(
      variables: OrganizationQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<OrganizationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<OrganizationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<OrganizationQuery, TError, TData>(
      {
    queryKey: ['OrganizationSuspense', variables],
    queryFn: graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, variables),
    ...options
  }
    )};

useSuspenseOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['OrganizationSuspense', variables];

export const useInfiniteOrganizationQuery = <
      TData = InfiniteData<OrganizationQuery>,
      TError = unknown
    >(
      variables: OrganizationQueryVariables,
      options: Omit<UseInfiniteQueryOptions<OrganizationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<OrganizationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<OrganizationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Organization.infinite', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['Organization.infinite', variables];

export const useSuspenseInfiniteOrganizationQuery = <
      TData = InfiniteData<OrganizationQuery>,
      TError = unknown
    >(
      variables: OrganizationQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<OrganizationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<OrganizationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<OrganizationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Organization.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['Organization.infiniteSuspense', variables];


useOrganizationQuery.fetcher = (variables: OrganizationQueryVariables, options?: RequestInit['headers']) => graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, variables, options);

export const OrganizationsDocument = `
    query Organizations($userId: UUID!, $limit: Int) {
  organizations(
    filter: {organizationMembers: {some: {userId: {equalTo: $userId}}}}
    orderBy: NAME_ASC
    first: $limit
  ) {
    nodes {
      rowId
      name
      slug
      description
      avatarUrl
      tier
      createdAt
      updatedAt
      organizationMembers {
        totalCount
      }
      currentUser: organizationMembers(condition: {userId: $userId}) {
        nodes {
          role
        }
      }
      repositories {
        totalCount
      }
    }
    totalCount
  }
}
    `;

export const useOrganizationsQuery = <
      TData = OrganizationsQuery,
      TError = unknown
    >(
      variables: OrganizationsQueryVariables,
      options?: Omit<UseQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<OrganizationsQuery, TError, TData>(
      {
    queryKey: ['Organizations', variables],
    queryFn: graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables),
    ...options
  }
    )};

useOrganizationsQuery.getKey = (variables: OrganizationsQueryVariables) => ['Organizations', variables];

export const useSuspenseOrganizationsQuery = <
      TData = OrganizationsQuery,
      TError = unknown
    >(
      variables: OrganizationsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<OrganizationsQuery, TError, TData>(
      {
    queryKey: ['OrganizationsSuspense', variables],
    queryFn: graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables),
    ...options
  }
    )};

useSuspenseOrganizationsQuery.getKey = (variables: OrganizationsQueryVariables) => ['OrganizationsSuspense', variables];

export const useInfiniteOrganizationsQuery = <
      TData = InfiniteData<OrganizationsQuery>,
      TError = unknown
    >(
      variables: OrganizationsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<OrganizationsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Organizations.infinite', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteOrganizationsQuery.getKey = (variables: OrganizationsQueryVariables) => ['Organizations.infinite', variables];

export const useSuspenseInfiniteOrganizationsQuery = <
      TData = InfiniteData<OrganizationsQuery>,
      TError = unknown
    >(
      variables: OrganizationsQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<OrganizationsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Organizations.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteOrganizationsQuery.getKey = (variables: OrganizationsQueryVariables) => ['Organizations.infiniteSuspense', variables];


useOrganizationsQuery.fetcher = (variables: OrganizationsQueryVariables, options?: RequestInit['headers']) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables, options);

export const RepositoriesDocument = `
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
        name
        slug
        avatarUrl
      }
    }
    totalCount
  }
}
    `;

export const useRepositoriesQuery = <
      TData = RepositoriesQuery,
      TError = unknown
    >(
      variables: RepositoriesQueryVariables,
      options?: Omit<UseQueryOptions<RepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoriesQuery, TError, TData>(
      {
    queryKey: ['Repositories', variables],
    queryFn: graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, variables),
    ...options
  }
    )};

useRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['Repositories', variables];

export const useSuspenseRepositoriesQuery = <
      TData = RepositoriesQuery,
      TError = unknown
    >(
      variables: RepositoriesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoriesQuery, TError, TData>(
      {
    queryKey: ['RepositoriesSuspense', variables],
    queryFn: graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['RepositoriesSuspense', variables];

export const useInfiniteRepositoriesQuery = <
      TData = InfiniteData<RepositoriesQuery>,
      TError = unknown
    >(
      variables: RepositoriesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Repositories.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['Repositories.infinite', variables];

export const useSuspenseInfiniteRepositoriesQuery = <
      TData = InfiniteData<RepositoriesQuery>,
      TError = unknown
    >(
      variables: RepositoriesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Repositories.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['Repositories.infiniteSuspense', variables];


useRepositoriesQuery.fetcher = (variables: RepositoriesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, variables, options);

export const RepositoryDocument = `
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
      name
      slug
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

export const useRepositoryQuery = <
      TData = RepositoryQuery,
      TError = unknown
    >(
      variables: RepositoryQueryVariables,
      options?: Omit<UseQueryOptions<RepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoryQuery, TError, TData>(
      {
    queryKey: ['Repository', variables],
    queryFn: graphqlFetch<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, variables),
    ...options
  }
    )};

useRepositoryQuery.getKey = (variables: RepositoryQueryVariables) => ['Repository', variables];

export const useSuspenseRepositoryQuery = <
      TData = RepositoryQuery,
      TError = unknown
    >(
      variables: RepositoryQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoryQuery, TError, TData>(
      {
    queryKey: ['RepositorySuspense', variables],
    queryFn: graphqlFetch<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryQuery.getKey = (variables: RepositoryQueryVariables) => ['RepositorySuspense', variables];

export const useInfiniteRepositoryQuery = <
      TData = InfiniteData<RepositoryQuery>,
      TError = unknown
    >(
      variables: RepositoryQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoryQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Repository.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoryQuery.getKey = (variables: RepositoryQueryVariables) => ['Repository.infinite', variables];

export const useSuspenseInfiniteRepositoryQuery = <
      TData = InfiniteData<RepositoryQuery>,
      TError = unknown
    >(
      variables: RepositoryQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoryQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Repository.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryQuery.getKey = (variables: RepositoryQueryVariables) => ['Repository.infiniteSuspense', variables];


useRepositoryQuery.fetcher = (variables: RepositoryQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryQuery, RepositoryQueryVariables>(RepositoryDocument, variables, options);

export const UserByIdentityProviderIdDocument = `
    query UserByIdentityProviderId($identityProviderId: UUID!) {
  userByIdentityProviderId(identityProviderId: $identityProviderId) {
    rowId
  }
}
    `;

export const useUserByIdentityProviderIdQuery = <
      TData = UserByIdentityProviderIdQuery,
      TError = unknown
    >(
      variables: UserByIdentityProviderIdQueryVariables,
      options?: Omit<UseQueryOptions<UserByIdentityProviderIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<UserByIdentityProviderIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<UserByIdentityProviderIdQuery, TError, TData>(
      {
    queryKey: ['UserByIdentityProviderId', variables],
    queryFn: graphqlFetch<UserByIdentityProviderIdQuery, UserByIdentityProviderIdQueryVariables>(UserByIdentityProviderIdDocument, variables),
    ...options
  }
    )};

useUserByIdentityProviderIdQuery.getKey = (variables: UserByIdentityProviderIdQueryVariables) => ['UserByIdentityProviderId', variables];

export const useSuspenseUserByIdentityProviderIdQuery = <
      TData = UserByIdentityProviderIdQuery,
      TError = unknown
    >(
      variables: UserByIdentityProviderIdQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<UserByIdentityProviderIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<UserByIdentityProviderIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<UserByIdentityProviderIdQuery, TError, TData>(
      {
    queryKey: ['UserByIdentityProviderIdSuspense', variables],
    queryFn: graphqlFetch<UserByIdentityProviderIdQuery, UserByIdentityProviderIdQueryVariables>(UserByIdentityProviderIdDocument, variables),
    ...options
  }
    )};

useSuspenseUserByIdentityProviderIdQuery.getKey = (variables: UserByIdentityProviderIdQueryVariables) => ['UserByIdentityProviderIdSuspense', variables];

export const useInfiniteUserByIdentityProviderIdQuery = <
      TData = InfiniteData<UserByIdentityProviderIdQuery>,
      TError = unknown
    >(
      variables: UserByIdentityProviderIdQueryVariables,
      options: Omit<UseInfiniteQueryOptions<UserByIdentityProviderIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<UserByIdentityProviderIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<UserByIdentityProviderIdQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['UserByIdentityProviderId.infinite', variables],
      queryFn: (metaData) => graphqlFetch<UserByIdentityProviderIdQuery, UserByIdentityProviderIdQueryVariables>(UserByIdentityProviderIdDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteUserByIdentityProviderIdQuery.getKey = (variables: UserByIdentityProviderIdQueryVariables) => ['UserByIdentityProviderId.infinite', variables];

export const useSuspenseInfiniteUserByIdentityProviderIdQuery = <
      TData = InfiniteData<UserByIdentityProviderIdQuery>,
      TError = unknown
    >(
      variables: UserByIdentityProviderIdQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<UserByIdentityProviderIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<UserByIdentityProviderIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<UserByIdentityProviderIdQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['UserByIdentityProviderId.infiniteSuspense', variables],
      queryFn: (metaData) => graphqlFetch<UserByIdentityProviderIdQuery, UserByIdentityProviderIdQueryVariables>(UserByIdentityProviderIdDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteUserByIdentityProviderIdQuery.getKey = (variables: UserByIdentityProviderIdQueryVariables) => ['UserByIdentityProviderId.infiniteSuspense', variables];


useUserByIdentityProviderIdQuery.fetcher = (variables: UserByIdentityProviderIdQueryVariables, options?: RequestInit['headers']) => graphqlFetch<UserByIdentityProviderIdQuery, UserByIdentityProviderIdQueryVariables>(UserByIdentityProviderIdDocument, variables, options);
