import { MotionDiv } from "../Motion";
import { SectionTitle } from "../SectionTitle";
import { TechCard } from "../TechCard";

interface Props {
  techInfo: ISkill[];
}

export function Skills({ techInfo }: Props) {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-12">
        {techInfo?.map((tech, index) => (
          <MotionDiv
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <TechCard {...tech} />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
