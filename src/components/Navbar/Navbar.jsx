import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import mdlogo from '../../assets/images/mdslogo.png'
import menu from '../../assets/images/menu.svg'
import { animations } from '../../assets/index'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Lottie from "lottie-react";

const Navbar = () => {
    const [ fintechAnimation, webdevAnimation, cyberAnimation ] = animations;

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
    const [isBurgerMenu, setIsBurgerMenu] = useState(false)

    const changeServicesArrow = () => {
        setServicesArrow(prev => !prev)
    }

    const changeProductsArrow = () => {
        setServicesArrow(false)
    }

    const handleBurgerMenu = () => {
        setIsBurgerMenu(prev => !prev)
    }

    const mouseLeaveFunction = () => {
        setServicesArrow(false)
    }

    useEffect(() => {
        if(servicesArrow || isBurgerMenu) {
            document.querySelector("body").style.position = "fixed";
        } else {
            document.querySelector("body").style.position = "";
        }

        return () => {
            document.body.style.position = "";
        };
    },[servicesArrow, isBurgerMenu])

  return (
    <>
        <div id='navbar' className='sticky z-[999] border-b border-[#385584]/10 backdrop-blur-sm'>
            <div className='relative' onMouseLeave={mouseLeaveFunction}>
                <nav className='flex items-center justify-between mx-3 tablet:mx-8 laptop:mx-16 laptop:py-1' >
                    <div className='w-[40%] laptop:w-[10%]'>
                        <img src={mdlogo}/>
                    </div>

                    
                    <div>
                        <ul className='hidden laptop:flex laptop:gap-7'>
                            <li onClick={changeProductsArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                               <Link to={`/`}>Home</Link>
                            </li>

                            <li onClick={changeServicesArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                                Services <span id='serviceIcon'>{servicesArrow ? <ChevronUpIcon className='w-4 h-4 inline-block mb-1'/> : <ChevronDownIcon className='w-4 h-4 inline-block mb-1'/>}</span>
                            </li>

                            <li onClick={changeProductsArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                               <Link to={`/products`}>Products</Link>
                            </li>

                            <li onClick={changeProductsArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                                <Link to={`/about`}>About</Link>
                            </li>

                            <li onClick={changeProductsArrow} className='font-medium text-[#385584] cursor-pointer hover:bg-primary/20 p-2 px-4 rounded-xl transition duration-500'>
                                <Link to={'/contact'}>Contact</Link> <span></span>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-row-reverse justify-between items-center gap-5'>
                        <div onClick={handleBurgerMenu} className='laptop:hidden tablet:w-12 my-auto laptop:-mr-32 text-right cursor-pointer'>
                            {isBurgerMenu ? <IoMdClose size={35} color={'#385584'} className=''/> : <IoMdMenu size={35} color={'#385584'} className=''/>}
                        </div>

                        <div className='laptop:hidden'>
                            <button className=' bg-[#385584] text-white font-medium px-2 py-2 text-xs tablet:text-lg rounded-full whitespace-nowrap'>Onln Coin Live</button>
                        </div>

                        <div className='hidden laptop:block'>
                            <button className=' bg-[#385584] text-white font-medium px-6 py-2 text-sm rounded-full whitespace-nowrap'>Onln Coin Live</button>
                        </div>
                    </div>
                    
                </nav>
                
                <AnimatePresence>
                    {/* Service Cards */}
                    {servicesArrow && 
                        <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} exit={{y: "-100vh", opacity: 0}} transition={{ type: "spring", stiffness: 100, damping: 20 }} className='serviceCard absolute z-[999] w-full hidden laptop:block overflow-hidden'>
                            <div className='flex gap-5 justify-between h-auto w-full p-20 bg-primary overflow-hidden z-[999]'>
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }} className='serviceCards w-1/3 px-12 py-7 border border-[#cfcfcf] rounded-3xl text-3xl z-[999]'>
                                    <Link onClick={changeServicesArrow} to={`/services/fintech`}>
                                        <h1 className='text-left font-medium'>Fintech</h1>
                                        <Lottie animationData={fintechAnimation} loop={true} />
                                    </Link>
                                </motion.div>
                                
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }} className='serviceCards w-1/3 px-12 py-7 border border-[#cfcfcf] rounded-3xl text-3xl z-[999]'>
                                    <Link onClick={changeServicesArrow} to={`/services/webdevelopment`}>
                                        <h1 className='text-left font-medium'>Web Development</h1>
                                        <Lottie animationData={webdevAnimation} loop={true} />
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }} className='serviceCards w-1/3 px-12 py-7 border border-[#cfcfcf] rounded-3xl text-3xl z-[999]'>
                                    <Link onClick={changeServicesArrow} to={`/services/cybersecurity`}>
                                        <h1 className='text-left font-medium'>Cyber Security</h1>
                                        <Lottie animationData={cyberAnimation} loop={true} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>  

                <AnimatePresence>
                    {/* Burger Menu */}
                    {isBurgerMenu &&
                        <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} exit={{y: "-100vh", opacity: 0}} transition={{ type: "spring", stiffness: 100, damping: 20 }} className='serviceCardPhone laptop:hidden bg-primary absolute z-[999] w-full h-auto overflow-y-visible pb-32'>
                            <div className='h-auto w-full mx-auto p-5 bg-primary overflow-hidden grid gap-5 justify-center grid-cols-2 tablet:grid-cols-3'>
                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }} className='serviceCards p-4 w-auto border border-[#cfcfcf] rounded-lg text-center text-2xl cursor-pointer z-[999]'>
                                    <Link to={`/services/fintech`} onClick={handleBurgerMenu}>
                                        <h1 className='text-left'>Fintech</h1>
                                        <Lottie animationData={fintechAnimation} loop={true} />
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }} className='serviceCards p-4 w-auto border border-[#cfcfcf] rounded-lg text-center text-2xl cursor-pointer z-[999]'>
                                    <Link to={`/services/webdevelopment`} onClick={handleBurgerMenu}>
                                        <h1 className='text-justify'>Web Development</h1>
                                        <Lottie animationData={webdevAnimation} loop={true} />
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ y: "-15vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15vh", opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }} className='serviceCards p-4 w-auto border border-[#cfcfcf] rounded-lg text-center text-2xl cursor-pointer z-[999]'>
                                    <Link to={`/services/cybersecurity`} onClick={handleBurgerMenu}>
                                        <h1 className='text-justify'>Cyber Security</h1>
                                        <Lottie animationData={cyberAnimation} loop={true} />
                                    </Link>
                                </motion.div>
                            </div>

                            <div className='p-7 pt-0 laptop:hidden'>
                                <div className=' text-xl'>
                                    <motion.p className='mobileNaviItems mb-2 ml-2 cursor-pointer' initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }}><Link to={`/`} onClick={handleBurgerMenu}>Home</Link></motion.p>
                                    <motion.div className='mobileNavItemsBottom h-[1px] bg-black' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2 }}/>

                                    <motion.p className='mobileNaviItems mb-2 ml-2 cursor-pointer' initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }}><Link to={`/products`} onClick={handleBurgerMenu}>Products</Link></motion.p>
                                    <motion.div className='mobileNavItemsBottom h-[1px] bg-black' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2 }}/>

                                    <motion.p className='mobileNaviItems mb-2 ml-2 cursor-pointer' initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.3 }}><Link to={`/about`} onClick={handleBurgerMenu}>About</Link></motion.p>
                                    <motion.div className='mobileNavItemsBottom h-[1px] bg-black' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2 }}/>

                                    <motion.p className='mobileNaviItems mb-2 ml-2 cursor-pointer' initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }}><Link to={`/contact`} onClick={handleBurgerMenu}>Contact</Link></motion.p>
                                    <motion.div className='mobileNavItemsBottom h-[1px] bg-black' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4 }}/>
                                </div>
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