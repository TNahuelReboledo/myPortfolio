import jsVector from "../../assets/jsVector.svg";
import htmlVector from "../../assets/htmlVector.svg";
import cssVector from "../../assets/cssVector.svg";
import nodeVector from "../../assets/nodeVector.svg";
import reactVector from "../../assets/reactVector.svg";
import tailwindVector from "../../assets/tailwindVector.svg";
import figmaVector from "../../assets/figmaVector.svg";
import gitVector from "../../assets/git.svg";

function About() {
   return (
      <>
         <section id="about">
            <div>
               <h2>I'm Thiago!</h2>
               <h5>&lt;developer/&gt;</h5>
               <p>
                  I transform concepts into elegant and responsive interfaces.
                  My
                  <br />
                  passion for design and programming is reflected in every line
                  of
                  <br />
                  code I write and in every pixel I place.
               </p>
            </div>

            <h4>Skills</h4>
            <div>
               <div>
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
