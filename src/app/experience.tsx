import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Text from "~/data/content/experience.mdx";
import experienceData from "~/data/experience.json";
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
      className="prose flex w-full max-w-xl flex-col items-center gap-8 leading-relaxed md:grid md:max-w-4xl md:grid-cols-2"
    >
      <div className="w-full rounded-xl border bg-white p-4 shadow md:p-6">
        <div className="flex w-full flex-col">
          {Object.entries(experienceData).map(([key, val], index, array) => (
            <div
              key={key}
              className={`flex w-full items-start space-x-3 ${index !== array.length - 1 ? "border-b border-dashed pb-3" : ""} ${index !== 0 ? "pt-3" : ""}`}
            >
              <div className="rounded-full border border-[#ebebed] bg-transparent p-1.5 shadow-sm">
                <div className="relative h-7 w-7 overflow-hidden rounded-full">
                  <Image src={`/img/work/${key}.png`} alt={`${val.name} logo`} fill style={{ objectFit: "cover" }} />
                </div>
              </div>

              <div className="flex w-full flex-col space-y-1">
                <div className="flex w-full justify-between">
                  <p className="font-heading text-sm font-medium">{val.name}</p>
                  <p className="text-xs opacity-60">{val.duration}</p>
                </div>
                <p className="text-xs opacity-70">{val.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <Text components={markdownComponents} />
      </div>
    </motion.div>
  );
}
