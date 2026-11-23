// @ts-nocheck
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
import { useMutation, useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseMutationOptions, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
import { graphqlFetch } from '@/lib/graphql/graphqlFetch';
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
  createdAt?: Date | null | undefined;
  deletedAt?: Date | null | undefined;
  deletionReason?: string | null | undefined;
  description?: string | null | undefined;
  idpOrganizationId: string;
  name?: string | null | undefined;
  rowId?: string | null | undefined;
  slug?: string | null | undefined;
  updatedAt?: Date | null | undefined;
};

export enum Permission {
  Admin = 'admin',
  Read = 'read',
  Write = 'write'
}

/** Furthest operation an access token may perform. */
export enum PersonalAccessTokenPermission {
  Read = 'READ',
  Write = 'WRITE'
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
export enum PullRequestCommentChangeAction {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

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
  body?: string | null | undefined;
  commitSha?: string | null | undefined;
  createdAt?: Date | null | undefined;
  line?: number | null | undefined;
  path?: string | null | undefined;
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

/** Input for moving a repository to another workspace. */
export type TransferRepositoryInput = {
  /** Run every check and change nothing. */
  dryRun?: boolean | null | undefined;
  /** The repository row ID. */
  rowId: string;
  /** The workspace to move it to, as its identity-provider organization id. */
  toIdpOrganizationId: string;
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

export enum Visibility {
  Private = 'private',
  Public = 'public'
}

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


export type CreateOrganizationMutation = { createOrganization: { organization: { rowId: string, idpOrganizationId: string, slug: string | null, description: string | null, avatarUrl: string | null, createdAt: Date } | null } | null };

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


export type RenameRepositoryMutation = { renameRepository: { error: string | null, repository: { rowId: string, name: string, slug: string, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null } | null } | null } | null };

export type UpdateRepositoryMutationVariables = Exact<{
  input: UpdateRepositoryInput;
}>;


export type UpdateRepositoryMutation = { updateRepository: { repository: { rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null } | null } | null } | null };

export type CreateStackMutationVariables = Exact<{
  input: CreateStackInput;
}>;


export type CreateStackMutation = { createStack: { stack: { id: string, rowId: string, title: string, description: string | null, baseBranch: string, status: string, createdAt: Date, repository: { slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null } | null } | null };

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


export type RepositoryGraphQuery = { polyrepoGraphAccess: boolean, repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null } | null, outgoingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, targetRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> } }> } | null, repositoryRelationshipTypes: { nodes: Array<{ rowId: string, name: string, description: string | null, isDirected: boolean }> } | null };

export type OrganizationQueryVariables = Exact<{
  rowId: string;
}>;


export type OrganizationQuery = { organization: { rowId: string, idpOrganizationId: string, slug: string | null, description: string | null, avatarUrl: string | null, createdAt: Date, updatedAt: Date, repositories: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, updatedAt: Date }> } } | null };

export type OrganizationsQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type OrganizationsQuery = { organizations: { totalCount: number, nodes: Array<{ rowId: string, idpOrganizationId: string, slug: string | null, description: string | null, avatarUrl: string | null, createdAt: Date, updatedAt: Date, repositories: { totalCount: number } }> } | null };

export type PersonalAccessTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonalAccessTokensQuery = { personalAccessTokens: { nodes: Array<{ rowId: string, name: string, tokenPrefix: string, lastUsedAt: Date | null, expiresAt: Date | null, createdAt: Date, permission: string, personalAccessTokenRepositories: { totalCount: number, nodes: Array<{ refPatterns: Array<string | null> | null, pathPatterns: Array<string | null> | null, repository: { rowId: string, slug: string, owner: { username: string } | null } | null }> } }> } | null };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { createProject: { project: { rowId: string, name: string, slug: string, visibility: Visibility, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null } | null };

export type ProjectBySlugQueryVariables = Exact<{
  ownerSlug: string;
  slug: string;
}>;


export type ProjectBySlugQuery = { projects: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, createdAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null, avatarUrl: string | null } | null, projectRepositories: { totalCount: number, nodes: Array<{ rowId: string, repository: { rowId: string, name: string, slug: string, visibility: Visibility, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null, memberships: { totalCount: number }, outgoingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, targetRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> }, incomingRelationships: { nodes: Array<{ rowId: string, confidence: number, versionConstraint: string | null, sourceRepository: { rowId: string, name: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null, relationshipType: { rowId: string, name: string, isDirected: boolean } | null }> } } | null }> } }> } | null };

export type ProjectVersionDriftQueryVariables = Exact<{
  projectId: string;
}>;


export type ProjectVersionDriftQuery = { projectVersionDrift: Array<{ packageManager: string | null, packageName: string | null, versionConstraint: string | null, repositoryId: string | null, name: string | null, slug: string | null, ownerUsername: string | null, organizationSlug: string | null }> | null };

export type ProjectsQueryVariables = Exact<{
  userId: string;
  organizationId?: string | null | undefined;
  limit?: number | null | undefined;
}>;


export type ProjectsQuery = { projects: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, createdAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null, avatarUrl: string | null } | null, projectRepositories: { totalCount: number } }> } | null };

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

export type MovedRepositoryQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type MovedRepositoryQuery = { movedRepository: { ownerSlug: string, repoSlug: string } | null };

export type RepositoriesQueryVariables = Exact<{
  userId: string;
  limit?: number | null | undefined;
}>;


export type RepositoriesQuery = { repositories: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null, avatarUrl: string | null } | null }> } | null };

export type RepositoryBlastRadiusQueryVariables = Exact<{
  repositoryId: string;
}>;


export type RepositoryBlastRadiusQuery = { repositoryBlastRadius: Array<{ repositoryId: string | null, name: string | null, slug: string | null, ownerUsername: string | null, organizationSlug: string | null, depth: number | null }> | null };

export type RepositoryBySlugQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type RepositoryBySlugQuery = { repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, owner: { rowId: string, username: string } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null } | null, repositoryCollaborators: { nodes: Array<{ userId: string, permission: Permission }> } }> } | null };

export type RepositoryWithBranchesQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type RepositoryWithBranchesQuery = { repositories: { nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, createdAt: Date, updatedAt: Date, owner: { rowId: string, username: string, avatarUrl: string | null } | null, organization: { rowId: string, idpOrganizationId: string, slug: string | null, avatarUrl: string | null } | null, refs: { totalCount: number, nodes: Array<{ id: string, name: string, prefix: string, target:
            | { oid: string }
            | Record<PropertyKey, never>
           | null }> }, defaultBranchRef: { id: string, name: string, prefix: string, target:
          | { oid: string, messageHeadline: string, committedDate: Date | null, author: { name: string | null } | null }
          | Record<PropertyKey, never>
         | null } | null }> } | null };

export type TransferRepositoryMutationVariables = Exact<{
  input: TransferRepositoryInput;
}>;


export type TransferRepositoryMutation = { transferRepository: { slug: string | null, ownerUsername: string | null, organizationSlug: string | null, error: string | null } | null };

export type WorkspaceRepositoriesQueryVariables = Exact<{
  workspaceSlug: string;
}>;


export type WorkspaceRepositoriesQuery = { repositories: { totalCount: number, nodes: Array<{ rowId: string, name: string, slug: string, description: string | null, visibility: Visibility, defaultBranch: string, updatedAt: Date }> } | null };

export type MergeQueueEntriesQueryVariables = Exact<{
  ownerSlug: string;
  repoSlug: string;
}>;


export type MergeQueueEntriesQuery = { mergeQueueEntries: { nodes: Array<{ id: string, rowId: string, state: string, position: number, targetBranch: string, enqueuedAt: Date, createdAt: Date, stack: { rowId: string, title: string } | null, pullRequest: { rowId: string, number: number, title: string } | null, batch: { rowId: string, ciStatus: string, speculativeBranch: string | null } | null }> } | null };

export type StackQueryVariables = Exact<{
  rowId: string;
}>;


export type StackQuery = { stack: { id: string, rowId: string, title: string, description: string | null, baseBranch: string, status: string, createdAt: Date, updatedAt: Date, repository: { rowId: string, slug: string, owner: { username: string } | null, organization: { idpOrganizationId: string, slug: string | null } | null } | null, author: { rowId: string, username: string } | null, authoredByAgent: { rowId: string, name: string } | null, changes: { nodes: Array<{ id: string, rowId: string, title: string, description: string | null, position: number, status: string, commitSha: string | null, parentChangeId: string | null, pullRequest: { rowId: string, number: number } | null, verificationChecks: { nodes: Array<{ id: string, rowId: string, name: string, category: string, status: string, required: boolean, summary: string | null, detailsUrl: string | null }> } }> } } | null };

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


export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const CreateBranchProtectionRuleDocument = new TypedDocumentString(`
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
    `);

export const useCreateBranchProtectionRuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateBranchProtectionRuleMutation, TError, CreateBranchProtectionRuleMutationVariables, TContext>) => {
    
    return useMutation<CreateBranchProtectionRuleMutation, TError, CreateBranchProtectionRuleMutationVariables, TContext>(
      {
    mutationKey: ['CreateBranchProtectionRule'],
    mutationFn: (variables?: CreateBranchProtectionRuleMutationVariables) => graphqlFetch<CreateBranchProtectionRuleMutation, CreateBranchProtectionRuleMutationVariables>(CreateBranchProtectionRuleDocument, variables)(),
    ...options
  }
    )};

useCreateBranchProtectionRuleMutation.getKey = () => ['CreateBranchProtectionRule'];


useCreateBranchProtectionRuleMutation.fetcher = (variables: CreateBranchProtectionRuleMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateBranchProtectionRuleMutation, CreateBranchProtectionRuleMutationVariables>(CreateBranchProtectionRuleDocument, variables, options);

export const DeleteBranchProtectionRuleDocument = new TypedDocumentString(`
    mutation DeleteBranchProtectionRule($rowId: UUID!) {
  deleteBranchProtectionRule(input: {rowId: $rowId}) {
    clientMutationId
  }
}
    `);

export const useDeleteBranchProtectionRuleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteBranchProtectionRuleMutation, TError, DeleteBranchProtectionRuleMutationVariables, TContext>) => {
    
    return useMutation<DeleteBranchProtectionRuleMutation, TError, DeleteBranchProtectionRuleMutationVariables, TContext>(
      {
    mutationKey: ['DeleteBranchProtectionRule'],
    mutationFn: (variables?: DeleteBranchProtectionRuleMutationVariables) => graphqlFetch<DeleteBranchProtectionRuleMutation, DeleteBranchProtectionRuleMutationVariables>(DeleteBranchProtectionRuleDocument, variables)(),
    ...options
  }
    )};

useDeleteBranchProtectionRuleMutation.getKey = () => ['DeleteBranchProtectionRule'];


useDeleteBranchProtectionRuleMutation.fetcher = (variables: DeleteBranchProtectionRuleMutationVariables, options?: RequestInit['headers']) => graphqlFetch<DeleteBranchProtectionRuleMutation, DeleteBranchProtectionRuleMutationVariables>(DeleteBranchProtectionRuleDocument, variables, options);

export const CreateOrganizationDocument = new TypedDocumentString(`
    mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    organization {
      rowId
      idpOrganizationId
      slug
      description
      avatarUrl
      createdAt
    }
  }
}
    `);

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

export const CreatePersonalAccessTokenDocument = new TypedDocumentString(`
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
    `);

export const useCreatePersonalAccessTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePersonalAccessTokenMutation, TError, CreatePersonalAccessTokenMutationVariables, TContext>) => {
    
    return useMutation<CreatePersonalAccessTokenMutation, TError, CreatePersonalAccessTokenMutationVariables, TContext>(
      {
    mutationKey: ['CreatePersonalAccessToken'],
    mutationFn: (variables?: CreatePersonalAccessTokenMutationVariables) => graphqlFetch<CreatePersonalAccessTokenMutation, CreatePersonalAccessTokenMutationVariables>(CreatePersonalAccessTokenDocument, variables)(),
    ...options
  }
    )};

