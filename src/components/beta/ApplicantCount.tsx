import { useQuery } from "@tanstack/react-query";

import { getApplicantCount } from "@/lib/beta/applicantCount";
import { cn } from "@/lib/utils";

/**
 * Social-proof line showing how many builders have applied to the closed beta.
 *
 * Reads the public unauthenticated count and hides itself entirely when the
 * count is unavailable or zero, so an empty beta never renders a bare "0"
 * (mirrors thrivestream's Origin count treatment).
 */
export const ApplicantCount = ({ className }: { className?: string }) => {
  const { data: count } = useQuery({
    queryKey: ["applicant-count"],
    queryFn: getApplicantCount,
    staleTime: 60_000,
  });

  if (count == null || count <= 0) return null;

  return (
    <p className={cn("text-muted-foreground text-sm", className)}>
      {count} {count === 1 ? "builder has" : "builders have"} applied so far
    </p>
  );
};
