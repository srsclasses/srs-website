"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";

const AboutSection = () => {
  const [aboutData] = useState(homeData.aboutSection);

  return (
    <section id="about" className="bg-background py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="block">About</span>
              <span className="text-gradient">The SRS Classes</span>
            </h2>
            <p className="mb-6 text-lg text-foreground/80 leading-relaxed">{aboutData.description1}</p>
            <p className="mb-8 text-lg text-foreground/80 leading-relaxed">{aboutData.description2}</p>
            <Link 
              href={aboutData.ctaLink} 
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-background shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {aboutData.ctaText}
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="relative">
             {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-foreground/5 transform transition-transform hover:scale-[1.02] duration-500"
            >
              <Image
                src="/images/sdm.jpg"
                alt="About The SRS Classes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
