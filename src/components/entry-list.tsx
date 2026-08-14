import { PreviewLink } from "~/components/preview-link";
import type { PreviewMap } from "~/lib/og-types";

type Entry = {
  title: string;
  href: string;
  meta?: string;
  note?: string;
};

export function EntryList({ entries, previews }: { entries: Entry[]; previews: PreviewMap }) {
  return (
    <ul className="-my-2.5 divide-y divide-rule">
      {entries.map(entry => (
        <li key={entry.href + entry.title}>
          <PreviewLink
            className="row row-link group"
            href={entry.href}
            preview={previews[entry.href]}
            rel="noreferrer noopener"
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
