import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-green": "var(--primary-green)",
        "light-green": "var(--light-green)",
        "text-dark": "var(--text-dark)",
        "text-light": "var(--text-light)",
      },
      fontSize: {
        "28": "28px",
        "18": "18px",
        "14": "14px",
      },
      maxWidth: {
        "1000": "1000px",
      },
    },
  },
  plugins: [],
};
export default config;
