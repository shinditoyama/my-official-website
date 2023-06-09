interface TechCardProps {
  name: string;
}

export function TechCard({ name }: TechCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        icon
      </div>
    </div>
  );
}