useCreatePersonalAccessTokenMutation.getKey = () => ['CreatePersonalAccessToken'];


useCreatePersonalAccessTokenMutation.fetcher = (variables: CreatePersonalAccessTokenMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreatePersonalAccessTokenMutation, CreatePersonalAccessTokenMutationVariables>(CreatePersonalAccessTokenDocument, variables, options);

export const DeletePersonalAccessTokenDocument = new TypedDocumentString(`
    mutation DeletePersonalAccessToken($input: DeletePersonalAccessTokenInput!) {
  deletePersonalAccessToken(input: $input) {
    personalAccessToken {
      rowId
    }
  }
}
    `);

export const useDeletePersonalAccessTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeletePersonalAccessTokenMutation, TError, DeletePersonalAccessTokenMutationVariables, TContext>) => {
    
    return useMutation<DeletePersonalAccessTokenMutation, TError, DeletePersonalAccessTokenMutationVariables, TContext>(
      {
    mutationKey: ['DeletePersonalAccessToken'],
    mutationFn: (variables?: DeletePersonalAccessTokenMutationVariables) => graphqlFetch<DeletePersonalAccessTokenMutation, DeletePersonalAccessTokenMutationVariables>(DeletePersonalAccessTokenDocument, variables)(),
    ...options
  }
    )};

useDeletePersonalAccessTokenMutation.getKey = () => ['DeletePersonalAccessToken'];


useDeletePersonalAccessTokenMutation.fetcher = (variables: DeletePersonalAccessTokenMutationVariables, options?: RequestInit['headers']) => graphqlFetch<DeletePersonalAccessTokenMutation, DeletePersonalAccessTokenMutationVariables>(DeletePersonalAccessTokenDocument, variables, options);

export const AddProjectRepositoryDocument = new TypedDocumentString(`
    mutation AddProjectRepository($input: CreateProjectRepositoryInput!) {
  createProjectRepository(input: $input) {
    projectRepository {
      rowId
      projectId
      repositoryId
    }
  }
}
    `);

export const useAddProjectRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddProjectRepositoryMutation, TError, AddProjectRepositoryMutationVariables, TContext>) => {
    
    return useMutation<AddProjectRepositoryMutation, TError, AddProjectRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['AddProjectRepository'],
    mutationFn: (variables?: AddProjectRepositoryMutationVariables) => graphqlFetch<AddProjectRepositoryMutation, AddProjectRepositoryMutationVariables>(AddProjectRepositoryDocument, variables)(),
    ...options
  }
    )};

useAddProjectRepositoryMutation.getKey = () => ['AddProjectRepository'];


useAddProjectRepositoryMutation.fetcher = (variables: AddProjectRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<AddProjectRepositoryMutation, AddProjectRepositoryMutationVariables>(AddProjectRepositoryDocument, variables, options);

export const RemoveProjectRepositoryDocument = new TypedDocumentString(`
    mutation RemoveProjectRepository($input: DeleteProjectRepositoryInput!) {
  deleteProjectRepository(input: $input) {
    deletedProjectRepositoryId
  }
}
    `);

export const useRemoveProjectRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RemoveProjectRepositoryMutation, TError, RemoveProjectRepositoryMutationVariables, TContext>) => {
    
    return useMutation<RemoveProjectRepositoryMutation, TError, RemoveProjectRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['RemoveProjectRepository'],
    mutationFn: (variables?: RemoveProjectRepositoryMutationVariables) => graphqlFetch<RemoveProjectRepositoryMutation, RemoveProjectRepositoryMutationVariables>(RemoveProjectRepositoryDocument, variables)(),
    ...options
  }
    )};

useRemoveProjectRepositoryMutation.getKey = () => ['RemoveProjectRepository'];


useRemoveProjectRepositoryMutation.fetcher = (variables: RemoveProjectRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<RemoveProjectRepositoryMutation, RemoveProjectRepositoryMutationVariables>(RemoveProjectRepositoryDocument, variables, options);

export const ClosePullRequestDocument = new TypedDocumentString(`
    mutation ClosePullRequest($input: SetPullRequestStateInput!) {
  closePullRequest(input: $input) {
    rowId
    number
    state
    error
  }
}
    `);

export const useClosePullRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ClosePullRequestMutation, TError, ClosePullRequestMutationVariables, TContext>) => {
    
    return useMutation<ClosePullRequestMutation, TError, ClosePullRequestMutationVariables, TContext>(
      {
    mutationKey: ['ClosePullRequest'],
    mutationFn: (variables?: ClosePullRequestMutationVariables) => graphqlFetch<ClosePullRequestMutation, ClosePullRequestMutationVariables>(ClosePullRequestDocument, variables)(),
    ...options
  }
    )};

useClosePullRequestMutation.getKey = () => ['ClosePullRequest'];


useClosePullRequestMutation.fetcher = (variables: ClosePullRequestMutationVariables, options?: RequestInit['headers']) => graphqlFetch<ClosePullRequestMutation, ClosePullRequestMutationVariables>(ClosePullRequestDocument, variables, options);

export const CreatePullRequestCommentDocument = new TypedDocumentString(`
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
    `);

export const useCreatePullRequestCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePullRequestCommentMutation, TError, CreatePullRequestCommentMutationVariables, TContext>) => {
    
    return useMutation<CreatePullRequestCommentMutation, TError, CreatePullRequestCommentMutationVariables, TContext>(
      {
    mutationKey: ['CreatePullRequestComment'],
    mutationFn: (variables?: CreatePullRequestCommentMutationVariables) => graphqlFetch<CreatePullRequestCommentMutation, CreatePullRequestCommentMutationVariables>(CreatePullRequestCommentDocument, variables)(),
    ...options
  }
    )};

useCreatePullRequestCommentMutation.getKey = () => ['CreatePullRequestComment'];


useCreatePullRequestCommentMutation.fetcher = (variables: CreatePullRequestCommentMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreatePullRequestCommentMutation, CreatePullRequestCommentMutationVariables>(CreatePullRequestCommentDocument, variables, options);

export const CreatePullRequestReviewDocument = new TypedDocumentString(`
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
    `);

export const useCreatePullRequestReviewMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePullRequestReviewMutation, TError, CreatePullRequestReviewMutationVariables, TContext>) => {
    
    return useMutation<CreatePullRequestReviewMutation, TError, CreatePullRequestReviewMutationVariables, TContext>(
      {
    mutationKey: ['CreatePullRequestReview'],
    mutationFn: (variables?: CreatePullRequestReviewMutationVariables) => graphqlFetch<CreatePullRequestReviewMutation, CreatePullRequestReviewMutationVariables>(CreatePullRequestReviewDocument, variables)(),
    ...options
  }
    )};

useCreatePullRequestReviewMutation.getKey = () => ['CreatePullRequestReview'];


useCreatePullRequestReviewMutation.fetcher = (variables: CreatePullRequestReviewMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreatePullRequestReviewMutation, CreatePullRequestReviewMutationVariables>(CreatePullRequestReviewDocument, variables, options);

export const DeletePullRequestCommentDocument = new TypedDocumentString(`
    mutation DeletePullRequestComment($input: DeletePullRequestCommentInput!) {
  deletePullRequestComment(input: $input) {
    deletedPullRequestCommentId
  }
}
    `);

export const useDeletePullRequestCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeletePullRequestCommentMutation, TError, DeletePullRequestCommentMutationVariables, TContext>) => {
    
    return useMutation<DeletePullRequestCommentMutation, TError, DeletePullRequestCommentMutationVariables, TContext>(
      {
    mutationKey: ['DeletePullRequestComment'],
    mutationFn: (variables?: DeletePullRequestCommentMutationVariables) => graphqlFetch<DeletePullRequestCommentMutation, DeletePullRequestCommentMutationVariables>(DeletePullRequestCommentDocument, variables)(),
    ...options
  }
    )};

useDeletePullRequestCommentMutation.getKey = () => ['DeletePullRequestComment'];


useDeletePullRequestCommentMutation.fetcher = (variables: DeletePullRequestCommentMutationVariables, options?: RequestInit['headers']) => graphqlFetch<DeletePullRequestCommentMutation, DeletePullRequestCommentMutationVariables>(DeletePullRequestCommentDocument, variables, options);

export const OpenPullRequestDocument = new TypedDocumentString(`
    mutation OpenPullRequest($input: OpenPullRequestInput!) {
  openPullRequest(input: $input) {
    rowId
    number
    error
  }
}
    `);

export const useOpenPullRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<OpenPullRequestMutation, TError, OpenPullRequestMutationVariables, TContext>) => {
    
    return useMutation<OpenPullRequestMutation, TError, OpenPullRequestMutationVariables, TContext>(
      {
    mutationKey: ['OpenPullRequest'],
    mutationFn: (variables?: OpenPullRequestMutationVariables) => graphqlFetch<OpenPullRequestMutation, OpenPullRequestMutationVariables>(OpenPullRequestDocument, variables)(),
    ...options
  }
    )};

useOpenPullRequestMutation.getKey = () => ['OpenPullRequest'];


useOpenPullRequestMutation.fetcher = (variables: OpenPullRequestMutationVariables, options?: RequestInit['headers']) => graphqlFetch<OpenPullRequestMutation, OpenPullRequestMutationVariables>(OpenPullRequestDocument, variables, options);

export const ReopenPullRequestDocument = new TypedDocumentString(`
    mutation ReopenPullRequest($input: SetPullRequestStateInput!) {
  reopenPullRequest(input: $input) {
    rowId
    number
    state
    error
  }
}
    `);

export const useReopenPullRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ReopenPullRequestMutation, TError, ReopenPullRequestMutationVariables, TContext>) => {
    
    return useMutation<ReopenPullRequestMutation, TError, ReopenPullRequestMutationVariables, TContext>(
      {
    mutationKey: ['ReopenPullRequest'],
    mutationFn: (variables?: ReopenPullRequestMutationVariables) => graphqlFetch<ReopenPullRequestMutation, ReopenPullRequestMutationVariables>(ReopenPullRequestDocument, variables)(),
    ...options
  }
    )};

useReopenPullRequestMutation.getKey = () => ['ReopenPullRequest'];


useReopenPullRequestMutation.fetcher = (variables: ReopenPullRequestMutationVariables, options?: RequestInit['headers']) => graphqlFetch<ReopenPullRequestMutation, ReopenPullRequestMutationVariables>(ReopenPullRequestDocument, variables, options);

export const UpdatePullRequestCommentDocument = new TypedDocumentString(`
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
    `);

export const useUpdatePullRequestCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatePullRequestCommentMutation, TError, UpdatePullRequestCommentMutationVariables, TContext>) => {
    
    return useMutation<UpdatePullRequestCommentMutation, TError, UpdatePullRequestCommentMutationVariables, TContext>(
      {
    mutationKey: ['UpdatePullRequestComment'],
    mutationFn: (variables?: UpdatePullRequestCommentMutationVariables) => graphqlFetch<UpdatePullRequestCommentMutation, UpdatePullRequestCommentMutationVariables>(UpdatePullRequestCommentDocument, variables)(),
    ...options
  }
    )};

useUpdatePullRequestCommentMutation.getKey = () => ['UpdatePullRequestComment'];


useUpdatePullRequestCommentMutation.fetcher = (variables: UpdatePullRequestCommentMutationVariables, options?: RequestInit['headers']) => graphqlFetch<UpdatePullRequestCommentMutation, UpdatePullRequestCommentMutationVariables>(UpdatePullRequestCommentDocument, variables, options);

export const DeleteRepositoryDocument = new TypedDocumentString(`
    mutation DeleteRepository($input: DeleteRepositoryInput!) {
  deleteRepository(input: $input) {
    repository {
      rowId
    }
  }
}
    `);

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

export const DiscoverDependenciesDocument = new TypedDocumentString(`
    mutation DiscoverDependencies($input: DiscoverDependenciesInput!) {
  discoverDependencies(input: $input) {
    internalDependencies
    externalDependencies
    error
  }
}
    `);

