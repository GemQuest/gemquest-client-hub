'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect on navbar opacity
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-opacity duration-300 
      ${isScrolled ? 'bg-black bg-opacity-90' : 'bg-black bg-opacity-50 md:bg-opacity-10'}`}  // Adjust opacity based on scroll
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Project name and links */}
        <div className="flex items-center">
          <h1 className="text-neutralLight text-2xl font-bold">
            <Link href="/">GemQuest</Link>
          </h1>
          <ul className="hidden md:flex space-x-6 ml-10">
            <li>
              <Link href="/" className="text-neutralLight hover:text-secondary">Home</Link>
            </li>
            <li>
              <Link href="/team" className="text-neutralLight hover:text-secondary">Team</Link>
            </li>
            <li>
              <Link href="/plans" className="text-neutralLight hover:text-secondary">Plans</Link>
            </li>
          </ul>
        </div>

        {/* Right side - Login/Signup links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login" className="text-neutralLight hover:text-secondary">Login</Link>
          <Link href="/auth/signup" className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-neutralLight" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link href="/" className="text-neutralLight hover:text-secondary">Home</Link>
            </li>
            <li>
              <Link href="/team" className="text-neutralLight hover:text-secondary">Team</Link>
            </li>
            <li>
              <Link href="/plans" className="text-neutralLight hover:text-secondary">Plans</Link>
            </li>
            <li>
              <Link href="/auth/login" className="text-neutralLight hover:text-secondary">Login</Link>
            </li>
            <li>
              <Link href="/auth/signup" className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary">Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
