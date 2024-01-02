import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

function Join() {
  const form = useRef() 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9rn5kza', 'template_kpnci6g', form.current, 'g3Ksh-5Jbh4Swqf3A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="join">
      <div className="left-J">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>{" "}
          <span className="level-word">LEVEL UP</span>
        </div>
        <div>
          <span className="level-word">YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-J">
        <form ref={form} className="Email-container"  onSubmit={sendEmail}>
          <input type="email" name="user_email"  placeholder="Enter you Email address"/>
          <button className="btn btn-j">Join Now</button>

        </form>
      </div>
    </div>
  );
}

export default Join;
