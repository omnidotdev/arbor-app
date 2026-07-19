import { AvatarFallback, AvatarRoot } from "@omnidotdev/thornberry/avatar";

import { cn } from "@/lib/utils";

interface CommitAuthorAvatarProps {
  /** The commit author's display name. */
  name?: string | null;
  /** Extra classes, primarily to size the avatar per surface. */
  className?: string;
}

/**
 * Initials avatar for a git commit author. Git actors carry no avatar url, so
 * this derives a stable initial from the author name to stand in for a pfp
 * rather than showing a generic user glyph.
 */
export function CommitAuthorAvatar({
  name,
  className,
}: CommitAuthorAvatarProps) {
  const initial = name?.trim().charAt(0).toUpperCase() || "?";

  return (
    <AvatarRoot className={cn("size-5 shrink-0 rounded-full", className)}>
      <AvatarFallback className="rounded-full bg-muted font-semibold text-[0.625rem] text-muted-foreground">
        {initial}
      </AvatarFallback>
    </AvatarRoot>
  );
}
