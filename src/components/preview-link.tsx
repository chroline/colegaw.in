"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "~/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import type { LinkPreview } from "~/lib/og-types";
import { isHttpUrl, isSafeImageSrc } from "~/lib/urls";
import { cn } from "~/lib/utils";

const CARD_WIDTH = 296;
const X_FAVICON = "/img/favicons/x.svg";

export function PreviewLink({
  preview,
  showFavicon,
  children,
  className,
  href,
  ...anchorProps
}: React.ComponentProps<"a"> & { preview?: LinkPreview; showFavicon?: boolean }) {
  const hasCard = Boolean(preview?.title || preview?.image || preview?.description);
  const safeHref = typeof href === "string" && isHttpUrl(href) ? href : undefined;
  const favicon = showFavicon && preview?.favicon && isSafeImageSrc(preview.favicon) ? preview.favicon : undefined;

  const link = (
    <a className={cn(className, favicon && "with-favicon")} {...anchorProps} href={safeHref}>
      {favicon ? (
        <>
          <Favicon src={favicon} />
          <span className="link-text">{children}</span>
        </>
      ) : (
        children
      )}
    </a>
  );

  if (!hasCard || !preview) return link;

  return (
    <HoverCard closeDelay={120} openDelay={140}>
      <HoverCardTrigger asChild>{link}</HoverCardTrigger>
      <HoverCardContent align="start" className="w-[296px] overflow-hidden p-0" style={{ width: CARD_WIDTH }}>
        <PreviewBody href={safeHref ?? preview.url} preview={preview} />
      </HoverCardContent>
    </HoverCard>
  );
}

function PreviewBody({ href, preview }: { href: string; preview: LinkPreview }) {
  const [imageFailed, setImageFailed] = useState(false);
  const overlayHref = isHttpUrl(href) ? href : undefined;
  const image = preview.image && isSafeImageSrc(preview.image) ? preview.image : undefined;

  return (
    <div className="relative bg-paper">
      <Card className="border-0 bg-paper shadow-none">
        {image && !imageFailed && (
          <img
            alt=""
            className="aspect-[1.91/1] w-full bg-paper object-cover"
            onError={() => setImageFailed(true)}
            src={image}
          />
        )}
        <CardContent className="space-y-1 p-3.5">
          {preview.title && (
            <CardTitle className="line-clamp-2 text-[0.8125rem] font-medium leading-snug">{preview.title}</CardTitle>
          )}
          {preview.description && (
            <CardDescription className="line-clamp-2 text-[0.75rem] leading-snug">{preview.description}</CardDescription>
          )}
          <p className="pt-0.5 text-[0.6875rem] text-faint">{preview.domain}</p>
        </CardContent>
      </Card>
      {overlayHref && (
        <a
          aria-label={preview.title ?? preview.domain}
          className="absolute inset-0 z-10 no-underline"
          href={overlayHref}
          rel="noreferrer noopener"
          target="_blank"
        />
      )}
    </div>
  );
}

/** Inline site icon. Removes itself if the remote icon fails to load. */
function Favicon({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !isSafeImageSrc(src)) return null;

  return (
    <img
      alt=""
      className={cn("favicon", src === X_FAVICON && "dark:invert")}
      loading="lazy"
      onError={() => setFailed(true)}
      src={src}
    />
  );
}
