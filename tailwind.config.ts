// tailwind.config.js or tailwind.config.ts
// font-[family-name:var(--font-geist-sans)] font custom
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
   
    iconsPlugin({
      collections: getIconCollections(["tabler"]),
    }),
  ],
  
};

export default config;
