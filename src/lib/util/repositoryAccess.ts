/**
 * Determine whether the current user may manage a repository (owner or admin).
 * Personal repos match on the owner row id, org repos fall back to an admin
 * collaborator grant. Access defaults to hidden when ownership is unknown.
 */

interface RepositoryAccessInput {
  owner?: { rowId: string } | null;
  repositoryCollaborators?: {
    nodes: Array<{ userId: string; permission: string }>;
  } | null;
}

export type RepositoryRole = "owner" | "admin" | null;

export interface RepositoryAccess {
  /** Whether the current user can manage (rename, delete, configure) the repo. */
  canManage: boolean;
  /** The role granting management access, used for the visible admin label. */
  role: RepositoryRole;
}

/**
 * Compute the current user's management access to a repository. Returns
 * `canManage: false` with a null role whenever the repository or user is
 * unknown, so gated surfaces default to hidden.
 */
export function getRepositoryAccess(
  repository: RepositoryAccessInput | null | undefined,
  currentUserId: string | null | undefined,
): RepositoryAccess {
  if (!repository || !currentUserId) return { canManage: false, role: null };

  if (repository.owner?.rowId === currentUserId) {
    return { canManage: true, role: "owner" };
  }

  const collaborator = repository.repositoryCollaborators?.nodes.find(
    (node) => node.userId === currentUserId,
  );
  if (collaborator?.permission === "admin") {
    return { canManage: true, role: "admin" };
  }

  return { canManage: false, role: null };
}
