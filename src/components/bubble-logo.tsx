import Image from "next/image";

export function BubbleLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-full border border-[#ebebed] bg-transparent p-1.5 shadow-sm">
      <div className="relative h-7 w-7 overflow-hidden rounded-full">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
