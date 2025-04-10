
import React from 'react';

const BrochureHeader = () => {
  return (
    <div className="text-center mb-5 flex flex-col items-center">
      <img 
        src="/lovable-uploads/3be3f994-6499-49bf-aa46-b9b3497ecbe9.png" 
        alt="Armadas Logo" 
        className="h-12 mb-1"
      />
      <h1 className="font-space font-bold text-xl mb-1 gradient-text">Armadas</h1>
      <p className="text-brochure-gray text-sm">AI Automation Agency</p>
    </div>
  );
};

export default BrochureHeader;
