import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HighlightList } from "../HighlightList";
import { SectionTitle } from "../SectionTitle";

interface Props {
  projects: IProjectAttributes[];
}

export function Highlighted({ projects }: Props) {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em Destaque" subtitle="destaques" />
      <div className="w-full my-8 border-muted-foreground" />

      <HighlightList projects={projects} />

      <div className="flex items-center gap-2">
        <span className="text-base text-gray-400">Se interessoou?</span>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          Ver todos <ChevronRight size={20} className="pt-0.5" />
        </Link>
      </div>
    </section>
  );
}
