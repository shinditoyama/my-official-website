import Link from "next/link";
import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";

export function HighlightedSection() {
  return (
    <section className="container py-16">
      <SectionTitle title="Projeto em Destaque" subtitle="destaques" />
      <div className="w-full my-8 border-b border-gray-800" />

      <div>
        <ProjectCard />
        <div className="w-full my-8 border-b border-gray-800" />
        <ProjectCard />
        <div className="w-full my-8 border-b border-gray-800" />

        <p className="flex items-center gap-2">
          <span className="text-gray-400">Se interessoou?</span>
          <Link href="/">Ver todos</Link>
        </p>
      </div>
    </section>
  );
}
