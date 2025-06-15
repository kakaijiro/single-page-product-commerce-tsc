import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

function Header() {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo",
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    // header
    <header>
      <div className="align-element flex justify-center py-2 sm:justify-end">
        {/* user */}
        {user ? (
          <div className="gapx-x-2 flex items-center sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <div className="-mr-r flex items-center justify-center gap-x-6">
              <Button asChild variant="link">
                <Link to="/login">Sign in/Guest</Link>
              </Button>
              <Button asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
