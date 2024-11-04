import { AnimationControls, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Text from "~/data/content/summary.mdx";
import { item } from "~/lib/animations";
import { markdownComponents } from "~/lib/markdown";

export default function Summary({ animate }: { animate: AnimationControls }) {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      timer = setTimeout(() => {
        animate.start("visible");
      }, 400);
    }
    return () => clearTimeout(timer); // Clean up timeout if component unmounts
  }, [isInView, animate]);

  return (
    <motion.div
      ref={aboutRef}
      initial="hidden"
      animate={animate}
      variants={item}
      className="prose max-w-[40rem] text-justify sm:text-center sm:text-lg"
    >
      <Text components={markdownComponents} />
    </motion.div>
  );
}
