import { React, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import "../styles/header.scss"
import img from "../assets/aarika.png"
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <HashLink to={"/#contactUs"} className='logoLink'><img src={img} alt="aarika" /></HashLink>
      </div>
      <div className="menu">
        <Link to={"/"} className='menuItem'>Home</Link>
        <HashLink to={"/#bulkSms"} className='menuItem'>Bulk SMS</HashLink>
        <Link to={"/voiceCallSms"} className='menuItem'>Voice Call SMS</Link>
        <Link to={"/whatsappSms"} className='menuItem'>Whatsapp SMS</Link>
        <HashLink to={"/#contactUs"} className='menuItem'>Contact Us</HashLink>
      </div>
    </nav>
  )
}

export default Header