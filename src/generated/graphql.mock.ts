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
 * mockCreateRepositoryMutation(
 *   ({ query, variables }) => {
 *     const { input } = variables;
 *     return HttpResponse.json({
 *       data: { createRepository }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateRepositoryMutation = (resolver: GraphQLResponseResolver<Types.CreateRepositoryMutation, Types.CreateRepositoryMutationVariables>, options?: RequestHandlerOptions) =>
  graphql.mutation<Types.CreateRepositoryMutation, Types.CreateRepositoryMutationVariables>(
    'CreateRepository',
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
 *     const { rowId, userId } = variables;
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
 *     const { userId, limit } = variables;
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
 * mockRepositoryQuery(
 *   ({ query, variables }) => {
 *     const { rowId } = variables;
 *     return HttpResponse.json({
 *       data: { repository }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRepositoryQuery = (resolver: GraphQLResponseResolver<Types.RepositoryQuery, Types.RepositoryQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.RepositoryQuery, Types.RepositoryQueryVariables>(
    'Repository',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserByIdentityProviderIdQuery(
 *   ({ query, variables }) => {
 *     const { identityProviderId } = variables;
 *     return HttpResponse.json({
 *       data: { userByIdentityProviderId }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUserByIdentityProviderIdQuery = (resolver: GraphQLResponseResolver<Types.UserByIdentityProviderIdQuery, Types.UserByIdentityProviderIdQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<Types.UserByIdentityProviderIdQuery, Types.UserByIdentityProviderIdQueryVariables>(
    'UserByIdentityProviderId',
    resolver,
    options
  )
