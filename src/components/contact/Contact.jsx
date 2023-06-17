import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
// import Address from "../../img/address.png";
import Linkedin from "../../img/LinkedIn.png";
import Github from "../../img/GitHub.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oykvrjl",
        "template_ikwxzpu",
        formRef.current,
        "dVjbCgTsnyMDl0XX8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss more.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9205744021
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              prashanttomar198@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              <a
                href="https://www.linkedin.com/in/prashanttomar198"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/prashanttomar198
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a
                href="https://github.com/prashant13031998"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/prashant13031998
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let's catch up !</b> Always available for new and exciting career
            opportunities.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
