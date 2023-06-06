/** @type {import('tailwindcss').Config} */
export const content = ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"]
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xxs: "0.625rem", //10px
    },
    lineHeight: {
      "10x2": "5rem", //80px
    },
  },
  colors: {
    transparent: "transparent",
    white: "#ffffff",
    clearBlue: "#247AFD",
    darkJungleGreen: "#1e1e1e",
    iridium: "#3D3D3D",
    teal: "#0D8E78",
    persianGreen: "#13A98F",
    lavenderIndigo: "#9555fe4c",
    greenishCyan: "#3cf4bd4c",
    naplesYellow: "#fed7664c",
    clearBlueGradient: "#2a82ff4c",
    whiteBlue: "#2964b819",
    teal: "#0D8E78",
    riverBed: "#424854",
  },
}
