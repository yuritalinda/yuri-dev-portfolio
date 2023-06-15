/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitebkg: "#ffff",
        palerose: "#f29199",
        yellow: "#fcf279",
        brickred: "#f23235",
        brown: "#c67e44",
      },
    },
  },
  plugins: [],
};
