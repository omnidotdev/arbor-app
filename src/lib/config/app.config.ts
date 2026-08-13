/**
 * Application configuration.
 */
const app = {
  name: "Arbor",
  // Product symbol, mirrors the omni-api catalog SSOT (`catalog/products.ts`
  // arbor `icon`). Used in the "Made with <symbol> by Omni" footer credit.
  icon: "🌲",
  description: "A code forge",
  url: "https://arbor.omni.dev",
  organization: {
    name: "Omni",
    url: "https://omni.dev",
    website: "https://omni.dev",
    discord: "https://discord.gg/omnidotdev",
    x: "https://x.com/omnidotdev",
    threads: "https://www.threads.com/@omnidotdev",
    linkedin: "https://www.linkedin.com/company/omnidotdev",
  },
  links: {
    docs: "https://docs.omni.dev/arbor",
    github: "https://github.com/omnidotdev/arbor",
    feedback: "https://backfeed.omni.dev/workspaces/omni/projects/arbor",
  },
  // Legal links mirror the omni-api catalog SSOT
  legal: {
    privacy: "https://omni.dev/legal/privacy",
    terms: "https://omni.dev/legal/terms",
    cookies: "https://omni.dev/legal/cookies",
  },
};

export default app;
