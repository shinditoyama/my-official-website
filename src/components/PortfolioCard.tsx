import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionCard } from "./Motion";
import { Badge } from "./ui/badge";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Props {
  project: IProjectAttributes;
}

export function PortfolioCard({ project }: Props) {
  return (
    <MotionCard
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[390px] hover:bg-muted group overflow-hidden relative"
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
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base text-justify line-clamp-3">
          {project.shortDescription}
        </CardDescription>
      </CardContent>
    </MotionCard>
  );
}