export const useDiscoverDependenciesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DiscoverDependenciesMutation, TError, DiscoverDependenciesMutationVariables, TContext>) => {
    
    return useMutation<DiscoverDependenciesMutation, TError, DiscoverDependenciesMutationVariables, TContext>(
      {
    mutationKey: ['DiscoverDependencies'],
    mutationFn: (variables?: DiscoverDependenciesMutationVariables) => graphqlFetch<DiscoverDependenciesMutation, DiscoverDependenciesMutationVariables>(DiscoverDependenciesDocument, variables)(),
    ...options
  }
    )};

useDiscoverDependenciesMutation.getKey = () => ['DiscoverDependencies'];


useDiscoverDependenciesMutation.fetcher = (variables: DiscoverDependenciesMutationVariables, options?: RequestInit['headers']) => graphqlFetch<DiscoverDependenciesMutation, DiscoverDependenciesMutationVariables>(DiscoverDependenciesDocument, variables, options);

export const RenameRepositoryDocument = new TypedDocumentString(`
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
        slug
      }
    }
    error
  }
}
    `);

export const useRenameRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RenameRepositoryMutation, TError, RenameRepositoryMutationVariables, TContext>) => {
    
    return useMutation<RenameRepositoryMutation, TError, RenameRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['RenameRepository'],
    mutationFn: (variables?: RenameRepositoryMutationVariables) => graphqlFetch<RenameRepositoryMutation, RenameRepositoryMutationVariables>(RenameRepositoryDocument, variables)(),
    ...options
  }
    )};

useRenameRepositoryMutation.getKey = () => ['RenameRepository'];


useRenameRepositoryMutation.fetcher = (variables: RenameRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<RenameRepositoryMutation, RenameRepositoryMutationVariables>(RenameRepositoryDocument, variables, options);

export const UpdateRepositoryDocument = new TypedDocumentString(`
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
        slug
      }
    }
  }
}
    `);

export const useUpdateRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateRepositoryMutation, TError, UpdateRepositoryMutationVariables, TContext>) => {
    
    return useMutation<UpdateRepositoryMutation, TError, UpdateRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['UpdateRepository'],
    mutationFn: (variables?: UpdateRepositoryMutationVariables) => graphqlFetch<UpdateRepositoryMutation, UpdateRepositoryMutationVariables>(UpdateRepositoryDocument, variables)(),
    ...options
  }
    )};

useUpdateRepositoryMutation.getKey = () => ['UpdateRepository'];


useUpdateRepositoryMutation.fetcher = (variables: UpdateRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<UpdateRepositoryMutation, UpdateRepositoryMutationVariables>(UpdateRepositoryDocument, variables, options);

export const CreateStackDocument = new TypedDocumentString(`
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
          slug
        }
      }
    }
  }
}
    `);

export const useCreateStackMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateStackMutation, TError, CreateStackMutationVariables, TContext>) => {
    
    return useMutation<CreateStackMutation, TError, CreateStackMutationVariables, TContext>(
      {
    mutationKey: ['CreateStack'],
    mutationFn: (variables?: CreateStackMutationVariables) => graphqlFetch<CreateStackMutation, CreateStackMutationVariables>(CreateStackDocument, variables)(),
    ...options
  }
    )};

useCreateStackMutation.getKey = () => ['CreateStack'];


useCreateStackMutation.fetcher = (variables: CreateStackMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateStackMutation, CreateStackMutationVariables>(CreateStackDocument, variables, options);

export const MergeChangeDocument = new TypedDocumentString(`
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
    `);

export const useMergeChangeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<MergeChangeMutation, TError, MergeChangeMutationVariables, TContext>) => {
    
    return useMutation<MergeChangeMutation, TError, MergeChangeMutationVariables, TContext>(
      {
    mutationKey: ['MergeChange'],
    mutationFn: (variables?: MergeChangeMutationVariables) => graphqlFetch<MergeChangeMutation, MergeChangeMutationVariables>(MergeChangeDocument, variables)(),
    ...options
  }
    )};

useMergeChangeMutation.getKey = () => ['MergeChange'];


useMergeChangeMutation.fetcher = (variables: MergeChangeMutationVariables, options?: RequestInit['headers']) => graphqlFetch<MergeChangeMutation, MergeChangeMutationVariables>(MergeChangeDocument, variables, options);

export const SubmitTesterApplicationDocument = new TypedDocumentString(`
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
    `);

export const useSubmitTesterApplicationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubmitTesterApplicationMutation, TError, SubmitTesterApplicationMutationVariables, TContext>) => {
    
    return useMutation<SubmitTesterApplicationMutation, TError, SubmitTesterApplicationMutationVariables, TContext>(
      {
    mutationKey: ['SubmitTesterApplication'],
    mutationFn: (variables?: SubmitTesterApplicationMutationVariables) => graphqlFetch<SubmitTesterApplicationMutation, SubmitTesterApplicationMutationVariables>(SubmitTesterApplicationDocument, variables)(),
    ...options
  }
    )};

useSubmitTesterApplicationMutation.getKey = () => ['SubmitTesterApplication'];


useSubmitTesterApplicationMutation.fetcher = (variables: SubmitTesterApplicationMutationVariables, options?: RequestInit['headers']) => graphqlFetch<SubmitTesterApplicationMutation, SubmitTesterApplicationMutationVariables>(SubmitTesterApplicationDocument, variables, options);

export const AgentsDocument = new TypedDocumentString(`
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
    `);

export const useAgentsQuery = <
      TData = AgentsQuery,
      TError = unknown
    >(
      variables: AgentsQueryVariables,
      options?: Omit<UseQueryOptions<AgentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AgentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AgentsQuery, TError, TData>(
      {
    queryKey: ['Agents', variables],
    queryFn: graphqlFetch<AgentsQuery, AgentsQueryVariables>(AgentsDocument, variables),
    ...options
  }
    )};

useAgentsQuery.getKey = (variables: AgentsQueryVariables) => ['Agents', variables];

export const useSuspenseAgentsQuery = <
      TData = AgentsQuery,
      TError = unknown
    >(
      variables: AgentsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<AgentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<AgentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<AgentsQuery, TError, TData>(
      {
    queryKey: ['Agents', variables],
    queryFn: graphqlFetch<AgentsQuery, AgentsQueryVariables>(AgentsDocument, variables),
    ...options
  }
    )};

useSuspenseAgentsQuery.getKey = (variables: AgentsQueryVariables) => ['Agents', variables];

export const useInfiniteAgentsQuery = <
      TData = InfiniteData<AgentsQuery>,
      TError = unknown
    >(
      variables: AgentsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<AgentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<AgentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<AgentsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Agents.infinite', variables],
      queryFn: (metaData) => graphqlFetch<AgentsQuery, AgentsQueryVariables>(AgentsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteAgentsQuery.getKey = (variables: AgentsQueryVariables) => ['Agents.infinite', variables];

export const useSuspenseInfiniteAgentsQuery = <
      TData = InfiniteData<AgentsQuery>,
      TError = unknown
    >(
      variables: AgentsQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<AgentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<AgentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<AgentsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Agents.infinite', variables],
      queryFn: (metaData) => graphqlFetch<AgentsQuery, AgentsQueryVariables>(AgentsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteAgentsQuery.getKey = (variables: AgentsQueryVariables) => ['Agents.infinite', variables];


useAgentsQuery.fetcher = (variables: AgentsQueryVariables, options?: RequestInit['headers']) => graphqlFetch<AgentsQuery, AgentsQueryVariables>(AgentsDocument, variables, options);

export const CreateAgentDocument = new TypedDocumentString(`
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
    `);

export const useCreateAgentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateAgentMutation, TError, CreateAgentMutationVariables, TContext>) => {
    
    return useMutation<CreateAgentMutation, TError, CreateAgentMutationVariables, TContext>(
      {
    mutationKey: ['CreateAgent'],
    mutationFn: (variables?: CreateAgentMutationVariables) => graphqlFetch<CreateAgentMutation, CreateAgentMutationVariables>(CreateAgentDocument, variables)(),
    ...options
  }
    )};

useCreateAgentMutation.getKey = () => ['CreateAgent'];


useCreateAgentMutation.fetcher = (variables: CreateAgentMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateAgentMutation, CreateAgentMutationVariables>(CreateAgentDocument, variables, options);

export const BranchProtectionRulesDocument = new TypedDocumentString(`
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
    `);

export const useBranchProtectionRulesQuery = <
      TData = BranchProtectionRulesQuery,
      TError = unknown
    >(
      variables: BranchProtectionRulesQueryVariables,
      options?: Omit<UseQueryOptions<BranchProtectionRulesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<BranchProtectionRulesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<BranchProtectionRulesQuery, TError, TData>(
      {
    queryKey: ['BranchProtectionRules', variables],
    queryFn: graphqlFetch<BranchProtectionRulesQuery, BranchProtectionRulesQueryVariables>(BranchProtectionRulesDocument, variables),
    ...options
  }
    )};

useBranchProtectionRulesQuery.getKey = (variables: BranchProtectionRulesQueryVariables) => ['BranchProtectionRules', variables];

export const useSuspenseBranchProtectionRulesQuery = <
      TData = BranchProtectionRulesQuery,
      TError = unknown
    >(
      variables: BranchProtectionRulesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<BranchProtectionRulesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<BranchProtectionRulesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<BranchProtectionRulesQuery, TError, TData>(
      {
    queryKey: ['BranchProtectionRules', variables],
    queryFn: graphqlFetch<BranchProtectionRulesQuery, BranchProtectionRulesQueryVariables>(BranchProtectionRulesDocument, variables),
    ...options
  }
    )};

useSuspenseBranchProtectionRulesQuery.getKey = (variables: BranchProtectionRulesQueryVariables) => ['BranchProtectionRules', variables];

export const useInfiniteBranchProtectionRulesQuery = <
      TData = InfiniteData<BranchProtectionRulesQuery>,
      TError = unknown
    >(
      variables: BranchProtectionRulesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<BranchProtectionRulesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<BranchProtectionRulesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<BranchProtectionRulesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['BranchProtectionRules.infinite', variables],
      queryFn: (metaData) => graphqlFetch<BranchProtectionRulesQuery, BranchProtectionRulesQueryVariables>(BranchProtectionRulesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteBranchProtectionRulesQuery.getKey = (variables: BranchProtectionRulesQueryVariables) => ['BranchProtectionRules.infinite', variables];

export const useSuspenseInfiniteBranchProtectionRulesQuery = <
      TData = InfiniteData<BranchProtectionRulesQuery>,
      TError = unknown
    >(
      variables: BranchProtectionRulesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<BranchProtectionRulesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<BranchProtectionRulesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<BranchProtectionRulesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['BranchProtectionRules.infinite', variables],
      queryFn: (metaData) => graphqlFetch<BranchProtectionRulesQuery, BranchProtectionRulesQueryVariables>(BranchProtectionRulesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteBranchProtectionRulesQuery.getKey = (variables: BranchProtectionRulesQueryVariables) => ['BranchProtectionRules.infinite', variables];


useBranchProtectionRulesQuery.fetcher = (variables: BranchProtectionRulesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<BranchProtectionRulesQuery, BranchProtectionRulesQueryVariables>(BranchProtectionRulesDocument, variables, options);

export const RepositoryGraphDocument = new TypedDocumentString(`
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
              idpOrganizationId
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
    `);

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
    queryKey: ['RepositoryGraph', variables],
    queryFn: graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraph', variables];

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
      queryKey: optionsQueryKey ?? ['RepositoryGraph.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryGraphQuery.getKey = (variables: RepositoryGraphQueryVariables) => ['RepositoryGraph.infinite', variables];


useRepositoryGraphQuery.fetcher = (variables: RepositoryGraphQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryGraphQuery, RepositoryGraphQueryVariables>(RepositoryGraphDocument, variables, options);

export const OrganizationDocument = new TypedDocumentString(`
    query Organization($rowId: UUID!) {
  organization(rowId: $rowId) {
    rowId
    idpOrganizationId
    slug
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
    `);

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
    queryKey: ['Organization', variables],
    queryFn: graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, variables),
    ...options
  }
    )};

useSuspenseOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['Organization', variables];

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
      queryKey: optionsQueryKey ?? ['Organization.infinite', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteOrganizationQuery.getKey = (variables: OrganizationQueryVariables) => ['Organization.infinite', variables];


useOrganizationQuery.fetcher = (variables: OrganizationQueryVariables, options?: RequestInit['headers']) => graphqlFetch<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, variables, options);

export const OrganizationsDocument = new TypedDocumentString(`
    query Organizations($limit: Int) {
  organizations(first: $limit) {
    nodes {
      rowId
      idpOrganizationId
      slug
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
    `);

export const useOrganizationsQuery = <
      TData = OrganizationsQuery,
      TError = unknown
    >(
      variables?: OrganizationsQueryVariables,
      options?: Omit<UseQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<OrganizationsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Organizations'] : ['Organizations', variables],
    queryFn: graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables),
    ...options
  }
    )};

useOrganizationsQuery.getKey = (variables?: OrganizationsQueryVariables) => variables === undefined ? ['Organizations'] : ['Organizations', variables];

export const useSuspenseOrganizationsQuery = <
      TData = OrganizationsQuery,
      TError = unknown
    >(
      variables?: OrganizationsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<OrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<OrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<OrganizationsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Organizations'] : ['Organizations', variables],
    queryFn: graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables),
    ...options
  }
    )};

useSuspenseOrganizationsQuery.getKey = (variables?: OrganizationsQueryVariables) => variables === undefined ? ['Organizations'] : ['Organizations', variables];

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
      queryKey: optionsQueryKey ?? variables === undefined ? ['Organizations.infinite'] : ['Organizations.infinite', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteOrganizationsQuery.getKey = (variables?: OrganizationsQueryVariables) => variables === undefined ? ['Organizations.infinite'] : ['Organizations.infinite', variables];

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
      queryKey: optionsQueryKey ?? variables === undefined ? ['Organizations.infinite'] : ['Organizations.infinite', variables],
      queryFn: (metaData) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteOrganizationsQuery.getKey = (variables?: OrganizationsQueryVariables) => variables === undefined ? ['Organizations.infinite'] : ['Organizations.infinite', variables];


useOrganizationsQuery.fetcher = (variables?: OrganizationsQueryVariables, options?: RequestInit['headers']) => graphqlFetch<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, variables, options);

export const PersonalAccessTokensDocument = new TypedDocumentString(`
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
    `);

export const usePersonalAccessTokensQuery = <
      TData = PersonalAccessTokensQuery,
      TError = unknown
    >(
      variables?: PersonalAccessTokensQueryVariables,
      options?: Omit<UseQueryOptions<PersonalAccessTokensQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PersonalAccessTokensQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PersonalAccessTokensQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['PersonalAccessTokens'] : ['PersonalAccessTokens', variables],
    queryFn: graphqlFetch<PersonalAccessTokensQuery, PersonalAccessTokensQueryVariables>(PersonalAccessTokensDocument, variables),
    ...options
  }
    )};

