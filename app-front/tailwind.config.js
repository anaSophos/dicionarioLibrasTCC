/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-yellow': '#E7D75D',
        'coral': '#E7503B',
        'pastel-orange': '#F6F2DA',
        'red-earth': '#65160B',
        'blue': '#71B0C5',
        'pastel-blue': '#B3D1DC',
      },
    },
  },
  plugins: [],
}

