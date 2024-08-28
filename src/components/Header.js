import React, { useState } from "react";
import logo from "../assets/images/pulse-logo.svg";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Pulse Logo" />
        </a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon" />
      </button>
      <nav className={`header-list ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/feature">Features</Link>
          </li>
          <li>
            <Link to="/customer">Customer Stories</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
