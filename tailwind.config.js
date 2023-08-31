/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    screens: {
      xsm: "200px",
    },
    extend: {
      boxShadow: {
        key: "inset 0px -3px 0px 0px rgba(0,0,0,0.75)",
      },
      screens: {
        md: "550px",
      },
      colors: {
        main: "var(--bg-main)",
        toggle: "var(--bg-toggle)",
        keypad: "var(--bg-keypad)",
        screen: "var(--bg-screen)",
        keyDel: "var(--key-del)",
        keyDelShadow: "var(--key-del-shadow)",
        keyDelHover: "var(--key-del-hover)",
        keyDark: "var(--key-dark)",
        keyDarkText: "var(--key-dark-text)",
        keyDarkShadow: "var(--key-dark-shadow)",
        keyNumsBg: "var(--key-nums-bg)",
        keyNumsShadow: "var(--key-nums-shadow)",
        keyNumsHover: "var(--key-nums-hover)",
        text: "var(--text)",
        textWhite: "var(--text-white)",
        textScreen: "var(--text-screen)",
        textScreenPrevious: "var(--text-screen-previous)",
      },
    },
  },
  plugins: [],
};
