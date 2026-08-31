import { useQuery } from "@tanstack/react-query";

import { getApplicantCount } from "@/lib/beta/applicantCount";
import { cn } from "@/lib/utils";

/**
 * Social-proof line showing how many builders are on Omni.
 *
 * The public count is the fleet-wide Omni userbase (not applicants to arbor's
 * closed beta), so the copy invites joining the ecosystem rather than claiming
 * anyone applied here. Hides itself entirely when the count is unavailable or
 * zero, so an empty state never renders a bare "0" (mirrors thrivestream's
 * Origin count treatment).
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
      Join {count.toLocaleString()} {count === 1 ? "builder" : "builders"} who
      signed up
    </p>
  );
};
