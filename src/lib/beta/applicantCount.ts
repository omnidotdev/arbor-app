import { API_BASE_URL } from "@/lib/config/env.config";

/**
 * Public count of closed-beta applicants, for social proof on /apply and the
 * landing page. Returns 0 on any error so the caller can simply hide the line
 * when the count is unavailable or zero (mirrors thrivestream's Origin count).
 */
export const getApplicantCount = async (): Promise<number> => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/apply/count`);
    if (!res.ok) return 0;
    const body = (await res.json()) as { total?: number };
    return typeof body.total === "number" ? body.total : 0;
  } catch {
    return 0;
  }
};
