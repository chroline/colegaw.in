/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-polysans)"],
        sans: ["var(--font-manrope)"],
      },
      colors: {
        muted: "#808080",
      },
    },
  },
  plugins: [],
};
