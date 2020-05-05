import React, {useState} from 'react'
import imagesvg from './images/undraw_feedback_h2ft.svg'


import './contact.css'

const Contact = ({title, id}) => {
   const [inputData, setInputData] = useState({name: '', email: '', message: '' })
   const [contactsData, setContactsData] = useState([])


   function handleChange(event) {
     const {name, value} = event.target;
     setInputData({...inputData, [name]: value})
   }

   function handleSubmit(event) {
    event.preventDefault()
    setContactsData(prevContacts => [...prevContacts, inputData])
    setInputData({name: '', email: '', message: '' })
}

const contacts = contactsData.map(contact => <p key={contact.email}>Hello, {contact.name}. Your message has been received. 
I'll get back to you as soon as possible</p>)

  return (
    <div className='contact' id={id}>
      <h1 className='contact-h1'><b>{title}</b></h1>

      <div className='row'>
        <div className='col-md-6'>
          <img src={imagesvg} className='contact-logo' alt="logo" />
        </div>

        <div className='col-md-6'>
          <p className='form-text'>Thanks for taking the time to reach out. Have a question or want to work together?</p>

          <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/mknqnvkq">
            
              <input type="text" name='name' value={inputData.name} onChange={handleChange} className="form-control" placeholder="Name" required/>
             
              <input type="email" name='email' value={inputData.email} onChange={handleChange} className="form-control" placeholder="Email" required/>

              <textarea name='message' value={inputData.message} onChange={handleChange}  className="form-control" rows="5" id="comment" placeholder='Your Message' required/>
                
              <button type="submit" className="btn btn-info px-3">Submit</button>
            </form>
          
            {contacts}
              </div>
            </div>

       </div>
  )
}

export default Contact;