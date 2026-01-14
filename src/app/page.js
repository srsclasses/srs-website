"use client";

import HeroSection from "@/components/home/HeroSection";

import RecentNoticesSection from "@/components/home/RecentNoticesSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import CurrentAffairsSection from "@/components/home/CurrentAffairsSection";
import AboutSection from "@/components/home/AboutSection";
import PopularVideosSection from "@/components/home/PopularVideosSection";
import CTASection from "@/components/home/CTASection";
import PosterPopup from "@/components/PosterPopup";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <PopularCoursesSection />
      <CurrentAffairsSection />
      <RecentNoticesSection />
      <AboutSection />
      <PopularVideosSection />
      <CTASection />
      <PosterPopup />
    </div>
  );
}
