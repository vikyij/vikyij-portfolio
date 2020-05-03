import React from 'react';
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Footer from './Footer'
import Welcome from './Welcome'
import Portfolio from './Portfolio'

import './App.css';

function App() {
  return (
    <div className='App'>      
      <Welcome title="HOME" id="home"/>
      <Menu />
      <About title="ABOUT" id="about"/>
      <Portfolio title="PROJECTS" id="portfolio"/>
      <Contact title="CONTACT" id="contact"/>
      <Footer /> 
    </div>
  );
}

export default App;
