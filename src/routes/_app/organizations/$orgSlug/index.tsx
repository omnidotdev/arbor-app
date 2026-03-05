import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  ExternalLink,
  GitBranch,
  MessageSquare,
  Moon,
  Network,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_app/organizations/$orgSlug/")({
  component: OrganizationDetailPage,
});

function OrganizationDetailPage() {
  const { orgSlug } = Route.useParams();

  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
            <Building2 className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-3xl">{orgSlug}</h1>
            <p className="text-muted-foreground">Organization dashboard</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Repositories</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Manage organization repositories
          </p>
          <Button className="mt-4" variant="outline" size="sm">
            View Repositories
          </Button>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Members</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Manage team members and roles
          </p>
          <Button className="mt-4" variant="outline" size="sm">
            Manage Members
          </Button>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Settings</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Organization settings and billing
          </p>
          <Button className="mt-4" variant="outline" size="sm">
            Settings
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="font-semibold text-lg">Integrations</h2>
          <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground text-xs">
            Coming Soon
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://runa.omni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-dashed bg-card/50 p-4 transition-colors hover:border-solid hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Runa</h3>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Project management for repositories with kanban boards and sprints
            </p>
          </a>

          <a
            href="https://backfeed.omni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-dashed bg-card/50 p-4 transition-colors hover:border-solid hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Backfeed</h3>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Issues and discussions for repositories
            </p>
          </a>

          <a
            href="https://eden.omni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-dashed bg-card/50 p-4 transition-colors hover:border-solid hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Eden</h3>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Automated onboarding preflight checks from repository config
            </p>
          </a>

          <a
            href="https://weaver.omni.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-dashed bg-card/50 p-4 transition-colors hover:border-solid hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Network className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Weaver</h3>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Visual polyrepo management powered by Arbor repositories
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
