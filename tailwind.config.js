/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#5e6778',
        'light-black': '#1c202b',
        'dark-blue': '#0a327b',
        'light-gray': '#939cad',
        'light-red': '#f65552',
        'light-blue': '#f7fafd',
        'sky-blue': '#e5effa'
      }
    },
  },
  plugins: [],
};

