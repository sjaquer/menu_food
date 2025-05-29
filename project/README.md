# Seoul Kitchen Tablet Ordering System

A modern tablet-based ordering system for Seoul Kitchen restaurant, built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Tablet-optimized horizontal interface
- 🍜 Interactive menu with categories and item details
- 🛒 Real-time cart management
- 💳 Order processing with discount codes
- 👩‍💼 Admin panel for menu management
- 🔐 Secure authentication system
- 📸 High-quality food imagery integration
- 💾 Persistent storage for orders and menu items

## Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

## Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing management
- `lucide-react` - Icon library

### Development Dependencies
- `typescript` - Type safety
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS transformation tool
- `autoprefixer` - CSS vendor prefixing
- `eslint` - Code linting
- `@eslint/js` - ESLint JavaScript support
- `eslint-plugin-react-hooks` - React Hooks linting
- `eslint-plugin-react-refresh` - React Refresh support
- `globals` - Global variables definitions
- `typescript-eslint` - TypeScript ESLint support

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd seoul-kitchen-tablet-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # React context providers
├── data/           # Mock data and constants
├── layouts/        # Layout components
├── pages/          # Page components
│   ├── admin/      # Admin interface pages
│   └── customer/   # Customer interface pages
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Usage

### Customer Interface
- Access the main menu at the root URL '/'
- Browse menu items by category
- Add items to cart
- Review order in cart
- Apply discount codes
- Complete order process

### Admin Interface
- Access admin login at '/admin'
- Default credentials:
  - Username: admin
  - Password: admin123
- Manage menu items at '/admin/menu'
- Add/edit/delete menu items
- Toggle item availability

## Development

- Run development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview production build:
  ```bash
  npm run preview
  ```

## Styling

The application uses Tailwind CSS with a custom configuration:

- Custom color scheme:
  - Primary: Crimson (#BF2C23)
  - Secondary: Charcoal (#303030)
  - Accent: Gold (#D4AF37)
- Responsive design optimized for horizontal tablets
- Custom animations for enhanced user experience
- Consistent spacing and typography system

## State Management

- React Context API for global state management
- Local Storage for data persistence
- Separate contexts for:
  - Menu management
  - Shopping cart
  - Authentication

## Security

- Protected routes for admin interface
- Authentication state persistence
- Form validation and sanitization
- Error handling and user feedback

## License

MIT License