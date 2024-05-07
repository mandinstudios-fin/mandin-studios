import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap';

const Form = () => {
    const location = useLocation();
    console.log(location)
    if(location.pathname == '/contact') {
        document.querySelector('html').style.backgroundColor = "white"
    }

    useEffect(() => {
        gsap.fromTo('.contact', {
            y: '20vh', 
            opacity: 0
          }, {
            y: '0%', 
            opacity: 1,
            duration: 1.5, 
            ease: 'power3.out', 
        });

        gsap.fromTo('.intro', {
            y: '20vh', 
            opacity: 0
          }, {
            y: '0%', 
            opacity: 1,
            delay: 0.1,
            duration: 1.5, 
            ease: 'power3.out', 
        });

        gsap.fromTo('.form', {
            y: '20vh', 
            opacity: 0
          }, {
            y: '0%', 
            opacity: 1,
            delay: 0.2,
            duration: 1.5, 
            ease: 'power3.out', 
        });



        
    },[])
    

  return (
    <div className='text-[#385584] pb-12'>
        <div className='contact mt-12'>
            <div><p className='font-semibold'>Contact Form</p></div>
        </div>

        <div>
            <div className='intro'>
                <div className='laptop:text-left laptop:mt-0 mt-4'>
                    <p>Every good partnership starts with coffee.</p>
                    <p>Now let's make an appointment</p>
                </div>

                <div className='laptop:text-right laptop:mt-0 mt-4'>
                    <div className='inline-block laptop:text-right'>
                        <p className='laptop:text-right font-medium'>info@mandinstudios.com</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='form'>
            <div className='laptop:flex mt-2'>
                <div className='laptop:w-1/2 laptop:mr-4'>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg ' placeholder='Name*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg ' placeholder='Email*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg' placeholder='Message*'/>
                    </div>
                </div>

                <div className='laptop:w-1/2 laptop:ml-4'>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg ' placeholder='Last Name*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg ' placeholder='Phone No.*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[98%] laptop:ml-4 bg-transparent focus:outline-none text-xl laptop:text-lg ' placeholder={`I'm lookig for help with*`}/>
                    </div>
                </div>
            </div>

            <div className='laptop:text-right text-center'>
                <div className='mt-8 bg-[#385584] rounded-full inline-block'>
                    <button className='text-xl p-2 px-7 text-white'>Send</button>
                </div>
            </div>
            
        </div>
            
    </div>
  )
}

export default Form