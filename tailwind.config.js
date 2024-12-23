/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit"
      },
      colors: {
        primary: '#01949A',
        textPrimary: '#2e3944'
      },
      backgroundImage: {
        banner: 'url("/src/assets/cars.png")'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

