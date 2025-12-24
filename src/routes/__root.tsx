import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import { DefaultCatchBoundary } from "@/components/layout";
import appConfig from "@/lib/config/app.config";
import appCss from "@/lib/styles/globals.css?url";

import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
        title: appConfig.name,
      },
      {
        name: "description",
        content: appConfig.description,
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
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
