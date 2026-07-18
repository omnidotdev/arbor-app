/**
 * Query options for a repository looked up by owner and repo slug.
 */

import { queryOptions } from "@tanstack/react-query";

import { useRepositoryBySlugQuery } from "@/generated/graphql";

import type { RepositoryBySlugQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a single repository by its owner slug (user
 * username or organization id) and repo slug.
 */
const repositoryBySlugOptions = (variables: RepositoryBySlugQueryVariables) =>
  queryOptions({
    queryKey: useRepositoryBySlugQuery.getKey(variables),
    queryFn: useRepositoryBySlugQuery.fetcher(variables),
  });

export default repositoryBySlugOptions;
