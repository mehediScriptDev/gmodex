/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryfont: ['"IBM Plex Mono"', 'monospace'],
        inconsolata: ['Inconsolata', 'monospace'],
        boldHack: ['"Press Start 2P"', 'cursive'],
        primaryHack: ['VT323', 'monospace'],
        genuine: "Share Tech Mono",
        redblood: ['"Creepster"', 'cursive'],
        terminalfont: ['"Jersey 15"', 'sans-serif'],
        oldstylefont: ['"Tagesschrift"', 'monospace'],
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}

