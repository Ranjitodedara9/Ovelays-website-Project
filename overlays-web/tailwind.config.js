/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Bebas Neue", "sans-serif"],
        head2: ["Kanit", "sans-serif"],
        links: ["Roboto Slab", "serif"],
      },
    },
    screens: {
      mob: "425px",
      teb: "768px",
      lep: "1024px",
    },
  },
  plugins: [],
};

