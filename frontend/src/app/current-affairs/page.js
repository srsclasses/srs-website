"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { currentAffairsData } from "@/data/currentAffairs";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 100 }
  }
};

export default function CurrentAffairsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [selectedState, setSelectedState] = useState("Bihar");
  const [currentAffairs, setCurrentAffairs] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [availableStates, setAvailableStates] = useState([]);
  const [allData, setAllData] = useState(currentAffairsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dates = currentAffairsData.map(d => d.date);
    setAvailableDates(dates);

    if (dates.length > 0) {
      const latest = dates[0];
      setSelectedDate(latest);
      const latestData = currentAffairsData.find(d => d.date === latest);
      setCurrentAffairs(latestData);
      
      // Get available states for this date
      const states = latestData.state ? Object.keys(latestData.state) : [];
      setAvailableStates(states);
    }
  }, []);

  // Update current affairs when date changes
  useEffect(() => {
    if (selectedDate && allData.length > 0) {
      const data = allData.find(d => d.date === selectedDate);
      setCurrentAffairs(data);
      const states = data.state ? Object.keys(data.state) : [];
      setAvailableStates(states);
    }
  }, [selectedDate, allData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Governance": "bg-blue-100 text-blue-700",
      "Economy": "bg-green-100 text-green-700",
      "Education": "bg-purple-100 text-purple-700",
      "Technology": "bg-indigo-100 text-indigo-700",
      "Agriculture": "bg-amber-100 text-amber-700",
      "Defense": "bg-red-100 text-red-700",
      "Health": "bg-pink-100 text-pink-700",
      "International Relations": "bg-cyan-100 text-cyan-700",
      "International Organizations": "bg-teal-100 text-teal-700",
      "Infrastructure": "bg-slate-100 text-slate-700",
      "Energy": "bg-yellow-100 text-yellow-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getImportanceBadge = (importance) => {
    if (importance === "high") {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
          High Priority
        </span>
      );
    }
    return null;
  };

  const filteredNews = () => {
    if (!currentAffairs) return { national: [], international: [], state: [] };
    
    const stateNews = currentAffairs.state?.[selectedState] || [];

    if (selectedCategory === "all") {
      return {
        national: currentAffairs.national || [],
        international: currentAffairs.international || [],
        state: stateNews
      };
    } else if (selectedCategory === "national") {
      return {
        national: currentAffairs.national || [],
        international: [],
        state: []
      };
    } else if (selectedCategory === "international") {
      return {
        national: [],
        international: currentAffairs.international || [],
        state: []
      };
    } else if (selectedCategory === "state") {
      return {
        national: [],
        international: [],
        state: stateNews
      };
    }
    
    return { national: [], international: [], state: [] };
  };

  const news = filteredNews();
  const allNews = [...news.national, ...news.international, ...news.state];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
              </svg>
              Daily Current Affairs
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Current Affairs Archive
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-indigo-100 md:text-xl">
              Access comprehensive daily coverage of national and international news for UPSC preparation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Affairs Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
             <h2 className="text-2xl font-bold text-gray-900">
               {selectedDate ? formatDate(selectedDate) : "Latest Updates"}
             </h2>
             <div className="text-sm text-gray-600">
               {allNews.length} {allNews.length === 1 ? 'article' : 'articles'}
             </div>
          </div>
          <AnimatePresence mode="wait">
            {allNews.length > 0 ? (
              <motion.div
                key={selectedDate + selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* National News */}
                {news.national.length > 0 && (
                  <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                      <div className="rounded-lg bg-gradient-to-r from-orange-500 to-red-600 p-2 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
                        </svg>
                      </div>
                      National News
                    </h2>
                    <div className="grid gap-6">
                      {news.national.map((item) => (
                        <NewsCard key={item.id} item={item} type="national" getCategoryColor={getCategoryColor} getImportanceBadge={getImportanceBadge} />
                      ))}
                    </div>
                  </div>
                )}

                {/* International News */}
                {news.international.length > 0 && (
                  <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                      <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 p-2 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      International News
                    </h2>
                    <div className="grid gap-6">
                      {news.international.map((item) => (
                        <NewsCard key={item.id} item={item} type="international" getCategoryColor={getCategoryColor} getImportanceBadge={getImportanceBadge} />
                      ))}
                    </div>
                  </div>
                )}

                {/* State News */}
                {news.state.length > 0 && (
                  <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                      <div className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 p-2 text-white">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      {selectedState} News
                    </h2>
                    <div className="grid gap-6">
                      {news.state.map((item) => (
                        <NewsCard key={item.id} item={item} type="state" getCategoryColor={getCategoryColor} getImportanceBadge={getImportanceBadge} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <svg className="mx-auto mb-4 h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">No current affairs available</h3>
                <p className="text-gray-600">Please select a different date from the calendar</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

// News Card Component
function NewsCard({ item, type, getCategoryColor, getImportanceBadge }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(item.category)}`}>
              {item.category}
            </span>
            {getImportanceBadge(item.importance)}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="mb-4 text-gray-600">
          {item.summary}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span key={index} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
              #{tag}
            </span>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          {isExpanded ? "Show Less" : "Read Full Details"}
          <svg 
            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="prose prose-sm max-w-none">
                  {item.details.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h4 key={index} className="mb-2 mt-4 font-bold text-gray-900">
                          {paragraph.replace(/\*\*/g, '')}
                        </h4>
                      );
                    }
                    if (paragraph.trim().startsWith('-')) {
                      return (
                        <li key={index} className="ml-6 text-gray-700">
                          {paragraph.replace(/^-\s*/, '')}
                        </li>
                      );
                    }
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="mb-2 text-gray-700">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
