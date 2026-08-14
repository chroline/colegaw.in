"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      options={{
        lerp: 0.1,
        duration: 0.7,
        smoothWheel: true,
        // Lenis bails out entirely when the OS asks for reduced motion.
        respectReducedMotion: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
