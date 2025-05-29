import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, Category } from '../types';
import { menuItems as initialMenuItems } from '../data/mockData';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  getMenuItemsByCategory: (category: Category) => MenuItem[];
  getMenuItem: (id: string) => MenuItem | undefined;
  categories: Category[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const categories: Category[] = ['starters', 'mains', 'desserts', 'drinks'];

  // Load menu items from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem('menuItems');
    if (storedItems) {
      setMenuItems(JSON.parse(storedItems));
    }
  }, []);

  // Save menu items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString(),
    };
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  const updateMenuItem = (id: string, updatedFields: Partial<MenuItem>) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      )
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getMenuItemsByCategory = (category: Category) => {
    return menuItems.filter((item) => item.category === category);
  };

  const getMenuItem = (id: string) => {
    return menuItems.find((item) => item.id === id);
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        getMenuItemsByCategory,
        getMenuItem,
        categories,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};