import { useState } from "react";
import miPersonaje from "../../assets/miPersonaje-removebg-preview.png";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Home() {

   const [isLight, setIsLight] = useState(true);

   const changeTheme = () => {
      setIsLight(!isLight);
   }

   return (
      <section
         id="home"
         className="max-w-screen-md flex flex-col items-center">
         <div className="w-full flex justify-end">
            <button onClick={changeTheme}>
               {
                  isLight ? 
                  <BsSunFill size={25} color="#F8F7FF" className=""/> :
                  <BsMoonFill size={25} color="#F8F7FF" />
               }
            </button>
         </div>

         <div className="w-32 h-32 flex flex-row justify-center rounded-full bg-gradient-to-b from-dark to-light-50-opacity p-1">
            <img src={miPersonaje} className="rounded-full" alt="" />
         </div>

         <h2 className="font-semibold text-2xl">Thiago N.R.</h2>
         <p className="text-center text-sm font-light text-light-75-opacity">
            I’m a passionate web developer, design UX/UI and graphic designer.
         </p>

         <hr/>

         <p>
            I transform concepts into elegant and responsive interfaces. My
            passion for design and programming is reflected in every line of
            code I write and in every pixel I place.
         </p>

         <div className="w-screen grid grid-cols-1 place-items-center gap-3 my-6">

            <button className="job-btn">
               Looking for job
            </button>
            <button className="resume-btn">
               Resume
            </button>
         </div>
      </section>
   );
}

export default Home;
