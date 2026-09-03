import {
  gatekeeperDashboardUrl,
  useOrganization,
} from "@omnidotdev/providers/react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@omnidotdev/thornberry/avatar";
import { Badge } from "@omnidotdev/thornberry/badge";
import { Link, createFileRoute, useRouteContext } from "@tanstack/react-router";
import { Building2, Search, Users } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CreateWorkspaceButton from "@/components/workspaces/CreateWorkspaceButton";
import signIn from "@/lib/auth/signIn";
import { AUTH_BASE_URL } from "@/lib/config/env.config";
import { signOutLocal } from "@/server/functions/auth";

export const Route = createFileRoute("/_app/workspaces/")({
  component: WorkspacesPage,
});

/** Space out camelCase/snake_case values so CSS `capitalize` renders each word. */
const humanizeLabel = (value: string): string =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function WorkspacesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const orgContext = useOrganization();
  // A degraded session (refresh-token grant failed) is authenticated but has no
  // access token, so organizations came back empty. Without a signal it renders
  // identically to a genuinely workspace-less user; distinguish it so the user
  // gets a re-login prompt instead of a dead-end empty state.
  const { authDegraded } = useRouteContext({ strict: false }) as {
    authDegraded?: boolean;
  };

  const workspaces = orgContext?.organizations ?? [];
  // Workspace membership lifecycle lives on the Gatekeeper identity dashboard
  const manageUrl = AUTH_BASE_URL ? gatekeeperDashboardUrl(AUTH_BASE_URL) : "";

  const filtered = workspaces.filter((workspace) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      workspace.name.toLowerCase().includes(query) ||
      workspace.slug.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <div className="mb-6 space-y-4">
        <div>
          <h1 className="font-bold text-3xl tracking-tight">Workspaces</h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Workspaces are your Omni organizations. Membership is managed in
            your Omni organization settings.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Find a workspace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          {manageUrl && (
            <Button asChild variant="outline">
              <a href={manageUrl} target="_blank" rel="noopener noreferrer">
                Manage workspaces
              </a>
            </Button>
          )}
          {workspaces.length >= 1 && <CreateWorkspaceButton />}
        </div>
      </div>

      {workspaces.length === 0 && authDegraded ? (
        <div className="rounded-lg border bg-card p-8 text-center">
          <Users className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-semibold text-lg">Your session expired</h3>
          <p className="mt-2 text-muted-foreground text-sm">
            We could not refresh your session, so your workspaces could not be
            loaded. Sign in again to restore access.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <Button
              onClick={async () => {
                // The better-auth session is still valid (only the OAuth
                // refresh token is dead), so signing in with an active session
                // just bounces back to the callback without re-authorizing.
                // Clear the local session (and auth cache) first so the OAuth
                // redirect actually fires and mints a fresh token family.
                try {
                  await signOutLocal();
                } catch {
                  // Proceed with re-auth even if local sign-out fails.
                }
                await signIn({ redirectUrl: "/workspaces" });
              }}
            >
              Sign in again
            </Button>
          </div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-lg border bg-card p-8 text-center">
          <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-semibold text-lg">
            {workspaces.length === 0
              ? "No workspaces yet"
              : "No matching workspaces"}
          </h3>
          <p className="mt-2 text-muted-foreground text-sm">
            {workspaces.length === 0
              ? "Create a workspace to get started, or join one from your Omni organization settings to collaborate with your team."
              : "Try a different search."}
          </p>
          {workspaces.length === 0 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <CreateWorkspaceButton />
              {manageUrl && (
                <Button asChild variant="outline">
                  <a href={manageUrl} target="_blank" rel="noopener noreferrer">
                    Go to Omni
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((workspace) => {
            const slug = workspace.slug || workspace.id;
            const initial =
              workspace.name.trim().charAt(0).toUpperCase() || "?";

            return (
              <Link
                key={workspace.id}
                to="/@{$workspaceSlug}"
                params={{ workspaceSlug: slug }}
                className="group flex h-full flex-col rounded-lg border border-glow-hover bg-card p-4 transition"
              >
                <div className="flex flex-1 gap-4">
                  <AvatarRoot size="lg" className="shrink-0 rounded-xl border">
                    {workspace.logo ? (
                      <AvatarImage src={workspace.logo} alt="" />
                    ) : null}
                    <AvatarFallback className="rounded-xl bg-primary-500/10 font-semibold text-lg text-primary-600 dark:text-primary-400">
                      {initial}
                    </AvatarFallback>
                  </AvatarRoot>

                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="truncate font-semibold text-lg group-hover:underline">
                        {workspace.name}
                      </span>
                      <Badge className="border-primary-500/20 bg-primary-500/10 text-primary-600 text-xs capitalize dark:text-primary-400">
                        {humanizeLabel(workspace.type)}
                      </Badge>
                    </div>
                    <p className="truncate text-muted-foreground text-sm">
                      {workspace.slug}
                    </p>
                    {workspace.teams?.length > 0 && (
                      <div className="mt-auto flex items-center gap-1 pt-1 text-muted-foreground text-xs">
                        <Users className="size-3.5" />
                        {workspace.teams.length}{" "}
                        {workspace.teams.length === 1 ? "team" : "teams"}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
