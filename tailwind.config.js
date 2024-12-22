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
        primary: '#124e66',
        textPrimary: '#2e3944'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

