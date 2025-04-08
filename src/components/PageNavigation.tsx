
import React from 'react';

interface PageNavigationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PageNavigation = ({ totalPages, currentPage, setCurrentPage }: PageNavigationProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`page-dot ${currentPage === index ? 'active' : ''}`}
          onClick={() => setCurrentPage(index)}
        />
      ))}
    </div>
  );
};

export default PageNavigation;
