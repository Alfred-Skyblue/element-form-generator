function pixels(number = 1000) {
  return { ...Array.from(Array(number), (v, index) => `${index}px`) }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        ...pixels()
      },
      colors: {
        primary: 'var(--primary-color)'
      }
    }
  },
  plugins: []
}
