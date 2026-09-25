import {
  Link,
  createFileRoute,
  redirect,
  useRouteContext,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  FileText,
  GitBranch,
  GitPullRequest,
  Lock,
  Network,
  Scale,
  Search,
  Star,
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

// ---------------------------------------------------------------------------
// Product mockups: a faithful, static render of the Arbor UI shown inside a
// browser frame. These sell the product by showing the real surfaces (the
// dependency graph, the repository browser) rather than abstract art.
// ---------------------------------------------------------------------------

/** A macOS-style browser window that frames a product screenshot. */
function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_40px_80px_-40px_rgba(16,40,28,0.45)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-border/70 border-b bg-muted/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 max-w-[360px] flex-1 truncate rounded-md border border-border/70 bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

interface GNode {
  id: string;
  cx: number;
  cy: number;
  r: number;
  fill: string;
  labelAbove?: boolean;
  small?: boolean;
}

const G_EMERALD = "var(--color-emerald-500)";
const G_VIOLET = "var(--color-amethyst-500)";
const G_AMBER = "var(--color-amber-500)";

const GRAPH_NODES: GNode[] = [
  { id: "arbor-app", cx: 310, cy: 120, r: 14, fill: G_EMERALD },
  { id: "arbor-api", cx: 170, cy: 70, r: 10, fill: G_VIOLET, labelAbove: true },
  {
    id: "arbor-git",
    cx: 450,
    cy: 72,
    r: 11,
    fill: G_EMERALD,
    labelAbove: true,
  },
  { id: "providers", cx: 310, cy: 210, r: 12, fill: G_AMBER },
  { id: "gateway", cx: 200, cy: 250, r: 8, fill: G_VIOLET, small: true },
  { id: "infra", cx: 430, cy: 250, r: 8, fill: G_EMERALD, small: true },
  { id: "docs", cx: 540, cy: 150, r: 8, fill: G_VIOLET, small: true },
];

const GRAPH_HOT: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
];
const GRAPH_COLD: Array<[number, number]> = [
  [3, 1],
  [3, 2],
  [3, 4],
  [3, 5],
  [2, 6],
];

