import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "1024px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "100%",
          "3xl": "1920px",
        },
      },
      keyframes: {
        rotate: {
          "8.3%": { transform: "rotate(30deg)" },
          "16.6%": { transform: "rotate(60deg)" },
          "25%": { transform: "rotate(90deg)" },
          "33.3%": { transform: "rotate(120deg)" },
          "41.6%": { transform: "rotate(150deg)" },
          "50%": { transform: "rotate(180deg)" },
          "58.3%": { transform: "rotate(210deg)" },
          "66.6%": { transform: "rotate(240deg)" },
          "75%": { transform: "rotate(270deg)" },
          "83.3%": { transform: "rotate(300deg)" },
          "91.6%": { transform: "rotate(330deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
