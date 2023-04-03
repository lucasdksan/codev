/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "df-green": "#44B564",
        "df-graphite": "#333333",
        "df-gray": "#777777",
        "df-subgray": "#555555"
      },
      boxShadow: {
        "df-shadow": "0px 0px 57px -7px rgba(119, 119, 119, 0.12)"
      }
    },
  },
  plugins: [],
}

