import {
  gatekeeperDashboardUrl,
  useOrganization,
} from "@omnidotdev/providers/react";
import {
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@omnidotdev/thornberry/menu";
import { SidebarMenuButton } from "@omnidotdev/thornberry/sidebar";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Building2,
  Check,
  ChevronsUpDown,
  LayoutGrid,
  Settings2,
} from "lucide-react";

import { AUTH_BASE_URL } from "@/lib/config/env.config";
import { cn } from "@/lib/utils";

/**
 * Workspace switcher for the sidebar header.
 *
 * Reads the user's workspaces from the shared organization context (sourced
 * from JWT claims, not a DB query) so the list reflects Omni org membership.
 */
const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceSlug } = useParams({ strict: false });
  const orgContext = useOrganization();

  const organizations = orgContext?.organizations ?? [];

  // On a workspace page the slug wins; otherwise fall back to the context's
  // current selection so the trigger always reflects something sensible
  const current = workspaceSlug
    ? organizations.find((org) => org.slug === workspaceSlug)
    : orgContext?.currentOrganization;

  // Org/workspace lifecycle (create, join, list membership) lives on the
  // Gatekeeper identity dashboard, not the account console
  const orgDashboardUrl = AUTH_BASE_URL
    ? gatekeeperDashboardUrl(AUTH_BASE_URL)
    : "";

  // No workspaces: deep-link out to Gatekeeper to create/join one
  if (!organizations.length) {
    return (
      <SidebarMenuButton
        asChild={!!orgDashboardUrl}
        className="border bg-background shadow-xs"
      >
        {orgDashboardUrl ? (
          <a href={orgDashboardUrl}>
            <Building2 className="size-4" />
            <span>Manage workspaces</span>
          </a>
        ) : (
          <span className="text-muted-foreground">No workspaces</span>
        )}
      </SidebarMenuButton>
    );
  }

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <SidebarMenuButton className="border bg-sidebar-accent/60">
          <Building2 className="size-4 shrink-0 text-primary-500" />
          <span className="flex-1 truncate text-left">
            {current?.name ?? "Select workspace"}
          </span>
          <ChevronsUpDown className="size-4 shrink-0 opacity-60" />
        </SidebarMenuButton>
      </MenuTrigger>

      <MenuPositioner className="w-(--reference-width)!">
        <MenuContent className="no-scrollbar flex max-h-80 w-full min-w-56 flex-col gap-0 overflow-auto rounded-lg">
          {organizations.map((org) => {
            const slug = org.slug ?? org.id;
            const isSelected = slug === current?.slug;

            return (
              <MenuItem
                key={org.id}
                value={`workspace:${slug}`}
                onSelect={() => {
                  orgContext?.setCurrentOrganization(org.id);
                  navigate({
                    to: "/@{$workspaceSlug}",
                    params: { workspaceSlug: slug },
                  });
                }}
                className={cn(
                  "gap-2",
                  isSelected && "bg-sidebar-accent font-medium",
                )}
              >
                <Building2 className="size-4 shrink-0 opacity-70" />
                <span className="flex-1 truncate">{org.name}</span>
                {isSelected && (
                  <Check className="size-4 shrink-0 text-primary-500" />
                )}
              </MenuItem>
            );
          })}

          <MenuSeparator />

          <MenuItem
            value="all-workspaces"
            onSelect={() => navigate({ to: "/workspaces" })}
            className="gap-2"
          >
            <LayoutGrid className="size-4 shrink-0 opacity-70" />
            All workspaces
          </MenuItem>

          {orgDashboardUrl && (
            <MenuItem asChild value="manage-workspaces" className="gap-2">
              <a href={orgDashboardUrl}>
                <Settings2 className="size-4 shrink-0 opacity-70" />
                Manage workspaces
              </a>
            </MenuItem>
          )}
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  );
};

export default WorkspaceSwitcher;
