import { ProjectList } from "@/components/ProjectList";
import { SectionTitle } from "@/components/SetionTitle";
import { fetchProducts } from "../actions";

export const metadata = {
  title: "Projetos",
};

export default async function Project() {
  const { projects } = await fetchProducts();

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto">
        <div className="mb-4 xl:mb-8">
          <SectionTitle title="Meus Projetos" subtitle="projetos" />
        </div>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
