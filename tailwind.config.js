/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ad1418",
        light: {
          secondary: "#dfe3e8",
          tertiary: "#ffffff",
          title: "#161C24"
        },
        dark: {
          secondary: "#161c24",
          tertiary: "#212b36",
          paragraph: "#cfcfd4"
        },
        screens: {
          dark: { raw: "(prefers-color-scheme: dark)" }
        }
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss"),
    // eslint-disable-next-line no-undef
    require("autoprefixer"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".scrollbar-none": {
          "-webkit-overflow-style": "none",
          "-moz-overflow-style": "none",
          "-o-overflow-style": "none",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        },
        ".scrollbar-none::-webkit-scrollbar": { display: "none" }
      });
    })
  ]
};