usePersonalAccessTokensQuery.getKey = (variables?: PersonalAccessTokensQueryVariables) => variables === undefined ? ['PersonalAccessTokens'] : ['PersonalAccessTokens', variables];

export const useSuspensePersonalAccessTokensQuery = <
      TData = PersonalAccessTokensQuery,
      TError = unknown
    >(
      variables?: PersonalAccessTokensQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<PersonalAccessTokensQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<PersonalAccessTokensQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<PersonalAccessTokensQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['PersonalAccessTokens'] : ['PersonalAccessTokens', variables],
    queryFn: graphqlFetch<PersonalAccessTokensQuery, PersonalAccessTokensQueryVariables>(PersonalAccessTokensDocument, variables),
    ...options
  }
    )};

useSuspensePersonalAccessTokensQuery.getKey = (variables?: PersonalAccessTokensQueryVariables) => variables === undefined ? ['PersonalAccessTokens'] : ['PersonalAccessTokens', variables];

export const useInfinitePersonalAccessTokensQuery = <
      TData = InfiniteData<PersonalAccessTokensQuery>,
      TError = unknown
    >(
      variables: PersonalAccessTokensQueryVariables,
      options: Omit<UseInfiniteQueryOptions<PersonalAccessTokensQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<PersonalAccessTokensQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<PersonalAccessTokensQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['PersonalAccessTokens.infinite'] : ['PersonalAccessTokens.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PersonalAccessTokensQuery, PersonalAccessTokensQueryVariables>(PersonalAccessTokensDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfinitePersonalAccessTokensQuery.getKey = (variables?: PersonalAccessTokensQueryVariables) => variables === undefined ? ['PersonalAccessTokens.infinite'] : ['PersonalAccessTokens.infinite', variables];

export const useSuspenseInfinitePersonalAccessTokensQuery = <
      TData = InfiniteData<PersonalAccessTokensQuery>,
      TError = unknown
    >(
      variables: PersonalAccessTokensQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<PersonalAccessTokensQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<PersonalAccessTokensQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<PersonalAccessTokensQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['PersonalAccessTokens.infinite'] : ['PersonalAccessTokens.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PersonalAccessTokensQuery, PersonalAccessTokensQueryVariables>(PersonalAccessTokensDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfinitePersonalAccessTokensQuery.getKey = (variables?: PersonalAccessTokensQueryVariables) => variables === undefined ? ['PersonalAccessTokens.infinite'] : ['PersonalAccessTokens.infinite', variables];


usePersonalAccessTokensQuery.fetcher = (variables?: PersonalAccessTokensQueryVariables, options?: RequestInit['headers']) => graphqlFetch<PersonalAccessTokensQuery, PersonalAccessTokensQueryVariables>(PersonalAccessTokensDocument, variables, options);

export const CreateProjectDocument = new TypedDocumentString(`
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
        slug
      }
    }
  }
}
    `);

export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>) => {
    
    return useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      {
    mutationKey: ['CreateProject'],
    mutationFn: (variables?: CreateProjectMutationVariables) => graphqlFetch<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, variables)(),
    ...options
  }
    )};

useCreateProjectMutation.getKey = () => ['CreateProject'];


useCreateProjectMutation.fetcher = (variables: CreateProjectMutationVariables, options?: RequestInit['headers']) => graphqlFetch<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, variables, options);

export const ProjectBySlugDocument = new TypedDocumentString(`
    query ProjectBySlug($ownerSlug: String!, $slug: String!) {
  projects(
    filter: {slug: {equalTo: $slug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
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
        slug
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
              slug
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
      }
    }
  }
}
    `);

export const useProjectBySlugQuery = <
      TData = ProjectBySlugQuery,
      TError = unknown
    >(
      variables: ProjectBySlugQueryVariables,
      options?: Omit<UseQueryOptions<ProjectBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ProjectBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ProjectBySlugQuery, TError, TData>(
      {
    queryKey: ['ProjectBySlug', variables],
    queryFn: graphqlFetch<ProjectBySlugQuery, ProjectBySlugQueryVariables>(ProjectBySlugDocument, variables),
    ...options
  }
    )};

useProjectBySlugQuery.getKey = (variables: ProjectBySlugQueryVariables) => ['ProjectBySlug', variables];

export const useSuspenseProjectBySlugQuery = <
      TData = ProjectBySlugQuery,
      TError = unknown
    >(
      variables: ProjectBySlugQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ProjectBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ProjectBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ProjectBySlugQuery, TError, TData>(
      {
    queryKey: ['ProjectBySlug', variables],
    queryFn: graphqlFetch<ProjectBySlugQuery, ProjectBySlugQueryVariables>(ProjectBySlugDocument, variables),
    ...options
  }
    )};

useSuspenseProjectBySlugQuery.getKey = (variables: ProjectBySlugQueryVariables) => ['ProjectBySlug', variables];

