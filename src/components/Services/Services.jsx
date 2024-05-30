import React, { useEffect, useRef } from 'react'
import AboutServicesCard from './AboutServicesCard'
import { whatwedo } from '../../assets/index'
import bgimage from '../../assets/images/bgsvg.svg'
import { useScroll } from 'framer-motion'

const About = () => {
    const container = useRef(null);
    const svgRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ['start start', 'end end']
    })

  return (
    <>
        <div className='z-10 mt-12 tablet:mt-72 text-center pb-16 overflow-y-clip'>
            <div ref={svgRef} className='absolute w-full'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                    className='block w-full h-auto'
                >
                    <polygon points="0,100 100,0 100,100" fill="lightblue" opacity={0.5}/>
                    <line x1="100" y1="0" x2="100" y2="0" stroke="black" strokeWidth="1"/>
                </svg>
            </div>

            <div ref={container}>
                <div className='sticky top-20 tablet:top-56 laptop:top-40'>
                    <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold laptop:mr-2'>How We Do </h1></div>
                    <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold '>What We Do </h1></div>
                </div>

                <div className='servicecontainer mt-20'>
                    <div className='grid grid-cols-1 mx-6'>
                    {
                        whatwedo.map((about, index) => (
                            <AboutServicesCard 
                                {...about}
                                key={index} 
                                i={index}
                            />
                        ))
                    }
                    </div>
                </div>
            </div>

            
        </div>
    </>
  )
}

export default About