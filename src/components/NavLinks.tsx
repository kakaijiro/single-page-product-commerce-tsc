import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";

function NavLinks() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    //NavLinks
    <div className="hidden items-center justify-center gap-x-4 lg:flex">
      {links.map((link) => {
        const restrictedRouter =
          link.href === "checkout" || link.href === "orders";
        if (restrictedRouter && !user) return null;
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) =>
              `font-light tracking-wide capitalize ${isActive ? "text-primary" : ""}`
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
