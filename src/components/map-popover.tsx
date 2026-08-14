"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import type { MapTile } from "~/lib/map";

const CARD_WIDTH = 264;
const MAP_HEIGHT = 176;

export function MapPopover({ code, label, tiles }: { code: string; label: string; tiles: MapTile[] }) {
  return (
    <HoverCard closeDelay={120} openDelay={140}>
      <HoverCardTrigger asChild>
        <span
          className="cursor-default text-ink underline decoration-rule decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-faint"
          tabIndex={0}
        >
          {code}
        </span>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-[264px] overflow-hidden p-0" style={{ width: CARD_WIDTH }}>
        <div className="relative overflow-hidden bg-paper" style={{ height: MAP_HEIGHT }}>
          {tiles.map(tile => (
            <img
              alt=""
              className="pointer-events-none absolute size-64 max-w-none"
              key={tile.url}
              loading="lazy"
              src={tile.url}
              style={{ left: tile.left, top: tile.top }}
            />
          ))}

          <span className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20" />
          <span className="absolute left-1/2 top-1/2 size-[0.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 ring-2 ring-white" />

          <span className="absolute bottom-2 left-2 rounded-md border border-border bg-popover px-2 py-1 text-[0.6875rem] leading-none text-popover-foreground">
            {label}
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
