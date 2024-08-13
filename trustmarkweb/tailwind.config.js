module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sarabun: ["Sarabun", "sans-serif"],
      },
      colors: {
        veryLightBlue: ["#ccd4e5"],
      },
    },
  },
  plugins: [],
};
