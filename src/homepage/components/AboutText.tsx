import _AboutSummary from "~/data/content/about-summary.mdx";

import { HighlightText } from "~/common/components/HighlightText";
import { MarkdownStyle } from "~/common/components/MarkdownStyle";

export function AboutText() {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 space-y-8 flex flex-col items-start">
      <div className="flex flex-col items-start space-y-2">
        <p className="text-sm md:text-base uppercase font-semibold text-blue-500">A little introduction to Cole</p>
        <h1 className="text-3xl font-bold">
          I love to <HighlightText color="indigo">build</HighlightText>,{" "}
          <HighlightText color="emerald">design</HighlightText>, and <HighlightText color="amber">create</HighlightText>
          .
        </h1>
      </div>
      <MarkdownStyle>
        <div className="prose">
          <_AboutSummary />
        </div>
      </MarkdownStyle>
    </div>
  );
}
