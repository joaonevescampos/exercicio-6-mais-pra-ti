import { Link } from "react-router-dom";
import "./global.css";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") ?? false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <nav className={`navbar-container ${isDark ? "dark" : ""}`}>
      <Link to="/css-global">Mini loja</Link>
      <div className="nav-right-container">
        <div
          onClick={() => setIsDark(!isDark)}
          className={`toggle-container ${isDark ? "dark" : ""}`}
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
