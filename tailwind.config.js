/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        special: ["Inter"],
        bebas: ["Bebas Neue"],
        poppins: ["Poppins"],
      },
      colors: {
        white: "#FEFEFE",
        darkWhite: "#F1F1F1",
        darkerWhite: "#989898",
        blue: "#00a9e8",
        darkBlue: "#01678d",
        bgOffer: "#f7f5f2",
      },
    },
  },
  plugins: [],
  corePlugins: {
    backgroundClip: true,
  },
};
