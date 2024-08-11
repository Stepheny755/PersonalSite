import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    extends: {
      colors: {
        'skyblue': '#3bc9f5',
        'nyanza': '#dceed1',
        'violet': '#736372',
        'tearose': '#e2c2c6',
        // 'black': '#020202',
        // 'grey': '#1C1B22',
      },
    },
  },
  plugins: [],
};
export default config;
