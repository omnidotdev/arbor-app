import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Boxes, Globe, Lock, Plus, Search } from "lucide-react";
import { useState } from "react";

import { CreateProjectDialog } from "@/components/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Visibility,
  useCreateProjectMutation,
  useOrganizationsQuery,
} from "@/generated/graphql";
import projectsOptions from "@/lib/options/projects.options";
import { pluralize } from "@/lib/util/pluralize";

export const Route = createFileRoute("/_app/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const { session } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const projectsQueryVariables = {
    userId: session!.user.rowId!,
    limit: 100,
  };

  const { data } = useSuspenseQuery(projectsOptions(projectsQueryVariables));

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
    mutationKey: useCreateProjectMutation.getKey(),
    mutationFn: (input: {
      name: string;
      description: string;
      visibility: "public" | "private";
      organizationId?: string;
    }) =>
      useCreateProjectMutation.fetcher({
        input: {
          project: {
            ownerId: session!.user.rowId!,
            name: input.name,
            slug: input.name
              .toLowerCase()
              .replace(/[^a-z0-9-]/g, "-")
              .replace(/-+/g, "-")
              .replace(/^-|-$/g, ""),
            description: input.description || null,
            visibility:
              input.visibility === "public"
                ? Visibility.Public
                : Visibility.Private,
            organizationId: input.organizationId || null,
          },
        },
      })(),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: projectsOptions(projectsQueryVariables).queryKey,
      });
      setIsCreateDialogOpen(false);

      const project = result.createProject?.project;
      if (project?.slug) {
        const owner =
          project.organization?.idpOrganizationId ??
          project.owner?.username ??
          "";
        navigate({
          to: "/@{$workspaceSlug}/projects/$projectSlug",
          params: { workspaceSlug: owner, projectSlug: project.slug },
        });
      }
    },
  });

  const projects = data?.projects?.nodes ?? [];

  const filteredProjects = projects.filter((project) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(query) ||
      project.description?.toLowerCase().includes(query) ||
      project.owner?.username?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="min-w-0 break-words font-bold text-3xl">
            Your Projects
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Group related repositories together and visualize how they depend on
          one another.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1 basis-full sm:basis-auto">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Find a project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <Button size="sm" onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="rounded-lg border bg-card p-8 text-center">
            <Boxes className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-semibold text-lg">No projects yet</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Create your first project to group repositories together.
            </p>
            <Button
              className="mt-4"
              onClick={() => setIsCreateDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        ) : (
          filteredProjects.map((project) => {
            const owner =
              project.organization?.idpOrganizationId ??
              project.owner?.username ??
              "";
            const repoCount = project.projectRepositories?.totalCount ?? 0;

            return (
              <div
                key={project.rowId}
                className="rounded-lg border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to="/@{$workspaceSlug}/projects/$projectSlug"
                        params={{
                          workspaceSlug: owner,
                          projectSlug: project.slug,
                        }}
                        className="break-all font-semibold text-xl hover:underline"
                      >
                        {owner}/{project.name}
                      </Link>
                      {project.visibility === "private" ? (
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
                    {project.description && (
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <Boxes className="mr-1 h-4 w-4" />
                    {repoCount}{" "}
                    {pluralize(repoCount, "repository", "repositories")}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <CreateProjectDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreate={(input) => createMutation.mutate(input)}
        organizations={organizations}
        isCreating={createMutation.isPending}
      />
    </div>
  );
}
