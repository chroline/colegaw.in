import { HighlightText } from "~/common/components/HighlightText";
import { Logo } from "~/common/components/Logo";
import { NameLogo } from "~/common/components/NameLogo";
import { Socials } from "~/common/components/Socials";

export function HeroContent() {
  return (
    <div className="flex flex-col space-y-12 items-start w-full max-w-full sm:max-w-xl relative z-10 py-12 px-6 lg:px-0">
      <div className="flex items-center space-x-6 self-center lg:self-auto">
        <Logo size={24} />
        <div className="hidden lg:block">
          <NameLogo size={{ base: 8, sm: 12 }} />
        </div>
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-col space-y-6 w-full">
          <h1 className="text-4xl font-semibold">
            Versatile <HighlightText color="blue">software engineer</HighlightText>, intuitive{" "}
            <HighlightText color="green">UI/UX designer</HighlightText>, & enterprising{" "}
            <HighlightText color="purple">innovator</HighlightText>.
          </h1>
          <p className="opacity-65 text-xl sm:text-2xl">
            I work on innovative products to deliver quality experiences to meaningful audiences.
          </p>
        </div>
        <div className="pt-2">
          <Socials />
        </div>
      </div>
    </div>
  );
}
