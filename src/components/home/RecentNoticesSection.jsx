"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      staggerChildren: 0.1
    }
  }
};

const RecentNoticesSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            Latest Updates
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Notices
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Stay informed with the latest announcements, events, and important updates from The SRS Classes
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-4"
        >
          {noticesData.slice(0, 3).map((notice, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <a 
                href={notice.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-background"
            >
              View Archive
            </Link>
          </motion.div>
      </div>
    </section>
  );
};

export default RecentNoticesSection;
