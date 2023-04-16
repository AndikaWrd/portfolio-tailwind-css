/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#4299E1",
        dark: "#0f172a",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
