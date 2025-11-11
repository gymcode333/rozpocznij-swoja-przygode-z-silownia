// Jeśli zmieniasz nazwę na tailwind.config.cjs (rekomendowane):
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Włączamy Dark Mode oparty na klasie 'dark'
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'system-ui', 'Arial', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'], 
    },
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa', 500: '#2b6cb0', 600: '#255e97', 700: '#1e4f7e', 
        },
        secondary: '#f0c040', 
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'xl-dark': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundColor: {
        'dark-bg': '#0b1220', 
        'dark-card': '#0f1724', 
      },
      textColor: {
        'dark-text': '#e6eef8', 
        'dark-muted': '#98a0b2',
      },
      maxWidth: {
        '8xl': '1200px', 
      }
    },
  },
  plugins: [],
};