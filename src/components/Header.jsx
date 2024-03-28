import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import "../styles/header.scss"
import img from "../assets/aarika.png"

const Header = () => {

  return (
    <nav>
      <div className="logo">
        <HashLink to={"/#contactUs"} className='logoLink'><img src={img} alt="aarika" /></HashLink>
      </div>
      <div className="navLink">
        <span><Link to={"/"}  className='menuItem'>Home</  Link></span>
        <HashLink to={"/#bulkSms"}  className='menuItem'>Bulk   SMS</  HashLink>
        <Link to={"/voiceCallSms"}  className='menuItem'>Voice  Call  SMS</Link>
        <Link to={"/whatsappSms"}   className='menuItem'>Whatsapp     SMS</Link>
        <span><HashLink to={"/  #contactUs"}    className='menuItem'>Contact Us</HashLink></span>
        </div>
    </nav>
  )
}

export default Header