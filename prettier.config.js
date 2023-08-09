/** @type {import("prettier").Options} */

module.exports = {
  printWidth: 320,
  overrides: [
    {
      files: ["*.html", "src/**/*.vue"],
      options: {
        tabWidth: 4,
      },
    },
  ],
  plugins: [],
};
