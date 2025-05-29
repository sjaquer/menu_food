import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, User } from 'lucide-react';

const CustomerLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();
  
  const isHome = location.pathname === '/';
  const isCart = location.pathname === '/cart';
  const isOrderFlow = location.pathname.includes('order-');

  return (
    <div className="horizontal-tablet flex flex-col h-screen">
      {/* Header */}
      <header className="bg-primary text-white p-4 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <h1 className="text-2xl font-bold">Seoul Kitchen</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <p className="text-white text-sm">Table #12</p>
          </div>
          {!isOrderFlow && (
            <button 
              className={`relative p-2 rounded-full ${isCart ? 'bg-white/20' : ''}`}
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          )}
          <button 
            className="p-2 rounded-full hover:bg-white/20"
            onClick={() => navigate('/admin')}
          >
            <User className="h-6 w-6" />
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
      
      {/* Footer */}
      {!isOrderFlow && (
        <footer className="bg-secondary text-white p-3 text-center text-sm">
          <p>© 2025 Seoul Kitchen | For assistance, please call a server</p>
        </footer>
      )}
    </div>
  );
};

export default CustomerLayout;