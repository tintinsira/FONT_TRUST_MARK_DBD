module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".shadow-purple": {
          boxShadow: "0 4px 6px rgba(198, 204, 226, 1)",
        },
        ".shadow-blue": {
          boxShadow: "0 4px 6px rgba(0, 0, 255, 0.5)",
        },
      });
    },
  ],
};
