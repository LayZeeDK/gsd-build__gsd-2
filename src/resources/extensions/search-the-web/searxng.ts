/**
 * Shared SearXNG helpers used across search tools.
 */

/** Normalize a SearXNG base URL by trimming whitespace and trailing slashes. */
export function normalizeSearxngBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
}

/** Build the SearXNG search endpoint URL from a base URL. */
export function buildSearxngSearchUrl(baseUrl: string): URL {
  const normalized = normalizeSearxngBaseUrl(baseUrl);
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return new URL("search", withSlash);
}

/** Map Brave freshness string to SearXNG time_range. */
export function mapFreshnessToSearxng(braveFreshness: string | null): string | null {
  if (braveFreshness === null) return null;
  const map: Record<string, string> = {
    pd: "day",
    pw: "week",
    pm: "month",
    py: "year",
  };
  return map[braveFreshness] ?? null;
}
