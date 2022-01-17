import React from 'react';
import emailjs from 'emailjs-com';

export default function Email() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_b5ow1f5', 'skinnyfeast08@frank', e.target, 'user_m3M0N6zIysYU1g6NlijbT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <label style={{color:'white'}}>Name:</label>
        <input type="text" name="name" />
        <br />
        <br />
        <label style={{color:'white'}}>Email:</label>
        <input type="email" name="email" />
        <br />
        <br />
        <label style={{color:'white'}}>Message:</label>
        <textarea name="message" />
        <br />
        <br />
        <input type="submit" value="Send Message" />
      </form>
    );
  }