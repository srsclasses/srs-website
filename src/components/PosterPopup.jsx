"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


export default function PosterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on mount
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative max-h-[90vh] w-auto bg-transparent rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex justify-center items-center">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-10 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Close popup"
        >
          {/* Fallback X if lucide-react is not installed, but usually it is in modern stacks. Using SVG for safety */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {/* Using width/height=0 + sizes="100vw" + style w-auto h-[90vh] is the Next.js way for arbitrary aspect ratios constrained by height */}
        <Image
          src="/images/poster.jpg"
          alt="Announcement Poster"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain h-[90vh] w-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
