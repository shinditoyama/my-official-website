import { SectionTitle } from "../SectionTitle";
import { Timeline } from "../Timeline";

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

{
  /*
    <section classNameName="container py-16">
      <div classNameName="grid gap-4 mx-4 sm:grid-cols-12">
        <div classNameName="col-span-12 sm:col-span-3">
          <SectionTitle title="Experiências" subtitle="experiências" />
          <p classNameName="text-gray-400 mt-6">
            Estou sempre aberto a novos desafios e projetos intrigantes. Vamos
            trabalhar juntos para criar soluções incriveis para sua empresa.
          </p>
        </div>

        <div classNameName="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div classNameName="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
            <ExperienceItem />
            <ExperienceItem />
          </div>
        </div>
      </div>
    </section>
    */
}
