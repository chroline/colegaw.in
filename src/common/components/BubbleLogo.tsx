import Image from "next/image";

export function BubbleLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="p-1.5 border border-[#ebebed] rounded-full shadow-sm bg-transparent">
      <div className="relative w-7 h-7 rounded-full overflow-hidden">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
