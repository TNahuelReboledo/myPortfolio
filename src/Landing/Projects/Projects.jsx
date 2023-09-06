import React from "react";
import style from "./Projects.module.css";

function Projects() {
   return (
      <>
         <section id="projects">
            <h2 className={style.first_tag_projects}>&#x3C;projects&#x3E;</h2>
            <p className={style.text_no_projects}>
               We're dusting off the projects corner. <br />
               It seems someone hid the cables... <br />
               But we'll find them soon and have them <br />
               here for you!
            </p>
            <h2 className={style.last_tag_projects}>&#x3C;/projects&#x3E;</h2>
         </section>
      </>
   );
}

export default Projects;
