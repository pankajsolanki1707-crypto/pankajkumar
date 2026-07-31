/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFDFB',
          100: '#FAFAF8',
          200: '#F4F4F0',
          300: '#E8E8E2',
          400: '#D6D6CC',
        },
        ink: {
          900: '#111111',
          800: '#222222',
          700: '#333333',
          600: '#555555',
          500: '#777777',
          400: '#999999',
        },
        authorAccent: {
          DEFAULT: '#2E7D32',
          hover: '#246427',
          light: '#E8F5E9',
          dark: '#4CAF50'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'book': '0 12px 30px -8px rgba(0, 0, 0, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'book-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.22), 0 8px 16px -4px rgba(0, 0, 0, 0.12)',
        'elevated': '0 24px 48px -12px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
