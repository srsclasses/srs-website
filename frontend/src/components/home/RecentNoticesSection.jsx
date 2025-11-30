"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      staggerChildren: 0.1
    }
  }
};

const RecentNoticesSection = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/notices');
        if (response.ok) {
          const data = await response.json();
          setNotices(data.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
        </div>
      </section>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Admission": "bg-green-100 text-green-700",
      "Examination": "bg-red-100 text-red-700",
      "Event": "bg-purple-100 text-purple-700",
      "Academic": "bg-blue-100 text-blue-700",
      "General": "bg-gray-100 text-gray-700"
    };
    return colors[category] || colors["General"];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            Latest Updates
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Notices
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay informed with the latest announcements, events, and important updates from SRS Classes
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-4"
        >
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={`/notices/${notice.id}`} className="block p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(notice.category)}`}>
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
          ))}
        </motion.div>

        {/* View All Notices Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            View All Notices
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentNoticesSection;
