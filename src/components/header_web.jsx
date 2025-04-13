import React, { useState } from "react";
import {Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import app_logo from "../assets/logo_app.png";
import "../style/App.css";
import menuIcon from "../assets/align-right-svgrepo-com.svg";

const HeaderWeb = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route
  
  // Toggle menu for mobile view
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img className="logo" src={app_logo} alt="Logo" />
      </div>

      {/* Custom Menu Icon for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <img
          src={menuIcon}
          alt="Menu Icon"
          className={`menu-icon ${menuOpen ? "active" : ""}`}
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "Services", "About Us", "Contact Us"].map((item) => {
            const linkPath = `/${item.toLowerCase().replace(/ /g, "")}`;
            return (
              <li key={item}>
                <Link
                  to={linkPath}
                  className={location.pathname === linkPath ? "active" : ""}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderWeb;
