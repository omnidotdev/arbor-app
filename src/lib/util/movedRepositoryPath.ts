/**
 * The path an old repository link redirects to once the repository moved to
 * another workspace: the same page (commits, a file, a pull request) under
 * the repository's current workspace and slug, with the query string kept
 */
export const movedRepositoryPath = ({
  pathname,
  searchStr,
  from,
  to,
}: {
  pathname: string;
  searchStr: string;
  from: { workspaceSlug: string; repoSlug: string };
  to: { ownerSlug: string; repoSlug: string };
}): string => {
  const oldBase = `/@${from.workspaceSlug}/${from.repoSlug}`;
  const rest = pathname.startsWith(oldBase)
    ? pathname.slice(oldBase.length)
    : "";

  return `/@${to.ownerSlug}/${to.repoSlug}${rest}${searchStr}`;
};
