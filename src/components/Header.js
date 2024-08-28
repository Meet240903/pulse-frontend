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
            <a href="/feature">Features</a>
          </li>
          <li>
            <a href="/customer">Customer Stories</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
