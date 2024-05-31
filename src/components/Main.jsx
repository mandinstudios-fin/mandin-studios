import React, { useEffect } from 'react'
import { Hero, Services, About, Teams, Vision } from './index'

const Main = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })

  return (
    <>
      <Hero />
      <About />
      <Teams />
      <Vision />
      <Services />
    </>
  )
}

export default Main