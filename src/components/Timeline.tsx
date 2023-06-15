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
    <li className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
      <time className="text-sm font-normal leading-none text-gray-300">
        {dateFormatter(startDate)} - {dateFormatter(endDate)}
      </time>
      <h3 className="mt-1 text-lg font-semibold text-gray-50">
        {experience.role}
      </h3>
      <p className="text-base text-justify font-normal text-gray-500">
        {experience.description.text}
      </p>
    </li>
  );
}
