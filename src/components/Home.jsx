import React from 'react'

import Contactus from './Contactus'
import Support from './Support'
import About from './About'
import Features from './Features'
import Bulksms from './Bulksms'

const Home = () => {
  return (
    <main>
      <Contactus />
      <Bulksms />
      <Support />
      <About />
      <Features />
    </main>
  )
}

export default Home