/**
 * Return the singular or plural form of a noun for a given count. Pass an
 * explicit plural for irregular nouns (e.g. pluralize(n, "repository",
 * "repositories")); regular nouns default to appending "s".
 *
 * Only the noun is returned, not the count, so callers keep control of
 * formatting: `${n} ${pluralize(n, "repository", "repositories")}`.
 */
export const pluralize = (
  count: number,
  singular: string,
  plural = `${singular}s`,
): string => (Math.abs(count) === 1 ? singular : plural);
