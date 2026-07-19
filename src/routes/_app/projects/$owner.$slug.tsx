import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Boxes,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Network,
} from "lucide-react";

import { ProjectGraphView } from "@/components/graph";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/config/env.config";
import projectBySlugOptions from "@/lib/options/projectBySlug.options";
import createMetaTags from "@/lib/util/createMetaTags";
import { pluralize } from "@/lib/util/pluralize";

import type { ProjectGraphRepository } from "@/components/graph";

export const Route = createFileRoute("/_app/projects/$owner/$slug")({
  head: ({ params }) => ({
    meta: [
      ...createMetaTags({
        title: `${params.owner}/${params.slug}`,
        description: "Project on Arbor",
        url: `${BASE_URL}/projects/${params.owner}/${params.slug}`,
      }),
    ],
  }),
  component: ProjectDetailPage,
});

/** Resolve the owner slug (org id or username) for a related repository */
function repoOwnerSlug(repo: {
  owner?: { username: string } | null;
  organization?: { idpOrganizationId: string } | null;
}) {
  return repo.organization?.idpOrganizationId ?? repo.owner?.username ?? "";
}

function ProjectDetailPage() {
  const { owner, slug } = Route.useParams();

  const { data, isLoading } = useQuery(
    projectBySlugOptions({ ownerSlug: owner, slug }),
  );

  const project = data?.projects?.nodes?.[0];

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          Loading project...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="rounded-lg border bg-card p-8 text-center">
          <Boxes className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 font-semibold text-xl">Project not found</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            This project does not exist or you do not have access to it.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const members = project.projectRepositories?.nodes ?? [];
  const memberRepos = members
    .map((member) => member.repository)
    .filter((repo): repo is NonNullable<typeof repo> => Boolean(repo));

  // Map member repositories to graph nodes; edges are drawn from outgoing
  // relationships whose target is also a member of this project
  const graphRepositories: ProjectGraphRepository[] = memberRepos.map(
    (repo) => ({
      rowId: repo.rowId,
      name: repo.name,
      slug: repo.slug,
      visibility: repo.visibility,
      owner: repo.owner,
      organization: repo.organization,
      outgoingRelationships: repo.outgoingRelationships?.nodes ?? [],
    }),
  );

  // The set of repositories that belong to this project, for scoping "used by"
  const memberIds = new Set(memberRepos.map((repo) => repo.rowId));

  // Reverse dependencies: incoming relationships whose source is NOT a member
  // of this project, i.e. external consumers of the project's repositories
  const usedBy = memberRepos.flatMap((repo) =>
    (repo.incomingRelationships?.nodes ?? [])
      .filter(
        (rel) =>
          rel.sourceRepository && !memberIds.has(rel.sourceRepository.rowId),
      )
      .map((rel) => ({
        key: rel.rowId,
        consumer: rel.sourceRepository!,
        target: repo,
        relationshipType: rel.relationshipType?.name ?? "dependency",
        versionConstraint: rel.versionConstraint,
      })),
  );

  const projectOwner = repoOwnerSlug(project);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/projects"
          className="mb-3 inline-flex items-center text-muted-foreground text-sm hover:text-foreground"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Projects
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="min-w-0 break-words font-bold text-2xl">
            <Link
              to="/projects"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              {projectOwner}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span>{project.name}</span>
          </h1>
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
          <p className="mt-2 text-muted-foreground">{project.description}</p>
        )}
        <div className="mt-3 flex items-center gap-2 text-muted-foreground text-sm">
          <Boxes className="h-4 w-4" />
          {memberRepos.length}{" "}
          {pluralize(memberRepos.length, "repository", "repositories")}
        </div>
      </div>

      {/* Dependency graph */}
      <div className="mb-8">
        <h2 className="mb-3 flex items-center gap-2 font-semibold text-lg">
          <Network className="h-5 w-5" />
          Dependency graph
        </h2>
        <ProjectGraphView repositories={graphRepositories} />
        <p className="mt-2 text-muted-foreground text-xs">
          Nodes are this project's repositories. Edges are dependency
          relationships between them. Arrows point from a repository to the one
          it depends on.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Member repositories */}
        <div className="lg:col-span-2">
          <h2 className="mb-3 flex items-center gap-2 font-semibold text-lg">
            <Layers className="h-5 w-5" />
            Repositories
          </h2>
          {memberRepos.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground text-sm">
              No repositories have been added to this project yet.
            </div>
          ) : (
            <div className="space-y-3">
              {memberRepos.map((repo) => {
                const repoOwner = repoOwnerSlug(repo);
                // A repository that belongs to more than one project is a
                // shared library across projects
                const sharedIn = repo.memberships?.totalCount ?? 0;

                return (
                  <div
                    key={repo.rowId}
                    className="rounded-lg border bg-card p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to="/repositories/$owner/$repo"
                        params={{ owner: repoOwner, repo: repo.slug }}
                        className="break-all font-medium text-primary-600 hover:underline dark:text-primary-400"
                      >
                        {repoOwner}/{repo.name}
                      </Link>
                      {repo.visibility === "private" ? (
                        <Lock className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Globe className="h-3 w-3 text-muted-foreground" />
                      )}
                      {sharedIn > 1 && (
                        <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-2 py-0.5 text-primary-700 text-xs dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                          <Layers className="mr-1 h-3 w-3" />
                          Shared: in {sharedIn} {pluralize(sharedIn, "project")}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-muted-foreground text-xs">
                      <GitBranch className="h-3 w-3" />
                      {(repo.outgoingRelationships?.nodes ?? []).length}{" "}
                      outgoing{" "}
                      {pluralize(
                        (repo.outgoingRelationships?.nodes ?? []).length,
                        "dependency",
                        "dependencies",
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Reverse dependencies */}
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-semibold text-lg">
            <Network className="h-5 w-5" />
            Used by
          </h2>
          {usedBy.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground text-sm">
              No repositories outside this project depend on its repositories.
            </div>
          ) : (
            <div className="space-y-3">
              {usedBy.map((entry) => {
                const consumerOwner = repoOwnerSlug(entry.consumer);
                const targetOwner = repoOwnerSlug(entry.target);

                return (
                  <div
                    key={entry.key}
                    className="rounded-lg border bg-card p-3 text-sm"
                  >
                    <Link
                      to="/repositories/$owner/$repo"
                      params={{
                        owner: consumerOwner,
                        repo: entry.consumer.slug,
                      }}
                      className="break-all font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      {consumerOwner}/{entry.consumer.name}
                    </Link>
                    <p className="mt-1 text-muted-foreground text-xs">
                      {entry.relationshipType}
                      {entry.versionConstraint
                        ? ` ${entry.versionConstraint}`
                        : ""}{" "}
                      on{" "}
                      <Link
                        to="/repositories/$owner/$repo"
                        params={{ owner: targetOwner, repo: entry.target.slug }}
                        className="text-primary-600 hover:underline dark:text-primary-400"
                      >
                        {entry.target.name}
                      </Link>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
