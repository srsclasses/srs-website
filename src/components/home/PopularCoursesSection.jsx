"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";

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
  const [courses, setCourses] = useState(homeData.popularCourses);
  const [loading, setLoading] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Popular Courses</h2>
            <p className="mt-4 text-lg text-foreground/70">Start your preparation with our top-rated programs.</p>
          </div>
          <Link href="/courses" className="hidden text-sm font-medium text-primary hover:underline sm:block">View all courses &rarr;</Link>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
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
                  if (course.price === "Free") {
                    // Redirect to YouTube playlist for free classes
                    window.open('https://youtube.com/playlist?list=PLv409aQToxoDlVBl8h6Zi3iB45Ay7CmOM&si=rfzcWiYGI_TxRZur', '_blank');
                  } else {
                    // Redirect to Google Play Store for paid courses
                    window.open('https://play.google.com/store/apps/details?id=com.agxvyn.zbeuaf', '_blank');
                  }
                } else if (action === 'buyOffline') {
                  // Show contact modal
                  setShowContactModal(true);
                }
              };

              return (
                <motion.div key={course.id} variants={fadeIn}>
                  <div 
                    onClick={handleCardClick}
                    className="group block relative overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-2xl hover:border-primary border-2 border-foreground/5 cursor-pointer"
                  >
                    <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-background">
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
                      <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{course.description}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2 mt-4">
                        <button
                          onClick={(e) => handleButtonClick(e, 'info')}
                          className="w-full rounded-lg bg-primary px-3 py-2 text-xs font-medium text-background hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer"
                        >
                          📚 Info
                        </button>
                        
                        <div className={`grid gap-2 ${course.availability?.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {course.availability?.includes('online') && (
                            <button
                              onClick={(e) => handleButtonClick(e, 'buyOnline')}
                              className={`rounded-lg px-3 py-2 text-xs font-medium text-background focus:outline-none focus:ring-2 transition-colors cursor-pointer ${
                                course.price === "Free"
                                  ? "bg-primary hover:bg-primary/90 focus:ring-primary"
                                  : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
                              }`}
                            >
                              {course.price === "Free" ? "🎓 Free Classes" : "🛒 Buy Online"}
                            </button>
                          )}
                          
                          {course.availability?.includes('offline') && (
                            <button
                              onClick={(e) => handleButtonClick(e, 'buyOffline')}
                              className="rounded-lg bg-orange-600 px-3 py-2 text-xs font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors cursor-pointer"
                            >
                              🏪 Buy Offline
                            </button>
                          )}
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
          <Link href="/courses" className="text-sm font-medium text-primary hover:underline">View all courses &rarr;</Link>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">📍 Visit Our Coaching Center</h3>
              <p className="text-foreground/70">For offline enrollment, please visit us or call</p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📍</span> Address
                </h4>
                <p className="text-foreground/80">
                  The SRS Classes, 3rd floor Central Bank Building,<br />
                  NayaTola, Patna, Bihar, India (800001)
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📞</span> Contact Number
                </h4>
                <a href="tel:+919717527200" className="text-primary font-semibold text-lg hover:underline">
                  +91 97175 27200
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="mt-6 w-full bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCoursesSection;
