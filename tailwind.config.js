/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: 'var(--bg-deep)',
        dark: 'var(--bg-dark)',
        silver: 'var(--silver)',
        'mercedes-silver': 'var(--mercedes-silver)',
        'blue-haze': 'var(--blue-haze)',
      }
    },
  },
  plugins: [],
}
