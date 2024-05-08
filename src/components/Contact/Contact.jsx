import React, { useEffect } from 'react'
import Form from './Form'
import { gsap } from 'gsap';
import SubFoooter from './SubFoooter';

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
      <div className='mx-8 tablet:mx-36 laptop:mx-56 bg-white pb-32'>
        <div className=' '>
            <div>
              <div className='contactheading1'><h1 className='text-[#385584] font-semibold text-2xl laptop:text-7xl tracking-widest pl-8 laptop:pl-28 laptop:mb-3'>Let's develop your</h1></div>
              <div className='contactheading2'><h1 className='text-[#A2B3D4] font-semibold text-2xl laptop:text-7xl tracking-widest'>business intelligence</h1></div>
            </div>

            <Form />
            <SubFoooter />
        </div>
      </div>
        
    </>
  )
}

export default Contact