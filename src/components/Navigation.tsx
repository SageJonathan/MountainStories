import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        Mountain Stories
      </Link>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/poetry" className="nav-link">
          Poetry
        </Link>
        <Link to="/travel-stories" className="nav-link">
          Travel Stories
        </Link>
        <Link to="/alpine-journal" className="nav-link">
          Alpine Journal
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        {isMobileMenuOpen && (
          <button className="mobile-close-button" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
            <span>Close menu</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
