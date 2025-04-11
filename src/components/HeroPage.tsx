
import React from 'react';
import { Clock, ArrowUp, MapPin } from 'lucide-react';
import BrochureHeader from './BrochureHeader';

const HeroPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Company Logo and Name at Top */}
      <BrochureHeader />
      
      {/* Headline */}
      <div className="text-center mb-6">
        <h2 className="font-space font-bold text-3xl gradient-text">
          Put AI on the Phones. Close Deals While You Sleep.
        </h2>
      </div>
      
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="font-space text-xl text-brochure-gray">
          Build for Real Estate Agencies
        </h2>
        <div className="h-1 w-24 bg-gradient-accent mt-4"></div>
      </div>
      
      {/* What is AI Automation? */}
      <div className="flex flex-row gap-6 mb-8">
        <div className="w-full">
          <h3 className="font-space font-semibold text-xl mb-3">What is AI Automation?</h3>
          <p className="text-brochure-gray">
            AI automation is your <span className="font-medium text-brochure-gradient-from">unfair advantage</span>.
            It's not just tech—it's a <span className="font-medium text-brochure-gradient-to">tireless team member</span> that never takes a break, never fumbles a call, and never misses a lead.
          </p>
          <p className="text-brochure-gray mt-2">
            Our system replaces <span className="font-medium text-brochure-gradient-from">outdated, human-dependent processes</span> with <span className="font-medium text-brochure-gradient-to">intelligent voice agents</span> that handle inbound and outbound calls, qualify leads, book appointments, and follow up—all without dropping the ball.
          </p>
        </div>
      </div>
      
      {/* Why Now? */}
      <div className="flex flex-col bg-white/5 rounded-lg p-6 my-auto">
        <h3 className="font-space font-semibold text-xl mb-4 flex items-center">
          <Clock className="mr-2 text-brochure-gradient-to" size={20} /> Why Now?
        </h3>
        <p className="text-xl font-medium text-center italic px-4">
          "In today's competitive market, the difference between success and failure is 
          <span className="gradient-text font-bold"> how quickly you respond </span>
          to new leads."
        </p>
        <div className="mt-4 flex justify-end">
          <ArrowUp className="text-brochure-gradient-from" size={24} />
        </div>
      </div>

      {/* Canadian Flag and Office Address */}
      <div className="mt-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-3">
          <svg width="18" height="18" viewBox="0 0 512 512" className="flex-shrink-0">
            <rect width="512" height="512" fill="#f00" />
            <rect x="128" y="0" width="256" height="512" fill="#fff" />
            <path d="M256 96l48 48h48l-32 32 16 48-48-16-48 16 16-48-32-32h48z" fill="#f00" />
          </svg>
          <span className="text-sm font-medium">Proudly Canadian</span>
        </div>
        
        <div className="flex justify-center items-center gap-1.5 text-xs text-brochure-gray">
          <MapPin size={12} />
          <span>700 2 St SW, Calgary, AB T2P 2W2, Canada</span>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
