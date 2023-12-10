"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { MotionHeader } from "./Motion";
import { Nav } from "./Nav";
import { ThemeToggle } from "./ThemeToggle";

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
          <div className="flex items-center gap-6">
            <Nav
              containerStyle="hidden xl:flex gap-8 item-center"
              linkStyle="relative hover:text-primary transition-all"
              underlineStyle="absolute left-0 top-full bg-primary w-full h-[2px]"
            />
            <ThemeToggle />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </MotionHeader>
  );
}
