import "./Navbar.css";
import { useState, useContext, memo } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "experience",
  "contact",
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const formatLabel = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {/* Logo */}
      <h1 className="logo">PORTFOLIO</h1>

      {/* Navigation */}
      <ul className={menu ? "nav-links active" : "nav-links"}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={() => setMenu(false)}
            >
              {formatLabel(item)}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <button
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        type="button"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu */}
      <button
        className="menu-icon"
        onClick={() => setMenu((prev) => !prev)}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
        type="button"
      >
        {menu ? <FaTimes /> : <FaBars />}
      </button>
    </motion.nav>
  );
}

export default memo(Navbar);