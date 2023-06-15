import { ProjectDetailsSection } from "@/components/sections/project/ProjectDetails";
import { fetchHygraphQuery } from "@/utils/hygraph-fetch";
import { GET_PROJECTS_SLUG } from "@/utils/hygraph-queries";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return { title: params.slug, description: `Portfolio - ${params.slug}` };
}

const getProjectDetails = async (slug: string): Promise<IProjectPage> => {
  const query = `
    query {
      project(where: {slug: "${slug}"}) {
        title
        githubLink
        projectLink
        shortDescription
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `;

  return fetchHygraphQuery(query, 60);
};

export default async function Project({ params }: Props) {
  const { project } = await getProjectDetails(params.slug);

  return (
    <main>
      <ProjectDetailsSection project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  const { projects } = await fetchHygraphQuery<IProjectsSlug>(
    GET_PROJECTS_SLUG
  );

  return projects;
}
