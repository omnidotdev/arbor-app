/**
 * Query options for a project looked up by owner and project slug.
 */

import { queryOptions } from "@tanstack/react-query";

import { useProjectBySlugQuery } from "@/generated/graphql";

import type { ProjectBySlugQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a single project by its owner slug (user username
 * or organization id) and project slug, including its member repositories and
 * their dependency relationships.
 */
const projectBySlugOptions = (variables: ProjectBySlugQueryVariables) =>
  queryOptions({
    queryKey: useProjectBySlugQuery.getKey(variables),
    queryFn: useProjectBySlugQuery.fetcher(variables),
  });

export default projectBySlugOptions;
