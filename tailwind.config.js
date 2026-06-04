/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yuni-purple": "#822C89",
        "yuni-darkPurple": "#6E1975",
        "yuni-navy": "#2C3979",
        "yuni-lavender": "#EFF2FF",
        "yuni-cream": "#FAF8F0",
        "yuni-card": "#E5EAFF",
        "yuni-white": "#FFFFFF",
        "yuni-text-dark": "#1A1A2E",
        "yuni-text-mid": "#4A4A6A",
        "yuni-text-light": "#8888AA",
        "yuni-border": "#DDE2FF",
        "yuni-purple-light": "#F3E8F5",
        "yuni-olive": "#7B8C5A",
        "yuni-olive-bg": "#C8D4A8",
      },
      fontFamily: {
        heading: ["Nunito"],
        body: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
