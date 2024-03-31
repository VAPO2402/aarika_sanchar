import React from 'react'

import "../styles/support.scss"

import lock from "../assets/lock.png"
import stack from "../assets/stack.png"
import sharing from "../assets/sharing.png"

const Support = () => {
  return (
    <section className='support'>
      <h1>Supported by resilient SMS infrastructure <span>and <br />dedicated customer service.</span></h1>
      <div className="supportInfo">
        <div className="supportContent">
          <h4>
            <img src={lock} alt="lock" />
            Unmatched Delivery
          </h4>
          <p>Our direct collaboration with numerous telecom operators, sophisticated SMS gateway routing, and resilient infrastructure <span> guarantee unparalleled delivery rates, minimal latencies, and round-the-clock support for your messaging needs.</span></p>
        </div>
          
        <div className="supportContent">
          <h4>
            <img src={stack} alt="stack" />
            Customer Support
          </h4>
          <p>Our team of seasoned mobile marketing experts and technology consultants stands ready to assist startups and established enterprises <span>alike in orchestrating top-tier SMS campaigns. We are committed to providing unparalleled support to every client.</span></p>
        </div>
        <div className="supportContent">
          <h4>
            <img src={sharing} alt="sharing" />
            Real-Time Reports
          </h4>
          <p>AARIKA SMS offers authentic, real-time reports facilitating meticulous tracking of the delivery status for every dispatched SMS. <span> Exercise caution against opting for inexpensive bulk SMS service providers in the market.</span></p>
        </div>
      </div>
    </section>
  )
}

export default Support