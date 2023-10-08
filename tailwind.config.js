/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,html}',
'node_modules/flowbite-react/**/*.{js,jsx,html}'
],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

