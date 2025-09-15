import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 z-[999] w-full h-[50px] flex justify-between items-center px-5 border-b border-gray-300 ${isDark ? "bg-[#242424]" : "bg-white"}`}
    >
      <Link to="/" className="font-semibold">
        Mini loja
      </Link>

      <div className="flex items-center gap-5">
        <div
          onClick={() => toggleTheme(!isDark)}
          className="flex items-center px-[3px] w-[40px] h-[25px] rounded-full border border-gray-400/50 shadow-md cursor-pointe"
        >
          <div
            className={`w-[15px] h-[15px] rounded-full transition-all duration-300 ${
              isDark ? "translate-x-[15px] bg-teal-600" : "translate-x-0 bg-blue-900"
            }`}
          />
        </div>
        <Link to="/">
          <FaCartPlus className="text-[20px] cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
