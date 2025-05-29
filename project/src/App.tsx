import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';
import MenuPage from './pages/customer/MenuPage';
import CartPage from './pages/customer/CartPage';
import OrderSummaryPage from './pages/customer/OrderSummaryPage';
import OrderConfirmationPage from './pages/customer/OrderConfirmationPage';
import AdminMenuPage from './pages/admin/AdminMenuPage';
import AdminItemPage from './pages/admin/AdminItemPage';
import LoginPage from './pages/admin/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<CustomerLayout />}>
                <Route index element={<MenuPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="order-summary" element={<OrderSummaryPage />} />
                <Route path="order-confirmation" element={<OrderConfirmationPage />} />
              </Route>
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<LoginPage />} />
                <Route 
                  path="menu" 
                  element={
                    <ProtectedRoute>
                      <AdminMenuPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="item/:id" 
                  element={
                    <ProtectedRoute>
                      <AdminItemPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="item/new" 
                  element={
                    <ProtectedRoute>
                      <AdminItemPage isNew />
                    </ProtectedRoute>
                  } 
                />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;