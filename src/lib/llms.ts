import { readFile } from "node:fs/promises";
import { join } from "node:path";
import "server-only";
import { elsewhere, experience, interests, person, research, route, writing } from "~/data/site";

function linkItem(title: string, href: string, note?: string) {
  return note ? `- [${title}](${href}): ${note}` : `- [${title}](${href})`;
}

function section(heading: string, items: string[]) {
  return [`## ${heading}`, ...items].join("\n");
}

async function readIntroMarkdown() {
  const raw = await readFile(join(process.cwd(), "data/content/intro.mdx"), "utf8");
  return raw
    .replace(/\r\n/g, "\n")
    .trim()
    .replace(/\n{3,}/g, "\n\n");
}

/**
 * Build the `/llms.txt` body from the same sources as the homepage so the two
 * cannot drift. Follows https://llmstxt.org: H1, summary blockquote, details,
 * then H2 file lists.
 */
export async function generateLlmsTxt() {
  const intro = await readIntroMarkdown();
  const here = route[route.length - 1]?.label;

  return (
    [
      `# ${person.name}`,
      `> ${person.tagline}`,
      intro,
      here ? `Currently based in ${here}.` : null,
      ["Thinking about:", ...interests.map(interest => `- ${interest.title}: ${interest.description}`)].join("\n"),
      section(
        "Research",
        research.map(entry => linkItem(entry.title, entry.href, entry.note))
      ),
      section(
        "Writing",
        writing.map(entry => linkItem(entry.title, entry.href, entry.note))
      ),
      section(
        "Experience",
        experience.map(entry => {
          const note = [entry.note, entry.meta].filter(Boolean).join(", ");
          return linkItem(entry.title, entry.href, note || undefined);
        })
      ),
      section(
        "Elsewhere",
        elsewhere.map(link => linkItem(link.label, link.href))
      ),
    ]
      .filter((block): block is string => Boolean(block))
      .join("\n\n") + "\n"
  );
}
