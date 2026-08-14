"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "~/components/icons";
import { Button } from "~/components/ui/button";

const STORAGE_KEY = "theme";
const PAPER_LIGHT = "#f4f4f5";
const PAPER_DARK = "#18181b";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  const color = dark ? PAPER_DARK : PAPER_LIGHT;
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    meta.setAttribute("content", color);
  });
}

function isStoredOverride(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark";
}

function resolveTheme(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  useEffect(() => {
    applyTheme(resolveTheme());

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (isStoredOverride()) return;
      applyTheme(event.matches);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const nextDark = !document.documentElement.classList.contains("dark");
    localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light");
    applyTheme(nextDark);
  }

  return (
    <Button
      aria-label="Toggle light and dark mode"
      className="fixed right-6 top-6 z-50 size-8 rounded-full text-subtle hover:text-ink [&_svg]:size-[1.05rem]"
      onClick={toggle}
      size="icon"
      type="button"
      variant="ghost"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  );
}
