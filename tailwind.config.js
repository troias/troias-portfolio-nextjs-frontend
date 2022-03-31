module.exports = {
  content: [
  
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
     "header-background-img": "url('../../../assets/images/header-background.jpg')",
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
