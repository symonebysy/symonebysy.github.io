/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index*.html",       // This catches index.html, index2.html, etc.
	"./evento/**/*.{html,js,ts}", // Your evento folder files
    "./src/**/*.{js,ts}",  // Your source JS files
    "./node_modules/flowbite/**/*.js" // Crucial for Flowbite classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}