import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/@{$workspaceSlug}")({
  component: WorkspaceLayout,
});

/**
 * Workspace layout. Wraps every route under the workspace handle
 * (`/@{workspaceSlug}/`), including the workspace home, its repositories, and
 * each repository's sub-pages.
 */
function WorkspaceLayout() {
  return <Outlet />;
}
