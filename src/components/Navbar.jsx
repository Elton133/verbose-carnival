import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="navbar">
        <span className="logo font-bold">
          <a href="/">Elton</a>
        </span>
        
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="/now">Now</Link>
          </li>
          <li>
            <Link to="#">Tutorials</Link>
          </li>
        </ul>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <span className="hamburger" onClick={toggleMenu}>
            ☰
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
