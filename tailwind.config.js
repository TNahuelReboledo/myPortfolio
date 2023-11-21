/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         fontFamily:{
           
         },
         keyframes: {
            "slide-down": {
               "0%": {
                  top: "-20rem",
               },
               "100%": {
                  top: "0rem",
               },
            },
         },

         animation: {
            "slide-down": "slide-down 1.5s ease-in-out",
         },
      },
   },
   plugins: [],
};