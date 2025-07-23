import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#0F0F10',
        'off-white': '#F5F5F7',
        'neon-accent': '#FF4F4F',
        'gradient-end': '#FFB84F',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'display': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [aspectRatio],
};

export default config; 