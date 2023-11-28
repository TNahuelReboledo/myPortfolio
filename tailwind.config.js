/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         colors:{
            dark: "#003049",
            'dark-10-opacity': "#00304910",
            'dark-50-opacity': "#00304950",
            'dark-75-opacity': "#00304975",
            'dark-85-opacity': "#00304985",
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