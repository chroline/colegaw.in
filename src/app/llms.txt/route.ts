import { generateLlmsTxt } from "~/lib/llms";

export const dynamic = "force-static";

export async function GET() {
  const body = await generateLlmsTxt();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
