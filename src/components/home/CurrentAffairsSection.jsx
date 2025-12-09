"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import currentAffairsData from "@/data/currentAffairs.json";

/**
 * Current Affairs Section Component for Home Page
 * Displays a preview of current affairs with PDF viewer and link to full page
 */
export default function CurrentAffairsSection() {
  const [selectedDate, setSelectedDate] = useState("");
  const [pdfExists, setPdfExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  // Check for PDF in JSON
  useEffect(() => {
    if (!selectedDate) return;

    setLoading(true);
    setPdfExists(false);
    const foundEntry = currentAffairsData.find(item => item.date === selectedDate);
    if (foundEntry) {
      setPdfUrl(foundEntry.link);
      setPdfExists(true);
    } else {
      setPdfUrl('/pdfs/default-current-affair.pdf');
      setPdfExists(true);
    }
    setLoading(false);
  }, [selectedDate]);

  if (!selectedDate) return null; // Prevent hydration error

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Today's Current Affairs
          </h2>
          <p className="text-lg text-foreground/70">
            Stay updated with the latest news and events for competitive exams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Preview Section */}
          <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-foreground/10">
            <div className="p-4 bg-primary text-background">
              <h3 className="text-xl font-semibold">
                {new Date(selectedDate).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
            </div>
            
            {/* PDF Preview */}
            <div className="relative bg-foreground/5" style={{ height: '400px' }}>
              {loading ? (
                <div className="h-full flex items-center justify-center">
                   <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
              ) : pdfExists ? (
                <iframe
                  src={pdfUrl}
                  key={pdfUrl}
                  className="w-full h-full border-0"
                  title="Current Affairs PDF Preview"
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Not Uploaded Yet
                  </h3>
                  <p className="text-foreground/70">
                    Today's current affairs will be available shortly.
                  </p>
                </div>
              )}
            </div>
            
            <div className="p-6 text-center flex flex-col gap-4">
              <Link
                href="/current-affairs"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              >
                View Full Current Affairs
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1-XYb6He4LpnczFjs0qpMrDLS1nYXgEtL?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-background text-primary border border-primary font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-primary/5 hover:scale-105"
              >
                📂 Drive Archive
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="bg-background rounded-lg shadow-md p-6 border border-foreground/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Daily Updates
                  </h4>
                  <p className="text-foreground/70">
                    Get comprehensive coverage of daily current affairs tailored for BPSC and other competitive exams
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-md p-6 border border-foreground/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Download PDF
                  </h4>
                  <p className="text-foreground/70">
                    Download monthly compilations and daily notes for offline reading and revision
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg shadow-md p-6 border border-foreground/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Archive Access
                  </h4>
                  <p className="text-foreground/70">
                    Access previous months' current affairs through our comprehensive archive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
