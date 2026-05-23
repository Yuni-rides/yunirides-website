/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yuni-purple': '#822C89',
        'yuni-navy': '#2C3979',
        'yuni-lavender': '#EFF2FF',
        'yuni-cream': '#FAF8F0',
      },
    },
  },
  plugins: [],
}