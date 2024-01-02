import React from 'react'
import whitetick from '../../assets/whiteTick.png';
import rightarrow from '../../assets/rightArrow.png'
import { plansData } from '../../data/plansData'
import "./Plans.css"
import { Link } from "react-scroll";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span className="journey-text">YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        <div className='blur plan-blur'></div>
        {plansData.map((plan , i)=>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${ plan.price}</span>
            
            <div className='features'> 
              {plan.features.map((feature , i)=>(
                <div className='feature'>
                  <img src={whitetick}  alt="" />
                  <span key={i} >{feature}</span>
                </div>
              ))}
            </div>
            <div className='see-benefit'> 
              <span>See more Benefit <img src={rightarrow} alt="" width='13px' /></span>
            </div>
            <button className='btn'><Link
          activeClass='active'
          to='join'
          spy={true}
          smooth={true}
          >Join now</Link></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans

