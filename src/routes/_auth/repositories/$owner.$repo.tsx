import { createFileRoute } from "@tanstack/react-router";
import { FileText, GitBranch, GitCommit, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_auth/repositories/$owner/$repo")({
  component: RepositoryDetailPage,
});

function RepositoryDetailPage() {
  const { owner, repo } = Route.useParams();

  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6">
        <h1 className="font-bold text-3xl">
          {owner}/{repo}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Repository details and file browser coming soon.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Files</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Browse repository files
          </p>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <GitCommit className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Commits</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            View commit history
          </p>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Branches</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">Manage branches</p>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Collaborators</h3>
          </div>
          <p className="mt-2 text-muted-foreground text-sm">Manage access</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border bg-card p-8 text-center">
        <GitBranch className="mx-auto h-16 w-16 text-muted-foreground" />
        <h2 className="mt-4 font-semibold text-xl">
          Git Operations Coming Soon
        </h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          File browsing, commit history, and branch management will be available
          in a future update. For now, you can manage repository metadata and
          collaborators.
        </p>
        <Button className="mt-4" variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Repository Settings
        </Button>
      </div>
    </div>
  );
}
