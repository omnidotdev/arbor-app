import type { CodegenConfig } from "@graphql-codegen/cli";
import type { Types } from "@graphql-codegen/plugin-helpers";

type GraphQLCodegenConfig = Types.ConfiguredOutput;

// offline schema source: the API's committed SDL (no running server / introspection needed).
// Override with GRAPHQL_SCHEMA_URL to point at a live endpoint if ever required.
const LOCAL_SCHEMA_PATH = "../arbor-api/src/generated/graphql/schema.graphql";

/**
 * Shared plugins across the generated GraphQL Codegen artifacts.
 */
const sharedPlugins: GraphQLCodegenConfig["plugins"] = [
  "typescript",
  "typescript-operations",
  {
    add: {
      // prepend artifact with TS no-check directive
      content: "// @ts-nocheck",
    },
  },
];

/**
 * Shared configuration across each of the generated GraphQL Codegen artifacts.
 */
const sharedConfig: GraphQLCodegenConfig["config"] = {
  scalars: {
    Date: "Date",
    Datetime: "Date",
    UUID: "string",
    Cursor: "string",
    BigInt: "string",
  },
};

/**
 * GraphQL Code Generator configuration. This generates various artifacts based on the GraphQL schema.
 */
const graphqlCodegenConfig: CodegenConfig = {
  schema: process.env.GRAPHQL_SCHEMA_URL || LOCAL_SCHEMA_PATH,
  documents: "src/lib/graphql/**/*.graphql",
  // suppress non-zero exit code if there are no documents to generate
  ignoreNoDocuments: true,
  config: {
    // https://github.com/dotansimha/graphql-code-generator/issues/6935#issuecomment
    // https://stackoverflow.com/questions/74623455/how-to-ensure-enum-order-in-graphql
    sort: true,
  },
  hooks: {
    // NB: graphql-codegen v7 emits internal helper types (Exact, Incremental) above any
    // prepended `add` content, which pushes `// @ts-nocheck` off the first line and stops it
    // suppressing the generated artifact. Normalize the directive back to the very first line
    beforeOneFileWrite: (_path: string, content: string) => {
      const directive = "// @ts-nocheck";
      const withoutDirective = content
        .split("\n")
        .filter((line) => line.trim() !== directive)
        .join("\n");
      return `${directive}\n${withoutDirective}`;
    },
  },
  generates: {
    // TypeScript SDK
    "src/generated/graphql.sdk.ts": {
      plugins: [...sharedPlugins, "typescript-graphql-request"],
      config: sharedConfig,
    },
    // React Query hooks, types, and utilities
    "src/generated/graphql.ts": {
      plugins: [...sharedPlugins, "typescript-react-query"],
      config: {
        ...sharedConfig,
        reactQueryVersion: 5,
        addInfiniteQuery: true,
        addSuspenseQuery: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        exposeFetcher: true,
        fetcher: {
          func: "@/lib/graphql/graphqlFetch#graphqlFetch",
        },
      },
    },
  },
};

export default graphqlCodegenConfig;
