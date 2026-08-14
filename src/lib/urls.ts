/** True for `http:` / `https:` URLs. Relative paths and other schemes fail. */
export function isHttpUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/** Same-origin public path (`/img/...`). Protocol-relative `//` is rejected. */
export function isSameOriginPath(value: string) {
  return value.startsWith("/") && !value.startsWith("//");
}

export function isSafeImageSrc(value: string) {
  return isSameOriginPath(value) || isHttpUrl(value);
}

/** Resolve `value` against `base` and keep the result only if it is http(s). */
export function resolveHttpUrl(value: string, base?: string) {
  try {
    const parsed = base ? new URL(value, base) : new URL(value);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch {
    return undefined;
  }
  return undefined;
}

/** Remote http(s) URL or a same-origin `/public` path. */
export function sanitizeAssetUrl(value: string | undefined | null) {
  if (!value) return undefined;
  if (isSameOriginPath(value)) return value;
  return resolveHttpUrl(value);
}
