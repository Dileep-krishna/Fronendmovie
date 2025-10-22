import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="navbar-brand" onClick={() => handleNavigation("/")}>
          <span className="navbar-logo">🎬</span>
          <h1 className="navbar-title">OTT Dashboard</h1>
        </div>

       
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

       
        <ul className={`navbar-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive("/")}`}
              onClick={() => handleNavigation("/")}
            >
              🏠 Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive("/movies")}`}
              onClick={() => handleNavigation("/movies")}
            >
              📽️ Movies
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive("/upcoming")}`}
              onClick={() => handleNavigation("/upcoming")}
            >
              🚀 Coming Soon
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${isActive("/admin")}`}
              onClick={() => handleNavigation("/admin")}
            >
              ⚙️ Admin Panel
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="home-button"
              onClick={() => handleNavigation("/")}
            >
              🏠 Home
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;