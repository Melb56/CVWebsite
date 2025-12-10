/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ou "./pages/**/*.{js,ts,jsx,tsx}" selon ton projet
  ],
  theme: {
    extend: {
        colors: {
            'main': '#e6cfc3' ,
            'text': '#000000',
            'bg': '#f5efea',
            'accent': '#b76e79',
        }
    },
  },
  plugins: [],
}
