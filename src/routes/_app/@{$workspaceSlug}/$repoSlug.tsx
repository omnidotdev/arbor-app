import { Outlet, createFileRoute } from "@tanstack/react-router";

import { BASE_URL } from "@/lib/config/env.config";
import createMetaTags from "@/lib/util/createMetaTags";

export const Route = createFileRoute("/_app/@{$workspaceSlug}/$repoSlug")({
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
