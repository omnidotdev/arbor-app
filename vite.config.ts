import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsConfigPaths from "vite-tsconfig-paths";

// Thornberry ships built against the dev JSX runtime (`jsxDEV`), which
// `@vitejs/plugin-react` stubs to `undefined` in production builds. Alias
// `react/jsx-dev-runtime` to a shim that implements `jsxDEV` via the prod
// runtime so Thornberry components render in production (build only).
const jsxDevShim = fileURLToPath(
  new URL("./src/shims/reactJsxDevRuntime.ts", import.meta.url),
);

/**
 * Vite configuration.
 * @see https://vite.dev/config
 */
const viteConfig = defineConfig(({ command }) => ({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: "0.0.0.0",
  },
  resolve:
    command === "build"
      ? { alias: { "react/jsx-dev-runtime": jsxDevShim } }
      : undefined,
  plugins: [
    // NB: command is `serve` in development, `build` in production
    command === "serve" && devtools(),
    command === "serve" && mkcert(),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    nitroV2Plugin({
      preset: "node-server",
      compatibilityDate: "2026-06-23",
      externals: { inline: ["srvx", "react-dom"] },
    }),
    react(),
  ],
}));

export default viteConfig;
