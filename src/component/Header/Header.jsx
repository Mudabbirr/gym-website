import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-scroll';
import Logo from '../../assets/Logo.png'
import Bars from '../../assets/bars.png'
import Program from '../Programs/Program';


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setmenuOpen] = useState(false);


  return (
    <div className="header">
      <img className='logo' src={Logo} alt="" />

      {(menuOpen === false && mobile === true) ? (
        <div onClick={()=>setmenuOpen(true)}>
          <img src={Bars} alt="" width="30px" height="25px"/>
        </div>
      ) :
        <ul className='header-menu'>
          <li><Link
            onClick={()=>setmenuOpen(false)}
            activeClass='active'
            to='hero'
            spy={true}
            smooth={true}>Home</Link></li>

            <li><Link
            onClick={()=>setmenuOpen(false)}
            activeClass='active'
            to='programs'
            spy={true}
            smooth={true}>Programs</Link></li>

            <li><Link
            onClick={()=>setmenuOpen(false)}
            activeClass='active'
            to='reasons'
            spy={true}
            smooth={true}>Why us</Link></li>

            <li><Link
            onClick={()=>setmenuOpen(false)}
            activeClass='active'
            to='plans-container'
            spy={true}
            smooth={true}>Plans</Link></li>

        

          <li><Link
           onClick={()=>setmenuOpen(false)}
           activeClass='active'
          to='testimonials'
          spy={true}
          smooth={true}

          >Testimonals</Link></li>
        </ul>
      }

    </div>
  )
}

export default Header
