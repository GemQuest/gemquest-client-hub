import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#045BA5',
        secondary: '#34A4EB',
        background: '#0D0D0D',
        error: '#E53935',
        success: '#43A047',
        warning: '#F9A825',
        neutralLight: '#E0E0E0',
        neutralDark: '#1A1A1A',
        lightGray: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
export default config;
