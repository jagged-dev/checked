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
    data: {
      selected: "selected='true'",
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
      backgroundImage: {
        "cards-white": "url('../../assets/images/backgrounds/cards-wh.png')",
        "cards-black": "url('../../assets/images/backgrounds/cards-bk.png')",
        "amounts-light": "url('../../assets/images/screenshots/amounts-lt.png')",
        "amounts-dark": "url('../../assets/images/screenshots/amounts-dk.png')",
        "people-light": "url('../../assets/images/screenshots/people-lt.png')",
        "people-dark": "url('../../assets/images/screenshots/people-dk.png')",
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
      animation: {
        "fade-200": "fade 0.2s ease-in-out 1",
        "fade-1000": "fade 1s ease-in-out 1",
        "slide-up": "slide-up 0.5s ease-out 1",
        "slide-down": "slide-down 0.5s ease-out 1",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
