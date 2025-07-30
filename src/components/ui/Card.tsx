import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', animate = false }) => {
  return (
    <div className={`card ${animate ? 'animate-fade-in animate-slide-up' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;