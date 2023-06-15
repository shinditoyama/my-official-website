import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

interface Props {
  projects: IProject[];
}

export function ProjectListSection({ projects }: Props) {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/project/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
