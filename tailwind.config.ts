import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1F3D2B', light: '#2B5439', dark: '#14271C' },
        sand: { DEFAULT: '#F4EFE6', dark: '#E5DCC8' },
        gold: '#B08D57',
        charcoal: '#1C1C1C',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;