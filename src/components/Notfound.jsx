import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
    <h1>Error 404!</h1>
    <h2>Page Not Found</h2>

    <Link to={"/"} className='menuItem'>Home</Link>
    </>
    
  )
}

export default Notfound