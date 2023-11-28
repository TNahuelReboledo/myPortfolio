import React from "react";
import { SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";

function Contact() {
   return (
      <section
         id="contact"
         className="w-screen h-12 flex flex-row items-center justify-center gap-5 bg-dark">
         <h2>Get in touch</h2>
         <a href="https://wa.me/2656407093">
            <SiWhatsapp size={25} />
         </a>
         <a href="mailto:thiagoreboledo8@gmail.com">
            <SiGmail size={25} />
         </a>
         <a href="https://www.linkedin.com/in/thiago-reboledo/">
            <SiLinkedin size={25} />
         </a>
      </section>
   );
}

export default Contact;
