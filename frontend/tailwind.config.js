/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          surface: '#1e1e1e',
          text: '#f5f5f5',
          secondary: '#a0a0a0'
        }
      }
    },
  },
  plugins: [],
};