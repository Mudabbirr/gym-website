import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
    <hr />
    <div className="blur footer-blur-1"></div>
    <div className="blur footer-blur-2"></div>
    <div className="Footer">
      <div className="socialmedia">
        <img src={instagram} alt="" />
        <img src={linkedIn} alt="" />
        <img src={github} alt="" />
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
