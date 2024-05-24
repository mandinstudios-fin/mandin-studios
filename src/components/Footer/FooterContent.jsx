import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterContent = () => {
  const Nav = () => {
      return (
          <div className='flex shrink-0 gap-20 mt-[10%] text-secondary text-xl font-medium'>
            <div className='flex flex-col gap-2'>
                <p>Fintech</p>
                <p>Web Development</p>
                <p>Cyber Secutiry</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p><NavLink to={`/`}>Home</NavLink></p>
                <p><NavLink to={`/`}>Services</NavLink></p>
                <p><NavLink to={`/`}>Products</NavLink></p>
                <p><NavLink to={`/`}>About</NavLink></p>
                <p><NavLink to={`/contact`}>Contact Us</NavLink></p>
            </div>
          </div>
      )
  }
  return (
      <div className='bg-primary h-full w-full flex justify-center items-center'>
        <Nav />
    </div>
  )
}

export default FooterContent