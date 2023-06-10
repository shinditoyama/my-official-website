import { SectionTitle } from "@/components/SectionTitle";
import { TechBadge } from "@/components/TechBadge";

export function ProjectDetailsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[500px] px-6 text-center">
      <SectionTitle title="Projeto 1" subtitle="projeto" />
      <p className="text-gray-400 my-6 max-w-2xl">
        BookWise é uma plataforma de avaliação de livros que foi desenvolvida
        durante o bootcamp Ignite de Rocketseat.
      </p>
      <div className="w-full max-w-sm flex flex-wrap items-center justify-center gap-2">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>
      <div className="flex sm:flex-row items-center gap-2 my-6 ">
        <button className="min-w-[160px] bg-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-500 transition-all">
          Repositorio
        </button>
        <button className="min-w-[160px] bg-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-500 transition-all">
          Repositorio
        </button>
      </div>
    </section>
  );
}
