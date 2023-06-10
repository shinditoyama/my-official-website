import { HighlightCard } from "@/components/HighlightCard";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

export function HighlightedSection() {
  return (
    <section className="container py-16">
      <SectionTitle title="Projeto em Destaque" subtitle="destaques" />
      <div className="w-full my-8 border-b border-gray-800" />

      <div>
        <HighlightCard />
        <div className="w-full my-8 border-b border-gray-800" />
        <HighlightCard />
        <div className="w-full my-8 border-b border-gray-800" />

        <p className="flex items-center gap-2">
          <span className="text-gray-400">Se interessoou?</span>
          <Link
            href="/project"
            className="hover:text-emerald-500 transition-colors"
          >
            Ver todos
          </Link>
        </p>
      </div>
    </section>
  );
}
