import "./nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { themecontext } from "../../context/themecontext";

function Nav() {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  const { theme } = useContext(themecontext);
    return islogin ? null : (  
    <nav
      className="navbar"
      style={{
        backgroundColor: theme === "dark" ? "#23272f" : "#333",
        color: theme === "dark" ? "#f7fafc" : "white",
        boxShadow:
          theme === "dark"
            ? "0 2px 5px rgba(0,0,0,0.6)"
            : "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <span className="logo">logo</span>
      <div className="menu">
        <Link
          to="/posts"
          style={{ color: theme === "dark" ? "#f7fafc" : "white" }}
        >
          Posts
        </Link>
        <Link
          to="/login"
          style={{ color: theme === "dark" ? "#f7fafc" : "white" }}
        >
          Login
        </Link>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme === "dark" ? "#f7fafc" : "white" }}
        >
          Google
        </a>
          <ThemeToggleButton />
      </div>
    </nav>
  );
}

export default Nav;
