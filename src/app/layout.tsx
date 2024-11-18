import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

const polySans = localFont({
  src: [
    { path: "../lib/vendor/PolySans/PolySans-Bulky.woff2", weight: "700", style: "normal" },
    { path: "../lib/vendor/PolySans/PolySans-BulkyItalic.woff2", weight: "700", style: "italic" },
    { path: "../lib/vendor/PolySans/PolySans-Median.woff2", weight: "600", style: "normal" },
    { path: "../lib/vendor/PolySans/PolySans-MedianItalic.woff2", weight: "600", style: "italic" },
    { path: "../lib/vendor/PolySans/PolySans-Neutral.woff2", weight: "500", style: "normal" },
    { path: "../lib/vendor/PolySans/PolySans-NeutralItalic.woff2", weight: "500", style: "italic" },
    { path: "../lib/vendor/PolySans/PolySans-Slim.woff2", weight: "400", style: "normal" },
    { path: "../lib/vendor/PolySans/PolySans-SlimItalic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-polysans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Cole Gawin",
  description: "Building technologies to augment human intelligence.",
  openGraph: {
    url: "https://colegaw.in",
    title: "Cole Gawin",
    description: "Building technologies to augment human intelligence.",
    images: [{ url: "https://colegaw.in/img/seo.png" }],
    site_name: "Cole Gawin",
  },
  twitter: {
    handle: "@colegawin_",
    site: "@colegawin_",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#F9FAFB]">
      <head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body className={`${polySans.variable} ${manrope.variable} overflow-x-hidden font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
