import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionCard, MotionCardDescription, MotionCardTitle } from "./Motion";
import { Badge } from "./ui/badge";
import { CardContent, CardHeader } from "./ui/card";

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
    <MotionCard
      layout
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="min-h-[390px] hover:bg-muted hover:border-primary group overflow-hidden relative"
    >
      <CardHeader className="p-0">
        <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
          <Image
            alt={project.title}
            src={project.thumbnail.url}
            fill
            priority
            className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
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
      </CardHeader>
      <CardContent className="pt-2 space-y-2">
        <Badge className="uppercase font-medium mb-2 absolute top-4 left-5">
          {project.projectType}
        </Badge>
        <MotionCardTitle
          {...animProps}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl"
        >
          {project.title}
        </MotionCardTitle>
        <MotionCardDescription
          {...animProps}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-base text-justify line-clamp-3"
        >
          {project.shortDescription}
        </MotionCardDescription>
      </CardContent>
    </MotionCard>
  );
}
