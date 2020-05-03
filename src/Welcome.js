import React from 'react'
import welcomesvg from './images/undraw_react_y7wq.svg'
import { FaArrowRight } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";



import './welcome.css'

const Welcome = ({ id }) => {
     return (
          <div className='row welcome' id={id}>
               <div className='col-md-8 col-xs-7'>
                    <img src={welcomesvg} className='welcome-logo' alt="logo" />
               </div>
               <div className='col-md-4 col-xs-5 desc'>
                    <h2 className='welcome-h2'>Hello, I'm Victoria.</h2>
                    <h2 className='welcome-h2'>I'm a Front-End Developer.</h2>
                    <button type="button" className="btn btn-outline-info mt-3 my-btn">
                         <Link
                              activeClass="active"
                              to="portfolio"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              className="nav-link"
                         >
                              View my work 
               <FaArrowRight /></Link>
                    </button>
               </div>


          </div>
     )
}

export default Welcome;