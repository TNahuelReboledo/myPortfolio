import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Stack from "./Components/Stack/Stack";
import Contact from "./Components/Contact/Contact";
import { MaintenancePage } from "./Components/MaintenancePage/MaintenancePage";

function App() {
   return (
      <>
         {/*DESCOMENTAR EN CASO DE QUE LA WEB ESTE EN MANTENIMIENTO */}
         {/* <MaintenancePage/> */}

         {/* <NavBar /> */}
         <div className="min-h-screen p-3 absolute z-10 w-screen flex flex-col bg-dark">
            <Home />
            <Projects />
            <Stack />
            <div className="fixed bottom-0">
               <Contact />
            </div>
         </div>
      </>
   );
}

export default App;
