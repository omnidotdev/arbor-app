/**
 * Versioned closed-beta confidentiality terms.
 *
 * The version string is the single source of truth shared by the /apply form
 * (which records the version the applicant accepted) and the /beta-terms page
 * (which renders the matching text). Bump BETA_TERMS_VERSION whenever the terms
 * below change so acceptance is always tied to the exact text a user agreed to.
 */

/** The current beta terms version, recorded on every application submission. */
export const BETA_TERMS_VERSION = "1.0";

/** One section of the beta terms, rendered in order on the terms page. */
export interface BetaTermsSection {
  heading: string;
  body: string;
}

/**
 * The confidentiality terms for the arbor closed beta. Kept short and plain so
 * applicants can actually read them before accepting.
 */
export const BETA_TERMS_SECTIONS: BetaTermsSection[] = [
  {
    heading: "Confidentiality",
    body: "The closed beta and everything you learn through it, including unreleased features, screens, roadmap, and performance, are confidential. Do not share screenshots, recordings, or descriptions publicly or with anyone outside the beta.",
  },
  {
    heading: "Feedback",
    body: "You may send feedback, bug reports, and suggestions at any time. By doing so you grant us permission to use them to improve the product, with no obligation and no expectation of compensation.",
  },
  {
    heading: "No warranty",
    body: "The beta is provided as is. Features may change or break, and data created during the beta may be reset. Do not rely on the beta for anything you cannot afford to lose.",
  },
  {
    heading: "Your data",
    body: "We handle your data in line with our privacy practices. You can request export or deletion of your data at any time.",
  },
  {
    heading: "Access",
    body: "Beta access is personal to you and may be changed or revoked at any time. These terms stay in effect for anything you accessed while in the beta, even after it ends.",
  },
];
