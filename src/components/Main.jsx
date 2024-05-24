import React, { useEffect } from 'react'
import { Hero, Services, About, Teams, Footer } from './index'

const Main = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })

  return (
    <>
      <Hero />
      <About />
      <Teams />
      <Services />
    </>
  )
}

export default Main