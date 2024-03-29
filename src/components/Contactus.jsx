import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import "../styles/contactus.scss"

const Contactus = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lzwr1wc', 'template_jclrct1', form.current, {
        publicKey: 'Nlt_ayHQm3wLz3ggl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactUs' >
      <div className="info">
          <h1>India's #1</h1>
          <h2>SMS Marketing and Alerts <br /> Platform</h2>
          <ul>
              <li>Easily send smarter bulk SMS</li>
              <li>100% delivery report</li>
              <li>Easy to use Bulk SMS Portal</li>
              <span>
                <li>Genuine DLR Reports</li>
                <li>Instant Delivery</li>
              </span>
          </ul>
      </div>
      <div className="formSubmit">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Request a Call Back <span>Now</span></h1>
            <input type="text" placeholder='Full Name*' name='userName' required />
            <input type="number" placeholder='Mobile Number*' name='userNumber' required />
            <input type="email" placeholder='Email ID*' name='userEmail' required />
            <textarea placeholder='Message' cols="32" rows="7" name='message' required></textarea>
            <input type="submit" value="Send" className='submit' />
          </form>
      </div>
    </section>
  )
}

export default Contactus