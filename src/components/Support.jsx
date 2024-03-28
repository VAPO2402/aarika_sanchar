import React from 'react'

import "../styles/support.scss"

import lock from "../assets/lock.png"
import stack from "../assets/stack.png"
import sharing from "../assets/sharing.png"

const Support = () => {
  return (
    <section className='support'>
      <h1>Backed by robust SMS gateway infrastructure <span> and <br /> fanatic customer support</span></h1>
      <div className="supportInfo">
        <div className="supportContent">
          <h4>
            <img src={lock} alt="lock" />
            Unmatched Delivery <span>Rates  & Speed</span>
          </h4>
          <p>Our direct partnership with multiple telecom operators, intelligent SMS gateway routing and robust infrastructure <span>ensure best-in-class delivery rates, ultra-low latencies and 24x7 support for your texts.</span> </p>
        </div>
          
        <div className="supportContent">
          <h4>
            <img src={stack} alt="stack" />
            <span>Fanatic </span>Customer Support
          </h4>
          <p>Our mobile marketing experts and technology consultants are always at hand to help startups and SMS's run the best <span> SMS campaigns. We pride ourselves on delivering superior support to all our customers, irrespective of the company size!</span></p>
        </div>
        <div className="supportContent">
          <h4>
            <img src={sharing} alt="sharing" />
            <span>Authentic </span>Real-Time Reports
          </h4>
          <p>AARIKA SMS authentic real-time reports help you track delivery status of every SMS sent. Watch out for cheap bulk SMS service <span> providers in the market who compromise quality and provide fake delivery reports for insanely low prices. </span></p>
        </div>
      </div>
    </section>
  )
}

export default Support