"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const links = [
    { href: "/courses/bpsc-hindi", label: "BPSC Hindi" },
    { href: "/courses/bpsc-english", label: "BPSC English" },
    { href: "/courses/upsc", label: "UPSC" },
    { href: "/courses/daroga", label: "Daroga" },
    { href: "/courses", label: "All Courses" },
    { href: "/current-affairs", label: "Current Affairs" },
    { href: "/notices", label: "Notices" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-gray-900" onClick={closeMenu}>
              <span className="text-blue-600">SRS</span> Classes
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden lg:inline-flex h-9 items-center justify-center rounded-md border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="hidden lg:inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Login
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="overflow-hidden lg:hidden border-t border-gray-100"
            >
              <div className="flex flex-col space-y-4 py-4 pb-6">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm font-medium text-gray-600 hover:text-blue-600"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/register"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50"
                  onClick={closeMenu}
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
