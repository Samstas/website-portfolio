/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        indigo: "#2C2C54",
        purple: "#474787",
        gray: "#AAABB8",
        lightgray: "#ECECEC",
      },
    },
  },
  plugins: [],
};
