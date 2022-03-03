module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        "primary-pink": "#f857a6",
      },
      backgroundImage: {
        "gradient-primary-radial": "var(--gradient-primary-radial)",
        "gradient-primary-linear": "var(--gradient-primary-linear)",
      },

      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        merriweatherSans: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
