import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { person } from "~/data/site";

export const alt = `${person.name} — ${person.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/lib/vendor/LinearSans");
const portraitPath = join(process.cwd(), "public/img/avatar.png");

export default async function OpengraphImage() {
  const [regular, semibold, portrait] = await Promise.all([
    readFile(join(fontDir, "LinearSans-Regular.ttf")),
    readFile(join(fontDir, "LinearSans-SemiBold.ttf")),
    readFile(portraitPath),
  ]);
  const portraitSrc = portrait.buffer.slice(
    portrait.byteOffset,
    portrait.byteOffset + portrait.byteLength
  ) as ArrayBuffer;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f4f5",
        color: "#18181b",
        fontFamily: "LinearSans",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: 952,
          height: 380,
        }}
      >
        <img
          alt={`Portrait of ${person.name}`}
          src={portraitSrc as unknown as string}
          width={380}
          height={380}
          style={{
            width: 380,
            height: 380,
            borderRadius: 28,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 500,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1,
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              display: "flex",
              width: 500,
              marginTop: 30,
              color: "#52525b",
              fontSize: 38,
              fontWeight: 400,
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            }}
          >
            {person.headline}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "LinearSans", data: regular, weight: 400, style: "normal" },
        { name: "LinearSans", data: semibold, weight: 500, style: "normal" },
      ],
    }
  );
}
