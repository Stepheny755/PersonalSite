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
    extend: {
      colors: {
        'l_header': '#d4def2',
        'l_body': '#f7f9ff',
        'd_header': '#3e5684',
        'd_body': '#0b1732',
        'accent': '#f2e8d4',
      },
    },
  },
  plugins: [],
};
export default config;
