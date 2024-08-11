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
        'tidewater': '#c2e2de',
        // 'nyanza': '#dceed1',
        // 'violet': '#736372',
        'l_header': '#d4def2',
        'l_body': '#f7f9ff',
        'd_header': '#3e5684',
        'd_body': '#0b1732',
        'lt_header': '',
        'lt_body': '',
        'dt_header': '',
        'dt_body': '',

        // 'gunmetal': '#986F82',
        // 'dgray': '#50514f',
        // 'black': '#020202',
        // 'grey': '#1C1B22',
      },
    },
  },
  plugins: [],
};
export default config;
