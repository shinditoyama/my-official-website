import { fetchProject, fetchProjects } from "@/app/actions";
import { Modal } from "@/components/Modal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: params.slug,
  };
}

export async function generateStaticParams() {
  const { projects } = await fetchProjects();

  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PortfolioSlug({ params }: Props) {
  const { slug } = params;
  const { project } = await fetchProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Modal>
      <Card className="animate-zoom">
        <CardHeader className="p-3">
          <figure className="relative w-full h-full md:h-80 max-h-[25rem] overflow-hidden rounded-lg">
            <Image
              alt={project.title}
              src={project.thumbnail.url}
              width={1000}
              height={1000}
              priority
              className="object-cover rounded-lg w-full h-full"
            />
          </figure>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 text-center">
              <h2>{project.title}</h2>
              <div className="space-x-2">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className={buttonVariants({ variant: "link" })}
                >
                  Github
                </Link>
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className={buttonVariants({ variant: "link" })}
                >
                  Live Demo
                </Link>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <p className="text-justify pb-3">{project.shortDescription}</p>
              <div className="flex flex-wrap lg:max-w-sm gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={`${project.title}-${tech.name}`}
                    className="bg-primary/80"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}
