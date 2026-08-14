import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { Logo } from "~/components/logo";
import { SmoothScroll } from "~/components/smooth-scroll";
import { ThemeToggle } from "~/components/theme-toggle";
import { person } from "~/data/site";

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute("content",d?"#18181b":"#f4f4f5")});}catch(e){}})();`;

// Linear Sans has no Medium cut, so SemiBold covers both 500 and 600.
const linearSans = localFont({
  src: [
    { path: "../lib/vendor/LinearSans/LinearSans-Light.woff2", weight: "300", style: "normal" },
    {
      path: "../lib/vendor/LinearSans/LinearSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "../lib/vendor/LinearSans/LinearSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../lib/vendor/LinearSans/LinearSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "../lib/vendor/LinearSans/LinearSans-SemiBold.woff2", weight: "500", style: "normal" },
    {
      path: "../lib/vendor/LinearSans/LinearSans-SemiBoldItalic.woff2",
      weight: "500",
      style: "italic",
    },
    { path: "../lib/vendor/LinearSans/LinearSans-SemiBold.woff2", weight: "600", style: "normal" },
    {
      path: "../lib/vendor/LinearSans/LinearSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "../lib/vendor/LinearSans/LinearSans-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "../lib/vendor/LinearSans/LinearSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-linear-sans",
  // `swap` paints the Arial fallback first, and its line breaks differ enough from
  // Linear Sans that every paragraph reflows on swap. The entrance fade covers the
  // block period, so nothing is visibly missing while the real font arrives.
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colegaw.in"),
  title: person.name,
  description: person.tagline,
  // The source mark lives at public/favicon.png (1024x1024, ~700 KB); only the
  // downscaled variants are linked so a tab icon never costs that download.
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "profile",
    url: "https://colegaw.in",
    siteName: person.name,
    title: person.name,
    description: person.tagline,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@colegawin_",
    site: "@colegawin_",
  },
  alternates: {
    canonical: "https://colegaw.in",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={linearSans.variable} lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <Link aria-label="Home" className="fixed left-6 top-6 z-50 size-8" href="/">
          <Logo />
        </Link>
        <ThemeToggle />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
