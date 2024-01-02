import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Hero_image from "../../assets/hero_imagee.png";
import Heart from "../../assets/heart.png";
import Hero_image_back from "../../assets/hero_image_backk.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'
import Join from "../Join/Join";
import { Link } from "react-scroll";

const Hero = () => {
   
   const transition = {type: 'spring' , duration: 3 }
   const mobileHeartrate = window.innerWidth<=768 ? true: false;
   const mobileCalories = window.innerWidth<=768 ? true: false;
   const mobileCaloriess8 = window.innerWidth<=915 ? true: false;
   const mobileHero = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <motion.div 
           initial={{left: '220px'}}
           whileInView={{left : '5px'}}
           transition={{...transition, type: "tween"}}
          >
          </motion.div>
          <span>The Best Fitness Club in the Town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text shape">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="simple-text">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span><NumberCounter end={10}  start={0} delay='3' preFix='+'/></span>
            <span>Experts Couches</span>
          </div>
          <div>
          <span><NumberCounter end={100}  start={1} delay='4' preFix='+'/></span>
            <span>Members Joined</span>
          </div>
          <div>
          <span><NumberCounter end={150}  start={1} delay='4' preFix='+'/></span>
            <span>Fitness Program</span>
          </div>
        </div>

        <div className="hero-buttons">
          
          <button className="btn"><Link
          activeClass='active'
          to='join'
          spy={true}
          smooth={true}
          >Get Started</Link></button>
          <button className="btn"><Link
          activeClass='active'
          to='programs'
          spy={true}
          smooth={true}
          >Learn More</Link></button>
        </div>
        
      </div>

      <div className="right-h">
        <button className="btn button"><Link
          activeClass='active'
          to='join'
          spy={true}
          smooth={true}
          >Join now</Link></button>

        <motion.div 
        initial= {{right : "-1rem"}}
        whileInView={{right: mobileHeartrate? "11rem" : "4rem"}}
        transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <motion.img 
          initial= {{right: mobileHero? "-1rem" : "1rem"}}
          whileInView={{right: mobileHero? "7rem" : "15rem"}}
          transition={transition}
        src={Hero_image_back} alt="" className="Hero-image-back" />


        <motion.img 
          initial= {{right: mobileHero? "-7rem" : "1rem"}}
          whileInView={{right: mobileHero? "-5rem" : "8rem"}}
          transition={transition}
        src={Hero_image} alt="" className="Heroo-image" />
      
        
        <motion.div 
          initial= {{right : "-1rem"}}
          whileInView={{right: mobileCalories? "7rem" : mobileCaloriess8 ? "21rem" :'4rem'}}
          transition={transition}
          
          className="Calories">
            <img src={Calories} alt="" className="calories-img" />
            <div>
              <span>Calories</span>
              <span>Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
       
      </div>
    </div>
  );
};

export default Hero;
