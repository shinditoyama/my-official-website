import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export function ProjectListSection() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/project/1">
          <ProjectCard />
        </Link>
        <Link href="/project/1">
          <ProjectCard />
        </Link>
        <Link href="/project/1">
          <ProjectCard />
        </Link>
      </div>
    </section>
  );
}
