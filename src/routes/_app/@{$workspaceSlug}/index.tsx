import { ManageTeamLink, useOrganization } from "@omnidotdev/providers/react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@omnidotdev/thornberry/avatar";
import { Badge } from "@omnidotdev/thornberry/badge";
import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ExternalLink,
  GitBranch,
  MessageSquare,
  Moon,
  Network,
  Settings,
  Sprout,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AUTH_BASE_URL, CONSOLE_URL } from "@/lib/config/env.config";
import { getOrganizationBySlug } from "@/server/functions/organizations";

export const Route = createFileRoute("/_app/@{$workspaceSlug}/")({
  component: WorkspaceDetailPage,
});

const integrations = [
  {
    href: "https://runa.omni.dev",
    name: "Runa",
    icon: Moon,
    description:
      "Project management for repositories with kanban boards and sprints",
  },
  {
    href: "https://backfeed.omni.dev",
    name: "Backfeed",
    icon: MessageSquare,
    description: "Issues and discussions for repositories",
  },
  {
    href: "https://eden.omni.dev",
    name: "Eden",
    icon: Sprout,
    description: "Automated onboarding preflight checks from repository config",
  },
  {
    href: "https://weaver.omni.dev",
    name: "Weaver",
    icon: Network,
    description: "Visual polyrepo management powered by Arbor repositories",
  },
] as const;

function WorkspaceDetailPage() {
  const { workspaceSlug } = Route.useParams();
  const orgContext = useOrganization();

  const claimWorkspace = orgContext?.organizations.find(
    (org) => org.slug === workspaceSlug || org.id === workspaceSlug,
  );

  // A just-created workspace is not yet in the JWT claims (the org list is
  // hydrated from a short-lived cache), so fall back to a live Gatekeeper
  // lookup until claims catch up. Skipped once the org is present in claims.
  const { data: fallbackWorkspace } = useQuery({
    queryKey: ["workspace-fallback", workspaceSlug],
    queryFn: () => getOrganizationBySlug({ data: { slug: workspaceSlug } }),
    enabled: !claimWorkspace,
  });

  const workspace = claimWorkspace ?? fallbackWorkspace ?? undefined;

  const displayName = workspace?.name ?? workspaceSlug;
  const initial = displayName.trim().charAt(0).toUpperCase() || "?";
  // Billing is per-workspace and lives on the account console
  const billingUrl = CONSOLE_URL ? `${CONSOLE_URL}/billing` : "";

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <AvatarRoot size="xl" className="shrink-0 rounded-xl border">
          {workspace?.logo ? <AvatarImage src={workspace.logo} alt="" /> : null}
          <AvatarFallback className="rounded-xl bg-primary-500/10 font-semibold text-2xl text-primary-600 dark:text-primary-400">
            {initial}
          </AvatarFallback>
        </AvatarRoot>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-bold text-3xl tracking-tight">{displayName}</h1>
            {workspace && (
              <Badge className="border-primary-500/20 bg-primary-500/10 text-primary-600 text-xs capitalize dark:text-primary-400">
                {workspace.type}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground">Workspace dashboard</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-full flex-col rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Repositories</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Browse repositories in this workspace
          </p>
          <Button className="mt-auto" variant="outline" size="sm" asChild>
            <Link to="/repositories">View repositories</Link>
          </Button>
        </div>

        <div className="flex h-full flex-col rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Members</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Membership and roles are managed in your Omni organization settings
          </p>
          {AUTH_BASE_URL && workspaceSlug && (
            <Button className="mt-auto" variant="outline" size="sm" asChild>
              <ManageTeamLink
                identityBaseUrl={AUTH_BASE_URL}
                orgSlug={workspaceSlug}
              >
                Manage members
              </ManageTeamLink>
            </Button>
          )}
        </div>

        <div className="flex h-full flex-col rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Settings</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Organization settings live in Omni; billing lives in your account
          </p>
          <div className="mt-auto flex flex-col gap-2">
            {AUTH_BASE_URL && workspaceSlug && (
              <Button variant="outline" size="sm" asChild>
                <ManageTeamLink
                  identityBaseUrl={AUTH_BASE_URL}
                  orgSlug={workspaceSlug}
                >
                  Workspace settings
                </ManageTeamLink>
              </Button>
            )}
            {billingUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={billingUrl} target="_blank" rel="noopener noreferrer">
                  Billing
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="font-semibold text-lg">Integrations</h2>
          <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground text-xs">
            Coming Soon
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map(({ href, name, icon: Icon, description }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-dashed bg-card/50 p-4 transition-colors hover:border-solid hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-semibold">{name}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-muted-foreground text-sm">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
