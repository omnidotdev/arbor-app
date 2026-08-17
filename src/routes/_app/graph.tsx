import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Filter, Network, RefreshCw } from "lucide-react";
import { useState } from "react";

import { GraphView } from "@/components/graph";
import { Button } from "@/components/ui/button";
import { useRepositoryGraphQuery } from "@/generated/graphql";
import { pluralize } from "@/lib/util/pluralize";

export const Route = createFileRoute("/_app/graph")({
  component: GraphPage,
});

function GraphPage() {
  const { session } = Route.useRouteContext();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: useRepositoryGraphQuery.getKey({
      userId: session!.user.rowId!,
    }),
    queryFn: useRepositoryGraphQuery.fetcher({
      userId: session!.user.rowId!,
    }),
  });

  const repositories = data?.repositories?.nodes ?? [];
  const relationshipTypes = data?.repositoryRelationshipTypes?.nodes ?? [];

  const toggleType = (typeName: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeName)
        ? prev.filter((t) => t !== typeName)
        : [...prev, typeName],
    );
  };

  const clearFilters = () => {
    setSelectedTypes([]);
  };

  // Count relationships by type
  const relationshipCounts = repositories.reduce(
    (acc, repo) => {
      const rels = repo.outgoingRelationships?.nodes ?? [];
      rels.forEach((rel) => {
        const typeName = rel.relationshipType?.name ?? "unknown";
        acc[typeName] = (acc[typeName] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  const totalRelationships = Object.values(relationshipCounts).reduce(
    (a, b) => a + b,
    0,
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="font-bold text-3xl">Repository Graph</h1>
            <p className="mt-1 text-muted-foreground">
              Visualize relationships between your repositories
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            disabled={isRefetching}
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isRefetching ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm">
          <div className="rounded-lg bg-muted px-3 py-1.5">
            <span className="font-medium">{repositories.length}</span>{" "}
            <span className="text-muted-foreground">
              {pluralize(repositories.length, "repository", "repositories")}
            </span>
          </div>
          <div className="rounded-lg bg-muted px-3 py-1.5">
            <span className="font-medium">{totalRelationships}</span>{" "}
            <span className="text-muted-foreground">
              {pluralize(totalRelationships, "relationship")}
            </span>
          </div>
        </div>

        {/* Filters */}
        {relationshipTypes.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Filter className="h-4 w-4" />
              <span>Filter by type:</span>
            </div>
            {relationshipTypes.map((type) => (
              <Button
                key={type.rowId}
                variant={
                  selectedTypes.includes(type.name) ? "default" : "outline"
                }
                size="sm"
                onClick={() => toggleType(type.name)}
              >
                {type.name}
                {relationshipCounts[type.name] && (
                  <span className="ml-1.5 rounded-full bg-background/20 px-1.5 text-xs">
                    {relationshipCounts[type.name]}
                  </span>
                )}
              </Button>
            ))}
            {selectedTypes.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex h-150 items-center justify-center rounded-lg border bg-card">
          <div className="text-center">
            <Network className="mx-auto h-12 w-12 animate-pulse text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Loading graph...</p>
          </div>
        </div>
      ) : (
        <GraphView
          repositories={repositories}
          selectedTypes={selectedTypes.length > 0 ? selectedTypes : undefined}
        />
      )}

      {/* Legend */}
      <div className="mt-6 rounded-lg border bg-card p-4">
        <h3 className="mb-3 font-semibold text-sm">Relationship Types</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-blue-500" />
            <span className="text-sm">dependency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-green-500" />
            <span className="text-sm">api-consumer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-purple-500" />
            <span className="text-sm">data-producer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-orange-500" />
            <span className="text-sm">shared-library</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-red-500" />
            <span className="text-sm">deployment-dependency</span>
          </div>
        </div>
        <p className="mt-3 text-muted-foreground text-xs">
          Edge thickness indicates relationship confidence. Arrows indicate
          directed relationships.
        </p>
      </div>
    </div>
  );
}
