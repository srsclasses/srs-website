"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import coursesData from '@/data/courses.json';

export default function CoursesPage() {
  const router = useRouter();
  const [showContactModal, setShowContactModal] = useState(false);
  const [courses] = useState(coursesData);

  const handleCardClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  const handleButtonClick = (e, action, course) => {
    e.stopPropagation(); // Prevent card click
    // Handle different button actions
    switch(action) {
      case 'info':
        router.push(`/courses/${course.id}`);
        break;
      case 'buyOnline':
        if (course.price === "Free") {
           // Redirect to YouTube playlist for free classes
           window.open('https://youtube.com/playlist?list=PLv409aQToxoDlVBl8h6Zi3iB45Ay7CmOM&si=rfzcWiYGI_TxRZur', '_blank');
        } else {
           // Redirect to Google Play Store for paid courses
           window.open('https://play.google.com/store/apps/details?id=com.agxvyn.zbeuaf', '_blank');
        }
        break;
      case 'buyOffline':
        // Show contact modal
        setShowContactModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Discover a wide range of subjects taught by expert instructors. Find the perfect course to advance your education.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {courses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => handleCardClick(course.id)}
              className="group relative overflow-hidden rounded-2xl border-2 border-foreground/5 bg-background shadow-md transition-all hover:shadow-2xl hover:border-primary cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-background">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={course.id <= 2}
                  quality={100}
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Heading */}
                <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="mb-4 text-sm text-foreground/70 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta Info */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {course.level}
                  </span>
                  <span className="text-xs text-foreground/60">{course.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {/* Info Button - Always visible */}
                  <button
                    onClick={(e) => handleButtonClick(e, 'info', course)}
                    className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors cursor-pointer"
                  >
                    📚 Course Info
                  </button>
                  
                  {/* Buy Buttons - Conditional based on availability */}
                  <div className={`grid gap-2 ${course.availability.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {course.availability.includes('online') && (
                      <button
                        onClick={(e) => handleButtonClick(e, 'buyOnline', course)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium text-background focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors cursor-pointer ${
                          course.price === "Free" 
                            ? "bg-primary hover:bg-primary/90 focus:ring-primary" 
                            : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
                        }`}
                      >
                        {course.price === "Free" ? "🎓 Free Classes" : "🛒 Buy Online"}
                      </button>
                    )}
                    
                    {course.availability.includes('offline') && (
                      <button
                        onClick={(e) => handleButtonClick(e, 'buyOffline', course)}
                        className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors cursor-pointer"
                      >
                        🏪 Buy Offline
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}
