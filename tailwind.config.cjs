/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#645cff",
        "primary-dark": "#282566",
        "primary-light": "#a29dff",
        "gray-1": "#102a42",
        "gray-5": "#617d98",
        "gray-10": "#f1f5f8",
        "red-dark": "hsl(360, 67%, 44%)",
        "red-light": "hsl(360, 71%, 66%)",
      },
      letterSpacing: {
        "letterSpacig-3": "0.25rem",
      },
    },
  },
  plugins: [],
};
