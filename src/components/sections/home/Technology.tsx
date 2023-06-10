import { SectionTitle } from "@/components/SectionTitle";
import { TechCard } from "@/components/TechCard";

export function TechSection() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-12">
        {Array.from({ length: 8 }).map((_, index) => (
          <TechCard key={index} name="Next.js" />
        ))}
      </div>
    </section>
  );
}
