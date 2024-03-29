import React from 'react'

import '../styles/features.scss'

import lock from '../assets/lock.png'

const Features = () => {
  return (
    <section className='features'>
        <h1>Our Features</h1>
        <div className="featuresAbove">
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    Send SMS text
                </span>
                </h1>
                <p>Your AARIKA SMS Web to SMS account facilitates access from any internet-enabled device for instantaneous communication via AARIKA SMS text messaging.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We use premium
                </span>
                </h1>
                <p>We guarantee 99% AARIKA SMS delivery reliability through our premium PWA SMS gateway. Enhanced account functionalities enable message transmission.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We provide Hindi SMS
                </span>
                </h1>
                <p>Utilizing local language SMS yields over a 50% increase in ROI compared to English SMS, especially beneficial for brands employing Unicode SMS across diverse locales.</p>
            </div>
        </div>
        <div className="featuresBelow">
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    Desktop software
                </span>
                </h1>
                <p>The AARIKA Text Messenger streamlines two-way SMS communication with groups or individuals, boasting feature-rich software that is swift to install and user-friendly.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We are a reliable SMS
                </span>
                </h1>
                <p>The AARIKA Text Messenger streamlines two-way SMS communication with groups or individuals, boasting feature-rich software that is swift to install and user-friendly.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    More than 35,000
                </span>
                </h1>
                <p>Brands prioritize AARIKA SMS service as their primary tool for swiftly reaching target audiences, leveraging dynamic client engagement through rich media content creation.</p>
            </div>
        </div>
    </section>
  )
}

export default Features