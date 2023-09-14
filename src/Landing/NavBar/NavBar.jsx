import React from "react";
import style from "./NavBar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
   return (
      <div className={style.navbar_container}>
         <nav className={style.navbar}>
            
               <Link className={style.link} smooth={true} duration={500} to="home">
                  home
               </Link>
            
               <Link className={style.link} smooth={true} duration={500} to="projects">
                  projects
               </Link>
            
               <Link className={style.link} smooth={true} duration={500} to="about">
                  about
               </Link>
            
               <Link className={style.link} smooth={true} duration={500} to="contact">
                  contact
               </Link>
         </nav>
      </div>
   );
}

export default NavBar;
