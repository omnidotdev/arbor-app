import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@omnidotdev/thornberry/sidebar";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { useMemo } from "react";

import AppSidebar from "@/components/layout/AppSidebar";
import app from "@/lib/config/app.config";
import { EventsProvider } from "@/providers/EventsProvider";
import { OrganizationProvider } from "@/providers/OrganizationProvider";

// Noop provider for client-side (main @omnidotdev/providers entry requires Node.js)
const eventsProvider = {
  async emit() {
    return {
      eventId: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
  },
};

export const Route = createFileRoute("/_app")({
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
  const { session } = Route.useRouteContext();

  // Workspaces come from JWT org claims, not a DB query, so the list always
  // reflects the user's Omni org membership
  const organizations = useMemo(
    () => session?.organizations ?? [],
    [session?.organizations],
  );

  return (
    <EventsProvider provider={eventsProvider}>
      <OrganizationProvider organizations={organizations}>
        <SidebarProvider>
          <div className="flex h-dvh w-full">
            <AppSidebar variant="inset" user={session?.user} />

            <SidebarInset className="flex min-h-0 flex-1 flex-col overflow-hidden">
              {/* Mobile top bar with the sidebar toggle */}
              <header className="flex h-12 shrink-0 items-center gap-2 border-b px-3 md:hidden">
                <SidebarTrigger />
                <span className="font-semibold text-sm">{app.name}</span>
              </header>

              <main className="min-h-0 flex-1 overflow-auto">
                <Outlet />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </OrganizationProvider>
    </EventsProvider>
  );
}
