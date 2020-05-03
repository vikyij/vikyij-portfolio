import React from 'react'
import imagesvg from './images/undraw_feedback_h2ft.svg'


import './contact.css'

const Contact = ({title, id}) => {
  return (
    <div className='contact' id={id}>
      <h1 className='contact-h1'><b>{title}</b></h1>

      <div className='row'>
        <div className='col-md-6'>
          <img src={imagesvg} className='contact-logo' alt="logo" />
        </div>

        <div className='col-md-6'>
          <p className='form-text'>Thanks for taking the time to reach out. Have a question or want to work together?</p>

          <form>
            
              <input type="text" className="form-control" placeholder="Name" required/>
             
              <input type="email" className="form-control" placeholder="Email" required/>

              <textarea className="form-control" rows="5" id="comment" placeholder='Your Message' required/>
                
              <button type="submit" className="btn btn-info px-3">Submit</button>
            </form>

              </div>
            </div>

       </div>
  )
}

export default Contact;