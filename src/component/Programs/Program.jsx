import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import Header from "../Header/Header";
import { Link } from "react-scroll";

const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="Programs-Headers">
        <span className="stroke-text">Explore our</span>
        <span className="program-word">Programs</span>
        <span className="stroke-text">to Shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span><Link
          activeClass='active'
          to='join'
          spy={true}
          smooth={true}
          >Join now</Link></span>
              <Link
                activeClass='active'
                to='join'
                spy={true}
                smooth={true}
              ><img src={RightArrow} alt="" /></Link>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Program;
