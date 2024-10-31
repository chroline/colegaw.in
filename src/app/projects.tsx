import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Text from "~/data/content/projects.mdx";
import { delayItem, item } from "~/lib/animations";
import { markdownComponents } from "~/lib/markdown";

// Sample data with placeholder images
const projects = [
  {
    icon: "https://via.assets.so/img.jpg?w=32&h=32",
    title: "Project Alpha",
    description: "Description for Project Alpha",
    year: "2024",
  },
  {
    icon: "https://via.assets.so/img.jpg?w=32&h=32",
    title: "Project Beta",
    description: "Description for Project Beta",
    year: "2024",
  },
  {
    icon: "https://via.assets.so/img.jpg?w=32&h=32",
    title: "Project Gamma",
    description: "Description for Project Gamma",
    year: "2023",
  },
  {
    icon: "https://via.assets.so/img.jpg?w=32&h=32",
    title: "Project Delta",
    description: "Description for Project Delta",
    year: "2023",
  },
];

function ProjectItem({
  icon,
  title,
  description,
  year,
}: {
  icon: string;
  title: string;
  description: string;
  year: string;
}) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true });

  return (
    <motion.li
      ref={itemRef}
      initial="hidden"
      animate={itemInView ? "visible" : "hidden"}
      variants={item}
      className="flex items-center justify-between border-b border-dotted border-gray-300 py-2"
    >
      {/* Icon */}
      <img src={icon} alt={`${title} icon`} className="h-8 w-8 rounded" />

      {/* Title and Description */}
      <div className="ml-4 flex flex-1 items-center gap-2">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Year */}
      <p className="text-sm text-gray-400">{year}</p>
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
      className="prose max-w-xl text-justify sm:text-left sm:text-lg"
    >
      <Text components={markdownComponents} />
      <ul className="mt-4">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            year={project.year}
          />
        ))}
      </ul>
    </motion.div>
  );
}
