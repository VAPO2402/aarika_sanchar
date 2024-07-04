import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import '../styles/footer.scss'

const Footer = () => {

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
            alert("The message is sent!");
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Having trouble while sending message.");
          },
        );
    };

  return (
    <section className="footer">
        <div className="footerMain">
            <div className="address">
                <h3>WHERE TO FIND US <br /><span> <br /></span> Address:</h3>
                <p>AARIKA SANCHAR SERVICES, Site No. 04, <br /> Khatha No. 233/1, <br /> Hulimangala Village, <br /> Hulimangala Panchayath, <br /> Jigni Hobli, Anekal Taluk, <br /> Bangalore Urban District Karnataka - 560105</p>
            </div>
            <div className="contactDetails">
                <h1>CONTACT US</h1>
                <p>Email: sales@aarikasvs.com<br />
                    Mobile: +91 88674 02502 <br />  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +91 84470 08855</p>
            </div>
            <div className="reachOut">
                <h1>CONTACT US</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Full Name*' name='userName' required />
                    <input type="number" placeholder='Mobile Number*' name='userNumber' required />
                    <input type="email" placeholder='Email ID*' name='userEmail' required />
                    <textarea placeholder='Message' cols="32" rows="5" name='message' required></textarea>
                    <input type="submit" value="Send" className='submit' />
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