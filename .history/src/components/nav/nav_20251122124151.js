import "./nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  const links = [
    { to: "/posts", label: "Posts" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/login", label: "Login" },
  ];
  return islogin ? null : (
    <nav className="navbar">
      <span className="logo">logo</span>
      <div className="menu">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={
              location.pathname === link.to ? "active-link" : "inactive-link"
            }
          >
            {link.label}
          </Link>
        ))}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Google
        </a>
      </div>
    </nav>
  );
}

export default Nav;
