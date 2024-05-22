import React, { useEffect } from 'react'
import AboutServicesCard from './AboutServicesCard'
import { whatwedo } from '../../assets/index'
import { gsap } from 'gsap';
import { ScrollTrigger }  from 'gsap/ScrollTrigger';
import bgimage from '../../assets/images/bgsvg.svg'


const About = () => {
  

  return (
    <>
        <div className='relative z-10 mt-32 tablet:pt-52 text-center'>
            <div className='absolute w-[100%] h-[100%]'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    style={{ 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        zIndex: '-1' 
                    }}
                >
                    <polygon points="0,100 100,0 100,100" fill="lightblue"/>
                    <line x1="100" y1="0" x2="0" y2="100"/>
                </svg>
            </div>

            <div>
                <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold laptop:mr-2'>How We Do </h1></div>
                <div className='inline-block'><h1 className='text-4xl md:text-6xl font-bold '>What We Do </h1></div>
            </div>

            <div className='servicecontainer mt-20 '>
                <div className='grid grid-cols-1 mx-6'>
                    {
                        whatwedo.map((about, index) => (<AboutServicesCard about={about} key={index}/>))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default About