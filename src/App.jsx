import { useState } from 'react'
import { Navbar, Hero, Services, About, Teams } from './components/index'
import './css/locomotive-scroll.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Services />
    </>
  )
}

export default App
