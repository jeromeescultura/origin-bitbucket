module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "assessment-bg": "url('../public/images/assessment-bg.png')",
      "assessment-small-bg": "url('../public/images/assessment-small-bg.png')",
      "landing-bg": "url('../public/images/landing-bg.png')",
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }
      sm: "667px",
      // => @media (min-width: 667px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primaryText: "#FA4616",
        secondaryText: "#232323",
        primaryBG: "#F5FCFE",
        secondaryBG: "#EC0000",
        highlight: "#FFF9EF",
        accentColor: "#FFB432",
      },
      fontFamily: {
        Gordita: ["gordita", "sans-serif"],
        GorditaMedium: ["gordita-medium", "sans-serif"],
        GorditaBold: ["gordita-bold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
