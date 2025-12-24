import { Link, createFileRoute } from "@tanstack/react-router";
import { GitBranch, List, Network, Search, Star } from "lucide-react";
import { useState } from "react";

import { GraphView } from "@/components/graph";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/repositories")({
  component: RepositoriesPage,
});

const repositories = [
  {
    owner: "example",
    name: "project-one",
    description: "A sample repository to demonstrate the UI",
    stars: 128,
    lastUpdated: "2024-03-20",
  },
  {
    owner: "demo",
    name: "awesome-app",
    description: "Another example repository with some sample content",
    stars: 256,
    lastUpdated: "2024-03-19",
  },
];

function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState<"list" | "graph">("list");
  const [starredRepos, setStarredRepos] = useState<Set<string>>(new Set());

  const toggleStar = (owner: string, name: string) => {
    const repoKey = `${owner}/${name}`;
    setStarredRepos((prev) => {
      const next = new Set(prev);
      if (next.has(repoKey)) {
        next.delete(repoKey);
      } else {
        next.add(repoKey);
      }
      return next;
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6 space-y-4">
        <h1 className="font-bold text-3xl">Your Repositories</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Find a repository..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="space-x-2">
            <Button
              variant={viewType === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("list")}
            >
              <List className="mr-2 h-4 w-4" />
              List View
            </Button>
            <Button
              variant={viewType === "graph" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("graph")}
            >
              <Network className="mr-2 h-4 w-4" />
              Graph View
            </Button>
          </div>
          <Button>
            <GitBranch className="mr-2 h-4 w-4" />
            New
          </Button>
        </div>
      </div>

      {viewType === "graph" ? (
        <GraphView />
      ) : (
        <div className="space-y-4">
          {repositories.map((repo) => (
            <div
              key={`${repo.owner}/${repo.name}`}
              className="rounded-lg border bg-card p-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Link
                    to="/repositories/$owner/$repo"
                    params={{ owner: repo.owner, repo: repo.name }}
                    className="font-semibold text-xl hover:underline"
                  >
                    {repo.owner}/{repo.name}
                  </Link>
                  <p className="text-muted-foreground text-sm">
                    {repo.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleStar(repo.owner, repo.name)}
                >
                  <Star
                    className={`mr-2 h-4 w-4 ${
                      starredRepos.has(`${repo.owner}/${repo.name}`)
                        ? "fill-primary"
                        : ""
                    }`}
                  />
                  {starredRepos.has(`${repo.owner}/${repo.name}`)
                    ? "Starred"
                    : "Star"}
                </Button>
              </div>
              <div className="mt-4 flex items-center space-x-4 text-muted-foreground text-sm">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4" />
                  {repo.stars}
                </div>
                <div>Updated {repo.lastUpdated}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
