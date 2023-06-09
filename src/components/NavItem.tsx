import clsx from "clsx";
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
      className={clsx(
        "flex items-center gap-2 text-gray-500 font-medium font-mono",
        {
          "text-red-50": isActive,
        }
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
}
