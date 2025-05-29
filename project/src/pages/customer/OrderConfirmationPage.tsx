import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock } from 'lucide-react';

interface OrderDetails {
  id: string;
  estimatedTime: number;
  tableNumber: number;
  timestamp: string;
  total: number;
}

const OrderConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  
  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);
  
  const handleReturnToMenu = () => {
    navigate('/');
  };
  
  if (!order) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No order found</h2>
        <button 
          className="btn btn-primary"
          onClick={handleReturnToMenu}
        >
          Return to Menu
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="animate-fade-in">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">Your order has been successfully placed.</p>
        
        <div className="card p-8 mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          
          <div className="space-y-4">
            <div>
              <span className="text-gray-600">Order ID:</span>
              <span className="ml-2 font-medium">{order.id}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Table Number:</span>
              <span className="ml-2 font-medium">{order.tableNumber}</span>
            </div>
            
            <div>
              <span className="text-gray-600">Order Time:</span>
              <span className="ml-2 font-medium">
                {new Date(order.timestamp).toLocaleTimeString()}
              </span>
            </div>
            
            <div>
              <span className="text-gray-600">Total Amount:</span>
              <span className="ml-2 font-medium">${order.total.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center mt-6 text-primary-dark">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">
                Estimated Preparation Time: {order.estimatedTime} minutes
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">Thank you for your order! Your delicious food is being prepared.</p>
        
        <button 
          className="btn btn-primary"
          onClick={handleReturnToMenu}
        >
          Return to Menu
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;