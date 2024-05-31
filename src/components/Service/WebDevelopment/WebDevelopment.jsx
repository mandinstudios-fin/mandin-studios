import React, { useEffect } from 'react'
import Lottie from 'lottie-react';
import { ServicesMainPages } from '../../../assets/index'
import gsap from 'gsap';
import { MdOutlineArrowOutward } from "react-icons/md";

const WebDevelopment = () => {
  const { title, description, animation } = ServicesMainPages["webdevelopment"]

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})

    gsap.fromTo(".firstRef", {
      y: "50%",
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.5
    })
  })
  return (
    <div>
      <div className='text-center mx-7 laptop:mx-20 pb-32'>

        <div className='grid grid-cols-1 laptop:grid-cols-2 items-center mt-4 laptop:mt-0'>
          <div className='laptop:w-2/3'>
            <h1 className='firstRef text-left text-4xl laptop:text-5xl font-bold'>{title}</h1>
            <p className='firstRef text-justify mt-8 laptop:mt-12'>{description}</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='firstRef tablet:w-[70%] laptop:w-[50%] text-center mt-12'>
                <Lottie animationData={animation} loop={true}/>
            </div>
          </div>
        </div>

        <div className='firstRef mt-4'>
          <button className='bg-primary p-3 px-8 rounded-full text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
        </div>

        <div className='firstRef mt-12'>
          <h1 className='firstRef text-left text-3xl laptop:text-5xl font-medium'>Elevating your <span className='text-primary'>online presence</span>,</h1>
          <h1 className='firstRef text-left text-3xl laptop:text-5xl font-medium'>One pixel at a time</h1>
        </div>

        <div className='mt-12 grid tablet:grid-cols-2 laptop:grid-cols-3 gap-7 laptop:gap-20'>
          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            <p className='mb-4 text-secondary text-lg font-medium text-center'>Web Application Development</p>
            <p>Create powerful, scalable, and secure web applications tailored to your business needs.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            <p className='mb-4 text-secondary text-lg font-medium text-center'>Responsive Design</p>
            <p>Ensure your applications look and perform flawlessly across all devices and screen sizes.</p>
          </div>

          <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
            <p className='mb-4 text-secondary text-lg font-medium text-center'>Custom Web Solutions</p>
            <p>Develop bespoke web solutions that align perfectly with your business goals and user expectations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment