import React from 'react';
import { Phone, Calendar, Globe, Flag, MapPin, ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CanadianFooter from './CanadianFooter';

const PricingPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Company Name at Top */}
      <div className="text-center mb-5">
        <h1 className="font-space font-bold text-xl mb-1 gradient-text">Armadas</h1>
        <p className="text-brochure-gray text-sm">AI Automation Agency</p>
      </div>
      
      <h2 className="font-space font-bold text-2xl mb-5">Pricing</h2>
      
      {/* Pricing Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6 text-center">
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
            <span>Per minute cost: <span className="font-bold text-brochure-gradient-to">$0.13/minute</span></span>
          </li>
          <li className="flex items-center mb-2">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Setup fee: $1,000-$15,000 (based on complexity)</span>
          </li>
          <li className="flex items-center">
            <span className="text-brochure-gradient-from mr-2">•</span>
            <span>Optional monthly retainer: $300-$500 (should you need continued support)</span>
          </li>
        </ul>
        
        <p className="text-sm text-brochure-gray italic">
          * Custom enterprise solutions available
        </p>
      </div>
      
      {/* Comparison Chart */}
      <div className="mb-6">
        <h3 className="font-space font-semibold text-xl mb-3">AI vs Human: The Numbers</h3>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>AI Voice Agent</TableHead>
                <TableHead>Human Agent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Response Time</TableCell>
                <TableCell className="text-green-500">Instant (0–1 sec) 🟢</TableCell>
                <TableCell className="text-red-400">30 sec – 2 min ⛔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cost per Minute</TableCell>
                <TableCell className="font-bold text-brochure-gradient-from">&lt; $0.13 ⚡</TableCell>
                <TableCell className="text-amber-400">$0.75 – $1.50 💸</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monthly Cost</TableCell>
                <TableCell className="text-green-500">~$600 (avg usage) 🟢</TableCell>
                <TableCell className="text-red-400">~$3,500–$5,000+ (1 full-time rep) ⛔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Availability</TableCell>
                <TableCell className="text-brochure-gradient-to">24/7, no breaks, no downtime 🚀</TableCell>
                <TableCell className="text-gray-400">9am–5pm, weekdays only 💤</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Call Volume</TableCell>
                <TableCell className="font-bold text-brochure-gradient-to">Handles 5–50+ calls simultaneously 📞📞📞📞📞</TableCell>
                <TableCell className="text-gray-400">1 call at a time only 🔄</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Error Rate</TableCell>
                <TableCell className="text-green-500">&lt;2% (based on training) 🟢</TableCell>
                <TableCell className="text-red-400">6–15% (fatigue, stress, human error) ⛔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scalability</TableCell>
                <TableCell className="text-brochure-gradient-from">Instantly scales up/down as needed 🧠</TableCell>
                <TableCell className="text-red-400">Requires hiring, training, and management ⛔</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Consistency</TableCell>
                <TableCell className="text-green-500">100% script adherence, no variation 🧩</TableCell>
                <TableCell className="text-amber-400">Varies by agent mood, memory, and training ⚠️</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Demo Call */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6 text-center">
        <p className="text-sm font-medium mb-2">This is exactly how your AI Agent will sound. Experience it firsthand:</p>
        <a href="tel:+18122896571" className="flex items-center justify-center gap-2 text-brochure-gradient-from font-bold">
          <Phone size={18} /> Call: +812-289-6571
        </a>
      </div>
      
      {/* CTA Section */}
      <div className="mb-6">
        <h3 className="font-space font-semibold text-xl mb-4">Ready to transform your business?</h3>
        
        <div className="flex flex-col gap-3">
          <a href="tel:+15878038785" className="cta-button">
            <Phone size={18} /> Call Us: 587-803-8785
          </a>
          <a href="https://calendly.com/armadas/30min" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Calendar size={18} /> Book a Demo
          </a>
          <a href="https://www.armadasagency.ca/" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Globe size={18} /> Visit Website
          </a>
        </div>
      </div>
      
      {/* Final Quote */}
      <div className="bg-gradient-to-r from-brochure-gradient-from/20 to-brochure-gradient-to/20 rounded-lg p-6 mb-5">
        <p className="text-center font-space italic font-medium text-xl">
          "This is not the future. This is now.<br />
          <span className="font-bold">Arm yourself with AI</span>—before your competition does."
        </p>
      </div>
      
      {/* Footer */}
      <CanadianFooter />
    </div>
  );
};

export default PricingPage;
