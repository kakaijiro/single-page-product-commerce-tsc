import { Logo, LinksDropdown, NavLinks, ModeToggle, CartButton } from "./";

function Navbar() {
  return (
    //Navrar
    <nav className="bg-muted py-4">
      <div className="align-element flex items-center justify-between">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex items-center justify-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
