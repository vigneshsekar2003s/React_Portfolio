import "./Navbar.css";
import { useState, useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "certificates",
    "experience",
    "contact",
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <div className="logo">PORTFOLIO</div>

      {/* Navigation Links */}
      <ul className={menu ? "nav-links active" : "nav-links"}>
        {navItems.map((item) => (
          <li key={item}>
            <Link
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenu(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <button
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu */}
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </motion.nav>
  );
}

export default Navbar;