import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './menu.css'



const Menu = () => {
  return (
      <div className='menu'>

        <nav className="navbar navbar-expand-sm bg-dark navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  HOME
              </Link>

              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  ABOUT
              </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  PROJECTS
              </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  CONTACT
              </Link>
              </li>

            </ul>
          </div>

        </nav>

      </div>

  )
}

export default Menu;