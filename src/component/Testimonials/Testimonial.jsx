import React, { useState } from "react";
import "./Testmonial.css";
import "../../App.css";
import rightarrow from "../../assets/rightArrow.png";
import leftarrow from "../../assets/leftArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import {motion} from 'framer-motion';

const Testimonial = () => {
  const [selected, setselected] = useState(0);
   const tLength = testimonialsData.length;

   const transition = {type: 'spring' , duration: 3 }

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span className="testmonial-heading">TESTIMONIALS</span>
        <div className="stroke-text">
          <span>WHAT THEY</span>
        </div>
        <div>
          <span className="say-about">SAY ABOUT US</span>
        </div>
        <span className="paragraph">{testimonialsData[selected].review}</span>
        <span className="status">
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {" - "} {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial= {{opacity:0, left : "3rem"}}
          whileInView={{opacity:1, left : "9rem"}}
          transition={transition}></motion.div>
        <motion.div 
          initial= {{opacity:0, right : "3rem"}}
          whileInView={{opacity:1, right : "10rem"}}
          transition={transition}></motion.div>

        <motion.img 
        key={selected}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0 }}
        // exit={{opacity:0, x:-100}}
        transition={transition}
        
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
        <img 
          onClick={()=>{
            selected === 0
            ? setselected(tLength - 1)
            : setselected((prev)=> prev - 1)
          }}
          src={leftarrow} alt="" />

        <img 
          onClick={()=>{ 
            selected === (tLength-1)
            ? setselected(0)
            : setselected((prev)=>prev + 1)
          }}
          src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
