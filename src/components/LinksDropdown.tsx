import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";

function LinksDropdown() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    //LinksDropdown
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only"> Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          const restrictedRouter =
            link.href === "checkout" || link.href === "orders";
          if (restrictedRouter && !user) return null;
          return (
            <DropdownMenuItem key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `w-full capitalize ${isActive ? "text-primary" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
