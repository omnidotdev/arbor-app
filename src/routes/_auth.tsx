import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { EventsProvider } from "@/providers/EventsProvider";

// Noop provider for client-side (main @omnidotdev/providers entry requires Node.js)
const eventsProvider = {
  async emit() {
    return {
      eventId: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
  },
};

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context: { session } }) => {
    // redirect unauthenticated users to the landing page
    if (!session?.user) throw redirect({ to: "/" });

    // if session exists but `rowId` is missing, the user may exist in the identity provider but not in the database (stale cookie or incomplete signup), so sign out to clear the stale session
    if (!session.user.rowId) {
      const { signOutAndRedirect } = await import("@/server/functions/auth");
      await signOutAndRedirect();
    }

    return { session };
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return (
    <EventsProvider provider={eventsProvider}>
      <div className="flex min-h-screen flex-col">
        <Outlet />
      </div>
    </EventsProvider>
  );
}
