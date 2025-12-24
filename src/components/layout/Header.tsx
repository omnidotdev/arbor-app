"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { SearchIcon, TreePine, UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-6">
        <div className="flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <TreePine className="h-6 w-6" />
            <span className="font-bold">Arbor</span>
          </Link>
          <nav className="flex items-center space-x-6 font-medium text-sm">
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
              to="/projects"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/projects")
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              Projects
            </Link>
          </nav>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
