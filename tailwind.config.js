/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#ad1418",
        light: {
          secondary: "#dfe3e8",
          tertiary: "#ffffff"
        },
        dark: {
          secondary: "#161c24",
          tertiary: "#212b36"
        },
        screens: {
          'dark': {'raw': '(prefers-color-scheme: dark)'},
        },
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss'),
    // eslint-disable-next-line no-undef
    require('autoprefixer'),
  ]
};
