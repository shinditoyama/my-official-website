import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechBadge } from "./TechBadge";

interface Props {
  project: IProject;
}

export function HighlightCard({ project }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full overflow-hidden rounded-lg">
        <Image
          width={420}
          height={304}
          alt={project.title}
          src={project.thumbnail.url}
          className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg text-gray-50">{project.title}</h3>

        <p className="text-gray-400 text-justify my-6">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 lg:max-w-sm">
          {project.technologies.map((tech) => (
            <TechBadge key={`${project.title}-${tech.name}`} name={tech.name} />
          ))}
        </div>

        <Link
          href={`/project/${project.slug}`}
          className="flex items-center gap-2 text-sm hover:text-emerald-500 transition-colors"
        >
          Ver Projeto <ChevronRight size={20} className="pt-0.5" />
        </Link>
      </div>
    </div>
  );
}
