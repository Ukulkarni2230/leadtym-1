/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      spacing: {
        "custom-small": "8px",
        "custom-medium": "8px",
        "custom-large": "16px",
        "custom-xl": "40px",
        "custom-2xl": "45px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".padd": {
          paddingLeft: theme("spacing.custom-small"),
          paddingRight: theme("spacing.custom-small"),
          "@screen sm": {
            paddingLeft: theme("spacing.custom-medium"),
            paddingRight: theme("spacing.custom-medium"),
          },
          "@screen md": {
            paddingLeft: theme("spacing.custom-large"),
            paddingRight: theme("spacing.custom-large"),
          },
          "@screen xl": {
            paddingLeft: theme("spacing.custom-xl"),
            paddingRight: theme("spacing.custom-xl"),
          },
          "@screen 2xl": {
            paddingLeft: theme("spacing.custom-2xl"),
            paddingRight: theme("spacing.custom-2xl"),
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
