import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Contact, Main, Footer } from './components/index'
import FollowUs from './components/FollowUs/FollowUs'

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
      <FollowUs />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
