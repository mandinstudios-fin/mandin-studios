import React, { useEffect } from 'react'
import Form from './Form'
import { gsap } from 'gsap';
import SubFoooter from './SubFoooter';

const Contact = () => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    scrollToTop();
    
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
      <div className='contactbody mx-8 tablet:mx-16 laptop:mx-28 bg-white pb-32 overflow-hidden mt-8'>
        <div className='mt-4 '>
            <div>
              <div className='contactheading1'><h1 className='text-[#385584] font-semibold text-2xl tablet:text-5xl laptop:text-7xl tracking-widest pl-6 laptop:pl-36 laptop:mb-3'>Let's develop your</h1></div>
              <div className='contactheading2'><h1 className='text-[#A2B3D4] font-semibold text-2xl tablet:text-5xl laptop:text-7xl tracking-widest whitespace-nowrap'>business intelligence</h1></div>
            </div>

            <Form />
            <SubFoooter />
        </div>
      </div>
        
    </>
  )
}

export default Contact