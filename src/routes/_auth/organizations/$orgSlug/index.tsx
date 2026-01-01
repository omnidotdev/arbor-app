import { createFileRoute } from "@tanstack/react-router";
import { Building2, GitBranch, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/organizations/$orgSlug/")({
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
    </div>
  );
}
