/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "100%",
        lg: "1394px",
      },
    },
    fontFamily: {
      "trebuchet-bold": ["Trebuchet MS Bold", "sans-serif"],
      "trebuchet-regular": ["Trebuchet MS Regular", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        background: "#F6F7FA",
        gray: "#303030",
        blue: "#1A73E8",
      },
      fontSize: {
        xs: ["0.75rem", "0.875rem"],
        sm: ["0.875rem", "1rem"],
        base: ["1rem", "1.125rem"],
        lg: ["1.125rem", "1.25rem"],
        xl: ["1.25rem", "1.375rem"],
        "2xl": ["1.5rem", "1.75rem"],
        "6xl": ["3.5rem", "4rem"],
      },
      backgroundImage: {
        "rainbow-gradient": "linear-gradient(180deg, #348AE6 0%, #EC6EAD 100%)",
        "button-gradient": "linear-gradient(90deg, #574DCC 0%, #579AFF 100%)",
        "button-gradient-reverse": "linear-gradient(-90deg, #574DCC 0%, #579AFF 100%)",
        "text-gradient": "linear-gradient(90deg, #579AFF 11.17%, #574DCC 96.28%)",
      },
      boxShadow: {
        "block-shadow": "0px 10px 30px 0px #0000000D",
        "block-shadow-2": "0px 10px 40px 0px #0000001A",
        "block-shadow-3": "0px 5.8px 23.19px 0px #0000001A",
        "button-shadow": "0px 20px 30px 0px #584FCD33",
        "text-shadow": "0px 4px 4px 0px #00000040",
        "inner-shadow": "0px 0px 10px 0px #261F7B0D inset",
      },
      borderRadius: {
        lg: "10px",
        "3xl": "20px",
        "4xl": "30px",
      },
      screens: {
        xs: "400px",
        "min-h-900": { raw: "(min-height: 900px)" },
      },
    },
  },
}
