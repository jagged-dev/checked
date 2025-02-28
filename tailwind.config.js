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
      orange: "#fe4c20",
      yellow: "#fffc05",
      green: "#1ed760",
      blue: "#1877f2",
      purple: "#9049fc",
      pink: "#e9208f",
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
        22: "5.5rem",
      },
      height: {
        "screen/2": "50vh",
      },
      width: {
        "screen/2": "50vw",
      },
      backgroundImage: {
        "event-light": "url('../../assets/images/screenshots/event-light.png')",
        "event-dark": "url('../../assets/images/screenshots/event-dark.png')",
        "party-light": "url('../../assets/images/screenshots/party-light.png')",
        "party-dark": "url('../../assets/images/screenshots/party-dark.png')",
        "check-light": "url('../../assets/images/screenshots/check-light.png')",
        "check-dark": "url('../../assets/images/screenshots/check-dark.png')",
        "food-light": "url('../../assets/images/screenshots/food-light.png')",
        "food-dark": "url('../../assets/images/screenshots/food-dark.png')",
        "results-light": "url('../../assets/images/screenshots/results-light.png')",
        "results-dark": "url('../../assets/images/screenshots/results-dark.png')",
      },
      transitionProperty: {
        DEFAULT: "background-image, height, width, font-size, " + defaultTheme.transitionProperty.DEFAULT,
        background: "background-image, background-color",
        font: "font-size, color",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
