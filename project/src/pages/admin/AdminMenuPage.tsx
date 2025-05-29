import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import { Category } from '../../types';
import AdminMenuItemCard from '../../components/AdminMenuItemCard';
import { Plus, Filter } from 'lucide-react';

const AdminMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { menuItems, categories } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleAddNew = () => {
    navigate('/admin/item/new');
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Menu Management</h1>
        <button 
          className="btn btn-primary flex items-center gap-1"
          onClick={handleAddNew}
        >
          <Plus className="h-5 w-5" />
          <span>Add New Item</span>
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            className="input"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-48">
          <div className="relative">
            <select
              className="input appearance-none pr-10"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <p className="text-gray-500">No menu items found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <AdminMenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMenuPage;