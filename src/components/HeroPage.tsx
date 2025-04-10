import React from 'react';
import { AudioWaveform, Clock, ArrowUp, Phone } from 'lucide-react';
import CanadianFooter from './CanadianFooter';

const HeroPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Company Name at Top */}
      <div className="text-center mb-5">
        <h1 className="font-space font-bold text-xl mb-1 gradient-text">Armadas</h1>
        <p className="text-brochure-gray text-sm">AI Automation Agency</p>
      </div>
      
      {/* Headline */}
      <div className="text-center mb-6">
        <h2 className="font-space font-bold text-3xl gradient-text">
          Put AI on the Phones. Close Deals While You Sleep.
        </h2>
      </div>
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="font-space font-bold text-4xl mb-2">
          AI-Powered <span className="gradient-text">Automation</span>
        </h1>
        <h2 className="font-space text-xl text-brochure-gray">
          For Modern Real Estate
        </h2>
        <div className="h-1 w-24 bg-gradient-accent mt-4"></div>
      </div>
      
      {/* What is AI Automation? */}
      <div className="flex flex-row gap-6 mb-8">
        <div className="w-1/2">
          <h3 className="font-space font-semibold text-xl mb-3">What is AI Automation?</h3>
          <p className="text-brochure-gray">
            AI automation is your unfair advantage.
            It's not just tech—it's a tireless team member that never takes a break, never fumbles a call, and never misses a lead.
          </p>
          <p className="text-brochure-gray mt-2">
            Our system replaces outdated, human-dependent processes with intelligent voice agents that handle inbound and outbound calls, qualify leads, book appointments, and follow up—all without dropping the ball.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="relative w-full h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <AudioWaveform size={48} className="text-brochure-gradient-from animate-pulse-glow" />
            </div>
            <div className="absolute inset-0 bg-gradient-accent opacity-10 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Why Now? */}
      <div className="flex flex-col bg-white/5 rounded-lg p-6 my-auto">
        <h3 className="font-space font-semibold text-xl mb-4 flex items-center">
          <Clock className="mr-2 text-brochure-gradient-to" size={20} /> Why Now?
        </h3>
        <p className="text-xl mb-3 text-brochure-gray">
          The industry's changing. Speed is everything.
          If you're not first to the lead, you're forgotten.
        </p>
        <p className="text-xl font-medium text-center italic px-4">
          "In today's competitive market, the difference between success and failure is 
          <span className="gradient-text font-bold"> how quickly you respond </span>
          to new leads."
        </p>
        <div className="mt-4 flex justify-end">
          <ArrowUp className="text-brochure-gradient-from" size={24} />
        </div>
      </div>
      
      {/* Footer */}
      <CanadianFooter />
    </div>
  );
};

export default HeroPage;
