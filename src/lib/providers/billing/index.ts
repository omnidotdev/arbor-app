/**
 * Billing provider for Arbor.
 *
 * Thin wrapper around @omnidotdev/providers.
 */

import { createBillingProvider } from "@omnidotdev/providers/billing";

import { BILLING_BASE_URL, hasBilling } from "@/lib/config/env.config";

export type {
  BillingProvider,
  CheckoutParams,
  Entitlement,
  EntitlementsResponse,
  Price,
  Subscription,
} from "@omnidotdev/providers/billing";

// Degrade gracefully when billing is not configured. The Aether provider throws
// at construction if baseUrl is missing, and this module is bundled into the
// client (the pricing route imports it), so a missing BILLING_BASE_URL would
// crash the route at load. The noop provider returns empty/null for reads and
// rejects writes with a clear "Billing is not configured" signal instead
const billing = hasBilling
  ? createBillingProvider({
      provider: "aether",
      baseUrl: BILLING_BASE_URL,
      appId: "arbor",
    })
  : createBillingProvider({ provider: "noop" });

export default billing;
