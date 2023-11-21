import React from "react";
import LogoTNR from "../Icons/LogoTNR/LogoTNR";

function Home() {
   return (
      <section
         className="w-screen flex flex-col justify-center items-center mt-14"
         id="home">
         <div className="">
            <LogoTNR fill={"#22223b"} />
         </div>
         <div className="text-center">
            <h2 className="text-3xl font-semibold">Thiago Nahuel Reboledo</h2>
         </div>
      </section>
   );
}

export default Home;
