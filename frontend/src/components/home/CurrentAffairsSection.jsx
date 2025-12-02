"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { currentAffairsData } from "@/data/currentAffairs";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 100 }
  }
};

const CurrentAffairsSection = () => {
  // Get latest current affairs data
  const latestData = currentAffairsData[0]; // Get the most recent date entry
  const nationalHeadlines = latestData?.national?.slice(0, 4) || [];
  const internationalHeadlines = latestData?.international?.slice(0, 4) || [];
  const biharHeadlines = latestData?.state?.Bihar?.slice(0, 4) || [];

  const newsCategories = [
    {
      id: "national",
      title: "National News",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 60 40" fill="none">
          {/* Indian Flag */}
          <rect width="60" height="13.33" fill="#FF9933"/> {/* Saffron */}
          <rect y="13.33" width="60" height="13.33" fill="#FFFFFF"/> {/* White */}
          <rect y="26.66" width="60" height="13.33" fill="#138808"/> {/* Green */}
          {/* Ashoka Chakra */}
          <circle cx="30" cy="20" r="6" fill="none" stroke="#000080" strokeWidth="0.8"/>
          <g transform="translate(30, 20)">
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 0;
              const y1 = 0;
              const x2 = Math.cos(angle) * 5.5;
              const y2 = Math.sin(angle) * 5.5;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000080" strokeWidth="0.5"/>;
            })}
          </g>
          <circle cx="30" cy="20" r="1.5" fill="#000080"/>
        </svg>
      ),
      description: "Latest updates on national politics, economy, governance, and social issues",
      headlines: nationalHeadlines,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      id: "international",
      title: "International News",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 100 100" fill="none">
          {/* Globe */}
          <circle cx="50" cy="50" r="45" fill="#4A90E2" stroke="#2C5AA0" strokeWidth="2"/>
          {/* Continents - simplified */}
          <path d="M30 35 Q35 30 40 32 L45 28 Q50 26 52 30 L55 35 Q58 38 55 42 L50 45 Q45 48 42 45 L38 42 Q32 40 30 35Z" fill="#90C695"/>
          <path d="M60 40 Q65 38 68 42 L72 45 Q75 50 72 55 L68 58 Q63 60 60 56 L58 50 Q57 45 60 40Z" fill="#90C695"/>
          <path d="M35 55 Q40 52 45 55 L48 60 Q50 65 47 68 L42 70 Q37 68 35 63 L33 58 Q33 57 35 55Z" fill="#90C695"/>
          {/* Latitude lines */}
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
          <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
          {/* Longitude lines */}
          <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
          <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      ),
      description: "Global affairs, international relations, and worldwide developments",
      headlines: internationalHeadlines,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      id: "state",
      title: "Bihar News",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 100 100" fill="none">
          {/* Bihar State Map Simplified */}
          <path d="M20 30 L30 25 L45 28 L60 25 L75 30 L80 45 L75 60 L65 70 L50 75 L35 70 L25 60 L20 45 Z" 
                fill="#FFA500" stroke="#FF6B00" strokeWidth="2"/>
          {/* Capital Star (Patna) */}
          <circle cx="45" cy="50" r="4" fill="#FFD700"/>
          <path d="M45 46 L46 49 L49 49 L47 51 L48 54 L45 52 L42 54 L43 51 L41 49 L44 49 Z" fill="#FFFFFF"/>
          {/* Decorative elements */}
          <circle cx="35" cy="40" r="2" fill="#FFFFFF" opacity="0.6"/>
          <circle cx="55" cy="45" r="2" fill="#FFFFFF" opacity="0.6"/>
          <circle cx="40" cy="60" r="2" fill="#FFFFFF" opacity="0.6"/>
        </svg>
      ),
      description: "Latest news and developments from Bihar - education, infrastructure, and governance",
      headlines: biharHeadlines,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
            </svg>
            Daily Updates
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Current Affairs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay updated with comprehensive daily coverage of national and international news
          </p>
        </motion.div>

        {/* National & International News Cards */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.bgGradient} p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${category.gradient} p-4 text-white shadow-lg`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-gray-600">
                  {category.description}
                </p>

                {/* Headlines */}
                {category.headlines.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                      Today's Headlines
                    </h4>
                    <ul className="space-y-2">
                      {category.headlines.map((headline, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className={`mt-0.5 h-5 w-5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="flex-1 leading-relaxed">{headline.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* View Button */}
                <Link
                  href={`/current-affairs?category=${category.id}`}
                  className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${category.gradient} px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105`}
                >
                  View All {category.title}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Current Affairs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/current-affairs"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-600 bg-white px-8 py-3 font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-600 hover:text-white hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            View All Current Affairs Archive
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentAffairsSection;
