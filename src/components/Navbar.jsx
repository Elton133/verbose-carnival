import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-center ">
      <nav className="navbar border border-gray-50 dark:bg-gray-950 dark:border-slate-900 shadow-sm ">
        <span className="logo font-bold">
          <a href="/">Elton</a>
        </span>
        <span className="hamburger" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""} `}>
          <li className="hover:bg-gray-100 rounded-full">
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
        <span>
          <ThemeToggle />
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
