"use client";

import { Link, useRouteContext, useRouterState } from "@tanstack/react-router";
import { LogIn, LogOut, TreePine, UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import signIn from "@/lib/auth/signIn";
import signOut from "@/lib/auth/signOut";
import { BASE_URL } from "@/lib/config/env.config";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const { session } = useRouteContext({ from: "__root__" });
  const isAuthenticated = !!session?.user?.rowId;

  const handleSignIn = () => {
    signIn({ redirectUrl: BASE_URL });
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-6">
        <div className="flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <TreePine className="h-6 w-6" />
            <span className="font-bold">Arbor</span>
          </Link>
          <nav className="flex items-center space-x-6 font-medium text-sm">
            {isAuthenticated && (
              <>
                <Link
                  to="/repositories"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/repositories")
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                >
                  Repositories
                </Link>
                <Link
                  to="/graph"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/graph")
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                >
                  Graph
                </Link>
                <Link
                  to="/organizations"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/organizations")
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                >
                  Organizations
                </Link>
              </>
            )}
          </nav>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-end space-x-2">
          <ModeToggle />
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <UserCircle className="h-5 w-5" />
                )}
                <span className="hidden text-sm md:inline-block">
                  {session.user.name || session.user.email}
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="sm" onClick={handleSignIn}>
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
