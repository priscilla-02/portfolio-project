/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1024px',
    },
    fontFamily: {
      simpleNight: ['SimpleNight', 'sans'],
      easyMind: ['EasyMind', 'sans'],
      oliverKitchen: ['OliverKitchen', 'sans'],
      quickSand: ['QuickSand', 'sans'],
      dancingScript: ['DancingScript', 'sans'],
      rato: ['Rato', 'sans'],
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
