import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  GitBranch,
  Globe,
  List,
  Lock,
  Network,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { GraphView } from "@/components/graph";
import {
  CreateRepositoryDialog,
  DeleteRepositoryDialog,
} from "@/components/repository";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useDeleteRepositoryMutation,
  useOrganizationsQuery,
  useRepositoriesQuery,
} from "@/generated/graphql";
import { graphqlFetch } from "@/lib/graphql/graphqlFetch";

const searchSchema = z.object({
  owner: z.string().optional(),
});

export const Route = createFileRoute("/_auth/repositories/")({
  validateSearch: searchSchema,
  component: RepositoriesPage,
});

function RepositoriesPage() {
  const { session } = Route.useRouteContext();
  const { owner: ownerFilter } = Route.useSearch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState<"list" | "graph">("list");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    rowId: string;
    name: string;
    owner: string;
  } | null>(null);

  const { data } = useSuspenseQuery({
    queryKey: useRepositoriesQuery.getKey({
      userId: session!.user.rowId!,
      limit: 100,
    }),
    queryFn: useRepositoriesQuery.fetcher({
      userId: session!.user.rowId!,
      limit: 100,
    }),
  });

  const { data: orgsData } = useSuspenseQuery({
    queryKey: useOrganizationsQuery.getKey({ limit: 50 }),
    queryFn: useOrganizationsQuery.fetcher({ limit: 50 }),
  });

  const organizations =
    orgsData?.organizations?.nodes?.map((org) => ({
      rowId: org.rowId,
      name: org.idpOrganizationId,
      slug: org.idpOrganizationId,
    })) ?? [];

  const createMutation = useMutation({
    mutationKey: ["CreateRepositoryWithGit"],
    mutationFn: (input: {
      name: string;
      description: string;
      visibility: "public" | "private";
      organizationId?: string;
    }) =>
      graphqlFetch<
        {
          createRepositoryWithGit: {
            rowId: string | null;
            slug: string | null;
            ownerUsername: string | null;
            organizationSlug: string | null;
            error: string | null;
          };
        },
        {
          input: {
            name: string;
            slug: string;
            description: string | null;
            visibility: "public" | "private";
            organizationId: string | null;
          };
        }
      >(
        `mutation CreateRepositoryWithGit($input: CreateRepositoryWithGitInput!) {
          createRepositoryWithGit(input: $input) {
            rowId
            slug
            ownerUsername
            organizationSlug
            error
          }
        }`,
        {
          input: {
            name: input.name,
            slug: input.name
              .toLowerCase()
              .replace(/[^a-z0-9-]/g, "-")
              .replace(/-+/g, "-")
              .replace(/^-|-$/g, ""),
            description: input.description || null,
            visibility: input.visibility,
            organizationId: input.organizationId || null,
          },
        },
      )(),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: useRepositoriesQuery.getKey({
          userId: session!.user.rowId!,
          limit: 100,
        }),
      });
      setIsCreateDialogOpen(false);

      const data = result.createRepositoryWithGit;
      if (data?.slug) {
        const owner = data.organizationSlug ?? data.ownerUsername ?? "";
        navigate({
          to: "/repositories/$owner/$repo",
          params: { owner, repo: data.slug },
        });
      }
    },
  });

  const deleteMutation = useMutation({
    mutationKey: useDeleteRepositoryMutation.getKey(),
    mutationFn: (rowId: string) =>
      useDeleteRepositoryMutation.fetcher({
        input: { rowId },
      })(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: useRepositoriesQuery.getKey({
          userId: session!.user.rowId!,
          limit: 100,
        }),
      });
      setDeleteTarget(null);
    },
  });

  const repositories = data?.repositories?.nodes ?? [];

  const filteredRepositories = repositories.filter((repo) => {
    // Filter by owner if specified in URL
    if (ownerFilter) {
      const repoOwner =
        repo.organization?.idpOrganizationId ?? repo.owner?.username ?? "";
      if (repoOwner.toLowerCase() !== ownerFilter.toLowerCase()) {
        return false;
      }
    }

    // Filter by search query
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      repo.name.toLowerCase().includes(query) ||
      repo.description?.toLowerCase().includes(query) ||
      repo.owner?.username?.toLowerCase().includes(query)
    );
  });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6 space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-3xl">
            {ownerFilter
              ? `${ownerFilter}'s Repositories`
              : "Your Repositories"}
          </h1>
          {ownerFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: "/repositories" })}
              className="text-muted-foreground"
            >
              <X className="mr-1 h-4 w-4" />
              Clear filter
            </Button>
          )}
        </div>
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
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Repository
          </Button>
        </div>
      </div>

      {viewType === "graph" ? (
        <GraphView />
      ) : (
        <div className="space-y-4">
          {filteredRepositories.length === 0 ? (
            <div className="rounded-lg border bg-card p-8 text-center">
              <GitBranch className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 font-semibold text-lg">
                No repositories yet
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Create your first repository to get started.
              </p>
              <Button
                className="mt-4"
                onClick={() => setIsCreateDialogOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Repository
              </Button>
            </div>
          ) : (
            filteredRepositories.map((repo) => (
              <div key={repo.rowId} className="rounded-lg border bg-card p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        to="/repositories/$owner/$repo"
                        params={{
                          owner:
                            repo.organization?.idpOrganizationId ??
                            repo.owner?.username ??
                            "",
                          repo: repo.slug,
                        }}
                        className="font-semibold text-xl hover:underline"
                      >
                        {repo.organization?.idpOrganizationId ??
                          repo.owner?.username}
                        /{repo.name}
                      </Link>
                      {repo.visibility === "private" ? (
                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                          <Lock className="mr-1 h-3 w-3" />
                          Private
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                          <Globe className="mr-1 h-3 w-3" />
                          Public
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="text-muted-foreground text-sm">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() =>
                      setDeleteTarget({
                        rowId: repo.rowId,
                        name: repo.name,
                        owner:
                          repo.organization?.idpOrganizationId ??
                          repo.owner?.username ??
                          "",
                      })
                    }
                  >
                    Delete
                  </Button>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <GitBranch className="mr-1 h-4 w-4" />
                    {repo.defaultBranch}
                  </div>
                  <div>Updated {formatDate(repo.updatedAt)}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <CreateRepositoryDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreate={(data) => createMutation.mutate(data)}
        organizations={organizations}
        isCreating={createMutation.isPending}
      />

      {deleteTarget && (
        <DeleteRepositoryDialog
          isOpen={!!deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onDelete={() => deleteMutation.mutate(deleteTarget.rowId)}
          repositoryName={deleteTarget.name}
          ownerName={deleteTarget.owner}
          isDeleting={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
