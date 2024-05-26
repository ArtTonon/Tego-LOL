// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-000': '#0a0a0d',
        'gray-900': '#1A202C',
        'gray-800': '#2D3748',
        'gray-700': '#4A5568',
        'gray-600': '#718096',
        'gray-400': '#CBD5E0',
        'gray-300': '#E2E8F0',
        'gray-200': '#141414',
        'gray-100': '#242424',
        'gold': '#947442',

      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'min': '10px',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};
