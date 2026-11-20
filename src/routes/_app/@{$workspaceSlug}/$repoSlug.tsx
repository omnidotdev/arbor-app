import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { BASE_URL } from "@/lib/config/env.config";
import movedRepositoryOptions from "@/lib/options/movedRepository.options";
import repositoryBySlugOptions from "@/lib/options/repositoryBySlug.options";
import createMetaTags from "@/lib/util/createMetaTags";
import { movedRepositoryPath } from "@/lib/util/movedRepositoryPath";

export const Route = createFileRoute("/_app/@{$workspaceSlug}/$repoSlug")({
  // A repository that moved to another workspace keeps its old links working:
  // when nothing lives at this path but a repository moved away from it, go
  // to the same page where it lives now (only for callers who may read it)
  beforeLoad: async ({ context: { queryClient }, params, location }) => {
    const here = await queryClient
      .ensureQueryData(
        repositoryBySlugOptions({
          ownerSlug: params.workspaceSlug,
          repoSlug: params.repoSlug,
        }),
      )
      .catch(() => null);
    if (!here || here.repositories?.nodes?.length) return;

    const moved = await queryClient
      .fetchQuery(
        movedRepositoryOptions({
          ownerSlug: params.workspaceSlug,
          repoSlug: params.repoSlug,
        }),
      )
      .catch(() => null);
    const to = moved?.movedRepository;
    if (!to) return;

    throw redirect({
      href: movedRepositoryPath({
        pathname: location.pathname,
        searchStr: location.searchStr,
        from: params,
        to,
      }),
      statusCode: 301,
    });
  },
  head: ({ params }) => ({
    meta: [
      ...createMetaTags({
        title: `${params.workspaceSlug}/${params.repoSlug}`,
        description: "Repository on Arbor",
        image: `${BASE_URL}/api/og/repo/${params.workspaceSlug}/${params.repoSlug}`,
        url: `${BASE_URL}/@${params.workspaceSlug}/${params.repoSlug}`,
      }),
    ],
  }),
  component: RepositoryLayout,
});

/**
 * Repository layout. Wraps the repository home and every repository sub-page
 * (commits, branches, pulls, stacks, merge queue, and admin behind the ~
 * sentinel) so they share the repository's meta tags.
 */
function RepositoryLayout() {
  return <Outlet />;
}
