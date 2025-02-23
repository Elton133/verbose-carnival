import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./theme-toggle";

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
          <p>Elton</p>
        </span>
        <span className="hamburger" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a className="nav-link active" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="nav-link" href="#testimonials">
              Now
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Tutorials
            </a>
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
