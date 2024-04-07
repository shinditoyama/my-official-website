import { fetchProjects } from "@/app/actions";
import { PortfolioList } from "@/components/PortfolioList";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "Portfolio",
};

export default async function Portfolio() {
  const { projects } = await fetchProjects();

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto">
        <div className="mb-4 xl:mb-8">
          <SectionTitle title="Meu Portfolio" subtitle="portfolio" />
        </div>
        <PortfolioList projects={projects} />
      </div>
    </section>
  );
}
