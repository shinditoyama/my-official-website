"use client";
import Link from "next/link";
import { NavItem } from "./NavItem";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/project" },
];

export function Header() {
  return (
    <header className="absolute top-0 w-full h-20 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-normal">Shindi Toyama</h2>
        </Link>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
