import { RiHeartFill } from "react-icons/ri";
import { SiGithub, SiInstagram, SiLinkedin, SiSubstack } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center border-t border-gray-200 bg-gray-100">
      <div className="flex flex-col items-center gap-4 px-6 py-24">
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/colegawin"
            target="_blank"
            className="text-black/50 transition-colors hover:text-black"
          >
            <SiLinkedin className="size-5" />
          </a>
          <a
            href="https://colegawin.substack.com"
            target="_blank"
            className="text-black/50 transition-colors hover:text-black"
          >
            <SiSubstack className="size-5" />
          </a>
          <a
            href="https://github.com/chroline"
            target="_blank"
            className="text-black/50 transition-colors hover:text-black"
          >
            <SiGithub className="size-5" />
          </a>
          <a
            href="https://instagram.com/colegawin"
            target="_blank"
            className="text-black/50 transition-colors hover:text-black"
          >
            <SiInstagram className="size-5" />
          </a>
        </div>
        <div className="flex flex-col space-y-4 pt-6 text-center font-heading md:flex-row md:space-y-0">
          <div className="flex items-center justify-center font-medium opacity-70">
            <span>made with</span>
            <span className="mx-1 text-pink-500">
              <RiHeartFill />
            </span>
            <span>in socal</span>
            <span className="hidden md:mx-2 md:inline">&nbsp;·&nbsp;</span>
          </div>
          <a
            href="https://github.com/chroline/colegaw.in"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:underline"
          >
            View source on Github
          </a>
        </div>
      </div>
    </footer>
  );
}
