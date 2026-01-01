import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import { DefaultCatchBoundary, Header } from "@/components/layout";
import app from "@/lib/config/app.config";
import appCss from "@/lib/styles/globals.css?url";
import ThemeProvider from "@/providers/ThemeProvider";
import { getTheme } from "@/server/functions/theme";

import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  errorComponent: DefaultCatchBoundary,
  component: RootComponent,
});

function RootComponent() {
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
