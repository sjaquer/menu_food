import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartItemCard from '../../components/CartItemCard';
import { ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, clearCart } = useCart();
  
  const handleContinueToOrder = () => {
    navigate('/order-summary');
  };
  
  const handleContinueShopping = () => {
    navigate('/');
  };
  
  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <button 
          className="btn btn-primary"
          onClick={handleContinueShopping}
        >
          Browse Menu
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Order</h1>
        <button 
          className="text-red-500 text-sm hover:underline"
          onClick={() => {
            if (window.confirm('Are you sure you want to clear your cart?')) {
              clearCart();
            }
          }}
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <CartItemCard key={item.menuItem.id} item={item} />
        ))}
      </div>
      
      <div className="card p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${getSubtotal().toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <button 
          className="btn btn-ghost flex-1"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button 
          className="btn btn-primary flex-1"
          onClick={handleContinueToOrder}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;