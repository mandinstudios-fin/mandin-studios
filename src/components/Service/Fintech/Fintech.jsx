import React, { useEffect } from 'react'
import Lottie from 'lottie-react';
import { ServicesMainPages } from '../../../assets/index'
import gsap from 'gsap';
import { MdOutlineArrowOutward } from "react-icons/md";
import fintechAnimationMainPage from '../../../assets/images/fintechAnimationMainPage.json'

const Fintech = () => {
    const { title, animation, description } = ServicesMainPages["fintech"]

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

        <div className=' grid grid-cols-1 laptop:grid-cols-2 items-center mt-4 laptop:mt-0'>
            <div className='laptop:w-2/3'>
            <h1 className='firstRef text-left text-4xl laptop:text-5xl font-bold'>{title}</h1>
            <p className='firstRef text-justify mt-8 laptop:mt-12'>{description}</p>
            </div>
            <div className='firstRef laptop:w-[50%] text-center mt-12'>
                <Lottie animationData={animation} loop={true}/>
            </div>
        </div>

        <div className='firstRef mt-16'>
            <button className='bg-primary p-3 px-8 rounded-full text-lg font-medium hover:scale-105 transition duration-500'><span>Let's connect</span> <span><MdOutlineArrowOutward className='inline'/></span></button>
        </div>

        <div className='mt-32'>
            <h1 className='firstRef text-left text-5xl font-medium'>Empowering Finance</h1>
            <h1 className='firstRef text-left text-5xl font-medium'><span className='text-primary'>Transforming</span> Future</h1>
        </div>

        <div className=' mt-12 grid laptop:grid-cols-3 gap-7 laptop:gap-20'>
            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-lg font-medium text-center'>Banking Solutions Web Applications</p>
                <p>Build secure and user-friendly web applications for traditional and digital banking services.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-lg font-medium text-center'>Digital Currency Platforms</p>
                <p>Develop platforms for trading, managing, and utilizing digital currencies efficiently.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-lg font-medium text-center'>Cryptocurrency Development</p>
                <p>Create custom cryptocurrency solutions, including wallets, exchanges, and blockchain integration.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-lg font-medium text-center'>Neo Banking Solutions</p>
                <p>Innovate with modern, digital-first banking experiences that redefine customer interactions.</p>
            </div>

            <div className='firstRef text-justify border rounded-2xl shadow-2xl p-7 laptop:p-12'>
                <p className='mb-4 text-secondary text-lg font-medium text-center'>Payment Gateway Integration</p>
                <p>Implement seamless and secure payment gateway solutions to streamline transactions.</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Fintech