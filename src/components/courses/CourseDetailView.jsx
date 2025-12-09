"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * CourseDetailView Component
 * 
 * Displays detailed information about a specific course including:
 * - Course information (title, description, mentors, stats)
 * - What students will learn (features list)
 * - Course topics breakdown
 * - Purchase/enrollment options (online/offline)
 * - Contact modal for offline purchases
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.course - Course data object containing all course information
 * @param {string} props.course.title - Course title
 * @param {string} props.course.fullDescription - Detailed course description
 * @param {string} props.course.price - Course price (e.g., "₹55,000" or "Free")
 * @param {string[]} props.course.features - List of course features/benefits
 * @param {string[]} props.course.topics - List of course topics covered
 * @param {string[]} props.course.mentors - List of course instructors
 * @param {string[]} props.course.availability - Available modes: "online" and/or "offline"
 * @param {number} props.course.rating - Course rating (0-5)
 * @param {number} props.course.students - Number of enrolled students
 * @param {string} props.course.duration - Course duration (e.g., "6 Months")
 * @param {string} props.course.level - Course difficulty level
 * @param {string} props.course.image - Path to course image
 * 
 * @returns {JSX.Element} Course detail page with all information and enrollment options
 */
export default function CourseDetailView({ course }) {
  const router = useRouter();
  
  // State for controlling the contact modal visibility
  const [showContactModal, setShowContactModal] = useState(false);

  // Handle case where course data is not provided
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link href="/courses" className="text-blue-600 hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  /**
   * Handles the offline purchase button click
   * Opens the contact modal with coaching center information
   */
  const handleOfflinePurchase = () => {
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <Link 
          href="/courses" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Course Information */}
          <div>
            {/* Course Level Badge */}
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {course.level}
            </div>

            {/* Course Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {course.title}
            </h1>

            {/* Course Statistics */}
            <div className="mb-6 flex flex-wrap gap-6 text-sm">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-foreground">⭐</span>
                <span className="font-semibold text-foreground">{course.rating}</span>
                <span className="text-foreground/60">Rating</span>
              </div>
              {/* Student Count */}
              <div className="flex items-center gap-2">
                <span className="text-primary">👥</span>
                <span className="font-semibold text-foreground">{course.students}</span>
                <span className="text-foreground/60">Students</span>
              </div>
              {/* Duration */}
              <div className="flex items-center gap-2">
                <span className="text-primary">⏱️</span>
                <span className="font-semibold text-foreground">{course.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-8 text-lg text-foreground/80 leading-relaxed">
              {course.fullDescription}
            </p>

            {/* Mentors Section */}
            <div className="mb-8 p-4 bg-background rounded-lg border border-foreground/10">
              <p className="text-sm text-foreground/60 mb-3">Mentors</p>
              <div className="flex flex-wrap gap-2">
                {course.mentors?.map((mentor, index) => (
                  <span key={index} className="inline-block bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {mentor}
                  </span>
                ))}
              </div>
            </div>

            {/* Course Features - What You'll Get */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">What You'll Get</h2>
              <div className="space-y-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase/Enrollment Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Online Purchase/Enrollment - Shows for all courses with online availability */}
              {course.availability?.includes('online') && (
                course.price === "Free" ? (
                  // Free Course - Link to YouTube playlist
                  <a 
                    href="https://youtube.com/playlist?list=PLv409aQToxoDlVBl8h6Zi3iB45Ay7CmOM&si=rfzcWiYGI_TxRZur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg px-8 py-4 text-center font-semibold text-background focus:outline-none focus:ring-4 transition-all transform hover:scale-105 cursor-pointer bg-primary hover:bg-primary/90 focus:ring-primary/50"
                  >
                    🎓 Free Classes
                  </a>
                ) : (
                  // Paid Course - Link to Google Play Store
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.agxvyn.zbeuaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg px-8 py-4 text-center font-semibold text-white focus:outline-none focus:ring-4 transition-all transform hover:scale-105 cursor-pointer bg-green-600 hover:bg-green-700 focus:ring-green-500/50"
                  >
                    🛒 Buy Online
                  </a>
                )
              )}
              
              {/* Offline Purchase - Shows only for paid courses with offline availability */}
              {course.availability?.includes('offline') && course.price !== "Free" && (
                <button 
                  onClick={handleOfflinePurchase}
                  className="flex-1 rounded-lg bg-orange-600 px-8 py-4 text-center font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all transform hover:scale-105 cursor-pointer"
                >
                  🏪 Buy Offline
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Course Highlights */}
          <div>
            {/* Course Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8 aspect-video bg-background">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={100}
              />
            </div>

            {/* Course Topics Breakdown */}
            <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-xl border border-foreground/5">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Course Topics</h3>
              <ul className="space-y-3 text-foreground/80">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose This Course - Only for paid courses */}
            {course.price !== "Free" && (
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">💡 Why Choose This Course?</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>✓ Experienced instructors with proven track record</li>
                  <li>✓ Flexible learning schedule - online & offline options</li>
                  <li>✓ Comprehensive study materials included</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Modal - Shows when user clicks Buy Offline */}
      {/* TODO: Update with actual coaching center address and phone number */}
      {showContactModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">📍 Visit Our Coaching Center</h3>
              <p className="text-foreground/70">For offline enrollment, please visit us or call</p>
            </div>

            <div className="space-y-4">
              {/* Address Section */}
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📍</span> Address
                </h4>
                <p className="text-foreground/80">
                  The SRS Classes, 3rd floor Central Bank Building,<br />
                  NayaTola, Patna, Bihar, India (800001)
                </p>
              </div>

              {/* Contact Number Section */}
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>📞</span> Contact Number
                </h4>
                <a href="tel:+919717527200" className="text-primary font-semibold text-lg hover:underline">
                  +91 97175 27200
                </a>
              </div>
            </div>

            {/* Close Button */}
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
