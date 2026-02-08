const env = { ...import.meta.env, ...process.env };

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
export const BILLING_BASE_URL =
  env.BILLING_BASE_URL || env.VITE_BILLING_BASE_URL;

// Self-hosted flag
export const SELF_HOSTED = env.SELF_HOSTED || env.VITE_SELF_HOSTED;

export const API_GRAPHQL_URL = `${API_BASE_URL}/graphql`;
export const AUTH_ISSUER_URL = `${AUTH_BASE_URL}/api/auth`;
export const CONSOLE_URL = import.meta.env.VITE_CONSOLE_URL;

// environment helpers
export const isDevEnv = import.meta.env.DEV;
export const isProdEnv = import.meta.env.PROD;
export const isSelfHosted = SELF_HOSTED === "true";
