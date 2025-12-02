"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { notices as allNotices } from "@/data/notices";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 100 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function NoticesPage() {
  const [notices, setNotices] = useState(allNotices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategoryColor = (category) => {
    const colors = {
      "Admission": "bg-green-100 text-green-700 border-green-200",
      "Examination": "bg-red-100 text-red-700 border-red-200",
      "Event": "bg-purple-100 text-purple-700 border-purple-200",
      "Academic": "bg-blue-100 text-blue-700 border-blue-200",
      "General": "bg-gray-100 text-gray-700 border-gray-200"
    };
    return colors[category] || colors["General"];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-bold">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
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
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
              Official Announcements
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              All Notices
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-indigo-100 md:text-xl">
              Stay updated with all announcements, events, and important information from SRS Classes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-sm text-gray-600">
            Showing {notices.length} {notices.length === 1 ? 'notice' : 'notices'}
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {notices.length > 0 ? (
                notices.map((notice) => (
                  <motion.div
                    key={notice.id}
                    variants={fadeIn}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {notice.isPinned && (
                      <div className="absolute right-0 top-0">
                        <div className="flex items-center gap-1 rounded-bl-lg bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.03 1.632.74 2.03A3.989 3.989 0 007 15a3.989 3.989 0 002.078-.144c.71-.398.99-1.25.74-2.03L9 10.274V3a1 1 0 00-2 0v7.274z"/>
                          </svg>
                          PINNED
                        </div>
                      </div>
                    )}

                    <Link href={`/notices/${notice.id}`} className="block p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getCategoryColor(notice.category)}`}>
                              {notice.category}
                            </span>
                            {notice.isNew && (
                              <span className="animate-pulse rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                                NEW
                              </span>
                            )}
                            <span className="flex items-center gap-1 text-sm text-gray-500">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                              </svg>
                              {formatDate(notice.date)}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                            {notice.title}
                          </h3>
                          <p className="text-gray-600">
                            {notice.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md transition-transform group-hover:scale-110">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center"
                >
                  <svg className="mx-auto mb-4 h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                  </svg>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">No notices found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
