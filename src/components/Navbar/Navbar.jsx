import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import mdlogo from '../../assets/images/mdlogo.svg'
import menu from '../../assets/images/menu.svg'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import gsap from 'gsap'

const Navbar = () => {
    const [servicesArrow, setServicesArrow] = useState(false)
    const [procuctsArrow, setProductsArrow] = useState(false)



    const changeServicesArrow = () => {
        console.log("YO")
        gsap.fromTo(".serviceCard", {
            y: '-100%',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 1,
            ease: "power1"
        })
    }

    const changeProductsArrow = () => {

    }

  return (
    <>
        <div className='relative z-30'>
            <nav className='flex justify-between mx-3 tablet:mx-8 laptop:mx-3 laptop:mt-8'>
                <div>
                    <img src={mdlogo}  className='h-[120px] tablet:h-[170px] laptop:h-[200px] w-auto laptop:-mt-10'/>    
                </div>
                
                <div>
                    <ul className='hidden laptop:flex laptop:gap-7 mt-7'>
                        <li onClick={changeServicesArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                            Services <span id='serviceIcon'><ChevronDownIcon className='w-4 h-4 inline-block mb-1'/></span>
                        </li>

                        <li onClick={changeProductsArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                            Products <span id='productIcon'><ChevronDownIcon className='w-4 h-4 inline-block mb-1'/></span>
                        </li>

                        <li className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                            About <span></span>
                        </li>

                        <li className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                            <Link to={'/contact'}>Contact</Link> <span></span>
                        </li>
                    </ul>
                </div>

                <div className='laptop:hidden w-8 tablet:w-12 my-auto laptop:-mr-32 mx-8 text-right'>
                    <img src={menu} />
                </div>

                <div className='hidden laptop:block mt-7'>
                    <button className=' bg-[#385584] text-white font-medium px-6 py-2 text-sm rounded-full whitespace-nowrap'>Onln Coin Live</button>
                </div>

                {/* Cards */}
                <div className='hidden absolute z-10 serviceCard h-[74vh] w-full bg-[#f5f5f5]'>
                </div>

                {/* Service Cards */}
                <div className='absolute z-20 serviceCard h-[70vh] w-full'>
                    <div className='flex gap-5 justify-between h-full w-full p-20 bg-primary'>
                        <div className='w-1/3 py-60  gap-5 border border-[#358584] rounded-3xl text-center'><h1>FinTech</h1></div>
                        <div className='w-1/3 py-60  gap-5 border border-[#358584] rounded-3xl text-center'><h1>Web Development</h1></div>
                        <div className='w-1/3 py-60 border border-[#358584] rounded-3xl text-center'><h1>Cyber Security</h1></div>
                    </div>
                </div>

            </nav>
            {/* Tablet and Mobile Navigation */}
            <div>

            </div>
        </div>
    </>
  )
}

export default Navbar