import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateAgentMutation } from "@/generated/graphql";
import agentsOptions from "@/lib/options/agents.options";

export const Route = createFileRoute("/_app/settings/agents")({
  component: AgentsPage,
});

/** Format a nullable ISO datetime for display, or a fallback when absent */
const formatDate = (value: Date | string | null | undefined) => {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/** Derive a URL-safe slug from a free-form name */
const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function AgentsPage() {
  const { session } = Route.useRouteContext();
  const queryClient = useQueryClient();

  const agentsQueryVariables = {
    userId: session!.user.rowId!,
    limit: 100,
  };

  const agentsQuery = useQuery(agentsOptions(agentsQueryVariables));
  const agents = agentsQuery.data?.agents?.nodes ?? [];

  // Create form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [vendor, setVendor] = useState("");
  const [createError, setCreateError] = useState<string | null>(null);

  const invalidateAgents = () =>
    queryClient.invalidateQueries({
      queryKey: agentsOptions(agentsQueryVariables).queryKey,
    });

  const createMutation = useMutation({
    mutationKey: useCreateAgentMutation.getKey(),
    mutationFn: (variables: {
      name: string;
      description?: string;
      model?: string;
      vendor?: string;
    }) =>
      useCreateAgentMutation.fetcher({
        input: {
          agent: {
            ownerId: session!.user.rowId!,
            name: variables.name,
            slug: slugify(variables.name),
            description: variables.description || null,
            model: variables.model || null,
            vendor: variables.vendor || null,
          },
        },
      })(),
    onSuccess: (result) => {
      if (!result.createAgent?.agent) {
        setCreateError("Unable to register agent. Please try again.");
        return;
      }
      setCreateError(null);
      setName("");
      setDescription("");
      setModel("");
      setVendor("");
      invalidateAgents();
    },
    onError: () => {
      // Avoid leaking internal error detail to the UI
      setCreateError("Unable to register agent. Please try again.");
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    createMutation.mutate({
      name: trimmed,
      description: description.trim() || undefined,
      model: model.trim() || undefined,
      vendor: vendor.trim() || undefined,
    });
  };

  const slug = slugify(name);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="flex items-center gap-2 font-bold text-2xl">
          <Bot className="h-6 w-6 text-primary" />
          Agents
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Register non-human actors so their contributions carry provenance.
          Agents can author pull requests on your behalf, attributed back to the
          account that registered them.
        </p>
      </div>

      <div className="space-y-8">
        {/* Create */}
        <section className="space-y-4 rounded-lg border p-6">
          <div>
            <h2 className="font-semibold text-lg">Register an agent</h2>
            <p className="text-muted-foreground text-sm">
              Give the agent a name; the model and vendor help you tell agents
              apart later.
            </p>
          </div>

          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label
                htmlFor="agent-name"
                className="mb-1.5 block font-medium text-sm"
              >
                Name
              </label>
              <Input
                id="agent-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. release-bot"
                maxLength={255}
              />
              {slug && slug !== name.toLowerCase() && (
                <p className="mt-1 text-muted-foreground text-xs">
                  Will be created as: {slug}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="agent-description"
                className="mb-1.5 block font-medium text-sm"
              >
                Description{" "}
                <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                id="agent-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What this agent does"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="agent-model"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Model{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="agent-model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. opus-4"
                />
              </div>

              <div>
                <label
                  htmlFor="agent-vendor"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Vendor{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="agent-vendor"
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  placeholder="e.g. internal"
                />
              </div>
            </div>

            {createError && (
              <p className="text-destructive text-sm">{createError}</p>
            )}

            <Button
              type="submit"
              disabled={createMutation.isPending || !name.trim()}
            >
              {createMutation.isPending ? "Registering..." : "Register agent"}
            </Button>
          </form>
        </section>

        {/* List */}
        <section className="space-y-4 rounded-lg border p-6">
          <h2 className="font-semibold text-lg">Registered agents</h2>

          {agentsQuery.isLoading ? (
            <p className="text-muted-foreground text-sm">Loading agents...</p>
          ) : agents.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <Bot className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 font-medium text-sm">No agents yet</p>
              <p className="mt-1 text-muted-foreground text-sm">
                Register an agent above to attribute its contributions.
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {agents.map((agent) => {
                const created = formatDate(agent.createdAt);

                return (
                  <li
                    key={agent.rowId}
                    className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="break-words font-medium text-sm">
                          {agent.name}
                        </p>
                        {agent.model && (
                          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                            {agent.model}
                          </span>
                        )}
                        {agent.vendor && (
                          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                            {agent.vendor}
                          </span>
                        )}
                      </div>
                      <code className="break-all font-mono text-muted-foreground text-xs">
                        {agent.slug}
                      </code>
                      {agent.description && (
                        <p className="mt-1 break-words text-muted-foreground text-sm">
                          {agent.description}
                        </p>
                      )}
                      {created && (
                        <div className="mt-1 text-muted-foreground text-xs">
                          <span>Registered {created}</span>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
