import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { GraphTierRequirement } from "@/lib/util/graphTier";

interface GraphTierUpgradePromptProps {
  requirement: GraphTierRequirement;
  /** fallback description of the gated feature, shown when the API omits a message */
  feature?: string;
  className?: string;
}

/**
 * Labeled upgrade prompt shown in place of a gated graph feature. Per Omni policy an
 * access-gated surface must be visibly labeled with the plan it requires (a "Pro" or
 * "Team" badge) rather than hidden or shown as a raw error, and it must keep the path
 * to unlock it visible
 */
export function GraphTierUpgradePrompt({
  requirement,
  feature,
  className,
}: GraphTierUpgradePromptProps) {
  const { plan, message } = requirement;

  return (
    <Card
      className={cn("flex flex-col items-start gap-3 p-5 text-left", className)}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-medium text-primary text-xs">
        <Lock className="h-3 w-3" />
        {plan} plan
      </span>

      <div className="space-y-1">
        <h3 className="font-semibold text-base">Available on {plan}</h3>
        <p className="max-w-prose text-muted-foreground text-sm">
          {message ??
            feature ??
            `Upgrade to ${plan} to unlock this graph feature.`}
        </p>
      </div>

      <Button size="sm" asChild>
        <Link
          to="/pricing"
          search={{ tier: plan.toLowerCase() as "pro" | "team" }}
        >
          View {plan} plan
        </Link>
      </Button>
    </Card>
  );
}
