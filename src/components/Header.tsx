"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { MotionHeader } from "./Motion";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";

export function Header() {
  const [header, setHeader] = useState(false);

  const scrollYPos = useCallback(() => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollYPos);

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        header
          ? "backdrop-blur-lg shadow-lg dark:bg-accent"
          : "dark:bg-transparent"
      } sticky top-0 w-full h-20 flex items-center justify-center z-30`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h4>Shindi Toyama</h4>
          </Link>
          <div className="flex h-6 items-center gap-4">
            <NavLink
              containerStyle="hidden lg:flex gap-8 item-center"
              linkStyle="relative hover:text-primary transition-all"
              underlineStyle="absolute left-0 top-full bg-primary w-full h-[2px]"
            />
            <Separator orientation="vertical" className="hidden lg:flex" />
            <ThemeToggle />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </MotionHeader>
  );
}
