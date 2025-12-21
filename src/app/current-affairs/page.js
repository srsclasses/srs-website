"use client";

import { useState, useEffect } from "react";


/**
 * Current Affairs Page Component
 * Displays current affairs PDFs with date selection
 */
export default function CurrentAffairs() {
  const [selectedDate, setSelectedDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize with today's date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMaxDate(today);
    setSelectedDate(today);
  }, []);

  // Load PDF URL based on selected date from API
  useEffect(() => {
    if (!selectedDate) return;
    
    const fetchCurrentAffair = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/current-affairs?date=${selectedDate}`);
        const data = await res.json();
        
        if (data && data.link) {
          setPdfUrl(data.link);
        } else {
          setPdfUrl('/pdfs/default-current-affair.pdf');
        }
      } catch (error) {
        console.error("Failed to fetch current affair:", error);
        setPdfUrl('/pdfs/default-current-affair.pdf');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentAffair();
  }, [selectedDate]);

  const handleToday = () => {
    setLoading(true);
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  };

  if (!selectedDate) {
    return (
      <div className="bg-background flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-primary text-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Affairs</h1>
          <p className="text-xl text-background/80">Stay updated with daily current affairs for competitive exams</p>
        </div>
      </div>

      {/* Date picker */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-background rounded-lg shadow-md p-6 mb-6 border border-foreground/10">
          <label htmlFor="date-picker" className="block text-lg font-semibold mb-3 text-foreground">Select Date:</label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="date-picker"
              type="date"
              value={selectedDate}
              onChange={e => {
                setLoading(true);
                if (e.target.value === "") {
                  const today = new Date().toISOString().split("T")[0];
                  setSelectedDate(today);
                } else {
                  setSelectedDate(e.target.value);
                }
              }}
              max={maxDate}
              className="w-full md:w-auto px-4 py-2 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            />
            <button
              onClick={handleToday}
              className="bg-primary hover:bg-primary/90 text-background font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Today
            </button>
            <a
              href="https://drive.google.com/drive/folders/1-XYb6He4LpnczFjs0qpMrDLS1nYXgEtL?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-background text-primary border border-primary font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-primary/5"
            >
              📂 Drive Archive
            </a>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="bg-background rounded-lg shadow-md overflow-hidden border border-foreground/10">
          <div className="p-4 bg-foreground/5 border-b border-foreground/10">
            <h2 className="text-xl font-semibold text-foreground">
              Current Affairs - {new Date(selectedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
          </div>
          <div className="relative" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
            {loading && (
              <div className="h-full flex items-center justify-center absolute inset-0 z-10 bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            )}
            <iframe 
              src={pdfUrl || null} 
              className="w-full h-full border-0" 
              title={`Current Affairs PDF for ${selectedDate}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
