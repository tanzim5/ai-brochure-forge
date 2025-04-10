
import React from 'react';
import { Flag, MapPin } from 'lucide-react';

const CanadianFooter = () => {
  return (
    <div className="mt-auto text-center">
      <div className="flex justify-center items-center gap-2 mb-1">
        <Flag size={16} className="text-red-500" />
        <span className="text-sm font-medium">Proudly Canadian</span>
      </div>
      
      <div className="flex justify-center items-center gap-1.5 text-xs text-gray-400">
        <MapPin size={12} />
        <span>700 2 St SW, Calgary, AB T2P 2W2, Canada</span>
      </div>
    </div>
  );
};

export default CanadianFooter;
