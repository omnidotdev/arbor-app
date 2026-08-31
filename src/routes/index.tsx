import {
  Link,
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import {
  Building2,
  GitBranch,
  GitPullRequest,
  Lock,
  Network,
  Share2,
  Waypoints,
  Workflow,
} from "lucide-react";

import { ApplicantCount } from "@/components/beta/ApplicantCount";
import { Button } from "@/components/ui/button";
import signIn from "@/lib/auth/signIn";
import { BASE_URL } from "@/lib/config/env.config";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context: { session }, preload }) => {
    // redirect authenticated users to the main app, but not during hover-preload so the landing link does not navigate on hover
    if (!preload && session?.user?.rowId)
      throw redirect({ to: "/repositories" });
  },
  component: Home,
});

/** A single repository node in the hero constellation */
interface GraphNode {
  cx: number;
  cy: number;
  r: number;
  /** palette accent: emerald primary or amethyst secondary */
  accent: "emerald" | "amethyst";
  /** seconds of animation delay so the field breathes asynchronously */
  delay: number;
}

const NODES: GraphNode[] = [
  { cx: 200, cy: 150, r: 14, accent: "emerald", delay: 0 },
  { cx: 90, cy: 70, r: 8, accent: "amethyst", delay: 0.6 },
  { cx: 320, cy: 80, r: 9, accent: "emerald", delay: 1.2 },
  { cx: 70, cy: 240, r: 7, accent: "emerald", delay: 1.8 },
  { cx: 330, cy: 230, r: 10, accent: "amethyst", delay: 0.9 },
  { cx: 200, cy: 280, r: 8, accent: "emerald", delay: 1.5 },
  { cx: 150, cy: 50, r: 6, accent: "amethyst", delay: 2.1 },
];

/** Edges connect to the central node (index 0) to read as a dependency graph */
const EDGES: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 6],
  [2, 6],
];

const ACCENT = {
  emerald: "var(--emerald-500)",
  amethyst: "var(--amethyst-500)",
} as const;

