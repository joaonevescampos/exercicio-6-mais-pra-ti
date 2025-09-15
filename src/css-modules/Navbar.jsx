import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import "./navbar.module.css"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <nav className={`navbar-container ${isDark ? "dark" : "light"}`}>
      <Link to="/">Mini loja</Link>
      <div className="nav-right-container">
        <div
          onClick={() => toggleTheme(!isDark)}
          className={`toggle-container ${isDark ? "dark" : "light"}`}
        >
          <div
            className={`toggle-select ${
              isDark ? "translate-left" : "translate-right"
            }`}
          />
        </div>
        <Link to="/">
          <FaCartPlus className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
