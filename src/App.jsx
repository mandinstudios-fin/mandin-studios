import { useState } from 'react'
import { Navbar, Contact } from './components/index'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
