import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-900">
              <span className="text-blue-600">SRS</span> Classes
            </Link>
            <p className="text-gray-600">
              Empowering students to achieve their dreams through quality education and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-600">Courses</Link>
              </li>
              <li>
                <Link href="/current-affairs" className="hover:text-blue-600">Current Affairs</Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-blue-600">Notices</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Our Courses</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/courses/bpsc-hindi" className="hover:text-blue-600">BPSC (Hindi)</Link>
              </li>
              <li>
                <Link href="/courses/bpsc-english" className="hover:text-blue-600">BPSC (English)</Link>
              </li>
              <li>
                <Link href="/courses/upsc" className="hover:text-blue-600">UPSC Foundation</Link>
              </li>
              <li>
                <Link href="/courses/daroga" className="hover:text-blue-600">Bihar Daroga</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>123 Education Lane, Knowledge City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>info@srsclasses.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SRS Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
