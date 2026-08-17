import { describe, expect, test } from "bun:test";
import { type ASTNode, Kind, parse, visit } from "graphql";

import * as generated from "@/generated/graphql";

/**
 * Guardrail against connection queries that over-fetch past the API's GraphQL
 * Armor query-cost ceiling (maxCost 8000, see arbor-api armor.plugin.ts). Armor
 * multiplies a connection's per-node field cost by its `first` argument, and
 * sibling connections plus nested relations sum together, so a large `first`
 * silently pushes a document over the ceiling. Armor then rejects it as an
 * opaque 500 the client retries, and the panel never loads.
 *
 * Hit in production: PullRequestConversation shipped `first: 500` (comments) and
 * `first: 200` (reviews) with nested author/reviewer relations, so the PR
 * conversation panel failed to load on every pull request. A per-connection cap
 * keeps any single document's page size in a range the cost ceiling tolerates.
 */
const MAX_LIST_PAGE_SIZE = 100;

/** Collect every `first: <int>` connection-argument value in a document. */
const firstArguments = (node: ASTNode): number[] => {
  const values: number[] = [];
  visit(node, {
    Argument(argument) {
      if (
        argument.name.value === "first" &&
        argument.value.kind === Kind.INT
      ) {
        values.push(Number.parseInt(argument.value.value, 10));
      }
    },
  });
  return values;
};

describe("generated document page sizes", () => {
  const documents = Object.entries(generated).filter(([name]) =>
    name.endsWith("Document"),
  );

  test.each(documents)("%s keeps `first` within the cost budget", (_name, doc) => {
    for (const value of firstArguments(parse(String(doc)))) {
      expect(value).toBeLessThanOrEqual(MAX_LIST_PAGE_SIZE);
    }
  });
});
