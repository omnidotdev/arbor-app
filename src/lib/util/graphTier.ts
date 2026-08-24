import { getGraphqlErrorEntries } from "@/lib/util/graphqlError";

/**
 * Graph capability tiers enforced by the API. When an organization is below the
 * tier a graph feature requires, the API returns a GraphQL error carrying this
 * code (plus the required level) instead of the data
 */
export const GRAPH_TIER_ERROR_CODE = "GRAPH_TIER_REQUIRED";

/** Graph capability levels, mirroring the API tiers */
export const GRAPH_LEVEL = {
  /** org-wide polyrepo graph */
  PRO: 1,
  /** dependency blast-radius and cross-repo orchestration */
  TEAM: 2,
} as const;

/** Plan a user upgrades to for a given capability level */
const PLAN_BY_LEVEL: Record<number, "Pro" | "Team"> = {
  [GRAPH_LEVEL.PRO]: "Pro",
  [GRAPH_LEVEL.TEAM]: "Team",
};

export interface GraphTierRequirement {
  /** required capability level (1 = Pro, 2 = Team) */
  requiredLevel: number;
  /** plan name the required level maps to */
  plan: "Pro" | "Team";
  /** user-safe message from the API, when present */
  message?: string;
}

/**
 * Detect the GRAPH_TIER_REQUIRED error a gated graph feature returns. graphql-request
 * throws a ClientError carrying the raw response, so inspect the per-error extensions
 * for the tier code and the required level. Returns null for any other error, so callers
 * can fall through to their normal error handling
 */
export const getGraphTierRequirement = (
  error: unknown,
): GraphTierRequirement | null => {
  const gated = getGraphqlErrorEntries(error).find(
    (entry) => entry.extensions?.code === GRAPH_TIER_ERROR_CODE,
  );
  if (!gated) return null;

  const requiredLevel =
    (gated.extensions?.requiredLevel as number | undefined) ?? GRAPH_LEVEL.PRO;
  const plan = PLAN_BY_LEVEL[requiredLevel] ?? "Pro";

  return {
    requiredLevel,
    plan,
    message: gated.message,
  };
};
