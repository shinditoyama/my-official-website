import Image from "next/image";
import { MotionDiv, MotionH3, MotionP } from "./Motion";
import { Badge } from "./ui/badge";

interface Props {
  project: IProjectAttributes;
}

export function HighlightCard({ project }: Props) {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row gap-6"
    >
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full overflow-hidden rounded-lg">
        <Image
          width={420}
          height={304}
          alt={project.title}
          src={project.thumbnail.url}
          className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1">
        <MotionH3
          {...animProps}
          transition={{ duration: 0.6 }}
          className="text-lg"
        >
          {project.title}
        </MotionH3>

        <MotionP
          {...animProps}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-muted-foreground text-justify my-6"
        >
          {project.shortDescription}
        </MotionP>

        <div className="flex flex-wrap gap-2 mb-8 lg:max-w-sm">
          {project.technologies.map((tech, index) => (
            <MotionDiv
              key={`${project.title}-${tech.name}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Badge className="bg-primary/80">{tech.name}</Badge>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}
