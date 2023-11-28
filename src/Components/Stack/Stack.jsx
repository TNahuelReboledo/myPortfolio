import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import javascript from "../../assets/javascript-1.svg";
import react from "../../assets/react-2.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import figma from "../../assets/figma-5.svg";
import git from "../../assets/git-icon.svg";
import illustrator from "../../assets/illustrator-1.svg";
import npm from "../../assets/npm.svg";
import node from "../../assets/nodejs-icon.svg";
import gitBash from "../../assets/git-bash.svg";
import trello from "../../assets/trello.svg";

function Stack() {
   return (
      <section id="MyStack" className="max-w-screen-md flex flex-col justify-center items-center w-fit">

      <h2>My current stack</h2>

         <div className="grid grid-cols-3 ">
            <div className="icon-container">
               <img className="icons-stack" src={html} alt="" />
            </div>
            <div   className="icon-container">
               <img className="icons-stack" src={css} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={javascript} alt="" />
            </div>
         </div>

         <div className="grid grid-cols-4">
            <div  className="icon-container">
               <img className="icons-stack" src={react} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={tailwindcss} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={figma} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={git} alt="" />
            </div>
         </div>

         <div className="grid grid-cols-3">
            <div  className="icon-container">
               <img className="icons-stack" src={illustrator} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={npm} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={node} alt="" />
            </div>
         </div>

         <div className="grid grid-cols-2 w-3/5">
            <div  className="icon-container">
               <img className="icons-stack" src={gitBash} alt="" />
            </div>
            <div  className="icon-container">
               <img className="icons-stack" src={trello} alt="" />
            </div>
         </div>
      </section>
   );
}

export default Stack;
