import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Dotphic</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#">Works</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
