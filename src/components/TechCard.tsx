interface TechCardProps {
  name: string;
  icon: string;
}

export function TechCard({ name, icon }: TechCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <div
          className="text-2xl"
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
      </div>
    </div>
  );
}
