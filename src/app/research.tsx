import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import Text from "~/data/content/research.mdx";
import researchData from "~/data/research.json";
import { delayItem } from "~/lib/animations";
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
      className="flex w-full max-w-xl flex-col-reverse items-center gap-8 leading-relaxed md:grid md:max-w-4xl md:grid-cols-2"
    >
      <div className="prose space-y-4">
        <Text components={markdownComponents} />
      </div>
      <div className="space-y-4">
        {researchData.map((activity, index) => (
          <a key={index} href={activity.url} className="block" target="_blank">
            <div className="rounded-lg border bg-white p-4 shadow transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="grid min-w-0 gap-4" style={{ gridTemplateColumns: "auto 1fr" }}>
                  <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "1", height: "100%" }}>
                    <Image
                      src={`/img/research/${activity.image}`}
                      alt={`${activity.title} thumbnail`}
                      fill
                      className="absolute inset-0 h-full w-full rounded-md border object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4
                      className={`truncate font-heading text-gray-900 ${activity.style === "italic" && "italic"} ${activity.style === "bold" && "font-medium"}`}
                    >
                      {activity.title}
                    </h4>
                    <p className="truncate text-sm text-gray-600">{activity.url}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <LuExternalLink className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
