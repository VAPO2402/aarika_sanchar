import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import '../styles/footer.scss'

const Footer = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sznr43k', 'template_8iidebq', form.current, {
        publicKey: 'MkMcdsR0dQJY-SeYd',
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
    <section className="footer">
        <div className="footerMain">
            <div className="address">
                <h3>WHERE TO FIND US <br /> Address:</h3>
                <p>#6, Bettdasanapura Main Raod,<br /> Next to Andhra Bank, <br /> Electronic City, <br />Phase-1 Bangalore 560100</p>
            </div>
            <div className="contactDetails">
                <h1>CONTACT US</h1>
                <p>Email: sales@pwasms.com <br />
                    Mobile: (+91) 77 6072 4765</p>
            </div>
            <div className="reachOut">
                <h1>CONTACT US</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Full Name*' name='userName' />
                    <input type="number" placeholder='Mobile Number*' name='userNumber' />
                    <input type="email" placeholder='Email ID*' name='userEmail' />
                    <textarea placeholder='Message' cols="32" rows="7" name='message'></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
        <div className="footerCopyright">
            Copyright © 2021 AARIKA. All rights reserved.
        </div>
    </section>
  )
}

export default Footer