interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="text-emerald-400 bg-emerald-900/80 py-1 px-3 text-sm rounded-lg">
      {name}
    </span>
  );
}
