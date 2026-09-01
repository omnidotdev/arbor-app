import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbNavProps {
  owner: string;
  repo: string;
  path: string;
  branch: string;
}

/**
 * Breadcrumb navigation for file browser.
 */
export function BreadcrumbNav({
  owner,
  repo,
  path,
  branch,
}: BreadcrumbNavProps) {
  const parts = path.split("/").filter(Boolean);

  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm">
      <Link
        to="/@{$workspaceSlug}/$repoSlug"
        params={{ workspaceSlug: owner, repoSlug: repo }}
        search={{ ref: branch }}
        className="flex items-center gap-1 text-primary-600 hover:underline dark:text-primary-400"
      >
        <Home className="h-4 w-4" />
        <span>{repo}</span>
      </Link>

      {parts.map((part, index) => {
        const partPath = parts.slice(0, index + 1).join("/");
        const isLast = index === parts.length - 1;

        return (
          <span key={partPath} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {isLast ? (
              <span className="font-medium">{part}</span>
            ) : (
              <Link
                to="/@{$workspaceSlug}/$repoSlug"
                params={{ workspaceSlug: owner, repoSlug: repo }}
                search={{ ref: branch, path: partPath }}
                className="text-primary-600 hover:underline dark:text-primary-400"
              >
                {part}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
