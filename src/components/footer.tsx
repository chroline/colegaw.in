import { RiHeartFill } from "react-icons/ri";
import { CheckOutMyLynk } from "~/components/check-out-my-lynk";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center border-t border-gray-200 bg-gray-100">
      <div className="flex flex-col items-center px-6 py-24">
        <CheckOutMyLynk />
        <div className="flex flex-col space-y-4 pt-6 text-center md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex items-center justify-center font-medium opacity-70">
            <span>made with</span>
            <span className="mx-1 text-pink-500">
              <RiHeartFill />
            </span>
            <span>by Cole Gawin</span>
            <span className="hidden md:inline">&nbsp;·&nbsp;</span>
          </div>
          <a
            href="https://github.com/chroline/colegaw.in"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50"
          >
            View source on Github
          </a>
        </div>
      </div>
    </footer>
  );
}
