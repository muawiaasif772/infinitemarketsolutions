import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
// import SidebarContact from "./SidebarContact";
//  // ✅ Import Sidebar Contact Component
import SideContact from "../SidebarContactUs";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
const closeMenu = () => {
  setIsOpen(false);
}
const closenav = () => {
  setIsOpen(false);
}
  const handleBookConsultation = () => {
    setShowSidebar(true);
  };
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsOpen(false); // Close menu on scroll down
      }
      lastScrollY = window.scrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8995c997083349ee206144a8855ca67448a6094fecb7028cc821281d2942863a?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
          className={styles.logo}
          alt="Infinite Market Solutions Logo"
        />
      </div>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ""} `}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`} onClick={closenav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
      onClick={closeMenu}  >
          Home
        </NavLink>
        <div className={styles.dropdown}>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
         onClick={closeMenu} >
            Services
          </NavLink>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownColumn}>
              <NavLink to="/services/mobile-app"   onClick={closeMenu}>
                Mobile App Development
              </NavLink>
              <NavLink to="/services/digital-marketing"   onClick={closeMenu}>
                Digital Marketing
              </NavLink>
              <NavLink to="/services/web-development"   onClick={closeMenu}>Web Development</NavLink>
              <NavLink to="/services/software-development"   onClick={closeMenu}>
                Custom Software Development
              </NavLink>
            </div>
            <div className={styles.dropdownColumn}>
              <NavLink to="/services/ux-ui-design"   onClick={closeMenu}>UI/UX Design</NavLink>
              <NavLink to="/services/ecommerce-solution">
                E-Commerce Solutions
              </NavLink>
              <NavLink to="/services/artificial-intelligence"   onClick={closeMenu}>
                AI & Machine Learning
              </NavLink>
              <NavLink to="/services/blockchain"   onClick={closeMenu}>
                Blockchain Development
              </NavLink>
            </div>
          </div>
        </div>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
          onClick={closeMenu}  >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
          onClick={closeMenu} >
          Contact
        </NavLink>
      </nav>
      <div className={styles.consultationButton}>
        <span onClick={handleBookConsultation} className={styles.buttonText}>
          Book Consultation
        </span>
      </div>
      {/* ✅ Show Sidebar Contact when state is true */}
      {showSidebar && (
        <SideContact
          isOpen={setShowSidebar}
          onClose={() => setShowSidebar(false)}
        />
      )}{" "}
    </header>
  );
}

export default Header;
