import { Menu } from "lucide-react";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div>
          <div className="flex flex-col items-center justify-between h-full gap-32">
            <Nav
              containerStyle="flex flex-col items-center gap-6"
              linkStyle="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
