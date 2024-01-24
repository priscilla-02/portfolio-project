/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      desktop: '1024px',
    },
    extend: {
      colors: {
        TK: {
          background: '#131921',
          default: '#131921',
        },
      },
    },
  },
  plugins: [],
};
