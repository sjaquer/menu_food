/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BF2C23',
          dark: '#A31C15',
          light: '#E65A51',
        },
        secondary: {
          DEFAULT: '#303030',
          dark: '#1A1A1A',
          light: '#484848',
        },
        accent: {
          DEFAULT: '#D4AF37',
          dark: '#B39329',
          light: '#E7CC69',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399',
        },
        warning: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
          light: '#F87171',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};