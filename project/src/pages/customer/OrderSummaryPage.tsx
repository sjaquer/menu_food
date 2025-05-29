import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const OrderSummaryPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, getTax, getTotal, clearCart } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [tableNumber] = useState(12); // In a real app, this would be passed in
  
  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'welcome10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid discount code');
    }
  };
  
  const handlePlaceOrder = () => {
    // In a real app, this would send the order to a backend
    const orderId = `ORDER${Math.floor(Math.random() * 10000)}`;
    localStorage.setItem('lastOrder', JSON.stringify({
      id: orderId,
      items,
      subtotal: getSubtotal(),
      tax: getTax(),
      total: getTotal() * (discountApplied ? 0.9 : 1),
      tableNumber,
      timestamp: new Date(),
      estimatedTime: 15 + Math.floor(Math.random() * 15),
    }));
    
    clearCart();
    navigate('/order-confirmation');
  };
  
  const handleBack = () => {
    navigate('/cart');
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h1>
      
      <div className="card p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Items in your order</h2>
        <div className="space-y-3 mb-6">
          {items.map((item) => (
            <div key={item.menuItem.id} className="flex justify-between">
              <div className="flex">
                <span className="text-primary font-medium">{item.quantity}x</span>
                <span className="ml-2">{item.menuItem.name}</span>
              </div>
              <span className="font-medium">${(item.menuItem.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${getSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax (10%)</span>
            <span>${getTax().toFixed(2)}</span>
          </div>
          {discountApplied && (
            <div className="flex justify-between mb-2 text-green-600">
              <span>Discount (10%)</span>
              <span>-${(getTotal() * 0.1).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>${(getTotal() * (discountApplied ? 0.9 : 1)).toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="card p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Table Information</h2>
        <p>Table Number: {tableNumber}</p>
      </div>
      
      <div className="card p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Discount Code</h2>
        <div className="flex">
          <input
            type="text"
            className="input flex-1"
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            disabled={discountApplied}
          />
          <button 
            className="btn btn-secondary ml-2"
            onClick={handleApplyDiscount}
            disabled={discountApplied || !discountCode}
          >
            Apply
          </button>
        </div>
        {discountApplied && (
          <p className="text-green-600 text-sm mt-2">10% discount applied!</p>
        )}
      </div>
      
      <div className="flex space-x-4">
        <button 
          className="btn btn-ghost flex-1"
          onClick={handleBack}
        >
          Back to Cart
        </button>
        <button 
          className="btn btn-primary flex-1"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryPage;