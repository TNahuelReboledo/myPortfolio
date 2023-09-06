import "./App.css";
import NavBar from "./Landing/NavBar/NavBar";
import Home from "./Landing/Home/Home";
import Projects from "./Landing/Projects/Projects";
import About from "./Landing/About/About";
import Contact from "./Landing/Contact/Contact";

function App() {

   return (
      <>
         <NavBar />
         <Home />
         <Projects />
         <About />
         <Contact />
      </>
   );
}

export default App;
