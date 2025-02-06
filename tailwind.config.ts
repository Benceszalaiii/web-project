import type { Config } from 'tailwindcss'

export default {
  content: [
    './docs/*.{html,js}',
    './js/*.{html,js}',
    './css/*.{html,js,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

// Just some stuff to reload actions