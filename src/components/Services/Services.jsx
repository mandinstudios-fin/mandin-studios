import React, { useEffect } from 'react'
import AboutServicesCard from './AboutServicesCard'
import { whatwedo } from '../../assets/index'
import { gsap } from 'gsap';
import { ScrollTrigger }  from 'gsap/ScrollTrigger';


const About = () => {
  

  return (
    <>
        <div className='mt-32 tablet:mt-52 text-center'>
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