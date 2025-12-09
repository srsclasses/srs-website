"use client";

import { motion, AnimatePresence } from "framer-motion";
import noticesData from "@/data/notices.json";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
              Official Announcements
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              All Notices
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80 md:text-xl">
              Stay updated with all announcements, events, and important information from SRS Classes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-sm text-foreground/60">
            Showing {noticesData.length} {noticesData.length === 1 ? 'notice' : 'notices'}
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {noticesData.length > 0 ? (
                noticesData.map((notice, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                  >
                    <a 
                      href={notice.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block p-6"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            {notice.title}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background shadow-md transition-transform group-hover:scale-110">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center"
                >
                  <svg className="mx-auto mb-4 h-16 w-16 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                  </svg>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">No notices found</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
