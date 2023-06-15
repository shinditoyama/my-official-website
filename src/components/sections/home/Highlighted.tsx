import { HighlightCard } from "@/components/HighlightCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  projects: IProject[];
}

export function HighlightedSection({ projects }: Props) {
  return (
    <section className="container py-16">
      <SectionTitle title="Projeto em Destaque" subtitle="destaques" />
      <div className="w-full my-8 border-b border-gray-800" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <HighlightCard project={project} />
            <div className="w-full my-8 border-b border-gray-800" />
          </div>
        ))}

        <p className="flex items-center gap-2">
          <span className="text-base text-gray-400">Se interessoou?</span>
          <Link
            href="/project"
            className="flex items-center gap-2 text-base hover:text-emerald-500 transition-colors"
          >
            Ver todos <ChevronRight size={20} className="pt-0.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}
