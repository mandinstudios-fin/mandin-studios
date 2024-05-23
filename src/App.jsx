import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Contact, Main } from './components/index'

function App() {
  useEffect( () => {
    (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
