import { useEffect, useState } from "react";
import miPersonaje from "../../assets/miPersonaje-removebg-preview.png";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Home() {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      if(theme === 'dark'){
         document.querySelector('html').classList.add('dark');
      }else{
         document.querySelector('html').classList.remove('dark');
      }
   }, [theme]);

   const changeTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };

   return (
      <section id="home" className="max-w-screen-md flex flex-col items-center">
         <div className="w-full flex justify-end mr-8">
            <button onClick={changeTheme}>
               {theme === 'light' ? (
                  <BsSunFill size={30} className="fill-dark" />
               ) : (
                  <BsMoonFill size={30} className=" dark:fill-light" />
               )}
            </button>
         </div>

         <div className="perfil-img-container">
            <img src={miPersonaje} className="rounded-full" alt="character thiago" />
         </div>

         <h2 className="">Thiago N.R.</h2>
         <p className="text-center text-sm font-light text-dark-75-opacity dark:text-light-75-opacity">
            I’m a passionate web developer, design UX/UI and graphic designer.
         </p>

         <hr />

         <p>
            I transform concepts into elegant and responsive interfaces. My
            passion for design and programming is reflected in every line of
            code I write and in every pixel I place.
         </p>

         <div className="w-screen grid grid-cols-1 place-items-center gap-3 my-6">
            <button className="job-btn">Looking for job</button>
            <button className="resume-btn">Resume</button>
         </div>
      </section>
   );
}

export default Home;
