/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",
        brandPurple: "#8b5cf6",
        apple: {
          bg: "#FFFFFF",
          surface: "#F5F5F7",
          primary: "#1D1D1F",
          secondary: "#86868B",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

