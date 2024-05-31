import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiMapPin } from "react-icons/ci";
import footerbg from '../../assets/images/footerbg.png'
import mdlogowhite from '../../assets/images/mdlogowhite.png'

const FooterContent = () => {
  const Nav = () => {
      return (
          <div className='grid laptop:grid-cols-3 gap-16 laptop:gap-0 items-center shrink-0 laptop:text-xl font-medium'>
            <div className='flex flex-col gap-2 text-[#f5f5f5]/80'>
              <p><NavLink to={`/services/fintech`}>Fintech</NavLink></p>
              <p><NavLink to={`/services/webdevelopment`}>Web Development</NavLink></p>
              <p><NavLink to={`/services/cybersecurity`}>Cyber Secutiry</NavLink></p>
            </div>

            <div className='flex flex-col gap-2 text-[#f5f5f5]/80'>
                <p><NavLink to={`/`}>Home</NavLink></p>
                <p><NavLink to={`/products`}>Products</NavLink></p>
                <p><NavLink to={`/contact`}>Contact Us</NavLink></p>
            </div>

            <div className='flex flex-col gap-2 text-[#f5f5f5]/80'>
                <p className='text-justify'><CiMapPin className='inline'/>Plot No. 61,</p>
                <p className='text-justify'>Navanirman Nagar, Jubliee Hills,</p>
                <p className='text-justify'>Hyderabad, Telangana, 500033</p>
            </div>
          </div>
      )
  }
  return (
      <div className='bg-[#002B55] h-full w-full flex flex-col justify-center items-center' style={{backgroundImage: `url(${footerbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='mb-12 w-[50%] tablet:w-[40%] laptop:w-auto'>
          <img src={mdlogowhite}/>
        </div>
        <Nav />
      </div>
  )
}

export default FooterContent