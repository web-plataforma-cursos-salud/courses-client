/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        base: "#1e40af", // Color principal de la página
        icon: "#D7D9E0",
        customCeleste: "#1e40af", // Cambia esto al color de tu paleta
        customCelesteDark: "#1e3a8a",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "sans-serif"], // Añadir IBM Plex Sans como la fuente sans
        blackOps: ['"Black Ops One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
