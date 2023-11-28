/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         colors:{
            dark: "#003049",
            light:"#F8F7FF",
            "light-10-opacity":"#F8F7FF10",
            "light-50-opacity":"#F8F7FF50",
            "light-75-opacity":"#F8F7FF75",
            yellow:"#FCBF49"
         }
      },
   },
   plugins: [],
};