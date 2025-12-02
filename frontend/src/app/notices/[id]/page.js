"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { notices as noticesData } from "@/data/notices";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 100 }
  }
};

export default function NoticeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState(null);
  const [allNotices, setAllNotices] = useState(noticesData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      const currentNotice = noticesData.find(n => n.id === parseInt(params.id));
      setNotice(currentNotice || null);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Notice Not Found</h1>
          <p className="mb-8 text-gray-600">The notice you're looking for doesn't exist.</p>
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to All Notices
          </Link>
        </div>
      </div>
    );
  }

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
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentIndex = allNotices.findIndex(n => n.id === notice.id);
  const prevNotice = currentIndex > 0 ? allNotices[currentIndex - 1] : null;
  const nextNotice = currentIndex < allNotices.length - 1 ? allNotices[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-white/80 py-4 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
            <Link href="/notices" className="hover:text-indigo-600">
              Notices
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-gray-900">Notice #{notice.id}</span>
          </div>
        </div>
      </section>

      {/* Notice Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mx-auto max-w-4xl"
          >
            {/* Back Button */}
            <Link
              href="/notices"
              className="mb-6 inline-flex items-center gap-2 text-indigo-600 transition-colors hover:text-indigo-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to All Notices
            </Link>

            {/* Notice Card */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              {/* Header */}
              <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className={`rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm`}>
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="animate-pulse rounded-full bg-white px-4 py-1.5 text-sm font-bold text-indigo-600 shadow-lg">
                      NEW
                    </span>
                  )}
                  {notice.isPinned && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.03 1.632.74 2.03A3.989 3.989 0 007 15a3.989 3.989 0 002.078-.144c.71-.398.99-1.25.74-2.03L9 10.274V3a1 1 0 00-2 0v7.274z"/>
                      </svg>
                      PINNED
                    </span>
                  )}
                </div>
                <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                  {notice.title}
                </h1>
                <div className="flex items-center gap-2 text-indigo-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-lg">{formatDate(notice.date)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {notice.fullContent.split('\n').map((paragraph, index) => {
                    // Handle bold text (markdown style)
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="mb-4 mt-6 text-xl font-bold text-gray-900">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    // Handle list items
                    if (paragraph.trim().startsWith('-')) {
                      return (
                        <li key={index} className="ml-6 text-gray-700">
                          {paragraph.replace(/^-\s*/, '')}
                        </li>
                      );
                    }
                    // Regular paragraphs
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="mb-4 text-gray-700">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                    </svg>
                    Print Notice
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation to Previous/Next Notice */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {prevNotice && (
                <Link
                  href={`/notices/${prevNotice.id}`}
                  className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Previous Notice
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
                    {prevNotice.title}
                  </h3>
                </Link>
              )}
              {nextNotice && (
                <Link
                  href={`/notices/${nextNotice.id}`}
                  className="group rounded-lg border border-gray-200 bg-white p-4 text-right transition-all hover:shadow-lg md:col-start-2"
                >
                  <div className="mb-2 flex items-center justify-end gap-2 text-sm text-gray-500">
                    Next Notice
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
                    {nextNotice.title}
                  </h3>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
