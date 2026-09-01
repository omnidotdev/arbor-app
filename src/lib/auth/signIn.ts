import authClient from "@/lib/auth/authClient";

interface Params {
  /** Redirect URL. */
  redirectUrl: string;
}

/**
 * Sign in with an OAuth provider.
 *
 * better-auth 1.7 routes generic OAuth through the social-provider path, so the
 * provider is passed as `provider` to `signIn.social` (was `signIn.oauth2` with
 * `providerId` pre-1.7)
 */
const signIn = async ({ redirectUrl }: Params) => {
  await authClient.signIn.social({
    provider: "omni",
    callbackURL: redirectUrl,
  });
};

export default signIn;
