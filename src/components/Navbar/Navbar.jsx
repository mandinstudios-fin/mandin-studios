import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import mdlogo from '../../assets/images/mdlogo.svg'
import menu from '../../assets/images/menu.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

    useGSAP(() => {
        gsap.fromTo('#navbar', {
            opacity: 0,
            y: '-30%'
        }, {
            opacity: 1,
            y: 0,
            duration: 1.1
        })
    })

    const [servicesArrow, setServicesArrow] = useState(false)
    const [procuctsArrow, setProductsArrow] = useState(false)

    // MouseLeave States
    const [navMouseLeave, setNavMouseLeave] = useState(false);
    const [serviveMouseLeave, setServiveMouseLeave] = useState(true);

    const changeServicesArrow = () => {
        setServicesArrow(prev => !prev)
    }

    const changeProductsArrow = () => {

    }

    const mouseLeaveFunction = () => {
        // setServicesArrow(false)
    }

  return (
    <>
        <div id='navbar' className='top-0 sticky z-50 border-b border-[#385584]/10 backdrop-blur-sm'>
            <div className='relative' onMouseLeave={mouseLeaveFunction}>
                <nav className='flex justify-between mx-3 tablet:mx-8 laptop:mx-16 laptop:pt-8' >
                    <div className='w-[20%] -mt-10'>  
                        <img src={mdlogo}/>    
                    </div>
                    
                    <div>
                        <ul className='hidden laptop:flex laptop:gap-7 pt-9'>
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

                    <div className='hidden laptop:block mt-9'>
                        <button className=' bg-[#385584] text-white font-medium px-6 py-2 text-sm rounded-full whitespace-nowrap'>Onln Coin Live</button>
                    </div>
                </nav>
                
                {/* Service Cards */}
                <AnimatePresence>
                    {servicesArrow && 
                        <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} exit={{y: "-100vh", opacity: 0}} transition={{ type: "spring", stiffness: 100, damping: 20 }} className='serviceCard absolute z-10 w-full hidden laptop:block overflow-hidden'>
                            <div className='flex gap-5 justify-between h-auto w-full p-20 bg-primary overflow-hidden'>
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }} className='serviceCards w-1/3 py-60  gap-5 border border-[#358584] rounded-3xl text-center'><h1>FinTech</h1></motion.div>
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }} className='serviceCards w-1/3 py-60  gap-5 border border-[#358584] rounded-3xl text-center'><h1>Web Development</h1></motion.div>
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }} className='serviceCards w-1/3 py-60 border border-[#358584] rounded-3xl text-center'><h1>Cyber Security</h1></motion.div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            
            </div>
        </div>
        
    </>
  )
}

export default Navbar