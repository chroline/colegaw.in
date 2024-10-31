import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Text from "~/data/content/experience.mdx";
import { delayItem } from "~/lib/animations";
import { markdownComponents } from "~/lib/markdown";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={delayItem(0.2)}
      className="prose flex w-full max-w-4xl flex-col items-center gap-8 leading-relaxed sm:grid sm:grid-cols-2"
    >
      <div className="h-96 w-full rounded-lg border bg-white shadow-md"></div>
      <div className="space-y-4">
        <Text components={markdownComponents} />
      </div>
    </motion.div>
  );
}
