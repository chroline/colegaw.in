import { isSafeImageSrc } from "~/lib/urls";

/** Emit `<link rel="preload">` for hover-card images so the first open hits cache. */
export function HoverImagePreload({ hrefs }: { hrefs: Array<string | undefined> }) {
  const unique = Array.from(
    new Set(hrefs.filter((href): href is string => Boolean(href && isSafeImageSrc(href)))),
  );

  return (
    <>
      {unique.map(href => (
        <link key={href} rel="preload" as="image" href={href} />
      ))}
    </>
  );
}
