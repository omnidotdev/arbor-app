/**
 * Query options for a single stack with its ordered changes and each change's
 * verification checks.
 */

import { queryOptions } from "@tanstack/react-query";

import { useStackQuery } from "@/generated/graphql";

import type { StackQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a stack by its `rowId`, including its changes
 * (ordered bottom-up by position) and the verification checks on each change.
 */
const stackOptions = (variables: StackQueryVariables) =>
  queryOptions({
    queryKey: useStackQuery.getKey(variables),
    queryFn: useStackQuery.fetcher(variables),
  });

export default stackOptions;
