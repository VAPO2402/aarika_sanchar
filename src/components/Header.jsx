import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/header.scss"
import img from "../assets/aarika.png"

const Header = () => {
  return (
    <nav>
    <div className="logo">
        <img src={img} alt="aarika" />
    </div>
    <div className="menu">
        <Link to={"/"} className='menuItem'>Home</Link>
        <Link to={"/#bulkSms"} className='menuItem'>Bulk SMS</Link>
        <Link to={"/voiceCallSms"} className='menuItem'>Voice Call SMS</Link>
        <Link to={"/whatsappSms"} className='menuItem'>Whatsapp SMS</Link>
        <Link to={"/#contactUs"} className='menuItem'>Contact Us</Link>
    </div>
    
    </nav>
  )
}

export default Header