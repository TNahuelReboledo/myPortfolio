import React from "react";
import reactangle1 from "../../assets/Rectangle 1.svg";
import jsVector from "../../assets/jsVector.svg";
import htmlVector from "../../assets/htmlVector.svg";
import cssVector from "../../assets/cssVector.svg";
import nodeVector from "../../assets/nodeVector.svg";
import reactVector from "../../assets/reactVector.svg";
import tailwindVector from "../../assets/tailwindVector.svg";
import figmaVector from "../../assets/figmaVector.svg";
import gitVector from "../../assets/git.svg";
import style from "./About.module.css";

function About() {
   return (
      <>
         <section id="about">
            <img className={style.bg_about} src={reactangle1} alt="" />
            <div className={style.about_container}>
               <h2 className={style.my_name}>I'm Thiago!</h2>
               <h5 className={style.dev_tag}>&lt;developer/&gt;</h5>
               <p className={style.text_about_me}>
                  I transform concepts into elegant and responsive interfaces.
                  My
                  <br />
                  passion for design and programming is reflected in every line
                  of
                  <br />
                  code I write and in every pixel I place.
               </p>
            </div>

            <h4 className={style.skills_title}>Skills</h4>
            <div className={style._container_}>
               <div className={style.icons_skills_container}>
                  <img src={jsVector} alt="" />
                  <img src={htmlVector} alt="" />
                  <img src={cssVector} alt="" />
                  <img src={nodeVector} alt="" />
                  <img src={reactVector} alt="" />
                  <img src={tailwindVector} alt="" />
                  <img src={figmaVector} alt="" />
                  <img src={gitVector} alt="" />
               </div>
            </div>
         </section>
      </>
   );
}

export default About;
