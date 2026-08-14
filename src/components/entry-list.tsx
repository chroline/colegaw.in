import { PreviewLink } from "~/components/preview-link";
import type { PreviewMap } from "~/lib/og-types";

type Entry = {
  title: string;
  href: string;
  meta?: string;
  note?: string;
};

export function EntryList({
  entries,
  logo,
  previews,
  showImages = true,
}: {
  entries: Entry[];
  logo?: string;
  previews: PreviewMap;
  showImages?: boolean;
}) {
  return (
    <ul className="-my-2.5 divide-y divide-rule">
      {entries.map(entry => (
        <li key={entry.href + entry.title}>
          <PreviewLink
            className="row row-link group"
            href={entry.href}
            logo={logo}
            preview={previews[entry.href]}
            rel="noreferrer noopener"
            showImage={showImages}
            target="_blank"
          >
            <span className="row-title">
              {entry.title}
              {entry.note && <span className="text-subtle">, {entry.note}</span>}
            </span>
            {entry.meta && <span className="row-meta ml-auto group-hover:text-subtle">{entry.meta}</span>}
          </PreviewLink>
        </li>
      ))}
    </ul>
  );
}
