/**
 * Shared helpers for inspecting graphql-request errors.
 *
 * graphql-request throws a ClientError carrying the raw response, so recognizing
 * a specific server error means walking `response.errors[].extensions.code`.
 * Centralizing that fragile traversal here keeps the per-error detectors
 * (closed-beta gate, session auth, graph-tier) reading the same shape.
 */

/** One entry of a graphql-request ClientError's `response.errors`. */
export interface GraphqlErrorEntry {
  message?: string;
  extensions?: {
    code?: string;
    http?: { status?: number };
    [key: string]: unknown;
  };
}

/** The `response.errors` array off a thrown ClientError, or [] for any other value. */
export const getGraphqlErrorEntries = (error: unknown): GraphqlErrorEntry[] => {
  if (!error || typeof error !== "object") return [];
  const errors = (error as { response?: { errors?: GraphqlErrorEntry[] } })
    .response?.errors;
  return Array.isArray(errors) ? errors : [];
};

/** Whether a thrown error carries a GraphQL error with the given extensions code. */
export const hasGraphqlErrorCode = (error: unknown, code: string): boolean =>
  getGraphqlErrorEntries(error).some(
    (entry) => entry.extensions?.code === code,
  );

/**
 * Whether an error is an expired/missing session surfaced as an authorization
 * error. Checks the response status and the per-error extension codes, then
 * falls back to matching the serialized message.
 */
export const isSessionAuthError = (error: unknown): boolean => {
  if (!error || typeof error !== "object") return false;

  const response = (error as { response?: { status?: number } }).response;
  if (response?.status === 401) return true;

  if (
    getGraphqlErrorEntries(error).some(
      (entry) =>
        entry.extensions?.code === "UNAUTHORIZED_FIELD_OR_TYPE" ||
        entry.extensions?.http?.status === 401,
    )
  ) {
    return true;
  }

  const message = (error as Error)?.message ?? "";
  return /unauthorized field or type|unauthorized_field_or_type|\b401\b/i.test(
    message,
  );
};
