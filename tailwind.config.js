/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "832px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },

    extend: {
      screens: {
        xs: "100px",
      },

      colors: {
        "Light-grayish-violet": "hsl(270, 3%, 87%)",
        "Dark-grayish-violet": "hsl(279, 6%, 55%)",
        "Very-dark-violet": "hsl(278, 68%, 11%)",
        "Red-error": "hsl(0, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
