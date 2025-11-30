"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: "BPSC Complete Course (Hindi)",
    description: "Comprehensive BPSC preparation in Hindi medium with complete syllabus coverage and expert guidance.",
    level: "Intermediate to Advanced",
    duration: "6 Months",
    image: "/images/bpsc hindi batch 1.jpg",
    imagePlaceholder: "bg-orange-100",
    price: "₹12,999",
    offlinePrice: "₹14,999"
  },
  {
    id: 2,
    title: "BPSC Complete Course (English)",
    description: "Master BPSC preparation with English medium comprehensive course for all competitive exams.",
    level: "Intermediate to Advanced",
    duration: "6 Months",
    image: "/images/bpsc english batch-1.jpg",
    imagePlaceholder: "bg-blue-100",
    price: "₹12,999",
    offlinePrice: "₹14,999"
  },
  {
    id: 3,
    title: "Foundation Batch (Hindi) - Batch 1",
    description: "Build strong fundamentals with our Hindi medium foundation course for competitive exam aspirants.",
    level: "Beginner",
    duration: "4 Months",
    image: "/images/foundation batch hindi-1.jpg",
    imagePlaceholder: "bg-green-100",
    price: "₹8,999",
    offlinePrice: "₹10,499"
  },
  {
    id: 4,
    title: "Foundation Batch (Hindi) - Batch 2",
    description: "Advanced foundation course in Hindi covering all essential topics for government exam preparation.",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    image: "/images/foundation batch hindi batch-2.jpg",
    imagePlaceholder: "bg-purple-100",
    price: "₹8,999",
    offlinePrice: "₹10,499"
  },
  {
    id: 5,
    title: "Foundation Batch (English) - Batch 2",
    description: "Complete foundation course in English medium with comprehensive coverage of all subjects.",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    image: "/images/fondation english batch-2.jpg",
    imagePlaceholder: "bg-indigo-100",
    price: "₹8,999",
    offlinePrice: "₹10,499"
  },
  {
    id: 6,
    title: "BPSC AEDO Free Course",
    description: "Free comprehensive course for BPSC AEDO preparation with expert faculty and study materials.",
    level: "All Levels",
    duration: "3 Months",
    image: "/images/BPSC aedo free.jpg",
    imagePlaceholder: "bg-pink-100",
    price: "Free",
    offlinePrice: "Free"
  }
];

export default function CoursesPage() {
  const router = useRouter();

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
        alert(`Redirecting to online purchase for ${course.title} - ${course.price}`);
        // Add your online purchase logic here
        break;
      case 'buyOffline':
        alert(`Redirecting to offline purchase for ${course.title} - ${course.offlinePrice}`);
        // Add your offline purchase logic here
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Explore Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover a wide range of subjects taught by expert instructors. Find the perfect course to advance your education.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => handleCardClick(course.id)}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-blue-300 cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={course.id <= 3}
                  quality={95}
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Heading */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Meta Info */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500">{course.duration}</span>
                </div>

                {/* Three Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={(e) => handleButtonClick(e, 'info', course)}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    📚 Course Info
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => handleButtonClick(e, 'buyOnline', course)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                    >
                      🛒 Buy Online
                    </button>
                    
                    <button
                      onClick={(e) => handleButtonClick(e, 'buyOffline', course)}
                      className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                    >
                      🏪 Buy Offline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
