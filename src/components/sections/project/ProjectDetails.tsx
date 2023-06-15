import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { TechBadge } from "@/components/TechBadge";
import { Github, Link } from "lucide-react";

interface Props {
  project: IProject;
}

export function ProjectDetailsSection({ project }: Props) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[500px] px-6 text-center">
      <SectionTitle title={project.title} subtitle="projeto" />
      <p className="text-gray-400 my-6 max-w-2xl">{project.shortDescription}</p>

      <div className="w-full max-w-sm flex flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 my-6">
        <a href={project.githubLink} target="_blank">
          <Button className="min-w-[180px]">
            <Github size={20} />
            Repositorio
          </Button>
        </a>
        <a href={project.projectLink} target="_blank">
          <Button className="min-w-[180px]">
            <Link size={20} />
            Live Demo
          </Button>
        </a>
      </div>
    </section>
  );
}
