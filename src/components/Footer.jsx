import React from 'react'

import '../styles/footer.scss'

const Footer = () => {
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
                <form>
                    <input type="text" placeholder='Full Name*' />
                    <input type="number" placeholder='Mobile Number*' />
                    <input type="text" placeholder='Email ID*' />
                    <textarea placeholder='Message' cols="29" rows="5"></textarea>
                    <input type="submit" value="Submit" />
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