import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap';

const Form = () => {
    const location = useLocation();
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
        <div className='contact py-8'>
            <div><p className='font-semibold laptop:text-2xl'>Contact Form</p></div>
        </div>

        <div>
            <div className='intro'>
                <div className='laptop:text-left laptop:text-2xl laptop:mt-0 mt-4'>
                    <p>Every good partnership starts with coffee.</p>
                    <p>Now let's make an appointment</p>
                </div>

                <div className='laptop:text-right laptop:mt-0 mt-4'>
                    <div className='inline-block laptop:text-right'>
                        <p className='laptop:text-right font-medium laptop:text-2xl'><Link to={'mailto:info@mandinstudios.com'}>info@mandinstudios.com</Link></p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='form'>
            <div className='laptop:flex mt-2'>
                <div className='laptop:w-1/2 laptop:mr-2'>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none ' placeholder='Name*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none ' placeholder='Email*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none' placeholder='Message*'/>
                    </div>
                </div>

                <div className='laptop:w-1/2 laptop:ml-2'>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none ' placeholder='Last Name*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none ' placeholder='Phone No.*'/>
                    </div>
                    <div className='border-b border-[#385584] py-7'>
                        <input type='text' className='w-[97%] text:md tablet:text-lg laptop:text-xl laptop:ml-4 bg-transparent focus:outline-none ' placeholder={`I'm looking for help with*`}/>
                    </div>
                </div>
            </div>

            <div className='laptop:text-right text-center'>
                <div className='mt-8 bg-[#385584] rounded-2xl inline-block'>
                    <button className='text-xl p-3 px-10 text-white'>Send</button>
                </div>
            </div>
            
        </div>
            
    </div>
  )
}

export default Form