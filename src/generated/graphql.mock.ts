// @ts-nocheck
import * as Types from './generated';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateOrganizationMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createOrganization }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateOrganizationMutation = (resolver: GraphQLResponseResolver<Types.CreateOrganizationMutation, Types.CreateOrganizationMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreateOrganizationMutation, Types.CreateOrganizationMutationVariables>(
    'CreateOrganization',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreatePersonalAccessTokenMutation(
 *   ({ query, variables }) => {
 *     const { name, expiresInDays, permission, repositoryIds, repositoryScopes } = variables;
 *     return HttpResponse.json({
 *       data: { createPersonalAccessToken }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreatePersonalAccessTokenMutation = (resolver: GraphQLResponseResolver<Types.CreatePersonalAccessTokenMutation, Types.CreatePersonalAccessTokenMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreatePersonalAccessTokenMutation, Types.CreatePersonalAccessTokenMutationVariables>(
    'CreatePersonalAccessToken',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeletePersonalAccessTokenMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { deletePersonalAccessToken }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeletePersonalAccessTokenMutation = (resolver: GraphQLResponseResolver<Types.DeletePersonalAccessTokenMutation, Types.DeletePersonalAccessTokenMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.DeletePersonalAccessTokenMutation, Types.DeletePersonalAccessTokenMutationVariables>(
    'DeletePersonalAccessToken',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreatePullRequestCommentMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createPullRequestComment }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreatePullRequestCommentMutation = (resolver: GraphQLResponseResolver<Types.CreatePullRequestCommentMutation, Types.CreatePullRequestCommentMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreatePullRequestCommentMutation, Types.CreatePullRequestCommentMutationVariables>(
    'CreatePullRequestComment',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreatePullRequestReviewMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createPullRequestReview }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreatePullRequestReviewMutation = (resolver: GraphQLResponseResolver<Types.CreatePullRequestReviewMutation, Types.CreatePullRequestReviewMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreatePullRequestReviewMutation, Types.CreatePullRequestReviewMutationVariables>(
    'CreatePullRequestReview',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeletePullRequestCommentMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { deletePullRequestComment }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeletePullRequestCommentMutation = (resolver: GraphQLResponseResolver<Types.DeletePullRequestCommentMutation, Types.DeletePullRequestCommentMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.DeletePullRequestCommentMutation, Types.DeletePullRequestCommentMutationVariables>(
    'DeletePullRequestComment',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockOpenPullRequestMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { openPullRequest }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockOpenPullRequestMutation = (resolver: GraphQLResponseResolver<Types.OpenPullRequestMutation, Types.OpenPullRequestMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.OpenPullRequestMutation, Types.OpenPullRequestMutationVariables>(
    'OpenPullRequest',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdatePullRequestCommentMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { updatePullRequestComment }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUpdatePullRequestCommentMutation = (resolver: GraphQLResponseResolver<Types.UpdatePullRequestCommentMutation, Types.UpdatePullRequestCommentMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.UpdatePullRequestCommentMutation, Types.UpdatePullRequestCommentMutationVariables>(
    'UpdatePullRequestComment',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteRepositoryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { deleteRepository }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeleteRepositoryMutation = (resolver: GraphQLResponseResolver<Types.DeleteRepositoryMutation, Types.DeleteRepositoryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.DeleteRepositoryMutation, Types.DeleteRepositoryMutationVariables>(
    'DeleteRepository',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRenameRepositoryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { renameRepository }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRenameRepositoryMutation = (resolver: GraphQLResponseResolver<Types.RenameRepositoryMutation, Types.RenameRepositoryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.RenameRepositoryMutation, Types.RenameRepositoryMutationVariables>(
    'RenameRepository',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateRepositoryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { updateRepository }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUpdateRepositoryMutation = (resolver: GraphQLResponseResolver<Types.UpdateRepositoryMutation, Types.UpdateRepositoryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.UpdateRepositoryMutation, Types.UpdateRepositoryMutationVariables>(
    'UpdateRepository',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateStackMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createStack }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateStackMutation = (resolver: GraphQLResponseResolver<Types.CreateStackMutation, Types.CreateStackMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreateStackMutation, Types.CreateStackMutationVariables>(
    'CreateStack',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMergeChangeMutation(
 *   ({ query, variables }) => {
 *     const { changeId } = variables;
 *     return HttpResponse.json({
 *       data: { mergeChange }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockMergeChangeMutation = (resolver: GraphQLResponseResolver<Types.MergeChangeMutation, Types.MergeChangeMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.MergeChangeMutation, Types.MergeChangeMutationVariables>(
    'MergeChange',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockAgentsQuery(
 *   ({ query, variables }) => {
 *     const { userId, organizationId, limit } = variables;
 *     return HttpResponse.json({
 *       data: { agents }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockAgentsQuery = (resolver: GraphQLResponseResolver<Types.AgentsQuery, Types.AgentsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.AgentsQuery, Types.AgentsQueryVariables>(
    'Agents',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateAgentMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createAgent }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateAgentMutation = (resolver: GraphQLResponseResolver<Types.CreateAgentMutation, Types.CreateAgentMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreateAgentMutation, Types.CreateAgentMutationVariables>(
    'CreateAgent',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRepositoryGraphQuery(
 *   ({ query, variables }) => {
 *     const { userId, organizationId } = variables;
 *     return HttpResponse.json({
 *       data: { repositories, repositoryRelationshipTypes }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRepositoryGraphQuery = (resolver: GraphQLResponseResolver<Types.RepositoryGraphQuery, Types.RepositoryGraphQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.RepositoryGraphQuery, Types.RepositoryGraphQueryVariables>(
    'RepositoryGraph',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockOrganizationQuery(
 *   ({ query, variables }) => {
 *     const { rowId } = variables;
 *     return HttpResponse.json({
 *       data: { organization }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockOrganizationQuery = (resolver: GraphQLResponseResolver<Types.OrganizationQuery, Types.OrganizationQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.OrganizationQuery, Types.OrganizationQueryVariables>(
    'Organization',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockOrganizationsQuery(
 *   ({ query, variables }) => {
 *     const { limit } = variables;
 *     return HttpResponse.json({
 *       data: { organizations }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockOrganizationsQuery = (resolver: GraphQLResponseResolver<Types.OrganizationsQuery, Types.OrganizationsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.OrganizationsQuery, Types.OrganizationsQueryVariables>(
    'Organizations',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPersonalAccessTokensQuery(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { personalAccessTokens }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPersonalAccessTokensQuery = (resolver: GraphQLResponseResolver<Types.PersonalAccessTokensQuery, Types.PersonalAccessTokensQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.PersonalAccessTokensQuery, Types.PersonalAccessTokensQueryVariables>(
    'PersonalAccessTokens',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateProjectMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createProject }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateProjectMutation = (resolver: GraphQLResponseResolver<Types.CreateProjectMutation, Types.CreateProjectMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreateProjectMutation, Types.CreateProjectMutationVariables>(
    'CreateProject',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockProjectBySlugQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, slug } = variables;
 *     return HttpResponse.json({
 *       data: { projects }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockProjectBySlugQuery = (resolver: GraphQLResponseResolver<Types.ProjectBySlugQuery, Types.ProjectBySlugQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.ProjectBySlugQuery, Types.ProjectBySlugQueryVariables>(
    'ProjectBySlug',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockProjectsQuery(
 *   ({ query, variables }) => {
 *     const { userId, organizationId, limit } = variables;
 *     return HttpResponse.json({
 *       data: { projects }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockProjectsQuery = (resolver: GraphQLResponseResolver<Types.ProjectsQuery, Types.ProjectsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.ProjectsQuery, Types.ProjectsQueryVariables>(
    'Projects',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPullRequestConversationQuery(
 *   ({ query, variables }) => {
 *     const { pullRequestId } = variables;
 *     return HttpResponse.json({
 *       data: { pullRequestComments, pullRequestReviews }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPullRequestConversationQuery = (resolver: GraphQLResponseResolver<Types.PullRequestConversationQuery, Types.PullRequestConversationQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.PullRequestConversationQuery, Types.PullRequestConversationQueryVariables>(
    'PullRequestConversation',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPullRequestFileDiffQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug, number, path } = variables;
 *     return HttpResponse.json({
 *       data: { pullRequests }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPullRequestFileDiffQuery = (resolver: GraphQLResponseResolver<Types.PullRequestFileDiffQuery, Types.PullRequestFileDiffQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.PullRequestFileDiffQuery, Types.PullRequestFileDiffQueryVariables>(
    'PullRequestFileDiff',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPullRequestFilesQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug, number } = variables;
 *     return HttpResponse.json({
 *       data: { pullRequests }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPullRequestFilesQuery = (resolver: GraphQLResponseResolver<Types.PullRequestFilesQuery, Types.PullRequestFilesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.PullRequestFilesQuery, Types.PullRequestFilesQueryVariables>(
    'PullRequestFiles',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPullRequestsQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug } = variables;
 *     return HttpResponse.json({
 *       data: { pullRequests }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPullRequestsQuery = (resolver: GraphQLResponseResolver<Types.PullRequestsQuery, Types.PullRequestsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.PullRequestsQuery, Types.PullRequestsQueryVariables>(
    'PullRequests',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCommitDetailQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug, oid } = variables;
 *     return HttpResponse.json({
 *       data: { repositories }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCommitDetailQuery = (resolver: GraphQLResponseResolver<Types.CommitDetailQuery, Types.CommitDetailQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.CommitDetailQuery, Types.CommitDetailQueryVariables>(
    'CommitDetail',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCommitFileDiffQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug, oid, path } = variables;
 *     return HttpResponse.json({
 *       data: { repositories }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCommitFileDiffQuery = (resolver: GraphQLResponseResolver<Types.CommitFileDiffQuery, Types.CommitFileDiffQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.CommitFileDiffQuery, Types.CommitFileDiffQueryVariables>(
    'CommitFileDiff',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRepositoriesQuery(
 *   ({ query, variables }) => {
 *     const { userId, limit } = variables;
 *     return HttpResponse.json({
 *       data: { repositories }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRepositoriesQuery = (resolver: GraphQLResponseResolver<Types.RepositoriesQuery, Types.RepositoriesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.RepositoriesQuery, Types.RepositoriesQueryVariables>(
    'Repositories',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRepositoryBySlugQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug } = variables;
 *     return HttpResponse.json({
 *       data: { repositories }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRepositoryBySlugQuery = (resolver: GraphQLResponseResolver<Types.RepositoryBySlugQuery, Types.RepositoryBySlugQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.RepositoryBySlugQuery, Types.RepositoryBySlugQueryVariables>(
    'RepositoryBySlug',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRepositoryWithBranchesQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug } = variables;
 *     return HttpResponse.json({
 *       data: { repositories }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRepositoryWithBranchesQuery = (resolver: GraphQLResponseResolver<Types.RepositoryWithBranchesQuery, Types.RepositoryWithBranchesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.RepositoryWithBranchesQuery, Types.RepositoryWithBranchesQueryVariables>(
    'RepositoryWithBranches',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMergeQueueEntriesQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug } = variables;
 *     return HttpResponse.json({
 *       data: { mergeQueueEntries }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockMergeQueueEntriesQuery = (resolver: GraphQLResponseResolver<Types.MergeQueueEntriesQuery, Types.MergeQueueEntriesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.MergeQueueEntriesQuery, Types.MergeQueueEntriesQueryVariables>(
    'MergeQueueEntries',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStackQuery(
 *   ({ query, variables }) => {
 *     const { rowId } = variables;
 *     return HttpResponse.json({
 *       data: { stack }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockStackQuery = (resolver: GraphQLResponseResolver<Types.StackQuery, Types.StackQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.StackQuery, Types.StackQueryVariables>(
    'Stack',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStacksQuery(
 *   ({ query, variables }) => {
 *     const { ownerSlug, repoSlug } = variables;
 *     return HttpResponse.json({
 *       data: { stacks }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockStacksQuery = (resolver: GraphQLResponseResolver<Types.StacksQuery, Types.StacksQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.StacksQuery, Types.StacksQueryVariables>(
    'Stacks',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockObserverQuery(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { observer }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockObserverQuery = (resolver: GraphQLResponseResolver<Types.ObserverQuery, Types.ObserverQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.ObserverQuery, Types.ObserverQueryVariables>(
    'Observer',
    resolver,
    options
  )

