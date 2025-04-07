import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="mailto:jonathan.sage@example.com" className="footer-link">
          <i className="fas fa-envelope"></i>
          <span>Email</span>
        </a>
        <a
          href="https://www.instagram.com/wandering_mapachito"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
