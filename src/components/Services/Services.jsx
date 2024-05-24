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
        <div className='relative z-10 mt-32 text-center pb-36 overflow-y-clip'>
            <div ref={svgRef} className='absolute w-full'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    style={{ width: '100%', height: '100%' }}
                >
                    <polygon points="0,100 100,0 100,100" fill="lightblue" opacity={0.5}/>
                    <line x1="100" y1="0" />
                </svg>
            </div>


            <div ref={container} className='mt-32 '>
                <div className='sticky top-20 tablet:top-28 laptop:top-56'>
                    <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold laptop:mr-2'>How We Do </h1></div>
                    <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold '>What We Do </h1></div>
                </div>

                <div className='servicecontainer mt-20 '>
                    <div className='grid grid-cols-1 mx-6'>
                    {
                        whatwedo.map((about, index) => (
                            <AboutServicesCard 
                                {...about}
                                key={index} 
                                i={index} 
                                progress={scrollYProgress} 
                                range={[index * 0.25, 1]}
                                targetScale={1 - (whatwedo.length - index) * 0.05}
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