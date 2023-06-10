import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";

export function ExperienceSection() {
  return (
    <section className="container py-16 flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-16">
      <div className="max-w-sm">
        <SectionTitle title="Experiências" subtitle="experiências" />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos intrigantes. Vamos
          trabalhar juntos para criar soluções incriveis para sua empresa.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ol className="relative border-l border-gray-300">
          <Timeline />
          <Timeline />
          <Timeline />
        </ol>
      </div>
    </section>
  );
}
