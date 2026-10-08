import React from 'react';

export const MinimalFloral: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central delicate sweeping stem (Left) */}
      <path 
        d="M 60 110 C 60 70, 45 40, 30 15" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      
      {/* Leaves with delicate curves (Left) */}
      <path 
        d="M 55 80 C 40 75, 30 60, 30 60 C 45 60, 55 70, 55 80 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M 48 50 C 30 45, 20 30, 20 30 C 35 30, 48 40, 48 50 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M 38 25 C 25 25, 15 15, 15 15 C 25 15, 38 20, 38 25 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      
      {/* Central delicate sweeping stem (Right) */}
      <path 
        d="M 60 110 C 60 70, 75 40, 90 15" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      
      {/* Leaves with delicate curves (Right) */}
      <path 
        d="M 65 80 C 80 75, 90 60, 90 60 C 75 60, 65 70, 65 80 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M 72 50 C 90 45, 100 30, 100 30 C 85 30, 72 40, 72 50 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M 82 25 C 95 25, 105 15, 105 15 C 95 15, 82 20, 82 25 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
    </svg>
  );
};
