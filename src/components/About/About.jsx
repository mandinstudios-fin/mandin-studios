import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const About = () => {
    const divRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const div = divRef.current;
        const underlineObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(div, { width: '0%' }, { width: '100%', duration: 1, yoyo: true });
              underlineObserver.unobserve(entry.target);
            }
          });
        });

        underlineObserver.observe(div);
      
        return () => {
          underlineObserver.disconnect();

        };
    }, []);

  return (
    <div id='about'>
        <div className='mt-14 laptop:mt-32'>
            <div className='h-12 w-full bg-primary'></div>
        </div>

        <div className='bg-[#cfcfcf1e]'>
            <div className='mx-auto w-full flex flex-col laptop:flex-row'>
                <div className='ml-5 mt-8 laptop:w-1/2 mb-12 laptop:mb-0 desktop:mb-0'>
                    <div className='laptop:ml-40 laptop:mr-32'>
                        <div className='inline-block'>
                            <div><h1 className='text-4xl laptop:text-7xl font-bold mb-7'>About MD Studios</h1></div>
                            <div className='underlinediv w-auto h-1 bg-primary' ref={divRef}></div>
                        </div>

                        <div className='mt-7 ml-0 mx-4 laptop:mx-0'>
                            <p className='tracking-wide text-lg text-justify'>
                                MD Studios, a visionary creative studio, brings to life digital (and enchanting) concepts, products, and experiences. The name "MDS" signifies our commitment to elevating the standards of MDs – making them better for the individuals and organizations we partner with, enhancing user experiences, contributing to our well-being, and fostering a positive impact on our planet. While it may seem like a lofty expectation for design and technology, rest assured, we've consulted with them, and they're fully on board with the challenge.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='laptop:w-1/2 w-full h-full'>
                    <img src={'https://mdstudios.s3.ap-south-1.amazonaws.com/girl-suit-stands-near-microphone-says.png'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About