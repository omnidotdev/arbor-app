import { describe, expect, test } from "bun:test";

import { movedRepositoryPath } from "./movedRepositoryPath";

describe("movedRepositoryPath", () => {
  const from = { workspaceSlug: "claude", repoSlug: "site-x" };
  const to = { ownerSlug: "studio", repoSlug: "site-x" };

  test("keeps the page and query under the new workspace", () => {
    expect(
      movedRepositoryPath({
        pathname: "/@claude/site-x/commits",
        searchStr: "?ref=master",
        from,
        to,
      }),
    ).toBe("/@studio/site-x/commits?ref=master");
  });

  test("the repository home redirects to the new home", () => {
    expect(
      movedRepositoryPath({
        pathname: "/@claude/site-x",
        searchStr: "",
        from,
        to,
      }),
    ).toBe("/@studio/site-x");
  });
});
