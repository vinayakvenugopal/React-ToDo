/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // ...
    // Allow certain unknown at-rules
    unknownAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
  }
}

