import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Network } from "lucide-react";

import { useRepositoryBlastRadiusQuery } from "@/generated/graphql";
import { pluralize } from "@/lib/util/pluralize";

interface RepositoryBlastRadiusPanelProps {
  repositoryId: string;
}

/**
 * Shows the repositories that would be affected by a change to this one (its
 * transitive dependents), nearest first. Renders nothing when there are none,
 * so it stays out of the way for a repository nothing depends on. The API scopes
 * results to what the caller may see.
 */
export function RepositoryBlastRadiusPanel({
  repositoryId,
}: RepositoryBlastRadiusPanelProps) {
  const { data } = useQuery({
    queryKey: useRepositoryBlastRadiusQuery.getKey({ repositoryId }),
    queryFn: useRepositoryBlastRadiusQuery.fetcher({ repositoryId }),
  });

  const affected = data?.repositoryBlastRadius ?? [];
  if (affected.length === 0) return null;

  return (
    <section className="mt-6 rounded-lg border bg-card p-4">
      <h2 className="flex items-center gap-2 font-semibold text-sm">
        <Network className="h-4 w-4" />
        Blast radius
      </h2>
      <p className="mt-1 text-muted-foreground text-xs">
        {affected.length}{" "}
        {pluralize(affected.length, "repository", "repositories")}{" "}
        {affected.length === 1 ? "depends" : "depend"} on this repository,
        directly or transitively.
      </p>
      <ul className="mt-3 space-y-1.5">
        {affected.map((entry) => {
          const entryOwner =
            entry.organizationSlug ?? entry.ownerUsername ?? "";
          return (
            <li
              key={entry.repositoryId}
              className="flex items-center justify-between gap-2 text-sm"
            >
              {entry.slug ? (
                <Link
                  to="/repositories/$owner/$repo"
                  params={{ owner: entryOwner, repo: entry.slug }}
                  className="break-all text-primary-600 hover:underline dark:text-primary-400"
                >
                  {entryOwner}/{entry.name}
                </Link>
              ) : (
                <span className="break-all">
                  {entryOwner}/{entry.name}
                </span>
              )}
              <span className="shrink-0 rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                {entry.depth === 1 ? "direct" : `depth ${entry.depth}`}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
