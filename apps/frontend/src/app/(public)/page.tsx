'use client';

import React, { useState } from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedScholarshipsSection from '@/components/home/FeaturedScholarshipsSection';
import ExploreDestinationsSection from '@/components/home/ExploreDestinationsSection';
import PersonalizedMatchingSection from '@/components/home/PersonalizedMatchingSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FundingExplainedSection from '@/components/home/FundingExplainedSection';
import VerificationTrustSection from '@/components/home/VerificationTrustSection';
import ConsultancyDirectorySection from '@/components/home/ConsultancyDirectorySection';
import GuidesArticlesSection from '@/components/home/GuidesArticlesSection';
import ForCollegesSection from '@/components/home/ForCollegesSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/home/Footer';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('all');

  const handleHeroSearch = (query: string, degree: string) => {
    setSearchQuery(query);
    setSelectedDegree(degree);
  };

  const handleDestinationSelect = (country: string) => {
    if (country === 'all') {
      setSearchQuery('');
    } else {
      setSearchQuery(country);
    }
  };

  const handlePersonalizedMatch = (degree: string, country: string) => {
    setSelectedDegree(degree);
    if (country !== 'all') {
      setSearchQuery(country);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 2. Hero + Scholarship Search */}
        <HeroSection onSearch={handleHeroSearch} />

        {/* 3. Platform Statistics */}
        <StatsSection />

        {/* 4. Featured Scholarships */}
        <FeaturedScholarshipsSection
          searchQuery={searchQuery}
          selectedDegree={selectedDegree}
        />

        {/* 5. Explore Destinations */}
        <ExploreDestinationsSection onSelectCountry={handleDestinationSelect} />

        {/* 6. Personalized Matching */}
        <PersonalizedMatchingSection onMatchComplete={handlePersonalizedMatch} />

        {/* 7. How BidyaGo Works */}
        <HowItWorksSection />

        {/* 8. Funding Explained */}
        <FundingExplainedSection />

        {/* 9. Official Verification & Trust */}
        <VerificationTrustSection />

        {/* 10. Consultancy Directory */}
        <ConsultancyDirectorySection />

        {/* 11. Guides & Articles */}
        <GuidesArticlesSection />

        {/* 12. For Colleges */}
        <ForCollegesSection />

        {/* 13. FAQs */}
        <FaqSection />

        {/* 14. Final CTA */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
