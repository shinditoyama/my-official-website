import { SectionTitle } from "../SectionTitle";
import { Timeline } from "../Timeline";

interface Props {
  experiences: IExperience[];
}

export function Experiences({ experiences }: Props) {
  return (
    <section className="container mx-auto py-16 flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-16">
      <div className="max-w-sm">
        <SectionTitle title="Experiências" subtitle="experiências" />
        <p className="text-muted-foreground mt-6">
          Estou sempre aberto a novos desafios e projetos intrigantes. Vamos
          trabalhar juntos para criar soluções incriveis para sua empresa.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ol className="relative border-l border-muted-foreground">
          {experiences?.map((experience) => (
            <Timeline
              key={`${experience.companyName}-${experience.role}`}
              experience={experience}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
