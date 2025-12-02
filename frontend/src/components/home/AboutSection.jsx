"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutSection } from "@/data/homeData";

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(aboutSection);
  const [loading, setLoading] = useState(false);

  if (loading || !aboutData) {
    return (
      <section id="about" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{aboutData.title}</h2>
            <p className="mb-6 text-lg text-gray-600">{aboutData.description1}</p>
            <p className="mb-8 text-lg text-gray-600">{aboutData.description2}</p>
            <Link href={aboutData.ctaLink} className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700">{aboutData.ctaText}</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl bg-gray-100 shadow-lg"
          >
            {/* Placeholder for About Image */}
            <div className="flex h-full w-full items-center justify-center bg-blue-50 text-blue-200">
              <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
