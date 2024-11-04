import { RiAtFill, RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

const _HeroSocialIcon = ({ href, children, color }: { href: string; children: JSX.Element; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-6 text-current opacity-65 transition-all duration-100 hover:text-[${color}] hover:opacity-100`}
  >
    {children}
  </a>
);

export const Socials = () => (
  <div className="flex flex-col sm:flex-row">
    <div className="flex space-x-8">
      <_HeroSocialIcon href="https://github.com/chroline" color="#1a1a1a">
        <RiGithubFill className="w-full h-full" />
      </_HeroSocialIcon>
      <_HeroSocialIcon href="https://linkedin.com/in/colegawin" color="#0284c7">
        <RiLinkedinBoxFill className="w-full h-full" />
      </_HeroSocialIcon>
      <_HeroSocialIcon href="https://twitter.com/colegawin_" color="#0ea5e9">
        <RiTwitterFill className="w-full h-full" />
      </_HeroSocialIcon>
      <_HeroSocialIcon href="https://buymeacoffee.com/colegawin" color="#f59e0b">
        <SiBuymeacoffee className="w-full h-full" />
      </_HeroSocialIcon>
      <_HeroSocialIcon href="mailto:hi@colegaw.in" color="#0d9488">
        <RiAtFill className="w-full h-full" />
      </_HeroSocialIcon>
    </div>
  </div>
);
