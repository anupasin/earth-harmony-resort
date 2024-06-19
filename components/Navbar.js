import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('menu-open', !isMenuOpen);
    }
  };

  useEffect(() => {
    // Clean up the class on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Earth Harmony Resort</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
