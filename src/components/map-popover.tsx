"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import type { MapSources } from "~/lib/map";

const CARD_WIDTH = 264;
const MAP_HEIGHT = 176;

export function MapPopover({ code, label, sources }: { code: string; label: string; sources: MapSources }) {
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
        <div className="relative w-full overflow-hidden bg-paper" style={{ height: MAP_HEIGHT }}>
          <img alt="" className="absolute inset-0 size-full object-center object-cover dark:hidden" src={sources.light} />
          <img
            alt=""
            className="absolute inset-0 hidden size-full object-center object-cover dark:block"
            src={sources.dark}
          />

          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="relative grid size-14 place-items-center">
              <span className="absolute inset-0 rounded-full bg-blue-500/20" />
              <span className="size-[0.875rem] rounded-full bg-blue-600 ring-2 ring-white" />
            </span>
          </div>

          <span className="absolute bottom-2 left-2 rounded-md border border-border bg-popover px-2 py-1 text-[0.6875rem] leading-none text-popover-foreground">
            {label}
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
