import "./nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  return islogin ? null : (
    <nav className="navbar">
      <span className="logo">logo</span>

      <div className="menu">
        <Link to="/posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <a
          href="/expired-links"
          style={{ color: "orange", fontWeight: "bold" }}
        >
          Wygasłe linki
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Google
        </a>
      </div>
    </nav>
  );
}

export default Nav;
