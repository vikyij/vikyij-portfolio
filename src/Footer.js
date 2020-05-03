import React, { useState, useEffect } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";


import './footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isChildActive: false
    }
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = (event) => {
    let scrollTop = window.scrollY;

    if (scrollTop > 300)
        this.setState({isChildActive: true});
    else
        this.setState({isChildActive: false});
};


render() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='footer'>
      <div className='footer-icons'>
        <a href='https://www.twitter.com/vikyij' target='_blank'><p className='icon'><FaTwitter /></p></a>
        <a href='https://www.github.com/vikyij' target='_blank'><p className='icon'><FaGithub /></p></a>
        <a href='https://www.linkedin.com/in/victoria-udechukwu-51b2aa135' target='_blank'><p className='icon' target='_blank'><FaLinkedinIn /></p></a>
      </div>
      <p className='footer-p'>VICTORIA UDECHUKWU &copy; 2020</p>
      {
        this.state.isChildActive  ?
          <button type="button" className="btn-info btn scroll" id="scrollToTop" onClick={scrollToTop}><FaArrowUp /></button>
          : null
      }

    </div>
  )
}
  
}

export default Footer;