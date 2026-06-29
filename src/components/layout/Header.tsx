"use client";

import { LogoLockup } from "@omnidotdev/thornberry/logo-lockup";
import { Link, useRouteContext, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ExternalLink,
  LogIn,
  LogOut,
  Menu,
  MessageSquare,
  TreePine,
  UserCircle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { SVGProps } from "react";

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    aria-label="Discord"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

import { Button } from "@/components/ui/button";
import signIn from "@/lib/auth/signIn";
import signOut from "@/lib/auth/signOut";
import app from "@/lib/config/app.config";
import { BASE_URL, CONSOLE_URL } from "@/lib/config/env.config";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const primaryNav = [
  { to: "/repositories", label: "Repositories", match: "/repositories" },
  { to: "/graph", label: "Graph", match: "/graph" },
  { to: "/workspaces", label: "Workspaces", match: "/workspaces" },
] as const;

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const { session } = useRouteContext({ from: "__root__" });
  const isAuthenticated = !!session?.user?.rowId;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close the mobile menu on navigation
  // biome-ignore lint/correctness/useExhaustiveDependencies: close when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // close the mobile menu on outside click or escape
  useEffect(() => {
    if (!menuOpen) return;

    const handlePointer = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const handleSignIn = () => {
    signIn({ redirectUrl: BASE_URL });
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:px-6">
        <div className="flex min-w-0 items-center">
          <Link to="/" className="mr-6 flex shrink-0 items-center space-x-2">
            <LogoLockup
              logo={<TreePine className="h-6 w-6" />}
              name="Arbor"
              nameClassName="font-bold"
            />
          </Link>
          {/* primary nav as a row on desktop, collapsed into the mobile menu below md */}
          <nav className="hidden items-center space-x-6 font-medium text-sm md:flex">
            {isAuthenticated &&
              primaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith(item.match)
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
        <div className="flex-1" />
        {/* secondary actions as a row on desktop */}
        <div className="hidden items-center justify-end space-x-2 md:flex">
          <a
            href={app.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            title="Docs"
          >
            <Button variant="ghost" size="icon">
              <BookOpen className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={app.links.feedback}
            target="_blank"
            rel="noopener noreferrer"
            title="Provide Feedback"
          >
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </a>
          <a
            href={app.organization.discord}
            target="_blank"
            rel="noopener noreferrer"
            title="Join Omni Discord"
          >
            <Button variant="ghost" size="icon">
              <DiscordIcon className="h-5 w-5" />
            </Button>
          </a>
          <ModeToggle />
          {isAuthenticated ? (
            <div className="flex min-w-0 items-center space-x-2">
              <div className="flex min-w-0 items-center space-x-2">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <UserCircle className="h-5 w-5 shrink-0" />
                )}
                <span className="hidden max-w-[12rem] truncate text-sm lg:inline-block">
                  {session.user.name || session.user.email}
                </span>
              </div>
              {CONSOLE_URL && (
                <a
                  href={CONSOLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Manage account"
                >
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </a>
              )}
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
        {/* compact action group with a menu toggle below md */}
        <div className="flex items-center space-x-1 md:hidden">
          <ModeToggle />
          <div className="relative" ref={menuRef}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-1rem)] overflow-hidden rounded-md border bg-background p-2 shadow-md">
                {isAuthenticated && (
                  <>
                    <nav className="flex flex-col">
                      {primaryNav.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={cn(
                            "rounded-md px-3 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            pathname?.startsWith(item.match)
                              ? "text-foreground"
                              : "text-foreground/60",
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="my-2 border-t" />
                    <div className="flex min-w-0 items-center gap-2 px-3 py-2">
                      {session.user.image ? (
                        <img
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          className="h-8 w-8 shrink-0 rounded-full"
                        />
                      ) : (
                        <UserCircle className="h-5 w-5 shrink-0" />
                      )}
                      <span className="min-w-0 truncate text-sm">
                        {session.user.name || session.user.email}
                      </span>
                    </div>
                    <div className="my-2 border-t" />
                  </>
                )}
                <a
                  href={app.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <BookOpen className="h-5 w-5" />
                  Docs
                </a>
                <a
                  href={app.links.feedback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageSquare className="h-5 w-5" />
                  Provide Feedback
                </a>
                <a
                  href={app.organization.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <DiscordIcon className="h-5 w-5" />
                  Discord
                </a>
                {isAuthenticated ? (
                  <>
                    {CONSOLE_URL && (
                      <a
                        href={CONSOLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Manage account
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleSignIn}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
