/** Roles that may move a repository out of, or into, a workspace */
const MOVE_ROLES = new Set(["owner", "admin"]);

interface WorkspaceClaim {
  id: string;
  name?: string | null;
  slug?: string | null;
  roles?: string[] | null;
}

/**
 * Whether the user may move a repository out of its workspace, and the
 * workspaces they may move it into. Mirrors the API's rule (an owner or admin
 * of both, or the owner of a personal repository); the API enforces it, this
 * only hides an action that would be refused
 */
export const transferTargets = ({
  organizations,
  currentOrganizationId,
  isOwner,
}: {
  organizations: WorkspaceClaim[];
  /** The repository's workspace, or null for a personal repository */
  currentOrganizationId: string | null;
  isOwner: boolean;
}): {
  canMoveOut: boolean;
  targets: { id: string; name: string; slug: string }[];
} => {
  const mayManage = (org: WorkspaceClaim) =>
    (org.roles ?? []).some((role) => MOVE_ROLES.has(role));

  const current = currentOrganizationId
    ? organizations.find((org) => org.id === currentOrganizationId)
    : undefined;
  const canMoveOut = currentOrganizationId
    ? !!current && mayManage(current)
    : isOwner;

  const targets = organizations
    .filter(
      (org) => org.id !== currentOrganizationId && mayManage(org) && org.slug,
    )
    .map((org) => ({
      id: org.id,
      name: org.name || `@${org.slug}`,
      slug: org.slug as string,
    }));

  return { canMoveOut, targets };
};
