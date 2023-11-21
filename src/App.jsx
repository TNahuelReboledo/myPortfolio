import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { MaintenancePage } from "./Components/MaintenancePage/MaintenancePage";

function App() {

   return (
      <>
         <MaintenancePage/>
         {/* <NavBar />
         <div className="absolute z-10">
         <Home />
         <Projects />
         <About />
         <Contact />
         </div> */}
      </>
   );
}

export default App;
