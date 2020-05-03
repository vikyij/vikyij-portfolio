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
            <p className='about-details'>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < IoIosFlash /></h1>
            <h2 className='about-details2'>Fast</h2>
            <p className='about-details'>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < MdPhonelink /></h1>
            <h2 className='about-details2'>Responsive</h2>
            <p className='about-details'>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        </div>

        <div className='col-6 col-md-3'>
          <div className="center">
            <h1 className='logo'> < MdPhonelink /></h1>
            <h2 className='about-details2'>Responsive</h2>
            <p className='about-details'>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        </div>
      </div>

      <div className='myself'>
        <div className='row'>
          <div className='col-sm-6 col-md-5 my-img'>
            <img src={imagesvg} className='image-logo' alt="logo" />
            <h2 className='about-details2'>Who's this guy?</h2>
            <p className='about-details'>I'm a Front-End Developer for ChowNow in Los Angeles, CA.
            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
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