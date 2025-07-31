import React from 'react';

interface FilterSelectorProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

// Sample photo for filter preview
const samplePhotoUrl = "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const filters = [
  { name: 'normal', label: 'Original' },
  { name: 'grayscale', label: 'Black & White' },
  { name: 'sepia', label: 'Vintage' }
];

const FilterSelector: React.FC<FilterSelectorProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => onFilterChange(filter.name)}
          className={`flex flex-col items-center ${
            currentFilter === filter.name ? 'ring-2 ring-primary' : ''
          }`}
        >
          <div className="w-full aspect-square overflow-hidden rounded-md mb-1 border border-gray-700">
            <img 
              src={samplePhotoUrl} 
              alt={filter.label}
              className={`w-full h-full object-cover ${filter.name}`}
            />
          </div>
          <span className="text-xs">{filter.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterSelector;