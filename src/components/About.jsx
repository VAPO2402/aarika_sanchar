import React from 'react'

import '../styles/about.scss'

import tool from '../assets/tool.png'
import sharing from '../assets/sharing.png'
import stack1 from '../assets/stack1.png'
import search from '../assets/search.png'
import doc from '../assets/doc.png'
import lock from '../assets/lock.png'
import api from '../assets/api.png'

const About = () => {
  return (
    <section className='about'>
        <h1>Welcome to the most</h1>
        <p>comprehensive, powerful and easy to use SMS platform...</p>
        <div className="aboutCards">
            <div className="cardsAbove">
                <div className="cardInfo">
                    <div className="image">
                        <img src={tool} alt="tool" />
                    </div>
                    
                    <span>Bulk SMS Redefined</span>
                    <p>Reach out to millions within seconds. Easily schedule and send personalized texts and regional language messages.</p>
                </div>
                <div className="cardInfo">
                    <div className="image">
                        <img src={sharing} alt="sharing" />
                    </div>
                    
                    <span>Track Campaign Metrics</span>
                    <p>Take the guesswork out of your SMS marketing campaigns! Get granular click reports for all links sent via text.</p>
                </div>
                <div className="cardInfo">
                    <div className="image">
                        <img src={stack1} alt="stack1" />
                    </div>
                    
                    <span>Receive SMS</span>
                    <p>Allow your customers to instantly reach out and get information by just texting into your short/long codes</p>
                </div>
                <div className="cardInfo">
                    <div className="image">
                        <img src={search} alt="search" />
                    </div>
                    
                    <span>Send via App, Excel or Email</span>
                    <p>Send SMS the way you like - via web interface, APIs, Microsoft Excel, email gateway</p>
                </div>
            </div>
            <div className="cardsBelow">
                <div className="cardInfo">
                    <div className="image">
                        <img src={doc} alt="doc" />
                    </div>
                    
                    <span>Enterprise Friendly</span>
                    <p>Get started with multi-user accounts, role management, locked templates, audit trail, bespoke services & more</p>
                </div>
                <div className="cardInfo">
                    <div className="image">
                        <img src={lock} alt="lock" />
                    </div>
                    
                    <span>Mobile Solutions</span>
                    <p>Create and send mobile tickets, discount vouchers, surveys and forms directly to your customers’ phones</p>
                </div>
                <div className="cardInfo">
                    <div className="image">
                        <img src={api} alt="api" />
                    </div>
                    
                    <span>Integrate SMS API's</span>
                    <p>Our simple APIs allow software and web developers to integrate any application with AARIKA SMS</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About