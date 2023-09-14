import React from "react";
import Rectangle4 from "../../assets/Rectangle4.svg";
import TNR_logo from "../../assets/TNR.svg";
import Portfolio_text from "../../assets/PORT FOL IO.svg";
import style from "./Home.module.css";

function Home() {
   return (
      <>
         <section id="home">
            <img className={style.bg_blur1} src={Rectangle4} alt="" />

            <div className={style.home_page_container}>

               <div className={style.logo_container}>

                  <img className={style.logo_TNR} src={TNR_logo} alt="logo TNR" />

                  <h1 className={style.name_tnr}>Thiago Nahuel Reboledo</h1>
                  
               </div>

               <img className={style.portfolio_text} src={Portfolio_text} />
            </div>
         </section>
      </>
   );
}

export default Home;
