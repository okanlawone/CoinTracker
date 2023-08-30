import React from 'react'

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to get in touch with us.</p>
      <form className="contact-form" action="https://formspree.io/f/xeqbgywd"
        method="POST" >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button className='send-button' type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
