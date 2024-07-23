import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        "secondary-200": "#f3f4f6",
        "secondary-100": "#f9fafb",
        "accent-500": "#f97316",
        "accent-400": "#fb923c",
        "accent-300": "#fdba74",
        "accent-200": "#fed7aa",
        "accent-100": "#ffedd5",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
export default config;
