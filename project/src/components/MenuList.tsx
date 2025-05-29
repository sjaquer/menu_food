import React, { useState } from 'react';
import { MenuItem, Category } from '../types';
import { categoryNames } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface MenuListProps {
  items: MenuItem[];
  category: Category;
}

const MenuList: React.FC<MenuListProps> = ({ items, category }) => {
  const { addToCart } = useCart();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No items available in this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800">{categoryNames[category]}</h2>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`card transition-all duration-300 ${
              expandedItem === item.id ? 'col-span-2' : ''
            }`}
          >
            <div 
              className="cursor-pointer"
              onClick={() => toggleExpand(item.id)}
            >
              <div className="flex">
                <div className={`${expandedItem === item.id ? 'w-1/3' : 'w-1/2'}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className={`p-4 ${expandedItem === item.id ? 'w-2/3' : 'w-1/2'}`}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
            
            {expandedItem === item.id && (
              <div className="p-4 pt-0 animate-slide-up">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button 
                      className="btn btn-primary flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add to Order</span>
                    </button>
                    <button 
                      className="btn btn-ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedItem(null);
                      }}
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;