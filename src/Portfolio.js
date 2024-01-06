import React from 'react'
import './project.css'

const Portfolio = ({ title, id }) => {
  return (
    <div className='project' id={id}>
      <h1 className='project-h1'><b>{title}</b></h1>

      <div className='row my-project'>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img7 container1'>
            <div className="overlay">
              <div>
                <p className="text">SunFi</p>
                <p className="text1">React Js</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://www.sunfi.co/' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img1 container1'>
            <div className="overlay">
              <div>
                <p className="text">E-commerce site</p>
                <p className="text1">React js</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://spcmakeup.netlify.app/' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img2 container1'>
            <div className="overlay">
              <div>
                <p className="text">Covid-19 Tracker</p>
                <p className="text1">React Js/Material-Ui</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://covid-19demography.netlify.app/' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img3 container1'>
            <div className="overlay">
              <div>
                <p className="text">TIC TAC GAME</p>
                <p className="text1">React Js</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://github.com/vikyij/Tic_Tac_react_game' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img4 container1'>
            <div className="overlay">
              <div>
                <p className="text">CALCULATOR</p>
                <p className="text1">React Js</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://github.com/vikyij/React_Calculator' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img5 container1'>
            <div className="overlay">
              <div>
                <p className="text">TODO APP</p>
                <p className="text1">React Js</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://github.com/vikyij/TodoApp' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-6 col-md-4'>
          <div className='bg-img6 container1'>
            <div className="overlay">
              <div>
                <p className="text">JS QUOTE MACHINE</p>
                <p className="text1">JavaScript</p>
                <button type="button" className="btn btn-outline-info my-btn text2">
                  <a href='https://github.com/vikyij/js-quote-machine' target='_blank'>LEARN MORE</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio;