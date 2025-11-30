"use client";

import HeroSection from "@/components/home/HeroSection";
import CurrentAffairsSection from "@/components/home/CurrentAffairsSection";
import RecentNoticesSection from "@/components/home/RecentNoticesSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <CurrentAffairsSection />
      <RecentNoticesSection />
      <PopularCoursesSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}
