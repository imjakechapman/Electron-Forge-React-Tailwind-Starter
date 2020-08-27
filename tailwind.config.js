// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "shadow-50": "#F7F7F7",
        "shadow-100": "#DEDEDE",
        "shadow-200": "#C4C4C4",
        "shadow-300": "#ABABAB",
        "shadow-400": "#919191",
        "shadow-500": "#787878",
        "shadow-600": "#5E5E5E",
        "shadow-700": "#454545",
        "shadow-800": "#2B2B2B",
        "shadow-900": "#111111",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        "0": "0ms",
        "250": "250ms",
      },
    },
  },
  variants: {
    borderWidth: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "disabled",
      "first",
      "last",
    ],
    cursor: ["responsive", "hover", "group-hover", "focus", "disabled", "last"],
    margin: ["responsive", "hover", "group-hover", "focus", "disabled", "last"],
    opacity: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "disabled",
      "last",
    ],
    padding: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "disabled",
      "last",
    ],
    transform: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "disabled",
      "last",
    ],
    translate: [
      "responsive",
      "hover",
      "group-hover",
      "focus",
      "disabled",
      "last",
    ],
  },
  plugins: [],
};
