/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px', // medium screen size
        lg: '1024px', // large screen size
        xl: '1280px', // extra-large screen size
      },
    },
    plugins: [],
  }
}
