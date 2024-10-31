import { MarkdownStyle } from "~/common/components/MarkdownStyle";
import _Interests from "~/data/content/interests.mdx";

export function Interests() {
  return (
    <div className="flex flex-col items-end space-y-8 w-full">
      <MarkdownStyle>
        <_Interests />
      </MarkdownStyle>
      <a
        href="https://linkedin.com/in/colegawin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-lg hover:underline"
      >
        View my resume →
      </a>
    </div>
  );
}
