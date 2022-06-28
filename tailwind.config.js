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
      "reco-bg": "url('../public/images/reco-bg.png')",
      "reco-xs-bg": "url('../public/images/reco-xs-bg.png')",
      "reco-lg-bg": "url('../public/images/reco-lg-bg.png')",
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

    // box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

    extend: {
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md": "0 0px 16px rgba(0, 0, 0, 0.1)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primaryText: "#FA4616",
        secondaryText: "#232323",
        greenText: "#008906",
        primaryBG: "#F5FCFE",
        secondaryBG: "#EC0000",
        highlight: "#FFF9EF",
        accentColor: "#FFB432",
        subTextColor: "#505050",
        leafBG: "rgba(165, 187, 72, 0.16)",
      },
      fontFamily: {
        Gorditalight: ["gordita-light", "sans-serif"],
        GorditaRegular: ["gordita-regular", "sans-serif"],
        GorditaMedium: ["gordita-medium", "sans-serif"],
        GorditaBold: ["gordita-bold", "sans-serif"],
        GorditaBlack: ["gordita-black", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("autoprefixer")],
};
