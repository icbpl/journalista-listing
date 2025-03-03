
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Section components
import MobileAds from '@/components/sections/MobileAds';
import HeroSection from '@/components/sections/HeroSection';
import LatestArticlesSection from '@/components/sections/LatestArticlesSection';
import FeaturedArticlesSection from '@/components/sections/FeaturedArticlesSection';
import TechnologyJournalsSection from '@/components/sections/TechnologyJournalsSection';
import HumanitiesSection from '@/components/sections/HumanitiesSection';
import BottomAdBanner from '@/components/sections/BottomAdBanner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* High-visibility ad at the top - Mobile only */}
        <MobileAds position="top" />

        {/* Hero Section */}
        <HeroSection />

        {/* Latest Articles Section with sidebar ad */}
        <LatestArticlesSection />

        {/* Featured Articles Section */}
        <FeaturedArticlesSection />

        {/* Sticky bottom ad - Mobile only */}
        <MobileAds position="bottom" />

        {/* Technology Journals Section */}
        <TechnologyJournalsSection />

        {/* Humanities Section */}
        <HumanitiesSection />

        {/* Bottom Ad Banner */}
        <BottomAdBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
