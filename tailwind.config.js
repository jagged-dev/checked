/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.html", "src/**/*.vue", "src/ts/*.ts"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      red: "#eb0028",
      blue: "#1877f2",
      green: "#1ed760",
      yellow: "#fffc05",
      snow: "#f3f3f3",
      ice: "#eeeeee",
      silver: "#c6c6c6",
      gunmetal: "#5e5e5e",
      charcoal: "#1f1f1f",
      coal: "#131313",
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Product Sans"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "500px",
        "3xl": "1800px",
      },
      spacing: {
        18: "4.5rem",
      },
      height: {
        "screen/2": "50vh",
      },
      backgroundImage: {
        "event-light": "url('../../assets/images/screenshots/event-lt.png')",
        "event-dark": "url('../../assets/images/screenshots/event-dk.png')",
        "party-light": "url('../../assets/images/screenshots/party-lt.png')",
        "party-dark": "url('../../assets/images/screenshots/party-dk.png')",
        "check-light": "url('../../assets/images/screenshots/check-lt.png')",
        "check-dark": "url('../../assets/images/screenshots/check-dk.png')",
        "food-light": "url('../../assets/images/screenshots/food-lt.png')",
        "food-dark": "url('../../assets/images/screenshots/food-dk.png')",
        "results-light": "url('../../assets/images/screenshots/results-lt.png')",
        "results-dark": "url('../../assets/images/screenshots/results-dk.png')",
      },
      transitionProperty: {
        DEFAULT: "background-image, height, font-size, " + defaultTheme.transitionProperty.DEFAULT,
        background: "background-image, background-color",
        font: "font-size, color",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
