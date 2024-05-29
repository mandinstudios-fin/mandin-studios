import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Contact, Main, Footer, WebDevelopment, Fintech, CyberSecurity } from './components/index'
import ErrorPage from './components/ErrorPage/ErrorPage'
import FollowUs from './components/FollowUs/FollowUs'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <FollowUs />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/services/webdevelopment' element={<WebDevelopment />} />
        <Route path='/services/fintech' element={<Fintech />} />
        <Route path='/services/cybersecurity' element={<CyberSecurity />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
