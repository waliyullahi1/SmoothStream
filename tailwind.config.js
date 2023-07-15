/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d2123",
        secondary: "#facd66",
        tertiary: "#1a1e1f",
      },
      
    },
  },
  plugins: [],
};

