import React from 'react'

import "../styles/contactus.scss"

const Contactus = () => {
  return (
    <section id='contactUs'>
      <div className="info">
          <h1>India's #1</h1>
          <h2>SMS Marketing and Alerts <br /> Platform</h2>
          <ul>
              <li>Easily send smarter bulk SMS</li>
              <li>100% delivery report</li>
              <li>Easy to use Bulk SMS Portal</li>
              <li>Genuine DLR Reports</li>
              <li>Instant Delivery</li>
          </ul>
      </div>
      <div className="formSubmit">
          <form action="https://public.herotofu.com/v1/4aa4df60-ebae-11ee-a139-63688650e2a2" method="post" accept-charset="UTF-8">
          <input type="text" placeholder='Full Name*' />
          <input type="number" placeholder='Mobile Number*' />
          <input type="text" placeholder='Email ID*' />
          <textarea placeholder='Message' cols="32" rows="7"></textarea>
          <input type="submit" value="Submit" />
          </form>
      </div>
    </section>
  )
}

export default Contactus