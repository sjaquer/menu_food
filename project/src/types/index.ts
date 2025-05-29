export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  available: boolean;
}

export type Category = 
  | 'starters'
  | 'mains'
  | 'desserts'
  | 'drinks';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  tableNumber: number;
  timestamp: Date;
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  estimatedTime?: number; // in minutes
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'staff';
}