/** Animated repository constellation that powers the hero */
function Constellation() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Animated graph of connected repositories"
    >
      <title>Connected repositories</title>
      {EDGES.map(([from, to]) => {
        const a = NODES[from];
        const b = NODES[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={a.cx}
            y1={a.cy}
            x2={b.cx}
            y2={b.cy}
            stroke="var(--emerald-400)"
            strokeWidth={1.5}
            strokeOpacity={0.5}
            className="arbor-edge"
            style={{ animationDelay: `${from * 0.4}s` }}
          />
        );
      })}
      {NODES.map((node) => (
        <g key={`${node.cx}-${node.cy}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 8}
            fill={ACCENT[node.accent]}
            opacity={0.12}
            className="arbor-node"
            style={{ animationDelay: `${node.delay}s` }}
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={ACCENT[node.accent]}
            className="arbor-node"
            style={{ animationDelay: `${node.delay}s` }}
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="none"
            stroke="oklch(1 0 0 / 0.4)"
            strokeWidth={1}
          />
        </g>
      ))}
    </svg>
  );
}

const FEATURES = [
  {
    icon: Network,
    accent: "text-emerald-500",
    tint: "bg-emerald-500/10",
    title: "Polyrepo Graph",
    description:
      "See every repository and the dependencies between them rendered as a living, navigable graph.",
  },
  {
    icon: GitBranch,
    accent: "text-emerald-400",
    tint: "bg-emerald-400/10",
    title: "Git Hosting",
    description:
      "Full-featured hosting with branches, commits, and reviews. Bring your whole workflow under one canopy.",
  },
  {
    icon: GitPullRequest,
    accent: "text-amethyst-500",
    tint: "bg-amethyst-500/10",
    title: "Pull Requests",
    description:
      "Open, review, and merge changes with rich diffs and threaded discussion baked in.",
  },
  {
    icon: Building2,
    accent: "text-emerald-500",
    tint: "bg-emerald-500/10",
    title: "Workspaces",
    description:
      "Group teams and repositories into workspaces that mirror how your company actually works.",
  },
  {
    icon: Lock,
    accent: "text-amethyst-400",
    tint: "bg-amethyst-400/10",
    title: "Access Control",
    description:
      "Fine-grained, role-aware permissions so the right people reach the right code, and no one else.",
  },
  {
    icon: Share2,
    accent: "text-emerald-400",
    tint: "bg-emerald-400/10",
    title: "Dependency Insight",
    description:
      "Trace how a change ripples across the org before you ship it, not after something breaks.",
  },
];

const STEPS = [
  {
    icon: GitBranch,
    title: "Connect your repos",
    description:
      "Bring repositories under Arbor in minutes, individually or by organization.",
  },
  {
    icon: Workflow,
    title: "Map the relationships",
    description:
      "Arbor draws the dependency graph automatically so structure becomes visible.",
  },
  {
    icon: Network,
    title: "Navigate with clarity",
    description:
      "Jump between repos, branches, and teams from one connected universe.",
  },
];

function Home() {
  const { session } = useRouteContext({ from: "__root__" });
  const isAuthenticated = !!session?.user?.rowId;

  const handleSignIn = () => {
    signIn({ redirectUrl: BASE_URL });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background: aurora blobs + blueprint grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="arbor-grid absolute inset-0 opacity-40" />
        <div className="arbor-aurora absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div
          className="arbor-aurora absolute -top-16 right-0 h-[26rem] w-[26rem] rounded-full bg-amethyst-500/20 blur-3xl"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Hero */}
      <section className="container mx-auto max-w-7xl px-6 pt-16 pb-20 md:grid md:grid-cols-2 md:items-center md:gap-10 md:pt-24 md:pb-28">
        <div className="arbor-fade-up flex flex-col justify-center space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-medium text-emerald-600 text-sm dark:text-emerald-300">
            <Waypoints className="h-3.5 w-3.5" />
            Polyrepo intelligence for your whole org
          </span>
          <h1 className="font-bold text-4xl tracking-tighter sm:text-5xl xl:text-6xl/[1.05]">
            Map Your Organization's{" "}
            <span className="arbor-gradient-text">Code Universe</span>
          </h1>
          <p className="max-w-150 text-lg text-muted-foreground md:text-xl">
            Arbor connects every repository, dependency, and team into a single
            living graph. Visualize relationships, host your code, and navigate
            your entire software architecture from one place.
          </p>
          <div className="flex flex-wrap gap-4">
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
              <>
                <Button size="lg" asChild>
                  <Link to="/apply">
                    <Lock className="mr-2 h-4 w-4" />
                    Apply for beta access
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={handleSignIn}>
                  <GitBranch className="mr-2 h-4 w-4" />
                  Sign in
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </>
            )}
          </div>
          {!isAuthenticated && <ApplicantCount />}
        </div>

        <div className="mt-12 md:mt-0">
          <div className="arbor-float relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-4 shadow-2xl backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amethyst-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-muted-foreground text-xs">
                  arbor / graph
                </span>
              </div>
              <div className="aspect-[4/3] w-full">
                <Constellation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            Everything your codebase needs, rooted in one place
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Hosting, collaboration, and architecture insight that grow with your
            organization.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="arbor-card rounded-2xl p-6">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${feature.tint}`}
              >
                <feature.icon className={`h-5 w-5 ${feature.accent}`} />
              </div>
              <h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            From scattered repos to a single canopy
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
                <step.icon className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="mb-2 font-mono text-emerald-600 text-sm dark:text-emerald-400">
                {`0${index + 1}`}
              </div>
              <h3 className="mb-2 font-semibold text-lg">{step.title}</h3>
              <p className="mx-auto max-w-xs text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/15 via-transparent to-amethyst-500/15" />
          <div className="arbor-aurora pointer-events-none absolute inset-x-0 -bottom-24 -z-10 mx-auto h-64 w-2/3 rounded-full bg-emerald-500/20 blur-3xl" />
          <h2 className="mx-auto max-w-2xl font-bold text-3xl tracking-tight sm:text-4xl">
            Start mapping your code universe
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground md:text-lg">
            Bring your repositories together and see how everything connects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isAuthenticated ? (
              <Button size="lg" asChild>
                <Link to="/graph">
                  <Network className="mr-2 h-4 w-4" />
                  Open Graph
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" asChild>
                  <Link to="/apply">
                    <Lock className="mr-2 h-4 w-4" />
                    Apply for beta access
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={handleSignIn}>
                  <GitBranch className="mr-2 h-4 w-4" />
                  Sign in
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
