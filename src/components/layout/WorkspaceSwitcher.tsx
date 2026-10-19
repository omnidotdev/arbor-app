import {
  gatekeeperDashboardUrl,
  useOrganization as useWorkspace,
} from "@omnidotdev/providers/react";
import { WorkspaceSwitcher as SharedWorkspaceSwitcher } from "@omnidotdev/thornberry/workspace-switcher";
import { useNavigate, useParams } from "@tanstack/react-router";

import { AUTH_BASE_URL } from "@/lib/config/env.config";

/**
 * Workspace (organization) switcher for the sidebar header.
 *
 * Membership comes from the shared organization context (JWT claims, not a DB
 * query). Selecting a workspace updates the in-memory selection and navigates
 * to that workspace's slug, which re-scopes the app. Presentation is the shared
 * thornberry switcher: a single-workspace user sees their name without a
 * dropdown, and managing workspaces is delegated to the identity dashboard.
 */
const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceSlug } = useParams({ strict: false });
  const orgContext = useWorkspace();

  if (!orgContext) return null;
  const { organizations: workspaces } = orgContext;

  // On a workspace page the slug wins; otherwise fall back to the context's
  // current selection, then the first workspace, so the trigger always
  // reflects something sensible
  const current =
    (workspaceSlug
      ? workspaces.find((org) => org.slug === workspaceSlug)
      : orgContext.currentOrganization) ?? workspaces[0];
  if (!current) return null;

  const handleSelect = (id: string) => {
    const next = workspaces.find((org) => org.id === id);
    if (!next || next.id === current.id) return;
    orgContext.setCurrentOrganization(next.id);
    navigate({
      to: "/@{$workspaceSlug}",
      params: { workspaceSlug: next.slug ?? next.id },
    });
  };

  return (
    <SharedWorkspaceSwitcher
      variant="sidebar"
      workspaces={workspaces.map((org) => ({
        id: org.id,
        name: org.name,
        logo: org.logo,
      }))}
      currentWorkspaceId={current.id}
      onSelect={handleSelect}
      {...(AUTH_BASE_URL && {
        manageUrl: gatekeeperDashboardUrl(AUTH_BASE_URL),
      })}
    />
  );
};

export default WorkspaceSwitcher;
