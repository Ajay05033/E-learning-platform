import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar glass-nav">
      <div className="container flex justify-between items-center h-100">
        <Link to="/" className="logo flex items-center gap-1">
          <FaCloud className="text-primary text-2xl" />
          <span className="font-bold text-xl">CloudLearn</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''} glass`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
          <Link to="/login" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </div>

        <div className="nav-controls flex items-center gap-2">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
