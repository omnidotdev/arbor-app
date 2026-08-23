import { createFileRoute } from "@tanstack/react-router";

import { BETA_TERMS_SECTIONS, BETA_TERMS_VERSION } from "@/lib/beta/terms";
import { BASE_URL } from "@/lib/config/env.config";
import createMetaTags from "@/lib/util/createMetaTags";

export const Route = createFileRoute("/beta-terms")({
  head: () => ({
    meta: [
      ...createMetaTags({
        title: "Beta Terms",
        description: "Confidentiality terms for the arbor closed beta",
        url: `${BASE_URL}/beta-terms`,
      }),
    ],
  }),
  component: BetaTermsPage,
});

function BetaTermsPage() {
  return (
    <div className="size-full pt-8">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <h1 className="font-bold text-4xl text-foreground">Beta terms</h1>
          <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground text-xs">
            Version {BETA_TERMS_VERSION}
          </span>
        </div>

        <p className="mb-12 text-muted-foreground">
          Please read these terms before applying to the closed beta. Applying
          means you accept them.
        </p>

        <div className="space-y-8">
          {BETA_TERMS_SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 font-semibold text-foreground text-xl">
                {section.heading}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