export const useInfiniteProjectBySlugQuery = <
      TData = InfiniteData<ProjectBySlugQuery>,
      TError = unknown
    >(
      variables: ProjectBySlugQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ProjectBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ProjectBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ProjectBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['ProjectBySlug.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectBySlugQuery, ProjectBySlugQueryVariables>(ProjectBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteProjectBySlugQuery.getKey = (variables: ProjectBySlugQueryVariables) => ['ProjectBySlug.infinite', variables];

export const useSuspenseInfiniteProjectBySlugQuery = <
      TData = InfiniteData<ProjectBySlugQuery>,
      TError = unknown
    >(
      variables: ProjectBySlugQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ProjectBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ProjectBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ProjectBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['ProjectBySlug.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectBySlugQuery, ProjectBySlugQueryVariables>(ProjectBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteProjectBySlugQuery.getKey = (variables: ProjectBySlugQueryVariables) => ['ProjectBySlug.infinite', variables];


useProjectBySlugQuery.fetcher = (variables: ProjectBySlugQueryVariables, options?: RequestInit['headers']) => graphqlFetch<ProjectBySlugQuery, ProjectBySlugQueryVariables>(ProjectBySlugDocument, variables, options);

export const ProjectVersionDriftDocument = new TypedDocumentString(`
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
    `);

export const useProjectVersionDriftQuery = <
      TData = ProjectVersionDriftQuery,
      TError = unknown
    >(
      variables: ProjectVersionDriftQueryVariables,
      options?: Omit<UseQueryOptions<ProjectVersionDriftQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ProjectVersionDriftQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ProjectVersionDriftQuery, TError, TData>(
      {
    queryKey: ['ProjectVersionDrift', variables],
    queryFn: graphqlFetch<ProjectVersionDriftQuery, ProjectVersionDriftQueryVariables>(ProjectVersionDriftDocument, variables),
    ...options
  }
    )};

useProjectVersionDriftQuery.getKey = (variables: ProjectVersionDriftQueryVariables) => ['ProjectVersionDrift', variables];

export const useSuspenseProjectVersionDriftQuery = <
      TData = ProjectVersionDriftQuery,
      TError = unknown
    >(
      variables: ProjectVersionDriftQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ProjectVersionDriftQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ProjectVersionDriftQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ProjectVersionDriftQuery, TError, TData>(
      {
    queryKey: ['ProjectVersionDrift', variables],
    queryFn: graphqlFetch<ProjectVersionDriftQuery, ProjectVersionDriftQueryVariables>(ProjectVersionDriftDocument, variables),
    ...options
  }
    )};

useSuspenseProjectVersionDriftQuery.getKey = (variables: ProjectVersionDriftQueryVariables) => ['ProjectVersionDrift', variables];

export const useInfiniteProjectVersionDriftQuery = <
      TData = InfiniteData<ProjectVersionDriftQuery>,
      TError = unknown
    >(
      variables: ProjectVersionDriftQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ProjectVersionDriftQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ProjectVersionDriftQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ProjectVersionDriftQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['ProjectVersionDrift.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectVersionDriftQuery, ProjectVersionDriftQueryVariables>(ProjectVersionDriftDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteProjectVersionDriftQuery.getKey = (variables: ProjectVersionDriftQueryVariables) => ['ProjectVersionDrift.infinite', variables];

export const useSuspenseInfiniteProjectVersionDriftQuery = <
      TData = InfiniteData<ProjectVersionDriftQuery>,
      TError = unknown
    >(
      variables: ProjectVersionDriftQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ProjectVersionDriftQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ProjectVersionDriftQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ProjectVersionDriftQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['ProjectVersionDrift.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectVersionDriftQuery, ProjectVersionDriftQueryVariables>(ProjectVersionDriftDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteProjectVersionDriftQuery.getKey = (variables: ProjectVersionDriftQueryVariables) => ['ProjectVersionDrift.infinite', variables];


useProjectVersionDriftQuery.fetcher = (variables: ProjectVersionDriftQueryVariables, options?: RequestInit['headers']) => graphqlFetch<ProjectVersionDriftQuery, ProjectVersionDriftQueryVariables>(ProjectVersionDriftDocument, variables, options);

export const ProjectsDocument = new TypedDocumentString(`
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
        slug
        avatarUrl
      }
      projectRepositories {
        totalCount
      }
    }
    totalCount
  }
}
    `);

export const useProjectsQuery = <
      TData = ProjectsQuery,
      TError = unknown
    >(
      variables: ProjectsQueryVariables,
      options?: Omit<UseQueryOptions<ProjectsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ProjectsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ProjectsQuery, TError, TData>(
      {
    queryKey: ['Projects', variables],
    queryFn: graphqlFetch<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, variables),
    ...options
  }
    )};

useProjectsQuery.getKey = (variables: ProjectsQueryVariables) => ['Projects', variables];

export const useSuspenseProjectsQuery = <
      TData = ProjectsQuery,
      TError = unknown
    >(
      variables: ProjectsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ProjectsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ProjectsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ProjectsQuery, TError, TData>(
      {
    queryKey: ['Projects', variables],
    queryFn: graphqlFetch<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, variables),
    ...options
  }
    )};

useSuspenseProjectsQuery.getKey = (variables: ProjectsQueryVariables) => ['Projects', variables];

export const useInfiniteProjectsQuery = <
      TData = InfiniteData<ProjectsQuery>,
      TError = unknown
    >(
      variables: ProjectsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ProjectsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ProjectsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ProjectsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Projects.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteProjectsQuery.getKey = (variables: ProjectsQueryVariables) => ['Projects.infinite', variables];

export const useSuspenseInfiniteProjectsQuery = <
      TData = InfiniteData<ProjectsQuery>,
      TError = unknown
    >(
      variables: ProjectsQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ProjectsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ProjectsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ProjectsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Projects.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteProjectsQuery.getKey = (variables: ProjectsQueryVariables) => ['Projects.infinite', variables];


useProjectsQuery.fetcher = (variables: ProjectsQueryVariables, options?: RequestInit['headers']) => graphqlFetch<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, variables, options);

export const PullRequestConversationDocument = new TypedDocumentString(`
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
    `);

export const usePullRequestConversationQuery = <
      TData = PullRequestConversationQuery,
      TError = unknown
    >(
      variables: PullRequestConversationQueryVariables,
      options?: Omit<UseQueryOptions<PullRequestConversationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PullRequestConversationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PullRequestConversationQuery, TError, TData>(
      {
    queryKey: ['PullRequestConversation', variables],
    queryFn: graphqlFetch<PullRequestConversationQuery, PullRequestConversationQueryVariables>(PullRequestConversationDocument, variables),
    ...options
  }
    )};

usePullRequestConversationQuery.getKey = (variables: PullRequestConversationQueryVariables) => ['PullRequestConversation', variables];

export const useSuspensePullRequestConversationQuery = <
      TData = PullRequestConversationQuery,
      TError = unknown
    >(
      variables: PullRequestConversationQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<PullRequestConversationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<PullRequestConversationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<PullRequestConversationQuery, TError, TData>(
      {
    queryKey: ['PullRequestConversation', variables],
    queryFn: graphqlFetch<PullRequestConversationQuery, PullRequestConversationQueryVariables>(PullRequestConversationDocument, variables),
    ...options
  }
    )};

useSuspensePullRequestConversationQuery.getKey = (variables: PullRequestConversationQueryVariables) => ['PullRequestConversation', variables];

export const useInfinitePullRequestConversationQuery = <
      TData = InfiniteData<PullRequestConversationQuery>,
      TError = unknown
    >(
      variables: PullRequestConversationQueryVariables,
      options: Omit<UseInfiniteQueryOptions<PullRequestConversationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<PullRequestConversationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<PullRequestConversationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestConversation.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestConversationQuery, PullRequestConversationQueryVariables>(PullRequestConversationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfinitePullRequestConversationQuery.getKey = (variables: PullRequestConversationQueryVariables) => ['PullRequestConversation.infinite', variables];

export const useSuspenseInfinitePullRequestConversationQuery = <
      TData = InfiniteData<PullRequestConversationQuery>,
      TError = unknown
    >(
      variables: PullRequestConversationQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<PullRequestConversationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<PullRequestConversationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<PullRequestConversationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestConversation.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestConversationQuery, PullRequestConversationQueryVariables>(PullRequestConversationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfinitePullRequestConversationQuery.getKey = (variables: PullRequestConversationQueryVariables) => ['PullRequestConversation.infinite', variables];


usePullRequestConversationQuery.fetcher = (variables: PullRequestConversationQueryVariables, options?: RequestInit['headers']) => graphqlFetch<PullRequestConversationQuery, PullRequestConversationQueryVariables>(PullRequestConversationDocument, variables, options);

export const PullRequestFileDiffDocument = new TypedDocumentString(`
    query PullRequestFileDiff($ownerSlug: String!, $repoSlug: String!, $number: Int!, $path: String!) {
  pullRequests(
    filter: {number: {equalTo: $number}, repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
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
    `);

export const usePullRequestFileDiffQuery = <
      TData = PullRequestFileDiffQuery,
      TError = unknown
    >(
      variables: PullRequestFileDiffQueryVariables,
      options?: Omit<UseQueryOptions<PullRequestFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PullRequestFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PullRequestFileDiffQuery, TError, TData>(
      {
    queryKey: ['PullRequestFileDiff', variables],
    queryFn: graphqlFetch<PullRequestFileDiffQuery, PullRequestFileDiffQueryVariables>(PullRequestFileDiffDocument, variables),
    ...options
  }
    )};

usePullRequestFileDiffQuery.getKey = (variables: PullRequestFileDiffQueryVariables) => ['PullRequestFileDiff', variables];

export const useSuspensePullRequestFileDiffQuery = <
      TData = PullRequestFileDiffQuery,
      TError = unknown
    >(
      variables: PullRequestFileDiffQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<PullRequestFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<PullRequestFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<PullRequestFileDiffQuery, TError, TData>(
      {
    queryKey: ['PullRequestFileDiff', variables],
    queryFn: graphqlFetch<PullRequestFileDiffQuery, PullRequestFileDiffQueryVariables>(PullRequestFileDiffDocument, variables),
    ...options
  }
    )};

useSuspensePullRequestFileDiffQuery.getKey = (variables: PullRequestFileDiffQueryVariables) => ['PullRequestFileDiff', variables];

export const useInfinitePullRequestFileDiffQuery = <
      TData = InfiniteData<PullRequestFileDiffQuery>,
      TError = unknown
    >(
      variables: PullRequestFileDiffQueryVariables,
      options: Omit<UseInfiniteQueryOptions<PullRequestFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<PullRequestFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<PullRequestFileDiffQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestFileDiff.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestFileDiffQuery, PullRequestFileDiffQueryVariables>(PullRequestFileDiffDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfinitePullRequestFileDiffQuery.getKey = (variables: PullRequestFileDiffQueryVariables) => ['PullRequestFileDiff.infinite', variables];

export const useSuspenseInfinitePullRequestFileDiffQuery = <
      TData = InfiniteData<PullRequestFileDiffQuery>,
      TError = unknown
    >(
      variables: PullRequestFileDiffQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<PullRequestFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<PullRequestFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<PullRequestFileDiffQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestFileDiff.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestFileDiffQuery, PullRequestFileDiffQueryVariables>(PullRequestFileDiffDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfinitePullRequestFileDiffQuery.getKey = (variables: PullRequestFileDiffQueryVariables) => ['PullRequestFileDiff.infinite', variables];


usePullRequestFileDiffQuery.fetcher = (variables: PullRequestFileDiffQueryVariables, options?: RequestInit['headers']) => graphqlFetch<PullRequestFileDiffQuery, PullRequestFileDiffQueryVariables>(PullRequestFileDiffDocument, variables, options);

export const PullRequestFilesDocument = new TypedDocumentString(`
    query PullRequestFiles($ownerSlug: String!, $repoSlug: String!, $number: Int!) {
  pullRequests(
    filter: {number: {equalTo: $number}, repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
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
    `);

export const usePullRequestFilesQuery = <
      TData = PullRequestFilesQuery,
      TError = unknown
    >(
      variables: PullRequestFilesQueryVariables,
      options?: Omit<UseQueryOptions<PullRequestFilesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PullRequestFilesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PullRequestFilesQuery, TError, TData>(
      {
    queryKey: ['PullRequestFiles', variables],
    queryFn: graphqlFetch<PullRequestFilesQuery, PullRequestFilesQueryVariables>(PullRequestFilesDocument, variables),
    ...options
  }
    )};

usePullRequestFilesQuery.getKey = (variables: PullRequestFilesQueryVariables) => ['PullRequestFiles', variables];

export const useSuspensePullRequestFilesQuery = <
      TData = PullRequestFilesQuery,
      TError = unknown
    >(
      variables: PullRequestFilesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<PullRequestFilesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<PullRequestFilesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<PullRequestFilesQuery, TError, TData>(
      {
    queryKey: ['PullRequestFiles', variables],
    queryFn: graphqlFetch<PullRequestFilesQuery, PullRequestFilesQueryVariables>(PullRequestFilesDocument, variables),
    ...options
  }
    )};

useSuspensePullRequestFilesQuery.getKey = (variables: PullRequestFilesQueryVariables) => ['PullRequestFiles', variables];

export const useInfinitePullRequestFilesQuery = <
      TData = InfiniteData<PullRequestFilesQuery>,
      TError = unknown
    >(
      variables: PullRequestFilesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<PullRequestFilesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<PullRequestFilesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<PullRequestFilesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestFiles.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestFilesQuery, PullRequestFilesQueryVariables>(PullRequestFilesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfinitePullRequestFilesQuery.getKey = (variables: PullRequestFilesQueryVariables) => ['PullRequestFiles.infinite', variables];

export const useSuspenseInfinitePullRequestFilesQuery = <
      TData = InfiniteData<PullRequestFilesQuery>,
      TError = unknown
    >(
      variables: PullRequestFilesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<PullRequestFilesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<PullRequestFilesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<PullRequestFilesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequestFiles.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestFilesQuery, PullRequestFilesQueryVariables>(PullRequestFilesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfinitePullRequestFilesQuery.getKey = (variables: PullRequestFilesQueryVariables) => ['PullRequestFiles.infinite', variables];


usePullRequestFilesQuery.fetcher = (variables: PullRequestFilesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<PullRequestFilesQuery, PullRequestFilesQueryVariables>(PullRequestFilesDocument, variables, options);

export const PullRequestsDocument = new TypedDocumentString(`
    query PullRequests($ownerSlug: String!, $repoSlug: String!) {
  pullRequests(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
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
    `);

export const usePullRequestsQuery = <
      TData = PullRequestsQuery,
      TError = unknown
    >(
      variables: PullRequestsQueryVariables,
      options?: Omit<UseQueryOptions<PullRequestsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PullRequestsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PullRequestsQuery, TError, TData>(
      {
    queryKey: ['PullRequests', variables],
    queryFn: graphqlFetch<PullRequestsQuery, PullRequestsQueryVariables>(PullRequestsDocument, variables),
    ...options
  }
    )};

usePullRequestsQuery.getKey = (variables: PullRequestsQueryVariables) => ['PullRequests', variables];

export const useSuspensePullRequestsQuery = <
      TData = PullRequestsQuery,
      TError = unknown
    >(
      variables: PullRequestsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<PullRequestsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<PullRequestsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<PullRequestsQuery, TError, TData>(
      {
    queryKey: ['PullRequests', variables],
    queryFn: graphqlFetch<PullRequestsQuery, PullRequestsQueryVariables>(PullRequestsDocument, variables),
    ...options
  }
    )};

useSuspensePullRequestsQuery.getKey = (variables: PullRequestsQueryVariables) => ['PullRequests', variables];

export const useInfinitePullRequestsQuery = <
      TData = InfiniteData<PullRequestsQuery>,
      TError = unknown
    >(
      variables: PullRequestsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<PullRequestsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<PullRequestsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<PullRequestsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequests.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestsQuery, PullRequestsQueryVariables>(PullRequestsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfinitePullRequestsQuery.getKey = (variables: PullRequestsQueryVariables) => ['PullRequests.infinite', variables];

export const useSuspenseInfinitePullRequestsQuery = <
      TData = InfiniteData<PullRequestsQuery>,
      TError = unknown
    >(
      variables: PullRequestsQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<PullRequestsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<PullRequestsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<PullRequestsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['PullRequests.infinite', variables],
      queryFn: (metaData) => graphqlFetch<PullRequestsQuery, PullRequestsQueryVariables>(PullRequestsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfinitePullRequestsQuery.getKey = (variables: PullRequestsQueryVariables) => ['PullRequests.infinite', variables];


usePullRequestsQuery.fetcher = (variables: PullRequestsQueryVariables, options?: RequestInit['headers']) => graphqlFetch<PullRequestsQuery, PullRequestsQueryVariables>(PullRequestsDocument, variables, options);

export const CommitDetailDocument = new TypedDocumentString(`
    query CommitDetail($ownerSlug: String!, $repoSlug: String!, $oid: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
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
    `);

export const useCommitDetailQuery = <
      TData = CommitDetailQuery,
      TError = unknown
    >(
      variables: CommitDetailQueryVariables,
      options?: Omit<UseQueryOptions<CommitDetailQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CommitDetailQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CommitDetailQuery, TError, TData>(
      {
    queryKey: ['CommitDetail', variables],
    queryFn: graphqlFetch<CommitDetailQuery, CommitDetailQueryVariables>(CommitDetailDocument, variables),
    ...options
  }
    )};

useCommitDetailQuery.getKey = (variables: CommitDetailQueryVariables) => ['CommitDetail', variables];

export const useSuspenseCommitDetailQuery = <
      TData = CommitDetailQuery,
      TError = unknown
    >(
      variables: CommitDetailQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CommitDetailQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CommitDetailQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CommitDetailQuery, TError, TData>(
      {
    queryKey: ['CommitDetail', variables],
    queryFn: graphqlFetch<CommitDetailQuery, CommitDetailQueryVariables>(CommitDetailDocument, variables),
    ...options
  }
    )};

useSuspenseCommitDetailQuery.getKey = (variables: CommitDetailQueryVariables) => ['CommitDetail', variables];

export const useInfiniteCommitDetailQuery = <
      TData = InfiniteData<CommitDetailQuery>,
      TError = unknown
    >(
      variables: CommitDetailQueryVariables,
      options: Omit<UseInfiniteQueryOptions<CommitDetailQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<CommitDetailQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<CommitDetailQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['CommitDetail.infinite', variables],
      queryFn: (metaData) => graphqlFetch<CommitDetailQuery, CommitDetailQueryVariables>(CommitDetailDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteCommitDetailQuery.getKey = (variables: CommitDetailQueryVariables) => ['CommitDetail.infinite', variables];

export const useSuspenseInfiniteCommitDetailQuery = <
      TData = InfiniteData<CommitDetailQuery>,
      TError = unknown
    >(
      variables: CommitDetailQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<CommitDetailQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<CommitDetailQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<CommitDetailQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['CommitDetail.infinite', variables],
      queryFn: (metaData) => graphqlFetch<CommitDetailQuery, CommitDetailQueryVariables>(CommitDetailDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteCommitDetailQuery.getKey = (variables: CommitDetailQueryVariables) => ['CommitDetail.infinite', variables];


useCommitDetailQuery.fetcher = (variables: CommitDetailQueryVariables, options?: RequestInit['headers']) => graphqlFetch<CommitDetailQuery, CommitDetailQueryVariables>(CommitDetailDocument, variables, options);

export const CommitFileDiffDocument = new TypedDocumentString(`
    query CommitFileDiff($ownerSlug: String!, $repoSlug: String!, $oid: String!, $path: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
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
    `);

export const useCommitFileDiffQuery = <
      TData = CommitFileDiffQuery,
      TError = unknown
    >(
      variables: CommitFileDiffQueryVariables,
      options?: Omit<UseQueryOptions<CommitFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CommitFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CommitFileDiffQuery, TError, TData>(
      {
    queryKey: ['CommitFileDiff', variables],
    queryFn: graphqlFetch<CommitFileDiffQuery, CommitFileDiffQueryVariables>(CommitFileDiffDocument, variables),
    ...options
  }
    )};

useCommitFileDiffQuery.getKey = (variables: CommitFileDiffQueryVariables) => ['CommitFileDiff', variables];

export const useSuspenseCommitFileDiffQuery = <
      TData = CommitFileDiffQuery,
      TError = unknown
    >(
      variables: CommitFileDiffQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<CommitFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<CommitFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<CommitFileDiffQuery, TError, TData>(
      {
    queryKey: ['CommitFileDiff', variables],
    queryFn: graphqlFetch<CommitFileDiffQuery, CommitFileDiffQueryVariables>(CommitFileDiffDocument, variables),
    ...options
  }
    )};

useSuspenseCommitFileDiffQuery.getKey = (variables: CommitFileDiffQueryVariables) => ['CommitFileDiff', variables];

export const useInfiniteCommitFileDiffQuery = <
      TData = InfiniteData<CommitFileDiffQuery>,
      TError = unknown
    >(
      variables: CommitFileDiffQueryVariables,
      options: Omit<UseInfiniteQueryOptions<CommitFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<CommitFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<CommitFileDiffQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['CommitFileDiff.infinite', variables],
      queryFn: (metaData) => graphqlFetch<CommitFileDiffQuery, CommitFileDiffQueryVariables>(CommitFileDiffDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteCommitFileDiffQuery.getKey = (variables: CommitFileDiffQueryVariables) => ['CommitFileDiff.infinite', variables];

export const useSuspenseInfiniteCommitFileDiffQuery = <
      TData = InfiniteData<CommitFileDiffQuery>,
      TError = unknown
    >(
      variables: CommitFileDiffQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<CommitFileDiffQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<CommitFileDiffQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<CommitFileDiffQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['CommitFileDiff.infinite', variables],
      queryFn: (metaData) => graphqlFetch<CommitFileDiffQuery, CommitFileDiffQueryVariables>(CommitFileDiffDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteCommitFileDiffQuery.getKey = (variables: CommitFileDiffQueryVariables) => ['CommitFileDiff.infinite', variables];


useCommitFileDiffQuery.fetcher = (variables: CommitFileDiffQueryVariables, options?: RequestInit['headers']) => graphqlFetch<CommitFileDiffQuery, CommitFileDiffQueryVariables>(CommitFileDiffDocument, variables, options);

export const MovedRepositoryDocument = new TypedDocumentString(`
    query MovedRepository($ownerSlug: String!, $repoSlug: String!) {
  movedRepository(ownerSlug: $ownerSlug, repoSlug: $repoSlug) {
    ownerSlug
    repoSlug
  }
}
    `);

export const useMovedRepositoryQuery = <
      TData = MovedRepositoryQuery,
      TError = unknown
    >(
      variables: MovedRepositoryQueryVariables,
      options?: Omit<UseQueryOptions<MovedRepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MovedRepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MovedRepositoryQuery, TError, TData>(
      {
    queryKey: ['MovedRepository', variables],
    queryFn: graphqlFetch<MovedRepositoryQuery, MovedRepositoryQueryVariables>(MovedRepositoryDocument, variables),
    ...options
  }
    )};

useMovedRepositoryQuery.getKey = (variables: MovedRepositoryQueryVariables) => ['MovedRepository', variables];

export const useSuspenseMovedRepositoryQuery = <
      TData = MovedRepositoryQuery,
      TError = unknown
    >(
      variables: MovedRepositoryQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<MovedRepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<MovedRepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<MovedRepositoryQuery, TError, TData>(
      {
    queryKey: ['MovedRepository', variables],
    queryFn: graphqlFetch<MovedRepositoryQuery, MovedRepositoryQueryVariables>(MovedRepositoryDocument, variables),
    ...options
  }
    )};

useSuspenseMovedRepositoryQuery.getKey = (variables: MovedRepositoryQueryVariables) => ['MovedRepository', variables];

export const useInfiniteMovedRepositoryQuery = <
      TData = InfiniteData<MovedRepositoryQuery>,
      TError = unknown
    >(
      variables: MovedRepositoryQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MovedRepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MovedRepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MovedRepositoryQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['MovedRepository.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MovedRepositoryQuery, MovedRepositoryQueryVariables>(MovedRepositoryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMovedRepositoryQuery.getKey = (variables: MovedRepositoryQueryVariables) => ['MovedRepository.infinite', variables];

export const useSuspenseInfiniteMovedRepositoryQuery = <
      TData = InfiniteData<MovedRepositoryQuery>,
      TError = unknown
    >(
      variables: MovedRepositoryQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<MovedRepositoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<MovedRepositoryQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<MovedRepositoryQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['MovedRepository.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MovedRepositoryQuery, MovedRepositoryQueryVariables>(MovedRepositoryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteMovedRepositoryQuery.getKey = (variables: MovedRepositoryQueryVariables) => ['MovedRepository.infinite', variables];


useMovedRepositoryQuery.fetcher = (variables: MovedRepositoryQueryVariables, options?: RequestInit['headers']) => graphqlFetch<MovedRepositoryQuery, MovedRepositoryQueryVariables>(MovedRepositoryDocument, variables, options);

export const RepositoriesDocument = new TypedDocumentString(`
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
        slug
        avatarUrl
      }
    }
    totalCount
  }
}
    `);

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
    queryKey: ['Repositories', variables],
    queryFn: graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['Repositories', variables];

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
      queryKey: optionsQueryKey ?? ['Repositories.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoriesQuery.getKey = (variables: RepositoriesQueryVariables) => ['Repositories.infinite', variables];


useRepositoriesQuery.fetcher = (variables: RepositoriesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, variables, options);

export const RepositoryBlastRadiusDocument = new TypedDocumentString(`
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
    `);

export const useRepositoryBlastRadiusQuery = <
      TData = RepositoryBlastRadiusQuery,
      TError = unknown
    >(
      variables: RepositoryBlastRadiusQueryVariables,
      options?: Omit<UseQueryOptions<RepositoryBlastRadiusQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoryBlastRadiusQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoryBlastRadiusQuery, TError, TData>(
      {
    queryKey: ['RepositoryBlastRadius', variables],
    queryFn: graphqlFetch<RepositoryBlastRadiusQuery, RepositoryBlastRadiusQueryVariables>(RepositoryBlastRadiusDocument, variables),
    ...options
  }
    )};

useRepositoryBlastRadiusQuery.getKey = (variables: RepositoryBlastRadiusQueryVariables) => ['RepositoryBlastRadius', variables];

export const useSuspenseRepositoryBlastRadiusQuery = <
      TData = RepositoryBlastRadiusQuery,
      TError = unknown
    >(
      variables: RepositoryBlastRadiusQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoryBlastRadiusQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoryBlastRadiusQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoryBlastRadiusQuery, TError, TData>(
      {
    queryKey: ['RepositoryBlastRadius', variables],
    queryFn: graphqlFetch<RepositoryBlastRadiusQuery, RepositoryBlastRadiusQueryVariables>(RepositoryBlastRadiusDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryBlastRadiusQuery.getKey = (variables: RepositoryBlastRadiusQueryVariables) => ['RepositoryBlastRadius', variables];

export const useInfiniteRepositoryBlastRadiusQuery = <
      TData = InfiniteData<RepositoryBlastRadiusQuery>,
      TError = unknown
    >(
      variables: RepositoryBlastRadiusQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoryBlastRadiusQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoryBlastRadiusQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoryBlastRadiusQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryBlastRadius.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryBlastRadiusQuery, RepositoryBlastRadiusQueryVariables>(RepositoryBlastRadiusDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoryBlastRadiusQuery.getKey = (variables: RepositoryBlastRadiusQueryVariables) => ['RepositoryBlastRadius.infinite', variables];

export const useSuspenseInfiniteRepositoryBlastRadiusQuery = <
      TData = InfiniteData<RepositoryBlastRadiusQuery>,
      TError = unknown
    >(
      variables: RepositoryBlastRadiusQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoryBlastRadiusQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoryBlastRadiusQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoryBlastRadiusQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryBlastRadius.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryBlastRadiusQuery, RepositoryBlastRadiusQueryVariables>(RepositoryBlastRadiusDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryBlastRadiusQuery.getKey = (variables: RepositoryBlastRadiusQueryVariables) => ['RepositoryBlastRadius.infinite', variables];


useRepositoryBlastRadiusQuery.fetcher = (variables: RepositoryBlastRadiusQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryBlastRadiusQuery, RepositoryBlastRadiusQueryVariables>(RepositoryBlastRadiusDocument, variables, options);

export const RepositoryBySlugDocument = new TypedDocumentString(`
    query RepositoryBySlug($ownerSlug: String!, $repoSlug: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
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
        slug
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
    `);

export const useRepositoryBySlugQuery = <
      TData = RepositoryBySlugQuery,
      TError = unknown
    >(
      variables: RepositoryBySlugQueryVariables,
      options?: Omit<UseQueryOptions<RepositoryBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoryBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoryBySlugQuery, TError, TData>(
      {
    queryKey: ['RepositoryBySlug', variables],
    queryFn: graphqlFetch<RepositoryBySlugQuery, RepositoryBySlugQueryVariables>(RepositoryBySlugDocument, variables),
    ...options
  }
    )};

useRepositoryBySlugQuery.getKey = (variables: RepositoryBySlugQueryVariables) => ['RepositoryBySlug', variables];

export const useSuspenseRepositoryBySlugQuery = <
      TData = RepositoryBySlugQuery,
      TError = unknown
    >(
      variables: RepositoryBySlugQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoryBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoryBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoryBySlugQuery, TError, TData>(
      {
    queryKey: ['RepositoryBySlug', variables],
    queryFn: graphqlFetch<RepositoryBySlugQuery, RepositoryBySlugQueryVariables>(RepositoryBySlugDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryBySlugQuery.getKey = (variables: RepositoryBySlugQueryVariables) => ['RepositoryBySlug', variables];

export const useInfiniteRepositoryBySlugQuery = <
      TData = InfiniteData<RepositoryBySlugQuery>,
      TError = unknown
    >(
      variables: RepositoryBySlugQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoryBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoryBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoryBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryBySlug.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryBySlugQuery, RepositoryBySlugQueryVariables>(RepositoryBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoryBySlugQuery.getKey = (variables: RepositoryBySlugQueryVariables) => ['RepositoryBySlug.infinite', variables];

export const useSuspenseInfiniteRepositoryBySlugQuery = <
      TData = InfiniteData<RepositoryBySlugQuery>,
      TError = unknown
    >(
      variables: RepositoryBySlugQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoryBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoryBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoryBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryBySlug.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryBySlugQuery, RepositoryBySlugQueryVariables>(RepositoryBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryBySlugQuery.getKey = (variables: RepositoryBySlugQueryVariables) => ['RepositoryBySlug.infinite', variables];


useRepositoryBySlugQuery.fetcher = (variables: RepositoryBySlugQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryBySlugQuery, RepositoryBySlugQueryVariables>(RepositoryBySlugDocument, variables, options);

export const RepositoryWithBranchesDocument = new TypedDocumentString(`
    query RepositoryWithBranches($ownerSlug: String!, $repoSlug: String!) {
  repositories(
    filter: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}
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
        slug
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
    `);

export const useRepositoryWithBranchesQuery = <
      TData = RepositoryWithBranchesQuery,
      TError = unknown
    >(
      variables: RepositoryWithBranchesQueryVariables,
      options?: Omit<UseQueryOptions<RepositoryWithBranchesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RepositoryWithBranchesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RepositoryWithBranchesQuery, TError, TData>(
      {
    queryKey: ['RepositoryWithBranches', variables],
    queryFn: graphqlFetch<RepositoryWithBranchesQuery, RepositoryWithBranchesQueryVariables>(RepositoryWithBranchesDocument, variables),
    ...options
  }
    )};

useRepositoryWithBranchesQuery.getKey = (variables: RepositoryWithBranchesQueryVariables) => ['RepositoryWithBranches', variables];

export const useSuspenseRepositoryWithBranchesQuery = <
      TData = RepositoryWithBranchesQuery,
      TError = unknown
    >(
      variables: RepositoryWithBranchesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<RepositoryWithBranchesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<RepositoryWithBranchesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<RepositoryWithBranchesQuery, TError, TData>(
      {
    queryKey: ['RepositoryWithBranches', variables],
    queryFn: graphqlFetch<RepositoryWithBranchesQuery, RepositoryWithBranchesQueryVariables>(RepositoryWithBranchesDocument, variables),
    ...options
  }
    )};

useSuspenseRepositoryWithBranchesQuery.getKey = (variables: RepositoryWithBranchesQueryVariables) => ['RepositoryWithBranches', variables];

export const useInfiniteRepositoryWithBranchesQuery = <
      TData = InfiniteData<RepositoryWithBranchesQuery>,
      TError = unknown
    >(
      variables: RepositoryWithBranchesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RepositoryWithBranchesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RepositoryWithBranchesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RepositoryWithBranchesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryWithBranches.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryWithBranchesQuery, RepositoryWithBranchesQueryVariables>(RepositoryWithBranchesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRepositoryWithBranchesQuery.getKey = (variables: RepositoryWithBranchesQueryVariables) => ['RepositoryWithBranches.infinite', variables];

export const useSuspenseInfiniteRepositoryWithBranchesQuery = <
      TData = InfiniteData<RepositoryWithBranchesQuery>,
      TError = unknown
    >(
      variables: RepositoryWithBranchesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<RepositoryWithBranchesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<RepositoryWithBranchesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<RepositoryWithBranchesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['RepositoryWithBranches.infinite', variables],
      queryFn: (metaData) => graphqlFetch<RepositoryWithBranchesQuery, RepositoryWithBranchesQueryVariables>(RepositoryWithBranchesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteRepositoryWithBranchesQuery.getKey = (variables: RepositoryWithBranchesQueryVariables) => ['RepositoryWithBranches.infinite', variables];


useRepositoryWithBranchesQuery.fetcher = (variables: RepositoryWithBranchesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<RepositoryWithBranchesQuery, RepositoryWithBranchesQueryVariables>(RepositoryWithBranchesDocument, variables, options);

export const TransferRepositoryDocument = new TypedDocumentString(`
    mutation TransferRepository($input: TransferRepositoryInput!) {
  transferRepository(input: $input) {
    slug
    ownerUsername
    organizationSlug
    error
  }
}
    `);

export const useTransferRepositoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<TransferRepositoryMutation, TError, TransferRepositoryMutationVariables, TContext>) => {
    
    return useMutation<TransferRepositoryMutation, TError, TransferRepositoryMutationVariables, TContext>(
      {
    mutationKey: ['TransferRepository'],
    mutationFn: (variables?: TransferRepositoryMutationVariables) => graphqlFetch<TransferRepositoryMutation, TransferRepositoryMutationVariables>(TransferRepositoryDocument, variables)(),
    ...options
  }
    )};

useTransferRepositoryMutation.getKey = () => ['TransferRepository'];


useTransferRepositoryMutation.fetcher = (variables: TransferRepositoryMutationVariables, options?: RequestInit['headers']) => graphqlFetch<TransferRepositoryMutation, TransferRepositoryMutationVariables>(TransferRepositoryDocument, variables, options);

export const WorkspaceRepositoriesDocument = new TypedDocumentString(`
    query WorkspaceRepositories($workspaceSlug: String!) {
  repositories(
    filter: {organization: {slug: {equalTo: $workspaceSlug}}}
    orderBy: UPDATED_AT_DESC
    first: 100
  ) {
    nodes {
      rowId
      name
      slug
      description
      visibility
      defaultBranch
      updatedAt
    }
    totalCount
  }
}
    `);

export const useWorkspaceRepositoriesQuery = <
      TData = WorkspaceRepositoriesQuery,
      TError = unknown
    >(
      variables: WorkspaceRepositoriesQueryVariables,
      options?: Omit<UseQueryOptions<WorkspaceRepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<WorkspaceRepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<WorkspaceRepositoriesQuery, TError, TData>(
      {
    queryKey: ['WorkspaceRepositories', variables],
    queryFn: graphqlFetch<WorkspaceRepositoriesQuery, WorkspaceRepositoriesQueryVariables>(WorkspaceRepositoriesDocument, variables),
    ...options
  }
    )};

useWorkspaceRepositoriesQuery.getKey = (variables: WorkspaceRepositoriesQueryVariables) => ['WorkspaceRepositories', variables];

export const useSuspenseWorkspaceRepositoriesQuery = <
      TData = WorkspaceRepositoriesQuery,
      TError = unknown
    >(
      variables: WorkspaceRepositoriesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<WorkspaceRepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<WorkspaceRepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<WorkspaceRepositoriesQuery, TError, TData>(
      {
    queryKey: ['WorkspaceRepositories', variables],
    queryFn: graphqlFetch<WorkspaceRepositoriesQuery, WorkspaceRepositoriesQueryVariables>(WorkspaceRepositoriesDocument, variables),
    ...options
  }
    )};

useSuspenseWorkspaceRepositoriesQuery.getKey = (variables: WorkspaceRepositoriesQueryVariables) => ['WorkspaceRepositories', variables];

export const useInfiniteWorkspaceRepositoriesQuery = <
      TData = InfiniteData<WorkspaceRepositoriesQuery>,
      TError = unknown
    >(
      variables: WorkspaceRepositoriesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<WorkspaceRepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<WorkspaceRepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<WorkspaceRepositoriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['WorkspaceRepositories.infinite', variables],
      queryFn: (metaData) => graphqlFetch<WorkspaceRepositoriesQuery, WorkspaceRepositoriesQueryVariables>(WorkspaceRepositoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteWorkspaceRepositoriesQuery.getKey = (variables: WorkspaceRepositoriesQueryVariables) => ['WorkspaceRepositories.infinite', variables];

export const useSuspenseInfiniteWorkspaceRepositoriesQuery = <
      TData = InfiniteData<WorkspaceRepositoriesQuery>,
      TError = unknown
    >(
      variables: WorkspaceRepositoriesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<WorkspaceRepositoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<WorkspaceRepositoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<WorkspaceRepositoriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['WorkspaceRepositories.infinite', variables],
      queryFn: (metaData) => graphqlFetch<WorkspaceRepositoriesQuery, WorkspaceRepositoriesQueryVariables>(WorkspaceRepositoriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteWorkspaceRepositoriesQuery.getKey = (variables: WorkspaceRepositoriesQueryVariables) => ['WorkspaceRepositories.infinite', variables];


useWorkspaceRepositoriesQuery.fetcher = (variables: WorkspaceRepositoriesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<WorkspaceRepositoriesQuery, WorkspaceRepositoriesQueryVariables>(WorkspaceRepositoriesDocument, variables, options);

export const MergeQueueEntriesDocument = new TypedDocumentString(`
    query MergeQueueEntries($ownerSlug: String!, $repoSlug: String!) {
  mergeQueueEntries(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
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
    `);

export const useMergeQueueEntriesQuery = <
      TData = MergeQueueEntriesQuery,
      TError = unknown
    >(
      variables: MergeQueueEntriesQueryVariables,
      options?: Omit<UseQueryOptions<MergeQueueEntriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MergeQueueEntriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MergeQueueEntriesQuery, TError, TData>(
      {
    queryKey: ['MergeQueueEntries', variables],
    queryFn: graphqlFetch<MergeQueueEntriesQuery, MergeQueueEntriesQueryVariables>(MergeQueueEntriesDocument, variables),
    ...options
  }
    )};

useMergeQueueEntriesQuery.getKey = (variables: MergeQueueEntriesQueryVariables) => ['MergeQueueEntries', variables];

export const useSuspenseMergeQueueEntriesQuery = <
      TData = MergeQueueEntriesQuery,
      TError = unknown
    >(
      variables: MergeQueueEntriesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<MergeQueueEntriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<MergeQueueEntriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<MergeQueueEntriesQuery, TError, TData>(
      {
    queryKey: ['MergeQueueEntries', variables],
    queryFn: graphqlFetch<MergeQueueEntriesQuery, MergeQueueEntriesQueryVariables>(MergeQueueEntriesDocument, variables),
    ...options
  }
    )};

useSuspenseMergeQueueEntriesQuery.getKey = (variables: MergeQueueEntriesQueryVariables) => ['MergeQueueEntries', variables];

export const useInfiniteMergeQueueEntriesQuery = <
      TData = InfiniteData<MergeQueueEntriesQuery>,
      TError = unknown
    >(
      variables: MergeQueueEntriesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MergeQueueEntriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MergeQueueEntriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MergeQueueEntriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['MergeQueueEntries.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MergeQueueEntriesQuery, MergeQueueEntriesQueryVariables>(MergeQueueEntriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMergeQueueEntriesQuery.getKey = (variables: MergeQueueEntriesQueryVariables) => ['MergeQueueEntries.infinite', variables];

export const useSuspenseInfiniteMergeQueueEntriesQuery = <
      TData = InfiniteData<MergeQueueEntriesQuery>,
      TError = unknown
    >(
      variables: MergeQueueEntriesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<MergeQueueEntriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<MergeQueueEntriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<MergeQueueEntriesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['MergeQueueEntries.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MergeQueueEntriesQuery, MergeQueueEntriesQueryVariables>(MergeQueueEntriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteMergeQueueEntriesQuery.getKey = (variables: MergeQueueEntriesQueryVariables) => ['MergeQueueEntries.infinite', variables];


useMergeQueueEntriesQuery.fetcher = (variables: MergeQueueEntriesQueryVariables, options?: RequestInit['headers']) => graphqlFetch<MergeQueueEntriesQuery, MergeQueueEntriesQueryVariables>(MergeQueueEntriesDocument, variables, options);

export const StackDocument = new TypedDocumentString(`
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
        slug
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
    `);

export const useStackQuery = <
      TData = StackQuery,
      TError = unknown
    >(
      variables: StackQueryVariables,
      options?: Omit<UseQueryOptions<StackQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StackQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StackQuery, TError, TData>(
      {
    queryKey: ['Stack', variables],
    queryFn: graphqlFetch<StackQuery, StackQueryVariables>(StackDocument, variables),
    ...options
  }
    )};

useStackQuery.getKey = (variables: StackQueryVariables) => ['Stack', variables];

export const useSuspenseStackQuery = <
      TData = StackQuery,
      TError = unknown
    >(
      variables: StackQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<StackQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<StackQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<StackQuery, TError, TData>(
      {
    queryKey: ['Stack', variables],
    queryFn: graphqlFetch<StackQuery, StackQueryVariables>(StackDocument, variables),
    ...options
  }
    )};

useSuspenseStackQuery.getKey = (variables: StackQueryVariables) => ['Stack', variables];

export const useInfiniteStackQuery = <
      TData = InfiniteData<StackQuery>,
      TError = unknown
    >(
      variables: StackQueryVariables,
      options: Omit<UseInfiniteQueryOptions<StackQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<StackQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<StackQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Stack.infinite', variables],
      queryFn: (metaData) => graphqlFetch<StackQuery, StackQueryVariables>(StackDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteStackQuery.getKey = (variables: StackQueryVariables) => ['Stack.infinite', variables];

export const useSuspenseInfiniteStackQuery = <
      TData = InfiniteData<StackQuery>,
      TError = unknown
    >(
      variables: StackQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<StackQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<StackQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<StackQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Stack.infinite', variables],
      queryFn: (metaData) => graphqlFetch<StackQuery, StackQueryVariables>(StackDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteStackQuery.getKey = (variables: StackQueryVariables) => ['Stack.infinite', variables];


useStackQuery.fetcher = (variables: StackQueryVariables, options?: RequestInit['headers']) => graphqlFetch<StackQuery, StackQueryVariables>(StackDocument, variables, options);

export const StacksDocument = new TypedDocumentString(`
    query Stacks($ownerSlug: String!, $repoSlug: String!) {
  stacks(
    filter: {repository: {slug: {equalTo: $repoSlug}, or: [{owner: {username: {equalTo: $ownerSlug}}}, {organization: {slug: {equalTo: $ownerSlug}}}, {organization: {idpOrganizationId: {equalTo: $ownerSlug}}}]}}
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
    `);

export const useStacksQuery = <
      TData = StacksQuery,
      TError = unknown
    >(
      variables: StacksQueryVariables,
      options?: Omit<UseQueryOptions<StacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StacksQuery, TError, TData>(
      {
    queryKey: ['Stacks', variables],
    queryFn: graphqlFetch<StacksQuery, StacksQueryVariables>(StacksDocument, variables),
    ...options
  }
    )};

useStacksQuery.getKey = (variables: StacksQueryVariables) => ['Stacks', variables];

export const useSuspenseStacksQuery = <
      TData = StacksQuery,
      TError = unknown
    >(
      variables: StacksQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<StacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<StacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<StacksQuery, TError, TData>(
      {
    queryKey: ['Stacks', variables],
    queryFn: graphqlFetch<StacksQuery, StacksQueryVariables>(StacksDocument, variables),
    ...options
  }
    )};

useSuspenseStacksQuery.getKey = (variables: StacksQueryVariables) => ['Stacks', variables];

export const useInfiniteStacksQuery = <
      TData = InfiniteData<StacksQuery>,
      TError = unknown
    >(
      variables: StacksQueryVariables,
      options: Omit<UseInfiniteQueryOptions<StacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<StacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<StacksQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Stacks.infinite', variables],
      queryFn: (metaData) => graphqlFetch<StacksQuery, StacksQueryVariables>(StacksDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteStacksQuery.getKey = (variables: StacksQueryVariables) => ['Stacks.infinite', variables];

export const useSuspenseInfiniteStacksQuery = <
      TData = InfiniteData<StacksQuery>,
      TError = unknown
    >(
      variables: StacksQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<StacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<StacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<StacksQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Stacks.infinite', variables],
      queryFn: (metaData) => graphqlFetch<StacksQuery, StacksQueryVariables>(StacksDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteStacksQuery.getKey = (variables: StacksQueryVariables) => ['Stacks.infinite', variables];


useStacksQuery.fetcher = (variables: StacksQueryVariables, options?: RequestInit['headers']) => graphqlFetch<StacksQuery, StacksQueryVariables>(StacksDocument, variables, options);

export const MyTesterApplicationDocument = new TypedDocumentString(`
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
    `);

export const useMyTesterApplicationQuery = <
      TData = MyTesterApplicationQuery,
      TError = unknown
    >(
      variables?: MyTesterApplicationQueryVariables,
      options?: Omit<UseQueryOptions<MyTesterApplicationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MyTesterApplicationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MyTesterApplicationQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['MyTesterApplication'] : ['MyTesterApplication', variables],
    queryFn: graphqlFetch<MyTesterApplicationQuery, MyTesterApplicationQueryVariables>(MyTesterApplicationDocument, variables),
    ...options
  }
    )};

useMyTesterApplicationQuery.getKey = (variables?: MyTesterApplicationQueryVariables) => variables === undefined ? ['MyTesterApplication'] : ['MyTesterApplication', variables];

export const useSuspenseMyTesterApplicationQuery = <
      TData = MyTesterApplicationQuery,
      TError = unknown
    >(
      variables?: MyTesterApplicationQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<MyTesterApplicationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<MyTesterApplicationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<MyTesterApplicationQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['MyTesterApplication'] : ['MyTesterApplication', variables],
    queryFn: graphqlFetch<MyTesterApplicationQuery, MyTesterApplicationQueryVariables>(MyTesterApplicationDocument, variables),
    ...options
  }
    )};

useSuspenseMyTesterApplicationQuery.getKey = (variables?: MyTesterApplicationQueryVariables) => variables === undefined ? ['MyTesterApplication'] : ['MyTesterApplication', variables];

export const useInfiniteMyTesterApplicationQuery = <
      TData = InfiniteData<MyTesterApplicationQuery>,
      TError = unknown
    >(
      variables: MyTesterApplicationQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MyTesterApplicationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MyTesterApplicationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MyTesterApplicationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['MyTesterApplication.infinite'] : ['MyTesterApplication.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MyTesterApplicationQuery, MyTesterApplicationQueryVariables>(MyTesterApplicationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMyTesterApplicationQuery.getKey = (variables?: MyTesterApplicationQueryVariables) => variables === undefined ? ['MyTesterApplication.infinite'] : ['MyTesterApplication.infinite', variables];

export const useSuspenseInfiniteMyTesterApplicationQuery = <
      TData = InfiniteData<MyTesterApplicationQuery>,
      TError = unknown
    >(
      variables: MyTesterApplicationQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<MyTesterApplicationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<MyTesterApplicationQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<MyTesterApplicationQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['MyTesterApplication.infinite'] : ['MyTesterApplication.infinite', variables],
      queryFn: (metaData) => graphqlFetch<MyTesterApplicationQuery, MyTesterApplicationQueryVariables>(MyTesterApplicationDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteMyTesterApplicationQuery.getKey = (variables?: MyTesterApplicationQueryVariables) => variables === undefined ? ['MyTesterApplication.infinite'] : ['MyTesterApplication.infinite', variables];


useMyTesterApplicationQuery.fetcher = (variables?: MyTesterApplicationQueryVariables, options?: RequestInit['headers']) => graphqlFetch<MyTesterApplicationQuery, MyTesterApplicationQueryVariables>(MyTesterApplicationDocument, variables, options);

export const ObserverDocument = new TypedDocumentString(`
    query Observer {
  observer {
    rowId
  }
}
    `);

export const useObserverQuery = <
      TData = ObserverQuery,
      TError = unknown
    >(
      variables?: ObserverQueryVariables,
      options?: Omit<UseQueryOptions<ObserverQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ObserverQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ObserverQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Observer'] : ['Observer', variables],
    queryFn: graphqlFetch<ObserverQuery, ObserverQueryVariables>(ObserverDocument, variables),
    ...options
  }
    )};

useObserverQuery.getKey = (variables?: ObserverQueryVariables) => variables === undefined ? ['Observer'] : ['Observer', variables];

export const useSuspenseObserverQuery = <
      TData = ObserverQuery,
      TError = unknown
    >(
      variables?: ObserverQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ObserverQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ObserverQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ObserverQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Observer'] : ['Observer', variables],
    queryFn: graphqlFetch<ObserverQuery, ObserverQueryVariables>(ObserverDocument, variables),
    ...options
  }
    )};

useSuspenseObserverQuery.getKey = (variables?: ObserverQueryVariables) => variables === undefined ? ['Observer'] : ['Observer', variables];

export const useInfiniteObserverQuery = <
      TData = InfiniteData<ObserverQuery>,
      TError = unknown
    >(
      variables: ObserverQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ObserverQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ObserverQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ObserverQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Observer.infinite'] : ['Observer.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ObserverQuery, ObserverQueryVariables>(ObserverDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteObserverQuery.getKey = (variables?: ObserverQueryVariables) => variables === undefined ? ['Observer.infinite'] : ['Observer.infinite', variables];

export const useSuspenseInfiniteObserverQuery = <
      TData = InfiniteData<ObserverQuery>,
      TError = unknown
    >(
      variables: ObserverQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ObserverQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ObserverQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ObserverQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Observer.infinite'] : ['Observer.infinite', variables],
      queryFn: (metaData) => graphqlFetch<ObserverQuery, ObserverQueryVariables>(ObserverDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteObserverQuery.getKey = (variables?: ObserverQueryVariables) => variables === undefined ? ['Observer.infinite'] : ['Observer.infinite', variables];


useObserverQuery.fetcher = (variables?: ObserverQueryVariables, options?: RequestInit['headers']) => graphqlFetch<ObserverQuery, ObserverQueryVariables>(ObserverDocument, variables, options);

export const PullRequestCommentChangedDocument = new TypedDocumentString(`
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
    `);