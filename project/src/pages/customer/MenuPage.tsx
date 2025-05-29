import React, { useState } from 'react';
import { useMenu } from '../../contexts/MenuContext';
import { Category } from '../../types';
import CategorySelector from '../../components/CategorySelector';
import MenuList from '../../components/MenuList';

const MenuPage: React.FC = () => {
  const { categories, getMenuItemsByCategory } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<Category>('starters');
  
  const items = getMenuItemsByCategory(selectedCategory).filter(item => item.available);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Menu</h1>
      
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <MenuList items={items} category={selectedCategory} />
    </div>
  );
};

export default MenuPage;