/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryLight: "#e8d4c1",
        primary: "#D9BCA9",
        primaryDark: "#5e4b3e",
        secondary: "#d19269",
        secondaryDark: "#694730"
      },
      fontFamily: {
        quicksand: ["Quicksand", "serif"],
        poppins: ["Poppins", "serif"],
        abel: ["Abel", "serif"]
      }
    },
  },
  plugins: [],
}