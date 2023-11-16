import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { CgMenu , CgMenuRightAlt  , CgClose } from "react-icons/cg";


function NavBar() {
   const [menu, setMenu] = useState(false);

   const menuToggle = () => {
      setMenu(!menu);
   };

   return (
      <header
         className={`flex flex-col justify-center items-center text-[#f2e9e4] transition-all duration-200 ${menu ? "bg-[#22223b]":"bg-transparent"}`}>
         <div className="flex w-screen flex-row justify-end items-end">
            <button
               onClick={menuToggle}
               className={`mt-4 mr-4 ${menu ? "" : "text-[#22223b]"}`}>

                  {menu ?
               <CgClose size={45}/> :
               <CgMenuRightAlt  size={45} />
            }
            </button>
         </div>

         <nav
            className={`w-screen flex flex-col justify-center items-center transition-all duration-200 ${
               menu ? "h-[40vh] opacity-1 shadow-2xl visible" : "opacity-0 h-0 invisible"
            }`}>
            <ul   >
               <li>
                  <Link smooth={true} duration={500} to="home">
                     home
                  </Link>
               </li>

               <li>
                  <Link smooth={true} duration={500} to="projects">
                     projects
                  </Link>
               </li>

               <li>
                  <Link smooth={true} duration={500} to="about">
                     about
                  </Link>
               </li>

               <li>
                  <Link smooth={true} duration={500} to="contact">
                     contact
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default NavBar;
