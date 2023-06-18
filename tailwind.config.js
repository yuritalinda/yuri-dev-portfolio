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
        yellow: "#F2DE77",
        brickred: "#FF3636",
        gold: "#D8A437",
      },
    },
  },
  plugins: [],
};
