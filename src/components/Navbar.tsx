'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-neutralLight">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Project Name */}
        <div className="text-2xl font-bold">
          <Link href="/">GemQuest</Link>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-secondary">Home</Link>
          <Link href="/team" className="hover:text-secondary">Team</Link>
          <Link href="/plans" className="hover:text-secondary">Plans</Link>
        </div>

        {/* Connection buttons */}
        <div className="hidden md:flex space-x-6">
          <Link href="/auth/login" className="hover:text-secondary">Login</Link>
          <Link href="/auth/signup" className="hover:text-secondary">Sign Up</Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-neutralLight focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-secondary" onClick={toggleMenu}>Home</Link>
            <Link href="/team" className="hover:text-secondary" onClick={toggleMenu}>Team</Link>
            <Link href="/plans" className="hover:text-secondary" onClick={toggleMenu}>Plans</Link>
            <Link href="/auth/login" className="hover:text-secondary" onClick={toggleMenu}>Login</Link>
            <Link href="/auth/signup" className="hover:text-secondary" onClick={toggleMenu}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
