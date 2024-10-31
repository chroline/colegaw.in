import { RiHeartFill } from "react-icons/ri";
import { CheckOutMyLynk } from "~/common/components/CheckOutMyLynk";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center py-24 px-6">
        <CheckOutMyLynk />
        <div className="flex flex-col md:flex-row text-center space-y-4 md:space-y-0 md:space-x-4 pt-6">
          <div className="flex items-center font-medium opacity-70 justify-center">
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
