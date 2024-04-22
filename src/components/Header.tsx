"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { MotionHeader } from "./Motion";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";

export function Header() {
  const [header, setHeader] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setScrollPos(currentScrollPos);

    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  }, [scrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <MotionHeader
      initial={{ y: -100 }}
      animate={!isVisible ? "hidden" : "visible"}
      variants={{
        visible: { top: "0px", y: 0 },
        hidden: { top: "-100px" },
      }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 w-full h-20 flex items-center justify-center z-10",
        header
          ? "backdrop-blur-lg shadow-lg dark:bg-accent"
          : "dark:bg-transparent"
      )}
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
