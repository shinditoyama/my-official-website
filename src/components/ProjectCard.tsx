import Image from "next/image";

interface Props {
  project: IProject;
}

export function ProjectCard({ project }: Props) {
  const tecnologies = project.technologies.map((x) => x.name).join(", ");

  return (
    <div className="flex flex-col h-[436px] rounded-lg overflow-hidden bg-gray-800 border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          alt={project.title}
          src={project.thumbnail.url}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          unoptimized
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          {project.title}
        </strong>

        <p className="mt-2 text-gray-400 line-clamp-4 text-justify">
          {project.shortDescription}
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {tecnologies}
        </span>
      </div>
    </div>
  );
}
