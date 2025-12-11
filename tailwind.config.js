/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'historical-black': '#1a1a1a',
        'historical-gray': '#f4f4f5',
        'historical-text': '#333333',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        serif: ['var(--font-noto-serif)'],
      },
    },
  },
  plugins: [],
}