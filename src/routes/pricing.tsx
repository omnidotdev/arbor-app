import { createFileRoute } from "@tanstack/react-router";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { PriceCard } from "@/components/pricing";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/config/env.config";
import pricesOptions from "@/lib/options/prices.options";
import createMetaTags from "@/lib/util/createMetaTags";
import {
  getEntitlements,
  getSubscription,
} from "@/server/functions/subscriptions";

import type {
  EntitlementsResponse,
  Price,
  Subscription,
} from "@/lib/providers/billing";

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
      { name: "Unlimited public and private repositories" },
      { name: "Per-repository dependency graph" },
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
      "You can export all your data at any time, and your repositories stay accessible through the end of your current billing period. Export anything you want to keep before it ends.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "Do you offer discounts for open source projects?",
    answer:
      "We run a case-by-case program for open source projects, reviewed and granted at our discretion. Contact us with your project details to apply. Approval is not automatic.",
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

    // Fetch subscriptions and entitlements for all user organizations to
    // determine current tiers. Entitlements are the fallback for comped or
    // manually granted plans that have no live Stripe subscription, where the
    // subscription lookup returns null
    const orgSubscriptions: Record<string, Subscription | null> = {};
    const orgEntitlements: Record<string, EntitlementsResponse | null> = {};

    if (session?.organizations) {
      const orgTierPromises = session.organizations.map(async (org) => {
        const [subscription, entitlements] = await Promise.all([
          getSubscription({ data: { organizationId: org.id } }).catch(
            () => null,
          ),
          getEntitlements({ data: { organizationId: org.id } }).catch(
            () => null,
          ),
        ]);
        return { orgId: org.id, subscription, entitlements };
      });

      const results = await Promise.all(orgTierPromises);
      for (const { orgId, subscription, entitlements } of results) {
        orgSubscriptions[orgId] = subscription;
        orgEntitlements[orgId] = entitlements;
      }
    }

    return { prices, orgSubscriptions, orgEntitlements };
  },
  component: PricingPage,
});

function PricingPage() {
  const { prices, orgSubscriptions, orgEntitlements } = Route.useLoaderData();
  const [billingInterval, setBillingInterval] = useState<"month" | "year">(
    "month",
  );

  const filteredPrices = prices.filter(
    (price: Price) => price.recurring?.interval === billingInterval,
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
          <PriceCard
            price={FREE_PRICE}
            orgSubscriptions={orgSubscriptions}
            orgEntitlements={orgEntitlements}
          />

          {filteredPrices.map((price: Price) => (
            <PriceCard
              key={price.id}
              price={price}
              orgSubscriptions={orgSubscriptions}
              orgEntitlements={orgEntitlements}
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
