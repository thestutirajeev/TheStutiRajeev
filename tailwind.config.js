/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50:  '#fdf9f4',  // very light beige
          100: '#f6eee3',
          200: '#e8d9c4',
          300: '#d2b89c',
          400: '#b28b64',
          500: '#996633',  // primary brown
          600: '#7a4f27',
          700: '#5c3a1d',
          800: '#3e2714',
          900: '#23160b',
        },
      },
    },
  },
  plugins: [],
};
