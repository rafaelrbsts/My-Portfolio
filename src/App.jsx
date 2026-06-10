import { useState } from 'react'
import './css/index.css'
import './css/reset.css'
import './css/responsive.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
