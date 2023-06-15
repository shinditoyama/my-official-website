import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-gray-400 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
}
