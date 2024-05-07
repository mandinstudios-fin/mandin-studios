import React, { useEffect } from 'react'
import Form from './Form'
import { gsap } from 'gsap';

const Contact = () => {

  useEffect(() => {
    gsap.fromTo('.contactheading1', {
      x: '40%', 
      opacity: 0
    }, {
      x: '0%', 
      opacity: 1,
      duration: 2.5, 
      ease: 'power3.out', 
    });

    gsap.fromTo('.contactheading2', {
      x: '40%', 
      opacity: 0
    }, {
      x: '0%', 
      opacity: 1,
      duration: 2.5, 
      delay: 0.09,
      ease: 'power3.out', 
    });
  },[])
  

  return (
    <>
      <div className='bg-white pb-32'>
        <div className='mx-12 tablet:mx-36 laptop:mx-56 '>
            <div>
              <div className='contactheading1'><h1 className='text-[#385584] font-semibold text-2xl laptop:text-7xl tracking-widest pl-8 laptop:pl-28 laptop:mb-3'>Let's develop your</h1></div>
              <div className='contactheading2'><h1 className='text-[#A2B3D4] font-semibold text-2xl laptop:text-7xl tracking-widest'>business intelligence</h1></div>
            </div>

            <Form />

            <div>
              <div className='bg-[#f5f5f5] text-[#A2B3D4] text-xl tablet:text-2xl laptop:text-5xl tracking-wide'>
                <div className='text-center py-24'>
                  <div className=''><span>In order to make <span className='text-[#385584]'>good business</span></span></div>
                  <div className='mt-2'><span>decisions <span>at the </span>right time,</span></div>
                  <div className='mt-2'><span>we rely on the <span className='text-[#385584]'>right talent</span></span></div>

                  <div className='text-center pt-12'>
                    <button className='text-sm text-[#585584] border  border-[#585584] p-2 px-7 rounded-full hover:bg-[#585584] hover:text-[#f5f5f5] transition duration-700'>Join our team</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        
    </>
  )
}

export default Contact