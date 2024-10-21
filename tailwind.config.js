/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-purple': '#8d27ae',
        'custom-pink' : '#d9176d',
        'custom-grey': '#f3f3f3',
        'custom-white': '#fff',
        'custom-black': '#010101',
        'custom-light-black': '#717171',
      },
      fontFamily : {
        sans : ['Poppins', 'sans-serif']
      },
      backgroundImage : {
        'heroImg' : "url('/workspace/book-search-react-app/src/images/library-img.jpg')",
        
      }
    },
  },
  plugins: [],
}

