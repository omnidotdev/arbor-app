import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  entry: ["src/routes/**/*.{ts,tsx}", "src/router.tsx"],
  project: ["src/**/*.{ts,tsx,css}"],
  ignoreExportsUsedInFile: true,
  ignore: [
    "src/generated/**",
    "src/routeTree.gen.ts",
    "src/lib/config/env.config.ts",
    "src/lib/utils.ts",
  ],
  ignoreDependencies: ["clsx", "tailwind-merge"],
  tags: ["-knipignore"],
};

export default knipConfig;
