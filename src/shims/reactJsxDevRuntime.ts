// Production shim for `react/jsx-dev-runtime`.
//
// Thornberry is published built against the development JSX runtime (`jsxDEV`).
// In a production build, `@vitejs/plugin-react` stubs `react/jsx-dev-runtime`
// to `{ jsxDEV: undefined }` (dev-only API), so every Thornberry component
// throws `jsxDEV is not a function` at render. This shim re-implements `jsxDEV`
// on top of the production `jsx`/`jsxs` runtime and is aliased in only for
// `command === "build"` (see vite.config.ts), leaving dev tooling untouched.
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

import type { ReactElement } from "react";

const jsxDEV = (
  type: Parameters<typeof jsx>[0],
  props: Parameters<typeof jsx>[1],
  key: Parameters<typeof jsx>[2],
  isStaticChildren?: boolean,
): ReactElement =>
  isStaticChildren ? jsxs(type, props, key) : jsx(type, props, key);

export { Fragment, jsx, jsxDEV, jsxs };
