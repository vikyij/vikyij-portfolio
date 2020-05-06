import React from 'react'
import { MdPhonelink } from 'react-icons/md';
import { IoIosFlash } from "react-icons/io";
import imagesvg from './images/undraw_female_avatar_w3jk.svg'


import './about.css'

const About = ({title, id}) => {
  return (
    <div className='about' id={id}>
      <h1 className='about-h1'><b>{title}</b></h1>

      <div className='row'>
        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < MdPhonelink /></h1>
            <h2 className='about-details2'>Responsive</h2>
            <p className='about-details'>
            Websites and pages that automatically adapts to all screen, whether it's a desktop, laptop, tablet, or smartphone. 
            </p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < IoIosFlash /></h1>
            <h2 className='about-details2'>Fast</h2>
            <p className='about-details'>Websites load with high speed and are lag free.</p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < MdPhonelink /></h1>
            <h2 className='about-details2'>Effective Navigation</h2>
            <p className='about-details'>Navigating through pages is easy,clutter-free and the navigation appears consistent on all browsers and platforms.</p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < MdPhonelink /></h1>
            <h2 className='about-details2'>User Friendly</h2>
            <p className='about-details'>User friendly websites that are simple,easy to use and built with users in mind</p>
          </div>
        </div>
      </div>

      <div className='myself'>
        <div className='row'>
          <div className='col-sm-6 col-md-5 my-img'>
            <img src={imagesvg} className='image-logo' alt="logo" />
            <h2 className='about-details2'>Who's this girl?</h2>
            <p className='about-details'>I'm a Front-End Developer.
            I have three years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript.
            I have passion for creating beautiful,easy to use, user-friendly websites and applications.
           </p>
          </div>

          <div className='col-sm-6 col-md-7 statistics'>
            <div className="progress">
              <div className="progress-bar bg-info">HTML</div>
              <div className="progress-bar2 "></div>
              <div className="progress-bar3 "> 90%</div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info">CSS</div>
              <div className="progress-bar4 "></div>
              <div className="progress-bar5 "> 80%</div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info">BOOTSTRAP</div>
              <div className="progress-bar4 "></div>
              <div className="progress-bar5 "> 80%</div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info">JAVASCRIPT</div>
              <div className="progress-bar6"></div>
              <div className="progress-bar7"> 75%</div>
            </div>

            <div className="progress">
              <div className="progress-bar   bg-info">REACT</div>
              <div className="progress-bar8 "></div>
              <div className="progress-bar9 "> 70%</div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info">UI DESIGN</div>
              <div className="progress-bar8 "></div>
              <div className="progress-bar9 "> 70%</div>
            </div>


            <div className="progress">
              <div className="progress-bar bg-info">IONIC</div>
              <div className="progress-bar10 "></div>
              <div className="progress-bar11 "> 50%</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About;