/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'pink-70': '0 -70px 30px -20px rgba(255, 192, 203, 0.5)', 
         }
      },
    },
    plugins: [],
  }

