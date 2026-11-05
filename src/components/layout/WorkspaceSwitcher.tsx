import {
  useOrganization as useWorkspace,
  workspacesUrl,
} from "@omnidotdev/providers/react";
import { WorkspaceSwitcher as SharedWorkspaceSwitcher } from "@omnidotdev/thornberry/workspace-switcher";
import { useNavigate, useParams } from "@tanstack/react-router";

import { ACCOUNT_URL } from "@/lib/config/env.config";

/**
 * Workspace (organization) switcher for the sidebar header.
 *
 * Membership comes from the shared organization context (JWT claims, not a DB
 * query). Selecting a workspace updates the in-memory selection and navigates
 * to that workspace's slug, which re-scopes the app. Presentation is the shared
 * thornberry switcher: a single-workspace user sees their name without a
 * dropdown, and managing workspaces is delegated to the account hub workspaces
 * console.
 */
const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceSlug } = useParams({ strict: false });
  const orgContext = useWorkspace();

  if (!orgContext) return null;
  const { workspaces } = orgContext;

  // On a workspace page the slug wins; otherwise fall back to the context's
  // current selection, then the first workspace, so the trigger always
  // reflects something sensible
  const current =
    (workspaceSlug
      ? workspaces.find((org) => org.slug === workspaceSlug)
      : orgContext.currentWorkspace) ?? workspaces[0];
  if (!current) return null;

  const handleSelect = (id: string) => {
    const next = workspaces.find((org) => org.id === id);
    if (!next || next.id === current.id) return;
    orgContext.setCurrentWorkspace(next.id);
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
      {...(ACCOUNT_URL && {
        manageUrl: workspacesUrl(ACCOUNT_URL),
      })}
    />
  );
};

export default WorkspaceSwitcher;