/** The Arbor dependency-graph view. */
function GraphMock() {
  const nodeById = (i: number) => GRAPH_NODES[i];
  return (
    <div className="grid grid-cols-[170px_1fr] max-[520px]:grid-cols-1">
      {/* workspace sidebar */}
      <div className="border-border/70 border-r bg-muted/30 p-3 text-[13px] max-[520px]:hidden">
        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2 py-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="grid h-4 w-4 place-items-center rounded bg-emerald-500 text-[10px] text-white">
            O
          </span>
          @omni
        </div>
        {["arbor-api", "arbor-app", "arbor-git", "providers"].map((r) => (
          <div
            key={r}
            className={
              r === "arbor-app"
                ? "mt-0.5 rounded-lg border border-border/70 bg-background px-2 py-1.5 pl-7 font-semibold"
                : "rounded-lg px-2 py-1.5 pl-7 text-muted-foreground"
            }
          >
            {r}
          </div>
        ))}
      </div>
      {/* graph canvas */}
      <div>
        <div className="flex items-center justify-between border-border/70 border-b px-4 py-3">
          <div className="font-mono text-[13px]">
            <span className="font-semibold">@omni</span>
            <span className="text-muted-foreground"> / dependency graph</span>
          </div>
          <div className="font-mono text-[12px] text-muted-foreground">
            ◷ live
          </div>
        </div>
        <div className="relative h-[320px] bg-[radial-gradient(120%_120%_at_30%_10%,rgba(16,157,81,0.06),transparent_60%)]">
          <svg
            viewBox="0 0 620 300"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Dependency graph of the arbor repositories"
          >
            <title>Arbor dependency graph</title>
            {GRAPH_COLD.map(([a, b]) => (
              <line
                key={`c-${a}-${b}`}
                x1={nodeById(a).cx}
                y1={nodeById(a).cy}
                x2={nodeById(b).cx}
                y2={nodeById(b).cy}
                stroke="var(--color-emerald-500)"
                strokeOpacity={0.25}
                strokeWidth={2}
              />
            ))}
            {GRAPH_HOT.map(([a, b]) => (
              <line
                key={`h-${a}-${b}`}
                x1={nodeById(a).cx}
                y1={nodeById(a).cy}
                x2={nodeById(b).cx}
                y2={nodeById(b).cy}
                stroke="var(--color-emerald-500)"
                strokeWidth={2.5}
              />
            ))}
            {GRAPH_NODES.map((n) => (
              <g key={n.id}>
                <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
                <text
                  x={n.cx}
                  y={n.labelAbove ? n.cy - n.r - 8 : n.cy + n.r + 16}
                  textAnchor="middle"
                  fontSize={n.small ? 10 : 12}
                  fontWeight={n.small ? 400 : 600}
                  fontFamily={
                    n.small ? "var(--font-mono, monospace)" : "inherit"
                  }
                  fill={
                    n.small ? "var(--color-muted-foreground)" : "currentColor"
                  }
                  className="fill-foreground"
                >
                  {n.id}
                </text>
              </g>
            ))}
          </svg>
          <div className="absolute top-3.5 right-3.5 w-[150px] rounded-xl border border-border/70 bg-card p-3 text-[12px] shadow-lg">
            <div className="mb-1.5 font-bold">arbor-app</div>
            <div className="my-1 flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> 3
              dependencies
            </div>
            <div className="my-1 flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> 5
              dependents
            </div>
            <div className="my-1 flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-amethyst-500" /> 0 cycles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The Arbor repository browser (code view). */
function RepoMock() {
  const tree = [
    { name: "src", dir: true },
    { name: "src-tauri", dir: true },
    { name: "public", dir: true },
    { name: "package.json", dir: false },
    { name: "README.md", dir: false, active: true },
    { name: "tsconfig.json", dir: false },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-border/70 border-b px-4 py-3">
        <div className="font-mono text-[13px]">
          <span className="font-semibold">@omni</span>
          <span className="text-muted-foreground"> / arbor-app</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" /> 214
          </span>
          <span className="inline-flex items-center gap-1">
            <Scale className="h-3.5 w-3.5" /> MIT
          </span>
        </div>
      </div>
      <div className="flex gap-1 border-border/70 border-b px-3 pt-2">
        {["Code", "Pull requests", "Graph", "Settings"].map((t) => (
          <span
            key={t}
            className={
              t === "Code"
                ? "border-emerald-500 border-b-2 px-3 py-2 font-semibold text-[13px]"
                : "px-3 py-2 text-[13px] text-muted-foreground"
            }
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-[190px_1fr] max-[520px]:grid-cols-1">
        <div className="border-border/70 border-r p-2 text-[13px] max-[520px]:hidden">
          {tree.map((f) => (
            <div
              key={f.name}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                f.active ? "bg-muted/60 font-medium" : "text-muted-foreground"
              }`}
            >
              {f.dir ? (
                <span className="text-amber-500">▸</span>
              ) : (
                <FileText className="h-3.5 w-3.5 opacity-60" />
              )}
              {f.name}
            </div>
          ))}
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2 border-border/60 border-b pb-3 text-muted-foreground text-xs">
            <FileText className="h-4 w-4" />
            README.md
            <span className="ml-auto rounded bg-muted px-2 py-0.5 font-mono text-[10px]">
              rendered
            </span>
          </div>
          <div className="prose-sm">
            <h3 className="font-bold text-xl">🌲 arbor-app</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              The web client for Arbor, a code forge that maps the living graph
              between your repositories. Built with TanStack Start and the Omni
              design system.
            </p>
            <div className="mt-3 rounded-lg border border-border/60 bg-muted/40 p-3 font-mono text-[12px] text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
              git clone https://arbor.omni.dev/@omni/arbor-app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const FEATURES = [
  {
    icon: Network,
    title: "Polyrepo graph",
    description:
      "Every repository a node, every dependency an edge, redrawn on each push. Trace a change's blast radius before you ship it.",
  },
  {
    icon: GitBranch,
    title: "Full git hosting",
    description:
      "Clone, push, and browse over fast smart-http, with @handle workspaces that mirror your organization.",
  },
  {
    icon: GitPullRequest,
    title: "Pull requests & review",
    description:
      "Open, review, and merge. The whole review loop, with the graph showing what each change touches.",
  },
  {
    icon: Search,
    title: "Browse & code search",
    description:
      "Jump across repositories and find any symbol or file, without cloning a thing.",
  },
  {
    icon: FileText,
    title: "Rendered markdown",
    description:
      "Nested READMEs, licenses, and docs rendered human-readable, exactly where you expect them.",
  },
  {
    icon: Bot,
    title: "Agents that see the forest",
    description:
      "Agents reason across the whole grove, not one file, answering questions and opening PRs with cross-repo context.",
  },
];

function Home() {
  const { session } = useRouteContext({ from: "__root__" });
  const isAuthenticated = !!session?.user?.rowId;

  const handleSignIn = () => signIn({ redirectUrl: BASE_URL });

  const primaryCta = isAuthenticated ? (
    <Button size="lg" asChild>
      <Link to="/repositories">
        <GitBranch className="mr-2 h-4 w-4" />
        Enter the forest
      </Link>
    </Button>
  ) : (
    <Button size="lg" asChild>
      <Link to="/apply">Request early access</Link>
    </Button>
  );

  return (
    <div className="bg-background text-foreground">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_100%_at_30%_0,rgba(16,157,81,0.10),transparent_70%)]" />
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.02fr_1.1fr] md:gap-10 md:py-24">
          <div>
            <h1 className="font-bold text-4xl tracking-tighter sm:text-5xl xl:text-6xl/[1.03]">
              A code forge that grows like a{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                forest
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed md:text-xl">
              Host every repository, then watch Arbor draw the living graph
              between them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {primaryCta}
              {isAuthenticated ? (
                <Button size="lg" variant="ghost" asChild>
                  <Link to="/graph">
                    Explore the graph
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="font-semibold text-emerald-600 text-sm hover:underline dark:text-emerald-400"
                >
                  Already invited? Sign in →
                </button>
              )}
            </div>
            {!isAuthenticated && (
              <div className="mt-6">
                <ApplicantCount />
              </div>
            )}
          </div>

          <BrowserFrame url="arbor.omni.dev/@omni/graph">
            <GraphMock />
          </BrowserFrame>
        </div>
      </section>

      {/* ===================== Trust strip ===================== */}
      <div className="border-border/60 border-y bg-muted/30">
        <div className="container mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-2 px-6 py-4 font-mono text-muted-foreground text-xs">
          <span className="text-foreground">$ git remote add arbor …</span>
          <span>·</span>
          <span>7 repositories mapped</span>
          <span>·</span>
          <span>9 dependencies</span>
          <span>·</span>
          <span>0 cycles</span>
          <span>·</span>
          <span>redrawn on every push</span>
        </div>
      </div>

      {/* ===================== Product: the repo browser ===================== */}
      <section className="container mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <BrowserFrame url="arbor.omni.dev/@omni/arbor-app">
              <RepoMock />
            </BrowserFrame>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              Everything you host on a forge, plus the map between the trees.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hosting, pull requests, review, code search, and rendered docs are
              all here. What no one else gives you is the view of how it all
              connects.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {[
                "Clone & push over fast smart-http",
                "Nested READMEs & markdown, rendered",
                "@handle workspaces that mirror your org",
                "Role-aware access, public or private",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.2 5 8.5 9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== Feature grid ===================== */}
      <section className="border-border/60 border-t bg-muted/20">
        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              One place for all your repositories
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A real forge, with the one feature that changes how you see your
              architecture.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-emerald-500/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Closing ===================== */}
      <section className="relative overflow-hidden border-border/60 border-t">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(16,157,81,0.12),transparent_70%)]" />
        <div className="container mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-bold text-4xl tracking-tight sm:text-5xl">
            See how your repositories connect.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">
            Bring them together and watch the graph grow.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {primaryCta}
            {!isAuthenticated && (
              <Button size="lg" variant="outline" onClick={handleSignIn}>
                <Lock className="mr-2 h-4 w-4" />
                Sign in
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
