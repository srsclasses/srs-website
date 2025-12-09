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
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Notice Not Found</h1>
          <p className="mb-8 text-foreground/70">The notice you're looking for doesn't exist.</p>
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-background shadow-lg transition-all hover:shadow-xl hover:bg-primary/90"
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
    // Return uniform style for all categories
    return "bg-primary/10 text-primary border-primary/20";
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
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-foreground/10 bg-background/80 py-4 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
            <Link href="/notices" className="hover:text-primary">
              Notices
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-foreground">Notice #{notice.id}</span>
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
              className="mb-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to All Notices
            </Link>

            {/* Notice Card */}
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl">
              {/* Header */}
              <div className="border-b border-foreground/10 bg-primary p-8 text-background">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className={`rounded-full border border-background/30 bg-background/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm`}>
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="animate-pulse rounded-full bg-background px-4 py-1.5 text-sm font-bold text-primary shadow-lg">
                      NEW
                    </span>
                  )}
                  {notice.isPinned && (
                    <span className="flex items-center gap-1 rounded-full bg-foreground px-4 py-1.5 text-sm font-bold text-background shadow-lg">
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
                <div className="flex items-center gap-2 text-background/80">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-lg">{formatDate(notice.date)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-background">
                <div className="prose prose-lg max-w-none text-foreground/80">
                  {notice.fullContent.split('\n').map((paragraph, index) => {
                    // Handle bold text (markdown style)
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="mb-4 mt-6 text-xl font-bold text-foreground">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    // Handle list items
                    if (paragraph.trim().startsWith('-')) {
                      return (
                        <li key={index} className="ml-6 text-foreground/80">
                          {paragraph.replace(/^-\s*/, '')}
                        </li>
                      );
                    }
                    // Regular paragraphs
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="mb-4 text-foreground/80">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-foreground/10 bg-background p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
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
                    className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
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
                  className="group rounded-lg border border-foreground/10 bg-background p-4 transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm text-foreground/60">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Previous Notice
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {prevNotice.title}
                  </h3>
                </Link>
              )}
              {nextNotice && (
                <Link
                  href={`/notices/${nextNotice.id}`}
                  className="group rounded-lg border border-foreground/10 bg-background p-4 text-right transition-all hover:shadow-lg hover:border-primary/30 md:col-start-2"
                >
                  <div className="mb-2 flex items-center justify-end gap-2 text-sm text-foreground/60">
                    Next Notice
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
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
