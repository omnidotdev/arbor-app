// @ts-nocheck
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { GraphQLClient, type RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
      slug
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
        slug
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
        slug
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
          slug
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
    `;
export const OrganizationDocument = gql`
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
    `;
export const OrganizationsDocument = gql`
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
        slug
      }
    }
  }
}
    `;
export const ProjectBySlugDocument = gql`
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
    `;
export const PullRequestFilesDocument = gql`
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
    `;
export const PullRequestsDocument = gql`
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
    `;
export const CommitDetailDocument = gql`
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
    `;
export const CommitFileDiffDocument = gql`
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
    `;
export const MovedRepositoryDocument = gql`
    query MovedRepository($ownerSlug: String!, $repoSlug: String!) {
  movedRepository(ownerSlug: $ownerSlug, repoSlug: $repoSlug) {
    ownerSlug
    repoSlug
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
        slug
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
    `;
export const RepositoryWithBranchesDocument = gql`
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
    `;
export const TransferRepositoryDocument = gql`
    mutation TransferRepository($input: TransferRepositoryInput!) {
  transferRepository(input: $input) {
    slug
    ownerUsername
    organizationSlug
    error
  }
}
    `;
export const WorkspaceRepositoriesDocument = gql`
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
    `;
export const MergeQueueEntriesDocument = gql`
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
    `;
export const StacksDocument = gql`
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
    MovedRepository(variables: MovedRepositoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MovedRepositoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MovedRepositoryQuery>({ document: MovedRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'MovedRepository', 'query', variables);
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
    TransferRepository(variables: TransferRepositoryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<TransferRepositoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TransferRepositoryMutation>({ document: TransferRepositoryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'TransferRepository', 'mutation', variables);
    },
    WorkspaceRepositories(variables: WorkspaceRepositoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<WorkspaceRepositoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WorkspaceRepositoriesQuery>({ document: WorkspaceRepositoriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'WorkspaceRepositories', 'query', variables);
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