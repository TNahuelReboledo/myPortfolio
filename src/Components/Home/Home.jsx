import React from "react";
import LogoTNR from "../Icons/LogoTNR/LogoTNR";

function Home() {
   return (
      <section className="w-screen flex flex-col justify-center items-center" id="home">
         <div>
            <div className="text-center">
               <h1>Thiago Nahuel Reboledo</h1>
            </div>
            <LogoTNR fill={"#4a4e69"} width={"20rem"} height={"20rem"} />
         </div>
      </section>
   );
}

export default Home;
