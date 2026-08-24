import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useMyTesterApplicationQuery,
  useSubmitTesterApplicationMutation,
} from "@/generated/graphql";
import signIn from "@/lib/auth/signIn";
import { BETA_TERMS_VERSION } from "@/lib/beta/terms";
import { BASE_URL } from "@/lib/config/env.config";
import createMetaTags from "@/lib/util/createMetaTags";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      ...createMetaTags({
        title: "Apply for the closed beta",
        description: "Apply to join the arbor closed beta.",
        url: `${BASE_URL}/apply`,
      }),
    ],
  }),
  component: ApplyPage,
});

/** Generic, user-safe fallback when a submission fails for an unexpected reason. */
const GENERIC_SUBMIT_ERROR =
  "We could not submit your application. Please try again.";

function ApplyPage() {
  const { session } = Route.useRouteContext();
  const isAuthenticated = !!session?.user?.rowId;

  // Anonymous visitors need an Omni account to apply: prompt sign-in and return
  // here afterwards, rather than showing a form they cannot submit
  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground text-xs">
          Closed beta
        </span>

        <h1 className="mt-4 font-bold text-3xl text-foreground">
          Apply for the closed beta
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-muted-foreground text-sm">
          Arbor is in closed beta. Sign in with your Omni account to apply for
          access.
        </p>

        <Button
          className="mt-6"
          onClick={() => signIn({ redirectUrl: `${BASE_URL}/apply` })}
        >
          Continue with Omni
        </Button>
      </div>
    );
  }

  return <ApplyInner />;
}

function ApplyInner() {
  const { session } = Route.useRouteContext();
  const { data, isLoading, refetch } = useMyTesterApplicationQuery();
  const application = data?.myTesterApplication ?? null;

  // Signed in with Omni, so the name and email are already known: show them and
  // submit them from the session rather than asking again
  const displayName = session?.user?.name?.trim() || session?.user?.username;
  const email = session?.user?.email;

  const [useCase, setUseCase] = useState("");
  const [hostStack, setHostStack] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [links, setLinks] = useState("");
  const [notes, setNotes] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useSubmitTesterApplicationMutation({
    onSuccess: () => {
      setError(null);
      refetch();
    },
    onError: (err: unknown) =>
      setError(err instanceof Error ? err.message : GENERIC_SUBMIT_ERROR),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center text-muted-foreground text-sm">
        Loading your application...
      </div>
    );
  }

  const canSubmit = useCase.trim().length > 0 && termsAccepted;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || submit.isPending) return;

    // only carry answered optional fields, so the stored answers stay clean
    const answers: Record<string, string> = { useCase: useCase.trim() };
    if (hostStack.trim()) answers.hostStack = hostStack.trim();
    if (teamSize.trim()) answers.teamSize = teamSize.trim();
    if (links.trim()) answers.links = links.trim();
    if (notes.trim()) answers.notes = notes.trim();

    submit.mutate({
      input: {
        answers,
        ndaAccepted: true,
        ndaVersion: BETA_TERMS_VERSION,
      },
    });
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" />
        Back to home
      </Link>

      <div className="flex items-center gap-3">
        <h1 className="font-bold text-3xl text-foreground">
          Apply for the closed beta
        </h1>

        <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground text-xs">
          Beta
        </span>
      </div>

      <p className="mt-3 text-muted-foreground text-sm">
        Applying as{" "}
        <span className="font-medium text-foreground">{displayName}</span>
        {email ? ` (${email})` : null}.
      </p>

      {application?.status === "approved" ? (
        <div className="mt-8 rounded-2xl border border-border bg-card/50 p-5">
          <p className="font-medium text-sm">You're in the closed beta</p>
          <p className="mt-1 text-muted-foreground text-sm">
            You're all set. Head to your repositories to get started.
          </p>

          <Button className="mt-4" asChild>
            <Link to="/repositories">Go to Arbor</Link>
          </Button>
        </div>
      ) : application?.status === "pending" ? (
        <div className="mt-8 rounded-2xl border border-border bg-card/50 p-5">
          <p className="font-medium text-sm">
            Your application is under review
          </p>
          <p className="mt-1 text-muted-foreground text-sm">
            Thanks for applying. We review each application by hand and will let
            you know here.
          </p>
        </div>
      ) : (
        <>
          {application?.status === "declined" && (
            <div className="mt-8 rounded-2xl border border-border bg-card/50 p-4">
              <p className="font-medium text-sm">
                Your last application wasn't accepted
              </p>
              {application.reviewerNote && (
                <p className="mt-1 text-muted-foreground text-sm">
                  {application.reviewerNote}
                </p>
              )}
              <p className="mt-1 text-muted-foreground text-sm">
                You're welcome to apply again.
              </p>
            </div>
          )}

          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium text-sm">
                What would you use Arbor for?
              </span>
              <textarea
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="What you're building, and what you'd use Arbor for."
                rows={4}
                maxLength={2000}
                required
                className="w-full resize-none rounded-lg border border-input bg-transparent px-3 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </label>

            <label htmlFor="apply-stack" className="flex flex-col gap-1.5">
              <span className="font-medium text-sm">
                Host and stack (optional)
              </span>
              <Input
                id="apply-stack"
                value={hostStack}
                onChange={(e) => setHostStack(e.target.value)}
                placeholder="Where you host today, and your primary stack."
                maxLength={200}
              />
            </label>

            <label htmlFor="apply-team-size" className="flex flex-col gap-1.5">
              <span className="font-medium text-sm">Team size (optional)</span>
              <Input
                id="apply-team-size"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                placeholder="How many people would use Arbor with you?"
                maxLength={100}
              />
            </label>

            <label htmlFor="apply-links" className="flex flex-col gap-1.5">
              <span className="font-medium text-sm">Links (optional)</span>
              <Input
                id="apply-links"
                value={links}
                onChange={(e) => setLinks(e.target.value)}
                placeholder="Your site, repos, or anything you'd like to share."
                maxLength={500}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-medium text-sm">
                Anything else? (optional)
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Timezone, questions for us, anything we should know."
                rows={3}
                maxLength={1000}
                className="w-full resize-none rounded-lg border border-input bg-transparent px-3 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </label>

            <label className="flex items-start gap-2.5">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 size-4 rounded border-input"
              />
              <span className="text-muted-foreground text-sm">
                I agree to the{" "}
                <Link
                  to="/beta-terms"
                  className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
                >
                  beta confidentiality terms
                </Link>
                .
              </span>
            </label>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <Button
              type="submit"
              className="h-11"
              disabled={!canSubmit || submit.isPending}
            >
              {submit.isPending ? "Submitting..." : "Submit application"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
