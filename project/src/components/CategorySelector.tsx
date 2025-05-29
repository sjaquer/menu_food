import React from 'react';
import { Category } from '../types';
import { categoryNames, categoryImages } from '../data/mockData';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h2 className="sr-only">Menu Categories</h2>
      <div className="flex space-x-4 pb-4 overflow-x-auto hide-scrollbar">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
              selectedCategory === category 
                ? 'transform scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            <div className="relative w-40 h-24 rounded-lg overflow-hidden">
              <img
                src={categoryImages[category]}
                alt={categoryNames[category]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-white font-bold text-lg ${
                  selectedCategory === category ? 'text-shadow-lg' : ''
                }`}>
                  {categoryNames[category]}
                </span>
              </div>
              {selectedCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;