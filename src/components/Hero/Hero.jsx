import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import banner from '../../assets/images/banner-02.svg'

const Hero = () => {
    useEffect(() => {
        const taglineAmination = gsap.timeline();
        const topAnimation = gsap.timeline();
        const bottomAnimation = gsap.timeline();

        taglineAmination.fromTo('.heading h1', {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1.2,
            stagger: 0.5,
            yoyo: true
        })

        topAnimation.fromTo('h3', {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 1
        })

        bottomAnimation.fromTo('h3', {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 1
        })
    })

  return (
    <>
        <div className='flex flex-col lg:flex-row justify-center items-center h-[540px]'>
            <div>
                <div>
                    <h3>We make Digital and Simple</h3>
                </div>

                <div className='text-left font-extrabold'>
                    <div className='heading'>
                        <h1 className='text-5xl md:text-8xl pl-0 tracking-wide'>Branding.</h1>
                    </div>
                    <div className='heading'>
                        <h1 className='text-5xl md:text-8xl pl-0 tracking-wide'>Products.</h1>
                    </div>
                    <div className='heading'>
                        <h1 className='text-5xl md:text-8xl pl-0 tracking-wide'>Experiences.</h1>
                    </div>
                </div>

                <div>
                    <h3>Let's work together</h3>
                </div>
            </div>

            <div className='w-[400px] md:w-[750px] lg:w-[700px] pt-12 lg:pt-0'>
                <img src={banner} className='hover:scale-105 transition-all duration-700'/>
            </div>
        </div>
    </>
  )
}

export default Hero