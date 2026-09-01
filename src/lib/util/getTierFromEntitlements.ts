import capitalizeFirstLetter from "@/lib/util/capitalizeFirstLetter";

import type { EntitlementsResponse } from "@/lib/providers/billing";

/**
 * Resolve an org's plan tier from its billing entitlements.
 *
 * The tier lives in the entitlement whose featureKey is "tier"; its value is a
 * JSONB-quoted string (e.g. `"pro"`), so the surrounding quotes are stripped.
 * Returns null when no tier entitlement is present.
 */
const getTierFromEntitlements = (
  entitlements: EntitlementsResponse | null | undefined,
): string | null => {
  const raw = entitlements?.entitlements?.find(
    (entitlement) => entitlement.featureKey === "tier",
  )?.value;
  if (!raw) return null;
  const stripped = String(raw).replace(/^"|"$/g, "");
  return capitalizeFirstLetter(stripped);
};

export default getTierFromEntitlements;
