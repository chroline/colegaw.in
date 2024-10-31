import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Text from "~/data/content/research.mdx";
import { delayItem, item } from "~/lib/animations";
import { markdownComponents } from "~/lib/markdown";

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={delayItem(0.2)}
      className="prose flex w-full max-w-4xl flex-col-reverse items-center gap-8 leading-relaxed sm:grid sm:grid-cols-2"
    >
      <div className="space-y-4">
        <Text components={markdownComponents} />
      </div>
      <div className="h-96 w-full rounded-lg border bg-white shadow-md"></div>
    </motion.div>
  );
}
