
import React from 'react';
import { Phone, Calendar, Globe } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="font-space font-bold text-2xl mb-5">Pricing</h2>
      
      {/* Pricing Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8 text-center">
        <p className="text-brochure-gray font-medium mb-2">Starting at</p>
        <div className="mb-4">
          <span className="font-space font-bold text-4xl gradient-text">$1,499</span>
          <span className="text-brochure-gray">/mo</span>
        </div>
        
        <ul className="text-left mb-4">
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Unlimited AI calling minutes</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Full CRM integration & automation</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Dedicated success manager</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Per minute cost: $0.13/minute</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Setup fee: $1,000-$15,000 (based on complexity)</span>
          </li>
          <li className="flex items-center">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Optional monthly retainer: $300-$500</span>
          </li>
        </ul>
        
        <p className="text-sm text-brochure-gray italic">
          * Custom enterprise solutions available
        </p>
      </div>
      
      {/* CTA Section */}
      <div className="mb-8">
        <h3 className="font-space font-semibold text-xl mb-4">Ready to transform your business?</h3>
        
        <div className="flex flex-col gap-3">
          <a href="tel:+18005551234" className="cta-button">
            <Phone size={18} /> Schedule a Call
          </a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Calendar size={18} /> Book a Demo
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Globe size={18} /> Visit Website
          </a>
        </div>
      </div>
      
      {/* Final Quote */}
      <div className="mt-auto bg-gradient-to-r from-brochure-gradient-from/20 to-brochure-gradient-to/20 rounded-lg p-6">
        <p className="text-center font-space italic font-medium text-xl">
          "This is not the future. This is now.<br />
          <span className="font-bold">Arm yourself with AI</span>—before your competition does."
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
