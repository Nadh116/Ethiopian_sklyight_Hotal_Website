/** @type {import('tailwindcss').Config} */
export default {
  // Scan source files so unused Tailwind classes get purged
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
