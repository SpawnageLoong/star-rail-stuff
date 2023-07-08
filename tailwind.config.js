/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),],
  daisyui: {
    themes: [
      "night",
      {
        myTheme: {
          "primary": "#641ae6",
          "primary-focus": "",
          "primary-content": "#ffffff",
          "secondary": "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "",
          "neutral": "",
          "neutral-focus": "",
          "neutral-content": "",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          "info": "#2094f3",
          "info-content": "#ffffff",
          "success": "#009485",
          "success-content": "#ffffff",
          "warning": "#ff9900",
          "warning-content": "#ffffff",
          "error": "#ff5724",
          "error-content": "#ffffff"
        }
      }],
  },
}

