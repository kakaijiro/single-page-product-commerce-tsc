import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";

function Logo() {
  return (
    //Logo
    <Link
      to="/"
      className="bg-primary hidden items-center justify-center rounded-lg p-2 text-white lg:flex"
    >
      <Armchair className="h-8 w-8" />
    </Link>
  );
}

export default Logo;
