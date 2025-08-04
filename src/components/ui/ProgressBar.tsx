import React from 'react';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center ${
              index <= currentStep 
                ? 'text-primary' 
                : 'text-gray-500'
            }`}
          >
            <div 
              className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mb-1
                ${index < currentStep ? 'bg-primary text-white' : ''}
                ${index === currentStep ? 'bg-primary/20 text-primary border-2 border-primary' : ''}
                ${index > currentStep ? 'bg-gray-800 text-gray-500 border border-gray-700' : ''}
              `}
            >
              {index + 1}
            </div>
            <span className="text-xs hidden sm:block">{step}</span>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-gray-700 rounded-full">
        <div 
          className="absolute h-1 bg-primary rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;