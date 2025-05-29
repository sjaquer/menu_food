import React from 'react';
import { MenuItem } from '../types';
import { Edit, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext';

interface AdminMenuItemCardProps {
  item: MenuItem;
}

const AdminMenuItemCard: React.FC<AdminMenuItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const { deleteMenuItem } = useMenu();
  
  const handleEdit = () => {
    navigate(`/admin/item/${item.id}`);
  };
  
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${item.name}"?`)) {
      deleteMenuItem(item.id);
    }
  };
  
  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-40 w-full object-cover"
        />
        <div className={`absolute top-2 right-2 badge ${item.available ? 'badge-primary' : 'bg-red-100 text-red-600'}`}>
          {item.available ? 'Available' : 'Unavailable'}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">ID: {item.id}</span>
          <div className="flex space-x-2">
            <button 
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              onClick={handleEdit}
            >
              <Edit className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              onClick={handleDelete}
            >
              <Trash className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuItemCard;