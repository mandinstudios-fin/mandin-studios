import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from './components/Lenis/Lenis'
import { Navbar, Contact, Main, Footer, WebDevelopment, Fintech, CyberSecurity } from './components/index'
import ErrorPage from './components/ErrorPage/ErrorPage'
import FollowUs from './components/FollowUs/FollowUs'
import RoutedAbout from './components/RoutedAbout/RoutedAbout'
import Products from './components/Products/Products'

function App() {

  return (
    <Lenis>
      <FollowUs />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<RoutedAbout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services/webdevelopment' element={<WebDevelopment />} />
        <Route path='/services/fintech' element={<Fintech />} />
        <Route path='/services/cybersecurity' element={<CyberSecurity />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Lenis>
  )
}

export default App
