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
                <p>Your PWA SMS Web to SMS account enables you to log in from any internet enabled computer and communicate instantly via AARIKA SMS text messaging.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We use premium
                </span>
                </h1>
                <p>We give you 99% of PWA sms delivery guaranteed while using our premium PWA SMS gateway.   Additional account features allow you to send messages.</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We provide Hindi SMS
                </span>
                </h1>
                <p>Local language SMS will increase your ROI more than 50% instead of English SMS. Therefore, brands using Unicode SMS to advertise the product in different cities.</p>
            </div>
        </div>
        <div className="featuresBelow">
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    Desktop software
                </span>
                </h1>
                <p>The AARIKA smsplans Text Messenger makes two-way SMSing to a group or individuals even easier. This feature rich software is quick to install and easy to use. The Mobi-gram sdsds</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    We are a reliable SMS
                </span>
                </h1>
                <p>You have to spend huge marketing budget to promote business in this digital marketing world to promote a brand. Therefore, we provide you the best price for PWA SMS service without</p>
            </div>
            <div className="featuresInfo">
                <h1><img src={lock} alt="lock" />
                <span>
                    More than 35,000
                </span>
                </h1>
                <p>Brands using PWA SMS service as their first choice to promote their products & services to reach the target audience in minutes.compose rich media content to create dynamic client sdds</p>
            </div>
        </div>
    </section>
  )
}

export default Features