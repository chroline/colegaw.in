import { AnimationControls, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { container, item } from "~/lib/animations";

function Decoration() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-bg absolute top-0 z-0 h-full w-full">
      <div
        className="pattern h-full w-full"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // Adjust the multiplier for a stronger/weaker effect
        }}
      />
    </div>
  );
}

export default function Hero({ animate }: { animate: AnimationControls }) {
  return (
    <div className="relative w-full px-6 pb-32 pt-48">
      <Decoration />
      <motion.div
        className="relative m-auto max-w-2xl space-y-4 text-center"
        initial="hidden"
        animate={animate}
        variants={container}
      >
        <motion.h1 className="font-heading text-4xl text-[2.5rem] font-semibold italic sm:text-5xl" variants={item}>
          Building technologies to augment human intelligence.
        </motion.h1>
        <motion.p className="text-muted mx-auto font-heading text-xl md:text-2xl" variants={item}>
          applied AI engineer, cognitive science researcher, &&nbsp;human&#8209;centered technologist.
        </motion.p>
      </motion.div>
    </div>
  );
}
