import { SiWhatsapp, SiGmail } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

function Contact() {
   return (
      <section
         id="contact"
         className="w-screen h-12 flex flex-row items-center justify-center gap-5 bg-dark">
         <h2>Get in touch</h2>
         <a className="bg-transparent hover:bg-gradient-to-br from-green-400 to-green-700 contact-link" href="https://wa.me/2656407093">
            <SiWhatsapp size={25} />
         </a>
         <a className="hover:bg-gradient-to-tr from-cyan-400 to-orange-600 contact-link" href="mailto:thiagoreboledo8@gmail.com">
            <SiGmail size={25} />
         </a>
         <a className="hover:bg-gradient-to-br from-sky-800 to-cyan-500 contact-link" href="https://www.linkedin.com/in/thiago-reboledo/">
            <RiLinkedinFill size={25} />
         </a>
      </section>
   );
}

export default Contact;
