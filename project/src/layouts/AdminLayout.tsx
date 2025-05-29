import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Menu } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="horizontal-tablet flex flex-col h-screen">
      {/* Header */}
      <header className="bg-secondary text-white p-4 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate(isAuthenticated ? '/admin/menu' : '/admin')}
        >
          <h1 className="text-2xl font-bold">Seoul Kitchen Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <>
              <span className="text-sm">
                Welcome, {user?.username}
              </span>
              <button 
                className="p-2 rounded-full hover:bg-white/20"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
              </button>
            </>
          )}
          <button 
            className="p-2 rounded-full hover:bg-white/20"
            onClick={() => navigate('/')}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 bg-gray-100">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-white p-3 text-center text-sm">
        <p>© 2025 Seoul Kitchen Admin Panel | Version 1.0</p>
      </footer>
    </div>
  );
};

export default AdminLayout;