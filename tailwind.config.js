/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
      center: true,
    },
    extend: {
      colors: {
        primary: '#F8E7D5',
        secondary: '#482B25',
        tertiary: '#ED1C24',
      },
    },
  },
  plugins: [],
}

