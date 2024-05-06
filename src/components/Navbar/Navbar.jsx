import React, {useState} from 'react'
import mdlogo from '../../assets/images/logo-01.svg'
import { IoChevronDownSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { delay, motion } from 'framer-motion'

const Navbar = () => {
    const [isArrowUp, setIsArrowUp] = useState(false);

    const changeArrow = () => {
        setIsArrowUp(prev => !prev)
    }

    const containerVariants = {
        hidden: {
            y: '-100vh'
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.9,
                ease: "easeInOut",
                staggerChildren: 0.67, 
          }
        },
        exit: {
            y: '-100vh',
            transition: {
                duration: 0.7
            }
        }
    };
      
    // Variants for individual children
    const childVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
    };

  return (
    <>
        <div className='relative'>
            <nav className='flex justify-around'>
                <div className=''>
                    <img src={mdlogo} className='h-[200px] w-auto -mt-10'/>    
                </div>
                
                <div>
                    <ul className='hidden laptop:flex md:justify-around mt-10'>
                        <li onClick={changeArrow}>
                            <p className='cursor-pointer inline mr-1'>services</p>
                            <motion.span animate={{ rotate: isArrowUp ? 180 : 0 }} transition={{duration: 0.3}} className='inline-block'>
                                <IoChevronDownSharp/>
                            </motion.span>

                            {isArrowUp &&
                                <motion.div className='absolute top-28 left-0 w-full' initial="hidden" animate="visible" variants={containerVariants}>
                                    <motion.div className='w-full h-[500px] bg-primary text-center'>
                                    <motion.div>
                                        <motion.div>
                                        <motion.div className='flex gap-4 py-[28px] justify-center'>
                                            <motion.div variants={childVariants} className='h-[450px] w-[380px] border border-[#3F3F3F] rounded-2xl flex justify-center items-center hover:y-2'>
                                            <p className='text-5xl font-bold'>FinTech</p>
                                            </motion.div>
                                            <motion.div variants={childVariants} className='h-[450px] w-[380px] border border-[#3F3F3F] rounded-2xl flex justify-center items-center hover:y-2'>
                                            <p className='text-5xl font-bold'>Web Development</p>
                                            </motion.div>
                                            <motion.div variants={childVariants} className='h-[450px] w-[380px] border border-[#3F3F3F] rounded-2xl flex justify-center items-center hover:y-2'>
                                            <p className='text-5xl font-bold'>Cyber Security</p>
                                            </motion.div>
                                        </motion.div>
                                        </motion.div>
                                    </motion.div>
                                    </motion.div>
                              </motion.div>
                            }
                        </li>
                    </ul>
                    
                    <div className='laptop:hidden mt-12 mx-auto laptop:-mr-32'>
                        <RxHamburgerMenu size={30}/>
                    </div>
                </div>

                <div>
                    <button className='hidden laptop:block bg-[#A2B3D4] p-3 py-1 rounded-full mt-10'>Onln Coin Live</button>
                </div>

            </nav>
        </div>
    </>
  )
}

export default Navbar