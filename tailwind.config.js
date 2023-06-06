/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "firaCode" : "'Fira Code', monospace;"
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      colors :{
        "primary-green" : "rgba(142, 255, 139, 0.5)",
        "secondary-green" : "#8EFF8B",
        "opac-bg" : "rgba(0,0,0,0.5)"
      },
      dropShadow: {
        'xsw': '1px 1px 60px rgba(142, 255, 139, 0.8)',
        'smw': '1px 1px 60px rgba(142, 255, 139, 0.5)',
      }
    },
  },
  plugins: [],
}

