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
              <Link href="https://youtube.com/@thesrsclasses?si=8LLEMe5mGjZvTUzC" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-[#FF0000]/80 transition-colors" title="YouTube: @thesrsclasses">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="https://youtube.com/@sdmrahulsinha26?si=kEuJTdSZd8qg8M-n" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-[#FF0000]/80 transition-colors" title="YouTube: @sdmrahulsinha26">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="https://www.instagram.com/thesrsclasses?igsh=bGZ5ZHdnZHV2b2c4" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#E1306C]/80 transition-colors" title="Instagram: @sdmrahulsinha">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-2.008 2H12.3c.005 0 .01.001.015.001 2.446 0 2.756.012 3.732.057.973.045 1.504.207 1.855.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.351.3.882.344 1.855.045.92.056 1.25.056 3.84v.258c0 2.515-.01 2.898-.056 3.84-.045.973-.207 1.504-.344 1.855-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.351.137-.882.3-1.855.344-.975.045-1.29.057-3.856.057h-.24c-2.52 0-2.883-.011-3.857-.057-.973-.045-1.504-.207-1.855-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.351-.3-.882-.344-1.855-.045-.975-.057-1.29-.057-3.856v-.24c0-2.52.011-2.883.057-3.857.045-.973.207-1.504.344-1.855.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.351-.137.882-.3 1.855-.344.893-.041 1.243-.054 3.233-.054zM12.315 6.879a5.122 5.122 0 100 10.243 5.122 5.122 0 000-10.243zm0 8.243a3.122 3.122 0 110-6.243 3.122 3.122 0 010 6.243zm5.328-9.205a1.18 1.18 0 100 2.359 1.18 1.18 0 000-2.359z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://t.me/sdmrahulsinhaofficialgroup" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] hover:text-[#0088cc]/80 transition-colors" title="Telegram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.169l-2.078 9.778c-.154.697-.573.87-1.162.54l-3.213-2.368-1.55 1.492c-.171.171-.314.314-.643.314l.229-3.271 5.954-5.385c.259-.229-.057-.356-.4-.128L8.033 13.25l-3.174-.993c-.69-.214-.704-.69.144-1.018l12.42-4.787c.563-.223 1.056.136.855 1.037z"/></svg>
              </Link>
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
