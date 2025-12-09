"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  // if (pathname?.startsWith('/current-affairs')) return null;

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-background/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-3 text-xl font-bold tracking-tighter text-background">
              <Image 
                src="/images/logo.jpg" 
                alt="The SRS Classes" 
                width={48} 
                height={48}
                className="h-12 w-12 object-cover rounded-full border-2 border-primary"
              />
              <span className="text-primary font-extrabold">The SRS Classes</span>
            </Link>
            <p className="text-background/60 leading-relaxed mb-6">
              Empowering students to achieve their dreams through quality education and expert guidance. Join the revolution in learning.
            </p>
            <div className="flex gap-4">
              {/* Add social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-background">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/current-affairs" className="hover:text-primary transition-colors">Current Affairs</Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-primary transition-colors">Notices</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-background">Popular Courses</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses/bpsc-hindi" className="hover:text-primary transition-colors">BPSC Foundation (Hindi)</Link>
              </li>
              <li>
                <Link href="/courses/bpsc-english" className="hover:text-primary transition-colors">BPSC Foundation (English)</Link>
              </li>
              <li>
                <Link href="/courses/upsc" className="hover:text-primary transition-colors">UPSC Foundation</Link>
              </li>
              <li>
                <Link href="/courses/daroga" className="hover:text-primary transition-colors">Bihar Daroga</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-background">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-primary/20 p-1.5 rounded text-primary">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-background/60">3rd floor Central Bank Building, NayaTola, Patna, Bihar, India (800001)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded text-primary">
                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-background/60">teamsrs26@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="bg-primary/20 p-1.5 rounded text-primary">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-background/60">+91 97175 27200</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>&copy; {new Date().getFullYear()} The SRS Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
