import { HoverImagePreload } from "~/components/hover-image-preload";
import { icons } from "~/components/icons";
import { MapPopover } from "~/components/map-popover";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { elsewhere, route } from "~/data/site";
import { buildMapSources } from "~/lib/map";

const MAP_WIDTH = 264;
const MAP_HEIGHT = 176;

export function Footer() {
  const maps = route.map(stop => ({
    stop,
    sources: buildMapSources({
      lat: stop.lat,
      lon: stop.lon,
      zoom: stop.zoom,
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
    }),
  }));

  return (
    <footer className="mt-20">
      <HoverImagePreload hrefs={maps.flatMap(({ sources }) => [sources.light, sources.dark])} />
      <Separator className="bg-rule" />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-6">
        <p className="shrink-0 text-meta text-faint">
          {maps.map(({ stop, sources }, index) => (
            <span key={stop.code}>
              {index > 0 && <span className="px-1">&rarr;</span>}
              <MapPopover code={stop.code} label={stop.label} sources={sources} />
            </span>
          ))}
          <span className="pl-1">&middot; {new Date().getFullYear()}</span>
        </p>
        <ul className="ml-auto flex items-center gap-x-1">
          {elsewhere.map(link => {
            const Icon = icons[link.icon];
            return (
              <li key={link.href}>
                <Button asChild className="size-8 text-subtle hover:text-ink [&_svg]:size-[1.05rem]" size="icon" variant="ghost">
                  <a
                    aria-label={link.label}
                    href={link.href}
                    rel="me noreferrer noopener"
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    title={link.label}
                  >
                    <Icon className="size-[1.05rem]" />
                  </a>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
