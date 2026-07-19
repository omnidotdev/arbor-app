// Build-time vars take precedence to prevent SSR hydration mismatch
const env =
  typeof window === "undefined"
    ? { ...process.env, ...import.meta.env }
    : import.meta.env;

/**
 * Environment variables.
 */
export const {
  // core
  VITE_BASE_URL: BASE_URL,
  // auth (server-side secrets)
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,

  // feature flags
  VITE_FLAGS_API_HOST: FLAGS_API_HOST,
  VITE_FLAGS_CLIENT_KEY: FLAGS_CLIENT_KEY,
} = env;

// Server-side URLs - prefer non-VITE versions for server functions
export const API_BASE_URL = env.API_BASE_URL || env.VITE_API_BASE_URL;
export const AUTH_BASE_URL = env.AUTH_BASE_URL || env.VITE_AUTH_BASE_URL;

// Git clone host. A dedicated clean host (git.arbor.omni.dev) serves the same
// git Smart-HTTP endpoints as the API's /git path, so production defaults to it.
// An explicit VITE_GIT_BASE_URL still wins; other environments fall back to the
// API's /git path so clone urls keep working without a dedicated host
const defaultGitBaseUrl =
  API_BASE_URL === "https://api.arbor.omni.dev"
    ? "https://git.arbor.omni.dev"
    : `${API_BASE_URL}/git`;

export const GIT_BASE_URL =
  env.GIT_BASE_URL || env.VITE_GIT_BASE_URL || defaultGitBaseUrl;

// Internal auth URL for server-to-server communication (Docker service name)
// Falls back to AUTH_BASE_URL for non-Docker environments
export const AUTH_INTERNAL_URL =
  typeof window === "undefined"
    ? process.env.AUTH_INTERNAL_URL || AUTH_BASE_URL
    : AUTH_BASE_URL;
export const BILLING_BASE_URL =
  env.BILLING_BASE_URL || env.VITE_BILLING_BASE_URL;

export const API_GRAPHQL_URL = `${API_BASE_URL}/graphql`;
export const AUTH_ISSUER_URL = `${AUTH_BASE_URL}/api/auth`;
export const CONSOLE_URL = import.meta.env.VITE_CONSOLE_URL;

// environment helpers
export const isDevEnv = import.meta.env.DEV;
export const isProdEnv = import.meta.env.PROD;
/** Whether billing integration is available */
export const hasBilling = !!BILLING_BASE_URL;

// Startup warnings for optional integrations
if (!BILLING_BASE_URL)
  console.warn("BILLING_BASE_URL not set, billing disabled");
if (!FLAGS_API_HOST)
  console.warn("FLAGS_API_HOST not set, feature flags disabled");
