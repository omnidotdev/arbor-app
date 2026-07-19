/**
 * Query options for the list of projects owned by a user or organization.
 */

import { queryOptions } from "@tanstack/react-query";

import { useProjectsQuery } from "@/generated/graphql";

import type { ProjectsQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching projects owned by a user (and optionally an
 * organization), ordered by most recently updated.
 */
const projectsOptions = (variables: ProjectsQueryVariables) =>
  queryOptions({
    queryKey: useProjectsQuery.getKey(variables),
    queryFn: useProjectsQuery.fetcher(variables),
  });

export default projectsOptions;
