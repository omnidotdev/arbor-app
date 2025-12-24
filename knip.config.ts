import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  entry: [
    "src/routes/**/*.{ts,tsx}",
    "src/router.tsx",
    "src/lib/graphql/graphqlFetch.ts",
  ],
  project: ["src/**/*.{ts,tsx,css}"],
  "graphql-codegen": {
    config: ["package.json", "src/lib/graphql/codegen.config.ts"],
  },
  ignoreExportsUsedInFile: true,
  ignore: [
    "src/generated/**",
    "src/routeTree.gen.ts",
    "src/lib/config/env.config.ts",
    "src/lib/utils.ts",
    "src/components/emails/**",
  ],
  ignoreDependencies: [
    "clsx",
    "tailwind-merge",
    // used by React Email preview server
    "@react-email/preview-server",
    // used by React Email templates
    "@react-email/components",
  ],
  tags: ["-knipignore"],
};

export default knipConfig;
