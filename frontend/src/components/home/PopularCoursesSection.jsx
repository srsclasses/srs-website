"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { popularCourses } from "@/data/homeData";

const fadeIn = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
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

const PopularCoursesSection = () => {
  const [courses, setCourses] = useState(popularCourses);
  const [loading, setLoading] = useState(false);

  const getColorClass = (color) => {
    const colorMap = {
      orange: 'bg-orange-100',
      blue: 'bg-blue-100',
      purple: 'bg-purple-100',
      red: 'bg-red-100'
    };
    return colorMap[color] || 'bg-gray-100';
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Popular Courses</h2>
            <p className="mt-4 text-lg text-gray-600">Start your preparation with our top-rated programs.</p>
          </div>
          <Link href="/courses" className="hidden text-sm font-medium text-blue-600 hover:underline sm:block">View all courses &rarr;</Link>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          </div>
        ) : (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2"
          >
            {courses.map((course) => {
              const handleCardClick = () => {
                window.location.href = course.link;
              };

              const handleButtonClick = (e, action) => {
                e.stopPropagation();
                if (action === 'info') {
                  window.location.href = course.link;
                } else if (action === 'buyOnline') {
                  alert(`Redirecting to online purchase for ${course.title}`);
                } else if (action === 'buyOffline') {
                  alert(`Redirecting to offline purchase for ${course.title}`);
                }
              };

              return (
                <motion.div key={course.id} variants={fadeIn}>
                  <div 
                    onClick={handleCardClick}
                    className="group block relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-2xl hover:border-blue-400 border-2 border-transparent cursor-pointer"
                  >
                    <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-white">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                      
                      {/* Three Action Buttons */}
                      <div className="flex flex-col gap-2 mt-4">
                        <button
                          onClick={(e) => handleButtonClick(e, 'info')}
                          className="w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        >
                          📚 Info
                        </button>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={(e) => handleButtonClick(e, 'buyOnline')}
                            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                          >
                            🛒 Online
                          </button>
                          
                          <button
                            onClick={(e) => handleButtonClick(e, 'buyOffline')}
                            className="rounded-lg bg-orange-600 px-3 py-2 text-xs font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                          >
                            🏪 Offline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/courses" className="text-sm font-medium text-blue-600 hover:underline">View all courses &rarr;</Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
