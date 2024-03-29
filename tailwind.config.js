/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeCard: "#ea775c"
      },
    },
  },
  plugins: [require("daisyui")], // eslint-disable-line no-undef
}

