import { Link, createFileRoute } from "@tanstack/react-router";
import { GitBranch } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col pt-12">
      <div className="container flex-1 items-center px-6 md:grid md:grid-cols-2 md:gap-6 md:py-10">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
              Map Your Organization's Code Universe
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Arbor revolutionizes how you understand and navigate your entire
              codebase ecosystem. Visualize relationships between repositories,
              track dependencies across teams, and gain insights into your
              organization's complete software architecture.
            </p>
          </div>
          <div>
            <Button size="lg" asChild>
              <Link to="/repositories">
                <GitBranch className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-muted blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-xl border bg-card p-4">
              <div className="h-full w-full rounded-lg bg-muted/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
