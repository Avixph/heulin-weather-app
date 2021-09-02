module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainOrange: "#DC7555",
        mainBlue: "#5579DC",
        secondBlue: "#DDE4F8",
        mainGreen: "#55DCB8",
        mainBlack: "#4C4A43",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
