import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { Tooltip } from "react-tooltip";
import style from "./Contact.module.css";
import gmailIcon from "../../assets/gmail.svg";
import gmailIconColor from "../../assets/gmailColor.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import linkedinIconColor from "../../assets/linkedinColor.svg";
import githubIcon from "../../assets/github.svg";
import githubIconColor from "../../assets/githubColor.svg";

function Contact() {
   const [isHovered1, setIsHovered1] = useState(true);
   const [isHovered2, setIsHovered2] = useState(true);
   const [isHovered3, setIsHovered3] = useState(true);

   const handleHoveredGmail = () => {
      setIsHovered1(!isHovered1);
   };

   const handleHoveredLinkedin = () => {
      setIsHovered2(!isHovered2);
   };

   const handleHoveredGithub = () => {
      setIsHovered3(!isHovered3);
   };

   const handleGmail = () => {
      const gmailAdress = "thiagoreboledo8@gmail.com";
      navigator.clipboard.writeText(gmailAdress)
      toast.success(`copied correctly`);
   };

   const handleNavigatorLinkedin = () => {
      setTimeout(
         () =>
            window.open(
               "https://www.linkedin.com/in/thiago-reboledo-816292213/",
               "_blank"
            ),
         3000
      );
      toast.loading(`Redirecting to my LinkedIn profile`);
   };

   const handleNavigatorGitHub = () => {
      setTimeout(
         () => window.open("https://github.com/TNahuelReboledo", "_blank"),
         3000
      );
      toast.loading(`Redirecting to my GitHub profile`);
   };

   //Form config

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_n3gicvn",
            "template_s6a7q1n",
            form.current,
            "QL-dGHzgqh7VmjVjZ"
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   const [name, setName] = useState("");

   const handleInputName = (event) => {
      setName(event.target.value);
   };

   const [email, setEmail] = useState("");

   const handleInputEmail = (event) => {
      setEmail(event.target.value);
   };

   const [message, setMessage] = useState("");

   const handleMessage = (event) => {
      setMessage(event.target.value);
   };

   return (
      <div>
         <section id="contact">
            <h2 className={style.get_in_touch}>Get in touch</h2>

            <div className={style.contact_icons}>
               {isHovered1 ? (
                  <img
                     className={style.gmail}
                     data-tooltip-id="my-tooltip-gmail"
                     data-tooltip-content="Click to copy my email address."
                     onMouseEnter={handleHoveredGmail}
                     src={gmailIcon}
                     alt=""
                  />
               ) : (
                  <img
                     className={style.gmailColor}
                     data-tooltip-id="my-tooltip-gmail"
                     data-tooltip-content="Click to copy my email address."
                     onMouseLeave={handleHoveredGmail}
                     onClick={handleGmail}
                     src={gmailIconColor}
                     alt=""
                  />
               )}
               <Tooltip id="my-tooltip-gmail" />


               {isHovered2 ? (
                  <img
                     className={style.linkedin}
                     data-tooltip-id="my-tooltip-linkedin"
                     data-tooltip-content="go to my LinkedIn."
                     onMouseEnter={handleHoveredLinkedin}
                     src={linkedinIcon}
                     alt=""
                  />
               ) : (
                  <img
                     className={style.linkedinColor}
                     data-tooltip-id="my-tooltip-linkedin"
                     data-tooltip-content="go to my LinkedIn."
                     onMouseLeave={handleHoveredLinkedin}
                     onClick={handleNavigatorLinkedin}
                     src={linkedinIconColor}
                     alt=""
                  />
               )}
               <Tooltip id="my-tooltip-linkedin" />

               {isHovered3 ? (
                  <img
                     className={style.github}
                     data-tooltip-id="my-tooltip-github"
                     data-tooltip-content="Go to my GitHub."
                     onMouseEnter={handleHoveredGithub}
                     src={githubIcon}
                     alt=""
                  />
               ) : (
                  <img
                     className={style.githubColor}
                     data-tooltip-id="my-tooltip-github"
                     data-tooltip-content="Go to my GitHub."
                     onMouseLeave={handleHoveredGithub}
                     onClick={handleNavigatorGitHub}
                     src={githubIconColor}
                     alt=""
                  />
               )}
               <Tooltip id="my-tooltip-github" />

            </div>

            <div className={style.form_container}>
               <form className={style.form} ref={form} onSubmit={sendEmail}>
                  <label className={style.label}>Name</label>
                  <input
                     type="text"
                     name="user_name"
                     onChange={handleInputName}
                     value={name}
                     autoComplete="off"
                  />

                  <label className={style.label}>Email</label>
                  <input
                     type="email"
                     name="user_email"
                     onChange={handleInputEmail}
                     value={email}
                     autoComplete="off"
                  />

                  <label className={style.label}>Message</label>
                  <textarea
                     name="message"
                     onChange={handleMessage}
                     value={message}
                     placeholder="If you have any suggestions or you would like me to contact you, let me know here."
                  />

                  {name === "" || email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) )|| message === "" ? 
                     <p className={style.paragraph_non_button}>Correctly filling out all fields is necessary to enable form submission.</p>
                  : (
                     <button
                        className={style.button_submit}
                        type="submit"
                        value="Send">
                        send
                     </button>
                  )}
               </form>
            </div>
         </section>

         <Toaster position="bottom-right" />
      </div>
   );
}

export default Contact;
