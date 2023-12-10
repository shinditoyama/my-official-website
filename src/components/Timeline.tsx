import { MotionDiv } from "./Motion";

interface Props {
  experience: IExperience;
}

export function Timeline({ experience }: Props) {
  const startDate = new Date(experience.startDate);
  const endDate = new Date(experience.endDate);

  const dateFormatter = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "short",
    }).format(date);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-muted-foreground" />
        <span className="text-gray-500">{experience.companyName}</span>
        <h5 className="mt-1 text-lg font-semibold">{experience.role}</h5>
        <time className="text-sm font-normal leading-none text-gray-500">
          {dateFormatter(startDate)} - {dateFormatter(endDate)}
        </time>
        <p className="my-3 text-base text-justify font-normal text-muted-foreground">
          {experience.description.text}
        </p>
      </li>
    </MotionDiv>
  );
}
