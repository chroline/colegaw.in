import { readFile } from "node:fs/promises";
import { join } from "node:path";
import "server-only";
import { elsewhere, experience, interests, person, research, route, writing } from "~/data/site";

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

  return (
    [
      `# ${person.name}`,
      `> ${person.tagline}`,
      intro,
      `Currently based in ${route[route.length - 1]!.label}.`,
      ["Thinking about:", ...interests.map(interest => `- ${interest.title}: ${interest.description}`)].join("\n"),
      section(
        "Research",
        research.map(entry => `- [${entry.title}](${entry.href})`)
      ),
      section(
        "Writing",
        writing.map(entry => `- [${entry.title}](${entry.href})`)
      ),
      section(
        "Experience",
        experience.map(entry => `- [${entry.title}](${entry.href}): ${entry.note}, ${entry.meta}`)
      ),
      section(
        "Elsewhere",
        elsewhere.map(link => `- [${link.label}](${link.href})`)
      ),
    ].join("\n\n") + "\n"
  );
}
