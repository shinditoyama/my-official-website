import { links } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
        </SheetHeader>
        <div className="my-8">
          <div className="flex flex-col items-center justify-between h-full gap-32">
            <div className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <Link key={link.name} href={link.path}>
                  <SheetClose asChild>
                    <Button className="w-36 capitalize">{link.name}</Button>
                  </SheetClose>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
