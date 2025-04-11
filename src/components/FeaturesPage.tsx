
import React from 'react';
import { MessageSquare, RefreshCw, Globe, BookOpen, ArrowRight, MapPin } from 'lucide-react';
import BrochureHeader from './BrochureHeader';

const FeatureCard = ({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) => {
  return (
    <div className="feature-card">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="font-space font-semibold ml-2">{title}</h3>
      </div>
      <ul className="text-sm text-brochure-gray">
        {items.map((item, index) => (
          <li key={index} className="flex items-start mb-1">
            <span className="text-brochure-gradient-from mr-1.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TimelineStep = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="timeline-step">
      <h4 className="font-space font-semibold mb-1">{title}</h4>
      <p className="text-sm text-brochure-gray">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Company Logo and Name at Top */}
      <BrochureHeader />
      
      <h2 className="font-space font-bold text-2xl mb-5">Feature Stack</h2>
      
      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <FeatureCard 
          icon={<MessageSquare className="text-brochure-gradient-from" size={20} />}
          title="Voice Agent"
          items={[
            "24/7 call handling",
            "Natural language AI",
            "Custom voice profile"
          ]}
        />
        <FeatureCard 
          icon={<RefreshCw className="text-brochure-gradient-to" size={20} />}
          title="CRM Integration"
          items={[
            "Seamless data sync",
            "Auto lead scoring",
            "Follow-up automation"
          ]}
        />
        <FeatureCard 
          icon={<Globe className="text-brochure-gradient-from" size={20} />}
          title="Website Routing"
          items={[
            "Smart chat widget",
            "Visitor qualification",
            "Appointment setting"
          ]}
        />
        <FeatureCard 
          icon={<BookOpen className="text-brochure-gradient-to" size={20} />}
          title="Training"
          items={[
            "Custom knowledge base",
            "Industry terminology",
            "Continuous learning"
          ]}
        />
      </div>
      
      {/* Implementation Timeline */}
      <div>
        <div className="flex items-center mb-4">
          <h2 className="font-space font-bold text-2xl">Implementation</h2>
          <div className="h-px flex-1 bg-white/20 ml-3"></div>
        </div>
        
        <div className="ml-2">
          <TimelineStep
            title="Discovery Call"
            description="We learn about your business, processes, and goals."
          />
          <TimelineStep
            title="Build"
            description="Custom AI configuration and CRM integration setup."
          />
          <TimelineStep
            title="Deploy"
            description="Go live with monitoring and performance tuning."
          />
          <TimelineStep
            title="Optimize"
            description="Continuous improvement based on real data."
          />
        </div>
        
        <div className="flex justify-end mt-4">
          <ArrowRight className="text-brochure-gradient-to" size={24} />
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

export default FeaturesPage;
