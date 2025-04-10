
import React, { useState } from 'react';
import HeroPage from './HeroPage';
import FeaturesPage from './FeaturesPage';
import PricingPage from './PricingPage';
import PageNavigation from './PageNavigation';
import CanadianFooter from './CanadianFooter';

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

      <style>
        {`
        .gradient-text {
          background: linear-gradient(to right, #32e4b2, #5ca0ff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(90deg, rgba(50, 228, 178, 0.1), rgba(92, 160, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.375rem;
          color: white;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .cta-button:hover {
          background: linear-gradient(90deg, rgba(50, 228, 178, 0.2), rgba(92, 160, 255, 0.2));
        }
        
        .page-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .page-dot.active {
          background: linear-gradient(to right, #32e4b2, #5ca0ff);
        }
        
        .brochure-page {
          width: 430px;
          max-width: 90vw;
          height: 80vh;
          max-height: 800px;
          overflow-y: auto;
          padding: 2rem;
          border-radius: 1rem;
          background-color: #0D1117;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
        }
        
        .feature-card {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1rem;
        }
        
        .timeline-step {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        
        .timeline-step::before {
          content: "";
          position: absolute;
          top: 0.375rem;
          left: 0;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: linear-gradient(to right, #32e4b2, #5ca0ff);
        }
        `}
      </style>
    </div>
  );
};

export default BrochureLayout;
