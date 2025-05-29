import React, { useState } from 'react';
import { CartItem } from '../types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(item.menuItem.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.menuItem.id, item.quantity - 1);
    } else {
      setIsRemoving(true);
      setTimeout(() => {
        removeFromCart(item.menuItem.id);
      }, 300);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(item.menuItem.id);
    }, 300);
  };

  return (
    <div 
      className={`card p-4 mb-4 transition-all duration-300 ${
        isRemoving ? 'opacity-0 transform scale-95' : 'opacity-100'
      }`}
    >
      <div className="flex">
        <div className="w-24 h-24 flex-shrink-0">
          <img 
            src={item.menuItem.image} 
            alt={item.menuItem.name} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold text-gray-800">{item.menuItem.name}</h3>
            <span className="font-bold text-primary">
              ${(item.menuItem.price * item.quantity).toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.menuItem.description}</p>
          
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <button 
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={handleDecrement}
              >
                <Minus className="h-5 w-5 text-gray-600" />
              </button>
              <span className="mx-2 w-8 text-center">{item.quantity}</span>
              <button 
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={handleIncrement}
              >
                <Plus className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <button 
              className="text-red-500 hover:text-red-700"
              onClick={handleRemove}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;