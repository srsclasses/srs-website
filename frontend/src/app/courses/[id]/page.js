"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a database or API
const coursesData = {
  1: {
    id: 1,
    title: "BPSC Complete Course (Hindi)",
    description: "Comprehensive BPSC preparation in Hindi medium with complete syllabus coverage and expert guidance.",
    fullDescription: "यह व्यापक BPSC पाठ्यक्रम हिंदी माध्यम में आपको बुनियादी अवधारणाओं से लेकर उन्नत समस्या-समाधान तकनीकों तक ले जाने के लिए डिज़ाइन किया गया है। चाहे आप प्रतियोगी परीक्षाओं की तैयारी कर रहे हों या अपनी नींव को मजबूत करना चाहते हों, यह कोर्स आपकी सभी जरूरतों को पूरा करता है।",
    level: "Intermediate to Advanced",
    duration: "6 Months",
    image: "/images/bpsc hindi batch 1.jpg",
    imagePlaceholder: "bg-orange-100",
    price: "₹12,999",
    offlinePrice: "₹14,999",
    features: [
      "Complete syllabus coverage in Hindi",
      "Daily live classes & recorded sessions",
      "PDF notes & test series included",
      "Dedicated doubt clearing sessions",
      "Previous year question papers",
      "Mock tests and performance analysis",
      "Bihar-specific current affairs coverage"
    ],
    topics: [
      "History of Bihar & India",
      "Geography & Polity",
      "Indian Economy",
      "General Science",
      "Current Affairs (National & International)",
      "Mental Ability & Reasoning"
    ],
    instructor: "राजेश कुमार सर",
    students: 2450,
    rating: 4.9
  },
  2: {
    id: 2,
    title: "BPSC Complete Course (English)",
    description: "Master BPSC preparation with English medium comprehensive course for all competitive exams.",
    fullDescription: "This comprehensive BPSC course in English medium provides complete preparation for Bihar Public Service Commission examinations. With expert faculty and structured curriculum, achieve your dream of becoming a civil servant.",
    level: "Intermediate to Advanced",
    duration: "6 Months",
    image: "/images/bpsc english batch-1.jpg",
    imagePlaceholder: "bg-blue-100",
    price: "₹12,999",
    offlinePrice: "₹14,999",
    features: [
      "Complete BPSC syllabus in English",
      "Live interactive classes daily",
      "Comprehensive study materials",
      "Weekly tests & assessments",
      "Personal mentorship program",
      "Previous year papers with solutions",
      "Current affairs updates"
    ],
    topics: [
      "Indian History & Culture",
      "Geography & Environment",
      "Political Science & Constitution",
      "Economics & Planning",
      "Science & Technology",
      "Reasoning & Mental Ability"
    ],
    instructor: "Prof. Anita Sharma",
    students: 1890,
    rating: 4.8
  },
  3: {
    id: 3,
    title: "Foundation Batch (Hindi) - Batch 1",
    description: "Build strong fundamentals with our Hindi medium foundation course for competitive exam aspirants.",
    fullDescription: "यह फाउंडेशन कोर्स प्रतियोगी परीक्षाओं के लिए मजबूत आधार तैयार करता है। सभी विषयों की बुनियादी अवधारणाओं को सरल हिंदी में समझाया जाता है।",
    level: "Beginner",
    duration: "4 Months",
    image: "/images/foundation batch hindi-1.jpg",
    imagePlaceholder: "bg-green-100",
    price: "₹8,999",
    offlinePrice: "₹10,499",
    features: [
      "Strong foundation building in Hindi",
      "Concept-based teaching methodology",
      "Regular practice sessions",
      "Weekly assignments & tests",
      "Doubt resolution classes",
      "Study materials in Hindi",
      "Performance tracking"
    ],
    topics: [
      "Basic Mathematics & Reasoning",
      "General Knowledge",
      "Hindi Grammar & Comprehension",
      "Basic Science Concepts",
      "Indian Polity Basics",
      "General Studies Foundation"
    ],
    instructor: "विजय कुमार सर",
    students: 1650,
    rating: 4.7
  },
  4: {
    id: 4,
    title: "Foundation Batch (Hindi) - Batch 2",
    description: "Advanced foundation course in Hindi covering all essential topics for government exam preparation.",
    fullDescription: "इस उन्नत फाउंडेशन बैच में सभी सरकारी परीक्षाओं के लिए आवश्यक विषयों का गहन अध्ययन कराया जाता है। अनुभवी शिक्षकों द्वारा व्यापक मार्गदर्शन।",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    image: "/images/foundation batch hindi batch-2.jpg",
    imagePlaceholder: "bg-purple-100",
    price: "₹8,999",
    offlinePrice: "₹10,499",
    features: [
      "Advanced foundation concepts",
      "Bilingual study materials",
      "Expert faculty guidance",
      "Regular mock tests",
      "Current affairs in Hindi",
      "Comprehensive revision sessions",
      "Previous years' analysis"
    ],
    topics: [
      "Advanced Mathematics",
      "Reasoning & Logic",
      "General Awareness",
      "Science & Technology",
      "Indian History & Culture",
      "Geography & Economy Basics"
    ],
    instructor: "डॉ. प्रिया सिंह",
    students: 1320,
    rating: 4.8
  },
  5: {
    id: 5,
    title: "Foundation Batch (English) - Batch 2",
    description: "Complete foundation course in English medium with comprehensive coverage of all subjects.",
    fullDescription: "Build a strong foundation for competitive exams with our structured English medium course. Covering all essential topics with modern teaching methodologies and extensive practice materials.",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    image: "/images/fondation english batch-2.jpg",
    imagePlaceholder: "bg-indigo-100",
    price: "₹8,999",
    offlinePrice: "₹10,499",
    features: [
      "Comprehensive English medium course",
      "Foundation to advanced concepts",
      "Interactive learning modules",
      "Regular assessments & feedback",
      "English communication skills",
      "Exam-oriented study material",
      "Personality development sessions"
    ],
    topics: [
      "English Grammar & Comprehension",
      "Quantitative Aptitude",
      "Logical Reasoning",
      "General Studies",
      "Current Affairs",
      "Computer Awareness"
    ],
    instructor: "Mr. Vikram Patel",
    students: 1580,
    rating: 4.7
  },
  6: {
    id: 6,
    title: "BPSC AEDO Free Course",
    description: "Free comprehensive course for BPSC AEDO preparation with expert faculty and study materials.",
    fullDescription: "This completely FREE course is designed specifically for BPSC AEDO (Agriculture Extension Development Officer) aspirants. Get access to expert guidance, study materials, and practice tests at no cost.",
    level: "All Levels",
    duration: "3 Months",
    image: "/images/BPSC aedo free.jpg",
    imagePlaceholder: "bg-pink-100",
    price: "Free",
    offlinePrice: "Free",
    features: [
      "100% Free course - No hidden charges",
      "AEDO-specific syllabus coverage",
      "Agriculture & Rural Development focus",
      "Free study materials & notes",
      "Mock tests & practice papers",
      "Expert faculty guidance",
      "Community learning support"
    ],
    topics: [
      "Agriculture & Horticulture",
      "Rural Development",
      "Agricultural Economics",
      "Crop Production & Management",
      "Soil Science & Fertilizers",
      "Agricultural Extension Methods"
    ],
    instructor: "डॉ. अमित वर्मा",
    students: 3250,
    rating: 4.9
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.id);
  const course = coursesData[courseId];

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

  const handlePurchase = (type) => {
    const price = type === 'online' ? course.price : course.offlinePrice;
    if (course.price === "Free") {
      alert(`Enrolling you in ${course.title} - This course is completely FREE!`);
    } else {
      alert(`Processing ${type} purchase for ${course.title} - ${price}`);
    }
    // Add your purchase logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <Link 
          href="/courses" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Course Info */}
          <div>
            {/* Course Badge */}
            <div className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800">
              {course.level}
            </div>

            {/* Course Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {course.title}
            </h1>

            {/* Course Stats */}
            <div className="mb-6 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{course.rating}</span>
                <span className="text-gray-500">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">👥</span>
                <span className="font-semibold">{course.students}</span>
                <span className="text-gray-500">Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">⏱️</span>
                <span className="font-semibold">{course.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              {course.fullDescription}
            </p>

            {/* Instructor */}
            <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Instructor</p>
              <p className="text-lg font-semibold text-gray-900">{course.instructor}</p>
            </div>

            {/* Course Features */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">What You'll Get</h2>
              <div className="space-y-3">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={() => handlePurchase('online')}
                className={`flex-1 rounded-lg px-8 py-4 text-center font-semibold text-white focus:outline-none focus:ring-4 transition-all transform hover:scale-105 ${
                  course.price === "Free" 
                    ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300" 
                    : "bg-green-600 hover:bg-green-700 focus:ring-green-300"
                }`}
              >
                {course.price === "Free" ? "🎓 Enroll Free" : `🛒 Buy Online - ${course.price}`}
              </button>
              {course.price !== "Free" && (
                <button 
                  onClick={() => handlePurchase('offline')}
                  className="flex-1 rounded-lg bg-orange-600 px-8 py-4 text-center font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all transform hover:scale-105"
                >
                  🏪 Buy Offline - {course.offlinePrice}
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Course Highlights */}
          <div>
            {/* Course Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8 h-80 bg-gray-100">
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

            {/* Course Topics */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Course Topics</h3>
              <ul className="space-y-3 text-gray-700">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Why Choose This Course?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Experienced instructors with proven track record</li>
                <li>✓ Flexible learning schedule - online & offline options</li>
                <li>✓ Comprehensive study materials included</li>
                <li>✓ Regular assessments and feedback</li>
                <li>✓ {course.price === "Free" ? "100% Free with no hidden costs" : "Lifetime access to course materials"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
