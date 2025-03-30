/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX files in src
  ],
  theme: {
    extend: {
      screens: {
        custom: "680px", // Your custom breakpoint
      },
    },
  },
  plugins: [],
};
