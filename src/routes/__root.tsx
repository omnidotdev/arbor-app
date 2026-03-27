import { useSessionRefresh } from "@omnidotdev/providers/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { useEffect, useState } from "react";

import { DefaultCatchBoundary, Header } from "@/components/layout";
import app from "@/lib/config/app.config";
import { isDevEnv } from "@/lib/config/env.config";
import { fetchMaintenanceMode } from "@/lib/flags";
import { setAccessToken } from "@/lib/graphql/graphqlClientFactory";
import appCss from "@/lib/styles/globals.css?url";
import ThemeProvider from "@/providers/ThemeProvider";
import { fetchSession } from "@/server/functions/auth";
import { getTheme } from "@/server/functions/theme";

import type { QueryClient } from "@tanstack/react-query";
import type { Session } from "better-auth/types";
import type { ReactNode } from "react";

interface ExtendedUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  rowId?: string;
  identityProviderId?: string;
  username?: string;
}

export interface ExtendedSession extends Omit<Session, "user"> {
  user: ExtendedUser;
  accessToken?: string;
}

/** Parse exp claim from a JWT without verifying signature */
function getTokenExpMs(token: string): number | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return (payload.exp as number) * 1000;
  } catch {
    return null;
  }
}

/** Fetch a fresh access token from the server session */
async function refreshAccessToken(): Promise<string | undefined> {
  try {
    const { session } = await fetchSession();
    return session?.accessToken;
  } catch {
    return undefined;
  }
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  session: ExtendedSession | null;
  isMaintenanceMode: boolean;
}>()({
  beforeLoad: async () => {
    const { session } = await fetchSession();
    const { isMaintenanceMode } = await fetchMaintenanceMode({
      data: {
        userId: session?.user?.id,
        email: session?.user?.email,
      },
    });

    return { session, isMaintenanceMode };
  },
  loader: () => getTheme(),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: app.name,
      },
      {
        name: "description",
        content: app.description,
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌳</text></svg>",
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  component: RootComponent,
});

function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 text-white">
      <div className="text-center">
        <div className="mb-6 text-9xl">🌳</div>
        <h1 className="mb-4 font-bold text-4xl">Out on a Limb</h1>
        <p className="max-w-md text-emerald-200 text-lg">
          We're pruning and growing. Arbor will branch back soon.
        </p>
      </div>
    </div>
  );
}

function RootComponent() {
  // Keep the OAuth access token fresh while the user is idle
  useSessionRefresh(fetchSession);

  const { isMaintenanceMode, session } = useRouteContext({ from: "__root__" });

  const [currentToken, setCurrentToken] = useState(session?.accessToken);

  // Sync access token to GraphQL client for client-side requests
  useEffect(() => {
    const token = currentToken ?? session?.accessToken;
    if (token) {
      setAccessToken(token);
    }
  }, [currentToken, session?.accessToken]);

  // Proactively refresh the token before it expires
  useEffect(() => {
    const token = currentToken ?? session?.accessToken;
    if (!token) return;

    const expMs = getTokenExpMs(token);
    if (!expMs) return;

    // Refresh 60s before expiry
    const refreshAt = expMs - Date.now() - 60_000;
    if (refreshAt <= 0) {
      refreshAccessToken().then(setCurrentToken);
      return;
    }

    const timer = setTimeout(() => {
      refreshAccessToken().then(setCurrentToken);
    }, refreshAt);

    return () => clearTimeout(timer);
  }, [currentToken, session?.accessToken]);

  if (isMaintenanceMode) {
    return (
      <RootDocument>
        <MaintenancePage />
      </RootDocument>
    );
  }

  return (
    <RootDocument>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const theme = Route.useLoaderData();

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider theme={theme}>{children}</ThemeProvider>

        {/* dev tools (only included in development) */}
        {isDevEnv && (
          <TanStackDevtools
            plugins={[
              {
                name: "Router",
                render: <TanStackRouterDevtoolsPanel />,
                defaultOpen: true,
              },
              {
                name: "Query",
                render: <ReactQueryDevtoolsPanel />,
              },
            ]}
          />
        )}

        <Scripts />
      </body>
    </html>
  );
}
