import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import { DefaultCatchBoundary, Header } from "@/components/layout";
import app from "@/lib/config/app.config";
import { isDevEnv } from "@/lib/config/env.config";
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

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  session: ExtendedSession | null;
}>()({
  beforeLoad: async () => {
    // Skip auth in production (coming soon page)
    if (!isDevEnv) return { session: null };
    const { session } = await fetchSession();

    return { session };
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
        title: isDevEnv ? app.name : "Arbor",
      },
      {
        name: "description",
        content: isDevEnv ? app.description : "Coming soon",
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

function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-800">
      <div className="text-center">
        <div className="text-9xl">🌳</div>
      </div>
    </div>
  );
}

function RootComponent() {
  // Show coming soon page in production
  if (!isDevEnv) {
    return (
      <RootDocument>
        <ComingSoon />
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
        <Scripts />
      </body>
    </html>
  );
}
