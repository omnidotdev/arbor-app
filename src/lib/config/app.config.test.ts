import { describe, expect, test } from "bun:test";

import app from "./app.config";

describe("app config links", () => {
  // Product docs live under `/products/<id>` on the docs site; a bare
  // `/arbor` path 404s and broke the footer Docs link in production
  test("docs link points at the product docs path", () => {
    expect(app.links.docs).toBe("https://docs.omni.dev/products/arbor");
  });
});
