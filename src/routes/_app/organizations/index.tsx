import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Building2, GitBranch, Plus, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useOrganizationsQuery } from "@/generated/graphql";

export const Route = createFileRoute("/_app/organizations/")({
  component: OrganizationsPage,
});

function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useSuspenseQuery({
    queryKey: useOrganizationsQuery.getKey({ limit: 100 }),
    queryFn: useOrganizationsQuery.fetcher({ limit: 100 }),
  });

  const organizations = data?.organizations?.nodes ?? [];

  const filteredOrganizations = organizations.filter((org) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      org.idpOrganizationId.toLowerCase().includes(query) ||
      org.description?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container mx-auto max-w-5xl px-6 py-6">
      <div className="mb-6 space-y-4">
        <h1 className="font-bold text-3xl">Your Organizations</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Find an organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Organization
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrganizations.length === 0 ? (
          <div className="rounded-lg border bg-card p-8 text-center">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-semibold text-lg">No organizations yet</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Create an organization to collaborate with your team.
            </p>
            <Button className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Create Organization
            </Button>
          </div>
        ) : (
          filteredOrganizations.map((org) => (
            <div key={org.rowId} className="rounded-lg border bg-card p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {org.avatarUrl ? (
                    <img
                      src={org.avatarUrl}
                      alt={org.idpOrganizationId}
                      className="h-12 w-12 rounded-lg"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <Building2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        to="/organizations/$orgSlug"
                        params={{ orgSlug: org.idpOrganizationId }}
                        className="font-semibold text-xl hover:underline"
                      >
                        {org.idpOrganizationId}
                      </Link>
                    </div>
                    {org.description && (
                      <p className="text-muted-foreground text-sm">
                        {org.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4 text-muted-foreground text-sm">
                <div className="flex items-center">
                  <GitBranch className="mr-1 h-4 w-4" />
                  {org.repositories?.totalCount ?? 0} repositories
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
