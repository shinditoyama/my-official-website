import { SectionTitle } from "@/components/SectionTitle";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[500px] px-6 text-center bg-gray-950">
      <SectionTitle title="Meus Projetos" subtitle="projetos" />
      <p className="text-gray-400 my-6 max-w-2xl">
        Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
        vontade e explore os projetos para ver como foram criados, as
        tecnologias utilizadas e as funcionalidades implementadas.
      </p>
    </section>
  );
}
