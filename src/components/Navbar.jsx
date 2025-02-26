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
    <div>
      <nav className="navbar pt-5">
        <span className="logo">
          <a href="/">Elton</a>
        </span>
        <span className="hamburger" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Now</Link>
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
