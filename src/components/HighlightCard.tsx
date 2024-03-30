import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv, MotionH3, MotionP } from "./Motion";
import { Badge } from "./ui/badge";

interface Props {
  project: IProjectAttributes;
}

export function HighlightCard({ project }: Props) {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden relative"
    >
      <div className="relative w-full h-60 flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          alt={project.title}
          src={project.thumbnail.url}
          fill
          priority
          className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
        />
        <div className="flex gap-x-4">
          <Link
            href={project.projectLink}
            target="_blank"
            className="bg-secondary w-12 h-12 rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-primary text-white"
          >
            <Link2 />
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            className="bg-secondary w-12 h-12 rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-primary text-white"
          >
            <Github />
          </Link>
        </div>
      </div>

      <div className="pt-2 space-y-2">
        <MotionH3
          {...animProps}
          transition={{ duration: 0.6 }}
          className="text-lg"
        >
          {project.title}
        </MotionH3>

        <MotionP
          {...animProps}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-muted-foreground text-justify h-20 line-clamp-3"
        >
          {project.shortDescription}
        </MotionP>

        <div className="flex flex-wrap gap-2 mb-8 lg:max-w-sm">
          {project.technologies.map((tech, index) => (
            <MotionDiv
              key={`${project.title}-${tech.name}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Badge className="bg-primary/80">{tech.name}</Badge>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
