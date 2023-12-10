import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HighlightCard } from "../HighlightedCard";
import { SectionTitle } from "../SetionTitle";

interface Props {
  projects: IProjectAttributes[];
}

export function Highlighted({ projects }: Props) {
  return (
    <section className="container py-16">
      <SectionTitle title="Projeto em Destaque" subtitle="destaques" />
      <div className="w-full my-8 border-b border-muted-foreground" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <HighlightCard project={project} />
            <div className="w-full my-8 border-b border-muted-foreground" />
          </div>
        ))}

        <p className="flex items-center gap-2">
          <span className="text-base text-gray-400">Se interessoou?</span>
          <Link
            href="/project"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            Ver todos <ChevronRight size={20} className="pt-0.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}
