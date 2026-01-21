import {
  Link,
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import { Building2, GitBranch, Network, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import signIn from "@/lib/auth/signIn";
import { BASE_URL } from "@/lib/config/env.config";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context: { session } }) => {
    // redirect authenticated users to the main app
    if (session?.user?.rowId) throw redirect({ to: "/repositories" });
  },
  component: Home,
});

function Home() {
  const { session } = useRouteContext({ from: "__root__" });
  const isAuthenticated = !!session?.user?.rowId;

  const handleSignIn = () => {
    signIn({ redirectUrl: BASE_URL });
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col pt-12">
      <div className="container mx-auto max-w-7xl flex-1 items-center px-6 md:grid md:grid-cols-2 md:gap-6 md:py-10">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
              Map Your Organization's Code Universe
            </h1>
            <p className="max-w-150 text-muted-foreground md:text-xl">
              Arbor revolutionizes how you understand and navigate your entire
              codebase ecosystem. Visualize relationships between repositories,
              track dependencies across teams, and gain insights into your
              organization's complete software architecture.
            </p>
          </div>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <Button size="lg" asChild>
                  <Link to="/repositories">
                    <GitBranch className="mr-2 h-4 w-4" />
                    View Repositories
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/graph">
                    <Network className="mr-2 h-4 w-4" />
                    Open Graph
                  </Link>
                </Button>
              </>
            ) : (
              <Button size="lg" onClick={handleSignIn}>
                <GitBranch className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border bg-card p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Polyrepo Graph</h3>
                    <p className="text-muted-foreground text-sm">
                      Visualize repository relationships
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <GitBranch className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Git Hosting</h3>
                    <p className="text-muted-foreground text-sm">
                      Full repository management
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <Building2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Organizations</h3>
                    <p className="text-muted-foreground text-sm">
                      Team collaboration tools
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Access Control</h3>
                    <p className="text-muted-foreground text-sm">
                      Fine-grained permissions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
