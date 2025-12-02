"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DarogaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👮</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Daroga Course
          </h1>
          <div className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Coming Soon
          </div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We are working hard to bring you the best Daroga preparation course. 
            Stay tuned for comprehensive study materials, expert guidance, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 md:text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
          <Link 
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-colors shadow-sm hover:shadow-md"
          >
            Explore Other Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
