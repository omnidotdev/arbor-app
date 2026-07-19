import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  entry: [
    "src/routes/**/*.{ts,tsx}",
    "src/router.tsx",
    "src/start.ts",
    "src/lib/graphql/graphqlFetch.ts",
    "src/lib/providers/billing/index.ts",
    "src/server/functions/*.ts",
    "src/**/*.test.{ts,tsx}",
  ],
  // NB: files are reported as unused if they are in the set of project files, but not in the set of files resolved from the entry files. See: https://knip.dev/guides/configuring-project-files
  project: ["src/**/*.{ts,tsx,css}"],
  // NB: Modified from the default GraphQL Codegen configuration, see: https://knip.dev/reference/plugins/graphql-codegen
  "graphql-codegen": {
    config: ["package.json", "src/lib/graphql/codegen.config.ts"],
  },
  // used for proper management of Thornberry components, see https://knip.dev/reference/configuration#ignoreexportsusedinfile
  ignoreExportsUsedInFile: true,
  ignore: [
    "src/generated/**",
    "src/routeTree.gen.ts",
    "src/components/emails/**",
    "src/components/ui/**",
    "src/lib/config/env.config.ts",
    // WIP: Pull request components not yet integrated
    "src/components/pullRequest/**",
    "src/lib/util/**",
    "src/lib/options/**",
    "src/server/middleware.ts",
    // WIP: Pricing components
    "src/components/pricing/**",
    // WIP: Invite infrastructure (ready for members page)
    "src/lib/hooks/useOrganizationMembers.ts",
    "src/lib/validation/invitation.ts",
  ],
  ignoreDependencies: [
    // used by React Email preview server
    "@react-email/preview-server",
    // used by React Email templates
    "@react-email/components",
    // pulled in by the React Email preview tooling (react-email 6)
    "@react-email/ui",
  ],
  tags: ["-knipignore"],
};

export default knipConfig;
