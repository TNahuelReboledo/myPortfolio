import { DiScrum } from "react-icons/di";

function methodology() {
   return (
      <section
         id="methodology"
         className="mb-12 flex flex-col justify-center items-center">
         <h2>Work methodology</h2>

         <div className="card">
            <div className="flex flex-row justify-between items-center">
               <div>
                  <h3 className="font-semibold text-lg text-dark dark:text-light">SCRUM</h3>

                     <div className="scrum-link">
                        <a href="https://www.scrum.org/">www.scrum.org</a>
                     </div>

               </div>

               <div className="p-1 rounded-md">
                  <DiScrum size={50} className="fill-dark dark:fill-light"/>
               </div>
            </div>

            <p className="my-3 opacity-70">
               Scrum is an agile framework for project development that uses
               short iterations called "sprints" to deliver product increments
               regularly.
            </p>
         </div>
      </section>
   );
}

export default methodology;
