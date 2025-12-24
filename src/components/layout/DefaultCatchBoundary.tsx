import { useRouter } from "@tanstack/react-router";

import type { ErrorComponentProps } from "@tanstack/react-router";

/**
 * Default error boundary component.
 */
function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 font-bold text-2xl">Something went wrong</h1>
      <p className="mb-4 text-muted-foreground">
        {error instanceof Error
          ? error.message
          : "An unexpected error occurred"}
      </p>
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}

export default DefaultCatchBoundary;
