import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Text from "~/data/content/projects.mdx";
import projectsData from "~/data/projects.json";
import { delayItem, item } from "~/lib/animations";
import { markdownComponents } from "~/lib/markdown";

function ProjectItem({
  icon,
  title,
  description,
  accolades,
  url,
  year,
}: {
  icon: string;
  title: string;
  description: string;
  accolades: string[];
  url: string | undefined;
  year: string | number;
}) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true });

  return (
    <motion.li
      ref={itemRef}
      initial="hidden"
      animate={itemInView ? "visible" : "hidden"}
      variants={item}
      className="border-b border-dashed border-gray-300 py-2"
    >
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div className="relative h-8 w-8 overflow-hidden">
          <Image src={`/img/projects/${icon}.png`} alt={`${title} icon`} fill className="rounded object-cover" />
        </div>
        {/* Title and Description */}
        <div className="block flex-1">
          <p className="ml-3 text-left leading-none">
            <a href={url} target="_blank">
              <span className="text-sm font-medium text-gray-900">{title}</span>
              <span className="text-sm text-muted">&nbsp;• {description}</span>
            </a>
          </p>
        </div>

        {/* Year */}
        <p className="hidden text-right text-sm text-muted sm:block">{year}</p>
      </div>
      <div className="mb-1 mt-2 space-y-1 sm:mt-1">
        {accolades.map((item, i) => (
          <div className="flex gap-1.5 text-sm italic text-muted sm:ml-11">
            <p>—</p>
            <p key={i}>{item}</p>
          </div>
        ))}
      </div>
    </motion.li>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={delayItem(0.2)}
      className="prose max-w-xl sm:text-left sm:text-lg"
    >
      <div className="text-justify">
        <Text components={markdownComponents} />
      </div>
      <ul className="mt-6">
        {Object.entries(projectsData).map(([key, project]) => (
          <ProjectItem
            key={key}
            icon={key}
            title={project.title}
            description={project.description}
            accolades={project.accolades}
            url={project.url}
            year={project.year}
          />
        ))}
      </ul>
    </motion.div>
  );
}
