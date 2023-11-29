import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Stack from "./Components/Stack/Stack";
import Contact from "./Components/Contact/Contact";
import Methodology from "./Components/Methodology/Methodology";
import { MaintenancePage } from "./Components/MaintenancePage/MaintenancePage";

function App() {
   return (
      <>
         {/*DESCOMENTAR EN CASO DE QUE LA WEB ESTE EN MANTENIMIENTO */}
         {/* <MaintenancePage/> */}

         {/* <NavBar /> */}
         <div className="min-h-screen overflow-x-hidden p-5 flex flex-col items-center bg-light dark:bg-dark">
            <Home />
            <Projects />
            <Stack />
            <Methodology />
            <div className="fixed bottom-0">
               <Contact />
            </div>
         </div>
      </>
   );
}

export default App;
