module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["IranSans"],
      },
      colors: {
        grey: "#414141;"
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.jpeg')",
        'footer-texture': "url('/img/footer-texture.jpg')",
      }
    },
  },
  plugins: [],
}
