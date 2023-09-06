import React from "react";
import style from "./NavBar.module.css"

function NavBar() {
   return (
      <div>
         <header className={style.navbar}>
            <a href="#home">home</a>
            <a href="#projects">projects</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
         </header>
      </div>
   );
}

export default NavBar;
