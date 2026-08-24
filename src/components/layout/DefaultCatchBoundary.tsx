import { rootRouteId, useMatch, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import signIn from "@/lib/auth/signIn";
import { isBetaAccessError, redirectToApply } from "@/lib/beta/betaAccessError";

import type { ErrorComponentProps } from "@tanstack/react-router";

/**
 * Detect an expired or missing session surfaced as a GraphQL authorization
 * error. graphql-request throws a ClientError carrying the raw response, so
 * check the response status and the per-error extension codes, then fall back
 * to matching the serialized message
 */
const isAuthError = (error: unknown): boolean => {
  if (!error || typeof error !== "object") return false;

  const response = (
    error as {
      response?: {
        status?: number;
        errors?: Array<{
          extensions?: { code?: string; http?: { status?: number } };
        }>;
      };
    }
  ).response;

  if (response?.status === 401) return true;
  if (
    response?.errors?.some(
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

/**
 * Default error boundary for caught route errors.
 */
const DefaultCatchBoundary = ({ error }: ErrorComponentProps) => {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  useEffect(() => {
    console.error(error);
  }, [error]);

  // A non-whitelisted user's gated query surfaced here: send them to the apply
  // flow. Done in an effect so it runs on the client after hydration
  useEffect(() => {
    if (isBetaAccessError(error)) redirectToApply();
  }, [error]);

  // Non-whitelisted callers are redirected to /apply; render nothing meanwhile
  if (isBetaAccessError(error)) return null;

  // An expired session reads as an authorization error; offer re-auth back to
  // the current location instead of a dead-end generic error
  if (isAuthError(error)) {
    const handleSignIn = () => {
      const redirectUrl =
        typeof window !== "undefined"
          ? window.location.pathname + window.location.search
          : "/";
      signIn({ redirectUrl });
    };

    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-6 text-6xl">🌳</div>
          <h1 className="font-bold text-2xl">Your session expired</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Sign in again to pick up right where you left off.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <button
              type="button"
              onClick={handleSignIn}
              className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-6 text-6xl">🌳</div>
        <h1 className="font-bold text-2xl text-destructive">
          Something went wrong
        </h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          An unexpected error occurred. Please try again
          {isRoot ? " or return to the home page" : ""}.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => router.invalidate()}
            className="rounded-lg border border-border bg-card px-4 py-2 font-medium text-foreground text-sm transition-colors hover:bg-accent"
          >
            Try again
          </button>
          {isRoot ? (
            <a
              href="/"
              className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
            >
              Go Home
            </a>
          ) : (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
            >
              Go back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultCatchBoundary;
