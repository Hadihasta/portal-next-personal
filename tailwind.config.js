import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        berry: "#efdf22",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["tabler"]),
    }),
  ],
};
export default config;
