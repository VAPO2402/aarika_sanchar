import React from 'react'

import "../styles/support.scss"

import lock from "../assets/lock.png"
import stack from "../assets/stack.png"
import sharing from "../assets/sharing.png"

const Support = () => {
  return (
    <section className='support'>
      <h1>Backed by robust SMS gateway infrastructure and <br /> fanatic customer support</h1>
      <div className="supportInfo">
        <div className="supportContent">
          <h4>
            <img src={lock} alt="lock" />
            <span>Unmatched Delivery Rates & Speed</span>
          </h4>
          <p>Our direct partnership with multiple telecom operators, intelligent SMS gateway routing and robust infrastructure ensure best-in-class delivery rates, ultra-low latencies and 24x7 support for your texts.</p>
        </div>
          
        <div className="supportContent">
          <h4>
            <img src={stack} alt="stack" />
            <span>Fanatic Customer Support</span>
          </h4>
          <p>Our mobile marketing experts and technology consultants are always at hand to help startups and SMS's run the best SMS campaigns. We pride ourselves on delivering superior support to all our customers, irrespective of the company size!</p>
        </div>
        <div className="supportContent">
          <h4>
            <img src={sharing} alt="sharing" />
            <span>Authentic Real-Time Reports</span>
          </h4>
          <p>AARIKA SMS authentic real-time reports help you track delivery status of every SMS sent. Watch out for cheap bulk SMS service providers in the market who compromise quality and provide fake delivery reports for insanely low prices.</p>
        </div>
      </div>
    </section>
  )
}

export default Support