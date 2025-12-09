"use client";

import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tighter text-foreground transition-transform hover:scale-105" onClick={closeMenu}>
              <Image 
                src="/images/logo.jpg" 
                alt="The SRS Classes" 
                width={40} 
                height={40}
                className="h-10 w-10 object-cover rounded-full shadow-md ring-2 ring-primary/20"
              />
              The <span className="text-primary font-extrabold">SRS</span> Classes
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/80">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-all duration-300 hover:text-primary hover:scale-105 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-foreground/80 hover:text-primary focus:outline-none transition-all duration-300 hover:scale-110 hover:bg-primary/5 rounded-lg"
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
              className="overflow-hidden lg:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-md"
            >
              <div className="flex flex-col space-y-4 py-4 pb-6">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-2 hover:font-semibold px-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
