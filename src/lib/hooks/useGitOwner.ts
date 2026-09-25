import { useQuery } from "@tanstack/react-query";

import repositoryBySlugOptions from "@/lib/options/repositoryBySlug.options";

/**
 * Resolve a repository's git owner (the owning user's username) from the URL
 * workspace slug.
 *
 * Git storage is addressed by the owning user's username, even for an
 * organization repository (resolveRepositorySummary joins repository.ownerId to
 * user.username), so the `@workspace` slug in the URL does not resolve on the
 * git side. Every `/git/:owner/:repo` REST call must use this instead. Returns
 * undefined until the repository row resolves; callers gate their git queries on
 * it. Backed by the shared RepositoryBySlug cache, so it adds no extra request
 * on a page that already reads that repository.
 */
export const useGitOwner = (
  ownerSlug: string,
  repoSlug: string,
): string | undefined => {
  const { data } = useQuery(repositoryBySlugOptions({ ownerSlug, repoSlug }));
  return data?.repositories?.nodes?.[0]?.owner?.username;
};
