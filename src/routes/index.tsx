import {
  Link,
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  GitBranch,
  GitMerge,
  GitPullRequest,
  Leaf,
  Lock,
  Network,
  Search,
  Share2,
  Sprout,
  TreePine,
  Waypoints,
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
      aria-label="A living dependency graph of connected repositories"
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

/**
 * The arboreal throughline: each capability mapped to how a forest actually
 * works, so the metaphor does real explanatory work rather than decoration.
 */
const CANOPY = [
  {
    icon: GitBranch,
    accent: "text-emerald-500",
    tint: "bg-emerald-500/10",
    title: "Branches you can see",
    description:
      "Every branch, pull request, and merge across the whole org in one canopy. Stop tab-hopping between repos to find where work actually lives.",
  },
  {
    icon: Waypoints,
    accent: "text-amethyst-500",
    tint: "bg-amethyst-500/10",
    title: "Follow the roots",
    description:
      "Code has roots. Arbor maps the dependencies between repositories, so you can trace the blast radius of a change before you ship it, not after it breaks.",
  },
  {
    icon: TreePine,
    accent: "text-emerald-400",
    tint: "bg-emerald-400/10",
    title: "Group into groves",
    description:
      "Workspaces mirror how your teams really grow: one @handle per org, repositories beneath it, permissions that follow the shape of your company.",
  },
  {
    icon: Leaf,
    accent: "text-amethyst-400",
    tint: "bg-amethyst-400/10",
    title: "Read the rings",
    description:
      "Full history, rich diffs, and threaded review. The grain of every change is preserved, so how the code grew is never a mystery.",
  },
];

/** Secondary capability grid, kept crisp and technical under the metaphor */
const FEATURES = [
  {
    icon: Network,
    title: "Polyrepo graph",
    description:
      "A live, navigable graph of every repo and the dependencies between them. Architecture stops being tribal knowledge.",
  },
  {
    icon: GitBranch,
    title: "Full git hosting",
    description:
      "Clone, push, branches, tags, protected refs. Bring your whole workflow under one canopy, on standard git.",
  },
  {
    icon: GitPullRequest,
    title: "Pull requests",
    description:
      "Open, review, and merge with rich diffs, rendered markdown, and threaded discussion baked in.",
  },
  {
    icon: Bot,
    title: "Agent-native",
    description:
      "Agents that see the whole grove, not just one file. They answer questions, open PRs, and reason across repos.",
  },
  {
    icon: Search,
    title: "Browse & search",
    description:
      "Read any repo like a book: nested READMEs, rendered markdown, license at a glance, code search across the forest.",
  },
  {
    icon: Share2,
    title: "Dependency insight",
    description:
      "See how one change ripples through everything downstream, and which teams to loop in, before it lands.",
  },
];

/** Onboarding, told as growth: plant, connect, navigate */
const STEPS = [
  {
    icon: Sprout,
    title: "Plant your repos",
    description:
      "Create a repo or bring existing ones under Arbor, individually or a whole org at once.",
  },
  {
    icon: GitMerge,
    title: "Watch the graph grow",
    description:
      "Arbor draws the dependency graph automatically, so the structure of your codebase becomes visible.",
  },
  {
    icon: Network,
    title: "Navigate the canopy",
    description:
      "Move between repos, branches, teams, and agents from one connected view of the whole forest.",
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
            <Sprout className="h-3.5 w-3.5" />
            Open source · agent-native · in closed beta
          </span>
          <h1 className="font-bold text-4xl tracking-tighter sm:text-5xl xl:text-6xl/[1.05]">
            Where code{" "}
            <span className="arbor-gradient-text">grows together</span>
          </h1>
          <p className="max-w-150 text-lg text-muted-foreground md:text-xl">
            Most forges show you one tree at a time. Arbor hosts every
            repository and maps the living graph between them, so your whole
            organization reads like one connected forest instead of a thousand
            scattered trees. Agent-native, from the roots up.
          </p>
          <div className="flex flex-wrap gap-4">
            {isAuthenticated ? (
              <>
                <Button size="lg" asChild>
                  <Link to="/repositories">
                    <GitBranch className="mr-2 h-4 w-4" />
                    View repositories
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/graph">
                    <Network className="mr-2 h-4 w-4" />
                    Open the graph
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" asChild>
                  <Link to="/apply">
                    <Sprout className="mr-2 h-4 w-4" />
                    Request early access
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" onClick={handleSignIn}>
                  <Lock className="mr-2 h-4 w-4" />
                  Already invited? Sign in
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">Pricing</Link>
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
                  arbor / the forest
                </span>
              </div>
              <div className="aspect-[4/3] w-full">
                <Constellation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The arboreal throughline */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            An arbor by nature. A forge by design.
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            The tree is not a mascot. It is the model: every idea in Arbor maps
            to how a forest actually works.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {CANOPY.map((item) => (
            <div key={item.title} className="arbor-card rounded-2xl p-6">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${item.tint}`}
              >
                <item.icon className={`h-5 w-5 ${item.accent}`} />
              </div>
              <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The differentiator: the polyrepo graph */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="arbor-fade-up space-y-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amethyst-500/30 bg-amethyst-500/10 px-3 py-1 font-medium text-amethyst-600 text-sm dark:text-amethyst-300">
              <Network className="h-3.5 w-3.5" />
              The polyrepo graph
            </span>
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              See the forest <span className="text-muted-foreground">and</span>{" "}
              the trees
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Your architecture already exists as a graph. It just lives in
              people's heads. Arbor draws it: every repository a node, every
              dependency an edge, updated as your code changes. Trace a breaking
              change to everything downstream. Onboard someone by handing them a
              map instead of a maze.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button size="lg" variant="outline" asChild>
                <Link to={isAuthenticated ? "/graph" : "/apply"}>
                  {isAuthenticated ? "Open the graph" : "Get early access"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="arbor-float relative">
            <div className="absolute -inset-8 rounded-full bg-amethyst-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 shadow-2xl backdrop-blur-md">
              <div className="aspect-[4/3] w-full">
                <Constellation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent-native band */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="arbor-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="arbor-aurora pointer-events-none absolute -top-16 right-0 -z-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="max-w-2xl">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
              <Bot className="h-5 w-5 text-emerald-500" />
            </div>
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Agents that know the whole grove
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Code is moving faster than the forge was built to handle. Arbor is
              agent-native by design: your agents see the cross-repo graph, not
              just the file in front of them. They answer questions, open pull
              requests, and reason about ripple effects across every tree in the
              forest.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            Everything a codebase needs, rooted in one place
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Hosting, collaboration, and architecture insight that grow with your
            organization.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="arbor-card rounded-2xl p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                <feature.icon className="h-5 w-5 text-emerald-500" />
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
            From seed to canopy
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Scattered repositories become one living, navigable forest.
          </p>
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
            Ready to put down roots?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground md:text-lg">
            Bring your repositories together and watch your codebase grow into
            something you can finally see.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isAuthenticated ? (
              <Button size="lg" asChild>
                <Link to="/repositories">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Plant your first repo
                </Link>
              </Button>
            ) : (
              <>
                <Button size="lg" asChild>
                  <Link to="/apply">
                    <Sprout className="mr-2 h-4 w-4" />
                    Request early access
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" onClick={handleSignIn}>
                  Already invited? Sign in
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
