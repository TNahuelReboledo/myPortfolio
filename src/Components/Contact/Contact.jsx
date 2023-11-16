import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { Tooltip } from "react-tooltip";
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
      navigator.clipboard.writeText(gmailAdress);
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

   const [sended, setSended] = useState(false);

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
               setEmail("");
               setName("");
               setMessage("");
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
            <h2 >Get in touch</h2>

            <div >
               {isHovered1 ? (
                  <img
                     data-tooltip-id="my-tooltip-gmail"
                     data-tooltip-content="Click to copy my email address."
                     onMouseEnter={handleHoveredGmail}
                     src={gmailIcon}
                     alt=""
                  />
               ) : (
                  <img
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
                     data-tooltip-id="my-tooltip-linkedin"
                     data-tooltip-content="go to my LinkedIn."
                     onMouseEnter={handleHoveredLinkedin}
                     src={linkedinIcon}
                     alt=""
                  />
               ) : (
                  <img
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
                     data-tooltip-id="my-tooltip-github"
                     data-tooltip-content="Go to my GitHub."
                     onMouseEnter={handleHoveredGithub}
                     src={githubIcon}
                     alt=""
                  />
               ) : (
                  <img
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

            <div >
               <form ref={form} onSubmit={sendEmail}>
                  <label >Name</label>
                  <input
                     type="text"
                     name="user_name"
                     onChange={handleInputName}
                     value={name}
                     autoComplete="off"
                  />

                  <label>Email</label>
                  <input
                     type="email"
                     name="user_email"
                     onChange={handleInputEmail}
                     value={email}
                     autoComplete="off"
                  />

                  <label>Message</label>
                  <textarea
                     name="message"
                     onChange={handleMessage}
                     value={message}
                     placeholder="If you have any suggestions or you would like me to contact you, let me know here."
                  />

                  {name === "" ||
                  email === "" ||
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                     email
                  ) ||
                  message === "" ? (
                     <p >
                        Correctly filling out all fields is necessary to enable
                        form submission.
                     </p>
                  ) : (
                     <button
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