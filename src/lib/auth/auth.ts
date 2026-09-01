import { createOmniOAuthConfig } from "@omnidotdev/providers/auth";
import { getCookie } from "@tanstack/react-start/server";
import { betterAuth } from "better-auth";
import { customSession, genericOAuth } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import { authCache } from "@/lib/auth/authCache";
import {
  AUTH_BASE_URL,
  AUTH_CLIENT_ID,
  AUTH_CLIENT_SECRET,
  AUTH_INTERNAL_URL,
  BASE_URL,
} from "@/lib/config/env.config";

const { AUTH_SECRET } = process.env;

// better-auth 1.7 narrowed genericOAuth's `authorizationUrlParams` to a plain
// `Record<string, string>`, but the shared helper still returns it as a
// function (a `screen_hint` signup hook this app does not use). Override it to
// `undefined` so the config matches the 1.7 contract instead of silently
// passing a function the runtime would spread to nothing
const omniOAuthConfig = {
  ...createOmniOAuthConfig({
    clientId: AUTH_CLIENT_ID!,
    clientSecret: AUTH_CLIENT_SECRET!,
    authBaseUrl: AUTH_BASE_URL!,
    authInternalUrl: AUTH_INTERNAL_URL!,
  }),
  authorizationUrlParams: undefined,
};

/**
 * Auth server client.
 */
const auth = betterAuth({
  baseURL: BASE_URL,
  basePath: "/api/auth",
  secret: AUTH_SECRET,
  // Trust the app's own origin for auth requests
  trustedOrigins: BASE_URL ? [BASE_URL] : [],
  advanced: {
    // use custom cookie prefix to avoid collision with IDP cookies
    cookiePrefix: "arbor",
  },
  session: {
    // extend session expiration to 30 days
    expiresIn: 60 * 60 * 24 * 30,
    // refresh session if older than 1 day
    updateAge: 60 * 60 * 24,
    // enable cookie caching for stateless session validation
    cookieCache: {
      enabled: true,
      // Match session expiration so OAuth tokens (stored in account_data cookie
      // with the same maxAge) don't expire before the session itself
      maxAge: 60 * 60 * 24 * 30,
      // use encrypted JWE for security
      strategy: "jwe",
      // auto-refresh cookie before expiry (critical for stateless mode)
      refreshCache: true,
    },
  },
  account: {
    // store OAuth tokens (access token, refresh token) in a signed cookie for stateless mode to enable automatic token refresh without a database
    storeAccountCookie: true,
  },
  plugins: [
    genericOAuth({
      config: [omniOAuthConfig],
    }),
    customSession(async ({ user, session }) => {
      // Try to get cached auth data (rowId, identityProviderId)
      let rowId: string | null = null;
      let identityProviderId: string | null = null;

      const cachedValue = getCookie(authCache.cookieName);
      if (cachedValue) {
        const cached = await authCache.decrypt(cachedValue);
        if (cached) {
          rowId = cached.rowId ?? null;
          identityProviderId = cached.identityProviderId;
        }
      }

      // If cache miss, getAuth() will sync with the API and populate the cache

      return {
        user: {
          ...user,
          rowId,
          identityProviderId,
        },
        session,
      };
    }),
    // NB: must be the last plugin in the array
    tanstackStartCookies(),
  ],
});

export default auth;
