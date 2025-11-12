/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        gray:{
          100:"#eeeeef",
          200:"e6e9ed",
          300:"#95989"
        },
        purple:{
          300:"#d9ddde",
          500:"#94922db",
          600:"#7164c0",
        },
        dark:{
          100:"#1f1f1f",
        }
      }
    },
  },
  plugins: [],
}

