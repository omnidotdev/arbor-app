import { useMutation } from "@tanstack/react-query";
import {
  useNavigate,
  useRouteContext,
  useSearch,
} from "@tanstack/react-router";
import {
  BuildingIcon,
  CheckIcon,
  ChevronDownIcon,
  PlusIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CreateWorkspaceModal from "@/components/pricing/CreateWorkspaceModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import signIn from "@/lib/auth/signIn";
import { BASE_URL, hasBilling } from "@/lib/config/env.config";
import capitalizeFirstLetter from "@/lib/util/capitalizeFirstLetter";
import getTierFromEntitlements from "@/lib/util/getTierFromEntitlements";
import { cn } from "@/lib/utils";
import { createCheckoutWithWorkspace } from "@/server/functions/subscriptions";

import type {
  EntitlementsResponse,
  Price,
  Subscription,
} from "@/lib/providers/billing";

interface Props {
  price: Price;
  orgSubscriptions?: Record<string, Subscription | null>;
  orgEntitlements?: Record<string, EntitlementsResponse | null>;
}

export const PriceCard = ({
  price,
  orgSubscriptions = {},
  orgEntitlements = {},
}: Props) => {
  const { session } = useRouteContext({ strict: false });
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { tier?: string };
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const TIER_ORDER = ["free", "pro", "team"] as const;
  const getTierIndex = (t: string | null): number =>
    TIER_ORDER.indexOf((t ?? "free") as (typeof TIER_ORDER)[number]);

  const tier = price.metadata?.tier as string;
  const isTeamTier = tier === "team";
  const isFreeTier = tier === "free";

  // Resolve an org's tier, preferring the live Stripe subscription and falling
  // back to its billing entitlement. A null subscription (failed lookup, or a
  // comped/manually granted tier with no Stripe subscription) must not read as
  // "free" when the org actually holds a paid entitlement
  const getOrgTier = (orgId: string): string => {
    const subscription = orgSubscriptions[orgId];
    if (subscription) {
      // Product name is like "Arbor Pro" or "Arbor Team"
      const productName = subscription.product?.name?.toLowerCase() ?? "";
      if (productName.includes("team")) return "team";
      if (productName.includes("pro")) return "pro";
    }
    // Fall back to the entitlement tier (lowercased to match the app's keys)
    const entitlementTier = getTierFromEntitlements(
      orgEntitlements[orgId],
    )?.toLowerCase();
    if (entitlementTier) return entitlementTier;
    return "free";
  };

  // Categorize organizations by their upgrade eligibility for this tier
  // The context session is loosely typed here (strict: false), so pin the
  // element shape the buttons and tier lookups rely on
  const allOrgs: Array<{ id: string; name: string }> =
    session?.organizations ?? [];
  const upgradeableOrgs = allOrgs.filter(
    (org) => getTierIndex(getOrgTier(org.id)) < getTierIndex(tier),
  );
  const nonUpgradeableOrgs = allOrgs.filter(
    (org) => getTierIndex(getOrgTier(org.id)) >= getTierIndex(tier),
  );

  // Show dropdown if authenticated, has upgradeable orgs or can create new, paid tier, billing enabled
  const showDropdown =
    !!session && !isFreeTier && hasBilling && !!session.organizations?.length;

  // Check if this card's tier matches the URL param (for post-sign-in auto-open)
  const shouldAutoOpen = search.tier === tier && !!session;

  // Auto-open menu when redirected back from sign-in
  useEffect(() => {
    if (shouldAutoOpen && showDropdown) {
      setIsMenuOpen(true);
    }
  }, [shouldAutoOpen, showDropdown]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const { mutateAsync: initiateCheckout } = useMutation({
    mutationFn: async (params: {
      workspaceId?: string;
      createWorkspace?: { name: string; slug: string };
    }) => {
      setIsCheckoutLoading(true);
      return createCheckoutWithWorkspace({
        data: {
          priceId: price.id,
          successUrl: `${BASE_URL}/@__SLUG__`,
          cancelUrl: `${BASE_URL}/pricing`,
          ...params,
        },
      });
    },
    onSuccess: (result) => {
      // Redirect to Stripe checkout
      window.location.href = result.checkoutUrl;
    },
    onError: () => {
      setIsCheckoutLoading(false);
    },
  });

  // Handle workspace selection from dropdown
  const handleWorkspaceSelect = (workspaceId: string) => {
    setIsMenuOpen(false);
    if (workspaceId === "create-new") {
      setIsModalOpen(true);
    } else {
      initiateCheckout({ workspaceId });
    }
  };

  // Handle new workspace creation from modal
  const handleCreateWorkspace = (name: string, slug: string) => {
    setIsModalOpen(false);
    initiateCheckout({ createWorkspace: { name, slug } });
  };

  const handleClick = () => {
    if (!session) {
      // Not logged in - sign in first, redirect back to pricing with tier
      signIn({
        redirectUrl: `${BASE_URL}/pricing?tier=${tier}`,
      });
      return;
    }

    // Free tier - just go to repositories
    if (isFreeTier) {
      if (!session.organizations?.length) {
        navigate({ to: "/repositories" });
      } else {
        navigate({ to: "/repositories" });
      }
      return;
    }

    // No billing configured - just go to repositories
    if (!hasBilling) {
      navigate({ to: "/repositories" });
      return;
    }

    // Paid tier without orgs - open create workspace modal
    if (!session.organizations?.length) {
      setIsModalOpen(true);
      return;
    }

    // Has orgs - toggle dropdown
    setIsMenuOpen((prev) => !prev);
  };

  const buttonContent = isFreeTier
    ? "Get Started"
    : `Continue with ${capitalizeFirstLetter(tier)}`;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount / 100);
  };

  return (
    <>
      <Card
        className={cn(
          "relative flex flex-1 flex-col border-2",
          isTeamTier &&
            "border-primary bg-primary/5 shadow-lg shadow-primary/20",
        )}
      >
        {isTeamTier && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground text-sm">
              Recommended
            </span>
          </div>
        )}
        <CardHeader
          className={cn(
            "mb-4 rounded-xl rounded-b-none bg-muted pb-8 text-center",
            isTeamTier && "bg-primary/10",
          )}
        >
          <CardTitle className="font-bold text-2xl">
            {capitalizeFirstLetter(tier)}
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground">
            {price.product?.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8 text-center">
          <div className="mb-8">
            <div className="flex items-baseline justify-center font-bold text-4xl">
              {formatPrice(price.unit_amount ?? 0)}
              <span className="ml-1 font-medium text-lg text-muted-foreground">
                {price.recurring && `/organization/${price.recurring.interval}`}
              </span>
            </div>
          </div>

          <ul className="space-y-4 text-left">
            {price.product?.marketing_features.map((feature) => (
              <li key={feature.name} className="flex items-start gap-3">
                <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                  <CheckIcon
                    size={14}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>

                <span className="text-foreground leading-6">
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="mt-auto pt-8">
          {showDropdown ? (
            <div className="relative w-full" ref={menuRef}>
              <Button
                variant={isTeamTier ? "default" : "outline"}
                size="lg"
                className="w-full font-semibold"
                onClick={handleClick}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? "Loading..." : buttonContent}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>

              {isMenuOpen && (
                <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
                  {allOrgs.length > 0 && (
                    <>
                      <div className="p-2 font-medium text-muted-foreground text-sm">
                        Your organizations
                      </div>
                      {upgradeableOrgs.map((org) => (
                        <button
                          key={org.id}
                          type="button"
                          onClick={() => handleWorkspaceSelect(org.id)}
                          className="flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent focus:outline-none"
                        >
                          <BuildingIcon
                            size={16}
                            className="text-muted-foreground"
                          />
                          <span className="flex-1 truncate font-medium text-sm">
                            {org.name}
                          </span>
                          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary text-xs">
                            Upgrade
                          </span>
                        </button>
                      ))}
                      {nonUpgradeableOrgs.map((org) => {
                        const orgTier = getOrgTier(org.id);
                        const isSameTier = orgTier === tier;

                        return (
                          <div
                            key={org.id}
                            className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm opacity-60"
                          >
                            <BuildingIcon
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="flex-1 truncate font-medium text-sm">
                              {org.name}
                            </span>
                            <span className="rounded bg-muted px-1.5 py-0.5 text-muted-foreground text-xs">
                              {isSameTier
                                ? "Current plan"
                                : capitalizeFirstLetter(orgTier)}
                            </span>
                          </div>
                        );
                      })}
                      <div className="my-1 h-px bg-border" />
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => handleWorkspaceSelect("create-new")}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent focus:outline-none"
                  >
                    <PlusIcon size={16} className="text-muted-foreground" />
                    <span className="font-medium text-sm">
                      New organization
                    </span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant={isTeamTier ? "default" : "outline"}
              size="lg"
              className="w-full font-semibold"
              onClick={handleClick}
              disabled={isCheckoutLoading}
            >
              {isCheckoutLoading ? "Loading..." : buttonContent}
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Modal for creating new workspace */}
      <CreateWorkspaceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tierName={capitalizeFirstLetter(tier)}
        onSubmit={handleCreateWorkspace}
        isLoading={isCheckoutLoading}
      />
    </>
  );
};
