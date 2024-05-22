import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import banner from '../../assets/images/banner-02.svg'
import { useGSAP } from '@gsap/react';

const Hero = () => {

    useGSAP(() => {
        const taglineAmination = gsap.timeline();
        const tagsAnimation = gsap.timeline();

        taglineAmination.fromTo('.heading h1', {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1.4,
            stagger: 0.5,
            yoyo: true
        })

        tagsAnimation.fromTo('h3', {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 1.2,
            stagger: 0.5
        })

    })

  return (
    <>
        <div className='flex flex-col laptop:flex-row justify-between items-center laptop:mx-24 laptop:mr-36'>
            <div className="max-w-[50%]">
                <div>
                    <h3>We make Digital and Simple</h3>
                </div>

                <div className='text-left font-extrabold'>
                    <div className='heading'>
                        <h1 className='text-5xl tablet:text-7xl laptop:text-8xl pl-0 tracking-wide'>Branding.</h1>
                    </div>
                    <div className='heading'>
                        <h1 className='text-5xl tablet:text-7xl laptop:text-8xl pl-0 tracking-wide'>Products.</h1>
                    </div>
                    <div className='heading'>
                        <h1 className='text-5xl tablet:text-7xl laptop:text-8xl pl-0 tracking-wide'>Experiences.</h1>
                    </div>
                </div>

                <div>
                    <h3>Let's work together</h3>
                </div>
            </div>

            <div className='max-w-[50%]'>
                <img src={banner} className='hover:scale-110 transition-all duration-700'/>
            </div>
        </div>
    </>
  )
}

export default Hero