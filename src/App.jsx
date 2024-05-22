import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Contact, Main } from './components/index'
import gsap from 'gsap'

function App() {
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
