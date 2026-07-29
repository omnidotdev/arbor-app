import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, KeyRound, Trash2, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PersonalAccessTokenPermission,
  useCreatePersonalAccessTokenMutation,
  useDeletePersonalAccessTokenMutation,
  useRepositoriesQuery,
} from "@/generated/graphql";
import personalAccessTokensOptions from "@/lib/options/personalAccessTokens.options";

export const Route = createFileRoute("/_app/settings/tokens")({
  component: TokensPage,
});

/** Upper bound on repositories offered in the scope picker */
const REPOSITORY_PICKER_LIMIT = 100;

/** Format a nullable ISO datetime for display, or a fallback when absent */
const formatDate = (value: Date | string | null | undefined) => {
  if (!value) return null;
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function TokensPage() {
  const queryClient = useQueryClient();
  const { session } = Route.useRouteContext();

  const tokensQuery = useQuery(personalAccessTokensOptions());
  const tokens = tokensQuery.data?.personalAccessTokens?.nodes ?? [];

  // Create form state
  const [name, setName] = useState("");
  const [expiresInDays, setExpiresInDays] = useState("");
  const [permission, setPermission] = useState<"read" | "write">("write");
  // Empty means the token is not confined and reaches every repository its
  // owner can reach, which matches how the API reads an empty whitelist
  const [scopedRepositoryIds, setScopedRepositoryIds] = useState<string[]>([]);
  const [createError, setCreateError] = useState<string | null>(null);
  // The plaintext token is returned exactly once by the API. Hold it in local
  // state only for the one-time display, never persist it anywhere
  const [newToken, setNewToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Two-step confirm for revoke, keyed by token row id
  const [confirmingRevoke, setConfirmingRevoke] = useState<string | null>(null);

  const invalidateTokens = () =>
    queryClient.invalidateQueries({
      queryKey: personalAccessTokensOptions().queryKey,
    });

  // Repositories the user can confine a token to
  const repositoriesQuery = useQuery({
    queryKey: useRepositoriesQuery.getKey({
      userId: session!.user.rowId!,
      limit: REPOSITORY_PICKER_LIMIT,
    }),
    queryFn: useRepositoriesQuery.fetcher({
      userId: session!.user.rowId!,
      limit: REPOSITORY_PICKER_LIMIT,
    }),
  });
  const selectableRepositories =
    repositoriesQuery.data?.repositories?.nodes ?? [];

  const toggleRepository = (rowId: string) =>
    setScopedRepositoryIds((current) =>
      current.includes(rowId)
        ? current.filter((id) => id !== rowId)
        : [...current, rowId],
    );

  const createMutation = useMutation({
    mutationKey: useCreatePersonalAccessTokenMutation.getKey(),
    mutationFn: (variables: {
      name: string;
      expiresInDays?: number;
      permission: PersonalAccessTokenPermission;
      repositoryIds?: string[];
    }) => useCreatePersonalAccessTokenMutation.fetcher(variables)(),
    onSuccess: (result) => {
      const token = result.createPersonalAccessToken?.token;
      if (!token) {
        setCreateError("Unable to create token. Please try again.");
        return;
      }
      setCreateError(null);
      setNewToken(token);
      setCopied(false);
      setName("");
      setExpiresInDays("");
      setPermission("write");
      setScopedRepositoryIds([]);
      invalidateTokens();
    },
    onError: () => {
      // Avoid leaking internal error detail to the UI
      setCreateError("Unable to create token. Please try again.");
    },
  });

  const deleteMutation = useMutation({
    mutationKey: useDeletePersonalAccessTokenMutation.getKey(),
    mutationFn: (rowId: string) =>
      useDeletePersonalAccessTokenMutation.fetcher({ input: { rowId } })(),
    onSuccess: () => {
      setConfirmingRevoke(null);
      invalidateTokens();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    const days = expiresInDays.trim() ? Number(expiresInDays) : undefined;
    createMutation.mutate({
      name: trimmed,
      expiresInDays: days && days > 0 ? days : undefined,
      permission:
        permission === "read"
          ? PersonalAccessTokenPermission.Read
          : PersonalAccessTokenPermission.Write,
      // omit entirely when nothing is selected, so the token stays unconfined
      repositoryIds: scopedRepositoryIds.length
        ? scopedRepositoryIds
        : undefined,
    });
  };

  const copyToken = async () => {
    if (!newToken) return;
    try {
      await navigator.clipboard.writeText(newToken);
      setCopied(true);
      toast.success("Token copied to clipboard");
    } catch {
      // Clipboard access can be denied; leave the token visible so the user
      // can still copy it manually
      toast.error("Couldn't copy the token, copy it manually");
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="flex items-center gap-2 font-bold text-2xl">
          <KeyRound className="h-6 w-6 text-primary" />
          Personal access tokens
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Use a personal access token as your password when cloning or pushing
          over HTTPS. Your username stays the same; the token replaces your
          password.
        </p>
      </div>

      <div className="space-y-8">
        {/* One-time token reveal */}
        {newToken && (
          <section className="space-y-3 rounded-lg border border-primary/50 bg-primary/5 p-6">
            <div className="flex items-start gap-2">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold text-lg">Copy your new token</h2>
                <p className="text-muted-foreground text-sm">
                  Copy this now. You will not be able to see it again.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <code className="min-w-0 flex-1 break-all rounded bg-muted px-3 py-2 font-mono text-sm">
                {newToken}
              </code>
              <Button variant="outline" size="sm" onClick={copyToken}>
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setNewToken(null);
                setCopied(false);
              }}
            >
              I have copied my token
            </Button>
          </section>
        )}

        {/* Create */}
        <section className="space-y-4 rounded-lg border p-6">
          <div>
            <h2 className="font-semibold text-lg">Generate new token</h2>
            <p className="text-muted-foreground text-sm">
              Give the token a name so you can recognize it later.
            </p>
          </div>

          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label
                htmlFor="token-name"
                className="mb-1.5 block font-medium text-sm"
              >
                Token name
              </label>
              <Input
                id="token-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. laptop"
                maxLength={255}
              />
            </div>

            <div>
              <label
                htmlFor="token-expiry"
                className="mb-1.5 block font-medium text-sm"
              >
                Expiration (days)
              </label>
              <Input
                id="token-expiry"
                type="number"
                min={1}
                value={expiresInDays}
                onChange={(e) => setExpiresInDays(e.target.value)}
                placeholder="Leave blank to never expire"
                className="max-w-xs"
              />
              <p className="mt-1 text-muted-foreground text-xs">
                Optional. Leave blank for a token that never expires.
              </p>
            </div>

            <fieldset>
              <legend className="mb-1.5 block font-medium text-sm">
                Access
              </legend>
              <div className="flex flex-wrap gap-4">
                {(
                  [
                    {
                      value: "write",
                      label: "Read and write",
                      hint: "Clone, fetch, and push",
                    },
                    {
                      value: "read",
                      label: "Read only",
                      hint: "Clone and fetch, no pushing",
                    },
                  ] as const
                ).map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start gap-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="token-permission"
                      className="mt-1"
                      value={option.value}
                      checked={permission === option.value}
                      onChange={() => setPermission(option.value)}
                    />
                    <span>
                      <span className="font-medium">{option.label}</span>
                      <span className="block text-muted-foreground text-xs">
                        {option.hint}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-1.5 block font-medium text-sm">
                Repository access
              </legend>
              <p className="mb-2 text-muted-foreground text-xs">
                {scopedRepositoryIds.length === 0
                  ? "All repositories you can reach. Select repositories below to limit this token to them."
                  : `Limited to ${scopedRepositoryIds.length} ${
                      scopedRepositoryIds.length === 1
                        ? "repository"
                        : "repositories"
                    }.`}
              </p>

              {repositoriesQuery.isLoading ? (
                <p className="text-muted-foreground text-sm">
                  Loading repositories...
                </p>
              ) : selectableRepositories.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No repositories yet.
                </p>
              ) : (
                <div className="max-h-48 space-y-1 overflow-y-auto rounded-md border p-2">
                  {selectableRepositories.map((repository) => (
                    <label
                      key={repository.rowId}
                      className="flex items-center gap-2 rounded px-1 py-0.5 text-sm hover:bg-muted"
                    >
                      <input
                        type="checkbox"
                        checked={scopedRepositoryIds.includes(repository.rowId)}
                        onChange={() => toggleRepository(repository.rowId)}
                      />
                      <span className="truncate">
                        {repository.owner?.username}/{repository.slug}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {scopedRepositoryIds.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => setScopedRepositoryIds([])}
                >
                  Clear selection
                </Button>
              )}
            </fieldset>

            {createError && (
              <p className="text-destructive text-sm">{createError}</p>
            )}

            <Button
              type="submit"
              disabled={createMutation.isPending || !name.trim()}
            >
              {createMutation.isPending ? "Generating..." : "Generate token"}
            </Button>
          </form>
        </section>

        {/* List */}
        <section className="space-y-4 rounded-lg border p-6">
          <h2 className="font-semibold text-lg">Active tokens</h2>

          {tokensQuery.isLoading ? (
            <p className="text-muted-foreground text-sm">Loading tokens...</p>
          ) : tokens.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <KeyRound className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 font-medium text-sm">No tokens yet</p>
              <p className="mt-1 text-muted-foreground text-sm">
                Generate a token above to clone or push over HTTPS.
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {tokens.map((token) => {
                const expires = formatDate(token.expiresAt);
                const lastUsed = formatDate(token.lastUsedAt);
                const created = formatDate(token.createdAt);
                const isConfirming = confirmingRevoke === token.rowId;
                const confinedCount =
                  token.personalAccessTokenRepositories?.totalCount ?? 0;

                return (
                  <li
                    key={token.rowId}
                    className="flex flex-wrap items-start justify-between gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="break-words font-medium text-sm">
                        {token.name}
                      </p>
                      <code className="break-all font-mono text-muted-foreground text-xs">
                        {token.tokenPrefix}
                      </code>
                      <div className="mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="rounded border px-1.5 py-0.5 text-xs">
                          {token.permission === "read"
                            ? "Read only"
                            : "Read and write"}
                        </span>
                        <span className="rounded border px-1.5 py-0.5 text-xs">
                          {confinedCount === 0
                            ? "All repositories"
                            : `${confinedCount} ${
                                confinedCount === 1
                                  ? "repository"
                                  : "repositories"
                              }`}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-muted-foreground text-xs">
                        {created && <span>Created {created}</span>}
                        <span>Last used {lastUsed ? lastUsed : "never"}</span>
                        <span>
                          {expires ? `Expires ${expires}` : "No expiration"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isConfirming ? (
                        <>
                          <Button
                            variant="destructive"
                            size="sm"
                            disabled={deleteMutation.isPending}
                            onClick={() => deleteMutation.mutate(token.rowId)}
                          >
                            {deleteMutation.isPending
                              ? "Revoking..."
                              : "Confirm revoke"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={deleteMutation.isPending}
                            onClick={() => setConfirmingRevoke(null)}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => setConfirmingRevoke(token.rowId)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Revoke
                        </Button>
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
