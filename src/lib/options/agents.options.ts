/**
 * Query options for the list of agents registered by a user or organization.
 */

import { queryOptions } from "@tanstack/react-query";

import { useAgentsQuery } from "@/generated/graphql";

import type { AgentsQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching agents owned by a user (and optionally an
 * organization), ordered by most recently created.
 */
const agentsOptions = (variables: AgentsQueryVariables) =>
  queryOptions({
    queryKey: useAgentsQuery.getKey(variables),
    queryFn: useAgentsQuery.fetcher(variables),
  });

export default agentsOptions;
