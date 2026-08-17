// Re-export the shared organization context from @omnidotdev/providers. Org
// identity (name, slug, roles) is owned by Gatekeeper and resolved from JWT
// claims, so the provider is fed `session.organizations` (not a DB query).
export {
  OrganizationProvider,
  useOrganization,
} from "@omnidotdev/providers/react";
