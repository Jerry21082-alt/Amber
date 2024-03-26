/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        finalFantacy: ["var[--font-fantacy]"],
      },
      colors: {
        snow: "#f2f2f2",
        bodyColor: "#ffd700",
      },
    },
  },
  plugins: [],
};
