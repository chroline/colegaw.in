import "server-only";
import { previewOverrides } from "~/data/site";
import type { LinkPreview, PreviewMap } from "~/lib/og-types";
import { isHttpUrl, resolveHttpUrl, sanitizeAssetUrl } from "~/lib/urls";

export type { LinkPreview, PreviewMap };

const REVALIDATE_SECONDS = 60 * 60 * 24 * 7;
const FETCH_TIMEOUT_MS = 8000;
const MAX_HTML_BYTES = 512 * 1024;

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  "#39": "'",
  "#x27": "'",
  "#x2F": "/",
};

function decodeEntities(value: string) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    const direct = ENTITIES[code] ?? ENTITIES[code.toLowerCase()];
    if (direct) return direct;
    try {
      if (code.startsWith("#x") || code.startsWith("#X")) {
        return String.fromCodePoint(parseInt(code.slice(2), 16));
      }
      if (code.startsWith("#")) return String.fromCodePoint(parseInt(code.slice(1), 10));
    } catch {
      return "";
    }
    return match;
  });
}

function collapse(value: string) {
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

/** Bot walls and error pages return a title that is worse than showing nothing. */
const JUNK_TITLES = [
  /^just a moment/i,
  /^attention required/i,
  /^access denied/i,
  /^redirecting/i,
  /^are you a robot/i,
  /^\s*(4\d{2}|5\d{2})\b/,
  /^(error|forbidden|not found)\s*$/i,
  /cloudflare/i,
];

function isJunk(title?: string) {
  return Boolean(title && JUNK_TITLES.some(pattern => pattern.test(title)));
}

function truncate(value: string, max: number) {
  if (value.length <= max) return value;
  return `${value.slice(0, max).replace(/[\s,.;:]+\S*$/, "")}…`;
}

/** Pull every <meta> tag into a key -> content map, keyed by property or name. */
function parseMeta(html: string) {
  const found: Record<string, string> = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = tag.match(/\b(?:property|name)\s*=\s*["']([^"']+)["']/i)?.[1];
    const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1];
    if (!key || content === undefined) continue;
    const normalized = key.toLowerCase();
    if (!found[normalized]) found[normalized] = content;
  }
  return found;
}

/**
 * Find the site's icon from its <link rel="icon"> tags, preferring scalable or large
 * raster icons. Falls back to the conventional /favicon.ico at the origin.
 */
function parseFavicon(html: string, baseUrl: string) {
  const candidates: { href: string; score: number }[] = [];

  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const rel = tag.match(/\brel\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
    const href = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
    // mask-icon is a monochrome silhouette meant to be tinted, never a usable logo.
    if (!rel || !href || !rel.includes("icon") || rel.includes("mask-icon")) continue;

    const type = tag.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    const sizes = tag.match(/\bsizes\s*=\s*["']([^"']+)["']/i)?.[1] ?? "";
    const pixels = Number.parseInt(sizes.split(/x/i)[0], 10);

    let score = 0;
    if (type.includes("svg") || href.endsWith(".svg")) score = 1000;
    else if (Number.isFinite(pixels)) score = Math.min(pixels, 512);
    else if (type.includes("png") || href.endsWith(".png")) score = 64;
    if (rel.includes("apple-touch-icon")) score -= 10;
    if (href.endsWith(".ico")) score -= 20;

    candidates.push({ href, score });
  }

  candidates.sort((a, b) => b.score - a.score);
  const best = candidates[0]?.href ?? "/favicon.ico";

  return resolveHttpUrl(decodeEntities(best), baseUrl);
}

function readBody(html: string, keys: string[], meta: Record<string, string>) {
  for (const key of keys) {
    const value = meta[key];
    if (value?.trim()) return collapse(value);
  }
  return undefined;
}

function pageUrl(responseUrl: string, fallback: string) {
  return isHttpUrl(responseUrl) ? responseUrl : fallback;
}

async function fetchPreview(url: string): Promise<LinkPreview | null> {
  let domain: string;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    domain = parsed.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }

  try {
    const response = await fetch(url, {
      headers: {
        // Some hosts serve a stub or 403 without a browser-shaped request.
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml",
        "accept-language": "en-US,en;q=0.9",
      },
      next: { revalidate: REVALIDATE_SECONDS },
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });

    const base = pageUrl(response.url, url);

    if (!response.ok) return { url, domain };
    if (!(response.headers.get("content-type") ?? "").includes("html")) return { url, domain };

    const html = (await response.text()).slice(0, MAX_HTML_BYTES);
    const meta = parseMeta(html);

    const title =
      readBody(html, ["og:title", "twitter:title"], meta) ??
      (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
        ? collapse(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)![1])
        : undefined);

    const description = readBody(html, ["og:description", "twitter:description", "description"], meta);

    const rawImage = readBody(
      html,
      ["og:image:secure_url", "og:image:url", "og:image", "twitter:image", "twitter:image:src"],
      meta
    );

    const image = rawImage ? resolveHttpUrl(rawImage, base) : undefined;
    const usableTitle = isJunk(title) ? undefined : title;

    return {
      url,
      domain,
      title: usableTitle ? truncate(usableTitle, 90) : undefined,
      // A challenge page's description is as useless as its title.
      description: !usableTitle || !description ? undefined : truncate(description, 150),
      image,
      favicon: parseFavicon(html, base),
    };
  } catch {
    // A dead or slow link should never fail the render; fall back to the bare domain.
    return { url, domain };
  }
}

function applyOverride(preview: LinkPreview): LinkPreview {
  const override = previewOverrides[preview.url];
  if (!override) return preview;

  return {
    ...preview,
    title: override.title ?? preview.title,
    description: override.description ?? preview.description,
    image: override.image === null ? undefined : (sanitizeAssetUrl(override.image) ?? preview.image),
    favicon: sanitizeAssetUrl(override.favicon) ?? preview.favicon,
  };
}

export async function getPreviews(urls: string[]): Promise<PreviewMap> {
  const unique = [...new Set(urls.filter(url => /^https?:\/\//.test(url)))];
  const results = await Promise.all(unique.map(fetchPreview));

  const map: PreviewMap = {};
  for (const preview of results) {
    if (preview) map[preview.url] = applyOverride(preview);
  }
  return map;
}
