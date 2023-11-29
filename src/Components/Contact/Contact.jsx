import { SiWhatsapp, SiGmail } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

function Contact() {
   return (
      <section id="contact" className="footer">
         <h2>Get in touch</h2>
         <a href="https://wa.me/2656407093">
            <SiWhatsapp size={25} className="contact-link" />
         </a>
         <a href="mailto:thiagoreboledo8@gmail.com">
            <SiGmail size={25} className="contact-link" />
         </a>
         <a href="https://www.linkedin.com/in/thiago-reboledo/">
            <RiLinkedinFill size={25} className="contact-link" />
         </a>
      </section>
   );
}

export default Contact;
