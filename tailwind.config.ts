import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#ffc0cb',
        'brand-pink-content': "#000000",
        'brand-purple': '#d1d1f6',
        'brand-purple-content': '#000000',
        'brand-blue': '#c0fff4',
        'brand-blue-content': '#000000',
        'brand-orange': '#ffd5c0',
        'brand-orange-content': '#000000',
        'brand-yellow': '#ffd5c0',
        'brand-yellow-content': '#000000',
      },
    },
  },
  plugins: [],
};
export default config;