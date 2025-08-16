// tailwind.config.js or tailwind.config.ts
// font-[family-name:var(--font-geist-sans)] font custom
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      
      fontFamily: {
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        outfit: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['tabler']),
    }),
  ],
}

export default config
