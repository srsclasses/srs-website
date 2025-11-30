"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-blue-600 px-6 py-16 text-center shadow-xl sm:px-12 lg:py-20"
        >
          <h2 className="mx-auto mb-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-blue-100">Join SRS Classes today and take the first step towards your dream career. We are here to support you every step of the way.</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Contact Us Now</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
