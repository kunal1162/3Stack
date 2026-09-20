import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/3stack-logo.png" alt="3Stack Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions desktop-only">
          <Button href="/contact" variant="primary" size="sm">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mobile-nav-action">
            <Button href="/contact" variant="primary" fullWidth onClick={closeMobileMenu}>
              Let's Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
