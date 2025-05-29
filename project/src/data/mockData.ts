import { MenuItem, Category } from '../types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Kimchi',
    description: 'Traditional fermented napa cabbage with Korean spices',
    price: 5.99,
    image: 'https://images.pexels.com/photos/5900024/pexels-photo-5900024.jpeg',
    category: 'starters',
    available: true,
  },
  {
    id: '2',
    name: 'Mandu (Dumplings)',
    description: 'Steamed or fried dumplings filled with meat and vegetables',
    price: 7.99,
    image: 'https://images.pexels.com/photos/9332789/pexels-photo-9332789.jpeg',
    category: 'starters',
    available: true,
  },
  {
    id: '3',
    name: 'Pajeon (Green Onion Pancake)',
    description: 'Savory pancake with green onions and seafood',
    price: 8.99,
    image: 'https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg',
    category: 'starters',
    available: true,
  },
  
  // Mains
  {
    id: '4',
    name: 'Bibimbap',
    description: 'Mixed rice bowl with vegetables, meat, and egg',
    price: 14.99,
    image: 'https://images.pexels.com/photos/5900334/pexels-photo-5900334.jpeg',
    category: 'mains',
    available: true,
  },
  {
    id: '5',
    name: 'Bulgogi',
    description: 'Marinated beef barbecue with rice and side dishes',
    price: 16.99,
    image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg',
    category: 'mains',
    available: true,
  },
  {
    id: '6',
    name: 'Japchae',
    description: 'Sweet potato noodles stir-fried with vegetables and beef',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
    category: 'mains',
    available: true,
  },
  {
    id: '7',
    name: 'Sundubu Jjigae',
    description: 'Spicy soft tofu stew with vegetables and seafood',
    price: 15.99,
    image: 'https://images.pexels.com/photos/6249532/pexels-photo-6249532.jpeg',
    category: 'mains',
    available: true,
  },
  
  // Desserts
  {
    id: '8',
    name: 'Bingsu',
    description: 'Shaved ice dessert with sweet toppings',
    price: 8.99,
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
    category: 'desserts',
    available: true,
  },
  {
    id: '9',
    name: 'Hotteok',
    description: 'Sweet pancakes filled with brown sugar, nuts, and cinnamon',
    price: 6.99,
    image: 'https://images.pexels.com/photos/7474221/pexels-photo-7474221.jpeg',
    category: 'desserts',
    available: true,
  },
  
  // Drinks
  {
    id: '10',
    name: 'Soju',
    description: 'Traditional Korean rice liquor',
    price: 12.99,
    image: 'https://images.pexels.com/photos/11702004/pexels-photo-11702004.jpeg',
    category: 'drinks',
    available: true,
  },
  {
    id: '11',
    name: 'Makgeolli',
    description: 'Milky, sweet rice wine',
    price: 10.99,
    image: 'https://images.pexels.com/photos/6249544/pexels-photo-6249544.jpeg',
    category: 'drinks',
    available: true,
  },
  {
    id: '12',
    name: 'Sikhye',
    description: 'Sweet rice drink served as dessert',
    price: 4.99,
    image: 'https://images.pexels.com/photos/6249550/pexels-photo-6249550.jpeg',
    category: 'drinks',
    available: true,
  },
];

export const categoryImages: Record<Category, string> = {
  starters: 'https://images.pexels.com/photos/5900024/pexels-photo-5900024.jpeg',
  mains: 'https://images.pexels.com/photos/5900334/pexels-photo-5900334.jpeg',
  desserts: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
  drinks: 'https://images.pexels.com/photos/11702004/pexels-photo-11702004.jpeg',
};

export const categoryNames: Record<Category, string> = {
  starters: 'Starters',
  mains: 'Main Dishes',
  desserts: 'Desserts',
  drinks: 'Drinks',
};