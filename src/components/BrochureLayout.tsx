
import React, { useState } from 'react';
import HeroPage from './HeroPage';
import FeaturesPage from './FeaturesPage';
import PricingPage from './PricingPage';
import PageNavigation from './PageNavigation';

const BrochureLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    <HeroPage key="hero" />,
    <FeaturesPage key="features" />,
    <PricingPage key="pricing" />
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-10">
      <div className="brochure-page animate-fade-in">
        {pages[currentPage]}
      </div>
      
      <div className="mt-8">
        <PageNavigation 
          totalPages={pages.length} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      </div>
    </div>
  );
};

export default BrochureLayout;
