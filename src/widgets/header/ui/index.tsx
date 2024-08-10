import { ModeToggle } from "@/features/mode-toggle";
import { SheetMenu } from "@/widgets/sheet-menu/ui";
import { UserNav } from "@/widgets/user-nav/ui";

export const Header = () => (
  <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
    <div className="mx-4 sm:mx-8 flex h-14 items-center">
      <div className="flex items-center space-x-4 lg:space-x-0">
        <SheetMenu />
      </div>
      <div className="flex flex-1 items-center space-x-2 justify-end">
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  </header>
);
