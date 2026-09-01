import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsConfigPaths from "vite-tsconfig-paths";

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
      // Inline modules to avoid resolution issues with the Node runtime;
      // better-auth 1.7 ships subpath ESM (@better-auth/utils) that nitro must
      // inline or the server build fails at runtime with ERR_MODULE_NOT_FOUND
      externals: {
        inline: ["srvx", "react-dom", "better-auth", "@better-auth"],
      },
      routeRules: {
        "/**": {
          headers: {
            "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
            "Cache-Control": "public, max-age=0, must-revalidate",
          },
        },
      },
    }),
    react(),
  ],
}));

export default viteConfig;
