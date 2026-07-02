/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-light': '#1a1f3a',
        'accent-yellow': '#FFD700',
        'accent-pink': '#FF1493',
        'accent-green': '#00FF41',
        'accent-cyan': '#00D9FF',
      },
    },
  },
  plugins: [],
};
