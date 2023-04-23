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
          tertiary: "#ffffff",
          title:"#161C24",
        },
        dark: {
          secondary: "#161c24",
          tertiary: "#212b36",
          paragraph: "#cfcfd4",
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
