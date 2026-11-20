import { describe, expect, test } from "bun:test";

import { transferTargets } from "./transferTargets";

const orgs = [
  { id: "a", name: "Alpha", slug: "alpha", roles: ["owner"] },
  { id: "b", name: "Beta", slug: "beta", roles: ["admin"] },
  { id: "c", name: "Gamma", slug: "gamma", roles: ["member"] },
];

describe("transferTargets", () => {
  test("an owner or admin moves into their other managed workspaces", () => {
    expect(
      transferTargets({
        organizations: orgs,
        currentOrganizationId: "a",
        isOwner: false,
      }),
    ).toEqual({
      canMoveOut: true,
      targets: [{ id: "b", name: "Beta", slug: "beta" }],
    });
  });

  test("a plain member cannot move it out", () => {
    expect(
      transferTargets({
        organizations: orgs,
        currentOrganizationId: "c",
        isOwner: true,
      }).canMoveOut,
    ).toBe(false);
  });

  test("a personal repository moves for its owner only", () => {
    expect(
      transferTargets({
        organizations: orgs,
        currentOrganizationId: null,
        isOwner: true,
      }).targets.map((t) => t.id),
    ).toEqual(["a", "b"]);
    expect(
      transferTargets({
        organizations: orgs,
        currentOrganizationId: null,
        isOwner: false,
      }).canMoveOut,
    ).toBe(false);
  });
});
