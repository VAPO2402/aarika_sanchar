import React from 'react'

import Contactus from './Contactus'
import Support from './Support'
import About from './About'
import Features from './Features'
import Bulksms from './Bulksms'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <Contactus />
      <Bulksms />
      <Support />
      <About />
      <Features />
      <Footer />
    </main>
  )
}

export default Home