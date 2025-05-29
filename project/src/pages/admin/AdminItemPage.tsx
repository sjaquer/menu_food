import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import { Category, MenuItem } from '../../types';
import { ArrowLeft, Save, X } from 'lucide-react';

interface AdminItemPageProps {
  isNew?: boolean;
}

const AdminItemPage: React.FC<AdminItemPageProps> = ({ isNew = false }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getMenuItem, addMenuItem, updateMenuItem, categories } = useMenu();
  
  const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: 'starters',
    available: true,
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof Omit<MenuItem, 'id'>, string>>>({});
  
  useEffect(() => {
    if (!isNew && id) {
      const menuItem = getMenuItem(id);
      if (menuItem) {
        setFormData({
          name: menuItem.name,
          description: menuItem.description,
          price: menuItem.price,
          image: menuItem.image,
          category: menuItem.category,
          available: menuItem.available,
        });
      } else {
        navigate('/admin/menu');
      }
    }
  }, [isNew, id, getMenuItem, navigate]);
  
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Omit<MenuItem, 'id'>, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.price <= 0) newErrors.price = 'Price must be greater than zero';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };
  
  const handleToggleAvailable = () => {
    setFormData((prev) => ({
      ...prev,
      available: !prev.available,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (isNew) {
      addMenuItem(formData);
    } else if (id) {
      updateMenuItem(id, formData);
    }
    
    navigate('/admin/menu');
  };
  
  const handleCancel = () => {
    navigate('/admin/menu');
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          className="mr-4 p-2 rounded-full hover:bg-gray-200"
          onClick={handleCancel}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          {isNew ? 'Add New Menu Item' : 'Edit Menu Item'}
        </h1>
      </div>
      
      <form onSubmit={handleSubmit} className="card p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Item Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className={`input resize-none ${errors.description ? 'border-red-500' : ''}`}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              className={`input ${errors.price ? 'border-red-500' : ''}`}
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="input"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            className={`input ${errors.image ? 'border-red-500' : ''}`}
            value={formData.image}
            onChange={handleChange}
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
        </div>
        
        {formData.image && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Image Preview</p>
            <div className="h-40 w-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Error';
                }}
              />
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              checked={formData.available}
              onChange={handleToggleAvailable}
            />
            <span className="ml-2 text-gray-700">Available for ordering</span>
          </label>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="btn btn-ghost flex items-center gap-1"
            onClick={handleCancel}
          >
            <X className="h-5 w-5" />
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-1"
          >
            <Save className="h-5 w-5" />
            <span>{isNew ? 'Create Item' : 'Save Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminItemPage;