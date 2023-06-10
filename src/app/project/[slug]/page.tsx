import { ProjectDetailsSection } from "@/components/sections/project/ProjectDetails";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return { title: params.slug, description: `Portfolio - ${params.slug}` };
}

export default function Project({ params }: Props) {
  return (
    <main>
      <ProjectDetailsSection />
    </main>
  );
}
