import { createFileRoute } from "@tanstack/react-router";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { PriceCard } from "@/components/pricing";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/config/env.config";
import pricesOptions from "@/lib/options/prices.options";
import createMetaTags from "@/lib/util/createMetaTags";
import { getSubscription } from "@/server/functions/subscriptions";

import type { Price, Subscription } from "@/lib/providers/billing";

export const FREE_PRICE: Price = {
  id: "free",
  active: true,
  currency: "usd",
  unit_amount: 0,
  recurring: null,
  metadata: { tier: "free" },
  product: {
    id: "free-product",
    name: "Free",
    description: "Start for free",
    marketing_features: [
      { name: "Unlimited private repositories" },
      { name: "Basic graph visualization" },
      { name: "Up to 5 collaborators per repository" },
      { name: "1 GB storage" },
      { name: "Community support" },
    ],
  },
};

const faqItems = [
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "You can export all your data at any time. After cancellation, your data will be retained for 30 days before being permanently deleted.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "Do you offer discounts for open source projects?",
    answer:
      "Yes! Open source projects qualify for free Team tier access. Contact us with your project details to apply.",
  },
];

const searchSchema = z.object({
  tier: z.enum(["free", "pro", "team"]).optional(),
});

export const Route = createFileRoute("/pricing")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      ...createMetaTags({
        title: "Pricing",
        description: "Simple and transparent pricing",
        url: `${BASE_URL}/pricing`,
      }),
    ],
  }),
  loader: async ({ context: { queryClient, session } }) => {
    const prices = await queryClient.ensureQueryData(pricesOptions());

    // Fetch subscriptions for all user organizations to determine current tiers
    const orgSubscriptions: Record<string, Subscription | null> = {};

    if (session?.organizations) {
      const subscriptionPromises = session.organizations.map(async (org) => {
        try {
          const subscription = await getSubscription({
            data: { organizationId: org.id },
          });
          return { orgId: org.id, subscription };
        } catch {
          return { orgId: org.id, subscription: null };
        }
      });

      const results = await Promise.all(subscriptionPromises);
      for (const { orgId, subscription } of results) {
        orgSubscriptions[orgId] = subscription;
      }
    }

    return { prices, orgSubscriptions };
  },
  component: PricingPage,
});

function PricingPage() {
  const { prices, orgSubscriptions } = Route.useLoaderData();
  const [billingInterval, setBillingInterval] = useState<"month" | "year">(
    "month",
  );

  const filteredPrices = prices.filter(
    (price) => price.recurring?.interval === billingInterval,
  );

  return (
    <div className="size-full pt-8">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-bold text-4xl text-foreground">
            Simple, transparent pricing
          </h1>

          <p className="text-muted-foreground">
            Free and open source. Pay only for what you need.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-lg bg-muted p-1">
            <button
              type="button"
              onClick={() => setBillingInterval("month")}
              className={`rounded-md px-4 py-2 font-medium text-sm transition-colors ${
                billingInterval === "month"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingInterval("year")}
              className={`relative rounded-md px-4 py-2 font-medium text-sm transition-colors ${
                billingInterval === "year"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 rounded-full bg-primary px-1.5 py-0.5 font-medium text-primary-foreground text-xs">
                -25%
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <PriceCard price={FREE_PRICE} orgSubscriptions={orgSubscriptions} />

          {filteredPrices.map((price) => (
            <PriceCard
              key={price.id}
              price={price}
              orgSubscriptions={orgSubscriptions}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="mb-4 font-bold text-2xl text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-8 max-w-3xl">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  item,
}: {
  item: { question: string; answer: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-lg"
      >
        {item.question}
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
      {isOpen && (
        <div className="pb-4 text-left text-muted-foreground">
          {item.answer}
        </div>
      )}
    </div>
  );
}
