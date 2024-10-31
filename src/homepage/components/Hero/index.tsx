import { HeroImage } from "~/homepage/components/Hero/Image";
import { HeroContent } from "./Content";
import { HeroDecoration } from "./Decoration";

export function Hero() {
  return (
    <>
      <HeroDecoration />
      <div className="relative w-full flex justify-center pt-0 sm:pt-16">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-full lg:max-w-4xl xl:max-w-5xl justify-between">
          <HeroContent />
          <div className="w-2xs sm:w-xs h-sm sm:h-md">
            <HeroImage />
          </div>
        </div>
      </div>
    </>
  );
}
