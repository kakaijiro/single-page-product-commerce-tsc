import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    //NavLinks
    <div className="hidden items-center justify-center gap-x-4 lg:flex">
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.label}
          className={({ isActive }) =>
            `font-light tracking-wide capitalize ${isActive ? "text-primary" : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
