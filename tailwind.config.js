/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A2B3D4",
        secondary: "#385584",
        "fadedwhite": "#f5f5f5"
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1536px',
    }
  },
  plugins: [],
}