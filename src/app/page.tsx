import avatarSquare from "../../public/img/avatar.webp";
import Image from "next/image";
import { EntryList } from "~/components/entry-list";
import { Footer } from "~/components/footer";
import { PreviewLink } from "~/components/preview-link";
import { Section } from "~/components/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import Intro from "~/data/content/intro.mdx";
import { experience, interests, introLinks, person, research, writing } from "~/data/site";
import { getPreviews } from "~/lib/og";
import type { PreviewMap } from "~/lib/og-types";

export const revalidate = 604800;

export default async function Home() {
  const previews = await getPreviews([
    ...introLinks,
    ...research.map(entry => entry.href),
    ...writing.map(entry => entry.href),
    ...experience.map(entry => entry.href),
  ]);

  return (
    <main className="mx-auto max-w-column px-6 pb-20 pt-28 md:max-w-4xl md:pt-40">
      <div className="md:flex md:items-start md:gap-8 lg:gap-20">
        {/* Between 768px and 960px the column's left edge sits under the fixed logo, so the
            pinned offset has to clear the logo's 56px bottom edge by the same 24px inset. */}
        <aside className="hidden md:sticky md:top-20 md:block md:w-60 md:shrink-0 lg:w-72">
          <div className="portrait relative">
            <Card className="overflow-hidden border-0 bg-white shadow-none">
              <Image
                alt={person.name}
                className="h-auto w-full object-contain"
                height={5595}
                priority
                quality={95}
                sizes="(min-width: 1024px) 288px, (min-width: 768px) 240px, 144px"
                src="/img/avatar-full.webp"
                width={3729}
              />
            </Card>
            <span
              aria-hidden
              className="wave pointer-events-none absolute right-4 top-4 select-none text-5xl leading-none"
            >
              <span className="wave-hand block">👋</span>
            </span>
          </div>
        </aside>

        <div className="rise min-w-0 md:flex-1">
          <header style={{ "--i": 0 } as React.CSSProperties}>
            <Image
              alt={person.name}
              className="size-3/5 rounded-xl bg-white object-cover md:hidden"
              height={144}
              placeholder="blur"
              priority
              quality={95}
              src={avatarSquare}
              width={144}
            />
            <h1 className="mt-5 text-[1.875rem] font-medium leading-none tracking-[-0.02em] md:mt-0">{person.name}</h1>
            <p className="text-lead text-subtle">{person.headline}</p>
          </header>

          <div style={{ "--i": 1 } as React.CSSProperties} className="prose-body mt-10">
            <Intro components={{ a: proseLink(previews) }} />
          </div>

          <div style={{ "--i": 2 } as React.CSSProperties}>
            <Section label="Thinking about">
              <Accordion type="single" collapsible>
                {interests.map(interest => (
                  <AccordionItem className="border-0" key={interest.title} value={interest.title}>
                    <AccordionTrigger className="gap-3 py-0.5 text-body font-normal leading-relaxed hover:no-underline">
                      <div
                        aria-hidden
                        className="relative size-[1.15em] shrink-0 select-none overflow-visible text-faint"
                      >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pb-[3px]">
                          <span className="block scale-x-[1.45] whitespace-nowrap leading-none">—</span>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 pb-[3px]">
                          <span className="block origin-center scale-x-[1.45] whitespace-nowrap leading-none opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100">
                            —
                          </span>
                        </div>
                      </div>
                      <span>{interest.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="ml-7 pb-2 pl-[1px] pt-1 text-meta leading-relaxed text-subtle">
                      {interest.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Section>
          </div>

          <div style={{ "--i": 3 } as React.CSSProperties}>
            <Section label="Research">
              <EntryList entries={research} logo="/img/logos/arxiv.svg" previews={previews} showImages={false} />
            </Section>
          </div>

          <div style={{ "--i": 4 } as React.CSSProperties}>
            <Section label="Writing">
              <EntryList entries={writing} previews={previews} showImages={false} />
            </Section>
          </div>

          <div style={{ "--i": 5 } as React.CSSProperties}>
            <Section label="Experience">
              <EntryList entries={experience} previews={previews} />
            </Section>
          </div>

          <div style={{ "--i": 6 } as React.CSSProperties}>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

/** Give every link in the MDX prose the same hover preview as the list rows. */
function proseLink(previews: PreviewMap) {
  return function ProseLink(props: React.ComponentProps<"a">) {
    return (
      <PreviewLink
        {...props}
        preview={props.href ? previews[props.href] : undefined}
        rel="noreferrer noopener"
        showFavicon
        target="_blank"
      />
    );
  };
}
