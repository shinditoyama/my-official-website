import { SectionTitle } from "@/components/SectionTitle";
import { TechCard } from "@/components/TechCard";

interface Props {
  techInfo: ISkill[];
}

export function TechSection({ techInfo }: Props) {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-12">
        {techInfo?.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  );
}
